(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/advance/detail/detail"],{2350:function(t,e,n){},3510:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){return n.e("components/page-component/goods/app-goods-banner").then(n.bind(null,"12b6"))},c=function(){return n.e("plugins/advance/components/detail-ad").then(n.bind(null,"e0a5"))},l=function(){return n.e("plugins/advance/components/detail-price-share").then(n.bind(null,"fe3c"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("plugins/advance/components/detail-bottom-button")]).then(n.bind(null,"5c91"))},d=function(){return n.e("plugins/advance/components/detail-attr").then(n.bind(null,"f471"))},p=function(){return n.e("components/page-component/app-join-member/app-join-member").then(n.bind(null,"40f4"))},h=function(){return n.e("components/page-component/app-related-suggestion-product/app-related-suggestion-product").then(n.bind(null,"1ce4"))},m=function(){return n.e("plugins/advance/components/detail-discount").then(n.bind(null,"c54f"))},g=function(){return n.e("plugins/advance/components/detail-vip").then(n.bind(null,"526f"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-vip-card/app-vip-card")]).then(n.bind(null,"19f0"))},_=function(){return n.e("components/page-component/app-goods-detail/app-name").then(n.bind(null,"1caa"))},b=function(){return n.e("components/page-component/app-quick-navigation/app-quick-navigation").then(n.bind(null,"4d92"))},v=function(){return n.e("components/page-component/goods/app-goods-full-reduce").then(n.bind(null,"6132"))},w=function(){return n.e("components/basic-component/app-close/app-close").then(n.bind(null,"f0dd"))},k=function(){return n.e("components/page-component/goods/bd-detail").then(n.bind(null,"3e70"))},T=function(){return n.e("components/page-component/goods/bd-comments").then(n.bind(null,"9470"))},O=function(){return n.e("components/page-component/goods/bd-kb").then(n.bind(null,"4c29"))},j=function(){return n.e("components/page-component/goods/bd-hc").then(n.bind(null,"de37"))},y=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/goods/bd-coupon")]).then(n.bind(null,"11b2"))},$=function(){return n.e("components/page-component/goods/bd-xbc").then(n.bind(null,"8639"))},P={name:"detail",data:function(){return{showClose:!1,is_open:0,detail:null,full_reduce:null,active:!0,attr_deposit:"0",attr_swell_deposit:"0",attr_stock:0,attr_price:"0",attr_price_member:0,url:"",level_show:0,loading:!1,select_attr_group:[],zhe:!1,list:[],num:1,shareShow:!1,attr_pic_url:"",goods_id:-1,d:0,h:0,m:0,s:0,end_time:-1,buttonDisabled:!1,poster_config:this.$api.advance.poster_config,poster_generate:this.$api.advance.poster_generate}},onLoad:function(t){this.goods_id=t.id},onShow:function(){var e=this;this.showClose=!1,setTimeout(function(){e.showClose=!0}),this.$nextTick(function(){e.request_detail({id:e.goods_id}),e.$request({url:e.$api.advance.goods_list,data:{goods_id:e.goods_id}}).then(function(n){0===n.code?e.list=n.data.list:1===n.code&&t.showModal({title:"提示",content:n.msg})})})},onHide:function(){clearInterval(this.end_time)},onUnload:function(){clearInterval(this.end_time)},methods:{getMall:function(t){this.is_open=t.is_open},request_detail:function(e){var n=this;this.$request({url:this.$api.advance.detail,data:{id:e.id},method:"get"}).then(function(e){0===e.code?(n.detail=e.data.detail,n.detail.goods_activity&&(n.full_reduce=n.detail.goods_activity.full_reduce),n.detail.num=1,n.loading=!0,n.url="".concat(n.$api.advance.poster,"&goods_id=").concat(n.detail.id),n.getTime(n.detail.advanceGoods.end_prepayment_at),n.set_attr_active()):1===e.code&&(t.hideLoading(),t.showModal({content:e.msg,showCancel:!1,success:function(){t.navigateBack()}}))})},open_share:function(){this.shareShow=!0},change_num:function(t){this.num+=t},change_num_data:function(t){this.num=t},favorite:function(t){this.detail.favorite=t},select_attr:function(t,e){for(var n=this.detail.attr_groups,i=":",o=0,a=0;a<n.length;a++)for(var r=this.detail.attr_groups[a].attr_list,s=0;s<r.length;s++)n[a].attr_group_id===t&&r[s].attr_id===e?this.$set(this.detail.attr_groups[a].attr_list[s],"active",!0):n[a].attr_group_id===t&&r[s].attr_id!==e&&this.$set(this.detail.attr_groups[a].attr_list[s],"active",!1),this.detail.attr_groups[a].attr_list[s].active&&(o=this.detail.attr_groups[a].attr_list[s].attr_id,i+=":".concat(o));var c=i.substr(2);this.get_price_stock(c)},set_attr_active:function(){for(var t=0,e=":",n=0;n<this.detail.attr_groups.length;n++)for(var i=0;i<this.detail.attr_groups[n].attr_list.length;i++)0!==i?this.$set(this.detail.attr_groups[n].attr_list[i],"active",!1):0===i&&(t=this.detail.attr_groups[n].attr_list[i].attr_id,e+=":".concat(t),this.$set(this.detail.attr_groups[n].attr_list[i],"active",!0));this.get_price_stock(e.substr(2))},get_price_stock:function(t){for(var e=this.detail.attr,n=0;n<e.length;n++)if(e[n].sign_id===t){this.select_attr_group=e[n].attr_list;var i=e[n],o=i.deposit,a=i.swell_deposit,r=i.stock,s=i.price,c=i.price_member,l=i.pic_url;this.attr_deposit=o,this.attr_swell_deposit=a,this.attr_stock=r,this.attr_price=s,this.attr_price_member=c,this.attr_pic_url=l}0==this.attr_stock?this.buttonDisabled=!0:this.buttonDisabled=!1},close_attr:function(t){this.active=t},getTime:function(t){var e=this,n=new Date(t.replace(/-/g,"/")).getTime()-(new Date).getTime();this.d=parseInt(n/1e3/60/60/24),this.h=parseInt(n/1e3/60/60%24),this.m=parseInt(n/1e3/60%60),this.s=parseInt(n/1e3%60),this.end_time=setInterval(function(){var n=(new Date).getTime(),i=new Date(t.replace(/-/g,"/")).getTime(),o=i-n;if(o>0){var a=parseInt(o/1e3/60/60/24),r=parseInt(o/1e3/60/60%24),s=parseInt(o/1e3/60%60),c=parseInt(o/1e3%60);e.d=a,e.h=r,e.m=s,e.s=c}else clearInterval(e.end_time)},1e3)},setCoupon:function(t){this.$set(this.detail.goods_coupon_center[t],"is_receive",1)}},components:{"app-goods-banner":s,"detail-ad":c,"detail-price-share":l,"detail-bottom-button":u,"detail-attr":d,"app-join-member":p,"app-related-suggestion-product":h,"detail-discount":m,"detail-vip":g,"app-name":_,"app-vip-card":f,"app-quick-navigation":b,appGoodsFullReduce:v,appClose:w,bdDetail:k,bdComments:T,bdKb:O,bdHc:j,bdCoupon:y,bdXbc:$},computed:a({},(0,i.mapGetters)("mallConfig",{vip:"getVip",getTheme:"getTheme"}),{},(0,i.mapGetters)("user",{is_vip:"is_vip"}),{},(0,i.mapState)({mall:function(t){return t.mallConfig.mall}}),{themeObject:function(){return{back:this.getTheme+"-m-back "+this.getTheme,backP:this.getTheme+"-m-back-p "+this.getTheme,backO:this.getTheme+"-m-back-o "+this.getTheme,theme:this.getTheme,color:this.getTheme+"-m-text "+this.getTheme,sBack:this.getTheme+"-s-back "+this.getTheme,border:this.getTheme+"-m-border "+this.getTheme}}}),onShareAppMessage:function(){var t=this.detail,e=t.app_share_title,n=t.name,i=t.id,o=t.app_share_pic;return this.$shareAppMessage({path:"/plugins/advance/detail/detail",title:e||n,imageUrl:o||"",params:{id:i}})}};e.default=P}).call(this,n("f266")["default"])},"3ab6":function(t,e,n){"use strict";n.r(e);var i=n("aa9b"),o=n("e0cd");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("c560");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"84617728",null);e["default"]=s.exports},aa9b:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.active=!1})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},ae58:function(t,e){t.exports=require("../siteinfo.js")},c560:function(t,e,n){"use strict";var i=n("2350"),o=n.n(i);o.a},e0cd:function(t,e,n){"use strict";n.r(e);var i=n("3510"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a}},[["ba56","common/runtime","common/vendor"]]]);