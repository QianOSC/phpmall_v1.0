<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\check_in\forms\common\continue_type;


use app\plugins\check_in\forms\common\Common;
use app\plugins\check_in\forms\Model;

/**
 * @property Common $common;
 */
abstract class BaseState extends Model
{
    public $common;

    abstract public function setJob();

    abstract public function clearContinue();
}
