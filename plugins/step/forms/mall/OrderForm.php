<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\step\forms\mall;

use app\forms\mall\order\BaseOrderForm;
use app\plugins\step\models\StepOrder;

class OrderForm extends BaseOrderForm
{
    protected function getExtra($order)
    {
        $order = StepOrder::findOne(['order_id' => $order['id']]);
        return [
            'currency' => $order->currency ?? ''
        ];
    }
}
