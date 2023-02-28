<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\bargain\models;

/**
 * Class Goods
 * @package app\plugins\bargain\models
 * @property BargainGoods $bargainGoods
 */
class Goods extends \app\models\Goods
{
    public function getBargainGoods()
    {
        return $this->hasOne(BargainGoods::className(), ['goods_id' => 'id']);
    }
}
