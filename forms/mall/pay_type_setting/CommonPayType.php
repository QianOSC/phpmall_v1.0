<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\mall\pay_type_setting;

/**
 * Class CommonPayType
 * @package app\forms\mall\pay_type_setting
 */
class CommonPayType
{
    /**
     * @param $platform
     * @return mixed
     * @throws \Exception
     */
    public static function get($platform)
    {
        $setting = (new PayTypeSettingForm())->getDetail()['data']['option'];
        if (!isset($setting[$platform])) {
            throw new \Exception('获取支付方式失败');
        }
        return $setting[$platform];
    }
}
