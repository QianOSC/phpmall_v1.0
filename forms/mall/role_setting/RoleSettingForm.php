<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\mall\role_setting;


use app\core\response\ApiCode;
use app\models\Model;

class RoleSettingForm extends Model
{
    public function getDetail()
    {
        $form = new \app\forms\common\RoleSettingForm();
        $setting = $form->getSetting();

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'setting' => $setting,
            ]
        ];
    }
}
