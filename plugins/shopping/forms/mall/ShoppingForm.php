<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\shopping\forms\mall;

use app\core\response\ApiCode;
use app\models\Model;
use app\plugins\shopping\forms\common\SettingForm;

class ShoppingForm extends Model
{
    public function getSetting()
    {
        $setting = (new SettingForm())->search();

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'setting' => $setting
            ]
        ];
    }
}
