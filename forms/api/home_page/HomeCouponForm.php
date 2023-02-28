<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\api\home_page;


use app\forms\common\coupon\CommonCouponList;
use app\models\Model;

class HomeCouponForm extends Model
{
    public function getCouponList()
    {
        $common = new CommonCouponList();
        $common->user = \Yii::$app->user->identity;
        $list = $common->getList();

        return $common->getIndexData($list);
    }
}
