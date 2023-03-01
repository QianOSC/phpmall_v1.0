<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */
Yii::$app->loadViewComponent('app-order');
?>
<style>
</style>
<div id="app" v-cloak>
    <el-card shadow="never" style="border:0" body-style="background-color: #f3f3f3;padding: 10px 0 0;">
        <app-order order-url="plugin/pintuan/mall/order"
                   order-detail-url="plugin/pintuan/mall/order/detail"
                   recycle-url="plugin/pintuan/mall/order/destroy-all">
            <template slot="orderTag" slot-scope="order">
                <template v-if="order.order.is_pay == 1">
                    <el-tag size="small" type="success"
                            v-if="order.order.orderRelation && order.order.orderRelation.pintuanOrder && order.order.orderRelation.pintuanOrder.status == 1">
                        拼团中
                    </el-tag>
                    <el-tag size="small" type="success"
                            v-else-if="order.order.orderRelation  && order.order.orderRelation.pintuanOrder && order.order.orderRelation.pintuanOrder.status == 2 && order.order.cancel_status == 0">
                        拼团成功
                    </el-tag>
                    <el-tag size="small" type="danger"
                            v-else-if="order.order.orderRelation  && order.order.orderRelation.pintuanOrder && order.order.orderRelation.pintuanOrder.status == 3">
                        拼团失败
                    </el-tag>
                    <el-tag size="small" type="danger"
                            v-else-if="order.order.orderRelation  && order.order.orderRelation.pintuanOrder && order.order.orderRelation.pintuanOrder.status == 4">
                        拼团失败待退款
                    </el-tag>
                </template>
            </template>
        </app-order>
    </el-card>
</div>

<script>
    new Vue({
        el: '#app',
        data() {
            return {};
        },
        created() {
        },
        methods: {}
    });
</script>
