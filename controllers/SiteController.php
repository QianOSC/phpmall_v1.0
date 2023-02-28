<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers;


use app\forms\BdCaptchaAction;
use yii\captcha\CaptchaAction;

class SiteController extends Controller
{
    public function actions()
    {
        return [
            'pic-captcha' => [
                'class' => BdCaptchaAction::class,
                'minLength' => 4,
                'maxLength' => 5,
            ],
        ];
    }

    public function actionIndex()
    {
        return $this->redirect(\Yii::$app->urlManager->createUrl(['admin/index/index']));
    }

    public function actionInstallPlugin($name)
    {
        var_dump(\Yii::$app->plugin->install($name));
    }
}
