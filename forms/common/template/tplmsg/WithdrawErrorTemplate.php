<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\template\tplmsg;

/**
 * Class WithdrawErrorTemplate
 * @package app\forms\common\template\tplmsg
 * 提现失败
 */
class WithdrawErrorTemplate extends BaseTemplate
{
    public $price; // 提现金额
    public $remark; // 失败原因
    public $time; // 提现时间
    protected $templateTpl = 'withdraw_error_tpl';

    public function msg()
    {
        return [
            'keyword1' => [
                'value' => $this->price,
                'color' => '#333333',
            ],
            'keyword2' => [
                'value' => $this->remark,
                'color' => '#333333',
            ],
        ];
    }

    public function test()
    {
        $this->price = '200';
        $this->remark = '点此查看详情';
        $this->time = '2020-11-27 09:52:00';
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
                'value' => $this->time,
                'color' => '#333333',
            ],
            'keyword3' => [
                'value' => $this->remark,
                'color' => '#333333',
            ],
        ];
    }
}
