<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */
Yii::$app->loadViewComponent('app-mail-setting');
?>
<div id="app" v-cloak>
    <el-card shadow="never" style="border:0" body-style="background-color: #f3f3f3;padding: 10px 0 0;">
        <div slot="header">
            <span>邮件管理（QQ邮箱）</span>
        </div>
        <app-mail-setting></app-mail-setting>
    </el-card>
</div>
<script>
    const app = new Vue({
        el: '#app',
    });
</script>
