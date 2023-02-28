<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\helpers;

class ArrayHelper extends \yii\helpers\ArrayHelper
{
    /**
     * @param $array
     * @param $keys
     * @param null $default
     * @return array|mixed|null
     * 批量删除键值
     */
    public static function removeList(&$array, $keys, $default = null)
    {
        if (!is_array($keys)) {
            return $default;
        }
        $value = [];
        while (count($keys) > 1) {
            $key = array_shift($keys);
            $value[] = self::remove($array, $key, $default);
        }
        return $value;
    }

    public static function filter($array, $filters)
    {
        if (empty($filters)) {
            return $array;
        } else {
            return parent::filter($array, $filters);
        }
    }
}
