(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-composition-search-search"],{"05b0":function(t,i,o){i=t.exports=o("2350")(!1),i.push([t.i,".text-center[data-v-46318571]{text-align:center}.font-weight[data-v-46318571]{font-weight:700}.page-width[data-v-46318571]{width:100%}.goods-hover-class[data-v-46318571]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-46318571]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-46318571]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-46318571]{width:100%}.u-hover-class[data-v-46318571]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-46318571]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-composition .app-composition-goods[data-v-46318571]{width:%?288?%;height:%?140?%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:%?24?%;position:relative}.app-composition .app-composition-goods.two uni-image[data-v-46318571]{position:absolute;width:%?140?%;height:%?140?%;border-radius:%?8?%;top:0}.app-composition .app-composition-goods.two uni-image[data-v-46318571]:first-of-type{left:0}.app-composition .app-composition-goods.two uni-image[data-v-46318571]:last-of-type{right:0}.app-composition .app-composition-goods.three uni-image[data-v-46318571]{position:absolute;width:%?140?%;height:%?66?%;border-radius:%?8?%}.app-composition .app-composition-goods.three uni-image[data-v-46318571]:first-of-type{left:0;top:0;height:%?140?%;width:%?140?%}.app-composition .app-composition-goods.three uni-image[data-v-46318571]:nth-child(2){top:0;right:0}.app-composition .app-composition-goods.three uni-image[data-v-46318571]:last-of-type{bottom:0;right:0}.app-composition .app-composition-goods.four uni-image[data-v-46318571]{position:absolute;width:%?66?%;height:%?66?%;border-radius:%?8?%}.app-composition .app-composition-goods.four uni-image[data-v-46318571]:first-of-type{left:0;top:0;height:%?140?%;width:%?140?%}.app-composition .app-composition-goods.four uni-image[data-v-46318571]:nth-child(2){top:0;right:0;width:%?140?%}.app-composition .app-composition-goods.four uni-image[data-v-46318571]:nth-child(3){right:%?74?%;bottom:0}.app-composition .app-composition-goods.four uni-image[data-v-46318571]:last-of-type{right:0;bottom:0}.app-composition .app-composition-goods.five uni-image[data-v-46318571]{position:absolute;width:%?66?%;height:%?66?%;border-radius:%?8?%}.app-composition .app-composition-goods.five uni-image[data-v-46318571]:first-of-type{left:0;top:0;height:%?140?%;width:%?140?%}.app-composition .app-composition-goods.five uni-image[data-v-46318571]:nth-child(2){top:0;right:%?74?%}.app-composition .app-composition-goods.five uni-image[data-v-46318571]:nth-child(3){right:0;top:0}.app-composition .app-composition-goods.five uni-image[data-v-46318571]:nth-child(4){right:%?74?%;bottom:0}.app-composition .app-composition-goods.five uni-image[data-v-46318571]:last-of-type{right:0;bottom:0}.app-composition .app-composition-right[data-v-46318571]{width:%?342?%}.app-composition .app-composition-info[data-v-46318571]{height:%?44?%;width:%?342?%}.app-composition .app-composition-info .app-composition-type[data-v-46318571]{font-size:%?22?%;display:block;margin:0 %?16?% 0 0}.app-composition .app-composition-info .app-composition-name[data-v-46318571]{height:%?44?%;line-height:%?44?%;width:%?260?%;font-size:%?28?%;color:#353535}.app-composition .app-composition-info .app-composition-name.long-name[data-v-46318571]{width:%?342?%}.app-composition .app-composition-type[data-v-46318571]{padding:%?2?% %?12?%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:%?2?% solid;border-radius:%?20?%;margin:%?14?% 0 0;font-size:%?22?%;display:inline-block}.app-composition .app-composition-price[data-v-46318571]{color:#999;font-size:%?24?%;margin:%?14?% 0 %?10?%}.app-composition .app-composition-price uni-text[data-v-46318571]{font-size:%?28?%}.app-composition .app-composition-discount[data-v-46318571]{color:#999;font-size:%?24?%}body.?%PAGE?%[data-v-46318571]{background:#f7f7f7}",""])},"0b23":function(t,i,o){var e=o("e173");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=o("4f06").default;a("7f301068",e,!0,{sourceMap:!1,shadowMode:!1})},"1c50":function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;o("2f62");var e={name:"app-composition",props:{item:{type:Object},large:Boolean,theme:String},data:function(){return{}},created:function(){},methods:{open:function(t){this.$emit("click",t)},toDetail:function(t){this.$emit("look",t)}}};i.default=e},3213:function(t,i,o){"use strict";var e=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("v-uni-view",{staticClass:"app-composition dir-left-nowrap"},[o("v-uni-view",{on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.open(i)}}},[1==t.item.type?o("v-uni-view",{staticClass:"app-composition-goods",class:2==t.item.goods_list.length?"two":3==t.item.goods_list.length?"three":4==t.item.goods_list.length?"four":"five"},t._l(t.item.goods_list,function(t){return o("v-uni-image",{key:t.id,attrs:{mode:"aspectFill",src:t.cover_pic}})}),1):t._e(),2==t.item.type?o("v-uni-view",{staticClass:"app-composition-goods",class:1==t.item.goods_list.length?"two":2==t.item.goods_list.length?"three":3==t.item.goods_list.length?"four":"five"},[t._l(t.item.host_list,function(t){return o("v-uni-image",{key:t.id,attrs:{mode:"aspectFill",src:t.cover_pic}})}),t._l(t.item.goods_list,function(t){return o("v-uni-image",{key:t.id,attrs:{mode:"aspectFill",src:t.cover_pic}})})],2):t._e(),t._t("default")],2),o("v-uni-view",{staticClass:"app-composition-right",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.toDetail(i)}}},[o("v-uni-view",{staticClass:"dir-left-nowrap cross-center app-composition-info"},[1!=t.item.type||t.large?t._e():o("v-uni-view",{staticClass:"app-composition-type",class:t.theme+"-m-text "+t.theme},[t._v("固定")]),2!=t.item.type||t.large?t._e():o("v-uni-view",{staticClass:"app-composition-type",class:t.theme+"-m-text "+t.theme},[t._v("搭配")]),o("v-uni-view",{staticClass:"app-composition-name t-omit",class:t.large?"long-name":""},[t._v(t._s(t.item.name))])],1),1==t.item.type&&t.large?o("v-uni-view",{staticClass:"app-composition-type",class:t.theme+"-m-text "+t.theme},[t._v("固定套餐")]):t._e(),2==t.item.type&&t.large?o("v-uni-view",{staticClass:"app-composition-type",class:t.theme+"-m-text "+t.theme},[t._v("搭配套餐")]):t._e(),o("v-uni-view",{staticClass:"app-composition-price"},[t._v("套餐价"),o("v-uni-text",{class:t.theme+"-m-text "+t.theme},[t._v("￥"+t._s(t.item.min_composition_price))])],1),o("v-uni-view",{staticClass:"app-composition-discount"},[t._v("最多可省"),o("v-uni-text",[t._v("￥"+t._s(t.item.max_discount))])],1)],1)],1)},a=[];o.d(i,"a",function(){return e}),o.d(i,"b",function(){return a})},"49af":function(t,i,o){"use strict";o.r(i);var e=o("1c50"),a=o.n(e);for(var n in e)"default"!==n&&function(t){o.d(i,t,function(){return e[t]})}(n);i["default"]=a.a},"62bb":function(t,i,o){var e=o("05b0");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=o("4f06").default;a("121375f0",e,!0,{sourceMap:!1,shadowMode:!1})},7207:function(t,i,o){"use strict";var e=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("app-layout",[o("v-uni-view",{staticClass:"search dir-left-nowrap cross-centers"},[o("v-uni-view",{staticClass:"search-view"},[o("v-uni-input",{attrs:{id:"search",placeholder:"请输入商品名称搜索",type:"text",focus:""},on:{confirm:function(i){i=t.$handleEvent(i),t.toSearch(i)},focus:function(i){i=t.$handleEvent(i),t.getFocus=!0}},model:{value:t.keyword,callback:function(i){t.keyword=i},expression:"keyword"}}),t.getFocus&&t.keyword.length>0?o("v-uni-image",{staticClass:"search-clear",attrs:{src:"/static/image/icon/delete-yuan.png"},on:{click:function(i){i=t.$handleEvent(i),t.clearSearch(i)}}}):t._e()],1),o("v-uni-view",{staticClass:"search-btn",on:{click:function(i){i=t.$handleEvent(i),t.toSearch(i)}}},[t._v("搜索")])],1),0==t.list.length&&t.searchResult?o("v-uni-view",{staticClass:"main-center no-result"},[o("v-uni-view",{staticClass:"dir-left-nowrap cross-center"},[o("v-uni-image",{staticClass:"box-grow-0 empty",attrs:{src:"/static/image/icon/empty.png"}}),o("v-uni-view",{staticClass:"box-grow-1"},[o("v-uni-view",[t._v("抱歉，没有相关商品")])],1)],1)],1):t._e(),o("v-uni-view",{staticClass:"list"},t._l(t.list,function(i){return o("v-uni-view",{key:i.id,staticClass:"item"},[o("app-composition",{attrs:{theme:t.getTheme,item:i,large:!0},on:{click:function(o){o=t.$handleEvent(o),t.show(i)},look:function(o){o=t.$handleEvent(o),t.toDetail(i)}}},[[o("v-uni-view",{staticClass:"look-goods main-center cross-center"},[o("v-uni-view",[t._v("套餐商品")]),o("v-uni-image",{attrs:{src:"/static/image/icon/icon-down.png"}})],1)]],2)],1)}),1),t.showGoods?o("v-uni-view",{staticClass:"dialog-bg",on:{click:function(i){i=t.$handleEvent(i),t.close(i)}}},[o("v-uni-view",{staticClass:"dialog",style:{bottom:t.height+"px"},attrs:{animation:t.animationData},on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i)}}},[o("v-uni-view",{staticClass:"dialog-title main-between cross-center"},[o("v-uni-view",{staticClass:"toBuy dir-left-nowrap cross-center",on:{click:function(i){i=t.$handleEvent(i),t.toDetail(t.detail)}}},[o("v-uni-image",{class:t.getTheme+"-m-back "+t.getTheme,attrs:{src:"/static/image/icon/goods-cart.png"}}),o("v-uni-view",{class:t.getTheme+"-m-text "+t.getTheme},[t._v("去购买套餐")])],1),o("v-uni-view",{staticClass:"close"},[o("v-uni-image",{attrs:{src:"/static/image/icon/close.png"},on:{click:function(i){i=t.$handleEvent(i),t.close(i)}}})],1)],1),o("v-uni-view",{staticClass:"dialog-goods-list"},[t._l(t.detail.host_list,function(i){return o("v-uni-view",{key:i.id,staticClass:"dialog-goods dir-left-nowrap",on:{click:function(o){o.stopPropagation(),o=t.$handleEvent(o),t.toGoods(i.goods_id)}}},[o("v-uni-image",{attrs:{src:i.cover_pic}}),o("v-uni-view",[o("v-uni-view",{staticClass:"t-omit-two goods-name"},[t._v(t._s(i.name))]),o("v-uni-view",{staticClass:"goods-price",class:t.getTheme+"-m-text "+t.getTheme},[t._v("￥"+t._s(i.min_price)+t._s(i.max_price!=i.min_price?"~￥"+i.max_price:""))])],1)],1)}),t._l(t.detail.goods_list,function(i){return o("v-uni-view",{key:i.id,staticClass:"dialog-goods dir-left-nowrap",on:{click:function(o){o.stopPropagation(),o=t.$handleEvent(o),t.toGoods(i.goods_id)}}},[o("v-uni-image",{attrs:{src:i.cover_pic}}),o("v-uni-view",[o("v-uni-view",{staticClass:"t-omit-two goods-name"},[t._v(t._s(i.name))]),o("v-uni-view",{staticClass:"goods-price",class:t.getTheme+"-m-text "+t.getTheme},[t._v("￥"+t._s(i.min_price)+t._s(i.max_price!=i.min_price?"~￥"+i.max_price:""))])],1)],1)})],2)],1)],1):t._e()],1)},a=[];o.d(i,"a",function(){return e}),o.d(i,"b",function(){return a})},"83a9":function(t,i,o){"use strict";o.r(i);var e=o("7207"),a=o("9d7b");for(var n in a)"default"!==n&&function(t){o.d(i,t,function(){return a[t]})}(n);o("f629");var s=o("2877"),c=Object(s["a"])(a["default"],e["a"],e["b"],!1,null,"d84ace9e",null);i["default"]=c.exports},9495:function(t,i,o){"use strict";o.r(i);var e=o("3213"),a=o("49af");for(var n in a)"default"!==n&&function(t){o.d(i,t,function(){return a[t]})}(n);o("bf5a");var s=o("2877"),c=Object(s["a"])(a["default"],e["a"],e["b"],!1,null,"46318571",null);i["default"]=c.exports},"9d7b":function(t,i,o){"use strict";o.r(i);var e=o("dec4"),a=o.n(e);for(var n in e)"default"!==n&&function(t){o.d(i,t,function(){return e[t]})}(n);i["default"]=a.a},bf5a:function(t,i,o){"use strict";var e=o("62bb"),a=o.n(e);a.a},dec4:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=o("2f62"),a=n(o("9495"));function n(t){return t&&t.__esModule?t:{default:t}}function s(t,i){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,e)}return o}function c(t){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?s(o,!0).forEach(function(i){d(t,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(o).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(o,i))})}return t}function d(t,i,o){return i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}var r={data:function(){return{list:[],keyword:"",choose_list:[],detail:{},animationData:{},height:0,searchResult:!1,searchMode:!0,getFocus:!0,showGoods:!1}},components:{"app-composition":a.default},computed:c({},(0,e.mapGetters)("mallConfig",{getTheme:"getTheme"})),methods:{show:function(t){this.detail=t,this.showGoods=!0;var i=uni.createAnimation({duration:1e3,timingFunction:"ease"});this.animation=i,i.translateY(this.height).step(),this.animationData=i.export()},close:function(){this.detail={},this.showGoods=!1},toDetail:function(t){this.close(),uni.navigateTo({url:"/plugins/composition/detail/detail?composition_id="+t.id})},toGoods:function(t){uni.navigateTo({url:"/pages/goods/goods?id="+t})},clearSearch:function(){this.keyword="",this.list=[],this.searchResult=!1},toSearch:function(){var t=this;uni.showLoading({mask:!0,title:"搜索中..."}),t.$request({url:t.$api.composition.index,data:{keyword:t.keyword}}).then(function(i){uni.hideLoading(),t.searchResult=!0,0==i.code?t.list=i.data.list:(uni.hideLoading(),uni.showToast({title:i.msg,icon:"none",duration:1e3}))}).catch(function(i){t.$hideLoading()})}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(i){t.height=-i.screenHeight}})}};i.default=r},e173:function(t,i,o){i=t.exports=o("2350")(!1),i.push([t.i,".text-center[data-v-d84ace9e]{text-align:center}.font-weight[data-v-d84ace9e]{font-weight:700}.page-width[data-v-d84ace9e]{width:100%}.goods-hover-class[data-v-d84ace9e]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-d84ace9e]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-d84ace9e]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-d84ace9e]{width:100%}.u-hover-class[data-v-d84ace9e]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-d84ace9e]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.list[data-v-d84ace9e]{margin-top:%?108?%}.list .item[data-v-d84ace9e]{margin:0 %?24?% %?20?%;background-color:#fff;border-radius:%?16?%;padding:%?24?%;padding-bottom:%?16?%}.list .item .look-goods[data-v-d84ace9e]{margin-top:%?8?%;border-radius:%?8?%;height:%?48?%;width:%?288?%;font-size:%?24?%;color:#666;background-color:#f7f7f7}.list .item .look-goods uni-image[data-v-d84ace9e]{width:%?18?%;height:%?10?%;margin-left:%?16?%}.no-result[data-v-d84ace9e]{height:%?156?%;padding:%?28?% 0;margin-top:%?88?%;font-size:%?28?%;background-color:#fff}.no-result .text[data-v-d84ace9e]{color:#999}.no-result .empty[data-v-d84ace9e]{width:%?100?%;height:%?100?%;display:block;margin-right:%?40?%}.search[data-v-d84ace9e]{width:%?750?%;height:%?88?%;position:fixed;top:var(--window-top);left:0;z-index:100;background-color:#efeff4;padding:%?15?% 0;padding-left:%?24?%;-webkit-box-sizing:border-box;box-sizing:border-box}.search .search-view[data-v-d84ace9e]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative;width:%?626?%;height:%?58?%;background-color:#fff;border-radius:%?29?%}.search .search-view .search-clear[data-v-d84ace9e]{position:absolute;right:%?15?%;top:%?14?%;width:%?30?%;height:%?30?%;z-index:100}.search .search-view uni-input[data-v-d84ace9e]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?70?% 0 %?30?%;font-size:%?26?%;height:%?58?%;line-height:%?58?%}.search .search-view .image[data-v-d84ace9e]{width:%?20?%;height:%?20?%;margin-right:%?11?%}.search .search-view .text[data-v-d84ace9e]{font-size:%?26?%;color:#999}.search .search-btn[data-v-d84ace9e]{width:%?100?%;height:%?58?%;line-height:%?58?%;text-align:center;font-size:%?28?%;color:#666}.dialog-bg[data-v-d84ace9e]{position:fixed;bottom:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3);z-index:202}.dialog-bg .dialog[data-v-d84ace9e]{width:100%;position:fixed;left:0;z-index:210;background-color:#fff;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%}.dialog-bg .dialog .dialog-title[data-v-d84ace9e]{padding:%?36?% %?24?% %?24?%;font-size:%?32?%;color:#353535}.dialog-bg .dialog .dialog-title .toBuy[data-v-d84ace9e]{font-size:%?28?%}.dialog-bg .dialog .dialog-title .toBuy uni-image[data-v-d84ace9e]{width:%?36?%;height:%?36?%;margin-right:%?12?%;display:block}.dialog-bg .dialog .dialog-title .close uni-image[data-v-d84ace9e]{width:%?36?%;height:%?36?%}.dialog-bg .dialog .dialog-goods-list[data-v-d84ace9e]{padding:0 %?24?%;max-height:%?750?%;overflow-y:auto}.dialog-bg .dialog .dialog-goods-list .dialog-goods[data-v-d84ace9e]{font-size:%?32?%;position:relative;padding:%?28?% 0;border-top:%?2?% solid #e2e2e2}.dialog-bg .dialog .dialog-goods-list .dialog-goods uni-image[data-v-d84ace9e]{width:%?180?%;height:%?180?%;margin-right:%?24?%;border-radius:%?8?%}.dialog-bg .dialog .dialog-goods-list .dialog-goods .goods-name[data-v-d84ace9e]{color:#353535;width:%?498?%}.dialog-bg .dialog .dialog-goods-list .dialog-goods .goods-price[data-v-d84ace9e]{position:absolute;bottom:%?50?%;left:%?204?%}.dialog-bg .dialog .dialog-goods-list .dialog-goods[data-v-d84ace9e]:first-of-type{border-top:0}body.?%PAGE?%[data-v-d84ace9e]{background:#f7f7f7}",""])},f629:function(t,i,o){"use strict";var e=o("0b23"),a=o.n(e);a.a}}]);