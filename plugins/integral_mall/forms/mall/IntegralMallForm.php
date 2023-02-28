<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\integral_mall\forms\mall;

use app\core\response\ApiCode;
use app\forms\common\CommonOptionP;
use app\models\Model;
use app\plugins\integral_mall\forms\common\CommonOption;
use app\plugins\integral_mall\forms\common\SettingForm;

class IntegralMallForm extends Model
{
    public function getSetting()
    {
        $setting = (new SettingForm())->search();
        $setting['goods_poster'] = (new CommonOptionP())->poster($setting['goods_poster'], CommonOption::getPosterDefault());
        $setting['goods_poster']['price']['text'] = CommonOption::getPosterDefault()['price']['text'];

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'setting' => $setting
            ]
        ];
    }
}
