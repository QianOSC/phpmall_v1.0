<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\check_in\jobs;


use app\models\Mall;
use app\plugins\check_in\forms\common\Common;
use yii\base\BaseObject;
use yii\queue\JobInterface;

class ClearContinueJob extends BaseObject implements JobInterface
{
    public $mall;

    public function execute($queue)
    {
        try {
            \Yii::warning('执行清除计划');
            $this->mall = Mall::findOne($this->mall->id);
            \Yii::$app->setMall($this->mall);
            $common = Common::getCommon($this->mall);
            $config = $common->getConfig();
            $continueTypeClass = $common->getContinueTypeClass($config->continue_type);
            $count = $continueTypeClass->clearContinue();
            $continueTypeClass->setJob();
        } catch (\Exception $exception) {
            \Yii::warning('执行清除计划--失败');
            \Yii::error($exception->getMessage());
        }
    }
}
