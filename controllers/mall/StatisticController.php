<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */


namespace app\controllers\mall;

class StatisticController extends MallController
{
    public function actionLottery()
    {
        return $this->render('lottery');
    }

    public function actionBargain()
    {
        return $this->render('bargain');
    }

    public function actionReport()
    {
        return $this->render('report');
    }

    public function actionDare()
    {
        return $this->render('dare');
    }

    public function actionStep()
    {
        return $this->render('step');
    }

    public function actionClerk()
    {
        return $this->render('clerk');
    }

    public function actionMiaosha()
    {
        return $this->render('miaosha');
    }

    public function actionPintuan()
    {
        return $this->render('pintuan');
    }

    public function actionBooking()
    {
        return $this->render('booking');
    }
}
