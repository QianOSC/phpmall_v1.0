(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registered-nickname"],{"366a":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".bd-nickname[data-v-1d7c340c]{min-height:calc(100vh - var(--window-top))}.bd-item[data-v-1d7c340c]{height:%?100?%;padding:%?46?% %?42?%;background-color:#fff;position:relative}.bd-input[data-v-1d7c340c]{height:%?36?%}.bd-bottom[data-v-1d7c340c]{height:%?88?%;line-height:%?88?%;color:#fff;font-size:%?36?%;border-radius:%?44?%;margin-top:%?68?%;text-align:center}.bd-yes-agree[data-v-1d7c340c]{background:#ff4544}.bd-no-agree[data-v-1d7c340c]{background:rgba(255,69,68,.5)}.bd-comment[data-v-1d7c340c]{padding:%?24?%;font-size:%?24?%;color:#999}.bd-clear[data-v-1d7c340c]{width:%?25?%;height:%?25?%;position:absolute;right:%?33?%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}",""])},5350:function(e,t,n){"use strict";n.r(t);var a=n("98d6"),i=n("9c9b");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("870c");var c=n("2877"),o=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"1d7c340c",null);t["default"]=o.exports},"870c":function(e,t,n){"use strict";var a=n("c097"),i=n.n(a);i.a},"8a51":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={name:"nickname",data:function(){return{nickname:""}},methods:{changeName:function(){var e=this;this.agree&&(this.nickname=this.nickname.trim(),this.$request({url:this.$api.registered.nickName,method:"post",data:{nickname:this.nickname}}).then(function(t){0===t.code?(uni.navigateBack(),e.userInfo.nickname=e.nickname):uni.showToast({icon:"none",title:t.msg})}))},clear:function(){this.nickname=""}},computed:r({},(0,a.mapState)({userInfo:function(e){return e.user.info}}),{agree:function(){return this.nickname?1:0}}),mounted:function(){this.nickname=this.userInfo.nickname}};t.default=o},"98d6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"bd-nickname"},[n("v-uni-view",{staticClass:"bd-item dir-left-nowrap cross-center"},[n("v-uni-input",{staticClass:"bd-input box-grow-1",attrs:{placeholder:"请输入昵称",type:"text"},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}}),n("v-uni-image",{staticClass:"bd-clear",attrs:{src:"/static/image/icon/delete-yuan.png"},on:{click:function(t){t=e.$handleEvent(t),e.clear(t)}}})],1),n("v-uni-view",{staticClass:"bd-comment"},[e._v("注：最多可设置16个汉字，可设置含有中文、英文、数字、符号组合的昵称，但不建议设置特殊字符。")]),n("v-uni-view",{staticClass:"bd-bottom",class:e.agree?"bd-yes-agree":"bd-no-agree",on:{click:function(t){t=e.$handleEvent(t),e.changeName(t)}}},[e._v("确认")])],1)},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"9c9b":function(e,t,n){"use strict";n.r(t);var a=n("8a51"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},c097:function(e,t,n){var a=n("366a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("2d7fdd06",a,!0,{sourceMap:!1,shadowMode:!1})}}]);