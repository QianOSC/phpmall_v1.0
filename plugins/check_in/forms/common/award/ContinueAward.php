<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\check_in\forms\common\award;


class ContinueAward extends BaseAward
{
    /**
     * @return mixed
     * @throws \Exception
     * 校验
     */
    public function check()
    {
        $common = $this->common;
        $checkInUser = $common->getCheckInUser($this->user);
        if ($checkInUser->continue < $this->day) {
            throw new \Exception('用户连续签到天数未达到领取条件');
        }
        $sign = $common->getSignInByContinue($this->status, $this->day, $checkInUser);
        if ($sign) {
            throw new \Exception('已领取奖励');
        }
        return true;
    }
}
