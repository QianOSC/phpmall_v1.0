<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\events;


use app\models\User;
use yii\base\Event;

class UserEvent extends Event
{
    /** @var User $user */
    public $user;
}
