(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/u-index-plugins/u-flash-sale"],{"06f4":function(t,e,i){"use strict";i.r(e);var n=i("df7a"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},"076b":function(t,e,i){},"7c70":function(t,e,i){"use strict";var n=i("076b"),s=i.n(n);s.a},"9cb0":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.goodsList,function(e,i){var n=t.isShowStock(e),s=t.isShowMemPrice(e),a=t.isShowVip(e);return{$orig:t.__get_orig(e),m0:n,m1:s,m2:a}}));t.$mp.data=Object.assign({},{$root:{l0:i}})},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},df7a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(i,!0).forEach(function(e){r(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o=function(){return i.e("components/page-component/u-index-plugins/u-index-plugins").then(i.bind(null,"03c5"))},u=function(){return i.e("components/page-component/u-goods-list/u-ordinary-list").then(i.bind(null,"24ba"))},c={name:"u-flash-sale",props:{theme:Object,index:Number,page_id:Number,is_required:Boolean,appImg:{type:Object,default:function(){return{plugins_out:""}}},appSetting:{type:Object,default:function(){return{is_show_stock:1,sell_out_pic:"",is_use_stock:1}}}},data:function(){return{newData:{},tempList:[],goodsList:[],time:0,time_str:{day:"00",hou:"00",min:"00",sec:"00"},timing:null,style:"1",goods_num:20}},components:{uIndexPlugins:o,uOrdinaryList:u},computed:a({},(0,n.mapGetters)("mallConfig",{getTheme:"getTheme"}),{copyList:function(){return this.newData.list}}),methods:{router:function(t){this.$emit("router",t)},isShowMemPrice:function(t){return 1===t.is_level&&1!==t.is_negotiable?1:0},isShowVip:function(t){return t.vip_card_appoint&&t.vip_card_appoint.discount>0&&1!==t.is_negotiable?1:0},isShowStock:function(t){return 1===this.appSetting.is_show_stock&&0===t.goods_stock?1:0},loadData:function(){var t=this,e={type:0===this.page_id?"mall":"diy",key:"flash_sale",page_id:this.page_id,index:this.index};this.goods_num&&(e.goods_num=this.goods_num),this.$request({url:this.$api.index.extra,data:e}).then(function(e){0===e.code&&(t.newData=e.data,t.newData.activity?(t.newData.str="结束",t.set_time(t.newData.activity.end_at)):(t.newData.str="开始",t.set_time(t.newData.next_activity.start_at)))})},cloneData:function(t){return JSON.parse(JSON.stringify(t))},splitData:function(){var t=this;if(this.tempList.length){var e=this.tempList[0];this.goodsList.push(e),this.tempList.splice(0,1),this.tempList.length&&(this.timeOut=setTimeout(function(){t.splitData()},200))}},set_time:function(t){var e=this;clearInterval(this.timing);var i=new Date(t.replace(/-/g,"/"));this.now_time(i),this.timing=setInterval(function(){e.now_time(i)},1e3)},now_time:function(t){var e=t.getTime()-(new Date).getTime();e<0&&clearInterval(this.timing);var i=parseInt(e/1e3/60/60/24),n=parseInt(e/1e3/60/60%24),s=parseInt(e/1e3/60%60),a=parseInt(e/1e3%60);this.time_str.day=i<10?"0"+i:i,this.time_str.hou=n<10?"0"+n:n,this.time_str.min=s<10?"0"+s:s,this.time_str.sec=a<10?"0"+a:a}},mounted:function(){var t=this.$storage.getStorageSync("INDEX_MALL");this.style=t.home_pages[this.index].style,this.goods_num=t.home_pages[this.index].goods_num,this.loadData()},watch:{copyList:{handler:function(t){this.$validation.empty(t)||(this.tempList=this.cloneData(t),this.splitData())}},pageHide:{handler:function(t){t?clearInterval(this.timing):this.newData.activity?(this.newData.str="结束",this.set_time(this.newData.activity.end_at)):this.newData.next_activity&&(this.newData.str="开始",this.set_time(this.newData.next_activity.start_at))},immediate:!0}},destroyed:function(){clearTimeout(this.time)},beforeDestroy:function(){clearInterval(this.timing)}};e.default=c},ed45:function(t,e,i){"use strict";i.r(e);var n=i("9cb0"),s=i("06f4");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("7c70");var r=i("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"8eb0c250",null);e["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/u-index-plugins/u-flash-sale-create-component',
    {
        'components/page-component/u-index-plugins/u-flash-sale-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("ed45"))
        })
    },
    [['components/page-component/u-index-plugins/u-flash-sale-create-component']]
]);                
