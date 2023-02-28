<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\bonus\events;

use app\plugins\bonus\models\BonusCaptain;
use yii\base\Event;

class MemberEvent extends Event
{
    /** @var BonusCaptain $captain */
    public $captain;
}