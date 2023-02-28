<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * author: zbj
 */

namespace app\plugins\advance\models;


use app\models\GoodsCatRelation;

/**
 * Class Goods
 * @package app\plugins\advance\models
 * @property AdvanceGoods $advanceGoods
 * @property GoodsCatRelation $cat
 */
class Goods extends \app\models\Goods
{
    public function getAdvanceGoods()
    {
        return $this->hasOne(AdvanceGoods::className(), ['goods_id' => 'id']);
    }

    public function getCat()
    {
        return $this->hasOne(GoodsCatRelation::className(), ['goods_warehouse_id' => 'goods_warehouse_id']);
    }
}
