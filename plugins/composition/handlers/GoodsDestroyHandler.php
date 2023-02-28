<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\composition\handlers;


use app\handlers\HandlerBase;
use app\models\Goods;
use app\plugins\composition\models\Composition;
use app\plugins\composition\models\CompositionGoods;

class GoodsDestroyHandler extends HandlerBase
{
    public function register()
    {
        \Yii::$app->on(Goods::EVENT_DESTROY, function ($event) {
            try {
                \Yii::warning('套餐商品被删除时，套餐下架');
                /* @var Goods $goods */
                $goods = $event->goods;
                $compositionIds = CompositionGoods::find()->where([
                    'mall_id' => $goods->mall_id, 'is_delete' => 0, 'goods_id' => $goods->id
                ])->select('model_id')->column();
                $res = Composition::updateAll(['status' => 0], ['mall_id' => $goods->mall_id, 'id' => $compositionIds]);
                \Yii::warning('共有' . $res . '个套餐因商品' . $goods->id . '被下架');
            } catch (\Exception $exception) {
                \Yii::warning('套餐商品删除失败');
                \Yii::warning($exception);
            }
        });
    }
}
