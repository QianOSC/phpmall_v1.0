(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-community-profit-profit"],{"3e04":function(t,e,i){"use strict";var a=i("9ab7"),n=i.n(a);n.a},"41e4":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-5c26b0e4]{text-align:center}.font-weight[data-v-5c26b0e4]{font-weight:700}.page-width[data-v-5c26b0e4]{width:100%}.goods-hover-class[data-v-5c26b0e4]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-5c26b0e4]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-5c26b0e4]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-5c26b0e4]{width:100%}.u-hover-class[data-v-5c26b0e4]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-5c26b0e4]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-nav[data-v-5c26b0e4]{color:#353535;width:100%;position:fixed;left:0;background-color:#fff;z-index:11}.app-nav .nav-item[data-v-5c26b0e4]{text-align:center}.app-nav .nav-item uni-text[data-v-5c26b0e4]{display:inline-block}.app-nav .active-text[data-v-5c26b0e4]{border-bottom:%?4?% solid}.app-nav.shadow[data-v-5c26b0e4]{-webkit-box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06)}.default-m-text[data-v-5c26b0e4]{color:#ff4544}.blue-m-text[data-v-5c26b0e4]{color:#446dfd}body.?%PAGE?%[data-v-5c26b0e4]{background:#f7f7f7}",""])},4635:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-layout",[i("app-tab-nav",{attrs:{setTop:0,tabList:t.tabList,padding:0,theme:t.getTheme,activeItem:t.activeTab,shadow:!1},on:{click:function(e){e=t.$handleEvent(e),t.tabStatus(e)}}}),1==t.activeTab?i("v-uni-view",[i("v-uni-view",{staticClass:"tip"},[t._v("提示：当预计利润大于可提现利润时，说明存在未过售后订单")]),i("v-uni-view",{staticClass:"tip-placeholder"}),t._l(t.list,function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{staticClass:"item-top main-between"},[i("v-uni-view",{staticClass:"goods-title dir-left-nowrap"},[i("v-uni-image",{attrs:{src:"./../image/activity-name.png"}}),i("v-uni-view",[t._v(t._s(e.activity.title))])],1),i("v-uni-view",{staticClass:"start-time dir-left-nowrap"},[t._v(t._s(e.activity.start_at)+"开始")])],1),i("v-uni-view",{staticClass:"item-info"},[i("v-uni-view",{staticClass:"item-bottom main-center"},[i("v-uni-view",{staticClass:"money-item dir-top-nowrap cross-center main-center box-grow-1"},[i("v-uni-view",[t._v("订单数")]),i("v-uni-view",{staticClass:"money",staticStyle:{color:"#353535"}},[t._v(t._s(e.order_num))])],1),i("v-uni-view",{staticClass:"money-item dir-top-nowrap cross-center main-center box-grow-1"},[i("v-uni-view",[t._v("订单金额")]),i("v-uni-view",{staticClass:"money",staticStyle:{color:"#353535"}},[t._v(t._s(e.total_pay_price))])],1)],1),i("v-uni-view",{staticClass:"item-bottom main-center"},[i("v-uni-view",{staticClass:"money-item dir-top-nowrap cross-center main-center box-grow-1"},[i("v-uni-view",[t._v("预计总利润")]),i("v-uni-view",{staticClass:"money",staticStyle:{color:"#f39800"}},[t._v(t._s(e.profit_price))])],1),i("v-uni-view",{staticClass:"money-item dir-top-nowrap cross-center main-center box-grow-1"},[i("v-uni-view",[t._v("可提现利润")]),i("v-uni-view",{staticClass:"money",staticStyle:{color:"#f39800"}},[t._v(t._s(e.stay_price))])],1)],1)],1)],1)})],2):t._e(),2==t.activeTab?i("v-uni-view",[i("v-uni-view",{staticClass:"price main-between cross-center"},[i("v-uni-view",[i("v-uni-view",[t._v("累计利润：￥"+t._s(t.statics.all_price?t.statics.all_price:"0.00"))]),i("v-uni-view",[t._v("待结算：￥"+t._s(t.statics.stay_price?t.statics.stay_price:"0.00"))])],1),i("v-uni-view",{staticClass:"choose-btn",class:t.getTheme+"-m-text "+t.getTheme+" "+t.getTheme+"-m-border "+t.getTheme,on:{click:function(e){e=t.$handleEvent(e),t.show=!t.show}}},[i("v-uni-text",[t._v(t._s("day"==t.type?"今日":"month"==t.type?"本月":"全部"))]),2==t.activeTab?i("v-uni-image",{class:t.getTheme+"-m-back "+t.getTheme,attrs:{src:"./../image/open.png"}}):t._e()],1)],1),i("v-uni-view",{staticClass:"order"},t._l(t.detail,function(e){return i("v-uni-view",{key:e.order_no,staticClass:"order-item"},[i("v-uni-view",{staticClass:"order-top main-between"},[i("v-uni-view",[t._v(t._s(e.order_no))]),i("v-uni-view",[t._v("￥"+t._s(e.profit_price))])],1),i("v-uni-view",{staticClass:"order-bottom main-between"},[i("v-uni-view",[t._v(t._s(e.created_at))]),i("v-uni-view",[t._v(t._s(e.status))])],1)],1)}),1)],1):t._e(),t.show?i("v-uni-view",{staticClass:"bg"},[i("v-uni-view",{staticClass:"dialog"},[i("v-uni-view",{staticClass:"dialog-item",on:{click:function(e){e=t.$handleEvent(e),t.toggle("")}}},[t._v("全部")]),i("v-uni-view",{staticClass:"dialog-item",on:{click:function(e){e=t.$handleEvent(e),t.toggle("month")}}},[t._v("本月")]),i("v-uni-view",{staticClass:"dialog-item",on:{click:function(e){e=t.$handleEvent(e),t.toggle("day")}}},[t._v("今日")]),i("v-uni-view",{staticClass:"cancel main-center cross-center"},[i("v-uni-view",{staticClass:"cancel-btn",on:{click:function(e){e=t.$handleEvent(e),t.show=!t.show}}},[t._v("取消")])],1)],1)],1):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"70ec":function(t,e,i){var a=i("41e4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5142e21b",a,!0,{sourceMap:!1,shadowMode:!1})},"7fd0":function(t,e,i){"use strict";i.r(e);var a=i("92cd"),n=i("86a7");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("e951");var d=i("2877"),r=Object(d["a"])(n["default"],a["a"],a["b"],!1,null,"5c26b0e4",null);e["default"]=r.exports},"86a7":function(t,e,i){"use strict";i.r(e);var a=i("93b4"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"92cd":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{class:[t.shadow?"main-between app-nav shadow":"main-between app-nav"],style:[{"line-height":(t.setHeight?t.setHeight:90)+"rpx","font-size":(t.fontSize?t.fontSize:28)+"rpx",height:(t.setHeight?t.setHeight:90)+"rpx",top:t.setTop>0?"calc("+t.setTop+"rpx + var(--window-top))":"var(--window-top)",backgroundColor:""+(t.background?t.background:"#fff")}]},t._l(t.tabList,function(e){return i("v-uni-view",{key:e.id,staticClass:"box-grow-1 nav-item",style:[{borderBottom:(t.border?1:0)+"rpx solid #e2e2e2"}],attrs:{"data-id":e.id},on:{click:function(e){e=t.$handleEvent(e),t.handleClick(e)}}},[i("v-uni-text",{class:[e.id==t.activeItem?"active-text "+t.theme+"-m-text "+t.theme:""],style:[{height:(t.setHeight?t.setHeight:90)+"rpx",padding:"0 "+t.padding+"rpx"}]},[t._v(t._s(e.name))])],1)}),1),i("v-uni-view",{style:[{height:(t.placeHeight?t.placeHeight:90)+"rpx"}]})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"93b4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"app-tab-nav",props:{background:String,setTop:{type:[Number,String]},padding:{default:45,type:[Number,String]},setHeight:Number,placeHeight:Number,fontSize:Number,theme:{default:"default",type:String},border:{default:!0,type:Boolean},shadow:{default:!0,type:Boolean},activeItem:{type:[Number,String]},tabList:Array},methods:{handleClick:function(t){this.$emit("click",t)}}};e.default=a},"9ab7":function(t,e,i){var a=i("c334");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("397a2b51",a,!0,{sourceMap:!1,shadowMode:!1})},a1f6:function(t,e,i){"use strict";i.r(e);var a=i("d82f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},aa44:function(t,e,i){"use strict";i.r(e);var a=i("4635"),n=i("a1f6");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("3e04");var d=i("2877"),r=Object(d["a"])(n["default"],a["a"],a["b"],!1,null,"0224d2ad",null);e["default"]=r.exports},c334:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-0224d2ad]{text-align:center}.font-weight[data-v-0224d2ad]{font-weight:700}.page-width[data-v-0224d2ad]{width:100%}.goods-hover-class[data-v-0224d2ad]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-0224d2ad]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-0224d2ad]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-0224d2ad]{width:100%}.u-hover-class[data-v-0224d2ad]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-0224d2ad]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.tip[data-v-0224d2ad]{height:%?60?%;line-height:%?60?%;background-color:#f8e5e5;color:#ff4544;padding-left:%?20?%;font-size:%?24?%;position:fixed;top:calc(%?90?% + var(--window-top));left:0;width:100%;z-index:10}.tip-placeholder[data-v-0224d2ad]{height:%?60?%}.item[data-v-0224d2ad]{width:%?702?%;margin:%?16?% %?24?% 0;background-color:#fff;border-radius:%?16?%}.item .item-top[data-v-0224d2ad]{height:%?90?%;line-height:%?90?%;padding:0 %?20?%;border-bottom:%?2?% solid #e2e2e2}.item .item-top .goods-title[data-v-0224d2ad]{color:#353535;font-size:%?24?%;margin-top:%?30?%;height:%?30?%;line-height:%?30?%}.item .item-top .goods-title uni-image[data-v-0224d2ad]{width:%?30?%;height:%?30?%;margin-right:%?20?%;display:block}.item .item-top .start-time[data-v-0224d2ad]{color:#999;font-size:%?24?%}.item .item-info[data-v-0224d2ad]{padding:%?30?% 0}.item .item-info .item-bottom[data-v-0224d2ad]{height:%?105?%}.item .item-info .item-bottom .money-item[data-v-0224d2ad]{font-size:%?24?%;color:#999;width:50%}.item .item-info .item-bottom .money-item .money[data-v-0224d2ad]{margin-top:%?10?%;font-family:DIN;font-size:%?46?%}.price[data-v-0224d2ad]{height:%?96?%;background-color:#fff;padding:0 %?24?%;font-size:%?24?%;color:#999;position:fixed;top:calc(%?90?% + var(--window-top));left:0;width:100%;z-index:100}.price .choose-btn[data-v-0224d2ad]{border:%?2?% solid;height:%?50?%;border-radius:%?25?%;line-height:%?48?%;display:inline-block;padding:0 %?24?%}.price .choose-btn uni-image[data-v-0224d2ad]{margin-top:%?21?%;height:%?8?%;width:%?12?%;margin-left:%?10?%;float:right;display:block}.order[data-v-0224d2ad]{width:%?702?%;border-radius:%?16?%;background-color:#fff;margin:%?114?% %?24?% %?24?%}.order .order-item[data-v-0224d2ad]{padding:%?24?% %?32?%;border-top:%?2?% solid #e2e2e2;font-size:%?26?%;color:#353535}.order .order-item[data-v-0224d2ad]:first-of-type{border-top:0}.order .order-item .order-bottom[data-v-0224d2ad]{font-size:%?24?%;color:#999}.bg[data-v-0224d2ad]{position:fixed;top:var(--window-top);left:0;background-color:rgba(0,0,0,.3);z-index:4;width:100%;height:100%}.bg .dialog[data-v-0224d2ad]{background-color:#fff;border-radius:%?16?%;position:fixed;bottom:0;left:0;width:100%;z-index:200}.bg .dialog .dialog-item[data-v-0224d2ad]{height:%?115?%;line-height:%?115?%;border-bottom:%?2?% solid #e2e2e2;text-align:center;font-size:%?26?%;color:#353535}.bg .dialog .cancel[data-v-0224d2ad]{background-color:#f6f6f6;height:%?140?%}.bg .dialog .cancel .cancel-btn[data-v-0224d2ad]{height:%?115?%;line-height:%?115?%;text-align:center;width:%?702?%;border-radius:%?16?%;background-color:#fff}body.?%PAGE?%[data-v-0224d2ad]{background:#f7f7f7}",""])},d82f:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62"),n=o(i("7fd0"));function o(t){return t&&t.__esModule?t:{default:t}}function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(i,!0).forEach(function(e){s(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={data:function(){return{show:!1,statics:{all_price:"",stay_price:""},tabList:[{id:1,name:"概况"},{id:2,name:"明细"}],activeTab:1,type:"",page:1,list:[],detail:[]}},components:{"app-tab-nav":n.default},computed:r({},(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,a.mapState)({stock:function(t){return t.mallConfig.__wxapp_img.stock},bonusImg:function(t){return t.mallConfig.__wxapp_img.bonus},userInfo:function(t){return t.user.info}})),onLoad:function(t){this.$showLoading({type:"global",text:"加载中..."}),this.getStatus()},onReachBottom:function(){this.page++,2==this.activeTab?this.getDetail():this.getList()},methods:{tabStatus:function(t){var e=t.currentTarget.dataset.id;this.show=!1,this.activeTab=e,this.page=1,0==this.detail.length&&this.$showLoading({type:"global",text:"加载中..."}),2==this.activeTab?this.getDetail():this.getList()},toggle:function(t){this.type=t,this.show=!1,this.page=1,this.getDetail()},getDetail:function(){var t=this;t.$request({url:t.$api.community.profit_detail,data:{type:this.type,page:this.page}}).then(function(e){uni.hideLoading(),t.$hideLoading(),0==e.code?(t.statics=e.data.data,t.page>1?t.detail=t.detail.concat(e.data.list):t.detail=e.data.list):uni.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){uni.hideLoading(),t.$hideLoading()})},getList:function(){var t=this;t.$request({url:t.$api.community.profit_list,data:{page:this.page}}).then(function(e){uni.hideLoading(),t.$hideLoading(),0==e.code?t.page>1?t.list=t.list.concat(e.list):t.list=e.list:uni.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){uni.hideLoading(),t.$hideLoading()})},getStatus:function(){var t=this,e=this;e.$request({url:e.$api.community.index}).then(function(e){0==e.code?(t.setting=e.data.setting,e.data.middleman.id>0?(t.middleman=e.data.middleman,t.apply_at=t.middleman.apply_at.substring(0,10),t.getList()):(uni.showToast({title:"您还不是团长，现在前往申请页面",icon:"none",duration:1e3}),setTimeout(function(){uni.redirectTo({url:"/plugins/community/apply/apply"})},1e3))):uni.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})}}};e.default=c},e951:function(t,e,i){"use strict";var a=i("70ec"),n=i.n(a);n.a}}]);