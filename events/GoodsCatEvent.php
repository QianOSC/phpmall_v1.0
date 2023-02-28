<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\events;

use app\models\GoodsCats;
use yii\base\Event;

class GoodsCatEvent extends Event
{
    /** @var GoodsCats */
    public $cats;

    public $catsList;

    public $isVipCardCats;
}
