<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\controllers\api\admin\v2;



use app\controllers\api\admin\AdminController;
use app\forms\api\admin\v2\ReviewForm;

class ReviewController extends AdminController
{
    public function actionIndex()
    {
        $form = new ReviewForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getList());
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

    public function actionDetail()
    {
        $form = new ReviewForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getDetail());
    }
}
