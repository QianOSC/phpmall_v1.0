<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\mall\copyright;


use app\core\response\ApiCode;
use app\forms\common\CommonOption;
use app\models\Model;
use app\models\Option;

class CopyrightEditForm extends Model
{
    public $data;
    public $mall_id;

    public function rules()
    {
        return [
            [['data'], 'safe'],
            [['mall_id'], 'integer']
        ];
    }

    public function save()
    {
        try {
            if (!$this->data) {
                throw new \Exception('请输入form参数数据');
            }
            $mallId = $this->mall_id ? $this->mall_id : \Yii::$app->mall->id;
            $res = CommonOption::set(Option::NAME_COPYRIGHT, $this->data, $mallId, Option::GROUP_APP);

            if (!$res) {
                throw new \Exception('保存失败');
            }

            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '保存成功',
            ];
        } catch (\Exception $e) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $e->getMessage(),
            ];
        }
    }
}
