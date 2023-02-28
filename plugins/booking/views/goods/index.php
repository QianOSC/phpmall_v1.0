<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

Yii::$app->loadViewComponent('app-goods-list');
?>
<style>
</style>
<div id="app" v-cloak>
    <app-goods-list
            ref="goodsList"
            :is-show-batch-button="false"
            goods_url="plugin/booking/mall/goods/index"
            edit_goods_url='plugin/booking/mall/goods/edit'
            :is-show-express="false">
    </app-goods-list>
</div>
<script>
    const app = new Vue({
        el: '#app',
    });
</script>
