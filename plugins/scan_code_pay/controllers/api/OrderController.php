<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\plugins\scan_code_pay\controllers\api;


use app\controllers\api\ApiController;
use app\controllers\api\filters\LoginFilter;
use app\plugins\scan_code_pay\forms\api\CouponsForm;
use app\plugins\scan_code_pay\forms\api\OrderForm;
use app\plugins\scan_code_pay\forms\api\OrderSubmitForm;

class OrderController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'login' => [
                'class' => LoginFilter::class,
            ],
        ]);
    }

    public function actionPreview()
    {
        $form = new OrderSubmitForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->preview());
    }

    public function actionSubmit()
    {
        $form = new OrderSubmitForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->submit());
    }

    public function actionCoupons()
    {
        $form = new CouponsForm();
        $form->attributes = \Yii::$app->request->post();

        return $this->asJson($form->getCoupons());
    }

    public function actionCancel()
    {
        $form = new OrderForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->orderCancel());
    }
}
