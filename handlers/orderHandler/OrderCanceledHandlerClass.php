<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\handlers\orderHandler;

class OrderCanceledHandlerClass extends BaseOrderCanceledHandler
{
    public function handle()
    {
        $this->user = $this->event->order->user;

        $this->cancel();
    }
}
