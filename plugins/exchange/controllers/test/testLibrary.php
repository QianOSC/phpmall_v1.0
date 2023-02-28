<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

use PHPUnit\Framework\TestCase;

class testSetting extends TestCase
{
    public function test()
    {
        //https://localhost/qian_mall_app/web/index.php?r=plugin%2Fexchange%2Fmall%2Flibrary/list

        $a = \Yii::$app->request;
        dd($a);
        echo 1;
    }
}