<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\core\payment;


use yii\base\Component;


abstract class PaymentNotify extends Component
{
    /**
     * @param PaymentOrder $paymentOrder
     * @return mixed
     */
    abstract public function notify($paymentOrder);
}
