<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\mall\card;


use app\core\response\ApiCode;
use app\models\GoodsCards;
use app\models\Model;

class CardSwitchForm extends Model
{
    public $id;
    public function rules()
    {
        return [
            ['id', 'integer'],
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        try {
            $card = GoodsCards::findOne(['mall_id' => \Yii::$app->mall->id, 'id' => $this->id]);
            if (!$card) {
                throw new \Exception('卡券不存在');
            }
            $card->is_allow_send = $card->is_allow_send === 1 ? 0 : 1;
            if (!$card->save()) {
                throw new \Exception($this->getErrorMsg($card));
            }
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '修改成功'
            ];
        } catch (\Exception $exception) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $exception->getMessage(),
                'error' => $exception
            ];
        }
    }
}
