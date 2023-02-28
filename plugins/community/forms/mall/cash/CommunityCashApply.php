<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\forms\mall\cash;


use app\forms\mall\finance\BaseCashApply;
use app\plugins\community\forms\common\CommonMiddleman;

class CommunityCashApply extends BaseCashApply
{
    public function afterReject($cash)
    {
        $common = CommonMiddleman::getCommon();
        $middleman = $common->getConfig($cash->user_id);
        $middleman->money += floatval($cash->price);
        if (!$middleman->save()) {
            throw new \Exception($this->getErrorMsg($middleman));
        }
        return true;
    }

    public function templatePath()
    {
        return 'plugins/community/cash-detail/cash-detail';
    }

    public function title()
    {
        return '社区团购提现';
    }

    public function desc($cash)
    {
        return '社区团购提现到余额，' . parent::desc($cash);
    }
}
