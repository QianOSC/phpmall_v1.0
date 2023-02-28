<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\components;


use app\core\response\ApiCode;
use app\plugins\community\forms\common\CommonSetting;
use yii\base\Action;

class SettingDataAction extends Action
{
    public function run()
    {
        $setting = CommonSetting::getCommon()->getSetting();
        \Yii::$app->response->data = [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '',
            'data' => $setting
        ];
    }
}
