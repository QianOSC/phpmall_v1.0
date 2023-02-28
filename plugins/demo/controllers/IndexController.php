<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\plugins\demo\controllers;


use app\plugins\Controller;
use app\plugins\demo\models\DemoPost;

class IndexController extends Controller
{
    public function actionIndex()
    {
        \Yii::warning('--test-log--');
        $demoPost = new DemoPost();
        $demoPost->id = 1;
        $demoPost->title = 'Demo Title.';
        return $this->render('index', [
            'msg' => 'Demo Plugin.',
            'demoPost' => $demoPost,
        ]);
    }
}
