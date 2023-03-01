<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\ttapp\forms;

class TemplateInfo
{
    private $data;

    public function __construct($type, $info)
    {
        foreach ($info as $k => $v) {
            unset($info[$k]['color']);
        }

        switch ($type) {
            case "order_pay_tpl":
                $this->data =  [
                    'keyword1' => [
                        'value' => $info['keyword1']['value'],
                    ],
                    'keyword2' => [
                        'value' => $info['keyword2']['value'],
                    ],
                    'keyword3' => [
                        'value' => $info['keyword4']['value'],
                    ],
                    'keyword4' => [
                        'value' => $info['keyword3']['value'],
                    ],
                ];
                break;

            default:
                $this->data =  $info;
                break;
        }
    }

    public function getData()
    {
        return $this->data;
    }
}
