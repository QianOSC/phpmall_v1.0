(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-comments-comments"],{"0115":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o("30a4"));function n(t){return t&&t.__esModule?t:{default:t}}var i={name:"comments",components:{"app-comments":a.default},data:function(){return{goodsId:null,onReachBottom:0}},onLoad:function(t){this.goodsId=t.goods_id},onReachBottom:function(){this.onReachBottom=Math.random()}};e.default=i},"191b":function(t,e,o){"use strict";o.r(e);var a=o("0115"),n=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},"30a4":function(t,e,o){"use strict";o.r(e);var a=o("adc94"),n=o("a92c");for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);o("9c87");var s=o("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"00107538",null);e["default"]=r.exports},"55f6":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o("2f62");function n(t){return r(t)||s(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,a)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(o,!0).forEach(function(e){d(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function d(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var u=1,m=!1,p=!1,f={name:"app-comments",props:{goodsId:Number,url:{type:String,default:function(){return""}},showType:{type:String,default:function(){return"detail"}},reachBottom:Number},watch:{goodsId:{handler:function(){this.loadData()}},reachBottom:{handler:function(){p||this.loadData()}}},computed:l({},(0,a.mapState)({mall:function(t){return t.mallConfig.mall}}),{},(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"})),methods:{loadData:function(){var t=this;0!=this.mall.setting.is_comment&&(m||(m=!0,"detail"!==this.showType&&uni.showLoading({title:"加载中"}),this.$request({url:this.url?this.url:this.$api.goods.comments_list,data:{goods_id:this.goodsId,page:u,status:this.status}}).then(function(e){if(m=!1,uni.hideLoading(),0===e.code){t.commentCount=e.data.comment_count,1===u&&(t.list=[]);var o=e.data.comments;o.length>0?("detail"===t.showType&&(o=o.splice(0,2)),t.list=[].concat(n(t.list),n(o)),u++):p=!0}}).catch(function(){m=!1,uni.hideLoading()})))},goto:function(){uni.navigateTo({url:"/pages/comments/comments?goods_id=".concat(this.goodsId)})},clickStatus:function(t){this.status=t,u=1,p=!1,this.loadData()},imgPreview:function(t,e){this.list&&this.list[t]&&this.list[t].pic_url&&this.list[t].pic_url.length>0&&uni.previewImage({current:e,urls:this.list[t].pic_url})}},data:function(){return{commentCount:[],list:[],status:0}},created:function(){u=1,m=!1,p=!1},mounted:function(){this.goodsId&&this.loadData()}};e.default=f},"640a":function(t,e,o){var a=o("71dd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("eb7d8f0c",a,!0,{sourceMap:!1,shadowMode:!1})},"65d7":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("app-layout",[t.goodsId?o("v-uni-view",[o("app-comments",{attrs:{"show-type":"all","goods-id":t.goodsId,"reach-bottom":t.onReachBottom}})],1):t._e()],1)},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},"71dd":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".text-center[data-v-00107538]{text-align:center}.font-weight[data-v-00107538]{font-weight:700}.page-width[data-v-00107538]{width:100%}.goods-hover-class[data-v-00107538]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-00107538]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-00107538]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-00107538]{width:100%}.u-hover-class[data-v-00107538]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-00107538]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-comments .c-attr-name[data-v-00107538]{color:#999;font-size:%?24?%}.app-comments .more[data-v-00107538]{font-size:%?24?%;color:#999}.app-comments .block[data-v-00107538]{width:100%;height:%?80?%;font-size:%?26?%;background-color:#fff;padding:0 %?24?%}.app-comments .block uni-image[data-v-00107538]{width:%?12?%;height:%?22?%;display:block;margin-left:%?12?%}.app-comments .empty[data-v-00107538]{width:100%;height:%?100?%;margin-bottom:%?20?%}.app-comments .app-top[data-v-00107538]{padding:%?24?%;background-color:#fff;width:100%;height:%?100?%;position:fixed;left:0;top:var(--window-top)}.app-comments .app-top .box[data-v-00107538]{padding:0 %?20?%;margin-right:%?16?%;border-radius:%?26?%;font-size:%?26?%;height:100%}.app-comments .app-top .box.background[data-v-00107538]{background-color:#f1f1f1;color:#666}.app-comments .list[data-v-00107538]{background-color:#fff;padding:0 %?24?%}.app-comments .list .block[data-v-00107538]{padding:0}.app-comments .list .comments[data-v-00107538]{padding:%?28?% 0;width:100%;word-break:break-all}.app-comments .list .comments .title[data-v-00107538]{font-size:%?28?%;color:#999;margin-bottom:%?26?%}.app-comments .list .comments .title uni-image[data-v-00107538]{width:%?56?%;height:%?56?%;display:block;margin-right:%?26?%;border-radius:%?28?%}.app-comments .list .comments.bt[data-v-00107538]{border-top:%?1?% solid #e2e2e2}.app-comments .list .comments.bb[data-v-00107538]{border-bottom:%?1?% solid #e2e2e2}.app-comments .list .comments.bb[data-v-00107538]:last-child{border:none}.app-comments .list .comments .content[data-v-00107538]{word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.app-comments .list .comments .pic-list uni-image[data-v-00107538]{width:%?214?%;height:%?214?%;display:inline-block;margin:%?20?% %?20?% 0 0}.app-comments .list .comments .replay[data-v-00107538]{width:100%;background-color:#f7f7f7;padding:%?28?%;border-radius:%?16?%;font-size:%?28?%;color:#666}.u-text[data-v-00107538]{color:#fff}body.?%PAGE?%[data-v-00107538]{background:#f7f7f7}",""])},"9c87":function(t,e,o){"use strict";var a=o("640a"),n=o.n(a);n.a},a92c:function(t,e,o){"use strict";o.r(e);var a=o("55f6"),n=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},adc94:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return 1==t.mall.setting.is_comment?o("v-uni-view",{staticClass:"app-comments"},["detail"!==t.showType?o("v-uni-view",{staticClass:"empty"},[o("v-uni-view",{staticClass:"app-top dir-left-nowrap cross-center"},t._l(t.commentCount,function(e,a){return o("v-uni-view",{key:a,staticClass:"box box-grow-1 main-center cross-center",class:t.status===e.index?t.getTheme+"-m-back u-text "+t.getTheme:"background",on:{click:function(o){o=t.$handleEvent(o),t.clickStatus(e.index)}}},[t._v(t._s(e.name)+"("+t._s(e.count)+")")])}),1)],1):t._e(),t.list.length>0?o("v-uni-view",{staticClass:"list"},["detail"===t.showType?o("v-uni-view",{staticClass:"dir-left-nowrap block cross-center"},[o("v-uni-view",{staticClass:"box-grow-1"},[t._v("评价")]),o("v-uni-view",{staticClass:"box-grow-0 more",on:{click:function(e){e=t.$handleEvent(e),t.goto(e)}}},[t._v("查看更多")]),o("v-uni-image",{staticClass:"box-grow-0",attrs:{src:"../../../static/image/icon/arrow-right.png"}})],1):t._e(),t._l(t.list,function(e,a){return o("v-uni-view",{key:a,staticClass:"comments",class:"detail"===t.showType?"bt":"bb"},[o("v-uni-view",{staticClass:"title dir-left-nowrap cross-center"},[o("v-uni-image",{staticClass:"box-grow-0",attrs:{src:e.avatar}}),o("v-uni-view",{staticClass:"box-grow-1"},[t._v(t._s(e.nickname))]),o("v-uni-view",{staticClass:"more box-grow-0"},[t._v(t._s(e.time))])],1),o("v-uni-view",{staticClass:"c-attr-name"},[t._v(t._s(e.attr_name))]),o("v-uni-view",{class:"detail"===t.showType?"content":""},[t._v(t._s(e.content))]),o("v-uni-view",{staticClass:"dir-left-wrap pic-list"},t._l(e.pic_url,function(e,n){return o("v-uni-image",{key:n,attrs:{src:e},on:{click:function(e){e=t.$handleEvent(e),t.imgPreview(a,n)}}})}),1),"detail"!==t.showType&&e.reply_content?o("v-uni-view",{staticClass:"replay"},[o("v-uni-view",[o("v-uni-text",{class:t.getTheme+"-m-text "+t.getTheme},[t._v("商家：")]),t._v(t._s(e.reply_content))],1)],1):t._e()],1)})],2):o("v-uni-view",{staticClass:"block cross-center"},[t._v("暂无评价")])],1):t._e()},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},f179:function(t,e,o){"use strict";o.r(e);var a=o("65d7"),n=o("191b");for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);var s=o("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports}}]);