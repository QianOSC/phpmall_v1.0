(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/index/index"],{"03b8":function(e,t,n){"use strict";n.r(t);var o=n("b956"),r=n("bc12");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("ea2e");var a=n("2877"),u=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"c0f3018a",null);t["default"]=u.exports},"7a81":function(e,t,n){},b956:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},bc12:function(e,t,n){"use strict";n.r(t);var o=n("f258"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a},ea2e:function(e,t,n){"use strict";var o=n("7a81"),r=n.n(o);r.a},f258:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{currentRoute:this.$platDiff.route(),tabbarbool:!1,detail:{rules:""},list:null,nextList:null,goods:[],first:!1,haveBackground:!1,coupon:[],balance:0,loading:!1,member_pic_url:null,nextMember:{},recharge:!1,current:"wechat",prop:0,page_loading:!0,level:0}},name:"index",computed:i({},(0,o.mapState)({tabBarNavs:function(e){return e.mallConfig.navbar.navs},userInfo:function(e){return e.user.info},memberImg:function(e){return e.mallConfig.__wxapp_img.member},couponImg:function(e){return e.mallConfig.__wxapp_img.coupon}})),watch:{tabBarNavs:{handler:function(){this.b()},immediate:!0}},methods:{b:function(){for(var e=this.currentRoute,t=0;t<this.tabBarNavs.length;t++)if(e.includes(this.tabBarNavs[t].url.split("?")[0]))return this.tabbarbool=!0;return this.tabbarbool=!1},receive:function(t,n){var o=this;if(t.user_count>0||o.loading)return!1;o.loading=!0,e.showLoading({title:"领取中..."}),o.$request({url:o.$api.member.receive,data:{coupon_id:t.id}}).then(function(t){o.loading=!1,e.hideLoading(),0===t.code?(e.showToast({title:t.msg,duration:1e3}),o.coupon[n].user_count=0===t.data.rest?1:0):e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(){e.hideLoading(),o.$event.on(o.$const.EVENT_USER_LOGIN).then(function(){o.receive(t,n)})})},toCoupon:function(t){e.navigateTo({url:"/pages/coupon/details/details-no-share?is_member=1&id="+t})},toGoods:function(t){t?e.navigateTo({url:"/pages/goods/goods?id="+t}):e.navigateTo({url:"/pages/member/goods/goods?discount="+this.detail.discount})},toDetail:function(){e.navigateTo({url:"/pages/member/detail/detail?level="+this.level+"&prop="+this.prop})},toMore:function(t){t>0?e.navigateTo({url:"/pages/member/upgrade/upgrade?level="+this.level+"&other="+t}):e.navigateTo({url:"/pages/member/upgrade/upgrade?level="+this.level})},toRules:function(){e.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.member.index),"&keys=").concat(JSON.stringify(["mall_member","rules"]))})},toRecharge:function(){e.navigateTo({url:"/pages/balance/recharge"})},getList:function(){var t=this;t.$request({url:t.$api.member.index,method:"get"}).then(function(n){t.$hideLoading(),t.$store.dispatch("user/info"),0==n.code?(t.list=n.data,t.detail=t.list.mall_member,t.goods=t.list.member_goods,t.coupon=t.list.member_coupons,t.nextMember=t.list.next_consume_upgrade_member,t.member_pic_url=t.list.member_pic_url,t.nextList=t.list.next_mall_member,t.recharge&&(t.balance=t.list.user_info.balance),null!=t.detail&&(t.level=t.detail.level),t.nextMember&&(t.prop=t.list.consumption_money/t.nextMember.money*100,t.prop>100&&(t.prop=100)),null==t.detail&&t.nextList.length>0&&(t.detail=t.nextList[0])):e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading(),t.$event.on(t.$const.EVENT_USER_LOGIN).then(function(){t.getList()})})}},onLoad:function(){var t=this;t.$showLoading({type:"global",text:"加载中..."}),t.$request({url:t.$api.recharge.setting,method:"get"}).then(function(n){0==n.code?1==n.data.setting.status&&(t.recharge=!0):e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},onShow:function(){var e=this;e.getList()}};t.default=u}).call(this,n("5486")["default"])}},[["b2cb","common/runtime","common/vendor"]]]);