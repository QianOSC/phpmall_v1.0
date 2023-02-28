<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\booking\controllers\mall;

use app\forms\mall\order_comments\OrderCommentsForm;
use app\forms\mall\order_comments\OrderCommentsEditForm;
use app\forms\mall\order_comments\OrderCommentsReplyForm;
use app\plugins\Controller;

class CommentController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new OrderCommentsForm();
            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->setSign(\Yii::$app->plugin->getCurrentPlugin()->getName())->search());
        } else {
            return $this->render('index');
        }
    }
    public function actionEdit()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new OrderCommentsEditForm();
                $form->attributes = \Yii::$app->request->post();
                return $form->save();
            } else {
                $form = new OrderCommentsForm();
                $form->attributes = \Yii::$app->request->get();
                return $this->asJson($form->getDetail());
            }
        } else {
            return $this->render('edit');
        }
    }
    public function actionReply()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new OrderCommentsReplyForm();
                $form->attributes = \Yii::$app->request->post();
                return $form->save();
            } else {
                $form = new OrderCommentsReplyForm();
                $form->attributes = \Yii::$app->request->get();
                return $this->asJson($form->getDetail());
            }
        } else {
            return $this->render('reply');
        }
    }
}
