<?php
/**
 * @author Qian
 * @copyright ©2021 南京千境网络科技有限公司
 * @link http://www.92mj.vip/
 */
?>
<style>
    .form-body {
        padding: 20px;
        background-color: #fff;
        margin-bottom: 20px;
        padding-right: 20%;
        min-width: 900px;
    }

    .form-body .el-form-item {
        padding-right: 25%;
        min-width: 850px;
    }

    .form-button {
        margin: 0;
    }

    .form-button .el-form-item__content {
        margin-left: 0!important;
    }

    .button-item {
        padding: 9px 25px;
    }
</style>
<div id="app" v-cloak>
    <el-card class="box-card" v-loading="cardLoading" shadow="never" style="border:0" body-style="background-color: #f3f3f3;padding: 10px 0 0;">
        <div slot="header">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <span style="color: #409EFF;cursor: pointer"
                          @click="$navigate({r:'mall/share/index'})">
                        分销商列表
                    </span>
                </el-breadcrumb-item>
                <el-breadcrumb-item>编辑分销商</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-body">

        </div>
    </el-card>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                cardLoading: false,

            };
        },
    });
</script>