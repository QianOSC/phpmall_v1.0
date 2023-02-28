<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\plugins\fxhb\forms\api;


use app\models\Mall;
use app\models\Model;
use app\models\User;

/**
 * @property Mall $mall
 * @property User $user
 */
class ApiModel extends Model
{
    public $mall;
    public $user;

    public function __construct(array $config = [])
    {
        parent::__construct($config);
        if (!$this->mall) {
            $this->mall = \Yii::$app->mall;
        }
        if ($this->user) {
            $this->user = \Yii::$app->user->identity;
        }
    }
}
