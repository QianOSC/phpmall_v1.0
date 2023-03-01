<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\step\forms\mall;

use app\forms\mall\export\OrderExport;

class Export extends OrderExport
{
    public function getFileName()
    {
        $name = '步数宝-订单列表';
        $fileName = $name . date('YmdHis');
        return $fileName;
    }
}
