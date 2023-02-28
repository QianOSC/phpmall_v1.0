<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers;


use app\models\DistrictArr;

class DistrictController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $level = \Yii::$app->request->post('level');
            } elseif (\Yii::$app->request->isGet) {
                $level = \Yii::$app->request->get('level');
            } else {
                $level = 3;
            }
            switch ($level) {
                case 3:
                    $level = null;
                    break;
                case 2:
                    $level = 'district';
                    break;
                case 1:
                    $level = 'city';
                    break;
                default:
                    $level = null;
            }
            $list = DistrictArr::getArr();
            $district = DistrictArr::getList($list, $level);
            return $this->asJson([
                'code' => 0,
                'msg' => '',
                'data' => [
                    'district' => $district
                ]
            ]);
        }
        return $this->asJson([
            'code' => 1,
            'msg' => '返回错误'
        ]);
    }
}
