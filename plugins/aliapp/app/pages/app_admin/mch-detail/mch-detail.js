(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/app_admin/mch-detail/mch-detail"],{"0d19":function(t,e,i){"use strict";var n=i("322f"),a=i.n(n);a.a},"2c78":function(t,e,i){"use strict";i.r(e);var n=i("47c5"),a=i("6f31");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("0d19");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"1357a2a4",null);e["default"]=s.exports},"322f":function(t,e,i){},"47c5":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.detail.form_data,function(e,i){var n=t.getTypeof(e.value),a=t.getTypeof(e.value);return{$orig:t.__get_orig(e),m0:n,m1:a}}));t.$mp.data=Object.assign({},{$root:{l0:i}})},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"6f31":function(t,e,i){"use strict";i.r(e);var n=i("d906"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},d906:function(t,e,i){"use strict";(function(t){function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"mch-detail",data:function(){return{detail:{user:{nickname:""},realname:"",mobile:"",wechat:"",scope:"",districts:"",address:"",cat_name:"",service_mobile:"",form_data:[]},model:!1,modelType:0,reasonRefusal:null,transfer_rate:null,pageShow:!1}},onLoad:function(t){var e=this;this.$showLoading({type:"global",text:"加载中..."}),this.$request({url:this.$api.app_admin.review_detail,data:{id:t.id}}).then(function(t){e.$hideLoading(),0===t.code&&(e.pageShow=!0,e.detail=t.data.detail)}).catch(function(){e.$hideLoading()})},methods:{getTypeof:function(t){return i(t)},fail:function(){this.model=!0,this.modelType=1},by:function(){this.model=!0,this.modelType=2},cancel:function(){this.model=!1,this.modelType=0},confirm:function(){var e=this;2===this.modelType?(this.detail.transfer_rate=this.transfer_rate,this.$request({url:this.$api.app_admin.review_switch,method:"post",data:{type:1,status:1,form:JSON.stringify(this.detail),user_id:this.detail.id}}).then(function(i){0===i.code?(t.navigateBack(),e.model=!1):1===i.code&&t.showToast({title:i.msg})})):1===this.modelType&&(this.detail.review_remark=this.reasonRefusal,this.$request({url:this.$api.app_admin.review_switch,method:"post",data:{type:1,status:2,form:JSON.stringify(this.detail),user_id:this.detail.id}}).then(function(i){0===i.code?(t.navigateBack(),e.model=!1):1===i.code&&t.showToast({title:i.msg})}))},preview:function(e){t.previewImage({urls:[e]})},onInput:function(t){var e=this;Number(t.detail.value)>1e3&&setTimeout(function(){e.transfer_rate=1e3})}}};e.default=n}).call(this,i("c11b")["default"])}},[["1310","common/runtime","common/vendor"]]]);