(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/miaosha/goods/goods"],{1596:function(t,e,n){"use strict";n.r(e);var o=n("98b4"),i=n("329b");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("1b3b");var r=n("2877"),s=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"ea056e50",null);e["default"]=s.exports},"1b3b":function(t,e,n){"use strict";var o=n("2bc3"),i=n.n(o);i.a},"2bc3":function(t,e,n){},"329b":function(t,e,n){"use strict";n.r(e);var o=n("a025"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"98b4":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},a025:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a34a")),i=n("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,o,i,a,r){try{var s=t[a](r),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(o,i)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)})}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){d(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("components/page-component/goods/app-goods-banner").then(n.bind(null,"12b6"))},p=function(){return n.e("plugins/miaosha/components/app-goods-time").then(n.bind(null,"89a5"))},m=function(){return n.e("components/page-component/app-related-suggestion-product/app-related-suggestion-product").then(n.bind(null,"1ce4"))},h=function(){return n.e("components/page-component/goods/app-goods-full-reduce").then(n.bind(null,"6132"))},f=function(){return n.e("components/page-component/goods/u-attr").then(n.bind(null,"b4bc"))},b=function(){return n.e("components/page-component/goods/bd-info").then(n.bind(null,"0e01"))},g=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/goods/bd-coupon")]).then(n.bind(null,"11b2"))},_=function(){return n.e("components/page-component/goods/bd-xbc").then(n.bind(null,"8639"))},v=function(){return n.e("components/page-component/goods/bd-kb").then(n.bind(null,"4c29"))},y=function(){return n.e("components/page-component/goods/bd-hc").then(n.bind(null,"de37"))},w=function(){return n.e("components/page-component/goods/bd-detail").then(n.bind(null,"3e70"))},O=function(){return n.e("components/page-component/goods/bd-comments").then(n.bind(null,"9470"))},$=function(){return n.e("components/basic-component/app-close/app-close").then(n.bind(null,"f0dd"))},k=function(){return n.e("components/page-component/goods/bd-service").then(n.bind(null,"861b"))},I={name:"goods",data:function(){return{showClose:!1,is_open:0,detail:null,full_reduce:null,cartShow:!1,miaosha_status:-1,miaosha_time:0,selectAttr:null,url:"",show:!1,list:[],miaosha_buy_count:0,goods_id:-1,is_activity:0,hour:0,minute:0,second:0,day:0,time:-1,is_vip_card_user:0,discount:null,is_vip:!1,loading:!1,flash_sale:null,poster_config:this.$api.miaosha.poster_config,poster_generate:this.$api.miaosha.poster_generate}},onLoad:function(t){this.goods_id=t.id,t.is_activity&&(this.is_activity=t.is_activity)},onShow:function(){var e=this;this.showClose=!1,setTimeout(function(){e.showClose=!0}),this.$showLoading(),this.$nextTick(function(){var n=e;e.$request({url:e.$api.miaosha.goods_detail,data:{id:e.goods_id,is_activity:e.is_activity}}).then(function(o){if(e.$hideLoading(),0===o.code){var i=o.data,a=i.detail,r=i.miaosha_status,s=i.miaosha_time,c=i.miaosha_buy_count;e.detail=a,a.goods_activity&&(e.full_reduce=a.goods_activity.full_reduce),e.flash_sale=a.plugin_extra.flash_sale,e.miaosha_status=r,e.miaosha_buy_count=c,e.loading=!0,e.url="".concat(e.$api.miaosha.poster,"&goods_id=").concat(e.detail.id),e.poster_config="".concat(e.poster_config,"&goods_id=").concat(e.detail.id),e.poster_generate="".concat(e.poster_generate,"&goods_id=").concat(e.detail.id),e.getTime(s)}else t.showToast({title:o.msg,icon:"none"});e.$request({url:e.$api.goods.new_recommend,data:{goods_id:e.detail.id}}).then(function(t){0===t.code&&(e.list=t.data.list,n.detail.vip_card_appoint.discount&&(n.is_vip=!0,n.discount=n.detail.vip_card_appoint.discount),n.is_vip_card_user=n.detail.vip_card_appoint.is_vip_card_user)})})})},onHide:function(){clearInterval(this.time)},onUnload:function(){clearInterval(this.time)},computed:u({},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,i.mapState)({mall:function(t){return t.mallConfig.mall},themeObject:function(t){var e=t.mallConfig.mall.setting.theme_color;return{back:e+"-m-back "+e,backP:e+"-m-back-p "+e,backO:e+"-m-back-o "+e,theme:e,color:e+"-m-text "+e,sBack:e+"-s-back "+e,border:e+"-m-border "+e,mBtn:e+"-m-gradient-btn "+e,sBtn:e+"-s-gradient-btn "+e}}})),onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/miaosha/goods/goods",title:this.detail.app_share_title?this.detail.app_share_title:this.detail.name,imageUrl:this.detail.app_share_pic?this.detail.app_share_pic:"",params:{id:this.detail.id}})},methods:{getMall:function(t){this.is_open=t.is_open},request:function(){var t=s(o.default.mark(function t(e){var n,i,a;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.url,i=e.data,t.next=3,this.$request({url:n,data:i});case 3:if(a=t.sent,0!==a.code){t.next=6;break}return t.abrupt("return",a.data);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),attrtap:function(t){this.selectAttr=t},takeCart:function(){this.show=!0},leftFunc:function(e){this.$request({url:this.$api.miaosha.add_cart,method:"post",data:{miaosha_goods_id:this.selectAttr.goods_id,attr_id:this.selectAttr.id,num:e}}).then(function(e){t.showToast({title:e.msg,icon:"none"})})},rightFunc:function(e){t.navigateTo({url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify([e]),"&preview_url=").concat(encodeURIComponent(this.$api.miaosha.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.miaosha.order_submit))})},getTime:function(t){var e=this;t-=1,this.day=parseInt(t/3600/24),this.hour=parseInt(t/3600%24),this.minute=parseInt(t/60%60),this.second=parseInt(t%60),clearInterval(this.time),this.time=setInterval(function(){t-=1,t<0&&clearInterval(e.time),e.day=parseInt(t/3600/24),e.hour=parseInt(t/3600%24),e.minute=parseInt(t/60%60),e.second=parseInt(t%60)},1e3)},setCoupon:function(t){this.$set(this.detail.goods_coupon_center[t],"is_receive",1)},router:function(e){t.navigateTo({url:e})}},components:{"app-banner":l,"app-goods-time":p,"app-related-suggestion-product":m,uAttr:f,appGoodsFullReduce:h,bdInfo:b,bdCoupon:g,bdXbc:_,bdKb:v,bdHc:y,bdDetail:w,bdComments:O,appClose:$,bdService:k}};e.default=I}).call(this,n("c11b")["default"])},ae58:function(t,e){t.exports=require("../siteinfo.js")}},[["5baa","common/runtime","common/vendor"]]]);