<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */
Yii::$app->loadViewComponent('app-order');
?>
<style>

</style>
<div id="app" v-cloak>
    <el-card shadow="never" style="border:0" body-style="background-color: #f3f3f3;padding: 10px 0 0;">
        <app-order order-url="plugin/pond/mall/order"
                   order-detail-url="plugin/pond/mall/order/detail"
                   recycle-url="plugin/pond/mall/order/destroy-all">
        </app-order>
    </el-card>
</div>

<script>
    new Vue({
        el: '#app',
        data() {
            return {

            };
        },
        created() {

        },
        methods: {

        }
    });
</script>
