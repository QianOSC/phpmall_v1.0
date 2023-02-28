<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers\api;


use app\controllers\api\filters\LoginFilter;
use app\forms\api\FootprintForm;

class FootprintController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'login' => [
                'class' => LoginFilter::class,
            ],
        ]);
    }

    public function actionIndex()
    {
        $form = new FootprintForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->data());
    }

    public function actionFootprint()
    {
        $form = new FootprintForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->footprint());
    }

    public function actionFootprintDel()
    {
        $form = new FootprintForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->footprintDel());
    }
}
