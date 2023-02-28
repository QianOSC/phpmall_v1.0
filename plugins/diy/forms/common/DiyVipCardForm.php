<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\diy\forms\common;


use app\models\Model;
use app\plugins\check_in\models\CheckInAwardConfig;
use app\plugins\check_in\models\CheckInUser;
use app\plugins\vip_card\Plugin;

class DiyVipCardForm extends Model
{
    public function getVipCard()
    {
        $plugin = new Plugin();
        return $plugin->getAppConfig();
    }
}
