<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */

namespace app\forms\common\review;


use app\models\Mall;
use app\models\Model;

/**
 * Class BaseReview
 * @package app\forms\common\review
 * @property Mall $mall
 */
abstract class BaseReview extends Model
{
    public $mall;
    public static $instance;

    public static function getInstance($mall = null)
    {
        if (!$mall) {
            $mall = \Yii::$app->mall;
        }
        if (self::$instance && self::$instance->mall == $mall) {
            return self::$instance;
        }
        self::$instance = new static();
        self::$instance->mall = $mall;
        return self::$instance;
    }

    /**
     * @return array
     * @throws \Exception
     * 获取审核消息列表
     */
    abstract public function getList();

    /**
     * @return array
     * @throws \Exception
     * 获取审核详情
     */
    abstract public function getDetail();

    /**
     * @return array
     * @throws \Exception
     * 处理审核消息
     */
    abstract public function become();

    /**
     * @return integer
     * @throws \Exception
     * 获取待审核消息数量
     */
    abstract public function getCount();
}
