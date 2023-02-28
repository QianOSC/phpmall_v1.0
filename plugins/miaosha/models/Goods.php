<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\miaosha\models;


/**
 * @property MiaoshaGoods $miaoshaGoods
 */
class Goods extends \app\models\Goods
{
    public function getMiaoshaGoods()
    {
        return $this->hasOne(MiaoshaGoods::className(), ['goods_id' => 'id'])
            ->andWhere(['is_delete' => 0]);
    }
}
