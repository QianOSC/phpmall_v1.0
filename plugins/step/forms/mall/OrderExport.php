<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\step\forms\mall;

class OrderExport extends \app\forms\mall\export\OrderExport
{
    public $send_type;

    public function getFileName()
    {
        $name = $this->send_type == 1 ? '步数宝-自提订单' : '步数宝-订单列表';
        $fileName = $name . date('YmdHis');

        return $fileName;
    }
}
