<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\miaosha\handler\v2;

use app\handlers\orderHandler\OrderCreatedHandlerClass;
use app\jobs\OrderCancelJob;
use app\plugins\miaosha\forms\common\v2\SettingForm;

class OrderCreatedEventHandler extends OrderCreatedHandlerClass
{
    public function setAutoCancel()
    {
        $setting = (new SettingForm())->search();
        if (is_numeric($setting['over_time']) && $setting['over_time'] > 0) {
            // 订单自动取消任务
            \Yii::$app->queue->delay($setting['over_time'] * 60)->push(new OrderCancelJob([
                'orderId' => $this->event->order->id,
            ]));
            $autoCancelTime = strtotime($this->event->order->created_at) + $setting['over_time'] * 60;
            $this->event->order->auto_cancel_time = mysql_timestamp($autoCancelTime);
            $this->event->order->save();
        }
        return $this;
    }
}
