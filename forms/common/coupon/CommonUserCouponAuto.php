<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\coupon;


use app\models\Coupon;
use app\models\CouponAutoSend;
use app\models\UserCouponAuto;

class CommonUserCouponAuto extends UserCouponData
{
    public $coupon;
    public $autoSend;
    public $userCoupon;

    public function __construct(Coupon $coupon, CouponAutoSend $autoSend)
    {
        $this->coupon = $coupon;
        $this->autoSend = $autoSend;
    }

    /**
     * @return bool
     * @throws \yii\db\Exception
     */
    public function save()
    {
        if ($this->check($this->coupon)) {
            $this->coupon->updateCount(1, 'sub');
        }
        $userCouponCenter = new UserCouponAuto();
        $userCouponCenter->user_coupon_id = $this->userCoupon->id;
        $userCouponCenter->auto_coupon_id = $this->autoSend->id;
        return $userCouponCenter->save();
    }
}