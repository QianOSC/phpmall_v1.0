<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\mall\share;


use app\core\response\ApiCode;
use app\models\Model;
use app\models\ShareLevel;
use app\models\ShareSetting;

class LevelForm extends Model
{
    public $keyword;
    public $page;

    public function rules()
    {
        return [
            [['keyword'], 'string'],
            [['keyword'], 'trim'],
            [['page'], 'integer'],
            [['page'], 'default', 'value' => 1]
        ];
    }

    public function getList()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        $list = ShareLevel::find()->where([
            'mall_id' => \Yii::$app->mall->id, 'is_delete' => 0
        ])->keyword($this->keyword, ['like', 'name', $this->keyword])
            ->page($pagination, 20, $this->page)->orderBy(['level' => SORT_ASC])->all();
        $level = ShareSetting::get(\Yii::$app->mall->id, ShareSetting::LEVEL, 0);
        array_walk($list, function (&$item) use ($level) {
            $item->condition = round($item->condition, 2);
            switch ($level) {
                case 0:
                    $item->first = -1;
                    $item->second = -1;
                    $item->third = -1;
                    break;
                case 1:
                    $item->second = -1;
                    $item->third = -1;
                    break;
                case 2:
                    $item->third = -1;
                    break;
                default:
            }
        });
        unset($item);
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '',
            'data' => [
                'list' => $list,
                'pagination' => $pagination
            ]
        ];
    }
}
