<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\collect\collect_api;


class Alibaba extends CollectApi
{
    public function getData($itemId)
    {
        $url = 'https://api03.6bqb.com/alibaba/detail?';
        $result = $this->httpGet($url . http_build_query(['apikey' => $this->api_key, 'itemid' => $itemId]));
        if (!$result || empty($result)) {
            throw new \Exception('1688阿里巴巴--采集失败');
        }
        return $result;
    }
}
