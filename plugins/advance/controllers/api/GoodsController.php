<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * author: zbj
 */

namespace app\plugins\advance\controllers\api;

use app\plugins\advance\forms\api\GoodsForm;
use app\plugins\advance\forms\api\PosterForm;
use app\plugins\advance\forms\common\BannerListForm;

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

    //海报
    public function actionPoster()
    {
        $form = new PosterForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->poster());
    }

    public function actionBanner()
    {
        $form = new BannerListForm();
        $form->attributes = \Yii::$app->request->get();
        $form->mall = \Yii::$app->mall;
        return $this->asJson($form->search());
    }
}
