<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers\mall;



use app\forms\mall\role_setting\RoleSettingEditForm;
use app\forms\mall\role_setting\RoleSettingForm;

class RoleSettingController extends MallController
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isGet) {
                $form = new RoleSettingForm();
                $res = $form->getDetail();

                return $this->asJson($res);
            } else {
                $form = new RoleSettingEditForm();
                $form->data = \Yii::$app->request->post('form');
                return $form->save();
            }
        } else {
            return $this->render('index');
        }
    }
}
