<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\handlers;


use app\events\OrderEvent;
use app\forms\common\order\CommonOrder;
use app\models\Order;

class OrderChangePriceHandler extends HandlerBase
{
    public function register()
    {
        \Yii::$app->on(Order::EVENT_CHANGE_PRICE, function ($event) {
            /** @var OrderEvent $event */
            $commonOrder = CommonOrder::getCommonOrder($event->order->sign);
            $orderHandler = $commonOrder->getOrderHandler();
            $handler = $orderHandler->orderChangePriceHandlerClass;
            $handler->orderConfig = $commonOrder->getOrderConfig();
            $handler->event = $event;
            $handler->setMchId()->setMall()->handle();
        });
    }
}
