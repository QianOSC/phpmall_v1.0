<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\share;


use app\models\Goods;
use app\models\Model;
use yii\db\Exception;

class CommonGoodsShare extends Model
{
    /**
     * @return CommonGoodsShare
     */
    public static function getCommonGoodsShare()
    {
        return new CommonGoodsShare();
    }

    /**
     * @param $params
     * @return \app\models\GoodsShare|null
     * @throws Exception
     */
    public function getGoodsShare($params)
    {
        if ($params instanceof Goods) {
            $goods = $params;
        } elseif (is_numeric($params)) {
            $goods = Goods::findOne($params);
        } else {
            throw new Exception('错误的参数,$param必须是\app\models\GoodsAttr的对象或对象ID');
        }
        $goodsShare = null;
        foreach ($goods->share as $item) {
            if ($item->goods_attr_id == 0) {
                $goodsShare = $item;
            }
        }
        return $goodsShare;
    }
}
