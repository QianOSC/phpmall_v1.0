<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\forms\admin\mall;


use app\core\response\ApiCode;
use app\models\Mall;
use app\models\Model;

class MallUpdateForm extends Model
{
    public $id;
    public $is_recycle;

    public function rules()
    {
        return [
            [['id', 'is_recycle'], 'integer'],
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse($this);
        }

        try {
            $mall = Mall::find()->where([
                'id' => $this->id,
                'is_delete' => 0,
            ])->one();

            if (!$mall) {
                throw new \Exception('商城不存在');
            }

            if (\Yii::$app->user->identity->identity->is_super_admin != 1) {
                if ($mall->user_id != \Yii::$app->user->id) {
                    throw new \Exception('用户无操作权限');
                }
            }

            $mall->is_recycle = $mall->is_recycle ? 0 : 1;
            $res = $mall->save();

            if (!$res) {
                throw new \Exception($this->getErrorMsg($mall));
            }

            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '操作成功',
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
