<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\transfer;


use app\models\Model;
use app\models\PaymentTransfer;
use app\models\User;

abstract class BaseTransfer extends Model
{
    /**
     * @param PaymentTransfer $paymentTransfer
     * @param User $user
     * @return mixed
     */
    abstract public function transfer($paymentTransfer, $user);
}
