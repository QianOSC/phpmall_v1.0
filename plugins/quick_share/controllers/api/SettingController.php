<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\quick_share\controllers\api;

use app\controllers\api\ApiController;
use app\core\response\ApiCode;
use app\plugins\quick_share\forms\common\CommonQuickShare;

class SettingController extends ApiController
{
    public function actionIndex()
    {
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => [
                'setting' => CommonQuickShare::getSetting(),
            ]
        ];
    }
}
