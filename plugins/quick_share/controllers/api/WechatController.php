<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\quick_share\controllers\api;


use app\controllers\api\ApiController;
use app\plugins\quick_share\forms\api\WechatForm;

class WechatController extends ApiController
{
    public function actionIndex()
    {
        $form = new WechatForm();
        $form->attributes = \Yii::$app->request->post();
        $callback = \Yii::$app->request->get('callback');
        echo $callback . '(' . \yii\helpers\BaseJson::encode($form->getInfo()) . ')';
    }

    public function actionView()
    {
        $url = dirname(__DIR__) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'views' . DIRECTORY_SEPARATOR . 'share.html';
        require_once($url);
    }
}