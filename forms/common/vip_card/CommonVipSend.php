<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\common\vip_card;

class CommonVipSend extends CommonVip
{
    /**
     * 新增或者续费超级会员卡用户
     * @param $detail_id int 子卡id
     * @param $user_id int 用户id
     * @param string $sign
     * @param int $payType 支付类型
     * @param int $isRecordOrder
     * @return
     * @throws \Exception
     */
    public function becomeOrRenew($detail_id, $user_id, $sign = '', $payType = 1, $isRecordOrder = 1)
    {
        if ($this->plugin !== false && $this->permission !== false) {
            return $this->plugin->becomeOrRenew($detail_id, $user_id, $sign, $payType, $isRecordOrder);
        } else {
            throw new \Exception('无超级会员卡权限');
        }
    }
}
