<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * author: zbj
 */

namespace app\plugins\wholesale\controllers\api;

use app\plugins\wholesale\forms\api\GoodsForm;

class GoodsController extends ApiController
{
    public function actionIndex()
    {
        $form = new GoodsForm();
        $form->attributes = \Yii::$app->request->get();

        return $this->asJson($form->getList());
    }

    public function actionDetail()
    {
        $form = new GoodsForm();
        $form->attributes = \Yii::$app->request->get();

        return $this->asJson($form->detail());
    }
}
