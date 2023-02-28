<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\core\payment;


use yii\base\Model;

class PaymentOrder extends Model
{
    const PAY_TYPE_HUODAO = 'huodao';
    const PAY_TYPE_BALANCE = 'balance';
    const PAY_TYPE_WECHAT = 'wechat';
    const PAY_TYPE_ALIPAY = 'alipay';
    const PAY_TYPE_BAIDU = 'baidu';
    const PAY_TYPE_TOUTIAO = 'toutiao';
    const PAY_TYPE_WECHAT_H5 = 'wechat_h5';
    const PAY_TYPE_ALIPAY_H5 = 'alipay_h5';
    const PAY_TYPE_WECHAT_SCAN = 'wechat_scan';
    const PAY_TYPE_ALIPAY_SCAN = 'alipay_scan';
    const PAY_TYPE_POS = 'pos';
    const PAY_TYPE_CASH = 'cash';
    const PAY_TYPE_UNIONPAY = 'unionpay';

    public $orderNo;
    public $amount;
    public $title;
    public $notifyClass;
    public $supportPayTypes;
    public $payType;

    public function rules()
    {
        return [
            [['orderNo', 'amount', 'title', 'notifyClass'], 'required',],
            [['orderNo'], 'string', 'max' => 32],
            [['title'], 'string', 'max' => 128],
            [['notifyClass'], 'string', 'max' => 512],
            [['amount'], function ($attribute, $params) {
                if (!is_float($this->amount) && !is_int($this->amount) && !is_double($this->amount)) {
                    $this->addError($attribute, '`amount`必须是数字类型。');
                }
            }],
            [['amount'], 'number', 'min' => 0, 'max' => 100000000],
            [['payType'], 'safe'],
            [['supportPayTypes'], 'safe'],
        ];
    }

    /**
     * PaymentOrder constructor.
     * @param array $config
     */
    public function __construct(array $config = [])
    {
        parent::__construct($config);
        if (!$this->validate()) {
            dd($this->errors);
        }
    }
}
