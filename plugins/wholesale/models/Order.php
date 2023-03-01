<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * author: zbj
 */

namespace app\plugins\wholesale\models;

class Order extends \app\models\Order
{
    public function getGoods()
    {
        return $this->hasOne(Goods::className(), ['id' => 'goods_id']);
    }
}
