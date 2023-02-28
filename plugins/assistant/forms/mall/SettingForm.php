<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\assistant\forms\mall;


use app\forms\common\CommonOption;
use app\plugins\assistant\forms\Model;

class SettingForm extends Model
{
    public $api_key;

    public function rules()
    {
        return [
            ['api_key', 'required'],
            ['api_key', 'trim'],
            ['api_key', 'string', 'length' => 32],
        ];
    }

    public function attributeLabels()
    {
        return [
            'api_key' => 'Api Key'
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        $res = CommonOption::set('assistant_api_key', $this->api_key, \Yii::$app->mall->id, 'plugin', \Yii::$app->user->identity->mch_id);
        if ($res) {
            return $this->success(['msg' => '保存成功']);
        } else {
            return $this->fail(['msg' => '保存失败']);
        }
    }

    public function getSetting()
    {
        $res = CommonOption::get('assistant_api_key', \Yii::$app->mall->id, 'plugin', '', \Yii::$app->user->identity->mch_id);
        return $this->success(['api_key' => $res]);
    }
}
