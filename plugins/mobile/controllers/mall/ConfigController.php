<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\mobile\controllers\mall;

use app\plugins\Controller;
use app\plugins\mobile\forms\mall\IndexForm;
use app\plugins\mobile\forms\mall\RegisterForm;

class ConfigController extends Controller
{
    public function actions()
    {
        return [
            'register-data' => [
                'class' => '\app\plugins\mobile\components\RegisterSettingAction'
            ],
        ];
    }

    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new IndexForm();
            return $this->asJson($form->getDetail());
        } else {
            return $this->render('index');
        }
    }

    public function actionRegister()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new RegisterForm();
                $form->attributes = \Yii::$app->request->post();
                return $this->asJson($form->save());
            }
        } else {
            return $this->render('register');
        }
    }

    public function actionIssue()
    {
        $form = new IndexForm();
        return $this->asJson($form->issue());
    }
}
