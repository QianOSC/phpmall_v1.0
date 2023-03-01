<?php
/**
 * @var \yii\web\View $this
 * @var string $content
 */
$isAdmin = false;
$isSuperAdmin = false;
if (!Yii::$app->user->isGuest) {
    /** @var \app\models\User $user */
    $user = Yii::$app->user->identity;
    if ($user->identity && $user->identity->is_super_admin == 1) {
        $isAdmin = true;
        $isSuperAdmin = true;
    }
    if ($user->identity && $user->identity->is_admin == 1) {
        $isAdmin = true;
    }
}
?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <title><?= \Yii::$app->plugin->currentPlugin->getDisplayName() ? \Yii::$app->plugin->currentPlugin->getDisplayName() : '商城' ?></title>
    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/element-ui@2.12.0/lib/theme-chalk/index.css">
    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/css/flex.css">
    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/css/common.css">

    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/css/sidebar.css">
    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/fontawesome@5.11.2/css/fontawesome.css" rel="stylesheet">
    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/fontawesome@5.11.2/css/brands.css" rel="stylesheet">
    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/fontawesome@5.11.2/css/solid.css" rel="stylesheet">

    <link href="//at.alicdn.com/t/font_353057_1wttvyksgsj.css" rel="stylesheet">
    <script src="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/jquery@3.3.1/dist/jquery.min.js"></script>
    <script src="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/vue@2.6.10/dist/vue.js"></script>
    <script src="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/element-ui@2.12.0/lib/index.js"></script>
    <script src="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/qs@6.5.2/dist/qs.js"></script>
    <script src="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/axios@0.18.0/dist/axios.min.js"></script>
    <script src="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/vue-line-clamp@1.2.4/dist/vue-line-clamp.umd.js"></script>
    <script>
        let _layout = null;
        let _aside = null;
        let _header = null;
        const _csrf = '<?=Yii::$app->request->csrfToken?>';
        const _scriptUrl = '<?=Yii::$app->request->scriptUrl?>';
        const _baseUrl = '<?= \Yii::$app->request->hostInfo . \Yii::$app->request->baseUrl ?>';
        const _pluginName = '<?= \Yii::$app->plugin->currentPlugin->getName()?>';
        let _isWe7 = <?=is_we7() ? 'true' : 'false'?>;
        let _isInd = <?=is_we7() ? 'false' : 'true'?>;
        let _isAdmin = <?=$isAdmin ? 'true' : 'false'?>;
        let _isSuperAdmin = <?=$isSuperAdmin ? 'true' : 'false'?>;
    </script>
    <script src="<?= Yii::$app->request->baseUrl ?>/statics/js/common.js"></script>
    <script src="<?= Yii::$app->request->baseUrl ?>/statics/js/dayjs.min.js"></script>
    <style>
        html, body {
            height: 100%;
            padding: 0;
            margin: 0;
        }

        #app {
            height: 100%;
        }

        .el-header {
            padding: 0;
        }

        #_aside .left-menu {
            width: 250px;
            height: 100%;
            position: fixed;
            del-top: 60px;
            left: 0;
            overflow: auto;
            z-index: 5;
        }

        #_aside .el-menu {
            border-right: none;
        }

        #_aside .el-submenu .el-menu-item {
            min-width: 0px;
        }

        #_aside .aside-logo {
            background: #464d54;
            color: #f2f2f2;
            cursor: pointer;
            font-weight: bold;
            text-align: center;
            padding: 0 15px;
        }

        #_aside .aside-logo:hover {
            background: #30353a;
            color: #fff;
        }

        #_aside .aside-logo div {
            background: rgba(0, 0, 0, 0.15);
            padding: 6px 6px;
            width: 100%;
            border-radius: 3px;
            margin: 10px 0;
        }

        #_aside .aside-logo img {
            height: calc(40px + 2px);
            width: calc(40px + 2px);
            border-radius: 50%;
            border: 2px solid #ffffff;
            display: block;
            margin-top: 10px;
        }

        .el-container {
            height: 100%;
        }

        .vertical {
            padding-bottom: 20px;
            margin-bottom: 20px;
        }

        [v-cloak] {
            display: none !important;
        }

        .el-dialog {
            min-width: 600px;
        }

        input,textarea,select {
            appearance: none;
            outline: none !important;
            box-shadow: none;
        }

        /* https://github.com/ElemeFE/element/pull/15359 */
        .el-input .el-input__count .el-input__count-inner {
            background: #FFF;
            display: inline-block;
            padding: 0 5px;
            line-height: normal;
        }


        #_header{
            background-color: #002140;
        }
        .mall-header {
            margin-left: 0px;
            background-color: #002140;
        }
        .mall-header .el-menu{
            background-color: #002140;
            color: hsla(0,0%,100%,.65)!important;
        }
        .mall-header .el-menu-item{
            color: hsla(0,0%,100%,1)!important;
        }

        .mall-header .el-menu-item:hover{
            background-color: #1b5388!important;
            color: #FFFFFF!important;
        }

        .mall-header .mall-name {
            max-width: 120px;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .mall-header .el-menu.el-menu--horizontal {
            border-bottom: 0;
        }

        .mall-header-menu .el-menu--popup {
            min-width: 1px;
        }

        .mall-header-menu .el-menu--popup .is-disabled {
            opacity: .65;
            cursor: default;
        }



        .el-submenu__title{
            color:hsla(0,0%,100%, 1)!important;
        }
        .el-submenu__title i{
            color:hsla(0,0%,100%, 1)!important;
        }
        .el-submenu__title:hover{
            background-color: #1b5388!important;
            color: #FFFFFF!important;
        }
        .el-submenu__icon-arrow:hover, .el-icon-arrow-down:hover{
            color: #FFFFFF!important;
        }
        .el-submenu__icon-arrow i:hover{
            color: #FFFFFF!important;
        }
    </style>

</head>
<body>
<?php $this->beginBody() ?>
<div id="_layout"></div>
<?= $this->renderFile('@app/views/components/index.php') ?>
<div class="el-container">
    <div id="_aside" class="el-aside" style="width: 250px">
        <div class="left-menu">
            <div class=" sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                <!--                sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures-->
                <div class="nano">
                    <div class="nano-content">
                        <ul>
                            <li class="logo" @click="$navigate({r:'mall/index/index'})">
                                <a>
                                    <span>古味一隅子系统</span>
                                </a>
                            </li>
                            <li v-for="firstMenu in leftMenus" :class="firstMenu.id == CUR_PLUGIN_IDX ? 'select2':''">
                                <a class="sidebar-sub-toggle" @click="openUrl(firstMenu)">
                                    <i class="el-icon-menu"></i>{{firstMenu.name}}
                                    <span class="sidebar-collapse-icon el-icon-arrow-down" v-if="firstMenu.children && firstMenu.children.length > 0"></span>
                                </a>
                                <!--
                                <ul v-if="firstMenu.children.length > 0" :style="{'display': currentMenu.opened_1 == firstMenu.id ? 'block':'none'}">
                                    <li v-for="secondMenu in firstMenu.children" style="padding-left: 18px;"  @click="menuClick2(secondMenu)"
                                        :class="secondMenu.id == currentMenu.opened_2 ? 'select2':''">
                                        <a href="#" @click="navsBar(secondMenu)" :class="secondMenu.id == currentMenu.opened_2 ? 'select2':''"
                                        >{{secondMenu.name}}</a>
                                    </li>

                                </ul>
                                -->
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--
        <div class="aside-logo" @click="$navigate({r:'mall/index/index'})" flex="dir:top main:center cross:center">
            <template v-if="mall">
                <img v-if="mall.mall_logo_pic" :src="mall.mall_logo_pic" alt=""/>
                <div flex="main:center cross:center">{{mall.name}}</div>
            </template>
        </div>
        <el-menu
                class="left-menu"
                v-loading="leftMenuLoading"
                :unique-opened="true"
                :default-active="defaultRoute"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                @open="handleOpen"
                @close="handleClose">
            <template v-if="leftMenus" v-for="leftMenu in leftMenus">
                <el-submenu v-if="leftMenu.children && leftMenu.children.length" :index="leftMenu.id"
                            :key="leftMenu.id">
                    <template slot="title">
                        <i class="el-icon-location"></i><span>{{leftMenu.name}}</span>
                    </template>
                    <el-menu-item-group>
                        <template v-if="leftMenu.children" v-for="cItem1 in leftMenu.children">

                            <el-submenu v-if="cItem1.children" :index="cItem1.id">
                                <template slot="title">{{cItem1.name}}</template>
                                <el-menu-item
                                        v-for="cItem2 in cItem1.children"
                                        :key="cItem2.id"
                                        :index="cItem2.id"
                                        @click="openUrl(cItem2)">
                                    {{cItem2.name}}
                                </el-menu-item>
                            </el-submenu>

                            <el-menu-item @click="openUrl(cItem1)" v-else :index="cItem1.id">
                                {{cItem1.name}}
                            </el-menu-item>
                        </template>
                </el-submenu>
                <el-menu-item v-else @click="openUrl(leftMenu)" :index="leftMenu.id">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{leftMenu.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
        -->
    </div>
    <div class="el-container is-vertical">
        <div id="_header">
            <header class="mall-header" flex="box:last">
                <el-menu class="el-menu-demo" mode="horizontal" menu-trigger="click">

                </el-menu>

                <el-menu mode="horizontal" menu-trigger="click">
                    <el-menu-item v-if="mch_id == 0" @click="navigateClick({r: 'admin/cache/clean', '_layout': 'mall'})" index="3">缓存
                    </el-menu-item>

                    <el-submenu index="2" v-if="mall && user" popper-class="mall-header-menu">

                        <template slot="title">
                            <span :title="mall.name" class="mall-name">{{mall.name}}</span>
                        </template>
                        <el-menu-item
                                v-if="user.identity && user.identity.is_operator == 0 && user.mch_id == 0 && updatePasswordStatus"
                                index="2-3" @click="updatePassword">修改密码
                        </el-menu-item>
                        <el-menu-item v-if="user.identity && user.identity.is_operator == 0 || user.mch_id"
                                      index="2-2" @click="logout">注销
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </header>
            <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button :loading="btnLoading" type="primary" @click="updatePasswordSubmit('ruleForm')">确 定
                    </el-button>
                </div>
            </el-dialog>
        </div>
        <main class="el-main" style="background: #f3f3f3">
            <?= $content ?>
        </main>
    </div>
</div>
<script>
    _layout = new Vue({
        el: '#_layout',
    });
    const _menuCacheKey = '_OPENED_PLUGIN_MENU_ID_OF_' + _pluginName;
    const _openedMenuKey = '_OPENED_PLUGIN_MENU_ID_OF_' + _pluginName;
    _aside = new Vue({
        el: '#_aside',
        data() {
            return {
                mall: null,
                leftMenuLoading: false,
                leftMenus: {},
                defaultRoute: '2',
                CUR_PLUGIN_IDX: 0
            };
        },
        created() {
            setInterval(() => {
                this.$request({
                    params: {
                        r: 'keep-alive/index',
                    },
                }).then(e => {
                }).catch(e => {
                });
            }, 1000 * 60 * 5);
            this.CUR_PLUGIN_IDX = localStorage.getItem('CUR_PLUGIN_IDX');
        },
        methods: {
            handleOpen() {
            },
            handleClose() {
            },
            getMenus() {
                let data = localStorage.getItem(_menuCacheKey);
                if (data) {
                    try {
                        data = JSON.parse(data);
                    } catch (e) {
                        data = false;
                    }
                }
                if (data && data.menus) {
                    this.leftMenus = data.menus;
                } else {
                    this.leftMenuLoading = true;
                }
                let openedMenuId = localStorage.getItem(_openedMenuKey);
                if (openedMenuId) {
                    this.defaultRoute = openedMenuId;
                }
                let self = this;
                request({
                    params: {
                        r: 'mall/menus/plugin',
                        name: _pluginName,
                    },
                    method: 'post',
                    data: {
                        route: getQuery('r')
                    }
                }).then(e => {
                    localStorage.setItem(_menuCacheKey, JSON.stringify(e.data.data));
                    self.leftMenuLoading = false;
                    self.leftMenus = e.data.data.menus;
                    self.defaultRoute = e.data.data.currentRouteInfo.id;


                    console.log('menu:' + JSON.stringify(self.leftMenus));
                }).catch(e => {
                    console.log(e);
                });
            },
            openUrl(item) {
                localStorage.setItem(_openedMenuKey, item.id);

                localStorage.setItem('CUR_PLUGIN_IDX', item.id);
                let args = {
                    r: item.route
                };
                if (item.params) {
                    for (let i in item.params) {
                        args[i] = item.params[i];
                    }
                }
                navigateTo(args);
            }
        },
        mounted: function () {
            this.getMenus();
        }
    });


    _header = new Vue({
        el: '#_header',
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                user: null,
                navs: [],
                mall: null,
                dialogFormVisible: false,
                ruleForm: {
                    pass: '',
                    checkPass: '',
                },
                btnLoading: false,
                rules: {
                    pass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {validator: validatePass, trigger: 'blur'},
                    ],
                    checkPass: [
                        {required: true, message: '请输入确认密码', trigger: 'blur'},
                        {validator: validatePass2, trigger: 'blur'}
                    ]
                },
                updatePasswordStatus: 0,
                courseMenu: {
                    children: [],
                },
                menu_3_id: -1
            };
        },
        created() {
            const cacheKey = '_MALL_MENUS';
            let data = localStorage.getItem(cacheKey);
            if (data) {
                try {
                    data = JSON.parse(data);
                    this.courseMenu = data.courseMenu;
                } catch (e) {
                    data = false;
                }
            }
            // console.log(_aside)
            this.loadData();
            let headerData = localStorage.getItem('_MALL_HEADER_DATA');
            if (headerData) {
                try {
                    headerData = JSON.parse(headerData);
                    this.user = headerData.user;
                    this.navs = headerData.navs;
                    this.mall = headerData.mall;
                    this.updatePasswordStatus = headerData.update_password_status;
                    _aside.mall = headerData.mall;
                } catch (e) {
                    headerData = false;
                }
            }
            this.menu_3_id = localStorage.getItem('_OPENED_MENU_3_ID') ?? -1;
            console.log('menu3::::::::::::' + this.menu_3_id);
        },
        methods:{
            open(menu){
                // console.log('navItem:' + JSON.stringify(menu));
                localStorage.setItem('_OPENED_MENU_3_ID', menu.id);
                if (menu) {
                    let args = {
                        r: menu.route
                    };
                    if (menu.params) {
                        for (let i in menu.params) {
                            args[i] = menu.params[i];
                        }
                    }

                    if (menu.route.indexOf('plugin/') != -1 && menu.route != 'mall/plugin/index') {
                        navigateTo(args, true)
                    } else {
                        navigateTo(args)
                    }
                }
            },
            setNav(children){
                console.log('children:' + JSON.stringify(children));
                // return;
                let headerData = localStorage.getItem('_MALL_HEADER_DATA');
                if (headerData) {
                    headerData_obj = JSON.parse(headerData);
                    headerData_obj.navs = children;
                    localStorage.setItem('_MALL_HEADER_DATA', JSON.stringify(headerData_obj));
                }else{
                    localStorage.setItem('_MALL_HEADER_DATA', JSON.stringify({
                        navs: children
                    }));
                }
                if(children.length > 0)
                    this.open(children[0]);
            },
            handleOpen() {
            },
            handleClose() {
            },

            loadData() {
                this.$request({
                    params: {
                        r: 'mall/index/header-bar',
                    },
                    method: 'get',
                }).then(e => {
                    let headerData = localStorage.getItem('_MALL_HEADER_DATA');
                    if (headerData) {
                        headerData_obj = JSON.parse(headerData);
                        this.navs = headerData_obj.navs;
                        e.data.data.navs = headerData_obj.navs;
                    }
                    localStorage.setItem('_MALL_HEADER_DATA', JSON.stringify(e.data.data));
                    console.log('loadData:' + JSON.stringify(e.data.data.navs));
                    this.user = e.data.data.user;
                    // this.navs = e.data.data.navs;
                    this.mall = e.data.data.mall;
                    this.updatePasswordStatus = e.data.data.update_password_status;
                    _aside.mall = e.data.data.mall;
                }).catch(e => {
                    console.log(e);
                });
            },
            logout() {
                let self = this;
                this.$request({
                    params: {
                        r: 'mall/user/logout'
                    },
                    method: 'get',
                    data: {}
                }).then(e => {
                    // 在当前页面打开
                    self.$navigate({
                        r: 'admin/user/me',
                    });
                }).catch(e => {
                    console.log(e);
                });
            },
            goBackToSystem() {
                if (_isWe7) {
                    this.$navigate({r: 'mall/we7-entry/logout'});
                } else {
                    this.$navigate({r: 'admin/index/back-index'});
                }
            },
            updatePassword() {
                this.dialogFormVisible = true;
            },
            updatePasswordSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.btnLoading = true;
                        this.$request({
                            params: {
                                r: 'mall/role-user/update-password'
                            },
                            method: 'post',
                            data: {
                                password: this.ruleForm.checkPass
                            }
                        }).then(e => {
                            this.btnLoading = false;
                            if (e.data.code == 0) {
                                this.dialogFormVisible = false;
                                this.$message.success(e.data.msg);
                                window.location.reload();
                            } else {
                                this.$message.error(e.data.msg);
                            }
                        }).catch(e => {
                            console.log(e);
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            navigateClick(params) {
                this.clearMenuStorage();
                this.$navigate(params);
            },
            clearMenuStorage() {
                localStorage.removeItem('_OPENED_MENU_1_ID');
                localStorage.removeItem('_OPENED_MENU_2_ID');
                localStorage.removeItem('_OPENED_MENU_3_ID');
                localStorage.removeItem('_UNFOLD_ID_1');
                localStorage.removeItem('_UNFOLD_ID_2');
            }
        }
    });

</script>
<?php $this->endBody() ?>
<script src="<?= Yii::$app->request->baseUrl ?>/statics/js/jquery.nanoscroller.min.js"></script>
<script src="<?= Yii::$app->request->baseUrl ?>/statics/js/sidebar.js"></script>
</body>
</html>
<?php $this->endPage() ?>
