<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\pond\controllers\mall;

use app\plugins\Controller;
use app\plugins\pond\forms\mall\PondSettingForm;

class SettingController extends Controller
{
    public function batchGoods()
    {
        $goods = \app\models\Goods::find()->where([
            'mall_id' => \Yii::$app->mall->id,
            'sign' => 'pond',
            'is_delete' => 0,
            'status' => 0
        ])->asArray()->all();
        foreach ($goods as $item) {
            $item->status = 1;
            $item->save();
        }
        dd('OK');
    }

    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new PondSettingForm();
            if (\Yii::$app->request->isPost) {
                $form->attributes = \Yii::$app->request->post();
                return $form->save();
            } else {
                $form->attributes = \Yii::$app->request->get();
                return $this->asJson($form->getList());
            }
        } else {
            return $this->render('index');
        }
    }
}
