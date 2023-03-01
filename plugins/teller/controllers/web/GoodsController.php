<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */


namespace app\plugins\teller\controllers\web;


use app\plugins\Controller;
use app\plugins\teller\forms\web\FullReduceForm;
use app\plugins\teller\forms\web\TellerGoodsForm;
use app\plugins\teller\forms\web\TellerGoodsListForm;

class GoodsController extends TellerController
{    
    public function actionIndex()
    {
        $form = new TellerGoodsListForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getList());
    }

    public function actionDetail()
    {
        $form = new TellerGoodsForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->search());
    }


    public function actionFullReduce()
    {
        $form = new FullReduceForm();
        return $this->asJson($form->search());
    }

    public function actionFullReduceGoodsList()
    {
        $form = new FullReduceForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getGoodsList());
    }

    public function actionBarCodeSearch()
    {
        $form = new TellerGoodsForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->barCodeSearch());
    }
}
