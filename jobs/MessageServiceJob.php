<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\jobs;

use app\forms\common\message\MessageService;
use app\models\Mall;
use yii\queue\JobInterface;

class MessageServiceJob extends BaseJob implements JobInterface
{
    /**
     * @var MessageService $messageService
     */
    public $messageService;

    /**
     * @var Mall $mall
     */
    public $mall;

    public $appPlatform;

    public function execute($queue)
    {
        $this->setRequest();
        $mall = Mall::findOne($this->mall->id);
        \Yii::$app->setMall($mall);
        \Yii::$app->setAppPlatform($this->appPlatform);
        $this->messageService->job();
    }
}
