<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\vip_card\handlers;

use yii\base\BaseObject;

class HandlerRegister extends BaseObject
{
    public function getHandlers()
    {
        return [
            GoodsEditHandler::class,
            GoodsDeleteHandler::class,
            OrderCreatedHandler::class,
        ];
    }
}
