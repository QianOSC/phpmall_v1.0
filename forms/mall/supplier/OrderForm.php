<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\mall\supplier;


use app\core\response\ApiCode;
use app\forms\common\supplier\CommonSupplierOrder;
use app\forms\mall\export\SupplierOrderExport;
use app\models\Mall;
use app\models\Model;
use app\models\User;
use app\models\Suppliers;
use yii\base\BaseObject;
use yii\helpers\ArrayHelper;

/**
 * Class OrderForm
 * @package app\forms\mall\share
 * @property Mall $mall
 */
class OrderForm extends Model
{
    public $mall;
    public $user_id;
    public $order_no;
    public $nickname;
    public $page;
    public $limit;

    public $fields;
    public $goods_name;

    public $date_start;
    public $date_end;
    public $keyword;
    public $keyword_1;
    public $platform;
    public $status;
    public $send_type;
    public $parent_id;
    public $flag;
    public $supplier;

    public $name;
    public $mobile;
    public $store_name;
    public $goods_no;
    public $address;
    public $mch_no;

    public function rules()
    {
        return [
            [['page', 'limit', 'parent_id', 'user_id', 'send_type'], 'integer'],
            ['page', 'default', 'value' => 1],
            ['limit', 'default', 'value' => 20],
            [['order_no', 'nickname', 'date_start', 'date_end', 'status', 'goods_name'], 'trim'],
            [['order_no', 'nickname', 'date_start', 'date_end', 'flag', 'goods_name', 'platform', 'keyword', 'keyword_1'], 'string'],
            [['fields'], 'safe'],
        ];
    }

    public function search()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $form = new CommonSupplierOrder();
        $form->mall = \Yii::$app->mall;

        $form->userId = $this->user_id;
        $form->page = $this->page;
        $form->limit = $this->limit;
        $form->supplier = $this->supplier;
        $form->order_no = $this->order_no;
        $form->nickname = $this->nickname;
        $form->date_start = $this->date_start;
        $form->date_end = $this->date_end;
        $form->goods_name = $this->goods_name;
        $form->flag = $this->flag;
        $form->fields = $this->fields;
        $form->sign = $this->status;
        $form->platform = $this->platform;
        $form->send_type = $this->send_type;
        $form->keyword = $this->keyword;
        $form->keyword_1 = $this->keyword_1;
        $orderList = $form->getList();

        if ($this->flag == "EXPORT") {
            return $orderList;
        }

        $list = $form->search($orderList);
        $suppliers = [];
        foreach ($list as $item)
        {
            $s = $item['detail'][0]['supplier'];
            if (!in_array($s, $suppliers))
            {
                $suppliers[] = $s;
            }

        }
        $supplier = '';
        \Yii::error('suppliers_name::' . json_encode($suppliers));

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '',
            'data' => [
                'supplier' => count($suppliers) == 1? $suppliers[0]:'',
                'list' => $list,
                'pagination' => $form->pagination,
                'export_list' => (new SupplierOrderExport())->fieldsList(),
            ]
        ];
    }
}
