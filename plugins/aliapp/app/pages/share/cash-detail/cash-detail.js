(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/share/cash-detail/cash-detail"],{"2d0d":function(t,n,e){"use strict";e.r(n);var i=e("43b3"),a=e("cbad");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("556c");var r=e("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"64076a88",null);n["default"]=s.exports},"43b3":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"556c":function(t,n,e){"use strict";var i=e("b599"),a=e.n(i);a.a},b599:function(t,n,e){},cbad:function(t,n,e){"use strict";e.r(n);var i=e("d790"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},d790:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("2f62");function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(e,!0).forEach(function(n){r(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s=function(){return e.e("components/basic-component/app-tab-nav/app-tab-nav").then(e.bind(null,"7fd0"))},c={data:function(){return{tabList:[{id:-1,name:"全部"},{id:0,name:"待审核"},{id:1,name:"待打款"},{id:2,name:"已打款"},{id:3,name:"无效"}],loading:null,list:[],activeTab:-1,noBorder:!1,id:null,page:2}},components:{"app-tab-nav":s},computed:o({},(0,i.mapState)({mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_setting:function(t){return t.mallConfig.share_setting}})),methods:{open:function(t){this.id=t},tabStatus:function(n){this.list=[],this.page=2,this.activeTab=n.currentTarget.dataset.id,t.showLoading({title:"加载中..."}),this.getList()},getList:function(){var n=this;n.$request({url:n.$api.share.cash_list,data:{status:n.activeTab}}).then(function(e){n.$hideLoading(),t.hideLoading(),0===e.code?n.list=e.data.list:t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(){n.$hideLoading(),t.hideLoading(),n.$event.on(n.$const.EVENT_USER_LOGIN).then(function(){n.getList()})})},getMore:function(){var n=this;t.showLoading({title:"加载中..."}),n.$request({url:n.$api.share.cash_list,data:{status:n.activeTab,page:n.page}}).then(function(e){if(t.hideLoading(),0==e.code){for(var i in n.loading=null,e.data.list)for(var a in n.list)i==a&&(n.list[a].list=n.list[a].list.concat(e.data.list[a].list));n.page++}else t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(){t.hideLoading()})},toGoods:function(n){t.navigateTo({url:"/pages/goods/goods?id=".concat(n)})}},onLoad:function(){var n=this;t.setNavigationBarTitle({title:n.custom_setting.menus.cash.name}),n.$showLoading({type:"global",text:"加载中..."}),n.getList()},onReachBottom:function(){this.getMore()}};n.default=c}).call(this,e("c11b")["default"])}},[["fd58","common/runtime","common/vendor"]]]);