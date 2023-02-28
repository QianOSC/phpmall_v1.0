<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\controllers\mall;


use app\plugins\community\forms\mall\MiddlemanDetailForm;
use app\plugins\community\forms\mall\MiddlemanEditForm;
use app\plugins\community\forms\mall\MiddlemanForm;
use app\plugins\community\forms\mall\MiddlemanListForm;
use app\plugins\Controller;

class MiddlemanController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new MiddlemanListForm();
            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->getList());
        } else {
            return $this->render('index');
        }
    }

    public function actionRecruit()
    {
        return $this->render('recruit');
    }

    public function actionCheck()
    {
        $form = new MiddlemanForm();
        $form->attributes = \Yii::$app->request->post();
        return $this->asJson($form->check());
    }

    public function actionDetail()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isGet) {
                $form = new MiddlemanDetailForm();
                $form->attributes = \Yii::$app->request->get();
                return $this->asJson($form->getDetail());
            }
        } else {
            return $this->render('detail');
        }
    }

    public function actionRelieve()
    {
        $form = new MiddlemanDetailForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->relieve());
    }

    public function actionEdit()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new MiddlemanEditForm();
            $form->attributes = \Yii::$app->request->post();
            return $this->asJson($form->save());
        }
    }
}
