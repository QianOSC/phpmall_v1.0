<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\components;


use app\forms\common\template\TemplateForm;
use yii\base\Action;

class TemplateAction extends Action
{
    public $templateClass;

    public function run()
    {
        /* @var TemplateForm $form */
        $form = \Yii::createObject([
            'class' => $this->templateClass
        ]);
        if (\Yii::$app->request->isAjax) {
            $data = [];
            if (\Yii::$app->request->isGet) {
                $form->mall = \Yii::$app->mall;
                $add = \Yii::$app->request->get('add');
                $platform = \Yii::$app->request->get('platform');
                $data = $form->getDetail($add, $platform);
            }
            if (\Yii::$app->request->isPost) {
                $form->attributes = \Yii::$app->request->post();
                $form->mall = \Yii::$app->mall;
                $data = $form->save();
            }
            \Yii::$app->response->data = $data;
        } else {
            return $this->controller->render('@app/views/mall/template-msg/template.php', [
                'url' => $form->url,
                'addUrl' => $form->addUrl,
                'submitUrl' => $form->submitUrl,
            ]);
        }
    }
}
