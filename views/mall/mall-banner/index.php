<?php defined('YII_ENV') or exit('Access Denied');
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author xay
 * @link http://www.92mj.vip/
 */
?>
<div id="app" v-cloak>
    <app-banner url="mall/mall-banner/index" submit_url="mall/mall-banner/edit"></app-banner>
</div>
<script>
const app = new Vue({
    el: '#app'
})
</script>