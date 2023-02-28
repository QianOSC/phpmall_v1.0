<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\plugins\flash_sale\controllers\api;

use app\controllers\api\filters\LoginFilter;
use app\plugins\flash_sale\forms\api\OrderSubmitForm;
use Yii;

class OrderController extends ApiController
{
    public function behaviors()
    {
        return array_merge(
            parent::behaviors(),
            [
                'login' => [
                    'class' => LoginFilter::class,
                ],
            ]
        );
    }

    public function actionOrderPreview()
    {
        $form = new OrderSubmitForm();
        $form->form_data = Yii::$app->serializer->decode(Yii::$app->request->post('form_data'));
        return $this->asJson($form->setPluginData()->preview());
    }

    public function actionSubmit()
    {
        $form = new OrderSubmitForm();
        $form->form_data = Yii::$app->serializer->decode(Yii::$app->request->post('form_data'));
        return $this->asJson($form->setPluginData()->submit());
    }
}
