(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-mch-apply-apply"],{"287e":function(t,a,e){var i=e("2f78");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("794c38f3",i,!0,{sourceMap:!1,shadowMode:!1})},"2f78":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".text-center[data-v-55123e47]{text-align:center}.font-weight[data-v-55123e47]{font-weight:700}.page-width[data-v-55123e47]{width:100%}.goods-hover-class[data-v-55123e47]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-55123e47]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-55123e47]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-55123e47]{width:100%}.u-hover-class[data-v-55123e47]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-55123e47]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.plugins-mch-apply-input[data-v-55123e47]{color:#bbb;font-size:%?28?%}body.?%PAGE?%[data-v-55123e47]{background:#f7f7f7}",""])},3818:function(t,a,e){"use strict";e.r(a);var i=e("e757"),n=e("a735");for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);e("83a3"),e("96fa");var r=e("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"55123e47",null);a["default"]=o.exports},5286:function(t,a,e){"use strict";e.r(a);var i=e("e78dd"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);a["default"]=n.a},7029:function(t,a,e){"use strict";var i=e("a4c6"),n=e.n(i);n.a},"83a3":function(t,a,e){"use strict";var i=e("287e"),n=e.n(i);n.a},"8d39":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".text-center[data-v-7eb1894c]{text-align:center}.font-weight[data-v-7eb1894c]{font-weight:700}.page-width[data-v-7eb1894c]{width:100%}.goods-hover-class[data-v-7eb1894c]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-7eb1894c]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-7eb1894c]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-7eb1894c]{width:100%}.u-hover-class[data-v-7eb1894c]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-7eb1894c]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.area-picker-left[data-v-7eb1894c]{min-width:%?115?%;font-size:%?28?%;padding-right:%?24?%;line-height:1.5;margin-left:auto}.area-picker-left .address-name-color[data-v-7eb1894c]{color:#353535}.area-picker-left .address-place-name-color[data-v-7eb1894c]{color:#999}.arrow-image[data-v-7eb1894c]{width:%?12?%;height:%?24?%}body.?%PAGE?%[data-v-7eb1894c]{background:#f7f7f7}",""])},"8e44":function(t,a,e){"use strict";e.r(a);var i=e("e90e"),n=e("5286");for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);e("7029");var r=e("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"7eb1894c",null);a["default"]=o.exports},"8fe6":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e("2f62"),n=r(e("8e44")),s=r(e("7d93"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,i)}return e}function c(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(e,!0).forEach(function(a){u(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(e).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function u(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var l={name:"apply",components:{appAreaPicker:n.default,appDiyForm:s.default},computed:c({},(0,i.mapState)({appImg:function(t){return t.mallConfig.plugin.mch.app_image}})),data:function(){return{mch_id:-1,category_list:[],express_list:null,form_data:null,form_status:!1,rulesStatus:!1,area:{province_id:0,city_id:0,district_id:0},setting:{},status:-2,form:{realname:"",mobile:"",wechat:"",username:"",password:"",checkPass:"",address:"",name:"",service_mobile:"",mch_common_cat_str:"",mch_common_cat_id:0},formStatus:{errors:[],hasError:!1},submit_status:!1,template_message_list:null}},onLoad:function(t){this.mch_id=t.mch_id,this.getCategory()},methods:{hangleForm:function(t){var a=t.data;this.form.form_data=a},navApplyRules:function(){uni.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.mch.setting),"&keys=").concat(JSON.stringify(["setting","desc"]))})},navHome:function(){uni.navigateTo({url:"/pages/index/index"})},loadData:function(){var t=this;t.$showLoading(),t.$request({url:t.$api.mch.mch_status}).then(function(a){t.$hideLoading(),0===a.code&&(t.mch=a.data.mch,t.status=t.mch?t.mch.review_status:-1,t.template_message_list=a.data.template_message_list,t.mch?(t.formInfo(t.mch.id),1==t.mch.status&&uni.setStorageSync("MCH2019",a.data)):t.getSetting())}).catch(function(a){t.$hideLoading()})},getCategory:function(){var t=this;t.$request({url:t.$api.mch.category,data:{id:t.mch_id}}).then(function(a){0===a.code&&(t.category_list=a.data.list,t.loadData())})},getExpress:function(){var t=this;t.$request({url:t.$api.mch.express_list}).then(function(a){0===a.code&&(t.express_list=a.data.list)})},getSetting:function(){var t=this;t.$request({url:t.$api.mch.setting}).then(function(a){t.$hideLoading(),0===a.code&&(t.setting=a.data.setting,t.form_data=a.data.setting.form_data)})},formInfo:function(t){var a=this;a.getExpress(),a.$request({url:a.$api.mch.detail,data:{id:t,is_review_status:1}}).then(function(t){if(0===t.code){var e=t.data.detail,i="";if(a.category_list.forEach(function(t){t.id==e.mch_common_cat_id&&(i=t.name)}),2===a.status&&a.getSetting(),0===a.status||1===a.status){var n=[];e.form_data&&e.form_data.length&&e.form_data.map(function(t){var a=[];"checkbox"===t.key&&(t.value=t.value?t.value:[],t.value.map(function(t){a.push({label:t})})),"radio"===t.key&&a.push({label:t.value}),n.push({key:t.key,name:t.key_name,default:t.value,is_required:t.required,img_type:t.img_type,list:a})}),a.form_data=n}a.form={mch_id:e.id,realname:e.realname,mobile:e.mobile,wechat:e.wechat,username:e.mchUser.username,password:"000000",checkPass:"000000",address:e.store.address,name:e.store.name,service_mobile:e.store.mobile,mch_common_cat_str:i,mch_common_cat_id:e.mch_common_cat_id},a.area={province_id:e.store.province_id,city_id:e.store.city_id,district_id:e.store.district_id}}})},applyInput:function(t){var a=t.currentTarget.dataset.type;this.form[a]=t.detail.value},categoryChange:function(t){var a=this.category_list[t.detail.value];this.form.mch_common_cat_id=a.id,this.form.mch_common_cat_str=a.name},areaEvent:function(t){t&&(this.area.province_id=t.province.id,this.area.city_id=t.city.id,this.area.district_id=t.district.id)},validateForm:function(t){var a=t.result;this.formStatus=a},subscribe:function(t){this.$subscribe(this.template_message_list).then(function(){t()}).catch(function(){t()})},formSubmit:function(){var t=this,a=t.form,e=t.area,i=t.rulesStatus,n=function(){return i?a.realname?a.mobile?a.username?a.password?a.mch_common_cat_id?a.password!==a.checkPass?"密码不一致":a.name?t.formStatus.hasError?t.formStatus.errors[0].msg:!!t.submit_status&&"提交中":"店铺名称不能为空":"类目不能为空":"密码不能为空":"账号不能为空":"联系电话不能为空":"联系人不能为空":"请同意入驻协议"}();n?uni.showToast({title:n,icon:"none"}):t.subscribe(function(){t.$showLoading({text:"提交中"}),t.submit_status=!0,t.$request({url:t.$api.mch.apply,data:{id:a.mch_id?a.mch_id:0,realname:a.realname,mobile:a.mobile,wechat:a.wechat,username:a.username,password:a.password,name:a.name,province_id:e.province_id,city_id:e.city_id,district_id:e.district_id,mch_common_cat_id:a.mch_common_cat_id,address:a.address,service_mobile:a.service_mobile,form_data:a.form_data?JSON.stringify(a.form_data):JSON.stringify([]),is_update_apply:2===t.status?1:0},method:"POST"}).then(function(a){t.submit_status=!1,t.$hideLoading(),0===a.code?(t.loadData(),t.form_status=!1):uni.showToast({title:a.msg,icon:"none"})}).catch(function(a){t.submit_status=!1})})},rulesTap:function(t){this.rulesStatus=t},closeForm:function(){this.form_status=!1},openForm:function(){this.form_status=!0}}};a.default=l},"96fa":function(t,a,e){"use strict";var i=e("ec6d"),n=e.n(i);n.a},a152:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAQlBMVEUAAACDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4P7VDjvAAAAFnRSTlMAtKKZCb1vWUk+FsTOJo6NiVA4NhJw8xKd3wAAALxJREFUOMuF01cSwyAMBNCliQ6u979qZuKMgwvofTMIJC3+PFUpjBGykseTk0LZrAGdrRLS4WpTZtc46d2oDQ0fS8BFKLGp45LFg01nmSV5vPBp+d0WZ7ya41FXTeiY1PcBMaAjRAdAErpIAqvQ6NJiBSkMKEKxGLAFMmMgSwiNAS1gMGTYA2wJ9pHcNyt2plFsq/lhwZn+uI3jFoZdOW5pubVvg1PvwanR36JHbfTojB4f3jb+5Yh/aeP/AU6KBld689GLAAAAAElFTkSuQmCC"},a1710:function(t,a,e){var i=e("b041");a=t.exports=e("2350")(!1),a.push([t.i,".text-center[data-v-55123e47]{text-align:center}.font-weight[data-v-55123e47]{font-weight:700}.page-width[data-v-55123e47]{width:100%}.goods-hover-class[data-v-55123e47]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-55123e47]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-55123e47]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-55123e47]{width:100%}.u-hover-class[data-v-55123e47]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-55123e47]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.apply-com[data-v-55123e47]{padding-top:%?30?%;padding-left:%?24?%;height:%?72?%;color:#999;font-size:%?26?%;background:#f7f7f7;width:100%}.white[data-v-55123e47]{background:#fff}.white .form-input[data-v-55123e47]{margin:0 %?24?%;border-bottom:1px solid #e2e2e2;height:%?100?%}.white uni-input[data-v-55123e47]{height:100%;padding:0 %?32?%;color:#666;font-size:%?28?%}.white .form-label[data-v-55123e47]{padding-left:%?3?%;font-size:%?28?%;color:#353535;min-width:%?125?%}.white>uni-view[data-v-55123e47]:last-child{border-bottom:none}.white .icon-arrow-right[data-v-55123e47]{background-image:url("+i(e("db8d"))+");height:%?22?%;width:%?12?%;background-size:100% auto;background-repeat:no-repeat}.white .area-left[data-v-55123e47]{padding-left:%?32?%;text-align:right;margin-left:auto}.white .category-picker[data-v-55123e47]{height:100%;width:100%}.white .category-info[data-v-55123e47]{height:100%;width:100%;min-height:%?98?%}.white .category-select[data-v-55123e47]{font-size:%?28?%;color:#666;text-align:right;padding-right:%?24?%}.rules-box[data-v-55123e47]{background:#f7f7f7;margin:%?32?% %?24?%;font-size:%?28?%}.rules-box .icon[data-v-55123e47]{height:%?32?%;width:%?32?%;margin-right:%?16?%}.rules-box .icon-true[data-v-55123e47]{height:%?32?%;width:%?32?%;background-repeat:no-repeat;background-image:url("+i(e("bf1a"))+");background-size:100% 100%}.rules-box .icon-false[data-v-55123e47]{height:%?32?%;width:%?32?%;background-repeat:no-repeat;background-image:url("+i(e("a152"))+");background-size:100% 100%}.rules-box .block[data-v-55123e47]{color:#353535}.rules-box .blue[data-v-55123e47]{color:#5292ed}.submit-btn[data-v-55123e47]{margin-top:%?20?%;margin-bottom:%?24?%}.result-title[data-v-55123e47]{color:#387ee8;font-size:%?28?%;margin-top:%?32?%}.result-home[data-v-55123e47]{color:#666;font-size:%?28?%;padding:%?24?%}.form-img[data-v-55123e47]{width:100%;margin-top:%?150?%;margin-bottom:%?72?%}.form-img uni-image[data-v-55123e47]{height:%?270?%;width:%?380?%}.status-title[data-v-55123e47]{font-size:%?36?%;color:#666}.status-content[data-v-55123e47]{margin-top:%?24?%;color:#666;width:%?560?%}.status-content uni-view[data-v-55123e47]{text-align:center}.status-new[data-v-55123e47]{margin-top:%?88?%}.status-submit[data-v-55123e47]{color:#5292ed;font-size:%?28?%;margin-top:%?66?%}body.?%PAGE?%[data-v-55123e47]{background:#f7f7f7}",""])},a4c6:function(t,a,e){var i=e("8d39");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("4c821193",i,!0,{sourceMap:!1,shadowMode:!1})},a735:function(t,a,e){"use strict";e.r(a);var i=e("8fe6"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);a["default"]=n.a},bf1a:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAkFBMVEUAAAD/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUT/RUQqA7U/AAAAL3RSTlMA4NnUsA3xoDH45JWOZldNIRUGzcu/pZqJgHcR7MW3q5FwXkI0G7p8ckY+Kx4Zm5zvJ7gAAAEpSURBVDjLdZLZloMgEERLxbjEPatLXKJmz/D/fzcTRlGB3KfmVB+K7gITUeCRjWGcqjSMIWPXGuVsrm9BNr2CLtB9zOm2VGJvgvPQqIIL77BdqmQ3dOQG/cIBDE9WVreGuYbMYCU3HAGLjZsAWMu61iPSWXUGokLSHf9zAYMkOCten6AdH/NUObTAbqwDlJJuAT4/pNiIuhuhd2er0MWGDDjOEuEN7lAY8WIzeww5buPkME5e0Yk1CA+G3VwCgTM35H4kBjJKO5iL7EKEY1nGQFoDt8VIL+R8jO0Lf/SFsBNc+cmwxeycO4C3NqX4QOvMGwg++JSj18biAhsMQr/Q4J/8pNY9jOQXtT5hWvK/bbAgEGxIB4HEr3iI2uEOFc8g/dlb6yyMMPELZbx/XzINENIAAAAASUVORK5CYII="},e757:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("app-layout",[-1===t.status||t.form_status?e("v-uni-view",[e("v-uni-view",{staticClass:"apply-com"},[t._v("基本信息")]),e("v-uni-view",{staticClass:"white"},[e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("联系人")]),e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-input",{attrs:{disabled:t.form_status&&2!==t.status,"data-type":"realname","placeholder-class":"plugins-mch-apply-input",placeholder:"必填",name:"realname",value:t.form.realname},on:{input:function(a){a=t.$handleEvent(a),t.applyInput(a)}}})],1)],1),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("联系电话")]),e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-input",{attrs:{disabled:t.form_status&&2!==t.status,"data-type":"mobile","placeholder-class":"plugins-mch-apply-input",placeholder:"必填",name:"mobile",value:t.form.mobile},on:{input:function(a){a=t.$handleEvent(a),t.applyInput(a)}}})],1)],1),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("微信号")]),e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-input",{attrs:{disabled:t.form_status&&2!==t.status,"data-type":"wechat",placeholder:"请填写微信号","placeholder-class":"plugins-mch-apply-input",name:"wechat",value:t.form.wechat},on:{input:function(a){a=t.$handleEvent(a),t.applyInput(a)}}})],1)],1)],1),e("v-uni-view",{staticClass:"apply-com"},[t._v("账号信息")]),e("v-uni-view",{staticClass:"white"},[e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("账号")]),e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-input",{attrs:{disabled:t.form_status&&2!==t.status,"data-type":"username","placeholder-class":"plugins-mch-apply-input",placeholder:"必填",name:"username",value:t.form.username},on:{input:function(a){a=t.$handleEvent(a),t.applyInput(a)}}})],1)],1),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("密码")]),e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-input",{attrs:{disabled:t.form_status&&2!==t.status,password:"","data-type":"password","placeholder-class":"plugins-mch-apply-input",placeholder:"必填",name:"password",value:t.form.password},on:{input:function(a){a=t.$handleEvent(a),t.applyInput(a)}}})],1)],1),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("确认密码")]),e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-input",{attrs:{disabled:t.form_status&&2!==t.status,password:"","data-type":"checkPass","placeholder-class":"plugins-mch-apply-input",placeholder:"必填",name:"checkPass",value:t.form.checkPass},on:{input:function(a){a=t.$handleEvent(a),t.applyInput(a)}}})],1)],1)],1),e("v-uni-view",{staticClass:"apply-com"},[t._v("店铺信息")]),e("v-uni-view",{staticClass:"white"},[e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("店铺名称")]),e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-input",{attrs:{disabled:t.form_status&&2!==t.status,"data-type":"name","placeholder-class":"plugins-mch-apply-input",placeholder:"必填",name:"name",value:t.form.name},on:{input:function(a){a=t.$handleEvent(a),t.applyInput(a)}}})],1)],1),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("所在地区")]),e("v-uni-view",{staticClass:"box-grow-1 area-left"},[e("app-area-picker",{attrs:{ids:[t.area.province_id,t.area.city_id,t.area.district_id]},on:{customevent:function(a){a=t.$handleEvent(a),t.areaEvent(a)}}})],1)],1),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("详细地址")]),e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-input",{attrs:{disabled:t.form_status&&2!==t.status,"data-type":"address","placeholder-class":"plugins-mch-apply-input",placeholder:"必填",name:"address",value:t.form.address},on:{input:function(a){a=t.$handleEvent(a),t.applyInput(a)}}})],1)],1),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("客服电话")]),e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-input",{attrs:{disabled:t.form_status&&2!==t.status,"data-type":"service_mobile","placeholder-class":"plugins-mch-apply-input",placeholder:"必填",name:"service_mobile",value:t.form.service_mobile},on:{input:function(a){a=t.$handleEvent(a),t.applyInput(a)}}})],1)],1),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center form-input"},[e("v-uni-view",{staticClass:"box-grow-0 form-label main-right"},[t._v("所售类目")]),e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-picker",{staticClass:"category-picker",attrs:{disabled:t.form_status&&2!==t.status,range:t.category_list,"range-key":"name",value:t.form.mch_common_cat_id},on:{change:function(a){a=t.$handleEvent(a),t.categoryChange(a)}}},[e("v-uni-view",{staticClass:"cross-center dir-left-nowrap category-info"},[e("v-uni-view",{staticClass:"box-grow-1 category-select"},[t._v(t._s(t.form.mch_common_cat_str?t.form.mch_common_cat_str:"请选择"))]),e("v-uni-view",{staticClass:"box-grow-0 cross-center"},[e("v-uni-icon",{staticClass:"icon-arrow-right",attrs:{type:""}})],1)],1)],1)],1)],1)],1),t.form_data&&t.form_data.length&&("1"===t.setting.status||t.status>=0)?[e("app-diy-form",{attrs:{title:"其他信息",list:t.form_data,sign:"mch"},on:{input:function(a){a=t.$handleEvent(a),t.hangleForm(a)},validate:function(a){a=t.$handleEvent(a),t.validateForm(a)}}})]:t._e(),t.form_status&&2!==t.status?t._e():[e("v-uni-view",{staticClass:"dir-left-nowrap cross-center rules-box"},[t.rulesStatus?e("v-uni-view",{staticClass:"icon",on:{click:function(a){a=t.$handleEvent(a),t.rulesTap(!1)}}},[e("v-uni-view",{staticClass:"icon-true",attrs:{type:""}})],1):e("v-uni-view",{staticClass:"icon",on:{click:function(a){a=t.$handleEvent(a),t.rulesTap(!0)}}},[e("v-uni-view",{staticClass:"icon-false",attrs:{type:""}})],1),e("v-uni-view",{staticClass:"block"},[t._v("我已阅读并同意")]),e("v-uni-view",{staticClass:"blue",on:{click:function(a){a=t.$handleEvent(a),t.navApplyRules(a)}}},[t._v("《入驻协议》")])],1),-1===t.status||2===t.status?e("v-uni-view",{staticClass:"main-center submit-btn"},[e("app-button",{attrs:{height:"80",width:"702","font-size":"32",background:"#ff4544",color:"#FFFFFF",round:""},on:{click:function(a){a=t.$handleEvent(a),t.formSubmit(a)}}},[t._v("提交")])],1):t._e()],t.form_status?e("v-uni-view",{staticClass:"cross-center dir-top-nowrap main-center"},[e("v-uni-view",{staticClass:"result-title",on:{click:function(a){a=t.$handleEvent(a),t.closeForm(a)}}},[t._v("查看审核结果")]),e("v-uni-view",{staticClass:"result-home",on:{click:function(a){a=t.$handleEvent(a),t.navHome(a)}}},[t._v("返回首页")])],1):t._e()],2):t._e(),t.status>=0&&!t.form_status?[e("v-uni-view",{staticClass:"dir-top-nowrap main-center cross-center"},[e("v-uni-view",{staticClass:"main-center form-img"},[0===t.status?e("v-uni-image",{attrs:{src:t.appImg.load}}):1===t.status?e("v-uni-image",{attrs:{src:t.appImg.success}}):2===t.status?e("v-uni-image",{attrs:{src:t.appImg.error}}):t._e()],1),e("v-uni-view",{staticClass:"status-title"},[0===t.status?e("v-uni-view",[t._v("待审核")]):1===t.status?e("v-uni-view",[t._v("审核通过")]):2===t.status?e("v-uni-view",[t._v("审核失败")]):t._e()],1),e("v-uni-view",{staticClass:"status-content"},[0===t.status?e("v-uni-view",[t._v("您的信息已提交，请耐心等待审核。")]):2===t.status?[t.mch.review_remark?e("v-uni-view",[t._v(t._s(t.mch.review_remark))]):e("v-uni-view",[t._v("您的信息填写不完整，请重新填写")])]:t._e()],2),2===t.status?e("v-uni-view",{staticClass:"status-new main-center"},[e("app-button",{attrs:{height:"80",width:"560",background:"#FF4544",color:"#FFFFFF","font-size":"32",round:""},on:{click:function(a){a=t.$handleEvent(a),t.openForm(a)}}},[t._v("重新申请")])],1):e("v-uni-view",{staticClass:"status-submit",on:{click:function(a){a=t.$handleEvent(a),t.openForm(a)}}},[t._v("查看提交内容")])],1)]:t._e()],2)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},e78dd:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"app-area-picker",props:{ids:{type:Array,default:function(){return[]}}},data:function(){return{tempIds:this.ids,area_picker_show:"",list:[],multiIndex:[],multiArray:[],place:""}},created:function(){this.tempIds=this.tempIds.concat()},watch:{ids:{handler:function(t,a){this.tempIds=this.ids}},tempIds:{handler:function(t,a){var e=this;e.before(function(t){e.init(t)}),this.$emit("ids",this.tempIds)},deep:!0,immediate:!0}},methods:{before:function(t){var a=this,e=uni.getStorageSync("_DISTRICT");e?t(e):this.$request({url:a.$api.default.district}).then(function(a){0===a.code&&(uni.setStorageSync("_DISTRICT",a.data.list),t(a.data.list))})},init:function(t){var a=3===this.tempIds.length&&0!=this.tempIds[0],e=a?this.tempIds:[2,3,4],i=this.getIndex(t,e),n=[t,t[i[0]].list,t[i[0]].list[i[1]].list],s=n[0][i[0]].name+"，"+n[1][i[1]].name+"，"+n[2][i[2]].name,r=[n[0][i[0]],n[1][i[1]],n[2][i[2]]];this.setEvent(r,a);var o=[t,n,i,a?s:"请选择"];this.list=o[0],this.multiArray=o[1],this.multiIndex=o[2],this.place=o[3]},getIndex:function(t,a){var e=[];return t.map(function(t,i){a[0]==t.id&&e.push(i)}),t[e[0]].list.map(function(t,i){a[1]==t.id&&e.push(i)}),t[e[0]].list[e[1]].list.map(function(t,i){a[2]==t.id&&e.push(i)}),e},bindMultiPickerChange:function(t){var a=[this.multiArray[0][t.detail.value[0]],this.multiArray[1][t.detail.value[1]],this.multiArray[2][t.detail.value[2]]],e=a[0].name+"，"+a[1].name+"，"+a[2].name,i=[t.detail.value,e];this.multiIndex=i[0],this.place=i[1],this.setEvent(a)},setEvent:function(t){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e={province:{id:t[0].id,name:t[0].name},city:{id:t[1].id,name:t[1].name},district:{id:t[2].id,name:t[2].name}};this.$emit("customevent",a?e:null)},bindMultiPickerColumnChange:function(t){var a={multiArray:this.multiArray,multiIndex:this.multiIndex};switch(a.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:a.multiIndex.splice(1,1,0),a.multiIndex.splice(2,1,0),a.multiArray.splice(1,1,this.list[a.multiIndex[0]].list),a.multiArray.splice(2,1,this.list[a.multiIndex[0]].list[a.multiIndex[1]].list);break;case 1:a.multiIndex.splice(2,1,0),a.multiArray.splice(2,1,this.list[a.multiIndex[0]].list[a.multiIndex[1]].list);break}var e=[a.multiArray,a.multiIndex];this.multiArray=e[0],this.multiIndex=e[1]}}};a.default=i},e90e:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"dir-left-nowrap cross-center"},[e("v-uni-picker",{staticClass:"box-grow-1 area-picker-left",attrs:{mode:"multiSelector",value:t.multiIndex,"range-key":"name",range:t.multiArray},on:{change:function(a){a=t.$handleEvent(a),t.bindMultiPickerChange(a)},columnchange:function(a){a=t.$handleEvent(a),t.bindMultiPickerColumnChange(a)}}},["请选择"!==t.place?e("v-uni-text",{staticClass:"address-name-color"},[t._v(t._s(t.place))]):e("v-uni-text",{staticClass:"address-place-name-color"},[t._v(t._s(t.place))])],1),e("v-uni-image",{staticClass:"box-grow-0 arrow-image",attrs:{src:"/static/image/icon/arrow-right.png"}})],1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},ec6d:function(t,a,e){var i=e("a1710");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("eb5d6c18",i,!0,{sourceMap:!1,shadowMode:!1})}}]);