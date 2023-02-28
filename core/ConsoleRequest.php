<?php
/**
 * @author Qian
 */

namespace app\core;


use yii\console\Request;

class ConsoleRequest extends Request
{
    public $enableCsrfCookie;

    public function getUserIp()
    {
        return '0.0.0.0';
    }

    public function getCsrfToken()
    {
        return null;
    }
}
