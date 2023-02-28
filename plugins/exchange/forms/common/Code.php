<?php

/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\exchange\forms\common;

class Code
{
    private $type;

    public function __construct($type)
    {
        switch ($type) {
            case 'english_num':
                $this->type = 'english_num';
                break;
            case 'num':
                $this->type = 'num';
                break;
            default:
                throw new \Exception('验证码未知错误');
        }
    }

    public function generate()
    {
        return $this->{$this->type}();
    }

    private function english_num($num = 12)
    {
        $s = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $temp = '';
        while (strlen($temp) < $num) {
            $index = mt_rand(0, strlen($s) - 1);
            $temp .= $s[$index];
        }
        return $temp;
    }

    private function num($num = 12)
    {
        $temp = '';
        while (strlen($temp) < $num) {
            $temp .= mt_rand(0, 9);
        }
        return $temp;
    }
}
