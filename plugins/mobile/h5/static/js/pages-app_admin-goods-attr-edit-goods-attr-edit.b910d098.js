(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-app_admin-goods-attr-edit-goods-attr-edit"],{"0e2ae":function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".text-center[data-v-a13647da]{text-align:center}.font-weight[data-v-a13647da]{font-weight:700}.page-width[data-v-a13647da]{width:100%}.goods-hover-class[data-v-a13647da]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-a13647da]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-a13647da]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-a13647da]{width:100%}.u-hover-class[data-v-a13647da]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-a13647da]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.attr[data-v-a13647da]{background-color:#fff;position:relative;padding-left:%?84?%;margin-bottom:%?20?%}.attr .low-attr[data-v-a13647da]{position:absolute;z-index:2;top:%?24?%;height:%?40?%;width:%?40?%;left:%?24?%}.attr .attr-item[data-v-a13647da]{height:%?88?%;line-height:%?88?%;border-top:%?2?% solid #e2e2e2;position:relative;font-size:%?28?%;color:#353535}.attr .attr-item uni-input[data-v-a13647da]{height:%?88?%;line-height:%?88?%}.attr .attr-item[data-v-a13647da]:first-of-type{border-top:0}.add-attr[data-v-a13647da]{height:%?120?%;background-color:#fff;margin-bottom:%?20?%;padding-top:%?24?%}.add-attr .add-attr-btn[data-v-a13647da]{height:%?72?%;width:%?320?%;border-radius:%?36?%;border:%?1?% solid #446dfd;margin:0 auto;color:#446dfd;font-size:%?26?%;line-height:%?72?%}.add-attr .add-attr-btn uni-image[data-v-a13647da]{height:%?28?%;width:%?28?%;margin-right:%?12?%;margin-top:%?22?%}.add[data-v-a13647da]{position:fixed;bottom:0;left:0;height:%?120?%;width:100%;z-index:15;background-color:#fff}.add uni-view[data-v-a13647da]{width:%?702?%;line-height:%?80?%;height:%?80?%;margin:%?20?% auto;border-radius:%?40?%;background-color:#446dfd;color:#fff;font-size:%?32?%;text-align:center}.add.iphone_x[data-v-a13647da]{height:%?170?%;padding-bottom:%?50?%}.placeholder[data-v-a13647da]{height:%?120?%}.placeholder.iphone_x[data-v-a13647da]{height:%?170?%}.dialog[data-v-a13647da]{position:fixed;height:100%;width:100%;bottom:0;left:0;z-index:10;background-color:rgba(0,0,0,.3)}.dialog .dialog-item[data-v-a13647da]{padding-top:%?20?%;position:fixed;top:25%;left:0;right:0;margin:0 auto;width:%?620?%;border-radius:%?16?%;background-color:#fff;text-align:center}.dialog .btn-area[data-v-a13647da]{height:%?88?%;position:relative;border-top:%?1?% solid #e2e2e2}.dialog .btn-area .line[data-v-a13647da]{height:%?32?%;width:%?1?%;background-color:#e2e2e2;position:absolute;top:%?28?%;left:0;right:0;margin:0 auto}.dialog .btn-area .submit-btn[data-v-a13647da]{height:%?88?%;line-height:%?88?%;font-size:%?32?%;color:#666;width:%?310?%;text-align:center}.dialog .btn-area .submit-btn.be-submit[data-v-a13647da]{color:#446dfd}.dialog .dialog-title[data-v-a13647da]{text-align:center;font-size:%?32?%;color:#353535;margin:%?66?% 0 %?76?%}body.?%PAGE?%[data-v-a13647da]{background:#f7f7f7}",""])},"1cc7":function(t,a,i){"use strict";var e=i("cf8d"),n=i.n(e);n.a},"78a8":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i("2f62");function n(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,e)}return i}function o(t){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?n(i,!0).forEach(function(a){r(t,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(i,a))})}return t}function r(t,a,i){return a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}var d={data:function(){return{iphone_x:!1,detail:{},index:-1,list:[],idx:-1,attrList:[],attr:[]}},computed:o({},(0,e.mapState)({userInfo:function(t){return t.user.info},adminImg:function(t){return t.mallConfig.__wxapp_img.app_admin}})),methods:{pop:function(t){this.index=t},close:function(){this.index=-1},add_attr:function(){this.list.push({attr_id:this.list.length>0?+this.list[this.list.length-1].attr_id+1:1,attr_name:"",pic_url:""})},toDelete:function(){var t=[];for(var a in this.attrList)for(var i in this.attrList[a].attr_list){var e=this.attrList[a].attr_list[i],n=e.attr_group_id,o=e.attr_id;n==this.attr[this.idx].attr_group_id&&o==this.list[this.index].attr_id&&t.unshift(a)}for(var r in t)this.attrList.splice(t[r],1);this.list.splice(this.index,1),this.index=-1},save:function(){for(var t in this.list){if(!this.list[t].attr_name)return uni.showToast({title:"请输入规格值",icon:"none",duration:1e3}),!1;for(var a in this.list)if(t!==a&&this.list[t].attr_name===this.list[a].attr_name)return uni.showToast({title:"同一规格组下，规格名不能重复",icon:"none",duration:1e3}),!1}var i=!1;for(var e in this.list.length>this.attr[this.idx].attr_list.length&&(i=!0),this.attrList)for(var n in this.attrList[e].attr_list)for(var o in this.list){var r=this.attrList[e].attr_list[n],d=r.attr_group_id,s=r.attr_id;d==this.attr[this.idx].attr_group_id&&s==this.list[o].attr_id&&(this.attrList[e].attr_list[n].attr_name=this.list[o].attr_name)}uni.showLoading({mask:!0,title:"保存中..."}),i?uni.removeStorage({key:"temp_attr_info"}):0===this.attrList.length?uni.removeStorage({key:"temp_attr_info"}):uni.setStorage({key:"temp_attr_info",data:this.attrList,fail:function(t){uni.hideLoading(),uni.showToast({title:t.errMsg,icon:"none",duration:1e3})}}),this.attr[this.idx].attr_list=this.list,uni.setStorage({key:"temp_attr",data:this.attr}),setTimeout(function(){uni.navigateBack()},500)}},onLoad:function(t){var a=this;this.idx=t.index,uni.getStorage({key:"temp_attr",success:function(i){a.attr=i.data,a.detail=a.attr[t.index],a.list=JSON.parse(JSON.stringify(a.detail.attr_list))}}),uni.getStorage({key:"temp_attr_info",success:function(t){a.attrList=t.data}}),uni.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(a.iphone_x=!0)}})}};a.default=d},"85ef":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("app-layout",[i("v-uni-view",{staticClass:"add-attr",on:{click:function(a){a=t.$handleEvent(a),t.add_attr(a)}}},[i("v-uni-view",{staticClass:"add-attr-btn main-center"},[i("v-uni-image",{attrs:{src:"./../image/add.png"}}),i("v-uni-view",[t._v("增加规格值")])],1)],1),i("v-uni-view",t._l(t.list,function(a,e){return i("v-uni-view",{key:e,staticClass:"attr"},[i("v-uni-image",{staticClass:"low-attr",attrs:{src:"./../image/low.png"},on:{click:function(a){a=t.$handleEvent(a),t.pop(e)}}}),i("v-uni-view",{staticClass:"attr-item"},[i("v-uni-input",{staticClass:"input",attrs:{"placeholder-style":"color: #cdcdcd",placeholder:"请输入规格值"},model:{value:a.attr_name,callback:function(i){t.$set(a,"attr_name",i)},expression:"item.attr_name"}})],1)],1)}),1),i("v-uni-view",{class:["placeholder",t.iphone_x?"iphone_x":""]}),i("v-uni-view",{class:["add",t.iphone_x?"iphone_x":""]},[i("v-uni-view",{on:{click:function(a){a=t.$handleEvent(a),t.save(a)}}},[t._v("保存")])],1),t.index>-1?i("v-uni-view",{staticClass:"dialog"},[i("v-uni-view",{staticClass:"dialog-item"},[i("v-uni-view",{staticClass:"dialog-title"},[t._v("确定删除这个规格值吗？")]),i("v-uni-view",{staticClass:"main-center btn-area"},[i("v-uni-view",{staticClass:"submit-btn",on:{click:function(a){a=t.$handleEvent(a),t.close(a)}}},[t._v("取消")]),i("v-uni-view",{staticClass:"line"}),i("v-uni-view",{staticClass:"submit-btn be-submit",on:{click:function(a){a=t.$handleEvent(a),t.toDelete(a)}}},[t._v("删除")])],1)],1)],1):t._e()],1)},n=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})},a7bb:function(t,a,i){"use strict";i.r(a);var e=i("78a8"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);a["default"]=n.a},cf8d:function(t,a,i){var e=i("0e2ae");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("5d4d5c54",e,!0,{sourceMap:!1,shadowMode:!1})},f1e9:function(t,a,i){"use strict";i.r(a);var e=i("85ef"),n=i("a7bb");for(var o in n)"default"!==o&&function(t){i.d(a,t,function(){return n[t]})}(o);i("1cc7");var r=i("2877"),d=Object(r["a"])(n["default"],e["a"],e["b"],!1,null,"a13647da",null);a["default"]=d.exports}}]);