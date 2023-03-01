<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\scratch\controllers\mall;

use app\plugins\Controller;
use app\plugins\scratch\forms\mall\ScratchSettingForm;

class SettingController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new ScratchSettingForm();
            if (\Yii::$app->request->isPost) {
                $form->attributes = \Yii::$app->request->post();
                return $form->save();
            } else {
                $form->attributes = \Yii::$app->request->get();
                return $this->asJson($form->getList());
            }
        } else {
            return $this->render('index');
        }
    }
}
