<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\forms\api\poster;


use app\forms\api\poster\common\BaseConst;
use app\forms\api\poster\common\CommonFunc;
use app\plugins\community\forms\common\CommonMiddleman;
use app\plugins\community\forms\Model;

class PosterCustomize extends Model implements BaseConst
{
    use CommonFunc;

    public function traitQrcode($class)
    {
        $common = CommonMiddleman::getCommon();
        $middlemanId = $common->getQrcodeMiddlemanId(\Yii::$app->user->id);
        return [
            ['id' => $class->goods->id, 'user_id' => \Yii::$app->user->id, 'middleman_id' => $middlemanId],
            240,
            'plugins/community/goods/goods',
        ];
    }
}
