(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/lottery/index/index"],{1379:function(t,e,n){},"2c62":function(t,e,n){"use strict";var a=n("1379"),i=n.n(a);i.a},"8b85":function(t,e,n){"use strict";n.r(e);var a=n("b51e"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},b51e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/page-component/app-swiper/app-swiper").then(n.bind(null,"8af3"))},i=function(){return Promise.all([n.e("common/vendor"),n.e("plugins/lottery/common-buttom")]).then(n.bind(null,"5a76"))},o={name:"index",components:{appSwiper:a,commonButtom:i},data:function(){var t;return{integral:t,args:!1,load:!1,page:1,list:null,times:null,title:"幸运抽奖",banner_list:null,setting:null,template_message:null}},onHide:function(){clearInterval(this.integral)},onUnload:function(){clearInterval(this.integral)},onLoad:function(e){var n=this;n.$request({url:n.$api.lottery.setting}).then(function(e){0===e.code&&(n.setting=e.data.setting,t.setNavigationBarTitle({title:n.setting.title}),n.title=n.setting.title)})},onReachBottom:function(){var t=this;if(!t.args&&!t.load){t.load=!0;var e=t.page+1;t.$request({url:t.$api.lottery.index,data:{page:e}}).then(function(n){if(0===n.code){var a=[e,0===n.data.list.length,t.list.concat(n.data.list)];t.page=a[0],t.args=a[1],t.list=a[2];var i=t.list.map(function(t){return 2==t.new_status?t.start_at:t.end_at});t.setTimeStart(i)}t.load=!1})}},onShow:function(){var t=this;t.$showLoading({title:"加载中"}),t.$request({url:t.$api.lottery.index}).then(function(e){if(t.$hideLoading(),0===e.code){var n=[e.data.banner_list,e.data.list,e.data.banner_list,e.data.template_message];t.banner_list=n[0],t.list=n[1],t.banner_list=n[2],t.template_message=n[3];var a=[1,!1];t.page=a[0],t.args=a[1];var i=t.list.map(function(t){return 2==t.new_status?t.start_at:t.end_at});t.setTimeStart(i)}}).catch(function(e){t.$hideLoading()})},onShareAppMessage:function(){return this.$shareAppMessage({title:this.title,path:"/plugins/lottery/index/index",params:{}})},methods:{qrcode:function(){t.navigateTo({url:"/plugins/lottery/qrcode/qrcode"})},goods:function(e){t.navigateTo({url:"/plugins/lottery/goods/goods?lottery_id=".concat(e.id)})},detail:function(e){this.$subscribe(this.template_message).then(function(n){t.navigateTo({url:"/plugins/lottery/detail/detail?lottery_id="+e})}).catch(function(n){t.navigateTo({url:"/plugins/lottery/detail/detail?lottery_id="+e})})},setTimeStart:function(t){var e=this;clearInterval(e.integral);var n=function(t){var n=[];t.map(function(t,e,a){var i=t.replace(/-/g,"/"),o=parseInt((new Date(i).getTime()-(new Date).getTime())/1e3),r=0,l=0,s=0,u=0;o>0&&(r=Math.floor(o/86400),l=Math.floor(o/3600)-24*r,s=Math.floor(o/60)-24*r*60-60*l,u=Math.floor(o)-24*r*60*60-60*l*60-60*s),n[e]={day:r,hour:l,minute:s,second:u}}),e.times=n};n(t),e.integral=setInterval(function(){n(t)},1e3)}}};e.default=o}).call(this,n("f266")["default"])},b933:function(t,e,n){"use strict";n.r(e);var a=n("c53a"),i=n("8b85");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("2c62");var r=n("2877"),l=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"6e776de4",null);e["default"]=l.exports},c53a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}},[["030b","common/runtime","common/vendor"]]]);