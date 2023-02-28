<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\composition\forms\api;

use app\plugins\composition\forms\common\combination\FactoryCombination;
use app\plugins\composition\models\Composition;
use yii\helpers\ArrayHelper;

/**
 * Class OrderGoodsAttr
 * @package app\plugins\composition\forms\api
 * @property Composition $composition
 */
class OrderGoodsAttr extends \app\forms\api\order\OrderGoodsAttr
{
    public $composition_price;
    public $composition_goods_id;
    protected $composition;
    public $composition_data;

    public function setGoodsAttr($goodsAttr)
    {
        parent::setGoodsAttr($goodsAttr);
        $model = FactoryCombination::getCommon()->getCombinationList($this->composition->id, $this->composition->type);
        $model->composition = $this->composition;
        $this->composition_goods_id = $model->getCompositionGoods($this->goods_id);
    }

    public function setComposition($composition)
    {
        $this->composition = $composition;
        $this->composition_data = ArrayHelper::toArray($composition);
    }
}
