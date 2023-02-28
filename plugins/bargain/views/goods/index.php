<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */

Yii::$app->loadViewComponent('app-goods-list', __DIR__);
?>

<style>
</style>
<div id="app" v-cloak>
    <app-goods-list
            ref="goodsList"
            :is-show-svip="false"
            :is-show-batch-button="false"
            :is-show-cat="false"
            add_goods_title="新建活动"
            header_title="砍价活动"
            date_label="活动时间"
            goods_url="plugin/bargain/mall/goods/index"
            info_goods_url="plugin/bargain/mall/info/single"
            edit_goods_url='plugin/bargain/mall/goods/edit'>
    </app-goods-list>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {

            };
        },
        methods: {
            toSearch() {

            }
        }
    });
</script>
