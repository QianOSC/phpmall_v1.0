(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/refund/order-refund"],{1054:function(e,t,n){},"142b":function(e,t,n){"use strict";var i=n("1054"),a=n.n(i);a.a},"3ceb":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return n.e("components/page-component/app-order-goods-info/app-order-goods-info").then(n.bind(null,"1602"))},a=function(){return n.e("components/basic-component/app-upload-image/app-upload-image").then(n.bind(null,"798e"))},o=function(){return n.e("components/page-component/app-order-banner/app-order-banner").then(n.bind(null,"ccb8"))},c=function(){return n.e("pages/order/components/app-select").then(n.bind(null,"477f"))},r={components:{appOrderGoodsInfo:i,appUploadImage:a,appOrderBanner:o,"app-select":c},data:function(){return{orderDetail:{},form:{image_list:[],remark:"",mobile:"",cause:""},maxNum:6,cause:{list:[],visible:!1,index:1},isShow:!1}},methods:{getOrderDetail:function(){var t=this;t.$showLoading(),t.$request({url:t.$api.order.detail,data:{id:t.order_id}}).then(function(n){t.$hideLoading(),t.isShow=!0,0===n.code?(t.orderDetail=n.data.detail,t.setPageTitle()):e.showModal({title:"",content:n.msg,showCancel:!1})}).catch(function(){t.$hideLoading()})},formSubmit:function(){var t=this;t.form.cause?e.showModal({title:"提示",content:"确认申请退款？",success:function(e){e.confirm&&t.$subscribe(t.orderDetail.template_message_list).then(function(e){t.cancelAction()}).catch(function(e){t.cancelAction()})}}):e.showModal({title:"",content:"请选择退款原因",showCancel:!1})},imageEvent:function(e){this.form.image_list=e.imageList},bindPickerChange:function(e){e.is_modal_confirm||(this.cause.index=e.index,this.form.cause=this.cause.list[this.cause.index]),this.cause.visible=!1},cancelAction:function(){var t=this;e.showLoading({title:"取消中"}),t.$request({url:t.$api.order.cancel,data:{id:t.orderDetail.id,cancel_data:JSON.stringify(t.form)}}).then(function(n){e.hideLoading(),0===n.code?"advance"===t.sign?t.$request({url:t.$api.advance.order_detail,method:"get",data:{id:t.order_id}}).then(function(n){0===n.code?t.orderDetail=n.data.detail:e.showModal({title:"",content:n.msg,showCancel:!1})}):t.getOrderDetail():e.showModal({title:"",content:n.msg,showCancel:!1})}).catch(function(){e.hideLoading()})},cancelCauseList:function(){var t=this;t.$request({url:t.$api.order.cancel_cause_list}).then(function(n){0===n.code?t.cause.list=n.data.list:e.showModal({title:"",content:n.msg,showCancel:!1})}).catch(function(){t.$hideLoading()})},cancelApply:function(){var t=this;e.showLoading({title:"取消中"}),t.$request({url:t.$api.order.cancel_apply,method:"post",data:{id:t.order_id}}).then(function(t){e.hideLoading(),0===t.code?e.navigateBack():e.showModal({title:"",content:t.msg,showCancel:!1})}).catch(function(){e.hideLoading()})},setPageTitle:function(){var t="申请退款";2==this.orderDetail.cancel_status&&(t="订单退款"),e.setNavigationBarTitle({title:t})},previewImage:function(t){var n=this.orderDetail.cancel_data.image_list;e.previewImage({current:n[t],urls:n})}},onLoad:function(e){this.order_id=e.id,this.getOrderDetail(),this.cancelCauseList()}};t.default=r}).call(this,n("f266")["default"])},4128:function(e,t,n){"use strict";n.r(t);var i=n("3ceb"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},af11:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.cause.visible=!0})},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},f9c0:function(e,t,n){"use strict";n.r(t);var i=n("af11"),a=n("4128");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("142b");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"309585a2",null);t["default"]=r.exports}},[["c20c","common/runtime","common/vendor"]]]);