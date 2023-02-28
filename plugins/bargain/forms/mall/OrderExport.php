<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\bargain\forms\mall;

use app\core\CsvExport;
use app\forms\mall\export\BaseExport;
use app\models\Order;

class OrderExport extends \app\forms\mall\export\OrderExport
{
    /**
     * 获取csv名称
     * @return string
     */
    public function getFileName()
    {
        if ($this->send_type == 1) {
            $name = '砍价-自提订单';
        } elseif ($this->send_type == 2) {
            $name = '砍价-同城配送';
        } else {
            $name = '砍价-订单列表';
        }
        $fileName = $name . date('YmdHis');

        return $fileName;
    }
}
