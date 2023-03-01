<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\pintuan\forms\mall;


class OrderExport extends \app\forms\mall\export\OrderExport
{
    public function getFileName()
    {
        if ($this->send_type == 1) {
            $name = '拼团-自提订单';
        } elseif ($this->send_type == 2) {
            $name = '拼团-同城配送';
        } else {
            $name = '拼团-订单列表';
        }
        $fileName = $name . date('YmdHis');

        return $fileName;
    }
}
