<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\admin\platform;

use app\core\response\ApiCode;
use app\helpers\ArrayHelper;
use app\models\Model;
use app\models\WxappPlatform;

class PlatformSettingForm extends Model
{
    public function search()
    {
        $platform = WxappPlatform::getPlatform();
        $platform = ArrayHelper::toArray($platform);
        if (isset($platform['domain'])) {
            $domain = json_decode($platform['domain'], true);
            $platform['downloaddomain'] = $domain['downloaddomain'];
            $platform['uploaddomain'] = $domain['uploaddomain'];
            $platform['webviewdomain'] = $domain['webviewdomain'];
        } else {
            $platform['downloaddomain'] = '';
            $platform['uploaddomain'] = '';
            $platform['webviewdomain'] = '';
        }
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'platform' => $platform
            ]
        ];
    }
}
