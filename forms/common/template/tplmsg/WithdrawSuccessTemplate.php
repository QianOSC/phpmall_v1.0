<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\template\tplmsg;

/**
 * Class WithdrawSuccessTemplate
 * @package app\forms\common\template\tplmsg
 * 提现成功通知
 */
class WithdrawSuccessTemplate extends BaseTemplate
{
    public $remark; // 备注
    public $price; // 提现金额
    public $serviceChange; // 手续费
    public $type; // 提现至
    protected $templateTpl = 'withdraw_success_tpl';

    public function msg()
    {
        return [
            'keyword1' => [
                'value' => $this->price,
                'color' => '#333333',
            ],
            'keyword2' => [
                'value' => $this->serviceChange,
                'color' => '#333333',
            ],
            'keyword3' => [
                'value' => $this->type,
                'color' => '#333333',
            ],
            'keyword4' => [
                'value' => $this->remark,
                'color' => '#333333',
            ],
        ];
    }

    public function test()
    {
        $this->price = '¥100.00';
        $this->serviceChange = '¥5.00';
        $this->type = '微信账户';
        $this->remark = '测试提现';
        return $this->send();
    }

    protected function wechatMsg()
    {
        return [
            'keyword1' => [
                'value' => $this->price,
                'color' => '#333333',
            ],
            'keyword2' => [
                'value' => $this->serviceChange,
                'color' => '#333333',
            ],
            'keyword3' => [
                'value' => '¥' . price_format(ltrim($this->price, '¥') - ltrim($this->serviceChange, '¥')),
                'color' => '#333333',
            ],
            'keyword4' => [
                'value' => $this->type,
                'color' => '#333333',
            ],
        ];
    }
}
