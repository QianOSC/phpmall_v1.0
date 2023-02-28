<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers\mall;


use app\forms\mall\copyright\CopyrightEditForm;
use app\forms\mall\copyright\CopyrightForm;
use app\forms\mall\user_center\OperateForm;
use app\forms\mall\user_center\UserCenterEditForm;
use app\forms\mall\user_center\UserCenterForm;

class UserCenterController extends MallController
{
    public function actionSetting()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isGet) {
                $form = new UserCenterForm();
                $res = $form->getDetail();

                return $this->asJson($res);
            } else {
                $form = new UserCenterEditForm();
                $form->attributes = \Yii::$app->request->post();
                return $form->save();
            }
        } else {
            return $this->render('setting');
        }
    }

    public function actionResetDefault()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new UserCenterEditForm();
            $form->attributes = \Yii::$app->request->post();
            return $form->reset();
        }
    }

    public function actionOperate()
    {
        $form = new OperateForm();
        $form->attributes = \Yii::$app->request->get();
        return $form->operate();
    }

    public function actionList()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new UserCenterForm();
            $form->attributes = \Yii::$app->request->get();
            return $form->getList();
        } else {
            return $this->render('list');
        }
    }
}
