<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\api\recharge;

use app\core\response\ApiCode;
use app\models\Model;
use app\models\Recharge;

class RechargeForm extends Model
{
    public $pay_price;
    public $send_price;

    public function rules()
    {
        return [
            [['pay_price', 'send_price'], 'double']
        ];
    }

    public function getIndex()
    {
        $list = Recharge::find()
            ->where([
                'mall_id' => \Yii::$app->mall->id,
                'is_delete' => 0
            ])
            ->with(['member' => function ($query) {
                $query->where(['status' => 1, 'is_delete' => 0]);
            }])
            ->asArray()
            ->all();

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'list' => $list
            ]
        ];
    }
}
