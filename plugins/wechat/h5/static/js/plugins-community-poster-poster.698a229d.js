(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-community-poster-poster"],{"17d6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach(function(e){n(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r={name:"goods",data:function(){return{styleList:[{label:"样式一",value:1},{label:"样式二",value:2},{label:"样式三",value:3},{label:"样式四",value:4}],typeList:[],selectForm:null,config:{color:[],activity_poster_style:[]},address:"",info:{},activity:{},middleman:{},rpx:1,canvas:null,canvas2:null,ctx:null,activity_id:0,middleman_id:0}},computed:s({},(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,a.mapState)({community:function(t){return t.mallConfig.__wxapp_img.community}})),onLoad:function(t){var e=this;e.activity_id=t.activity_id,e.middleman_id=t.middleman_id,uni.getSystemInfo({success:function(t){e.rpx=t.windowWidth/375}}),e.loadData()},methods:{drawText:function(t,e,i,a,o,s,n,r){var l=!1;0!=i.indexOf("我在")&&0!=i.indexOf("提货地址")||(l=!0);var c=i.split(""),d="",g=[];1==t&&(a*=2),e.font=a+"px sans-serif",e.fillStyle="#353535",e.textBaseline="middle";for(var v=0;v<c.length;v++)e.measureText(d).width<n||(g.push(d),d=""),d+=c[v];if(g.push(d),g.shift(),l||1!=t||(s+=20),g.length>2)for(var f=0;f<2;f++){r&&(e.textAlign="center");var u=g[f];void 0==u&&(u=""),1==f&&(u=u.substring(0,u.length-1)+"..."),"..."!==u&&e.fillText(u,o,s+(f+1)*a*1.2)}else for(f=0;f<g.length;f++)r&&(e.textAlign="center"),e.fillText(g[f],o,s+(f+1)*a*1.2)},fillRoundRect:function(t,e,i,a,o,s,n){if(2*s>a||2*s>o)return!1;t.save(),t.translate(e,i),this.drawRoundRectPath(t,a,o,s),t.fillStyle=n||"#000",t.fill(),t.restore()},strokeRoundRect:function(t,e,i,a,o,s,n,r){if(2*s>a||2*s>o)return!1;t.save(),t.translate(e,i),this.drawRoundRectPath(t,a,o,s),t.lineWidth=n||2,t.strokeStyle=r||"#000",t.stroke(),t.restore()},drawRoundRectPath:function(t,e,i,a){t.beginPath(0),t.arc(e-a,i-a,a,0,Math.PI/2),t.lineTo(a,i),t.arc(a,i-a,a,Math.PI/2,Math.PI),t.lineTo(0,a),t.arc(a,a,a,Math.PI,3*Math.PI/2),t.lineTo(e-a,0),t.arc(e-a,a,a,3*Math.PI/2,2*Math.PI),t.lineTo(e,i-a),t.closePath()},loadData:function(){var t=this;t.$request({url:t.$api.community.poster,data:{activity_id:t.activity_id,middleman_id:t.middleman_id}}).then(function(e){t.$hideLoading(),0===e.code?(t.config=e.data.config,t.info=e.data.info,t.middleman=e.data.middleman,t.activity=e.data.activity,t.activity.goods_list=t.activity.goods_list.slice(0,6),t.typeList=[{label:"纯色",value:1},{label:"背景图",value:2}],t.selectForm={color:t.config["color"][0],style:t.config["activity_poster_style"][0],type:2},setTimeout(function(){var e=uni.createSelectorQuery();e.select("#poster").fields({node:!0,size:!0}).exec(function(e){t.$showLoading({type:"global",text:"生成中..."}),t.activity.goods_list.forEach(function(e,i){uni.getImageInfo({src:e.cover_pic,success:function(a){e.cover=a.path,5!=i&&i!=t.activity.goods_list.length-1||(t.canvas=uni.createCanvasContext("poster"),t.normalCreated(t.canvas,.4),t.canvas2=uni.createCanvasContext("poster2"),t.normalCreated(t.canvas2,1))}})})})})):uni.showToast({title:e.msg,icon:"none"})})},changeStyle:function(t){var e=this;e.selectForm.style=t,setTimeout(function(){e.normalCreated(e.canvas,.4),e.normalCreated(e.canvas2,1)})},changeType:function(t){var e=this;e.selectForm.type=t,setTimeout(function(){e.normalCreated(e.canvas,.4),e.normalCreated(e.canvas2,1)})},changeColor:function(t){var e=this;e.selectForm.color=t,setTimeout(function(){e.normalCreated(e.canvas,.4),e.normalCreated(e.canvas2,1)})},submitSave:function(){var t=this;t.$showLoading({text:"正在保存图片"}),uni.canvasToTempFilePath({x:0,y:0,width:750,height:1334,destWidth:750,destHeight:1334,canvasId:"poster2",success:function(e){console.log(e),t.$request({url:t.$api.upload.file+"&name=base64",method:"post",data:{database:e.tempFilePath}}).then(function(e){0===e.code?(t.$utils.batchSave(e.data.url).then(function(){uni.showToast({title:"保存成功"})}),t.$hideLoading()):uni.showModal({title:"",content:e.msg,showCancel:!1})})},fail:function(t){console.log(t)}})},normalCreated:function(t,e){var i=this;i.$showLoading({type:"global",text:"生成中..."}),i.address=i.middleman.city+i.middleman.district,i.middleman.city!=i.middleman.province&&(i.address=i.middleman.province+i.address),1==i.selectForm.type?(t.fillStyle=i.selectForm.color,t.fillRect(0,0,750*e,1334*e),i.chooseNormalStyle(t,e)):uni.getImageInfo({src:i.config.image_bg,success:function(a){0==a.path.indexOf("http://")&&a.path.replace("http://","https://"),t.drawImage(a.path,0,0,750*e,1334*e),i.chooseNormalStyle(t,e)}})},chooseNormalStyle:function(t,e){var i,a,o,s,n,r,l,c,d,g,v,f,u,p,h,m,y=this,b="";1==y.selectForm.style?(i=78*e,a=133*e,o=97*e,s=13,n=195*e,r=130*e,l=480*e,c=370*e,d=132*e,g=1e3*e,v=33*e,f=64*e,u=1060*e,p=440*e,h=984*e,m=240*e,b=y.community.style1):2==y.selectForm.style?(i=80*e,a=810*e,o=97*e,s=13,n=197*e,r=807*e,l=480*e,c=180*e,d=430*e,g=985*e,v=33*e,f=360*e,u=1045*e,p=70*e,h=945*e,m=240*e,b=y.community.style2):3==y.selectForm.style?(i=80*e,a=164*e,o=97*e,s=13,n=200*e,r=161*e,l=480*e,c=310*e,d=430*e,g=1040*e,v=33*e,f=360*e,u=1100*e,p=70*e,h=1e3*e,m=240*e,b=y.community.style3):4==y.selectForm.style&&(i=56*e,a=124*e,o=97*e,s=13,n=192*e,r=121*e,l=480*e,c=464*e,d=430*e,g=1040*e,v=33*e,f=360*e,u=1100*e,p=70*e,h=1e3*e,m=240*e,b=y.community.style4),0==b.indexOf("http://")&&b.replace("http://","https://"),t.drawImage(b,0,0,750*e,1334*e),t.save(),t.beginPath(),t.arc(o/2+i,o/2+a,o/2,0,2*Math.PI,!1),t.strokeStyle="white",t.stroke(),t.clip();var x=y.info.avatar;0==x.indexOf("http://")&&x.replace("http://","https://"),t.drawImage(x,i,a,o,o),t.restore();var w="我在"+y.address+y.middleman.location+"发现了一个超划算的团购！";t.textAlign="left",1==e&&(l=350),y.drawText(e,t,w,s,n,r,l),y.drawNormalGoods(t,c,e);var A=1;1!=e&&(A=.26),y.drawNormalInfo(t,d,g,v,f,u,y.address,A),uni.getImageInfo({src:y.activity.qrcode,success:function(e){t.drawImage(e.path,p,h,m,m),t.draw()}})},drawNormalGoods:function(t,e,i){var a,o,s,n,r=this,l=0;if(1==r.activity.goods_list.length)0==r.activity.goods_list[0].cover.indexOf("http://")&&r.activity.goods_list[0].cover.replace("http://","https://"),t.drawImage(r.activity.goods_list[0].cover,195*i,e,360*i,360*i),n=1==i?350*i:590*i,r.drawText(i,t,r.activity.goods_list[0].name,14,370*i,e+360*i,n,!0),t.textAlign="center",t.font=1!=i?"14px sans-serif":"28px sans-serif",t.fillStyle="#ff4544",t.fillText("￥"+r.activity.goods_list[0].price,370*i,e+490*i),t.font=1!=i?"13px sans-serif":"26px sans-serif",t.fillStyle="#999999",t.fillText("￥"+r.activity.goods_list[0].original_price,370*i,e+520*i),o=15*(r.activity.goods_list[0].original_price.length+1)+30,a=375-o/2,t.fillRect(a*i,e+516*i,o*i,1),r.$hideLoading();else if(2==r.activity.goods_list.length){e+=15*i;for(var c=0;c<r.activity.goods_list.length;c++){s=1==l?395*i:65*i,r.strokeRoundRect(t,s,e,290*i,450*i,8*i,2*i,"#e5e5e5"),t.beginPath(),t.save();var d=266*i,g=8*i,v=10*i,f=e+2*i,u=s+2*i;t.lineWidth=1,t.strokeStyle="white",t.moveTo(u+v,f),t.lineTo(u+v+d,f),t.arcTo(u+2*v+d,f,u+2*v+d,f+v,g),t.lineTo(u+2*v+d,f+2*v+d),t.lineTo(u,f+d+2*v),t.lineTo(u,f+v),t.arcTo(u,f,u+v,f,g),t.closePath(),t.stroke(),t.clip(),0==r.activity.goods_list[l].cover.indexOf("http://")&&r.activity.goods_list[l].cover.replace("http://","https://"),t.drawImage(r.activity.goods_list[l].cover,s+2*i,e+2*i,286*i,286*i),t.restore(),r.drawText(i,t,r.activity.goods_list[l].name,12,s+145*i,e+280*i,256*i,!0),t.textAlign="center",t.font=1!=i?"13px sans-serif":"26px sans-serif",t.fillStyle="#ff4544",t.fillText("￥"+r.activity.goods_list[l].price,s+145*i,e+388*i),t.font=1!=i?"11px sans-serif":"22px sans-serif",t.fillStyle="#999999",t.fillText("￥"+r.activity.goods_list[l].original_price,s+145*i,e+418*i),o=14*(r.activity.goods_list[l].original_price.length+1)+20,t.textAlign="center",a=s+(145-o/2)*i,t.fillRect(a,e+414*i,o*i,2*i),l++,2==l&&r.$hideLoading()}}else if(3==r.activity.goods_list.length)for(c=0;c<r.activity.goods_list.length;c++){l>0&&(e+=182*i),0==r.activity.goods_list[l].cover.indexOf("http://")&&r.activity.goods_list[l].cover.replace("http://","https://"),t.drawImage(r.activity.goods_list[l].cover,65*i,e,150*i,150*i),t.beginPath(),t.save();var p=130*i,h=8*i,m=10*i,y=65*i;t.lineWidth=1,t.strokeStyle="white",t.moveTo(y+m,e),t.arcTo(y+2*m+p,e,y+2*m+p,e+m,h),t.arcTo(y+2*m+p,e+2*m+p,y+m+p,e+2*m+p,h),t.arcTo(y,e+p+2*m,y,e+p+m,h),t.arcTo(y,e,y+2*m,e,h),t.closePath(),t.stroke(),t.clip(),t.restore(),t.textAlign="left",r.drawText(i,t,r.activity.goods_list[l].name,13,239*i,e-15*i,350*i),t.font=1!=i?"13px sans-serif":"26px sans-serif",t.fillStyle="#ff4544",t.fillText("￥"+r.activity.goods_list[l].price,239*i,e+100*i),t.font=1!=i?"11px sans-serif":"22px sans-serif",t.fillStyle="#999999",t.fillText("￥"+r.activity.goods_list[l].original_price,239*i,e+137*i),o=15*(r.activity.goods_list[l].original_price.length+1)+12,a=239,t.fillRect(a*i,e+135*i,o*i,2*i),l++,3==l&&r.$hideLoading()}else if(4==r.activity.goods_list.length){e-=10*i;for(c=0;c<r.activity.goods_list.length;c++){l>0&&(e+=140*i),t.beginPath(),t.save();var b=100*i,x=8*i,w=10*i,A=65*i;t.lineWidth=1,t.strokeStyle="white",t.moveTo(A+w,e),t.arcTo(A+2*w+b,e,A+2*w+b,e+w,x),t.arcTo(A+2*w+b,e+2*w+b,A+w+b,e+2*w+b,x),t.arcTo(A,e+b+2*w,A,e+b+w,x),t.arcTo(A,e,A+2*w,e,x),t.closePath(),t.stroke(),t.clip(),0==r.activity.goods_list[l].cover.indexOf("http://")&&r.activity.goods_list[l].cover.replace("http://","https://"),t.drawImage(r.activity.goods_list[l].cover,65*i,e,120*i,120*i),t.restore(),t.textAlign="left",r.drawText(i,t,r.activity.goods_list[l].name,12,209*i,e-25*i,350*i),t.font=1!=i?"12px sans-serif":"24px sans-serif",t.fillStyle="#ff4544",t.fillText("￥"+r.activity.goods_list[l].price,209*i,e+80*i),t.font=1!=i?"10px sans-serif":"20px sans-serif",t.fillStyle="#999999",t.fillText("￥"+r.activity.goods_list[l].original_price,209*i,e+102*i),o=12*(r.activity.goods_list[l].original_price.length+1)+12,a=212,t.fillRect(a*i,e+100*i,o*i,2*i),l++,4==l&&r.$hideLoading()}}else if(r.activity.goods_list.length>4)for(c=0;c<r.activity.goods_list.length;c++){s=48*i,a=192,1!=l&&3!=l&&5!=l||(s=398*i,a=537),0==l?e+=20*i:2==l?e+=172*i:4==l&&(e+=172*i),t.beginPath(),t.save();var T=100*i,_=8*i,k=10*i;t.lineWidth=1,t.strokeStyle="white",t.moveTo(s+k,e),t.arcTo(s+2*k+T,e,s+2*k+T,e+k,_),t.arcTo(s+2*k+T,e+2*k+T,s+k+T,e+2*k+T,_),t.arcTo(s,e+T+2*k,s,e+T+k,_),t.arcTo(s,e,s+2*k,e,_),t.closePath(),t.stroke(),t.clip(),0==r.activity.goods_list[l].cover.indexOf("http://")&&r.activity.goods_list[l].cover.replace("http://","https://"),t.drawImage(r.activity.goods_list[l].cover,s,e,120*i,120*i),t.restore(),t.textAlign="left",r.drawText(i,t,r.activity.goods_list[l].name,12,s+134*i,e-35*i,166*i),t.font=1!=i?"12px sans-serif":"24px sans-serif",t.fillStyle="#ff4544",t.fillText("￥"+r.activity.goods_list[l].price,s+134*i,e+80*i),t.font=1!=i?"10px sans-serif":"20px sans-serif",t.fillStyle="#999999",t.fillText("￥"+r.activity.goods_list[l].original_price,s+134*i,e+102*i),o=12*(r.activity.goods_list[l].original_price.length+1)+12,t.fillRect(a*i,e+100*i,o*i,2*i),l++,5==l&&r.$hideLoading()}},drawNormalInfo:function(t,e,i,a,o,s,n,r){var l=this,c=l.middleman.avatar;0==c.indexOf("http://")&&c.replace("http://","https://"),t.save(),t.beginPath(),t.arc(a/2+e,a/2+i,a/2,0,2*Math.PI,!1),t.strokeStyle="white",t.stroke(),t.clip(),t.drawImage(c,e,i,a,a),t.restore();var d=r;1==r&&(d=.65),t.textAlign="left",t.fillStyle="#353535",t.font=1==r?"20px sans-serif":"10px sans-serif",t.fillText("团长:",o,s-62*d),t.fillText("结束时间: "+l.activity.end_at,o,s),t.fillText(l.middleman.name,e+63*d,s-62*d);var g=500*r;1==r&&(g=300),l.drawText(r,t,"提货地址: "+n+l.middleman.detail,11,o,s+10*r,g)}}};e.default=r},2245:function(t,e,i){"use strict";i.r(e);var a=i("17d6"),o=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},"362a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMA8uLbzkgfC7BylzMRUZk3GrdxD/1jsssAAACJSURBVBjTdZFZDoUwCEWxrXbU1if7X+sTCHEInp/CyU3TAiATch9x9BykZetXUFavdj/g4tjFJniSyPr4stGfduZyKQ5dWbieEYIUExKTRAL8OEmSNaczdDo2VAq1FQYdDhVHbQMGL0Q0M1uf9258r/0G+73m3+w5fM7s1PGeTN+70L3VBq3q3v7kHw4QIgjkYAAAAABJRU5ErkJggg=="},"3d8d":function(t,e,i){var a=i("b041");e=t.exports=i("2350")(!1),e.push([t.i,".text-center[data-v-2397db57]{text-align:center}.font-weight[data-v-2397db57]{font-weight:700}.page-width[data-v-2397db57]{width:100%}.goods-hover-class[data-v-2397db57]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-2397db57]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-2397db57]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-2397db57]{width:100%}.u-hover-class[data-v-2397db57]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-2397db57]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}[data-v-2397db57]::-webkit-scrollbar{width:0;height:0;color:rgba(0,0,0,0)}.app-scroll[data-v-2397db57]{width:100%;white-space:nowrap;padding:0 %?14?%}.poster-goods .head[data-v-2397db57]{width:100%}.poster-goods .head uni-view[data-v-2397db57]{margin:%?50?% auto}.poster-goods .setting[data-v-2397db57]{padding-top:%?20?%;font-size:%?24?%;color:#353535;background:#fff;padding-bottom:%?48?%}.poster-goods .setting .line[data-v-2397db57]{margin-bottom:%?24?%}.poster-goods .setting .line .label[data-v-2397db57]{height:%?56?%}.poster-goods .setting .line .label uni-icon[data-v-2397db57]{background-image:url("+a(i("362a"))+");background-size:100% 100%;height:%?21?%;width:%?21?%;background-repeat:no-repeat;margin-left:%?24?%;border-radius:50%}.poster-goods .setting .line .label uni-text[data-v-2397db57]{line-height:1;padding-left:%?12?%;padding-right:%?12?%}.poster-goods .setting .line .style-input[data-v-2397db57]{position:relative;height:%?56?%;padding:0 %?20?%;background:#f7f7f7;border-radius:%?5?%;margin:0 %?14?%}.poster-goods .setting .line .style-input .type-pure[data-v-2397db57]{height:%?32?%;width:%?32?%;margin-right:%?10?%;background:#d8d8d8}.poster-goods .setting .line .style-input .type-gradient[data-v-2397db57]{height:%?32?%;width:%?32?%;margin-right:%?10?%;background-image:url("+a(i("af20"))+");background-size:100% 100%}.poster-goods .setting .active[data-v-2397db57]{border-width:%?3?%;border-style:solid;background:#fff!important}.poster-goods .setting .icon-active[data-v-2397db57]{background-image:url("+a(i("c0ee"))+");height:%?38?%;width:%?38?%;background-repeat:no-repeat;background-size:100% 100%;position:absolute;top:%?-19?%;right:%?-19?%;z-index:10;border-radius:50%}.poster-goods .setting .line-input[data-v-2397db57]{position:relative;border-radius:%?5?%;margin:0 %?14?% %?14?%;background:#f7f7f7;width:%?140?%;height:%?56?%}.poster-goods .setting .line-input .icon-square[data-v-2397db57]{background-size:100% 100%;height:%?32?%;width:%?32?%;background-repeat:no-repeat}.poster-goods .setting .line-input uni-text[data-v-2397db57]{margin-left:%?10?%}.poster-goods .setting .color-bg[data-v-2397db57]{position:relative;display:inline-block;height:%?60?%;width:%?60?%;border-radius:%?5?%;border:1px solid #e5e5e5;margin-right:%?26?%;margin-top:%?19?%}.poster-goods .button[data-v-2397db57]{font-size:%?32?%;border-radius:%?40?%;height:%?68?%;margin:%?34?% auto 0;color:#fff;width:%?500?%}body.?%PAGE?%[data-v-2397db57]{background:#f7f7f7}",""])},"4bdc":function(t,e,i){"use strict";i.r(e);var a=i("8b99"),o=i("2245");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("7758");var n=i("2877"),r=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,"2397db57",null);e["default"]=r.exports},7758:function(t,e,i){"use strict";var a=i("99d1"),o=i.n(a);o.a},"8b99":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-layout",[i("v-uni-view",{staticClass:"poster-goods"},[i("v-uni-view",{staticClass:"head",attrs:{id:"head"}},[i("v-uni-view",{staticClass:"main-center cross-center"},[i("v-uni-canvas",{staticStyle:{width:"750px",height:"1334px",position:"fixed",top:"100%",left:"100%"},attrs:{id:"poster2","canvas-id":"poster2"}}),i("v-uni-canvas",{staticStyle:{width:"300px",height:"533.6px"},attrs:{type:"2d",id:"poster","canvas-id":"poster"}})],1)],1),i("v-uni-view",{staticClass:"setting"},[i("v-uni-view",{staticClass:"dir-left-nowrap line"},[i("v-uni-view",{staticClass:"box-grow-0 main-center cross-center label"},[i("v-uni-icon",{class:t.getTheme+"-m-back "+t.getTheme,attrs:{type:""}}),i("v-uni-text",[t._v("样式")])],1),i("v-uni-view",{staticClass:"dir-left-wrap box-grow-1",class:t.getTheme},t._l(t.styleList,function(e,a){return-1!==t.config.activity_poster_style.indexOf(e.value.toString())?i("v-uni-view",{key:a,staticClass:"style-input main-center cross-center",class:e.value==t.selectForm.style?"active "+t.getTheme+"-m-border "+t.getTheme:"",on:{click:function(i){i=t.$handleEvent(i),t.changeStyle(e.value)}}},[i("v-uni-text",[t._v(t._s(e.label))]),e.value==t.selectForm.style?i("v-uni-icon",{staticClass:"icon-active",class:t.getTheme+"-m-back "+t.getTheme,attrs:{type:""}}):t._e()],1):t._e()}),1)],1),i("v-uni-view",{staticClass:"dir-left-nowrap line",staticStyle:{"margin-bottom":"5rpx"}},[i("v-uni-view",{staticClass:"box-grow-0 main-center cross-center label"},[i("v-uni-icon",{class:t.getTheme+"-m-back "+t.getTheme,attrs:{type:""}}),i("v-uni-text",[t._v("类型")])],1),i("v-uni-view",{staticClass:"dir-left-wrap box-grow-1",class:t.getTheme},t._l(t.typeList,function(e,a){return i("v-uni-view",{key:a,staticClass:"style-input dir-left-nowrap main-center cross-center",class:e.value==t.selectForm.type?"active "+t.getTheme+"-m-border "+t.getTheme:"",on:{click:function(i){i=t.$handleEvent(i),t.changeType(e.value)}}},[1===e.value?i("v-uni-view",{staticClass:"type-pure"}):t._e(),2===e.value?i("v-uni-view",{staticClass:"type-gradient"}):t._e(),i("v-uni-text",[t._v(t._s(e.label))]),e.value==t.selectForm.type?i("v-uni-icon",{staticClass:"icon-active",class:t.getTheme+"-m-back "+t.getTheme,attrs:{type:""}}):t._e()],1)}),1)],1),t.selectForm&&1==t.selectForm.type?i("v-uni-view",{staticClass:"dir-left-nowrap line"},[i("v-uni-view",{staticClass:"box-grow-0 main-center cross-center label",staticStyle:{"margin-top":"19rpx"}},[i("v-uni-icon",{class:t.getTheme+"-m-back "+t.getTheme,attrs:{type:""}}),i("v-uni-text",[t._v("颜色")])],1),i("v-uni-view",{staticClass:"dir-left-wrap box-grow-1"},[i("v-uni-scroll-view",{staticClass:"app-scroll",attrs:{"scroll-x":"","enable-flex":"true"}},t._l(t.config.color,function(e,a){return i("v-uni-view",{key:a,staticClass:"color-bg",style:{background:""+e},on:{click:function(i){i=t.$handleEvent(i),t.changeColor(e)}}},[e==t.selectForm.color?i("v-uni-icon",{staticClass:"icon-active",class:t.getTheme+"-m-back "+t.getTheme,attrs:{type:""}}):t._e()],1)}),1)],1)],1):t._e(),i("v-uni-view",{staticClass:"button main-center cross-center",class:t.getTheme+"-m-back "+t.getTheme,on:{click:function(e){e=t.$handleEvent(e),t.submitSave(e)}}},[t._v("保存图片")])],1)],1)],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},"99d1":function(t,e,i){var a=i("3d8d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("44368e5c",a,!0,{sourceMap:!1,shadowMode:!1})},af20:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAPFBMVEXY2NjY2NjY2NjY2NjY2Nj////7+/vi4uL39/f6+vrx8fHa2trm5ubd3d3q6ur9/f3z8/Ps7Ozt7e3f398xU+CaAAAABHRSTlPr51NSCrNYyQAAAKdJREFUOMvN09sOwiAQRVHaehiuLdX//1ehEy5RQJ+M+4lkVkggIFZxmyQ2wfNhC88n/RhYoilwEtA0Bh5Xdgh2Bu4bsOtg34E9EJNxQgBCBSXSgPJxIZP0FdT4mITUvQc4hZQcAgJHL+A0Jy80uJBB3VfxBrlHCxxS+yVzpgUq3zOhdDTAg9PmQM1VYNBLF+DRjzIw6KcKkP0S+Ldn3+3z512X6Xx7Au0yEnme8gMNAAAAAElFTkSuQmCC"},c0ee:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAaVBMVEUAAAD/////3Nr//////v3/29j/8vH/9/b/////////////////9PP/////////////////+/v/7u3/9/f/9/b/////////////7+7//////////////////////Pz/8/L/////6+r///9JWyilAAAAInRSTlMA9wMXDAEGKA/045IK++3lUT03IBzog0kt09G7qJl9dFowGgtV2QAAAQdJREFUOMu91NtugzAMgGHbHQmMY1t62Hnz+z/kZiaThNnSbtr/qgqfLOQqAP+rW7K3GEAKx7PL+okg69CYrH2AsurdYJcK/nTFLduD1YwZG5g/wS4W017BLWN9Z4rlbfvEJgvtBrzKXhIjSzHzoyx7Za2j+El+fSg7Ggpl2LJwUkaOqmFJma1G/fOwYBO+UKZYlMFGZqxzZbNWHs4/qlFlsu4kj2NkVVsWQKKwjFGVs3JvAX/RqVCVLuS8njzL0VhD3kEZg0atbjXFK9ulw3qmUlFiCH5NYnxx1VdxZTpHERYMyVTV9gJisGZxxtybGtFgjF05avC+SLiv9KUiIptMqXTPr6XfN56YYCk/I1mAAAAAAElFTkSuQmCC"}}]);