<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\jobs;


use app\events\OrderEvent;
use app\models\Mall;
use app\models\Model;
use app\models\Order;
use yii\base\BaseObject;
use yii\queue\JobInterface;
use yii\queue\Queue;

class OrderCancelJob extends BaseJob implements JobInterface
{
    public $orderId;

    /**
     * @param Queue $queue which pushed and is handling the job
     */
    public function execute($queue)
    {
        $this->setRequest();
        $order = Order::findOne([
            'id' => $this->orderId,
            'is_pay' => 0,
            'pay_type' => 0,
            'is_delete' => 0,
        ]);
        if (!$order) {
            return;
        }
        if ($order->cancel_status == 1) {
            return ;
        }
        \Yii::warning('----订单自动取消----');
        $mall = Mall::findOne(['id' => $order->mall_id]);
        \Yii::$app->setMall($mall);
        $t = \Yii::$app->db->beginTransaction();
        try {
            $order->cancel_status = 1;
            $order->cancel_time = mysql_timestamp();
            if ($order->save()) {
                $event = new OrderEvent([
                    'order' => $order,
                ]);
                \Yii::$app->trigger(Order::EVENT_CANCELED, $event);
                $t->commit();
            } else {
                throw new \Exception((new Model())->getErrorMsg($order));
            }
        } catch (\Exception $exception) {
            $t->rollBack();
        }
    }
}
