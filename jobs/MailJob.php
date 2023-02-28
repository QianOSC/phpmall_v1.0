<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\jobs;


use app\core\mail\SendMail;
use app\models\Mall;
use yii\queue\JobInterface;

class MailJob extends BaseJob implements JobInterface
{
    /**
     * @var SendMail $class
     */
    public $class;

    public $view;
    public $params;

    public function execute($queue)
    {
        $this->setRequest();
        $this->class->job($this->view, $this->params);
    }
}
