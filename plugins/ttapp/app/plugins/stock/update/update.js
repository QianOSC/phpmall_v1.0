(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/stock/update/update"],{"901e":function(t,e,n){},"90e5":function(t,e,n){"use strict";var i=n("901e"),o=n.n(i);o.a},"9b59":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{iphone_x:!1,user:{},up_type:"",loading:!1,canUp:!1,up:{},success:!1,page:2,width:-25,setting:{},page_count:1,list:[]}},computed:a({},(0,i.mapState)({stock:function(t){return t.mallConfig.__wxapp_img.stock},mall:function(t){return t.mallConfig.mall},userInfo:function(t){return t.user.info}})),methods:{getList:function(){var e=this;e.$request({url:e.$api.stock.level}).then(function(n){0==n.code?function(){e.user=n.data.user,e.up_type=n.data.up_type;var t=n.data.list;e.page_count=n.data.pagination.page_count;var i=e.user.condition.toString();e.width=-20-5*i.length;var o=0;if(e.success=!1,0==t.length)e.$hideLoading();else for(var a in t)t[a].up=!0,o++,+t[a].condition>+e.user.condition&&(t[a].up=!1,o--),a==t.length-1&&setTimeout(function(){e.list=t,e.$hideLoading()},200);o>0&&(e.canUp=!0)}():(e.$hideLoading(),t.showToast({title:n.msg,icon:"none",duration:1e3}))}).catch(function(t){e.$hideLoading()})},toUpdate:function(){var e=this,n=this;t.showLoading({title:"加载中..."}),n.$request({url:n.$api.stock.up}).then(function(i){t.hideLoading(),0==i.code?(n.up=i.data,e.success=!0,e.canUp=!1):t.showToast({title:i.msg,icon:"none",duration:1e3})})},getMore:function(){var e=this;if(this.loading)return!1;if(this.page>this.page_count)return!1;var n=this;t.showLoading({title:"加载中..."}),n.loading=!0,n.$request({url:n.$api.stock.level,data:{page:this.page}}).then(function(i){e.loading=!1,0==i.code?function(){var e=i.data.list,o=0;if(0==e.length)t.hideLoading();else for(var a in n.page++,e)e[a].up=!0,o++,+e[a].condition>+n.user.condition&&(e[a].up=!1,o--),a==e.length-1&&setTimeout(function(){n.list=n.list.concat(e),n.$forceUpdate(),t.hideLoading()},200);o>0&&(n.canUp=!0)}():(t.hideLoading(),t.showToast({title:i.msg,icon:"none",duration:1e3}))}).catch(function(n){e.loading=!1,t.hideLoading()})},getSetting:function(){var e=this;e.$showLoading({type:"global",text:"加载中..."}),e.$request({url:e.$api.stock.setting}).then(function(n){e.getList(),0==n.code?e.setting=n.data:t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(n){e.$hideLoading(),t.hideLoading()})}},onReachBottom:function(){this.getMore()},onLoad:function(e){var n=this;t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(n.iphone_x=!0)}}),n.getSetting()}};e.default=u}).call(this,n("f266")["default"])},df0f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},f7ef:function(t,e,n){"use strict";n.r(e);var i=n("9b59"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},fec8:function(t,e,n){"use strict";n.r(e);var i=n("df0f"),o=n("f7ef");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("90e5");var r=n("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"510010a7",null);e["default"]=u.exports}},[["f7fa","common/runtime","common/vendor"]]]);