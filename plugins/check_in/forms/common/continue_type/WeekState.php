<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\check_in\forms\common\continue_type;


use app\plugins\check_in\jobs\ClearContinueJob;

class WeekState extends BaseState
{
    public function setJob()
    {
        $nextMonday = strtotime('next monday');
        $delay = $nextMonday - time();
        \Yii::$app->queue->delay($delay)->push(new ClearContinueJob([
            'mall' => $this->common->mall
        ]));
    }

    public function clearContinue()
    {
        $week = date('N');
        $count = 0;
        if ($week == 1) {
            $count = $this->common->clearContinue();
        }
        return $count;
    }
}
