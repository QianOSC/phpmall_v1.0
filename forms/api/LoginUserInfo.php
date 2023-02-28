<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\forms\api;


use yii\base\Component;

class LoginUserInfo extends Component
{
    public $nickname;
    public $username;
    public $avatar;
    public $platform_user_id;
    public $platform;

    /**
     * @var string $scope
     * auth_info 用户授权
     * auth_base 静默授权
     */
    public $scope = 'auth_info';
    public $unionId = '';
    public $password = '';

    public $user_platform;
    public $user_platform_user_id;
    public $subscribe = 0;
}
