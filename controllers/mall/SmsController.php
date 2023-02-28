<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\mall;


use app\forms\mall\sms\SmsEditForm;
use app\forms\mall\sms\SmsForm;

class SmsController extends MallController
{
    public function actionSetting()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new SmsEditForm();
                $form->data = \Yii::$app->request->post('form');

                return $form->save();
            } else {
                $form = new SmsForm();

                return $form->getDetail();
            }
        }

        return $this->render('setting');
    }

    public function actionTestSms($type)
    {
        if (\Yii::$app->request->isAjax) {
            $form = new SmsEditForm();
            $form->attributes = \Yii::$app->request->post('form');
            return $this->asJson($form->testSms($type));
        } else {
            \Yii::$app->response->redirect(\Yii::$app->urlManager->createUrl('mall/sms/setting'));
        }
    }
}
