!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["launch-bar/number-search"]=t():e["launch-bar/number-search"]=t()}(globalThis,(()=>(()=>{var e,t,i={123:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=123,e.exports=t},731:e=>{"use strict";e.exports="在输入纯数字时, 提供以下选项:\r\n- 跳转至相应的视频 (视为 av 号)\r\n- 跳转至相应的专栏 (视为 cv 号)\r\n"}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return i[e](o,o.exports,n),o.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"==typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"==typeof i.then)return i}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&r&&i;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>i[e]));return a.default=()=>i,n.d(o,a),o},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";n.d(o,{plugin:()=>i});const e=coreApis.ajax,t=e=>{const{name:t,displayName:i,description:r,indexer:n,link:o}=e;return{name:t||n,displayName:i,icon:"mdi-open-in-new",indexer:n,description:r,action:()=>{window.open(o,"_blank")},order:0}},i={name:"launchBar.actions.numberSearch",displayName:"搜索栏 - 数字联想",async setup(i){let{addData:r}=i;r("launchBar.actions",(i=>{i.push({name:"numberSearchProvider",getActions:async i=>{const{match:r,id:n,indexer:o}=((e,t)=>{const i=e.match(t);if(!i)return{};const r=i[1],n=i[2];return{match:i,type:r,id:n,indexer:`${r}${n}`}})(i,/^()(\d+)$/);if(!r)return[];const[a,c,d]=await Promise.all([await(0,e.getJsonWithCredentials)(`https://api.bilibili.com/x/web-interface/view?aid=${n}`),await(0,e.getJson)(`https://api.bilibili.com/x/article/viewinfo?id=${n}`),await(0,e.getJson)(`https://api.bilibili.com/x/web-interface/card?mid=${n}`)]),{title:s}=lodash.get(a,"data",{}),{title:l}=lodash.get(c,"data",{}),{name:p}=lodash.get(d,"data.card",{}),m=e=>e?`numberSearchAction.${e}`:e;return[t({name:m(s),displayName:s,description:"视频跳转",link:`https://www.bilibili.com/av${n}`,indexer:o}),t({name:m(n),displayName:n,description:"直播间跳转",link:`https://live.bilibili.com/${n}`,indexer:o}),t({name:m(l),displayName:l,description:"专栏跳转",link:`https://www.bilibili.com/read/cv${n}`,indexer:o}),t({name:m(p),displayName:p,description:"用户跳转",link:`https://space.bilibili.com/${n}`,indexer:o})]}})}))},commitHash:"a581499e599b8685210defcdcaa6709fdf0b924e",coreVersion:"2.8.0",description:(()=>{const e=n(123);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(n.t.bind(n,731,17)).then((e=>e.default))}})()}})(),o=o.plugin})()));