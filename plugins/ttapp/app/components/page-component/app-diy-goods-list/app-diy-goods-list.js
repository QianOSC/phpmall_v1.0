(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-diy-goods-list/app-diy-goods-list"],{3723:function(t,e,n){"use strict";n.r(e);var o=n("a2e9"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},"710e":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.newData,function(e,n){var o=t.isShowOriginalPrice(e);return{$orig:t.__get_orig(e),m0:o}})),o=t.__map(t.newData,function(e,n){var o=t.isShowOriginalPrice(e);return{$orig:t.__get_orig(e),m1:o}}),r=t.__map(t.newData,function(e,n){var o=t.isShowOriginalPrice(e);return{$orig:t.__get_orig(e),m2:o}});t.$mp.data=Object.assign({},{$root:{l0:n,l1:o,l2:r}})},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},a2e9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(){return n.e("components/page-component/goods/app-price").then(n.bind(null,"6c9f"))},s=function(){return n.e("components/page-component/app-diy-goods-list/app-goods-timer").then(n.bind(null,"2c94"))},c=function(){return n.e("components/page-component/app-diy-goods-list/app-diy-composition-image").then(n.bind(null,"92f0"))},l={name:"app-diy-goods-list",components:{"app-price":u,"app-goods-timer":s,appDiyCompositionImage:c},props:{list:{type:Array,default:function(){return[]}},goodsStyle:{type:Number,default:function(){return 1}},textStyle:{type:Number,default:function(){return 1}},listStyle:{type:Number,default:function(){return-1}},showBuyBtn:{type:Boolean,default:function(){return!1}},buyBtnText:{type:String,default:function(){return""}},buyBtnStyle:{type:Number,default:function(){return 1}},fill:{type:Number,default:function(){return 1}},showGoodsName:{type:Boolean,default:function(){return!0}},showGoodsPrice:{type:Boolean,default:function(){return!0}},showGoodsTag:{type:Boolean,default:function(){return!0}},goodsCoverProportion:{type:String,default:function(){return"1-1"}},customizeGoodsTag:{type:Boolean,default:function(){return!1}},goodsTagPicUrl:String,sign:String,buttonColor:{type:String,default:function(){return""}},isUnderLinePrice:{type:Boolean,default:function(){return!0}},pageHide:Boolean,theme:String,showProgressBar:{type:Boolean,default:function(){return!1}}},data:function(){return{imgRadius:"16rpx 16rpx 0 0",lisRadius:"16rpx"}},computed:i({},(0,o.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting}}),{},(0,o.mapGetters)("mallConfig",{vip:"getVip",getVideo:"getVideo"}),{newData:function(){return this.list},listClass:function(){switch(this.listStyle){case 2:return"dir-left-wrap column-2 main-between ";default:return""}},buyBtnClass:function(){var t="";return 2!==this.buyBtnStyle&&4!==this.buyBtnStyle||(t+="buy-btn-border "),4!==this.buyBtnStyle&&3!==this.buyBtnStyle||(t+="buy-btn-radius"),t},btnStyle:function(){var t="";return 1===this.buyBtnStyle||3===this.buyBtnStyle?t+="background-color: ".concat(this.buttonColor,";color: #ffffff;"):t+="border-color: ".concat(this.buttonColor,";color: ").concat(this.buttonColor,";"),t},coverPicHeight:function(){return"1-1"===this.goodsCoverProportion?"702rpx":"468rpx"},goodsClass:function(){var t="";return 2===this.goodsStyle&&(t+="border ".concat(this.theme," ")),2===this.textStyle&&(t+="text-center ".concat(this.theme," ")),t},tag:function(){var t="";switch(this.sign){case"miaosha":t="秒杀";break;case"bargain":t="砍价";break;case"pintuan":t="人团";break;case"advance":t="预售";break;case"pick":t="N元任选";break;case"composition":t="套餐组合";break;case"gift":t="社交送礼";break;case"flash-sale":t="限时抢购";break;case"wholesale":t="商品批发";break;case"exchange":t="礼品卡";break;default:t=null;break}return t},showTimer:function(){return"miaosha"===this.sign||"bargain"===this.sign||"lottery"===this.sign||"advance"===this.sign||"flash-sale"===this.sign}}),methods:{jump:function(e){if(e.video_url&&1==this.getVideo&&"lottery"!==e.sign&&"bargain"!==e.sign&&"wholesale"!==e.sign){var n=e.id;"advance"===e.sign&&(n=e.goods_id),"gift"===e.sign&&(n+="&is_share=1"),t.navigateTo({url:"/pages/goods/video?goods_id=".concat(n,"&sign=").concat(e.sign)})}else t.navigateTo({url:e.page_url})},isShowOriginalPrice:function(t){return this.isUnderLinePrice&&t.original_price&&this.showGoodsPrice&&1!==t.is_negotiable}}};e.default=l}).call(this,n("f266")["default"])},a781:function(t,e,n){"use strict";var o=n("ebae"),r=n.n(o);r.a},bed5:function(t,e,n){"use strict";n.r(e);var o=n("710e"),r=n("3723");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("a781");var a=n("2877"),u=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"6eb1fafe",null);e["default"]=u.exports},ebae:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-diy-goods-list/app-diy-goods-list-create-component',
    {
        'components/page-component/app-diy-goods-list/app-diy-goods-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("bed5"))
        })
    },
    [['components/page-component/app-diy-goods-list/app-diy-goods-list-create-component']]
]);                
