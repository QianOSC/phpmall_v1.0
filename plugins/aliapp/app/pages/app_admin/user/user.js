(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/app_admin/user/user"],{"2ee5":function(t,e,r){"use strict";var i=r("fb4d"),s=r.n(i);s.a},"3d02":function(t,e,r){"use strict";r.r(e);var i=r("e91d"),s=r("5548");for(var a in s)"default"!==a&&function(t){r.d(e,t,function(){return s[t]})}(a);r("2ee5");var o=r("2877"),n=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"204f4f6d",null);e["default"]=n.exports},5548:function(t,e,r){"use strict";r.r(e);var i=r("b0f3"),s=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},b0f3:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(r("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t){return h(t)||n(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function u(t,e,r,i,s,a,o){try{var n=t[a](o),h=n.value}catch(u){return void r(u)}n.done?e(h):Promise.resolve(h).then(i,s)}function c(t){return function(){var e=this,r=arguments;return new Promise(function(i,s){var a=t.apply(e,r);function o(t){u(a,i,s,o,n,"next",t)}function n(t){u(a,i,s,o,n,"throw",t)}o(void 0)})}}var l={name:"user-admin",data:function(){return{getFocus:!1,active:0,search:!0,remarkTextarea:!1,look:!1,error:!1,keyword:"",status:"",page:1,over:!1,list:[],memberLevel:null,storeList:[],rechargeBool:!1,placeholder:"积分",rechargeStatus:0,num:null,remark_name:null,remark:null,rechargeItem:{},rechargeDeduction:0,modifyStoreBool:!1,storeItem:{},storeIndex:-1,storeUser:{},sort:0,dialog:!1,dialogChoose:!0,changeRemark:!1,changeMember:!1,releaseBool:!1,member:[],deleteObject:{}}},onLoad:function(){var t=this;this.$request({url:this.$api.app_admin.user,data:{page:this.page,status:this.status,keyword:this.keyword}}).then(function(e){if(0===e.code){t.list=e.data.list;var r=!0,i=!1,s=void 0;try{for(var a,o=t.list[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var n=a.value;n.remark&&(n.remarkLength=t.strlen(n.remark))}}catch(u){i=!0,s=u}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}t.member=e.data.mall_members;var h={level:0,id:0,name:e.data.general_user_text?e.data.general_user_text:"普通用户"};t.member.unshift(h)}})},onReachBottom:function(){this.over||(this.page++,this.threeRequest(this.active))},methods:{toLook:function(t){this.remarkTextarea=!0,this.look=!0,this.remark=t.remark},strlen:function(t){for(var e=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i>=1&&i<=126||65376<=i&&i<=65439?e++:e+=2}return e},request:function(){var t=c(i.default.mark(function t(e){var r,s,a;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.url,s=e.data,t.next=3,this.$request({url:r,data:s});case 3:if(a=t.sent,0!==a.code){t.next=11;break}if(!(a.data.list.length>0)){t.next=9;break}return t.abrupt("return",a.data);case 9:return this.over=!0,t.abrupt("return",!1);case 11:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),clearSearch:function(){this.keyword="",this.keywordSearch()},chooseMember:function(t){this.memberLevel=t},toChangeInfo:function(t){this.dialog=!this.dialog,this.changeRemark=!1,this.remarkTextarea=!1,this.dialogChoose=!0,this.changeMember=!1,this.remark_name=null,this.rechargeItem=t||{}},toChangeRemark:function(t){this.dialogChoose=!1,1==t?(this.changeRemark=!0,this.remark_name=this.rechargeItem.remark_name):(this.remarkTextarea=!0,this.remark=this.rechargeItem.remark)},toChangeMember:function(){this.dialogChoose=!1,this.member.length>0?(this.changeMember=!0,this.memberLevel=this.rechargeItem.member_level):this.error=!0},close:function(){this.error=!1,this.dialog=!1},toLevel:function(){var e=this;this.$request({url:this.$api.app_admin.level,method:"post",data:{id:this.rechargeItem.user_id,member_level:this.memberLevel}}).then(function(r){0===r.code?(e.toChangeInfo(),e.setActive(0)):t.showToast({title:r.msg,icon:"none",duration:1e3})})},toRemark:function(){var e=this;this.$request({url:this.$api.app_admin.remark,method:"post",data:{id:this.rechargeItem.user_id,remark:this.remark}}).then(function(r){0===r.code?(e.rechargeItem.remark=e.remark,e.rechargeItem.remarkLength=e.strlen(e.rechargeItem.remark),e.toChangeInfo()):t.showToast({title:r.msg,icon:"none",duration:1e3})})},toRemarkName:function(){var e=this;this.$request({url:this.$api.app_admin.remarkName,method:"post",data:{id:this.rechargeItem.user_id,remark_name:this.remark_name}}).then(function(r){0===r.code?(e.rechargeItem.remark_name=e.remark_name,e.toChangeInfo()):t.showToast({title:r.msg,icon:"none",duration:1e3})})},setSearch:function(){this.search=!1},setActive:function(t){this.list=[],this.page=1,this.over=!1,this.keyword="",this.sort=0,this.threeRequest(t),this.active=t,this.search=!0},threeRequest:function(t){var e=this;0===t?this.request({url:this.$api.app_admin.user,data:{page:this.page,status:"",keyword:this.keyword}}).then(function(t){if(!1!==t){e.list=[].concat(a(e.list),a(t.list));var r=!0,i=!1,s=void 0;try{for(var o,n=e.list[Symbol.iterator]();!(r=(o=n.next()).done);r=!0){var h=o.value;h.remark&&(h.remarkLength=e.strlen(h.remark))}}catch(u){i=!0,s=u}finally{try{r||null==n.return||n.return()}finally{if(i)throw s}}}}):1===t?this.request({url:this.$api.app_admin.share,data:{page:this.page,status:1,keyword:this.keyword,sort:this.sort}}).then(function(t){!1!==t&&(e.list=[].concat(a(e.list),a(t.list)))}):2===t&&this.request({url:this.$api.app_admin.clerk,data:{page:this.page,status:"",keyword:this.keyword,sort:this.sort}}).then(function(t){!1!==t&&(e.list=[].concat(a(e.list),a(t.list)),e.storeList=t.store_list)})},inputBlur:function(){var t=this;setTimeout(function(e){t.getFocus=!1,""===t.keyword&&(t.search=!0)},300)},setRechargeDeduction:function(t,e){this.rechargeItem=t,this.rechargeBool=!0,this.rechargeDeduction=e},activeRecharge:function(t){var e=this;e.rechargeStatus=t,e.num=null,e.placeholder=0===t?"积分":"余额"},checkRecharge:function(t){var e=this;if(1===e.rechargeStatus){var r=(+t.detail.value).toFixed(2);setTimeout(function(){e.num=Number(r)})}},clearStatus:function(){this.rechargeStatus=0,this.rechargeItem={},this.rechargeBool=!1,this.rechargeDeduction=0,this.num=null,this.remark=null},cancelRecharge:function(){this.rechargeBool=!1,this.clearStatus()},intergral:function(e,r){var i=this;this.$request({url:this.$api.app_admin.integral,method:"post",data:{user_id:this.rechargeItem.user_id,num:e,remark:this.remark?this.remark:"",pic_url:"",type:r}}).then(function(r){0===r.code?(1===i.rechargeDeduction?i.setList("integral",e,1):i.setList("integral",e,0),i.clearStatus()):1===r.code&&t.showToast({title:r.msg,image:"../image/mark.png"})})},balance:function(e,r){var i=this;this.$request({url:this.$api.app_admin.balance,method:"post",data:{user_id:this.rechargeItem.user_id,price:e,remark:this.remark?this.remark:"",pic_url:"",type:r}}).then(function(r){0===r.code?(1===i.rechargeDeduction?i.setList("balance",e,1):i.setList("balance",e,0),i.clearStatus()):1===r.code&&t.showToast({title:r.msg,image:"../image/mark.png"})})},setList:function(t,e,r){var i=this;this.list.map(function(s){s.user_id===i.rechargeItem.user_id&&(s[t]=0===r?Number(s[t])-e:Number(s[t])+e)})},confirmRecharge:function(){this.$utils.debounce(this.sureCharge,500,!0)},sureCharge:function(){isNaN(this.num)||(this.rechargeBool=!1,1===this.rechargeDeduction?0===this.rechargeStatus?this.intergral(Number(this.num),1):1===this.rechargeStatus&&this.balance(Number(this.num),1):0===this.rechargeDeduction&&(0===this.rechargeStatus?this.intergral(Number(this.num),0):1===this.rechargeStatus&&this.balance(Number(this.num),0)))},modifyStore:function(t){this.storeUser=t,this.storeItem=t.store[0];for(var e=0;e<this.storeList.length;e++)this.storeItem.id===this.storeList[e].id&&(this.storeIndex=e);this.modifyStoreBool=!0},pickerChange:function(t){this.storeIndex=t.detail.value[0]},dismissal:function(t){this.deleteObject=t,this.releaseBool=!0},determineStore:function(){var t=this;this.$request({url:this.$api.app_admin.clerk_edit,method:"post",data:{user_id:this.storeUser.user_id,store_id:this.storeList[this.storeIndex].id,id:this.storeUser.id}}).then(function(e){0===e.code&&t.$nextTick().then(function(){for(var e=0;e<t.list.length;e++)t.list[e].user.id===t.storeUser.user_id&&(t.list[e].store[0]=t.storeList[t.storeIndex],t.storeIndex=-1,t.storeUser={},t.modifyStoreBool=!1,t.storeItem={})})})},allSort:function(e){var r=this;this.over=!1,this.page=1,t.pageScrollTo({scrollTop:0}),0===e?1===this.sort?this.sort=2:this.sort=1:1===e&&(3===this.sort?this.sort=4:this.sort=3);var i=void 0;switch(this.sort){case 1:i="price_count_asc";break;case 2:i="price_count_desc";break;case 3:i="order_count_asc";break;case 4:i="order_count_desc";break;default:i=""}this.$request({url:this.$api.app_admin.user,data:{page:1,keyword:this.keyword,status:"",sort:i}}).then(function(t){0===t.code&&(r.list=t.data.list)})},setSort:function(e){var r=this;switch(this.over=!1,this.page=1,t.pageScrollTo({scrollTop:0}),e){case 0:1===this.sort?this.sort=2:this.sort=1;break;case 1:3===this.sort?this.sort=4:this.sort=3;break;case 2:5===this.sort?this.sort=6:this.sort=5;break}this.$request({url:this.$api.app_admin.clerk,data:{page:1,keyword:this.keyword,status:"",sort:this.sort}}).then(function(t){0===t.code&&(r.list=t.data.list)})},cancelUndelete:function(){this.releaseBool=!1,this.deleteObject={}},sureDeletion:function(){var t=this;this.$request({url:this.$api.app_admin.clerk_destroy,method:"post",data:{id:this.deleteObject.id}}).then(function(e){0===e.code&&(t.list.map(function(e,r){e.id===t.deleteObject.id&&t.$delete(t.list,r)}),t.deleteObject={},t.releaseBool=!1)})},keywordSearch:function(){var t=this;this.page=1,this.over=!1,0===this.active?this.request({url:this.$api.app_admin.user,data:{page:this.page,status:"",keyword:this.keyword}}).then(function(e){if(!1===e)return t.list=[];t.list=e.list;var r=!0,i=!1,s=void 0;try{for(var a,o=t.list[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var n=a.value;n.remark&&(n.remarkLength=t.strlen(n.remark))}}catch(h){i=!0,s=h}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}}):1===this.active?this.request({url:this.$api.app_admin.share,data:{page:this.page,status:1,keyword:this.keyword}}).then(function(e){if(!1===e)return t.list=[];t.list=e.list}):2===this.active&&this.request({url:this.$api.app_admin.clerk,data:{page:this.page,status:"",keyword:this.keyword,sort:this.sort}}).then(function(e){if(!1===e)return t.list=[];t.list=e.list})},distributorSort:function(e){var r=this;this.over=!1,this.page=1,t.pageScrollTo({scrollTop:0}),0===e?1===this.sort?this.sort=2:this.sort=1:3===this.sort?this.sort=4:this.sort=3,this.$request({url:this.$api.app_admin.share,data:{page:1,keyword:this.keyword,status:1,sort:this.sort}}).then(function(t){0===t.code&&(r.list=t.data.list)})}}};e.default=l}).call(this,r("c11b")["default"])},e91d:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.getFocus=!0},t.e1=function(e){t.remarkTextarea=!1,t.remark="",t.look=!1},t.e2=function(e){t.remarkTextarea=!1,t.remark="",t.dialog=!1},t.e3=function(e){e.stopPropagation(),t.modifyStoreBool=!1},t.e4=function(e){t.modifyStoreBool=!1})},s=[];r.d(e,"a",function(){return i}),r.d(e,"b",function(){return s})},fb4d:function(t,e,r){}},[["d1b8","common/runtime","common/vendor"]]]);