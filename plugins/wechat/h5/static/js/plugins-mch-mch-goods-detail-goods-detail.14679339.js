(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-mch-mch-goods-detail-goods-detail"],{"05f6":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"app-layout"},[e("app-layout",{attrs:{overflow:t.overflow}},[0==t.list.length?e("v-uni-view",{staticClass:"show"},[e("v-uni-image",{attrs:{src:"./../../image/add-detail.png"},on:{click:function(i){i=t.$handleEvent(i),t.showMenu(0)}}}),e("v-uni-view",[t._v("快来添加内容，来介绍你的商品吧！")])],1):e("v-uni-view",[t._l(t.list,function(i,a){return e("v-uni-view",{key:a,staticClass:"list-item dir-top-nowrap"},["line"==i.type?e("v-uni-image",{staticClass:"line",attrs:{src:t.adminImg.line}}):t._e(),"img"==i.type&&""==i.pic_url?e("v-uni-view",{staticClass:"loading main-center dir-top-nowrap cross-center"},[e("v-uni-image",{staticClass:"loading-img",attrs:{src:"/static/image/loading.gif"}}),e("v-uni-view",{staticClass:"loading-text"},[t._v("图片上传中，请稍后...")])],1):t._e(),"img"==i.type&&""!=i.pic_url?e("v-uni-image",{style:[{height:""+i.height}],attrs:{src:i.pic_url},on:{load:function(i){i=t.$handleEvent(i),t.imageLoad(a,i)}}}):t._e(),"text"==i.type?e("v-uni-view",{staticClass:"txt"},[e("v-uni-text",[t._v(t._s(i.text))])],1):t._e(),e("v-uni-view",{staticClass:"choose dir-right-nowrap"},[e("v-uni-view",{staticClass:"choose-item",on:{click:function(i){i=t.$handleEvent(i),t.showMenu(a)}}},[t._v("插入")]),"text"==i.type?e("v-uni-view",{staticClass:"choose-item",on:{click:function(e){e=t.$handleEvent(e),t.editText(a,i)}}},[t._v("编辑")]):t._e(),"img"==i.type?e("v-uni-view",{staticClass:"choose-item",on:{click:function(i){i=t.$handleEvent(i),t.toggle(a)}}},[t._v("替换")]):t._e(),a!=t.list.length-1?e("v-uni-view",{staticClass:"choose-item",on:{click:function(e){e=t.$handleEvent(e),t.move(1,a,i)}}},[t._v("下移")]):t._e(),0!=a?e("v-uni-view",{staticClass:"choose-item",on:{click:function(e){e=t.$handleEvent(e),t.move(2,a,i)}}},[t._v("上移")]):t._e(),e("v-uni-view",{staticClass:"choose-item",on:{click:function(i){i=t.$handleEvent(i),t.toRemove(a)}}},[t._v("删除")])],1)],1)}),e("v-uni-view",{class:["placeholder",t.iphone_x?"iphone_x":""]}),e("v-uni-view",{class:["add",t.iphone_x?"iphone_x":""]},[e("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.save(i)}}},[t._v("保存")])],1)],2),t.textDialog||t.menu||t.is_delete?e("v-uni-view",{staticClass:"dialog",on:{click:function(i){i=t.$handleEvent(i),t.showMenu(i)}}},[t.menu?e("v-uni-view",{staticClass:"menu"},[e("v-uni-view",{staticClass:"menu-list main-center"},[t.toToggle?t._e():e("v-uni-view",{staticClass:"menu-item",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.addLine(i)}}},[e("v-uni-image",{attrs:{src:"./../../image/line.png"}}),e("v-uni-view",[t._v("分割线")])],1),t.toToggle?t._e():e("v-uni-view",{staticClass:"menu-item",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.showText(i)}}},[e("v-uni-image",{attrs:{src:"./../../image/txt.png"}}),e("v-uni-view",[t._v("文本")])],1),e("v-uni-view",{staticClass:"menu-item",on:{click:function(i){i=t.$handleEvent(i),t.add("album")}}},[e("v-uni-image",{attrs:{src:"./../../image/image.png"}}),e("v-uni-view",[t._v("图片")])],1),t.toToggle?e("v-uni-view",{staticClass:"toggle-placeholder"}):t._e(),e("v-uni-view",{staticClass:"menu-item",on:{click:function(i){i=t.$handleEvent(i),t.add("camera")}}},[e("v-uni-image",{attrs:{src:"./../../image/camera.png"}}),e("v-uni-view",[t._v("相机")])],1)],1),e("v-uni-image",{staticClass:"close",attrs:{src:"/static/image/icon/close.png"},on:{click:function(i){i=t.$handleEvent(i),t.showMenu(i)}}})],1):t._e(),t.textDialog?e("v-uni-view",{staticClass:"textarea",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i)}}},[e("v-uni-textarea",{attrs:{focus:"",maxlength:"-1","show-confirm-bar":""},on:{confirm:function(i){i=t.$handleEvent(i),t.toList(i)}},model:{value:t.txt,callback:function(i){t.txt=i},expression:"txt"}})],1):t._e(),t.is_delete?e("v-uni-view",{staticClass:"dialog-item"},[e("v-uni-view",{staticClass:"dialog-title"},[t._v("提示")]),e("v-uni-view",{staticClass:"dialog-txt"},[t._v("是否删除该组件")]),e("v-uni-view",{staticClass:"main-center btn-area"},[e("v-uni-view",{staticClass:"submit-btn",on:{click:function(i){i=t.$handleEvent(i),t.cancel(i)}}},[t._v("取消")]),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"submit-btn be-submit",on:{click:function(i){i=t.$handleEvent(i),t.remove(i)}}},[t._v("确认")])],1)],1):t._e()],1):t._e()],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},5762:function(t,i,e){"use strict";var a=e("b260"),n=e.n(a);n.a},b260:function(t,i,e){var a=e("f7a3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("70853a30",a,!0,{sourceMap:!1,shadowMode:!1})},ba88:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("2f62"),n=o(e("d5ea"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,a)}return e}function d(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?s(e,!0).forEach(function(i){c(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(e).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function c(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var l={data:function(){return{tempFilePaths:"",imgheight:0,menu:!1,list:[],txt:"",textDialog:!1,overflow:!1,is_delete:!1,toToggle:!1,index:0,reEdit:!1,loadingImg:!1,iphone_x:!1}},computed:d({},(0,a.mapState)({userInfo:function(t){return t.user.info},adminImg:function(t){return t.mallConfig.__wxapp_img.app_admin}})),methods:{toList:function(){this.textDialog=!1;var t={type:"text",text:this.txt};this.reEdit?(this.list.splice(this.index,1,t),this.reEdit=!1):this.list.splice(this.index,0,t)},editText:function(t,i){this.txt=i.text,this.reEdit=!0,this.textDialog=!0,this.index=t},move:function(t,i,e){this.list.splice(i,1),1==t?this.list.splice(i+1,0,e):this.list.splice(i-1,0,e)},toRemove:function(t){this.txt=null,this.is_delete=!0,this.index=t},cancel:function(){this.is_delete=!1},remove:function(){this.is_delete=!1,this.list.splice(this.index,1)},showMenu:function(t){t>-1?(this.index=t+1,this.menu=!0,this.txt="",this.toToggle=!1):(this.txt.length>0?this.toList():this.textDialog=!1,this.menu=!1)},toggle:function(t){this.index=t,this.toToggle=!0,this.menu=!0},addLine:function(){var t={type:"line"};this.list.splice(this.index,0,t),this.menu=!1},showText:function(){this.textDialog=!this.textDialog,this.menu=!1},add:function(t){var i=this;this.menu=!1,uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[t],success:function(t){uni.showLoading({mask:!0,title:"上传中..."});var e=i.list,a=new Image;a.src=t.tempFilePaths;var o={pic_url:"",type:"img",id:0};i.loadingImg=!0,i.toToggle?e.splice(i.index,1,o):e.splice(i.index,0,o),i.list=e,a.onload=function(){var t=document.createElement("canvas");t.width=a.width,t.height=a.height;var o=t.getContext("2d");o.drawImage(a,0,0,a.width,a.height);var s=a.src.substring(a.src.lastIndexOf(".")+1).toLowerCase(),d=t.toDataURL("image/"+s);(0,n.default)({url:i.$api.upload.file,maxNum:1,success:function(t){t.res;var a=t.header;i.$request({url:i.$api.upload.file+"&name=base64",header:a,method:"post",data:{database:d}}).then(function(t){if(uni.hideLoading(),0===t.code){for(var a in e)"img"===e[a].type&&""===e[a].pic_url&&(e[a].pic_url=t.data.url,e[a].id=t.data.id);i.loadingImg=!1,uni.hideLoading()}else uni.showModal({title:"",content:t.msg,showCancel:!1})})}})}}})},imageLoad:function(t,i){var e=i.detail.height,a=i.detail.width,n=e*(750/a);this.list[t].height=n+"rpx",this.$forceUpdate()},clear:function(t){this.img.splice(t,1),this.$storage.setStorageSync("goods_detail",this.list)},save:function(){this.loadingImg?uni.showToast({title:"上传图片中，请稍后...",icon:"none",duration:1e3}):(this.$storage.setStorageSync("goods_detail",this.list),setTimeout(function(){uni.navigateBack()},500))}},onLoad:function(){var t=this;this.list=this.$storage.getStorageSync("goods_detail")?this.$storage.getStorageSync("goods_detail"):[],uni.getSystemInfo({success:function(i){(i.model.indexOf("iPhone X")>-1||i.model.indexOf("iPhone 11")>-1||i.model.indexOf("iPhone11")>-1||i.model.indexOf("iPhone12")>-1||i.model.indexOf("Unknown Device")>-1)&&(t.iphone_x=!0)}})}};i.default=l},cd08:function(t,i,e){"use strict";e.r(i);var a=e("05f6"),n=e("e628");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("5762");var s=e("2877"),d=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"05bb97dc",null);i["default"]=d.exports},e628:function(t,i,e){"use strict";e.r(i);var a=e("ba88"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},f7a3:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".text-center[data-v-05bb97dc]{text-align:center}.font-weight[data-v-05bb97dc]{font-weight:700}.page-width[data-v-05bb97dc]{width:100%}.goods-hover-class[data-v-05bb97dc]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-05bb97dc]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-05bb97dc]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-05bb97dc]{width:100%}.u-hover-class[data-v-05bb97dc]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-05bb97dc]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}#editor[data-v-05bb97dc]{width:100%;height:100%;background-color:#fff}.app-layout[data-v-05bb97dc]{position:absolute;top:0;left:0;height:100%;width:100%;background:#fff}.app-layout[data-v-05bb97dc] .app-layout{background:#fff}.show[data-v-05bb97dc]{margin-top:%?220?%;width:100%;text-align:center;color:#353535;font-size:%?32?%}.show uni-image[data-v-05bb97dc]{width:%?310?%;height:%?310?%;margin-bottom:%?90?%}.dialog[data-v-05bb97dc]{background-color:rgba(0,0,0,.3);position:fixed;top:var(--window-top);left:0;width:100%;height:100%;z-index:20}.dialog .menu[data-v-05bb97dc]{height:%?420?%;width:100%;position:fixed;bottom:0;left:0;z-index:21;background-color:#fff;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;padding-top:%?68?%}.dialog .menu .toggle-placeholder[data-v-05bb97dc]{height:%?194?%;width:%?134?%}.dialog .menu .menu-list[data-v-05bb97dc]{margin-left:%?23?%}.dialog .menu .menu-list .menu-item[data-v-05bb97dc]{margin:0 %?28?%;width:%?120?%;text-align:center;color:#353535;font-size:%?28?%}.dialog .menu .menu-list .menu-item uni-image[data-v-05bb97dc]{height:%?120?%;width:%?120?%;margin-bottom:%?20?%}.dialog .menu .close[data-v-05bb97dc]{width:%?30?%;height:%?30?%;margin:%?88?% auto 0;display:block}.dialog .textarea[data-v-05bb97dc]{position:fixed;top:calc(%?25?% + var(--window-top));left:%?24?%;z-index:50;width:%?702?%;height:%?300?%;background-color:#fff;border-radius:%?16?%;padding:%?24?% %?28?%;color:#353535;font-size:%?28?%}.dialog .textarea uni-textarea[data-v-05bb97dc]{width:100%;height:100%}.dialog .dialog-item[data-v-05bb97dc]{padding-top:%?35?%;position:fixed;top:30%;left:0;right:0;margin:0 auto;width:%?620?%;border-radius:%?16?%;background-color:#fff}.dialog .dialog-item .dialog-title[data-v-05bb97dc]{font-size:%?32?%;color:#353535;margin-bottom:%?6?%;text-align:center}.dialog .dialog-item .dialog-txt[data-v-05bb97dc]{margin:%?40?% auto;text-align:center;font-size:%?32?%;color:#353535}.dialog .dialog-item .btn-area[data-v-05bb97dc]{height:%?88?%;position:relative;border-top:%?1?% solid #e2e2e2}.dialog .dialog-item .btn-area .line[data-v-05bb97dc]{height:%?32?%;width:%?1?%;background-color:#e2e2e2;position:absolute;top:%?28?%;left:0;right:0;margin:0 auto}.dialog .dialog-item .btn-area .submit-btn[data-v-05bb97dc]{height:%?88?%;line-height:%?88?%;font-size:%?32?%;color:#666;width:%?310?%;text-align:center}.dialog .dialog-item .btn-area .submit-btn.be-submit[data-v-05bb97dc]{color:#ff4544}.list-item[data-v-05bb97dc]{background-color:#fff;margin-top:%?-2?%}.list-item uni-image[data-v-05bb97dc]{width:100%}.list-item .loading[data-v-05bb97dc]{padding:%?75?% 0;background-color:#fff}.list-item .loading .loading-img[data-v-05bb97dc]{height:%?160?%;width:%?160?%}.list-item .loading .loading-text[data-v-05bb97dc]{font-size:%?28?%;color:#999;margin-top:%?28?%}.list-item .line[data-v-05bb97dc]{height:%?72?%}.list-item .choose[data-v-05bb97dc]{height:%?80?%;font-size:%?28?%;color:#353535;background-color:#f7f7f7;padding-bottom:%?16?%}.list-item .choose .choose-item[data-v-05bb97dc]{width:%?120?%;height:%?64?%;line-height:%?64?%;text-align:center;border:%?2?% solid #ff4544;background-color:#fff;color:#ff4544;margin-left:%?16?%}.list-item .txt[data-v-05bb97dc]{padding:%?24?%}.list-item[data-v-05bb97dc]:first-of-type{border-top:0;margin-top:0}.list-item[data-v-05bb97dc]:last-of-type{border-bottom:0}.add[data-v-05bb97dc]{position:fixed;bottom:0;left:0;height:%?120?%;width:100%;z-index:15;background-color:#fff}.add uni-view[data-v-05bb97dc]{width:%?702?%;line-height:%?80?%;height:%?80?%;margin:%?20?% auto;border-radius:%?40?%;background-color:#ff4544;color:#fff;font-size:%?32?%;text-align:center}.add.iphone_x[data-v-05bb97dc]{height:%?170?%;padding-bottom:%?50?%}.placeholder[data-v-05bb97dc]{height:%?120?%}.placeholder.iphone_x[data-v-05bb97dc]{height:%?170?%}body.?%PAGE?%[data-v-05bb97dc]{background:#f7f7f7}",""])}}]);