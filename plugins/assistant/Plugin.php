<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\assistant;


class Plugin extends \app\plugins\Plugin
{
    /**
     * 插件唯一id，小写英文开头，仅限小写英文、数字、下划线
     * @return string
     */
    public function getName()
    {
        return 'assistant';
    }

    /**
     * 插件显示名称
     * @return string
     */
    public function getDisplayName()
    {
        return '采集助手';
    }

    public function getMenus()
    {
        return [
            [
                'name' => '基础配置',
                'route' => 'plugin/assistant/mall/index/index',
                'icon' => 'el-icon-star-on',
            ],
            [
                'name' => '采集商品',
                'route' => 'plugin/assistant/mall/index/collect',
                'icon' => 'el-icon-star-on',
            ],
        ];
    }

    public function getIndexRoute()
    {
        return 'plugin/assistant/mall/index/collect';
    }
}
