(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/basic-component/app-layout/app-payment/app-payment"],{1088:function(t,e,a){},4392:function(t,e,a){"use strict";var n=a("1088"),o=a.n(n);o.a},a12d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},a779:function(t,e,a){"use strict";a.r(e);var n=a("cd75"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},bb6d:function(t,e,a){"use strict";a.r(e);var n=a("a12d"),o=a("a779");for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);a("4392");var r=a("2877"),i=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"68df6871",null);e["default"]=i.exports},cd75:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("66fd")),o=a("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(a,!0).forEach(function(e){c(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l=function(){return a.e("components/basic-component/app-radio/app-radio").then(a.bind(null,"3ac8"))},p={name:"app-payment",components:{AppRadio:l},data:function(){return{}},computed:i({},(0,o.mapState)({showPayment:function(t){return t.payment.showPayment},payData:function(t){return t.payment.payData}}),{},(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"})),created:function(){this.setPayment()},methods:{setPayment:function(){var t=this;n.default.use({install:function(e,a){e.prototype.$payment={pay:t.pay}}})},pay:function(e){var a=this;return new Promise(function(n,o){a.$store.commit("payment/setAll",{showPayment:!1,payData:null,payType:null,id:e,resolve:n,reject:o}),console.log("debug payment, setAll ok, id:",a.$store.state.payment.id),console.log("debug payment, setAll ok, resolve:",a.$store.state.payment.resolve),console.log("debug payment, setAll ok, reject:",a.$store.state.payment.reject),t.showLoading({mask:!0,title:"请求支付..."}),a.$request({url:a.$api.payment.get_payments,data:{id:e}}).then(function(e){return t.hideLoading(),console.log("debug 1---\x3e",e),0===e.code?(console.log("debug payment, set resolve 2,",a.$store.state.payment.resolve),a.showPaymentModal(e.data)):(e.errMsg=e.msg||"",a.$store.state.payment.reject(e.msg))}).catch(function(e){return t.hideLoading(),e.errMsg=e.msg||"",a.$store.state.payment.reject(e)})})},showPaymentModal:function(t){for(var e in console.log("debug 2---\x3e",t),t.list)"undefined"===typeof t.list[e].checked&&(t.list[e].checked=!1);if(this.$store.commit("payment/payData",t),0!==t.amount&&0!==t.amount&&"0"!==t.amount&&"0.00"!==t.amount)this.$store.commit("payment/showPayment",!0);else{for(var a in this.$store.commit("payment/payType","balance"),this.$store.state.payment.payData.list)"balance"===this.$store.state.payment.payData.list[a].key?this.$store.state.payment.payData.list[a].checked=!0:this.$store.state.payment.payData.list[a].checked=!1;this.confirm()}},confirm:function(){for(var e in console.log("payment confirm 1:"),console.log("debug payment, confirm 1,",this.$store.state.payment.resolve),this.$store.state.payment.payData.list)this.$store.state.payment.payData.list[e].checked&&this.$store.commit("payment/payType",this.$store.state.payment.payData.list[e].key);if(this.$store.state.payment.payType)return this.$store.commit("payment/showPayment",!1),console.log("payment confirm 2:",this.$store.state.payment.payType),console.log("debug payment, confirm 2,",this.$store.state.payment.resolve),this.getPayData();t.showModal({title:"提示",content:"请选择支付方式",showCancel:!1})},cancel:function(){return this.$store.commit("payment/showPayment",!1),this.$store.state.payment.reject({errMsg:"支付取消"})},checkPayType:function(t){if(this.$store.state.payment.payData.list[t].disabled||this.$store.state.payment.payData.list[t].checked)return!1;var e=this.$store.state.payment.payData;for(var a in e.list)e.list[a].checked=a==t;this.$store.commit("payment/payData",e)},getPayData:function(){var e=this;console.log("debug payment, getPayData 1,",this.$store.state.payment.resolve),t.showLoading({mask:!0,title:"请求支付..."}),this.$request({url:this.$api.payment.pay_data,data:{id:this.$store.state.payment.id,pay_type:this.$store.state.payment.payType}}).then(function(a){if(t.hideLoading(),0!==a.code)return e.$store.state.payment.reject(a.msg);switch(e.$store.state.payment.payType){case"balance":e.callBranch(a.data);break;case"huodao":e.callHuodao(a.data);break;default:console.log("debug payment, getPayData 2,",e.$store.state.payment.resolve),e.callPlatformPayment(a.data);break}}).catch(function(a){return t.hideLoading(),a.errMsg=a.msg||"",e.$store.state.payment.reject(a)})},callBranch:function(e){var a=this;0===e.order_amount||0===e.order_amount||"0"===e.order_amount||"0.00"===e.order_amount?this.payByBalance():t.showModal({title:"余额支付确认",content:"账户余额：".concat(e.balance_amount,"，支付金额：").concat(e.order_amount),success:function(t){if(!t.confirm)return a.$store.state.payment.reject({errMsg:"支付取消."});a.payByBalance()}})},payByBalance:function(){var e=this;t.showLoading({mask:!0,title:"支付中..."}),this.$request({url:this.$api.payment.pay_buy_balance,data:{id:this.$store.state.payment.id}}).then(function(a){return t.hideLoading(),0===a.code?e.$store.state.payment.resolve({errMsg:"支付成功"}):e.$store.state.payment.reject({errMsg:a.msg})}).catch(function(t){return t.errMsg=t.msg||"",e.$store.state.payment.reject(t)})},callHuodao:function(e){var a=this;t.showLoading({mask:!0,title:"提交中..."}),this.$request({url:this.$api.payment.pay_buy_huodao,data:{id:this.$store.state.payment.id}}).then(function(e){return t.hideLoading(),0===e.code?a.$store.state.payment.resolve({errMsg:"支付成功"}):a.$store.state.payment.reject({errMsg:e.msg})}).catch(function(e){return t.hideLoading(),e.errMsg=e.msg||"",a.$store.state.payment.reject(e)})},callPlatformPayment:function(e){var a=this;console.log("debug payment, callPlatformPayment 1,",this.$store.state.payment.resolve);var n=null;n=["baidu"],t.requestPayment(i({provider:n,success:function(t){return console.log("debug payment, callPlatformPayment 3,",a.$store.state.payment.resolve),console.log("success:",t),a.$store.state.payment.resolve(t)},fail:function(t){var e=["requestPayment:fail cancel"];return t.errMsg&&e.indexOf(t.errMsg)>=0&&(t.errMsg="取消支付"),console.log("debug payment, callPlatformPayment 4,",a.$store.state.payment.resolve),console.log("fail:",t),a.$store.state.payment.reject(t)}},e))}}};e.default=p}).call(this,a("5486")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/basic-component/app-layout/app-payment/app-payment-create-component',
    {
        'components/basic-component/app-layout/app-payment/app-payment-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("bb6d"))
        })
    },
    [['components/basic-component/app-layout/app-payment/app-payment-create-component']]
]);                
