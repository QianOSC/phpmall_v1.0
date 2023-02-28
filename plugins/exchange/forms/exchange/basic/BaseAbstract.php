<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\exchange\forms\exchange\basic;


use app\models\User;

class BaseAbstract
{
    protected $config;
    protected $user;
    protected $codeModel;
    protected $extra_info;

    public function __construct(array $config, User $user, $codeModel, $extra_info)
    {
        $this->config = $config;
        $this->user = $user;
        $this->codeModel = $codeModel;
        $this->extra_info = $extra_info;
    }
}