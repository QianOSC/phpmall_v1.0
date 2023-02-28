<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers\api\notices;


use app\core\payment\PaymentNotify;
use app\core\payment\PaymentOrder;

class TestBuyNotify extends PaymentNotify
{

    /**
     * @param PaymentOrder $paymentOrder
     * @return mixed
     */
    public function notify($paymentOrder)
    {
        \Yii::warning('支付结果通知：' . \Yii::$app->serializer->encode($paymentOrder->attributes));
    }
}
