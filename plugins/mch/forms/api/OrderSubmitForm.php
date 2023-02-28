<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\mch\forms\api;

use app\plugins\mch\Plugin;

class OrderSubmitForm extends \app\forms\api\order\OrderSubmitForm
{
    /**
     * @return $this
     */
    public function setEnableData()
    {
        $mallPaymentTypes = \Yii::$app->mall->getMallSettingOne('payment_type');
        if (is_array($mallPaymentTypes)) {
            foreach ($mallPaymentTypes as $key => $mallPaymentType) {
                if ($mallPaymentType == 'huodao') {
                    unset($mallPaymentTypes[$key]);
                    $mallPaymentTypes = array_values($mallPaymentTypes);
                    break;
                }
            }
        }

        return $this->setEnableIntegral(false)->setEnableCoupon(false)->setEnableMemberPrice(false)
            ->setSign((new Plugin())->getName())->setSupportPayTypes($mallPaymentTypes)->setEnableFullReduce(true);
    }
}
