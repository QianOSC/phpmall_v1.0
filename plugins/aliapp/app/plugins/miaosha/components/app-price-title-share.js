;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/miaosha/components/app-price-title-share"],{"51c8":function(e,t,r){},"8c55":function(e,t,r){"use strict";r.r(t);var n=r("f48d"),i=r("a00c");for(var c in i)"default"!==c&&function(e){r.d(t,e,function(){return i[e]})}(c);r("9ae2");var p=r("2877"),a=Object(p["a"])(i["default"],n["a"],n["b"],!1,null,"7af3a18f",null);t["default"]=a.exports},"9ae2":function(e,t,r){"use strict";var n=r("51c8"),i=r.n(n);i.a},a00c:function(e,t,r){"use strict";r.r(t);var n=r("cee5"),i=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,function(){return n[e]})}(c);t["default"]=i.a},cee5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("2f62");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach(function(t){p(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=function(){return r.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(r.bind(null,"409e"))},u=function(){return r.e("components/page-component/app-sup-vip/app-sup-vip").then(r.bind(null,"348c"))},o={name:"app-price-title-share",data:function(){return{shareShow:!1}},props:{is_vip_card_user:{type:Number,default:function(){return 0}},discount:{type:String,default:function(){return null}},name:{type:String},original_price:{type:String},price_max:{type:Number},price_min:{type:Number},price_member_max:{type:Number},price_member_min:{type:Number},level_show:{type:Number},url:{type:String},miaosha_buy_count:{type:Number},unit:{type:String}},computed:c({priceMember:function(){return this.price_member_min===this.price_member_max?this.price_member_min:this.price_member_min!==this.price_member_max&&0!==this.price_member_max?"".concat(this.price_member_min,"~").concat(this.price_member_max):0===this.price_member_max?"免费":void 0},price:function(){return this.price_min===this.price_max?this.price_min:this.price_min!==this.price_max&&0!==this.price_max?"".concat(this.price_min,"~").concat(this.price_max):0===this.price_max?"免费":void 0}},(0,n.mapState)({isUnderlinePrice:function(e){return e.mallConfig.mall.setting.is_underline_price},isSales:function(e){return e.mallConfig.mall.setting.is_sales}})),components:{"app-share-qr-code":a,"app-sup-vip":u}};t.default=o},f48d:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.shareShow=!0})},i=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i})}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'plugins/miaosha/components/app-price-title-share-create-component',
    {
        'plugins/miaosha/components/app-price-title-share-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("8c55"))
        })
    },
    [['plugins/miaosha/components/app-price-title-share-create-component']]
]);                
