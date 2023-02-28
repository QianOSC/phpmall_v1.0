<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\api;


use app\controllers\api\filters\LoginFilter;
use app\forms\api\IntegralLogForm;

class IntegralLogController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'login' => [
                'class' => LoginFilter::class,
            ],
        ]);
    }

    public function actionIndex()
    {
        $form = new IntegralLogForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getList());
    }
}
