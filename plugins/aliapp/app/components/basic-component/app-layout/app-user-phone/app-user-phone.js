;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/basic-component/app-layout/app-user-phone/app-user-phone"],{1063:function(t,e,n){"use strict";n.r(e);var r=n("75a8"),o=n("54b7");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("16b2");var i=n("2877"),c=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"e69d44ca",null);e["default"]=c.exports},"16b2":function(t,e,n){"use strict";var r=n("449e"),o=n.n(r);o.a},"449e":function(t,e,n){},"54b7":function(t,e,n){"use strict";n.r(e);var r=n("ca62"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=o.a},"75a8":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},ca62:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={name:"app-user-phone",computed:a({},(0,r.mapState)({_app_config:function(t){return t.mallConfig}}),{showPhone:function(){var t=this.$store.state.user.info,e="";return t&&""==t.mobile&&(e="showPhone"),e},img:function(){var t="";return"wxapp"==this.$platform?t=this._app_config.__wxapp_img.mall.icon_wechat:"aliapp"==this.$platform?t=this._app_config.__wxapp_img.mall.icon_alipay:"ttapp"==this.$platform&&(t=this._app_config.__wxapp_img.mall.icon_ttapp),t}}),data:function(){return{code:null}},created:function(){},methods:{onGetAuthorize:function(){var t=this,e=this;my.getPhoneNumber({success:function(n){t.$request({method:"post",url:e.$api.phone.binding,data:{data:JSON.parse(n.response).response}}).then(function(){e.$store.dispatch("user/refreshInfo")})},fail:function(){}})}}};e.default=c}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/basic-component/app-layout/app-user-phone/app-user-phone-create-component',
    {
        'components/basic-component/app-layout/app-user-phone/app-user-phone-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("1063"))
        })
    },
    [['components/basic-component/app-layout/app-user-phone/app-user-phone-create-component']]
]);                
