<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\template;


use app\jobs\TemplateSendJob;
use app\models\Model;
use app\models\User;
use app\models\UserInfo;

class TemplateSend extends Model
{
    public $user;
    public $page;
    public $data;
    public $templateTpl;
    public $templateId;
    public $titleStyle;
    public $platform;
    public $dataKey;
    public $tplClass;

    /* @var TemplateSender */
    public $sender;

    /**
     * @return array
     * @throws \Exception
     */
    public function sendTemplate()
    {
        $token = \Yii::$app->security->generateRandomString(32);
        $templateMsg['page'] = $this->page;
        $templateMsg['data'] = $this->data;
        $templateMsg['templateTpl'] = $this->templateTpl;
        $templateMsg['templateId'] = $this->templateId;
        $templateMsg['user'] = $this->user;
        $templateMsg['token'] = $token;
        $templateMsg['dataKey'] = $this->dataKey;
        $templateMsg['titleStyle'] = $this->titleStyle;
        $templateMsg['tplClass'] = $this->tplClass;
        $queueId = \Yii::$app->queue->delay(0)->push(new TemplateSendJob($templateMsg));
        return [
            'queueId' => $queueId,
            'token' => $token
        ];
    }
}
