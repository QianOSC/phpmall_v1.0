(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-full_reduce-search-search"],{2281:function(t,e,o){"use strict";var a=o("8509"),n=o.n(a);n.a},"281b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAV1BMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkABlXAAAAAHXRSTlMAD/72CFrq3tHHuoVBdxgsIh+hl498rlFibThIMsMkcD4AAAEbSURBVDjL5ZIJbsQgDAB9EJuQOwRy7f/fWUq1UdKlL+ggGRAjGyzgxti4jD+giFmIJMEUsSigyomJo9bfgskMYscsLnqYzPt8WFLhGC2RW/zsI5O6mO/yowyRJGNVOA1RlQzVbRZ28j2WCLRkIVAHRSqa89yK7OseugehWyvLWxbMKkRa2we1ZeIdr1xuwP4BTv5W+aAAH6zUXuu2LKw3oSm9oXoKuK0GTLWZtN+wIAxsEXqVCdDxUBJIEVB5BOPoVRBGqpNQ8wRmLmYY+X8IZJNgvxsV/+ikIPSShJTmo5MBoHfeAHqHAJ2bAE7aLuHM3xdNCgbfYbtl6K2cBhK3MNhU5+Kl7JquWfzShByaKFw9/peyPmDdTT75Alo5E3ei9xzWAAAAAElFTkSuQmCC"},3140:function(t,e,o){"use strict";o.r(e);var a=o("c79c"),n=o("6eb9");for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);o("2281");var i=o("2877"),s=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,"fe2b0802",null);e["default"]=s.exports},5936:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAAAAAAD///8AAAALCwsAAAAAAAAAAAAAAACLi4sAAAAAAAAAAAAAAAAAAAAAAAAiIiK4uLiysrKXl5dZWVnW1tbOzs6oqKjc3Nx5eXlkZGRKSko3Nzfv7+/PX+HIAAAAHnRSTlNaAIBhWVUQTzNsSEQwHgsEXXNyb2Z4d3F5amhkX3z09nmBAAABDklEQVQ4y4WT2YLCIAxFI02ALtDRdnRc5v9/U5aSoDyQB217T7lJk8CJwzs7GyIzW+flKQPa0jBAimEgq7+AdcFDPRhc1hrQ08B6OWXSAmgjsiBGZ0D0lsjAOmW9JaY1AQvrDbFEQMMBEGG5KADoANhywPOBicB95yPsCfyB01OpSyAQR6Xu5Qzy4IrBQ0WCoq42NnFQHBDPQbkl/fcH2QNmgJr4+9AhyAZqIsa10oNMckMY3/9/EUiQADn/lAdWQG2xJT1XKxbzh3593cLvuUqSy6Q95Ud4Cf8jSZmOgVRfrkUAx58a8L4FPeU6sgX51Ky2m+zA7W6C290ZmN7I9Ya2O/b9xemvXn95u+v/BlkaCqXG0nAGAAAAAElFTkSuQmCC"},"6eb9":function(t,e,o){"use strict";o.r(e);var a=o("ccb6"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},8509:function(t,e,o){var a=o("faf4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("acf731fc",a,!0,{sourceMap:!1,shadowMode:!1})},c79c:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("app-layout",[o("v-uni-view",{staticClass:"layout"},[o("v-uni-view",{staticClass:"search dir-left-nowrap main-between cross-center"},[o("v-uni-input",{staticClass:"input",attrs:{focus:!0,"confirm-type":"search",maxlength:"50",type:"text"},on:{blur:function(e){e=t.$handleEvent(e),t.setRequest(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.keyword.length>0,expression:"keyword.length>0"}],staticClass:"icon",on:{click:function(e){e=t.$handleEvent(e),t.empyt_search(e)}}}),o("v-uni-text",{staticClass:"search-text",on:{click:function(e){e=t.$handleEvent(e),t.setRequest(e)}}},[t._v("搜索")])],1),t.strong.length>0&&!t.search?o("v-uni-view",{staticClass:"storage"},[o("v-uni-view",{staticClass:"operating dir-left-nowrap main-between"},[o("v-uni-text",[t._v("历史搜索")]),o("v-uni-view",{staticClass:"delete-icon",on:{click:function(e){e=t.$handleEvent(e),t.setClearStorage(e)}}})],1),o("v-uni-view",{staticClass:"history-record dir-left-wrap"},t._l(t.strong,function(e,a){return o("v-uni-view",{key:a,staticClass:"item t-omit",on:{click:function(o){o=t.$handleEvent(o),t.searchRequest(e)}}},[t._v(t._s(e))])}),1)],1):t._e(),t.loading&&t.goods_list.length>0?o("v-uni-view",{staticClass:"product-list"},[o("app-product-list",{attrs:{goods_list:t.goods_list,theme:t.getTheme},on:{routeGo:function(e){e=t.$handleEvent(e),t.routeGo(e)}}})],1):0===t.goods_list.length&&t.loading&&t.search?[o("v-uni-view",{staticClass:"no-empty main-center"},[o("app-no-goods",{attrs:{title:"暂无满减商品"}})],1)]:t._e()],2)],1)},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},ccb6:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(o("a34a")),n=s(o("75cc")),r=o("2f62"),i=s(o("8112"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,a)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(o,!0).forEach(function(e){d(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function d(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function f(t){return h(t)||l(t)||g()}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}function A(t,e,o,a,n,r,i){try{var s=t[r](i),c=s.value}catch(u){return void o(u)}s.done?e(c):Promise.resolve(c).then(a,n)}function m(t){return function(){var e=this,o=arguments;return new Promise(function(a,n){var r=t.apply(e,o);function i(t){A(r,a,n,i,s,"next",t)}function s(t){A(r,a,n,i,s,"throw",t)}i(void 0)})}}var p="FULL_REDUCE_SEARCH",b={name:"search",data:function(){return{keyword:"",strong:[],page:1,goods_list:[],search:!1,is_search:0,loading:!1}},onLoad:function(){this.$storage.getStorageSync(p)?this.strong=this.$storage.getStorageSync(p):this.$storage.setStorageSync(p,[])},methods:{request:function(){var t=m(a.default.mark(function t(e){var o,n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.full_reduce.list,method:"get",data:{page:this.page,keyword:this.keyword}});case 2:o=t.sent,this.loading=!0,0===o.code&&(e&&(this.goods_list=[]),(n=this.goods_list).push.apply(n,f(o.data.list)),this.page_count=o.data.pagination.page_count);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),searchRequest:function(t){this.search=!0,this.goods_list=[],this.page=1,this.keyword=t,this.request(1)},setRequest:function(){var t=this;this.keyword=this.keyword.trim(),this.keyword.match(/^[ ]*$/)||(this.search=!0,this.goods_list=[],this.request().then(function(){for(var e=t.$storage.getStorageSync(p),o=0;o<e.length;o++)if(e[o]===t.keyword)return;e.unshift(t.keyword),e.length>15&&(e=e.slice(0,15)),t.$storage.setStorageSync(p,e)}))},routeGo:function(t){t.video_url&&this.getVideo,uni.navigateTo({url:t.page_url})},empyt_search:function(){this.goods_list=[],this.keyword="",this.search=!1,this.$storage.getStorageSync(p)?this.strong=this.$storage.getStorageSync(p):this.$storage.setStorageSync(p,[])},setClearStorage:function(){this.$storage.removeStorageSync(p),this.strong=[],this.$storage.setStorageSync(p,[])}},components:{"app-product-list":n.default,appNoGoods:i.default},computed:u({},(0,r.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,r.mapGetters)("mallConfig",{getVideo:"getVideo"}),{},(0,r.mapState)({platform:function(t){return t.gConfig.systemInfo.platform}})),onReachBottom:function(){this.page<this.page_count&&(this.page++,this.request())}};e.default=b},faf4:function(t,e,o){var a=o("b041");e=t.exports=o("2350")(!1),e.push([t.i,".text-center[data-v-fe2b0802]{text-align:center}.font-weight[data-v-fe2b0802]{font-weight:700}.page-width[data-v-fe2b0802]{width:100%}.goods-hover-class[data-v-fe2b0802]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-fe2b0802]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-fe2b0802]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-fe2b0802]{width:100%}.u-hover-class[data-v-fe2b0802]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-fe2b0802]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.layout[data-v-fe2b0802]{position:absolute;top:var(--window-top);left:0;width:%?750?%;height:100%;background-color:#fff}.search[data-v-fe2b0802]{width:%?750?%;height:%?105?%;background-color:#efeff4;padding:0 %?24?%;position:fixed;top:var(--window-top);z-index:1000}.icon[data-v-fe2b0802]{width:%?32?%;height:%?32?%;border-radius:%?64?%;position:absolute;right:%?120?%;background-image:url("+a(o("5936"))+");background-repeat:no-repeat;background-size:100% 100%;z-index:1000}.input[data-v-fe2b0802]{width:%?620?%;height:%?65?%;background-color:#fff;border-radius:%?32.5?%;padding:0 %?35?%}.search-text[data-v-fe2b0802]{font-size:%?30?%;color:#666}.storage[data-v-fe2b0802]{width:%?750?%;margin-top:%?115?%;padding:0 %?25?%}.operating[data-v-fe2b0802]{margin-top:%?34?%}.operating uni-text[data-v-fe2b0802]{font-size:%?26?%;color:#666;line-height:1}.delete-icon[data-v-fe2b0802]{width:%?28?%;height:%?32?%;background-image:url("+a(o("281b"))+");background-repeat:no-repeat;background-size:100% 100%;z-index:1000}.history-record[data-v-fe2b0802]{margin-top:%?25?%;max-height:%?440?%;overflow:hidden}.history-record .item[data-v-fe2b0802]{height:%?64?%;line-height:%?64?%;font-size:%?26?%;padding:0 %?20?%;background-color:#f7f7f7;border-radius:%?32?%;margin-bottom:%?32?%;max-width:%?700?%;margin-right:%?24?%}.no-empty[data-v-fe2b0802]{width:100%;margin-top:%?280?%}.product-list[data-v-fe2b0802]{margin-top:%?115?%}body.?%PAGE?%[data-v-fe2b0802]{background:#f7f7f7}",""])}}]);