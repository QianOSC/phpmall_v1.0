<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */
namespace app\forms\mall\supplier;

use app\core\response\ApiCode;
use app\models\Suppliers;
use app\models\User;
use app\models\Model;

class SupplierForm extends Model
{
    public $id;
    public $mall_id;
    public $name;
    public $company;
    public $contacts;
    public $phone;
    public $password;
    public $is_delete;
    public $page_size;
    public $keyword;

    public function rules()
    {
        return [
            [['is_delete', 'id', 'page_size', 'mall_id'], 'integer'],
            [['name', 'company', 'contacts', 'phone', 'keyword', 'password'], 'string', 'max' => 255],
            [['keyword'], 'default', 'value' => ''],
            [['is_delete'], 'default', 'value' => 0],
            [['page_size'], 'default', 'value' => 10],
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
            'password' => '密码',
            'is_delete' => 'Is Delete',
        ];
    }

    public function supplierList()
    {
        $supplier_list = Suppliers::find()->where([
            'mall_id' => \Yii::$app->mall->id,
            'is_delete' => 0,
        ])
            ->asArray()
            ->all();

        foreach ($supplier_list as &$item) {
            $item['id'] = intval($item['id']);
        }
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => [
                'supplier_list' => $supplier_list
            ],
        ];
    }

    //GET
    public function getList()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }


        $list = Suppliers::find()->where([
//            'mall_id' => \Yii::$app->mall->id,
            'is_delete' => 0,
        ])
            ->keyword($this->keyword, ['or',
                ['like', 'name', $this->keyword],
                ['like', 'company', $this->keyword],
                ['like', 'contacts', $this->keyword],
                ['like', 'phone', $this->keyword]
            ])
            ->orderBy('id ASC')
            ->page($pagination)
            ->asArray()
            ->all();

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => [
                'list' => $list,
                'pagination' => $pagination,
            ]
        ];
    }

    //DELETE
    public function destroy()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $model = Suppliers::findOne([
            'id' => $this->id,
            'mall_id' => \Yii::$app->mall->id,
        ]);
        if (!$model) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => '数据不存在或已经删除',
            ];
        }

        $user = User::findOne([
            'supplier_id' => $model->id,
            'mall_id' => \Yii::$app->mall->id,
        ]);

        if($user)
        {
            $user->is_delete = 1;
            $user->deleted_at = date('Y-m-d H:i:s');
            $user->save();
        }


        $model->is_delete = 1;
        $model->deleted_at = date('Y-m-d H:i:s');
        $model->save();


        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '删除成功'
        ];
    }

    public function editPassword()
    {
        /** @var Supplier $supplier */
        $supplier = Suppliers::findOne([
            'id' => $this->id,
            'mall_id' => \Yii::$app->mall->id,
        ]);

        if (!$supplier) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => '供应商不存在',
            ];
        }

        $user = User::findOne([
            'supplier_id' => $supplier->id,
            'mall_id' => \Yii::$app->mall->id,
        ]);
        if(!$user)
        {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => '供应商对应的用户不存在',
            ];
        }

        $supplier->password = \Yii::$app->getSecurity()->generatePasswordHash($this->password);
        $user->password = \Yii::$app->getSecurity()->generatePasswordHash($this->password);

        $res = $supplier->save();
        $res_user = $user->save();

        if ($res && $res_user) {
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '密码修改成功',
            ];
        }

        return [
            'code' => ApiCode::CODE_ERROR,
            'msg' => '密码修改失败',
        ];
    }


    //DETAIL
    public function getDetail()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $articles = Article::find()->where(['mall_id' => \Yii::$app->mall->id, 'id' => $this->id])->asArray()->one();
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => $articles
        ];
    }

    //SAVE
    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $model = Article::findOne([
            'mall_id' => \Yii::$app->mall->id,
            'id' => $this->id,
        ]);
        if (!$model) {
            $model = new Article();
        }
        $model->attributes = $this->attributes;
        $model->mall_id = \Yii::$app->mall->id;

        $model->article_cat_id = 0;//TODO
        if ($model->save()) {
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '保存成功'
            ];
        } else {
            return $this->getErrorResponse($model);
        }
    }
}
