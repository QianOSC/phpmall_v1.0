<?php
/**
 * @author Qian
 */

namespace app\controllers\api\testOrderSubmit;


use app\forms\api\order\OrderSubmitForm;

class TestOrderSubmitForm extends OrderSubmitForm
{
    public function getGoodsListData($goodsList)
    {
        $data = parent::getGoodsListData($goodsList);
        return $data;
    }

    public function getMchListData($formMchList)
    {
        $data = parent::getMchListData($formMchList);
        return $data;
    }
}
