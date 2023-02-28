<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\jobs;


use app\forms\mall\statistics\InitDataForm;
use app\models\Mall;
use yii\base\BaseObject;
use yii\queue\JobInterface;

class ChangeShareLevelJob extends BaseJob implements JobInterface
{
    public $mall;

    public function execute($queue)
    {
        $this->setRequest();
        $mall = Mall::findOne($this->mall->id);
        \Yii::$app->setMall($mall);
        \Yii::error('--我进来啦--');
        $t = \Yii::$app->db->beginTransaction();
        try {
            $form = new InitDataForm();
            $form->share();
            $t->commit();
        } catch (\Exception $exception) {
            $t->rollBack();
            \Yii::error($exception);
        }
    }
}
