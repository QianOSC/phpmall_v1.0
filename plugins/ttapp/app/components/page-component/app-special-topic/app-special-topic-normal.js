(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-special-topic/app-special-topic-normal"],{"26a4":function(t,n,e){"use strict";e.r(n);var c=e("c107"),i=e("a70e");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("798d");var u=e("2877"),a=Object(u["a"])(i["default"],c["a"],c["b"],!1,null,"aeb5f78c",null);n["default"]=a.exports},"3eec":function(t,n,e){},"59ca":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={name:"app-special-topic",props:{topic_list:{type:Array,default:function(){return[]}},count:{type:Number,default:function(){return 2}},icon:String,logo_1:String,logo_2:String},computed:{newDataList:function(){if(2===this.count){for(var t=[],n=0;n<Math.ceil(this.topic_list.length/this.count);n++)t.push(this.topic_list.slice(n*this.count,(n+1)*this.count));return t}}}};n.default=c},"798d":function(t,n,e){"use strict";var c=e("3eec"),i=e.n(c);i.a},a70e:function(t,n,e){"use strict";e.r(n);var c=e("59ca"),i=e.n(c);for(var o in c)"default"!==o&&function(t){e.d(n,t,function(){return c[t]})}(o);n["default"]=i.a},c107:function(t,n,e){"use strict";var c=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return c}),e.d(n,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-special-topic/app-special-topic-normal-create-component',
    {
        'components/page-component/app-special-topic/app-special-topic-normal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("26a4"))
        })
    },
    [['components/page-component/app-special-topic/app-special-topic-normal-create-component']]
]);                
