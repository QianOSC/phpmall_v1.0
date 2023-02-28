<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\forms\attachment;


use app\core\response\ApiCode;
use app\models\AttachmentGroup;
use app\models\Model;

class GroupUpdateForm extends Model
{
    public $id;
    public $name;
    public $mall_id;
    public $mch_id;
    public $type;

    public function rules()
    {
        return [
            [['name',], 'trim'],
            [['name', 'mall_id', 'mch_id'], 'required'],
            [['id', 'type'], 'integer',],
            [['name',], 'string', 'max' => 64,],
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse($this);
        }
        $model = AttachmentGroup::findOne([
            'id' => $this->id,
            'mall_id' => $this->mall_id,
            'is_delete' => 0,
            'mch_id' => $this->mch_id,
        ]);
        if (!$model) {
            $model = new AttachmentGroup();
            $model->mall_id = $this->mall_id;
            $model->mch_id = $this->mch_id;
            $model->type = $this->type;
        }
        $model->name = $this->name;
        if (!$model->save()) {
            return $this->getErrorResponse($model);
        }
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '保存成功。',
            'data' => $model,
        ];
    }
}
