<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\template;


use app\models\Model;

abstract class TemplateSender extends Model
{
    public $is_need_form_id = true;
    abstract public function sendTemplate($arg = array());
}
