<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */
?>
<div id="app" v-cloak>
    <app-template url="<?= $url?>" add-url="<?= $addUrl?>"
                  submit-url="<?= $submitUrl?>"></app-template>
</div>
<script>
    const app = new Vue({
        el: '#app',
    });
</script>
