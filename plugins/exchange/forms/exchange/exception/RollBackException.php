<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\exchange\forms\exchange\exception;


class RollBackException extends \Exception
{
    public $token;

    public function __construct($message, $token)
    {
        $this->token = $token;
        parent::__construct($message);
    }

    public function getToken()
    {
        return $this->token;
    }
}