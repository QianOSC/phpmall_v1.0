<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\advance\events;

use app\plugins\advance\models\AdvanceGoods;
use yii\base\Event;

class GoodsEvent extends Event
{
    /** @var AdvanceGoods $advanceGoods */
    public $advanceGoods;
}