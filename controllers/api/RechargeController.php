<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\api;


use app\controllers\api\filters\LoginFilter;
use app\forms\api\recharge\RechargeForm;
use app\forms\api\recharge\RechargeOrderForm;
use app\forms\api\recharge\RechargeSettingForm;

class RechargeController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'login' => [
                'class' => LoginFilter::class,
                'only' => ['balance-recharge'],
            ],
        ]);
    }

    public function actionIndex()
    {
        $form = new RechargeForm();
        $res = $form->getIndex();

        return $res;
    }

    public function actionBalanceRecharge()
    {
        $form = new RechargeOrderForm();
        $form->attributes = \Yii::$app->request->post();
        $res = $form->balanceRecharge();

        return $res;
    }

    public function actionSetting()
    {
        $form = new RechargeSettingForm();
        $res = $form->getIndex();

        return $res;
    }
}
