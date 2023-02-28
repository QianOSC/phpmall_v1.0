<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\mobile\components;


use app\core\response\ApiCode;
use app\forms\common\CommonOption;
use app\plugins\mobile\forms\common\CommonSetting;
use yii\base\Action;

class RegisterSettingAction extends Action
{
    public function run()
    {
        $setting = CommonSetting::getCommon()->getRegisterSetting();
        $list = CommonOption::get(CommonSetting::H5_CONTACT, \Yii::$app->mall->id, 'plugin', []);
        $setting['list'] = $list;
        \Yii::$app->response->data = [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '',
            'data' => $setting
        ];
    }
}
