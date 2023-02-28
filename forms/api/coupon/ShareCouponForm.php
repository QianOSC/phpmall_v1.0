<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\api\coupon;


use app\core\response\ApiCode;
use app\forms\common\coupon\CommonCouponAutoSend;
use app\models\Mall;
use app\models\Model;
use app\models\User;

/**
 * @property Mall $mall
 * @property User $user
 */
class ShareCouponForm extends Model
{
    public $user;
    public $mall;

    public function send()
    {
        try {
            $commonCouponAutoSend = new CommonCouponAutoSend();
            $commonCouponAutoSend->event = 1;
            $commonCouponAutoSend->user = $this->user;
            $commonCouponAutoSend->mall = $this->mall;
            $couponList = $commonCouponAutoSend->send();
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '分享成功',
                'data' => [
                    'list' => $couponList
                ]
            ];
        } catch (\Exception $exception) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $exception->getMessage()
            ];
        }
    }
}
