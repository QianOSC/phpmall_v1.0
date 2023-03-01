<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\vip_card\controllers\api;

use app\controllers\api\filters\LoginFilter;
use app\plugins\vip_card\forms\api\OrderPayForm;
use app\plugins\vip_card\forms\api\OrderSubmitForm;

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
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->preview());
    }

    public function actionSubmit()
    {
        $form = new OrderSubmitForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->submit());
    }

    public function actionPayData()
    {
        $form = new OrderPayForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->getResponseData());
    }
}
