(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-mch-mch-send-send"],{"1e56":function(e,t,i){var n=i("df88");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("01469689",n,!0,{sourceMap:!1,shadowMode:!1})},"5ffc":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("app-layout",[i("v-uni-view",[i("v-uni-view",{staticClass:"input-list"},[i("v-uni-view",{staticClass:"dir-left-nowrap input-item"},[i("v-uni-view",{staticClass:"label"},[e._v("快递公司")]),i("v-uni-view",{staticClass:"dir-right-nowrap cross-center",attrs:{width:"width:30%;"},on:{click:function(t){t=e.$handleEvent(t),e.toPick(t)}}},[i("v-uni-image",{staticClass:"to-more",attrs:{src:"/static/image/icon/arrow-right.png"}}),i("v-uni-text",[e._v(e._s(e.express))])],1)],1),i("v-uni-view",{staticClass:"dir-left-nowrap input-item",staticStyle:{position:"relative"}},[i("v-uni-view",{staticClass:"label"},[e._v("快递单号")]),i("v-uni-input",{staticClass:"express-no",model:{value:e.express_no,callback:function(t){e.express_no=t},expression:"express_no"}}),e.id>0?i("v-uni-text",{staticClass:"get",on:{click:function(t){t=e.$handleEvent(t),e.getExpressNo(t)}}},[e._v("获取面单")]):e._e()],1),i("v-uni-view",{staticClass:"dir-left-nowrap input-item"},[i("v-uni-view",{staticClass:"label"},[e._v("邮政编码")]),i("v-uni-input",{model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),i("v-uni-view",{staticClass:"dir-left-nowrap input-item"},[i("v-uni-view",{staticClass:"label"},[e._v("商家留言")]),i("v-uni-input",{model:{value:e.words,callback:function(t){e.words=t},expression:"words"}})],1)],1),i("v-uni-button",{staticClass:"address-bottom",on:{click:function(t){t=e.$handleEvent(t),e.saveAddress(t)}}},[e._v("确认发货")])],1),e.dialog?i("v-uni-view",{staticClass:"dialog"},[i("v-uni-view",{staticClass:"picker-list"},[i("v-uni-view",{staticClass:"main-between picker-header"},[i("v-uni-view",{on:{click:function(t){t=e.$handleEvent(t),e.toPick(2)}}},[e._v("取消")]),i("v-uni-view",{on:{click:function(t){t=e.$handleEvent(t),e.toPick(1)}}},[e._v("确定")])],1),i("v-uni-picker-view",{staticClass:"picker",attrs:{"indicator-style":"height: 36px;",value:[e.value]},on:{change:function(t){t=e.$handleEvent(t),e.bindChange(t)}}},[i("v-uni-picker-view-column",e._l(e.list,function(t){return i("v-uni-view",{key:t.id,staticClass:"pick-view"},[e._v(e._s(t.name))])}),1)],1)],1)],1):e._e()],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"80d0":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("2f62");function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(i,!0).forEach(function(t){o(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var r={data:function(){return{express_no:"",express:"",customer_name:"",code:"",words:"",list:[],dialog:!1,id:"",value:0,is_send:0,mch_id:0,express_id:0,order_refund_id:0}},computed:s({},(0,n.mapState)({userInfo:function(e){return e.user.info}})),methods:{bindChange:function(e){var t=e.detail.value[0];this.express=this.list[t].name},toPick:function(e){var t=this;1==e&&(t.customer_name="",t.list.forEach(function(e,i){t.list[i].name==t.express&&(t.value=i)})),t.express=t.list[t.value].name,t.dialog=!t.dialog},getExpressNo:function(){var e=this;uni.showLoading({title:"加载中..."}),e.$request({url:e.$api.mch.order_print,data:{express:e.express,code:e.code,mch_id:e.mch_id,order_id:e.id}}).then(function(t){uni.hideLoading(),0==t.code?e.express_no=t.data.Order.LogisticCode:uni.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(e){uni.hideLoading()})},getExpress:function(){var e=this;e.$showLoading({text:"加载中..."}),e.$request({url:e.$api.mch.express_list}).then(function(t){0==t.code?(e.list=t.data.list,e.is_send>0&&e.id>0?e.getList():(e.$hideLoading(),e.express=e.list[0].name)):uni.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},getList:function(){var e=this;e.$request({url:e.$api.mch.order_detail,data:{id:e.id,mch_id:e.mch_id}}).then(function(t){e.$hideLoading(),console.log(t),0==t.code?(e.express=t.data.detail.detailExpress[0].express?t.data.detail.detailExpress[0].express:e.list[0].name,t.data.detail.detailExpress[0].express_no&&(e.express_no=t.data.detail.detailExpress[0].express_no),t.data.detail.detailExpress[0].customer_name&&(e.customer_name=t.data.detail.detailExpress[0].customer_name),e.express_id=t.data.detail.detailExpress[0].id,e.code="",e.words=t.data.detail.detailExpress[0].words,t.data.detail.detailExpress[0].code>0&&(e.code=t.data.detail.detailExpress[0].code)):uni.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},saveAddress:function(e){var t=this;if(t.express_no)if(uni.showLoading({title:"提交中..."}),t.id>0){var i={is_express:1,order_id:t.id,express_no:t.express_no,mch_id:t.mch_id,express:t.express,code:t.code,customer_name:t.customer_name,words:t.words};t.express_id&&(i.express_id=t.express_id),t.$request({url:t.$api.mch.order_send,method:"POST",data:i}).then(function(e){if(uni.hideLoading(),0==e.code){var i=e.msg;2==t.is_send&&(i="修改成功"),uni.showToast({title:i,duration:1e3,type:"success",mask:!1}),setTimeout(function(){uni.navigateBack()},500)}else uni.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){uni.hideLoading(),uni.showToast({title:e,icon:"none",duration:1e3})})}else{var n={is_express:1,type:2,is_agree:1,mch_id:t.mch_id,order_refund_id:t.order_refund_id,express_no:t.express_no,express:t.express,merchant_remark:t.words};n.express_id&&(n.express_id=t.express_id),t.$request({url:t.$api.mch.refund_handle,method:"POST",data:n}).then(function(e){if(uni.hideLoading(),0==e.code){var t=e.msg;uni.showToast({title:t,duration:1e3,type:"success",mask:!1}),setTimeout(function(){uni.navigateBack()},500)}else uni.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){uni.hideLoading(),uni.showToast({title:e,icon:"none",duration:1e3})})}else uni.showToast({title:"快递单号不得为空",icon:"none",duration:1e3})}},onLoad:function(e){var t=this;e.id>0&&(t.id=e.id),t.mch_id=e.mch_id,e.order_refund_id>0&&(t.order_refund_id=e.order_refund_id),t.getExpress(),e.is_send>0&&(t.is_send=e.is_send)}};t.default=r},"9f28":function(e,t,i){"use strict";var n=i("1e56"),a=i.n(n);a.a},df88:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".text-center[data-v-284ba682]{text-align:center}.font-weight[data-v-284ba682]{font-weight:700}.page-width[data-v-284ba682]{width:100%}.goods-hover-class[data-v-284ba682]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-284ba682]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-284ba682]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-284ba682]{width:100%}.u-hover-class[data-v-284ba682]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-284ba682]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.picker[data-v-284ba682]{width:100%;height:%?440?%}.pick-view[data-v-284ba682]{line-height:%?72?%;text-align:center;color:#ff4544;font-size:%?32?%}.express-no[data-v-284ba682]{padding-right:%?180?%}.address-bottom[data-v-284ba682]{width:%?702?%;height:%?80?%;line-height:%?80?%;border-radius:%?40?%;padding:0;text-align:center;margin:%?40?% auto;color:#fff;z-index:7;font-size:%?28?%;background-color:#ff4544}.to-more[data-v-284ba682]{height:%?24?%;width:%?12?%;margin-left:%?10?%}.input-list[data-v-284ba682]{background-color:#fff;padding-left:%?30?%}.input-item[data-v-284ba682]{border-top:%?1?% solid #eee;padding:%?24?% %?30?% %?24?% 0;height:%?96?%;font-size:%?28?%;color:#495060}.input-item[data-v-284ba682]:first-of-type{border-top:0}.input-item .label[data-v-284ba682]{width:%?200?%;height:%?48?%;line-height:%?48?%}.input-item uni-input[data-v-284ba682]{width:%?550?%;height:%?48?%;line-height:%?48?%;font-size:%?28?%}.input-item uni-view[data-v-284ba682]{width:%?550?%;height:%?48?%;line-height:%?48?%;font-size:%?28?%}.dialog[data-v-284ba682]{position:fixed;height:100%;width:100%;bottom:%?96?%;left:0;z-index:10;background-color:rgba(0,0,0,.3)}.picker-list[data-v-284ba682]{background-color:#fff;padding-top:%?20?%;position:fixed;bottom:%?96?%;left:0;width:100%}.picker-header[data-v-284ba682]{padding:0 %?24?%;color:#ff4544;font-size:%?32?%}.get[data-v-284ba682]{width:%?160?%;height:%?48?%;line-height:%?48?%;text-align:center;border:%?1?% solid #ff4544;border-radius:%?24?%;position:absolute;top:%?20?%;right:%?24?%;display:block;color:#ff4544}body.?%PAGE?%[data-v-284ba682]{background:#f7f7f7}",""])},fd12:function(e,t,i){"use strict";i.r(t);var n=i("5ffc"),a=i("fdc6");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("9f28");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"284ba682",null);t["default"]=r.exports},fdc6:function(e,t,i){"use strict";i.r(t);var n=i("80d0"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a}}]);