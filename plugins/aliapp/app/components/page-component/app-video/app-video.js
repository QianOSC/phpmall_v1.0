;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/app-video/app-video"],{3925:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},"48b6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("9d0f"));function i(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function o(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var u=r?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=t[o]}}return n.default=t,e&&e.set(t,n),n}var u={name:"app-video",data:function(){return{start:!1,fullScreen:!1,maxTop:0}},props:{picUrl:{type:String,default:function(){return""}},url:{type:String,default:function(){return""}},width:{type:String,default:function(){return"750rpx"}},height:{type:String,default:function(){return"422rpx"}}},methods:{fullscreenChange:function(t){this.fullScreen=t.detail.fullScreen},play:function(){var t=this;this.$nextTick().then(function(){t.start=!0}),r.trigger(this.$const.EVENT_VIDEO_END),this.$emit("videoStart",!0),r.on(this.$const.EVENT_VIDEO_END,!0).then(function(){t.start=!1,t.$emit("videoStart",!1)})},autoEnd:function(){var e=this,n=null;n=t.createSelectorQuery(),n.select(".video").boundingClientRect(),n.selectViewport().scrollOffset(),n.exec(function(t){(t[0].top<=-200||t[0].top>=e.maxTop-57)&&r.trigger(e.$const.EVENT_VIDEO_END)})},preventD:function(){}},computed:{scrollTop:function(){return this.$store.state.page.scrollTop}},created:function(){this.maxTop=t.getSystemInfoSync().windowHeight},watch:{scrollTop:{handler:function(){this.start&&!this.fullScreen&&this.$utils.throttle(this.autoEnd,500)},immediate:!0}}};e.default=u}).call(this,n("c11b")["default"])},7018:function(t,e,n){},d824:function(t,e,n){"use strict";n.r(e);var r=n("3925"),i=n("f1a9");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("fddc");var u=n("2877"),c=Object(u["a"])(i["default"],r["a"],r["b"],!1,null,"0610287a",null);e["default"]=c.exports},f1a9:function(t,e,n){"use strict";n.r(e);var r=n("48b6"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},fddc:function(t,e,n){"use strict";var r=n("7018"),i=n.n(r);i.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/app-video/app-video-create-component',
    {
        'components/page-component/app-video/app-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("d824"))
        })
    },
    [['components/page-component/app-video/app-video-create-component']]
]);                
