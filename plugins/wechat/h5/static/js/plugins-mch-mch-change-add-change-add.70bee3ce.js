(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-mch-mch-change-add-change-add"],{1252:function(t,e,i){var a=i("17c1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e36882d0",a,!0,{sourceMap:!1,shadowMode:!1})},"17c1":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-de871f92]{text-align:center}.font-weight[data-v-de871f92]{font-weight:700}.page-width[data-v-de871f92]{width:100%}.goods-hover-class[data-v-de871f92]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-de871f92]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-de871f92]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-de871f92]{width:100%}.u-hover-class[data-v-de871f92]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-de871f92]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.address-bottom[data-v-de871f92]{width:%?702?%;height:%?80?%;line-height:%?80?%;border-radius:%?40?%;padding:0;text-align:center;margin:%?40?% auto;color:#fff;z-index:7;font-size:%?28?%;background-color:#ff4544}.input-list[data-v-de871f92]{background-color:#fff;padding-left:%?30?%}.input-item[data-v-de871f92]{border-bottom:%?1?% solid #eee;padding:%?24?% %?30?% %?24?% 0;height:%?96?%;font-size:%?28?%;color:#495060}.input-item[data-v-de871f92]:last-of-type{border-bottom:0}.input-item .label[data-v-de871f92]{width:20%;height:%?48?%;line-height:%?48?%}.input-item uni-input[data-v-de871f92]{width:80%;height:%?48?%;line-height:%?48?%;font-size:%?28?%}body.?%PAGE?%[data-v-de871f92]{background:#f7f7f7}",""])},"35a0":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-layout",[i("v-uni-view",[i("v-uni-view",{staticClass:"input-list"},[i("v-uni-view",{staticClass:"dir-left-nowrap input-item"},[i("v-uni-view",{staticClass:"label"},[t._v("收货人")]),i("v-uni-input",{attrs:{name:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-uni-view",{staticClass:"dir-left-nowrap input-item"},[i("v-uni-view",{staticClass:"label"},[t._v("联系电话")]),i("v-uni-input",{attrs:{name:"mobile",type:"number"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),i("v-uni-view",{staticClass:"main-between input-item"},[i("v-uni-text",{staticClass:"label"},[t._v("所在地区")]),i("app-area-picker",{attrs:{ids:t.ids},on:{customevent:function(e){e=t.$handleEvent(e),t.areaEvent(e)}}})],1),i("v-uni-view",{staticClass:"dir-left-nowrap input-item"},[i("v-uni-view",{staticClass:"label"},[t._v("详细地址")]),i("v-uni-input",{attrs:{name:"detail",placeholder:"请输入详细地址(最多50字)",maxlength:"50"},model:{value:t.detail,callback:function(e){t.detail=e},expression:"detail"}})],1)],1),i("v-uni-button",{staticClass:"address-bottom",on:{click:function(e){e=t.$handleEvent(e),t.saveAddress(e)}}},[t._v(t._s(t.changeAddress?"确定":"确认修改地址"))])],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},5286:function(t,e,i){"use strict";i.r(e);var a=i("e78dd"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},"8e44":function(t,e,i){"use strict";i.r(e);var a=i("b8fb"),n=i("5286");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("e65e");var o=i("2877"),d=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"7636f6de",null);e["default"]=d.exports},"967d":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-7636f6de]{text-align:center}.font-weight[data-v-7636f6de]{font-weight:700}.page-width[data-v-7636f6de]{width:100%}.goods-hover-class[data-v-7636f6de]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-7636f6de]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-7636f6de]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-7636f6de]{width:100%}.u-hover-class[data-v-7636f6de]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-7636f6de]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.area-picker-left[data-v-7636f6de]{min-width:%?115?%;font-size:%?28?%;padding-right:%?24?%;line-height:1.5;margin-left:auto}.area-picker-left .address-name-color[data-v-7636f6de]{color:#353535}.area-picker-left .address-place-name-color[data-v-7636f6de]{color:#999}.arrow-image[data-v-7636f6de]{width:%?12?%;height:%?24?%}body.?%PAGE?%[data-v-7636f6de]{background:#f7f7f7}",""])},"98c0":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("8e44")),n=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach(function(e){s(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={data:function(){return{ids:[0],list:[],name:"",mobile:"",mch_id:0,detail:"",order_no:"",province:"",city:"",district:"",order:{},changeAddress:!1}},components:{"app-area-picker":a.default},computed:d({},(0,n.mapState)({theme:function(t){return t.mallConfig.theme},userInfo:function(t){return t.user.info},adminImg:function(t){return t.mallConfig.__wxapp_img.app_admin}})),methods:{areaEvent:function(t){t&&(this.province=t.province.name,this.city=t.city.name,this.district=t.district.name)},getDistrict:function(){var t=this;t.$showLoading({text:"加载中..."}),t.$request({url:t.$api.default.district}).then(function(e){0==e.code?(t.list=e.data.list,t.getList()):(t.$hideLoading(),uni.showToast({title:e.msg,icon:"none",duration:1e3}))}).catch(function(e){t.$hideLoading()})},getList:function(){var t=this;t.$request({url:t.$api.mch.order_list,data:{status:"-1",mch_id:t.mch_id,keyword:t.order_no}}).then(function(e){if(t.$hideLoading(),0==e.code){if(t.order=e.data.list[0],t.name=e.data.list[0].name,t.mobile=e.data.list[0].mobile,!e.data.list[0].address)return t.changeAddress=!0,uni.setNavigationBarTitle({title:"添加收货地址"}),!1;var i=e.data.list[0].address.trim().split(" ");t.detail=i[i.length-1];var a=t.list;t.ids=[],a.forEach(function(e){if(e.name==i[0]){t.ids[0]=e.id;var a=e;a.list.forEach(function(e){if(e.name==i[1]){t.ids[1]=e.id;var a=e;a.list.forEach(function(e){e.name==i[2]&&(t.ids[2]=e.id)})}})}})}else uni.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},saveAddress:function(t){var e=this;e.province?(uni.showLoading({title:"提交中..."}),e.$request({url:e.$api.mch.update_address,method:"POST",data:{order_id:e.order.id,mch_id:e.mch_id,name:e.name,mobile:e.mobile,province:e.province,city:e.city,district:e.district,address:e.detail}}).then(function(t){uni.hideLoading(),0==t.code?(uni.showToast({title:t.msg,duration:1e3,icon:"success",mask:!1}),setTimeout(function(){uni.navigateBack()},500)):uni.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){uni.hideLoading(),uni.showToast({title:t,icon:"none",duration:1e3})})):uni.showToast({title:"地区不能为空",icon:"none",duration:1e3})}},onLoad:function(t){var e=this;t.order_no&&(e.order_no=t.order_no,e.mch_id=t.mch_id,e.getDistrict())}};e.default=c},b8fb:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"dir-left-nowrap cross-center"},[i("v-uni-picker",{staticClass:"box-grow-1 area-picker-left",attrs:{mode:"multiSelector",value:t.multiIndex,"range-key":"name",range:t.multiArray},on:{change:function(e){e=t.$handleEvent(e),t.bindMultiPickerChange(e)},columnchange:function(e){e=t.$handleEvent(e),t.bindMultiPickerColumnChange(e)}}},["请选择"!==t.place?i("v-uni-text",{staticClass:"address-name-color"},[t._v(t._s(t.place))]):i("v-uni-text",{staticClass:"address-place-name-color"},[t._v(t._s(t.place))])],1),i("v-uni-image",{staticClass:"box-grow-0 arrow-image",attrs:{src:"/static/image/icon/arrow-right.png"}})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},d41d:function(t,e,i){"use strict";i.r(e);var a=i("98c0"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},e65e:function(t,e,i){"use strict";var a=i("f8fd"),n=i.n(a);n.a},e78dd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"app-area-picker",props:{ids:{type:Array,default:function(){return[]}}},data:function(){return{tempIds:this.ids,area_picker_show:"",list:[],multiIndex:[],multiArray:[],place:""}},created:function(){this.tempIds=this.tempIds.concat()},watch:{ids:{handler:function(t,e){this.tempIds=this.ids}},tempIds:{handler:function(t,e){var i=this;i.before(function(t){i.init(t)}),this.$emit("ids",this.tempIds)},deep:!0,immediate:!0}},methods:{before:function(t){var e=this,i=uni.getStorageSync("_DISTRICT");i?t(i):this.$request({url:e.$api.default.district}).then(function(e){0===e.code&&(uni.setStorageSync("_DISTRICT",e.data.list),t(e.data.list))})},init:function(t){var e=3===this.tempIds.length&&0!=this.tempIds[0],i=e?this.tempIds:[2,3,4],a=this.getIndex(t,i),n=[t,t[a[0]].list,t[a[0]].list[a[1]].list],r=n[0][a[0]].name+"，"+n[1][a[1]].name+"，"+n[2][a[2]].name,o=[n[0][a[0]],n[1][a[1]],n[2][a[2]]];this.setEvent(o,e);var d=[t,n,a,e?r:"请选择"];this.list=d[0],this.multiArray=d[1],this.multiIndex=d[2],this.place=d[3]},getIndex:function(t,e){var i=[];return t.map(function(t,a){e[0]==t.id&&i.push(a)}),t[i[0]].list.map(function(t,a){e[1]==t.id&&i.push(a)}),t[i[0]].list[i[1]].list.map(function(t,a){e[2]==t.id&&i.push(a)}),i},bindMultiPickerChange:function(t){var e=[this.multiArray[0][t.detail.value[0]],this.multiArray[1][t.detail.value[1]],this.multiArray[2][t.detail.value[2]]],i=e[0].name+"，"+e[1].name+"，"+e[2].name,a=[t.detail.value,i];this.multiIndex=a[0],this.place=a[1],this.setEvent(e)},setEvent:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i={province:{id:t[0].id,name:t[0].name},city:{id:t[1].id,name:t[1].name},district:{id:t[2].id,name:t[2].name}};this.$emit("customevent",e?i:null)},bindMultiPickerColumnChange:function(t){var e={multiArray:this.multiArray,multiIndex:this.multiIndex};switch(e.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:e.multiIndex.splice(1,1,0),e.multiIndex.splice(2,1,0),e.multiArray.splice(1,1,this.list[e.multiIndex[0]].list),e.multiArray.splice(2,1,this.list[e.multiIndex[0]].list[e.multiIndex[1]].list);break;case 1:e.multiIndex.splice(2,1,0),e.multiArray.splice(2,1,this.list[e.multiIndex[0]].list[e.multiIndex[1]].list);break}var i=[e.multiArray,e.multiIndex];this.multiArray=i[0],this.multiIndex=i[1]}}};e.default=a},f23c:function(t,e,i){"use strict";var a=i("1252"),n=i.n(a);n.a},f639:function(t,e,i){"use strict";i.r(e);var a=i("35a0"),n=i("d41d");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("f23c");var o=i("2877"),d=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"de871f92",null);e["default"]=d.exports},f8fd:function(t,e,i){var a=i("967d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("188b9699",a,!0,{sourceMap:!1,shadowMode:!1})}}]);