<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\bargain\forms\api;


use app\core\response\ApiCode;
use app\models\Mall;
use app\models\Model;
use app\models\OrderSubmitResult;
use app\models\User;
use app\plugins\bargain\forms\common\CommonBargainOrder;
use app\plugins\bargain\models\BargainOrder;

/**
 * @property Mall $mall
 * @property User $user
 */
class BargainResultForm extends ApiModel
{
    public $mall;
    public $user;

    public $queueId;
    public $token;

    public function rules()
    {
        return [
            [['queueId', 'token'], 'required']
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        if ($this->queueId != 'undefined' && !\Yii::$app->queue->isDone($this->queueId)) {
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'data' => [
                    'retry' => 1
                ]
            ];
        }

        $commonBargainOrder = CommonBargainOrder::getCommonBargainOrder($this->mall);
        /* @var OrderSubmitResult $orderSubmitResult */
        $orderSubmitResult = $commonBargainOrder->getBargainOrderResult($this->token);
        if ($orderSubmitResult) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $orderSubmitResult->data
            ];
        }
        /* @var BargainOrder $bargainOrder */
        $bargainOrder = $commonBargainOrder->getTokenOrder($this->token);

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => [
                'bargain_order_id' => $bargainOrder ? $bargainOrder->id : ''
            ]
        ];
    }
}
