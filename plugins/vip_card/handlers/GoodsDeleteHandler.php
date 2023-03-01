<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\vip_card\handlers;

use app\events\GoodsEvent;
use app\handlers\HandlerBase;
use app\models\Goods;
use app\plugins\vip_card\forms\common\CommonVip;
use app\plugins\vip_card\models\VipCard;

class GoodsDeleteHandler extends HandlerBase
{
    /**
     * 事件处理注册
     */
    public function register()
    {
        \Yii::$app->on(Goods::EVENT_DESTROY, function ($event) {
            /**@var GoodsEvent $event**/
            try {
                $card = CommonVip::getCommon()->getMainCard();
                if (!$card) {
                    return;
                }

                $type = json_decode($card->type_info,true);
                if ($type['all'] == true) {
                    return;
                }

                if (in_array($event->goods->goods_warehouse_id, $type['goods'])) {
                    $key = array_search($event->goods->goods_warehouse_id, $type['goods']);
                    array_splice($type['goods'], $key, 1);
                } else {
                    return ;
                }

                $card->type_info = json_encode($type);
                $card->save();
            } catch (\Exception $e) {
                \Yii::error('超级会员卡删除指定商品失败');
                \Yii::error($e);
            }
        });
    }
}
