<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers\mall;


use app\forms\mall\delivery\DeliveryForm;
use app\forms\mall\delivery\ManForm;

class DeliveryController extends MallController
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new DeliveryForm();
            $form->attributes = \Yii::$app->request->get();
            $form->attributes = \Yii::$app->request->post();
            return $this->asJson($form->getData());
        } else {
            return $this->render('index');
        }
    }

    public function actionEdit()
    {
        $form = new DeliveryForm();
        $form->attributes = \Yii::$app->request->get();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->edit());
    }

    public function actionMobile()
    {
        $form = new DeliveryForm();
        return $this->asJson($form->mobile());
    }

    public function actionMan()
    {
        $form = new ManForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->save());
    }

    public function actionManList()
    {
        $form = new ManForm();
        return $this->asJson($form->search());
    }

    public function actionManDelete()
    {
        $form = new ManForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->destroy());
    }
}
