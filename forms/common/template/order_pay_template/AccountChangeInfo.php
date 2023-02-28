<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\template\order_pay_template;

use app\forms\common\template\tplmsg\AccountChange;

class AccountChangeInfo extends BaseInfo
{
    public const TPL_NAME = 'account_change_tpl';
    protected $key = 'store';
    protected $chineseName = '账户变动提醒';

    public function getSendClass()
    {
        return new AccountChange();
    }

    public function configAll()
    {
        $iconUrlPrefix = './statics/img/mall/tplmsg/';
        return [
            'aliapp' => [
                'local' => [
                    'name' => '提现成功',
                    'img_url' => $iconUrlPrefix . 'aliapp/withdraw_success_tpl.png'
                ]
            ]
        ];
    }
}