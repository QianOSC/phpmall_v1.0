(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-diy-form/app-diy-form"],{2821:function(t,e,i){"use strict";i.r(e);var a=i("87eb"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"7d93":function(t,e,i){"use strict";i.r(e);var a=i("d90b"),n=i("2821");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("b522");var u=i("2877"),l=Object(u["a"])(n["default"],a["a"],a["b"],!1,null,"3cdab4d2",null);e["default"]=l.exports},"87eb":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return i.e("components/basic-component/app-datetime-picker/app-datetime-picker").then(i.bind(null,"3e52"))},n=function(){return i.e("components/basic-component/app-radio/app-radio").then(i.bind(null,"3ac8"))},o=function(){return i.e("components/basic-component/app-radio/app-radio-group").then(i.bind(null,"bf87"))},u=function(){return i.e("components/page-component/app-diy-form/app-diy-form-checkbox-group").then(i.bind(null,"274d"))},l=function(){return i.e("components/basic-component/app-upload-image/app-upload-image").then(i.bind(null,"798e"))},s=function(){return i.e("components/basic-component/app-textarea/app-textarea").then(i.bind(null,"47cb"))},r={name:"app-diy-form",components:{AppTextarea:s,AppUploadImage:l,AppDiyFormCheckboxGroup:u,AppRadioGroup:o,AppRadio:n,AppDatetimePicker:a},props:{sign:{default:null},datePadding:{type:String,default:"0 24rpx"},title:{type:String,default:null},backgroundColor:{default:"#ffffff"},backgroundImage:{default:null},backgroundPosition:{default:"center"},backgroundWidth:{default:100},backgroundHeight:{default:100},backgroundRepeat:{default:"no-repeat"},marginTop:{default:0},marginBottom:{default:0},paddingTop:{default:0},paddingBottom:{default:0},list:{type:Array,default:[]},showRequiredIcon:{type:Boolean,default:!1},itemPaddingX:{default:24},itemMarginY:{default:0},itemHeight:{type:Number,default:88},showItemBorder:{default:!0},labelPosition:{default:"left"},labelColor:{default:"#666666"},labelTextAlign:{default:"right"},showInputBorder:{type:Boolean,default:!1},inputBackground:{default:"#ffffff"},inputBorderColor:{default:"#c0c4cc"},inputTextColor:{default:"#666666"},inputPlaceholderColor:{default:"#bbbbbb"},inputRadius:{default:0},showSubmit:{type:Boolean,default:!1},submitUrl:{type:String,default:null},submitBtnText:{default:"提交"},submitBtnHeight:{default:80},submitBtnPadding:{default:24},submitBtnMargin:{default:40},submitBtnRadius:{default:40},submitBtnBackground:{default:"#ff4544"},submitBtnBorderColor:{default:"#ff4544"},submitBtnTextColor:{default:"#ffffff"},showScrollBtn:{default:!1},labelFs28:{default:!1},marginColor:{default:"#ffffff"},selectBoxColor:{default:"#ff4544"}},data:function(){var t=[];for(var e in this.list){var i=this.list[e];if("undefined"===typeof i.default&&(i.default=null),"undefined"!==typeof i.value&&null!==i.value&&""!==i.value||(i.value=i.default),i.hint=i.hint||"","radio"===i.key||"checkbox"===i.key)for(var a in i.list||(i.list=[]),i.list)i.list[a].value&&!1!==i.list[a].value&&"false"!==i.list[a].value?i.list[a].value=!0:i.list[a].value=!1;"img_upload"!==i.key||2!==i.img_type&&"2"!==i.img_type||i.value||(i.value=["",""]),i.key,t[e]=i}return{myList:t,randomString:"",validateResult:{hasError:!1,errors:[]},showAllItems:!this.showScrollBtn}},computed:{uploadShowImage:function(){return function(t){return Array.isArray(t.value)?t.value:t.value?[t.value]:null}},itemClass:function(){return"left"===this.labelPosition?"label-left dir-left-nowrap cross-top":"inset"===this.labelPosition?"label-inset dir-left-nowrap cross-top":"top"===this.labelPosition?"label-top":void 0},getDateTimeTextPosition:function(){return"top"===this.labelPosition?"left":"right"},getInputPaddingLeft:function(){return"top"===this.labelPosition?this.showInputBorder?24:0:24}},created:function(){this.validate(),this.outputData()},methods:{textInput:function(){this.outputData()},datetimeChange:function(){this.outputData()},checkChange:function(){var t=this;setTimeout(function(){t.outputData()},10)},handleImageUpload:function(t){var e=parseInt(t.sign);1===t.imageList.length?this.myList[e].value=t.imageList[0]:t.imageList.length>0?this.myList[e].value=t.imageList:this.myList[e].value="",this.outputData()},handleUserIdFrontUpload:function(t){var e=parseInt(t.sign);t.imageList.length>0?this.myList[e].value[0]=t.imageList[0]:this.myList[e].value[0]="",this.outputData()},handleUserIdBackUpload:function(t){var e=parseInt(t.sign);t.imageList.length>0?this.myList[e].value[1]=t.imageList[0]:this.myList[e].value[1]="",this.outputData()},validate:function(){for(var t in this.validateResult={hasError:!1,errors:[]},this.myList){var e=this.myList[t];if(1===e.is_required||"1"===e.is_required){if("undefined"===typeof e.value||null===e.value||""===e.value){this.validateResult.hasError=!0,this.validateResult.errors.push({index:t,msg:'"'.concat(e.name,'"不能为空。')});continue}if(e.img_type&&2===parseInt(e.img_type)){if(!e.value||!e.value.length){this.validateResult.hasError=!0,this.validateResult.errors.push({index:t,msg:'"'.concat(e.name,'"不能为空。')});continue}var i=!1;for(var a in e.value)if(null===e.value[a]||""===e.value[a]){i=!0;break}if(i){this.validateResult.hasError=!0,this.validateResult.errors.push({index:t,msg:'"'.concat(e.name,'"不能为空。')});continue}}}}this.$emit("validate",this.validateResult,this.sign)},outputData:function(){for(var t in this.validate(),this.myList)this.myList[t].label=this.myList[t].name,this.myList[t].required=this.myList[t].is_required;this.$emit("input",this.myList,this.sign)},submit:function(){var e=this;this.outputData(),this.validateResult.hasError&&this.validateResult.errors?t.showModal({title:"提示",content:this.validateResult.errors[0].msg,showCancel:!1}):(t.showLoading({mask:!0,title:"正在提交..."}),this.$request({url:this.submitUrl?this.submitUrl:this.$api.diy.page_store,method:"post",data:{form_data:JSON.stringify(this.myList)}}).then(function(i){t.hideLoading(),0===i.code?(setTimeout(function(){var t=e.myList;for(var i in t)t[i].value=t[i].default;e.myList=[],setTimeout(function(){e.myList=t},0)},300),t.showModal({title:"提示",content:i.msg||"提交成功",showCancel:!1})):t.showModal({title:"提示",content:i.msg||"提交失败",showCancel:!1})}).catch(function(){t.hideLoading()}))}}};e.default=r}).call(this,i("5486")["default"])},b522:function(t,e,i){"use strict";var a=i("e4fa"),n=i.n(a);n.a},d90b:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.myList,function(e,i){var a=t.uploadShowImage(e);return{$orig:t.__get_orig(e),m0:a}}));t._isMounted||(t.e0=function(e){t.showAllItems=!t.showAllItems}),t.$mp.data=Object.assign({},{$root:{l0:i}})},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},e4fa:function(t,e,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-diy-form/app-diy-form-create-component',
    {
        'components/page-component/app-diy-form/app-diy-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("7d93"))
        })
    },
    [['components/page-component/app-diy-form/app-diy-form-create-component']]
]);                
