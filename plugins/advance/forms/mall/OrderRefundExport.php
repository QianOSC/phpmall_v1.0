<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\advance\forms\mall;

use app\core\CsvExport;
use app\forms\mall\export\BaseExport;
use app\models\OrderRefund;

class OrderRefundExport extends \app\forms\mall\export\OrderRefundExport
{
    public function export($query)
    {
        $list = $query->orderBy('created_at DESC')->with(['user.userInfo', 'order'])
            ->asArray()
            ->all();

        $this->transform($list);
        $this->getFields();
        $dataList = $this->getDataList();

        $fileName = '预售-售后订单' . date('YmdHis');
        (new CsvExport())->export($dataList, $this->fieldsNameList, $fileName);
    }

}
