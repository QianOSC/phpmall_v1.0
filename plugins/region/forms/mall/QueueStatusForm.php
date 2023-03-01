<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\region\forms\mall;

use app\models\Model;

class QueueStatusForm extends Model
{
    public $queue_id;

    public function rules()
    {
        return [
            [['queue_id'], 'required'],
            [['queue_id',], 'integer'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'queue_id' => '队列id',
        ];
    }

    public function status()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        if (!\Yii::$app->queue->isDone($this->queue_id)) {
            return [
                'code' => 0,
                'data' => [
                    'retry' => 1,
                ],
            ];
        }
        return [
            'code' => 0,
            'msg' => '执行成功',
            'data' => ''
        ];
    }
}