(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-special-topic/app-special-topic-list"],{"191f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},"1bf2":function(t,e,n){"use strict";n.r(e);var i=n("191f"),u=n("8fce");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n("e566");var r=n("2877"),o=Object(r["a"])(u["default"],i["a"],i["b"],!1,null,"7c1c6fcc",null);e["default"]=o.exports},"8fce":function(t,e,n){"use strict";n.r(e);var i=n("a687"),u=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=u.a},a687:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{catShow:{type:Boolean,default:function(){return!0}},list:{type:Array,default:function(){return[]}},topicList:{type:Array,default:function(){return[]}},theme:String},data:function(){return{tabCurrentIndex:0,touchStartX:0,touchStartY:0,time:0,interval:"",touchMoveX:0,touchMoveY:0}},methods:{tabClick:function(t){this.tabCurrentIndex=t},touchStart:function(t){var e=this;this.touchStartX=t.touches[0].pageX,this.touchStartY=t.touches[0].pageY,this.interval=setInterval(function(){e.time++},100)},touchmove:function(t){this.touchMoveX=t.touches[0].pageX,this.touchMoveY=t.touches[0].pageY},touchend:function(){var t=this.touchMoveX-this.touchStartX,e=this.touchMoveY-this.touchStartY;-1===Math.sign(t)&&(t*=-1),-1===Math.sign(e)&&(e*=-1),t>=e&&(this.touchMoveX-this.touchStartX<=-20&&this.time<10&&(0===this.tabCurrentIndex?this.tabCurrentIndex=this.list.length-1:this.tabCurrentIndex-=1),this.touchMoveX-this.touchStartX>=20&&this.time<10&&(this.tabCurrentIndex===this.list.length-1?this.tabCurrentIndex=0:this.tabCurrentIndex+=1)),clearInterval(this.interval),this.time=0}}};e.default=i},afec:function(t,e,n){},e566:function(t,e,n){"use strict";var i=n("afec"),u=n.n(i);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-special-topic/app-special-topic-list-create-component',
    {
        'components/page-component/app-special-topic/app-special-topic-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("1bf2"))
        })
    },
    [['components/page-component/app-special-topic/app-special-topic-list-create-component']]
]);                
