<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\controllers\api\admin;

use app\forms\mall\free_delivery_rules\ListForm;

class FreeDeliveryRulesController extends AdminController
{
    public function actionAllList()
    {
        $form = new ListForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->allList());
    }
}
