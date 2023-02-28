<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

namespace app\forms\api\index;


use app\forms\common\CommonAppConfig;
use app\plugins\diy\Plugin;

class TemplateForm extends NewIndexForm
{
    // 获取原始数据
    public function getData()
    {
        try {
            /* @var Plugin $plugin */
            $plugin = \Yii::$app->plugin->getPlugin('diy');
            $this->type = 'diy';
            if (!is_callable([$plugin, 'getTemplatePage'])) {
                throw new \Exception('插件未更新');
            }
            $page = $plugin->getTemplatePage($this->page_id);
        } catch (\Exception $exception) {
            $exception->getMessage();
            \Yii::warning('diy页面报错');
            \Yii::warning($exception);
            $homePages = CommonAppConfig::getHomePageConfig();
            $homePages[] = [
                'key' => 'fxhb',
                'name' => '裂变红包'
            ];
            $page = $this->getDefault($homePages);
            $this->type = 'mall';
        }
        return [
            'home_pages' => $page,
            'type' => $this->type,
            'time' => date('Y-m-d H:i:s', time())
        ];
    }
}