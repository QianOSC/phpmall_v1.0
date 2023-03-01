<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

Yii::$app->loadViewComponent('app-goods');
$mchId = Yii::$app->user->identity->mch_id;
?>
<div id="app" v-cloak>
    <el-card shadow="never" style="border:0" body-style="background-color: #f3f3f3;padding: 0 0;">
        <div slot="header">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <span style="color: #409EFF;cursor: pointer"
                          @click="$navigate({r:'mall/goods/index'})">
                        商品列表
                    </span>
                </el-breadcrumb-item>
                <el-breadcrumb-item v-if="form.goods_id > 0">详情</el-breadcrumb-item>
                <el-breadcrumb-item v-else>添加商品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- #amphisbe is_mch ? 0 : 1 -->
        <app-goods :is_member="1"
                   :is_cats="1"
                   :is_show="0"
                   :is_info="1"
                   :form="form"
                   :is_edit="is_edit"
                   :is_detail="1"
                   :is_mch="is_mch"
                   :mch_id="mch_id"
                   :referrer="url"
                   :is_display_setting="0"
                   sign="mall"
                   :is_e_card="0"
                   :has_goods_param="true"
                   ref="appGoods">
        </app-goods>
    </el-card>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                form: {},
                url: 'mall/goods/index',
                is_mch: <?= $mchId > 0 ? 1 : 0 ?>,
                mch_id: <?= $mchId ?>,
                is_edit: 0,
            }
        },
        created() {
            if(getQuery('page') > 1) {
                this.url = {
                    r: 'mall/goods/index',
                    page: getQuery('page')
                }
            }
            if (getQuery('id')) {
                this.is_edit = 1;
            }
        },

    });
</script>
