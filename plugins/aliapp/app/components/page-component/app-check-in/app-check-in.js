;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/app-check-in/app-check-in"],{"374b":function(t,e,n){"use strict";n.r(e);var r=n("6a31"),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e["default"]=o.a},4816:function(t,e,n){},"6a31":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),o=c(n("0333"));function c(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){return n.e("components/basic-component/app-hotspot/app-hotspot").then(n.bind(null,"9c0a"))},s={name:"app-check-in",components:{"app-hotspot":f},props:{backgroundPicUrl:{type:String,default:function(){return""}},hotspot:{type:Object,default:function(){return{}}},showText:{type:Boolean,default:function(){return!1}},textColor:String,textPosition:String},computed:i({},(0,r.mapGetters)({userInfo:"user/info"})),methods:{checkIn:function(){var e=this;t.showLoading({title:"签到中"}),o.default.getAward(1,1).then(function(n){t.hideLoading(),t.showToast({title:"签到成功",icon:"success",mask:!1}),e.$store.dispatch("user/info")}).catch(function(e){t.hideLoading(),t.showToast({title:e,mask:!1,icon:"none"})})}}};e.default=s}).call(this,n("c11b")["default"])},"9faf":function(t,e,n){"use strict";var r=n("4816"),o=n.n(r);o.a},a091:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},bfb2:function(t,e,n){"use strict";n.r(e);var r=n("a091"),o=n("374b");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("9faf");var u=n("2877"),i=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,"79a0f5f8",null);e["default"]=i.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/app-check-in/app-check-in-create-component',
    {
        'components/page-component/app-check-in/app-check-in-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("bfb2"))
        })
    },
    [['components/page-component/app-check-in/app-check-in-create-component']]
]);                
