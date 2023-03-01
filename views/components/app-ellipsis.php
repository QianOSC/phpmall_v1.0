<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */
?>
<template id="app-ellipsis">
    <div class="app-ellipsis">
        <div style="word-break: break-all;" v-line-clamp="line">
            <slot></slot>
        </div>
    </div>
</template>
<script>
Vue.use(VueLineClamp, {
    importCss: true,
});

Vue.component('app-ellipsis', {
    template: '#app-ellipsis',
    props: {
        line: Number,
    },
    computed: {
    },
    methods: {},
});
</script>
