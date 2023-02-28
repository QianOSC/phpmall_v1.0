<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\mobile\forms\common;

use app\forms\common\template\TemplateSender;
use app\plugins\mobile\Plugin;

class TemplateSend extends TemplateSender
{
    private $mallId;
    protected $plugin;
    public $is_need_form_id = false;

    public function init()
    {
        parent::init();
        $this->plugin = new Plugin();
    }

    public function sendTemplate($arg = array())
    {
    }
}
