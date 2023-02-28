<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\template\tplmsg;


class AudiResultTemplate extends BaseTemplate
{
    protected $templateTpl = 'audit_result_tpl';
    public $remark;
    public $result;
    public $name;
    public $time;

    public function msg()
    {
        return [
            'keyword1' => [
                'value' => $this->remark,
                'color' => '#333333',
            ],
            'keyword2' => [
                'value' => $this->result,
                'color' => '#333333',
            ],
            'keyword3' => [
                'value' => $this->name,
                'color' => '#333333',
            ],
            'keyword4' => [
                'value' => $this->time,
                'color' => '#333333',
            ],
        ];
    }

    public function test()
    {
        $this->remark = '恭喜您，您提交的申请已通过审核';
        $this->result = '通过';
        $this->name = '测试店铺';
        $this->time = '2019年10月10日 10:10';
        return $this->send();
    }

    protected function wechatMsg()
    {
        return [
            'keyword1' => [
                'value' => $this->name,
                'color' => '#333333',
            ],
            'keyword2' => [
                'value' => $this->result,
                'color' => '#333333',
            ],
            'keyword3' => [
                'value' => $this->time,
                'color' => '#333333',
            ],
        ];
    }

    protected function wechatRemark()
    {
        return [
            'remark' => [
                'value' => $this->remark,
                'color' => '#333333'
            ]
        ];
    }
}
