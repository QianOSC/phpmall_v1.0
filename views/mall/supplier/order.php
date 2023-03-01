<?php
/**
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 * @link http://www.92mj.vip/
 */
Yii::$app->loadViewComponent('app-order');
$menuList = \Yii::$app->role->getShareMenu();
$newMenuList[] = [
    'name' => '全部',
    'value' => 'all'
];
foreach ($menuList as $item) {
    $newMenuList[] = [
        'name' => $item['name'],
        'value' => $item['sign']
    ];
}
if (\Yii::$app->user->identity->mch_id) {
    $newMenuList = [];
}
$newMenuList = [];
$newMenuList = Yii::$app->serializer->encode($newMenuList);
?>
<style>
    .app-box-info {
        border-right: 1px solid #EBEEF5;
    }

</style>
<div id="app" v-cloak>
    <el-card shadow="never" style="border:0" body-style="background-color: #f3f3f3;padding: 10px 0 0;">
        <app-order
                active-name="all"
                :order-title="orderTitle"
                :tabs="menuList"
                :title-label="titleLabel"
                :new-search="search"
                :select-list="selectList"
                :is-show-recycle="false"
                :is-show-confirm="false"
                :is-show-finish="false"
                :is-show-send="false"
                :is-show-clerk="false"
                :is-show-print="false"
                :is-show-remark="false"
                :is-show-cancel="false"
                :is-show-edit-address="false"
                :is-show-detail="false"
                :is-show-action="false"
                :is-show-edit-express-price="false"
                :is-show-edit-single-price="false"
                :is-show-cardfooter="false"
                :date-type-list="[]"
                order-url="mall/supplier/order">
        </app-order>
    </el-card>
</div>

<style>
</style>

<script>
    new Vue({
        el: '#app',
        data() {
            return {
                search: {
                    time: null,
                    keyword: '',
                    keyword_1: 'order_no',
                    date_start: '',
                    date_end: '',
                    platform: '',
                    status: '',
                    plugin: 'all',
                    send_type: -1,
                    parent_id: 0,
                    date_type: 'created_time',
                },
                titleLabel: '供应商列表',
                title: '',
                loading: false,
                pagination: null,
                activeName: 'all',
                list: [],
                address: [],
                exportList: [],
                menuList: JSON.parse('<?= $newMenuList ?>'),
                orderTitle: [
                    {width: '65%', name: '商品信息'},
                    {width: '35%', name: '合计金额'},
                ],
                selectList: [
                    {value: 'supplier', name: '供应商'},
                    {value: 'order_no', name: '订单号'},
                    {value: 'mch_no', name: '商户单号'},
                    {value: 'nickname', name: '用户名'},
                    {value: 'user_id', name: '用户ID'},
                    {value: 'goods_name', name: '商品名称'},
                    {value: 'name', name: '收货人'},
                    {value: 'mobile', name: '收货人电话'},
                    {value: 'store_name', name: '门店名称'},
                    {value: 'goods_no', name: '商品货号'},
                    {value: 'address', name: '收货地址'},
                ]
            };
        },
        created() {
            if (getQuery('id')) {
                this.search.parent_id = getQuery('id');
            }

            // this.search.status = this.activeName;
        },
        methods: {
            // 获取列表
            getList() {
                this.loading = true;
                this.list = [];
                if (this.search.time) {
                    this.search.date_start = this.search.time[0];
                    this.search.date_end = this.search.time[1];
                } else {
                    this.search.date_start = null;
                    this.search.date_end = null;
                }
                if (getQuery('id')) {
                    this.search.parent_id = getQuery('id');
                }
                this.search.status = this.activeName;
                request({
                    params: this.search,
                }).then(e => {
                    this.loading = false;
                    if (e.data.code == 0) {
                        this.title = e.data.data.supplier;
                        this.list = e.data.data.list;
                        this.pagination = e.data.data.pagination;
                        this.exportList = e.data.data.export_list;
                        this.menuList = e.data.data.menu_list;

                    }

                }).catch(e => {
                    this.loading = false;
                });
            },
        }
    });
</script>