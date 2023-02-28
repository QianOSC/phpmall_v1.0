<?php

/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\exchange\controllers\mall;

use app\plugins\Controller;
use app\plugins\exchange\forms\mall\RecordForm;

class RecordController extends Controller
{
    public function actionShowInfo()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new RecordForm();
            $form->code = \Yii::$app->request->get('code');
            $this->asJson($form->showInfo());
        }
    }

    public function actionUnite()
    {
        if (\Yii::$app->request->isPost) {
            $form = new RecordForm();
            $form->attributes = \Yii::$app->request->post();
            return $this->asJson($form->unite());
        }
    }

    //单独领取接口
    public function actionCovert()
    {
    }
}
