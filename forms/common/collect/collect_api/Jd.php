<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\collect\collect_api;


class Jd extends CollectApi
{
    public function getData($itemId)
    {
        $url = 'https://api03.6bqb.com/jd/detail?';
        $result = $this->httpGet($url . http_build_query(['apikey' => $this->api_key, 'itemid' => $itemId]));
        if (!$result || empty($result)) {
            throw new \Exception('京东--采集失败');
        }
        return $result;
    }
}
