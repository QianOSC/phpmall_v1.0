;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/app_admin/components/order-menu"],{"11be":function(e,t,i){"use strict";i.r(t);var n=i("c040"),s=i("51c0");for(var a in s)"default"!==a&&function(e){i.d(t,e,function(){return s[e]})}(a);i("a3c3");var d=i("2877"),o=Object(d["a"])(s["default"],n["a"],n["b"],!1,null,"77b43c04",null);t["default"]=o.exports},"3e8d":function(e,t,i){},"41b5":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"order-menu",props:{item:{type:Object},address:{type:Array},mobile:{type:String},hiddenRemark:{type:Boolean,default:function(){return!1}},status:{type:Number},num:{type:String}},data:function(){return{detail:{},isRefund:!1,noRefund:!1,changePrice:!1,cancelOrder:!1,callPhone:!1,notRefund:!1,isReason:!1,openAddress:!1,noAddress:!1,beRemark:!1,confirmOrder:!1,refundOnly:!1,cityRefund:!1,beToSend:!1,showRemark:!1,price:0,express:0,total:0,refund_price:0,addressId:"0",remark:"",about:""}},methods:{cancel:function(){this.item.showMobile?(this.item.showMobile=!1,this.$emit("change",this.item)):(this.about="",this.isRefund=!1,this.beToSend=!1,this.noRefund=!1,this.changePrice=!1,this.cancelOrder=!1,this.custom=!1,this.refundOnly=!1,this.cityRefund=!1,this.notRefund=!1,this.openAddress=!1,this.isReason=!1,this.confirmOrder=!1,this.addressId=0,this.beRemark=!1,this.confirmOrder=!1,this.remark=null)},toRefundOrder:function(e){this.$emit("to",e)},makeRemark:function(e){this.beRemark=!0,this.detail=e,e.seller_remark&&(this.remark=e.seller_remark)},toRemark:function(){var t=this;t.$request({url:t.$api.app_admin.sellerRemark,method:"post",data:{order_id:t.detail.id,seller_remark:t.remark}}).then(function(i){0===i.code?(t.detail.seller_remark=t.remark,t.cancel(),t.$emit("update",t.detail)):e.showToast({title:i.msg,icon:"none",duration:1e3})})},toRefundAdd:function(){this.noAddress=!1,e.navigateTo({url:"/pages/address/address?manual_btn_bg=admin&is_hide_default_btn=1&is_refund_address=1"})},toChangeAddress:function(t){this.beToSend=!1;var i=t.order_no?t.order_no:this.detail.order_no;e.navigateTo({url:"/pages/app_admin/change-add/change-add?order_no="+i})},toExpressInfo:function(t){1===t.detail.length&&t.detailExpress[0].express_no?e.navigateTo({url:"/pages/app_admin/express/express?id="+t.id+"&express="+t.detailExpress[0].express+"&express_no="+t.detailExpress[0].express_no+"&customer_name="+t.detailExpress[0].customer_name}):e.navigateTo({url:"/pages/order/express-list/express-list?order_id="+t.id})},call:function(){e.makePhoneCall({phoneNumber:this.item.mobile}),this.$emit("change","")},toConfirm:function(e){this.detail=e,this.confirmOrder=!this.confirmOrder},beOrderConfirm:function(){var t=this;t.$request({url:t.$api.app_admin.confirm,data:{order_id:t.detail.id},method:"post"}).then(function(i){t.$hideLoading(),0===i.code?(e.showToast({title:i.msg,duration:1e3,type:"success",mask:!1}),t.cancel(),setTimeout(function(e){t.$emit("update",0)},1e3)):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(){t.$hideLoading()})},toAgreeCancel:function(e){this.detail=e,this.isReason=!this.isReason,this.noRefund=!1},toCancelorder:function(e){this.detail=e,this.cancelOrder=!this.cancelOrder},cancelSubmit:function(){var t=this;e.showLoading({title:"加载中..."}),t.$request({url:t.$api.app_admin.cancel,data:{status:t.noRefund?2:1,remark:t.about,order_id:t.detail.id},method:"post"}).then(function(i){e.hideLoading(),0===i.code?(e.showToast({title:t.noRefund?"拒绝成功":"取消成功",duration:1e3,type:"success",mask:!1}),t.cancel(),setTimeout(function(e){t.$emit("update",0)},1e3)):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},toChange:function(e){this.detail=e,this.changePrice=!this.changePrice,this.price=e.total_goods_price,this.express=e.express_price,this.total="￥"+e.total_pay_price},priceInput:function(e){e.detail.value>-.01?this.total="￥"+(+e.detail.value+ +this.express).toFixed(2):this.total="数据有误"},expressInput:function(e){e.detail.value>-.01?this.total="￥"+(+e.detail.value+ +this.price).toFixed(2):this.total="数据有误"},submitChange:function(){var t=this;e.showLoading({title:"加载中..."}),this.price>-.01&&this.express>-.01?this.$request({url:this.$api.app_admin.update_price,data:{order_id:this.detail.id,total_price:this.price?this.price:0,express_price:this.express?this.express:0},method:"post"}).then(function(i){e.hideLoading(),0===i.code?(e.showToast({title:i.msg,duration:1e3,type:"success",mask:!1}),t.changePrice=!1,t.$emit("update",0)):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}):t.price&&"number"==typeof t.price?t.express&&"number"==typeof t.express||e.showToast({title:"运费必须大于等于0",icon:"none",duration:1e3}):e.showToast({title:"商品总价必须大于等于0",icon:"none",duration:1e3})},toSend:function(t){var i=this;i.detail=t,i.detail.status_cn?e.navigateTo({url:"/pages/app_admin/send/send?order_refund_id="+i.detail.id+"&id="+i.detail.order_id+"&send_type="+i.detail.send_type}):1!=i.detail.send_type||i.detail.address?e.navigateTo({url:"/pages/app_admin/send/send?id="+i.detail.id+"&send_type="+i.detail.send_type}):this.beToSend=!0},toExpress:function(t,i){var n=t.id,s=t.refund;n>0?e.navigateTo({url:"/pages/app_admin/send/send?id="+n+"&is_send="+i}):s&&e.navigateTo({url:"/pages/app_admin/send/send?order_refund_id="+s+"&is_send="+i})},chooseAddress:function(e){this.addressId==e?this.addressId="":this.addressId=e},decline:function(t){var i=this,n={order_refund_id:i.detail.id,type:i.detail.type,is_agree:0!=t?1:0,refund_price:i.detail.refund_price,merchant_remark:i.about};if(1==t){if(i.addressId<1)return e.showToast({title:"请选择地址",icon:"none",duration:1e3}),!1;n.address_id=i.addressId}4==t&&(n.refund=1),i.cancelRefund&&(t=2,n.is_agree=2),e.showLoading({title:"处理中..."}),i.$request({url:i.$api.app_admin.refund_handle,data:n,method:"post"}).then(function(t){e.hideLoading(),0===t.code?e.showModal({title:"提示",content:t.msg,showCancel:!1,success:function(e){e.confirm&&(i.cancel(),setTimeout(function(e){i.$emit("update",0)},1e3))}}):e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},agree:function(){var t=this;e.showLoading({title:"处理中..."}),t.detail.refund_price>0?t.$request({url:t.$api.app_admin.refund_handle,data:{order_refund_id:t.detail.id,type:t.detail.type,is_agree:1,refund_price:t.refund_price,merchant_remark:t.about},method:"post"}).then(function(i){e.hideLoading(),0===i.code?e.showModal({title:"提示",content:i.msg,showCancel:!1,success:function(e){e.confirm&&(t.cancel(),setTimeout(function(e){t.$emit("update",0)},1e3))}}):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}):e.showToast({title:"退款金额需大于零",icon:"none",duration:1e3})},beNotRefund:function(e){this.detail=e,this.isReason=!this.isReason,this.noRefund=!this.noRefund},refundHandle:function(e,t,i){1==i&&(this.cancelRefund=!0),1==e?3==t.type?(this.refundOnly=!0,this.detail=t):0!=t.order.send_type?(this.cityRefund=!0,this.detail=t):0==this.address.length?this.noAddress=!0:(this.detail=t,this.openAddress=!0):2==e&&(this.detail=t,this.notRefund=!0)},toRefund:function(e){this.detail=e,this.refund_price=e.refund_price,this.isRefund=!this.isRefund},look:function(t){e.previewImage({current:t,urls:[t]})},lookAbout:function(e){this.detail=e,this.isReason=!0},beConfirm:function(){var t=this;t.$request({url:t.$api.app_admin.shou_huo,data:{refund_order_id:t.detail.id},method:"post"}).then(function(i){t.$hideLoading(),0===i.code?(t.cancel(),t.page=1,e.showLoading({title:"加载中..."}),t.$emit("update",0)):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(){t.$hideLoading()})}}};t.default=i}).call(this,i("c11b")["default"])},"51c0":function(e,t,i){"use strict";i.r(t);var n=i("41b5"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=s.a},a3c3:function(e,t,i){"use strict";var n=i("3e8d"),s=i.n(n);s.a},c040:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.noAddress=!1},e.e1=function(t){e.showRemark=!e.showRemark})},s=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return s})}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'pages/app_admin/components/order-menu-create-component',
    {
        'pages/app_admin/components/order-menu-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("11be"))
        })
    },
    [['pages/app_admin/components/order-menu-create-component']]
]);                
