(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/address/address-edit"],{"0fa7":function(t,e,i){"use strict";i.r(e);var r=i("aad5"),n=i("67cd");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("37b2");var o=i("2877"),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,"10d4d6aa",null);e["default"]=s.exports},"37b2":function(t,e,i){"use strict";var r=i("98ee"),n=i.n(r);n.a},6744:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(i("a34a")),n=i("2f62"),a=o(i("a95b"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return d(t)||u(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var i=[],r=!0,n=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(i.push(o.value),e&&i.length===e)break}catch(c){n=!0,a=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(n)throw a}}return i}}function d(t){if(Array.isArray(t))return t}function f(t,e){if(null==t)return{};var i,r,n=l(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function l(t,e){if(null==t)return{};var i,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)i=a[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}function h(t,e,i,r,n,a,o){try{var s=t[a](o),c=s.value}catch(u){return void i(u)}s.done?e(c):Promise.resolve(c).then(r,n)}function p(t){return function(){var e=this,i=arguments;return new Promise(function(r,n){var a=t.apply(e,i);function o(t){h(a,r,n,o,s,"next",t)}function s(t){h(a,r,n,o,s,"throw",t)}o(void 0)})}}function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(i,!0).forEach(function(e){_(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function _(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var b=function(){return i.e("components/page-component/app-area-picker/app-area-picker").then(i.bind(null,"8e44"))},y=function(){return i.e("components/basic-component/app-textarea/app-textarea").then(i.bind(null,"47cb"))},g={name:"address-edit",data:function(){return{form:{location:"",latitude:"",longitude:"",id:"",name:"",mobile:"",address:"",province_id:0,city_id:0,district_id:0,detail:"",type:""},is_refund_address:0,detail_url:"",list:[],submit_status:!1,tt_area_show:!1,automatic:"",provinceString:"",cityString:"",areaString:"",focus:!1}},computed:v({},(0,n.mapGetters)("mallConfig",{getTheme:"getTheme"})),components:{appAreaPicker:b,appTextArea:y},onLoad:function(e){var i=this;if(this.form.type=1==e.type?1:0,this.getAutoInfo(),e.is_refund_address>0?(this.is_refund_address=e.is_refund_address,this.detail_url=this.$api.app_admin.refund_address_edit,t.setNavigationBarTitle({title:"编辑退货地址"})):(this.is_refund_address=0,this.detail_url=this.$api.user.address_detail),e.form){var r=JSON.parse(e.form);"undefined"===typeof r.type&&(r.type=this.form.type),this.form=r}e.id>0?(this.$showLoading({title:"加载中"}),this.$request({url:this.detail_url,data:e}).then(function(r){if(i.$hideLoading(),0===r.code)if(e.is_refund_address>0){var n=r.data.detail;i.getInfo(Object.assign({detail:n.address_detail},n))}else i.form=r.data.list;else t.showToast({title:r.msg,icon:"none"});i.tt_area_show=!0}).catch(function(){i.$hideLoading(),i.tt_area_show=!0})):this.tt_area_show=!0},methods:{getAutoInfo:function(){var t=p(r.default.mark(function t(){var e,i,n,a,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.user.auto_address_info,method:"get"});case 2:e=t.sent,0===e.code&&(i=JSON.parse(e.data),n=i.reduce(function(t,e){e.children;var i=f(e,["children"]);return t.concat(i)},[]),a=i.reduce(function(t,e){return t.concat(e.children.map(function(t){t.children;var i=f(t,["children"]);return v({},i,{provinceCode:e.code})}))},[]),o=i.reduce(function(t,e){var i=e.code;return t.concat(e.children.reduce(function(t,e){var r=e.code;return t.concat(e.children.map(function(t){t.children;var e=f(t,["children"]);return v({},e,{cityCode:r,provinceCode:i})}))},[]))},[]),this.provinceString=JSON.stringify(n),this.cityString=JSON.stringify(a),this.areaString=JSON.stringify(o));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getChooseLocation:function(){var e=p(r.default.mark(function e(){var i,n,a,o,c;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=this,e.next=3,t.chooseLocation();case 3:n=e.sent,a=s(n,2),o=a[0],c=a[1],c&&(i.form.location=c.address+c.name,i.form.latitude=c.latitude,i.form.longitude=c.longitude),o&&function(){t.showModal({title:"授权权限",content:"请先授权地理位置权限",success:function(e){e.confirm&&t.openSetting({success:function(e){e.authSetting["scope.userLocation"]?t.chooseLocation({success:function(t){i.form.location=t.address+t.name,i.form.latitude=t.latitude,i.form.longitude=t.longitude}}):t.showToast({title:"授权失败",icon:"none"})}})}})};case 9:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),getInfo:function(e){var i=this;this.$request({url:this.$api.user.wechat_district,data:{province_name:e.address[0],city_name:e.address[1],county_name:e.address[2]}}).then(function(t){if(0===t.code){var r=t.data.district,n=r.province,a=r.city,o=r.district;e.province_id=n.id,e.city_id=a.id,e.district_id=o.id,i.form=e}}).catch(function(){t.showToast({title:"网络异常",icon:"none"})})},areaEvent:function(t){t&&(this.form.province_id=t.province.id,this.form.city_id=t.city.id,this.form.district_id=t.district.id,this.list=[t.province.name,t.city.name,t.district.name])},submit:function(){var e=p(r.default.mark(function e(){var i,n,a,o,s,c,u,d,f;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!this.submit_status){e.next=3;break}return e.abrupt("return");case 3:if(this.form.detail||(i=1==this.form.type?"门牌号不能为空":"详细地址不能为空"),this.form.province_id||0!=this.form.type||(i="地区不能为空"),this.form.mobile||(i="联系方式不能为空"),this.$validation.umobile(this.form.mobile)||(i="联系方式格式错误"),this.form.name||(i="姓名不能为空"),!i){e.next=11;break}return t.showToast({title:i,icon:"none"}),e.abrupt("return");case 11:return this.submit_status=!0,this.is_refund_address>0?(o=this.form,s=o.id,c=o.name,u=o.mobile,d=o.detail,a=this.$api.app_admin.refund_address_edit,n={form:JSON.stringify({id:s,name:c,mobile:u,address_detail:d,address:this.list,is_default:0,remark:""})}):(a=this.$api.user.address_save,n=Object.assign({},this.form)),e.next=15,this.$request({url:a,data:n,method:"POST"});case 15:f=e.sent,this.submit_status=!1,0===f.code?(t.showToast({title:f.msg,icon:"none"}),t.navigateBack({delta:1})):t.showToast({title:f.msg,icon:"none"}),e.next=24;break;case 20:throw e.prev=20,e.t0=e["catch"](0),this.submit_status=!1,new Error(e.t0);case 24:case"end":return e.stop()}},e,this,[[0,20]])}));function i(){return e.apply(this,arguments)}return i}(),getAddress:function(){var e=(0,a.default)(this.automatic,{},this.provinceString,this.cityString,this.areaString);if(!this.$validation.empty(e)){for(var i=t.getStorageSync("_DISTRICT"),r=e.name,n=e.province,o=e.city,s=e.area,c=e.phone,u=e.detail,d=0;d<i.length;d++)if(i[d].name===n){for(var f=0;f<i[d].list.length;f++){if(i[d].list[f].name===o){for(var l=0;l<i[d].list[f].list.length;l++)if(i[d].list[f].list[l].name===s){this.form.province_id=i[d].id,this.form.city_id=i[d].list[f].id,this.form.district_id=i[d].list[f].list[l].id;break}break}if("市辖区"===o){for(var h=0;h<i[d].list[f].list.length;h++)if(i[d].list[f].list[h].name===s){this.form.province_id=i[d].id,this.form.city_id=i[d].list[f].id,this.form.district_id=i[d].list[f].list[h].id;break}break}}break}this.form.name=r,this.form.detail="".concat(u),this.form.mobile=c}},detailFocus:function(){this.focus=!0}}};e.default=g}).call(this,i("c11b")["default"])},"67cd":function(t,e,i){"use strict";i.r(e);var r=i("6744"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,function(){return r[t]})}(a);e["default"]=n.a},"98ee":function(t,e,i){},aad5:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.focus=!1},t.e1=function(e){t.focus=!1})},n=[];i.d(e,"a",function(){return r}),i.d(e,"b",function(){return n})}},[["617f","common/runtime","common/vendor"]]]);