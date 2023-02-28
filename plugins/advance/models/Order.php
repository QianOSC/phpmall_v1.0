<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * author: zbj
 */

namespace app\plugins\advance\models;


class Order extends \app\models\Order
{
    public function getAdvanceOrder()
    {
        return $this->hasOne(AdvanceOrder::className(), ['order_id' => 'id']);
    }
}
