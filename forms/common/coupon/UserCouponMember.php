<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\coupon;


use app\models\Coupon;
use app\models\User;

class UserCouponMember extends UserCouponData
{
    public $coupon;
    public $user;
    public $userCoupon;

    public function __construct(Coupon $coupon, User $user)
    {
        $this->coupon = $coupon;
        $this->user = $user;
    }

    /**
     * @return bool
     * @throws \yii\db\Exception
     */
    public function save()
    {
        if ($this->check($this->coupon)) {
            $this->coupon->updateCount(1, 'sub');
        } else {
            return false;
        }
        $userCouponCenter = new \app\models\UserCouponMember();
        $userCouponCenter->mall_id = $this->coupon->mall_id;
        $userCouponCenter->user_id = $this->user->id;
        $userCouponCenter->user_coupon_id = $this->userCoupon->id;
        $userCouponCenter->member_level = $this->user->identity->member_level;
        $userCouponCenter->is_delete = 0;
        return $userCouponCenter->save();
    }
}
