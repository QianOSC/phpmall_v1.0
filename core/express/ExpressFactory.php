<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\core\express;

class ExpressFactory
{
    public function create(string $model, array $config = [])
    {
        $model = 'app\core\express\factory\\' . lcfirst($model) . '\\' . $model;
        if (class_exists($model)) {
            return new $model($config);
        }
        throw new \Exception('调用错误');
    }
}