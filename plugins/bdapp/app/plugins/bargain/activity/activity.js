(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/bargain/activity/activity"],{"0b6b":function(t,i,e){"use strict";e.r(i);var n=e("174f"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);i["default"]=a.a},"174f":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("2f62");function a(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,n)}return e}function r(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?a(e,!0).forEach(function(i){o(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(e).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function o(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var s={name:"activity",data:function(){return{detail:{bargain_price_per:0},list:[],distance:0,more:!1,sizeAnimation:{},status:1,animationData:"",kanjia:!1,dialog:!1,info:{},bargain:{},toMore:!1,page:1,dd:0,hh:23,mm:59,ss:59,changeTimer:null,timer:null,tip:"",title:"",order_id:""}},computed:r({},(0,n.mapState)({userInfo:function(t){return t.user.info},bargainImg:function(t){return t.mallConfig.plugin.bargain},mall:function(t){return t.mallConfig.mall}})),onShareAppMessage:function(t){var i=this;return this.$shareAppMessage({title:i.title,path:"/plugins/bargain/activity/activity",imageUrl:i.detail.app_share_pic?i.detail.app_share_pic:"",params:{user_id:i.userInfo.options.user_id,bargain_order_id:i.order_id}})},onUnload:function(){clearInterval(this.timer),clearInterval(this.changeTimer)},onLoad:function(t){var i=this;i.$store.dispatch("user/info"),i.$showLoading({type:"global",text:"加载中..."}),i.getSetting();var e=setInterval(function(){i.userInfo&&(clearInterval(e),t.order_id?(i.join(t.order_id),i.order_id=t.order_id):t.id?(i.getDetail(t.id,1),i.order_id=t.id):t.bargain_order_id&&(i.order_id=t.bargain_order_id,t.user_id==i.userInfo.options.user_id?i.getDetail(t.bargain_order_id,1):(i.status=2,i.join(t.bargain_order_id))),i.changeTimer=setInterval(function(){i.changeSize()},300))},300)},methods:{toRules:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.bargain.setting),"&key=rule")})},getSetting:function(){var i=this;i.$request({url:i.$api.bargain.setting}).then(function(e){if(0===e.code){if(i.title=e.data.title.toString(),e.data.title.indexOf("\n")>-1){var n=e.data.title.split("\n"),a=Math.floor(Math.random()*n.length);i.title=n[a]}}else t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(t){i.$hideLoading()})},join:function(i){var e=this;e.$request({url:e.$api.bargain.user_join_bargain,data:{bargain_order_id:i}}).then(function(n){if(0==n.code){var a=n.data.queueId,r=n.data.token;e.result(a,r,i)}else t.showToast({title:n.msg,icon:"none",duration:1e3}),"用户已参与本次砍价"==n.msg&&e.getDetail(i,1)}).catch(function(t){e.$hideLoading()})},result:function(i,e,n){var a=this;a.$request({url:a.$api.bargain.user_join_bargain_result,data:{queueId:i,token:e}}).then(function(r){0==r.code?1==r.data.retry?setTimeout(function(){a.result(i,e,n)},1e3):(a.$hideLoading(),a.info=r.data.info,a.bargain=r.data.bargain,a.bargainAnimation(),a.getDetail(n,1)):"已砍至最低价"==r.msg?(a.tip=r.msg,a.getDetail(n,1)):t.showToast({title:r.msg,icon:"none",duration:1e3})}).catch(function(t){a.$hideLoading()})},getDetail:function(i,e){var n=this;n.$request({url:n.$api.bargain.activity,data:{bargain_order_id:i,page:e}}).then(function(i){if(setTimeout(function(){n.$hideLoading()},500),0==i.code)if(i.data.list.length>0){if(n.detail=i.data,i.data.total_people>3&&(n.toMore=!0,3==i.data.list.length?n.more=!0:n.more=!1),n.list=n.list.concat(i.data.list),1==e){var a=n.detail.reset_time;n.timer=setInterval(function(){a--,n.getTime(a),0==n.reset_time&&clearInterval(n.timer)},1e3)}}else n.tip="暂无更多用户",n.toMore=!1;else t.showModal({title:"提示",content:i.data.msg,showCancel:!1,success:function(i){i.confirm&&t.redirectTo({url:"/pages/index/index"})}})}).catch(function(t){n.$hideLoading()})},getTime:function(t){t>86399?(this.dd=Math.floor(t/86400),t-=86400*this.dd):this.dd=0,t>3599?(this.hh=Math.floor(t/3600),this.hh<10&&(this.hh="0"+this.hh),t-=3600*this.hh):this.hh="00",t>59?(this.mm=Math.floor(t/60),this.mm<10&&(this.mm="0"+this.mm),t-=60*this.mm):this.mm="00",t<60&&(this.ss=t,this.ss<10&&(this.ss="0"+this.ss))},bargainAnimation:function(){var t=this;t.kanjia=!0,t.dialog=!0,setTimeout(function(){t.kanjia=!1,t.success()},1200),t.$forceUpdate()},lookMore:function(){this.page++,this.getDetail(this.order_id,this.page)},closeList:function(){this.list=this.list.slice(0,3),this.page=1,this.more=!0},success:function(){this.dialog=!0;var i=t.createAnimation({duration:500,timingFunction:"linear"});this.animation=i,i.scale(1).step().rotate(2).step().rotate(-2).step().rotate(0).step(),this.animationData=i.export()},changeSize:function(){var i=t.createAnimation({duration:1e3,timingFunction:"linear"});this.size=i,i.scale(.8).step().scale(1).step(),this.sizeAnimation=i.export()},toIndex:function(){t.reLaunch({url:"/pages/index/index"})},toBuy:function(){var i=this.detail,e=[{mch_id:0,bargain_order_id:i.bargain_order_id,goods_list:[{id:i.goods_id,attr:[],num:1,cart_id:0,goods_attr_id:i.goods_attr_id}]}];t.navigateTo({url:"/pages/order-submit/order-submit?mch_list="+JSON.stringify(e)+"&preview_url="+encodeURIComponent(this.$api.bargain.order_preview)+"&submit_url="+encodeURIComponent(this.$api.bargain.order_submit)})},toJoin:function(){this.detail.goods_id?t.navigateTo({url:"/plugins/bargain/goods/goods?goods_id="+this.detail.goods_id}):t.showModal({title:"提示",content:"活动已结束",showCancel:!1,success:function(i){i.confirm&&t.redirectTo({url:"/pages/index/index"})}})}}};i.default=s}).call(this,e("5486")["default"])},"42ac":function(t,i,e){},"776a":function(t,i,e){"use strict";var n=e("42ac"),a=e.n(n);a.a},"80ff":function(t,i,e){"use strict";e.r(i);var n=e("c1af"),a=e("0b6b");for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);e("776a");var o=e("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"07757cb2",null);i["default"]=s.exports},c1af:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.dialog=!1},t.e1=function(i){t.tip=""})},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})}},[["624e","common/runtime","common/vendor"]]]);