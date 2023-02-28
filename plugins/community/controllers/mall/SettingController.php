<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\controllers\mall;


use app\plugins\community\forms\mall\SettingForm;
use app\plugins\Controller;

class SettingController extends Controller
{
    public function actions()
    {
        return [
            'setting-data' => [
                'class' => '\app\plugins\community\components\SettingDataAction'
            ],
            'template' => [
                'class' => '\app\components\TemplateAction',
                'templateClass' => '\app\plugins\community\forms\mall\TemplateForm'
            ]
        ];
    }

    public function actionSetting()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new SettingForm();
            $form->attributes = \Yii::$app->request->post();
            return $this->asJson($form->save());
        } else {
            return $this->render('setting');
        }
    }

    public function actionRecruit()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new SettingForm();
            $form->attributes = \Yii::$app->request->post();
            return $this->asJson($form->recruit());
        } else {
            return $this->render('recruit');
        }
    }
}
