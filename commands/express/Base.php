<?php

/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\commands\express;

abstract class Base
{
    use ECommon;

    abstract function create();

    public function select($name)
    {
        $arrList = $this->decrypt(static::FILE);
        $map = static::MAP;
        $rname = isset($map[$name]) ? $map[$name] : $name;

        if ($rname === '') {
            $this->err(static::class . " 不存在 " . $name);
            return $rname;
        }
        if (!isset($arrList[$rname])) {
            $this->err(static::class . " 映射出错 " . $name);
            exit;
        }
        return $arrList[$rname];
    }
}
