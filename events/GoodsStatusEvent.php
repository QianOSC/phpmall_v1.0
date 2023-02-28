<?php

/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\events;

use yii\base\Event;

class GoodsStatusEvent extends Event
{
    public $id;
    public $status_after;
}
