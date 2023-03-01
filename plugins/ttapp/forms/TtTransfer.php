<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\ttapp\forms;

use app\core\payment\PaymentException;
use app\forms\common\transfer\BaseTransfer;
use app\plugins\wxapp\Plugin;
use luweiss\Wechat\WechatException;

class TtTransfer extends BaseTransfer
{
    public function transfer($paymentTransfer, $user)
    {
        throw new \Exception('头条用户暂不支持提现功能，请使用其他方式提现~');
    }
}