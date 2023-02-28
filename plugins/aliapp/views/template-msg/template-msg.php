<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */
?>
<div id="app">
    <app-template url="plugin/aliapp/template-msg/setting" submit-url='plugin/aliapp/template-msg/setting'
                  sign="aliapp"
                  add-url="plugin/aliapp/template-msg/add-template" :one-key="isShow"></app-template>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                isShow: false,
            };
        },
    });
</script>
