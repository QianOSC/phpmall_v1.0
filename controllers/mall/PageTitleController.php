<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */


namespace app\controllers\mall;


use app\forms\mall\page_title\PageTitleEditForm;
use app\forms\mall\page_title\PageTitleForm;

class PageTitleController extends MallController
{
    public function actionSetting()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isGet) {
                $form = new PageTitleForm();
                $res = $form->getList();

                return $this->asJson($res);
            } else {
                $form = new PageTitleEditForm();
                $form->data = \Yii::$app->request->post('list');

                return $form->save();
            }
        } else {
            return $this->render('setting');
        }
    }

    /**
     * 恢复默认
     * @return \yii\web\Response
     */
    public function actionRestoreDefault()
    {
        $form = new PageTitleForm();
        $res = $form->restoreDefault();

        return $this->asJson($res);
    }
}
