(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-exchange-goods-goods"],{"058c":function(t,e,a){"use strict";var o=a("3d36"),i=a.n(o);i.a},"0855c":function(t,e,a){var o=a("eb94");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("19d4c8d8",o,!0,{sourceMap:!1,shadowMode:!1})},"113a":function(t,e,a){"use strict";var o=a("9000"),i=a.n(o);i.a},"11b2":function(t,e,a){"use strict";a.r(e);var o=a("14c4"),i=a("fe55");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("fe19");var n=a("2877"),d=Object(n["a"])(i["default"],o["a"],o["b"],!1,null,"b0df3b32",null);e["default"]=d.exports},"14c4":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.newCoupons.length>0?a("v-uni-view",{staticClass:"coupon"},[a("v-uni-view",{staticClass:"marketing"},[a("v-uni-view",{staticClass:"block dir-left-nowrap cross-center",on:{click:function(e){e=t.$handleEvent(e),t.setShow(e)}}},[a("v-uni-text",{staticClass:"box-grow-0 bd-name"},[t._v("领券")]),t._l(t.newCoupons,function(e,o){return a("v-uni-view",{key:o,staticClass:"big-box dir-left-nowrap cross-center"},[a("v-uni-view",{staticClass:"box",class:t.theme.color},[t._v("满"+t._s(e.min_price)+"元"+t._s(1==e.type?"享":"减")+t._s(1==e.type?e.discount+"折":e.sub_price)),a("v-uni-view",{staticClass:"left"}),a("v-uni-view",{staticClass:"right"})],1)],1)}),a("v-uni-image",{staticClass:"box-grow-0",attrs:{src:"/static/image/icon/arrow-right.png"}})],2)],1),a("u-popup",{attrs:{mode:"bottom","border-radius":"14"},on:{close:function(e){e=t.$handleEvent(e),t.show=!1}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-uni-view",{staticClass:"model"},[a("v-uni-view",{staticClass:"f-top dir-left-nowrap main-between cross-center"},[a("v-uni-view",{staticClass:"f-title"},[t._v("可领取优惠券")]),a("v-uni-view",{staticClass:"f-image",on:{click:function(e){e=t.$handleEvent(e),t.show=!1}}},[a("v-uni-image",{staticClass:"f-img",attrs:{src:"/static/image/icon/icon-close.png"}})],1)],1),a("v-uni-scroll-view",{staticClass:"f-scroll",attrs:{"scroll-y":!0}},[a("v-uni-view",{staticClass:"f-scroll-content"},t._l(t.coupons,function(e,o){return a("v-uni-view",{key:o,staticClass:"f-item dir-top-nowrap"},[a("v-uni-view",{staticClass:"f-item-top"},[a("v-uni-image",{attrs:{src:t.couponImg[0==e.is_receive?"coupon_enabled":"coupon_disabled"]}}),a("v-uni-view",{staticClass:"dir-left-nowrap main-between cross-center"},[a("v-uni-view",{staticClass:"f-text-content dir-left-nowrap cross-bottom"},[1==e.type?a("v-uni-view",{staticClass:"f-big-text-dis"},[a("v-uni-text",[t._v(t._s(e.discount))]),a("v-uni-text",[t._v("折")])],1):2==e.type?a("v-uni-view",{staticClass:"f-big-text-pri"},[a("v-uni-text",[t._v("￥")]),a("v-uni-text",[t._v(t._s(e.sub_price))])],1):t._e(),a("v-uni-view",{staticClass:"f-small-text"},[a("v-uni-view",[t._v("优惠券")]),a("v-uni-view",[t._v("满"+t._s(e.min_price)+"元使用")])],1)],1),a("v-uni-button",{style:{color:0==e.is_receive?"#caa76e":"#b4b4b4"},on:{click:function(a){a=t.$handleEvent(a),t.receive(e.id,o)}}},[t._v(t._s(0==e.is_receive?"立即领取":"已领取"))])],1)],1),a("v-uni-view",{staticClass:"f-item-bottom dir-top-nowrap"},["1"==e.expire_type?a("v-uni-text",[t._v("领取后"+t._s(e.expire_day)+"天过期")]):t._e(),"2"==e.expire_type?a("v-uni-text",[t._v("有效日期："+t._s(e.begin_time)+" - "+t._s(e.end_time))]):t._e(),"3"==e.appoint_type?a("v-uni-text",{staticClass:"t-omit"},[t._v("适用范围：全场通用")]):"4"==e.appoint_type?a("v-uni-text",{staticClass:"t-omit"},[t._v("适用范围：仅限当面付活动使用")]):"5"==e.appoint_type?a("v-uni-text",{staticClass:"t-omit"},[t._v("适用范围：仅限礼品卡使用")]):"2"==e.appoint_type?a("v-uni-text",{staticClass:"t-omit"},[a("v-uni-text",[t._v("适用商品：")]),t._l(e.goods,function(e,o){return[a("v-uni-text",[t._v(t._s(0!==o?"、":"")+t._s(e.name))])]})],2):"1"==e.appoint_type?a("v-uni-text",{staticClass:"t-omit"},[t._v("适用分类："),t._l(e.cat,function(e,a){return[t._v(t._s(0!==a?"、":"")+t._s(e.name))]})],2):t._e()],1)],1)}),1)],1)],1)],1)],1):t._e()},i=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i})},"15be":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-layout",[t.goods?t._e():a("v-uni-view",{staticClass:"u-goods-detail"}),t.goods?a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"app-goods"},[a("app-banner",{attrs:{videoUrl:t.goods.video_url,share:t.goods.share,picList:t.goods.pic_url,goods_id:t.goods_id,isCart:!1,sign:"exchange"}}),a("bd-info",{attrs:{theme:t.themeObject,name:t.goods.name,"is-negotiable":t.goods.is_negotiable,subtitle:t.goods.subtitle,"level-show":t.goods.level_show,price:t.goods.price,"original-price":t.goods.original_price,"price-max":t.goods.price_max,"price-min":t.goods.price_min,"price-member-max":t.goods.price_member_max,"price-member-min":t.goods.price_member_min,discount:t.discount,"is-vip-card-user":t.is_vip_card_user,sales:t.goods.sales,unit:t.goods.unit,"is-sales":t.goods.is_sales,"is-vip":t.is_vip,"flash-sale":t.flash_sale,"goods-id":t.goods.id,"extra-quick-share":t.goods.extra_quick_share,"app-share-pic":t.goods.app_share_pic,"app-share-title":t.goods.app_share_title,"poster-config":t.posterConfig,"poster-generate":t.posterGenerate,"has-poster-nav":!0,goods:t.goods,"share-url":t.url},on:{share:function(e){e=t.$handleEvent(e),t.hShareAppMessage(e)}}}),t.goods.goods_coupon_center?a("bd-coupon",{attrs:{theme:t.themeObject,coupons:t.goods.goods_coupon_center},on:{change:function(e){e=t.$handleEvent(e),t.setCoupon(e)}}}):t._e(),t.goods?a("bd-xbc",{attrs:{coAttr:!1,"guarantee-title":t.goods.guarantee_title,"guarantee-pic":t.goods.guarantee_pic,param_content:t.goods.param_content,param_name:t.goods.param_name,services:t.goods.services}}):t._e(),t.goods.goods_marketing_award?a("bd-hc",{attrs:{integral:t.goods.goods_marketing_award.integral,coupon:t.goods.goods_marketing_award.coupon,card:t.goods.goods_marketing_award.card,balance:t.goods.goods_marketing_award.balance,theme:t.themeObject}}):t._e(),t.goods_id>0?a("bd-comments",{attrs:{"goods-id":t.goods_id}}):t._e(),a("bd-detail",{attrs:{detail:t.goods.detail}}),a("v-uni-view",{staticClass:"safe-area-inset-bottom"},[a("v-uni-view",{class:t.full_reduce?"u-bottom-height-1":"u-bottom-height-0"})],1),t.is_open?a("v-uni-view",{staticClass:"safe-area-inset-bottom u-bottom-fixed"},[t.full_reduce?a("v-uni-view",[a("app-goods-full-reduce",{attrs:{theme:t.getTheme,full_reduce:t.full_reduce}})],1):t._e(),a("v-uni-view",{staticClass:"buttons dir-left-nowrap"},[a("v-uni-view",{staticClass:"app-button main-center cross-center"},[t.goods.goods_num>0?a("v-uni-view",{staticClass:"app-exhange",class:t.getTheme+"-m-gradient-o "+t.getTheme,on:{click:function(e){e=t.$handleEvent(e),t.toExchange(e)}}},[t._v("立即购买")]):a("v-uni-view",{staticClass:"app-over"},[t._v("已售罄")])],1)],1)],1):t._e()],1):t._e(),t.showClose?a("app-close",{attrs:{modal:!1},on:{update:function(e){e=t.$handleEvent(e),t.getMall(e)}}}):t._e()],1)},i=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i})},"1d11":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"reduce dir-left-nowrap main-between cross-center",class:"gift"===t.sign?t.theme+"-full ":t.theme+"-m-back-full "+t.theme,on:{click:function(e){e=t.$handleEvent(e),t.route(e)}}},[a("v-uni-view",{class:"gift"===t.sign?t.theme+"-color":t.theme+"-m-text bd-name "+t.theme},[t._v("满减优惠")]),a("v-uni-view",{staticClass:"dir-left-nowrap cross-center"},[2===t.full_reduce.rule_type?a("v-uni-view",{staticClass:"bd-item"},[a("v-uni-text",{staticClass:"text",class:t.theme+"-m-back "+t.theme},[t._v("每满"+t._s(t.full_reduce.rule.min_money)+"减"+t._s(t.full_reduce.rule.cut))])],1):1===t.full_reduce.rule_type?a("v-uni-view",{staticClass:"bd-item u-line-1 dir-left-nowrap cross-center",class:t.opacity?"bd-opacity-1":"bd-opacity-0"},t._l(t.list,function(e,o){return a("v-uni-text",{key:o,staticClass:"text ",class:["gift"===t.sign?t.theme+"-background ":t.theme+"-m-back "+t.theme],attrs:{id:"bd-"+o+"-text"}},[t._v("满"+t._s(e.min_money)+t._s("1"===e.discount_type?"减"+e.cut:"打"+e.discount+"折"))])}),1):t._e(),a("v-uni-view",{staticClass:"arrow"})],1)],1)},i=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i})},"1d36":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".bd-comments[data-v-d0ade5ca]{width:%?702?%;margin:%?24?% %?24?% 0 %?24?%;background-color:#fff;border-radius:%?15?%}.bd-nothing[data-v-d0ade5ca]{padding:%?20?%;font-size:%?26?%;color:#353535}.bd-top[data-v-d0ade5ca]{height:%?90?%;border-bottom:%?1?% solid #eee;padding:0 %?20?%}.bd-icon[data-v-d0ade5ca]{width:%?12?%;height:%?22?%;margin-left:%?15?%}.bd-name[data-v-d0ade5ca]{font-size:%?26?%;color:#999}.bd-more[data-v-d0ade5ca]{font-size:%?22?%;color:#999}.bd-bottom[data-v-d0ade5ca]{padding:%?20?%}.bd-title[data-v-d0ade5ca]{margin-top:%?8?%;margin-bottom:%?22?%}.bd-avatar[data-v-d0ade5ca]{width:%?56?%;height:%?56?%;border-radius:50%}.bd-nickname[data-v-d0ade5ca]{font-size:%?26?%;color:#999;margin-left:%?26?%}.bd-attr-name[data-v-d0ade5ca]{font-size:%?24?%;color:#999;line-height:%?34?%;margin-bottom:%?14?%}.bd-content[data-v-d0ade5ca]{font-size:%?26?%;line-height:%?36?%;color:#353535}.pic-list[data-v-d0ade5ca]{margin-top:%?20?%}.bd-pic[data-v-d0ade5ca]{width:%?210?%;height:%?210?%;margin-right:%?10?%;margin-bottom:%?10?%}",""])},"245f":function(t,e,a){"use strict";a.r(e);var o=a("b402"),i=a.n(o);for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},"286c":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 1==t.isComment?a("v-uni-view",{staticClass:"bd-comments"},[t.list.length>0?[a("v-uni-view",{staticClass:"bd-top dir-left-nowrap cross-center",on:{click:function(e){e=t.$handleEvent(e),t.goto(e)}}},[a("v-uni-view",{staticClass:"box-grow-1 bd-name"},[t._v("评价")]),a("v-uni-view",{staticClass:"box-grow-0 bd-more"},[t._v("查看更多")]),a("v-uni-image",{staticClass:"box-grow-0 bd-icon",attrs:{src:"/static/image/icon/arrow-right.png"}})],1),t._l(t.list,function(e,o){return a("v-uni-view",{key:o,staticClass:"bd-bottom bt"},[a("v-uni-view",{staticClass:"bd-title dir-left-nowrap cross-center"},[a("v-uni-image",{staticClass:"box-grow-0 bd-avatar",attrs:{src:e.avatar}}),a("v-uni-view",{staticClass:"box-grow-1 bd-nickname"},[t._v(t._s(e.nickname))]),a("v-uni-view",{staticClass:"bd-more box-grow-0"},[t._v(t._s(e.time))])],1),a("v-uni-view",{staticClass:"bd-attr-name"},[t._v(t._s(e.attr_name))]),a("v-uni-view",{staticClass:"bd-content u-line-2"},[t._v(t._s(e.content))]),a("v-uni-view",{staticClass:"dir-left-wrap pic-list"},t._l(e.pic_url,function(e,i){return a("v-uni-image",{key:i,staticClass:"bd-pic",attrs:{src:e},on:{click:function(e){e=t.$handleEvent(e),t.imgPreview(o,i)}}})}),1)],1)})]:a("v-uni-view",{staticClass:"bd-nothing"},[t._v("暂无评价")])],2):t._e()},i=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i})},"3d36":function(t,e,a){var o=a("6bb5");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("31c8d2f2",o,!0,{sourceMap:!1,shadowMode:!1})},6132:function(t,e,a){"use strict";a.r(e);var o=a("1d11"),i=a("245f");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("b625");var n=a("2877"),d=Object(n["a"])(i["default"],o["a"],o["b"],!1,null,"0b9fafa6",null);e["default"]=d.exports},"6bb5":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".text-center[data-v-2b621c6b]{text-align:center}.font-weight[data-v-2b621c6b]{font-weight:700}.page-width[data-v-2b621c6b]{width:100%}.goods-hover-class[data-v-2b621c6b]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-2b621c6b]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-2b621c6b]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-2b621c6b]{width:100%}.u-hover-class[data-v-2b621c6b]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-2b621c6b]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.buttons[data-v-2b621c6b]{width:%?750?%;height:%?110?%;border-top:%?1?% solid #e2e2e2}.buttons .app-button[data-v-2b621c6b]{width:100%;height:%?110?%;text-align:center;line-height:%?110?%;background-color:#fff}.buttons .app-button .app-exhange[data-v-2b621c6b]{width:%?702?%;color:#fff;border-radius:%?41?%;height:%?82?%;line-height:%?82?%;font-size:%?28?%}.buttons .app-button .app-over[data-v-2b621c6b]{background:#e9e9e9;width:%?702?%;color:#999;border-radius:%?41?%;height:%?82?%;line-height:%?82?%;font-size:%?28?%}.u-bottom-height-0[data-v-2b621c6b]{height:%?110?%}.u-bottom-height-1[data-v-2b621c6b]{height:%?190?%}.u-bottom-fixed[data-v-2b621c6b]{position:fixed;bottom:0;left:0;width:100%;z-index:1602;background-color:#fff}body.?%PAGE?%[data-v-2b621c6b]{background:#f7f7f7}",""])},"754e":function(t,e,a){"use strict";a.r(e);var o=a("b044"),i=a.n(o);for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},9e3:function(t,e,a){var o=a("1d36");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("7cbf090d",o,!0,{sourceMap:!1,shadowMode:!1})},"91f1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(a("a34a")),i=s(a("d55a")),r=s(a("bdfc")),n=a("2f62"),d=s(a("816e"));function s(t){return t&&t.__esModule?t:{default:t}}function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,o)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(a,!0).forEach(function(e){u(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e,a,o,i,r,n){try{var d=t[r](n),s=d.value}catch(f){return void a(f)}d.done?e(s):Promise.resolve(s).then(o,i)}function l(t){return function(){var e=this,a=arguments;return new Promise(function(o,i){var r=t.apply(e,a);function n(t){b(r,o,i,n,d,"next",t)}function d(t){b(r,o,i,n,d,"throw",t)}n(void 0)})}}var g={name:"bd-coupon",props:{coupons:Array,theme:Object,guarantee_title:{type:String}},data:function(){return{show:!1,newCoupons:[]}},methods:{receive:function(){var t=l(o.default.mark(function t(e,a){var i;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({mask:!0,title:"领取中"}),t.next=3,this.$request({url:this.$api.coupon.receive,data:{coupon_id:e}});case 3:i=t.sent,uni.hideLoading(),1===i.code?uni.showModal({title:"提示",content:i.msg,showCancel:!1}):(0==i.data.rest&&this.$emit("change",a),uni.showToast({icon:"none",title:"领取成功",duration:1e3}));case 6:case"end":return t.stop()}},t,this)}));function e(e,a){return t.apply(this,arguments)}return e}(),setShow:function(){d.default.isLogin()?this.show=!0:this.$user.getInfo()}},computed:c({},(0,n.mapState)({couponImg:function(t){return t.mallConfig.__wxapp_img.coupon}})),components:{uPopup:i.default,appExclusiveCoupon:r.default},watch:{coupons:{handler:function(t){this.newCoupons=t.slice(0,3)},deep:!0,immediate:!0}}};e.default=g},94701:function(t,e,a){"use strict";a.r(e);var o=a("286c"),i=a("754e");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("113a");var n=a("2877"),d=Object(n["a"])(i["default"],o["a"],o["b"],!1,null,"d0ade5ca",null);e["default"]=d.exports},"99ad":function(t,e,a){"use strict";a.r(e);var o=a("f8d5"),i=a.n(o);for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},a976:function(t,e,a){"use strict";a.r(e);var o=a("15be"),i=a("99ad");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("058c");var n=a("2877"),d=Object(n["a"])(i["default"],o["a"],o["b"],!1,null,"2b621c6b",null);e["default"]=d.exports},b044:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a("2f62");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,o)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(a,!0).forEach(function(e){n(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={name:"bd-comments",props:{goodsId:Number},data:function(){return{list:[]}},computed:r({},(0,o.mapState)({isComment:function(t){return t.mallConfig.mall.setting.is_comment}})),methods:{getList:function(t){var e=this;this.$request({url:this.$api.goods.comments_list,data:{goods_id:t}}).then(function(t){0===t.code?e.list=t.data.comments.slice(0,2):uni.showToast({icon:"none",title:t.msg})})},imgPreview:function(t,e){this.list&&this.list[t]&&this.list[t].pic_url&&this.list[t].pic_url.length>0&&uni.previewImage({current:e,urls:this.list[t].pic_url})},goto:function(){uni.navigateTo({url:"/pages/comments/comments?goods_id=".concat(this.goodsId)})}},watch:{goodsId:{immediate:!0,handler:function(t){this.getList(t)}}}};e.default=d},b402:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"app-goods-full-reduce",props:{theme:String,full_reduce:Object,sign:String},data:function(){return{textWidth:0,resultWidth:0,list:[],opacity:!1}},methods:{route:function(){uni.navigateTo({url:"/pages/full_reduce/index/index"})},initSize:function(){for(var t=this,e=[],a=function(a){e.push(new Promise(function(e){var o=uni.createSelectorQuery().in(t);o.select("#bd-".concat(a,"-text")).boundingClientRect().exec(function(a){a[0]&&(t.textWidth+=a[0].width+uni.upx2px(10)),e()})}))},o=0;o<this.list.length;o++)a(o);Promise.all(e).then(function(){t.resultWidth=t.textWidth})}},watch:{"full_reduce.rule":{immediate:!0,handler:function(t){var e=this;this.list=t,this.textWidth=0,setTimeout(function(){e.initSize()},500)},deep:!0},resultWidth:{handler:function(t){var e=this;t>uni.upx2px(552)?(this.list=this.list.slice(0,this.list.length-1),this.textWidth=0,this.$nextTick(function(){e.initSize()})):this.opacity=!0}}},mounted:function(){var t=this;setTimeout(function(){t.list=t.full_reduce.rule,t.textWidth=0,setTimeout(function(){t.initSize()},500)},500)}};e.default=o},b625:function(t,e,a){"use strict";var o=a("ea65"),i=a.n(o);i.a},bbd9:function(t,e,a){var o=a("b041");e=t.exports=a("2350")(!1),e.push([t.i,".text-center[data-v-0b9fafa6]{text-align:center}.font-weight[data-v-0b9fafa6]{font-weight:700}.page-width[data-v-0b9fafa6]{width:100%}.goods-hover-class[data-v-0b9fafa6]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-0b9fafa6]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-0b9fafa6]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-0b9fafa6]{width:100%}.u-hover-class[data-v-0b9fafa6]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-0b9fafa6]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.streamer-gold-gift-color[data-v-0b9fafa6]{color:#dfa245}.streamer-gold-gift-background[data-v-0b9fafa6]{background-color:#dfa245}.streamer-gold-gift-background-q[data-v-0b9fafa6]{background:rgba(223,162,69,.8)}.streamer-gold-gift-background-p[data-v-0b9fafa6]{background:rgba(223,162,69,.2)}.streamer-gold-gift-background-o[data-v-0b9fafa6]{background:rgba(223,162,69,.1)}.streamer-gold-gift-border[data-v-0b9fafa6]{border-color:#dfa245}.streamer-gold-gift-figure-rule[data-v-0b9fafa6]{background:-webkit-gradient(linear,left top,left bottom,from(#dfa245),to(#f0c482));background:-o-linear-gradient(top,#dfa245,#f0c482);background:linear-gradient(180deg,#dfa245,#f0c482)}.streamer-gold-gift-border-bottom[data-v-0b9fafa6]{border-bottom-color:#dfa245}.streamer-gold-gift-shadow[data-v-0b9fafa6]{-webkit-box-shadow:0 %?10?% %?30?% %?2.5?% rgba(223,162,69,.2);box-shadow:0 %?10?% %?30?% %?2.5?% rgba(223,162,69,.2)}.streamer-gold-gift-btn[data-v-0b9fafa6]{background:-webkit-gradient(linear,right top,left top,from(#dfa245),to(rgba(223,162,69,.7)));background:-o-linear-gradient(right,#dfa245,rgba(223,162,69,.7));background:linear-gradient(270deg,#dfa245,rgba(223,162,69,.7))}.romantic-powder-gift-color[data-v-0b9fafa6]{color:#ff547b}.romantic-powder-gift-background[data-v-0b9fafa6]{background-color:#ff547b}.romantic-powder-gift-background-q[data-v-0b9fafa6]{background:rgba(255,84,123,.8)}.romantic-powder-gift-background-p[data-v-0b9fafa6]{background:rgba(255,84,123,.2)}.romantic-powder-gift-background-o[data-v-0b9fafa6]{background:rgba(255,84,123,.1)}.romantic-powder-gift-border[data-v-0b9fafa6]{border-color:#ff547b}.romantic-powder-gift-figure-rule[data-v-0b9fafa6]{background:-webkit-gradient(linear,left top,left bottom,from(#ff547b),to(#ff96ae));background:-o-linear-gradient(top,#ff547b,#ff96ae);background:linear-gradient(180deg,#ff547b,#ff96ae)}.romantic-powder-gift-border-bottom[data-v-0b9fafa6]{border-bottom-color:#ff547b}.romantic-powder-gift-shadow[data-v-0b9fafa6]{-webkit-box-shadow:0 %?10?% %?30?% %?2.5?% rgba(255,84,23,.2);box-shadow:0 %?10?% %?30?% %?2.5?% rgba(255,84,23,.2)}.romantic-powder-gift-btn[data-v-0b9fafa6]{background:-webkit-gradient(linear,right top,left top,from(#ff547b),to(rgba(255,84,123,.7)));background:-o-linear-gradient(right,#ff547b,rgba(255,84,123,.7));background:linear-gradient(270deg,#ff547b,rgba(255,84,123,.7))}.taste-red-gift-color[data-v-0b9fafa6]{color:#ff4544}.taste-red-gift-background[data-v-0b9fafa6]{background-color:#ff4544}.taste-red-gift-background-q[data-v-0b9fafa6]{background:rgba(255,69,68,.8)}.taste-red-gift-background-p[data-v-0b9fafa6]{background:rgba(255,69,68,.2)}.taste-red-gift-background-0[data-v-0b9fafa6]{background:rgba(255,69,68,.1)}.taste-red-gift-border[data-v-0b9fafa6]{border-color:#ff4544}.taste-red-gift-figure-rule[data-v-0b9fafa6]{background:-webkit-gradient(linear,left top,left bottom,from(#ff4544),to(#f88));background:-o-linear-gradient(top,#ff4544,#f88);background:linear-gradient(180deg,#ff4544,#f88)}.taste-red-gift-border-bottom[data-v-0b9fafa6]{border-bottom-color:#ff4544}.taste-red-gift-shadow[data-v-0b9fafa6]{-webkit-box-shadow:0 %?10?% %?30?% %?2.5?% rgba(255,69,68,.2);box-shadow:0 %?10?% %?30?% %?2.5?% rgba(255,69,68,.2)}.taste-red-gift-btn[data-v-0b9fafa6]{background:-webkit-gradient(linear,right top,left top,from(#ff4544),to(rgba(255,69,68,.7)));background:-o-linear-gradient(right,#ff4544,rgba(255,69,68,.7));background:linear-gradient(270deg,#ff4544,rgba(255,69,68,.7))}.elegant-purple-gift-color[data-v-0b9fafa6]{color:#7783ea}.elegant-purple-gift-background[data-v-0b9fafa6]{background-color:#7783ea}.elegant-purple-gift-background-q[data-v-0b9fafa6]{background:rgba(119,131,234,.8)}.elegant-purple-gift-background-p[data-v-0b9fafa6]{background:rgba(119,131,234,.2)}.elegant-purple-gift-background-o[data-v-0b9fafa6]{background:rgba(119,131,234,.1)}.elegant-purple-gift-border[data-v-0b9fafa6]{border-color:#7783ea}.elegant-purple-gift-figure-rule[data-v-0b9fafa6]{background:-webkit-gradient(linear,left top,left bottom,from(#7783ea),to(#a1aaf6));background:-o-linear-gradient(top,#7783ea,#a1aaf6);background:linear-gradient(180deg,#7783ea,#a1aaf6)}.elegant-purple-gift-border-bottom[data-v-0b9fafa6]{border-bottom-color:#7783ea}.elegant-purple-gift-shadow[data-v-0b9fafa6]{-webkit-box-shadow:0 %?10?% %?30?% %?2.5?% rgba(119,131,234,.2);box-shadow:0 %?10?% %?30?% %?2.5?% rgba(119,131,234,.2)}.elegant-purple-gift-btn[data-v-0b9fafa6]{background:-webkit-gradient(linear,right top,left top,from(#7783ea),to(rgba(119,131,234,.7)));background:-o-linear-gradient(right,#7783ea,rgba(119,131,234,.7));background:linear-gradient(270deg,#7783ea,rgba(119,131,234,.7))}.fresh-green-gift-color[data-v-0b9fafa6]{color:#63be72}.fresh-green-gift-background[data-v-0b9fafa6]{background-color:#63be72}.fresh-green-gift-background-q[data-v-0b9fafa6]{background:rgba(99,190,114,.8)}.fresh-green-gift-background-p[data-v-0b9fafa6]{background:rgba(99,190,114,.2)}.fresh-green-gift-background-o[data-v-0b9fafa6]{background:rgba(99,190,114,.1)}.fresh-green-gift-border[data-v-0b9fafa6]{border-color:#63be72}.fresh-green-gift-figure-rule[data-v-0b9fafa6]{background:-webkit-gradient(linear,left top,left bottom,from(#63be72),to(#89db96));background:-o-linear-gradient(top,#63be72,#89db96);background:linear-gradient(180deg,#63be72,#89db96)}.fresh-green-gift-border-bottom[data-v-0b9fafa6]{border-bottom-color:#63be72}.fresh-green-gift-shadow[data-v-0b9fafa6]{-webkit-box-shadow:0 %?10?% %?30?% %?2.5?% rgba(99,190,114,.2);box-shadow:0 %?10?% %?30?% %?2.5?% rgba(99,190,114,.2)}.fresh-green-gift-btn[data-v-0b9fafa6]{background:-webkit-gradient(linear,right top,left top,from(#63be72),to(rgba(99,190,114,.7)));background:-o-linear-gradient(right,#63be72,rgba(99,190,114,.7));background:linear-gradient(270deg,#63be72,rgba(99,190,114,.7))}.business-blue-gift-color[data-v-0b9fafa6]{color:#4a90e2}.business-blue-gift-background[data-v-0b9fafa6]{background-color:#4a90e2}.business-blue-gift-background-q[data-v-0b9fafa6]{background:rgba(74,144,226,.8)}.business-blue-gift-background-p[data-v-0b9fafa6]{background:rgba(74,144,226,.2)}.business-blue-gift-background-o[data-v-0b9fafa6]{background:rgba(74,144,226,.1)}.business-blue-gift-border[data-v-0b9fafa6]{border-color:#4a90e2}.business-blue-gift-figure-rule[data-v-0b9fafa6]{background:-webkit-gradient(linear,left top,left bottom,from(#4a90e2),to(#82b4ef));background:-o-linear-gradient(top,#4a90e2,#82b4ef);background:linear-gradient(180deg,#4a90e2,#82b4ef)}.business-blue-gift-border-bottom[data-v-0b9fafa6]{border-bottom-color:#4a90e2}.business-blue-gift-shadow[data-v-0b9fafa6]{-webkit-box-shadow:0 %?10?% %?30?% %?2.5?% rgba(74,144,226,.2);box-shadow:0 %?10?% %?30?% %?2.5?% rgba(74,144,226,.2)}.business-blue-gift-btn[data-v-0b9fafa6]{background:-webkit-gradient(linear,right top,left top,from(#4a90e2),to(rgba(74,144,226,.7)));background:-o-linear-gradient(right,#4a90e2,rgba(74,144,226,.7));background:linear-gradient(270deg,#4a90e2,rgba(74,144,226,.7))}.reduce[data-v-0b9fafa6]{width:%?750?%;padding:%?20?% %?24?%}.arrow[data-v-0b9fafa6]{background-size:100% 100%;background-repeat:no-repeat;width:%?12?%;height:%?22?%;background-image:url("+o(a("db8d"))+")}.text[data-v-0b9fafa6]{padding:%?5?% %?10?%;border-radius:%?15?%;font-size:%?21?%;color:#fff;margin-right:%?10?%}.bd-name[data-v-0b9fafa6]{font-size:%?28?%;width:%?150?%}.bd-item[data-v-0b9fafa6]{width:%?552?%}.a.a-m-back-full[data-v-0b9fafa6]{background:#ffecec}.b.b-m-back-full[data-v-0b9fafa6]{background:#fff9e5}.c.c-m-back-full[data-v-0b9fafa6]{background:#ffeef2}.d.d-m-back-full[data-v-0b9fafa6]{background:#fcf8ef}.e.e-m-back-full[data-v-0b9fafa6]{background:#f1f2fd}.f.f-m-back-full[data-v-0b9fafa6]{background:#ffecec}.g.g-m-back-full[data-v-0b9fafa6]{background:#eff8f1}.h.h-m-back-full[data-v-0b9fafa6]{background:#edf4fc}.i.i-m-back-full[data-v-0b9fafa6]{background:#eaeaea}.j.j-m-back-full[data-v-0b9fafa6]{background:#ffecec}.streamer-gold-gift-full[data-v-0b9fafa6]{background:#fcf6ec}.romantic-powder-gift-full[data-v-0b9fafa6]{background:#ffeef2}.taste-red-gift-full[data-v-0b9fafa6]{background:#ffecec}.elegant-purple-gift-full[data-v-0b9fafa6]{background:#f1f2fd}.fresh-green-gift-full[data-v-0b9fafa6]{background:#eff8f1}.business-blue-gift-full[data-v-0b9fafa6]{background:#edf4fc}.bd-opacity-0[data-v-0b9fafa6]{opacity:0}.bd-opacity-1[data-v-0b9fafa6]{opacity:1}body.?%PAGE?%[data-v-0b9fafa6]{background:#f7f7f7}",""])},ea65:function(t,e,a){var o=a("bbd9");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("80fc5a9a",o,!0,{sourceMap:!1,shadowMode:!1})},eb94:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".text-center[data-v-b0df3b32]{text-align:center}.font-weight[data-v-b0df3b32]{font-weight:700}.page-width[data-v-b0df3b32]{width:100%}.goods-hover-class[data-v-b0df3b32]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-b0df3b32]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-b0df3b32]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-b0df3b32]{width:100%}.u-hover-class[data-v-b0df3b32]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-b0df3b32]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.content[data-v-b0df3b32]{padding:%?10?% 0 %?10?% %?30?%}.marketing[data-v-b0df3b32]{width:%?702?%;border-radius:%?15?%;padding:%?20?%;background-color:#fff;height:%?88?%;line-height:%?48?%;margin:%?24?% %?24?% 0 %?24?%}.marketing .block[data-v-b0df3b32]{position:relative}.marketing .block uni-image[data-v-b0df3b32]{width:%?12?%;height:%?22?%;position:absolute;right:0}.marketing .block .bd-name[data-v-b0df3b32]{margin-right:%?26?%;font-size:%?26?%;color:#999}.big-box[data-v-b0df3b32]{overflow:hidden;margin-right:%?10?%}.box[data-v-b0df3b32]{border:%?1?% solid;border-radius:%?4?%;position:relative;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;padding:0 %?12?%;font-size:%?20?%;height:%?30?%;line-height:%?32?%}.box .left[data-v-b0df3b32],.box .right[data-v-b0df3b32]{width:%?10?%;height:%?10?%;border-radius:50%;position:absolute;z-index:1;top:50%;border:%?1?% solid;background-color:#fff}.box .left[data-v-b0df3b32]{left:0;-webkit-transform:translate(-51%,-50%);-ms-transform:translate(-51%,-50%);transform:translate(-51%,-50%)}.box .right[data-v-b0df3b32]{right:0;-webkit-transform:translate(51%,-50%);-ms-transform:translate(51%,-50%);transform:translate(51%,-50%)}.model[data-v-b0df3b32]{height:80vh;width:%?750?%}.model .f-top[data-v-b0df3b32]{height:%?105?%;border-bottom:%?1?% solid #e2e2e2;padding-left:%?24?%;background-color:#fff}.model .f-top .f-image[data-v-b0df3b32]{width:%?78?%;height:%?78?%;padding:%?24?%}.model .f-top .f-image .f-img[data-v-b0df3b32]{width:%?30?%;height:%?30?%}.model .f-scroll[data-v-b0df3b32]{height:calc(80vh - %?105?%);width:100%;background-color:#f7f7f7}.model .f-scroll .f-scroll-content[data-v-b0df3b32]{padding:0 %?24?%;height:%?995?%;width:100%}.model .f-scroll .f-item[data-v-b0df3b32]{width:%?702?%;height:%?272?%;border:%?1?% solid #cfcfcf;margin-top:%?17?%;border-radius:%?14?%;background-color:#fff}.model .f-scroll .f-item[data-v-b0df3b32]:last-child{margin-bottom:%?24?%}.model .f-scroll .f-item-top[data-v-b0df3b32]{height:%?159?%;position:relative}.model .f-scroll .f-item-top>uni-image[data-v-b0df3b32]{height:%?159?%;width:100%}.model .f-scroll .f-item-top>uni-view[data-v-b0df3b32]{position:absolute;top:0;width:%?702?%;height:%?159?%;padding:0 %?24?%;color:#fff}.model .f-scroll .f-item-top .dir-left-nowrap>uni-button[data-v-b0df3b32]{width:%?161?%;height:%?56?%;line-height:%?56?%;padding:0;border:none;margin:0;border-radius:%?28?%;background-color:#fff;font-size:%?26?%;text-align:center}.model .f-scroll .f-item-top .f-text-content[data-v-b0df3b32]{padding-bottom:%?25?%}.model .f-scroll .f-item-top .f-big-text-dis uni-text[data-v-b0df3b32]{line-height:1}.model .f-scroll .f-item-top .f-big-text-dis uni-text[data-v-b0df3b32]:first-child{font-size:%?56?%;font-weight:700}.model .f-scroll .f-item-top .f-big-text-dis uni-text[data-v-b0df3b32]:last-child{font-size:%?34?%;margin-left:%?14?%}.model .f-scroll .f-item-top .f-small-text[data-v-b0df3b32]{font-size:%?24?%;margin-left:%?27?%}.model .f-scroll .f-item-top .f-big-text-pri uni-text[data-v-b0df3b32]{line-height:1}.model .f-scroll .f-item-top .f-big-text-pri uni-text[data-v-b0df3b32]:first-child{font-size:%?27?%}.model .f-scroll .f-item-top .f-big-text-pri uni-text[data-v-b0df3b32]:last-child{font-size:%?56?%;font-weight:700}.model .f-scroll .f-item-bottom[data-v-b0df3b32]{height:%?111?%;padding:%?24?%}.model .f-scroll .f-item-bottom uni-text[data-v-b0df3b32]{font-size:%?22?%;color:#545454}body.?%PAGE?%[data-v-b0df3b32]{background:#f7f7f7}",""])},f8d5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=p(a("a34a")),i=a("2f62"),r=p(a("12b6")),n=p(a("6132")),d=p(a("f0dd")),s=p(a("0e01")),f=p(a("11b2")),c=p(a("8639")),u=p(a("4c29")),b=p(a("de37")),l=p(a("3e70")),g=p(a("94701"));function p(t){return t&&t.__esModule?t:{default:t}}function v(t,e,a,o,i,r,n){try{var d=t[r](n),s=d.value}catch(f){return void a(f)}d.done?e(s):Promise.resolve(s).then(o,i)}function h(t){return function(){var e=this,a=arguments;return new Promise(function(o,i){var r=t.apply(e,a);function n(t){v(r,o,i,n,d,"next",t)}function d(t){v(r,o,i,n,d,"throw",t)}n(void 0)})}}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,o)}return a}function _(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(a,!0).forEach(function(e){w(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function w(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var k={name:"goods",data:function(){return{showClose:!1,is_open:!1,goods:{id:"",name:"",cover_pic:"",price:""},posterConfig:this.$api.exchange.poster_config,posterGenerate:this.$api.exchange.poster_generate,url:"",is_vip:!1,is_vip_card_user:0,show:!1,list:[],goods_id:-1,loading:!1,first:!0,discount:null,flash_sale:null,full_reduce:null}},onLoad:function(t){var e=this;this.goods_id=+t.goods_id,this.posterConfig=this.posterConfig+"&goods_id="+this.goods_id,this.posterGenerate=this.posterGenerate+"&goods_id="+this.goods_id,this.$showLoading({type:"global",text:"加载中..."}),this.request({url:this.$api.exchange.detail,data:{id:this.goods_id}}).then(function(t){if(t){e.first=!1;var a=t.goods;e.goods=a,e.loading=!0,e.url="".concat(e.$api.goods.poster,"&goods_id=").concat(e.goods.id),e.goods.vip_card_appoint.discount&&(e.is_vip=!0,e.discount=e.goods.vip_card_appoint.discount),e.full_reduce=a.goods_activity.full_reduce,e.flash_sale=e.goods.plugin_extra.flash_sale,e.is_vip_card_user=e.goods.vip_card_appoint.is_vip_card_user,e.hShareAppMessage(),e.$hideLoading()}})},onShow:function(){var t=this;if(this.showClose=!1,setTimeout(function(){t.showClose=!0}),this.first)return!1;this.$showLoading(),this.$nextTick(function(){t.request({url:t.$api.exchange.detail,data:{id:t.goods_id}}).then(function(e){var a=e.goods;t.goods=a,t.loading=!0,t.full_reduce=a.goods_activity.full_reduce,t.url="".concat(t.$api.goods.poster,"&goods_id=").concat(t.goods.id),t.goods.vip_card_appoint.discount&&(t.is_vip=!0,t.discount=t.goods.vip_card_appoint.discount),t.flash_sale=t.goods.plugin_extra.flash_sale,t.is_vip_card_user=t.goods.vip_card_appoint.is_vip_card_user,t.$hideLoading()})})},computed:_({},(0,i.mapState)("gConfig",{iphone:function(t){return t.iphone},iphoneHeight:function(t){return t.iphoneHeight}}),{},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,i.mapState)({mall:function(t){return t.mallConfig.mall},userInfo:function(t){return t.user.info}}),{themeObject:function(){return{back:this.getTheme+"-m-back "+this.getTheme,backO:this.getTheme+"-m-back-o "+this.getTheme,theme:this.getTheme,color:this.getTheme+"-m-text "+this.getTheme,sBack:this.getTheme+"-s-back "+this.getTheme}}}),methods:{hShareAppMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.$shareAppMessage({path:"/plugins/exchange/goods/goods",title:this.goods.app_share_title?this.goods.app_share_title:this.goods.name,imageUrl:this.goods.app_share_pic?this.goods.app_share_pic:"",params:{goods_id:this.goods.id}},t)},getMall:function(t){this.is_open=1==t.is_open},toExchange:function(){var t=[];for(var e in this.goods.attr[0].attr_list)t.push({attr_id:this.goods.attr[0].attr_list[e].attr_id,attr_group_id:this.goods.attr[0].attr_list[e].attr_group_id});var a=[{mch_id:0,goods_list:[{id:this.goods.id,attr:t,num:1,cat_id:0,goods_attr_id:this.goods.attr[0].id}]}],o="/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify(a));o+="&preview_url=".concat(encodeURIComponent(this.$api.exchange.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.exchange.order_submit),"&plugin=exchange"),uni.navigateTo({url:o})},request:function(){var t=h(o.default.mark(function t(e){var a,i,r;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.url,i=e.data,t.next=3,this.$request({url:a,data:i});case 3:if(r=t.sent,0!==r.code){t.next=8;break}return t.abrupt("return",r.data);case 8:uni.showModal({title:"提示",content:r.msg,showCancel:!1,success:function(t){uni.navigateBack()}});case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),setCoupon:function(t){this.$set(this.goods.goods_coupon_center[t],"is_receive",1)}},components:{"app-banner":r.default,appClose:d.default,appGoodsFullReduce:n.default,bdInfo:s.default,bdCoupon:f.default,bdXbc:c.default,bdKb:u.default,bdHc:b.default,bdDetail:l.default,bdComments:g.default}};e.default=k},fe19:function(t,e,a){"use strict";var o=a("0855c"),i=a.n(o);i.a},fe55:function(t,e,a){"use strict";a.r(e);var o=a("91f1"),i=a.n(o);for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);e["default"]=i.a}}]);