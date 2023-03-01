<?php
/**
 * @copyright 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */

$_GET['r'] = 'system/msg-notify/ss';

error_reporting(E_ALL);

// 注册 Composer 自动加载器
require(__DIR__ . '/../../vendor/autoload.php');

// 创建、运行一个应用
$application = new \app\core\WebApplication();
$application->run();
