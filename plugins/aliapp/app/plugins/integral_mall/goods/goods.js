(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/integral_mall/goods/goods"],{"2d1e":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})},"2e6e":function(e,n,t){},"4df0":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("2f62");function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(t,!0).forEach(function(n){a(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=function(){return t.e("components/page-component/goods/app-goods-banner").then(t.bind(null,"12b6"))},s=function(){return t.e("components/page-component/app-recommended-product/app-recommended-product").then(t.bind(null,"1a16"))},l=function(){return t.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(t.bind(null,"409e"))},u=function(){return t.e("components/page-component/goods/u-attr").then(t.bind(null,"b4bc"))},d=function(){return t.e("components/basic-component/app-close/app-close").then(t.bind(null,"f0dd"))},p=function(){return t.e("components/page-component/goods/bd-info").then(t.bind(null,"0e01"))},m=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/goods/bd-coupon")]).then(t.bind(null,"11b2"))},f=function(){return t.e("components/page-component/goods/bd-xbc").then(t.bind(null,"8639"))},g=function(){return t.e("components/page-component/goods/bd-kb").then(t.bind(null,"4c29"))},h=function(){return t.e("components/page-component/goods/bd-hc").then(t.bind(null,"de37"))},b=function(){return t.e("components/page-component/goods/bd-detail").then(t.bind(null,"3e70"))},_=function(){return t.e("components/page-component/goods/bd-service").then(t.bind(null,"861b"))},v={name:"goods",components:{appGoodsBanner:c,appShareQrCode:l,appRecommendedProduct:s,uAttr:u,appClose:d,bdInfo:p,bdCoupon:m,bdXbc:f,bdKb:g,bdHc:h,bdDetail:b,bdService:_},data:function(){return{showClose:!1,is_open:0,goods:null,selectAttr:null,recommend_list:null,shareShow:!1,shareUrl:null,attrShow:!1,loading:!1,poster_config:this.$api.integral_mall.poster_config,poster_generate:this.$api.integral_mall.poster_generate}},computed:i({},(0,o.mapState)({mall:function(e){return e.mallConfig.mall},isUnderlinePrice:function(e){return e.mallConfig.mall.setting.is_underline_price},themeObject:function(e){var n=e.mallConfig.mall.setting.theme_color;return{back:n+"-m-back "+n,backP:n+"-m-back-p "+n,backO:n+"-m-back-o "+n,theme:n,color:n+"-m-text "+n,sBack:n+"-s-back "+n,border:n+"-m-border "+n,mBtn:n+"-m-gradient-btn "+n,sBtn:n+"-s-gradient-btn "+n}}}),{},(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"})),onShow:function(){var e=this;this.showClose=!1,setTimeout(function(){e.showClose=!0})},onLoad:function(e){this.loadData(e.goods_id)},onShareAppMessage:function(){return this.$shareAppMessage({title:this.goods.app_share_title?this.goods.app_share_title:this.goods.name,imageUrl:this.goods.app_share_pic?this.goods.app_share_pic:this.goods.cover_pic,path:"/plugins/integral_mall/goods/goods",params:{goods_id:this.goods.id}})},methods:{getMall:function(e){this.is_open=e.is_open},loadData:function(n){var t=this;this.$showLoading(),this.$request({url:this.$api.integral_mall.goods_detail,data:{id:n}}).then(function(o){t.$hideLoading();var r=o.code,i=o.data,a=o.msg;0===r?(t.goods=i.detail,t.shareUrl=t.$api.integral_mall.poster+"&goods_id="+n,t.goods.id=n,t.loading=!0):e.showModal({title:"提示",content:a,showCancel:!1})}).catch(function(){t.$hideLoading()})},onAttr:function(e){this.selectAttr=e},shareClick:function(){this.shareShow=!0},back:function(){e.redirectTo({url:"/pages/index/index"})},clickAttr:function(){this.attrShow=!0},setCoupon:function(e){this.$set(this.goods.goods_coupon_center[e],"is_receive",1)},rightFunc:function(n){e.navigateTo({url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify([n]),"&preview_url=").concat(encodeURIComponent(this.$api.integral_mall.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.integral_mall.order_submit))})}}};n.default=v}).call(this,t("c11b")["default"])},6381:function(e,n,t){"use strict";t.r(n);var o=t("4df0"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=r.a},"9f2a":function(e,n,t){"use strict";var o=t("2e6e"),r=t.n(o);r.a},ae58:function(e,n){e.exports=require("../siteinfo.js")},ff04:function(e,n,t){"use strict";t.r(n);var o=t("2d1e"),r=t("6381");for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);t("9f2a");var a=t("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"c0febeae",null);n["default"]=c.exports}},[["f145","common/runtime","common/vendor"]]]);