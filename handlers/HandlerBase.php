<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\handlers;


use yii\base\BaseObject;

abstract class HandlerBase extends BaseObject
{
    /**
     * 事件处理注册
     */
    abstract public function register();
}
