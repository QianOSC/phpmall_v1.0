<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\mall;


use app\forms\mall\poster\PosterEditForm;
use app\forms\mall\poster\PosterForm;

class PosterController extends MallController
{
    public function actionSetting()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isGet) {
                $form = new PosterForm();
                $res = $form->getDetail();

                return $this->asJson($res);
            } else {
                $form = new PosterEditForm();
                $form->data = \Yii::$app->request->post('form');
                return $form->save();
            }
        }

        return $this->render('setting');
    }
}
