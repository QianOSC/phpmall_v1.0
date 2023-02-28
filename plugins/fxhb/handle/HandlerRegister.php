<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\plugins\fxhb\handle;


use yii\base\BaseObject;

class HandlerRegister extends BaseObject
{
    const FXHB_JOIN_ACTIVITY = 'fxhb_join_activity';
    public function getHandlers()
    {
        return [
            JoinActivityHandle::class
        ];
    }
}
