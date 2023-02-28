<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\integral_mall\models;


/**
 * Class Goods
 * @package app\plugins\integral_mall\models
 * @property IntegralMallGoods $integralMallGoods
 */
class Goods extends \app\models\Goods
{
    public function getIntegralMallGoods()
    {
        return $this->hasOne(IntegralMallGoods::className(), ['goods_id' => 'id']);
    }
}
