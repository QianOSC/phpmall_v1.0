(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/flash_sale/index/index"],{"223b":function(t,e,n){},"321f":function(t,e,n){"use strict";n.r(e);var i=n("8344"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"6d93":function(t,e,n){"use strict";var i=n("223b"),a=n.n(i);a.a},"74bd":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,Object.keys(t.activity)),i=t.__map(t.list,function(e,n){var i=Number(e.min_discount);return{$orig:t.__get_orig(e),m0:i}}),a=Object.keys(t.activity);t._isMounted||(t.e0=function(e){t.is_switch=!0},t.e1=function(e){t.is_switch=!1}),t.$mp.data=Object.assign({},{$root:{g0:n,l0:i,g1:a}})},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},8344:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("a34a")),r=n("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return f(t)||p(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function g(t,e,n,i,a,r,s){try{var o=t[r](s),c=o.value}catch(u){return void n(u)}o.done?e(c):Promise.resolve(c).then(i,a)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var r=t.apply(e,n);function s(t){g(r,i,a,s,o,"next",t)}function o(t){g(r,i,a,s,o,"throw",t)}s(void 0)})}}var m=function(){return n.e("components/page-component/app-no-goods/app-no-goods").then(n.bind(null,"8112"))},_=function(){return n.e("components/page-component/goods/u-attr").then(n.bind(null,"b4bc"))},b={name:"index",data:function(){return{is_switch:!0,page:1,type:1,activity:{},timing:null,time_str:{day:"00",hou:"00",min:"00",sec:"00"},list:[],page_count:1,detail:null,attr_groups:[],attrShow:0,selectAttr:{},switch_height:0,title:"暂无进行中活动",is_no_now:!1,going:!0}},methods:{getList:function(){var t=d(a.default.mark(function t(){var e,n,i,r,s,o,c,u,h,p,f,g,d,m;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.flash_sale.list,data:{type:this.type,page:this.page}});case 2:if(e=t.sent,0!==e.code){t.next=27;break}if(n=e.data,i=n.activity,r=n.list,s=n.next_activity,o=n.pagination,1!==this.type){t.next=24;break}if(this.activity=i,0!==Object.keys(i).length){t.next=19;break}return this.is_no_now=!0,this.type=2,t.next=12,this.$request({url:this.$api.flash_sale.list,data:{type:this.type,page:this.page}});case 12:u=t.sent,h=u.data,p=h.list,f=h.next_activity,g=h.pagination,this.activity=f,(c=this.list).push.apply(c,l(p)),this.page_count=g.page_count,t.next=22;break;case 19:this.is_no_now=!1,(d=this.list).push.apply(d,l(r)),this.page_count=o.page_count;case 22:t.next=27;break;case 24:this.activity=s,(m=this.list).push.apply(m,l(r)),this.page_count=o.page_count;case 27:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),set_time:function(t){var e=this;clearInterval(this.timing);var n=new Date(t.replace(/-/g,"/"));this.now_time(n),this.timing=setInterval(function(){e.now_time(n)},1e3)},now_time:function(t){var e=t.getTime()-(new Date).getTime();e<0&&clearInterval(this.timing);var n=parseInt(e/1e3/60/60/24),i=parseInt(e/1e3/60/60%24),a=parseInt(e/1e3/60%60),r=parseInt(e/1e3%60);this.time_str.day=n<10?"0"+n:n,this.time_str.hou=i<10?"0"+i:i,this.time_str.min=a<10?"0"+a:a,this.time_str.sec=r<10?"0"+r:r},grab:function(e){1===this.type?(this.detail=null,0!==e.goods_stock&&(this.selectAttr={},this.detail=e,this.attrShow=!0)):t.navigateTo({url:"/plugins/flash_sale/goods/goods?id=".concat(e.id)})},onAttr:function(t){this.selectAttr=t},routeDetail:function(e){t.navigateTo({url:"/plugins/flash_sale/goods/goods?id=".concat(e)})},goRule:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.flash_sale.list),"&key=content")})},rightFunc:function(e){t.navigateTo({url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify([e]))})},leftFunc:function(e){this.$request({url:this.$api.flash_sale.add_cart,data:{flash_goods_id:this.selectAttr.goods_id,attr_id:this.selectAttr.id,num:e},method:"post"}).then(function(e){t.showToast({title:e.msg,type:"success"})})}},mounted:function(){var t=this,e=i.createSelectorQuery();this.$nextTick().then(function(){e.select(".f-switch").boundingClientRect(function(e){t.switch_height=e.height}).exec()})},onReachBottom:function(){this.page<this.page_count&&(this.page++,this.getList())},watch:{is_switch:{handler:function(t){var e=this;this.going&&(this.going=!1,this.list=[],this.page=1,t?(this.type=1,this.title="暂无进行中活动"):(this.type=2,this.title="暂无下一场活动"),this.getList().then(function(){if(1===e.type){var t=e.activity.end_at;t&&e.set_time(t)}else{var n=e.activity.start_at;n&&e.set_time(n)}e.going=!0}))},immediate:!0}},computed:c({},(0,r.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,r.mapState)("gConfig",{windowHeight:function(t){return t.systemInfo.windowHeight}}),{},(0,r.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting},themeObject:function(t){var e=t.mallConfig.mall.setting.theme_color;return{back:e+"-m-back "+e,backP:e+"-m-back-p "+e,backO:e+"-m-back-o "+e,theme:e,color:e+"-m-text "+e,sBack:e+"-s-back "+e,border:e+"-m-border "+e,mBtn:e+"-m-gradient-btn "+e,sBtn:e+"-s-gradient-btn "+e}}})),components:{"app-no-goods":m,uAttr:_},onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/flash_sale/index/index",title:this.$children[0].navigationBarTitle})}};e.default=b}).call(this,n("5486")["default"],n("5486")["default"])},c962:function(t,e,n){"use strict";n.r(e);var i=n("74bd"),a=n("321f");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("6d93");var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"382dce67",null);e["default"]=o.exports}},[["6da5","common/runtime","common/vendor"]]]);