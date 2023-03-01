<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\region\controllers\mall;

use app\plugins\Controller;
use app\plugins\region\forms\mall\SettingForm;

class SettingController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new SettingForm();
                $form->attributes = \Yii::$app->request->post();
                return $this->asJson($form->save());
            } else {
                $form = new SettingForm();
                return $this->asJson($form->search());
            }
        } else {
            return $this->render('index');
        }
    }
}
