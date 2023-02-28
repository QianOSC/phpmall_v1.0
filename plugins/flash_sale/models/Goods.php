<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\plugins\flash_sale\models;

/**
 * Class Goods
 * @property FlashSaleGoods $flashSaleGoods
 */
class Goods extends \app\models\Goods
{
    public function getFlashSaleGoods()
    {
        return $this->hasOne(FlashSaleGoods::className(), ['goods_id' => 'id'])
            ->andWhere(['is_delete' => 0]);
    }

    public function getAttr()
    {
        return $this->hasMany(GoodsAttr::className(), ['goods_id' => 'id'])->andWhere(['is_delete' => 0]);
    }
}
