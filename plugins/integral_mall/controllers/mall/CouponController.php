<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\integral_mall\controllers\mall;

use app\plugins\Controller;
use app\plugins\integral_mall\forms\mall\CouponEditForm;
use app\plugins\integral_mall\forms\mall\CouponForm;

class CouponController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new CouponForm();
            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->getList());
        } else {
            return $this->render('index');
        }
    }

    public function actionEdit()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new CouponEditForm();
                $form->attributes = \Yii::$app->request->post();
                return $form->save();
            } else {
                $form = new CouponForm();
                $form->attributes = \Yii::$app->request->get();
                return $this->asJson($form->detail());
            }
        } else {
            return $this->render('edit');
        }
    }

    public function actionDestroy()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new CouponForm();
            $form->attributes = \Yii::$app->request->post();
            return $form->destroy();
        }
    }
}
