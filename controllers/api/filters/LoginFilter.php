<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers\api\filters;


use app\core\response\ApiCode;
use yii\base\ActionFilter;

class LoginFilter extends ActionFilter
{
    public $ignore;
    public $only;

    /**
     * @param \yii\base\Action $action
     * @return bool
     */
    public function beforeAction($action)
    {
        $id = $action->id;
        if (is_array($this->ignore) && in_array($id, $this->ignore)) {
            return true;
        }
        if (is_array($this->only) && !in_array($id, $this->only)) {
            return true;
        }
        if (!\Yii::$app->user->isGuest && \Yii::$app->user->identity->mall_id > 0) {
            return true;
        }
        \Yii::$app->response->data = [
            'code' => ApiCode::CODE_NOT_LOGIN,
            'msg' => '请先登录。',
        ];

        return false;
    }
}
