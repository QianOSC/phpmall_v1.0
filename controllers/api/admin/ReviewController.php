<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\api\admin;

use app\forms\api\admin\ReviewForm;

class ReviewController extends AdminController
{
    public function actionIndex()
    {
        $form = new ReviewForm();
        $form->attributes = \Yii::$app->request->get();
        $form->status = 0;
        return $this->asJson($form->getList());
    }

    public function actionDetail()
    {
        $form = new ReviewForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getDetail());
    }

    public function actionTabs()
    {
        $form = new ReviewForm();
        return $this->asJson($form->getTabs());
    }

    public function actionSwitchStatus()
    {
        $form = new ReviewForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->switchStatus());
    }

    public function actionQueueStatus()
    {
        $form = new ReviewForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->queueStatus());
    }
}