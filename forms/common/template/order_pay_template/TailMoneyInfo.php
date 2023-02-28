<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\template\order_pay_template;

class TailMoneyInfo extends BaseInfo
{
    public const TPL_NAME = 'pay_advance_balance';
    protected $key = 'store';
    protected $chineseName = '尾款支付提醒';

    public function getSendClass()
    {
        return new TailMoneyTemplate();
    }

    public function configAll()
    {
        $iconUrlPrefix = './statics/img/mall/tplmsg/';
        return [
            'wxapp' => [
                'config' => [
                    'id' => '2956',
                    'keyword_id_list' => [6, 2, 4],
                    'title' => '商品到货通知',
                    'categoryId' => '307', // 类目id
                    'type' => 2, // 订阅类型 2--一次性订阅 1--永久订阅
                    'data' => [
                        'thing6' => '',
                        'amount2' => '',
                        'thing4' => '',
                    ]
                ],
                'local' => [
                    'name' => '商品到货通知（类目: 服装/鞋/箱包 ）',
                    'img_url' => $iconUrlPrefix . 'wxapp/tailmoney_pay_tpl.png'
                ]
            ],
            'aliapp' => [
                'local' => [
                    'name' => '尾款支付提醒',
                    'img_url' => $iconUrlPrefix . 'aliapp/tailmoney_pay_tpl.png'
                ]
            ],
            'bdapp' => [
                'config' => [
                    'id' => 'BD0768',
                    'keyword_id_list' => [6, 2, 4, 5],
                    'title' => '尾款支付提醒'
                ],
                'local' => [
                    'name' => '尾款支付提醒（模板编号：BD0768）',
                    'img_url' => $iconUrlPrefix . 'bdapp/tailmoney_pay_tpl.png'
                ]
            ],
            'wechat' => [
                'config' => [
                    'id' => 'OPENTM207582131',
                    'keyword_id_list' => 'OPENTM207582131',
                    'title' => '预售结束通知'
                ],
                'local' => [
                    'name' => '商品到货提醒',
                    'img_url' => ''
                ]
            ]
        ];
    }
}
