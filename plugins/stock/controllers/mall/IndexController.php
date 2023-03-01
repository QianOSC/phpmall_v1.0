<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\stock\controllers\mall;

use app\plugins\stock\forms\mall\CaptainForm;
use app\plugins\Controller;

class IndexController extends Controller
{
    public function index()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new CaptainForm();
                $form->attributes = \Yii::$app->request->post();
                return $this->asJson($form->save());
            } else {
                $form = new CaptainForm();
                return $this->asJson($form->search());
            }
        }
        return $this->render('index');
    }
}