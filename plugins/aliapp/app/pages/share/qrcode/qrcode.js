(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/share/qrcode/qrcode"],{"0872":function(t,e,n){"use strict";var o=n("99af"),r=n.n(o);r.a},"2c8d":function(t,e,n){"use strict";n.r(e);var o=n("2f4a"),r=n("c4e9");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("0872");var c=n("2877"),a=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,"051e2082",null);e["default"]=a.exports},"2f4a":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},4832:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={data:function(){return{img:""}},computed:i({},(0,o.mapState)({mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_img:function(t){return t.mallConfig.__wxapp_img.share}})),methods:{look:function(){var e=this;t.previewImage({current:e.img,urls:[e.img]})},saveImg:function(){var e=this;my.showLoading({content:"图片保存中"}),my.saveImage({url:e.img,showActionSheet:!0,success:function(e){t.showToast({title:"保存成功",icon:"success",duration:1e3})},fail:function(){t.showToast({title:"保存失败",icon:"none",duration:1e3})},complete:function(){my.hideLoading()}})},getList:function(){var e=this;e.$request({url:e.$api.share.poster,method:"get"}).then(function(n){e.$hideLoading(),0==n.code?e.img=n.data.pic_url:t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading(),e.$event.on(e.$const.EVENT_USER_LOGIN).then(function(){e.getList()})})}},onLoad:function(e){var n=this;t.setNavigationBarTitle({title:n.custom_setting.menus.qrcode.name}),n.$showLoading({type:"global",text:"加载中..."}),n.getList()}};e.default=a}).call(this,n("c11b")["default"])},"99af":function(t,e,n){},c4e9:function(t,e,n){"use strict";n.r(e);var o=n("4832"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a}},[["44c4","common/runtime","common/vendor"]]]);