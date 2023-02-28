<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\common;


use app\models\HomeBlock;

class CommonHomeBlock
{
    /**
     * 获取所有图片魔方
     * @return array
     */
    public static function getAll()
    {
        $list = HomeBlock::find()->where([
            'mall_id' => \Yii::$app->mall->id,
            'is_delete' => 0,
        ])->asArray()->all();


        return [
            'list' => $list,
        ];
    }
}
