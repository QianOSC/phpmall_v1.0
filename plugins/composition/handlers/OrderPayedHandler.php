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

class OrderPayedHandler extends HandlerBase
{
    public function register()
    {
        \Yii::$app->on(Order::EVENT_PAYED, function ($event) {
            // 添加订单支付完成事件
            if ($event->order->sign != 'composition') {
                return true;
            }
            // 套餐商品统计
            $res = CommonGoods::getCommon()->setGoodsPayment($event->order, 'add');
            \Yii::warning('套餐商品统计');
            return true;
        });
    }
}
