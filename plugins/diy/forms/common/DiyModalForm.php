<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\diy\forms\common;


use app\models\Model;
use app\plugins\fxhb\models\FxhbActivity;

class DiyModalForm extends Model
{
    public function getModal()
    {
        try {
            // 暂时只有裂变红包
            return \Yii::$app->plugin->getPlugin('fxhb')->getHomePage('api');
        } catch (\Exception $exception) {
            return [];
        }
    }
}
