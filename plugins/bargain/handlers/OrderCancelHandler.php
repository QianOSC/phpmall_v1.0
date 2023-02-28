<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\bargain\handlers;


use app\events\OrderEvent;
use app\handlers\HandlerBase;
use app\models\Model;
use app\models\Order;
use app\plugins\bargain\forms\common\CommonBargainOrder;
use app\plugins\bargain\models\BargainOrder;

class OrderCancelHandler extends HandlerBase
{
    public function register()
    {
        \Yii::$app->on(Order::EVENT_CANCELED, function ($event) {
            /** @var OrderEvent $event */
            if ($event->order->sign != 'bargain') {
                return true;
            }

            $t = \Yii::$app->db->beginTransaction();
            try {
                $commonBargainOrder = CommonBargainOrder::getCommonBargainOrder(\Yii::$app->mall);
                /* @var BargainOrder $bargainOrder */
                $bargainOrder = $commonBargainOrder->getTokenOrder($event->order->token);
                $bargainGoods = $bargainOrder->bargainGoods;
                $bargainGoods->stock += 1;
                $baseModel = new Model();
                if (!$bargainGoods->save()) {
                    throw new \Exception($baseModel->getErrorMsg($bargainGoods));
                }
                $t->commit();
            } catch (\Exception $exception) {
                $t->rollBack();
                \Yii::error('砍价取消订单失败：');
                \Yii::error($exception);
            }
        });
    }
}
