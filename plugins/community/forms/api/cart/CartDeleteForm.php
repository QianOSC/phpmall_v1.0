<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\forms\api\cart;


use app\plugins\community\forms\Model;
use app\plugins\community\models\CommunityCart;
use yii\helpers\Json;

class CartDeleteForm extends Model
{
    public $cart_id_list;

    public function rules()
    {
        return [
            [['cart_id_list'], 'required'],
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        try {
            $cartIdList = Json::decode($this->cart_id_list, true);
            CommunityCart::updateAll(['is_delete' => 1, 'deleted_at' => mysql_timestamp()], [
                'id' => $cartIdList,
                'is_delete' => 0,
                'mall_id' => \Yii::$app->mall->id,
                'user_id' => \Yii::$app->user->id
            ]);
            return $this->success(['msg' => '删除成功']);
        } catch (\Exception $exception) {
            return $this->fail(['msg' => $exception->getMessage()]);
        }
    }
}
