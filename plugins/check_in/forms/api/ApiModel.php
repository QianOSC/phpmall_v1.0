<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\check_in\forms\api;


use app\models\User;
use app\plugins\check_in\forms\Model;

/**
 * @property User $user
 */
class ApiModel extends Model
{
    protected $user;

    public function setUser($val)
    {
        $this->user = $val;
    }
}
