<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\exchange\forms\exchange\basic;

class Integral extends BaseAbstract implements Base
{
    public function exchange(&$message, &$reward)
    {
        try {
            $integral_num = intval($this->config['integral_num']);
            $desc = sprintf('兑换码%s兑换%s积分', $this->codeModel->code, $integral_num);
            return \Yii::$app->currency->setUser($this->user)->integral->add($integral_num, $desc) === true;
        } catch (\Exception $e) {
            $message = $e->getMessage();
            return false;
        }
    }
}