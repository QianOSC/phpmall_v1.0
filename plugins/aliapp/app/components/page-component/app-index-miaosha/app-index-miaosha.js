;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/app-index-miaosha/app-index-miaosha"],{"1f48":function(e,t,n){"use strict";var a=n("ea6c"),r=n.n(a);r.a},"27b1":function(e,t,n){"use strict";n.r(t);var a=n("d1c9"),r=n("fac9");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("1f48");var o=n("2877"),u=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"7a48c3a2",null);t["default"]=u.exports},d1c9:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},ea6c:function(e,t,n){},ef6e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62"),r=i(n("7ab7"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){p(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){return n.e("components/page-component/app-member-mark/app-member-price").then(n.bind(null,"dd88"))},l=function(){return n.e("components/page-component/app-sup-vip/app-sup-vip").then(n.bind(null,"348c"))},s={name:"app-index-miaosha",components:{"app-member-price":c,"app-sup-vip":l},props:{value:{type:Object,default:function(){return{open_date:null,list:[]}}},pageHide:Boolean},data:function(){return{newData:this.value,timer:null,time:null,is_vip:!0}},computed:u({},(0,a.mapState)({mall:function(e){return e.mallConfig.mall},appSetting:function(e){return e.mallConfig.mall.setting},appImg:function(e){return e.mallConfig.__wxapp_img.mall},theme:function(e){return e.mallConfig.theme}}),{},(0,a.mapGetters)("mallConfig",{getVideo:"getVideo"})),beforeDestroy:function(){clearInterval(this.time)},watch:{pageHide:{handler:function(e){var t=this;if(e)clearInterval(this.time);else{var n=new Date;if(new Date(this.newData.open_date).getDate()!=n.getDate())this.newData.str="预告 "+this.newData.open_date+" "+this.newData.open_time+"点场";else if(this.newData.open_time!=n.getHours())this.newData.str="预告 "+this.newData.open_time+"点场";else{var a=1e3*this.newData.date_time-n.getTime();this.time=setInterval(function(){if(a-=1e3,t.newData.str=t.newData.open_time+"点场",a<=0)clearInterval(t.time);else{var e=parseInt(a/1e3/60/60),n=parseInt(a/1e3/60%60),r=parseInt(a/1e3%60);t.timer={hour:e<10?"0"+e:e,min:n<10?"0"+n:n,sec:r<10?"0"+r:r}}},1e3)}}},immediate:!0}},methods:{jump:function(e){(0,r.default)({open_type:"navigate",page_url:e,params:[]})},router_jump:function(t){t.video_url&&1==this.getVideo?e.navigateTo({url:"/pages/goods/video?goods_id=".concat(t.id,"&sign=miaosha")}):e.navigateTo({url:t.page_url})}}};t.default=s}).call(this,n("c11b")["default"])},fac9:function(e,t,n){"use strict";n.r(t);var a=n("ef6e"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/app-index-miaosha/app-index-miaosha-create-component',
    {
        'components/page-component/app-index-miaosha/app-index-miaosha-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("27b1"))
        })
    },
    [['components/page-component/app-index-miaosha/app-index-miaosha-create-component']]
]);                
