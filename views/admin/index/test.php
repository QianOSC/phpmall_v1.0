<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

?>
<div id="app" v-cloak>
    <el-button @click="getUser">AAA</el-button>
</div>
<script>
const app = new Vue({
    el: '#app',
    data() {
        return {
            user: {}
        };
    },
    methods: {
        getUser() {
            this.$alert('aaa');
        },
    },
});
</script>
