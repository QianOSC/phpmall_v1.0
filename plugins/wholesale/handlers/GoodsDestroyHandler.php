<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\plugins\wholesale\handlers;


use app\events\GoodsEvent;
use app\handlers\HandlerBase;
use app\models\Goods;
use app\plugins\wholesale\models\WholesaleGoods;

class GoodsDestroyHandler extends HandlerBase
{
    /**
     * 事件处理
     */
    public function register()
    {
        \Yii::$app->on(Goods::EVENT_DESTROY, function ($event) {
            /** @var GoodsEvent $event */
            // 删除服务关联
            WholesaleGoods::updateAll([
                'is_delete' => 1,
            ], [
                'goods_id' => $event->goods->id,
                'is_delete' => 0,
            ]);
        });
    }
}
