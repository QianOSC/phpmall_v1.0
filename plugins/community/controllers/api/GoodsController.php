<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\controllers\api;


use app\plugins\community\forms\api\GoodsForm;
use app\plugins\community\forms\api\poster\PosterConfigForm;
use app\plugins\community\forms\api\poster\PosterNewForm;
use app\plugins\community\forms\api\SwitchForm;

class GoodsController extends ApiController
{
    public function actionDetail()
    {
        $form = new GoodsForm();
        $form->attributes = \Yii::$app->request->get();
        $form->user = \Yii::$app->user->identity;
        $form->mall = \Yii::$app->mall;
        return $this->asJson($form->search());
    }

    public function actionConfig()
    {
        $form = new PosterConfigForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getDetail());
    }

    public function actionGenerate()
    {
        $form = new PosterNewForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->poster());
    }

    public function actionSwitch(){
        $form = new SwitchForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->save());
    }
}
