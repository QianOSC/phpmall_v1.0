<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\vip_card\models;


use app\models\OrderDetail;

/**
 * @property OrderDetail[] $orderDetail

 */

class Order extends \app\models\Order
{
    public function getOrder()
    {
        return $this->hasOne(VipCardOrder::className(), ['order_id' => 'id']);
    }

    public function getOrderDetail()
    {
        return $this->hasMany(OrderDetail::className(), ['order_id' => 'id']);
    }
}
