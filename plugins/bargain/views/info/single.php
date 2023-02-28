<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */
Yii::$app->loadViewComponent('app-info', __DIR__)
?>
<div id="app" v-cloak="">
    <app-info type="single" type="all"></app-info>
</div>
<script>
    const app = new Vue({
        el: '#app'
    });
</script>