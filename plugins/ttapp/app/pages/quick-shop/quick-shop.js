(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/quick-shop/quick-shop"],{"0f23":function(t,e,i){},"5a13":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"5fb1":function(t,e,i){"use strict";i.r(e);var n=i("dab0"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"795e":function(t,e,i){"use strict";i.r(e);var n=i("5a13"),a=i("5fb1");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("fe24");var o=i("2877"),c=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"007b618c",null);e["default"]=c.exports},dab0:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("a34a")),a=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i,n,a,r,o){try{var c=t[r](o),s=c.value}catch(u){return void i(u)}c.done?e(s):Promise.resolve(s).then(n,a)}function c(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var r=t.apply(e,i);function c(t){o(r,n,a,c,s,"next",t)}function s(t){o(r,n,a,c,s,"throw",t)}c(void 0)})}}function s(t){return d(t)||l(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(i,!0).forEach(function(e){p(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var m=function(){return i.e("pages/quick-shop/components/app-add-subtract/app-add-subtract").then(i.bind(null,"f9fa"))},v=function(){return i.e("components/page-component/app-attr/app-attr").then(i.bind(null,"d3c4"))},b=function(){return i.e("components/page-component/goods/u-attr").then(i.bind(null,"b4bc"))},g={name:"quick-shop",components:{"app-add-subtract":m,"app-attr":v,uAttr:b},computed:f({},(0,a.mapState)({tabBarNavs:function(t){return t.mallConfig.navbar.navs},appSetting:function(t){return t.mallConfig.mall.setting},appImg:function(t){return t.mallConfig.__wxapp_img.mall},isListUnderlinePrice:function(t){return t.mallConfig.mall.setting.is_list_underline_price},themeObject:function(t){var e=t.mallConfig.mall.setting.theme_color;return{back:e+"-m-back "+e,backP:e+"-m-back-p "+e,backO:e+"-m-back-o "+e,theme:e,color:e+"-m-text "+e,sBack:e+"-s-back "+e,border:e+"-m-border "+e,mBtn:e+"-m-gradient-btn "+e,sBtn:e+"-s-gradient-btn "+e}}}),{},(0,a.mapGetters)("iPhoneX",{botHeight:"getBotHeight"}),{},(0,a.mapGetters)("mallConfig",{getVideo:"getVideo"})),data:function(){return{activeNum:"",classification:[],activeIndex:0,activeName:"",list:[],coverPic:"",spec:!0,goodsNum:0,item:null,selectAttr:{},checked:null,show:!1,page:1,over:!1,tabbarbool:!1,currentRoute:this.$platDiff.route(),activeId:"0",scrollTop:0,old:{scrollTop:0}}},methods:{onAttr:function(t){this.checked=t},request:function(){var t=this;this.$request({url:"".concat(this.$api.quick.goods_list,"&page=").concat(this.page,"&cat_id=").concat(this.activeId,"is_sell_well=0 ")}).then(function(e){0===e.code&&(e.data.list.length>0?t.list=[].concat(s(t.list),s(e.data.list)):t.over=!0)})},active:function(t,e){var i=this;this.scrollTop=1,this.$nextTick(function(){i.scrollTop=0}),this.activeIndex=e,this.activeName=t.name,this.activeId=t.id,this.over=!1,this.page=1,this.pushSelectProduct().then(function(){i.$request({url:"".concat(i.$api.quick.goods_list,"&page=").concat(i.page,"&cat_id=").concat(t.id,"is_sell_well=0 ")}).then(function(t){i.list=t.data.list})})},specification:function(t){this.checked=null,this.item=t,this.show=!0},selectNumber:function(t,e){for(var i=0;i<this.list.length;i++)this.list[i].id===t.goods_id&&(this.list[i].total_num+=e,this.activeNum=Number(this.activeNum)+Number(e))},pushSelectProduct:function(){var t=c(n.default.mark(function t(){var e,i;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(i in e=[],this.selectAttr)e.push(this.selectAttr[i]);this.$request({url:this.$api.quick.cart,method:"post",data:{list:JSON.stringify(e)}});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),add:function(t){for(var e=0;e<this.list.length;e++)this.list[e].id===t.id&&(this.list[e].total_num+=1,this.activeNum=Number(this.activeNum)+1,this.selectAttr[t.attr[0].id]={attr:t.attr[0].id,num:this.list[e].total_num,goods_id:t.id})},subtract:function(t){for(var e=0;e<this.list.length;e++)this.list[e].id===t.id&&(this.list[e].total_num-=1,this.activeNum=Number(this.activeNum)-1,this.selectAttr[t.attr[0].id]={attr:t.attr[0].id,num:this.list[e].total_num,goods_id:t.id})},changeNum:function(t,e){for(var i=0;i<this.list.length;i++)this.list[i].id===t.id&&(this.activeNum=Number(this.activeNum)-this.list[i].total_num,this.activeNum=Number(this.activeNum)+e,this.list[i].total_num=e,this.selectAttr[t.attr[0].id]={attr:t.attr[0].id,num:this.list[i].total_num,goods_id:t.id})},jumpGo:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id)}):t.navigateTo({url:"/pages/goods/goods?id=".concat(e.id)})},scrolltolower:function(){this.over||(this.page++,this.request())},b:function(){for(var t=this.currentRoute,e=0;e<this.tabBarNavs.length;e++)if(t.includes(this.tabBarNavs[e].url.split("?")[0]))return this.tabbarbool=!0;return this.tabbarbool=!1}},onLoad:function(){var t=this;this.$request({url:this.$api.quick.index}).then(function(e){t.activeNum="".concat(e.data.count);var i=e.data.cats_list[t.activeIndex],n=i.name,a=i.id;t.activeName=n,t.activeId=a,t.classification=e.data.cats_list,t.$request({url:t.$api.quick.index}).then(function(e){t.activeNum="".concat(e.data.count)}),t.$request({url:"".concat(t.$api.quick.goods_list,"&page=").concat(t.page,"&cat_id=").concat(a,"is_sell_well=0 ")}).then(function(e){t.list=e.data.list})})},onHide:function(){this.pushSelectProduct()},onUnload:function(){this.pushSelectProduct()},onShareAppMessage:function(){return this.$shareAppMessage({path:"/pages/quick-shop/quick-shop",title:this.$children[0].navigationBarTitle})},watch:{tabBarNavs:{handler:function(){this.b()},immediate:!0}}};e.default=g}).call(this,i("f266")["default"])},fe24:function(t,e,i){"use strict";var n=i("0f23"),a=i.n(n);a.a}},[["41ea","common/runtime","common/vendor"]]]);