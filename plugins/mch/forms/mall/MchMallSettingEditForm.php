<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\mch\forms\mall;


use app\core\response\ApiCode;
use app\models\Model;
use app\plugins\mch\models\MchMallSetting;

class MchMallSettingEditForm extends Model
{
    public $id;
    public $is_share;
    public $mch_id;

    public function rules()
    {
        return [
            [['id', 'is_share', 'mch_id'], 'integer'],
            [['is_share', 'mch_id'], 'required'],
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        try {
            if ($this->id) {
                $model = MchMallSetting::findOne($this->id);

                if (!$model) {
                    throw new \Exception('商户设置异常');
                }
            } else {
                $model = new MchMallSetting();
                $model->mall_id = \Yii::$app->mall->id;
                $model->mch_id = $this->mch_id;
            }

            $model->is_share = $this->is_share;
            $res = $model->save();

            if (!$res) {
                throw new \Exception($this->getErrorMsg($model));
            }

            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '保存成功',
            ];
        } catch (\Exception $e) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $e->getMessage(),
                'error' => [
                    'line' => $e->getLine()
                ]
            ];
        }
    }
}
