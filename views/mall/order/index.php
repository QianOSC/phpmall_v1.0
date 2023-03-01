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
        <!-- #amphisbe 隐藏订单类型 is-show-order-plugin -->
        <app-order :active-name="activeName" :is-goods-type="true" :is-show-order-type="false" :is-show-profit="true" :is-show-order-plugin="false"></app-order>
    </el-card>
</div>

<script>
    new Vue({
        el: '#app',
        data() {
            return {
                activeName: getQuery('status') === null ? '-1' : getQuery('status')
            };
        },
        created() {

        },
        methods: {
        }
    });
</script>