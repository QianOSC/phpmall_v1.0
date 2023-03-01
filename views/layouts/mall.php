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
try {
    $this->title = Yii::$app->mall->name;
} catch (Exception $exception) {
}
$currentRoute = Yii::$app->controller->route;

$mchId = Yii::$app->user->identity->mch_id;
?>
<?php $this->beginPage(); ?>
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="renderer" content="webkit">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
        <meta name="format-detection" content="telephone=no,email=no,address=no">
        <title><?= $this->title ? ($this->title . ' - ') : '' ?>商城管理</title>
        <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/element-ui@2.12.0/lib/theme-chalk/index.css">
        <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/css/flex.css">
        <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/css/common.css">

        <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/css/sidebar.css">
        <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/fontawesome@5.11.2/css/fontawesome.css" rel="stylesheet">
        <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/fontawesome@5.11.2/css/brands.css" rel="stylesheet">
        <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl ?>/statics/unpkg/fontawesome@5.11.2/css/solid.css" rel="stylesheet">

        <link href="//at.alicdn.com/t/font_353057_qq5xo4ymtf.css" rel="stylesheet">
        <link href="//at.alicdn.com/t/font_1861175_6hlb1v8lw9r.css" rel="stylesheet"><!-- 榜店后台 -->
        <link href="<?= Yii::$app->request->baseUrl ?>/../favicon.ico" mce_href="<?= Yii::$app->request->baseUrl ?>/../favicon.ico" rel="shortcut icon"/>
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
            const _requestRoute = '<?=Yii::$app->requestedRoute?>';
            let _isWe7 = <?=is_we7() ? 'true' : 'false'?>;
            let _isInd = <?=is_we7() ? 'false' : 'true'?>;
            let _isAdmin = <?=$isAdmin ? 'true' : 'false'?>;
            let _isSuperAdmin = <?=$isSuperAdmin ? 'true' : 'false'?>;
        </script>
        <script src="<?= Yii::$app->request->baseUrl ?>/statics/js/common.js?v=4.3.2"></script>
        <script src="<?= Yii::$app->request->baseUrl ?>/statics/js/dayjs.min.js"></script>
        <script src="<?= Yii::$app->request->baseUrl ?>/statics/js/echarts.min.js"></script>
        <style>
            /* https://github.com/ElemeFE/element/pull/15359 */
            .el-input .el-input__count .el-input__count-inner {
                background: #FFF;
                display: inline-block;
                padding: 0 5px;
                line-height: normal;
            }

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

            .el-container {
                height: 100%;
            }

            [v-cloak] {
                display: none !important;
            }

            input, textarea, select {
                appearance: none;
                outline: none !important;
                box-shadow: none;
            }

            .el-dialog {
                min-width: 600px;
            }

            /*新左侧菜单 start*/
            #_aside {
                position: relative;
            }

            #_aside .is-show-menu-2 {
                position: absolute;
                width: 30px;
                background: #F3F3F3;
                color: #A1A4A9;
                border-radius: 0 10px 10px 0;
                padding: 2px 8px;
                right: -30px;
                top: 17px;
                cursor: pointer;
                z-index: 10;
            }

            #_aside .menu-item {
                height: 60px;
                padding: 10px;
            }

            #_aside .left-menu {
                width: 250px;
                height: 100%;
                overflow-y: auto;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            #_aside .menu-item-box.active {
                width: 100%;
                height: 100%;
                border-radius: 4px;
                background: #ebedf0;
                cursor: pointer;
            }

            /*一级菜单 start*/

            #_aside .aside-logo {
                width: 100%;
                background: #444444;
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

            #_aside .left-menu-1 {
                background: #444444;
                cursor: pointer;
            }

            #_aside .menu-item-1 {
                color: #ffffff;
            }

            #_aside .menu-item-1.active {
                color: #000000;
                background: #ffffff;
            }

            #_aside .menu-item-1.hover {
                color: #FFFFFF;
                background: #666666;
                cursor: pointer;
            }

            #_aside .menu-item-1 .icon {
                margin-right: 5px;
            }

            /*一级菜单 end*/

            /*二级菜单 start*/

            #_aside .left-menu-2 {
                border-right: 1px solid #E6E6E6;
                position: relative;
            }

            #_aside .left-menu-2-show {
                display: none;
            }

            #_aside .left-menu-2 .is-show-menu-1 {
                position: absolute;
                width: 30px;
                background: #F3F3F3;
                color: #A1A4A9;
                border-radius: 10px 0 0 10px;
                padding: 2px 8px;
                right: 0;
                top: 17px;
                cursor: pointer;
            }

            #_aside .menu-item-2 {
                cursor: pointer;
            }
            #_aside .menu-item-2-title {
                color: #909399;
                border-bottom: 1px solid #E6E6E6;
                padding-left: 28px;
            }

            #_aside .menu-item-2:hover {
                color: #5DA8FC;
            }

            #_aside .menu-item-2 .icon-box {
                width: 14px;
                margin-right: 5px;
            }

            /*二级菜单 end*/

            /*三级菜单 start*/
            #_aside .menu-item-3 {
                cursor: pointer;
                margin-left: 5px;
            }

            #_aside .menu-item-3:hover {
                color: #5DA8FC;
            }

            #_aside .menu-item-3 .icon-box {
                width: 14px;
                margin-right: 5px;
            }

            /*三级菜单 end*/

            /*四级菜单 start*/
            /*#_aside .menu-item-4 {*/
            /*cursor: pointer;*/
            /*margin-left: 30px;*/
            /*}*/

            /*#_aside .menu-item-4:hover {*/
            /*color: #5DA8FC;*/
            /*cursor: pointer;*/
            /*}*/

            /*#_aside .menu-item-4.active {*/
            /*color: #5DA8FC;*/
            /*}*/

            /*四级菜单 end*/

            /*新左侧菜单 end*/

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
        <div v-cloak id="_aside" flex="dir:left">
            <div @click="isShowMenu = true" v-if="!isShowMenu" class="is-show-menu-2">>></div>

            <div class="left-menu">
                <div class=" sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                    <!--                sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures-->
                    <div class="nano">
                        <div class="nano-content">
                            <ul>
                                <li class="logo">
                                    <a>
                                        <span>古味一隅小程序</span>
                                    </a>
                                </li>
                                <li v-for="firstMenu in menus">
                                    <a class="sidebar-sub-toggle" @click="menuClick1(firstMenu)"><i :class="firstMenu.icon"></i>{{firstMenu.name}}
                                        <span class="sidebar-collapse-icon el-icon-arrow-down" v-if="firstMenu.children.length > 0"></span>
                                    </a>
                                    <ul v-if="firstMenu.children.length > 0" :data-id="firstMenu.id" :data-cur="currentMenu.opened_1" :style="{'display': currentMenu.opened_1 == firstMenu.id ? 'block':'none'}">
                                        <li v-for="secondMenu in firstMenu.children" style="padding-left: 18px;"  @click="menuClick2(secondMenu)"
                                            :class="secondMenu.id == currentMenu.opened_2 ? 'select2':''">
                                            <a href="#" @click="navsBar(secondMenu)" :class="secondMenu.id == currentMenu.opened_2 ? 'select2':''"
                                             >{{secondMenu.name}}</a>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div id="_layout_body" class="el-container is-vertical">

            <div id="_header">
                <header class="mall-header" flex="box:last">
                    <el-menu class="el-menu-demo" mode="horizontal" menu-trigger="click">
                        <el-menu-item v-for="(nav, index) in navs" :class="menu_3_id == nav.id ? 'select3' : 'select0'"
                                      :key="index"
                                      :index="'' + index"
                                      @click="open(nav)">{{nav.name}}
                        </el-menu-item>
                    </el-menu>
                    <el-menu mode="horizontal" menu-trigger="click">
                        <!-- 添加下载中心接口 -->
                        <el-menu-item @click="navigateClick({r: 'mall/file/index'})" index="5">
                            <img ref="system_download_icon" id="system-download-icon" src="statics/img/mall/download-1.png">
                        </el-menu-item>
                        <el-menu-item v-if="mch_id == 0" @click="navigateClick({r: 'admin/cache/clean', '_layout': 'mall'})" index="3">缓存
                        </el-menu-item>
                        <el-submenu index="2" v-if="mall && user" popper-class="mall-header-menu">
                            <template slot="title">
                                <span :title="mall.name" class="mall-name">{{mall.name}}</span>
                            </template>
                            <!-- user.identity.is_operator == 0 -->
                            <el-menu-item
                                    v-if="user.identity && 0 == 0 && user.mch_id == 0 && updatePasswordStatus"
                                    index="2-3" @click="updatePassword">修改密码
                            </el-menu-item>
                            <el-menu-item v-if="user.identity && 0 == 0 || user.mch_id"
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
            },
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
                    mch_id: '<?=$mchId ?>',
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
                    console.log('children:::::::::::::::::::::::' + JSON.stringify(children));
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
                        console.log('loadData1:' + JSON.stringify(e.data.data.navs));
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
        _aside = new Vue({
            el: '#_aside',
            data() {
                return {
                    mall: null,
                    leftMenuLoading: false,
                    leftMenus: {},
                    defaultRoute: null,
                    currentMenu: {
                        list: null,
                        opened_1: 0,
                        temporary_opened_1: 0,
                        opened_2: 0,
                        opened_3: 0,
                        unfold_id_1: 0,
                        unfold_id_2: 0,
                    },
                    currentRoute: "<?= $currentRoute ?>",
                    isShowMenu: true,
                    menus: {},
                    defaultNav: {}
                };
            },
            methods: {
                navsBar(secondMenu){
                    if(secondMenu && secondMenu.children)
                    {
                        _header.setNav(secondMenu.children);
                    }else{
                        console.log('second has no child');
                        _header.setNav(this.defaultNav);
                    }

                },
                getMenus() {
                    const cacheKey = '_MALL_MENUS';
                    let data = localStorage.getItem(cacheKey);
                    if (data) {
                        try {
                            data = JSON.parse(data);
                        } catch (e) {
                            data = false;
                        }
                    }
                    // if (data && data.menus) {
                    //     this.leftMenus = data.menus;
                    // } else {
                    //     this.leftMenuLoading = true;
                    // }
                    this.currentMenu.opened_1 = localStorage.getItem('_OPENED_MENU_1_ID');
                    this.currentMenu.opened_2 = localStorage.getItem('_OPENED_MENU_2_ID');
                    this.currentMenu.opened_3 = localStorage.getItem('_OPENED_MENU_3_ID');
                    this.currentMenu.unfold_id_1 = localStorage.getItem('_UNFOLD_ID_1');
                    this.currentMenu.unfold_id_2 = localStorage.getItem('_UNFOLD_ID_2');
                    console.log('current:' + JSON.stringify(this.currentMenu));
                    this.setMenus();

                    let self = this;
                    this.$request({
                        params: {
                            r: 'mall/menus/index',
                        },
                        method: 'post',
                        data: {
                            route: getQuery('r'),
                            url_params: JSON.stringify(getAllUrlParams()),
                        }
                    }).then(e => {
                        self.menus = e.data.data.menus;

                        if(e.data.data.defaultNav.length > 0)
                            self.defaultNav = e.data.data.defaultNav[0].children;
                        // localStorage.setItem(cacheKey, JSON.stringify(e.data.data));
                        // self.leftMenuLoading = false;
                        // self.leftMenus = e.data.data.menus;
                        // self.leftMenus.forEach(function (item) {
                        //     if (item.is_active) {
                        //         self.currentMenu.opened_1 = item.id;
                        //         localStorage.setItem('_OPENED_MENU_1_ID', self.currentMenu.opened_1);
                        //         if (item.children) {
                        //             item.children.forEach(function (cItem1) {
                        //                 if (cItem1.is_active) {
                        //                     if (cItem1.children) {
                        //                         self.currentMenu.unfold_id_1 = cItem1.id;
                        //                         localStorage.setItem('_UNFOLD_ID_1', self.currentMenu.unfold_id_1);
                        //                         cItem1.children.forEach(function (cItem2) {
                        //                             if (cItem2.is_active) {
                        //                                 if (cItem2.children) {
                        //                                     self.currentMenu.unfold_id_2 = cItem2.id;
                        //                                     localStorage.setItem('_UNFOLD_ID_2', self.currentMenu.unfold_id_2);
                        //                                     cItem2.children.forEach(function (cItem3) {
                        //                                         if (cItem3.is_active) {
                        //                                             self.currentMenu.opened_2 = cItem3.id;
                        //                                             localStorage.setItem('_OPENED_MENU_2_ID', self.currentMenu.opened_2);
                        //                                         }
                        //                                     })
                        //                                 } else {
                        //                                     self.currentMenu.opened_3 = cItem2.id;
                        //                                     localStorage.setItem('_OPENED_MENU_3_ID', self.currentMenu.opened_3);
                        //                                     self.currentMenu.opened_2 = cItem2.id;
                        //                                     localStorage.setItem('_OPENED_MENU_2_ID', self.currentMenu.opened_2);
                        //                                 }
                        //                             }
                        //                         })
                        //                     } else {
                        //                         self.currentMenu.opened_2 = cItem1.id;
                        //                         localStorage.setItem('_OPENED_MENU_2_ID', self.currentMenu.opened_2);
                        //                     }
                        //                 }
                        //             })
                        //         }
                        //     }
                        // });
                        self.setMenus();
                    }).catch(e => {
                        console.log(e);
                    });
                },
                openUrl(menu) {
                    localStorage.setItem('_UNFOLD_ID_1', this.currentMenu.unfold_id_1);
                    localStorage.setItem('_UNFOLD_ID_2', this.currentMenu.unfold_id_2);
                    console.log('openurl:' + JSON.stringify(menu));
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
                            navigateTo(args)
                        } else {
                            navigateTo(args)
                        }
                    }
                },
                setMenus() {
                    let self = this;
                    if (!self.currentMenu.opened_2 && !self.currentMenu.unfold_id_1) {
                        self.currentMenu.opened_1 = 0;
                    }

                    // if (self.leftMenus && self.leftMenus.length > 0) {
                    //     self.leftMenus.forEach(function (item) {
                    //         if (item.id == self.currentMenu.opened_1) {
                    //             self.currentMenu.list = item;
                    //         }
                    //     });
                    // }
                },
                // 点击一级菜单
                menuClick1(menu) {
                    this.clearMenuStorage();
                    this.currentMenu.opened_1 = menu.id;
                    this.currentMenu.list = menu;
                    localStorage.setItem('_OPENED_MENU_1_ID', menu.id);
                    console.log('menu click 1');
                    /*
                    if (!menu.children) {
                        // this.openUrl(menu);
                    } else {
                        if (menu.key == 'app-manage') {
                            return
                        }
                        if (menu.children[0].children && menu.children[0].children.length > 0) {
                            // this.openUrl(menu.children[0].children[0]);
                            localStorage.setItem('_UNFOLD_ID_1', menu.children[0].id);
                            localStorage.setItem('_OPENED_MENU_3_ID', menu.children[0].children[0].id);
                        } else {
                            // this.openUrl(menu.children[0]);
                            localStorage.setItem('_OPENED_MENU_2_ID', menu.children[0].id);
                        }
                    }
                     */
                },
                // 点击二级菜单
                menuClick2(menu) {
                    console.log('menu2:' + JSON.stringify(menu));
                    // console.log(menu.id);
                    if (menu.children) {
                        console.log('menu has children');
                        let unfoldId1 = null;
                        if (this.currentMenu.unfold_id_1 == menu.id) {
                            unfoldId1 = 0;
                        } else {
                            unfoldId1 = menu.id;
                        }
                        this.currentMenu.unfold_id_1 = unfoldId1;

                        localStorage.setItem('_OPENED_MENU_2_ID', menu.id);
                        // localStorage.setItem('_OPENED_MENU_3_ID', 0);


                    } else {
                        console.log('menu has no children');
                        this.currentMenu.opened_2 = menu.id;
                        let temporary = this.currentMenu.temporary_opened_1;
                        if (temporary) {
                            localStorage.setItem('_OPENED_MENU_1_ID', temporary);
                        }
                        localStorage.setItem('_OPENED_MENU_2_ID', menu.id);
                        // localStorage.setItem('_OPENED_MENU_3_ID', 0);
                        this.openUrl(menu);
                    }
                },
                // 点击三级菜单
                menuClick3(menu) {
                    if (menu.children) {
                        let unfoldId2 = null;
                        if (this.currentMenu.unfold_id_2 == menu.id) {
                            unfoldId2 = 0;
                        } else {
                            unfoldId2 = menu.id;
                        }
                        this.currentMenu.unfold_id_2 = unfoldId2;
                    } else {
                        this.currentMenu.opened_3 = menu.id;
                        let temporary = this.currentMenu.temporary_opened_1;
                        if (temporary) {
                            localStorage.setItem('_OPENED_MENU_1_ID', temporary);
                        }
                        localStorage.setItem('_OPENED_MENU_2_ID', 0);
                        localStorage.setItem('_OPENED_MENU_3_ID', menu.id);
                        this.openUrl(menu);
                    }
                },
                indexClick() {
                    navigateTo({r: 'mall/index/index'})
                    this.clearMenuStorage();
                },
                clearMenuStorage() {
                    localStorage.removeItem('_OPENED_MENU_1_ID');
                    localStorage.removeItem('_OPENED_MENU_2_ID');
                    localStorage.removeItem('_OPENED_MENU_3_ID');
                    localStorage.removeItem('_UNFOLD_ID_1');
                    localStorage.removeItem('_UNFOLD_ID_2');
                },
                mouseenterEvent(menu) {
                    this.currentMenu.temporary_opened_1 = menu.id;
                    this.currentMenu.list = menu;
                },
                mouseleaveEvent(menu) {

                },
                mouseenterEvent2() {
                    let self = this;
                    if (self.currentMenu.temporary_opened_1 > 0) {
                        // self.leftMenus.forEach(function (item) {
                        //     if (self.currentMenu.temporary_opened_1 === item.id) {
                        //         self.currentMenu.list = item;
                        //     }
                        // })
                    }
                },
                mouseleaveEvent2() {
                    let self = this;
                    self.currentMenu.temporary_opened_1 = 0;
                    // self.leftMenus.forEach(function (item) {
                    //     if (item.id === self.currentMenu.opened_1) {
                    //         self.currentMenu.list = item;
                    //     }
                    // });
                    self.currentMenu.unfold_id_1 = localStorage.getItem('_UNFOLD_ID_1');
                    self.currentMenu.unfold_id_2 = localStorage.getItem('_UNFOLD_ID_2');
                    if (this.currentMenu.opened_1 <= 0) {
                        this.currentMenu.list = {};
                    }
                },

            },
            mounted: function () {
                //@amphisbe 迁移自mall_header
                let html = document.getElementById('system-download-icon')
                localStorage.setItem('_SYSTEM_DOWNLOAD_PARAMS', JSON.stringify(html.getBoundingClientRect()));
                this.getMenus();
            }
        });
        // new Vue({el: '#_header'});

    </script>
    <?php $this->endBody() ?>
    <script src="<?= Yii::$app->request->baseUrl ?>/statics/js/jquery.nanoscroller.min.js"></script>
    <script src="<?= Yii::$app->request->baseUrl ?>/statics/js/sidebar.js"></script>
    </body>
    </html>
<?php $this->endPage() ?>