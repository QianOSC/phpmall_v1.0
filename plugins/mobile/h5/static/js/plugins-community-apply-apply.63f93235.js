(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-community-apply-apply"],{2461:function(t,e,i){"use strict";i.r(e);var a=i("6a9a"),n=i("51b6");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("f298");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"73673f67",null);e["default"]=s.exports},"2b6f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-466eb7c2]{text-align:center}.font-weight[data-v-466eb7c2]{font-weight:700}.page-width[data-v-466eb7c2]{width:100%}.goods-hover-class[data-v-466eb7c2]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-466eb7c2]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-466eb7c2]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-466eb7c2]{width:100%}.u-hover-class[data-v-466eb7c2]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-466eb7c2]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.head-bg[data-v-466eb7c2]{width:%?750?%;height:%?360?%}body.?%PAGE?%[data-v-466eb7c2]{background:#f7f7f7}",""])},"327d":function(t,e,i){"use strict";var a=i("a153"),n=i.n(a);n.a},4807:function(t,e,i){"use strict";i.r(e);var a=i("ebca"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"51b6":function(t,e,i){"use strict";i.r(e);var a=i("b327"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},5286:function(t,e,i){"use strict";i.r(e);var a=i("e78dd"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"6a9a":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-layout",[0==t.middleman.status?i("v-uni-view",{staticClass:"wait"},[i("v-uni-image",{attrs:{src:t.bonusImg.wait}}),i("v-uni-view",[t._v("谢谢您的支持，请等待审核...")]),i("v-uni-view",{staticClass:"app-button"},[i("app-button",{attrs:{theme:t.getTheme,color:"#fff",arrangement:"row",type:"important",round:"",width:"320"},on:{click:function(e){e=t.$handleEvent(e),t.toIndex(e)}}},[i("v-uni-text",{staticClass:"app-text"},[t._v("去商城逛逛")])],1)],1)],1):1==t.middleman.status?i("v-uni-view",{staticClass:"success"},[i("v-uni-image",{attrs:{src:t.bonusImg.success}}),i("v-uni-view",{staticClass:"success-text"},[t._v("您已成为团长")]),i("v-uni-view",{staticClass:"app-button"},[i("app-button",{attrs:{theme:t.getTheme,color:"#fff",arrangement:"row",type:"important",round:"",width:"320"},on:{click:function(e){e=t.$handleEvent(e),t.toCommunity(e)}}},[i("v-uni-text",{staticClass:"app-text"},[t._v("团长中心")])],1)],1)],1):-1==t.middleman.status?i("v-uni-view",{staticClass:"pay"},[i("app-head",{attrs:{theme:t.getTheme}}),i("v-uni-view",{staticClass:"pay-view"},[i("v-uni-image",{staticClass:"money-icon",attrs:{src:"./../image/money.png"}}),i("v-uni-view",{staticClass:"money-name"},[t._v(t._s(t.setting.apply_money_name))]),i("v-uni-view",[t._v("商家设置了加入门槛，你需要支付相应费用")]),i("v-uni-view",{staticClass:"pay-price"},[t._v("￥"),i("v-uni-text",[t._v(t._s(t.middleman.pay_price))])],1)],1),i("v-uni-view",{staticClass:"app-button"},[i("app-button",{attrs:{theme:t.getTheme,color:"#fff",roundSize:"40rpx",arrangement:"row",type:"important",round:""},on:{click:function(e){e=t.$handleEvent(e),t.middlemanPay(e)}}},[i("v-uni-text",{staticClass:"app-text"},[t._v("确认支付")])],1)],1)],1):3==t.middleman.status?i("v-uni-view",{staticClass:"refuse"},[i("v-uni-image",{attrs:{src:"./../image/refuse.png"}}),i("v-uni-view",[t._v("您被解除"+t._s(t.setting.middleman)+"身份")]),i("v-uni-view",{staticClass:"refuse-info"},[i("v-uni-view",[t._v("审核时间:"),i("v-uni-text",[t._v(t._s(t.middleman.apply_at))])],1),i("v-uni-view",{staticClass:"refuse-reason"},[t._v("解除理由:"),i("v-uni-text",{staticStyle:{"word-wrap":"break-word"}},[t._v(t._s(t.middleman.reason?t.middleman.reason:"无"))])],1),i("v-uni-view",{staticClass:"app-button"},[i("app-button",{attrs:{theme:t.getTheme,color:"#fff",arrangement:"row",type:"important",round:"",width:"320"},on:{click:function(e){e=t.$handleEvent(e),t.reApply(e)}}},[i("v-uni-text",{staticClass:"app-text"},[t._v("再次申请")])],1)],1)],1)],1):2==t.middleman.status?i("v-uni-view",{staticClass:"refuse"},[i("v-uni-image",{attrs:{src:"./../image/refuse.png"}}),i("v-uni-view",[t._v("您的申请被拒")]),i("v-uni-view",{staticClass:"refuse-info"},[i("v-uni-view",[t._v("审核时间:"),i("v-uni-text",[t._v(t._s(t.middleman.apply_at))])],1),i("v-uni-view",{staticClass:"refuse-reason"},[t._v("拒绝理由:"),i("v-uni-text",{staticStyle:{"word-wrap":"break-word"}},[t._v(t._s(t.middleman.reason?t.middleman.reason:"无"))])],1),i("v-uni-view",{staticClass:"app-button"},[i("app-button",{attrs:{theme:t.getTheme,color:"#fff",arrangement:"row",type:"important",round:""},on:{click:function(e){e=t.$handleEvent(e),t.reApply(e)}}},[i("v-uni-text",{staticClass:"app-text"},[t._v("再次申请")])],1)],1)],1)],1):-2==t.middleman.status?i("v-uni-view",[i("app-head",{attrs:{theme:t.getTheme}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"big-title-text"},[t._v(t._s(t.setting.middleman)+"信息")]),i("v-uni-view",[t._v("用于商品配送管理，请填写真实信息")])],1),i("v-uni-view",{staticClass:"app-view"},[i("v-uni-view",{staticClass:"app-line main-between cross-center"},[i("v-uni-text",{staticClass:"app-text box-grow-0"},[t._v("姓名")]),t.address?i("v-uni-view",{staticClass:"address-input",staticStyle:{opacity:"0.3"}},[t._v(t._s(t.form.name))]):i("v-uni-input",{staticClass:"address-input",attrs:{"placeholder-style":"color:#cdcdcd",placeholder:"请输入姓名",maxlength:"10",type:"text"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("v-uni-view",{staticClass:"app-line main-between cross-center"},[i("v-uni-text",{staticClass:"app-text box-grow-0"},[t._v("手机号")]),t.address?i("v-uni-view",{staticClass:"address-input",staticStyle:{opacity:"0.3"}},[t._v(t._s(t.form.mobile))]):i("v-uni-input",{staticClass:"address-input",attrs:{"placeholder-style":"color:#cdcdcd",placeholder:"请输入手机号",maxlength:"11",type:"number"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),i("v-uni-view",{staticClass:"app-line main-between cross-center"},[i("v-uni-text",{staticClass:"app-text box-grow-0"},[t._v("省市区")]),t.address?i("v-uni-view",{staticClass:"address-input",staticStyle:{opacity:"0.3"}},[t._v(t._s(t.form.province)+","+t._s(t.form.city)+","+t._s(t.form.district))]):i("v-uni-view",{staticClass:"box-grow-1 area-left"},[i("app-area-picker",{attrs:{ids:[t.form.province_id,t.form.city_id,t.form.district_id]},on:{customevent:function(e){e=t.$handleEvent(e),t.areaEvent(e)}}})],1)],1),0==t.is_refund_address?i("v-uni-view",{staticClass:"app-line main-between cross-center"},[i("v-uni-text",{staticClass:"app-text box-grow-0"},[t._v("所在地区")]),i("v-uni-view",{staticClass:"h-100 main-right dir-left-nowrap cross-center box-grow-1",style:{opacity:t.address?"0.3":"1"},on:{click:function(e){e=t.$handleEvent(e),t.getChooseLocation(e)}}},[i("v-uni-view",{staticClass:"box-grow-0 c-address t-omit",class:{placeholder:!t.location}},[t._v(t._s(t.location?t.location:"请选择所在地区"))]),i("v-uni-image",{staticClass:"box-grow-0 icon-arrow-image",attrs:{src:"/static/image/icon/arrow-right.png"}})],1)],1):t._e(),i("v-uni-view",{staticClass:"app-line main-between cross-center"},[i("v-uni-text",{staticClass:"app-text box-grow-0"},[t._v("提货地址")]),i("v-uni-input",{staticClass:"address-input",attrs:{"placeholder-style":"color:#cdcdcd",placeholder:"请输入详细提货地址",type:"text",focus:t.focus},on:{blur:function(e){e=t.$handleEvent(e),t.focus=!1}},model:{value:t.form.detail,callback:function(e){t.$set(t.form,"detail",e)},expression:"form.detail"}})],1)],1),i("v-uni-view",{staticClass:"app-button"},[t.address?i("app-button",{attrs:{theme:t.getTheme,color:"#fff",arrangement:"row",type:"important",round:"",width:"90%"},on:{click:function(e){e=t.$handleEvent(e),t.saveAddress(e)}}},[i("v-uni-text",{staticClass:"app-text"},[t._v("保存")])],1):i("app-button",{attrs:{theme:t.getTheme,color:"#fff",arrangement:"row",type:"important",round:"",width:"90%"},on:{click:function(e){e=t.$handleEvent(e),t.submit(e)}}},[i("v-uni-text",{staticClass:"app-text"},[t._v("下一步")])],1)],1)],1):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},7029:function(t,e,i){"use strict";var a=i("a4c6"),n=i.n(a);n.a},"87a7":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-image",{staticClass:"head-bg",style:{height:t.height},attrs:{src:t.head}})},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"8d39":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-7eb1894c]{text-align:center}.font-weight[data-v-7eb1894c]{font-weight:700}.page-width[data-v-7eb1894c]{width:100%}.goods-hover-class[data-v-7eb1894c]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-7eb1894c]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-7eb1894c]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-7eb1894c]{width:100%}.u-hover-class[data-v-7eb1894c]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-7eb1894c]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.area-picker-left[data-v-7eb1894c]{min-width:%?115?%;font-size:%?28?%;padding-right:%?24?%;line-height:1.5;margin-left:auto}.area-picker-left .address-name-color[data-v-7eb1894c]{color:#353535}.area-picker-left .address-place-name-color[data-v-7eb1894c]{color:#999}.arrow-image[data-v-7eb1894c]{width:%?12?%;height:%?24?%}body.?%PAGE?%[data-v-7eb1894c]{background:#f7f7f7}",""])},"8e44":function(t,e,i){"use strict";i.r(e);var a=i("e90e"),n=i("5286");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("7029");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"7eb1894c",null);e["default"]=s.exports},"97de":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-73673f67]{text-align:center}.font-weight[data-v-73673f67]{font-weight:700}.page-width[data-v-73673f67]{width:100%}.goods-hover-class[data-v-73673f67]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-73673f67]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-73673f67]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-73673f67]{width:100%}.u-hover-class[data-v-73673f67]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-73673f67]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.success[data-v-73673f67]{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#fff;text-align:center}.success .success-text[data-v-73673f67]{margin:%?-20?% auto %?30?%;color:#353535;font-size:%?40?%}.success uni-image[data-v-73673f67]{height:%?270?%;width:%?380?%;margin:%?120?% auto %?60?%}.success .app-button[data-v-73673f67]{margin:%?24?% auto;width:%?320?%}.pay[data-v-73673f67]{font-size:%?36?%;color:#353535;text-align:center;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff}.pay .pay-view[data-v-73673f67]{position:relative;margin-top:%?-324?%;color:#fff;font-size:%?26?%}.pay .pay-view .money-icon[data-v-73673f67]{width:%?93?%;height:%?93?%;border-radius:50%;margin-bottom:%?20?%}.pay .pay-view .money-name[data-v-73673f67]{font-size:%?34?%;margin-bottom:%?10?%}.pay .pay-view .pay-price[data-v-73673f67]{margin-top:%?150?%;color:#353535;font-size:%?50?%}.pay .pay-view .pay-price uni-text[data-v-73673f67]{font-size:%?70?%}.refuse[data-v-73673f67]{font-size:%?36?%;color:#353535;text-align:center;top:0;left:0;width:100%;height:100%;background-color:#fff;position:absolute}.refuse uni-image[data-v-73673f67]{height:%?160?%;width:%?160?%;margin:%?80?% auto %?40?%}.refuse uni-view[data-v-73673f67]{margin-bottom:%?25?%}.refuse .refuse-reason[data-v-73673f67]{margin:%?10?% 0 %?76?%}.refuse .refuse-info[data-v-73673f67]{font-size:%?28?%;color:#999;border-top:%?1?% solid #e2e2e2;width:%?520?%;margin:0 auto;margin-bottom:0;padding-top:%?30?%;padding-left:%?20?%;text-align:left}.refuse .refuse-info uni-text[data-v-73673f67]{color:#666}.refuse .app-button[data-v-73673f67]{margin:%?24?% auto;width:%?320?%}.wait[data-v-73673f67]{color:#666;font-size:%?32?%;text-align:center;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff}.wait uni-view[data-v-73673f67]{margin-bottom:%?68?%}.wait uni-image[data-v-73673f67]{height:%?270?%;width:%?380?%;margin:%?120?% auto %?60?%}.wait .app-button[data-v-73673f67]{margin:%?24?% auto;width:%?320?%}.title[data-v-73673f67]{font-size:%?26?%;color:#fff;margin-top:%?-360?%;text-align:center;height:%?160?%;padding-top:%?30?%;position:relative}.title .big-title-text[data-v-73673f67]{font-size:%?34?%;margin:0 0 %?12?%}.popup[data-v-73673f67]{position:fixed;background:rgba(0,0,0,.5);padding:%?50?%;top:var(--window-top);left:0;right:0;bottom:0;z-index:2000}.popup .textarea[data-v-73673f67]{width:100%;background:#fff;border:%?1?% solid #ccc;z-index:1;padding:%?24?%;border-radius:%?5?%}.popup .c[data-v-73673f67]{position:fixed;left:0;top:var(--window-top);right:0;bottom:0;z-index:0}.h-100[data-v-73673f67]{height:100%}.app-button[data-v-73673f67]{margin:%?40?% %?24?%;color:#fff}.app-button uni-text[data-v-73673f67]{color:#fff!important}.address-input[data-v-73673f67]{width:%?580?%;font-size:%?28?%;color:#353535}.area-left[data-v-73673f67]{text-align:text;margin-left:auto}.app-view[data-v-73673f67]{background-color:#fff;position:relative;z-index:10;width:%?702?%;margin:0 auto;border-radius:%?16?%}.app-view .app-line[data-v-73673f67]{height:%?118?%;line-height:%?118?%;padding:0 %?32?% 0 0}.app-view .app-line uni-text.app-text[data-v-73673f67]{font-size:%?28?%;color:#353535;width:%?140?%;margin-right:%?20?%;text-align:right;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.app-view .c-address[data-v-73673f67]{padding-right:%?24?%;font-size:%?28?%;color:#353535;width:%?500?%;height:100%}.app-view .c-address.placeholder[data-v-73673f67]{color:#cdcdcd}.app-view .icon-arrow-image[data-v-73673f67]{width:%?12?%;height:%?24?%}.app-view .tip[data-v-73673f67]{padding:0 %?24?% %?24?% %?24?%;background:#fff;color:#b7b7b7}body.?%PAGE?%[data-v-73673f67]{background:#f7f7f7}",""])},a153:function(t,e,i){var a=i("2b6f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4203cdbf",a,!0,{sourceMap:!1,shadowMode:!1})},a4c6:function(t,e,i){var a=i("8d39");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4c821193",a,!0,{sourceMap:!1,shadowMode:!1})},b327:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,n=d(i("a34a")),o=i("2f62"),r=d(i("8e44")),s=d(i("d0d3")),c=d(i("47cb"));function d(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return p(t)||f(t,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var i=[],a=!0,n=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(a=(r=s.next()).done);a=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){n=!0,o=c}finally{try{a||null==s["return"]||s["return"]()}finally{if(n)throw o}}return i}}function p(t){if(Array.isArray(t))return t}function m(t,e,i,a,n,o,r){try{var s=t[o](r),c=s.value}catch(d){return void i(d)}s.done?e(c):Promise.resolve(c).then(a,n)}function v(t){return function(){var e=this,i=arguments;return new Promise(function(a,n){var o=t.apply(e,i);function r(t){m(o,a,n,r,s,"next",t)}function s(t){m(o,a,n,r,s,"throw",t)}r(void 0)})}}function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(i,!0).forEach(function(e){b(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var w={data:function(){return{wait:!1,middleman:{status:99},id:null,form:{location:"",latitude:"",longitude:"",name:"",mobile:"",province_id:0,city_id:0,district_id:0,detail:""},location:"",setting:{middleman:""},is_refund_address:0,detail_url:"",list:[],submit_status:!1,automatic:"",province:[],focus:!1,address:!1}},computed:g({},(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,o.mapState)({community:function(t){return t.mallConfig.__wxapp_img.community},bonusImg:function(t){return t.mallConfig.__wxapp_img.bonus}})),components:{appAreaPicker:r.default,appTextArea:c.default,appHead:s.default},onLoad:function(t){t.id>0&&(this.address=!0),this.getPlace(),this.getStatus()},methods:(a={areaEvent:function(t){t&&(this.form.province_id=t.province.id,this.form.city_id=t.city.id,this.form.district_id=t.district.id)},toCommunity:function(){uni.navigateTo({url:"/plugins/community/index/index"})},toIndex:function(){uni.navigateTo({url:"/pages/index/index"})},reApply:function(){var t=this;t.middleman.status=-2},middlemanPay:function(){var t=this;if(t.id>0)return t.pay(t.id),!1;t.$request({url:t.$api.community.apply_pay,data:{id:t.middleman.id}}).then(function(e){0==e.code?t.pay(e.data.id):uni.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},getStatus:function(){var t=this;t.$request({url:t.$api.community.index}).then(function(e){t.$hideLoading(),0==e.code?(t.setting=e.data.setting,uni.setNavigationBarTitle({title:"申请"+t.setting.middleman}),e.data.middleman.id>0?(t.middleman=e.data.middleman,t.address&&(t.middleman.status=-2,t.form=e.data.middleman,t.form.province==t.form.city?t.location=t.form.province+" "+t.form.district+" "+t.form.location:t.location=t.form.province+" "+t.form.city+" "+t.form.district+" "+t.form.location,uni.setNavigationBarTitle({title:"填写"+t.setting.middleman+"信息"}))):t.middleman.status=-2):uni.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(){t.$hideLoading()})},getPlace:function(){var t=this;t.$request({url:t.$api.city.cityName}).then(function(e){0===e.code?t.province=e.data.list:uni.showToast({title:e.msg,icon:"none",duration:1e3})})},getChooseLocation:function(){var t=v(n.default.mark(function t(){var e,i,a,o,r,s,c,d,l,f,p,m;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this,!e.address){t.next=3;break}return t.abrupt("return",!1);case 3:return t.next=5,uni.chooseLocation();case 5:if(i=t.sent,a=u(i,2),o=a[0],r=a[1],!r){t.next=30;break}if("我的位置"!=r.name&&"我的位置"!=r.address){t.next=13;break}return uni.showToast({title:"请选择具体位置",icon:"none"}),t.abrupt("return",!1);case 13:for(f in s="",c="",d="",l=r.name,r.address||(r.address="其他其他其他"),r.address=r.address.replace("北京市北京市","北京市"),r.address=r.address.replace("天津市天津市","天津市"),r.address=r.address.replace("上海市上海市","上海市"),r.address=r.address.replace("重庆市重庆市","重庆市"),r.address=r.address.replace("香港特别行政区香港特别行政区","香港特别行政区"),r.address=r.address.replace("澳门特别行政区澳门特别行政区","澳门特别行政区"),e.province)if(0==r.address.indexOf(e.province[f].name))for(p in s="undefined"!=e.province[f].name?e.province[f].name:"",e.form.province_id=e.province[f].id,"北京市"!=s&&"天津市"!=s&&"上海市"!=s&&"重庆市"!=s&&"澳门特别行政区"!=s&&"香港特别行政区"!=s&&(r.address=r.address.replace(s,"")),e.province[f].list)if(0==r.address.indexOf(e.province[f].list[p].name)&&e.province[f].list[p].parent_id==e.province[f].id)for(m in c="undefined"!=e.province[f].list[p].name?e.province[f].list[p].name:"",e.form.city_id=e.province[f].list[p].id,r.address=r.address.replace(c,""),e.province[f].list[p].list)0==r.address.indexOf(e.province[f].list[p].list[m].name)&&e.province[f].list[p].list[m].parent_id==e.province[f].list[p].id&&e.province[f].list[p].list[m].provinceCode==e.province[f].code&&(d="undefined"!=e.province[f].list[p].list[m].name?e.province[f].list[p].list[m].name:"",e.form.district_id=e.province[f].list[p].list[m].id);s&&d&&l||(e.form.province_id="",e.form.city_id="",e.form.district_id=""),e.location=s==c?s+" "+d+" "+l:s+" "+c+" "+d+" "+l,e.form.location=l,e.form.latitude=r.latitude,e.form.longitude=r.longitude;case 30:o&&function(){uni.showModal({title:"授权权限",content:"请先授权地理位置权限",success:function(t){t.confirm&&uni.openSetting({success:function(t){t.authSetting["scope.userLocation"]?uni.chooseLocation({success:function(t){e.getChooseLocation()}}):uni.showToast({title:"授权失败",icon:"none"})}})}})};case 31:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getInfo:function(t){var e=this;this.$request({url:this.$api.user.wechat_district,data:{province_name:t.address[0],city_name:t.address[1],county_name:t.address[2]}}).then(function(i){if(0===i.code){var a=i.data.district,n=a.province,o=a.city,r=a.district;t.province_id=n.id,t.city_id=o.id,t.district_id=r.id,e.form=t}}).catch(function(){uni.showToast({title:"网络异常",icon:"none"})})}},b(a,"areaEvent",function(t){t&&(this.form.province_id=t.province.id,this.form.city_id=t.city.id,this.form.district_id=t.district.id,this.list=[t.province.name,t.city.name,t.district.name])}),b(a,"saveAddress",function(){var t=this;return this.form.detail&&this.form.province_id&&this.form.city_id&&this.form.district_id?void t.$request({url:t.$api.community.edit_address,data:{detail:t.form.detail},method:"post"}).then(function(t){uni.showToast({title:t.msg,icon:"none",duration:1e3}),0==t.code&&setTimeout(function(){uni.navigateBack({})},1e3)}).catch(function(e){t.$hideLoading()}):(uni.showToast({title:"提货地址不能为空",icon:"none"}),!1)}),b(a,"submit",function(){var t=v(n.default.mark(function t(){var e,i,a,o,r,s,c,d,u,l,f;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!this.submit_status){t.next=3;break}return t.abrupt("return");case 3:if(this.form.detail||(e="提货地址不能为空"),this.form.location||(e="所在地区不能为空"),this.form.mobile||(e="手机号不能为空"),this.form.name||(e="姓名不能为空"),!e){t.next=10;break}return uni.showToast({title:e,icon:"none"}),t.abrupt("return");case 10:return this.submit_status=!0,i=this.$api.community.apply,a=this.form,this.is_refund_address>0&&(i=this.$api.app_admin.refund_address_edit,o=this.form,r=o.id,s=o.name,c=o.mobile,d=o.detail,a={form:JSON.stringify({id:r,name:s,mobile:c,address_detail:d,address:this.list,is_default:0,remark:""})}),t.next=16,this.$request({url:i,data:a,method:"POST"});case 16:u=t.sent,this.submit_status=!1,0===u.code?(l=u.data.queue_id,f=u.data.token,this.getResult(l,f)):uni.showToast({title:u.msg,icon:"none"}),t.next=25;break;case 21:throw t.prev=21,t.t0=t["catch"](0),this.submit_status=!1,new Error(t.t0);case 25:case"end":return t.stop()}},t,this,[[0,21]])}));function e(){return t.apply(this,arguments)}return e}()),b(a,"getResult",function(t,e){var i=this;this.$request({url:this.$api.community.apply_result,data:{queue_id:t,token:e}}).then(function(a){0===a.code?a.data.retry&&1===a.data.retry?i.getPayDataTimer=setTimeout(function(){i.getResult(t,e)},1e3):(uni.hideLoading(),a.data.id>0&&(i.id=a.data.id),i.getStatus()):(i.exchangeCoupon=!1,uni.hideLoading(),uni.showModal({title:"提示",content:a.msg,showCancel:!1}))}).catch(function(t){i.exchangeCoupon=!1,uni.hideLoading(),uni.showModal({title:"提示",content:t.errMsg,showCancel:!1})})}),b(a,"pay",function(t){var e=this;this.$payment.pay(t).then(function(t){e.getStatus()}).catch(function(){uni.showToast({title:"支付失败",icon:"none",duration:1e3})})}),b(a,"detailFocus",function(){this.focus=!0}),a)};e.default=w},d0d3:function(t,e,i){"use strict";i.r(e);var a=i("87a7"),n=i("4807");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("327d");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"466eb7c2",null);e["default"]=s.exports},d201:function(t,e,i){var a=i("97de");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3f82f0b6",a,!0,{sourceMap:!1,shadowMode:!1})},e78dd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"app-area-picker",props:{ids:{type:Array,default:function(){return[]}}},data:function(){return{tempIds:this.ids,area_picker_show:"",list:[],multiIndex:[],multiArray:[],place:""}},created:function(){this.tempIds=this.tempIds.concat()},watch:{ids:{handler:function(t,e){this.tempIds=this.ids}},tempIds:{handler:function(t,e){var i=this;i.before(function(t){i.init(t)}),this.$emit("ids",this.tempIds)},deep:!0,immediate:!0}},methods:{before:function(t){var e=this,i=uni.getStorageSync("_DISTRICT");i?t(i):this.$request({url:e.$api.default.district}).then(function(e){0===e.code&&(uni.setStorageSync("_DISTRICT",e.data.list),t(e.data.list))})},init:function(t){var e=3===this.tempIds.length&&0!=this.tempIds[0],i=e?this.tempIds:[2,3,4],a=this.getIndex(t,i),n=[t,t[a[0]].list,t[a[0]].list[a[1]].list],o=n[0][a[0]].name+"，"+n[1][a[1]].name+"，"+n[2][a[2]].name,r=[n[0][a[0]],n[1][a[1]],n[2][a[2]]];this.setEvent(r,e);var s=[t,n,a,e?o:"请选择"];this.list=s[0],this.multiArray=s[1],this.multiIndex=s[2],this.place=s[3]},getIndex:function(t,e){var i=[];return t.map(function(t,a){e[0]==t.id&&i.push(a)}),t[i[0]].list.map(function(t,a){e[1]==t.id&&i.push(a)}),t[i[0]].list[i[1]].list.map(function(t,a){e[2]==t.id&&i.push(a)}),i},bindMultiPickerChange:function(t){var e=[this.multiArray[0][t.detail.value[0]],this.multiArray[1][t.detail.value[1]],this.multiArray[2][t.detail.value[2]]],i=e[0].name+"，"+e[1].name+"，"+e[2].name,a=[t.detail.value,i];this.multiIndex=a[0],this.place=a[1],this.setEvent(e)},setEvent:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i={province:{id:t[0].id,name:t[0].name},city:{id:t[1].id,name:t[1].name},district:{id:t[2].id,name:t[2].name}};this.$emit("customevent",e?i:null)},bindMultiPickerColumnChange:function(t){var e={multiArray:this.multiArray,multiIndex:this.multiIndex};switch(e.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:e.multiIndex.splice(1,1,0),e.multiIndex.splice(2,1,0),e.multiArray.splice(1,1,this.list[e.multiIndex[0]].list),e.multiArray.splice(2,1,this.list[e.multiIndex[0]].list[e.multiIndex[1]].list);break;case 1:e.multiIndex.splice(2,1,0),e.multiArray.splice(2,1,this.list[e.multiIndex[0]].list[e.multiIndex[1]].list);break}var i=[e.multiArray,e.multiIndex];this.multiArray=i[0],this.multiIndex=i[1]}}};e.default=a},e90e:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"dir-left-nowrap cross-center"},[i("v-uni-picker",{staticClass:"box-grow-1 area-picker-left",attrs:{mode:"multiSelector",value:t.multiIndex,"range-key":"name",range:t.multiArray},on:{change:function(e){e=t.$handleEvent(e),t.bindMultiPickerChange(e)},columnchange:function(e){e=t.$handleEvent(e),t.bindMultiPickerColumnChange(e)}}},["请选择"!==t.place?i("v-uni-text",{staticClass:"address-name-color"},[t._v(t._s(t.place))]):i("v-uni-text",{staticClass:"address-place-name-color"},[t._v(t._s(t.place))])],1),i("v-uni-image",{staticClass:"box-grow-0 arrow-image",attrs:{src:"/static/image/icon/arrow-right.png"}})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},ebca:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach(function(e){r(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s={name:"app-head",props:{height:{type:String,default:function(){return"360rpx"}},theme:String},data:function(){return{head:""}},computed:o({},(0,a.mapState)({community:function(t){return t.mallConfig.__wxapp_img.community}})),mounted:function(){var t=this;switch(t.head=t.community.a,t.theme){case"b":t.head=t.community.b;break;case"c":t.head=t.community.c;break;case"d":t.head=t.community.d;break;case"e":t.head=t.community.e;break;case"g":t.head=t.community.g;break;case"h":t.head=t.community.h;break;case"i":t.head=t.community.i;break}}};e.default=s},f298:function(t,e,i){"use strict";var a=i("d201"),n=i.n(a);n.a}}]);