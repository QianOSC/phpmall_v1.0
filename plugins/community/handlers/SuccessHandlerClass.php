<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\handlers;



class SuccessHandlerClass extends \app\handlers\orderHandler\OrderPayedHandlerClass
{
    protected function notice()
    {
        \Yii::error('--community success--');
        $this->sendSms()->sendMail()->receiptPrint('pay');
        return $this;
    }

    protected function pay()
    {
        \Yii::error('--community success--');
        $this->saveResult();
        return $this;
    }

    protected function addShareOrder()
    {
        return $this;
    }

}
