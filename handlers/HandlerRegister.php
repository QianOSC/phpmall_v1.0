<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\handlers;

use yii\base\BaseObject;

class HandlerRegister extends BaseObject
{
    const BECOME_SHARE = 'become_share';
    const CHANGE_SHARE_MEMBER = 'change_share_member'; // 用户变更上级事件

    public function getHandlers()
    {
        return [
            OrderCreatedHandler::class,
            OrderCanceledHandler::class,
            OrderPayedHandler::class,
            OrderSentHandler::class,
            OrderConfirmedHandler::class,
            OrderSalesHandler::class,
            OrderRefundConfirmedHandler::class,
            MyHandler::class,
            BecomeShareHandle::class,
            AppMessageTestHandler::class,
            AppBuyMessageHandler::class,
            GoodsEditHandler::class,
            GoodsDestroyHandler::class,
            ChangeShareMemberHandle::class,
            OrderChangePriceHandler::class,
            GoodsStatusHandler::class,
            UserLoginHandler::class,
        ];
    }
}
