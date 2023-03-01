<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\wechat\forms;


class Wechat extends \luweiss\Wechat\Wechat
{
    public $name;
    public $logo;
    public $qrcode;

    public function getInfo()
    {
        return [
            'name' => $this->name,
            'logo' => $this->logo,
            'qrcode' => $this->qrcode,
        ];
    }
}
