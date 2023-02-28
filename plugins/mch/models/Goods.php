<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\mch\models;


/**
 * Class Goods
 * @package app\plugins\mch\models
 * @property MchGoods mchGoods
 * @property Mch mch
 */
class Goods extends \app\models\Goods
{
    public function getMch()
    {
        return $this->hasOne(Mch::className(), ['id' => 'mch_id']);
    }

    public function getMchGoods()
    {
        return $this->hasOne(MchGoods::className(), ['goods_id' => 'id']);
    }
}
