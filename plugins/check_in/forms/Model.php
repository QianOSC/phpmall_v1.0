<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\check_in\forms;


use app\models\Mall;

/**
 * @property Mall $mall
 */
class Model extends \app\models\Model
{
    protected $mall;

    public function setMall($val)
    {
        $this->mall = $val;
    }
}
