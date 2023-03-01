<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\plugins\teller\controllers\web;

use app\plugins\Controller;
use app\plugins\teller\controllers\web\filter\LoginFilter;

class WebController extends Controller
{
    public function init()
    {
        if (property_exists(\Yii::$app, 'appIsRunning') === false) {
            exit('property not found.');
        }
    }

    public $layout = '/main';

    public function behaviors()
    {
        return [
            'loginFilter' => [
                'class' => LoginFilter::class,
                'safeRoutes' => [
                    'plugin/teller/web/passport/login',
                    'plugin/teller/web/passport/setting',
                ],
            ]
        ];
    }

    public function render($view, $params = [])
    {
        if (mb_stripos($view, '@') !== 0 && mb_stripos($view, '/') !== 0) {
            $view = '@app/plugins/' . $this->module->id . '/views/web/' . mb_strtolower($this->id) . '/' . $view;
        }
        return parent::render($view, $params);
    }
}
