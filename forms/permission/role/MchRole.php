<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\permission\role;


use app\forms\common\CommonUser;

class MchRole extends BaseRole
{
    public function getName()
    {
        return 'mch';
    }

    public function deleteRoleMenu($menu)
    {
        if (isset($menu['route']) && !in_array($menu['route'], $this->getPermission())) {
            return true;
        }
        return false;
    }

    public function setPermission()
    {
        $this->permission = CommonUser::getMchPermissions();
    }

    public function getAccountPermission()
    {
        return false;
    }

    public function getAccount()
    {
        return false;
    }
}
