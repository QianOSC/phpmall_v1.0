(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order-detail/order-detail"],{"3ca3":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=(e._self._c,e.__map(e.orderDetail.order_form,function(t,r){var o=Array.isArray(t.value);return{$orig:e.__get_orig(t),g0:o}})),o=e.__map(e.formList,function(t,r){var o=e.__map(t[0]["form_data"],function(t,r){var o=Array.isArray(t.value);return{$orig:e.__get_orig(t),g1:o}});return{$orig:e.__get_orig(t),l1:o}});e._isMounted||(e.e0=function(t){e.ecard=e.orderDetail.type_data.ecard}),e.$mp.data=Object.assign({},{$root:{l0:r,l2:o}})},n=[];r.d(t,"a",function(){return o}),r.d(t,"b",function(){return n})},"57b3":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("ee50"));function n(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.e("components/page-component/app-order-goods-info/app-order-goods-info").then(r.bind(null,"1602"))},i=function(){return r.e("components/page-component/app-order-express/app-order-express").then(r.bind(null,"2338"))},d=function(){return r.e("components/page-component/app-order-banner/app-order-banner").then(r.bind(null,"ccb8"))},s={components:{"app-order-goods-info":a,"app-order-express":i,"app-order-banner":d},data:function(){return{order_id:null,orderDetail:{detailExpressRelation:[],detailExpress:[]},is_show:!1,advance_order:{goods_num:0},detail:[],sign:"",ecard:[],isShowFormGoods:!1}},computed:{formList:function(){var e=this,t=e.orderDetail.detail,r={},o=[];if(t&&t.length){var n=!0,a=!1,i=void 0;try{for(var d,s=t[Symbol.iterator]();!(n=(d=s.next()).done);n=!0){var c=d.value;"0"!=c.form_id&&(-1===o.indexOf(c.form_id)?(o.push(c.form_id),r[c.form_id]=[c]):r[c.form_id].push(c))}}catch(l){a=!0,i=l}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}return e.isShowFormGoods=o.length>1,Object.values(r)},getPageUrl:function(){var e=this.orderDetail;if(1==e.is_send&&0==e.detailExpress.length){var t="";return e.detail.forEach(function(e,r){0===r&&(t=e.goods_info.pic_url)}),"/pages/order/express-detail/express-detail?express=".concat(e.express,"&customer_name=").concat(e.customer_name,"&express_no=").concat(e.express_no,"&cover_pic=").concat(t)}if(1==e.is_send&&1==e.detailExpress.length){var r=e.detailExpress[0].express,o=e.detailExpress[0].express_no,n=e.detailExpress[0].customer_name,a=e.detailExpress[0].expressRelation[0].orderDetail.goods_info.goods_attr.cover_pic;return"/pages/order/express-detail/express-detail?express="+r+"&customer_name="+n+"&express_no="+o+"&cover_pic="+a}if(e.detailExpress.length>=1)return"/pages/order/express-list/express-list?order_id="+e.id}},methods:{look:function(t){e.previewImage({current:t,urls:[t]})},toggle:function(e){this.orderDetail.composition_list[e].show=!this.orderDetail.composition_list[e].show,this.$forceUpdate()},getOrderDetail:function(){var t=this;t.$showLoading(),t.$request({url:t.$api.order.detail,data:{id:t.order_id}}).then(function(r){if(t.$hideLoading(),t.is_show=!0,0==r.code){if(t.orderDetail=r.data.detail,t.ecard=[t.orderDetail.type_data.ecard[0]],"composition"==t.sign)for(var o in t.orderDetail.composition_list)t.orderDetail.composition_list[o].show=!1}else e.showModal({title:"",content:r.msg,showCancel:!1})}).catch(function(){t.$hideLoading()})},copyText:function(e){o.default.copyText(e)},copyTextEcard:function(e){for(var t="",r=0;r<e.length;r++)t+="".concat(e[r].key,":").concat(e[r].value,"\n");o.default.copyText(t)},navigation:function(t){e.openLocation({latitude:parseFloat(t.latitude),longitude:parseFloat(t.longitude),name:t.name,address:t.address})},cancel:function(t){e.navigateTo({url:"/pages/order/refund/order-refund?id="+t.id})},cancelAction:function(t){var r=this;e.showLoading({title:"取消中"}),r.$request({url:r.$api.order.cancel,data:{id:t.id}}).then(function(t){e.hideLoading(),0===t.code?"advance"===r.sign?r.$request({url:r.$api.advance.order_detail,method:"get",data:{id:r.order_id}}).then(function(t){r.is_show=!0,0===t.code?r.orderDetail=t.data.detail:e.showModal({title:"",content:t.msg,showCancel:!1})}):r.getOrderDetail():e.showModal({title:"",content:t.msg,showCancel:!1})}).catch(function(){e.hideLoading()})},mobile:function(){e.makePhoneCall({phoneNumber:this.orderDetail.city.mobile})},go_eCard:function(){e.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.ecard.index),"&key=content&data=").concat(JSON.stringify({order_id:this.orderDetail.id}))})}},onLoad:function(e){this.order_id=e.id,this.sign=e.sign},onShow:function(){var t=this,r=setInterval(function(){"advance"===t.sign?t.$request({url:t.$api.advance.order_detail,method:"get",data:{id:t.order_id}}).then(function(r){t.is_show=!0,0===r.code?t.orderDetail=r.data.detail:e.showModal({title:"",content:r.msg,showCancel:!1})}):t.getOrderDetail(),clearInterval(r)},300)}};t.default=s}).call(this,r("5486")["default"])},"581e":function(e,t,r){"use strict";r.r(t);var o=r("3ca3"),n=r("6b22");for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);r("5aae");var i=r("2877"),d=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,"78c066f2",null);t["default"]=d.exports},"5aae":function(e,t,r){"use strict";var o=r("b7ee"),n=r.n(o);n.a},"6b22":function(e,t,r){"use strict";r.r(t);var o=r("57b3"),n=r.n(o);for(var a in o)"default"!==a&&function(e){r.d(t,e,function(){return o[e]})}(a);t["default"]=n.a},b7ee:function(e,t,r){}},[["4eb93","common/runtime","common/vendor"]]]);