<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\aliapp\controllers;

use app\plugins\aliapp\forms\TemplateEditForm;
use app\plugins\aliapp\forms\TemplateMsgForm;
use app\plugins\Controller;

class TemplateMsgController extends Controller
{
    public function actionSetting()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isGet) {
                $form = new TemplateMsgForm();
                $res = $form->getDetail();

                return $this->asJson($res);
            } else {
                $form = new TemplateEditForm();
                $form->data = \Yii::$app->request->post('list');
                return $form->save();
            }
        } else {
            return $this->render('template-msg');
        }
    }
}
