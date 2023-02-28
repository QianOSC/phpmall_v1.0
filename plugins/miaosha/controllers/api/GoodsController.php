<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\miaosha\controllers\api;


use app\controllers\api\ApiController;
use app\plugins\miaosha\forms\api\CatsForm;
use app\plugins\miaosha\forms\api\GoodsForm;
use app\plugins\miaosha\forms\api\MiaoshaForm;

class GoodsController extends ApiController
{
    public function actionIndex()
    {
        $form = new GoodsForm();
        $form->attributes = \Yii::$app->request->get();
        $res = $form->getList();

        return $this->asJson($res);
    }

    public function actionDetail()
    {
        $form = new GoodsForm();
        $form->attributes = \Yii::$app->request->get();
        $res = $form->getDetail();

        return $this->asJson($res);
    }

    // TODO 未使用
    public function actionCats()
    {
        $form = new CatsForm();
        $res = $form->getList();

        return $this->asJson($res);
    }

    public function actionMiaosha()
    {
        $form = new MiaoshaForm();
        $form->attributes = \Yii::$app->request->get();
        $res = $form->getList();

        return $this->asJson($res);
    }

    public function actionTodayMiaosha()
    {
        $form = new MiaoshaForm();
        $form->attributes = \Yii::$app->request->get();
        $res = $form->getTodayMiaosha();

        return $this->asJson($res);
    }

    public function actionTimeList()
    {
        $form = new GoodsForm();
        $form->attributes = \Yii::$app->request->get();
        $res = $form->getTimeList();

        return $this->asJson($res);
    }
}
