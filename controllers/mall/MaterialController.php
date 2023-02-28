<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\mall;


class MaterialController extends MallController
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {

        } else {
            return $this->render('index');
        }
    }
}