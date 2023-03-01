<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */
Yii::$app->loadViewComponent('app-test');
?>
<div id="app" v-cloak>
    <app-test></app-test>
    <div v-loading="loading">
        <template v-if="mall">
            <h1>{{mall.name}}</h1>
            <el-button @click="$navigate({r:'mall/demo/index'})">列表样式规范</el-button>
            <el-button @click="$navigate({r:'mall/demo/edit'})">表单样式</el-button>
        </template>
    </div>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                loading: false,
                mall: null,
            };
        },
        created() {
            this.loadData();
        },
        methods: {
            loadData() {
                this.loading = true;
                this.$request({
                    params: {
                        r: 'mall/index/index',
                    },
                }).then(e => {
                    this.loading = false;
                    if (e.data.code === 0) {
                        this.mall = e.data.data.mall;
                    } else {
                        this.$message.error(e.data.msg);
                    }
                }).catch(e => {
                });
            },
        }
    });
</script>
