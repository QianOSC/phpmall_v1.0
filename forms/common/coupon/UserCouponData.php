<?php
/**
 * @author Qian
 */

namespace app\forms\common\coupon;


use yii\db\Exception;

abstract class UserCouponData
{
    public $userCoupon;
    abstract public function save();

    /**
     * @param $coupon
     * @return bool
     * @throws Exception
     */
    public function check($coupon)
    {
        if ($coupon->total_count != -1) {
            if ($coupon->total_count <= 0) {
                throw new Exception('已领完');
                return false;
//                throw new Exception('优惠券数量领取已达上限');
            }
        }
        return true;
    }
}
