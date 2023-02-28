<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\controllers\admin;


class AppController extends AdminController
{
    public function actionRecycle()
    {
        return $this->render('recycle');
    }
}
