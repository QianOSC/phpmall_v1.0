<?php
/**
 * 本项目所有web端控制器的基类
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers;


class Controller extends \yii\web\Controller
{
    public function init()
    {
        parent::init();
        if (\Yii::$app->request->get('_layout')) {
            $this->layout = \Yii::$app->request->get('_layout');
        }
    }
}
