<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\plugins\exchange\controllers\mall;

use app\plugins\Controller;

class OrderController extends Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }
}
