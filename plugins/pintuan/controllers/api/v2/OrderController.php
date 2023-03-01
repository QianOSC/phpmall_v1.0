<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\plugins\pintuan\controllers\api\v2;


use app\controllers\api\ApiController;
use app\controllers\api\filters\LoginFilter;
use app\plugins\pintuan\forms\api\v2\OrderForm;
use app\plugins\pintuan\forms\api\v2\OrderSubmitForm;
use app\plugins\pintuan\forms\api\v2\PosterForm;

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

    public function actionOrderPreview()
    {
        $form = new OrderSubmitForm();
        $form->form_data = \Yii::$app->serializer->decode(\Yii::$app->request->post('form_data'));
        return $this->asJson($form->setPluginData()->preview());
    }

    public function actionSubmit()
    {
        $form = new OrderSubmitForm();
        $form->form_data = \Yii::$app->serializer->decode(\Yii::$app->request->post('form_data'));
        return $this->asJson($form->setPluginData()->submit());
    }

    // 我的拼团列表
    public function actionList()
    {
        $form = new OrderForm();
        $form->attributes = \Yii::$app->request->get();

        return $this->asJson($form->getList());
    }

    // 拼团中的订单详情
    public function actionPintuanDetail()
    {
        $form = new OrderForm();
        $form->attributes = \Yii::$app->request->get();

        return $this->asJson($form->getPintuanDetail());
    }

    public function actionPoster()
    {
        $form = new PosterForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->orderDetailPoster());
    }
}
