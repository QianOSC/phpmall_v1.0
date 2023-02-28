<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\jobs;


use app\forms\common\prints\PrintOrder;
use app\models\Mall;
use app\models\Order;
use yii\base\BaseObject;
use yii\queue\JobInterface;

/**
 * Class PrintJob
 * @package app\jobs
 * @property Order $order
 * @property Mall $mall
 */
class PrintJob extends BaseJob implements JobInterface
{
    public $order;
    public $mall;
    public $orderType;

    public function execute($queue)
    {
        try {
            $this->setRequest();
            \Yii::$app->setMall($this->mall);

            $printer = new PrintOrder();
            $printer->print($this->order, $this->order->id, $this->orderType);
        } catch (\Exception $exception) {
            \Yii::error('小票打印机打印:' . $exception->getMessage());
            \Yii::warning($exception);
        }
    }
}
