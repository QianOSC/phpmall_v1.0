(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-pond-index-index"],{"1c36":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"app-layout"},[e("app-layout",{attrs:{haveBackground:!1}},[e("v-uni-view",{staticClass:"pond"},[e("v-uni-view",{staticClass:"pond-head",style:{"background-image":"url("+t.setting.bg_pic+")"}},[e("v-uni-view",{staticClass:"p-b",on:{click:function(a){a=t.$handleEvent(a),t.rules(a)}}},[t._v("规则")]),e("v-uni-view",{staticClass:"p-b",on:{click:function(a){a=t.$handleEvent(a),t.share(a)}}},[t._v("分享")]),e("app-share-qr-code-poster",{attrs:{url:t.poster,title:"生成海报"},on:{share:function(a){a=t.$handleEvent(a),t.hShareAppMessage(a)}},model:{value:t.shareShow,callback:function(a){t.shareShow=a},expression:"shareShow"}})],1),e("v-uni-view",{staticClass:"pond-oppty"},[e("v-uni-view",[t._v("您还有"),e("v-uni-text",[t._v(t._s(t.oppty))]),t._v("次抽奖机会")],1)],1),e("v-uni-view",{staticClass:"pond-box",style:{height:"calc(100vh - 480rpx -  "+t.platHeight+"   - "+t.bottomHeight+"rpx)",background:"linear-gradient("+t.setting.bg_color+", "+("gradient"===t.setting.bg_color_type?t.setting.bg_gradient_color:t.setting.bg_color)+")"}},[e("v-uni-view",{staticClass:"container-out"},[t._l(t.circleList,function(a,i){return e("v-uni-view",{key:i,staticClass:"container-circle",style:{top:a.topCircle,left:a.leftCircle,background:i%2===0?t.colorCircleFirst:t.colorCircleSecond}})}),e("v-uni-view",{staticClass:"container-in"},[t._l(t.awardList,function(a,i){return e("v-uni-view",{key:i,staticClass:"content-out",style:{top:a.topAward,left:a.leftAward,background:i==t.indexSelect?t.colorAwardSelect:t.colorAwardDefault}},[e("v-uni-image",{staticClass:"img",attrs:{src:a.image_url,mode:"aspectFit","load-lazy":""}}),e("v-uni-view",{staticClass:"name"},[t._v(t._s(a.name))])],1)}),e("v-uni-view",{staticClass:"start-btn",on:{click:function(a){a=t.$handleEvent(a),t.startGame(a)}}},[e("v-uni-image",{staticClass:"pond-start1",attrs:{src:"./../image/pond-button.png","load-lazy":""}}),t.setting.deplete_integral_num>0?[e("v-uni-view",{staticClass:"pond-start2",attrs:{animation:t.animationData}},[e("v-uni-image",{attrs:{src:"./../image/pond-register.png","load-lazy":""}})],1),e("v-uni-view",{staticClass:"main-center pond-register"},[e("v-uni-view",{attrs:{animation:t.animationData}},[t._v("-"+t._s(t.setting.deplete_integral_num)+"积分")])],1)]:e("v-uni-image",{staticClass:"pond-start3",attrs:{src:"./../image/pond-start.png",animation:t.animationData,"load-lazy":""}})],2)],2)],2),e("v-uni-view",{staticClass:"dir-left-nowrap main-center cross-center end"},[e("v-uni-view",{staticClass:"dir-left-nowrap cross-center box-grow-0 left",on:{click:function(a){a=t.$handleEvent(a),t.home(a)}}},[e("v-uni-icon",{staticClass:"end-icon home",attrs:{type:""}}),e("v-uni-view",[t._v("回到首页")])],1),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center box-grow-0",on:{click:function(a){a=t.$handleEvent(a),t.prize(a)}}},[e("v-uni-view",[t._v("我的中奖记录")]),e("v-uni-icon",{staticClass:"end-icon price",attrs:{type:""}})],1)],1)],1)],1),2==t.status?e("v-uni-view",[e("v-uni-view",{staticClass:"act-modal"},[e("v-uni-view",{staticClass:"act-modal-bg"}),e("v-uni-view",{staticClass:"act-modal-pic cross-center main-center"},[e("v-uni-view",{staticClass:"act-modal-info success"},[e("v-uni-icon",{staticClass:"image-bg",style:{"background-image":"url("+t.appImg.pond_success+")"}},[t._v("type>")]),e("v-uni-view",{on:{click:function(a){a=t.$handleEvent(a),t.closeActModal(a)}}},[e("v-uni-icon",{staticClass:"image-close",attrs:{type:""}})],1),e("v-uni-view",{staticClass:"main-center h5-limit"},[e("v-uni-text",{staticClass:"text"},[t._v("恭喜\\n抽中"+t._s(t.name))])],1),e("v-uni-view",{staticClass:"main-center"},[e("v-uni-view",{staticClass:"box main-center"},[e("app-button",{attrs:{color:"#FFFFFF",background:"#FF4544","font-size":"32",height:"80",width:"480",round:""},on:{click:function(a){a=t.$handleEvent(a),t.closeActModal(a)}}},[t._v("继续抽奖")])],1)],1)],1)],1)],1)],1):t._e(),1==t.status?e("v-uni-view",[e("v-uni-view",{staticClass:"act-modal show"},[e("v-uni-view",{staticClass:"act-modal-bg"}),e("v-uni-view",{staticClass:"act-modal-pic cross-center main-center"},[e("v-uni-view",{staticClass:"act-modal-info error"},[e("v-uni-icon",{staticClass:"image-bg",style:{"background-image":"url("+t.appImg.pond_empty+")"}},[t._v("type>")]),e("v-uni-view",{on:{click:function(a){a=t.$handleEvent(a),t.closeActModal(a)}}},[e("v-uni-icon",{staticClass:"image-close",attrs:{type:""}})],1),e("v-uni-view",{staticClass:"main-center"},[e("v-uni-text",{staticClass:"text"},[t._v("谢谢参与\\n再换个姿势抽奖")])],1),e("v-uni-view",{staticClass:"main-center"},[e("v-uni-view",{staticClass:"box main-center"},[e("app-button",{attrs:{color:"#FFFFFF",background:"#FF4544","font-size":"32",height:"80",width:"480",round:""},on:{click:function(a){a=t.$handleEvent(a),t.closeActModal(a)}}},[t._v("继续抽奖")])],1)],1)],1)],1)],1)],1):t._e()],1)],1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},"2d06":function(t,a,e){"use strict";var i=e("36de"),n=e.n(i);n.a},"36de":function(t,a,e){var i=e("f3fe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("aaa68eea",i,!0,{sourceMap:!1,shadowMode:!1})},"372a":function(t,a,e){"use strict";e.r(a);var i=e("c4c3"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},c4c3:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(e("409e")),n=e("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,i)}return e}function s(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(e,!0).forEach(function(a){c(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(e).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function c(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var d={name:"index",components:{appShareQrCodePoster:i.default},computed:s({},(0,n.mapState)({tabBarNavs:function(t){return t.mallConfig.navbar.navs},appImg:function(t){return t.mallConfig.plugin.pond.app_image},userInfo:function(t){return t.user.info}}),{},(0,n.mapGetters)("iPhoneX",{BotHeight:"getBotHeight",getEmpty:"getEmpty"}),{platHeight:function(){return"var(--window-top)"},bottomHeight:function(){var t=this.tabBarNavs.find(function(t){var a="/plugins/pond/index/index";return!!a.includes(t.url.split("?")[0])});return t?this.BotHeight:0}}),data:function(){var t,a,e;return{bout:t,btn:a,animation:e,circleList:[],awardList:[],colorCircleFirst:"#F12416",colorCircleSecond:"#FFFFFF",colorAwardDefault:"#F5F0FC",colorAwardSelect:"#FFE400",indexSelect:0,prizeIndex:0,isRunning:!1,animationData:{},status:0,setting:{},oppty:0,msg:"",name:"",poster:this.$api.pond.poster,shareShow:!1}},onShow:function(){var t=this;t.$showLoading({title:"加载中"}),t.$request({url:this.$api.pond.index}).then(function(a){if(t.$hideLoading(),a.data){t.oppty=a.data.oppty,t.msg=a.msg,t.setting=a.data.setting;for(var e=a.data.list,i=18,n=18,o=0;o<8;o++)0===o?(i=18,n=18):o<3?n=n+196+8:o<5?i=i+158+8:o<7?n=n-196-8:o<8&&(i=i-158-8),e[o].topAward=i+"rpx",e[o].leftAward=n+"rpx";t.awardList=e,t.boutAnimation(),t.btnAnimation()}else uni.showToast({title:a.msg,icon:"none"})}).catch(function(a){t.$hideLoading()})},onHide:function(){clearInterval(this.bout),clearInterval(this.btn)},methods:{hShareAppMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.$shareAppMessage({title:this.$children[0].navigationBarTitle,path:"/plugins/pond/index/index",params:{}},t)},home:function(){uni.redirectTo({url:"/pages/index/index"})},prize:function(){uni.navigateTo({url:"/plugins/pond/prize/prize"})},rules:function(){uni.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.pond.setting),"&keys=").concat(JSON.stringify(["setting","rule"]))})},share:function(){this.shareShow=!0},startGame:function(){var t=this;if(!t.isRunning){if(t.msg)return uni.showToast({title:t.msg,icon:"none"}),void(t.isRunning=!1);clearInterval(t.btn),t.animation.translate(0,0).step(),t.animationData=t.animation.export(),t.isRunning=!0,t.prizeIndex=0;var a=0,e=t.indexSelect,i=t.awardList,n=setInterval(function(){a+=30,e++,e%=8,t.indexSelect=e,t.prizeIndex>0&&e+1==t.prizeIndex&&(clearInterval(n),t.btnAnimation(),t.isRunning=!1,t.name=i[e].name,t.status=5==i[e].type?1:2)},200+a);t.$request({url:t.$api.pond.lottery}).then(function(a){0!==a.code?(clearInterval(n),uni.showToast({title:a.msg,icon:"none"}),t.isRunning=!1,t.btnAnimation()):i.map(function(e,i,n){e.id==a.data.id&&setTimeout(function(){t.prizeIndex=i+1,t.oppty=a.data.oppty,t.msg=a.msg},2e3)})}).catch(function(a){clearInterval(n),t.isRunning=!1,t.btnAnimation()})}},boutAnimation:function(){for(var t=this,a=4,e=4,i=[],n=0;n<24;n++){if(0===n)e=8,a=8;else if(n<6)e=4,a+=110;else if(6===n)e=8,a=660;else if(n<12)e+=92,a=663;else if(12===n)e=545,a=660;else if(n<18)e=550,a-=110;else if(18===n)e=545,a=10;else{if(!(n<24))return;e-=92,a=5}i.push({topCircle:e+"rpx",leftCircle:a+"rpx"})}t.circleList=i,t.bout=setInterval(function(){var a=t.colorCircleFirst;t.colorCircleFirst=t.colorCircleSecond,t.colorCircleSecond=a},900)},btnAnimation:function(){var t=this,a=uni.createAnimation({duration:500,timingFunction:"step-start",delay:0,transformOrigin:"50% 50%"});t.animation=a;var e=!0;t.btn=setInterval(function(){e?(a.translate(0,0).step(),e=!1):(a.translate(0,-3).step(),e=!0),t.animationData=a.export()},900)},closeActModal:function(){this.status=0}}};a.default=d},e3bc:function(t,a,e){"use strict";e.r(a);var i=e("1c36"),n=e("372a");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("2d06");var r=e("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"2a85ee6a",null);a["default"]=s.exports},ee44:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAMAAADD5o0oAAAATlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////+QlxstAAAAGXRSTlMAgtioHRUF5vjPvZOOdmdhUklA8LW0nZx9eessiAAAAFJJREFUGNNlz0kOwDAIA8BsTbqmexv//6M52hKcGAkBdrd3rAjVglXk8Ys2RFHFm6kds+jANFAnguhCSFQaiwXHdIGutkcrnqyPMsJnwpnYpbHvG2IDzAb67NcAAAAASUVORK5CYII="},f39d:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAeFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////GqOSsAAAAJ3RSTlMA7vZxHAzbTrnnxq1qKXgi4Vb61THPiIM5B1pHzMCVfGZgFQOkm0FlsDljAAABX0lEQVQoz33T15KDMAwFUMkNbNNblpJASNH//+ESe9gFksl9AM+cEUYusIlMGGIWydgwlbRwTJJRhlReLBHVndyj5EzxIH8g0TBaCsVeEyq75Z02muw8kUp3GpHu3Ug0aOKI6l11ghjc/DA+NYLTIHaa9bBGiHYks2HOyhy2OVEtN/OqvUKE7NquHZE+KFSXxX09R+zbA99EwnByf6Vd7TFzwzJ+gxHdarxHXAqVA2ZX+Jz4zs6AVryLT44a0Dzl3L5bK2SHDHRRh+G9Omplw7AkBtwwIgqO3BERmgYgGC+4ctw/Zz+aCtXwQLoP1YVj2VuGp1j6Xbin6zyl4xtXjAjPnVt0Zlf+UbRwG9Rkg9djdhzGOxa2CJcGeqO5/MCpIg5LRjqLL3wi85Vd9bTh7J2DwlT/PAHIkhLPoXzt5l9j6YMMzznz3JCO8gfhVa4npzJaDSWqqz9behgy9JfoF/JtGymuSKKSAAAAAElFTkSuQmCC"},f3fe:function(t,a,e){var i=e("b041");a=t.exports=e("2350")(!1),a.push([t.i,".text-center[data-v-2a85ee6a]{text-align:center}.font-weight[data-v-2a85ee6a]{font-weight:700}.page-width[data-v-2a85ee6a]{width:100%}.goods-hover-class[data-v-2a85ee6a]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-2a85ee6a]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-2a85ee6a]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-2a85ee6a]{width:100%}.u-hover-class[data-v-2a85ee6a]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-2a85ee6a]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-layout[data-v-2a85ee6a]{min-height:calc(100vh - var(--window-top))}.app-layout[data-v-2a85ee6a] .app-layout{min-height:calc(100vh - var(--window-top))}.pond[data-v-2a85ee6a]{text-align:center}.pond .pond-box[data-v-2a85ee6a]{min-height:%?700?%;padding-top:%?20?%}.pond .pond-head[data-v-2a85ee6a]{height:%?480?%;width:100%;background-repeat:no-repeat;margin-bottom:-1px;background-size:100% 100%}.pond .pond-head .p-b[data-v-2a85ee6a]{color:#fff;font-size:%?24?%;background:#000;text-align:center;background-color:rgba(0,0,0,.4);line-height:%?48?%;width:%?92?%;border-radius:%?24?% 0 0 %?24?%;position:absolute;right:0;top:%?40?%}.pond .pond-head .p-b[data-v-2a85ee6a]:nth-child(2){top:%?112?%}.pond .pond-oppty[data-v-2a85ee6a]{line-height:%?56?%;font-size:%?28?%;position:absolute;text-align:center;width:100vw;top:%?450?%}.pond .pond-oppty uni-view[data-v-2a85ee6a]{color:#fff;padding:0 %?30?%;display:inline-block;background:rgba(0,0,0,.3);border-radius:%?28?%}.pond .pond-oppty uni-text[data-v-2a85ee6a]{color:#ffb92a}.pond .container-out[data-v-2a85ee6a]{height:%?566?%;width:%?680?%;background-color:#f47915;margin:%?32?% auto %?30?% auto;border-radius:%?16?%;position:relative}.pond .container-in[data-v-2a85ee6a]{width:%?640?%;height:%?526?%;background-color:#f12416;border-radius:%?20?%;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}.pond .container-circle[data-v-2a85ee6a]{position:absolute;display:block;border-radius:50%;height:%?15?%;width:%?15?%}.pond .content-out[data-v-2a85ee6a]{position:absolute;height:%?144?%;width:%?196?%;background-color:#f5f0fc;border-radius:%?16?%;-webkit-box-shadow:0 %?16?% 0 #ffcec0;box-shadow:0 %?16?% 0 #ffcec0}.pond .content-out .img[data-v-2a85ee6a]{position:absolute;top:%?12?%;left:50%;margin-left:%?-75?%;width:%?150?%;height:%?80?%;z-index:1}.pond .content-out .name[data-v-2a85ee6a]{position:absolute;bottom:0;top:%?104?%;color:#c62015;font-size:%?24?%;width:%?196?%;word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;line-height:1.5}.pond .pond-start1[data-v-2a85ee6a]{height:%?160?%;width:100%}.pond .pond-start2[data-v-2a85ee6a]{display:inline;position:absolute;left:%?10?%;height:%?136?%;width:%?178?%}.pond .pond-start2 uni-image[data-v-2a85ee6a]{height:100%;width:100%}.pond .pond-start3[data-v-2a85ee6a]{position:absolute;left:%?10?%;height:%?136?%;width:%?178?%}.pond .pond-register[data-v-2a85ee6a]{position:absolute;top:%?84?%;width:100%}.pond .pond-register uni-view[data-v-2a85ee6a]{font-size:%?26?%;padding:0 %?16?%;border-radius:%?16?%;line-height:%?32?%;background:#fff4ba}.pond .start-btn[data-v-2a85ee6a]{position:absolute;margin:auto;top:0;left:0;bottom:0;right:0;border-radius:%?16?%;height:%?159?%;width:%?196?%;color:#f6251e;text-align:center;font-weight:bolder;line-height:%?154?%}.pond .end[data-v-2a85ee6a]{color:#fff;font-size:%?28?%}.pond .end .left[data-v-2a85ee6a]{margin-right:%?160?%}.pond .end .end-icon[data-v-2a85ee6a]{background-repeat:no-repeat;background-size:100% 100%;margin:0 %?16?%}.pond .end .end-icon.home[data-v-2a85ee6a]{height:%?30?%;width:%?30?%;background-image:url("+i(e("f39d"))+")}.pond .end .end-icon.price[data-v-2a85ee6a]{height:%?22?%;width:%?12?%;background-image:url("+i(e("ee44"))+")}.act-modal[data-v-2a85ee6a]{position:fixed;left:0;top:0;width:100%;height:100%;z-index:2001;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.act-modal .show[data-v-2a85ee6a]{visibility:visible;opacity:1}.act-modal .act-modal-bg[data-v-2a85ee6a]{background:rgba(0,0,0,.5);position:fixed;left:0;top:0;width:100%;height:100%;z-index:1}.act-modal .act-modal-pic[data-v-2a85ee6a]{background:rgba(0,0,0,.25);position:fixed;left:0;top:0;width:100%;height:100%;z-index:1}.act-modal .act-modal-info[data-v-2a85ee6a]{text-align:center;position:relative}.act-modal .act-modal-info .h5-limit[data-v-2a85ee6a]{margin:-1px 0}.act-modal .success[data-v-2a85ee6a]{top:%?0?%;width:100%}.act-modal .success .image-bg[data-v-2a85ee6a]{height:%?462?%;width:100%;display:block;background-repeat:no-repeat;background-size:100% 100%}.act-modal .success .image-close[data-v-2a85ee6a]{position:absolute;right:%?80?%;top:0;height:%?30?%;width:%?30?%;background-repeat:no-repeat;background-size:100% 100%;background-image:url("+i(e("e6f7"))+")}.act-modal .success .box[data-v-2a85ee6a],.act-modal .success .text[data-v-2a85ee6a]{width:%?591?%;background:#fff;color:#353535}.act-modal .success .box[data-v-2a85ee6a]{border-radius:0 0 %?16?% %?16?%;text-align:center;padding:%?64?% 0}.act-modal .error[data-v-2a85ee6a]{top:%?0?%;width:100%}.act-modal .error .image-bg[data-v-2a85ee6a]{height:%?240?%;width:100%;display:block;background-repeat:no-repeat;background-size:100% 100%}.act-modal .error .image-close[data-v-2a85ee6a]{position:absolute;right:%?80?%;top:0;height:%?30?%;width:%?30?%;background-repeat:no-repeat;background-size:100% 100%;background-image:url("+i(e("e6f7"))+")}.act-modal .error .box[data-v-2a85ee6a],.act-modal .error .text[data-v-2a85ee6a]{width:%?591?%;background:#fff;color:#353535}.act-modal .error .box[data-v-2a85ee6a]{border-radius:0 0 %?16?% %?16?%;text-align:center;padding:%?64?% 0}body.?%PAGE?%[data-v-2a85ee6a]{background:#f7f7f7}",""])}}]);