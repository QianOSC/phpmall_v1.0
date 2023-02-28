<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\supplier;


use app\forms\mall\export\SupplierOrderExport;
use app\models\Goods;
use app\models\GoodsWarehouse;
use app\models\Mall;
use app\models\Model;
use app\models\Order;
use app\models\OrderDetail;
use app\models\PaymentOrderUnion;
use app\models\Store;
use app\models\Suppliers;
use app\models\User;
use yii\helpers\ArrayHelper;

/**
 * @property Mall $mall;
 * @property User $shareUser;
 */
class CommonSupplierOrder extends Model
{
    public $shareUser; // 分销商用户对象
    public $mall;
    public $userId; // 订单用户ID
    public $parentId; // 分销商ID

    public $page = 1;
    public $limit = 20;
    public $order_no;
    public $nickname;
    public $date_start;
    public $date_end;
    public $supplier;

    public $fields;
    public $flag;
    public $pagination;
    public $goods_name;
    public $platform;
    public $send_type = -1;

    public $keyword;
    public $keyword_1;

    /**
     * @param $status
     * @return array|\yii\db\ActiveRecord[]
     */
    public function getList($status = 0)
    {

        $query = OrderDetail::find()
            ->alias('d')
            ->leftjoin(['o' => Order::tableName()], 'd.order_id = o.`id`')
            ->innerJoin(['g' => Goods::tableName()], 'd.goods_id = g.`id`')
            ->innerJoin(['s' => Suppliers::tableName()], 's.id = g.supplier_id')

            ->keyword(\Yii::$app->user->identity->supplier_id != -1, ['g.supplier_id' => \Yii::$app->user->identity->supplier_id])
//            ->with(['order', 'goods', 'goods.supplier'])
//            ->select('d.id, d.order_id, d.goods_id')
//            ->where([
//                'order_id' => 43
//            ])
            ->andWhere(['!=', 'o.cancel_status', 1])
            ->andWhere(['o.mch_id' => \Yii::$app->user->identity->mch_id])
            ->keyword($this->supplier, ['like', 's.name', $this->supplier])
            ->keyword($status == 1, ['o.is_pay' => 0])
            ->keyword($status == 2, ['o.is_pay' => 1, 'o.is_sale' => 0])
            ->keyword($status == 3, ['o.is_sale' => 1])
            ->keyword($this->order_no, ['like', 'o.order_no', $this->order_no])
            ->keyword($this->userId, ['o.user_id' => $this->userId])
            ->keyword($this->date_start, ['>=', 'o.created_at', $this->date_start])
            ->keyword($this->date_end, ['<=', 'o.created_at', $this->date_end])
            ->keyword($this->sign, $this->getSignCondition())
        ;

        /*
        $query = $this->setKeywordWhere($query, $this->keyword, $this->keyword_1);

        if ($this->nickname) {
            $userId = User::find()->where(['like', 'nickname', $this->nickname])->select('id');
            $query->andWhere(['user_id' => $userId]);
        }

        if ($this->platform) {
            $userIds = UserInfo::find()->andWhere(['platform' => $this->platform])->select('user_id');
            $query->andWhere(['user_id' => $userIds]);
        }

        if ($this->send_type != -1) {
            $query->andWhere(['send_type' => $this->send_type]);
        }

        if ($this->goods_name) {
            $goodsWarehouse = GoodsWarehouse::find()->select('id')
                ->where(['like', 'name', $this->goods_name, 'mall_id' => $this->mall->id]);
            $goods = Goods::find()->select(['id', 'supplier_id'])
                ->where(['goods_warehouse_id' => $goodsWarehouse, 'mall_id' => $this->mall->id]);
            $orderDetail = OrderDetail::find()->select('order_id')
                ->where(['goods_id' => $goods]);
            $query->andWhere(['id' => $orderDetail]);
        }

        */
        if ($this->flag == "EXPORT") {
            $new_query = clone $query;
            $exp = new SupplierOrderExport();
            $exp->fieldsKeyList = $this->fields;
            $exp->page = $this->page;
            return $exp->export($new_query);
        }

        $sql = $query->createCommand()->getRawSql();
        \Yii::error('==================================sql: ' . $sql);
        $orderList = $query
            ->page($this->pagination, $this->limit, $this->page)
            ->orderBy(['created_at' => SORT_DESC])
//            ->asArray()
            ->all();
//        \Yii::error('==================================goods_id: ' . json_encode(ArrayHelper::toArray($orderList)));
        return $orderList;
    }

