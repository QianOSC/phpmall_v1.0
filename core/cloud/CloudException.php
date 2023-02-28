<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\core\cloud;


class CloudException extends \Exception
{
    public $raw;

    public function __construct($message = '', $code = 0, $previous = null, $raw)
    {
        $this->raw = $raw;
        parent::__construct($message, $code, $previous);
    }
}
