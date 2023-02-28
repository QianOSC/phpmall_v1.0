<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\api\admin;

use app\forms\api\admin\CashForm;

class CashController extends AdminController
{
    public function actionIndex()
    {
        $form = new CashForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getList());
    }

    public function actionVerify()
    {
        $form = new CashForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->verify());
    }

    public function actionTabs()
    {
        $form = new CashForm();
        return $this->asJson($form->getTabs());
    }

    public function actionCash()
    {
        $form = new CashForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->cash());
    }

    public function actionList()
    {
        $form = new CashForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->search());
    }

    public function actionSave()
    {
        $form = new CashForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->save());
    }
}
