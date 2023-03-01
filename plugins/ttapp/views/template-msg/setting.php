<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */
?>
<div id="app">
    <app-template url="plugin/ttapp/template-msg/setting" submit-url='plugin/ttapp/template-msg/setting'
                  sign="ttapp"
                  add-url="plugin/ttapp/template-msg/add-template" :one-key="isShow">
        <template slot="after_remind">
            <br/>
            <div style="margin: -10px 20px 20px;background-color: #F4F4F5;padding: 10px 15px;color: #909399;display: inline-block;font-size: 15px">
                注:目前只有今日头条支持，抖音接入中。
            </div>
        </template>
    </app-template>
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
