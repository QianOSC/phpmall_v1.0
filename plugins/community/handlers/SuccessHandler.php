<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\handlers;


use app\events\OrderEvent;
use app\forms\common\order\CommonOrder;
use app\handlers\HandlerBase;

class SuccessHandler extends HandlerBase
{
    public function register()
    {
        \Yii::$app->on(HandlerRegister::COMMUNITY_SUCCESS, function ($event) {
            /** @var OrderEvent $event */
            \Yii::$app->setMchId($event->order->mch_id);
            $commonOrder = CommonOrder::getCommonOrder($event->order->sign);
            $handler = new SuccessHandlerClass();
            $handler->orderConfig = $commonOrder->getOrderConfig();
            $handler->event = $event;
            $handler->setMall()->handle();
        });
    }
}
