(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-diy-goods-list/app-goods-timer"],{"2c94":function(e,t,i){"use strict";i.r(t);var a=i("5056"),n=i("b613");for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);i("fb55");var s=i("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"d5b8b252",null);t["default"]=c.exports},5056:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"9c71":function(e,t,i){},a79c:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"app-goods-timer",props:{startDateTime:String,endDateTime:String,listStyle:{type:Number,default:function(){return-1}},sign:String,pageHide:Boolean,theme:String},data:function(){return{timeInterval:null,timer:null,timerStr:null}},computed:{time:function(){return{startDateTime:this.startDateTime,endDateTime:this.endDateTime,pageHide:this.pageHide}},listClass:function(){var e="";switch(this.listStyle){case 1:e="".concat(this.theme,"-m-back ").concat(this.theme);break;case 2:e="".concat(this.theme,"-m-back ").concat(this.theme," main-center");break;default:e="";break}return e},signName:function(){var e="";switch(this.sign){case"miaosha":e="秒杀";break;case"bargain":e="砍价";break;case"lottery":e="抽奖";break;case"advance":e="预售";break;case"flash-sale":e="限时抢购";break}return e}},methods:{timing:function(e,t){var i=null,a=this.$utils.timeDifference((new Date).getTime(),new Date(e).getTime());a&&(this.timer="距开始 ",i=(a["d"]>0?a["d"]+"天":"")+a["h"]+":"+a["m"]+":"+a["s"]);var n=null;i||(n=this.$utils.timeDifference((new Date).getTime(),new Date(t).getTime()),n&&(this.timer="距结束 ",i=(n["d"]>0?n["d"]+"天":"")+n["h"]+":"+n["m"]+":"+n["s"])),i||(this.timer="活动已结束",clearInterval(this.timeInterval)),this.timerStr=i}},watch:{time:{handler:function(){var e=this;if(this.pageHide)clearInterval(this.timeInterval);else{var t=this.startDateTime,i=this.endDateTime;t=t.replace(/-/g,"/"),i=i.replace(/-/g,"/"),this.timing(t,i),this.timeInterval=setInterval(function(){e.timing(t,i)},1e3)}},immediate:!0}},beforeDestroy:function(){clearInterval(this.timeInterval)}};t.default=a},b613:function(e,t,i){"use strict";i.r(t);var a=i("a79c"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=n.a},fb55:function(e,t,i){"use strict";var a=i("9c71"),n=i.n(a);n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-diy-goods-list/app-goods-timer-create-component',
    {
        'components/page-component/app-diy-goods-list/app-goods-timer-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("2c94"))
        })
    },
    [['components/page-component/app-diy-goods-list/app-goods-timer-create-component']]
]);                
