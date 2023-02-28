<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\permission\branch;

class IndBranch extends BaseBranch
{
    public $ignore = 'ind';

    public function deleteMenu($menu)
    {
        if (isset($menu['ignore']) && in_array($this->ignore, $menu['ignore'])) {
            return true;
        }
        return false;
    }

    public function logoutUrl()
    {
        return \Yii::$app->urlManager->createUrl('admin/index/index');
    }

    public function checkMallUser($user)
    {
        return parent::checkMallUser($user) && $user->mall_id > 0;
    }

    public function syncPublicPath()
    {
        $path = '/addons/zjhj_bd/';
        file_uri($path);
        return \Yii::$app->basePath . $path;
    }
}
