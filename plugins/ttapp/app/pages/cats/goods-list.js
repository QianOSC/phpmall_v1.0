(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cats/goods-list"],{"380c":function(t,e,i){"use strict";var r=i("ae84"),n=i.n(r);n.a},"49da":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return r}),i.d(e,"b",function(){return n})},"4d31":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("2f62");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach(function(e){a(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=function(){return i.e("pages/cats/cats-image").then(i.bind(null,"1e69"))},c={name:"goods-list",props:["goods_list","theme"],components:{catsImage:s},data:function(){return{previewUrl:"",submitUrl:"",attrGroup:[],selectAttr:{},item:{},show:0}},computed:o({},(0,r.mapGetters)("mallConfig",{getVideo:"getVideo",isShowCart:"getShowCart"}),{},(0,r.mapState)({appSetting:function(t){return t.mallConfig.mall.setting},appImg:function(t){return t.mallConfig.__wxapp_img.mall},isListUnderlinePrice:function(t){return t.mallConfig.mall.setting.is_list_underline_price}}),{themeObject:function(){return{back:this.theme+"-m-back "+this.theme,theme:this.theme,color:this.theme+"-m-text "+this.theme,sBack:this.theme+"-s-back "+this.theme}}}),methods:{specification:function(e){var i=this;"mch"===e.sign?(this.previewUrl=this.$api.mch.order_preview,this.submitUrl=this.$api.mch.order_submit):(this.previewUrl="",this.submitUrl=""),t.showLoading({text:"",mask:!0}),this.$request({url:this.$api.goods.attr,data:{id:e.id,mch_id:e.mch_id}}).then(function(r){if(t.hideLoading(),0===r.code){var n=Object.assign(e,r.data);i.$emit("attr",i.previewUrl,i.submitUrl,e.attr_groups,n)}else t.showToast({title:r.msg,icon:"none"})})},route_go:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=").concat(e.sign)}):t.navigateTo({url:e.page_url})},onAttr:function(t){this.selectAttr=t}}};e.default=c}).call(this,i("f266")["default"])},"877a":function(t,e,i){"use strict";i.r(e);var r=i("4d31"),n=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,function(){return r[t]})}(o);e["default"]=n.a},ae84:function(t,e,i){},cc6d:function(t,e,i){"use strict";i.r(e);var r=i("49da"),n=i("877a");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("380c");var a=i("2877"),s=Object(a["a"])(n["default"],r["a"],r["b"],!1,null,"dcb1ae22",null);e["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/cats/goods-list-create-component',
    {
        'pages/cats/goods-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("cc6d"))
        })
    },
    [['pages/cats/goods-list-create-component']]
]);                
