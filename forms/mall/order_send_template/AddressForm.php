<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\mall\order_send_template;


use app\core\response\ApiCode;
use app\models\Model;
use app\models\OrderSendTemplateAddress;

class AddressForm extends Model
{
    public function rules()
    {
        return [];
    }

    public function address()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $address = OrderSendTemplateAddress::find()->where([
            'mall_id' => \Yii::$app->mall->id,
            'mch_id' => \Yii::$app->user->identity->mch_id,
            'is_delete' => 0,
        ])->one();

        if ($address) {
            $address = (new OrderSendTemplateAddress())->getNewData($address);
        }

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'detail' => $address,
            ]
        ];
    }
}