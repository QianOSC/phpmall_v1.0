<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\community\jobs;


use app\models\Mall;
use app\models\OrderSubmitResult;
use app\models\User;
use app\plugins\community\forms\api\cart\CartForm;
use yii\base\BaseObject;
use yii\queue\JobInterface;

/**
 * Class CartJob
 * @package app\plugins\community\jobs
 * @property CartForm $form
 * @property Mall $mall
 * @property User $user
 */
class CartJob extends BaseObject implements JobInterface
{
    public $form;
    public $token;
    public $mall;
    public $user;
    public $appVersion;

    public function execute($queue)
    {
        \Yii::$app->setMall($this->mall);
        \Yii::$app->user->setIdentity($this->user);
        \Yii::$app->setAppVersion($this->appVersion);
        \Yii::$app->setAppPlatform($this->user->userInfo->platform);
        $transaction = \Yii::$app->db->beginTransaction();
        try {
            $this->form->save();
            $transaction->commit();
        } catch (\Exception $exception) {
            $transaction->rollBack();
            \Yii::error($exception->getMessage());
            \Yii::error($exception);
            $orderSubmitResult = new OrderSubmitResult();
            $orderSubmitResult->token = $this->token;
            $orderSubmitResult->data = $exception->getMessage();
            $orderSubmitResult->save();
            throw $exception;
        }
    }
}
