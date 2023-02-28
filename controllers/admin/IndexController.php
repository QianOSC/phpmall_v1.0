<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\admin;


class IndexController extends AdminController
{
    public function actionIndex()
    {
//        return \Yii::$app->response->redirect(\Yii::$app->urlManager->createUrl(['admin/user/me']));
//        return \Yii::$app->response->redirect(\Yii::$app->urlManager->createUrl(['mall/index/index']));
        return \Yii::$app->createForm('app\forms\admin\mall\MallEntryForm')->entry(1);
    }

    public function actionTest()
    {
        return $this->render('test');
    }

    public function actionBackIndex()
    {
    	\Yii::$app->removeSessionMallId();
//        return \Yii::$app->response->redirect(\Yii::$app->urlManager->createUrl(['admin/user/me']));
//        return \Yii::$app->response->redirect(\Yii::$app->urlManager->createUrl(['mall/index/index']));
        return \Yii::$app->createForm('app\forms\admin\mall\MallEntryForm')->entry(1);
    }
}
