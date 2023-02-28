<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\bdapp\controllers;

use app\plugins\bdapp\forms\TemplateMsgEditForm;
use app\plugins\bdapp\forms\TemplateMsgForm;
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
                $form = new TemplateMsgEditForm();
                $form->data = \Yii::$app->request->post('list');
                return $form->save();
            }
        } else {
            return $this->render('setting');
        }
    }

    public function actionAddTemplate()
    {
        $form = new TemplateMsgForm();
        $form->mall = \Yii::$app->mall;
        return $this->asJson($form->search());
    }
}
