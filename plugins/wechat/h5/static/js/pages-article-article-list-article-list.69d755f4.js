(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-article-list-article-list"],{"3bf4":function(t,e,i){"use strict";var a=i("bf64"),n=i.n(a);n.a},"6f95":function(t,e,i){"use strict";i.r(e);var a=i("d1a6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"8b5f":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-layout",[i("v-uni-view",{staticStyle:{height:"100%","background-color":"#f7f7f7",position:"absolute",width:"100%"}},t._l(t.list,function(e){return i("v-uni-view",{key:e.id,staticClass:"article-list"},[i("app-form-id",{on:{click:function(i){i=t.$handleEvent(i),t.toDetail(e.id)}}},[i("v-uni-view",{staticClass:"article-item main-between"},[i("v-uni-text",{staticClass:"t-omit",staticStyle:{width:"90%"}},[t._v(t._s(e.title))]),i("v-uni-image",{staticClass:"enter",attrs:{src:"/static/image/icon/arrow-right.png"}})],1)],1)],1)}),1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},b1d2:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-79b78dc4]{text-align:center}.font-weight[data-v-79b78dc4]{font-weight:700}.page-width[data-v-79b78dc4]{width:100%}.goods-hover-class[data-v-79b78dc4]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-79b78dc4]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-79b78dc4]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-79b78dc4]{width:100%}.u-hover-class[data-v-79b78dc4]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-79b78dc4]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.article-item[data-v-79b78dc4]{height:%?100?%;line-height:%?100?%;background-color:#fff;border-bottom:%?1?% solid #e2e2e2;padding:0 %?30?%}.enter[data-v-79b78dc4]{margin-top:%?39?%;width:%?12?%;height:%?22?%}body.?%PAGE?%[data-v-79b78dc4]{background:#f7f7f7}",""])},bf64:function(t,e,i){var a=i("b1d2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("58ea8e90",a,!0,{sourceMap:!1,shadowMode:!1})},d1a6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach(function(e){r(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={data:function(){return{page:2,loading:!1,list:[]}},computed:o({},(0,a.mapState)({title:function(t){return t.mallConfig.bar_title}})),methods:{getList:function(){var t=this,e=this;e.$showLoading({text:"加载中..."}),this.$request({url:e.$api.article.list,method:"get"}).then(function(i){e.$hideLoading(),0==i.code&&(t.list=i.data.list)}).catch(function(t){e.$hideLoading()})},getMore:function(){var t=this;if(t.loading)return!1;t.loading=!0,uni.showLoading({title:"加载中..."}),t.$request({url:t.$api.article.list,data:{page:t.page}}).then(function(e){t.loading=!1,uni.hideLoading(),0==e.code&&(e.data.list.length>0?(t.list=t.list.concat(e.data.list),t.page++):(uni.showToast({title:"没有更多内容",icon:"none",duration:1e3}),t.loading=!0))}).catch(function(e){t.loading=!1,uni.hideLoading()})},toDetail:function(t){uni.navigateTo({url:"/pages/article/article-detail/article-detail?id="+t})}},onLoad:function(){this.getList()},onReachBottom:function(){this.getMore()}};e.default=c},fffe:function(t,e,i){"use strict";i.r(e);var a=i("8b5f"),n=i("6f95");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("3bf4");var r=i("2877"),c=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"79b78dc4",null);e["default"]=c.exports}}]);