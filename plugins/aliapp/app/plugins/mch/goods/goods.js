(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/mch/goods/goods"],{"0e71":function(t,e,n){},"11f2":function(t,e,n){"use strict";n.r(e);var o=n("9577"),i=n("ff65");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("9868");var c=n("2877"),r=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,"ca75ea1c",null);e["default"]=r.exports},9577:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},9868:function(t,e,n){"use strict";var o=n("0e71"),i=n.n(o);i.a},f584:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=function(){return n.e("components/page-component/goods/app-goods-banner").then(n.bind(null,"12b6"))},a=function(){return n.e("components/page-component/goods/app-goods-full-reduce").then(n.bind(null,"6132"))},d=function(){return n.e("components/page-component/u-goods-list/u-ordinary-list").then(n.bind(null,"24ba"))},u=function(){return n.e("components/page-component/goods/u-attr").then(n.bind(null,"b4bc"))},l=function(){return n.e("components/page-component/goods/bd-info").then(n.bind(null,"0e01"))},h=function(){return n.e("components/page-component/goods/bd-xbc").then(n.bind(null,"8639"))},p=function(){return n.e("components/page-component/goods/bd-kb").then(n.bind(null,"4c29"))},f=function(){return n.e("components/page-component/goods/bd-hc").then(n.bind(null,"de37"))},m=function(){return n.e("components/page-component/goods/bd-detail").then(n.bind(null,"3e70"))},g=function(){return n.e("components/page-component/goods/bd-comments").then(n.bind(null,"9470"))},b=function(){return n.e("components/basic-component/app-close/app-close").then(n.bind(null,"f0dd"))},_={name:"goods",components:{appGoodsBanner:r,uOrdinaryList:d,uAttr:u,appGoodsFullReduce:a,bdInfo:l,bdXbc:h,bdKb:p,bdHc:f,bdDetail:m,bdComments:g,appClose:b},data:function(){return{showClose:!1,is_open:0,goods:null,full_reduce:null,selectAttr:null,recommend_list:null,attrShow:!1,id:0,mch_id:0,mch_store:null,mch_setting:null,poster:this.$api.mch.poster,poster_config:this.$api.mch.poster_config,poster_generate:this.$api.mch.poster_generate}},computed:s({},(0,o.mapState)({mall:function(t){return t.mallConfig.mall},themeObject:function(t){var e=t.mallConfig.mall.setting.theme_color;return{back:e+"-m-back "+e,backP:e+"-m-back-p "+e,backO:e+"-m-back-o "+e,theme:e,color:e+"-m-text "+e,sBack:e+"-s-back "+e,border:e+"-m-border "+e,mBtn:e+"-m-gradient-btn "+e,sBtn:e+"-s-gradient-btn "+e}}}),{},(0,o.mapState)("gConfig",{iphone:function(t){return t.iphone},iphoneHeight:function(t){return t.iphoneHeight}}),{},(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"})),onLoad:function(t){var e=[t.mch_id,t.id];this.mch_id=e[0],this.id=e[1],this.getAddress(),this.loadRecommend()},onShow:function(){var t=this;this.showClose=!1,setTimeout(function(){t.showClose=!0})},onShareAppMessage:function(){return this.$shareAppMessage({title:this.goods.app_share_title?this.goods.app_share_title:this.goods.name,imageUrl:this.goods.app_share_pic?this.goods.app_share_pic:"",path:"/plugins/mch/goods/goods",params:{id:this.id,mch_id:this.mch_id}})},methods:{getMall:function(t){this.is_open=t.is_open},getAddress:function(){var e=this;t.getLocation({type:"wgs84",success:function(t){e.getMch(t.latitude,t.longitude)},fail:function(t){e.getMch(0,0)}})},getMch:function(e,n){var o=this;o.$showLoading(),o.$request({url:o.$api.mch.detail,data:{id:o.mch_id,latitude:e,longitude:n}}).then(function(e){if(o.$hideLoading(),0===e.code){var n=[e.data.detail,e.data.mchSetting];o.mch_store=n[0],o.mch_setting=n[1],o.getDetail()}else t.showModal({title:"提示",content:e.msg,showCancel:!1,success:function(e){e.confirm&&t.navigateBack({delta:1})}})}).catch(function(){o.$hideLoading()})},getDetail:function(){var e=this;this.$showLoading(),this.$request({url:this.$api.mch.goods_detail,data:{id:this.id,mch_id:this.mch_id}}).then(function(n){if(e.$hideLoading(),0===n.code){var o=n.data.detail.goods_activity;e.goods=n.data.detail,o&&(e.full_reduce=o.full_reduce)}else t.showModal({title:"提示",content:n.msg,showCancel:!1})}).catch(function(){e.$hideLoading()})},loadRecommend:function(){var t=this,e=this;e.$request({url:e.$api.goods.new_recommend,data:{goods_id:e.id},method:"get"}).then(function(e){0===e.code&&(t.recommend_list=e.data.list)})},navMap:function(){t.openLocation({latitude:parseFloat(this.mch_store.store.latitude),longitude:parseFloat(this.mch_store.store.longitude),name:this.mch_store.store.name,address:this.mch_store.store.address})},onAttr:function(t){this.selectAttr=t},navService:function(){t.navigateTo({url:"/pages/web/web?url="+this.mch_setting.web_service_url})},navShop:function(){t.redirectTo({url:"/plugins/mch/shop/shop?mch_id="+this.mch_id})},back:function(){t.redirectTo({url:"/pages/index/index"})},favorite:function(){this.goods.favorite?this.goods.favorite=!1:this.goods.favorite=!0,this.$request({url:this.goods.favorite?this.$api.user.favorite_add:this.$api.user.favorite_remove,data:{goods_id:this.goods.id}}).then(function(e){0!==e.code&&t.showModal({title:"提示",content:e.msg,showCancel:!1})})},clickAttr:function(){"ecard"!==this.goods.type?this.attrShow=!0:t.showToast({title:"虚拟商品不允许加入购物车",icon:"none"})}}};e.default=_}).call(this,n("c11b")["default"])},ff65:function(t,e,n){"use strict";n.r(e);var o=n("f584"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a}},[["3241","common/runtime","common/vendor"]]]);