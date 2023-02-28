<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\advance\forms\common;

use app\forms\common\CommonAppConfig;
use app\plugins\advance\models\TailMoneyTemplate;
use Overtrue\EasySms\Message;

class MsgService
{
    public static function sendTpl($user, $event)
    {
        try {
            $tplMsg = new TailMoneyTemplate([
                'page' => 'plugins/advance/index/index',
                'user' => $user,
                'goodsName' => $event->goods,
                'price' => $event->price,
            ]);
            $tplMsg->send();
        } catch (\Exception $exception) {
            \Yii::error("发送预售订阅消息失败");
            \Yii::error($exception);
        }
    }

    public static function sendSms($user, $goodsName)
    {
        try {
            $smsConfig = CommonAppConfig::getSmsConfig(0);
            if (!isset($smsConfig['tailMoney']) || !isset($smsConfig['tailMoney']['template_id']) || !isset($smsConfig['tailMoney']['name'])) {
                throw new \Exception('商品预定插件短信未设置正确');
            }
            $data[$smsConfig['tailMoney']['name']] = $goodsName;
            $message = new Message([
                'template' => $smsConfig['tailMoney']['template_id'],
                'data' => $data
            ]);
            $user->mobile && \Yii::$app->sms->module('mall')->send($user->mobile, $message);
        } catch (\Exception $exception) {
            \Yii::error('=====商品预定插件短信短信通知失败=====');
            \Yii::error($exception);
        }
    }
}