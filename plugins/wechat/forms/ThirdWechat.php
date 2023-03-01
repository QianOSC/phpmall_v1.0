<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\plugins\wechat\forms;

use app\models\WxappPlatform;
use app\plugins\wechat\models\WechatWxmpprograms;
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
        $wxmpprogram = WechatWxmpprograms::findOne(['mall_id' => \Yii::$app->mall->id, 'is_delete' => 0]);
        if ($wxmpprogram->authorizer_expires < time()) {
            $wxmpprogram->updateAuthorizerAccessToken(
                $this->platform->appid,
                $this->platform->component_access_token
            );
        }
        return $wxmpprogram->authorizer_access_token;
    }

    public function getInfo()
    {
        $wxmpprogram = WechatWxmpprograms::findOne(['mall_id' => \Yii::$app->mall->id, 'is_delete' => 0]);
        return [
            'name' => $wxmpprogram->nick_name,
            'logo' => $wxmpprogram->head_img,
            'qrcode' => $wxmpprogram->qrcode_url,
        ];
    }
}
