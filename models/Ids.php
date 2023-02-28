<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%ids}}".
 * @property string $unionid unionid
 * @property string $official_openid 公众号OpenId
 * @property string $wxapp_openid 小程序OpenId
 * @property string $content 详细信息
 */
class Ids extends ModelActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%ids}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['unionid', 'official_openid', 'wxapp_openid', 'content'], 'string'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'unionid' => 'ID',
            'official_openid' => '公众号OpenId',
            'wxapp_openid' => '小程序OpenId',
            'content' => '门店名称'
        ];
    }
}
