;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/order-submit/app-submit-checkbox"],{"14a0":function(e,t,n){},"25a1":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c})},"2df9":function(e,t,n){"use strict";var i=n("14a0"),c=n.n(i);c.a},"4e22":function(e,t,n){"use strict";n.r(t);var i=n("25a1"),c=n("ae80");for(var a in c)"default"!==a&&function(e){n.d(t,e,function(){return c[e]})}(a);n("2df9");var r=n("2877"),u=Object(r["a"])(c["default"],i["a"],i["b"],!1,null,"01c28c11",null);t["default"]=u.exports},ae80:function(e,t,n){"use strict";n.r(t);var i=n("e1a5"),c=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=c.a},e1a5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={name:"app-submit-checkbox",props:{value:{default:!0},activeValue:{default:!0},inactiveValue:{default:!1},width:{default:40},height:{default:40},sign:{default:null},borderColor:{default:"#cccccc"},round:{default:!1},theme:{default:null}},data:function(){return{iValue:this.value,iTheme:this.theme}},computed:a({},(0,i.mapGetters)("mallConfig",{defaultTheme:"getTheme"}),{cTheme:function(){return this.iTheme?this.iTheme:this.defaultTheme},themeBgClass:function(){return this.cTheme.indexOf("gift")>=0?"".concat(this.cTheme," ").concat(this.cTheme,"-background"):"".concat(this.cTheme," ").concat(this.cTheme,"-m-back")},themeBorderClass:function(){return this.cTheme.indexOf("gift")>=0?"".concat(this.cTheme," ").concat(this.cTheme,"-background"):"".concat(this.cTheme," ").concat(this.cTheme,"-m-back")}}),watch:{value:function(e){this.iValue=e},theme:function(e){this.iTheme=e}},methods:{handleClick:function(){this.iValue=this.iValue===this.activeValue?this.inactiveValue:this.activeValue,this.$emit("input",this.iValue,this.sign),this.$emit("change",this.iValue,this.sign)}}};t.default=u}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'pages/order-submit/app-submit-checkbox-create-component',
    {
        'pages/order-submit/app-submit-checkbox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("4e22"))
        })
    },
    [['pages/order-submit/app-submit-checkbox-create-component']]
]);                
