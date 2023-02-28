<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\plugins\demo\forms;

use app\forms\api\finance\BaseFinanceCashForm;
use app\forms\api\finance\UserInfo;

class ApiCashForm extends BaseFinanceCashForm
{
    protected function beforeCashValidate()
    {
        return true;
    }

    protected function afterSave()
    {
        return true;
    }

    protected function setUserInfo(UserInfo $userInfo)
    {
        $userInfo->name = '张三';
        $userInfo->phone = '13131313131';
        return $userInfo;
    }

    protected function setModel()
    {
        return 'demo';
    }
}
