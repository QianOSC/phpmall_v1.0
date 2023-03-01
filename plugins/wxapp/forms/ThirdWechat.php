<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\plugins\wxapp\forms;

use app\models\WxappPlatform;
use app\plugins\wxapp\models\WxappWxminiprograms;
use luweiss\Wechat\Wechat;

class ThirdWechat extends Wechat
{
    public $platform;

    public function __construct($config = [])
    {
        $this->platform = WxappPlatform::getPlatform();
        parent::__construct($config);
    }

    /**
     * @param bool $refresh
     * @return string
     * @throws \Exception
     */
    public function getAccessToken($refresh = false)
    {
        $miniprogram = WxappWxminiprograms::findOne(['mall_id' => \Yii::$app->mall->id, 'is_delete' => 0]);
        if ($miniprogram->authorizer_expires < time()) {
            $miniprogram->updateAuthorizerAccessToken(
                $this->platform->appid,
                $this->platform->component_access_token
            );
        }
        return $miniprogram->authorizer_access_token;
    }

    public function jsCodeToSession($code)
    {
        $api = "https://api.weixin.qq.com/sns/component/jscode2session?appid={$this->appId}&js_code={$code}&grant_type=authorization_code&component_appid={$this->platform->appid}&component_access_token={$this->platform->component_access_token}";
        return $this->getClient()->get($api);
    }
}
