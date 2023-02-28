<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\booking\controllers\api;

use app\controllers\api\ApiController;
use app\plugins\booking\forms\api\GoodsForm;
use app\plugins\booking\forms\api\GoodsListForm;

class GoodsController extends ApiController
{
    //列表v
    public function actionList()
    {
        $form = new GoodsListForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->search());
    }

    //详情v待补充
    public function actionDetail()
    {
        $form = new GoodsForm();
        //$form->goods_id = 1;
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->search());
    }
}
