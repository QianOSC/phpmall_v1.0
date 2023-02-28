<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\api\finance;


use app\models\Model;

abstract class BaseFinanceConfig extends Model
{
    /**
     * @throws \Exception
     * @return array
     */
    abstract public function config();
}
