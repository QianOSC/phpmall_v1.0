<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\jobs;

use yii\base\BaseObject;

class BaseJob extends BaseObject
{
    public $hostInfo;
    public $baseUrl;

    public function __construct($config = [])
    {
        parent::__construct($config);
        if (\Yii::$app instanceof \yii\web\Application) {
            if (!$this->hostInfo) {
                $this->hostInfo = \Yii::$app->request->hostInfo;
            }
            if (!$this->baseUrl) {
                $this->baseUrl = \Yii::$app->request->baseUrl;
            }
        } else {
            if (!$this->hostInfo) {
                $this->hostInfo = \Yii::$app->hostInfo;
            }
            if (!$this->baseUrl) {
                $this->baseUrl = \Yii::$app->baseUrl;
            }
        }
        $this->setRequest();
    }

    public function setRequest()
    {
        \Yii::$app->setHostInfo($this->hostInfo);
        \Yii::$app->setBaseUrl($this->baseUrl);
    }
}
