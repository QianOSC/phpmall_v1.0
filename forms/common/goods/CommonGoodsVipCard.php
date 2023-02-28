<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\common\goods;

use app\forms\common\vip_card\CommonVip;
use app\models\Goods;

class CommonGoodsVipCard extends CommonVip
{
    private $goods;

    /**
     * @param $goods
     * @return $this
     */
    public function setGoods($goods)
    {
        $this->goods = $goods;
        return $this;
    }

    /**
     * 获取小程序前端超级会员卡商品信息
     * @return array
     */
    public function getAppoint()
    {
        if ($this->plugin !== false && $this->permission !== false) {
            return $this->plugin->getAppoint($this->goods);
        }
        return [
            'discount' => null,
            'is_my_vip_card_goods' => null,
            'is_vip_card_user' => 0
        ];
    }

    /**
     * @param $orderId
     * @param $order
     * @return array[]
     */
    public function getOrderInfo($orderId, $order)
    {
        if ($this->plugin !== false && $this->permission !== false) {
            $res = $this->plugin->getOrderInfo($orderId, $order);
        }
        if (!isset($res['discount_list'])) {
            $res =  [
                'discount_list' => []
            ];
        }
        return $res;
    }
}
