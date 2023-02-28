<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\mobile\forms\common;

use app\forms\common\qrcode\BdQrcode;
use app\plugins\mobile\Plugin;

class QrcodeServe extends BdQrcode
{
    public function getQrcode($args = [])
    {
        $plugin = new Plugin();
        $token = \Yii::$app->security->generateRandomString(30);
        // 获取二维码上跳转链接路径
        $base = rtrim($plugin->getWebUri(), '/');
        $text = $base . $this->buildParams('/pages/index/index', [
                'scene' => $token
            ]);

        $imgName = md5(strtotime('now')) . '.jpg';
        // 获取图片存储的路径
        $res = file_uri('/web/temp/');
        $localUri = $res['local_uri'];
        $webUri = $res['web_uri'];
        $save_path = $localUri . $imgName;
        $args['width'] = $args['width'] ?? 430;
        $args['page'] = $args['page'] ?? 'pages/index/index';
        $args['scene'] = $args['scene'] ?? '';
        $size = floor($args['width'] / 37 * 100) / 100 + 0.01;
        \QRcode::png($text, $save_path, QR_ECLEVEL_L, $size, 2);
        $this->saveQrCodeParameter($token, $args['scene'], $args['page']);
        return $webUri . $imgName;
    }
}
