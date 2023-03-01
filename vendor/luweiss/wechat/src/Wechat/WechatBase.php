<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Lu Wei
 * @link http://www.luweiss.com/
 * Created by IntelliJ IDEA
 * Date Time: 2018/11/5 13:49
 */


namespace luweiss\Wechat;


abstract class WechatBase
{
    /**
     * @return WechatHttpClient
     */
    protected function getClient()
    {
        return new WechatHttpClient();
    }

    /**
     * @param array $result
     * @return array
     */
    abstract protected function getClientResult($result);
}
