(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/index/app-index"],{"5fb2":function(n,e,t){"use strict";t.r(e);var o=t("e4ae"),i=t.n(o);for(var p in o)"default"!==p&&function(n){t.d(e,n,function(){return o[n]})}(p);e["default"]=i.a},"6f02":function(n,e,t){"use strict";t.r(e);var o=t("f27c"),i=t("5fb2");for(var p in i)"default"!==p&&function(n){t.d(e,n,function(){return i[n]})}(p);t("83d5");var a=t("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"9d94790a",null);e["default"]=u.exports},"83d5":function(n,e,t){"use strict";var o=t("b596"),i=t.n(o);i.a},b596:function(n,e,t){},e4ae:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("2f62");function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(t,!0).forEach(function(e){a(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var u=function(){return t.e("components/page-component/app-search-for/app-search-for").then(t.bind(null,"73f4"))},c=function(){return t.e("components/page-component/app-swiper/app-swiper").then(t.bind(null,"8af3"))},r=function(){return t.e("components/page-component/app-navigation-icon/app-navigation-icon").then(t.bind(null,"047c"))},s=function(){return t.e("components/page-component/u-announcement/u-announcement").then(t.bind(null,"94703"))},l=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/app-video/app-video")]).then(t.bind(null,"d824"))},m=function(){return t.e("components/page-component/app-special-topic/app-special-topic-normal").then(t.bind(null,"26a4"))},d=function(){return t.e("components/page-component/app-exclusive-coupon/app-exclusive-coupon").then(t.bind(null,"bdfc"))},f=function(){return t.e("components/page-component/app-image-ad/app-image-ad").then(t.bind(null,"605d"))},g=function(){return t.e("components/page-component/app-reservation/app-reservation").then(t.bind(null,"99fe"))},h=function(){return t.e("components/page-component/app-good-shop-recommendation/app-good-shop-recommendation").then(t.bind(null,"3da2"))},b=function(){return t.e("components/basic-component/app-timer/app-timer").then(t.bind(null,"4ef9"))},v=function(){return t.e("components/page-component/app-quick-navigation/app-quick-navigation").then(t.bind(null,"4d92"))},w=function(){return t.e("components/page-component/app-popup-ad/app-popup-ad").then(t.bind(null,"7ec9"))},_=function(){return t.e("components/page-component/app-index-wholesale/app-index-wholesale").then(t.bind(null,"d76f"))},O=function(){return t.e("components/page-component/u-index-plugins/u-miaosha").then(t.bind(null,"a40b"))},P=function(){return t.e("components/page-component/u-index-plugins/u-pintuan").then(t.bind(null,"6799"))},x=function(){return t.e("components/page-component/u-index-plugins/u-booking").then(t.bind(null,"2b78"))},y=function(){return t.e("components/page-component/app-index-cat/app-index-cat").then(t.bind(null,"258a"))},j=function(){return t.e("components/page-component/u-index-plugins/u-advance").then(t.bind(null,"5fc6"))},k=function(){return t.e("components/page-component/u-index-plugins/u-pick").then(t.bind(null,"d44c"))},D=function(){return t.e("components/page-component/u-index-plugins/u-flash-sale").then(t.bind(null,"ed45"))},L={name:"app-index",data:function(){return{newPage:[],time:-1,tempList:[],timeout:0,flash_salse:!1}},props:{homePages:{type:Array,default:function(){return[]}},is_storage:Boolean,pageHide:Boolean,theme:Object,page_id:Number,is_required:Boolean,coupon_req:Boolean},computed:p({},(0,o.mapState)("mallConfig",{mall:function(n){return n.mall},appImg:function(n){return n.__wxapp_img.mall},appSetting:function(n){return n.mall.setting}}),{newData:function(){n.setNavigationBarTitle({title:this.mall.name})}}),watch:{homePages:{handler:function(n){this.tempList=[],clearTimeout(this.timeout),this.newPage=[],this.tempList=this.cloneData(n),this.splitData()},immediate:!0}},methods:{changeCoupon:function(n,e){this.newPage[e].coupons[n].is_receive="1"},buyProduct:function(n){this.$emit("buyProduct",n)},splitData:function(){var n=this;if(this.tempList.length){var e=this.tempList[0];this.newPage.push(e),this.tempList.splice(0,1),this.tempList.length&&(this.timeout=setTimeout(function(){n.splitData()},100))}},cloneData:function(n){return JSON.parse(JSON.stringify(n))},router:function(e){e.video_url&&1==this.getVideo?n.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=").concat(e.sign)}):n.navigateTo({url:e.page_url})}},components:{"app-search-for":u,"app-swiper":c,"app-navigation-icon":r,uAnnouncement:s,"app-video":l,"app-topic":m,"app-exclusive-coupon":d,"app-image-ad":f,"app-reservation":g,"app-good-shop-recommendation":h,"app-timer":b,"app-quick-navigation":v,"app-popup-ad":w,"app-index-cat":y,"app-index-wholesale":_,uAdvance:j,uMiaosha:O,uPintuan:P,uBooking:x,uFlashSale:D,uPick:k}};e.default=L}).call(this,t("f266")["default"])},f27c:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.newPage,function(e,t){var o=Number(e.row_num),i=Number(e.topic_num);return{$orig:n.__get_orig(e),m0:o,m1:i}}));n.$mp.data=Object.assign({},{$root:{l0:t}})},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/index/app-index-create-component',
    {
        'components/page-component/index/app-index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("6f02"))
        })
    },
    [['components/page-component/index/app-index-create-component']]
]);                
