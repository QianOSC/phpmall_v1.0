(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/bd-info"],{"0e01":function(e,n,r){"use strict";r.r(n);var t=r("1716"),o=r("102c");for(var i in o)"default"!==i&&function(e){r.d(n,e,function(){return o[e]})}(i);r("d3ac");var a=r("2877"),c=Object(a["a"])(o["default"],t["a"],t["b"],!1,null,"31c331c2",null);n["default"]=c.exports},"102c":function(e,n,r){"use strict";r.r(n);var t=r("fc38"),o=r.n(t);for(var i in t)"default"!==i&&function(e){r.d(n,e,function(){return t[e]})}(i);n["default"]=o.a},1716:function(e,n,r){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},o=[];r.d(n,"a",function(){return t}),r.d(n,"b",function(){return o})},d3ac:function(e,n,r){"use strict";var t=r("fb02"),o=r.n(t);o.a},fb02:function(e,n,r){},fc38:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r("2f62");function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(r,!0).forEach(function(n){a(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var c=function(){return Promise.all([r.e("common/vendor"),r.e("components/page-component/app-vip-card/app-vip-card")]).then(r.bind(null,"19f0"))},u=function(){return r.e("components/page-component/goods/bd-flash-sale").then(r.bind(null,"975a"))},p=function(){return r.e("components/page-component/goods/app-price").then(r.bind(null,"6c9f"))},s=function(){return r.e("components/page-component/goods/bd-join-member").then(r.bind(null,"6c27"))},l=function(){return r.e("components/page-component/app-member-mark/app-member-mark").then(r.bind(null,"1ed7"))},f=function(){return r.e("components/page-component/goods/bd-quick-share").then(r.bind(null,"519b"))},b=function(){return r.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(r.bind(null,"409e"))},d={name:"u-info",props:{name:String,subtitle:String,isNegotiable:Number,theme:Object,flashSale:Object,levelShow:Number,price:Number,originalPrice:Number,priceMax:Number,priceMin:Number,priceMemberMax:Number,priceMemberMin:Number,isShowMember:{type:Boolean,default:function(){return!0}},isShowShare:{type:Boolean,default:function(){return!0}},discount:Number,isVipCardUser:{type:Number,default:function(){return 0}},sales:{type:[Number,String]},unit:String,isSales:Number,posterConfig:String,posterGenerate:String,hasPosterNav:{type:Boolean,default:function(){return!1}},goodsId:Number,shareUrl:String,extraQuickShare:Object,appSharePic:String,appShareTitle:String,goods:Object,isVip:Boolean},data:function(){return{shareShow:!1,quickShareShow:!1}},components:{AppVipCard:c,bdFlashSale:u,appPrice:p,appMemberMark:l,bdJoinMember:s,bdQuickShare:f,appShareQrCode:b},computed:i({},(0,t.mapState)({isUnderlinePrice:function(e){return e.mallConfig.mall.setting.is_underline_price}}),{newShareUrl:function(){return this.shareUrl?this.shareUrl:this.goodsId?this.$api.poster.goods+"&goods_id="+this.goodsId:""}}),methods:{quickShare:function(e){this.$emit("quickShare",e)},shareClick:function(){this.$user.isLogin()?this.extraQuickShare?this.quickShareShow=!0:this.shareShow=!0:this.$user.getInfo().then(function(){})}}};n.default=d}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/bd-info-create-component',
    {
        'components/page-component/goods/bd-info-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("0e01"))
        })
    },
    [['components/page-component/goods/bd-info-create-component']]
]);                
