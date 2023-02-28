<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\api\admin;

use app\forms\mall\service\ServiceForm;

class ServiceController extends AdminController
{
    /**
     * 获取商品服务列表
     * @return \yii\web\Response
     */
    public function actionOptions()
    {
        $form = new ServiceForm();
        $res = $form->getOptionList();

        return $this->asJson($res);
    }
}