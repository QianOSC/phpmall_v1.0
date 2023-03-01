<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\pintuan\forms\common\v2;


use app\forms\common\template\tplmsg\BaseTemplate;
use app\plugins\pintuan\forms\mall\TemplateForm;

/**
 * Class PintuanSuccessTemplate
 * @package app\plugins\pintuan\forms\common
 * 拼团成功通知
 */
class PintuanSuccessTemplate extends BaseTemplate
{
    protected $templateTpl = 'pintuan_success_notice';
    public $goodsName; // 商品名称
    public $order_no; // 订单号
    public $thing; // 拼团成员

    public function msg()
    {
        return [
            'keyword1' => [
                'value' => $this->goodsName,
                'color' => '#333333',
            ],
            'keyword2' => [
                'value' => $this->order_no,
                'color' => '#333333',
            ],
            'keyword3' => [
                'value' => $this->thing,
                'color' => '#333333',
            ],
        ];
    }

    public function setTemplateForm()
    {
        $this->templateForm = new TemplateForm();
    }

    public function test()
    {
        $this->goodsName = 'T恤';
        $this->order_no = '775845851544554';
        $this->thing = '张三、李四';
        return $this->send();
    }
}
