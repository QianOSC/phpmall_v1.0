<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\pond\controllers\mall;

use app\plugins\Controller;
use app\plugins\pond\forms\mall\PondLogForm;

class LogController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new PondLogForm();
            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->getList());
        } else {
            return $this->render('index');
        }
    }
}
