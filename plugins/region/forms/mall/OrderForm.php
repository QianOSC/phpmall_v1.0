<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\region\forms\mall;


use app\forms\mall\order\BaseOrderForm;
use app\models\BaseQuery\BaseActiveQuery;
use app\plugins\region\forms\common\CommonForm;
use app\plugins\region\models\RegionOrder;
use app\plugins\region\models\RegionSetting;

class OrderForm extends BaseOrderForm
{
    public $orderModel = 'app\plugins\region\models\Order';

    public $bonus_status;

    public static $setting;

    protected function where()
    {
        //字段值转移，偏移查询量
        $this->bonus_status = $this->status;
        $this->status = -1;

        return parent::where(); // TODO: Change the autogenerated stub
    }

    public function rules()
    {
        $arr = [
            [['bonus_status',], 'integer'],
            [['bonus_status',], 'default', 'value' => -1],
        ];
        return array_merge(parent::rules(), $arr);
    }

    /**
     * @param BaseActiveQuery $query
     * @return mixed
     */
    protected function getQuery($query)
    {
        $query->rightJoin(['ro' => RegionOrder::tableName()], 'ro.order_id = o.id')
            ->with(['regionOrder']);
        return $query;
    }

    /**
     * @param $order
     * @return array
     * @throws \Exception
     */
    protected function getExtra($order)
    {
        if (empty(self::$setting)) {
            self::$setting = RegionSetting::getList(\Yii::$app->mall->id);
        }
        //分红比例，分红金额
        $order['regionOrder']['bonus_rate'] = $order['regionOrder']['bonus_rate'] > 0 ? $order['regionOrder']['bonus_rate'] : self::$setting['region_rate'];
        $order['regionOrder']['bonus_price'] = bcmul(
            $order['regionOrder']['total_pay_price'],
            $order['regionOrder']['bonus_rate'] / 100,
            2
        );
        //分红详情
//        CommonForm::getAddressId($order['regionOrder']);//取得地址ID//分红池表已存入地址ID
        CommonForm::getBonusData($order['regionOrder']);//分红数据
        return $order['regionOrder'];
    }

    /**
     * @param BaseActiveQuery $query
     * @return mixed
     */
    protected function getExtraWhere($query)
    {
        $query = $this->getQuery($query);
        if ($this->bonus_status > 0) {
            $query->andWhere(['ro.is_bonus' => $this->bonus_status == 1 ? 1 : 0]);
        }
        return parent::getExtraWhere($query); // TODO: Change the autogenerated stub
    }
}
