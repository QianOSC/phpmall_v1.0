<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\bargain\forms\common;


use app\forms\common\template\tplmsg\BaseTemplate;
use app\plugins\bargain\forms\mall\TemplateForm;

/**
 * Class BargainFailTemplate
 * @package app\plugins\bargain\forms\common
 * 砍价失败通知
 */
class BargainFailTemplate extends BaseTemplate
{
    protected $templateTpl = 'bargain_fail_tpl';
    public $goodsName;
    public $price;
    public $minPrice;
    public $remark;

    public function msg()
    {
        $data = [
            'keyword1' => [
                'value' => $this->goodsName,
                'color' => '#333333',
            ],
            'keyword2' => [
                'value' => $this->price,
                'color' => '#333333',
            ],
            'keyword3' => [
                'value' => $this->minPrice,
                'color' => '#333333',
            ],
            'keyword4' => [
                'value' => $this->remark,
                'color' => '#333333',
            ],
        ];
        return $data;
    }

    public function test()
    {
        $this->goodsName = '测试商品';
        $this->price = '¥100.00';
        $this->minPrice = '¥50.00';
        $this->remark = '抱歉，您的砍价因活动过期而失败！';
        return $this->send();
    }

    public function setTemplateForm()
    {
        $this->templateForm = new TemplateForm();
    }
}
