<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\integral_mall\models;


class Order extends \app\models\Order
{
    public function getIntegralOrder()
    {
        return $this->hasOne(IntegralMallOrders::className(), ['order_id' => 'id']);
    }
}
