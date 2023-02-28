<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\api\recharge;

use app\core\response\ApiCode;
use app\forms\common\CommonAppConfig;
use app\models\Model;

class RechargeSettingForm extends Model
{
    public function rules()
    {
        return [];
    }

    public function getIndex()
    {
        $setting = CommonAppConfig::getRechargeSetting();
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'setting' => $setting
            ]
        ];
    }
}
