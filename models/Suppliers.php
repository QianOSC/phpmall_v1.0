<?php
/**
 * Anvil
 * Created by
 * Author wangs
 * Date   2021-07-20 23:36
 * Copyright (c) 2020-2021 南京千境网络科技有限公司
 * Desc
 */

namespace app\models;
/**
 * This is the model class for table "{{%supplier}}".
 * @property int $id
 * @property int $mall_id
 * @property string $company 公司信息
 * @property string $name 供应商名称
 * @property string $contacts 联系人
 * @property string $phone 电话
 * @property int $is_delete 删除
 * @property string $created_at
 * @property string $updated_at
 * @property string $deleted_at
 */

class Suppliers extends ModelActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%supplier}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['mall_id', 'company', 'name', 'contacts', 'created_at', 'updated_at', 'deleted_at'], 'required'],
            [['id', 'mall_id', 'is_delete'], 'integer'],
            [['created_at', 'updated_at', 'deleted_at'], 'safe'],
            [['company', 'name', 'contacts', 'phone', 'password'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'mall_id' => 'Mall ID',
            'company' => '公司信息',
            'name' => '供应商名称',
            'contacts' => '供应商联系人',
            'phone' => '联系电话',
            'password' => '密码',
            'is_delete' => '删除',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'deleted_at' => 'Deleted At',
        ];
    }
}