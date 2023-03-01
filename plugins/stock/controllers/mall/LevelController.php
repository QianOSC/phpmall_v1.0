<?php
/**
 * Created by qian_mall_app
 * @author Qian
 * Email: <qianjing.network@qq.com>
 */

namespace app\plugins\stock\controllers\mall;

use app\plugins\stock\forms\mall\LevelForm;
use app\plugins\stock\forms\mall\OrderDetailForm;
use app\plugins\stock\forms\mall\OrderForm;
use app\plugins\Controller;
use app\plugins\stock\forms\mall\UpgradeConditionForm;

class LevelController extends Controller
{

    public function actionIndex()
    {
        return $this->render('index');
    }

    //升级条件
    public function actionUpgradeCondition()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new UpgradeConditionForm();
                $form->attributes = \Yii::$app->request->post();
                return $this->asJson($form->save());
            } else {
                $form = new UpgradeConditionForm();
                $form->attributes = \Yii::$app->request->get();
                return $this->asJson($form->search());
            }
        } else {
            return $this->render('index');
        }
    }

    public function actionLevelList()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new LevelForm();
            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->search());
        } else {
            return $this->render('index');
        }
    }

    public function actionLevelAdd()
    {
        $form = new LevelForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->save());
    }

    public function actionLevelEdit()
    {
        $form = new LevelForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->save());
    }

    public function actionLevelDel()
    {
        $form = new LevelForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->del());
    }
}