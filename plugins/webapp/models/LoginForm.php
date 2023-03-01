<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\plugins\webapp\models;

use app\core\response\ApiCode;
use app\forms\api\LoginUserInfo;
use app\models\User;
use app\models\AuthRoleUser;
use app\plugins\webapp\Plugin;
use app\plugins\mch\models\UserAuthLogin;

class LoginForm extends \app\forms\api\LoginForm
{
    public function login(){

        $params = \Yii::$app->request->post();
        \Yii::error('login: ' . json_encode($params));
        $custom = User::find()->alias("u")
            ->leftJoin(['a' => AuthRoleUser::tableName()], 'u.id = a.user_id')
            ->where([
                'u.username' => $params['username'],
                'u.is_delete' => 0,
                'a.role_id' => 2,
                 'a.is_delete' => 0
            ])->one();

        if(empty($custom))
        {
            return [
                'code' => ApiCode::CODE_H5_USER_NOTEXIST,
                'msg' => '用户不存在',
                'data' => [
                ],
            ];
        }

        if (!\Yii::$app->getSecurity()->validatePassword($params['password'], $custom->password)) {

            return [
                'code' => ApiCode::CODE_H5_PWD_ERROR,
                'msg' => '密码错误',
                'data' => [
                ]
            ];
        }

        $token = \Yii::$app->security->generateRandomString();
        $userAuthLogin = new UserAuthLogin();
        $userAuthLogin->mall_id = '9099';
        $userAuthLogin->token = $token;
        $res = $userAuthLogin->save();

        return [
            'code' => 0,
            'msg' => '登录成功',
            'data' => [
                'token' => $token
            ],
        ];
    }

    public function token(){

        $params = \Yii::$app->request->post();
    }

    /**
     * @return LoginUserInfo
     * @throws \Exception
     */
    public function getUserInfo()
    {
        $scope = 'auth_info';
        /** @var Plugin $plugin */
        $plugin = new Plugin();
        $postData = \Yii::$app->request->post();
        if (isset($postData['rawData'])) {
            $rawData = $postData['rawData'];
            $postUserInfo = json_decode($rawData, true);
            $data = $plugin->getWechat()->decryptData(
                $postData['encryptedData'],
                $postData['iv'],
                $postData['code']
            );
            $openId = $data['openId'];
            $unionId = $data['unionId'] ?? '';
        } else {
            $scope = 'auth_base';
            $data = $plugin->getWechat()->jsCodeToSession($postData['code']);
            $openId = $data['openid'];
            $unionId = $data['unionid'] ?? '';
            $postUserInfo['nickName'] = '';
            $postUserInfo['avatarUrl'] = '';
        }
        $userInfo = new LoginUserInfo();
        $userInfo->username = $openId;
        $userInfo->scope = $scope;
        $userInfo->nickname = isset($data['nickName']) ? $data['nickName'] : $postUserInfo['nickName'];
        $userInfo->avatar = isset($data['avatarUrl']) ? $data['avatarUrl'] : $postUserInfo['avatarUrl'];
        $userInfo->platform_user_id = $openId;
        $userInfo->platform = UserInfo::PLATFORM_WXAPP;
        $userInfo->unionId = $unionId;
        return $userInfo;
    }
}
