<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\jobs;


use app\forms\common\ecard\CheckGoods;
use yii\base\BaseObject;
use yii\queue\JobInterface;

/**
 * Class EcardLogJob
 * @package app\jobs
 * @property CheckGoods $checkGoods
 */
class EcardLogJob extends BaseJob implements JobInterface
{
    public $checkGoods;

    public function execute($queue)
    {
        $this->setRequest();
        $this->checkGoods->save();
    }
}
