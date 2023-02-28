<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\refund;


use app\core\payment\PaymentException;

class HuodaoRefund extends BaseRefund
{
    /**
     * @param \app\models\PaymentRefund $paymentRefund
     * @param \app\models\PaymentOrderUnion $paymentOrderUnion
     * @return bool|mixed
     * @throws PaymentException
     */
    public function refund($paymentRefund, $paymentOrderUnion)
    {
        $paymentRefund->is_pay = 1;
        $paymentRefund->pay_type = 2;
        if (!$paymentRefund->save()) {
            throw new PaymentException($this->getErrorMsg($paymentRefund));
        }
        return true;
    }
}
