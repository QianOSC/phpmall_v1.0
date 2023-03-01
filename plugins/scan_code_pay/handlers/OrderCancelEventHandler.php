<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\scan_code_pay\handlers;

use app\handlers\orderHandler\BaseOrderCanceledHandler;

class OrderCancelEventHandler extends BaseOrderCanceledHandler
{
    protected function action()
    {
        $this->integralResume()->couponResume()->refund()->cardResume()->shareResume()->updateGoodsInfo();
    }
}