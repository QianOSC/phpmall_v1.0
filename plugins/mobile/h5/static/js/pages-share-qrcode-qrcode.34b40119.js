(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-qrcode-qrcode"],{"2c8d":function(t,e,n){"use strict";n.r(e);var a=n("8310"),o=n("c4e9");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("44a78");var r=n("2877"),c=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"1e44924d",null);e["default"]=c.exports},"44a78":function(t,e,n){"use strict";var a=n("c42c"),o=n.n(a);o.a},8310:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-layout",[n("v-uni-view",{staticClass:"bg"},[n("v-uni-view",{staticClass:"dir-top-wrap cross-center",staticStyle:{"background-color":"#fff"}},[n("v-uni-image",{staticClass:"qrcode",attrs:{mode:"aspectFill",src:t.img},on:{click:function(e){e=t.$handleEvent(e),t.look(e)}}}),n("v-uni-view",{class:["share-btn main-center cross-center"],on:{click:function(e){e=t.$handleEvent(e),t.saveImg(e)}}},[t._v("保存图片")])],1)],1)],1)},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"9ff8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{img:""}},computed:i({},(0,a.mapState)({mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_img:function(t){return t.mallConfig.__wxapp_img.share}})),methods:{look:function(){var t=this;uni.previewImage({current:t.img,urls:[t.img]})},saveImg:function(){this.img&&this.$utils.batchSave(this.img,"image").then(function(){uni.showToast({title:"保存成功"})})},getList:function(){var t=this;t.$request({url:t.$api.share.poster,method:"get"}).then(function(e){t.$hideLoading(),0==e.code?t.img=e.data.pic_url:uni.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading(),t.$event.on(t.$const.EVENT_USER_LOGIN).then(function(){t.getList()})})}},onLoad:function(t){var e=this;uni.setNavigationBarTitle({title:e.custom_setting.menus.qrcode.name}),e.$showLoading({type:"global",text:"加载中..."}),e.getList()}};e.default=c},c42c:function(t,e,n){var a=n("f08d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("eb8feaee",a,!0,{sourceMap:!1,shadowMode:!1})},c4e9:function(t,e,n){"use strict";n.r(e);var a=n("9ff8"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},f08d:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".text-center[data-v-1e44924d]{text-align:center}.font-weight[data-v-1e44924d]{font-weight:700}.page-width[data-v-1e44924d]{width:100%}.goods-hover-class[data-v-1e44924d]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-1e44924d]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-1e44924d]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-1e44924d]{width:100%}.u-hover-class[data-v-1e44924d]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-1e44924d]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.bg[data-v-1e44924d]{position:absolute;width:100%;background-color:#fff;height:100%}.qrcode[data-v-1e44924d]{height:%?1030?%;width:%?580?%;margin-top:%?32?%}.load[data-v-1e44924d]{width:%?400?%;height:%?400?%;margin:0 auto;padding-top:%?280?%}.share-btn[data-v-1e44924d]{margin:%?34?% auto;width:%?480?%;height:%?80?%;font-size:%?32?%;color:#fff;border-radius:%?40?%;background:#ff4544}body.?%PAGE?%[data-v-1e44924d]{background:#f7f7f7}",""])}}]);