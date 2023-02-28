<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\bonus\handlers;

use app\forms\common\template\tplmsg\ShareAudiTemplate;
use app\handlers\HandlerBase;
use app\plugins\bonus\events\CaptainEvent;
use app\plugins\bonus\models\BonusCaptain;

class RemoveCaptainHandler extends HandlerBase
{
    public function register()
    {
        \Yii::$app->on(BonusCaptain::EVENT_REMOVE, function ($event) {
            /**
             * @var CaptainEvent $event
             */

        });
    }
}