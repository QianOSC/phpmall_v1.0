<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\miaosha\forms\mall;

use app\core\response\ApiCode;
use app\models\Model;
use app\plugins\miaosha\models\MiaoshaBanners;
use app\plugins\miaosha\forms\common\BannerListForm;

class BannerForm extends Model
{
    public $ids;

    public function rules()
    {
        return [
            [['ids'], 'safe'],
            [['ids'], 'default', "value" => []]
        ];
    }

    public function getList()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $list = (new BannerListForm())->search();
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'list' => $list,
            ]
        ];
    }

    //SAVE
    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        };

        $t = \Yii::$app->db->beginTransaction();

        MiaoshaBanners::updateAll(['is_delete' => 1, 'deleted_at' => date('Y-m-d H:i:s')], [
            'is_delete' => 0,
            'mall_id' => \Yii::$app->mall->id,
        ]);

        foreach ($this->ids as $id) {
            $form = new MiaoshaBanners();
            $form->banner_id = $id;
            $form->mall_id = \Yii::$app->mall->id;
            $form->is_delete = 0;
            if (!$form->save()) {
                $t->rollBack();
                return $this->getErrorResponse($form);
            };
        };
        $t->commit();
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '保存成功',
        ];
    }
}
