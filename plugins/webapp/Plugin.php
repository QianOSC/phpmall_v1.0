<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */

namespace app\plugins\webapp;

use app\models\Model;

class Plugin extends \app\plugins\Plugin
{
    private $wechat;
    private $xWechatPay;
    private $wechatTemplate;
    private $subscribe;


    /**
     * 插件唯一id，小写英文开头，仅限小写英文、数字、下划线
     * @return string
     */
    public function getName()
    {
        return 'webapp';
    }

    /**
     * 插件显示名称
     * @return string
     */
    public function getDisplayName()
    {
        return 'H5程序';
    }

    /**
     * @return mixed
     * @throws \Exception
     */
    public function getAccessToken()
    {
        return $this->getWechat()->getAccessToken();
    }


}
