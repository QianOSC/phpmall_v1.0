<?php
/**
 * Created by qian_mall_app
 * @author Qian
 * Email: <qianjing.network@qq.com>
 */

namespace app\plugins\stock\controllers\mall;


namespace app\plugins\region\controllers\mall;

use app\plugins\Controller;
use app\plugins\region\forms\mall\LevelForm;
use app\plugins\region\forms\mall\UpgradeConditionForm;

class LevelController extends Controller
{

    public function actionIndex()
    {
        return $this->render('index');
    }

}
