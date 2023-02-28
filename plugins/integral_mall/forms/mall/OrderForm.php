<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\integral_mall\forms\mall;


use app\forms\mall\order\BaseOrderForm;
use app\plugins\integral_mall\models\IntegralMallOrders;

class OrderForm extends BaseOrderForm
{
    protected function getExtra($order)
    {
        $order = IntegralMallOrders::findOne(['order_id' => $order['id']]);
        return [
            'integral_num' => $order->integral_num
        ];
    }
}
