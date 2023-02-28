<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\bargain\handlers;


use app\handlers\HandlerBase;
use app\plugins\bargain\events\BargainGoodsEvent;
use app\plugins\bargain\jobs\BargainGoodsTimeJob;

class GoodsTimeHandler extends HandlerBase
{
    public function register()
    {
        \Yii::$app->on(HandlerRegister::BARGAIN_TIMER, function ($event) {
            /* @var BargainGoodsEvent $event */
            $time = strtotime($event->bargainGoods->end_time) - time();
            $time = $time < 0 ? 0 : $time;
            \Yii::$app->queue->delay($time)->push(new BargainGoodsTimeJob([
                'bargainGoods' => $event->bargainGoods
            ]));
        });
    }
}
