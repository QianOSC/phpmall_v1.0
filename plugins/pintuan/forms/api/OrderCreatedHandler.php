<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\pintuan\forms\api;


use app\handlers\orderHandler\OrderCreatedHandlerClass;

class OrderCreatedHandler extends OrderCreatedHandlerClass
{
    public function handle()
    {
        $this->user = $this->event->order->user;

        $this->setAutoCancel()->setShareUser()->setShareMoney();
    }
}