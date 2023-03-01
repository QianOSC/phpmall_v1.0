<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\teller\forms\mall;


use app\core\response\ApiCode;
use app\models\Model;
use app\plugins\teller\forms\common\CommonTellerSetting;

class TellerSettingForm extends Model
{
    public function getSetting()
    {
        $setting = (new CommonTellerSetting())->search();

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'setting' => $setting,
            ]
        ];
    }
}
