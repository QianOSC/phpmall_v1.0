<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\plugins\bargain\handlers;


use yii\base\BaseObject;

class HandlerRegister extends BaseObject
{
    const BARGAIN_TIMER = 'bargain_timer';
    const BARGAIN_USER_JOIN = 'bargain_user_join';
    public function getHandlers()
    {
        return [
            GoodsTimeHandler::class,
            BargainUserJoinHandler::class,
            OrderCreatedHandler::class,
            OrderCancelHandler::class,
        ];
    }
}
