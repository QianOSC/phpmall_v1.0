<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */


namespace app\plugins\demo\models;


use yii\db\ActiveRecord;

class DemoPost extends ActiveRecord
{
    public $id;
    public $title;

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%demo_post}}';
    }
}