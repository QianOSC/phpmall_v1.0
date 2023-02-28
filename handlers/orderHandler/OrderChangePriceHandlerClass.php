<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\handlers\orderHandler;


class OrderChangePriceHandlerClass extends BaseOrderHandler
{
    public function handle()
    {
        \Yii::error('--改价事件触发--');
        $this->addShareOrder();
    }
}
