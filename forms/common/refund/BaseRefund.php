<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\refund;


use app\models\Model;
use app\models\PaymentOrderUnion;
use app\models\PaymentRefund;

abstract class BaseRefund extends Model
{
    /**
     * @param PaymentRefund $paymentRefund
     * @param PaymentOrderUnion $paymentOrderUnion
     * @return mixed
     */
    abstract public function refund($paymentRefund, $paymentOrderUnion);
}
