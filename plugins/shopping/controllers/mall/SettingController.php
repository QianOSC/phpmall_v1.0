<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\shopping\controllers\mall;


use app\plugins\Controller;
use app\plugins\shopping\forms\mall\ShoppingEditForm;
use app\plugins\shopping\forms\mall\ShoppingForm;

class SettingController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new ShoppingEditForm();
                $form->attributes = \Yii::$app->request->post('form');
                return $this->asJson($form->save());
            } else {
                $form = new ShoppingForm();
                return $this->asJson($form->getSetting());
            }
        } else {
            return $this->render('index');
        }
    }
}
