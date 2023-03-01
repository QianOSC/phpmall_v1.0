<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

Yii::$app->loadViewComponent('app-goods-list');
?>
<style>

</style>
<div id="app" v-cloak>

    <app-goods-list
            ref="goodsList"
            goods_url="plugin/wholesale/mall/goods/index"
            edit_goods_url='plugin/wholesale/mall/goods/edit'
            :is-show-svip="isVip">
    </app-goods-list>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                isAllChecked: false,
                isVip: false
            };
        },
        created() {
            this.loadSetting();
        },
        methods: {
            async loadSetting() {
               try {
                   this.loading = true;
                   const e = await request({
                       params: {
                           r: 'plugin/wholesale/mall/setting'
                       },
                       method: 'get'
                   });
                   this.loading = false;
                   if (e.data.code === 0) {
                       this.isVip = e.data.data.setting.svip_status == 1 ? true : false
                   }
               } catch (e) {
                   this.loading = false;
                   throw new Error(e);
               }
            },
        }
    });
</script>
