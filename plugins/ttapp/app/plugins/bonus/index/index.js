(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/bonus/index/index"],{"4b9a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.read=!t.read},t.e1=function(e){t.protocol=t.setting.agreement_content},t.e2=function(e){t.toApply=!t.toApply},t.e3=function(e){t.protocol=null,t.read=!0})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"603a":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=function(){return Promise.all([i.e("common/vendor"),i.e("components/basic-component/app-rich/parse")]).then(i.bind(null,"cb0e"))},u={data:function(){return{read:!1,toApply:!1,name:"",mobile:"",height:0,pass:null,check:{},rate:0,other:0,protocol:null,setting:"",template_message:[],wait:!1,first:!1,captain:{status:5}}},components:{"app-rich-text":r},computed:s({},(0,o.mapState)({userInfo:function(t){return t.user.info},bonusImg:function(t){return t.mallConfig.__wxapp_img.bonus}})),methods:{toDetail:function(){t.navigateTo({url:"/plugins/bonus/cash-detail/cash-detail"})},toIndex:function(){t.navigateTo({url:"/pages/index/index"})},toCash:function(){t.navigateTo({url:"/plugins/bonus/cash/cash"})},toStatics:function(){t.navigateTo({url:"/plugins/bonus/statics/statics"})},toAbout:function(){t.navigateTo({url:"/plugins/bonus/about/about"})},toOrder:function(){t.navigateTo({url:"/plugins/bonus/order/order"})},toMember:function(){t.navigateTo({url:"/plugins/bonus/memeber/memeber"})},imageLoad:function(t){var e=t.detail.width,n=t.detail.height;this.height=n*(750/e)/2},subscribe:function(){var e=this,n=this,i=0;if(!n.read)return t.showToast({title:"请先查看"+n.setting.agreement_title+"并同意",icon:"none",duration:1e3}),!1;i=1,n.name&&n.mobile?11==n.mobile.length&&/0?(1)[0-9]{10}/.test(n.mobile)?this.$subscribe(this.template_message).then(function(t){e.submit(i)}).catch(function(t){e.submit(i)}):t.showToast({title:"请输入正确的手机号码",icon:"none",duration:1e3}):t.showToast({title:"请完善申请信息",icon:"none",duration:1e3})},submit:function(e){var n=this;n.$request({url:n.$api.bonus.apply,data:{name:n.name,mobile:n.mobile,is_agree:e},method:"post"}).then(function(e){n.$hideLoading(),0==e.code?(t.showToast({title:e.msg,duration:1e3}),setTimeout(function(){n.getStatus(),n.wait=!0},500)):("请先查看团队分红申请协议并同意"==e.msg&&(e.msg="请先查看"+n.setting.agreement_title+"并同意"),t.showToast({title:e.msg,icon:"none",duration:1e3}))}).catch(function(t){n.$hideLoading()})},getSetting:function(){var e=this;e.$request({url:e.$api.bonus.setting}).then(function(n){e.$hideLoading(),0==n.code?(e.setting=n.data.list,e.template_message=n.data.list.template_message_captain,e.setting.form&&e.setting.form.title?t.setNavigationBarTitle({title:e.setting.form.title}):t.setNavigationBarTitle({title:"团队分红"}),0==e.setting.is_agreement&&(e.read=!0),"statics/img/app/bonus/banner.png"==e.setting.bg_url&&(e.setting.bg_url=e.bonusImg.banner),"statics/img/app/bonus/right.png"==e.setting.form.bottom_bg_url&&(e.setting.form.bottom_bg_url=e.bonusImg.right)):t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},getCheck:function(){var n=this;n.$request({url:n.$api.bonus.index}).then(function(i){var o,a;(n.$hideLoading(),0==i.code)?(n.check=i.data,n.pass=i.data.pass,i.data.to_apply&&(toApply=i.data.to_apply),n.check.total_money>-1&&(o=(n.check.condition-+n.check.total_money).toFixed(2),a=+n.check.total_money/n.check.condition*100),n.check.cash_money>-1&&(o=(n.check.condition-+n.check.cash_money).toFixed(2),a=+n.check.cash_money/n.check.condition*100),n.check.all_shares>-1&&(o=n.check.condition-+n.check.all_shares,a=+n.check.all_shares/n.check.condition*100),n.check.all_members>-1&&(o=n.check.condition-+n.check.all_members,a=+n.check.all_members/n.check.condition*100),n.other=o,n.rate=a,n.captain.status=5):(t.showToast({title:i.msg,icon:"none",duration:1e3}),"你不是分销商"==e.data.msg?setTimeout(function(){t.redirectTo({url:"/pages/index/index"})},1e3):(n.getSetting(),n.pass=!0,n.captain.status=5,captain.status=5))}).catch(function(t){n.$hideLoading(),n.$event.on(n.$const.EVENT_USER_LOGIN).then(function(){n.$store.dispatch("user/info"),n.getStatus()})})},reApply:function(){var e=this;e.$request({url:e.$api.bonus.clear}).then(function(n){e.$hideLoading(),0==n.code?(e.name="",e.mobile="",e.getCheck(),0!=e.setting.become_type?e.captain={}:(e.captain={},e.captain.status=5)):t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},getStatus:function(){var e=this;e.$request({url:e.$api.bonus.status}).then(function(n){e.$hideLoading(),e.getSetting(),0==n.code?(e.wait=!1,e.captain=n.data.captain,0==e.captain.status?e.wait=!0:-1==e.captain.status&&e.getCheck(),1==e.captain.status&&(e.toApply=!1)):"用户未申请队长"==n.msg?e.getCheck():t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading(),e.$event.on(e.$const.EVENT_USER_LOGIN).then(function(){e.$store.dispatch("user/info"),e.getStatus()})})}},onLoad:function(){this.$store.dispatch("user/info")},onReady:function(){this.getStatus(),this.first=!0},onShow:function(){this.first&&(this.pass=null,this.toApply=!1,this.read=!1,1!=this.captain.status&&(this.captain={}),this.getStatus())}};n.default=u}).call(this,i("f266")["default"])},"8ea0":function(t,e,n){"use strict";n.r(e);var i=n("603a"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},b78a:function(t,e,n){"use strict";var i=n("f875"),o=n.n(i);o.a},ca3d:function(t,e,n){"use strict";n.r(e);var i=n("4b9a"),o=n("8ea0");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("b78a");var s=n("2877"),c=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"9d7d455a",null);e["default"]=c.exports},f875:function(t,e,n){}},[["a0c2","common/runtime","common/vendor"]]]);