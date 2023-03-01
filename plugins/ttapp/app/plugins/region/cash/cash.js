(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/region/cash/cash"],{"0922":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){return n.e("components/page-component/app-cash-model/app-cash-model").then(n.bind(null,"8637"))},u={data:function(){return{cashTypeModel:!1,visible:!1,mark_num:-1,region:{},pay_type:{auto:!1,alipay:!1,wechat:!1,bank:!1,balance:!1},loading:!1,warningInfo:"",submitOver:!1,config:[],name:"",mobile:"",template_message:[],getMoney:null,cashType:""}},components:{appCashModel:c},computed:r({},(0,a.mapState)({mall:function(e){return e.mallConfig.mall}}),{cashName:function(){switch(this.cashType){case"auto":return"自动";case"wx":return"微信线下打款";case"alipay":return"支付宝线下打款";case"bank":return"银联线下打款";case"balance":return"商城余额";default:return}}}),methods:{payTypeChange:function(e){switch(this.cashType=e,e){case"auto":this.mark_num=0;break;case"wx":this.mark_num=1;break;case"alipay":this.mark_num=2;break;case"bank":this.mark_num=3;break;case"balance":this.mark_num=4;break;default:this.mark_num=-1;break}},subscribe:function(){var t=this;if(this.loading)return!1;if(this.submitOver||this.warningInfo)return!1;if(this.moneyInput>0){if(-1==this.mark_num)return void e.showToast({title:"请选择提现方式",icon:"none"});this.loading=!0,this.$subscribe(this.template_message).then(function(e){t.submit()}).catch(function(e){t.submit()})}else this.warningInfo="请输入正确的提现金额"},submit:function(){var t=this;e.showLoading({title:"加载中..."});var n={price:t.moneyInput,type:"auto"};4==t.mark_num?n.type="balance":0==t.mark_num?n.type="auto":(n.name=t.name,n.mobile=t.mobile,1==t.mark_num&&(n.type="wechat"),2==t.mark_num&&(n.type="alipay"),3==t.mark_num&&(n.type="bank",n.bank_name=t.bank_name)),t.$request({url:t.$api.region.cash,data:n,method:"post"}).then(function(n){e.hideLoading(),t.loading=!1,0==n.code?t.submitOver=!0:t.warningInfo=n.msg}).catch(function(n){t.loading=!1,e.hideLoading()})},toDetail:function(){this.submitOver=!1,e.redirectTo({url:"/plugins/region/cash-detail/cash-detail"})},getStatus:function(){var t=this;t.$request({url:t.$api.region.status}).then(function(n){t.$hideLoading(),0==n.code?t.region=n.data.region:e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},setting:function(){var t=this;t.$request({url:t.$api.region.setting}).then(function(n){if(t.$hideLoading(),t.getStatus(),0==n.code){t.config=n.data,t.template_message=n.data.template_message_withdraw;for(var a=0;a<t.config.pay_type.length;a++)switch(t.config.pay_type[a]){case"auto":t.pay_type.auto=!0;break;case"alipay":t.pay_type.alipay=!0;break;case"wechat":t.pay_type.wechat=!0;break;case"balance":t.pay_type.balance=!0;break;case"bank":t.pay_type.bank=!0;break}}else e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})}},onLoad:function(e){var t=this;e.money>0&&(t.money=e.money),t.setting()}};t.default=u}).call(this,n("f266")["default"])},"34bc":function(e,t,n){"use strict";var a=n("44db"),i=n.n(a);i.a},"44db":function(e,t,n){},"69ad":function(e,t,n){"use strict";n.r(t);var a=n("aec3"),i=n("826b");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("34bc");var o=n("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"56d0ba9a",null);t["default"]=c.exports},"826b":function(e,t,n){"use strict";n.r(t);var a=n("0922"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},aec3:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.cashTypeModel=!0},e.e1=function(t){e.warningInfo=!1})},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})}},[["a9ea","common/runtime","common/vendor"]]]);