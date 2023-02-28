<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\open3rd;

use app\helpers\CurlHelper;

trait UpdateToken
{
    public function updateAuthorizerAccessToken($thirdAppId, $thirdAccessToken)
    {
        $url = 'https://api.weixin.qq.com/cgi-bin/component/api_authorizer_token?component_access_token=' . $thirdAccessToken;
        $data = '{"component_appid":"' . $thirdAppId . '","authorizer_appid":"' . $this->authorizer_appid . '","authorizer_refresh_token":"' . $this->authorizer_refresh_token . '"}';
        $ret = json_decode(CurlHelper::getInstance()->getClient()->post($url, [
            'body' => $data
        ])->getBody()->getContents());
        if (isset($ret->authorizer_access_token)) {
            $this->authorizer_access_token = $ret->authorizer_access_token;
            $this->authorizer_expires = (time() + 7200);
            $this->authorizer_refresh_token = $ret->authorizer_refresh_token;
            if (!$this->save()) {
                throw new \Exception('更新授权小程序的authorizer_access_token操作失败');
            }
            return true;
        } else {
            \Yii::error($ret);
            throw new \Exception('更新小程序access_token失败,appid:' . $this->authorizer_appid);
        }
    }
}
