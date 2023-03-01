<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * author: zbj
 */

namespace app\plugins\wholesale\controllers\api;


use app\controllers\api\filters\LoginFilter;
use app\plugins\wholesale\forms\api\CartForm;

class CartController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'login' => [
                'class' => LoginFilter::class,
            ],
        ]);
    }

    public function actionAddCart()
    {
        $form = new CartForm();
        $form->attributes = \Yii::$app->request->post();

        return $this->asJson($form->addCart());
    }
}
