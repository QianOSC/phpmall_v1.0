<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\stock\controllers\mall;

use app\plugins\stock\forms\common\CommonBonus;
use app\plugins\Controller;
use app\plugins\stock\forms\mall\BalanceForm;

class BalanceController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new BalanceForm();
            $form->attributes = \Yii::$app->request->get();
            $list = $form->search();
            return $this->asJson($list);
        } else {
            return $this->render('index');
        }
    }

    public function actionDetail()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new CommonBonus();
            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->search());
        } else {
            return $this->render('detail');
        }
    }

    public function actionAdd()
    {
        return $this->render('add');
    }
}