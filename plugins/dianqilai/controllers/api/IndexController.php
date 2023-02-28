<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\dianqilai\controllers\api;


use app\controllers\Controller;
use app\plugins\dianqilai\forms\CallbackForm;

class IndexController extends Controller
{
    public $enableCsrfValidation = false;
    public function actionIndex()
    {
        $form = new CallbackForm();
        $form->attributes = \Yii::$app->request->get();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->search());
    }
}
