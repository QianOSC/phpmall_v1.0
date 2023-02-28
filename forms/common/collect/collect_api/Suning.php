<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\collect\collect_api;


class Suning extends CollectApi
{
    public $shopid;

    public function getData($itemId)
    {
        $url = 'https://api03.6bqb.com/suning/detail?';
        $result = $this->httpGet($url . http_build_query(['apikey' => $this->api_key, 'itemid' => $itemId, 'shopid' => $this->shopid]));
        if (!$result || empty($result)) {
            throw new \Exception('苏宁易购--采集失败');
        }
        return $result;
    }
}