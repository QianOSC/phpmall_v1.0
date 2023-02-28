<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\events;


use yii\base\Event;

class GoodsEvent extends Event
{
    public $goods;
    public $diffAttrIds;

    public $isVipCardGoods;
}
