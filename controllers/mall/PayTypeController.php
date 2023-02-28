<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\controllers\mall;

use app\forms\mall\pay_type\PayTypeEditForm;
use app\forms\mall\pay_type\PayTypeForm;
use app\forms\mall\pay_type\PemUploadForm;
use yii\web\UploadedFile;

class PayTypeController extends MallController
{

    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new PayTypeForm();
            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->getList());
        } else {
            return $this->render('index');
        }
    }

    public function actionEdit()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new PayTypeEditForm();
                $form->attributes = \Yii::$app->request->post();
                $res = $form->save();
                return $this->asJson($res);
            } else {
                $form = new PayTypeForm();
                $form->attributes = \Yii::$app->request->get();
                $detail = $form->getDetail();
                return $this->asJson($detail);
            }
        } else {
            return $this->render('edit');
        }
    }

    public function actionDelete()
    {
        if (\Yii::$app->request->isPost) {
            $form = new PayTypeForm();
            $form->attributes = \Yii::$app->request->post();
            return $form->delete();
        }
    }

    public function actionUploadPem($name = 'file')
    {
        $form = new PemUploadForm();
        $form->file = UploadedFile::getInstanceByName($name);
        $form->id = \Yii::$app->request->get('id');
        $form->type = \Yii::$app->request->get('type');
        return $form->save();
    }
}
