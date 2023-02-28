<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\api;


use app\core\response\ApiCode;
use app\models\Model;
use app\models\QrCodeParameter;

class QrCodeForm extends Model
{
    public $token;

    public function rules()
    {
        return [
            [['token'], 'required'],
            [['token'], 'string'],
        ];
    }

    public function getParameter()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $detail = QrCodeParameter::find()->where([
            'mall_id' => \Yii::$app->mall->id,
            'token' => $this->token
        ])->one();

        if ($detail) {
            $detail['data'] = $detail['data'] ? \Yii::$app->serializer->decode($detail['data']) : [];
            if ($detail['data']) {
                $detail['data']['qr_code_id'] = $detail->id;
            }
        }

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'detail' => $detail
            ]
        ];
    }
}
