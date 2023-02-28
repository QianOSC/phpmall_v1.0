<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\common\coupon;

use app\models\Coupon;
use app\models\OrderDetail;
use app\models\User;

/**
 * @property User $user
 */
class UserCouponGoods extends UserCouponData
{
    public $coupon;
    public $user;
    public $userCoupon;
    public $order;

    public function __construct(Coupon $coupon, User $user, OrderDetail $order)
    {
        $this->coupon = $coupon;
        $this->user = $user;
        $this->order = $order;
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
        $userCouponGoods = new \app\models\UserCouponGoods();
        $userCouponGoods->mall_id = $this->coupon->mall_id;
        $userCouponGoods->user_id = $this->user->id;
        $userCouponGoods->goods_id = $this->order->goods_id;
        $userCouponGoods->user_coupon_id = $this->userCoupon->id;
        return $userCouponGoods->save();
    }
}
