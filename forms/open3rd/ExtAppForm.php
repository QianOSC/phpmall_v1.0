<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\open3rd;

use app\models\WxappPlatform;
use app\plugins\wxapp\models\WxappWxminiprograms;

/**
 * Class ExtAppForm
 * @package app\forms\open3rd
 */
class ExtAppForm
{
    /**
     * @param $extApp
     * @param int $is_platform
     * @param string $plugin
     * @return ExtApp
     * @throws Open3rdException
     * @throws \luweiss\Wechat\WechatException
     */
    public static function instance($extApp = null, $is_platform = 0, $plugin = 'wxapp')
    {
        $open3rd = WxappPlatform::getPlatform();
        if (!$open3rd || empty($open3rd->component_access_token)) {
            throw new \Exception('未配置微信开放平台或者未收到推送ticket,请等待10分钟后再试');
        }
        if ($is_platform) {
            return new ExtApp([
                'thirdAppId' => $open3rd->appid,
                'thirdToken' => $open3rd->token,
                'thirdAccessToken' => $open3rd->component_access_token,
                'is_platform' => 1,
            ]);
        }
        if ($extApp === null) {
            $extApp = WxappWxminiprograms::findOne(['mall_id' => \Yii::$app->mall->id, 'is_delete' => 0]);
        }
        if (!$extApp) {
            throw new \Exception('尚未授权');
        }
        return new ExtApp([
            'thirdAppId' => $open3rd->appid,
            'thirdToken' => $open3rd->token,
            'thirdAccessToken' => $open3rd->component_access_token,
            'authorizer_appid' => $extApp->authorizer_appid,
            'plugin' => $plugin
        ]);
    }
}
