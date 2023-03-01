<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\pintuan\forms\common;


use app\forms\common\template\tplmsg\BaseTemplate;
use app\plugins\pintuan\forms\mall\TemplateForm;

/**
 * Class PintuanFailTemplate
 * @package app\plugins\pintuan\forms\common
 * 拼团失败通知
 */
class PintuanFailTemplate extends BaseTemplate
{
    protected $templateTpl = 'pintuan_fail_notice';
    public $order_no; // 订单号
    public $goodsName; // 商品名称
    public $remark; // 退款原因

    public function setTemplateForm()
    {
        $this->templateForm = new TemplateForm();
    }

    public function msg()
    {
        return [
            'keyword1' => [
                'value' => $this->order_no,
                'color' => '#333333',
            ],
            'keyword2' => [
                'value' => $this->goodsName,
                'color' => '#333333',
            ],
            'keyword3' => [
                'value' => $this->remark,
                'color' => '#333333',
            ],
        ];
    }

    public function test()
    {
        $this->order_no = 'qweqewq121';
        $this->goodsName = '男士纯棉白T恤1件';
        $this->remark = '您参与的拼团未成团，订单自动关闭并退款';
        return $this->send();
    }
}
