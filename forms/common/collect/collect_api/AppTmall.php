<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\collect\collect_api;


class AppTmall extends CollectApi
{
    public function getData($itemId)
    {
        $url = 'https://api03.6bqb.com/tmall/appDetail?';
        $result = $this->httpGet($url . http_build_query(['apikey' => $this->api_key, 'itemId' => $itemId]));
        if (!$result || empty($result)) {
            throw new \Exception('app天猫--采集失败');
        }
        return $result;
    }
}
