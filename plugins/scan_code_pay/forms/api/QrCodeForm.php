<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\scan_code_pay\forms\api;


use app\core\response\ApiCode;
use app\forms\common\CommonQrCode;
use app\models\ClerkUser;
use app\models\Model;

class QrCodeForm extends Model
{
    public $price;
    public $is_clerk_enter;

    public function rules()
    {
        return [
            [['price', 'is_clerk_enter'], 'number']
        ];
    }

    public function attributeLabels()
    {
        return [
            'price' => '金额',
            'is_clerk_enter' => '核销员端请求'
        ];
    }

    public function getQrCode()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $data = ['user_id' => \Yii::$app->user->id];

        if ($this->price) {
            $data['price'] = round($this->price, 2);
        }

        if ($this->is_clerk_enter) {
            $clerkUser= ClerkUser::find()->where([
                'mall_id' => \Yii::$app->mall->id,
                'mch_id' => \Yii::$app->user->identity->mch_id,
                'is_delete' => 0,
                'user_id' => \Yii::$app->user->id
            ])->one();

            $data['clerk_user_id'] = $clerkUser->user_id;
        }

        $commonQrCode = new CommonQrCode();
        $res = $commonQrCode->getQrCode($data, 240, 'plugins/scan_code/index/index');

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'qr_code' => $res
            ]
        ];
    }
}