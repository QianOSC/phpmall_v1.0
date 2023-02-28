<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\fxhb\controllers\mall;


use app\plugins\Controller;
use app\plugins\fxhb\forms\mall\RecommendForm;

class RecommendController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new RecommendForm();
                $form->data = \Yii::$app->request->post('form');
                $res = $form->save();

                return $this->asJson($res);
            } else {
                $form = new RecommendForm();
                $res = $form->getSetting();

                return $this->asJson($res);
            }
        } else {
            return $this->render('index');
        }
    }
}