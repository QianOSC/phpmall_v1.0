<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\api;

use app\forms\api\DeliveryForm;
use app\forms\api\ExpressForm;

class ExpressController extends ApiController
{
    public function actionExpressList()
    {
        $form = new ExpressForm();
        return $this->asJson($form->getExpressList());
    }

    public function actionGetCustomer()
    {
        $form = new ExpressForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getCustomer());
    }

    public function actionDeliveryPrice()
    {
        $form = new DeliveryForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->getPrice());
    }

    public function actionDeliveryConfig()
    {
        $form = new DeliveryForm();
        return $this->asJson($form->getConfig());
    }

    public function actionOrderExpressList()
    {
        $form = new ExpressForm();
        $form->attributes = \Yii::$app->request->get();

        return $this->asJson($form->orderExpressList());
    }
}
