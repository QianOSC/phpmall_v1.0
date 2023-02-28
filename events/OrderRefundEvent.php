<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\events;


use app\models\OrderRefund;
use yii\base\Event;

/**
 * @property OrderRefund $order_refund
 */
class OrderRefundEvent extends Event
{
    public $order_refund;
    public $advance_refund;
}
