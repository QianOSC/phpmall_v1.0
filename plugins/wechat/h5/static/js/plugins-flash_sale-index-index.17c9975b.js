(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-flash_sale-index-index"],{"0b93":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-layout",[i("v-uni-view",{class:[t.themeObject.back,"f-switch"]},[t.is_no_now?i("v-uni-view",{staticStyle:{"font-size":"36rpx","text-align":"center",color:"#fff","line-height":"100rpx"}},[t._v("即将开始")]):[t.is_switch?i("v-uni-image",{attrs:{src:"./../image/processing.png"}}):i("v-uni-image",{attrs:{src:"./../image/start.png"}}),i("v-uni-button",{staticClass:"button left",on:{click:function(e){e=t.$handleEvent(e),t.is_switch=!0}}}),i("v-uni-button",{staticClass:"button right",on:{click:function(e){e=t.$handleEvent(e),t.is_switch=!1}}})]],2),Object.keys(t.activity).length?i("v-uni-view",{class:[t.themeObject.back,"f-bulletin"]},[i("v-uni-view",[i("v-uni-view",{staticClass:"dir-left-nowrap main-between cross-center"},[i("v-uni-view",{staticClass:"f-title"},[t._v(t._s(t.activity.title))]),i("v-uni-view",{staticClass:"f-rule",on:{click:function(e){e=t.$handleEvent(e),t.goRule(e)}}},[t._v("活动规则"),i("v-uni-image",{attrs:{src:"/static/image/icon/arrow-right.png"}})],1)],1),i("v-uni-view",{staticClass:"f-timing"},[t._v("距离本场"+t._s(1===t.type?"结束":"开始")),i("v-uni-text",{class:[t.themeObject.color]},[t._v(t._s(t.time_str.day))]),t._v("天"),i("v-uni-text",{class:[t.themeObject.color]},[t._v(t._s(t.time_str.hou))]),t._v("时"),i("v-uni-text",{class:[t.themeObject.color]},[t._v(t._s(t.time_str.min))]),t._v("分"),i("v-uni-text",{class:[t.themeObject.color]},[t._v(t._s(t.time_str.sec))]),t._v("秒")],1)],1)],1):t._e(),t.list.length>0?i("v-uni-view",{class:[t.themeObject.back,"f-activity"]},t._l(t.list,function(e,n){return i("v-uni-view",{key:n,staticClass:"f-item dir-left-nowrap",on:{click:function(i){i=t.$handleEvent(i),t.routeDetail(e.id)}}},[i("v-uni-view",{staticClass:"f-image"},[0==e.goods_stock&&"1"==t.appSetting.is_show_stock?i("v-uni-view",{staticClass:"out-dialog"},[i("v-uni-image",{attrs:{src:"1"==t.appSetting.is_use_stock?t.appImg.plugins_out:t.appSetting.sell_out_pic}})],1):t._e(),i("v-uni-image",{staticClass:"f-pic",attrs:{src:e.goodsWarehouse.cover_pic}})],1),i("v-uni-view",{staticClass:"cont"},[i("v-uni-view",{staticClass:"dir-left-nowrap cross-center",staticStyle:{overflow:"hidden"}},[1===e.discount_type?i("v-uni-view",{class:t.themeObject.back+" f-discount box-grow-0 "},[t._v(t._s(Number(e.min_discount))+"折")]):i("v-uni-view",{class:t.themeObject.back+" f-discount box-grow-0 "},[t._v("减"+t._s(e.min_discount)+"元")]),i("v-uni-view",{staticClass:"f-name t-omit"},[t._v(t._s(e.goodsWarehouse.name))])],1),i("v-uni-view",{staticClass:"app-percentage",class:t.getTheme+"-m-back-l "+t.getTheme},[i("v-uni-view",{class:[t.themeObject.back],style:{width:e.percentage+"%"}})],1),i("v-uni-view",{staticClass:"f-num main-between"},[i("v-uni-text",[t._v(t._s(e.sales))]),i("v-uni-text",{class:[t.themeObject.color]},[t._v("仅剩"+t._s(e.goods_stock)+t._s(e.goodsWarehouse.unit))])],1),i("v-uni-view",{staticClass:"f-content dir-top-nowrap main-right"},[e.is_level?i("v-uni-view",[i("app-member-price",{attrs:{theme:t.themeObject,price:e.level_price}})],1):t._e(),e.vip_card_appoint.discount?i("app-sup-vip",{attrs:{is_vip_card_user:e.vip_card_appoint.is_vip_card_user,margin:"4rpx 0 0",discount:e.vip_card_appoint.discount}}):t._e(),i("v-uni-view",{staticClass:"dir-left-nowrap main-between cross-bottom"},[i("v-uni-view",{staticClass:"f-price dir-top-nowrap"},[i("v-uni-text",{class:t.themeObject.color},[t._v(t._s(e.price_content))]),i("v-uni-text",[t._v("￥"+t._s(e.original_price))])],1),i("v-uni-button",{class:["f-button",0===e.goods_stock&&1===t.type?"f-sold-out":t.themeObject.back],on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.grab(e)}}},[t._v(t._s(1===t.type?"马上抢":"查看商品"))])],1)],1)],1)],1)}),1):t._e(),t.detail?i("u-attr",{attrs:{goods:t.detail,themeObject:t.themeObject,checked:t.selectAttr,"right-func":!0,"left-func":!0},on:{leftFunc:function(e){e=t.$handleEvent(e),t.leftFunc(e)},rightFunc:function(e){e=t.$handleEvent(e),t.rightFunc(e)},check:function(e){e=t.$handleEvent(e),t.onAttr(e)}},model:{value:t.attrShow,callback:function(e){t.attrShow=e},expression:"attrShow"}}):t._e(),!Object.keys(t.activity).length&&t.loading?i("v-uni-view",{class:[t.themeObject.back,"f-empty"],style:{height:t.windowHeight-t.switch_height+"px"}},[i("v-uni-view",{staticClass:"f-empty-con"},[i("v-uni-view",{staticClass:"f-no"},[i("app-no-goods",{attrs:{background:"#efefef",title:t.title}})],1)],1)],1):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},1267:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEX09PTV1dUeYHV3AAAAFElEQVQoz2MY2aD+//8H+BgjGgAAMQANdT7AwNcAAAAASUVORK5CYII="},"207b":function(t,e,i){var n=i("a80f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d5b25f82",n,!0,{sourceMap:!1,shadowMode:!1})},"26e3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-attr"},[i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.turnOn(e)}}},[t._t("btn")],2),i("u-popup",{attrs:{mode:"bottom","border-radius":"14",safeAreaInsetBottom:!0},on:{close:function(e){e=t.$handleEvent(e),t.close(e)}},model:{value:t.newValue,callback:function(e){t.newValue=e},expression:"newValue"}},[i("v-uni-view",{staticClass:"u-model",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"u-top dir-left-nowrap u-border-box"},[i("v-uni-view",{staticClass:"u-pic u-border-box",on:{click:function(e){e=t.$handleEvent(e),t.clickImg(t.imgUrl)}}},[i("v-uni-image",{staticClass:"u-img",attrs:{src:t.imgUrl}})],1),i("v-uni-view",{staticClass:"u-info"},[i("v-uni-view",{class:["cross-center","dir-left-nowrap",t.themeObject.color]},[i("v-uni-view",{staticClass:"dir-left-nowrap"},[t._t("priceBefore"),i("v-uni-view",{staticClass:"u-price"},[t.is_show_price?i("app-price",{attrs:{theme:t.themeObject.theme,userTheme:t.themeObject.userTheme,sign:t.sign,price:t.sellPrice,"default-price":t.goods.price}}):t._e()],1)],2),1===t.goods.level_show?i("app-member-mark",{attrs:{theme:t.themeObject}}):t._e()],1),i("v-uni-view",{staticClass:"u-stock"},[t._v("库存："+t._s(t.stock))])],1),i("v-uni-view",{staticClass:"u-close-image",on:{click:function(e){e=t.$handleEvent(e),t.close(e)}}},[i("v-uni-image",{staticClass:"bd-close-image u-border-box",attrs:{src:"/static/image/icon/icon-close.png"}})],1)],1),i("v-uni-view",{staticClass:"u-center"},[i("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-y":"true"}},[t._t("extra"),t._l(t.newGroup,function(e,n){return"goods"===t.goods.type?i("v-uni-view",{key:n,staticClass:"u-attr-group u-border-box"},[i("v-uni-view",{staticClass:"u-group-name u-text"},[t._v(t._s(e.attr_group_name))]),i("v-uni-view",{staticClass:"dir-left-wrap"},t._l(e.attr_list,function(n,a){return i("v-uni-view",{key:a,class:["u-group-item",n.select?"u-checked "+t.themeObject.back:"u-unchecked",n.num_0?"u-attr_num_0":""],on:{click:function(i){i=t.$handleEvent(i),t.storeAttr(n.attr_id,e.attr_group_id,n.num_0)}}},[t._v(t._s(n.attr_name))])}),1)],1):t._e()}),t.is_choose_number?i("v-uni-view",{staticClass:"u-number dir-left-nowrap main-between cross-center"},[i("v-uni-view",{staticClass:"u-text"},[t._v("数量")]),i("v-uni-view",{staticClass:"dir-left-nowrap u-input-box"},[i("v-uni-view",{class:[t.number<=1?"u-reduced-1":"u-reduced-0","u-number-btn"],on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.numberSub(e)}}}),i("v-uni-input",{staticClass:"u-input",attrs:{type:"number"},on:{blur:function(e){e=t.$handleEvent(e),t.numberBlur(e)}},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),i("v-uni-view",{staticClass:"u-number-btn u-added-1",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.numberAdd(e)}}})],1)],1):t._e()],2)],1),i("v-uni-view",{staticClass:"u-bottom dir-left-nowrap"},[t.is_show_left&&("goods"===t.goods.type||t.is_must_left)?i("v-uni-view",{staticClass:"box-grow-1",class:[t.cartClass,t.is_show_right?"bd-btn-left":""],on:{click:function(e){e=t.$handleEvent(e),t.leftSubmit(e)}}},[t._t("left_slot"),t.$slots.left_slot?t._e():[t._v(t._s(t.leftText))]],2):t._e(),t.is_show_right?i("v-uni-view",{staticClass:"box-grow-1",class:[t.$slots.right_slot?"":t.themeObject.mBtn+" u-btn u-btn-color",!t.is_show_left||"goods"!==t.goods.type&&!t.is_must_left?"":"bd-btn-right"],on:{click:function(e){e=t.$handleEvent(e),t.rightSubmit(e)}}},[t._t("right_slot"),t.$slots.right_slot?t._e():[t._v(t._s(t.rightText))]],2):t._e(),t.$slots.right?[t._t("right")]:t._e()],2)],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"2bbe":function(t,e,i){var n=i("64b5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("507d0686",n,!0,{sourceMap:!1,shadowMode:!1})},"2db6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEX39/eZmZmXx6vxAAAAFElEQVQoz2MY2aD+//8H+BgjGgAAMQANdT7AwNcAAAAASUVORK5CYII="},"321f":function(t,e,i){"use strict";i.r(e);var n=i("d7e6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"335a":function(t,e,i){var n=i("4e6d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4b34206c",n,!0,{sourceMap:!1,shadowMode:!1})},"3da24":function(t,e,i){"use strict";i.r(e);var n=i("afcc"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"4e6d":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-bcbe1e78]{text-align:center}.font-weight[data-v-bcbe1e78]{font-weight:700}.page-width[data-v-bcbe1e78]{width:100%}.goods-hover-class[data-v-bcbe1e78]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-bcbe1e78]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-bcbe1e78]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-bcbe1e78]{width:100%}.u-hover-class[data-v-bcbe1e78]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-bcbe1e78]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.f-switch[data-v-bcbe1e78]{width:%?750?%;height:%?100?%;position:relative}.f-switch uni-image[data-v-bcbe1e78]{width:%?750?%;height:%?100?%;position:absolute;top:%?-1?%}.f-switch .button[data-v-bcbe1e78]{width:%?375?%;height:%?100?%;position:absolute;background:rgba(0,0,0,0);padding:0;margin:0;border:none}.f-switch .right[data-v-bcbe1e78]{right:0}.f-switch .left[data-v-bcbe1e78]{left:0}.f-bulletin[data-v-bcbe1e78]{padding:%?20?% %?24?%}.f-bulletin .f-title[data-v-bcbe1e78]{font-size:%?32?%;font-weight:700;color:#353535}.f-bulletin .f-rule[data-v-bcbe1e78]{font-size:%?26?%;color:#666;vertical-align:middle}.f-bulletin .f-rule>uni-image[data-v-bcbe1e78]{width:%?12?%;height:%?22?%;margin-left:%?14?%}.f-bulletin .f-timing[data-v-bcbe1e78]{margin-top:%?18?%;font-size:%?26?%;color:#353535}.f-bulletin .f-timing>uni-text[data-v-bcbe1e78]:first-child{margin-left:%?18?%}.f-bulletin>uni-view[data-v-bcbe1e78]{background-color:#fff;border-radius:%?15?%;height:%?147?%;padding:%?32?% %?24?%}.f-activity[data-v-bcbe1e78]{padding:0 %?24?%;overflow:auto;position:absolute;width:%?750?%;min-height:calc(100vh - %?287?% - var(--window-top))}.f-activity .f-item[data-v-bcbe1e78]{background-color:#fff;border-radius:%?15?%;padding:%?24?%;margin-bottom:%?20?%}.f-activity .f-item .f-pic[data-v-bcbe1e78]{width:%?240?%;height:%?240?%;border-radius:%?8?%}.f-activity .f-item>uni-view.cont[data-v-bcbe1e78]{width:%?394?%;margin-left:%?24?%;position:relative}.f-activity .f-item .f-name[data-v-bcbe1e78]{font-size:%?28?%;color:#353535;min-width:%?304?%}.f-activity .f-item .f-discount[data-v-bcbe1e78]{height:%?26?%;color:#fff;font-size:%?20?%;margin-right:%?10?%;text-align:center;line-height:%?26?%;border-radius:%?7?%;padding:0 %?5?%}.f-activity .f-item .f-num[data-v-bcbe1e78]{font-size:%?24?%;margin-top:%?10?%}.f-activity .f-item .f-num>uni-text[data-v-bcbe1e78]:first-child{color:#666}.f-activity .f-item .f-button[data-v-bcbe1e78]{height:%?68?%;line-height:%?68?%;width:%?164?%;border-radius:%?34?%;font-size:%?26?%;color:#fff;margin:0;padding:0;text-align:center;border:none}.f-activity .f-item .f-content[data-v-bcbe1e78]{position:absolute;bottom:0;width:%?394?%}.f-activity .f-item .f-price>uni-text[data-v-bcbe1e78]:first-child{font-size:%?32?%}.f-activity .f-item .f-price>uni-text[data-v-bcbe1e78]:last-child{font-size:%?25?%;color:#999;text-decoration:line-through}.f-activity .f-item .app-percentage[data-v-bcbe1e78]{width:%?395?%;height:%?20?%;border-radius:%?12?%;margin-top:%?10?%;overflow:hidden}.f-activity .f-item .app-percentage>uni-view[data-v-bcbe1e78]{height:%?20?%;border-radius:%?12?%}.f-activity .f-item .f-sold-out[data-v-bcbe1e78]{background-color:#cdcdcd}.f-empty[data-v-bcbe1e78]{width:%?750?%;padding:%?20?% %?24?%}.f-empty .f-empty-con[data-v-bcbe1e78]{height:100%;background:#efefef;border-radius:%?15?%;position:relative}.f-empty .f-no[data-v-bcbe1e78]{position:absolute;top:30%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.out-dialog[data-v-bcbe1e78]{border-top-left-radius:%?15?%;border-top-right-radius:%?15?%;width:%?240?%;height:%?240?%;position:absolute;top:0;z-index:10;left:0;background-color:rgba(0,0,0,.5)}.out-dialog uni-image[data-v-bcbe1e78]{width:%?240?%;height:%?240?%}.f-image[data-v-bcbe1e78]{position:relative}body.?%PAGE?%[data-v-bcbe1e78]{background:#f7f7f7}",""])},"64b5":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-3478eed7]{text-align:center}.font-weight[data-v-3478eed7]{font-weight:700}.page-width[data-v-3478eed7]{width:100%}.goods-hover-class[data-v-3478eed7]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-3478eed7]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-3478eed7]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-3478eed7]{width:100%}.u-hover-class[data-v-3478eed7]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-3478eed7]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-no-goods[data-v-3478eed7]{width:100%;height:%?400?%}.app-no-goods .icon[data-v-3478eed7]{width:%?240?%;height:%?240?%}.app-no-goods .text[data-v-3478eed7]{font-size:%?24?%;line-height:1;margin-top:%?25?%}body.?%PAGE?%[data-v-3478eed7]{background:#f7f7f7}",""])},"80a6":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"app-no-goods dir-top-nowrap main-center cross-center",style:{backgroundColor:t.background}},[0===t.is_image?i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/image/no-goods.png"}}):1===t.is_image?i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/image/order-empty.png"}}):t._e(),i("v-uni-text",{staticClass:"text",style:{color:t.color}},[t._v(t._s(t.title))])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},8112:function(t,e,i){"use strict";i.r(e);var n=i("80a6"),a=i("3da24");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("81c0");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"3478eed7",null);e["default"]=s.exports},"81c0":function(t,e,i){"use strict";var n=i("2bbe"),a=i.n(n);a.a},a80f:function(t,e,i){var n=i("b041");e=t.exports=i("2350")(!1),e.push([t.i,".u-model[data-v-d14666b4]{width:%?750?%}.u-top[data-v-d14666b4]{margin:0 %?24?%;border-bottom:%?1?% solid #e2e2e2;height:%?140?%}.u-close-image[data-v-d14666b4]{width:%?54?%;height:%?78?%;padding:%?24?% 0 %?24?% %?24?%;margin-left:%?24?%}.bd-close-image[data-v-d14666b4]{width:%?30?%;height:%?30?%}.u-pic[data-v-d14666b4]{width:%?200?%;height:%?200?%;padding:%?4?%;border-radius:%?8?%;position:relative;top:%?-64?%;background-color:#fff}.u-img[data-v-d14666b4]{width:%?192?%;height:%?192?%;background-color:#fff}.u-info[data-v-d14666b4]{width:%?424?%;height:%?136?%;padding:%?45?% 0 0 %?24?%}.u-scroll-view[data-v-d14666b4]{width:100%;max-height:calc(80vh - %?154?%)}.u-attr-group[data-v-d14666b4]{margin:%?24?% %?32?% 0 %?32?%;border-bottom:%?1?% solid #e2e2e2}.u-number[data-v-d14666b4]{height:%?124?%;margin:0 %?32?%}.u-group-name[data-v-d14666b4]{margin-bottom:%?20?%}.u-group-item[data-v-d14666b4]{padding:%?15?% %?24?%;border-radius:%?8?%;margin:0 %?20?% %?20?% 0;font-size:%?26?%}.u-checked[data-v-d14666b4]{color:#fff}.u-unchecked[data-v-d14666b4]{background-color:#f2f2f2;color:#353535}.u-attr_num_0[data-v-d14666b4]{background-color:#f7f7f7;color:#cdcdcd}.u-stock[data-v-d14666b4]{font-size:%?24?%;color:#999}.u-price[data-v-d14666b4]{margin-right:%?12?%}.u-input[data-v-d14666b4]{width:%?88?%;height:%?60?%;background-color:#f7f7f7;font-size:%?20?%;color:#353535;text-align:center}.u-input-box[data-v-d14666b4]{width:%?218?%}.u-number-btn[data-v-d14666b4]{height:%?60?%;width:%?60?%;background-repeat:no-repeat;background-size:100% 100%;background-position:50%}.u-number-btn[data-v-d14666b4]:first-child{margin-right:%?5?%}.u-number-btn[data-v-d14666b4]:last-child{margin-left:%?5?%}.u-reduced-1[data-v-d14666b4]{background-image:url("+n(i("1267"))+")}.u-reduced-0[data-v-d14666b4]{background-image:url("+n(i("2db6"))+")}.u-added-1[data-v-d14666b4]{background-image:url("+n(i("d3fe"))+")}.u-text[data-v-d14666b4]{font-size:%?26?%;color:#666}.u-bottom[data-v-d14666b4]{height:%?110?%;width:%?750?%;padding:%?20?% %?24?%}.u-btn[data-v-d14666b4]{text-align:center;line-height:%?70?%;border-radius:%?35?%;font-size:%?26?%;width:calc(50% - %?10?%)}.bd-btn-left[data-v-d14666b4]{margin-right:%?10?%\n    /*border-top-right-radius: 0;*/\n    /*border-bottom-right-radius: 0;*/}.bd-btn-right[data-v-d14666b4]{margin-left:%?10?%\n    /*border-top-left-radius: 0;*/\n    /*border-bottom-left-radius: 0;*/}.u-btn-color[data-v-d14666b4]{color:#fff}",""])},afcc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"app-no-goods",props:{background:{type:String,default:function(){return"#ffffff"}},color:{type:String,default:function(){return"#666666"}},title:{type:String,default:function(){return"没有任何商品哦~"}},is_image:{type:Number,default:function(){return 0}}}};e.default=n},b4bc:function(t,e,i){"use strict";i.r(e);var n=i("26e3"),a=i("f066");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("b5b3");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"d14666b4",null);e["default"]=s.exports},b5b3:function(t,e,i){"use strict";var n=i("207b"),a=i.n(n);a.a},c90e:function(t,e,i){"use strict";var n=i("335a"),a=i.n(n);a.a},c962:function(t,e,i){"use strict";i.r(e);var n=i("0b93"),a=i("321f");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("c90e");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"bcbe1e78",null);e["default"]=s.exports},d3fe:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEX39/eZmZmXx6vxAAAAGklEQVQoz2MYzICf5oz6//8f4GHQ3hmDGQAAjcAOv+IPUVgAAAAASUVORK5CYII="},d7e6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("a34a")),a=i("2f62"),o=s(i("8112")),r=s(i("b4bc"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach(function(e){d(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t){return b(t)||h(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function b(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function g(t,e,i,n,a,o,r){try{var s=t[o](r),c=s.value}catch(u){return void i(u)}s.done?e(c):Promise.resolve(c).then(n,a)}function p(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var o=t.apply(e,i);function r(t){g(o,n,a,r,s,"next",t)}function s(t){g(o,n,a,r,s,"throw",t)}r(void 0)})}}var v={name:"index",data:function(){return{is_switch:!0,page:1,type:1,activity:{},timing:null,time_str:{day:"00",hou:"00",min:"00",sec:"00"},list:[],page_count:1,detail:null,attr_groups:[],attrShow:0,selectAttr:{},switch_height:0,title:"暂无进行中活动",is_no_now:!1,going:!0,loading:!0}},methods:{getList:function(){var t=p(n.default.mark(function t(){var e,i,a,o,r,s,c,u,d,f,h,b,g,p;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.flash_sale.list,data:{type:this.type,page:this.page}});case 2:if(e=t.sent,0!==e.code){t.next=27;break}if(i=e.data,a=i.activity,o=i.list,r=i.next_activity,s=i.pagination,1!==this.type){t.next=24;break}if(this.activity=a,0!==Object.keys(a).length){t.next=19;break}return this.is_no_now=!0,this.type=2,t.next=12,this.$request({url:this.$api.flash_sale.list,data:{type:this.type,page:this.page}});case 12:u=t.sent,d=u.data,f=d.list,h=d.next_activity,b=d.pagination,this.activity=h,(c=this.list).push.apply(c,l(f)),this.page_count=b.page_count,t.next=22;break;case 19:this.is_no_now=!1,(g=this.list).push.apply(g,l(o)),this.page_count=s.page_count;case 22:t.next=27;break;case 24:this.activity=r,(p=this.list).push.apply(p,l(o)),this.page_count=s.page_count;case 27:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),set_time:function(t){var e=this;clearInterval(this.timing);var i=new Date(t.replace(/-/g,"/"));this.now_time(i),this.timing=setInterval(function(){e.now_time(i)},1e3)},now_time:function(t){var e=t.getTime()-(new Date).getTime();e<0&&clearInterval(this.timing);var i=parseInt(e/1e3/60/60/24),n=parseInt(e/1e3/60/60%24),a=parseInt(e/1e3/60%60),o=parseInt(e/1e3%60);this.time_str.day=i<10?"0"+i:i,this.time_str.hou=n<10?"0"+n:n,this.time_str.min=a<10?"0"+a:a,this.time_str.sec=o<10?"0"+o:o},grab:function(t){var e=this;1===this.type?(this.detail=null,0!==t.goods_stock&&setTimeout(function(){e.selectAttr={},e.detail=t,e.attrShow=!0})):uni.navigateTo({url:"/plugins/flash_sale/goods/goods?id=".concat(t.id)})},onAttr:function(t){var e=t.item;this.selectAttr=e},routeDetail:function(t){uni.navigateTo({url:"/plugins/flash_sale/goods/goods?id=".concat(t)})},goRule:function(){uni.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.flash_sale.list),"&key=content")})},rightFunc:function(t){uni.navigateTo({url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify([t]))})},leftFunc:function(t){this.$request({url:this.$api.flash_sale.add_cart,data:{flash_goods_id:this.selectAttr.goods_id,attr_id:this.selectAttr.id,num:t},method:"post"}).then(function(t){uni.showToast({title:t.msg,type:"success"})})}},mounted:function(){var t=this,e=wx.createSelectorQuery();this.$nextTick().then(function(){e.select(".f-switch").boundingClientRect(function(e){t.switch_height=e.height}).exec()})},onReachBottom:function(){this.page<this.page_count&&(this.page++,this.getList())},watch:{is_switch:{handler:function(t){var e=this;this.going&&(this.going=!1,this.list=[],this.page=1,t?(this.type=1,this.title="暂无进行中活动"):(this.type=2,this.title="暂无下一场活动"),this.getList().then(function(){if(1===e.type){var t=e.activity.end_at;t&&e.set_time(t)}else{var i=e.activity.start_at;i&&e.set_time(i)}e.going=!0}))},immediate:!0}},computed:u({},(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,a.mapState)("gConfig",{windowHeight:function(t){return t.systemInfo.windowHeight}}),{},(0,a.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting},themeObject:function(t){var e=t.mallConfig.mall.setting.theme_color;return{back:e+"-m-back "+e,backP:e+"-m-back-p "+e,backO:e+"-m-back-o "+e,theme:e,color:e+"-m-text "+e,sBack:e+"-s-back "+e,border:e+"-m-border "+e,mBtn:e+"-m-gradient-btn "+e,sBtn:e+"-s-gradient-btn "+e}}})),components:{"app-no-goods":o.default,uAttr:r.default}};e.default=v},e40d:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("d55a")),a=s(i("6c9f")),o=s(i("1ed7")),r=i("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach(function(e){d(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={name:"u-attr",props:{value:{type:[Boolean,Number]},goods:{type:Object,default:function(){return{}},required:!0},themeObject:{type:Object},checked:{type:Object},is_show_price:{type:Boolean,default:!0},is_show_left:{type:Boolean,default:!0},is_must_left:{type:Boolean,default:!1},is_show_right:{type:Boolean,default:!0},is_choose_number:{type:Boolean,default:!0},leftText:{type:String,default:"加入购物车"},rightText:{type:String,default:"立即购买"},leftFunc:{type:Boolean},rightFunc:{type:Boolean},sign:{type:String},again:{type:Number},attentionSign:{type:String}},data:function(){return{newValue:!1,picUrl:null,newGroup:[],number:1}},created:function(){"community"==this.sign&&(this.number=1)},methods:{close:function(){this.$emit("input",!1)},turnOn:function(){this.$emit("input",!0)},inArray:function(t,e){return e.some(function(e){return t===e})},identifier:function(t,e,i){var n=this;t.forEach(function(t){t.attr_list.forEach(function(a){var o="".concat(t.attr_group_id,"-").concat(a.attr_id);n.inArray(o,e)&&!n.inArray(o,i)?a.num_0=!0:a.num_0=!1})})},selectCheck:function(t,e,i){var n=this;t.forEach(function(t){var a=[],o=0;t.attr_list.forEach(function(t){var e="".concat(t.attr_group_id,"-").concat(t.attr_id);n.inArray(e,i)||(o+=1,a.push(e))}),0===t.stock&&o<=1&&Array.prototype.push.apply(e,a),0===o&&n.$emit("check",{item:t,number:1})})},storeAttr:function(t,e,i){var n=this;if(!0!==i){var a=this.newGroup,o=this.copyAttr,r=[];a.forEach(function(i,a){var o=i.attr_list;o.forEach(function(o){i.attr_group_id===e&&(o.attr_id===t?!0===o.select?o.select=!1:o.select=!0:o.select=!1),!0===o.select&&(r.push("".concat(i.attr_group_id,"-").concat(o.attr_id)),0===a&&(n.picUrl=o.pic_url))})});var s=[];this.selectCheck(o,s,r),this.$nextTick(function(){n.number>n.stock&&(n.number=n.stock)}),this.identifier(a,s,r),r.length!==a.length&&this.$emit("check",{item:null,number:1})}},firstSelect:function(){var t=this;if(this.copyGroup&&this.copyAttr){var e=this.copyGroup,i=this.copyAttr,n=e.length,a=[];i.forEach(function(i){var o=i.attr_list;o.forEach(function(o){var r=o.attr_group_id;e.forEach(function(s){if(r===s.attr_group_id){var c=s.attr_list;c.forEach(function(r){r.attr_id===o.attr_id&&i.stock>0&&n>0&&(r.select=!0,a.push("".concat(s.attr_group_id,"-").concat(r.attr_id)),n===e.length&&(t.picUrl=r.pic_url),n--)})}})})});var o=[];this.selectCheck(i,o,a),this.identifier(e,o,a),this.newGroup=e}},numberBlur:function(t){var e=parseInt(t.detail.value);e||(e=1),e>this.stock&&(e=this.stock,uni.showToast({title:"库存不足",icon:"none"})),this.number=e},numberSub:function(){var t=this.number;t>1&&(t--,this.number=t)},numberAdd:function(){var t=this.number;t++,t>this.stock&&(t=this.stock,uni.showToast({title:"库存不足",icon:"none"})),this.number=t},leftSubmit:function(){!0===this.leftFunc?this.$emit("leftFunc",this.number):this.cart(),this.close()},rightSubmit:function(){if(!this.checked)return uni.showToast({title:"请先选规格",icon:"none"}),!1;if(!this.$user.isLogin())return this.$user.getInfo();var t=[];this.checked.attr_list.forEach(function(e){t.push({attr_id:e.attr_id,attr_group_id:e.attr_group_id})});var e={mch_id:this.goods.mch_id?this.goods.mch_id:0,goods_list:[{id:this.goods.id,attrs:t,num:this.number,cat_id:0,goods_attr_id:this.checked.id}]};!0===this.rightFunc?this.$emit("rightFunc",e):this.shop(e),this.close()},shop:function(t){uni.navigateTo({url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify([t]))})},cart:function(){var t=this;if(!this.checked)return uni.showToast({title:"请先选规格",icon:"none"}),!1;"ecard"!==this.goods.type&&this.$request({url:this.$api.cart.add,method:"post",data:{goods_id:this.checked.goods_id,attr:this.checked.id,num:this.number}}).then(function(e){0===e.code?(uni.showToast({title:e.msg,icon:"none"}),t.$emit("cart",t.checked,t.number),t.close()):uni.showToast({title:e.msg,icon:"none",duration:2500})})},clickImg:function(t){this.$jwx.previewImage({current:t,urls:[t]})}},components:{uPopup:n.default,appPrice:a.default,appMemberMark:o.default},computed:u({imgUrl:function(){return this.picUrl?this.picUrl:this.goods?this.goods.cover_pic:""},stock:function(){return this.$validation.isEmpty(this.checked)?this.$validation.isEmpty(this.goods)?void 0:this.goods.goods_num:this.checked.stock},sellPrice:function(){return this.$validation.isEmpty(this.checked)?this.$validation.isEmpty(this.goods)?void 0:this.goods.hasOwnProperty("price_min")?this.goods.price_min:this.goods.price:1===this.goods.level_show?this.checked.price_member:this.checked.price},copyGroup:function(){if(this.goods){console.log(this.goods.attr_groups);var t=this.$utils.deepClone(this.goods.attr_groups);console.log(t);for(var e=0;e<t.length;e++)t[e].attr_list.forEach(function(t){t.select=!1,t.num_0=!1});return t}},copyAttr:function(){if(this.goods)return this.$utils.deepClone(this.goods.attr)},cartClass:function(){return"a"===this.themeObject.theme||"b"===this.themeObject.theme||"f"===this.themeObject.theme?this.themeObject.sBtn+" u-btn u-btn-color ":this.themeObject.sBtn+" u-btn  "+this.themeObject.color}},(0,r.mapGetters)({userInfo:"user/info"})),watch:{value:{handler:function(t){this.newValue=t,!1!==t&&this.$validation.isEmpty(this.checked)&&this.$utils.throttle(this.firstSelect,800)},immediate:!0},number:{handler:function(t){this.$emit("check",{item:this.checked,number:t})}},again:{handler:function(){this.firstSelect()}}}};e.default=l},f066:function(t,e,i){"use strict";i.r(e);var n=i("e40d"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}}]);