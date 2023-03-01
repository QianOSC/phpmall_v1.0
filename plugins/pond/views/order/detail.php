<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */
Yii::$app->loadViewComponent('app-order-detail');
?>
<div id="app" v-cloak>
    <app-order-detail get-order-list-url="plugin/pond/mall/order/index"></app-order-detail>
</div>

<script>
    new Vue({
        el: '#app',
        data() {
            return {};
        },
        created() {
        },
        methods: {}
    })
</script>