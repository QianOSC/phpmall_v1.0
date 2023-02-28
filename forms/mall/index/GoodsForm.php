<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\mall\index;

use app\core\response\ApiCode;
use app\models\Mall;
use app\models\MallSetting;
use app\models\Model;

class GoodsForm extends Model
{
    public $show_contact_type;
    public $good_negotiable;
    public $show_goods_auth;
    public $buy_goods_auth;
    public $is_remind_sell_time;

    public function rules()
    {
        return [
            [['good_negotiable'], 'safe'],
            [['show_contact_type', 'is_remind_sell_time'], 'integer'],
            [['show_goods_auth', 'buy_goods_auth'], 'trim'],
            [['show_goods_auth', 'buy_goods_auth'], 'string'],
            [['is_remind_sell_time'], 'default', 'value' => 0]
        ];
    }

    public function attributeLabels()
    {
        return [
            'show_contact_type' => '商品详情底部客服导航',
            'good_negotiable' => '商品面议联系方式',
            'show_goods_auth' => '会员等级浏览权限',
            'buy_goods_auth' => '会员等级购买权限',
            'is_remind_sell_time' => '是否开启开售时间',
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        $transaction = \Yii::$app->db->beginTransaction();
        try {
            foreach ($this->attributes as $k => $item) {
                if ($k == 'good_negotiable' && empty($item)) {
                    $item = ['contact'];
                }

                if (in_array($k, ['good_negotiable'])) {
                    $newItem = json_encode($item, true);
                } else {
                    $newItem = $item;
                }

                $mallSetting = MallSetting::findOne(['key' => $k, 'mall_id' => \Yii::$app->mall->id]);
                if ($mallSetting) {
                    $mallSetting->value = (string)$newItem;
                    $res = $mallSetting->save();
                } else {
                    $mallSetting = new MallSetting();
                    $mallSetting->key = $k;
                    $mallSetting->value = (string)$newItem;
                    $mallSetting->mall_id = \Yii::$app->mall->id;
                    $res = $mallSetting->save();
                }

                if (!$res) {
                    throw new \Exception($this->getErrorMsg($mallSetting));
                }
            }
            $transaction->commit();
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '保存成功。',
            ];
        } catch (\Exception $exception) {
            $transaction->rollBack();
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $exception->getMessage(),
                'error' => $exception
            ];
        }
    }

    public function getDetail()
    {
        $mall = new Mall();
        $setting = $mall->getMallSetting(array_keys($this->attributeLabels()));
        return [
            'code' => 0,
            'data' => [
                'detail' => $setting
            ]
        ];
    }
}
