<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\core\cloud;


class CloudAuth extends CloudBase
{
    public $classVersion = '4.2.10';

    public function getAuthInfo($refreshCache = false)
    {
        return [
            'host' => [
                'name' => 'localhost',
                'protocol' => 'http://',
                'domain' => 'localhost',
                'token' => '',
                'account_num' => -1,
                'status' => 1,
                'host_ips' => [
                    [
                        'ip' => '127.0.0.1',
                    ],
                ],
            ],
        ];
    }
}
