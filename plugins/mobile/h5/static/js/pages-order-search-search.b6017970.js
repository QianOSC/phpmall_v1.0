(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-search-search"],{"2eba":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("2f62"),r=n(a("7598"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach(function(t){s(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}for(var d=new Date,l=[],u=[],f=[],h=[],v=[],p=[],g=2015;g<=d.getFullYear();g++)l.push(g);for(var m=1;m<=12;m++)u.push(m);for(var b=1;b<=31;b++)f.push(b);for(var w=1;w<=30;w++)h.push(w);for(var y=1;y<=28;y++)v.push(y);for(var k=1;k<=29;k++)p.push(k);var x={data:function(){return{keyword:"",timeVal:[],time:"",start:"",end:"",years:l,months:u,days:f,bigDays:f,smallDays:h,secDays:v,otherDays:p,today:"",type:1,dialog:!1}},components:{"app-iphone-x":r.default},computed:c({},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"})),methods:{clearSearch:function(){this.keyword=""},clearTime:function(e){1==e?this.start="":this.end=""},toSearch:function(){var e={keyword:this.keyword,dateArr:[]};(this.start||this.end)&&(e.dateArr=[this.start,this.end]),uni.setStorage({key:"search",data:e,success:function(e){uni.hideLoading(),setTimeout(function(){uni.navigateBack()},500)},fail:function(e){uni.hideLoading(),uni.showToast({title:e.errMsg,icon:"none",duration:1e3})}})},reset:function(){this.keyword="",this.start="",this.end=""},submitTime:function(){var e,t,a=new Date(this.time).getTime();if(1==this.type){if(this.end&&(t=new Date(this.end).getTime(),a>t))return uni.showToast({title:"时间区间选择有误，请确认选择的时间",icon:"none",duration:1e3}),!1;this.start=this.time}else{if(this.start&&(e=new Date(this.start).getTime(),a<e))return uni.showToast({title:"时间区间选择有误，请确认选择的时间",icon:"none",duration:1e3}),!1;this.end=this.time}this.dialog=!1},timeChange:function(e){var t=e.detail.value;this.timeVal=e.detail.value;this.years;var a=this.years[t[0]],i=this.months[t[1]];this.days=2==i?a%4==0&&a%400!=0?this.otherDays:this.secDays:i<8&&i%2==1||i>7&&i%2==0?this.bigDays:this.smallDays;var r=this.days[t[2]];i>=1&&i<=9&&(i="0"+i),r>=1&&r<=9&&(r="0"+r),this.time=a+"-"+i+"-"+r}},onLoad:function(e){var t=this;t.indicatorStyle="height: 36px;color:"+t.color+";font-size:14px;";var a=new Date,i=a.getFullYear(),r=a.getMonth()+1;r>=1&&r<=9&&(r="0"+r);var n=a.getDate();for(var o in t.today=i+"-"+r+"-"+n,t.time=t.today,t.years)t.today.substring(0,4)==t.years[o]&&(t.timeVal[0]=+o);var c=t.today.substring(5,7);for(var s in t.months)t.today.substring(5,7)==t.months[s]&&(t.timeVal[1]=+s);for(var d in this.days=2==c?i%4==0&&i%400!=0?this.otherDays:this.secDays:c<8&&c%2==1||c>7&&c%2==0?this.bigDays:this.smallDays,t.days)t.today.substring(8,10)==t.days[d]&&(t.timeVal[2]=+d);uni.getStorage({key:"search",success:function(e){t.keyword=e.data.keyword,e.data.dateArr[0]&&(t.start=e.data.dateArr[0]),e.data.dateArr[1]&&(t.end=e.data.dateArr[1])}})}};t.default=x},3290:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".text-center[data-v-773a097c]{text-align:center}.font-weight[data-v-773a097c]{font-weight:700}.page-width[data-v-773a097c]{width:100%}.goods-hover-class[data-v-773a097c]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-773a097c]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-773a097c]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-773a097c]{width:100%}.u-hover-class[data-v-773a097c]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-773a097c]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.search-mode[data-v-773a097c]{position:fixed;z-index:233;top:0;left:0;right:0;width:100%;height:100%;background-color:#f7f7f7}.search-mode .search-input[data-v-773a097c]{height:%?100?%;background-color:#fff;padding:%?19?% %?18?%}.search-mode .search-input uni-input[data-v-773a097c]{padding:0 %?30?%;background-color:#fff;border-radius:%?31?%;height:%?62?%;font-size:%?26?%;color:#353535;width:100%;background-color:#f7f7f7}.search-mode .search-input .search-clear[data-v-773a097c]{position:absolute;right:%?35?%;top:%?35?%;width:%?30?%;height:%?30?%;z-index:235}.search-mode .search-time[data-v-773a097c]{margin-top:%?20?%;padding-left:%?24?%;height:%?100?%;background-color:#fff}.search-mode .search-time .search-time-label[data-v-773a097c]{font-size:%?32?%;color:#353535;margin-right:%?28?%}.search-mode .search-time .search-time-item[data-v-773a097c]{height:%?48?%;line-height:%?44?%;width:%?250?%;font-size:%?24?%;color:#353535;border:%?2?% solid #e2e2e2;padding:0 %?10?% 0 %?16?%;border-radius:%?8?%}.search-mode .search-time .search-time-item.placeholder[data-v-773a097c]{color:#999}.search-mode .search-time .search-time-item .time-clear[data-v-773a097c]{width:%?30?%;height:%?30?%;margin-right:%?10?%}.search-mode .search-time .search-time-line[data-v-773a097c]{margin:0 %?12?%;width:%?24?%;height:%?2?%;background-color:#e2e2e2}.search-mode .search-menu[data-v-773a097c]{height:%?110?%;width:100%;background-color:#fff}.search-mode .search-menu .search-menu-item[data-v-773a097c]{line-height:%?110?%;text-align:center;font-size:%?32?%;color:#353535}.dialog[data-v-773a097c]{position:fixed;height:100%;width:100%;bottom:0;left:0;z-index:240;background-color:rgba(0,0,0,.3)}.dialog .picker-list[data-v-773a097c]{background-color:#fff;position:fixed;bottom:0;left:0;width:100%;z-index:242}.dialog .picker-list .picker-header[data-v-773a097c]{padding:0 %?24?%;color:#446dfd;font-size:%?32?%;line-height:%?100?%;height:%?96?%;border-bottom:%?2?% solid #e2e2e2}.dialog .picker-list .picker-header>uni-view[data-v-773a097c]:first-of-type{color:#353535}.dialog .picker-list uni-picker-view[data-v-773a097c]{width:100%;height:%?440?%}.dialog .picker-list uni-picker-view uni-picker-view-column[data-v-773a097c]:first-of-type{-webkit-box-flex:1.75;-webkit-flex:1.75;-ms-flex:1.75;flex:1.75}.dialog .picker-list .picker-view[data-v-773a097c]{line-height:%?72?%;text-align:center;font-size:%?32?%}.dialog .picker-list .picker-view.sure-color[data-v-773a097c]{font-size:%?36?%;color:#353535;font-weight:600}.dialog .picker-list .picker-view.cardinal-color[data-v-773a097c]{color:#999}.dialog .picker-list .picker-view.even-color[data-v-773a097c]{color:#cdcdcd}body.?%PAGE?%[data-v-773a097c]{background:#f7f7f7}",""])},3633:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-layout",[a("v-uni-view",{staticClass:"search-mode"},[a("v-uni-view",{staticClass:"search-input"},[a("v-uni-input",{attrs:{type:"text","confirm-type":"search","placeholder-style":"color:#999999;font-size:13px;",placeholder:"请输入订单号/商品名称/收货人姓名/联系电话"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e.keyword.length>0?a("v-uni-image",{staticClass:"search-clear",attrs:{src:"/static/image/icon/clear.png"},on:{click:function(t){t=e.$handleEvent(t),e.clearSearch(t)}}}):e._e()],1),a("v-uni-view",{staticClass:"search-time dir-left-nowrap cross-center"},[a("v-uni-view",{staticClass:"search-time-label"},[e._v("下单时间")]),a("v-uni-view",{staticClass:"search-time-item main-between cross-center",class:{placeholder:!e.start},on:{click:function(t){t=e.$handleEvent(t),e.dialog=!0,e.type=1}}},[a("v-uni-view",[e._v(e._s(""!=e.start?e.start:"请选择开始时间"))]),e.start?a("v-uni-image",{staticClass:"time-clear",attrs:{src:"/static/image/icon/clear.png"},on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.clearTime(1)}}}):e._e()],1),a("v-uni-view",{staticClass:"search-time-line"}),a("v-uni-view",{staticClass:"search-time-item main-between cross-center",class:{placeholder:!e.end},on:{click:function(t){t=e.$handleEvent(t),e.dialog=!0,e.type=2}}},[a("v-uni-view",[e._v(e._s(""!=e.end?e.end:"请选择结束时间"))]),e.end?a("v-uni-image",{staticClass:"time-clear",attrs:{src:"/static/image/icon/clear.png"},on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.clearTime(2)}}}):e._e()],1)],1),a("v-uni-view",[a("app-iphone-x",[a("v-uni-view",{staticClass:"search-menu main-center",attrs:{slot:"empty-area"},slot:"empty-area"},[a("v-uni-view",{staticClass:"box-grow-1 search-menu-item",on:{click:function(t){t=e.$handleEvent(t),e.reset(t)}}},[e._v("重置")]),a("v-uni-view",{staticClass:"box-grow-1 search-menu-item",class:e.getTheme+"-m-back "+e.getTheme,staticStyle:{color:"#fff"},on:{click:function(t){t=e.$handleEvent(t),e.toSearch(t)}}},[e._v("搜索")])],1)],1)],1)],1),e.dialog?a("v-uni-view",{staticClass:"dialog",on:{click:function(t){t=e.$handleEvent(t),e.dialog=!e.dialog}}},[a("v-uni-view",{staticClass:"picker-list",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t)}}},[a("v-uni-view",{staticClass:"main-between picker-header"},[a("v-uni-view",{on:{click:function(t){t=e.$handleEvent(t),e.dialog=!1}}},[e._v("取消")]),a("v-uni-view",{on:{click:function(t){t=e.$handleEvent(t),e.submitTime(t)}}},[e._v("确定")])],1),a("v-uni-picker-view",{attrs:{value:e.timeVal,"indicator-style":e.indicatorStyle},on:{change:function(t){t=e.$handleEvent(t),e.timeChange(t)}}},[a("v-uni-picker-view-column",e._l(e.years,function(t,i){return a("v-uni-view",{key:t,class:["picker-view",{"sure-color":e.timeVal[0]===i,"cardinal-color":e.timeVal[0]===i+1||e.timeVal[0]===i-1,"even-color":e.timeVal[0]===i+2||e.timeVal[0]===i-2}]},[a("v-uni-text",[e._v(e._s(t))]),e._v("年")],1)}),1),a("v-uni-picker-view-column",e._l(e.months,function(t,i){return a("v-uni-view",{key:t,class:["picker-view",{"sure-color":e.timeVal[1]===i,"cardinal-color":e.timeVal[1]===i+1||e.timeVal[1]===i-1,"even-color":e.timeVal[1]===i+2||e.timeVal[1]===i-2}]},[a("v-uni-text",[e._v(e._s(t))]),e._v("月")],1)}),1),a("v-uni-picker-view-column",e._l(e.days,function(t,i){return a("v-uni-view",{key:t,class:["picker-view",{"sure-color":e.timeVal[2]===i,"cardinal-color":e.timeVal[2]===i+1||e.timeVal[2]===i-1,"even-color":e.timeVal[2]===i+2||e.timeVal[2]===i-2}]},[a("v-uni-text",[e._v(e._s(t))]),e._v("日")],1)}),1)],1)],1)],1):e._e()],1)},r=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return r})},3788:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("2f62");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach(function(t){o(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c={props:{backgroundColor:{type:String,default:function(){return"white"}}},computed:n({},(0,i.mapGetters)("iPhoneX",{getBoolEmpty:"getBoolEmpty"}))};t.default=c},"421d":function(e,t,a){"use strict";a.r(t);var i=a("3788"),r=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);t["default"]=r.a},6101:function(e,t,a){"use strict";a.r(t);var i=a("2eba"),r=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);t["default"]=r.a},"679a":function(e,t,a){"use strict";a.r(t);var i=a("3633"),r=a("6101");for(var n in r)"default"!==n&&function(e){a.d(t,e,function(){return r[e]})}(n);a("eec1");var o=a("2877"),c=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"773a097c",null);t["default"]=c.exports},"6a37":function(e,t,a){"use strict";var i=a("c1ef"),r=a.n(i);r.a},7598:function(e,t,a){"use strict";a.r(t);var i=a("a17e"),r=a("421d");for(var n in r)"default"!==n&&function(e){a.d(t,e,function(){return r[e]})}(n);a("6a37");var o=a("2877"),c=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"0176e80f",null);t["default"]=c.exports},a17e:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"iphone-x"},[e._t("empty-area"),e.getBoolEmpty.XBoolean?a("v-uni-view",{staticClass:"x-line",style:{height:e.getBoolEmpty.emptyHeight+"rpx",backgroundColor:e.backgroundColor}}):e._e()],2)},r=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return r})},c1ef:function(e,t,a){var i=a("fb96");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("25d00d7c",i,!0,{sourceMap:!1,shadowMode:!1})},eec1:function(e,t,a){"use strict";var i=a("f437"),r=a.n(i);r.a},f437:function(e,t,a){var i=a("3290");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("528e6f84",i,!0,{sourceMap:!1,shadowMode:!1})},fb96:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".text-center[data-v-0176e80f]{text-align:center}.font-weight[data-v-0176e80f]{font-weight:700}.page-width[data-v-0176e80f]{width:100%}.goods-hover-class[data-v-0176e80f]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-0176e80f]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-0176e80f]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-0176e80f]{width:100%}.u-hover-class[data-v-0176e80f]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-0176e80f]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.iphone-x[data-v-0176e80f]{position:fixed;bottom:0;left:0;width:100%;z-index:1500}.x-line[data-v-0176e80f]{width:100%;background-color:pink}body.?%PAGE?%[data-v-0176e80f]{background:#f7f7f7}",""])}}]);