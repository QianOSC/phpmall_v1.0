(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/region/about/about"],{"71e5":function(t,n,e){"use strict";e.r(n);var o=e("c447"),u=e("f50e");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("f077");var a=e("2877"),c=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,"63956e56",null);n["default"]=c.exports},c447:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},c730:function(t,n,e){},dc35:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{about:""}},methods:{getList:function(){var n=this;n.$showLoading({type:"global",text:"加载中..."}),n.$request({url:n.$api.region.setting}).then(function(e){n.$hideLoading(),0==e.code?n.about=e.data.level_up_content:(n.$hideLoading(),t.showToast({title:e.msg,icon:"none",duration:1e3}))}).catch(function(t){n.$hideLoading()})}},onLoad:function(t){this.getList()}};n.default=e}).call(this,e("5486")["default"])},f077:function(t,n,e){"use strict";var o=e("c730"),u=e.n(o);u.a},f50e:function(t,n,e){"use strict";e.r(n);var o=e("dc35"),u=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=u.a}},[["95c7","common/runtime","common/vendor"]]]);