!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["launch-bar/trending-search"]=t():e["launch-bar/trending-search"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,r={375:e=>{e.exports=coreApis.ajax}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,a),n.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var n=Object.create(null);a.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,a.d(n,i),n},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{a.d(n,{plugin:()=>e});const e={name:"launchBar.trendingSearch",displayName:"搜索栏 - 搜索推荐",description:'在脚本的搜索栏中默认显示类似 b 站搜索栏的搜索推荐词, 替代原来的 "搜索" 两字.',setup:e=>{let{addData:t}=e;t("launchBar.recommended",(async e=>{const{getJson:t}=await Promise.resolve().then(a.t.bind(a,375,23)),r=await t("https://api.bilibili.com/x/web-interface/search/default");if(0===r.code){let t;e.word=r.data.show_name,t=""!==r.data.url?r.data.url:r.data.name.startsWith("av")?`https://www.bilibili.com/${r.data.name}`:`https://search.bilibili.com/all?keyword=${r.data.name}`,e.href=t}else console.error("获取搜索推荐词失败")}))},commitHash:"067f38a12d17831453b931d25cac95c578b28312",coreVersion:"2.7.0"}})(),n=n.plugin})()));