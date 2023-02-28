<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\mch\forms\mall;

use app\core\response\ApiCode;
use app\models\Model;
use app\plugins\mch\models\MchCommonCat;

class CommonCatEditForm extends Model
{
    public $id;
    public $name;
    public $sort;
    public $status;

    public function rules()
    {
        return [
            [['name', 'sort', 'status'], 'required'],
            [['id', 'sort', 'status'], 'integer']
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        try {
            if ($this->id) {
                $model = MchCommonCat::findOne($this->id);
                if (!$model) {
                    throw new \Exception('类目不存在');
                }
            } else {
                $model = new MchCommonCat();
                $model->mall_id = \Yii::$app->mall->id;
            }
            $model->name = $this->name;
            $model->sort = $this->sort;
            $model->status = $this->status;
            $res = $model->save();
            if (!$res) {
                throw new \Exception($this->getErrorMsg($model));
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
