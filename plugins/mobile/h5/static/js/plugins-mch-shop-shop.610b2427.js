(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-mch-shop-shop"],{1653:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("app-layout",[e("v-uni-view",{staticClass:"shop",class:t.fixed?"shop-tab-"+t.tab:""},[e("v-uni-view",{staticClass:"shop-head"},[e("v-uni-view",{staticClass:"tt-bg"}),e("v-uni-view",{staticClass:"black"},[e("v-uni-image",{staticClass:"shop-pic",attrs:{src:t.detail.store.pic_url&&t.detail.store.pic_url.length&&t.detail.store.pic_url[0].pic_url,"lazy-load":"",mode:"aspectFill"}})],1),t.detail?e("v-uni-view",{staticClass:"shop-summary dir-left-nowrap cross-center"},[e("v-uni-image",{staticClass:"icon-pic",attrs:{src:t.detail.store.cover_url}}),e("v-uni-view",{staticClass:"dir-top-nowrap box-grow-1 main-center"},[e("v-uni-view",{staticClass:"shop-name t-omit"},[t._v(t._s(t.detail.store.name))]),e("v-uni-view",{staticClass:"box-grow-1 shop-goods"},[e("v-uni-text",[t._v("商品:"+t._s(t.detail.goods_count))]),e("v-uni-text",[t._v("已售:"+t._s(t.detail.order_goods_count))])],1)],1),t.is_service?e("v-uni-view",{staticClass:"cross-center dir-top-nowrap kf",on:{click:function(i){i=t.$handleEvent(i),t.openKfModal(i)}}},[e("v-uni-icon",{staticClass:"icon-kf",attrs:{type:""}}),e("v-uni-view",[t._v("客服")])],1):t._e()],1):t._e()],1),e("v-uni-view",{staticClass:"cross-center main-center shop-tab"},[e("v-uni-view",{staticClass:"main-center cross-center box-grow-0 shop-search",on:{click:function(i){i=t.$handleEvent(i),t.goodsSearch(i)}}},[e("v-uni-icon",{staticClass:"icon-search",attrs:{type:""}})],1),e("v-uni-view",{staticClass:"cross-center main-center box-grow-1",staticStyle:{padding:"0 32rpx"}},[e("v-uni-view",{staticClass:"cross-center main-center box-grow-1 dir-top-nowrap",on:{click:function(i){i=t.$handleEvent(i),t.tabChange(1)}}},[e("v-uni-view",{class:1===t.tab?t.getTheme+"-m-text "+t.getTheme:""},[t._v("首页")]),1===t.tab?e("v-uni-view",{staticClass:"shop-tab-active",class:t.getTheme+"-m-back "+t.getTheme}):t._e()],1),e("v-uni-view",{staticClass:"cross-center main-center box-grow-1 dir-top-nowrap",on:{click:function(i){i=t.$handleEvent(i),t.tabChange(2)}}},[e("v-uni-view",{class:2===t.tab?t.getTheme+"-m-text "+t.getTheme:""},[t._v("全部")]),2===t.tab?e("v-uni-view",{staticClass:"shop-tab-active",class:t.getTheme+"-m-back "+t.getTheme}):t._e()],1),e("v-uni-view",{staticClass:"cross-center main-center box-grow-1 dir-top-nowrap",on:{click:function(i){i=t.$handleEvent(i),t.tabChange(5)}}},[e("v-uni-view",{class:5===t.tab?t.getTheme+"-m-text "+t.getTheme:""},[t._v("新品")]),5===t.tab?e("v-uni-view",{staticClass:"shop-tab-active",class:t.getTheme+"-m-back "+t.getTheme}):t._e()],1),e("v-uni-view",{staticClass:"cross-center main-center box-grow-1 dir-top-nowrap",on:{click:function(i){i=t.$handleEvent(i),t.navigateSummary(i)}}},[e("v-uni-view",[t._v("简介")])],1)],1)],1),1===t.tab?[e("v-uni-view",{staticClass:"shop-home"},[t._v("热销推荐")]),e("u-ordinary-list",{attrs:{reset:t.reset,pagination:!0,isShowAttr:!0,previewUrl:t.order_preview,submitUrl:t.order_submit,list:t.goods_list,theme:t.getTheme,"list-style":2}})]:t._e(),2===t.tab?[e("v-uni-view",{staticClass:"dir-left-nowrap shop-all"},[e("v-uni-view",{staticClass:"box-grow-1 dir-left-nowrap main-center cross-center",on:{click:function(i){i=t.$handleEvent(i),t.navCat(i)}}},[e("v-uni-view",[t._v("分类")]),e("v-uni-icon",{staticClass:"icon-cat",attrs:{type:""}})],1),e("v-uni-view",{staticClass:"box-grow-1 dir-left-nowrap main-center cross-center",on:{click:function(i){i=t.$handleEvent(i),t.changeStyle(1)}}},[e("v-uni-view",{class:1===t.sort?t.getTheme+"-m-text "+t.getTheme:""},[t._v("综合")])],1),e("v-uni-view",{staticClass:"box-grow-1 dir-left-nowrap main-center cross-center",on:{click:function(i){i=t.$handleEvent(i),t.changeStyle(4)}}},[e("v-uni-view",{class:4===t.sort?t.getTheme+"-m-text "+t.getTheme:""},[t._v("销量")])],1),e("v-uni-view",{staticClass:"box-grow-1 dir-left-nowrap main-center cross-center",on:{click:function(i){i=t.$handleEvent(i),t.changeStyle(3)}}},[e("v-uni-view",{class:3===t.sort?t.getTheme+"-m-text "+t.getTheme:""},[t._v("价格")]),3===t.sort&&1===t.sort_type?e("v-uni-icon",{staticClass:"icon-price-plus",class:t.getTheme+"-m-text "+t.getTheme+"-m-back "+t.getTheme,attrs:{type:""}}):3===t.sort&&0===t.sort_type?e("v-uni-icon",{staticClass:"icon-price-less",class:t.getTheme+"-m-text "+t.getTheme+"-m-back "+t.getTheme,attrs:{type:""}}):e("v-uni-icon",{staticClass:"icon-price-default",attrs:{type:""}})],1)],1),e("u-ordinary-list",{attrs:{reset:t.reset,pagination:!0,isShowAttr:!0,previewUrl:t.order_preview,submitUrl:t.order_submit,list:t.goods_list,theme:t.getTheme,"list-style":2}})]:t._e(),5===t.tab?t._l(t.goods_list,function(i,a){return i.goods_list&&i.goods_list.length?e("v-uni-view",{key:a},[e("v-uni-view",{staticClass:"cross-center main-center dir-left-nowrap shop-new"},[e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"label"},[t._v(t._s(i.label))]),e("v-uni-view",{staticClass:"line"})],1),e("u-ordinary-list",{attrs:{reset:t.reset,pagination:!0,isShowAttr:!0,previewUrl:t.order_preview,submitUrl:t.order_submit,list:i.goods_list,theme:t.getTheme,"list-style":2}})],1):t._e()}):t._e(),t.shopKf?e("v-uni-view",[e("v-uni-view",{staticClass:"act-modal show"},[e("v-uni-view",{staticClass:"act-modal-bg",on:{click:function(i){i=t.$handleEvent(i),t.closeKfModal(i)}}}),e("v-uni-view",{staticClass:"act-modal-pic main-center cross-center"},[e("v-uni-view",{staticClass:"shop-model"},[e("v-uni-image",{attrs:{src:"../../../static/image/icon/close.png"},on:{click:function(i){i=t.$handleEvent(i),t.closeKfModal(i)}}}),e("v-uni-view",{staticClass:"kf"},[t._v("联系客服")]),e("v-uni-view",{staticClass:"cross-center dir-top-nowrap"},[t.mch_setting.is_web_service?e("v-uni-view",{staticClass:"shop-info main-center cross-center dir-left-nowrap",on:{click:function(i){i=t.$handleEvent(i),t.navigateCs(i)}}},[e("v-uni-image",{attrs:{src:t.mch_setting.web_service_pic?t.mch_setting.web_service_pic:"./../image/shop-contact.png"}}),e("v-uni-view",[t._v("在线沟通")])],1):t._e(),t.detail.store.mobile?e("v-uni-view",{staticClass:"shop-info main-center cross-center dir-left-nowrap",on:{click:function(i){i=t.$handleEvent(i),t.callPhone(i)}}},[e("v-uni-image",{attrs:{src:"./../image/shop-phone.png"}}),e("v-uni-view",[t._v("致电商家")])],1):t._e(),t.detail.wechat?e("v-uni-view",{staticClass:"shop-info main-center cross-center dir-left-nowrap",on:{click:function(i){i=t.$handleEvent(i),t.copyInfo(i)}}},[e("v-uni-image",{attrs:{src:"./../image/shop-wechat.png"}}),e("v-uni-view",[t._v("复制微信号")])],1):t._e()],1)],1)],1)],1)],1):t._e()],2)],1)},o=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return o})},"4ce2":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTA1VDExOjA2OjQzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0wNVQxMzo0MDowMyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0wNVQxMzo0MDowMyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzMzNjk3NEI1RUEzMTFFQUEwRTdBOTJCNkU2RjI5MDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzMzNjk3NEM1RUEzMTFFQUEwRTdBOTJCNkU2RjI5MDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMzM2OTc0OTVFQTMxMUVBQTBFN0E5MkI2RTZGMjkwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMzM2OTc0QTVFQTMxMUVBQTBFN0E5MkI2RTZGMjkwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po7cgVYAAAE2SURBVHja3JTNSoZQEIZHOQs3rcKlu3btuoiILqFbqMto10W0a1dX0S0Y+IOggqYImoIi/nXmK8GvzvjXrhdGRN/3OcOMKA1cQCjLMiiKAjRNoyzAqBdd14HjOIB8RVFAVVWhT6YApmnC2JzneZDn+XoAnlyW5dEz27ahaZplQBAEkKbpLyN2YxjGPACDYRiSA6vrGizLEgOqqjq0viSche/7xwCcuKg9SnEcQ5IkX2ts2xZ0XT9Atsh1XZBlGRjSxl1vUd/3EEURSHw1A2MM9ggPluY+5TWS4Y/6BwAc/wOuldfJxmyPvwxcxRMuYmdd4gX1vCN8PXzfjLrfED4bQ1MA6mZFWOH1TgFQFwuA16lZBPjgdUqEH3+aRQDUmyB8KzJSANTLJHxFmeYAqDte53OGTwEGAIUAb3sBMyyaAAAAAElFTkSuQmCC"},6197:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcwRkVDNkM1MEIzNTExRUFCMUE1ODQxQjdBOEI2QzBBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcwRkVDNkM2MEIzNTExRUFCMUE1ODQxQjdBOEI2QzBBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzBGRUM2QzMwQjM1MTFFQUIxQTU4NDFCN0E4QjZDMEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzBGRUM2QzQwQjM1MTFFQUIxQTU4NDFCN0E4QjZDMEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4m8+zLAAADsklEQVR42uxaTWsTQRje3bRp01YTG1vbqiCWgqCiKCgevHlQvAhaPHixF1EQCh76E0SPWsSDHjx4Eg8ieBFUEEHRg4gfeJB6kaTfTWutjamN78A78nQ6O7Ob2mQKvvDA7GYymWfej3lmN36ZzFvDFnhr3OoMn5UITwgPCcN8z6/SvMqMVsIxwnFCStfRDwmhb4SdhBmHIuUNYV8UAlOELK+A/LJfo4n/Vq6/ELptIXQFJt9LGCAkCYtVXvEFwlvCJY4EsYjXCddsHthF+EhIEGYJjTUOn9eEg0zgCOGxrQrJuG90pEodgHmMQ3SEEihCeCUMA/8kjLKXKrUS55xtjISyuEYC80AgLHlFPuwhdBDagHRcO0noJOzmmDeVe7HyE2ouBpr6KwdaZwgh0ecr959nb1Rij5h80tJP5mHBRmARCGQsLq1XCMW1eZhMt2VTbVTCzkhAdkhbCOyH6xcVEBiCdm9ED3iqtwPNxiGzfL1l0D6QF2cJv2ISGIDJHbX0bYH2nIlAMeRLOjvBfQThacLpGJO/wfEvrJ8T2WQd0J41EfgO7WbLoEJoXYXrB4RzUMXCqtcdwkW+7iJcjkB4C7QLJgLT0G6PMPAF3iWl3SJsJ9xXXC3C6yWLsT4Inc8RN0v0wKRJC+GHmyMMLOL/Gcfwc76X56Rs4EKQ4IWZU1b0PZfqKNYFvzds8sA4tLMRBxc6/SnhnjJukXfqvDL5m7yHZGLkTGfIHJcRGIF2nB9I8KqLrf4uYa/y+Q7CbZYN5y01X2dt4IG8KYTyFRLwYPc+w1jgCuUzwZWcKTaCUhgyEciBZ9KreFyNa2lYgBwszLIQGoYfb/HcsRaesBR0oTmABFIOEUiBBwp4JlAJjAKBBocI1MOZoIDiMVCkdAEIJB0iIFa/SSd5VAJ4Gqvz3LImnSJVCZRA57j21C6jE3SBIqXlAWOT556hHvqhI1Bc4Sa22talU81BiJRudZBAJyT0jI5AIaYSrba162Q/EpgKcZcrltXJ/iDkLJB1kECbjQDq7A0OEsjo5ooEJiBJ0g4SaLYRmPyHUno1DJ8NjZlCKOGYlEZFKhVDTkdgDO7VO0pASuo5Uwj5Dgo5T5H3WgI50N5NDodQqJiTN0ve0gdcrlgSQqikO3j38JFSaO3DhEHCNlaotXybX8chMwhq+dTfkw685HtFOOS5b+Kp+Ygsq+pbSvEas59d5dKBpsyrv5XwCcu87jXrB8I7VqcukFjkwtLDob2kQvr//61SY/sjwAB25eBCpMEg1QAAAABJRU5ErkJggg=="},"69d2b":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMDgzZTc4NS0yZWUwLTk3NDYtODQ2NC1mNDdlYTAyYzc0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMwMTBENTQ5MEE4MTFFODhBNDBGOENENkNEMUFBRkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMwMTBENTM5MEE4MTFFODhBNDBGOENENkNEMUFBRkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGY1NTI2M2MtY2RiNC0xZTRjLWI4ZjYtZDE1YmFjOTg4M2QxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTdhMzE5ZTgtODY2OS0xMWU4LWI5YTktYjFkM2E0NjUyNzM4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BhG9jgAABFdJREFUeNrMWU1IW1kUvvlpdDSSKJ0ZfxOU2hlU2goiyCx0dKkOdWBmIczGxexmV22hG8GFtRs3QlvokMFFmYkoCErQhUpbBBGsJYIzigZKJeiMk2hjNJp4+51wX3gtje8+jUkPfLyL3vPu9+4995zv3hg45yyTZjAYzvy/+ZzvzQa+F7gFXAdsgB0f/A6D7qG9BniBGYHQuUaiGdSBb4DHQJDrsJOTk8NwOPwXmjc/fmeqCH4NuIAYv4Cdnp5yv98/h6YjlQRvA//zFNrh4WF0eXn53kUJGoB+fom2uLj4Ag/TeQgSuac8DTY/P+/r7e216CXYz9No4+PjPlAxyRL8keKZp9kGBgaeyxD8KtUbQsfG4a2trfe1CLp4Bs3j8URByZmM4PWL5rlUWHt7+1wygo+0nIeGhnh9fT3Pzs7WDZvNJkVwdHSUi/L5AcEsmdjr6+vjVVVVT+BWI+qxLsgQjEQivKyszK3wM4pnE5CvldTLy8tZR0dHHtKCUZQrWVwFKmW0gcViYS0tLT+gmRdXO6LcPADuajnv7e0xFP4wXhLMysqKUkKXFCQxk8lkhJ9Dpr/L5WJdXV230RxX5NZNGUfEET1yBC7N6urqmJByCYLXZBwxeywajcZFptFolFMjIs7JB7Mu1b+iooIeN9SC9UsZx7GxMQYVEg0EAsdYLqNYYk2WBwcHNPt8cHDwC5lxcnNzKRYrj4+PEzF4BGh+XmdnJ1tYWHi2tbX1wmw27+NPV2QGjMVivLCwMOLz+f6UXeb8/PxQMBjMM4sl+BdLUKrl1NjYyNra2gINDQ3/lZSUnIoPk1niED7IpicOocCt6l38EvhOyykUCjGo4iPEXwQDSg9GShq7mGLQLtMfdZnl5OTQCtmUUdZlCFqtVqZKvJdmm5ub9AioN8nfMo4U7ARke83j4kczyGgGERZS/ZeWlpg4FSYIrsg4Tk5OEsIrKytB1FdSHgbJeOIIej4zM+OU6T83F9cLr9UEvTKO6+vrDOeIydXV1d/FF17RsXIHwFutTpRnaSJgs2qCb7AMYQT/mRXCbrez2traADL9q+Hh4X2doSWVpaemptj29va+QjAht0BwiX8G1tzcTGnlyaf04LNMk5udnSVyMeDbTxHsyyQ5lDVeU1NDBIeTKerfMkmwp6eHi9xXmIzgL5ki53a7OfIqEfz5rFNdZybITU9PcygXItevdS7+Nd3kRkZGOOozkXuaNOmrCN5J54bo7u5WlvXhmRVJRfBxulJJdXW1siF+0nP95vb7/aG1tTW+sbERx+7ubvzSMRUzNjExwZuampQ89wftVpkjg0HdCVM+QqdLcZ9sVSpccXHx1aKiIhupEafTyUpLS+NPh8MRVyh0mBIHqoTqwYcyr9fLIBCYx+NhOzs7dG9NinoQY/4je4lukD344EUWkaMc4v7EKdqEYhKXBQUFdhxN7ZD4tHzKRfqyqKt09Xuk95ZfmmCmfoZ4L8AAv/31JMVUQ3IAAAAASUVORK5CYII="},7305:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcxM0JGQzFFMEIzNTExRUFCNEM0QUQ3RjkwMjlGQ0QzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcxM0JGQzFGMEIzNTExRUFCNEM0QUQ3RjkwMjlGQ0QzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzEzQkZDMUMwQjM1MTFFQUI0QzRBRDdGOTAyOUZDRDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzEzQkZDMUQwQjM1MTFFQUI0QzRBRDdGOTAyOUZDRDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5s/XFuAAADbUlEQVR42uyab2iNURzH73P/mGbY2ApZGhrRljREK2UaZSnKG2FGS0mGV14o8oKXSmyp2QtJCl0b3lESxouV0WUlN39X2Nq4m2a6e3x/7Xfr5zjPnynuWZ5ffW7nnOf73Pv7Pc85v+ec81zLhoXGsYVD49ycAvgEDoAcYBlAPfioc9TSdKH3YBFIGXaxJ4EEmCMboxrhQeE83aEavgoj/9BZi3/7KUhy2yCoBXd/Udq/Wx7dFOaqnX3bK/whvsqD6hjoBwOiPs+ArnNcqb9xG8RPRLkALDEgAPIjJuqP3QK4Isq7DcqU60T9nFsWopH+jcsvwXxDgmgHq0T9dSYbyTvQKZyfaZDzZCvBVFGP67rQWVGuM/Chu1OUm3VdKB984XIHWGpYAK+UXkGzhaLMHUgK5ycY6HwmpUdE/YbsQo3iwDKD526LRblFBnBeHNhicACHRfkBzdtoDNB8o1wc6OYsZKrR/C3N5VN0B5rEwXLDnSerFuVr4TE+feOcCcr4Qedm70AFKAUXfDhGXbcE7BpDN3oYUmZ6XR4zw+1C2+yhjQttmYe2T/HDy6IZbdhtpqexPmUQuVnS4TydPRflmI+1R0SuB3JE5Cs8Ii8Q2jDoddEuUK5qq4t2raI94aK9JHSl9FGjnHzS4cQ6RUdUOmiPabRTQLdG26LREu0abRLEhOYMfTzTnNzAYrJ7YLnDjxCrwQvWJsAGF+1kcB2MgA+a1ZbKEdADhnhM5YpjxbYYMIccviCmaTvqoI1q2jaD6T61W/mOqu2WRk+BDNrKiK/3uBpEI2sv+9DuYe0jhwsh2S+6yAwP7eyM87YmZV10+IJq0KFoO7hd1VIiuK3pu9s02gpwX9H2g30gX6OvUgeFLuc2iROmgbcemYn6fxtnmYSHlr7rJms7PbQpcAcUumUn3b7QsDLvmOWRkxcyfqyY8WN5YA0vc3u47bufrcVhw+Y+P/7Lzd0ggCCAIIAggCCAPw4grax8Igb5mPYTgNytHjDgIkt/LD8ByLlPSlnbZsN6RbnETwCVSv10Fp1vA0Oivl4VWA5v6ovEDJDsFqji8fC331Za3G26QqPvBTLvLDaCVr8B0EZUrUHJZiL4zFNsX2l0R2j0/bAJRv8WSOic93oO0P57AyjMkuO5YBNvts117G/Bv1WybD8FGABSUl6iSrAQJQAAAABJRU5ErkJggg=="},"8efa":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAYCAYAAADtaU2/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMDgzZTc4NS0yZWUwLTk3NDYtODQ2NC1mNDdlYTAyYzc0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTkwNTEyODUxQzI1MTFFODgzRERCNDUyQjE5REQ3NEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTkwNTEyODQxQzI1MTFFODgzRERCNDUyQjE5REQ3NEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDAxMTE1ZjYtYmRkZS01OTQxLTk2NTQtZjM3YjBjYTZjYzU3IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ODZhMzAzNDItOTc4OS0xMWU3LTgwYTctZjE0ZmE2MzBiOTllIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pPMrdwAAAUVJREFUeNpiPHPmjBEDA8NCIJZggIA7QFwExMehfGsgng3EokD8k4EywALEP4C4nxFo8QEgwx5NwXsgFoKyDwGxLQOVARMQH8Eivg+JfZqB+uARyOs1QPwHiKWggq+hYjBQCcS/oSHwh0ILmaHRNQUU1AwDAZgYBgiMWjz8LWaBZqNpQCwCxP+B+D40Cz2FqlEA4onQ7PSfCh79C8STQRZPAWJ/JEkbIDYEYl0oH2SpH5U9bAdywUcsEr+Q2J9pENJ/QT7OB2JeIJaHCr4A4gwkRaAKgwuIZYH4HxWCGlT6dYAs/gTEIXgUvwLioNHsNGrxkCq52KAVvwA0u1wB4jlIarihJRkvFbITI7TkWgiyeBsQO6Mp+A1tAILACiD2obKHo5iwWMqAVoS60SCkJUA+7kYrqb4CcTMSvxeIc6hs8RKAAAMAghg/bmQGJOsAAAAASUVORK5CYII="},9673:function(t,i,e){"use strict";e.r(i);var a=e("a730"),o=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(i,t,function(){return a[t]})}(c);i["default"]=o.a},a650:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTA1VDExOjA2OjQzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0wNVQxMzo0MDozOCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0wNVQxMzo0MDozOCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDgzMTg4RjY1RUEzMTFFQUI3QzhBMDlGQjNDQzg5QzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDgzMTg4Rjc1RUEzMTFFQUI3QzhBMDlGQjNDQzg5QzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEODMxODhGNDVFQTMxMUVBQjdDOEEwOUZCM0NDODlDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEODMxODhGNTVFQTMxMUVBQjdDOEEwOUZCM0NDODlDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkEU/PQAAAE2SURBVHja3JLPSoVAGMXP1bn5B1FTFHQhitdr6x6iV+gpokfoFVq0aNGuZdC692jtTgiDwjaBYH9mTKF70cm5d9eB3yDMnOPM93344uuecsY7AM7eG0Xpz1zvEnDc7w88iAScbpkZB5SnOQEXI+aBlPLBC7jjmAdOpgIeZ5gHzrcDasqhQADjhhkXlGcAR5RXiOuW0OWK8tmHiOidcslu8EI/HOymZtEVYg9J2FP/IIBUVYWmaSDLsrC5bVuQ5XKJsix3+rtpmujaWNc1iqIQMluWhdVq9VMD27YRhuFss6IonXmjiEEQwHH+HkhJkpDn+XgXkiSBruvcgCzLwOo22cb1eg1CyKg5jmMYhsGfA9bO31cc5HkeXNedN0iqqiJN0412RVEkNomsM77vQ9O07t1T+hZgAIIV+AVhfmxxAAAAAElFTkSuQmCC"},a730:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("2f62"),o=c(e("24ba"));function c(t){return t&&t.__esModule?t:{default:t}}function s(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,a)}return e}function n(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?s(e,!0).forEach(function(i){h(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(e).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function h(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var d={name:"shop",components:{uOrdinaryList:o.default},computed:n({},(0,a.mapState)({userInfo:function(t){return t.user.info}}),{},(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"})),data:function(){return{mch_id:-1,sort:1,cat_id:0,sort_type:0,page:1,load:!1,args:!1,is_service:0,detail:{store:{}},mch_setting:{},tab:2,shopKf:!1,coupon_list:[],goods_list:[],fixed:!1,order_preview:this.$api.mch.order_preview,order_submit:this.$api.mch.order_submit,attrGoods:{attrShow:0,goods:{}},reset:!0}},onLoad:function(t){this.mch_id=t.mch_id,this.cat_id=t.cat_id?t.cat_id:0,this.loadShop(),this.getGoods(),this.getOption(),this.addVisit()},onReachBottom:function(){var t=this;if(this.reset=!1,!t.args&&!t.load){t.load=!0;var i=t.page+1;t.$request({url:t.$api.mch.goods,data:{page:i,mch_id:t.mch_id,sort:t.sort,sort_type:t.sort_type,mch_status:2,cat_id:t.cat_id}}).then(function(e){if(0===e.code){var a;a=5===t.sort?t.formatList(t.goods_list,e.data.list):t.goods_list.concat(e.data.list);var o=[i,0===e.data.list.length,a];t.page=o[0],t.args=o[1],t.goods_list=o[2]}t.load=!1})}},methods:{goodsSearch:function(){uni.navigateTo({url:"/pages/search/search?mch_id="+this.mch_id})},navCat:function(){uni.navigateTo({url:"/plugins/mch/cat/cat?mch_id="+this.mch_id})},navigateSummary:function(){uni.navigateTo({url:"/plugins/mch/summary/summary?mch_id="+this.mch_id})},navigateCs:function(){uni.navigateTo({url:"/pages/web/web?url="+this.mch_setting.web_service_url})},getOption:function(){var t=this;t.$request({url:t.$api.mch.setting}).then(function(i){0===i.code&&(t.is_service=i.data.setting.is_service)})},loadShop:function(){var t=this;t.$showLoading(),t.$request({url:t.$api.mch.detail,data:{id:t.mch_id}}).then(function(i){if(t.$hideLoading(),0===i.code){var e=[i.data.detail,i.data.mchSetting];t.detail=e[0],t.mch_setting=e[1],uni.setNavigationBarTitle({title:t.detail.store.name})}}).catch(function(i){t.$hideLoading()})},addVisit:function(){var t=this;t.$request({url:t.$api.mch.visit,method:"POST",data:{mch_id:t.mch_id}}).then(function(t){})},getGoods:function(){var t=this;t.$showLoading(),t.$request({url:t.$api.mch.goods,data:{page:1,mch_id:t.mch_id,sort:t.sort,sort_type:t.sort_type,mch_status:2,cat_id:t.cat_id}}).then(function(i){t.$hideLoading(),0===i.code&&(t.goods_list=i.data.list)}).catch(function(i){t.$hideLoading()})},changeStyle:function(t){var i=this.sort;3===i&&3===t&&(this.sort_type=this.sort_type?0:1),this.reset=!0;var e=[t,[],1,!1,0,[]];this.sort=e[0],this.goods_list=e[1],this.page=e[2],this.args=e[3],this.cat_id=e[4],this.goods_list=e[5],this.getGoods()},tabChange:function(t){this.reset=!0;var i=[t,t,1,!1,0,[]];this.sort=i[0],this.tab=i[1],this.page=i[2],this.args=i[3],this.cat_id=i[4],this.goods_list=i[5],this.getGoods()},copyInfo:function(){this.$utils.uniCopy({data:this.detail.wechat,success:function(){uni.showToast({title:"复制成功"})}})},callPhone:function(){uni.makePhoneCall({phoneNumber:this.detail.store.mobile})},openKfModal:function(){this.shopKf=!0},closeKfModal:function(){this.shopKf=!1},formatList:function(t,i){if(!i.length)return odlArray;var e,a,o=t.pop(),c=i.shift();return o.label===c.label?(o.goods_list=o.goods_list.concat(c.goods_list),a=o):(t=t.concat(o),a=c),e=t.concat(a),e=e.concat(i),e}}};i.default=d},b05c9:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTA3VDE2OjUyOjIyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0wN1QxNjo1MjoyMiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0wN1QxNjo1MjoyMiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjU5NkEyOTA2MDUwMTFFQTk5RUJCQzA5RjQzQTYxMUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjU5NkEyOTE2MDUwMTFFQTk5RUJCQzA5RjQzQTYxMUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNTk2QTI4RTYwNTAxMUVBOTlFQkJDMDlGNDNBNjExRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNTk2QTI4RjYwNTAxMUVBOTlFQkJDMDlGNDNBNjExRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsBY9gAAAAM5SURBVHjazFhNbExRFH6vmigxJKWV1ELbjSZaLCQyiZqyYoYNNrWSWLQbgjRdmDChtZmF342JtYmFWDG6oTokxkpUJSRKLQRB/FRoQo1zkk/cnNx338+8eTMn+RbvnHvP+d5759577rFLpZLlQ1oJSUKC0E1oJyyF7RthhjBFmCCMEd5ZFUqjx3G9hGHCdsOcFcBGwn7CPOEWIUu4F5Rgg4u9k3CDUCTs9PFCLAswpwgfnWET7Cc8IqSsyiUFX/vCIniCkFfyS5UnhAxhG6GNsBBogy6DMVLY1xX49iy2ZpEcI5zWjOU8SvvIJ87bUcIWje04bL6/YL+G3BxhECvXT7Lz2D7MnRO2EcTyRbCDkBP2L/htrC8HyL0y5rKPz8KWQ0zPBC8SYsrzT2wrD0JYJOxjB+GHooshpieCmzWr9SjhoRWesK8jmtXd64XgsCZ/clb4chn7oipDbgRb8flVSQfMOS85mRa6JDg4EkyKE2KykqPJg9wnPBbHbdJEMCF0163qi4zRZyLYLXTFCAjKGGtNBNuF7lkEBJ+L5w4TwZjQfYqAoIwRMxG0rToWJjgrdMsjiCtjzJoIvhK6rggIrhHPMyaCTzVlUrVFlmBTJoJ3hW5PBAR3i+cJE0G+2PxWdOtQPFRL2Pd65ZljF0wE3+OKqMpolVa3ramkx8DBWM1khZ6Pv4EqEDygOVqzXsotLg5uCtsZwqYQybGv80JXcCtM1Ir6kNiPFsFBPARycfhaLPa+g35K/pe44KjSTLiD320HzLkB+GgWtkHE9HWry2vurU2ES9iO/OyRPHYcc5uELYNYgXozI3jzk5rNtYhL+TXkDlc+H5XeTBeI7SX0OMRkcqfwcVahwfTLb/OIHbzAvWSJsPUYgpvkO353Hvl9G7nJR+0uzYnm2pthRxs0qzuIFOArr5xWcaUWHHcqWt26W9PoUCXQoZr3QeoP5iRwvZxWbG/E2BYnknaABmbK+t/AXE1YBttXwmsc/EUcoW8Nvs4SDgvdB8JW9Xf7JRj2sXcO+68jyQardlLGF7xg+t21JOhGkld5S60Jmkiu5OZVPRB0Isk7xmSjVT/yj+QUitqr3CL5K8AASK6wL4d0wjcAAAAASUVORK5CYII="},c581:function(t,i,e){"use strict";e.r(i);var a=e("1653"),o=e("9673");for(var c in o)"default"!==c&&function(t){e.d(i,t,function(){return o[t]})}(c);e("cdfc");var s=e("2877"),n=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"28ba3ff6",null);i["default"]=n.exports},c846:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcxNzhGQ0JDMEIzNTExRUFBMDNDRDAxOTRDMEM1NjYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcxNzhGQ0JEMEIzNTExRUFBMDNDRDAxOTRDMEM1NjYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzE3OEZDQkEwQjM1MTFFQUEwM0NEMDE5NEMwQzU2NjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzE3OEZDQkIwQjM1MTFFQUEwM0NEMDE5NEMwQzU2NjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6oPQ4PAAACFklEQVR42uyZu0oDQRSGNxIVYi4WgmASL5UWWtkoREEQSxVtEvIEmhfwDSxtTBqtTRoFsbfQgGmstFBSeFlTCBYi2qiw/qN/dFg2NzDJJMyBj5PMHJLz78yes8u4LJjRwtZhtLjZBeTBKggAl2IEmFteTtglbaFrMAWeFb/ovSAHRu0ChLoDqo2BsGKJmyANRL4rYP971Pozv9AC4pa6FmeO3uKAfA+80IcV3j7j9K9tW4W0AC2gQQKyLLUh0E0f47jSAj5BAsyADCiAd/oMx8X8R4XfqabzVmXuGgWsgV1+7gGLYBDcgyOWtxRF7TRkCaQmYZCNEk0kK8VMAtM2b3K8GJMt05CMKnCyTft8LVsoSe8Bh9z3soU47uH37XLXrQr+/R44phfbJlgiJsh5YSeq3cSP9MMV4kbon1QT0E9/WyHuhr5PNQFz9KLaPJSIKXBe2KxqAhL0b2CZydqTX+K8HF9Xq6UPRJiUqEbnfCMSN+wQuJP6QDH5iGoChG2xxKV4pdMOMeuMc+q+NbWoejxKdHIFTkEUDIAu+ijHk4wzVFwBeTtFDAXM3cD/sppdhfQLjRagBWgBzS2jrgbnZukt1G5byNIroAVoAVqAFlBOgJ/eVDjfS3qvUx+YN36OWff4fUKx5C+k3BZ+n2+kc+IrMG20xkH3GRizbyExIE7AxSGyT8HEfcwtV0zevgK6CjXDvgQYAAxczui8UkAUAAAAAElFTkSuQmCC"},cdfc:function(t,i,e){"use strict";var a=e("e813"),o=e.n(a);o.a},e0fa:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcwQkZFQ0YzMEIzNTExRUFCOTY5RjhGRDUwQkJDMjZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcwQkZFQ0Y0MEIzNTExRUFCOTY5RjhGRDUwQkJDMjZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzBCRkVDRjEwQjM1MTFFQUI5NjlGOEZENTBCQkMyNkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzBCRkVDRjIwQjM1MTFFQUI5NjlGOEZENTBCQkMyNkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Cmm3eAAADmklEQVR42uyaW0gUURjH3c11CfGS0mXt8qCkbiJGFNRDvkS9bL1FtZBUD5VBUfliF4qswCgyiHywC1REQdBLbEQI9hBRVFRoaheJsMIeMgsvaJtu/wPfwMcwZ2ZnZmd2Fvzgx8zZ+WbO959zzpxzPvUlYFkZbNkG15+Ca+ATEEJ9LsYm6psLomCj3EtuMdE4HqFRFqRPpwvlgDid+8FUmntLwmwXUoJfAM6Bfy4G66OA68GorqNOCyj9fQnoTtNbrwAf9VrAb7XpXLJJIwe/C0HUga5U9nszn1G7tgK8At9BhxMVONkCFyl4YY9BT6YJaFSVd2WSgLNgnJXzaFb/kCkCjrC3vhIMU3lnJgg4zz5/LeA0nc8ET1LdCna/QiPgGw3QzzTpXKVre0EuWAPK2YS0lBZnpaAKLAaLQLG1D63clIVUWOPaAVAN8iSLr3lghPl30O8zJP5+qicChtl9pcxHGqRZASL4oM7KcZkqeMWiEn+fqjxkRoCVLvQQTLDyWrAdVIKFYLbkvtvgMvgC+kA/nV9gPs9BodNdaBTU0rUyOjYkrNkh1godGtcd6UKKraPr8+lYbzL43Sz4NxIfRwUIW00+hXTcCsYNAp8iP+X5z3R8HRcwCSrJbxYdHxkE38KeHTMQayjAn4KJ8C2oAUP0W8hg3mhgW9aIF2biIO2cFKvS8RUTW4Dq/UvZDk8sJWJs+6l+5l0wwOqrZQmCHi8I+AnG6HwV+/0WKAKbQQk4QV1oOfN55wUB/C1GqRyiraQyLkS3aaJlNa/zhRcE8P3ufhoDP6i8gfp9nPk0s/M+Lwjo1jhfT8vm+2CQuo9iBarW+2Uv3WVvHhBWwXzFnNAp8RsE21QLt3LwJ53zQBYNSrHGvwd6QbXETwzo6+A17RHC4CXIt5XCSyIzF3Yqo5CEldFGyVZmztM2LWBagIcFxGhpIb5SrclkmtM1D6jtJijR2Lxng+NgzMSzHN/QcLsDQkn8vUukVk4aTGCuCrgECjQCFXvmdnBMR8w+mqFdFyC2km0gXyOoLaBX5f8bNOsIEbmmATcETIBTIEcjiE3gvUFrCSFNkvsFdSohKRFQQwPvDAhoVLoH9Jsc6OJFtIJciRCx6OtjCQNbAgKSSkRe52vCnsUpS1EsqSNoR4CsmY8aDDyrdgMUSeo8bEXAA9VDDjoUuNquqPp+RM/ZZ/DfKu2gk/a3c1xcIYiY2ihls8PqfiAj7L8AAwB1Ig2Pv+kJbwAAAABJRU5ErkJggg=="},e813:function(t,i,e){var a=e("fb20");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("d3075f0a",a,!0,{sourceMap:!1,shadowMode:!1})},ec47:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAMAAACJtiw1AAAAOVBMVEX////MzMzk5OTU1NTi4uL7+/vt7e3b29v8/Pzv7+/p6ene3t7W1tbR0dHOzs7y8vL39/f29vbm5uZAHqx/AAAAaUlEQVQY073QyRWAIBAD0AmLigqo/RerssShAf8tp7xEmuBksACraDuArPKGl2c2KGzPE5q55hPkSkFiLlU+QpvEJKvEXbz8YXVG2zjkmxPG/LhAlvdUyfPAKvPi2JbS0d+hUAo01x++AQWJAljPKMjVAAAAAElFTkSuQmCC"},fb20:function(t,i,e){var a=e("b041");i=t.exports=e("2350")(!1),i.push([t.i,".text-center[data-v-28ba3ff6]{text-align:center}.font-weight[data-v-28ba3ff6]{font-weight:700}.page-width[data-v-28ba3ff6]{width:100%}.goods-hover-class[data-v-28ba3ff6]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-28ba3ff6]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}uni-page-body[data-v-28ba3ff6]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-28ba3ff6]{width:100%}.u-hover-class[data-v-28ba3ff6]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-28ba3ff6]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.shop[data-v-28ba3ff6]{width:100%}.shop .shop-head[data-v-28ba3ff6]{height:%?200?%;width:100%;position:relative}.shop .shop-head .tt-bg[data-v-28ba3ff6]{background:rgba(0,0,0,.3);height:100%;width:100%;position:absolute;top:0;left:0}.shop .shop-head .black[data-v-28ba3ff6]{height:100%;width:100%}.shop .shop-pic[data-v-28ba3ff6]{height:100%;width:100%}.shop .shop-summary[data-v-28ba3ff6]{position:absolute;top:%?74?%;left:0;width:100%;color:#fff;font-size:%?24?%}.shop .shop-summary .icon-pic[data-v-28ba3ff6]{border-radius:%?8?%;height:%?80?%;width:%?80?%;margin:0 %?24?%;display:block}.shop .shop-summary .shop-name[data-v-28ba3ff6]{margin-bottom:%?20?%;max-width:%?520?%}.shop .shop-summary .shop-goods[data-v-28ba3ff6]{font-size:%?24?%}.shop .shop-summary .shop-goods uni-text[data-v-28ba3ff6]:first-child{margin-right:%?32?%}.shop .shop-summary .kf[data-v-28ba3ff6]{margin-right:%?50?%}.shop .shop-summary .kf .icon-kf[data-v-28ba3ff6]{height:%?40?%;width:%?40?%;margin-bottom:%?8?%;background-image:url("+a(e("69d2b"))+");background-repeat:no-repeat;background-size:100% auto}.shop .shop-tab[data-v-28ba3ff6]{height:%?77?%;background:#fff;font-size:%?28?%;color:#666;border-radius:%?16?%;position:relative;top:%?-18?%;margin:0 %?24?% %?-18?% %?24?%}.shop .shop-tab .shop-search[data-v-28ba3ff6]{width:%?136?%;height:%?40?%;border-right:1px solid #e2e2e2}.shop .shop-tab .shop-text-active[data-v-28ba3ff6]{color:#ff4544}.shop .shop-tab .shop-tab-active[data-v-28ba3ff6]{height:%?4?%;width:%?30?%;border-radius:%?2?%;position:absolute;bottom:%?8?%}.shop .shop-tab>uni-view[data-v-28ba3ff6]{height:100%}.shop .shop-tab uni-icon[data-v-28ba3ff6]{height:%?48?%;width:%?48?%;display:block;background-size:100% auto;background-repeat:no-repeat}.shop .shop-tab .active[data-v-28ba3ff6]{border-bottom:%?1?% solid}.shop .shop-tab .icon-search[data-v-28ba3ff6]{height:%?40?%;width:%?40?%;background-image:url("+a(e("b05c9"))+")}.shop .shop-tab .icon-home[data-v-28ba3ff6]{background-image:url("+a(e("7305"))+")}.shop .shop-tab .icon-all[data-v-28ba3ff6]{background-image:url("+a(e("6197"))+")}.shop .shop-tab .icon-new[data-v-28ba3ff6]{background-image:url("+a(e("e0fa"))+")}.shop .shop-tab .icon-summary[data-v-28ba3ff6]{background-image:url("+a(e("c846"))+")}.shop .shop-home[data-v-28ba3ff6]{line-height:1;padding:%?32?% %?24?% %?10?% %?24?%;width:100%;font-size:%?28?%;color:#353535}.shop .shop-all[data-v-28ba3ff6]{font-size:%?26?%;line-height:1;color:#353535;padding:%?32?% %?25?% %?18?% %?25?%}.shop .shop-all .icon-cat[data-v-28ba3ff6]{background-repeat:no-repeat;background-size:100% 100%;height:%?20?%;width:%?26?%;margin-left:%?12?%;background-image:url("+a(e("8efa"))+")}.shop .shop-all .active[data-v-28ba3ff6]{color:#ff4544}.shop .shop-all .icon-price-plus[data-v-28ba3ff6]{background-repeat:no-repeat;background-size:100% 100%;height:%?19?%;width:%?12?%;margin-left:%?12?%;background-image:url("+a(e("a650"))+")}.shop .shop-all .icon-price-less[data-v-28ba3ff6]{background-repeat:no-repeat;background-size:100% 100%;height:%?19?%;width:%?12?%;margin-left:%?12?%;background-image:url("+a(e("4ce2"))+")}.shop .shop-all .icon-price-default[data-v-28ba3ff6]{background-repeat:no-repeat;background-size:100% 100%;height:%?19?%;width:%?12?%;margin-left:%?12?%;background-image:url("+a(e("ec47"))+")}.shop .shop-new[data-v-28ba3ff6]{margin-top:%?40?%;margin-bottom:%?24?%}.shop .shop-new .line[data-v-28ba3ff6]{height:1px;width:%?260?%;margin:0 %?28?%;background:#cdcdcd}.shop .shop-new .label[data-v-28ba3ff6]{font-size:%?22?%;color:#999}.act-modal[data-v-28ba3ff6]{position:fixed;left:0;top:0;width:100%;height:100%;z-index:2001;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.act-modal .show[data-v-28ba3ff6]{visibility:visible;opacity:1;-webkit-animation-name:fadeIn;-webkit-animation-duration:.25s;-webkit-animation-iteration-count:1;-webkit-animation-delay:0s}.act-modal .act-modal-bg[data-v-28ba3ff6]{background:rgba(0,0,0,.5);position:fixed;left:0;top:0;width:100%;height:100%;z-index:1}.act-modal .act-modal-pic[data-v-28ba3ff6]{background:rgba(0,0,0,.25);position:fixed;left:0;top:0;width:100%;height:100%;z-index:1}.shop-model[data-v-28ba3ff6]{position:relative;color:#353535;width:%?620?%;background:#fff;border-radius:%?16?%;text-align:center}.shop-model>uni-view[data-v-28ba3ff6]:last-child{margin-bottom:%?16?%}.shop-model .kf[data-v-28ba3ff6]{margin:%?40?% 0;font-size:%?32?%}.shop-model>uni-image[data-v-28ba3ff6]{position:absolute;right:%?27?%;top:%?27?%;width:%?35?%;height:%?35?%}.shop-model .shop-info[data-v-28ba3ff6]{height:%?80?%;width:%?360?%;margin-bottom:%?24?%;border:1px solid #cdcdcd;border-radius:%?40?%;color:#666;font-size:%?28?%}.shop-model .shop-info uni-image[data-v-28ba3ff6]{height:%?32?%;width:%?32?%;margin-right:%?16?%}.shop-tab-1[data-v-28ba3ff6],.shop-tab-5[data-v-28ba3ff6]{margin-top:%?120?%}.shop-tab-1 .shop-tab[data-v-28ba3ff6],.shop-tab-5 .shop-tab[data-v-28ba3ff6]{position:fixed;top:0;left:0;width:100%;z-index:10}.shop-tab-2[data-v-28ba3ff6]{margin-top:%?95?%}.shop-tab-2 .shop-all[data-v-28ba3ff6]{position:fixed;top:0;left:0;width:100%;z-index:10;border-bottom:%?1?% solid #e3e3e3}.icon-default[data-v-28ba3ff6]{background-color:#666}body.?%PAGE?%[data-v-28ba3ff6]{background:#f7f7f7}",""])}}]);