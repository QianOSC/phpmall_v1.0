<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\mall\sms;


use app\core\response\ApiCode;
use app\forms\common\CommonAppConfig;
use app\forms\common\CommonSms;
use app\models\Model;

class SmsForm extends Model
{
    public function getDetail()
    {
        $option = CommonAppConfig::getSmsConfig();

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'detail' => $option,
                'setting' => CommonSms::getCommon()->getSetting()
            ]
        ];
    }

    public function getDefault()
    {
        $setting = CommonSms::getCommon()->getSetting();
        $result = [
            'status' => '0',
            'platform' => 'aliyun',// 短信默认支持阿里云
            'mobile_list' => [],
            'access_key_id' => '',
            'access_key_secret' => '',
            'template_name' => '',
            'allow_platform' => []
        ];
        foreach ($setting as $index => $item) {
            $newItem = [
                'template_id' => ''
            ];
            foreach ($item['variable'] as $value) {
                $newItem[$value['key']] = '';
            }
            $result[$index] = $newItem;
        }
        return $result;
    }
}
