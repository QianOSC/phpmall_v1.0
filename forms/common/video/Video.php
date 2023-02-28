<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\video;


class Video
{
    public static function getUrl($url)
    {
        $url = trim($url);
        if (strpos($url, 'v.qq.com') != -1) {
            $model = new TxVideo();
            return $model->getVideoUrl($url);
        } else {
            return $url;
        }
    }
}