    public function setKeywordWhere($query, $keyword, $keyword_1)
    {
        if (!$keyword) {
            return $query;
        }

        switch ($keyword_1) {
            case 'mch_no':
                // 商户支付订单号
                /** @var PaymentOrderUnion $paymentOrderUnion */
                $paymentOrderUnion = PaymentOrderUnion::find()->where(['order_no' => $keyword])->with('paymentOrder')->one();
                $orderNos = [];
                if ($paymentOrderUnion) {
                    /** @var PaymentOrder $item */
                    foreach ($paymentOrderUnion->paymentOrder as $item) {
                        $orderNos[] = $item->order_no;
                    }
                }
                $query->andWhere(['order_no' => $orderNos]);
                break;
            case 'name':
                $query->andWhere(['like', 'name', $keyword]);
                break;
            case 'mobile':
                $query->andWhere(['like', 'mobile', $keyword]);
                break;
            case 'store_name':
                // 门店搜索
                $storeIds = Store::find()->where(['mall_id' => \Yii::$app->mall->id, 'is_delete' => 0])
                    ->andWhere(['like', 'name', $keyword])->select('id')->asArray()->all();
                $arr = [];
                foreach ($storeIds as $storeId) {
                    $arr[] = $storeId['id'];
                }
                $query->andWhere(['in', 'store_id', $arr]);
                break;
            case 'goods_no':
                $orderIds = OrderDetail::find()->andWhere(['like', 'goods_no', $keyword])->select('order_id');
                $query->andWhere(['id' => $orderIds]);
                break;
            case 'address':
                $query->andWhere(['like', 'address', $keyword]);
                break;
            default:
                # code...
                break;
        }

        return $query;
    }

    /**
     * @param Order[] $orderList
     * @return array
     * @throws \Exception
     */
    public function search($orderList)
    {
        $list = [];
        /* @var Order[] $orderList */
        foreach ($orderList as $item) {
            if(empty($item->goods->supplier_id) || $item->goods->supplier_id < 0)
                continue;

            $newItem = ArrayHelper::toArray($item->order);
            $newItem = array_merge($newItem, [
                'nickname' => $item->order->user->nickname,
                'avatar' => $item->order->user->userInfo->avatar,
                'status' => '',
                'first_price' => 0,
                'second_price' => 0,
                'third_price' => 0,
            ]);

            $newItem['id'] = $item->id;

            $goodsList[] = [
                'id' => $item->goods->id,
                'order_detail_id' => $item->id,
                'num' => $item->num,
                'name' => $item->goodsWarehouse->name,
                'cover_pic' => $item->goodsWarehouse->cover_pic,
                'attr_list' => $item->decodeGoodsInfo($item->goods_info)['attr_list'],
                'goods' => [
                    'goodsWarehouse' => [
                        'name' => $item->goodsWarehouse->name,
                        'cover_pic' => $item->goodsWarehouse->cover_pic
                    ],
                    'name' => $item->goodsWarehouse->name,
                    'cover_pic' => $item->goodsWarehouse->cover_pic,
                    'refund_status' => $item->refund_status == 1 ? 1 : 0
                ],
                'total_price' => $item->total_price,
                'total_original_price' => $item->total_original_price,
                'is_refund' => $item->is_refund,
                'refund_status_text' => $item->refundStatusText,
                'goods_info' => \Yii::$app->serializer->decode($item->goods_info),
                'supplier_id' => $item->goods->supplier_id,
                'supplier' => $item->goods->supplier->name
            ];
            $newItem['detail'] = $goodsList;
            unset($goodsList);

            $newItem['total_pay_price'] = $item->total_original_price;
            $newItem['total_original_price'] = $item->total_original_price;
            $newItem['platform'] = isset($item->order->user->userInfo->platform) ? $item->order->user->userInfo->platform : '';

            // 订单状态
            if ($item->order->is_pay == 0) {
                $newItem['status'] = '未付款';
                if ($item->order->cancel_status == 1) {
                    $newItem['status'] = '已取消';
                }
            } elseif ($item->order->is_pay == 1 && $item->order->is_sale == 0) {
                if ($item->order->cancel_status == 2) {
                    $newItem['status'] = '申请取消';
                }
                if ($item->order->cancel_status == 1) {
                    $newItem['status'] = '已取消';
                }
                $newItem['status'] = '已付款';
            } elseif ($item->order->is_sale == 1) {
                $newItem['status'] = '已完成';
            } else {
                $newItem['status'] = '未知错误';
            }
            $list[] = $newItem;
        }
        return $list;
    }

    public function getSignCondition()
    {
        if (!in_array($this->sign, ['all', 'mall', ''])) {
            $signCondition = ['sign' => $this->sign];
        } elseif ($this->sign == 'mch') {
            $signCondition = ['>', 'mch_id', 0];
        } elseif ($this->sign == 'mall') {
            $signCondition = ['sign' => ''];
        } else {
            $signCondition = [];
        }
        return $signCondition;
    }
}
