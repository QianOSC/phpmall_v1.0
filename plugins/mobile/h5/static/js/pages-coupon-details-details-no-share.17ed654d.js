(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon-details-details-no-share"],{"40f1":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("d799"));function n(t){return t&&t.__esModule?t:{default:t}}var o={name:"details-no-share",components:{appDetails:a.default},data:function(){return{type:2,id:0}},onLoad:function(t){t.person?this.type=2:this.type=1,this.id=t.id}};e.default=o},6430:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62"),n=o(i("409e"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(i,!0).forEach(function(e){c(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={name:"app-details",components:{appShareQrCode:n.default},props:{isShowShare:Boolean,couponId:{type:String,default:function(){return"0"}},type:{type:Number,default:function(){return 0}},detailList:{type:Object,default:function(){return null}}},data:function(){return{list:null,shareShow:!1}},computed:r({},(0,a.mapGetters)({userInfo:"user/info"})),watch:{detailList:function(){this.detailList&&(this.list=this.detailList)}},created:function(){this.list=this.detailList,this.couponId>0&&this.getList(this.couponId)},methods:{hShareAppMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.$shareAppMessage({title:this.list.name,imageUrl:"",path:"/pages/coupon/details/details",params:{id:this.list.id}},t)},getList:function(t){var e=this;e.$showLoading({type:"global",text:"加载中..."});var i=e.$api.coupon.detail,a={coupon_id:t};2===this.type&&(i=e.$api.coupon.user_coupon_detail,a={user_coupon_id:t}),e.$request({url:i,data:a}).then(function(t){e.$hideLoading(),0===t.code?e.list=t.data.list:uni.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(){e.$hideLoading()})},toGoods:function(){uni.navigateTo({url:this.list.page_url})},receive:function(t){var e=this,i=this;return 2!==this.type&&(!i.loading&&(i.loading=!0,uni.showLoading({title:"领取中..."}),void i.$request({url:1===i.type?i.$api.member.receive:i.$api.coupon.receive,data:{coupon_id:t}}).then(function(a){i.loading=!1,uni.hideLoading(),0===a.code?uni.showToast({title:a.msg,duration:1e3,mask:!0}):uni.showToast({title:a.msg,icon:"none",duration:1e3,mask:!0}),e.getList(t)}).catch(function(){uni.hideLoading(),i.$event.on(i.$const.EVENT_USER_LOGIN).then(function(){i.receive(t)})})))}},filters:{reservedNum:function(t){return Number(t)}}};e.default=u},"73bf":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.list?i("v-uni-view",{staticClass:"page"},[i("v-uni-view",[i("v-uni-view",{staticClass:"info-top"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.list.name))]),2==t.list.type?[i("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t._f("reservedNum")(t.list.sub_price)))])]:[i("v-uni-view",{staticClass:"price"},[t._v(t._s(t._f("reservedNum")(t.list.discount))+"折")])],t.isShowShare?i("v-uni-view",{staticClass:"share-img"},[i("v-uni-image",{attrs:{src:"/static/image/coupon/btn_share.png"},on:{click:function(e){e=t.$handleEvent(e),t.shareShow=!0}}}),i("v-uni-view",[i("app-share-qr-code",{attrs:{title:"生成优惠券海报","poster-url":"/pages/poster/poster?coupon_id="+t.list.id,"has-poster-nav":!0},on:{share:function(e){e=t.$handleEvent(e),t.hShareAppMessage(e)}},model:{value:t.shareShow,callback:function(e){t.shareShow=e},expression:"shareShow"}})],1)],1):t._e(),t.list.min_price>0?i("v-uni-view",[t._v("满"+t._s(t._f("reservedNum")(t.list.min_price))+"可用")]):i("v-uni-view",[t._v("无门槛使用")]),t.list.discount_limit?i("v-uni-view",[t._v("优惠上限:￥"+t._s(t._f("reservedNum")(t.list.discount_limit)))]):t._e(),4==t.list.appoint_type?i("v-uni-view",[i("v-uni-view",{staticClass:"scan-code"},[t._v("仅限当面付活动使用")])],1):t._e(),5==t.list.appoint_type?i("v-uni-view",[i("v-uni-view",{staticClass:"scan-code"},[t._v("仅限礼品卡使用")])],1):t._e(),1==t.list.status?i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.toGoods(e)}}},[i("v-uni-button",{class:["btn"],staticStyle:{"background-color":"#fff",color:"#ff4544",border:"1rpx solid #ff4544"}},[t._v("立即使用")])],1):0==t.list.status?i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.receive(t.list.id)}}},[i("v-uni-button",{class:["btn"],staticStyle:{color:"#fff",border:"1rpx solid #ff4544",background:"#ff4544"}},[t._v("立即领取")])],1):2==t.list.status?i("v-uni-button",{staticClass:"btn used"},[t._v("已使用")]):3==t.list.status?i("v-uni-button",{staticClass:"btn used"},[t._v("已过期")]):4==t.list.status?i("v-uni-button",{staticClass:"btn used"},[t._v("已领取")]):t._e()],2),i("v-uni-view",{staticClass:"line"},[i("v-uni-image",{attrs:{src:"./../image/line.png"}})],1),i("v-uni-view",{staticClass:"details"},[i("v-uni-view",{staticClass:"title"},[t._v("有效期")]),"2"==t.list.expire_type?i("v-uni-view",[t._v(t._s(t.list.begin_time)+" - "+t._s(t.list.end_time))]):i("v-uni-view",[t._v("领取后"+t._s(t.list.expire_day)+"天内有效")]),i("v-uni-view",{staticClass:"title"},[t._v("使用规则")]),"1"==t.list.appoint_type?i("v-uni-view",[t._v("本券仅限购买"),t._l(t.list.cat,function(e,a){return i("v-uni-text",{key:e.id},[t._v(t._s(e.name)),a!==t.list.cat.length-1?i("v-uni-text",[t._v("、")]):t._e()],1)}),t._v("分类下的商品。")],2):t._e(),"2"==t.list.appoint_type?i("v-uni-view",[t._v("本券仅限购买"),t._l(t.list.goods,function(e,a){return i("v-uni-text",{key:e.id},[t._v(t._s(e.name)),a!==t.list.goods.length-1?i("v-uni-text",[t._v("、")]):t._e()],1)}),t._v("。")],2):t._e(),"3"==t.list.appoint_type?i("v-uni-view",[t._v("本券全场通用。")]):t._e(),"4"==t.list.appoint_type?i("v-uni-view",[t._v("本券仅限当面付活动使用。")]):t._e(),"4"==t.list.appoint_type?i("v-uni-view",[t._v("本券仅限礼品卡使用。")]):t._e(),i("v-uni-view",{staticClass:"title"},[t._v("使用说明")]),i("v-uni-view",[i("v-uni-text",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.list.rule))])],1)],1)],1)],1):t._e()},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"80dc":function(t,e,i){var a=i("be67");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6ee9a92f",a,!0,{sourceMap:!1,shadowMode:!1})},8564:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-layout",[i("v-uni-view",[t.id?i("app-details",{attrs:{"coupon-id":t.id,"is-show-share":!1,type:t.type}}):t._e()],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"90d2":function(t,e,i){"use strict";var a=i("80dc"),n=i.n(a);n.a},be67:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-8c1c5a2a]{text-align:center}.font-weight[data-v-8c1c5a2a]{font-weight:700}.page-width[data-v-8c1c5a2a]{width:100%}.goods-hover-class[data-v-8c1c5a2a]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-8c1c5a2a]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-8c1c5a2a]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-8c1c5a2a]{width:100%}.u-hover-class[data-v-8c1c5a2a]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-8c1c5a2a]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page[data-v-8c1c5a2a]{height:100%;background-color:#d6b985;width:100%;padding:%?20?% 0;position:absolute}.info-top[data-v-8c1c5a2a]{background-color:#fff;margin:0 %?25?%;text-align:center;padding-top:%?60?%;padding-bottom:%?8?%;border-top-left-radius:%?25?%;border-top-right-radius:%?25?%;color:#353535;font-size:%?32?%;position:relative}.name[data-v-8c1c5a2a]{font-size:%?28?%;color:#666}.price[data-v-8c1c5a2a]{font-size:%?56?%;margin-top:%?28?%;margin-bottom:%?10?%}.scan-code[data-v-8c1c5a2a]{height:%?56?%;line-height:%?52?%;margin:%?35?% auto 0;color:#ff4544;font-size:%?30?%;border:none}.btn[data-v-8c1c5a2a]{height:%?56?%;line-height:%?52?%;width:%?240?%;margin:%?35?% auto 0;font-size:%?30?%;border-radius:%?28?%;border:%?2?% solid}.btn.used[data-v-8c1c5a2a]{background-color:#f7f7f7;color:#acacac;border:%?2?% solid #f7f7f7}.btn[data-v-8c1c5a2a]:after{border:0}.line[data-v-8c1c5a2a]{height:%?50?%;margin:%?-4?% %?25?% 0;background-color:#fff}.line uni-image[data-v-8c1c5a2a]{height:100%;width:100%}.details[data-v-8c1c5a2a]{background-color:#fff;margin:%?-4?% %?25?% 0;font-size:%?28?%;padding:%?25?% %?40?% %?65?%;border-bottom-left-radius:%?25?%;border-bottom-right-radius:%?25?%}.details .title[data-v-8c1c5a2a]{color:#b0b0b0;font-size:%?26?%;margin-bottom:%?25?%;margin-top:%?50?%}.scan-code[data-v-8c1c5a2a]{height:%?56?%;line-height:%?52?%;margin:%?35?% auto 0;color:#ff4544;font-size:%?30?%;border:none}.info-top .share-img[data-v-8c1c5a2a]{position:absolute;right:%?32?%;top:%?32?%;z-index:5;width:%?94?%;height:%?94?%}.info-top .share-img uni-image[data-v-8c1c5a2a]{width:100%;height:100%;display:block}body.?%PAGE?%[data-v-8c1c5a2a]{background:#f7f7f7}",""])},d0ed:function(t,e,i){"use strict";i.r(e);var a=i("6430"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},d2e4:function(t,e,i){"use strict";i.r(e);var a=i("40f1"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},d799:function(t,e,i){"use strict";i.r(e);var a=i("73bf"),n=i("d0ed");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("90d2");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"8c1c5a2a",null);e["default"]=r.exports},e264:function(t,e,i){"use strict";i.r(e);var a=i("8564"),n=i("d2e4");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"cd45e4c0",null);e["default"]=r.exports}}]);