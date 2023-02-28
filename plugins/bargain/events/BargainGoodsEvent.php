<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\bargain\events;


use app\plugins\bargain\models\BargainGoods;
use yii\base\Event;

/**
 * @property BargainGoods $bargainGoods
 */
class BargainGoodsEvent extends Event
{
    public $bargainGoods;
}
