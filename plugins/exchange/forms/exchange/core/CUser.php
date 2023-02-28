<?php

/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\exchange\forms\exchange\core;

use app\forms\api\LoginForm;
use app\models\User;

//类调整
class CUser extends LoginForm
{
    public const key = 'GiftCardLoginUserOnly';
    protected function getUserInfo()
    {
        return (object)[
            'username' => self::key,
            'nickname' => '匿名用户',
            'avatar' => \Yii::$app->request->hostInfo . \Yii::$app->request->baseUrl . '/statics/img/plugins/user-default-avatar.png',
            'platform' => '',
            'platform_user_id' => '',
        ];
    }

    public function getUser()
    {
        $result = $this->login();
        return User::find()->where([
            'mall_id' => \Yii::$app->mall->id,
            'access_token' => $result['data']['access_token'],
            'is_delete' => 0,
        ])->one();
    }

    public function updateUser()
    {
    }
}
