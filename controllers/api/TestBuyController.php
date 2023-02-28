<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers\api;


use app\controllers\api\filters\LoginFilter;
use app\controllers\api\notices\TestBuyNotify;
use app\core\payment\PaymentOrder;

class TestBuyController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'login' => [
                'class' => LoginFilter::class,
            ],
        ]);
    }

    public function actionOrderSubmit()
    {
        $data = \Yii::$app->request->post();
        $paymentOrder = new PaymentOrder([
            'orderNo' => date('YmdHis'),
            'amount' => (double)$data['amount'],
            'title' => $data['title'],
            'notifyClass' => TestBuyNotify::class,
        ]);
        $id = \Yii::$app->payment->createOrder([$paymentOrder]);
        return [
            'code' => 0,
            'data' => [
                'id' => $id,
            ],
        ];
    }
}
