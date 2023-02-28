<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\check_in\controllers\api;


use app\controllers\api\filters\LoginFilter;
use app\plugins\check_in\forms\api\IndexForm;
use app\plugins\check_in\forms\api\SignInForm;
use app\plugins\check_in\forms\api\SignInResultForm;
use app\plugins\check_in\forms\api\UserForm;

class IndexController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'login' => [
                'class' => LoginFilter::class,
                'ignore' => ['index', 'customize', 'sign-in-day']
            ],
        ]);
    }

    public function actionIndex()
    {
        $form = new IndexForm();
        $form->mall = \Yii::$app->mall;
        $form->user = \Yii::$app->user->identity;
        return $this->asJson($form->search());
    }

    public function actionSignIn()
    {
        $form = new SignInForm();
        $form->attributes = \Yii::$app->request->get();
        $form->mall = \Yii::$app->mall;
        $form->user = \Yii::$app->user->identity;
        return $this->asJson($form->save());
    }

    public function actionSignInResult()
    {
        $form = new SignInResultForm();
        $form->attributes = \Yii::$app->request->get();
        $form->mall = \Yii::$app->mall;
        $form->user = \Yii::$app->user->identity;
        return $this->asJson($form->search());
    }

    public function actionSignInDay()
    {
        $form = new IndexForm();
        $form->attributes = \Yii::$app->request->get();
        $form->mall = \Yii::$app->mall;
        $form->user = \Yii::$app->user->identity;
        return $this->asJson($form->getDay());
    }

    public function actionUser()
    {
        $form = new UserForm();
        $form->attributes = \Yii::$app->request->get();
        $form->mall = \Yii::$app->mall;
        $form->user = \Yii::$app->user->identity;
        return $this->asJson($form->save());
    }

    public function actionCustomize()
    {
        $form = new IndexForm();
        $form->attributes = \Yii::$app->request->get();
        $form->mall = \Yii::$app->mall;
        $form->user = \Yii::$app->user->identity;
        return $this->asJson($form->getCustomize());
    }
}
