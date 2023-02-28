<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers\api;

use app\forms\api\BuyDataForm;
use app\forms\api\ConfigForm;
use app\forms\api\index\IndexExtraForm;
use app\forms\api\index\NewIndexForm;
use app\forms\api\IndexForm;
use app\forms\api\index\TemplateForm;

class IndexController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
        ]);
    }

    public function actionConfig()
    {
        return (new ConfigForm())->search();
    }

    public function actionPurchase()
    {
        return (new BuyDataForm())->search();
    }

    public function actionIndex()
    {
        $form = new IndexForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getIndex());
    }

    // 新的首页接口
    public function actionNewIndex()
    {
        $form = new NewIndexForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getIndex());
    }

    //↓↓↓
    public function actionTplIndex()
    {
        $form = new TemplateForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getIndex());
    }


    public function actionIndexExtra()
    {
        $form = new IndexExtraForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getData());
    }

    public function actionShopStatus()
    {
        $form = new IndexForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->shopStatus());
    }

    //↓↓↓
    public function actionIndexWechat()
    {
        return [
            'code' => 0,
            'msg' => 'success'
        ];
    }
}
