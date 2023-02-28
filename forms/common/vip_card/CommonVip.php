<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\forms\common\vip_card;

use yii\base\BaseObject;

class CommonVip extends BaseObject
{
    protected static $instance;
    protected $permission;
    protected $plugin;

    public static function getInstance()
    {
        if (!self::$instance instanceof self) {
            self::$instance = new static();
        }
        return self::$instance;
    }

    public function init()
    {
        $this->permission = $this->getPermission();
        $this->plugin = $this->getPlugin();
    }

    private function getPermission()
    {
        $permission = \Yii::$app->branch->childPermission(\Yii::$app->mall->user->adminInfo);
        if (!in_array('vip_card', $permission)) {
            return false;
        }
        return $permission;
    }

    private function getPlugin()
    {
        try {
            $plugin = \Yii::$app->plugin->getPlugin('vip_card');
        } catch (\Exception $e) {
            $plugin = false;
        }
        return $plugin;
    }
}
