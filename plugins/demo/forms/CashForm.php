<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\plugins\demo\forms;

use app\forms\mall\finance\BaseCashApply;

class CashForm extends BaseCashApply
{
    protected function beforeApply($cash)
    {
        return true;
    }

    protected function afterApply($cash)
    {
        return true;
    }

    protected function beforeRemit($cash)
    {
        return true;
    }

    protected function afterRemit($cash)
    {
        \Yii::error('提现了1000元');
        return true;
    }

    protected function beforeReject($cash)
    {
        return true;
    }

    protected function afterReject($cash)
    {
        return true;
    }
}
