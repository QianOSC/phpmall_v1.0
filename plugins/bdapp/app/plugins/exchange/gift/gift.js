(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/exchange/gift/gift"],{4026:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.shareShow=!0})},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},a94d:function(e,t,n){"use strict";n.r(t);var o=n("cfca"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},aed5:function(e,t,n){"use strict";var o=n("b007"),r=n.n(o);r.a},b007:function(e,t,n){},cfca:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("a34a")),r=n("2f62");function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,o,r,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(o,r)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function c(e){i(a,o,r,c,u,"next",e)}function u(e){i(a,o,r,c,u,"throw",e)}c(void 0)})}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(){return n.e("components/page-component/goods/app-goods-banner").then(n.bind(null,"12b6"))},l=function(){return n.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(n.bind(null,"409e"))},p=function(){return n.e("components/page-component/goods/bd-detail").then(n.bind(null,"3e70"))},h={name:"goods",data:function(){return{shareShow:!1,goods:{},url:this.$api.exchange.qrcode,show:!1,list:[],code:null,status:"",windowHeight:667,loading:!1,first:!0}},onLoad:function(t){var n=this;n.code=t.code,n.windowHeight=e.getSystemInfoSync().windowHeight,n.$showLoading({type:"global",text:"加载中..."}),n.request({url:n.$api.exchange.me_detail,data:{code:n.code}}).then(function(e){if(e){n.first=!1;var t=e.goods_attr,o=e.code,r=e.status;n.url=n.url+"&code="+o,n.goods=t,n.code=o,n.status=r,n.loading=!0,n.$hideLoading()}})},onShow:function(){var e=this;if(this.first)return!1;this.$showLoading(),this.$nextTick(function(){var t=e;t.request({url:t.$api.exchange.me_detail,data:{code:t.code}}).then(function(e){var n=e.goods_attr,o=e.code,r=e.status;t.goods=n,t.code=o,t.status=r,t.loading=!0,t.$hideLoading()})})},computed:s({},(0,r.mapState)("gConfig",{iphone:function(e){return e.iphone},iphoneHeight:function(e){return e.iphoneHeight}}),{},(0,r.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,r.mapState)({mall:function(e){return e.mallConfig.mall},userInfo:function(e){return e.user.info}})),onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/exchange/gift/gift",title:this.goods.app_share_title?this.goods.app_share_title:this.goods.name,imageUrl:this.goods.app_share_pic?this.goods.app_share_pic:"",params:{code:this.code}})},methods:{copy:function(){e.setClipboardData({data:this.code,success:function(){e.hideToast(),e.getClipboardData({success:function(){e.showToast({title:"内容已复制",duration:1e3,icon:"none"})},fail:function(e){}})}})},toExchange:function(){e.navigateTo({url:"/plugins/exchange/detail/detail?code="+this.code})},request:function(){var t=c(o.default.mark(function t(n){var r,a,i;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.url,a=n.data,t.next=3,this.$request({url:r,data:a});case 3:if(i=t.sent,0!==i.code){t.next=8;break}return t.abrupt("return",i.data);case 8:e.showModal({title:"提示",content:i.msg,showCancel:!1,success:function(t){e.navigateBack()}});case 9:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}()},components:{"app-banner":f,"app-share-qr-code":l,bdDetail:p}};t.default=h}).call(this,n("5486")["default"])},d179:function(e,t,n){"use strict";n.r(t);var o=n("4026"),r=n("a94d");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("aed5");var i=n("2877"),c=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,"fb6ba75a",null);t["default"]=c.exports}},[["f7df","common/runtime","common/vendor"]]]);