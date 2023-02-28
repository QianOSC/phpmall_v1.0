<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\api\goods;

use app\forms\common\goods\GoodsAuth;
use app\models\Goods;
use app\models\GoodsRemind;
use app\models\Model;

class RemindForm extends Model
{
    public $goods_id;

    public function rules()
    {
        return [
            [['goods_id'], 'integer']
        ];
    }

    public function remind()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        $remind = GoodsRemind::findOne([
            'mall_id' => \Yii::$app->mall->id,
            'user_id' => \Yii::$app->user->id,
            'goods_id' => $this->goods_id,
            'is_delete' => 0
        ]);
        if (!$remind) {
            $remind = new GoodsRemind();
            $remind->mall_id = \Yii::$app->mall->id;
            $remind->user_id = \Yii::$app->user->id;
            $remind->goods_id = $this->goods_id;
            $remind->is_delete = 0;
            $remind->remind_at = '0000-00-00 00:00:00';
        }
        if ($remind->is_remind != 1) {
            $remind->is_remind = 1;
            if (!$remind->save()) {
                return $this->getErrorResponse($remind);
            }
        }
        return [
            'code' => 0,
            'msg' => '提醒设置成功'
        ];
    }
}
