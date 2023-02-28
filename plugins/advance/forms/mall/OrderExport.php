<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\advance\forms\mall;


class OrderExport extends \app\forms\mall\export\OrderExport
{
    public function getFileName()
    {
        $name = '预售订单-订单列表';
        $fileName = $name . date('YmdHis');

        return $fileName;
    }
}
