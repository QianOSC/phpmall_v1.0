<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\api\order\strategy;

use app\models\FullReduceActivity;

class FullReduceStrategy
{
    /**@var FullReduceStrategyAbstract $strategy**/
    private $strategy;
    /**
     * @var FullReduceActivity $strategy
     */
    private $activity;

    /**
     * 初始时，传入具体的策略对象
     * @param FullReduceActivity $activity
     */
    public function __construct($activity)
    {
        switch ($activity->rule_type) {
            case 1:
                $this->strategy = new FullReduceLadderStrategy();
                break;
            case 2:
                $this->strategy = new FullReduceLoopStrategy();
                break;
            default:
                throw new \Exception('未知的满减方案');
        }
        $this->activity = $activity;
    }

    /**
     * 执行优惠算法
     * @param $mchItem
     * @param $totalGoodsOriginalPrice
     * @param $totalGoodsPrice
     * @return mixed
     */
    public function get($mchItem, $totalGoodsOriginalPrice, $totalGoodsPrice)
    {
        return $this->strategy->discount($this->activity, $mchItem, $totalGoodsOriginalPrice, $totalGoodsPrice);
    }

    /**
     * 获取下一级优惠情况
     * @param $mchItem
     * @param $totalGoodsOriginalPrice
     * @param $totalGoodsPrice
     * @return mixed
     */
    public function getNext($mchItem, $totalGoodsOriginalPrice, $totalGoodsPrice)
    {
        return $this->strategy->nextDiscount($this->activity, $mchItem, $totalGoodsOriginalPrice, $totalGoodsPrice);
    }
}
