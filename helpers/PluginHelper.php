<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 * @version v4.4.8
 */


namespace app\helpers;


class PluginHelper
{
    public static function getPluginBaseAssetsUrl($pluginId = null)
    {
        // 当在控制台执行 例如队列中 直接返回空
        if (!\Yii::$app instanceof \yii\web\Application) {
            return '';
        }

        if (\Yii::$app->request->baseUrl == '/web') {
            $rootUrl = '';
        } else {
            $rootUrl = rtrim(dirname(\Yii::$app->request->baseUrl), '/');
        }
        return \Yii::$app->request->hostInfo . $rootUrl
            . '/plugins/'
            . ($pluginId ? $pluginId : \Yii::$app->controller->module->id) . '/assets';
    }

    public static function getPluginAssetsPath($pluginId = null)
    {
        return \Yii::$app->basePath
            . '/plugins/'
            . ($pluginId ? $pluginId : \Yii::$app->controller->module->id)
            . '/assets';
    }
}
