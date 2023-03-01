<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\wxapp\forms;


use app\core\payment\PaymentException;
use app\forms\common\platform\PlatformConfig;
use app\forms\common\transfer\BaseTransfer;
use app\plugins\wxapp\Plugin;
use luweiss\Wechat\WechatException;

class WechatTransfer extends BaseTransfer
{
    /**
     * @param \app\models\PaymentTransfer $paymentTransfer
     * @param \app\models\User $user
     * @return bool
     * @throws PaymentException
     */
    public function transfer($paymentTransfer, $user)
    {
        $t = \Yii::$app->db->beginTransaction();
        try {
            $plugin = new Plugin();
            $wechatPay = $plugin->getWechatPay();
            $openid = PlatformConfig::instance()->getPlatformOpenid($user);
            $result = $wechatPay->transfers([
                'partner_trade_no' => $paymentTransfer->order_no,
                'openid' => current($openid),
                'amount' => $paymentTransfer->amount * 100,
                'desc' => '转账',
            ]);
            $paymentTransfer->is_pay = 1;
            if (!$paymentTransfer->save()) {
                throw new \Exception($this->getErrorMsg($paymentTransfer));
            }
            $t->commit();
            return true;
        } catch (WechatException $e) {
            $t->rollBack();
            throw new PaymentException($e->getRaw()['err_code_des']);
        } catch (\Exception $e) {
            $t->rollBack();
            throw new PaymentException($e->getMessage());
        }
    }
}
