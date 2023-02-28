<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\check_in\forms\api;


use app\core\response\ApiCode;
use app\plugins\check_in\forms\common\Common;

class SignInResultForm extends ApiModel
{
    public $queueId;
    public $token;

    public function rules()
    {
        return [
            [['queueId', 'token'], 'required']
        ];
    }

    public function search()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        if (!\Yii::$app->queue->isDone($this->queueId)) {
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '',
                'data' => [
                    'retry' => 1
                ]
            ];
        }
        try {
            $common = Common::getCommon($this->mall);
            $queueData = $common->getQueueData($this->token);
            if ($queueData) {
                throw new \Exception($queueData->data);
            }
            $signIn = $common->getSignInByToken($this->token, $this->user);
            if (!$signIn) {
                throw new \Exception('无效的token');
            }
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '请求成功',
                'data' => [
                    'number' => $signIn->number,
                    'type' => $signIn->type,
                    'day' => $signIn->day,
                    'status' => $signIn->status
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
