<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\advance\handlers;

use app\handlers\HandlerBase;
use app\models\Goods;
use app\plugins\advance\models\AdvanceGoods;

class GoodsDestroyHandler extends HandlerBase
{
    /**
     * 事件处理注册
     */
    public function register()
    {
        \Yii::$app->on(Goods::EVENT_DESTROY, function ($event) {
            AdvanceGoods::updateAll([
                'is_delete' => 1,
            ], [
                'goods_id' => $event->goods->id,
                'mall_id' => $event->goods->mall_id
            ]);
        });
    }
}
