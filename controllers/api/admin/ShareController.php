<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\api\admin;

use app\forms\mall\share\IndexForm;

class ShareController extends AdminController
{
    // 分销商列表数据获取
    public function actionIndex()
    {
        $form = new IndexForm();
        $data = \Yii::$app->request->get();
        $form->attributes = $data;
        if (isset($data['sort'])) {
            switch ($data['sort']) {
                case 1:
                    $form->sort = ['s.total_money'=>SORT_ASC];
                    break;
                case 2:
                    $form->sort = ['s.total_money'=>SORT_DESC];
                    break;
                case 3:
                    $form->sort = ['s.money'=>SORT_ASC];
                    break;
                case 4:
                    $form->sort = ['s.money'=>SORT_DESC];
                    break;
                default:
                    $form->sort = ['s.status' => SORT_ASC, 's.created_at' => SORT_DESC];
                    break;
            }
        }
        return $this->asJson($form->getList());
    }
}