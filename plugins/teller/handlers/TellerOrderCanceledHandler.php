<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\teller\handlers;

use app\handlers\orderHandler\OrderCanceledHandlerClass;
use app\models\Order;
use app\models\PaymentOrder;
use app\models\PaymentOrderUnion;
use app\plugins\teller\forms\OrderQueryForm;

class TellerOrderCanceledHandler extends OrderCanceledHandlerClass
{
    public function handle()
    {
        $this->user = $this->event->order->user;
        $this->cancel();
    }
}
