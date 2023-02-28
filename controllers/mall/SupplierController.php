<?php


namespace app\controllers\mall;



use app\forms\mall\supplier\SupplierEditForm;
use app\forms\mall\supplier\OrderForm;
use app\forms\mall\supplier\SupplierForm;

class SupplierController extends MallController{
//    public function init()
//    {
//        return parent::init();
//    }

    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new SupplierForm();
            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->getList());
        } else {
            return $this->render('index');
        }
    }


    // 分销订单列表
    public function actionOrder()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new OrderForm();
            if (\Yii::$app->request->isPost) {
                $form->attributes = \Yii::$app->request->post();
                $post = \Yii::$app->request->post();
                if (isset($post['keyword_1']) && isset($post['keyword'])) {
                    switch ($post['keyword_1']) {
                        case 'order_no':
                            $form->order_no = $post['keyword'];
                            break;
                        case 'nickname':
                            $form->nickname = $post['keyword'];
                            break;
                        case 'user_id':
                            $form->user_id = $post['keyword'];
                            break;
                        case 'goods_name':
                            $form->goods_name = $post['keyword'];
                            break;
                    }
                }
            } else {
                $get = \Yii::$app->request->get();
                $form->attributes = $get;

                if (isset($get['keyword_1']) && isset($get['keyword'])) {
                    $keyword1 = $get['keyword_1'];
                    $form->$keyword1 = $get['keyword'];
                }
            }
            $form->mall = \Yii::$app->mall;
            return $this->asJson($form->search());
        } else {
            if (\Yii::$app->request->post('flag') === 'EXPORT') {
                $fields = explode(',', \Yii::$app->request->post('fields'));
                $form = new OrderForm();
                $post = \Yii::$app->request->post();
                $form->attributes = $post;
                if (isset($post['keyword_1']) && isset($post['keyword'])) {
                    $keyword1 = $post['keyword_1'];
                    $form->$keyword1 = $post['keyword'];
                }
                $form->fields = $fields;
                $form->search();
                return false;
            } else {
                return $this->render('order');
            }
        }
    }


    /**
     * 添加、编辑
     * @return string|\yii\web\Response
     */
    public function actionEdit()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isPost) {
                $form = new SupplierEditForm();
                $data = \Yii::$app->request->post();
                $form->attributes = $data['form'];
                $res = $form->save();

                return $this->asJson($res);
            } else {
                $form = new SupplierEditForm();
                $form->attributes = \Yii::$app->request->get();
                $detail = $form->getDetail();

                return $this->asJson($detail);
            }
        } else {
            return $this->render('edit');
        }
    }

    public function actionDestroy()
    {
        if ($id = \Yii::$app->request->post('id')) {
            $form = new SupplierForm();
            $form->id = $id;
            return $this->asJson($form->destroy());
        }
    }

    /**
     * 修改密码
     * @return \yii\web\Response
     */
    public function actionEditPassword()
    {
        $form = new SupplierForm();
        $form->attributes = \Yii::$app->request->post();
        $res = $form->editPassword();

        return $this->asJson($res);
    }

    public function actionList()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new SupplierForm();

            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->supplierList());
        } else {
            return $this->render('list');
        }
    }
}