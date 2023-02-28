<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\mch\forms\api\poster;

use app\forms\api\poster\common\BaseConst;
use app\models\Model;

class PosterCustomize extends Model implements BaseConst
{
    public function traitQrcode($class)
    {
        return [
            ['id' => $class->goods->id, 'user_id' => \Yii::$app->user->id, 'mch_id' => $class->goods->mch_id],
            240,
            'plugins/mch/goods/goods',
        ];
    }
}