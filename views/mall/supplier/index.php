<?php defined('YII_ENV') or exit('Access Denied'); ?>
<style>
    .set-el-button {
        padding: 0!important;
        border: 0;
        margin: 0 5px;
    }

    .input-item {
        display: inline-block;
        width: 250px;
        margin: 0 0 20px;
    }

    .input-item .el-input__inner {
        border-right: 0;
    }

    .input-item .el-input__inner:hover{
        border: 1px solid #dcdfe6;
        border-right: 0;
        outline: 0;
    }

    .input-item .el-input__inner:focus{
        border: 1px solid #dcdfe6;
        border-right: 0;
        outline: 0;
    }

    .input-item .el-input-group__append {
        background-color: #fff;
        border-left: 0;
        width: 10%;
        padding: 0;
    }

    .input-item .el-input-group__append .el-button {
        padding: 0;
    }

    .input-item .el-input-group__append .el-button {
        margin: 0;
    }

    .table-body {
        padding: 20px;
        background-color: #fff;
    }
</style>
<div id="app" v-cloak>
    <el-card class="box-card" shadow="never" style="border:0" body-style="background-color: #f3f3f3;padding: 10px 0 0;">
        <div slot="header">
            <span>供应商列表</span>
            <div style="float: right;margin-top: -5px">
                <el-button type="primary" @click="$navigate({r: 'mall/supplier/edit'})"
                           size="small">新增供应商
                </el-button>
            </div>
        </div>
        <div class="table-body">
            <div class="input-item">
                <el-input @keyup.enter.native="search" size="small" placeholder="请输入搜索内容" v-model="keyword" clearable @clear="search">
                    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                </el-input>
            </div>
            <el-table :data="list" highlight-current-row v-loading="listLoading" style="width: 100%;" border>
                <el-table-column prop="id" label="ID" width="150"></el-table-column>
                <el-table-column prop="name" label="供应商"></el-table-column>
                <el-table-column prop="company" label="公司"></el-table-column>
                <el-table-column prop="contacts" label="联系人"></el-table-column>
                <el-table-column prop="phone" label="电话"></el-table-column>
                <el-table-column label="操作" width="200" fixed="right">
                    <template slot-scope="scope">
                        <el-button class="set-el-button" size="mini" type="text" circle @click="$navigate({r: 'mall/supplier/edit', id:scope.row.id})">
                            <el-tooltip class="item" effect="dark" content="编辑" placement="top">
                                <img src="statics/img/mall/edit.png" alt="">
                            </el-tooltip>
                        </el-button>
                        <el-button type="text" @click="editPassword(scope.row.id)" circle size="mini">
                            <el-tooltip class="item" effect="dark" content="修改密码" placement="top">
                                <img src="statics/img/mall/change.png" alt="">
                            </el-tooltip>
                        </el-button>
                        <el-button class="set-el-button" size="mini" type="text" circle @click="destroy(scope.row)">
                            <el-tooltip class="item" effect="dark" content="删除" placement="top">
                                <img src="statics/img/mall/del.png" alt="">
                            </el-tooltip>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

            <div flex="dir:right" style="margin-top: 20px;">
                <el-pagination
                        hide-on-single-page
                        @current-change="pagination"
                        background
                        layout="prev, pager, next, jumper"
                        :page-count="pageCount">
                </el-pagination>
            </div>
        </div>
    </el-card>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                keyword: '',
                list: [],
                listLoading: false,
                pageCount: 0,
                page: 1,
                id: 0,
                sort: 0,
            };
        },
        directives: {
            // 注册一个局部的自定义指令 v-focus
            focus: {
                // 指令的定义
                inserted: function (el) {
                    // 聚焦元素
                    el.querySelector('input').focus()
                }
            }
        },
        methods: {
            quit() {
                this.id = null;
            },

            search() {
                this.page = 1;
                this.getList();
            },

            pagination(currentPage) {
                let self = this;
                self.page = currentPage;
                self.getList();
            },

            editPassword(id) {
                let self = this;
                self.$prompt('请输入新密码', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /\S+/,
                    inputErrorMessage: '请输入新密码',
                    inputType: 'password',
                }).then(({value}) => {
                    request({
                        params: {
                            r: 'mall/supplier/edit-password',
                        },
                        method: 'post',
                        data: {
                            id: id,
                            password: value
                        }
                    }).then(e => {
                        if (e.data.code === 0) {
                            self.$message.success(e.data.msg);
                        } else {
                            self.$message.error(e.data.msg);
                        }
                    }).catch(e => {
                        console.log(e);
                    });
                }).catch(() => {

                });
            },
            //删除
            destroy: function (column) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    request({
                        params: {
                            r: 'mall/supplier/destroy'
                        },
                        data: {id: column.id},
                        method: 'post'
                    }).then(e => {
                        location.reload();
                        this.listLoading = false;
                    }).catch(e => {
                        this.listLoading = false;
                    });

                });
            },
            //获取列表
            getList() {
                this.listLoading = true;
                request({
                    params: {
                        r: 'mall/supplier/index',
                        // article_cat_id: this.article_cat_id,
                        page: this.page,
                        keyword: this.keyword,
                    },
                }).then(e => {
                    console.log('list:' + JSON.stringify(e.data));
                    if (e.data.code === 0) {
                        this.list = e.data.data.list;
                        this.pageCount = e.data.data.pagination.page_count;
                    } else {
                        this.$message.error(e.data.msg);
                    }
                    this.listLoading = false;
                }).catch(e => {
                    console.log('error:' + JSON.stringify(e));
                    this.listLoading = false;
                });
            },
        },
        mounted() {
            this.getList();
        }
    })
</script>
