<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\controllers\mall;


use app\forms\mall\theme_color\ThemeColorForm;

class ThemeColorController extends MallController
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new ThemeColorForm();
            if (\Yii::$app->request->isGet) {
                return $this->asJson($form->getList());
            } else {
                $form->attributes = \Yii::$app->request->post();
                return $this->asJson($form->save());
            }
        }
        return $this->render('index');
    }
}
