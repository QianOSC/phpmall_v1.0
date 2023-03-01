<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\pick\controllers\api;

use app\controllers\api\filters\LoginFilter;
use app\plugins\pick\forms\api\PosterForm;
use app\plugins\pick\forms\api\GoodsForm;


class IndexController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'login' => [
                'class' => LoginFilter::class,
            ],
        ]);
    }


    public function actionGoodsList()
    {
        $form = new GoodsForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getList());
    }


    public function actionGoodsDetail()
    {
        $form = new GoodsForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->detail());
    }

    public function actionPoster()
    {
        $form = new PosterForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->poster());
    }
}
