<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

Yii::$app->loadViewComponent('app-comment');
?>
<div id="app" v-cloak>
    <app-comment sign="booking" reply_url='plugin/booking/mall/comment/reply' edit_url="plugin/booking/mall/comment/edit"></app-comment>
</div>
<script>
const app = new Vue({
    el: '#app',
    mounted() {
        if (getQuery('id')) {}
    }
});
</script>