<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\plugins\flash_sale\handlers;

use app\events\OrderEvent;
use app\handlers\HandlerBase;
use app\models\Model;
use app\models\Order;
use app\plugins\flash_sale\models\FlashSaleOrderDiscount;
use Exception;
use Yii;

class OrderCreatedHandler extends HandlerBase
{
    public function register()
    {
        Yii::$app->on(
            Order::EVENT_CREATED,
            function ($event) {
                /**@var OrderEvent $event * */
                if (isset($event->pluginData['flash_sale_discount']) && !empty($event->pluginData['flash_sale_discount'])) {
                    $model = new FlashSaleOrderDiscount();
                    $model->mall_id = $event->order->mall_id;
                    $model->discount = $event->pluginData['flash_sale_discount'];
                    $model->order_id = $event->order->id;
                    if (!$model->save()) {
                        throw new Exception((new Model())->getErrorMsg($model));
                    }
                }
            }
        );
    }
}
