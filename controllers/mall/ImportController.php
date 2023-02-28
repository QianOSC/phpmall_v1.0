<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\controllers\mall;


use app\forms\mall\import\ImportApiForm;
use app\forms\mall\import\ImportForm;

class ImportController extends MallController
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new ImportApiForm();
                $form->attributes = \Yii::$app->request->post();
                return $this->asJson($form->import());
            }
        }
        return $this->render('index');
    }
}
