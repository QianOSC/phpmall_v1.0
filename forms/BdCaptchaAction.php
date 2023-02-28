<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms;

use Yii;
use yii\captcha\CaptchaAction;
use yii\helpers\Url;
use yii\web\Response;

class BdCaptchaAction extends CaptchaAction
{
    public function run()
    {
        if (Yii::$app->request->getQueryParam(self::REFRESH_GET_VAR) !== null) {
            // AJAX request for regenerating code
            $code = $this->getVerifyCode(true);
            Yii::$app->response->format = Response::FORMAT_JSON;
            return [
                'hash1' => $this->generateValidationHash($code),
                'hash2' => $this->generateValidationHash(strtolower($code)),
                // we add a random 'v' parameter so that FireFox can refresh the image
                // when src attribute of image tag is changed
                'url' => Url::to([$this->id, 'v' => uniqid('', true)], true),
            ];
        }

        $this->setHttpHeaders();
        Yii::$app->response->format = Response::FORMAT_RAW;

        return $this->renderImage($this->getVerifyCode());
    }
}