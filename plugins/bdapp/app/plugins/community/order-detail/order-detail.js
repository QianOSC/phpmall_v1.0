(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/community/order-detail/order-detail"],{"1a8e":function(t,e,i){"use strict";i.r(e);var n=i("6fc8"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"6fc8":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach(function(e){r(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=function(){return i.e("plugins/community/components/app-head").then(i.bind(null,"d0d3"))},c={data:function(){return{detail:{profit_price:"",total_price:"",total_goods_price:"",total_goods_original_price:"",created_at:"",order_no:"",pay_time:"0000-00-00 00:00:00",send_time:"0000-00-00 00:00:00",confirm_time:"0000-00-00 00:00:00",sale_time:"0000-00-00 00:00:00"},d:"",h:"",m:"",s:"",windowHeight:0,timeInterval:null,showQr:!1,is_user:!1,show:!1,iphone_x:!1}},components:{appHead:s},computed:a({},(0,n.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,n.mapState)({userInfo:function(t){return t.user.info},adminImg:function(t){return t.mallConfig.__wxapp_img.app_admin}})),methods:{cancel:function(e){var i=this;t.navigateTo({url:"/pages/order/refund/order-refund?id="+i.detail.id})},toBig:function(){if("已提货"==this.detail.status_text||"已完成"==this.detail.status_text)return!1;this.showQr=!this.showQr},toRemind:function(){this.show=!this.show},beConfirm:function(){var e=this;e.show=!1,t.showLoading({title:"确认提货中..."}),e.$request({url:e.is_user?e.$api.order.confirm:e.$api.community.confirm,data:{id:e.detail.id}}).then(function(i){t.hideLoading(),0==i.code?e.getDetail():t.showToast({title:i.msg,icon:"none",duration:1e3})})},orderPay:function(e){var i=this;i.$showLoading(),i.$request({url:i.$api.order.list_pay_data,data:{id:this.detail.id}}).then(function(e){i.$hideLoading(),0===e.code&&i.$payment.pay(e.data.id).then(function(){t.redirectTo({url:"/plugins/community/order/order?is_user=1"})}).catch(function(e){t.showModal({title:"",content:e.errMsg,showCancel:!1})})}).catch(function(){i.$hideLoading()})},copy:function(){t.setClipboardData({data:this.detail.order_no,success:function(){t.hideToast(),t.getClipboardData({success:function(){t.showToast({title:"复制成功",duration:1e3})}})}})},tel:function(){var e=this.detail.mobile;this.is_user&&(e=this.detail.middleman_info.mobile),t.makePhoneCall({phoneNumber:e})},getDetail:function(){var e=this;e.$showLoading({type:"global",text:"加载中..."}),e.$request({url:e.is_user?e.$api.community.order_detail:e.$api.community.middle_detail,data:{id:this.id},method:"post"}).then(function(i){if(t.hideLoading(),e.$hideLoading(),0===i.code){e.detail=i.data.detail,e.getTime(e.detail.cancel_time_stamp);var n=+e.detail.cancel_time_stamp-1;n>0&&(e.timeInterval=setInterval(function(){n--,n<0?(clearInterval(e.timeInterval),e.getDetail()):e.getTime(n)},1e3))}else t.showToast({title:i.msg,icon:"none",duration:1e3}),"该订单您无权确认"==i.msg&&setTimeout(function(){t.redirectTo({url:"/pages/index/index"})},1e3)}).catch(function(i){t.hideLoading(),e.$hideLoading()})},getTime:function(t){t>86399?(this.d=Math.floor(t/86400),t-=86400*this.d):this.d=0,t>3599?(this.h=Math.floor(t/3600),this.h<10&&(this.h="0"+this.h),t-=3600*this.h):this.h="00",t>59?(this.m=Math.floor(t/60),this.m<10&&(this.m="0"+this.m),t-=60*this.m):this.m="00",t<60&&(this.s=t,this.s<10&&(this.s="0"+this.s))}},onHide:function(){clearInterval(this.timeInterval)},onUnload:function(){clearInterval(this.timeInterval)},onLoad:function(e){var i=this;1==e.is_user&&(i.is_user=!0),t.getSystemInfo({success:function(t){i.windowHeight=t.windowHeight,(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),i.id=e.id,i.getDetail()}};e.default=c}).call(this,i("5486")["default"])},cc81:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},cf8b:function(t,e,i){"use strict";var n=i("fa5c"),o=i.n(n);o.a},e62c:function(t,e,i){"use strict";i.r(e);var n=i("cc81"),o=i("1a8e");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("cf8b");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"f5135fa8",null);e["default"]=s.exports},fa5c:function(t,e,i){}},[["708a","common/runtime","common/vendor"]]]);