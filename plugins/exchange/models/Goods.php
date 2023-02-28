<?php

/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\exchange\models;

class Goods extends \app\models\Goods
{
    public function getEgoods()
    {
        return $this->hasOne(ExchangeGoods::className(), ['goods_id' => 'id']);
    }

    public function getLibrary()
    {
        return $this->hasOne(ExchangeLibrary::className(), ['id' => 'library_id'])
            ->viaTable(ExchangeGoods::tableName(), ['goods_id' => 'id']);
    }
}
