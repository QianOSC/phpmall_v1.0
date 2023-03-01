<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\region\events;

use app\plugins\region\models\RegionUser;
use yii\base\Event;

class RegionEvent extends Event
{
    /** @var RegionUser $region */
    public $region;

    //原来的等级
    public $originLevel;
}
