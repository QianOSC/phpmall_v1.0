<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\mall;


use app\forms\mall\poster\PosterNewForm;

class PosterNewController extends MallController
{
    public function actionGet()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new PosterNewForm();
            return $this->asJson($form->get());
        }
        return $this->render('setting');
    }

    public function actionPost()
    {
        if (\Yii::$app->request->isPost) {
            $form = new PosterNewForm();
            $form->attributes = \Yii::$app->request->post();
            return $this->asJson($form->save());
        }
    }
}