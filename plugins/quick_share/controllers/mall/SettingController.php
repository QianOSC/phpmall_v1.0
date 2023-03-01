<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\quick_share\controllers\mall;

use app\plugins\Controller;
use app\plugins\quick_share\forms\mall\QuickShareSettingForm;

class SettingController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new QuickShareSettingForm();
            if (\Yii::$app->request->isPost) {
                $form->attributes = \Yii::$app->request->post();
                return $form->save();
            } else {
                $form->attributes = \Yii::$app->request->get();
                return $this->asJson($form->getList());
            }
        } else {
            return $this->render('index');
        }
    }
}
