<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\integral_mall\forms\api;


use app\forms\api\order\OrderGoodsAttr;
use app\plugins\integral_mall\models\IntegralMallGoodsAttr;

class IntegralMallOrderGoodsAttr extends OrderGoodsAttr
{
    public function getAttrExtra()
    {
        $iAttr = IntegralMallGoodsAttr::findOne(['goods_attr_id' => $this->id, 'is_delete' => 0]);
        return ['integral_num' => $iAttr->integral_num];
    }
}
