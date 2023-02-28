<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\controllers\mall;


use app\core\response\ApiCode;
use app\forms\permission\menu\MenusForm;

class MenusController extends MallController
{
    public function actionIndex()
    {
        $route = \Yii::$app->request->post('route');

        $form = new MenusForm();
        $form->currentRoute = $route;
        $res = $form->getMenus('mall');

        return $this->asJson([
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'menus' => $res['menus'],
                'currentRouteInfo' => $res['currentRouteInfo'],
                'courseMenu' => $res['courseMenu'],
                'defaultNav' => $res['defaultNav']
            ]
        ]);
    }

    public function actionPlugin($name)
    {
        \Yii::$app->plugin->setCurrentPlugin(\Yii::$app->plugin->getPlugin($name));
        $route = \Yii::$app->request->post('route');

        $form = new MenusForm();
        $form->currentRoute = $route;
        $res = $form->getMenus('plugin');

        return $this->asJson([
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'menus' => $res['menus'],
                'currentRouteInfo' => $res['currentRouteInfo']
            ]
        ]);
    }
}
