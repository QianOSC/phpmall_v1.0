<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\mall\postage_rules;


use app\core\response\ApiCode;
use app\models\Model;
use app\models\PostageRules;

class PostageRulesListForm extends Model
{
    public $limit;
    public $page;
    public $keyword;
    public $mch_id;

    public function rules()
    {
        return [
            [['limit', 'page', 'mch_id'], 'integer'],
            ['limit', 'default', 'value' => 10],
            ['page', 'default', 'value' => 1],
            [['keyword'], 'string'],
        ];
    }

    public function search()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        /* @var $pagination \app\core\Pagination */
        $pagination = null;
        $query = PostageRules::find()->where([
            'is_delete' => 0,
            'mall_id' => \Yii::$app->mall->id,
            'mch_id' => \Yii::$app->user->identity->mch_id,
        ]);

        if ($this->keyword) {
            $query->andWhere(['like', 'name', $this->keyword]);
        }
        $list = $query->select(['id', 'name', 'status'])->page($pagination, $this->limit, $this->page)->all();

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '',
            'data' => [
                'list' => $list,
                'pagination' => $pagination,
                'ofs' => $pagination->offset,
                'lim' => $pagination->limit
            ]
        ];
    }

    public function allList()
    {
        $allList = PostageRules::find()->where([
            'is_delete' => 0,
            'mall_id' => \Yii::$app->mall->id,
            'mch_id' => $this->mch_id ?: \Yii::$app->user->identity->mch_id,
        ])->select(['id', 'name', 'status'])->all();

        array_unshift($allList, [
            'id' => 0,
            'name' => '默认运费',
            'status' => 0
        ]);

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'list' => $allList
            ]
        ];
    }
}
