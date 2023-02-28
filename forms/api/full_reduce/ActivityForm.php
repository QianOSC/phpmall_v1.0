<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\api\full_reduce;

use app\core\response\ApiCode;
use app\forms\common\full_reduce\CommonActivity;
use app\models\Model;

class ActivityForm extends Model
{
    public function getActivity()
    {
        $info = CommonActivity::getActivityMarket();
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => (object)$info,
        ];
    }
}
