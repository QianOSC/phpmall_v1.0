<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\bargain\events;


use app\plugins\bargain\models\BargainOrder;
use app\plugins\bargain\models\BargainUserOrder;
use yii\base\Event;

/**
 * @property BargainUserOrder[] $bargainUserOrderAll
 * @property BargainOrder $bargainOrder
 */
class BargainUserOrderEvent extends Event
{
    public $bargainUserOrderAll;
    public $bargainOrder;
}
