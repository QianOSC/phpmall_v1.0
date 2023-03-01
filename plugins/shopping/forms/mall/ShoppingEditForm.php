<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\shopping\forms\mall;

use app\core\response\ApiCode;
use app\models\Model;
use app\plugins\shopping\models\ShoppingSetting;

class ShoppingEditForm extends Model
{
    public $id;
    public $is_open;

    public function rules()
    {
        return [
            [['is_open'], 'required'],
            [['is_open'], 'integer']
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        try {
            $setting = ShoppingSetting::find()->where(['mall_id' => \Yii::$app->mall->id])->one();

            if (!$setting) {
                $setting = new ShoppingSetting();
                $setting->mall_id = \Yii::$app->mall->id;
            }

            $setting->is_open = $this->is_open;
            $res = $setting->save();

            if (!$res) {
                throw new \Exception($this->getErrorMsg($setting));
            }

            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '保存成功'
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
