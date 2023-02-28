<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\common\mch;


use app\models\Model;
use app\plugins\mch\models\MchMallSetting;

class MchMallSettingForm extends Model
{
    public function search()
    {
        $mchMallSetting = MchMallSetting::findOne(['mch_id' => \Yii::$app->user->identity->mch_id]);
        return $mchMallSetting;
    }
}
