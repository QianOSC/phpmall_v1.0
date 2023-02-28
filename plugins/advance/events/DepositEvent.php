<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\advance\events;

use app\plugins\advance\models\AdvanceOrder;
use yii\base\Event;

class DepositEvent extends Event
{
    /** @var AdvanceOrder $advanceOrder */
    public $advanceOrder;
}