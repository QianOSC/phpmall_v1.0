(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/myshop/myshop"],{4679:function(n,t,e){},5934:function(n,t,e){"use strict";e.r(t);var i=e("7085"),o=e.n(i);for(var c in i)"default"!==c&&function(n){e.d(t,n,function(){return i[n]})}(c);t["default"]=o.a},"69a5":function(n,t,e){"use strict";var i=e("4679"),o=e.n(i);o.a},7085:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("2f62");function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,i)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(e,!0).forEach(function(t){r(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(e).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var u={name:"myshop",computed:c({},(0,i.mapState)("gConfig",{iphone:function(n){return n.iphone},iphoneHeight:function(n){return n.iphoneHeight}})),data:function(){return{show_pc_url:!1,mch_id:-1,detail:{day_order_pay_price_count:0,visit_count:0,order_pay_count:0,order_goods_count:0,form_id_count:0,template_message_list:null}}},onShow:function(){var t=this,e=n.getStorageSync("MCH2019");e?(t.mch_id=e.mch.id,t.$showLoading({title:"登陆中"}),t.$request({url:t.$api.mch.manage_index,data:{mch_id:t.mch_id}}).then(function(e){if(t.$hideLoading(),0===e.code){var i=e.data.detail;"0"===i.status&&n.showModal({title:"提示",content:"店铺已被关闭！请联系管理员",showCancel:!1,success:function(t){t.confirm&&n.redirectTo({url:"/plugins/mch/mch/login/login"})}}),t.detail=i}else n.redirectTo({url:"/plugins/mch/mch/login/login"})})):n.redirectTo({url:"/plugins/mch/mch/login/login"})},methods:{navLogin:function(){n.redirectTo({url:"/plugins/mch/mch/login/login"})},navConfig:function(){n.navigateTo({url:"/plugins/mch/mch/config/config?mch_id="+this.mch_id})},navGoods:function(){n.navigateTo({url:"/plugins/mch/mch/goods/goods?mch_id="+this.mch_id})},navOrder:function(){n.navigateTo({url:"/plugins/mch/mch/order/order?mch_id="+this.mch_id})},navData:function(){n.navigateTo({url:"/plugins/mch/mch/count/count?mch_id="+this.mch_id})},navAccount:function(){n.navigateTo({url:"/plugins/mch/mch/account/account?mch_id="+this.mch_id})},navQrcode:function(){n.navigateTo({url:"/plugins/mch/mch/qrcode/qrcode?mch_id="+this.mch_id})},setMessage:function(){this.detail.form_id_count++},showPcUrl:function(){this.show_pc_url=!0},hidePcUrl:function(){this.show_pc_url=!1},copyPcUrl:function(){var t=this.detail.page_url;n.setClipboardData({data:t,success:function(){n.showToast({title:"复制成功"})}})}}};t.default=u}).call(this,e("5486")["default"])},"7a22":function(n,t,e){"use strict";e.r(t);var i=e("88ae"),o=e("5934");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("69a5");var r=e("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"6bc73058",null);t["default"]=u.exports},"88ae":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})}},[["537e","common/runtime","common/vendor"]]]);