(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-mch-mch-myshop-myshop"],{"4cb6":function(t,i,n){"use strict";var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("app-layout",[t.mch_id?[n("v-uni-view",{staticClass:"myshop-header"},[n("v-uni-view",{staticClass:"fk"},[t._v("今日付款金额（元）")]),n("v-uni-view",{staticClass:"fk-num"},[t._v(t._s(t.detail.day_order_pay_price_count))]),n("v-uni-view",{staticClass:"dir-left-nowrap"},[n("v-uni-view",{staticClass:"box-grow-1 data-col"},[n("v-uni-view",[t._v("浏览人数")]),n("v-uni-view",[t._v(t._s(t.detail.visit_count))])],1),n("v-uni-view",{staticClass:"box-grow-1 data-col"},[n("v-uni-view",[t._v("付款订单数")]),n("v-uni-view",[t._v(t._s(t.detail.order_pay_count))])],1),n("v-uni-view",{staticClass:"box-grow-1 data-col"},[n("v-uni-view",[t._v("付款件数")]),n("v-uni-view",[t._v(t._s(t.detail.order_goods_count))])],1)],1),n("v-uni-view",{staticClass:"myshop-login"},[n("app-form-id",{on:{click:function(i){i=t.$handleEvent(i),t.navLogin(i)}}},[n("v-uni-view",{staticClass:"main-center cross-center myshop-account"},[t._v("切换账户")])],1)],1)],1),n("v-uni-view",{staticClass:"dir-left-wrap menu-list"},[n("v-uni-view",{staticClass:"box-grow-0 menu-item"},[n("app-form-id",{on:{click:function(i){i=t.$handleEvent(i),t.navConfig(i)}}},[n("v-uni-image",{attrs:{src:"./../../image/myshop-shop.png"}}),n("v-uni-view",[t._v("店铺管理")])],1)],1),n("v-uni-view",{staticClass:"box-grow-0 menu-item"},[n("app-form-id",{on:{click:function(i){i=t.$handleEvent(i),t.navGoods(i)}}},[n("v-uni-image",{attrs:{src:"./../../image/myshop-goods.png"}}),n("v-uni-view",[t._v("商品管理")])],1)],1),n("v-uni-view",{staticClass:"box-grow-0 menu-item"},[n("app-form-id",{on:{click:function(i){i=t.$handleEvent(i),t.navOrder(i)}}},[n("v-uni-image",{attrs:{src:"./../../image/myshop-order.png"}}),n("v-uni-view",[t._v("订单管理")])],1)],1),n("v-uni-view",{staticClass:"box-grow-0 menu-item"},[n("app-form-id",{on:{click:function(i){i=t.$handleEvent(i),t.navData(i)}}},[n("v-uni-image",{attrs:{src:"./../../image/myshop-data.png"}}),n("v-uni-view",[t._v("数据统计")])],1)],1),n("v-uni-view",{staticClass:"box-grow-0 menu-item"},[n("app-form-id",{on:{click:function(i){i=t.$handleEvent(i),t.navAccount(i)}}},[n("v-uni-image",{attrs:{src:"./../../image/myshop-zc.png"}}),n("v-uni-view",[t._v("资产")])],1)],1),n("v-uni-view",{staticClass:"box-grow-0 menu-item"},[n("app-form-id",{on:{click:function(i){i=t.$handleEvent(i),t.navQrcode(i)}}},[n("v-uni-image",{attrs:{src:"./../../image/myshop-shop.png"}}),n("v-uni-view",[t._v("店铺二维码")])],1)],1)],1),n("v-uni-view",{staticClass:"myshop-pc",on:{click:function(i){i=t.$handleEvent(i),t.showPcUrl(i)}}},[t._v("PC端管理网址")]),n("v-uni-view",{staticClass:"pc-url",class:t.show_pc_url?"show":""},[n("v-uni-view",{staticClass:"modal-bg",on:{click:function(i){i=t.$handleEvent(i),t.hidePcUrl(i)}}}),n("v-uni-view",{staticClass:"modal-dialog",on:{click:function(i){i=t.$handleEvent(i),t.copyPcUrl(i)}}},[n("v-uni-view",{staticClass:"page-url"},[t._v(t._s(t.detail.page_url))]),n("v-uni-view",{staticClass:"content"},[t._v("点击可复制内容")])],1)],1)]:t._e()],2)},e=[];n.d(i,"a",function(){return o}),n.d(i,"b",function(){return e})},5934:function(t,i,n){"use strict";n.r(i);var o=n("607d"),e=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(i,t,function(){return o[t]})}(a);i["default"]=e.a},"607d":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n("2f62");function e(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,o)}return n}function a(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(n,!0).forEach(function(i){c(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(n).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function c(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}var r={name:"myshop",computed:a({},(0,o.mapState)("gConfig",{iphone:function(t){return t.iphone},iphoneHeight:function(t){return t.iphoneHeight}})),data:function(){return{show_pc_url:!1,mch_id:-1,detail:{day_order_pay_price_count:0,visit_count:0,order_pay_count:0,order_goods_count:0,form_id_count:0,template_message_list:null}}},onShow:function(){var t=this,i=uni.getStorageSync("MCH2019");i?(t.mch_id=i.mch.id,t.$showLoading({title:"登陆中"}),t.$request({url:t.$api.mch.manage_index,data:{mch_id:t.mch_id}}).then(function(i){if(t.$hideLoading(),0===i.code){var n=i.data.detail;"0"===n.status&&uni.showModal({title:"提示",content:"店铺已被关闭！请联系管理员",showCancel:!1,success:function(t){t.confirm&&uni.redirectTo({url:"/plugins/mch/mch/login/login"})}}),t.detail=n}else uni.redirectTo({url:"/plugins/mch/mch/login/login"})})):uni.redirectTo({url:"/plugins/mch/mch/login/login"})},methods:{navLogin:function(){uni.redirectTo({url:"/plugins/mch/mch/login/login"})},navConfig:function(){uni.navigateTo({url:"/plugins/mch/mch/config/config?mch_id="+this.mch_id})},navGoods:function(){uni.navigateTo({url:"/plugins/mch/mch/goods/goods?mch_id="+this.mch_id})},navOrder:function(){uni.navigateTo({url:"/plugins/mch/mch/order/order?mch_id="+this.mch_id})},navData:function(){uni.navigateTo({url:"/plugins/mch/mch/count/count?mch_id="+this.mch_id})},navAccount:function(){uni.navigateTo({url:"/plugins/mch/mch/account/account?mch_id="+this.mch_id})},navQrcode:function(){uni.navigateTo({url:"/plugins/mch/mch/qrcode/qrcode?mch_id="+this.mch_id})},setMessage:function(){this.detail.form_id_count++},showPcUrl:function(){this.show_pc_url=!0},hidePcUrl:function(){this.show_pc_url=!1},copyPcUrl:function(){var t=this.detail.page_url;this.$utils.uniCopy({data:t,success:function(){uni.showToast({title:"复制成功"})}})}}};i.default=r},"7a22":function(t,i,n){"use strict";n.r(i);var o=n("4cb6"),e=n("5934");for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);n("e304");var c=n("2877"),r=Object(c["a"])(e["default"],o["a"],o["b"],!1,null,"78f93f77",null);i["default"]=r.exports},"964f":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".text-center[data-v-78f93f77]{text-align:center}.font-weight[data-v-78f93f77]{font-weight:700}.page-width[data-v-78f93f77]{width:100%}.goods-hover-class[data-v-78f93f77]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-78f93f77]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-78f93f77]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-78f93f77]{width:100%}.u-hover-class[data-v-78f93f77]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-78f93f77]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.myshop-header[data-v-78f93f77]{background:#26a5ef;color:#fff;background:-webkit-gradient(linear,0 0,0 bottom,from(#44b9fe),to(#028dde));padding:%?48?% 0 %?32?%;overflow:hidden}.myshop-header .fk[data-v-78f93f77]{font-size:%?26?%;text-align:center;margin-bottom:%?40?%}.myshop-header .fk-num[data-v-78f93f77]{text-align:center;font-size:19pt;font-weight:700;line-height:1;margin-bottom:%?64?%}.myshop-header .data-col[data-v-78f93f77]{text-align:center;border-right:%?1?% solid hsla(0,0%,100%,.35)}.myshop-login[data-v-78f93f77]{position:absolute;top:%?40?%;left:%?24?%}.myshop-login .myshop-account[data-v-78f93f77]{position:relative;border:1px solid #fff;border-radius:%?20?%;width:%?120?%;font-size:%?24?%;height:%?40?%}.myshop-pc[data-v-78f93f77]{text-align:center;margin-top:%?40?%;color:#999;font-size:%?24?%}.myshop-msg[data-v-78f93f77]{position:fixed;bottom:%?0?%;width:100%;height:%?120?%;margin:0 auto}.myshop-msg .msg[data-v-78f93f77]{width:%?702?%;height:%?80?%;border-radius:%?999?%;color:#fff;background:#ff4544}.myshop-msg .msg .btn[data-v-78f93f77]{font-size:%?32?%}.myshop-msg .msg .bout[data-v-78f93f77]{font-size:%?24?%}.menu-list[data-v-78f93f77]{-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:%?24?%;-webkit-flex-wrap:wrap;background:#fff;padding:%?60?% 0 0}.menu-list .menu-item[data-v-78f93f77]{width:33.333333%;text-align:center;font-size:%?26?%;margin-bottom:%?80?%}.menu-list .menu-item uni-image[data-v-78f93f77]{width:%?94?%;height:%?94?%;margin-bottom:%?6?%}.pc-url.show[data-v-78f93f77]{visibility:visible;opacity:1}.pc-url[data-v-78f93f77]{position:fixed;left:0;top:0;height:100%;z-index:100;margin:%?100?%;visibility:hidden;opacity:.5;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.pc-url .modal-bg[data-v-78f93f77]{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.pc-url .modal-dialog[data-v-78f93f77]{background:#fff;padding:%?32?%;border-radius:%?16?%;overflow:hidden;word-break:break-all;position:relative}.pc-url .modal-dialog .page-url[data-v-78f93f77]{margin-bottom:%?32?%;color:#353535}.pc-url .modal-dialog .content[data-v-78f93f77]{font-size:%?24?%;color:#888;text-align:center}body.?%PAGE?%[data-v-78f93f77]{background:#f7f7f7}",""])},d72c:function(t,i,n){var o=n("964f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=n("4f06").default;e("3640e5f3",o,!0,{sourceMap:!1,shadowMode:!1})},e304:function(t,i,n){"use strict";var o=n("d72c"),e=n.n(o);e.a}}]);