<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 * @author Qian
 */

namespace app\plugins\flash_sale\controllers\mall;

use app\plugins\Controller;
use app\plugins\flash_sale\forms\common\CommonSetting;
use app\plugins\flash_sale\forms\mall\SettingForm;
use Yii;

class SettingController extends Controller
{
    public function actionIndex()
    {
        if (Yii::$app->request->isAjax) {
            if (Yii::$app->request->isPost) {
                $form = new SettingForm();
                $form->attributes = Yii::$app->request->post();
                return $this->asJson($form->save());
            } else {
                $form = new CommonSetting();
                return $this->asJson(
                    [
                        'code' => 0,
                        'data' => $form->search()
                    ]
                );
            }
        } else {
            return $this->render('index');
        }
    }
}
