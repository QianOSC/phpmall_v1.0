<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\composition\handlers;


use app\handlers\HandlerBase;
use app\models\Order;
use app\plugins\composition\forms\common\CommonGoods;

class OrderCanceledHandler extends HandlerBase
{
    public function register()
    {
        \Yii::$app->on(Order::EVENT_CANCELED, function ($event) {
            // 添加订单取消支付事件
            if ($event->order->sign != 'composition') {
                return true;
            }
            // 套餐商品统计
            $res = CommonGoods::getCommon()->setGoodsPayment($event->order, 'sub');
            \Yii::warning('套餐商品取消支付');
            return true;
        });
    }
}
