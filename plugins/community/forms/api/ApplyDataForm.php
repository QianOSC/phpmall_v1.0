<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\forms\api;


use app\plugins\community\forms\common\CommonMiddleman;
use app\plugins\community\forms\common\CommonSetting;
use app\plugins\community\forms\Model;
use yii\helpers\ArrayHelper;

class ApplyDataForm extends Model
{
    public function getData()
    {
        $setting = CommonSetting::getCommon()->getSetting();
        $common = CommonMiddleman::getCommon();
        $middleman = $common->getConfig(\Yii::$app->user->id);
        $res = [];
        if ($middleman && $middleman->delete_first_show == 1) {
            $res = $common->getMiddleman($middleman);
            if (in_array($middleman->status, [2, 3])) {
                $middleman->delete_first_show = 0;
                $middleman->save();
            }
        }
        return $this->success([
            'setting' => $setting,
            'middleman' => $res
        ]);
    }
}
