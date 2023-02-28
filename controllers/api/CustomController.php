<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\api;

use app\core\response\ApiCode;
use app\models\User;
use app\models\UserInfo;
use app\forms\mall\user\IntegralForm;

class CustomController extends ApiController
{
    public function actionUser()
    {
        $params = \Yii::$app->request->post();
        $user = User::find()->alias("u")
            ->leftJoin(['i' => UserInfo::tableName()], 'u.id = i.user_id')
            ->where(['AND', [
                    'u.mall_id'   => 1,
                    'u.is_delete' => 0
                ], ['OR', [
                    'like', 'u.username', $params['phone']
                ], [
                    'like', 'u.nickname', $params['phone']
                ], [
                    'like', 'u.mobile', $params['phone']
                ]]
            ])
            ->select('u.id, u.username, u.nickname, i.avatar, i.integral')
            ->asArray()
            ->one();

        if(empty($user))
        {
            return [
                'code' => ApiCode::CODE_H5_USER_NOTEXIST,
                'msg' => '用户不存在',
                'data' => [
                ],
            ];
        }else{
            return [
                'code' => 0,
                'msg' => 'success',
                'data' => [
                    'info' => $user
                ],
            ];
        }

    }
    public function actionIntegral()
    {
        $params = \Yii::$app->request->post();

        $form = new IntegralForm();
        $form->attributes = $params;
        return $this->asJson($form->save());


    }
}