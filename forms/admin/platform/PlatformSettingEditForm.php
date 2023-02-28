<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\admin\platform;

use app\core\response\ApiCode;
use app\models\Model;
use app\models\WxappPlatform;

class PlatformSettingEditForm extends Model
{
    public $appid;
    public $appsecret;
    public $token;
    public $encoding_aes_key;
    public $third_appid;
    public $uploaddomain;
    public $downloaddomain;
    public $webviewdomain;

    public function rules()
    {
        return [
            [['appid', 'appsecret', 'token', 'encoding_aes_key', 'third_appid'], 'required'],
            [['appid'], 'string', 'max' => 128],
            [['appsecret', 'token'], 'string', 'max' => 255],
            [['encoding_aes_key'], 'string', 'max' => 512],
            [['uploaddomain', 'downloaddomain', 'webviewdomain'], 'string']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'appid' => 'Appid',
            'appsecret' => 'Appsecret',
            'token' => 'Token',
            'encoding_aes_key' => 'Encoding Aes Key',
            'third_appid' => '绑定开放平台的小程序appid'
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $domain = $this->dealDomain();
        $platform = WxappPlatform::getPlatform();
        if (!$platform) {
            $platform = new WxappPlatform();
        }
        $platform->appid = $this->appid;
        $platform->appsecret = $this->appsecret;
        $platform->token = $this->token;
        $platform->encoding_aes_key = $this->encoding_aes_key;
        $platform->third_appid = $this->third_appid;
        $platform->domain = json_encode($domain, JSON_UNESCAPED_UNICODE);
        $res = $platform->save();
        if (!$res) {
            throw new \Exception((new Model())->getErrorMsg($platform));
        }
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '保存成功'
        ];
    }

    private function dealDomain()
    {
        $domain = [
            'uploaddomain' => '',
            'downloaddomain' => '',
            'webviewdomain' => ''
        ];
        if ($this->uploaddomain) {
            $domain['uploaddomain'] = $this->uploaddomain;
        }
        if ($this->downloaddomain) {
            $domain['downloaddomain'] = $this->downloaddomain;
        }
        if ($this->webviewdomain) {
            $domain['webviewdomain'] = $this->webviewdomain;
        }
        return $domain;
    }
}
