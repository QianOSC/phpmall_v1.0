<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\miaosha\controllers\mall;

use app\plugins\Controller;
use app\plugins\miaosha\forms\mall\BannerForm;

class BannerController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new BannerForm();
            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->getList());
        } else {
            return $this->render('index');
        }
    }

    public function actionEdit()
    {
        if (\Yii::$app->request->isPost) {
            $form = new BannerForm();
            $form->attributes = \Yii::$app->request->post();
            return $form->save();
        }
    }
}
