<?php

/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\stock\handlers;

use app\handlers\HandlerBase;
use app\models\User;
use app\plugins\stock\events\StockEvent;
use app\plugins\stock\forms\common\MsgService;
use app\plugins\stock\models\StockUser;

class BecomeStockHandler extends HandlerBase
{
    public function register()
    {
        \Yii::$app->on(StockUser::EVENT_BECOME, function ($event) {
            /**
             * @var StockEvent $event
             */
            $user = User::findOne([
                'id' => $event->stock->user_id,
                'mall_id' => $event->stock->mall_id,
                'is_delete' => 0
            ]);

            MsgService::sendTpl($user, $event);
            $mobile = $event->stock->stockInfo->phone ?? $user->mobile;
            MsgService::sendSms($mobile, 1);
        });
    }
}
