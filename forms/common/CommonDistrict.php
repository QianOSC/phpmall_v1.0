<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\common;

use app\models\DistrictArr;

class CommonDistrict
{
    public function search()
    {
        $d = new DistrictArr();
        $arr = $d->getArr();
        $province_list = $d->getList($arr);
        $cache_key = md5('district');
        \Yii::$app->cache->set($cache_key, $province_list, 86400 * 7);
        return $province_list;
    }
}
