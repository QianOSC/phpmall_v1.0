<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\core\cloud;


class CloudCollect extends CloudBase
{
    public $classVersion = '4.2.10';

    public function collect($id)
    {
        $api = "/mall/copy/index";
        return $this->httpGet($api, ['vid' => $id]);
    }
}
