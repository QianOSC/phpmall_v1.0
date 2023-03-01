<?php
/**
 * @link http://www.92mj.vip/
 * @copyright ©2021 南京千境网络科技有限公司
 * @author Qian
 */
?>
<style>
    .form-body {
        padding: 20px 0;
        background-color: #fff;
        margin-bottom: 20px;
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
    <el-card shadow="never" style="border:0" body-style="background-color: #f3f3f3;padding: 10px 0 0;">
        <div slot="header">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><span style="color: #409EFF;cursor: pointer" @click="$navigate({r:'mall/supplier/index'})">供应商列表</span></el-breadcrumb-item>
                <el-breadcrumb-item>添加供应商</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-body">
            <el-form @submit.native.prevent :model="supplierForm" :rules="rules" ref="supplierForm" label-width="120px" size="small">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="供应商名称" prop="name">
                            <el-input v-model="supplierForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="供应商公司" prop="company">
                            <el-input v-model="supplierForm.company"></el-input>
                        </el-form-item>
                        <el-form-item label="联系人" prop="contacts">
                            <el-input v-model="supplierForm.contacts"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" prop="phone">
                            <el-input v-model="supplierForm.phone"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <el-button :loading="btnLoading" class="button-item" type="primary" @click="store('supplierForm')" size="small">保存</el-button>
    </el-card>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                supplierForm: {
                    name: '',
                    company: '',
                    contacts: '',
                    phone: '',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入供应商名称', trigger: 'change'},
                    ]
                },
                treeLoading: false,
                btnLoading: false,
                defaultProps: {
                    label: 'name'
                },
                defaultCheckedKeys: []
            };
        },
        methods: {
            store(formName) {
                this.$refs[formName].validate((valid) => {
                    let self = this;
                    if (valid) {
                        self.btnLoading = true;
                        request({
                            params: {
                                r: 'mall/supplier/edit'
                            },
                            method: 'post',
                            data: {
                                form: self.supplierForm
                            }
                        }).then(e => {
                            self.btnLoading = false;
                            if (e.data.code == 0) {
                                self.$message.success(e.data.msg);
                                navigateTo({
                                    r: 'mall/supplier/index'
                                })
                            } else {
                                self.$message.error(e.data.msg);
                            }
                        }).catch(e => {
                            self.$message.error(e.data.msg);
                            self.btnLoading = false;
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            getDetail() {
                let self = this;
                request({
                    params: {
                        r: 'mall/supplier/edit',
                        id: getQuery('id')
                    },
                    method: 'get',
                }).then(e => {
                    self.supplierForm = e.data.data;
                }).catch(e => {
                    console.log(e);
                });
            }
        },
        mounted: function () {
            if (getQuery('id')) {
                this.getDetail();
            }
        }
    });
</script>
