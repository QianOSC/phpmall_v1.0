(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-lottery-qrcode-qrcode"],{"1c51":function(t,e,a){"use strict";a.r(e);var n=a("451d"),o=a("9b57");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("af80");var s=a("2877"),c=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"d0579722",null);e["default"]=c.exports},"2abd":function(t,e,a){var n=a("6a0d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("7dcca104",n,!0,{sourceMap:!1,shadowMode:!1})},"451d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-layout",[t.setting.cs_wechat_qrcode?a("v-uni-view",{staticClass:"dir-top-nowrap cross-center"},[a("v-uni-view",{staticClass:"cs-wechat"},[t._v("客服微信")]),a("v-uni-view",{staticClass:"cs-box dir-top-nowrap cross-center"},[a("v-uni-image",{staticClass:"box-grow-0",attrs:{src:t.setting.cs_wechat_qrcode,"load-lazy":""}}),t.setting.cs_wechat?a("v-uni-view",{staticClass:"box-grow-0 cs-wechat-name"},[t._v("微信号："+t._s(t.setting.cs_wechat))]):t._e(),a("v-uni-view",{staticClass:"box-grow-0 dir-left-nowrap cross-center end"},[a("v-uni-view",{staticClass:"btn",on:{click:function(e){e=t.$handleEvent(e),t.save(t.setting.cs_wechat_qrcode)}}},[t._v("保存客服二维码图片")]),t.setting.cs_wechat?a("v-uni-view",{staticClass:"btn",on:{click:function(e){e=t.$handleEvent(e),t.copy(e)}}},[t._v("复制客服微信号")]):t._e()],1)],1)],1):t._e(),t.setting.cs_wechat_flock_qrcode?a("v-uni-view",{staticClass:"dir-top-nowrap cross-center bottom"},[a("v-uni-view",{staticClass:"cs-wechat"},[t._v("微信群")]),a("v-uni-view",{staticClass:"cs-box dir-top-nowrap cross-center"},[a("v-uni-image",{staticClass:"box-grow-0",attrs:{src:t.setting.cs_wechat_flock_qrcode,"load-lazy":""}}),a("v-uni-view",{staticClass:"box-grow-0 dir-left-nowrap cross-center end"},[a("v-uni-view",{staticClass:"btn",on:{click:function(e){e=t.$handleEvent(e),t.save(t.setting.cs_wechat_flock_qrcode)}}},[t._v("保存群二维码图片")])],1)],1)],1):t._e()],1)},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"6a0d":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".text-center[data-v-d0579722]{text-align:center}.font-weight[data-v-d0579722]{font-weight:700}.page-width[data-v-d0579722]{width:100%}.goods-hover-class[data-v-d0579722]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-d0579722]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-d0579722]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-d0579722]{width:100%}.u-hover-class[data-v-d0579722]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-d0579722]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.bottom[data-v-d0579722]{margin-bottom:%?40?%}.cs-wechat[data-v-d0579722]{height:%?80?%;width:%?240?%;text-align:center;line-height:%?80?%;border:%?1?% dashed #999;color:#353535;border-radius:%?16?%;font-size:%?36?%;margin-top:%?40?%;background:#fff;margin-bottom:%?-40?%;z-index:1}.cs-box[data-v-d0579722]{width:%?670?%;border-radius:%?16?%;border:%?1?% dashed #999;background:#fff}.cs-box uni-image[data-v-d0579722]{margin-top:%?88?%;height:%?360?%;width:%?360?%;display:block}.cs-wechat-name[data-v-d0579722]{margin-top:%?32?%;font-size:%?28?%;color:#999}.end[data-v-d0579722]{margin-bottom:%?56?%;margin-top:%?24?%}.end .btn[data-v-d0579722]:nth-child(2){margin-left:%?20?%}.btn[data-v-d0579722]{text-align:center;height:%?64?%;width:%?264?%;line-height:%?64?%;color:#ff4544;border-radius:%?32?%;border:1px solid #ff4544;font-size:%?24?%}body.?%PAGE?%[data-v-d0579722]{background:#f7f7f7}",""])},"9b57":function(t,e,a){"use strict";a.r(e);var n=a("d8da"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},af80:function(t,e,a){"use strict";var n=a("2abd"),o=a.n(n);o.a},d8da:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"qrcode",components:{},data:function(){return{setting:{}}},onLoad:function(){var t=this;t.$request({url:t.$api.lottery.setting}).then(function(e){0===e.code&&(t.setting=e.data.setting)}).catch(function(t){})},methods:{save:function(t){uni.showLoading({title:"图片保存中"}),uni.downloadFile({url:t,success:function(t){uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"保存成功"})},fail:function(e){e.errMsg&&uni.showModal({title:"提示",content:"您好,请先授权保存到相册权限",showCancel:!1,success:function(e){e.confirm&&uni.openSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"保存成功"})}}):uni.showModal({title:"提示",content:"授权失败，请稍后重新获取",showCancel:!1})}})}})},complete:function(t){uni.hideLoading()}})},fail:function(t){uni.showModal({title:"图片下载失败",content:t.errMsg,showCancel:!1})},complete:function(t){uni.hideLoading()}})},copy:function(){this.$utils.uniCopy({data:this.setting.cs_wechat,success:function(){uni.showToast({title:"复制成功"})}})}}};e.default=n}}]);