<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\pintuan\models;


use app\models\OrderDetail;

/**
 * @property OrderDetail[] $orderDetail
 * @property PintuanOrderRelation $orderRelation
 */

class Order extends \app\models\Order
{
    public function getOrderRelation()
    {
        return $this->hasOne(PintuanOrderRelation::className(), ['order_id' => 'id']);
    }

    public function getOrderDetail()
    {
        return $this->hasMany(OrderDetail::className(), ['order_id' => 'id']);
    }
}
