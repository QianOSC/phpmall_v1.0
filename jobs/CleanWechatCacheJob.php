<?php
/**
 * @author Qian
 */

namespace app\jobs;


use yii\queue\JobInterface;
use yii\queue\Queue;

class CleanWechatCacheJob implements JobInterface
{

    /**
     * @param Queue $queue which pushed and is handling the job
     * @return void|mixed result of the job execution
     */
    public function execute($queue)
    {
        $path = \Yii::$app->runtimePath . '/wechat-cache';
        if (file_exists($path)) {
            remove_dir($path);
        }
    }
}
