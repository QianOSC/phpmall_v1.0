<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\common\transfer;

use app\core\payment\PaymentException;
use app\forms\common\platform\PlatformConfig;
use app\models\PaymentTransfer;
use app\models\User;
use app\plugins\wxapp\Plugin;
use luweiss\Wechat\WechatException;

class WxH5Transfer extends BaseTransfer
{

    public function transfer($paymentTransfer, $user)
    {
        $t = \Yii::$app->db->beginTransaction();
        try {
            if ($paymentTransfer->pay_type != 'wechat') {
                throw new \Exception('不支持该平台提现');
            }
            $plugin = \Yii::$app->plugin->getPlugin($paymentTransfer->pay_type);
            $wechatPay = $plugin->getWechatPay($paymentTransfer->pay_type);
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
