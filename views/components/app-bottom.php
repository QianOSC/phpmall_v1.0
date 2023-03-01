<?php defined('YII_ENV') or exit('Access Denied');
/**
 * Anvil
 * Created by
 * Author wangs
 * Date   2021-05-04 21:06
 * Copyright (c) 2020-2021 南京千境网络科技有限公司
 * Desc
 */
$indSetting = \app\forms\common\CommonOption::get(\app\models\Option::NAME_IND_SETTING);

?>
<style>

    .app-bottom-footer {
        color: #ACACAC;
        text-align: center;
        line-height: 30px;
    }

    .app-bottom-footer a,
    .app-bottom-footer a:visited {
        color: #909399;
        text-decoration: none;
    }
</style>
<script src="<?= Yii::$app->request->baseUrl ?>/statics/js/Sortable.min.js"></script>
<script
    src="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/vuedraggable@2.18.1/dist/vuedraggable.umd.min.js"></script>
<template id="app-bottom">
    <div class="app-bottom">
        <el-card shadow="never">

            <div style="overflow-x: auto">
                <div class="app-bottom-footer">
                    <?php if ($indSetting && !empty($indSetting['copyright'])) : ?>
                        <a style="color: #000;" href="<?= isset($indSetting['copyright_url']) ? $indSetting['copyright_url'] : '' ?>"
                           target="_blank"><?= $indSetting['copyright'] ?></a>
                    <?php else : ?>
                        &copy;2019 <a href="#" target="_blank">南京千境网络科技有限公司</a>
                    <?php endif; ?>
                </div>
            </div>
        </el-card>
        </el-card>
    </div>
</template>
<script>
    Vue.component('app-bottom', {
        template: '#app-bottom',
        props: {
        },
        data() {
            return {

            };
        },
        created() {
        },
        methods: {
        },
    });
</script>