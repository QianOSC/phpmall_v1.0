<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */


namespace app\plugins\teller\controllers\mall;


use app\plugins\Controller;
use app\plugins\teller\forms\mall\PushOrderForm;

class PushController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new PushOrderForm();
	        $form->attributes = \Yii::$app->request->post();
	        return $this->asJson($form->getList());
        } else {
            return $this->render('index');
        }
    }
}
