<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\stock\events;

use app\plugins\stock\models\StockUser;
use yii\base\Event;

class StockEvent extends Event
{
    /** @var StockUser $stock */
    public $stock;
}
