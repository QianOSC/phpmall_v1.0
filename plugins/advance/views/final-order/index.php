<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */
?>
<style>

</style>

<div id="app" v-cloak>
    <el-card show="never" v-loading="loading">
        <div slot="header"></div>
        <div slot="body"></div>
    </el-card>
</div>

<script>
    const app = new Vue({
        el: 'app',
        data() {
            return {
                loading: false,
            }
        }
    });

</script>
