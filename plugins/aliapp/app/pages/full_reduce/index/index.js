(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/full_reduce/index/index"],{6788:function(t,e,n){"use strict";n.r(e);var i=n("85f4"),a=n("a0fa");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("6c48");var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"d4a7db72",null);e["default"]=s.exports},"6c48":function(t,e,n){"use strict";var i=n("f9e7"),a=n.n(i);a.a},"85f4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},a0fa:function(t,e,n){"use strict";n.r(e);var i=n("fd59"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},f9e7:function(t,e,n){},fd59:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),a=n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return u(t)||c(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t,e,n,i,a,r,o){try{var s=t[r](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(i,a)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var r=t.apply(e,n);function o(t){l(r,i,a,o,s,"next",t)}function s(t){l(r,i,a,o,s,"throw",t)}o(void 0)})}}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach(function(e){d(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=function(){return n.e("pages/full_reduce/u-waterfall").then(n.bind(null,"0e62"))},g=function(){return n.e("components/page-component/app-sup-vip/app-sup-vip").then(n.bind(null,"348c"))},v=function(){return n.e("components/page-component/app-member-mark/app-member-price").then(n.bind(null,"dd88"))},y=function(){return n.e("components/page-component/app-diy-goods-list/app-diy-goods-list").then(n.bind(null,"bed5"))},b=function(){return n.e("components/page-component/app-no-goods/app-no-goods").then(n.bind(null,"8112"))},w=function(){return n.e("components/page-component/app-attr/app-attr").then(n.bind(null,"d3c4"))},_={name:"index",data:function(){return{flowList:[],page:1,page_count:1,rule_type:1,rule:null,cats:[],cat_id:null,time_str:{day:"00",hou:"00",min:"00"},timing:null,is_fixed:!1,style_switch:!1,loading:!1,hasActivity:!0,activityLoading:!1,is_no_scroll:!0,goods:{},attrShow:0,no_active:!1,bottomLoading:!1}},computed:f({},(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,a.mapState)("gConfig",{windowWidth:function(t){return t.systemInfo.windowWidth}}),{themeObject:function(){return{back:this.getTheme+"-m-back "+this.getTheme,theme:this.getTheme,color:this.getTheme+"-m-text "+this.getTheme,sBack:this.getTheme+"-s-back "+this.getTheme}}}),methods:{getListData:function(){var t=p(i.default.mark(function t(e){var n,a,r,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$request({url:this.$api.full_reduce.list,data:{page:this.page,cat_id:this.cat_id}});case 3:n=t.sent,this.loading=!1,0===n.code&&(this.no_active=!1,a=n.data.list,!0===e?(r=this.flowList).push.apply(r,o(a)):this.flowList=a,this.page_count=n.data.pagination.page_count,s=this.page,s++===this.page_count&&(this.bottomLoading=!1));case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getIndex:function(){var t=p(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.full_reduce.index});case 2:e=t.sent,this.activityLoading=!0,0===e.code&&(this.$validation.empty(e.data)?this.hasActivity=!1:(this.rule=e.data.rule,this.rule_type=e.data.rule_type,this.$validation.date(e.data.time)&&this.getTiming(e.data.time)));case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getCats:function(){var t=p(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.default.cat_list});case 2:e=t.sent,0===e.code&&(this.cats=e.data.list,this.cat_id=this.cats[0].id);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),active:function(e){this.bottomLoading=!1,this.no_active||(this.no_active=!0,this.cats.forEach(function(t){t.active=!1}),e.active=!0,this.page=1,this.cat_id=e.id,this.flowList=[],this.style_switch&&this.$refs.waterFall.emptyList(),t.pageScrollTo({scrollTop:0,duration:500}),this.getListData())},getTiming:function(t){var e=this;clearInterval(this.timing);var n=new Date(t.replace(/-/g,"/"));this.now_time(n),this.timing=setInterval(function(){e.now_time(n)},1e3)},now_time:function(t){var e=t.getTime()-(new Date).getTime();e<0&&clearInterval(this.timing);var n=parseInt(e/1e3/60/60/24),i=parseInt(e/1e3/60/60%24),a=parseInt(e/1e3/60%60);this.time_str.day=n<10?"0"+n:n,this.time_str.hou=i<10?"0"+i:i,this.time_str.min=a<10?"0"+a:a},route:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.full_reduce.index),"&key=content")})},routeGood:function(e){t.navigateTo({url:e.page_url})},search:function(){t.navigateTo({url:"/pages/full_reduce/search/search"})},setSwitch:function(){this.style_switch=!this.style_switch},buyProduct:function(t){this.goods=t,this.attrShow=Math.random()}},onReachBottom:function(){this.page<this.page_count&&(this.page++,this.bottomLoading=!0,this.getListData(!0))},mounted:function(){var t=this;this.getIndex().then(function(){t.getCats().then(function(){t.getListData()})})},components:{uWaterFall:m,appDiyGoodsList:y,appNoGoods:b,appSupVip:g,appMemberPrice:v,appAttr:w},onHide:function(){clearInterval(this.timing)},onUnload:function(){clearInterval(this.timing)}};e.default=_}).call(this,n("c11b")["default"])}},[["e95c","common/runtime","common/vendor"]]]);