<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\handlers;




class OrderPayedHandlerClass extends \app\handlers\orderHandler\OrderPayedHandlerClass
{
    protected function notice()
    {
        \Yii::error('--community notice--');
        $this->sendTemplate()->sendMpTemplate()->sendBuyPrompt()->setGoods();
        return $this;
    }

    protected function pay()
    {
        \Yii::error('--community pay--');
        $this->becomeJuniorByFirstPay()->becomeShare();
        return $this;
    }
}
