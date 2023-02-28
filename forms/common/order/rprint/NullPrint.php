<?php

/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\common\order\rprint;

class NullPrint extends BaseForm
{
    public function track(...$params)
    {
        throw new \Exception('未知错误');
    }
}
