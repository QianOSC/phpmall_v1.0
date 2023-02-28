<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\api\share;


use app\core\response\ApiCode;
use app\forms\common\share\CommonShareLevel;
use app\models\Model;
use app\models\ShareLevel;
use app\models\User;
use yii\db\Query;

class ShareLevelForm extends Model
{
    /**
     * 获取升级条件
     */
    public function getLevelCondition()
    {
        try {
            /* @var User $user */
            $user = \Yii::$app->user->identity;
            if ($user->identity->is_distributor != 1) {
                throw new \Exception('用户不是分销商');
            }
            $query4 = ShareLevel::find()->alias('sl')->andWhere(['>', 'sl.level', $user->share->level])
                ->andWhere(['sl.is_delete' => 0, 'sl.status' => 1, 'sl.mall_id' => \Yii::$app->mall->id, 'sl.is_auto_level' => 1])
                ->orderBy(['sl.condition_type' => SORT_ASC, 'sl.condition' => SORT_ASC, 'sl.level' => SORT_DESC])
                ->select('sl.rule,sl.condition_type,sl.condition,sl.id')->limit(1000);
            $list = (new Query())->from(['s' => $query4])->groupBy('s.condition_type')->all();
            array_walk($list, function (&$item) {
                $item['condition'] = round($item['condition'], 2);
            });
            unset($item);
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '',
                'data' => [
                    'list' => $list
                ]
            ];
        } catch (\Exception $exception) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $exception->getMessage()
            ];
        }
    }

    public function levelUp()
    {
        try {
            $commonShareLevel = CommonShareLevel::getInstance();
            $commonShareLevel->user = \Yii::$app->user->identity;
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '',
                'data' => $commonShareLevel->levelUp()
            ];
        } catch (\Exception $exception) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $exception->getMessage()
            ];
        }
    }
}
