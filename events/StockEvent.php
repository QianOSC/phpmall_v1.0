<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\events;


use app\models\Goods;
use app\models\GoodsWarehouse;
use yii\base\Event;

/**
 * Class StockEvent
 * @package app\events
 * @property GoodsWarehouse $goodsWarehouse
 * @property Goods $goods
 */
class StockEvent extends Event
{
    public $goodsWarehouse;
    public $goods;
    public $oldStock;
    public $newStock;
}
