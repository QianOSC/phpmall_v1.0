<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\api\order\strategy;

use app\models\FullReduceActivity;

/**
 * 满减算法接口
 * Interface FullReduceStrategyAbstract
 * @package app\forms\api\order\strategy
 */
interface FullReduceStrategyAbstract
{
    /**
     * @param FullReduceActivity $activity
     * @param $mchItem
     * @param $totalGoodsOriginalPrice
     * @param $totalGoodsPrice
     * @return mixed
     */
    public function discount(FullReduceActivity $activity, $mchItem, $totalGoodsOriginalPrice, $totalGoodsPrice);

    /**
     * @param FullReduceActivity $activity
     * @param $mchItem
     * @param $totalGoodsOriginalPrice
     * @param $totalGoodsPrice
     * @return mixed
     */
    public function nextDiscount(FullReduceActivity $activity, $mchItem, $totalGoodsOriginalPrice, $totalGoodsPrice);
}
