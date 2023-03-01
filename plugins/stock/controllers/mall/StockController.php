<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\stock\controllers\mall;

use app\plugins\stock\forms\common\CommonStock;
use app\plugins\stock\forms\mall\ShareForm;
use app\plugins\stock\forms\mall\StockEditForm;
use app\plugins\stock\forms\mall\StockForm;
use app\plugins\stock\forms\mall\QueueStatusForm;
use app\plugins\Controller;

class StockController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isGet) {
                $form = new StockForm();
                $form->attributes = \Yii::$app->request->get();
                return $this->asJson($form->getList());
            }
        } else {
            if (\Yii::$app->request->post('flag') === 'EXPORT') {
                $fields = explode(',', \Yii::$app->request->post('fields'));
                $form = new StockForm();
                $form->attributes = \Yii::$app->request->post();
                $form->fields = $fields;
                $form->getList();
                return false;
            }
        }
        return $this->render('index');
    }

    public function actionDetail()
    {
        return $this->render('detail');
    }

    /**股东申请审核**/
    public function actionApply()
    {
        $form = new CommonStock();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->become());
    }

    /**解除股东**/
    public function actionRemove()
    {
        $form = new CommonStock();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->remove());
    }

    /**添加股东备注**/
    public function actionRemark()
    {
        $form = new StockForm();
        $form->scenario = 'remark';
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->remark());
    }

    /**添加股东**/
    public function actionAdd()
    {
        $form = new StockEditForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->save());
    }

    /**删除被拒绝的股东申请**/
    public function actionDelete()
    {
        $form = new StockForm();
        $form->scenario = 'delete';
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->delete());
    }

    /**分销商**/
    public function actionShare()
    {
        $form = new ShareForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->search());
    }
}