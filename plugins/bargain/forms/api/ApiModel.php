<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\bargain\forms\api;


use app\models\Mall;
use app\models\Model;
use app\models\User;

/**
 * @property Mall $mall
 * @property User $user
 */
class ApiModel extends Model
{
    protected $mall;
    protected $user;

    public function setMall($val)
    {
        $this->mall = $val;
    }

    public function setUser($val)
    {
        $this->user = $val;
    }
}
