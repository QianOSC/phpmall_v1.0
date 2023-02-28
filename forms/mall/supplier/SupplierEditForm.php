<?php
/**
 * Anvil
 * Created by
 * Author wangs
 * Date   2021-05-16 22:00
 * Copyright (c) 2020-2021 南京千境网络科技有限公司
 * Desc
 */

namespace app\forms\mall\supplier;


use app\core\response\ApiCode;
use app\models\AuthRoleUser;
use app\models\Suppliers;
use app\models\Model;
use app\models\User;
use app\models\UserIdentity;
use yii\base\BaseObject;

class SupplierEditForm extends Model
{
    public $id;
    public $mall_id;
    public $name;
    public $company;
    public $contacts;
    public $phone;
    public $password;

    private $newPermissions = [];

    public function rules()
    {
        return [
            [['name', 'company', 'contacts', 'phone', 'password'], 'string'],
//            [['name', 'company', 'contacts', 'phone'], 'safe'],
            [['name', 'company', 'contacts', 'phone'], 'default', 'value' => ''],
            [['id', 'mall_id'], 'integer']
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => '名称',
            'content' => '公司',
            'contracts' => '联系人',
            'phone' => '电话',
            'password' => '密码'
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $transaction = \Yii::$app->db->beginTransaction();
        try {
            if ($this->id) {
                $supplier = Suppliers::findOne(['mall_id' => \Yii::$app->mall->id, 'id' => $this->id]);

                if (!$supplier) {
                    throw new \Exception('数据异常,该条数据不存在');
                }
            } else {
                $supplier = new Suppliers();
                $supplier->mall_id = \Yii::$app->mall->id;
            }

            $supplier->name = $this->name;
            $supplier->company = $this->company;
            $supplier->contacts = $this->contacts;
            $supplier->phone = $this->phone;
            $supplier->password = \Yii::$app->getSecurity()->generatePasswordHash('888888');
            $res = $supplier->save();

            if (!$res) {
                throw new \Exception($this->getErrorMsg($supplier));
            }

            //添加对应用户
            //00000000000000000000000000000000000000000000000000000000
            // 区分是添加还是编辑
            $user = User::find()->where([
                'mobile' => $this->phone,
                'is_delete' => 0
            ])->one();

            if ($user) {
                //找到用户权限
                throw new \Exception('用户手机号已存在');
            }else{
                $user = new User();
                $user->username = $this->name;
                $user->password = \Yii::$app->getSecurity()->generatePasswordHash('888888');
                $user->access_token = \Yii::$app->security->generateRandomString();
                $user->auth_key = \Yii::$app->security->generateRandomString();
                $user->mall_id = \Yii::$app->mall->id;
                $user->mobile = $this->phone;
                $user->supplier_id = $supplier->id;

                $user->nickname = $this->name;
                $res = $user->save();
                if (!$res) {
                    throw new \Exception($this->getErrorMsg($user));
                }

                $userIdentity = new UserIdentity();
                $userIdentity->user_id = $user->id;

                $userIdentity->is_supplier = 1;
                $res = $userIdentity->save();
                if (!$res) {
                    throw new \Exception($this->getErrorMsg($userIdentity));
                }

                $authRole = new AuthRoleUser();
                $authRole->role_id = 4;
                $authRole->user_id = $user->id;
                $res = $authRole->save();
                if (!$res) {
                    throw new \Exception($this->getErrorMsg($authRole));
                }

            }

            $transaction->commit();
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '保存成功',
            ];
        } catch (\Exception $e) {
            $transaction->rollBack();
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $e->getMessage(),
                'error' => [
                    'line' => $e->getLine(),
                ]
            ];
        }
    }

    //DETAIL
    public function getDetail()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $supplier = Suppliers::find()->where(['mall_id' => \Yii::$app->mall->id, 'id' => $this->id])->asArray()->one();
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => $supplier
        ];
    }

}
