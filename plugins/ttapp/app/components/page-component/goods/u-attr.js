(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/u-attr"],{"0b4f":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},2312:function(t,i,e){},5610:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=function(){return e.e("components/basic-component/u-popup/u-popup").then(e.bind(null,"d55a"))},o=function(){return e.e("components/page-component/goods/app-price").then(e.bind(null,"6c9f"))},c=function(){return e.e("components/page-component/app-member-mark/app-member-mark").then(e.bind(null,"1ed7"))},r={name:"u-attr",props:{value:{type:Boolean},goods:{type:Object},themeObject:{type:Object},checked:{type:Object},is_show_price:{type:Boolean,default:!0},is_show_left:{type:Boolean,default:!0},is_must_left:{type:Boolean,default:!1},is_show_right:{type:Boolean,default:!0},leftText:{type:String,default:"加入购物车"},rightText:{type:String,default:"立即购买"},leftFunc:{type:Boolean},rightFunc:{type:Boolean},sign:{type:String},again:{type:Number}},data:function(){return{newValue:!1,picUrl:null,newGroup:[],number:1}},methods:{close:function(){this.$emit("input",!1)},turnOn:function(){this.$emit("input",!0)},inArray:function(t,i){return i.some(function(i){return t===i})},identifier:function(t,i,e){var n=this;t.forEach(function(t){t.attr_list.forEach(function(o){var c="".concat(t.attr_group_id,"-").concat(o.attr_id);n.inArray(c,i)&&!n.inArray(c,e)?o.num_0=!0:o.num_0=!1})})},selectCheck:function(t,i,e){var n=this;t.forEach(function(t){var o=[],c=0;t.attr_list.forEach(function(t){var i="".concat(t.attr_group_id,"-").concat(t.attr_id);n.inArray(i,e)||(c+=1,o.push(i))}),0===t.stock&&c<=1&&Array.prototype.push.apply(i,o),0===c&&n.$emit("check",t,1)})},storeAttr:function(t,i,e){var n=this;if(!0!==e){var o=this.newGroup,c=this.copyAttr,r=[];o.forEach(function(e,o){var c=e.attr_list;c.forEach(function(c){e.attr_group_id===i&&(c.attr_id===t?!0===c.select?c.select=!1:c.select=!0:c.select=!1),!0===c.select&&(r.push("".concat(e.attr_group_id,"-").concat(c.attr_id)),0===o&&(n.picUrl=c.pic_url))})});var s=[];this.selectCheck(c,s,r),this.$nextTick(function(){n.number>n.stock&&(n.number=n.stock)}),this.identifier(o,s,r),r.length!==o.length&&this.$emit("check",null,1)}},firstSelect:function(){var t=this;if(this.copyGroup&&this.copyAttr){var i=this.copyGroup,e=this.copyAttr,n=i.length,o=[];e.forEach(function(e){var c=e.attr_list;c.forEach(function(c){var r=c.attr_group_id;i.forEach(function(s){if(r===s.attr_group_id){var u=s.attr_list;u.forEach(function(r){r.attr_id===c.attr_id&&e.stock>0&&n>0&&(r.select=!0,o.push("".concat(s.attr_group_id,"-").concat(r.attr_id)),n===i.length&&(t.picUrl=r.pic_url),n--)})}})})});var c=[];this.selectCheck(e,c,o),this.identifier(i,c,o),this.newGroup=i}},numberBlur:function(i){var e=parseInt(i.detail.value);e||(e=1),e>this.stock&&(e=this.stock,t.showToast({title:"库存不足",icon:"none"})),this.number=e},numberSub:function(){var t=this.number;t>1&&(t--,this.number=t)},numberAdd:function(){var i=this.number;i++,i>this.stock&&(i=this.stock,t.showToast({title:"库存不足",icon:"none"})),this.number=i},leftSubmit:function(){!0===this.leftFunc?this.$emit("leftFunc",this.number):this.cart(),this.close()},rightSubmit:function(){var i=[];if(!this.checked)return t.showToast({title:"请先选规格",icon:"none"}),!1;this.checked.attr_list.forEach(function(t){i.push({attr_id:t.attr_id,attr_group_id:t.attr_group_id})});var e={mch_id:this.goods.mch_id?this.goods.mch_id:0,goods_list:[{id:this.goods.id,attrs:i,num:this.number,cat_id:0,goods_attr_id:this.checked.id}]};!0===this.rightFunc?this.$emit("rightFunc",e):this.shop(e),this.close()},shop:function(i){t.navigateTo({url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify([i]))})},cart:function(){var i=this;if(!this.checked)return t.showToast({title:"请先选规格",icon:"none"}),!1;"ecard"!==this.goods.type&&this.$request({url:this.$api.cart.add,method:"post",data:{goods_id:this.checked.goods_id,attr:this.checked.id,num:this.number}}).then(function(e){0===e.code?(t.showToast({title:e.msg,icon:"none"}),i.$emit("cart",i.checked,i.number),i.close()):t.showToast({title:e.msg,icon:"none",duration:2500})})},clickImg:function(i){t.previewImage({current:0,urls:[i]})}},components:{uPopup:n,appPrice:o,appMemberMark:c},computed:{imgUrl:function(){return this.picUrl?this.picUrl:this.goods?this.goods.cover_pic:""},stock:function(){return this.$validation.isEmpty(this.checked)?this.$validation.isEmpty(this.goods)?void 0:this.goods.goods_num:this.checked.stock},sellPrice:function(){return this.$validation.isEmpty(this.checked)?this.$validation.isEmpty(this.goods)?void 0:this.goods.hasOwnProperty("price_min")?this.goods.price_min:this.goods.price:1===this.goods.level_show?this.checked.price_member:this.checked.price},copyGroup:function(){if(this.goods){for(var t=this.$utils.deepClone(this.goods.attr_groups),i=0;i<t.length;i++)t[i].attr_list.forEach(function(t){t.select=!1,t.num_0=!1});return t}},copyAttr:function(){if(this.goods)return this.$utils.deepClone(this.goods.attr)},cartClass:function(){return"a"===this.themeObject.theme||"b"===this.themeObject.theme||"f"===this.themeObject.theme?this.themeObject.sBtn+" u-btn u-btn-color ":this.themeObject.sBtn+" u-btn  "+this.themeObject.color}},watch:{value:{handler:function(t){this.newValue=t,!1!==t&&this.$validation.isEmpty(this.checked)&&this.$utils.throttle(this.firstSelect,800)},immediate:!0},number:{handler:function(t){this.$emit("check",this.checked,t)}},again:{handler:function(){this.firstSelect()}}}};i.default=r}).call(this,e("f266")["default"])},b4bc:function(t,i,e){"use strict";e.r(i);var n=e("0b4f"),o=e("f0668");for(var c in o)"default"!==c&&function(t){e.d(i,t,function(){return o[t]})}(c);e("cc77");var r=e("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"bd81c33e",null);i["default"]=s.exports},cc77:function(t,i,e){"use strict";var n=e("2312"),o=e.n(n);o.a},f0668:function(t,i,e){"use strict";e.r(i);var n=e("5610"),o=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,function(){return n[t]})}(c);i["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/u-attr-create-component',
    {
        'components/page-component/goods/u-attr-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("b4bc"))
        })
    },
    [['components/page-component/goods/u-attr-create-component']]
]);                
