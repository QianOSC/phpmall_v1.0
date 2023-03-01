<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\vip_card\forms\mall;

use app\forms\mall\order\BaseOrderForm;

class VipOrderForm extends BaseOrderForm
{
    public $flag;

    public function search()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        $query = $this->where();

        if ($this->flag == "EXPORT") {
            $new_query = clone $query;
            $exp = new OrderExport();
            $exp->fieldsKeyList = $this->fields;
            $exp->export($new_query);
            return false;
        }
    }
}