(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registered-setting"],{"0a25":function(t,e,n){"use strict";n.r(e);var r=n("f6cb"),a=n("6531");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("9588");var o=n("2877"),s=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,"5e783158",null);e["default"]=s.exports},"42b6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");a(n("d5ea"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){s(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={name:"setting",computed:o({},(0,r.mapState)({userInfo:function(t){return t.user.info}})),filters:{setIphone:function(t){return t&&t.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2")}},methods:{router:function(t){uni.navigateTo({url:t})},logOut:function(){uni.navigateBack(),this.$store.dispatch("user/logout")},setAvatar:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){uni.uploadFile({url:t.$api.upload.file,filePath:e.tempFilePaths[0],name:"file",success:function(e){t.userInfo.avatar=JSON.parse(e.data).data.url,t.$request({url:t.$api.registered.avatar,method:"post",data:{avatar:JSON.parse(e.data).data.url}})}})}})}}};e.default=c},"4d49":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".bd-setting[data-v-5e783158]{padding:0 %?24?%;background-color:#fff}.bd-item[data-v-5e783158]{height:%?100?%;font-size:%?28?%;color:#353535;border-bottom:%?2?% solid #f4f4f4}.bd-arrow[data-v-5e783158]{width:%?12?%;height:%?22?%;margin-left:%?20?%}.bd-btn[data-v-5e783158]{text-align:center;height:%?100?%;line-height:%?100?%;position:fixed;bottom:%?30?%;width:%?702?%;color:#353535;border-radius:%?16?%;-webkit-box-shadow:0 0 %?8?% rgba(0,0,0,.05);box-shadow:0 0 %?8?% rgba(0,0,0,.05);background-color:#fff}.bd-avatar[data-v-5e783158]{width:%?80?%;height:%?80?%}",""])},6531:function(t,e,n){"use strict";n.r(e);var r=n("42b6"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},8994:function(t,e,n){var r=n("4d49");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("431ee958",r,!0,{sourceMap:!1,shadowMode:!1})},9588:function(t,e,n){"use strict";var r=n("8994"),a=n.n(r);a.a},f6cb:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"bd-setting"},[n("v-uni-view",{staticClass:"bd-item dir-left-nowrap main-between cross-center",on:{click:function(e){e=t.$handleEvent(e),t.router("/pages/registered/authentication")}}},[n("v-uni-text",[t._v("手机号")]),n("v-uni-view",[n("v-uni-text",[t._v(t._s(t._f("setIphone")(t.userInfo&&t.userInfo.mobile)))]),n("v-uni-image",{staticClass:"bd-arrow",attrs:{src:"/static/image/icon/arrow-right.png"}})],1)],1),n("v-uni-view",{staticClass:"bd-item dir-left-nowrap main-between cross-center",on:{click:function(e){e=t.$handleEvent(e),t.router("/pages/registered/password")}}},[n("v-uni-text",[t._v("登入密码")]),n("v-uni-view",[n("v-uni-text",[t._v("修改")]),n("v-uni-image",{staticClass:"bd-arrow",attrs:{src:"/static/image/icon/arrow-right.png"}})],1)],1),n("v-uni-view",{staticClass:"bd-item dir-left-nowrap main-between cross-center",on:{click:function(e){e=t.$handleEvent(e),t.setAvatar(e)}}},[n("v-uni-text",[t._v("头像")]),n("v-uni-view",{staticClass:"cross-center"},[n("v-uni-image",{staticClass:"bd-avatar",attrs:{src:t.userInfo.avatar}}),n("v-uni-image",{staticClass:"bd-arrow",attrs:{src:"/static/image/icon/arrow-right.png"}})],1)],1),n("v-uni-view",{staticClass:"bd-item dir-left-nowrap main-between cross-center",on:{click:function(e){e=t.$handleEvent(e),t.router("/pages/registered/nickname")}}},[n("v-uni-text",[t._v("昵称")]),n("v-uni-view",[n("v-uni-text",[t._v(t._s(t.userInfo.nickname))]),n("v-uni-image",{staticClass:"bd-arrow",attrs:{src:"/static/image/icon/arrow-right.png"}})],1)],1),n("v-uni-view",{staticClass:"bd-btn",on:{click:function(e){e=t.$handleEvent(e),t.logOut(e)}}},[t._v("退出登入")])],1)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})}}]);