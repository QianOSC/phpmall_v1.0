(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-integral_mall-coupon-coupon"],{3813:function(t,e,n){var o=n("8b75");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("c8ceea72",o,!0,{sourceMap:!1,shadowMode:!1})},5079:function(t,e,n){"use strict";n.r(e);var o=n("8560"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=i.a},7320:function(t,e,n){"use strict";n.r(e);var o=n("d6b2"),i=n("5079");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("d90d");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"c72b338c",null);e["default"]=u.exports},8560:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"about",data:function(){return{coupon:{coupon:{min_price:"",rule:""}},success:!1,lose:!1,iphone_x:!1,exchangeCoupon:!1,current:"wechat"}},computed:c({},(0,o.mapState)({integralImg:function(t){return t.mallConfig.plugin.integral_mall},mall:function(t){return t.mallConfig.mall}})),onLoad:function(t){var e=this,n=t.id;e.$showLoading({type:"global",text:"加载中..."}),e.getList(n),uni.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(e.iphone_x=!0)}})},methods:{close:function(){this.success=!1,this.lose=!1},toList:function(){this.success=!1,uni.navigateTo({url:"/pages/coupon/index/index"})},getList:function(t){var e=this;e.$request({url:e.$api.integral_mall.detail,data:{id:t}}).then(function(t){e.$hideLoading(),0==t.code?e.coupon=t.data.detail:uni.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},submit:function(){var t=this,e=t.coupon.id;t.exchangeCoupon=!1,null!=t.userInfo&&t.userInfo.integral<t.choose.integral_num?uni.showToast({title:"积分不足",icon:"none",duration:1e3}):(uni.showLoading({mask:!0,title:"领取中..."}),t.$request({url:t.$api.integral_mall.coupon_submit,data:{id:e},method:"post"}).then(function(e){if(0==e.code){var n=e.data.queue_id,o=e.data.token;t.getPayOrderId(n,o)}else uni.hideLoading(),uni.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(t){uni.hideLoading()}))},getPayOrderId:function(t,e){var n=this;this.$request({url:this.$api.integral_mall.coupon_pay,data:{queue_id:t,token:e}}).then(function(o){0===o.code?o.data.retry&&1===o.data.retry?n.getPayDataTimer=setTimeout(function(){n.getPayOrderId(t,e)},1e3):(uni.hideLoading(),n.pay(o.data.id)):(n.exchangeCoupon=!1,uni.hideLoading(),uni.showModal({title:"提示",content:o.msg,showCancel:!1}))}).catch(function(t){n.exchangeCoupon=!1,uni.hideLoading(),uni.showModal({title:"提示",content:t.errMsg,showCancel:!1})})},pay:function(t){var e=this;this.$payment.pay(t).then(function(t){e.success=!0}).catch(function(t){uni.showToast({title:"支付失败",icon:"none",duration:1e3})})}}};e.default=u},"8b75":function(t,e,n){var o=n("b041");e=t.exports=n("2350")(!1),e.push([t.i,".text-center[data-v-c72b338c]{text-align:center}.font-weight[data-v-c72b338c]{font-weight:700}.page-width[data-v-c72b338c]{width:100%}.goods-hover-class[data-v-c72b338c]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-c72b338c]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-c72b338c]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-c72b338c]{width:100%}.u-hover-class[data-v-c72b338c]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-c72b338c]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.nav[data-v-c72b338c]{height:%?270?%;width:100%;color:#353535;font-size:15px;background-image:url("+o(n("e3a6"))+");background-size:100% 100%;padding:0 %?90?%}.nav>uni-view[data-v-c72b338c]{width:50%}.price[data-v-c72b338c]{height:%?270?%;line-height:%?270?%;font-size:22px;text-align:center}.price uni-text[data-v-c72b338c]{font-size:40px}.name[data-v-c72b338c]{font-size:%?40?%;width:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.need-price[data-v-c72b338c]{height:%?140?%;line-height:%?140?%;padding-left:%?24?%;font-size:16px;color:#353535;border-bottom:%?1?% solid #ededed}.need-price uni-text[data-v-c72b338c]{font-size:24px}.about[data-v-c72b338c]{padding:%?40?% %?24?%;color:#666;font-size:15px}.title[data-v-c72b338c]{font-size:15px;margin-bottom:%?30?%;color:#353535}.title uni-view[data-v-c72b338c]{display:inline-block;height:%?20?%;width:%?6?%;margin-right:%?8?%;background-color:#ff4544}.content[data-v-c72b338c]{padding-bottom:%?130?%}.exchange[data-v-c72b338c]{z-index:10;border-top:%?1?% solid #e2e2e2;position:fixed;bottom:0;left:0;right:0;background-color:#fff;height:%?120?%}.exchange.iphone_x[data-v-c72b338c]{padding-bottom:%?50?%;height:%?170?%}.coupon-exchange[data-v-c72b338c]{margin-top:%?20?%;margin-left:5%;height:%?80?%;line-height:%?80?%;width:90%;border-radius:%?40?%;background-color:#ff4544;text-align:center;font-size:16px;color:#fff;padding:0}.coupon-exchange[data-v-c72b338c]:after{border:0}.dialog-bg[data-v-c72b338c]{position:fixed;left:0;top:0;height:100%;width:100%;background-color:rgba(0,0,0,.3)}.dialog[data-v-c72b338c]{width:%?574?%;margin:0 auto;background-color:#fff;position:fixed;top:25%;left:0;right:0;border-radius:%?16?%}.close[data-v-c72b338c]{height:%?30?%;width:%?30?%;position:absolute;right:%?22?%;top:%?22?%;z-index:10}.lose[data-v-c72b338c]{padding:%?88?% 0 %?88?% %?90?%;height:%?310?%;font-size:15px;color:#353535}.lose-img[data-v-c72b338c]{height:%?134?%;width:%?124?%;margin-right:%?48?%;display:block;float:left}.lose-title[data-v-c72b338c]{font-size:23px;font-weight:500;margin:%?15?% 0}.success[data-v-c72b338c]{height:%?350?%;background-color:#fff;text-align:center;padding-top:%?150?%;font-size:18px;color:#353535;border-radius:%?16?%}.success-head[data-v-c72b338c]{height:%?332?%;width:%?574?%;position:absolute;top:%?-215?%;left:0}.to-card[data-v-c72b338c],.to-use[data-v-c72b338c]{margin-top:%?44?%;height:%?64?%;border-radius:%?32?%;line-height:%?64?%;width:%?228?%;font-size:16px}.to-card[data-v-c72b338c]:after,.to-use[data-v-c72b338c]:after{border:0}.to-card[data-v-c72b338c]{background-color:#fff;color:#353535;border:%?1?% solid #999}.to-use[data-v-c72b338c]{background-color:#ff4544;color:#fff}.success-btn[data-v-c72b338c]{padding:0 %?39?%}.dialog-tip[data-v-c72b338c]{position:fixed;top:%?400?%;left:0;right:0;padding-bottom:%?88?%;width:%?640?%;margin:0 auto;z-index:221;background-color:#fff;border-radius:10px;text-align:center;font-size:%?30?%}.dialog-msg[data-v-c72b338c]{margin:0 %?50?% %?50?%}.dialog-title[data-v-c72b338c]{margin:%?40?% auto %?35?%}.dialog-btn[data-v-c72b338c]{height:%?88?%;width:%?640?%;border-top:%?1?% solid #e2e2e2;line-height:%?88?%;position:absolute;bottom:0;left:0}.dialog-close[data-v-c72b338c],.dialog-submit[data-v-c72b338c]{width:50%}.line[data-v-c72b338c]{height:%?44?%;margin-top:%?22?%;width:%?1?%;background-color:#e2e2e2}.dialog-submit[data-v-c72b338c]{color:#ff4544}.nav .right[data-v-c72b338c]{height:%?270?%;width:%?320?%;padding-left:%?10?%;font-size:%?26?%}body.?%PAGE?%[data-v-c72b338c]{background:#f7f7f7}",""])},d6b2:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-layout",[n("v-uni-view",{staticClass:"nav main-center cross-center"},[2==t.coupon.coupon.type?[n("v-uni-view",{staticClass:"price"},[t._v("￥"),t.coupon.coupon.sub_price>99999?n("v-uni-text",{staticStyle:{"font-size":"22px"}},[t._v(t._s(t.coupon.coupon.sub_price))]):t.coupon.coupon.sub_price>9999?n("v-uni-text",{staticStyle:{"font-size":"26px"}},[t._v(t._s(t.coupon.coupon.sub_price))]):t.coupon.coupon.sub_price>999?n("v-uni-text",{staticStyle:{"font-size":"32px"}},[t._v(t._s(t.coupon.coupon.sub_price))]):t.coupon.coupon.sub_price>99?n("v-uni-text",{staticStyle:{"font-size":"36px"}},[t._v(t._s(t.coupon.coupon.sub_price))]):n("v-uni-text",[t._v(t._s(t.coupon.coupon.sub_price))])],1)]:t._e(),1==t.coupon.coupon.type?[n("v-uni-view",{staticClass:"price"},[n("v-uni-text",[t._v(t._s(t.coupon.coupon.discount))]),t._v("折")],1)]:t._e(),n("v-uni-view",{staticClass:"right dir-top-nowrap main-center"},[n("v-uni-text",{staticClass:"name"},[t._v(t._s(t.coupon.coupon.name))]),n("v-uni-text",[t._v("满"+t._s(t.coupon.coupon.min_price)+"元可用")]),t.coupon.coupon.discount_limit?n("v-uni-text",[t._v("优惠上限:￥"+t._s(t.coupon.coupon.discount_limit))]):t._e()],1)],2),n("v-uni-view",{staticClass:"need-price"},[n("v-uni-text",[t._v(t._s(t.coupon.integral_num))]),t._v("积分"),t.coupon.price>0?n("v-uni-text",{staticStyle:{"font-size":"16px"}},[t._v("+￥")]):t._e(),t.coupon.price>0?n("v-uni-text",[t._v(t._s(t.coupon.price))]):t._e()],1),n("v-uni-view",{staticClass:"about"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view"),n("v-uni-text",[t._v("优惠券说明")])],1),1==t.coupon.coupon.expire_type?n("v-uni-view",[t._v("优惠券有效期：兑换后"+t._s(t.coupon.coupon.expire_day)+"天")]):t._e(),2==t.coupon.coupon.expire_type?n("v-uni-view",[t._v("优惠券有效期："+t._s(t.coupon.coupon.begin_time)+"-"+t._s(t.coupon.coupon.end_time))]):t._e(),n("v-uni-view",[t._v("适用范围："),1==t.coupon.coupon.appoint_type?n("v-uni-text",[t._v("以下指定分类商品适用："),t._l(t.coupon.coupon.cat,function(e,o){return n("v-uni-text",{key:e.name},[0!=o?n("v-uni-text",[t._v("、")]):t._e(),n("v-uni-text",[t._v(t._s(e.name))])],1)})],2):t._e(),2==t.coupon.coupon.appoint_type?n("v-uni-text",t._l(t.coupon.coupon.goods,function(e,o){return n("v-uni-text",{key:e.name},[0!=o?n("v-uni-text",[t._v("、")]):t._e(),n("v-uni-text",[t._v(t._s(e.name))])],1)}),1):t._e(),3==t.coupon.coupon.appoint_type?n("v-uni-text",[t._v("全场通用")]):t._e(),4==t.coupon.coupon.appoint_type?n("v-uni-text",[t._v("仅限当面付活动使用")]):t._e()],1),n("v-uni-view",{staticClass:"content"},[t._v("使用说明："+t._s(t.coupon.coupon.rule))])],1),n("v-uni-view",{class:["exchange",t.iphone_x?"iphone_x":""],on:{click:function(e){e=t.$handleEvent(e),t.exchangeCoupon=!0}}},[n("v-uni-view",{staticClass:"coupon-exchange"},[t._v("立即兑换")])],1),t.exchangeCoupon?n("v-uni-view",{staticClass:"dialog-bg"},[n("v-uni-view",{staticClass:"dialog-tip"},[n("v-uni-view",{staticClass:"dialog-title"},[t._v("提示")]),n("v-uni-view",{staticClass:"dialog-msg"},[t._v("确定使用"),t.coupon.integral_num>0?n("v-uni-text",[n("v-uni-text",{staticStyle:{color:"#ff4544"}},[t._v(t._s(t.coupon.integral_num))]),t._v("积分")],1):t._e(),t.coupon.price>0?n("v-uni-text",[t.coupon.integral_num>0?n("v-uni-text",[t._v("与")]):t._e(),n("v-uni-text",{staticStyle:{color:"#ff4544"}},[t._v(t._s(t.coupon.price))]),t._v("元")],1):t._e(),t._v("兑换此优惠券？")],1),n("v-uni-view",{staticClass:"dialog-btn main-center"},[n("v-uni-view",{staticClass:"dialog-close",on:{click:function(e){e=t.$handleEvent(e),t.exchangeCoupon=!1}}},[t._v("取消")]),n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"dialog-submit",on:{click:function(e){e=t.$handleEvent(e),t.submit(e)}}},[t._v("确认")])],1)],1)],1):t._e(),t.lose||t.success?n("v-uni-view",{staticClass:"dialog-bg"},[n("v-uni-view",{staticClass:"dialog"},[n("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.close(e)}}},[n("v-uni-image",{staticClass:"close",attrs:{src:"/static/image/icon/icon-close.png"}})],1),t.lose?n("v-uni-view",{staticClass:"lose"},[n("v-uni-image",{staticClass:"lose-img",attrs:{src:"./../image/lose.png"}}),n("v-uni-view",{staticClass:"lose-title"},[t._v("兑换失败！")]),n("v-uni-view",[t._v("当前积分不足")])],1):t._e(),t.success?n("v-uni-view",{staticClass:"success"},[n("v-uni-image",{staticClass:"success-head",attrs:{src:t.integralImg.app_image.success}}),n("v-uni-view",[t._v("恭喜您，兑换成功！")]),n("v-uni-view",{staticClass:"main-between success-btn"},[n("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.toList(e)}}},[n("v-uni-button",{staticClass:"to-card"},[t._v("去卡券包")])],1),n("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.toList(e)}}},[n("v-uni-button",{staticClass:"to-use"},[t._v("立即使用")])],1)],1)],1):t._e()],1)],1):t._e()],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},d90d:function(t,e,n){"use strict";var o=n("3813"),i=n.n(o);i.a},e3a6:function(t,e){t.exports="data:image/png;base64,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"}}]);