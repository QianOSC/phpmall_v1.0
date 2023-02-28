<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\exchange\forms\api;


use app\core\response\ApiCode;
use app\models\Model;
use app\plugins\exchange\forms\common\CommonSetting;

class SettingForm extends Model
{
    public function get()
    {
        $commonSetting = new CommonSetting();
        $setting = $commonSetting->get();
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => $setting,
        ];
    }
}