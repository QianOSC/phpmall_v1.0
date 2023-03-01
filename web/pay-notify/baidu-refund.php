<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

$_GET['r'] = 'system/pay-notify/baidu-refund';

error_reporting(E_ALL);

// 注册 Composer 自动加载器
require(__DIR__ . '/../../vendor/autoload.php');

// 创建、运行一个应用
$application = new \app\core\WebApplication();
$application->run();
