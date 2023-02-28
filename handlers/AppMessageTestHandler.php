<?php
/**
 * @author Qian
 */

namespace app\handlers;


class AppMessageTestHandler extends HandlerBase
{

    /**
     * 事件处理注册
     */
    public function register()
    {
        \Yii::$app->on(\Yii::$app->appMessage::EVENT_APP_MESSAGE_REQUEST, function ($event) {
            \Yii::$app->appMessage->push('test_msg', '测试消息');
        });
    }
}
