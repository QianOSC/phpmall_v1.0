<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\mall\copyright;


use app\core\response\ApiCode;
use app\forms\common\CommonAppConfig;
use app\forms\common\CommonOption;
use app\models\Model;
use app\models\Option;

class CopyrightForm extends Model
{
    public function getDetail()
    {
        $option = CommonAppConfig::getCoryRight();
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'detail' => $option,
            ]
        ];
    }

    public function getDefault()
    {
        return [
            'pic_url' => '',
            'description' => '',
            'type' => '1',
            'link_url' => '',
            'mobile' => '',
            'link' => '',
            'status' => '1'
        ];
    }
}
