<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\dianqilai\forms\common;


use app\forms\common\CommonOption;
use app\models\Mall;
use app\models\Model;

/**
 * Class CommonSetting
 * @package app\plugins\dianqilai\forms\common
 * @property Mall $mall
 */
class CommonSetting extends Model
{
    public $mall;

    public static function getCommon($mall = null)
    {
        $model = new self();
        if (!$mall) {
            $mall = \Yii::$app->mall;
        }
        $model->mall = $mall;
        return $model;
    }

    public function getToken()
    {
        $token = CommonOption::get('dianqilai_token', $this->mall->id, 'plugins', null);
        if (!$token) {
            $token = $this->setToken();
        }
        return $token;
    }

    public function setToken()
    {
        $token = \Yii::$app->security->generateRandomString();
        $res = CommonOption::set('dianqilai_token', $token, $this->mall->id, 'plugins');
        return $token;
    }
}
