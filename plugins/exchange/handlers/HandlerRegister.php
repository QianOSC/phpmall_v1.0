<?php

/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\exchange\handlers;

use yii\base\BaseObject;

class HandlerRegister extends BaseObject
{
    public function getHandlers()
    {
        return [
            OrderCanceledHandler::class,
            OrderRefundConfirmedHandler::class,
            OrderCreatedHandler::class,
            OrderPayedHandler::class
        ];
    }
}
