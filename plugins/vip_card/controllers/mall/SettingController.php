<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\vip_card\controllers\mall;

use app\core\response\ApiCode;
use app\plugins\Controller;
use app\plugins\vip_card\forms\mall\GoodsForm;
use app\plugins\vip_card\forms\mall\SettingForm;
use app\plugins\vip_card\models\TemplateForm;

class SettingController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new SettingForm();
                $form->attributes = \Yii::$app->request->post();
                return $this->asJson($form->save());
            } else {
                $form = new SettingForm();
                return $this->asJson($form->search());
            }
        } else {
            return $this->render('index');
        }
    }

    public function actionTemplate()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isGet) {
                $form = new TemplateForm();
                $form->mall = \Yii::$app->mall;
                $add = \Yii::$app->request->get('add');
                $platform = \Yii::$app->request->get('platform');
                return $this->asJson($form->getDetail($add,$platform));
            }
            if (\Yii::$app->request->isPost) {
                $form = new TemplateForm();
                $form->attributes = \Yii::$app->request->post();
                $form->mall = \Yii::$app->mall;
                return $this->asJson($form->save());
            }
        }
        return $this->render('template');
    }

    public function actionBatchUpdateAppoint()
    {
        $form = new GoodsForm();
        $form->attributes = \Yii::$app->request->post();
        $res = $form->batchUpdateAppoint();

        return $this->asJson($res);
    }
}
