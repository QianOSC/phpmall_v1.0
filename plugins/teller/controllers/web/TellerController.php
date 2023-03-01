<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\plugins\teller\controllers\web;


use app\models\Mall;
use app\models\UserIdentity;
use app\plugins\teller\controllers\web\WebController;
use app\plugins\teller\controllers\web\filter\TellerPermissionsBehavior;

class TellerController extends WebController
{
    public function init()
    {
        if (\Yii::$app->request->isAjax) {
            \Yii::$app->response->headers
                ->set('Cache-Control', 'no-store, no-cache, must-revalidate')
                ->set('Expires', 'Thu, 19 Nov 1981 08:00:00 GMT')
                ->set('Pragma', 'no-cache');
        }
        $this->loadMall();
    }

    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'permissions' => [
                'class' => TellerPermissionsBehavior::class,
            ],
        ]);
    }

    /**
     * @return $this
     */
    private function loadMall()
    {
        $id = \Yii::$app->getSessionMallId();
        if (!$id) {
            $id = \Yii::$app->getMallId();
        }

        $url = \Yii::$app->urlManager->createUrl('plugin/teller/web/passport/login');
        if (!$id) {
            return $this->redirect($url)->send();
        }

        $mall = Mall::find()->where(['id' => $id, 'is_delete' => 0])->with('option')->one();
        if (!$mall) {
            return $this->redirect($url)->send();
        }
        if ($mall->is_delete !== 0 || $mall->is_recycle !== 0) {
            return $this->redirect($url)->send();
        }


        $newOptions = [];
        foreach ($mall['option'] as $item) {
            $newOptions[$item['key']] = $item['value'];
        }
        $mall->options = (object)$newOptions;

        \Yii::$app->mall = $mall;
        return $this;
    }
}
