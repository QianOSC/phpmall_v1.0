;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/app-comments/app-comments"],{4287:function(t,e,n){"use strict";n.r(e);var r=n("eac3"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},5562:function(t,e,n){"use strict";n.r(e);var r=n("8a2c"),o=n("4287");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("bbdc");var a=n("2877"),c=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"07acceda",null);e["default"]=c.exports},"8a2c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},bbdc:function(t,e,n){"use strict";var r=n("e392"),o=n.n(r);o.a},e392:function(t,e,n){},eac3:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function o(t){return c(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){l(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=1,d=!1,p=!1,m={name:"app-comments",props:{goodsId:Number,url:{type:String,default:function(){return""}},showType:{type:String,default:function(){return"detail"}},reachBottom:Number},watch:{goodsId:{handler:function(){this.loadData()}},reachBottom:{handler:function(){p||this.loadData()}}},computed:s({},(0,r.mapState)({mall:function(t){return t.mallConfig.mall}}),{},(0,r.mapGetters)("mallConfig",{getTheme:"getTheme"})),methods:{loadData:function(){var e=this;0!=this.mall.setting.is_comment&&(d||(d=!0,"detail"!==this.showType&&t.showLoading({title:"加载中"}),this.$request({url:this.url?this.url:this.$api.goods.comments_list,data:{goods_id:this.goodsId,page:f,status:this.status}}).then(function(n){if(d=!1,t.hideLoading(),0===n.code){e.commentCount=n.data.comment_count,1===f&&(e.list=[]);var r=n.data.comments;r.length>0?("detail"===e.showType&&(r=r.splice(0,2)),e.list=[].concat(o(e.list),o(r)),f++):p=!0}}).catch(function(){d=!1,t.hideLoading()})))},goto:function(){t.navigateTo({url:"/pages/comments/comments?goods_id=".concat(this.goodsId)})},clickStatus:function(t){this.status=t,f=1,p=!1,this.loadData()},imgPreview:function(e,n){this.list&&this.list[e]&&this.list[e].pic_url&&this.list[e].pic_url.length>0&&t.previewImage({current:n,urls:this.list[e].pic_url})}},data:function(){return{commentCount:[],list:[],status:0}},created:function(){f=1,d=!1,p=!1},mounted:function(){this.goodsId&&this.loadData()}};e.default=m}).call(this,n("c11b")["default"])}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/app-comments/app-comments-create-component',
    {
        'components/page-component/app-comments/app-comments-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("5562"))
        })
    },
    [['components/page-component/app-comments/app-comments-create-component']]
]);                
