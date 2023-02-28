<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\fxhb\events;


use app\models\Mall;
use app\plugins\fxhb\models\FxhbUserActivity;
use yii\base\Event;

/**
 * @property FxhbUserActivity $userActivity
 * @property FxhbUserActivity $parentActivity
 * @property Mall $mall
 */
class JoinActivityEvent extends Event
{
    public $userActivity;
    public $parentActivity;
    public $mall;
}
