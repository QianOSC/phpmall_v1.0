<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\controllers\api;


class IndexController extends ApiController
{
    public function actions()
    {
        return [
            'setting-data' => [
                'class' => '\app\plugins\community\components\SettingDataAction'
            ]
        ];
    }
}
