(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-advance-search-search"],{"0389":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("2f62");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(a,!0).forEach(function(e){o(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var s={name:"index-product-list",props:{product:{type:Array,default:function(){return[]}},theme:Object},methods:{route_jump:function(t){t.goodsWarehouse.video_url&&this.getVideo,uni.navigateTo({url:t.page_url})}},computed:n({newProduct:function(){for(var t=0;t<this.product.length;t++){var e=this.product[t].attr,a=function(t,e){var a=Number(t.deposit),i=Number(e.deposit);return a<i?-1:a>i?1:0};this.product[t].attr=e.sort(a)}return this.product}},(0,i.mapGetters)("mallConfig",{vip:"getVip",getVideo:"getVideo"}),{},(0,i.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting},mall:function(t){return t.mallConfig.mall},platform:function(t){return t.gConfig.systemInfo.platform}}))};e.default=s},"087f":function(t,e,a){"use strict";var i=a("9fe4"),r=a.n(i);r.a},"0c38":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".text-center[data-v-c35ad6a6]{text-align:center}.font-weight[data-v-c35ad6a6]{font-weight:700}.page-width[data-v-c35ad6a6]{width:100%}.goods-hover-class[data-v-c35ad6a6]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-c35ad6a6]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-c35ad6a6]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-c35ad6a6]{width:100%}.u-hover-class[data-v-c35ad6a6]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-c35ad6a6]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.search[data-v-c35ad6a6]{position:absolute;width:%?750?%;height:100%;background-color:#fff}.search .top[data-v-c35ad6a6]{height:%?104?%;width:100%;background-color:#efeff4;padding:%?20?% %?24?%;position:relative;overflow:hidden}.search .top .delete[data-v-c35ad6a6]{width:%?32?%;height:%?32?%}.search .top .input[data-v-c35ad6a6]{height:%?64?%;width:%?620?%;border-radius:%?50?%;background-color:#fff;padding-left:%?32?%;font-size:%?28?%;color:#353535}.search .top .delete[data-v-c35ad6a6]{position:absolute;right:%?125?%;z-index:1600}.search .center[data-v-c35ad6a6]{font-size:%?28?%;padding:%?32?% %?24?% 0 %?24?%}.search .center .strong[data-v-c35ad6a6]{color:#666;padding-bottom:%?24?%}.search .center .strong uni-text[data-v-c35ad6a6]{margin-top:%?4?%}.search .center .strong .delete[data-v-c35ad6a6]{width:%?44?%;height:%?32?%;padding:0 %?6?%}.search .center .strong-item[data-v-c35ad6a6]{display:inline-block;height:%?64?%;line-height:%?64?%;padding:0 %?20?%;margin:0 %?20?% %?16?% 0;color:#353535;font-size:%?28?%;border-radius:%?32?%;background-color:#f7f7f7}.order-empty[data-v-c35ad6a6]{position:absolute;top:%?555?%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?240?%;text-align:center}.order-empty>uni-image[data-v-c35ad6a6]{height:%?240?%;width:%?240?%}.order-empty>uni-text[data-v-c35ad6a6]{font-size:%?24?%;color:#666}body.?%PAGE?%[data-v-c35ad6a6]{background:#f7f7f7}",""])},"360c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.product.length>0?a("v-uni-view",{staticClass:"product-list"},t._l(t.newProduct,function(e,i){return a("v-uni-view",{key:i,staticClass:"item",class:{"item-bottom-bor":i!==t.product.length-1},on:{click:function(a){a=t.$handleEvent(a),t.route_jump(e)}}},[a("app-form-id",[a("v-uni-view",{staticClass:"item-in dir-left-wrap main-between cross-center"},[a("v-uni-image",{staticClass:"goods-cover",attrs:{src:e.cover_pic,"lazy-load":!0}}),0==e.goods_stock&&"1"==t.appSetting.is_show_stock?a("v-uni-view",{staticClass:"out-dialog"},[a("v-uni-image",{attrs:{src:"1"==t.appSetting.is_use_stock?t.appImg.plugins_out:t.appSetting.sell_out_pic}})],1):t._e(),a("v-uni-view",{staticClass:"item-content dir-top-nowrap main-between"},[a("v-uni-view",[a("v-uni-text",{staticClass:"item-name"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"item-time dir-left-wrap"},[a("v-uni-image",{staticClass:"icon",attrs:{src:"/static/image/icon/time.png"}}),a("v-uni-text",{staticClass:"text"},[t._v("距预售截止：")]),a("v-uni-text",{staticClass:"text-time",class:t.theme.color},[t._v(t._s(e.html))])],1)],1),a("v-uni-view",{staticClass:"price-button dir-left-nowrap main-between"},[a("v-uni-view",{staticClass:"price"},[0==e.use_attr?a("v-uni-text",{staticClass:"symbol",class:t.theme.color},[t._v("定金￥"+t._s(Number(e.advanceGoods.deposit))+"抵￥"+t._s(Number(e.advanceGoods.swell_deposit)))]):t._e(),1==e.use_attr?a("v-uni-text",{staticClass:"symbol",class:t.theme.color},[t._v("定金￥"+t._s(Number(e.attr[0].deposit))+"抵￥"+t._s(Number(e.attr[0].swell_deposit)))]):t._e(),a("v-uni-view",{staticClass:"dir-left-nowrap cross-center"},[1==e.is_level?[a("app-member-price",{attrs:{theme:t.theme,price:e.level_price}})]:t._e(),e.vip_card_appoint.discount?a("app-sup-vip",{attrs:{is_vip_card_user:e.vip_card_appoint.is_vip_card_user,margin:"0 0 0 10rpx",discount:e.vip_card_appoint.discount}}):t._e()],2),a("v-uni-view",{staticClass:"all-price"},[a("v-uni-text",{staticClass:"new-price",class:t.theme.color},[t._v("￥"+t._s(Number(e.price)))]),a("v-uni-text",{staticClass:"old-price"},[t._v("￥"+t._s(Number(e.original_price)))])],1)],1),e.goods_stock>0?a("v-uni-view",{staticClass:"button",class:t.theme.back},[t._v("抢购")]):t._e()],1)],1)],1)],1)],1)}),1):t._e()},r=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r})},"417e":function(t,e,a){"use strict";a.r(e);var i=a("0389"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=r.a},"4442f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-layout",[a("v-uni-view",{staticClass:"search",style:{backgroundColor:t.search?"#f7f7f7":"#ffffff"}},[a("v-uni-view",{staticClass:"top dir-left-nowrap cross-center main-between"},[a("v-uni-input",{staticClass:"input",attrs:{type:"text",focus:!0},on:{blur:function(e){e=t.$handleEvent(e),t.request(e)}},model:{value:t.search_text,callback:function(e){t.search_text=e},expression:"search_text"}}),a("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.search_text.length>0,expression:"search_text.length>0"}],staticClass:"delete",attrs:{src:"../image/delete.png"},on:{click:function(e){e=t.$handleEvent(e),t.empyt_search(e)}}}),a("v-uni-text",{staticStyle:{color:"#666666","font-size":"32rpx"},on:{click:function(e){e=t.$handleEvent(e),t.request(e)}}},[t._v("搜索")])],1),t.search?t._e():a("v-uni-view",{staticClass:"center"},[t.strong.length>0?a("v-uni-view",{staticClass:"strong dir-left-nowrap main-between cross-center"},[a("v-uni-text",[t._v("历史搜索")]),a("v-uni-image",{staticClass:"delete",attrs:{src:"/static/image/icon/delete.png"},on:{click:function(e){e=t.$handleEvent(e),t.empty_strong(e)}}})],1):t._e(),a("v-uni-view",t._l(t.strong,function(e,i){return a("v-uni-text",{key:i,staticClass:"strong-item",on:{click:function(a){a=t.$handleEvent(a),t.search_strong(e)}}},[t._v(t._s(e))])}),1)],1),t.search_list.length>0?a("v-uni-view",{staticClass:"bottom"},[a("index-product-list",{attrs:{theme:t.themeObject,product:t.search_list}})],1):t._e(),0===t.search_list.length&&t.search?a("v-uni-view",{staticClass:"order-empty"},[a("v-uni-image",{attrs:{src:"../image/product.png"}}),a("v-uni-text",[t._v("没有任何信息哦~")])],1):t._e()],1)],1)},r=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r})},"4d506":function(t,e,a){"use strict";var i=a("d205"),r=a.n(i);r.a},"51af":function(t,e,a){"use strict";a.r(e);var i=a("360c"),r=a("417e");for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);a("4d506");var o=a("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"2e62918a",null);e["default"]=s.exports},"5bcd":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".text-center[data-v-2e62918a]{text-align:center}.font-weight[data-v-2e62918a]{font-weight:700}.page-width[data-v-2e62918a]{width:100%}.goods-hover-class[data-v-2e62918a]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-2e62918a]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-2e62918a]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-2e62918a]{width:100%}.u-hover-class[data-v-2e62918a]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-2e62918a]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.product-list[data-v-2e62918a]{width:%?750?%}.product-list .item[data-v-2e62918a]{height:%?268?%;background-color:#fff;width:100%;padding:%?24?%;position:relative}.product-list .item .item-in[data-v-2e62918a]{width:%?702?%;height:%?220?%}.product-list .item .item-in .goods-cover[data-v-2e62918a]{width:%?220?%;height:%?220?%;border-radius:%?12?%}.product-list .item .item-in .out-dialog[data-v-2e62918a]{width:%?220?%;height:%?220?%;position:absolute;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.product-list .item .item-in .out-dialog uni-image[data-v-2e62918a]{width:%?220?%;height:%?220?%}.product-list .item .item-in .item-content[data-v-2e62918a]{width:%?458?%;height:%?220?%}.product-list .item .item-in .item-name[data-v-2e62918a]{width:%?458?%;line-height:%?35?%;margin:%?7?% 0;font-size:%?25?%;color:#353535;word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.product-list .item .item-in .item-time[data-v-2e62918a]{width:%?458?%;height:%?24?%;margin-top:%?8?%;line-height:%?24?%}.product-list .item .item-in .item-time .icon[data-v-2e62918a]{width:%?24?%;height:%?24?%;margin-right:%?12?%}.product-list .item .item-in .item-time .text[data-v-2e62918a]{font-size:%?25?%;color:#adadad}.product-list .item .item-in .item-time .text-time[data-v-2e62918a]{font-size:%?25?%}.product-list .item .item-in .price-button[data-v-2e62918a]{width:%?458?%;height:%?73?%;margin-bottom:%?28?%}.product-list .item .item-in .price-button .price[data-v-2e62918a]{width:%?354?%;height:%?73?%}.product-list .item .item-in .price-button .price .symbol[data-v-2e62918a]{display:inline-block;padding:%?0?% %?4?%;font-size:%?24?%;border:%?1?% solid;border-radius:%?8?%;margin:%?5?% 0 %?5?% 0}.product-list .item .item-in .price-button .price .all-price[data-v-2e62918a]{line-height:1;font-size:%?28?%;margin-top:%?8?%}.product-list .item .item-in .price-button .price .all-price .new-price[data-v-2e62918a]{font-size:%?28?%;line-height:1}.product-list .item .item-in .price-button .price .all-price .old-price[data-v-2e62918a]{font-size:%?21?%;color:#999;text-decoration:line-through;margin-left:%?12?%;line-height:1}.product-list .item .item-in .price-button .button[data-v-2e62918a]{width:%?104?%;height:%?56?%;margin-top:%?60?%;border-radius:%?28?%;font-size:%?28?%;color:#fff;text-align:center;line-height:%?56?%}.product-list .item-bottom-bor[data-v-2e62918a]{border-bottom:%?1?% solid #eee}body.?%PAGE?%[data-v-2e62918a]{background:#f7f7f7}",""])},"5f47":function(t,e,a){"use strict";a.r(e);var i=a("4442f"),r=a("919a");for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);a("087f");var o=a("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"c35ad6a6",null);e["default"]=s.exports},"919a":function(t,e,a){"use strict";a.r(e);var i=a("e4d9"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=r.a},"9fe4":function(t,e,a){var i=a("0c38");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("29ed79d8",i,!0,{sourceMap:!1,shadowMode:!1})},d205:function(t,e,a){var i=a("5bcd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("544d7e9a",i,!0,{sourceMap:!1,shadowMode:!1})},e4d9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(a("a34a")),r=o(a("51af")),n=a("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e,a,i,r,n,o){try{var s=t[n](o),c=s.value}catch(d){return void a(d)}s.done?e(c):Promise.resolve(c).then(i,r)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(i,r){var n=t.apply(e,a);function o(t){s(n,i,r,o,c,"next",t)}function c(t){s(n,i,r,o,c,"throw",t)}o(void 0)})}}function d(t){return p(t)||u(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(a,!0).forEach(function(e){v(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g="ADVANCE_SEARCH",m={name:"search",data:function(){return{search_text:"",search_list:[],strong:[],search:!1,page:1,over:!1,interval:0}},onLoad:function(){this.$storage.getStorageSync(g)?this.strong=this.$storage.getStorageSync(g):this.$storage.setStorageSync(g,[])},computed:f({},(0,n.mapGetters)("mallConfig",{getTheme:"getTheme"}),{themeObject:function(){return{back:this.getTheme+"-m-back "+this.getTheme,backQ:this.getTheme+"-m-back-q "+this.getTheme,theme:this.getTheme,color:this.getTheme+"-m-text "+this.getTheme,sBack:this.getTheme+"-s-back "+this.getTheme}}}),onHide:function(){clearInterval(this.interval)},onUnload:function(){clearInterval(this.interval)},onReachBottom:function(){var t=this;this.over||(this.page+=1,this.$request({url:this.$api.advance.goods,method:"get",data:{keyword:this.search_text,page:this.page}}).then(function(e){0===e.code&&(e.data.list.length>0?t.search_list=[].concat(d(t.search_list),d(e.data.list)):t.over=!0)}))},methods:{empyt_search:function(){this.search_text="",this.search_list=[],this.search=!1,clearInterval(this.interval)},request:function(){var t=c(i.default.mark(function t(){var e,a,r;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.search=!0,this.page=1,e=this.$storage.getStorageSync(g),!this.search_text.match(/^[ ]*$/)){t.next=5;break}return t.abrupt("return");case 5:return a=[].concat(d(e),[this.search_text]),t.next=8,this.$request({url:this.$api.advance.goods,method:"get",data:{keyword:this.search_text,page:this.page}});case 8:r=t.sent,0===r.code&&(this.search_list=r.data.list,this.set_interval(),this.$storage.setStorageSync(g,a));case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),empty_strong:function(){this.$storage.removeStorageSync(g),this.strong=[]},search_strong:function(t){this.search_text=t,this.request()},set_interval:function(){var t=this;clearInterval(this.interval),this.interval=setInterval(function(){var e=(new Date).getTime();0===t.search_list.length&&clearInterval(t.interval);for(var a=0;a<t.search_list.length;a++){var i=new Date(t.search_list[a].advanceGoods.end_prepayment_at.replace(/-/g,"/")).getTime(),r=i-e;if(r>0){var n=parseInt(r/1e3/60/60/24%30),o=parseInt(r/1e3/60/60%24),s=parseInt(r/1e3/60%60),c=parseInt(r/1e3%60);n>0?t.$set(t.search_list[a],"html",n+"天"+o+":"+(s<10?"0"+s:s)+":"+(c<10?"0"+c:c)):t.$set(t.search_list[a],"html",o+":"+(s<10?"0"+s:s)+":"+(c<10?"0"+c:c))}else t.$delete(t.search_list,a),t.search_list.length<10&&t.page_count>1&&t.$request({url:t.$api.advance.goods,method:"get"}).then(function(e){0===e.code&&(t.search_list=e.data.list,t.set_interval())})}},1e3)}},components:{"index-product-list":r.default}};e.default=m}}]);