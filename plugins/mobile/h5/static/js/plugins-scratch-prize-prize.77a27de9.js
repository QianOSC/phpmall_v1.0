(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-scratch-prize-prize"],{"1ab2":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("app-layout",[t.list&&t.list.length?t._e():e("v-uni-view",{staticClass:"no-content"},[t._v("暂无中奖记录")]),t._l(t.list,function(a,o){return[e("v-uni-view",{key:o+"_0",staticClass:"dir-left-nowrap line cross-center"},[e("v-uni-view",{staticClass:"dir-top-nowrap box-grow-1 main-center"},[e("v-uni-view",{staticClass:"name t-omit",domProps:{textContent:t._s(a.name)}}),e("v-uni-view",{staticClass:"time",domProps:{textContent:t._s(a.created_at)}})],1),e("v-uni-view",{staticClass:"box-grow-0"},[1==a.status&&4==a.type?e("app-button",{attrs:{background:"#FFFFFF",height:"56",width:"170",color:"#FF4544","font-size":"27",round:""},on:{click:function(e){e=t.$handleEvent(e),t.submit(a)}}},[t._v("立即兑换")]):t._e(),2==a.status&&4==a.type?e("app-button",{attrs:{background:"#CDCDCD",height:"56",width:"170",color:"#FFFFFF","font-size":"27",disabled:"",round:""}},[t._v("已兑换")]):t._e(),2==a.status&&4!=a.type?e("app-button",{attrs:{background:"#CDCDCD",height:"56",width:"170",color:"#FFFFFF","font-size":"27",disabled:"",round:""}},[t._v("已发放")]):t._e()],1)],1)]})],2)},n=[];e.d(a,"a",function(){return o}),e.d(a,"b",function(){return n})},"30ad":function(t,a,e){"use strict";e.r(a);var o=e("4960"),n=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(a,t,function(){return o[t]})}(i);a["default"]=n.a},4960:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o={name:"prize",components:{},data:function(){return{list:[],page:1,args:!1,load:!1}},onShow:function(){var t=this;t.$showLoading({title:"加载中"}),t.$request({url:t.$api.scratch.prize,data:{page:1}}).then(function(a){t.$hideLoading(),0===a.code&&(t.list=a.data)}).catch(function(a){t.$hideLoading()})},onReachBottom:function(){var t=this;if(!t.args&&!t.load){t.load=!0;var a=t.page+1;t.$request({url:t.$api.scratch.prize,data:{page:a}}).then(function(e){if(0===e.code){var o=[a,0===e.data.length,t.list.concat(e.data)];t.page=o[0],t.args=o[1],t.list=o[2]}t.load=!1})}},methods:{submit:function(t){var a=[{mch_id:0,scratch_id:t.id,goods_list:[{id:t.goods.id,attr:t.attr_list,num:1,cart_id:0,goods_attr_id:t.attr_id}]}];uni.navigateTo({url:"/pages/order-submit/order-submit?mch_list="+JSON.stringify(a)+"&preview_url="+encodeURIComponent(this.$api.scratch.order_preview)+"&submit_url="+encodeURIComponent(this.$api.scratch.order_submit)})}}};a.default=o},"7ebd":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".text-center[data-v-db293b80]{text-align:center}.font-weight[data-v-db293b80]{font-weight:700}.page-width[data-v-db293b80]{width:100%}.goods-hover-class[data-v-db293b80]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-db293b80]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-db293b80]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-db293b80]{width:100%}.u-hover-class[data-v-db293b80]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-db293b80]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.no-content[data-v-db293b80]{color:#888;padding-top:%?100?%;text-align:center}.line[data-v-db293b80]{height:%?140?%;padding:0 %?24?%;border-bottom:1px solid #e2e2e2;background:#fff}.line .name[data-v-db293b80]{font-size:%?28?%;color:#353535;margin-right:%?80?%}.line .time[data-v-db293b80]{margin-top:%?22?%;font-size:%?24?%;color:#666}body.?%PAGE?%[data-v-db293b80]{background:#f7f7f7}",""])},"89d9":function(t,a,e){"use strict";var o=e("b632"),n=e.n(o);n.a},a99c:function(t,a,e){"use strict";e.r(a);var o=e("1ab2"),n=e("30ad");for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);e("89d9");var d=e("2877"),r=Object(d["a"])(n["default"],o["a"],o["b"],!1,null,"db293b80",null);a["default"]=r.exports},b632:function(t,a,e){var o=e("7ebd");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("76de8716",o,!0,{sourceMap:!1,shadowMode:!1})}}]);