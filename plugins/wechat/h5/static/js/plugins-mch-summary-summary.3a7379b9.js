(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-mch-summary-summary"],{"11e2":function(a,t,e){t=a.exports=e("2350")(!1),t.push([a.i,".text-center[data-v-c0f98510]{text-align:center}.font-weight[data-v-c0f98510]{font-weight:700}.page-width[data-v-c0f98510]{width:100%}.goods-hover-class[data-v-c0f98510]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-c0f98510]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-c0f98510]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-c0f98510]{width:100%}.u-hover-class[data-v-c0f98510]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-c0f98510]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.summary-head[data-v-c0f98510]{height:%?200?%;width:100%;position:relative}.summary-head .shop-pic[data-v-c0f98510]{height:100%;width:100%;opacity:.8}.summary-head .home[data-v-c0f98510]{position:absolute;top:%?55?%;left:%?0?%;background:#ff4544;border-radius:0 %?28?% %?28?% 0;height:%?56?%}.summary-head .home uni-view[data-v-c0f98510]{color:#fff;font-size:%?26?%;padding-right:%?24?%}.summary-head .home uni-image[data-v-c0f98510]{height:%?22?%;width:%?12?%;margin:%?12?%}.summary-head .cover-pic[data-v-c0f98510]{border-radius:%?16?%;position:absolute;top:%?130?%;left:%?305?%;height:%?140?%;width:%?140?%}.summary-info[data-v-c0f98510]{margin:%?100?% %?55?% 0 %?55?%}.summary-info .summary-name[data-v-c0f98510]{text-align:center;color:#353535}.summary-info .summary-contact[data-v-c0f98510]{height:%?80?%;width:%?360?%;margin:%?40?% auto;color:#5292ed;font-size:%?28?%;border-radius:%?40?%;border:%?1?% solid #5292ed}.summary-info .summary-contact uni-image[data-v-c0f98510]{height:%?32?%;width:%?32?%;margin-right:%?16?%}.summary-info .tag[data-v-c0f98510]{margin:%?15?% 0}.summary-info .tag>uni-image[data-v-c0f98510]{padding-top:%?5?%;height:%?32?%;width:%?32?%}.summary-info .tag>uni-view[data-v-c0f98510]{margin-left:%?24?%;font-size:%?28?%;color:#353535}.summary-info .tag .max[data-v-c0f98510]{max-width:%?448?%}.summary-info .tag .tv[data-v-c0f98510]{text-align:center;display:inline-block;border-radius:%?22?%;margin:0 %?32?%;padding:0 %?20?%;font-size:%?26?%;height:%?44?%;line-height:%?44?%;border:1px solid #5292ed;color:#5292ed}.summary-end[data-v-c0f98510]{margin:%?36?% 0}.map[data-v-c0f98510]{width:%?640?%;height:%?560?%}body.?%PAGE?%[data-v-c0f98510]{background:#f7f7f7}",""])},"269f":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"summary",components:{},data:function(){return{markers:[],shop:{store:{}},mchSetting:{}}},onLoad:function(a){var t=this;t.$showLoading(),t.$request({url:t.$api.mch.detail,data:{id:a.mch_id}}).then(function(a){if(t.$hideLoading(),0===a.code){var e=a.data.detail,i=[{iconPath:"./../image/summary-map.png",id:0,width:43,height:43,longitude:e.store.longitude,latitude:e.store.latitude}],s=[i,e,a.data.mchSetting];t.markers=s[0],t.shop=s[1],t.mchSetting=s[2]}}).catch(function(a){t.$hideLoading()})},methods:{navHome:function(){uni.redirectTo({url:"/plugins/mch/shop/shop?mch_id="+this.shop.id})},navCs:function(){uni.navigateTo({url:"/pages/web/web?url="+this.mchSetting.web_service_url})},callPhone:function(){var a=this.shop.mobile;uni.makePhoneCall({phoneNumber:a})},mapPower:function(){var a=this.shop;uni.openLocation({latitude:parseFloat(a.store.latitude),longitude:parseFloat(a.store.longitude),name:a.store.name,address:a.store.address}),openLocation}}};t.default=i},3228:function(a,t,e){"use strict";var i=e("3dae"),s=e.n(i);s.a},"3dae":function(a,t,e){var i=e("11e2");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var s=e("4f06").default;s("71962b31",i,!0,{sourceMap:!1,shadowMode:!1})},9857:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("app-layout",[e("v-uni-view",{staticClass:"summary-head"},[e("v-uni-image",{staticClass:"shop-pic",attrs:{src:a.shop.store.pic_url&&a.shop.store.pic_url[0].pic_url,"lazy-load":""}}),e("v-uni-view",{staticClass:"home cross-center",on:{click:function(t){t=a.$handleEvent(t),a.navHome(t)}}},[e("v-uni-image",{attrs:{src:"../image/arrow-left-white.png"}}),e("v-uni-view",[a._v("返回店铺首页")])],1),e("v-uni-image",{staticClass:"cover-pic",attrs:{src:a.shop.store.cover_url,"lazy-load":""}})],1),e("v-uni-view",{staticClass:"summary-info"},[e("v-uni-view",{staticClass:"summary-name"},[a._v(a._s(a.shop.store.name))]),a.mchSetting.is_web_service?e("v-uni-view",{staticClass:"summary-contact main-center cross-center dir-left-nowrap",on:{click:function(t){t=a.$handleEvent(t),a.navCs(t)}}},[e("v-uni-image",{attrs:{src:a.mchSetting.web_service_pic?a.mchSetting.web_service_pic:"/plugins/mch/images/summary-blue.png"}}),e("v-uni-view",[a._v("在线沟通")])],1):a._e(),a.shop.store.scope?e("v-uni-view",{staticClass:"dir-left-nowrap tag"},[e("v-uni-image",{staticClass:"box-grow-0",attrs:{src:"./../image/summary-yw.png"}}),e("v-uni-view",[a._v(a._s(a.shop.store.scope))])],1):a._e(),a.shop.store.mobile?e("v-uni-view",{staticClass:"dir-left-nowrap tag"},[e("v-uni-image",{staticClass:"box-grow-0",attrs:{src:"./../image/summary-phone.png"}}),e("v-uni-view",{staticClass:"dir-left-nowrap"},[e("v-uni-view",{staticClass:"max"},[a._v(a._s(a.shop.mobile))]),e("v-uni-view",{staticClass:"box-grow-0 main-center cross-center tv",on:{click:function(t){t=a.$handleEvent(t),a.callPhone(t)}}},[a._v("拨号")])],1)],1):a._e(),a.shop.store.address?e("v-uni-view",{staticClass:"dir-left-nowrap tag"},[e("v-uni-image",{staticClass:"box-grow-0",attrs:{src:"./../image/summary-address.png"}}),e("v-uni-view",{staticClass:"dir-left-nowrap"},[e("v-uni-view",{staticClass:"max"},[a._v(a._s(a.shop.store.address))]),e("v-uni-view",{staticClass:"box-grow-0 main-center cross-center tv",on:{click:function(t){t=a.$handleEvent(t),a.mapPower(t)}}},[a._v("导航")])],1)],1):a._e(),a.shop.store.description?e("v-uni-view",{staticClass:"dir-left-nowrap tag"},[e("v-uni-image",{staticClass:"box-grow-0",attrs:{src:"./../image/summary-synopsis.png"}}),e("v-uni-view",[a._v(a._s(a.shop.store.description))])],1):a._e()],1),a.shop.store.latitude>0&&a.shop.store.longitude>0?e("v-uni-view",{staticClass:"main-center summary-end"},[e("v-uni-map",{staticClass:"map",attrs:{longitude:a.shop.store.longitude,markers:a.markers,latitude:a.shop.store.latitude}})],1):a._e()],1)},s=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return s})},b379:function(a,t,e){"use strict";e.r(t);var i=e("9857"),s=e("b8fe");for(var o in s)"default"!==o&&function(a){e.d(t,a,function(){return s[a]})}(o);e("3228");var n=e("2877"),r=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,"c0f98510",null);t["default"]=r.exports},b8fe:function(a,t,e){"use strict";e.r(t);var i=e("269f"),s=e.n(i);for(var o in i)"default"!==o&&function(a){e.d(t,a,function(){return i[a]})}(o);t["default"]=s.a}}]);