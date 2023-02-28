<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\common\refund;

use app\core\payment\PaymentException;
use app\models\PaymentRefund;
use luweiss\Wechat\WechatException;

class WxH5Refund extends BaseRefund
{
    public function refund($paymentRefund, $paymentOrderUnion)
    {
        $t = \Yii::$app->db->beginTransaction();
        try {
            $plugin = \Yii::$app->plugin->getPlugin($paymentOrderUnion->platform);
            $wechatPay = $plugin->getWechatPay($paymentOrderUnion->platform);
            // 微信退款
            $wechatPay->refund([
                'out_trade_no' => $paymentRefund->out_trade_no,
                'out_refund_no' => $paymentRefund->order_no,
                'total_fee' => $paymentOrderUnion->amount * 100,
                'refund_fee' => $paymentRefund->amount * 100,
            ]);
            $this->save($paymentRefund);
            $t->commit();
            return true;
        } catch (WechatException $e) {
            $t->rollBack();
            throw new PaymentException($e->getMessage());
        } catch (\Exception $e) {
            $t->rollBack();
            throw new PaymentException('请检查支付证书是否填写正确');
        }
    }

    /**
     * @param PaymentRefund $paymentRefund
     * @throws \Exception
     */
    private function save($paymentRefund)
    {
        $paymentRefund->is_pay = 1;
        $paymentRefund->pay_type = 7;
        if (!$paymentRefund->save()) {
            throw new \Exception($this->getErrorMsg($paymentRefund));
        }
    }
}
