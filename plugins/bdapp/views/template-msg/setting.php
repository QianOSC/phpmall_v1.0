<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */
?>
<div id="app">
    <app-template url="plugin/bdapp/template-msg/setting" submit-url='plugin/bdapp/template-msg/setting'
                  sign="bdapp"
                  add-url="plugin/bdapp/template-msg/add-template"></app-template>
</div>
<script>
    const app = new Vue({
        el: '#app'
    });
</script>
