<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\miaosha\job;

use app\plugins\miaosha\forms\mall\activity\ActivityEditForm;
use yii\base\Component;
use yii\queue\JobInterface;

class MiaoshaActivityJob extends Component implements JobInterface
{
    public $open_date;
    public $open_time;
    public $mall;
    /** @var  ActivityEditForm $miaoshaGoods */
    public $miaoshaGoods;
    public $user;

    public function execute($queue)
    {
        \Yii::$app->setMall($this->mall);
        \Yii::$app->user->setIdentity($this->user);
        $this->miaoshaGoods->executeSave();
        \Yii::warning('结束了');
    }
}