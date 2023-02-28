<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers;


use app\controllers\behaviors\LoginFilter;

class KeepAliveController extends Controller
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'loginFilter' => [
                'class' => LoginFilter::class,
            ],
        ]);
    }

    public function actionIndex()
    {
    }
}
