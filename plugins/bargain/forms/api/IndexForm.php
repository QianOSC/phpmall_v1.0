<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\bargain\forms\api;


use app\core\response\ApiCode;
use app\plugins\bargain\forms\common\CommonSetting;

class IndexForm extends ApiModel
{
    public function search()
    {
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => CommonSetting::getCommon()->getList()
        ];
    }
}
