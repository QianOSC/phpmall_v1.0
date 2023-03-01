<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\quick_share\models;


class Goods extends \app\models\Goods
{
    public function getQuickShareGoods()
    {
        return $this->hasOne(QuickShareGoods::className(), ['goods_id' => 'id'])
            ->andWhere(['is_delete' => 0]);
    }
}