(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-mch-cat-cat"],{"0592":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"app-category-list",props:{list:{type:Array,default:function(){return[]}},windowHeight:{type:Number,default:function(){return 0}},windowWidth:{type:Number,default:function(){return 0}},botHeight:{type:Number,default:function(){return 0}},noSetHeight:{type:String},theme:String},methods:{active:function(t,a){this.$emit("click",{item:t,index:a})}},computed:{setHeight:function(){var t=0;return this.$parent.$parent.$children[0].tabbarbool&&(t=this.botHeight),this.windowHeight*(750/this.windowWidth)-t-88+"rpx"}}};a.default=e},"05ec":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"app-layout"},[i("app-layout",["1"===t.cat_style?[i("v-uni-view",{staticClass:"app-body dir-top-nowrap"},t._l(t.list,function(t,a){return i("v-uni-view",{key:a,staticClass:"app-item"},[i("app-jump-button",{attrs:{form:"",open_type:"navigate",url:t.page_url}},[i("v-uni-view",{staticClass:"app-image",style:{backgroundImage:"url("+t.big_pic_url+")"}})],1)],1)}),1)]:"2"===t.cat_style?[i("v-uni-view",{staticClass:"app-left-right dir-left-nowrap"},[i("app-category-list",{attrs:{windowHeight:t.windowHeight,windowWidth:t.windowWidth,botHeight:t.botHeight,height:t.height,noSetHeight:t.setHeight,list:t.list},on:{click:function(a){a=t.$handleEvent(a),t.activeThree(a)}}}),i("v-uni-scroll-view",{staticClass:"app-right",staticStyle:{"padding-top":"20rpx"},style:{height:""+t.setHeight},attrs:{"scroll-y":""}},[t.list[t.activeIndex].advert_pic?i("v-uni-image",{staticClass:"app-background",attrs:{src:t.list[t.activeIndex].advert_pic}}):t._e(),t._l(t.list[t.activeIndex].child,function(t,a){return i("v-uni-view",{key:a,staticClass:"app-item"},[i("app-jump-button",{attrs:{form:"",open_type:"navigate",url:t.page_url}},[i("v-uni-image",{staticClass:"app-image",attrs:{src:t.big_pic_url}})],1)],1)})],2)],1)]:"3"===t.cat_style?[i("v-uni-view",{staticClass:"app-small dir-left-wrap"},t._l(t.list,function(a,e){return i("v-uni-view",{key:e,staticClass:"app-item"},[i("app-jump-button",{attrs:{arrangement:"column",form:"",open_type:"navigate",url:a.page_url}},[i("v-uni-image",{staticClass:"app-image",attrs:{src:a.pic_url}}),i("v-uni-text",{staticClass:"app-name",staticStyle:{"text-align":"center"}},[t._v(t._s(a.name))])],1)],1)}),1)]:"4"===t.cat_style?[i("v-uni-view",{staticClass:"app-left-right-t dir-left-nowrap"},[i("app-category-list",{attrs:{windowHeight:t.windowHeight,windowWidth:t.windowWidth,botHeight:t.botHeight,height:t.height,noSetHeight:t.setHeight,list:t.list},on:{click:function(a){a=t.$handleEvent(a),t.activeThree(a)}}}),i("v-uni-scroll-view",{staticClass:"app-right",staticStyle:{"padding-top":"20rpx"},style:{height:""+t.setHeight},attrs:{"scroll-y":""}},[t.list[t.activeIndex].advert_pic?i("v-uni-image",{staticClass:"app-background",attrs:{src:t.list[t.activeIndex].advert_pic}}):t._e(),t._l(t.list[t.activeIndex].child,function(a,e){return i("v-uni-view",{key:e,staticClass:"app-item"},[i("app-jump-button",{attrs:{arrangement:"column",form:"",open_type:"navigate",url:a.page_url}},[i("v-uni-image",{staticClass:"app-image",attrs:{src:a.pic_url}}),i("v-uni-text",{staticClass:"app-name"},[t._v(t._s(a.name))])],1)],1)})],2)],1)]:"6"===t.cat_style?[i("v-uni-view",{staticClass:"app-left-right-f dir-left-nowrap"},[i("app-category-list",{attrs:{windowHeight:t.windowHeight,windowWidth:t.windowWidth,botHeight:t.botHeight,height:t.height,noSetHeight:t.setHeight,list:t.list},on:{click:function(a){a=t.$handleEvent(a),t.activeThree(a)}}}),i("v-uni-scroll-view",{staticClass:"app-right",style:{height:""+t.setHeight},attrs:{"scroll-y":""}},[t.list[t.activeIndex].advert_pic?i("v-uni-image",{staticClass:"app-background",attrs:{src:t.list[t.activeIndex].advert_pic}}):t._e(),t._l(t.list[t.activeIndex].child,function(a,e){return i("v-uni-view",{key:e,staticClass:"app-item"},[i("v-uni-view",{staticClass:"app-top"},[i("app-jump-button",{attrs:{arrangement:"left",form:"",open_type:"navigate",url:a.page_url}},[i("v-uni-text",{staticClass:"app-text"},[t._v(t._s(a.name))]),i("v-uni-view",{staticClass:"app-icon dir-left-nowrap cross-center"},[i("v-uni-text",[t._v("更多")]),i("v-uni-icon",{attrs:{type:""}})],1)],1)],1),t._l(a.child,function(t,a){return i("v-uni-view",{key:a},[i("app-jump-button",{attrs:{form:"",open_type:"navigate",url:t.page_url}},[i("v-uni-image",{staticClass:"app-image",attrs:{src:t.big_pic_url}})],1)],1)})],2)})],2)],1)]:"7"===t.cat_style?[i("v-uni-view",{staticClass:"app-left-right-s  dir-left-nowrap"},[i("app-category-list",{attrs:{windowHeight:t.windowHeight,windowWidth:t.windowWidth,botHeight:t.botHeight,height:t.height,noSetHeight:t.setHeight,list:t.list},on:{click:function(a){a=t.$handleEvent(a),t.activeThree(a)}}}),i("v-uni-scroll-view",{staticClass:"app-right",staticStyle:{"padding-top":"20rpx"},style:{height:""+t.setHeight},attrs:{"scroll-y":""}},[t.list[t.activeIndex].advert_pic?i("v-uni-image",{staticClass:"app-background",attrs:{"lazy-load":"",src:t.list[t.activeIndex].advert_pic}}):t._e(),t._l(t.list[t.activeIndex].child,function(a,e){return i("v-uni-view",{key:e,staticClass:"app-item"},[i("v-uni-view",{staticClass:"app-top"},[i("app-jump-button",{attrs:{arrangement:"left",form:"",open_type:"navigate",url:a.page_url}},[i("v-uni-text",{staticClass:"app-text"},[t._v(t._s(a.name))]),i("v-uni-view",{staticClass:"app-icon dir-left-nowrap cross-center"},[i("v-uni-text",[t._v("更多")]),i("v-uni-icon",{attrs:{type:""}})],1)],1)],1),t._l(a.child,function(a,e){return i("v-uni-view",{key:e,staticClass:"app-item-child"},[i("app-jump-button",{attrs:{arrangement:"column",form:"",open_type:"navigate",url:a.page_url}},[i("v-uni-image",{staticClass:"app-image",attrs:{src:a.pic_url}}),i("v-uni-text",{staticClass:"app-text"},[t._v(t._s(a.name))])],1)],1)})],2)})],2)],1)]:t._e()],2)],1)},p=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return p})},"0cca":function(t,a,i){"use strict";i.r(a);var e=i("05ec"),p=i("7730");for(var n in p)"default"!==n&&function(t){i.d(a,t,function(){return p[t]})}(n);i("6d0e");var r=i("2877"),o=Object(r["a"])(p["default"],e["a"],e["b"],!1,null,"d299475a",null);a["default"]=o.exports},1008:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-scroll-view",{staticClass:"app-category-list",style:{height:""+t.noSetHeight?""+t.noSetHeight:""+t.setHeight},attrs:{"scroll-y":""}},t._l(t.list,function(a,e){return i("v-uni-view",{key:e,staticClass:"app-item dir-left-nowrap",on:{click:function(i){i=t.$handleEvent(i),t.active(a,e)}}},[i("v-uni-view",{staticClass:"app-border",class:!0===a.active?t.theme+"-m-back "+t.theme:""}),i("v-uni-view",{staticClass:"app-text",class:!0===a.active?"app-active-f "+t.theme+"-m-text "+t.theme:""},[t._v(t._s(a.name))])],1)}),1)},p=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return p})},1352:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".text-center[data-v-3ae14431]{text-align:center}.font-weight[data-v-3ae14431]{font-weight:700}.page-width[data-v-3ae14431]{width:100%}.goods-hover-class[data-v-3ae14431]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-3ae14431]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-3ae14431]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-3ae14431]{width:100%}.u-hover-class[data-v-3ae14431]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-3ae14431]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-border[data-v-3ae14431]{width:%?8?%;height:%?106?%;background-color:#f7f7f7}.app-category-list[data-v-3ae14431]{width:%?204?%;background-color:#f7f7f7}.app-item[data-v-3ae14431]{width:%?204?%;height:%?106?%;background-color:#f7f7f7}.app-active-f[data-v-3ae14431]{background-color:#fff!important}.app-text[data-v-3ae14431]{background-color:#f7f7f7;width:%?196?%;height:%?106?%;line-height:%?106?%;text-align:center;font-size:%?28?%;color:#666;word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}body.?%PAGE?%[data-v-3ae14431]{background:#f7f7f7}",""])},4252:function(t,a,i){var e=i("6f84");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var p=i("4f06").default;p("16e97c82",e,!0,{sourceMap:!1,shadowMode:!1})},"5d3f":function(t,a,i){"use strict";i.r(a);var e=i("1008"),p=i("87c7");for(var n in p)"default"!==n&&function(t){i.d(a,t,function(){return p[t]})}(n);i("8535");var r=i("2877"),o=Object(r["a"])(p["default"],e["a"],e["b"],!1,null,"3ae14431",null);a["default"]=o.exports},"6d0e":function(t,a,i){"use strict";var e=i("4252"),p=i.n(e);p.a},"6f84":function(t,a,i){var e=i("b041");a=t.exports=i("2350")(!1),a.push([t.i,".text-center[data-v-d299475a]{text-align:center}.font-weight[data-v-d299475a]{font-weight:700}.page-width[data-v-d299475a]{width:100%}.goods-hover-class[data-v-d299475a]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-d299475a]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-d299475a]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-d299475a]{width:100%}.u-hover-class[data-v-d299475a]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-d299475a]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-layout[data-v-d299475a]{background:#fff;min-height:calc(100vh - var(--window-top))}.app-body[data-v-d299475a]{width:%?750?%;background-color:#fff;padding:0 %?24?% %?24?% %?24?%}.app-body .app-item[data-v-d299475a]{width:%?702?%;height:%?212?%;margin-top:%?20?%}.app-body .app-item .app-image[data-v-d299475a]{background-size:100% 100%;background-repeat:no-repeat;width:100%;height:100%}.app-small[data-v-d299475a]{width:%?750?%;padding:0 %?27?%;background-color:#fff}.app-small .app-item[data-v-d299475a]{width:%?120?%;margin:%?64?% %?27?% 0 %?27?%}.app-small .app-item .app-image[data-v-d299475a]{width:%?120?%;height:%?120?%;margin-bottom:%?20?%}.app-small .app-item .app-name[data-v-d299475a]{color:#353535;font-size:%?26?%;width:100%;word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.app-top[data-v-d299475a]{width:%?750?%}.app-top-t[data-v-d299475a]{width:%?750?%;background:#fff}.app-top-t .app-t[data-v-d299475a]{width:100%;padding-top:%?24?%;padding-left:%?24?%}.app-top-t .app-t>uni-text[data-v-d299475a]{margin-bottom:%?20?%}.app-top-t .app-t .app-text[data-v-d299475a]{border:%?1?% solid #ccc;font-size:%?28?%;color:#666;padding:0 %?28?%;display:inline-block;height:%?54?%;line-height:%?54?%;margin-right:%?24?%;border-radius:%?28?%}.app-top-t .app-t .app-active-color[data-v-d299475a]{color:#ff4544;border:%?1?% solid #ff4544}.app-left-right[data-v-d299475a]{width:%?750?%;background:#fff}.app-left-right .app-right[data-v-d299475a]{width:%?524?%;margin-left:%?22?%}.app-left-right .app-right .app-background[data-v-d299475a]{width:%?500?%;height:%?184?%;margin:%?20?% %?24?% %?20?% 0}.app-left-right .app-right .app-item[data-v-d299475a]{margin-left:%?2?%;height:%?158?%;width:%?524?%;margin-bottom:%?20?%}.app-left-right .app-right .app-item .app-image[data-v-d299475a]{height:%?158?%;width:%?524?%}.app-left-right-t[data-v-d299475a]{width:%?750?%;background:#fff}.app-left-right-t .app-right[data-v-d299475a]{width:%?546?%}.app-left-right-t .app-right .app-background[data-v-d299475a]{width:%?500?%;height:%?184?%;margin:%?20?% %?24?% %?20?% %?24?%}.app-left-right-t .app-right .app-item[data-v-d299475a]{width:%?182?%;height:%?138?%;display:inline-block;margin-bottom:%?40?%}.app-left-right-t .app-right .app-item .app-image[data-v-d299475a]{height:%?104?%;width:%?104?%}.app-left-right-t .app-right .app-item .app-name[data-v-d299475a]{font-size:%?26?%;margin-top:%?8?%;color:#353535;word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.app-left-right-f[data-v-d299475a]{width:%?750?%;background:#fff}.app-left-right-f .app-right[data-v-d299475a]{width:%?524?%;margin-left:%?22?%}.app-left-right-f .app-right .app-background[data-v-d299475a]{width:%?500?%;height:%?184?%;margin:%?20?% %?24?% %?20?% 0}.app-left-right-f .app-right .app-item[data-v-d299475a]{margin-left:%?2?%;width:%?524?%}.app-left-right-f .app-right .app-item .app-image[data-v-d299475a]{width:%?524?%;height:%?158?%;margin-bottom:%?20?%}.app-left-right-f .app-right .app-item .app-top[data-v-d299475a]{position:relative;width:%?524?%;margin:%?20?% 0 %?40?% 0}.app-left-right-f .app-right .app-item .app-text[data-v-d299475a]{font-size:%?28?%;color:#353535}.app-left-right-f .app-right .app-item .app-icon[data-v-d299475a]{position:absolute;right:%?24?%}.app-left-right-f .app-right .app-item .app-icon uni-text[data-v-d299475a]{font-size:%?26?%;color:#999;margin-left:%?16?%}.app-left-right-f .app-right .app-item .app-icon uni-icon[data-v-d299475a]{width:%?13?%;height:%?22?%;background-image:url("+e(i("db8d"))+");background-size:100% 100%;background-repeat:no-repeat;margin-left:%?24?%}.app-left-right-s[data-v-d299475a]{width:%?750?%;background:#fff}.app-left-right-s .app-right[data-v-d299475a]{width:%?546?%;background-color:#fff}.app-left-right-s .app-right .app-background[data-v-d299475a]{width:%?500?%;height:%?184?%;margin:%?20?% %?24?% %?40?% %?24?%}.app-left-right-s .app-right .app-item[data-v-d299475a]{width:%?546?%}.app-left-right-s .app-right .app-item .app-top[data-v-d299475a]{width:100%;padding-left:%?24?%;margin-bottom:%?40?%}.app-left-right-s .app-right .app-item .app-top .app-text[data-v-d299475a]{font-size:%?28?%;color:#353535}.app-left-right-s .app-right .app-item .app-top .app-icon[data-v-d299475a]{position:absolute;right:%?24?%}.app-left-right-s .app-right .app-item .app-top .app-icon uni-text[data-v-d299475a]{font-size:%?26?%;color:#999;margin-left:%?16?%}.app-left-right-s .app-right .app-item .app-top .app-icon uni-icon[data-v-d299475a]{width:%?13?%;height:%?22?%;background-image:url("+e(i("db8d"))+");background-size:100% 100%;background-repeat:no-repeat;margin-left:%?24?%}.app-left-right-s .app-right .app-item .app-item-child[data-v-d299475a]{display:inline-block;height:%?138?%;width:%?182?%;margin-bottom:%?40?%}.app-left-right-s .app-right .app-item .app-item-child .app-image[data-v-d299475a]{width:%?104?%;height:%?104?%}.app-left-right-s .app-right .app-item .app-item-child .app-text[data-v-d299475a]{font-size:%?26?%;color:#353535;margin-top:%?8?%}body.?%PAGE?%[data-v-d299475a]{background:#f7f7f7}",""])},"74ab":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i("2f62"),p=n(i("5d3f"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return s(t)||d(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var a=0,i=new Array(t.length);a<t.length;a++)i[a]=t[a];return i}}function c(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,e)}return i}function l(t){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?c(i,!0).forEach(function(a){h(t,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(i,a))})}return t}function h(t,a,i){return a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}var g={components:{"app-category-list":p.default},data:function(){return{scrollTop:0,list:[],goods:[],request:!0,page:1,classId:0,activeIndex:0,activeIndexTwo:0,height:0,over:!1,scrollHeight:0,mch_id:0,cat_style:0,cat_id:0}},computed:l({},(0,e.mapGetters)("mallConfig",{tabBarNavs:"getNavBar"}),{},(0,e.mapState)("gConfig",{windowHeight:function(t){return t.systemInfo.windowHeight},windowWidth:function(t){return t.systemInfo.windowWidth}}),{},(0,e.mapGetters)("iPhoneX",{botHeight:"getBotHeight"}),{setHeight:function(){return this.windowHeight+"px"}}),onReachBottom:function(){},onLoad:function(t){var a=this;a.mch_id=t.mch_id,a.$request({url:a.$api.mch.cat_style,data:{mch_id:a.mch_id}}).then(function(t){0===t.code&&(a.cat_style=t.data.setting.cat_style,a.loadData())})},methods:{loadData:function(){var t=this;t.$showLoading(),t.$request({url:t.$api.mch.cats_list,data:{mch_id:t.mch_id,cat_id:t.cat_id}}).then(function(a){t.$hideLoading(),0===a.code&&(t.list=a.data.list)}).catch(function(a){t.$hideLoading()})},active:function(t){var a=this;this.page=1,uni.showLoading({text:"加载中...",mask:!0});for(var i=0;i<this.list.length;i++)this.list[i].active!==t.active&&(this.list[i].active=!1),this.list[i].id===t.id&&(this.list[i].active=!0);this.$request({url:"".concat(this.$api.default.goods_list,"&page=").concat(this.page,"&cat_id=").concat(t.id)}).then(function(i){uni.hideLoading(),a.goods=i.data.list,a.page=1,a.classId=t.id,a.over=!1}),this.over=!1},req:function(){var t=this;this.$request({url:"".concat(this.$api.default.goods_list,"&page=").concat(this.page,"&cat_id=").concat(this.classId)}).then(function(a){var i;a.data.list.length>0?(i=t.goods).push.apply(i,r(a.data.list)):t.over=!0;uni.hideLoading()})},activeThree:function(t){for(var a=0;a<this.list.length;a++)this.list[a].active!==t.active&&(this.list[a].active=!1),this.list[a].id===t.id&&(this.list[a].active=!0,this.activeIndex=a)}}};a.default=g},7730:function(t,a,i){"use strict";i.r(a);var e=i("74ab"),p=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,function(){return e[t]})}(n);a["default"]=p.a},8535:function(t,a,i){"use strict";var e=i("b4f0"),p=i.n(e);p.a},"87c7":function(t,a,i){"use strict";i.r(a);var e=i("0592"),p=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,function(){return e[t]})}(n);a["default"]=p.a},b4f0:function(t,a,i){var e=i("1352");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var p=i("4f06").default;p("5b15787d",e,!0,{sourceMap:!1,shadowMode:!1})}}]);