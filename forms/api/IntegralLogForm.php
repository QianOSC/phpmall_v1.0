<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\api;

use app\core\currency\IntegralModel;
use app\core\response\ApiCode;
use app\models\Model;

class IntegralLogForm extends Model
{
    public $page;
    public $type;

    public function rules()
    {
        return [
            [['page', 'type'], 'integer'],
            [['page'], 'default', 'value' => 1]
        ];
    }

    public function getList()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $model = new IntegralModel();
        $model->user = \Yii::$app->user;
        $model->mall = \Yii::$app->mall;
        $model->type = $this->type ?: 1;
        $res = $model->getLogListByUser();

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'list' => $res['list'],
                'pagination' => $res['pagination'],
            ]
        ];
    }
}
