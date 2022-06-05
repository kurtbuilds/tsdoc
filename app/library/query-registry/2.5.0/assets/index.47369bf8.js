var bd=Object.defineProperty;var Nd=(e,t,n)=>t in e?bd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Td=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Pa=(e,t,n)=>(Nd(e,typeof t!="symbol"?t+"":t,n),n);var Uh=Td((Bh,xd)=>{const Ed=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};Ed();var M={exports:{}},I={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ul=Object.getOwnPropertySymbols,Od=Object.prototype.hasOwnProperty,qd=Object.prototype.propertyIsEnumerable;function Dd(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Md(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var eu=Md()?Object.assign:function(e,t){for(var n,r=Dd(e),i,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var s in n)Od.call(n,s)&&(r[s]=n[s]);if(ul){i=ul(n);for(var o=0;o<i.length;o++)qd.call(n,i[o])&&(r[i[o]]=n[i[o]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=eu,En=60103,tu=60106;I.Fragment=60107;I.StrictMode=60108;I.Profiler=60114;var nu=60109,ru=60110,iu=60112;I.Suspense=60113;var au=60115,su=60116;if(typeof Symbol=="function"&&Symbol.for){var Oe=Symbol.for;En=Oe("react.element"),tu=Oe("react.portal"),I.Fragment=Oe("react.fragment"),I.StrictMode=Oe("react.strict_mode"),I.Profiler=Oe("react.profiler"),nu=Oe("react.provider"),ru=Oe("react.context"),iu=Oe("react.forward_ref"),I.Suspense=Oe("react.suspense"),au=Oe("react.memo"),su=Oe("react.lazy")}var pl=typeof Symbol=="function"&&Symbol.iterator;function jd(e){return e===null||typeof e!="object"?null:(e=pl&&e[pl]||e["@@iterator"],typeof e=="function"?e:null)}function jr(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lu={};function On(e,t,n){this.props=e,this.context=t,this.refs=lu,this.updater=n||ou}On.prototype.isReactComponent={};On.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(jr(85));this.updater.enqueueSetState(this,e,t,"setState")};On.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cu(){}cu.prototype=On.prototype;function to(e,t,n){this.props=e,this.context=t,this.refs=lu,this.updater=n||ou}var no=to.prototype=new cu;no.constructor=to;eo(no,On.prototype);no.isPureReactComponent=!0;var ro={current:null},uu=Object.prototype.hasOwnProperty,pu={key:!0,ref:!0,__self:!0,__source:!0};function du(e,t,n){var r,i={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)uu.call(t,r)&&!pu.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:En,type:e,key:a,ref:s,props:i,_owner:ro.current}}function Cd(e,t){return{$$typeof:En,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function io(e){return typeof e=="object"&&e!==null&&e.$$typeof===En}function Id(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dl=/\/+/g;function Sa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Id(""+e.key):t.toString(36)}function ci(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case En:case tu:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Sa(s,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(dl,"$&/")+"/"),ci(i,t,n,"",function(c){return c})):i!=null&&(io(i)&&(i=Cd(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(dl,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Array.isArray(e))for(var o=0;o<e.length;o++){a=e[o];var l=r+Sa(a,o);s+=ci(a,t,n,l,i)}else if(l=jd(e),typeof l=="function")for(e=l.call(e),o=0;!(a=e.next()).done;)a=a.value,l=r+Sa(a,o++),s+=ci(a,t,n,l,i);else if(a==="object")throw t=""+e,Error(jr(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function Vr(e,t,n){if(e==null)return e;var r=[],i=0;return ci(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Fd(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var mu={current:null};function Xe(){var e=mu.current;if(e===null)throw Error(jr(321));return e}var Ld={ReactCurrentDispatcher:mu,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:ro,IsSomeRendererActing:{current:!1},assign:eo};I.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!io(e))throw Error(jr(143));return e}};I.Component=On;I.PureComponent=to;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ld;I.cloneElement=function(e,t,n){if(e==null)throw Error(jr(267,e));var r=eo({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=ro.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)uu.call(t,l)&&!pu.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:En,type:e.type,key:i,ref:a,props:r,_owner:s}};I.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:ru,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:nu,_context:e},e.Consumer=e};I.createElement=du;I.createFactory=function(e){var t=du.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:iu,render:e}};I.isValidElement=io;I.lazy=function(e){return{$$typeof:su,_payload:{_status:-1,_result:e},_init:Fd}};I.memo=function(e,t){return{$$typeof:au,type:e,compare:t===void 0?null:t}};I.useCallback=function(e,t){return Xe().useCallback(e,t)};I.useContext=function(e,t){return Xe().useContext(e,t)};I.useDebugValue=function(){};I.useEffect=function(e,t){return Xe().useEffect(e,t)};I.useImperativeHandle=function(e,t,n){return Xe().useImperativeHandle(e,t,n)};I.useLayoutEffect=function(e,t){return Xe().useLayoutEffect(e,t)};I.useMemo=function(e,t){return Xe().useMemo(e,t)};I.useReducer=function(e,t,n){return Xe().useReducer(e,t,n)};I.useRef=function(e){return Xe().useRef(e)};I.useState=function(e){return Xe().useState(e)};I.version="17.0.2";M.exports=I;var Ad=M.exports;const Ud=(e,t)=>e===t,zd=()=>{const e=!!(typeof window<"u"&&window.document&&window.document.createElement),t=typeof navigator<"u"&&navigator.product==="ReactNative";return e||t},Bd=zd();let Hd=!1;const $d=()=>Bd&&!Hd,Vd=e=>e,Gd=(e,t=Vd,n=Ud)=>{if(!(e._subscribers instanceof Set))throw new Error("Invalid entity.");const[r,i]=M.exports.useState(t(e._value)),a=M.exports.useCallback(o=>{const l=t(o);!n(r,l)&&i(l)},[t,n,r]);return($d()?M.exports.useLayoutEffect:M.exports.useEffect)(()=>e._subscribe(a),[a,e]),a(e._value),r},Wd=new Set,Jd=(e,t=[])=>{if(e===void 0)throw new Error("Entity requires an initial value.");if(!(t instanceof Array))throw new Error("Invalid plug-ins array.");const n={_value:void 0,_subscribers:new Set};return n._subscribe=Xd(n),n.get=()=>n._value,n.set=Yd(n),n.init=Qd(n,e),n.use=Kd(n),Zd(n,t),n.init(),Wd.add(n),n},Yd=e=>(t,...n)=>{typeof t=="function"&&(t=t(e._value,...n)),e._value=t,e._subscribers.forEach(r=>r(e._value))},Qd=(e,t)=>t&&typeof t.then=="function"?()=>{t.then(n=>setTimeout(()=>e.set(n)))}:()=>{e._value=t},Kd=e=>(...t)=>Gd(e,...t),Xd=e=>t=>(e._subscribers.add(t),()=>{e._subscribers.delete(t)}),Zd=(e,t)=>{t.forEach(n=>{if(typeof n!="object")throw new Error("Invalid plug-in");const r=i=>{if(typeof n[i]=="function"){const a=n[i](e[i],e);if(typeof a!="function")throw new Error(`Invalid override for '${i}' in plug-in.`);e[i]=a}};r("init"),r("set")})};var em=Jd,ao={exports:{}},Cr={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm=M.exports,gu=60103;Cr.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var ml=Symbol.for;gu=ml("react.element"),Cr.Fragment=ml("react.fragment")}var nm=tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rm=Object.prototype.hasOwnProperty,im={key:!0,ref:!0,__self:!0,__source:!0};function fu(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)rm.call(t,r)&&!im.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:gu,type:e,key:a,ref:s,props:i,_owner:nm.current}}Cr.jsx=fu;Cr.jsxs=fu;ao.exports=Cr;const b=ao.exports.jsx,K=ao.exports.jsxs;function am(){if(typeof window<"u"&&window.localStorage){const e=window.localStorage.getItem("color-theme");if(typeof e=="string")return e;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"}function yu(e){const t=Pi.get(),n=window.document.documentElement,r=t==="dark";n.classList.remove(r?"light":"dark"),n.classList.add(t),localStorage.setItem("color-theme",t)}function sm(){const e=Pi.use(),t=M.exports.useCallback(()=>{const n=e==="light"?"dark":"light";Pi.set(n),yu()},[e]);return b("button",{className:"dark-mode-toggle",onClick:t,children:e==="dark"?"Light Mode":"Dark Mode"})}const Pi=em(am());function Si(){return Si=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Si.apply(this,arguments)}var Ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ot||(Ot={}));var gl=function(e){return e},fl="beforeunload",om="popstate";function lm(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function a(){var P=r.location,N=P.pathname,T=P.search,F=P.hash,de=i.state||{};return[de.idx,gl({pathname:N,search:T,hash:F,state:de.usr||null,key:de.key||"default"})]}var s=null;function o(){if(s)k.call(s),s=null;else{var P=Ot.Pop,N=a(),T=N[0],F=N[1];if(k.length){if(T!=null){var de=m-T;de&&(s={action:P,location:F,retry:function(){O(de*-1)}},O(de))}}else p(P)}}r.addEventListener(om,o);var l=Ot.Pop,c=a(),m=c[0],y=c[1],g=hl(),k=hl();m==null&&(m=0,i.replaceState(Si({},i.state,{idx:m}),""));function S(P){return typeof P=="string"?P:ns(P)}function x(P,N){return N===void 0&&(N=null),gl(Si({pathname:y.pathname,hash:"",search:""},typeof P=="string"?$t(P):P,{state:N,key:cm()}))}function d(P,N){return[{usr:P.state,key:P.key,idx:N},S(P)]}function u(P,N,T){return!k.length||(k.call({action:P,location:N,retry:T}),!1)}function p(P){l=P;var N=a();m=N[0],y=N[1],g.call({action:l,location:y})}function f(P,N){var T=Ot.Push,F=x(P,N);function de(){f(P,N)}if(u(T,F,de)){var X=d(F,m+1),Y=X[0],$e=X[1];try{i.pushState(Y,"",$e)}catch{r.location.assign($e)}p(T)}}function h(P,N){var T=Ot.Replace,F=x(P,N);function de(){h(P,N)}if(u(T,F,de)){var X=d(F,m),Y=X[0],$e=X[1];i.replaceState(Y,"",$e),p(T)}}function O(P){i.go(P)}var _={get action(){return l},get location(){return y},createHref:S,push:f,replace:h,go:O,back:function(){O(-1)},forward:function(){O(1)},listen:function(N){return g.push(N)},block:function(N){var T=k.push(N);return k.length===1&&r.addEventListener(fl,yl),function(){T(),k.length||r.removeEventListener(fl,yl)}}};return _}function yl(e){e.preventDefault(),e.returnValue=""}function hl(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function cm(){return Math.random().toString(36).substr(2,8)}function ns(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,a=e.hash,s=a===void 0?"":a;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function $t(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const so=M.exports.createContext(null),oo=M.exports.createContext(null),Ir=M.exports.createContext({outlet:null,matches:[]});function ze(e,t){if(!e)throw new Error(t)}function um(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?$t(t):t,i=vu(r.pathname||"/",n);if(i==null)return null;let a=hu(e);pm(a);let s=null;for(let o=0;s==null&&o<a.length;++o)s=wm(a[o],i);return s}function hu(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,a)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(r)||ze(!1),s.relativePath=s.relativePath.slice(r.length));let o=ct([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(i.index===!0&&ze(!1),hu(i.children,t,l,o)),!(i.path==null&&!i.index)&&t.push({path:o,score:km(o,i.index),routesMeta:l})}),t}function pm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dm=/^:\w+$/,mm=3,gm=2,fm=1,ym=10,hm=-2,kl=e=>e==="*";function km(e,t){let n=e.split("/"),r=n.length;return n.some(kl)&&(r+=hm),t&&(r+=gm),n.filter(i=>!kl(i)).reduce((i,a)=>i+(dm.test(a)?mm:a===""?fm:ym),r)}function vm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function wm(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let s=0;s<n.length;++s){let o=n[s],l=s===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",m=Pm({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},c);if(!m)return null;Object.assign(r,m.params);let y=o.route;a.push({params:r,pathname:ct([i,m.pathname]),pathnameBase:wu(ct([i,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(i=ct([i,m.pathnameBase]))}return a}function Pm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Sm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((c,m,y)=>{if(m==="*"){let g=o[y]||"";s=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return c[m]=_m(o[y]||""),c},{}),pathname:a,pathnameBase:s,pattern:e}}function Sm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,o)=>(r.push(o),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function _m(e,t){try{return decodeURIComponent(e)}catch{return e}}function xm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?$t(e):e;return{pathname:n?n.startsWith("/")?n:Rm(n,t):t,search:Nm(r),hash:Tm(i)}}function Rm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ku(e,t,n){let r=typeof e=="string"?$t(e):e,i=e===""||r.pathname===""?"/":r.pathname,a;if(i==null)a=n;else{let o=t.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),o-=1;r.pathname=l.join("/")}a=o>=0?t[o]:"/"}let s=xm(r,a);return i&&i!=="/"&&i.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function bm(e){return e===""||e.pathname===""?"/":typeof e=="string"?$t(e).pathname:e.pathname}function vu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const ct=e=>e.join("/").replace(/\/\/+/g,"/"),wu=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Nm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Tm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Em(e){Fr()||ze(!1);let{basename:t,navigator:n}=M.exports.useContext(so),{hash:r,pathname:i,search:a}=Pu(e),s=i;if(t!=="/"){let o=bm(e),l=o!=null&&o.endsWith("/");s=i==="/"?t+(l?"/":""):ct([t,i])}return n.createHref({pathname:s,search:a,hash:r})}function Fr(){return M.exports.useContext(oo)!=null}function Ki(){return Fr()||ze(!1),M.exports.useContext(oo).location}function Om(){Fr()||ze(!1);let{basename:e,navigator:t}=M.exports.useContext(so),{matches:n}=M.exports.useContext(Ir),{pathname:r}=Ki(),i=JSON.stringify(n.map(o=>o.pathnameBase)),a=M.exports.useRef(!1);return M.exports.useEffect(()=>{a.current=!0}),M.exports.useCallback(function(o,l){if(l===void 0&&(l={}),!a.current)return;if(typeof o=="number"){t.go(o);return}let c=ku(o,JSON.parse(i),r);e!=="/"&&(c.pathname=ct([e,c.pathname])),(l.replace?t.replace:t.push)(c,l.state)},[e,t,i,r])}function Xi(){let{matches:e}=M.exports.useContext(Ir),t=e[e.length-1];return t?t.params:{}}function Pu(e){let{matches:t}=M.exports.useContext(Ir),{pathname:n}=Ki(),r=JSON.stringify(t.map(i=>i.pathnameBase));return M.exports.useMemo(()=>ku(e,JSON.parse(r),n),[e,r,n])}function qm(e,t){Fr()||ze(!1);let{matches:n}=M.exports.useContext(Ir),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let a=r?r.pathnameBase:"/";r&&r.route;let s=Ki(),o;if(t){var l;let g=typeof t=="string"?$t(t):t;a==="/"||((l=g.pathname)==null?void 0:l.startsWith(a))||ze(!1),o=g}else o=s;let c=o.pathname||"/",m=a==="/"?c:c.slice(a.length)||"/",y=um(e,{pathname:m});return Dm(y&&y.map(g=>Object.assign({},g,{params:Object.assign({},i,g.params),pathname:ct([a,g.pathname]),pathnameBase:g.pathnameBase==="/"?a:ct([a,g.pathnameBase])})),n)}function Dm(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>M.exports.createElement(Ir.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function et(e){ze(!1)}function Mm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ot.Pop,navigator:a,static:s=!1}=e;Fr()&&ze(!1);let o=wu(t),l=M.exports.useMemo(()=>({basename:o,navigator:a,static:s}),[o,a,s]);typeof r=="string"&&(r=$t(r));let{pathname:c="/",search:m="",hash:y="",state:g=null,key:k="default"}=r,S=M.exports.useMemo(()=>{let x=vu(c,o);return x==null?null:{pathname:x,search:m,hash:y,state:g,key:k}},[o,c,m,y,g,k]);return S==null?null:M.exports.createElement(so.Provider,{value:l},M.exports.createElement(oo.Provider,{children:n,value:{location:S,navigationType:i}}))}function jm(e){let{children:t,location:n}=e;return qm(rs(t),n)}function rs(e){let t=[];return M.exports.Children.forEach(e,n=>{if(!M.exports.isValidElement(n))return;if(n.type===M.exports.Fragment){t.push.apply(t,rs(n.props.children));return}n.type!==et&&ze(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=rs(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}function Cm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const Im=["onClick","reloadDocument","replace","state","target","to"];function Fm(e){let{basename:t,children:n,window:r}=e,i=M.exports.useRef();i.current==null&&(i.current=lm({window:r}));let a=i.current,[s,o]=M.exports.useState({action:a.action,location:a.location});return M.exports.useLayoutEffect(()=>a.listen(o),[a]),M.exports.createElement(Mm,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}function Lm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Lr=M.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:a=!1,state:s,target:o,to:l}=t,c=Cm(t,Im),m=Em(l),y=Am(l,{replace:a,state:s,target:o});function g(k){r&&r(k),!k.defaultPrevented&&!i&&y(k)}return M.exports.createElement("a",is({},c,{href:m,onClick:g,ref:n,target:o}))});function Am(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,a=Om(),s=Ki(),o=Pu(e);return M.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!Lm(l)){l.preventDefault();let c=!!r||ns(s)===ns(o);a(e,{replace:c,state:i})}},[s,a,o,r,i,n,e])}var Su={},Pe={};Object.defineProperty(Pe,"__esModule",{value:!0});Pe.Serr=Pe.Maybe=Pe.Err=Pe.Ok=Pe.Result=void 0;class we{constructor(t){Pa(this,"result");this.result=t}static value(t){return new we({type:"value",value:t})}static error(t){return new we({type:"error",error:t})}unwrap(){switch(this.result.type){case"value":return this.result.value;case"error":throw this.result.error}}unwrap_err(){switch(this.result.type){case"error":return this.result.error;case"value":throw new Error("Tried to unwrap_err on result, but not an error.")}}map(t){switch(this.result.type){case"value":return new we({type:"value",value:t(this.result.value)});case"error":return new we(this.result)}}async amap(t){switch(this.result.type){case"value":return new we({type:"value",value:await t(this.result.value)});case"error":return new we(this.result)}}unwrap_or(t){switch(this.result.type){case"value":return this.result.value;case"error":return t}}is_ok(){return this.result.type==="value"}is_err(){return this.result.type==="error"}map_err(t){switch(this.result.type){case"value":return new we(this.result);case"error":return new we({type:"error",error:t(this.result.error)})}}}Pe.Result=we;function _u(e){return we.value(e)}Pe.Ok=_u;function xu(e){return we.error(e)}Pe.Err=xu;function Um(e){return e==null?xu(new Error("Not found.")):_u(e)}Pe.Maybe=Um;function zm(e){return we.error(new Error(e))}Pe.Serr=zm;var At={};Object.defineProperty(At,"__esModule",{value:!0});At.GQLErrorGroup=At.GQLError=void 0;class as extends Error{constructor(t){super(t.message)}}At.GQLError=as;class _i extends Error{constructor(n){super(n.map(r=>r.message).join(`
`));Pa(this,"errors");this.errors=n}static from_gql_errors(n){return new _i(n.map(r=>new as(r)))}static from_string(n){return new _i([new as({message:n})])}}At.GQLErrorGroup=_i;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.unimplemented=e.infallible=e.NULL_UUID=e.GQLErrorGroup=e.Maybe=e.Serr=e.Result=e.Ok=e.Err=e.gql=e.result=void 0,e.result=Pe,e.gql=At;var t=Pe;Object.defineProperty(e,"Err",{enumerable:!0,get:function(){return t.Err}}),Object.defineProperty(e,"Ok",{enumerable:!0,get:function(){return t.Ok}}),Object.defineProperty(e,"Result",{enumerable:!0,get:function(){return t.Result}}),Object.defineProperty(e,"Serr",{enumerable:!0,get:function(){return t.Serr}}),Object.defineProperty(e,"Maybe",{enumerable:!0,get:function(){return t.Maybe}});var n=At;Object.defineProperty(e,"GQLErrorGroup",{enumerable:!0,get:function(){return n.GQLErrorGroup}}),e.NULL_UUID="00000000-0000-0000-0000-000000000000";function r(a){throw new Error("Reached infallible but that shouldn't be possible.")}e.infallible=r;function i(){throw new Error("This codepath has not been implemented.")}e.unimplemented=i})(Su);function Ru(e){return M.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),M.exports.createElement("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}function Bm(...e){return e.filter(Boolean).join(" ")}function bu({pkg:e,version:t,file:n,line:r}){return b(Lr,{to:`/${e}/${t}/file/${n}#source.${r}`,className:"text-gray-400 hover:text-gray-600",children:b(Ru,{className:"w-6 mt-1"})})}function Nu({code:e,language:t,line_numbers:n,well:r,id:i}){if(n&&!i)throw new Error("line_numbers requires id");const a=Bm(n?"line-numbers linkable-line-numbers":"no-line-numbers",r?"well":"",`language-${t}`),s=M.exports.useRef(null);return M.exports.useEffect(()=>{window.Prism?.highlightElement(s.current)},[e]),b("pre",{className:a,id:i,children:b("code",{className:`language-${t}`,ref:s,children:e})})}function Hm(e,t){let n=-1,r=e.length,i=0,a=[];for(let s=0;s<t.length;s++){const o=t[s].exec(e);(o?.index??e.length)<r&&(a=o?.map(l=>l.toString())??[],n=s,r=o.index,i=o[0].length)}return r!==0?{content:e.slice(0,r),groups:a,regex_index:-1}:{content:e.slice(0,i),groups:a,regex_index:n}}function hr(e){e=e.trim();const t=[/```\n?(\w+)\n([\s\S]*?)```/m,/\n\n/m,/\n/m,/{@(\w+) (.*?)( \| (.*?))?}/m,/`(.*?)`/],n=[];let r=0;for(;e;){const i=Hm(e,t);i.regex_index===0?n.push(b(Nu,{well:!0,code:i.groups[2],language:"typescript"},r)):i.regex_index===1?n.push(b("br",{},r)):i.regex_index===2?n.push(" "):i.regex_index===3?n.push(b("a",{href:i.groups[2],className:"link",target:"_blank",referrerPolicy:"no-referrer",children:i.groups[4]},r)):i.regex_index===4?n.push(b("span",{className:"code",children:i.groups[1]},r)):n.push(i.content),r+=1,e=e.slice(i.content.length)}return n}function $m(e,t){return[...Array(2*e.length-1)].map((n,r)=>r%2?t:e[r/2])}function ss(e,t){if(e.type==="intrinsic")return e.name;if(e.type==="reference")if(e.typeArguments){const n=$m(e.typeArguments.map(r=>ss(r,t)),", ");return K("span",{children:[e.name,"<",n,">"]})}else return b(Lr,{className:"hover:text-gray-400",to:`/${t.package}/${t.version}/interface/${e.name}`,children:e.name},e.name);else{if(e.type==="reflection")return b("span",{children:"Unsupported"});Su.infallible(e)}}const Vm=0,Gm="query-registry",Wm=1,Jm="Project",Ym={},Qm={shortText:`This package exports several functions to query
the {@link https://www.npmjs.com | npm registry}
(or one of its mirrors) through one of its
{@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md | endpoints}.`,tags:[{tag:"example",text:`
Get the metadata for the npm registry:

\`\`\`typescript
import { getRegistryMetadata } from 'query-registry';

(async () => {
    const metadata = await getRegistryMetadata();

    // Output: 'registry'
    console.log(metadata.db_name);
})();
\`\`\`
`},{tag:"example",text:`
Get the latest manifest for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getPackageManifest } from 'query-registry';

(async () => {
    const manifest = await getPackageManifest({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(manifest.name);
})();
\`\`\`
`},{tag:"example",text:`
Get the abbreviated packument for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getAbbreviatedPackument } from 'query-registry';

(async () => {
    const packument = await getAbbreviatedPackument({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(manifest.name);
})();
\`\`\`
`},{tag:"example",text:`
Get the weekly downloads for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getPackageDownloads } from 'query-registry';

(async () => {
    const downloads = await getPackageDownloads({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(downloads.package);

    // Output: 'number'
    console.log(typeof downloads.downloads);
})();
\`\`\`
`},{tag:"example",text:`
Get the search results for text query \`query-registry\` from the npm registry:

\`\`\`typescript
import { searchPackages } from 'query-registry';

(async () => {
    const results = await searchPackages({ query: { text: 'query-registry' } });

    // Output: 'query-registry'
    console.log(results.objects[0].package.name);
})();
\`\`\`
`},{tag:"example",text:'\nEnable {@link https://www.npmjs.com/package/debug | debug messages}\nby setting the `DEBUG` environment variable to `query-registry`\n(available only in non production environments):\n\n```bash\n$ DEBUG="query-registry"\n```\n'}]},Km="",Xm=[{id:427,name:"FetchError",kind:128,kindString:"Class",flags:{},comment:{shortText:"`FetchError` represents an error that happened when fetching a URL.",text:"The `instanceof` operator can be used to check for this error.\n"},children:[{id:438,name:"constructor",kind:512,kindString:"Constructor",flags:{},sources:[{fileName:"stage/query-registry/src/utils/errors.ts",line:9,character:4}],signatures:[{id:439,name:"new FetchError",kind:16384,kindString:"Constructor signature",flags:{},parameters:[{id:440,name:"url",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"string"}},{id:441,name:"response",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",qualifiedName:"Response",package:".pnpm",name:"Response"}}],type:{type:"reference",id:427,name:"FetchError"},overwrites:{type:"reference",name:"BaseError.constructor"}}],overwrites:{type:"reference",name:"BaseError.constructor"}},{id:447,name:"cause",kind:1024,kindString:"Property",flags:{isExternal:!0,isOptional:!0},sources:[{fileName:"node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es2022.error.d.ts",line:26,character:4}],type:{type:"reference",qualifiedName:"Error",package:".pnpm",name:"Error"},inheritedFrom:{type:"reference",name:"BaseError.cause"}},{id:444,name:"message",kind:1024,kindString:"Property",flags:{isExternal:!0},sources:[{fileName:"stage/query-registry/node_modules/.pnpm/make-error@1.3.6/node_modules/make-error/index.d.ts",line:28,character:4}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"BaseError.message"}},{id:445,name:"name",kind:1024,kindString:"Property",flags:{isExternal:!0},sources:[{fileName:"stage/query-registry/node_modules/.pnpm/make-error@1.3.6/node_modules/make-error/index.d.ts",line:29,character:4}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"BaseError.name"}},{id:443,name:"response",kind:1024,kindString:"Property",flags:{isReadonly:!0},type:{type:"reference",qualifiedName:"Response",package:".pnpm",name:"Response"}},{id:446,name:"stack",kind:1024,kindString:"Property",flags:{isExternal:!0},sources:[{fileName:"stage/query-registry/node_modules/.pnpm/make-error@1.3.6/node_modules/make-error/index.d.ts",line:30,character:4}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"BaseError.stack"}},{id:442,name:"url",kind:1024,kindString:"Property",flags:{isReadonly:!0},type:{type:"intrinsic",name:"string"}},{id:432,name:"prepareStackTrace",kind:1024,kindString:"Property",flags:{isStatic:!0,isExternal:!0,isOptional:!0},sources:[{fileName:"stage/query-registry/node_modules/.pnpm/@types+node@17.0.39/node_modules/@types/node/globals.d.ts",line:11,character:4}],type:{type:"reflection",declaration:{id:433,name:"__type",kind:65536,kindString:"Type literal",flags:{},signatures:[{id:434,name:"__type",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Optional override for formatting stack traces",tags:[{tag:"see",text:`https://v8.dev/docs/stack-trace-api#customizing-stack-traces
`}]},parameters:[{id:435,name:"err",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",qualifiedName:"Error",package:".pnpm",name:"Error"}},{id:436,name:"stackTraces",kind:32768,kindString:"Parameter",flags:{},type:{type:"array",elementType:{type:"reference",qualifiedName:"NodeJS.CallSite",package:".pnpm",name:"CallSite"}}}],type:{type:"intrinsic",name:"any"}}]}},inheritedFrom:{type:"reference",name:"BaseError.prepareStackTrace"}},{id:437,name:"stackTraceLimit",kind:1024,kindString:"Property",flags:{isStatic:!0,isExternal:!0},sources:[{fileName:"stage/query-registry/node_modules/.pnpm/@types+node@17.0.39/node_modules/@types/node/globals.d.ts",line:13,character:4}],type:{type:"intrinsic",name:"number"},inheritedFrom:{type:"reference",name:"BaseError.stackTraceLimit"}},{id:428,name:"captureStackTrace",kind:2048,kindString:"Method",flags:{isStatic:!0,isExternal:!0},signatures:[{id:429,name:"captureStackTrace",kind:4096,kindString:"Call signature",flags:{isExternal:!0},comment:{shortText:"Create .stack property on a target object"},parameters:[{id:430,name:"targetObject",kind:32768,kindString:"Parameter",flags:{isExternal:!0},type:{type:"intrinsic",name:"object"}},{id:431,name:"constructorOpt",kind:32768,kindString:"Parameter",flags:{isExternal:!0,isOptional:!0},type:{type:"reference",qualifiedName:"Function",package:".pnpm",name:"Function"}}],type:{type:"intrinsic",name:"void"},inheritedFrom:{type:"reference",name:"BaseError.captureStackTrace"}}],inheritedFrom:{type:"reference",name:"BaseError.captureStackTrace"}}],groups:[{title:"Constructors",kind:512,children:[438]},{title:"Properties",kind:1024,children:[447,444,445,443,446,442,432,437]},{title:"Methods",kind:2048,children:[428]}],sources:[{fileName:"stage/query-registry/src/utils/errors.ts",line:8,character:13}],extendedTypes:[{type:"reference",qualifiedName:"makeError.BaseError",package:".pnpm",name:"BaseError"}]},{id:100,name:"AbbreviatedPackument",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`AbbreviatedPackument` represents a packument (package document)\ncontaining only the metadata necessary to install a package.",tags:[{tag:"see",text:`{@link RawAbbreviatedPackument}
`}]},children:[{id:106,name:"dist-tags",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of distribution tags to version numbers",tags:[{tag:"see",text:`{@link DistTags}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-abbreviated-packument.ts",line:25,character:4}],type:{type:"reference",id:118,name:"DistTags"},inheritedFrom:{type:"reference",id:282,name:"RawAbbreviatedPackument.dist-tags"}},{id:103,name:"distTags",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of distribution tags to version numbers\n(alias to `dist-tags`)",tags:[{tag:"see",text:`{@link DistTags}
`}]},sources:[{fileName:"stage/query-registry/src/types/abbreviated-packument.ts",line:27,character:13}],type:{type:"reference",id:118,name:"DistTags"}},{id:101,name:"id",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Unique package name (for example, `foo` or `@bar/baz`)"},sources:[{fileName:"stage/query-registry/src/types/abbreviated-packument.ts",line:12,character:13}],type:{type:"intrinsic",name:"string"}},{id:105,name:"modified",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Timestamp of when the package was last modified\nin ISO 8601 format (for example, `2021-11-23T19:12:24.006Z`)"},sources:[{fileName:"stage/query-registry/src/types/raw-abbreviated-packument.ts",line:18,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:281,name:"RawAbbreviatedPackument.modified"}},{id:102,name:"modifiedAt",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Timestamp of when the package was last modified\nin ISO 8601 format (for example, `2021-11-23T19:12:24.006Z`);\n(alias to `modified`)"},sources:[{fileName:"stage/query-registry/src/types/abbreviated-packument.ts",line:19,character:13}],type:{type:"intrinsic",name:"string"}},{id:104,name:"name",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package name"},sources:[{fileName:"stage/query-registry/src/types/raw-abbreviated-packument.ts",line:12,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:280,name:"RawAbbreviatedPackument.name"}},{id:107,name:"versions",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of version numbers to package manifests",tags:[{tag:"see",text:`{@link RawPackageManifest}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-abbreviated-packument.ts",line:32,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"reference",typeArguments:[{type:"reference",id:284,name:"RawPackageManifest"},{type:"union",types:[{type:"literal",value:"name"},{type:"literal",value:"version"},{type:"literal",value:"dependencies"},{type:"literal",value:"devDependencies"},{type:"literal",value:"peerDependencies"},{type:"literal",value:"optionalDependencies"},{type:"literal",value:"bundleDependencies"},{type:"literal",value:"bin"},{type:"literal",value:"directories"},{type:"literal",value:"engines"},{type:"literal",value:"deprecated"},{type:"literal",value:"dist"},{type:"literal",value:"_hasShrinkwrap"}]}],qualifiedName:"Pick",package:".pnpm",name:"Pick"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:283,name:"RawAbbreviatedPackument.versions"}}],groups:[{title:"Properties",kind:1024,children:[106,103,101,105,102,104,107]}],sources:[{fileName:"stage/query-registry/src/types/abbreviated-packument.ts",line:10,character:17}],extendedTypes:[{type:"reference",id:279,name:"RawAbbreviatedPackument"}]},{id:108,name:"BugTracker",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`BugTracker` represents the bug tracking methods."},children:[{id:110,name:"email",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/bug-tracker.ts",line:6,character:13}],type:{type:"intrinsic",name:"string"}},{id:109,name:"url",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/bug-tracker.ts",line:5,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[110,109]}],sources:[{fileName:"stage/query-registry/src/types/bug-tracker.ts",line:4,character:17}]},{id:136,name:"DailyPackageDownloads",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`DailyPackageDownloads` lists the number of downloads for a package\nfor each day in a given time period.",tags:[{tag:"see",text:"{@link DailyRegistryDownloads}"},{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/download-counts.md#ranges}
`}]},children:[{id:138,name:"downloads",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Download counts per day"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:51,character:13}],type:{type:"array",elementType:{type:"reference",id:145,name:"DownloadsPerDay"}},inheritedFrom:{type:"reference",id:142,name:"DailyRegistryDownloads.downloads"}},{id:140,name:"end",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date of the last day (inclusive)"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:57,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:144,name:"DailyRegistryDownloads.end"}},{id:137,name:"package",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package name"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:39,character:13}],type:{type:"intrinsic",name:"string"}},{id:139,name:"start",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date of the first day (inclusive)"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:54,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:143,name:"DailyRegistryDownloads.start"}}],groups:[{title:"Properties",kind:1024,children:[138,140,137,139]}],sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:37,character:17}],extendedTypes:[{type:"reference",id:141,name:"DailyRegistryDownloads"}]},{id:141,name:"DailyRegistryDownloads",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`DailyRegistryDownloads` lists the number of downloads for the registry\nfor each day in a given time period.",tags:[{tag:"see",text:"{@link DownloadsPerDay}"},{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/download-counts.md#ranges}
`}]},children:[{id:142,name:"downloads",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Download counts per day"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:51,character:13}],type:{type:"array",elementType:{type:"reference",id:145,name:"DownloadsPerDay"}}},{id:144,name:"end",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date of the last day (inclusive)"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:57,character:13}],type:{type:"intrinsic",name:"string"}},{id:143,name:"start",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date of the first day (inclusive)"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:54,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[142,144,143]}],sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:49,character:17}],extendedBy:[{type:"reference",id:136,name:"DailyPackageDownloads"}]},{id:124,name:"DateRange",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`DateRange` represents a time period between two days\nwhere the `start` and `end` dates are inclusive.",tags:[{tag:"example",text:`
\`\`\`typescript
const dateRange = {
    start: new Date('2019-01-01'),
    end: new Date('2020-01-01'),
};
\`\`\`
`},{tag:"see",text:`{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date}
`}]},children:[{id:126,name:"end",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date of the last day (inclusive)"},sources:[{fileName:"stage/query-registry/src/types/download-period.ts",line:49,character:13}],type:{type:"reference",qualifiedName:"Date",package:".pnpm",name:"Date"}},{id:125,name:"start",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date of the first day (inclusive)"},sources:[{fileName:"stage/query-registry/src/types/download-period.ts",line:46,character:13}],type:{type:"reference",qualifiedName:"Date",package:".pnpm",name:"Date"}}],groups:[{title:"Properties",kind:1024,children:[126,125]}],sources:[{fileName:"stage/query-registry/src/types/download-period.ts",line:44,character:17}]},{id:111,name:"DistInfo",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`DistInfo` contains data describing the distributed package.",tags:[{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#dist}
`}]},children:[{id:115,name:"fileCount",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Number of files in the tarball"},sources:[{fileName:"stage/query-registry/src/types/dist-info.ts",line:17,character:13}],type:{type:"intrinsic",name:"number"}},{id:114,name:"integrity",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Usually, SHA512 sum of the tarball preceded by `sha512-`"},sources:[{fileName:"stage/query-registry/src/types/dist-info.ts",line:14,character:13}],type:{type:"intrinsic",name:"string"}},{id:117,name:"npm-signature",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"npm PGP signature"},sources:[{fileName:"stage/query-registry/src/types/dist-info.ts",line:23,character:4}],type:{type:"intrinsic",name:"string"}},{id:113,name:"shasum",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"SHA1 sum of the tarball"},sources:[{fileName:"stage/query-registry/src/types/dist-info.ts",line:11,character:13}],type:{type:"intrinsic",name:"string"}},{id:112,name:"tarball",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Tarball URL"},sources:[{fileName:"stage/query-registry/src/types/dist-info.ts",line:8,character:13}],type:{type:"intrinsic",name:"string"}},{id:116,name:"unpackedSize",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Total size in bytes of the unpacked files in the tarball"},sources:[{fileName:"stage/query-registry/src/types/dist-info.ts",line:20,character:13}],type:{type:"intrinsic",name:"number"}}],groups:[{title:"Properties",kind:1024,children:[115,114,117,113,112,116]}],sources:[{fileName:"stage/query-registry/src/types/dist-info.ts",line:6,character:17}]},{id:118,name:"DistTags",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`DistTags` maps distribution tags to version numbers."},children:[{id:119,name:"latest",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Latest version number"},sources:[{fileName:"stage/query-registry/src/types/dist-tags.ts",line:6,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[119]}],sources:[{fileName:"stage/query-registry/src/types/dist-tags.ts",line:4,character:17}],indexSignature:{id:120,name:"__index",kind:8192,kindString:"Index signature",flags:{},comment:{shortText:"Mapping of distribution tags to version numbers"},parameters:[{id:121,name:"key",kind:32768,flags:{},type:{type:"intrinsic",name:"string"}}],type:{type:"intrinsic",name:"string"}}},{id:145,name:"DownloadsPerDay",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`DownloadsPerDay` lists the number of downloads in a given day."},children:[{id:147,name:"day",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Day date"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:68,character:13}],type:{type:"intrinsic",name:"string"}},{id:146,name:"downloads",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Total number of downloads in the day"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:65,character:13}],type:{type:"intrinsic",name:"number"}}],groups:[{title:"Properties",kind:1024,children:[147,146]}],sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:63,character:17}]},{id:148,name:"GitRepository",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`GitRepository` represents a git repository hosting\nthe source code of a package.",tags:[{tag:"see",text:`{@link Repository}
`}]},children:[{id:151,name:"directory",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:`Specific directory in the repository
(for example, a directory in a monorepo)`},sources:[{fileName:"stage/query-registry/src/types/git-repository.ts",line:18,character:13}],type:{type:"intrinsic",name:"string"}},{id:149,name:"type",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Repository type, always `git`"},sources:[{fileName:"stage/query-registry/src/types/git-repository.ts",line:9,character:13}],type:{type:"literal",value:"git"}},{id:150,name:"url",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Repository URL"},sources:[{fileName:"stage/query-registry/src/types/git-repository.ts",line:12,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[151,149,150]}],sources:[{fileName:"stage/query-registry/src/types/git-repository.ts",line:7,character:17}]},{id:152,name:"NpmOperationalInternal",kind:256,kindString:"Interface",flags:{},children:[{id:153,name:"host",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/npm-operational-internal.ts",line:2,character:13}],type:{type:"intrinsic",name:"string"}},{id:154,name:"tmp",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/npm-operational-internal.ts",line:3,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[153,154]}],sources:[{fileName:"stage/query-registry/src/types/npm-operational-internal.ts",line:1,character:17}]},{id:127,name:"PackageDownloads",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`PackageDownloads` lists the number of downloads for a package\nin a given time period.",tags:[{tag:"see",text:"{@link RegistryDownloads}"},{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/download-counts.md#point-values}
`}]},children:[{id:129,name:"downloads",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Total number of downloads"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:21,character:13}],type:{type:"intrinsic",name:"number"},inheritedFrom:{type:"reference",id:133,name:"RegistryDownloads.downloads"}},{id:131,name:"end",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date of the last day (inclusive)"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:27,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:135,name:"RegistryDownloads.end"}},{id:128,name:"package",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package name"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:10,character:13}],type:{type:"intrinsic",name:"string"}},{id:130,name:"start",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date of the first day (inclusive)"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:24,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:134,name:"RegistryDownloads.start"}}],groups:[{title:"Properties",kind:1024,children:[129,131,128,130]}],sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:8,character:17}],extendedTypes:[{type:"reference",id:132,name:"RegistryDownloads"}]},{id:419,name:"PackageFlags",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`PackageFlags` contains flag attributes categorizing the package."},children:[{id:421,name:"insecure",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"If true, package is insecure or has vulnerable dependencies"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:167,character:13}],type:{type:"intrinsic",name:"boolean"}},{id:420,name:"unstable",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"If true, package version is `<1.0.0`"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:164,character:13}],type:{type:"intrinsic",name:"boolean"}}],groups:[{title:"Properties",kind:1024,children:[421,420]}],sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:162,character:17}]},{id:155,name:"PackageJSON",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`PackageJSON` contains the package metadata\nusually found in `package.json` files.",tags:[{tag:"remarks",text:`
For some packages, especially legacy ones,
the properties may be mistyped due to incorrect data present on the registry.
`},{tag:"see",text:`{@link https://docs.npmjs.com/cli/v6/configuring-npm/package-json}
`}]},children:[{id:163,name:"author",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Author of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:42,character:13}],type:{type:"reference",id:274,name:"Person"}},{id:182,name:"bin",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Executable files"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:119,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}]}},{id:176,name:"browser",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main file (Browser)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:97,character:13}],type:{type:"intrinsic",name:"string"}},{id:167,name:"bugs",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bug tracker",tags:[{tag:"see",text:`{@link BugTracker}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:70,character:13}],type:{type:"reference",id:108,name:"BugTracker"}},{id:172,name:"bundleDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bundled dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:85,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:173,name:"bundledDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bundled dependencies (alias)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:88,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:186,name:"config",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"npm config"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:131,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}},{id:165,name:"contributors",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Contributors to the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:56,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}}},{id:189,name:"cpu",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"CPU compatibility"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:140,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:168,name:"dependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Runtime dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:73,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}},{id:192,name:"deprecated",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Deprecation message"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:149,character:13}],type:{type:"intrinsic",name:"string"}},{id:158,name:"description",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package description"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:23,character:13}],type:{type:"intrinsic",name:"string"}},{id:169,name:"devDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Development dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:76,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}},{id:184,name:"directories",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Directories describing the package's structure"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:125,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}},{id:187,name:"engines",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Node compatibility"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:134,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}},{id:180,name:"exports",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Export map",tags:[{tag:"see",text:`{@link https://nodejs.org/api/packages.html#packages_subpath_exports}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:113,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"unknown"}],qualifiedName:"Record",package:".pnpm",name:"Record"}]}},{id:181,name:"files",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"File patterns included in the package"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:116,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:159,name:"homepage",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Homepage URL"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:26,character:13}],type:{type:"intrinsic",name:"string"}},{id:162,name:"keywords",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Keywords describing the package"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:35,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:160,name:"license",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"SPDX license identifier"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:29,character:13}],type:{type:"intrinsic",name:"string"}},{id:161,name:"licenseText",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Text of the license"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:32,character:13}],type:{type:"intrinsic",name:"string"}},{id:175,name:"main",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main file (Node)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:94,character:13}],type:{type:"intrinsic",name:"string"}},{id:164,name:"maintainers",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Maintainers of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:49,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}}},{id:183,name:"man",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Man pages"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:122,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"array",elementType:{type:"intrinsic",name:"string"}}]}},{id:177,name:"module",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main file (Modules)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:100,character:13}],type:{type:"intrinsic",name:"string"}},{id:156,name:"name",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package name"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:17,character:13}],type:{type:"intrinsic",name:"string"}},{id:171,name:"optionalDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Optional dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:82,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}},{id:188,name:"os",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"OS compatibility"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:137,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:170,name:"peerDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Peer dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:79,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}},{id:190,name:"private",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Prevent publishing"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:143,character:13}],type:{type:"intrinsic",name:"boolean"}},{id:191,name:"publishConfig",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Publishing configuration"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:146,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}},{id:193,name:"readme",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"README contents"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:152,character:13}],type:{type:"intrinsic",name:"string"}},{id:194,name:"readmeFilename",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Name of the README file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:155,character:13}],type:{type:"intrinsic",name:"string"}},{id:166,name:"repository",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Repository containing the package's source",tags:[{tag:"see",text:`{@link Repository}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:63,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",id:374,name:"Repository"}]}},{id:185,name:"scripts",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"npm scripts"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:128,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}},{id:174,name:"source",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main source file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:91,character:13}],type:{type:"intrinsic",name:"string"}},{id:178,name:"types",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Type declarations file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:103,character:13}],type:{type:"intrinsic",name:"string"}},{id:179,name:"typings",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Type declarations file (alias)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:106,character:13}],type:{type:"intrinsic",name:"string"}},{id:157,name:"version",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package version number"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:20,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[163,182,176,167,172,173,186,165,189,168,192,158,169,184,187,180,181,159,162,160,161,175,164,183,177,156,171,188,170,190,191,193,194,166,185,174,178,179,157]}],sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:15,character:17}],indexSignature:{id:195,name:"__index",kind:8192,kindString:"Index signature",flags:{},comment:{shortText:"Other fields"},parameters:[{id:196,name:"key",kind:32768,flags:{},type:{type:"intrinsic",name:"string"}}],type:{type:"intrinsic",name:"unknown"}},extendedBy:[{type:"reference",id:284,name:"RawPackageManifest"}]},{id:405,name:"PackageLinks",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`PackageLinks` contains a collection of links of pages associated to the package."},children:[{id:409,name:"bugs",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:123,character:13}],type:{type:"intrinsic",name:"string"}},{id:407,name:"homepage",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:121,character:13}],type:{type:"intrinsic",name:"string"}},{id:406,name:"npm",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:120,character:13}],type:{type:"intrinsic",name:"string"}},{id:408,name:"repository",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:122,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[409,407,406,408]}],sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:119,character:17}],indexSignature:{id:410,name:"__index",kind:8192,kindString:"Index signature",flags:{},parameters:[{id:411,name:"key",kind:32768,flags:{},type:{type:"intrinsic",name:"string"}}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"undefined"}]}}},{id:197,name:"PackageManifest",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`PackageManifest` represents the manifest describing a specific version\n of a package.",tags:[{tag:"remarks",text:`
For some packages, especially legacy ones,
the properties may be mistyped due to incorrect data present on the registry.
`},{tag:"see",text:`{@link RawPackageManifest}
`}]},children:[{id:214,name:"_hasShrinkwrap",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"True if the package has a shrinkwrap file"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:61,character:13}],type:{type:"intrinsic",name:"boolean"},inheritedFrom:{type:"reference",id:294,name:"RawPackageManifest._hasShrinkwrap"}},{id:205,name:"_id",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package version ID (for example, `foo@1.0.0` or `@bar/baz@1.0.0`)"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:22,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:285,name:"RawPackageManifest._id"}},{id:211,name:"_nodeVersion",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Node version used when publishing"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:48,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:291,name:"RawPackageManifest._nodeVersion"}},{id:213,name:"_npmOperationalInternal",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Internal npm data",tags:[{tag:"see",text:`{@link NpmOperationalInternal}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:58,character:13}],type:{type:"reference",id:152,name:"NpmOperationalInternal"},inheritedFrom:{type:"reference",id:293,name:"RawPackageManifest._npmOperationalInternal"}},{id:210,name:"_npmUser",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"User who published this package version",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:45,character:13}],type:{type:"reference",id:274,name:"Person"},inheritedFrom:{type:"reference",id:290,name:"RawPackageManifest._npmUser"}},{id:212,name:"_npmVersion",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"npm version used when publishing"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:51,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:292,name:"RawPackageManifest._npmVersion"}},{id:219,name:"author",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Author of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:42,character:13}],type:{type:"reference",id:274,name:"Person"},inheritedFrom:{type:"reference",id:300,name:"RawPackageManifest.author"}},{id:238,name:"bin",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Executable files"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:119,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}]},inheritedFrom:{type:"reference",id:319,name:"RawPackageManifest.bin"}},{id:232,name:"browser",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main file (Browser)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:97,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:313,name:"RawPackageManifest.browser"}},{id:223,name:"bugs",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bug tracker",tags:[{tag:"see",text:`{@link BugTracker}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:70,character:13}],type:{type:"reference",id:108,name:"BugTracker"},inheritedFrom:{type:"reference",id:304,name:"RawPackageManifest.bugs"}},{id:228,name:"bundleDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bundled dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:85,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:309,name:"RawPackageManifest.bundleDependencies"}},{id:229,name:"bundledDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bundled dependencies (alias)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:88,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:310,name:"RawPackageManifest.bundledDependencies"}},{id:242,name:"config",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"npm config"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:131,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:323,name:"RawPackageManifest.config"}},{id:221,name:"contributors",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Contributors to the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:56,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}},inheritedFrom:{type:"reference",id:302,name:"RawPackageManifest.contributors"}},{id:245,name:"cpu",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"CPU compatibility"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:140,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:326,name:"RawPackageManifest.cpu"}},{id:199,name:"createdAt",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Publishing timestamp"},sources:[{fileName:"stage/query-registry/src/types/package-manifest.ts",line:20,character:13}],type:{type:"intrinsic",name:"string"}},{id:203,name:"definitelyTypedName",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Name of the corresponding DefinitelyTyped package, if any"},sources:[{fileName:"stage/query-registry/src/types/package-manifest.ts",line:36,character:13}],type:{type:"intrinsic",name:"string"}},{id:224,name:"dependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Runtime dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:73,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:305,name:"RawPackageManifest.dependencies"}},{id:248,name:"deprecated",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Deprecation message"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:149,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:329,name:"RawPackageManifest.deprecated"}},{id:215,name:"description",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package description"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:23,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:295,name:"RawPackageManifest.description"}},{id:225,name:"devDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Development dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:76,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:306,name:"RawPackageManifest.devDependencies"}},{id:240,name:"directories",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Directories describing the package's structure"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:125,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:321,name:"RawPackageManifest.directories"}},{id:208,name:"dist",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Distribution data from the registry",tags:[{tag:"see",text:`{@link DistInfo}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:35,character:13}],type:{type:"reference",id:111,name:"DistInfo"},inheritedFrom:{type:"reference",id:288,name:"RawPackageManifest.dist"}},{id:243,name:"engines",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Node compatibility"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:134,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:324,name:"RawPackageManifest.engines"}},{id:236,name:"exports",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Export map",tags:[{tag:"see",text:`{@link https://nodejs.org/api/packages.html#packages_subpath_exports}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:113,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"unknown"}],qualifiedName:"Record",package:".pnpm",name:"Record"}]},inheritedFrom:{type:"reference",id:317,name:"RawPackageManifest.exports"}},{id:237,name:"files",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"File patterns included in the package"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:116,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:318,name:"RawPackageManifest.files"}},{id:209,name:"gitHead",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Commit hash corresponding to the published version"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:38,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:289,name:"RawPackageManifest.gitHead"}},{id:202,name:"gitRepository",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Normalized git repository"},sources:[{fileName:"stage/query-registry/src/types/package-manifest.ts",line:33,character:13}],type:{type:"reference",id:148,name:"GitRepository"}},{id:216,name:"homepage",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Homepage URL"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:26,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:296,name:"RawPackageManifest.homepage"}},{id:198,name:"id",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package version ID (for example, `foo@1.0.0` or `@bar/baz@1.0.0`)"},sources:[{fileName:"stage/query-registry/src/types/package-manifest.ts",line:17,character:13}],type:{type:"intrinsic",name:"string"}},{id:218,name:"keywords",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Keywords describing the package"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:35,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:299,name:"RawPackageManifest.keywords"}},{id:201,name:"license",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Normalized license"},sources:[{fileName:"stage/query-registry/src/types/package-manifest.ts",line:30,character:13}],type:{type:"intrinsic",name:"string"},overwrites:{type:"reference",id:297,name:"RawPackageManifest.license"}},{id:217,name:"licenseText",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Text of the license"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:32,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:298,name:"RawPackageManifest.licenseText"}},{id:231,name:"main",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main file (Node)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:94,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:312,name:"RawPackageManifest.main"}},{id:220,name:"maintainers",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Maintainers of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:49,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}},inheritedFrom:{type:"reference",id:301,name:"RawPackageManifest.maintainers"}},{id:239,name:"man",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Man pages"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:122,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"array",elementType:{type:"intrinsic",name:"string"}}]},inheritedFrom:{type:"reference",id:320,name:"RawPackageManifest.man"}},{id:233,name:"module",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main file (Modules)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:100,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:314,name:"RawPackageManifest.module"}},{id:206,name:"name",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package name"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:25,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:286,name:"RawPackageManifest.name"}},{id:227,name:"optionalDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Optional dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:82,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:308,name:"RawPackageManifest.optionalDependencies"}},{id:244,name:"os",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"OS compatibility"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:137,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:325,name:"RawPackageManifest.os"}},{id:226,name:"peerDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Peer dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:79,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:307,name:"RawPackageManifest.peerDependencies"}},{id:246,name:"private",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Prevent publishing"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:143,character:13}],type:{type:"intrinsic",name:"boolean"},inheritedFrom:{type:"reference",id:327,name:"RawPackageManifest.private"}},{id:247,name:"publishConfig",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Publishing configuration"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:146,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:328,name:"RawPackageManifest.publishConfig"}},{id:200,name:"publisher",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"User who published this version of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-manifest.ts",line:27,character:13}],type:{type:"reference",id:274,name:"Person"}},{id:249,name:"readme",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"README contents"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:152,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:330,name:"RawPackageManifest.readme"}},{id:250,name:"readmeFilename",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Name of the README file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:155,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:331,name:"RawPackageManifest.readmeFilename"}},{id:222,name:"repository",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Repository containing the package's source",tags:[{tag:"see",text:`{@link Repository}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:63,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",id:374,name:"Repository"}]},inheritedFrom:{type:"reference",id:303,name:"RawPackageManifest.repository"}},{id:241,name:"scripts",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"npm scripts"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:128,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:322,name:"RawPackageManifest.scripts"}},{id:230,name:"source",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main source file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:91,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:311,name:"RawPackageManifest.source"}},{id:234,name:"types",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Type declarations file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:103,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:315,name:"RawPackageManifest.types"}},{id:235,name:"typings",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Type declarations file (alias)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:106,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:316,name:"RawPackageManifest.typings"}},{id:204,name:"untypedName",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Name of the corresponding untyped package (w.r.t. DefinitelyTyped)"},sources:[{fileName:"stage/query-registry/src/types/package-manifest.ts",line:39,character:13}],type:{type:"intrinsic",name:"string"}},{id:207,name:"version",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package version number"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:28,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:287,name:"RawPackageManifest.version"}}],groups:[{title:"Properties",kind:1024,children:[214,205,211,213,210,212,219,238,232,223,228,229,242,221,245,199,203,224,248,215,225,240,208,243,236,237,209,202,216,198,218,201,217,231,220,239,233,206,227,244,226,246,247,200,249,250,222,241,230,234,235,204,207]}],sources:[{fileName:"stage/query-registry/src/types/package-manifest.ts",line:15,character:17}],extendedTypes:[{type:"reference",id:284,name:"RawPackageManifest"}]},{id:394,name:"PackageSearchResult",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`PackageSearchResult` contains abbreviated package metadata returned\nby searching the registry for packages.",tags:[{tag:"see",text:"{@link Person}"},{tag:"see",text:`{@link PackageLinks}
`}]},children:[{id:403,name:"author",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package author",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:106,character:13}],type:{type:"reference",id:274,name:"Person"}},{id:398,name:"date",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Publishing timestamp for the latest version"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:79,character:13}],type:{type:"intrinsic",name:"string"}},{id:401,name:"description",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package description"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:96,character:13}],type:{type:"intrinsic",name:"string"}},{id:402,name:"keywords",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Keywords describing the package"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:99,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:400,name:"links",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Links for pages associated to the package",tags:[{tag:"see",text:`{@link PackageLinks}
`}]},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:93,character:13}],type:{type:"reference",id:405,name:"PackageLinks"}},{id:404,name:"maintainers",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package maintainers",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:113,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}}},{id:395,name:"name",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package name"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:70,character:13}],type:{type:"intrinsic",name:"string"}},{id:399,name:"publisher",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package publisher",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:86,character:13}],type:{type:"reference",id:274,name:"Person"}},{id:397,name:"scope",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package scope; either `unscoped` or the package's scope"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:76,character:13}],type:{type:"intrinsic",name:"string"}},{id:396,name:"version",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Latest package version number"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:73,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[403,398,401,402,400,404,395,399,397,396]}],sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:68,character:17}]},{id:251,name:"Packument",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`Packument` represents a packument (package document)\ncontaining all the data about a package.",tags:[{tag:"remarks",text:`
For some packages, especially legacy ones,
the properties may be mistyped due to incorrect data present on the registry.
`},{tag:"see",text:`{@link RawPackument}
`}]},children:[{id:257,name:"_id",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Unique package name (for example, `foo` or `@bar/baz`)"},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:21,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:333,name:"RawPackument._id"}},{id:258,name:"_rev",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Latest revision ID in CouchDB"},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:24,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:334,name:"RawPackument._rev"}},{id:267,name:"author",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Author of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:42,character:13}],type:{type:"reference",id:274,name:"Person"},inheritedFrom:{type:"reference",id:344,name:"RawPackument.author"}},{id:271,name:"bugs",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bug tracker",tags:[{tag:"see",text:`{@link BugTracker}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:70,character:13}],type:{type:"reference",id:108,name:"BugTracker"},inheritedFrom:{type:"reference",id:348,name:"RawPackument.bugs"}},{id:269,name:"contributors",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Contributors to the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:56,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}},inheritedFrom:{type:"reference",id:346,name:"RawPackument.contributors"}},{id:264,name:"description",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package description"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:23,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:340,name:"RawPackument.description"}},{id:260,name:"dist-tags",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of distribution tags to version numbers",tags:[{tag:"see",text:`{@link DistTags}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:34,character:4}],type:{type:"reference",id:118,name:"DistTags"},inheritedFrom:{type:"reference",id:336,name:"RawPackument.dist-tags"}},{id:253,name:"distTags",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of distribution tags to version numbers\n(alias to `dist-tags`)",tags:[{tag:"see",text:`{@link DistTags}
`}]},sources:[{fileName:"stage/query-registry/src/types/packument.ts",line:28,character:13}],type:{type:"reference",id:118,name:"DistTags"}},{id:256,name:"gitRepository",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Normalized git repository"},sources:[{fileName:"stage/query-registry/src/types/packument.ts",line:43,character:13}],type:{type:"reference",id:148,name:"GitRepository"}},{id:265,name:"homepage",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Homepage URL"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:26,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:341,name:"RawPackument.homepage"}},{id:252,name:"id",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Unique package name (for example, `foo` or `@bar/baz`;\nalias to `_id`)"},sources:[{fileName:"stage/query-registry/src/types/packument.ts",line:20,character:13}],type:{type:"intrinsic",name:"string"}},{id:266,name:"keywords",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Keywords describing the package"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:35,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:343,name:"RawPackument.keywords"}},{id:255,name:"license",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Normalized license"},sources:[{fileName:"stage/query-registry/src/types/packument.ts",line:40,character:13}],type:{type:"intrinsic",name:"string"},overwrites:{type:"reference",id:342,name:"RawPackument.license"}},{id:268,name:"maintainers",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Maintainers of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:49,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}},inheritedFrom:{type:"reference",id:345,name:"RawPackument.maintainers"}},{id:259,name:"name",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package name"},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:27,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:335,name:"RawPackument.name"}},{id:272,name:"readme",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"README contents"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:152,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:349,name:"RawPackument.readme"}},{id:273,name:"readmeFilename",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Name of the README file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:155,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:350,name:"RawPackument.readmeFilename"}},{id:270,name:"repository",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Repository containing the package's source",tags:[{tag:"see",text:`{@link Repository}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:63,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",id:374,name:"Repository"}]},inheritedFrom:{type:"reference",id:347,name:"RawPackument.repository"}},{id:261,name:"time",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of version numbers to publishing timestamps",tags:[{tag:"see",text:`{@link VersionsToTimestamps}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:41,character:13}],type:{type:"reference",id:422,name:"VersionsToTimestamps"},inheritedFrom:{type:"reference",id:337,name:"RawPackument.time"}},{id:263,name:"users",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Names of the npm users who starred the package"},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:51,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"boolean"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:339,name:"RawPackument.users"}},{id:262,name:"versions",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of version numbers to package manifests",tags:[{tag:"see",text:`{@link RawPackageManifest}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:48,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"reference",id:284,name:"RawPackageManifest"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:338,name:"RawPackument.versions"}},{id:254,name:"versionsToTimestamps",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of version numbers to publishing timestamps\nwithout the `created` or `modified` properties\npresent in the `time` property",tags:[{tag:"see",text:`{@link VersionsToTimestamps}
`}]},sources:[{fileName:"stage/query-registry/src/types/packument.ts",line:37,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}}],groups:[{title:"Properties",kind:1024,children:[257,258,267,271,269,264,260,253,256,265,252,266,255,268,259,272,273,270,261,263,262,254]}],sources:[{fileName:"stage/query-registry/src/types/packument.ts",line:15,character:17}],extendedTypes:[{type:"reference",id:332,name:"RawPackument"}]},{id:274,name:"Person",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`Person` represents a person associated to a package."},children:[{id:277,name:"email",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/person.ts",line:7,character:13}],type:{type:"intrinsic",name:"string"}},{id:275,name:"name",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/person.ts",line:5,character:13}],type:{type:"intrinsic",name:"string"}},{id:278,name:"url",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/person.ts",line:8,character:13}],type:{type:"intrinsic",name:"string"}},{id:276,name:"username",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/person.ts",line:6,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[277,275,278,276]}],sources:[{fileName:"stage/query-registry/src/types/person.ts",line:4,character:17}]},{id:279,name:"RawAbbreviatedPackument",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`RawAbbreviatedPackument` represents an abbreviated packument (package document),\nas returned from the registry, containing only the metadata necessary to install a package.",tags:[{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#abbreviated-metadata-format}
`}]},children:[{id:282,name:"dist-tags",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of distribution tags to version numbers",tags:[{tag:"see",text:`{@link DistTags}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-abbreviated-packument.ts",line:25,character:4}],type:{type:"reference",id:118,name:"DistTags"}},{id:281,name:"modified",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Timestamp of when the package was last modified\nin ISO 8601 format (for example, `2021-11-23T19:12:24.006Z`)"},sources:[{fileName:"stage/query-registry/src/types/raw-abbreviated-packument.ts",line:18,character:13}],type:{type:"intrinsic",name:"string"}},{id:280,name:"name",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package name"},sources:[{fileName:"stage/query-registry/src/types/raw-abbreviated-packument.ts",line:12,character:13}],type:{type:"intrinsic",name:"string"}},{id:283,name:"versions",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of version numbers to package manifests",tags:[{tag:"see",text:`{@link RawPackageManifest}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-abbreviated-packument.ts",line:32,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"reference",typeArguments:[{type:"reference",id:284,name:"RawPackageManifest"},{type:"union",types:[{type:"literal",value:"name"},{type:"literal",value:"version"},{type:"literal",value:"dependencies"},{type:"literal",value:"devDependencies"},{type:"literal",value:"peerDependencies"},{type:"literal",value:"optionalDependencies"},{type:"literal",value:"bundleDependencies"},{type:"literal",value:"bin"},{type:"literal",value:"directories"},{type:"literal",value:"engines"},{type:"literal",value:"deprecated"},{type:"literal",value:"dist"},{type:"literal",value:"_hasShrinkwrap"}]}],qualifiedName:"Pick",package:".pnpm",name:"Pick"}],qualifiedName:"Record",package:".pnpm",name:"Record"}}],groups:[{title:"Properties",kind:1024,children:[282,281,280,283]}],sources:[{fileName:"stage/query-registry/src/types/raw-abbreviated-packument.ts",line:10,character:17}],extendedBy:[{type:"reference",id:100,name:"AbbreviatedPackument"}]},{id:284,name:"RawPackageManifest",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`RawPackageManifest` represents the manifest, as returned by the registry,\ndescribing a specific version of a package.",tags:[{tag:"remarks",text:`
For some packages, especially legacy ones,
the properties may be mistyped due to incorrect data present on the registry.
`},{tag:"see",text:"{@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#getpackageversion}"},{tag:"see",text:"{@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#abbreviated-version-object}"},{tag:"see",text:"{@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#full-metadata-format}"},{tag:"see",text:"{@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#version}"},{tag:"see",text:`{@link PackageJSON}
`}]},children:[{id:294,name:"_hasShrinkwrap",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"True if the package has a shrinkwrap file"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:61,character:13}],type:{type:"intrinsic",name:"boolean"}},{id:285,name:"_id",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package version ID (for example, `foo@1.0.0` or `@bar/baz@1.0.0`)"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:22,character:13}],type:{type:"intrinsic",name:"string"}},{id:291,name:"_nodeVersion",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Node version used when publishing"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:48,character:13}],type:{type:"intrinsic",name:"string"}},{id:293,name:"_npmOperationalInternal",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Internal npm data",tags:[{tag:"see",text:`{@link NpmOperationalInternal}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:58,character:13}],type:{type:"reference",id:152,name:"NpmOperationalInternal"}},{id:290,name:"_npmUser",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"User who published this package version",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:45,character:13}],type:{type:"reference",id:274,name:"Person"}},{id:292,name:"_npmVersion",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"npm version used when publishing"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:51,character:13}],type:{type:"intrinsic",name:"string"}},{id:300,name:"author",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Author of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:42,character:13}],type:{type:"reference",id:274,name:"Person"},inheritedFrom:{type:"reference",id:163,name:"PackageJSON.author"}},{id:319,name:"bin",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Executable files"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:119,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"}]},inheritedFrom:{type:"reference",id:182,name:"PackageJSON.bin"}},{id:313,name:"browser",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main file (Browser)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:97,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:176,name:"PackageJSON.browser"}},{id:304,name:"bugs",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bug tracker",tags:[{tag:"see",text:`{@link BugTracker}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:70,character:13}],type:{type:"reference",id:108,name:"BugTracker"},inheritedFrom:{type:"reference",id:167,name:"PackageJSON.bugs"}},{id:309,name:"bundleDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bundled dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:85,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:172,name:"PackageJSON.bundleDependencies"}},{id:310,name:"bundledDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bundled dependencies (alias)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:88,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:173,name:"PackageJSON.bundledDependencies"}},{id:323,name:"config",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"npm config"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:131,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:186,name:"PackageJSON.config"}},{id:302,name:"contributors",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Contributors to the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:56,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}},inheritedFrom:{type:"reference",id:165,name:"PackageJSON.contributors"}},{id:326,name:"cpu",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"CPU compatibility"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:140,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:189,name:"PackageJSON.cpu"}},{id:305,name:"dependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Runtime dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:73,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:168,name:"PackageJSON.dependencies"}},{id:329,name:"deprecated",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Deprecation message"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:149,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:192,name:"PackageJSON.deprecated"}},{id:295,name:"description",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package description"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:23,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:158,name:"PackageJSON.description"}},{id:306,name:"devDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Development dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:76,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:169,name:"PackageJSON.devDependencies"}},{id:321,name:"directories",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Directories describing the package's structure"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:125,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:184,name:"PackageJSON.directories"}},{id:288,name:"dist",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Distribution data from the registry",tags:[{tag:"see",text:`{@link DistInfo}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:35,character:13}],type:{type:"reference",id:111,name:"DistInfo"}},{id:324,name:"engines",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Node compatibility"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:134,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:187,name:"PackageJSON.engines"}},{id:317,name:"exports",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Export map",tags:[{tag:"see",text:`{@link https://nodejs.org/api/packages.html#packages_subpath_exports}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:113,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"unknown"}],qualifiedName:"Record",package:".pnpm",name:"Record"}]},inheritedFrom:{type:"reference",id:180,name:"PackageJSON.exports"}},{id:318,name:"files",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"File patterns included in the package"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:116,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:181,name:"PackageJSON.files"}},{id:289,name:"gitHead",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Commit hash corresponding to the published version"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:38,character:13}],type:{type:"intrinsic",name:"string"}},{id:296,name:"homepage",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Homepage URL"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:26,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:159,name:"PackageJSON.homepage"}},{id:299,name:"keywords",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Keywords describing the package"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:35,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:162,name:"PackageJSON.keywords"}},{id:297,name:"license",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"SPDX license identifier"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:29,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:160,name:"PackageJSON.license"}},{id:298,name:"licenseText",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Text of the license"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:32,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:161,name:"PackageJSON.licenseText"}},{id:312,name:"main",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main file (Node)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:94,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:175,name:"PackageJSON.main"}},{id:301,name:"maintainers",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Maintainers of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:49,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}},inheritedFrom:{type:"reference",id:164,name:"PackageJSON.maintainers"}},{id:320,name:"man",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Man pages"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:122,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"array",elementType:{type:"intrinsic",name:"string"}}]},inheritedFrom:{type:"reference",id:183,name:"PackageJSON.man"}},{id:314,name:"module",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main file (Modules)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:100,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:177,name:"PackageJSON.module"}},{id:286,name:"name",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package name"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:25,character:13}],type:{type:"intrinsic",name:"string"},overwrites:{type:"reference",id:156,name:"PackageJSON.name"}},{id:308,name:"optionalDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Optional dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:82,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:171,name:"PackageJSON.optionalDependencies"}},{id:325,name:"os",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"OS compatibility"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:137,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",id:188,name:"PackageJSON.os"}},{id:307,name:"peerDependencies",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Peer dependencies"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:79,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:170,name:"PackageJSON.peerDependencies"}},{id:327,name:"private",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Prevent publishing"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:143,character:13}],type:{type:"intrinsic",name:"boolean"},inheritedFrom:{type:"reference",id:190,name:"PackageJSON.private"}},{id:328,name:"publishConfig",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Publishing configuration"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:146,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:191,name:"PackageJSON.publishConfig"}},{id:330,name:"readme",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"README contents"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:152,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:193,name:"PackageJSON.readme"}},{id:331,name:"readmeFilename",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Name of the README file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:155,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:194,name:"PackageJSON.readmeFilename"}},{id:303,name:"repository",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Repository containing the package's source",tags:[{tag:"see",text:`{@link Repository}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:63,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",id:374,name:"Repository"}]},inheritedFrom:{type:"reference",id:166,name:"PackageJSON.repository"}},{id:322,name:"scripts",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"npm scripts"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:128,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"string"}],qualifiedName:"Record",package:".pnpm",name:"Record"},inheritedFrom:{type:"reference",id:185,name:"PackageJSON.scripts"}},{id:311,name:"source",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Main source file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:91,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:174,name:"PackageJSON.source"}},{id:315,name:"types",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Type declarations file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:103,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:178,name:"PackageJSON.types"}},{id:316,name:"typings",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Type declarations file (alias)"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:106,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",id:179,name:"PackageJSON.typings"}},{id:287,name:"version",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package version number"},sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:28,character:13}],type:{type:"intrinsic",name:"string"},overwrites:{type:"reference",id:157,name:"PackageJSON.version"}}],groups:[{title:"Properties",kind:1024,children:[294,285,291,293,290,292,300,319,313,304,309,310,323,302,326,305,329,295,306,321,288,324,317,318,289,296,299,297,298,312,301,320,314,286,308,325,307,327,328,330,331,303,322,311,315,316,287]}],sources:[{fileName:"stage/query-registry/src/types/raw-package-manifest.ts",line:20,character:17}],extendedTypes:[{type:"reference",id:155,name:"PackageJSON"}],extendedBy:[{type:"reference",id:197,name:"PackageManifest"}]},{id:332,name:"RawPackument",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`RawPackument` represents a packument (package document), as returned\nfrom the registry, containing all the data about a package .",tags:[{tag:"remarks",text:`
For some packages, especially legacy ones,
the properties may be mistyped due to incorrect data present on the registry.
`},{tag:"see",text:"{@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#getpackage}"},{tag:"see",text:"{@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#full-metadata-format}"},{tag:"see",text:"{@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#package}"},{tag:"see",text:`{@link HoistedPackageJSON}
`}]},children:[{id:333,name:"_id",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Unique package name (for example, `foo` or `@bar/baz`)"},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:21,character:13}],type:{type:"intrinsic",name:"string"}},{id:334,name:"_rev",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Latest revision ID in CouchDB"},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:24,character:13}],type:{type:"intrinsic",name:"string"}},{id:344,name:"author",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Author of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:42,character:13}],type:{type:"reference",id:274,name:"Person"},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.author"}},{id:348,name:"bugs",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Bug tracker",tags:[{tag:"see",text:`{@link BugTracker}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:70,character:13}],type:{type:"reference",id:108,name:"BugTracker"},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.bugs"}},{id:346,name:"contributors",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Contributors to the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:56,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.contributors"}},{id:340,name:"description",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package description"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:23,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.description"}},{id:336,name:"dist-tags",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of distribution tags to version numbers",tags:[{tag:"see",text:`{@link DistTags}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:34,character:4}],type:{type:"reference",id:118,name:"DistTags"}},{id:341,name:"homepage",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Homepage URL"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:26,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.homepage"}},{id:343,name:"keywords",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Keywords describing the package"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:35,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.keywords"}},{id:342,name:"license",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"SPDX license identifier"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:29,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.license"}},{id:345,name:"maintainers",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Maintainers of the package",tags:[{tag:"see",text:`{@link Person}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:49,character:13}],type:{type:"array",elementType:{type:"reference",id:274,name:"Person"}},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.maintainers"}},{id:335,name:"name",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package name"},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:27,character:13}],type:{type:"intrinsic",name:"string"}},{id:349,name:"readme",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"README contents"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:152,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.readme"}},{id:350,name:"readmeFilename",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Name of the README file"},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:155,character:13}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.readmeFilename"}},{id:347,name:"repository",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Repository containing the package's source",tags:[{tag:"see",text:`{@link Repository}
`}]},sources:[{fileName:"stage/query-registry/src/types/package-json.ts",line:63,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"string"},{type:"reference",id:374,name:"Repository"}]},inheritedFrom:{type:"reference",name:"HoistedPackageJSON.repository"}},{id:337,name:"time",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of version numbers to publishing timestamps",tags:[{tag:"see",text:`{@link VersionsToTimestamps}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:41,character:13}],type:{type:"reference",id:422,name:"VersionsToTimestamps"}},{id:339,name:"users",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Names of the npm users who starred the package"},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:51,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"intrinsic",name:"boolean"}],qualifiedName:"Record",package:".pnpm",name:"Record"}},{id:338,name:"versions",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Mapping of version numbers to package manifests",tags:[{tag:"see",text:`{@link RawPackageManifest}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:48,character:13}],type:{type:"reference",typeArguments:[{type:"intrinsic",name:"string"},{type:"reference",id:284,name:"RawPackageManifest"}],qualifiedName:"Record",package:".pnpm",name:"Record"}}],groups:[{title:"Properties",kind:1024,children:[333,334,344,348,346,340,336,341,343,342,345,335,349,350,347,337,339,338]}],sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:19,character:17}],extendedTypes:[{type:"reference",id:351,name:"HoistedPackageJSON"}],extendedBy:[{type:"reference",id:251,name:"Packument"}]},{id:132,name:"RegistryDownloads",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`RegistryDownloads` lists the number of downloads for the registry\n in a given time period.",tags:[{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/download-counts.md#point-values}
`}]},children:[{id:133,name:"downloads",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Total number of downloads"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:21,character:13}],type:{type:"intrinsic",name:"number"}},{id:135,name:"end",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date of the last day (inclusive)"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:27,character:13}],type:{type:"intrinsic",name:"string"}},{id:134,name:"start",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date of the first day (inclusive)"},sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:24,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[133,135,134]}],sources:[{fileName:"stage/query-registry/src/types/downloads.ts",line:19,character:17}],extendedBy:[{type:"reference",id:127,name:"PackageDownloads"}]},{id:352,name:"RegistryMetadata",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`RegistryMetadata` contains information about the registry itself.",tags:[{tag:"see",text:"{@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#registry}"},{tag:"see",text:"{@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#get}"},{tag:"see",text:"{@link RegistryMetadataOther}"},{tag:"see",text:`{@link RegistryMetadataSizes}
`}]},children:[{id:363,name:"committed_update_seq",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:21,character:13}],type:{type:"intrinsic",name:"number"}},{id:358,name:"compact_running",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:16,character:13}],type:{type:"intrinsic",name:"boolean"}},{id:364,name:"compacted_seq",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:22,character:13}],type:{type:"intrinsic",name:"number"}},{id:360,name:"data_size",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:18,character:13}],type:{type:"intrinsic",name:"number"}},{id:353,name:"db_name",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Database name, usually `registry`"},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:11,character:13}],type:{type:"intrinsic",name:"string"}},{id:362,name:"disk_format_version",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:20,character:13}],type:{type:"intrinsic",name:"number"}},{id:359,name:"disk_size",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:17,character:13}],type:{type:"intrinsic",name:"number"}},{id:354,name:"doc_count",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:12,character:13}],type:{type:"intrinsic",name:"number"}},{id:355,name:"doc_del_count",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:13,character:13}],type:{type:"intrinsic",name:"number"}},{id:361,name:"instance_start_time",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:19,character:13}],type:{type:"intrinsic",name:"string"}},{id:366,name:"other",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:24,character:13}],type:{type:"reference",id:368,name:"RegistryMetadataOther"}},{id:357,name:"purge_seq",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:15,character:13}],type:{type:"intrinsic",name:"number"}},{id:367,name:"sizes",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:25,character:13}],type:{type:"reference",id:370,name:"RegistryMetadataSizes"}},{id:356,name:"update_seq",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:14,character:13}],type:{type:"intrinsic",name:"number"}},{id:365,name:"uuid",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:23,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[363,358,364,360,353,362,359,354,355,361,366,357,367,356,365]}],sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:9,character:17}]},{id:368,name:"RegistryMetadataOther",kind:256,kindString:"Interface",flags:{},children:[{id:369,name:"data_size",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:29,character:13}],type:{type:"intrinsic",name:"number"}}],groups:[{title:"Properties",kind:1024,children:[369]}],sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:28,character:17}]},{id:370,name:"RegistryMetadataSizes",kind:256,kindString:"Interface",flags:{},children:[{id:372,name:"active",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:34,character:13}],type:{type:"intrinsic",name:"number"}},{id:373,name:"external",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:35,character:13}],type:{type:"intrinsic",name:"number"}},{id:371,name:"file",kind:1024,kindString:"Property",flags:{isReadonly:!0},sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:33,character:13}],type:{type:"intrinsic",name:"number"}}],groups:[{title:"Properties",kind:1024,children:[372,373,371]}],sources:[{fileName:"stage/query-registry/src/types/registry-metadata.ts",line:32,character:17}]},{id:374,name:"Repository",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`Repository` represents a remote repository hosting\nthe source code of a package.",tags:[{tag:"see",text:`{@link https://docs.npmjs.com/cli/v6/configuring-npm/package-json#repository}.
`}]},children:[{id:377,name:"directory",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:`Specific directory in the repository containing the package
(for example, a directory in a monorepo)`},sources:[{fileName:"stage/query-registry/src/types/repository.ts",line:18,character:13}],type:{type:"intrinsic",name:"string"}},{id:375,name:"type",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Repository type (for example, `git`)"},sources:[{fileName:"stage/query-registry/src/types/repository.ts",line:9,character:13}],type:{type:"intrinsic",name:"string"}},{id:376,name:"url",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Repository's URL"},sources:[{fileName:"stage/query-registry/src/types/repository.ts",line:12,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[377,375,376]}],sources:[{fileName:"stage/query-registry/src/types/repository.ts",line:7,character:17}]},{id:378,name:"SearchCriteria",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`SearchCriteria` represents the available search criteria.",tags:[{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#get-v1search}
`}]},children:[{id:381,name:"from",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Return results from this offset"},sources:[{fileName:"stage/query-registry/src/types/search-criteria.ts",line:41,character:13}],type:{type:"intrinsic",name:"number"}},{id:384,name:"maintenance",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package maintenance influence on results (from `0.0` to `1.0`)"},sources:[{fileName:"stage/query-registry/src/types/search-criteria.ts",line:50,character:13}],type:{type:"intrinsic",name:"number"}},{id:383,name:"popularity",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package popularity influence on results (from `0.0` to `1.0`)"},sources:[{fileName:"stage/query-registry/src/types/search-criteria.ts",line:47,character:13}],type:{type:"intrinsic",name:"number"}},{id:382,name:"quality",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Package quality influence on results (from `0.0` to `1.0`)"},sources:[{fileName:"stage/query-registry/src/types/search-criteria.ts",line:44,character:13}],type:{type:"intrinsic",name:"number"}},{id:380,name:"size",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Number of results to return (from `0` to `250`; default: `20` on the npm registry)"},sources:[{fileName:"stage/query-registry/src/types/search-criteria.ts",line:38,character:13}],type:{type:"intrinsic",name:"number"}},{id:379,name:"text",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Query text",tags:[{tag:"remarks",text:"\nThe following special text attributes can be used to refine results:\n\n- `author:<name>`: show packages from the given author\n  (for example, `author:someone`)\n\n- `maintainer:<name>`: show packages with the given maintainer\n  (for example, `maintainer:someone`)\n\n- `keywords:<keyword list>`: show packages matching the given keyword(s);\n  separators `,`, `+` and `,-` mean respectively `OR`, `AND` and `NOT`\n  (for example, use `keywords:foo,bar+baz,-quux` to include keywords `foo`\n  or `bar` and `baz` but not `quux`)\n\n- `not:unstable`: exclude unstable packages (version `<1.0.0`)\n\n- `not:insecure`: exclude insecure packages\n\n- `is:unstable`: include only unstable packages (version `<1.0.0`)\n\n- `is:insecure`: include only insecure packages\n\n- `boost-exact:<true/false>`: boost packages with exact name match\n  (default: `true`)\n"}]},sources:[{fileName:"stage/query-registry/src/types/search-criteria.ts",line:35,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[381,384,383,382,380,379]}],sources:[{fileName:"stage/query-registry/src/types/search-criteria.ts",line:6,character:17}]},{id:389,name:"SearchResult",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`SearchResult` contains the search result for a single package\n and its search score.",tags:[{tag:"see",text:"{@link PackageSearchResult}"},{tag:"see",text:"{@link SearchScore}"},{tag:"see",text:`{@link PackageFlags}
`}]},children:[{id:393,name:"flags",kind:1024,kindString:"Property",flags:{isOptional:!0,isReadonly:!0},comment:{shortText:"Flag attributes for the package",tags:[{tag:"see",text:`{@link PackageFlags}
`}]},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:58,character:13}],type:{type:"reference",id:419,name:"PackageFlags"}},{id:390,name:"package",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Abbreviated package metadata",tags:[{tag:"see",text:`{@link PackageSearchResult}
`}]},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:41,character:13}],type:{type:"reference",id:394,name:"PackageSearchResult"}},{id:391,name:"score",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Final and detailed search score values",tags:[{tag:"see",text:`{@link SearchScore}
`}]},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:48,character:13}],type:{type:"reference",id:412,name:"SearchScore"}},{id:392,name:"searchScore",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Search score value; may be different from `score.final`"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:51,character:13}],type:{type:"intrinsic",name:"number"}}],groups:[{title:"Properties",kind:1024,children:[393,390,391,392]}],sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:35,character:17}]},{id:385,name:"SearchResults",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`SearchResults` contains the results returned by the registry for a query.",tags:[{tag:"see",text:"{@link SearchResult}"},{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#get-v1search}
`}]},children:[{id:386,name:"objects",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"List of search results",tags:[{tag:"see",text:`{@link SearchResult}
`}]},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:15,character:13}],type:{type:"array",elementType:{type:"reference",id:389,name:"SearchResult"}}},{id:388,name:"time",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Date at which the search happened"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:24,character:13}],type:{type:"intrinsic",name:"string"}},{id:387,name:"total",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Total number of search results corresponding to a query;\nmay be higher than the number of `objects`"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:21,character:13}],type:{type:"intrinsic",name:"number"}}],groups:[{title:"Properties",kind:1024,children:[386,388,387]}],sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:9,character:17}]},{id:412,name:"SearchScore",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`SearchScore` contains the final and detailed search score values.",tags:[{tag:"see",text:`{@link SearchScoreDetail}
`}]},children:[{id:414,name:"detail",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Detailed search score values",tags:[{tag:"see",text:`{@link SearchScoreDetail}
`}]},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:141,character:13}],type:{type:"reference",id:415,name:"SearchScoreDetail"}},{id:413,name:"final",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Final search score value, computed from the detailed scores"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:134,character:13}],type:{type:"intrinsic",name:"number"}}],groups:[{title:"Properties",kind:1024,children:[414,413]}],sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:132,character:17}]},{id:415,name:"SearchScoreDetail",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`SearchScoreDetail` contains the search score values for the\nquality, popularity and maintenance categories."},children:[{id:418,name:"maintenance",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package maintenance score value"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:156,character:13}],type:{type:"intrinsic",name:"number"}},{id:417,name:"popularity",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package popularity score value"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:153,character:13}],type:{type:"intrinsic",name:"number"}},{id:416,name:"quality",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package quality score value"},sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:150,character:13}],type:{type:"intrinsic",name:"number"}}],groups:[{title:"Properties",kind:1024,children:[418,417,416]}],sources:[{fileName:"stage/query-registry/src/types/search-results.ts",line:148,character:17}]},{id:422,name:"VersionsToTimestamps",kind:256,kindString:"Interface",flags:{},comment:{shortText:"`VersionsToTimestamps` maps version numbers to their publishing timestamps."},children:[{id:423,name:"created",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Package creation time"},sources:[{fileName:"stage/query-registry/src/types/versions-to-timestamps.ts",line:6,character:13}],type:{type:"intrinsic",name:"string"}},{id:424,name:"modified",kind:1024,kindString:"Property",flags:{isReadonly:!0},comment:{shortText:"Last package update time"},sources:[{fileName:"stage/query-registry/src/types/versions-to-timestamps.ts",line:9,character:13}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[423,424]}],sources:[{fileName:"stage/query-registry/src/types/versions-to-timestamps.ts",line:4,character:17}],indexSignature:{id:425,name:"__index",kind:8192,kindString:"Index signature",flags:{},comment:{shortText:"Mapping of version numbers to publishing timestamps"},parameters:[{id:426,name:"key",kind:32768,flags:{},type:{type:"intrinsic",name:"string"}}],type:{type:"intrinsic",name:"string"}}},{id:123,name:"DefaultDownloadPeriod",kind:4194304,kindString:"Type alias",flags:{},comment:{shortText:"`DefaultDownloadPeriod` represents the default time periods\nsupported by the npm registry."},sources:[{fileName:"stage/query-registry/src/types/download-period.ts",line:24,character:12}],type:{type:"union",types:[{type:"literal",value:"last-day"},{type:"literal",value:"last-week"},{type:"literal",value:"last-month"},{type:"literal",value:"last-year"}]}},{id:122,name:"DownloadPeriod",kind:4194304,kindString:"Type alias",flags:{},comment:{shortText:"`DownloadPeriod` represents a time period\nfor which downloads should be counted.",tags:[{tag:"remarks",text:`
The following time periods are supported:

- a {@link DefaultDownloadPeriod} (for example, \`last-week\`)

- a date for a single day (for example, \`new Date('2020-01-01')\`)

- a {@link DateRange}
`},{tag:"see",text:"{@link DefaultDownloadPeriod}"},{tag:"see",text:"{@link DateRange}"},{tag:"see",text:`{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date}
`}]},sources:[{fileName:"stage/query-registry/src/types/download-period.ts",line:18,character:12}],type:{type:"union",types:[{type:"reference",id:123,name:"DefaultDownloadPeriod"},{type:"reference",qualifiedName:"Date",package:".pnpm",name:"Date"},{type:"reference",id:124,name:"DateRange"}]}},{id:351,name:"HoistedPackageJSON",kind:4194304,kindString:"Type alias",flags:{},comment:{shortText:"`HoistedPackageJSON` contains the data hoisted\nfrom the latest package version into the packument.",tags:[{tag:"remarks",text:`
For some packages, especially legacy ones,
the properties may be mistyped due to incorrect data present on the registry.
`},{tag:"see",text:"{@link PackageJSON}"},{tag:"see",text:"{@link RawPackument}"},{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#full-metadata-format}
`}]},sources:[{fileName:"stage/query-registry/src/types/raw-packument.ts",line:66,character:12}],type:{type:"reference",typeArguments:[{type:"reference",id:155,name:"PackageJSON"},{type:"union",types:[{type:"literal",value:"author"},{type:"literal",value:"bugs"},{type:"literal",value:"contributors"},{type:"literal",value:"description"},{type:"literal",value:"homepage"},{type:"literal",value:"keywords"},{type:"literal",value:"license"},{type:"literal",value:"maintainers"},{type:"literal",value:"readme"},{type:"literal",value:"readmeFilename"},{type:"literal",value:"repository"}]}],qualifiedName:"Pick",package:".pnpm",name:"Pick"},extendedBy:[{type:"reference",id:332,name:"RawPackument"}]},{id:448,name:"InvalidPackageNameError",kind:32,kindString:"Variable",flags:{isConst:!0},comment:{shortText:"`InvalidPackageNameError` is thrown when the name of a package\nis not valid according to the npm registry naming rules.",text:"The `instanceof` operator can be used to check for this error.\n",tags:[{tag:"see",text:`{@link https://www.npmjs.com/package/validate-npm-package-name}
`}]},sources:[{fileName:"stage/query-registry/src/utils/errors.ts",line:30,character:13}],type:{type:"reference",typeArguments:[{type:"reference",qualifiedName:"makeError.BaseError",package:".pnpm",name:"BaseError"}],qualifiedName:"makeError.Constructor",package:".pnpm",name:"Constructor"},defaultValue:"..."},{id:449,name:"InvalidPackageVersionError",kind:32,kindString:"Variable",flags:{isConst:!0},comment:{shortText:"`InvalidPackageVersionError` is thrown when a package's version does not exist.",text:"The `instanceof` operator can be used to check for this error.\n"},sources:[{fileName:"stage/query-registry/src/utils/errors.ts",line:37,character:13}],type:{type:"reference",typeArguments:[{type:"reference",qualifiedName:"makeError.BaseError",package:".pnpm",name:"BaseError"}],qualifiedName:"makeError.Constructor",package:".pnpm",name:"Constructor"},defaultValue:"..."},{id:2,name:"cloudflareRegistry",kind:32,kindString:"Variable",flags:{isConst:!0},comment:{shortText:"npm registry mirror by Cloudflare",tags:[{tag:"remarks",text:`
This registry has CORS enabled and can be used to retrieve
package manifests and packuments in the browser.
`},{tag:"see",text:"{@link https://npmjs.cf}"},{tag:"see",text:`{@link https://registry.npmjs.cf}
`}]},sources:[{fileName:"stage/query-registry/src/data/registries.ts",line:18,character:13}],type:{type:"literal",value:"https://registry.npmjs.cf"},defaultValue:"'https://registry.npmjs.cf'"},{id:1,name:"npmRegistry",kind:32,kindString:"Variable",flags:{isConst:!0},comment:{shortText:"npm registry",tags:[{tag:"see",text:`{@link https://registry.npmjs.org}
`}]},sources:[{fileName:"stage/query-registry/src/data/registries.ts",line:6,character:13}],type:{type:"literal",value:"https://registry.npmjs.org"},defaultValue:"'https://registry.npmjs.org'"},{id:5,name:"npmRegistryDownloadsAPI",kind:32,kindString:"Variable",flags:{isConst:!0},comment:{shortText:"Downloads API for the npm registry",tags:[{tag:"see",text:`{@link https://api.npmjs.org}
`}]},sources:[{fileName:"stage/query-registry/src/data/registries.ts",line:40,character:13}],type:{type:"literal",value:"https://api.npmjs.org"},defaultValue:"'https://api.npmjs.org'"},{id:4,name:"npmRegistryMirrors",kind:32,kindString:"Variable",flags:{isConst:!0},comment:{shortText:"Mirrors of the npm registry.",tags:[{tag:"see",text:"{@link cloudflareRegistry}"},{tag:"see",text:`{@link yarnRegistry}
`}]},sources:[{fileName:"stage/query-registry/src/data/registries.ts",line:33,character:13}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}},defaultValue:"..."},{id:3,name:"yarnRegistry",kind:32,kindString:"Variable",flags:{isConst:!0},comment:{shortText:"npm registry mirror by Yarn",tags:[{tag:"see",text:`{@link https://registry.yarnpkg.com}
`}]},sources:[{fileName:"stage/query-registry/src/data/registries.ts",line:25,character:13}],type:{type:"literal",value:"https://registry.yarnpkg.com"},defaultValue:"'https://registry.yarnpkg.com'"},{id:6,name:"getAbbreviatedPackument",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-abbreviated-packument.ts",line:36,character:22}],signatures:[{id:7,name:"getAbbreviatedPackument",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getAbbreviatedPackument` returns the abbreviated packument (package document)\ncontaining only the metadata necessary to install a package present on the registry.",tags:[{tag:"remarks",text:`
To get all the metadata (full packument) about a package see {@link getPackument}.
`},{tag:"example",text:`
Get the abbreviated packument for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getAbbreviatedPackument } from 'query-registry';

(async () => {
    const packument = await getAbbreviatedPackument({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(packument.name);
})();
\`\`\`
`},{tag:"see",text:"{@link AbbreviatedPackument}"},{tag:"see",text:"{@link RawAbbreviatedPackument}"},{tag:"see",text:"{@link npmRegistry}"},{tag:"see",text:`{@link npmRegistryMirrors}
`}]},parameters:[{id:8,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:9,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:13,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-abbreviated-packument.ts",line:45,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:12,name:"mirrors",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-abbreviated-packument.ts",line:44,character:4}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:10,name:"name",kind:1024,kindString:"Property",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-abbreviated-packument.ts",line:42,character:4}],type:{type:"intrinsic",name:"string"}},{id:11,name:"registry",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-abbreviated-packument.ts",line:43,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[13,12,10,11]}]}}}],type:{type:"reference",typeArguments:[{type:"reference",id:100,name:"AbbreviatedPackument"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:14,name:"getDailyPackageDownloads",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-daily-package-downloads.ts",line:55,character:22}],signatures:[{id:15,name:"getDailyPackageDownloads",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getDailyPackageDownloads` returns the number of downloads for a package\nfor each day in a given time period.",tags:[{tag:"example",text:`
Get the day by day weekly downloads for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getDailyPackageDownloads } from 'query-registry';

(async () => {
    const downloads = await getDailyPackageDownloads({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(downloads.package);

    // Output: 'number'
    console.log(typeof downloads.downloads[0].downloads);
})();
\`\`\`
`},{tag:"example",text:`
Get the day by day monthly downloads for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getDailyPackageDownloads } from 'query-registry';

(async () => {
    const downloads = await getDailyPackageDownloads({ name: 'query-registry', period: 'last-month' });

    // Output: 'query-registry'
    console.log(downloads.package);

    // Output: 'number'
    console.log(typeof downloads.downloads[0].downloads);
})();
\`\`\`
`},{tag:"see",text:"{@link DailyPackageDownloads}"},{tag:"see",text:"{@link DownloadPeriod}"},{tag:"see",text:"{@link npmRegistryDownloadsAPI}"},{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/download-counts.md#ranges}
`}]},parameters:[{id:16,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:17,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:21,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-daily-package-downloads.ts",line:64,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:18,name:"name",kind:1024,kindString:"Property",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-daily-package-downloads.ts",line:61,character:4}],type:{type:"intrinsic",name:"string"}},{id:19,name:"period",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-daily-package-downloads.ts",line:62,character:4}],type:{type:"reference",id:122,name:"DownloadPeriod"}},{id:20,name:"registryDownloadsAPI",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-daily-package-downloads.ts",line:63,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[21,18,19,20]}]}}}],type:{type:"reference",typeArguments:[{type:"reference",id:136,name:"DailyPackageDownloads"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:22,name:"getDailyRegistryDownloads",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-daily-registry-downloads.ts",line:47,character:22}],signatures:[{id:23,name:"getDailyRegistryDownloads",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getDailyRegistryDownloads` returns the number of downloads for all registry packages\nfor each day in a given time period.",tags:[{tag:"example",text:`
Get the day by day weekly downloads for the npm registry:

\`\`\`typescript
import { getDailyRegistryDownloads } from 'query-registry';

(async () => {
    const downloads = await getDailyRegistryDownloads();

    // Output: 'number'
    console.log(typeof downloads.downloads[0].downloads);
})();
\`\`\`
`},{tag:"example",text:`
Get the day by day monthly downloads for the npm registry:

\`\`\`typescript
import { getDailyRegistryDownloads } from 'query-registry';

(async () => {
    const downloads = await getDailyRegistryDownloads({ period: 'last-month' });

    // Output: 'number'
    console.log(typeof downloads.downloads[0].downloads);
})();
\`\`\`
`},{tag:"see",text:"{@link DailyRegistryDownloads}"},{tag:"see",text:"{@link DownloadPeriod}"},{tag:"see",text:"{@link npmRegistryDownloadsAPI}"},{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/download-counts.md#ranges}
`}]},parameters:[{id:24,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:25,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:28,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-daily-registry-downloads.ts",line:54,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:26,name:"period",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-daily-registry-downloads.ts",line:52,character:4}],type:{type:"reference",id:122,name:"DownloadPeriod"}},{id:27,name:"registryDownloadsAPI",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-daily-registry-downloads.ts",line:53,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[28,26,27]}]}},defaultValue:"{}"}],type:{type:"reference",typeArguments:[{type:"reference",id:141,name:"DailyRegistryDownloads"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:29,name:"getPackageDownloads",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-downloads.ts",line:55,character:22}],signatures:[{id:30,name:"getPackageDownloads",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getPackageDownloads` returns the number of downloads for a package\nin a given time period.",tags:[{tag:"example",text:`
Get the weekly downloads for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getPackageDownloads } from 'query-registry';

(async () => {
    const downloads = await getPackageDownloads({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(downloads.package);

    // Output: 'number'
    console.log(typeof downloads.downloads);
})();
\`\`\`
`},{tag:"example",text:`
Get the monthly downloads for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getPackageDownloads } from 'query-registry';

(async () => {
    const downloads = await getPackageDownloads({ name: 'query-registry', period: 'last-month' });

    // Output: 'query-registry'
    console.log(downloads.package);

    // Output: 'number'
    console.log(typeof downloads.downloads);
})();
\`\`\`
`},{tag:"see",text:"{@link PackageDownloads}"},{tag:"see",text:"{@link DownloadPeriod}"},{tag:"see",text:"{@link npmRegistryDownloadsAPI}"},{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/download-counts.md#point-values}
`}]},parameters:[{id:31,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:32,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:36,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-downloads.ts",line:64,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:33,name:"name",kind:1024,kindString:"Property",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-downloads.ts",line:61,character:4}],type:{type:"intrinsic",name:"string"}},{id:34,name:"period",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-downloads.ts",line:62,character:4}],type:{type:"reference",id:122,name:"DownloadPeriod"}},{id:35,name:"registryDownloadsAPI",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-downloads.ts",line:63,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[36,33,34,35]}]}}}],type:{type:"reference",typeArguments:[{type:"reference",id:127,name:"PackageDownloads"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:37,name:"getPackageManifest",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-manifest.ts",line:52,character:22}],signatures:[{id:38,name:"getPackageManifest",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getPackageManifest` returns the manifest describing\na specific version of a package.",tags:[{tag:"example",text:`
Get the latest manifest for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getPackageManifest } from 'query-registry';

(async () => {
    const manifest = await getPackageManifest({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(manifest.name);
})();
\`\`\`
`},{tag:"example",text:`
Get the manifest for package \`query-registry@1.0.0\` from the npm registry:

\`\`\`typescript
import { getPackageManifest } from 'query-registry';

(async () => {
    const manifest = await getPackageManifest({ name: 'query-registry', version: '1.0.0' });

    // Output: 'query-registry'
    console.log(manifest.name);

    // Output: '1.0.0'
    console.log(manifest.version);
})();
\`\`\`
`},{tag:"see",text:"{@link PackageManifest}"},{tag:"see",text:"{@link RawPackageManifest}"},{tag:"see",text:"{@link npmRegistry}"},{tag:"see",text:`{@link npmRegistryMirrors}
`}]},parameters:[{id:39,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:40,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:45,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-manifest.ts",line:63,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:44,name:"mirrors",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-manifest.ts",line:62,character:4}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:41,name:"name",kind:1024,kindString:"Property",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-manifest.ts",line:59,character:4}],type:{type:"intrinsic",name:"string"}},{id:43,name:"registry",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-manifest.ts",line:61,character:4}],type:{type:"intrinsic",name:"string"}},{id:42,name:"version",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-package-manifest.ts",line:60,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[45,44,41,43,42]}]}}}],type:{type:"reference",typeArguments:[{type:"reference",id:197,name:"PackageManifest"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:46,name:"getPackument",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-packument.ts",line:33,character:22}],signatures:[{id:47,name:"getPackument",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getPackument` returns the packument (package document) containing\nall the metadata about a package present on the registry.",tags:[{tag:"example",text:`
Get the packument for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getPackument } from 'query-registry';

(async () => {
    const packument = await getPackument({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(packument.name);
})();
\`\`\`
`},{tag:"see",text:"{@link Packument}"},{tag:"see",text:"{@link RawPackument}"},{tag:"see",text:"{@link npmRegistry}"},{tag:"see",text:`{@link npmRegistryMirrors}
`}]},parameters:[{id:48,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:49,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:53,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-packument.ts",line:42,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:52,name:"mirrors",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-packument.ts",line:41,character:4}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:50,name:"name",kind:1024,kindString:"Property",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-packument.ts",line:39,character:4}],type:{type:"intrinsic",name:"string"}},{id:51,name:"registry",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-packument.ts",line:40,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[53,52,50,51]}]}}}],type:{type:"reference",typeArguments:[{type:"reference",id:251,name:"Packument"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:54,name:"getRawAbbreviatedPackument",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-abbreviated-packument.ts",line:34,character:22}],signatures:[{id:55,name:"getRawAbbreviatedPackument",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getRawAbbreviatedPackument` returns the abbreviated packument (package document)\ncontaining only the metadata necessary to install a package present on the registry.",text:`Note: the abbreviated packument is returned as retrieved from the registry.
`,tags:[{tag:"example",text:`
Get the abbreviated packument for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getRawAbbreviatedPackument } from 'query-registry';

(async () => {
    const packument = await getRawAbbreviatedPackument({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(packument.name);
})();
\`\`\`
`},{tag:"see",text:"{@link RawAbbreviatedPackument}"},{tag:"see",text:"{@link npmRegistry}"},{tag:"see",text:`{@link npmRegistryMirrors}
`}]},parameters:[{id:56,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:57,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:61,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-abbreviated-packument.ts",line:43,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:60,name:"mirrors",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-abbreviated-packument.ts",line:42,character:4}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:58,name:"name",kind:1024,kindString:"Property",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-abbreviated-packument.ts",line:40,character:4}],type:{type:"intrinsic",name:"string"}},{id:59,name:"registry",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-abbreviated-packument.ts",line:41,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[61,60,58,59]}]}}}],type:{type:"reference",typeArguments:[{type:"reference",id:279,name:"RawAbbreviatedPackument"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:62,name:"getRawPackageManifest",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-package-manifest.ts",line:52,character:22}],signatures:[{id:63,name:"getRawPackageManifest",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getRawPackageManifest` returns the manifest describing\na specific version of a package.",text:`Note: the manifest is returned as retrieved from the registry.
`,tags:[{tag:"example",text:`
Get the latest manifest for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getRawPackageManifest } from 'query-registry';

(async () => {
    const manifest = await getRawPackageManifest({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(manifest.name);
})();
\`\`\`
`},{tag:"example",text:`
Get the manifest for package \`query-registry@1.0.0\` from the npm registry:

\`\`\`typescript
import { getRawPackageManifest } from 'query-registry';

(async () => {
    const manifest = await getRawPackageManifest({ name: 'query-registry', version: '1.0.0' });

    // Output: 'query-registry'
    console.log(manifest.name);

    // Output: '1.0.0'
    console.log(manifest.version);
})();
\`\`\`
`},{tag:"see",text:"{@link RawPackageManifest}"},{tag:"see",text:"{@link npmRegistry}"},{tag:"see",text:`{@link npmRegistryMirrors}
`}]},parameters:[{id:64,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:65,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:70,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-package-manifest.ts",line:63,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:69,name:"mirrors",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-package-manifest.ts",line:62,character:4}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:66,name:"name",kind:1024,kindString:"Property",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-package-manifest.ts",line:59,character:4}],type:{type:"intrinsic",name:"string"}},{id:68,name:"registry",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-package-manifest.ts",line:61,character:4}],type:{type:"intrinsic",name:"string"}},{id:67,name:"version",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-package-manifest.ts",line:60,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[70,69,66,68,67]}]}}}],type:{type:"reference",typeArguments:[{type:"reference",id:284,name:"RawPackageManifest"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:71,name:"getRawPackument",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-packument.ts",line:34,character:22}],signatures:[{id:72,name:"getRawPackument",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getRawPackument` returns the packument (package document) containing\nall the metadata about a package present on the registry.",text:`Note: the packument is returned as retrieved from the registry.
`,tags:[{tag:"example",text:`
Get the packument for package \`query-registry\` from the npm registry:

\`\`\`typescript
import { getRawPackument } from 'query-registry';

(async () => {
    const packument = await getRawPackument({ name: 'query-registry' });

    // Output: 'query-registry'
    console.log(packument.name);
})();
\`\`\`
`},{tag:"see",text:"{@link RawPackument}"},{tag:"see",text:"{@link npmRegistry}"},{tag:"see",text:`{@link npmRegistryMirrors}
`}]},parameters:[{id:73,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:74,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:78,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-packument.ts",line:43,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:77,name:"mirrors",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-packument.ts",line:42,character:4}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:75,name:"name",kind:1024,kindString:"Property",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-packument.ts",line:40,character:4}],type:{type:"intrinsic",name:"string"}},{id:76,name:"registry",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-raw-packument.ts",line:41,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[78,77,75,76]}]}}}],type:{type:"reference",typeArguments:[{type:"reference",id:332,name:"RawPackument"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:79,name:"getRegistryDownloads",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-registry-downloads.ts",line:47,character:22}],signatures:[{id:80,name:"getRegistryDownloads",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getRegistryDownloads` returns the number of downloads for all registry packages\nin a given time period.",tags:[{tag:"example",text:`
Get the weekly downloads for the npm registry:

\`\`\`typescript
import { getRegistryDownloads } from 'query-registry';

(async () => {
    const downloads = await getRegistryDownloads();

    // Output: 'number'
    console.log(typeof downloads.downloads);
})();
\`\`\`
`},{tag:"example",text:`
Get the monthly downloads for the npm registry:

\`\`\`typescript
import { getRegistryDownloads } from 'query-registry';

(async () => {
    const downloads = await getRegistryDownloads({ period: 'last-month' });

    // Output: 'number'
    console.log(typeof downloads.downloads);
})();
\`\`\`
`},{tag:"see",text:"{@link RegistryDownloads}"},{tag:"see",text:"{@link DownloadPeriod}"},{tag:"see",text:"{@link npmRegistryDownloadsAPI}"},{tag:"see",text:`{@link https://github.com/npm/registry/blob/master/docs/download-counts.md#point-values}
`}]},parameters:[{id:81,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:82,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:85,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-registry-downloads.ts",line:54,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:83,name:"period",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-registry-downloads.ts",line:52,character:4}],type:{type:"reference",id:122,name:"DownloadPeriod"}},{id:84,name:"registryDownloadsAPI",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-registry-downloads.ts",line:53,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[85,83,84]}]}},defaultValue:"{}"}],type:{type:"reference",typeArguments:[{type:"reference",id:132,name:"RegistryDownloads"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:86,name:"getRegistryMetadata",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/get-registry-metadata.ts",line:38,character:22}],signatures:[{id:87,name:"getRegistryMetadata",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`getRegistryMetadata` returns the metadata describing the registry itself.",tags:[{tag:"example",text:`
Get the metadata for the npm registry:

\`\`\`typescript
import { getRegistryMetadata } from 'query-registry';

(async () => {
    const metadata = await getRegistryMetadata();

    // Output: 'registry'
    console.log(metadata.db_name);
})();
\`\`\`
`},{tag:"example",text:`
Get the metadata for a custom registry:

\`\`\`typescript
import { getRegistryMetadata } from 'query-registry';

(async () => {
    const metadata = await getRegistryMetadata({ registry: 'https://example.com' });
})();
\`\`\`
`},{tag:"see",text:"{@link RegistryMetadata}"},{tag:"see",text:`{@link npmRegistry}
`}]},parameters:[{id:88,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:89,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:91,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-registry-metadata.ts",line:43,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:90,name:"registry",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/get-registry-metadata.ts",line:42,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[91,90]}]}},defaultValue:"{}"}],type:{type:"reference",typeArguments:[{type:"reference",id:352,name:"RegistryMetadata"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]},{id:92,name:"searchPackages",kind:64,kindString:"Function",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/search-packages.ts",line:33,character:22}],signatures:[{id:93,name:"searchPackages",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"`searchPackages` returns the packages corresponding to a given query.",tags:[{tag:"example",text:`
Get the search results for text query \`query-registry\` from the npm registry:

\`\`\`typescript
import { searchPackages } from 'query-registry';

(async () => {
    const results = await searchPackages({ query: { text: 'query-registry' } });

    // Output: 'query-registry'
    console.log(results.objects[0].package.name);
})();
\`\`\`
`},{tag:"see",text:"{@link SearchResults}"},{tag:"see",text:"{@link SearchCriteria}"},{tag:"see",text:"{@link npmRegistry}"},{tag:"see",text:`{@link npmRegistryMirrors}
`}]},parameters:[{id:94,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:95,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:99,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/search-packages.ts",line:42,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:98,name:"mirrors",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/search-packages.ts",line:41,character:4}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:96,name:"query",kind:1024,kindString:"Property",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/search-packages.ts",line:39,character:4}],type:{type:"reference",id:378,name:"SearchCriteria"}},{id:97,name:"registry",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/search-packages.ts",line:40,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[99,98,96,97]}]}}}],type:{type:"reference",typeArguments:[{type:"reference",id:385,name:"SearchResults"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]}],Zm=[{title:"Classes",kind:128,children:[427]},{title:"Interfaces",kind:256,children:[100,108,136,141,124,111,118,145,148,152,127,419,155,405,197,394,251,274,279,284,332,132,352,368,370,374,378,389,385,412,415,422]},{title:"Type Aliases",kind:4194304,children:[123,122,351]},{title:"Variables",kind:32,children:[448,449,2,1,5,4,3]},{title:"Functions",kind:64,children:[6,14,22,29,37,46,54,62,71,79,86,92]}],eg=[{fileName:"stage/query-registry/src/index.ts",line:92,character:0}];var It={id:Vm,name:Gm,kind:Wm,kindString:Jm,flags:Ym,comment:Qm,originalName:Km,children:Xm,groups:Zm,sources:eg};function lo(e){const t=e.groups.find(a=>a.kind===128)?.children.map(a=>e.children.find(s=>s.id===a))??[],n=e.groups.find(a=>a.kind===64)?.children.map(a=>e.children.find(s=>s.id===a))??[],r=e.groups.find(a=>[256,4194304].includes(a.kind))?.children.map(a=>e.children.find(s=>s.id===a))??[],i=e.groups.find(a=>[32].includes(a.kind))?.children.map(a=>e.children.find(s=>s.id===a))??[];return{classes:t,functions:n,interfaces:r,constants:i}}function tg(e){return e.split("/").slice(2).join("/")}function ng(){return b("div",{className:"bg-gray-400 dark:bg-gray-600 p-2",children:b("a",{className:"",href:"/",children:"Site-wide navigation"})})}function Tu({children:e}){return K("div",{className:"flex flex-col w-full",children:[b(ng,{}),e]})}function Ln(e){return K("div",{className:"mb-4",children:[b("h3",{className:"text-bold text-xl",children:e.title}),e.items.map(t=>b(Lr,{className:"block link ml-3",to:`/${e.package}/${e.version}/${e.type}/${t.name}`,children:t.name},t.name))]})}function rg(e){return K("div",{className:"bg-gray-300 p-2 dark:bg-gray-700 pt-4",children:[b("div",{className:"mb-4",children:b(Lr,{className:"text-bold text-xl",to:`/${e.package}/${e.version}`,children:e.package})}),b(Ln,{title:"Modules",package:e.package,version:e.version,items:[],type:"subdir"}),b(Ln,{title:"Classes",package:e.package,version:e.version,items:e.classes,type:"class"}),b(Ln,{title:"Functions",package:e.package,version:e.version,items:e.functions,type:"function"}),b(Ln,{title:"Interfaces",package:e.package,version:e.version,items:e.interfaces,type:"interface"}),b(Ln,{title:"Constants",package:e.package,version:e.version,items:e.constants,type:"constant"})]})}function co({pkg:e,version:t,children:n,constants:r,interfaces:i,classes:a,functions:s,name:o}){return b(Tu,{children:K("div",{className:"flex w-screen",children:[b(rg,{package:e,version:t,classes:a,functions:s,constants:r,interfaces:i}),K("div",{className:"p-4 flex-grow min-w-0",children:[b("div",{className:"flex justify-end",children:b(sm,{})}),n]})]})})}function ig(e){return K("div",{children:[K("div",{className:"border-b-2 flex justify-between",children:[b("h1",{className:"text-bold text-2xl inline-block",children:e.package}),b("a",{href:`/${e.package}/${e.version}/file/src/index.ts`,className:"text-gray-400 hover:text-gray-600",children:b(Ru,{className:"w-6 mt-1"})})]}),b("div",{className:"mt-3",children:e.comment}),K("div",{className:"mt-6",children:[b("h3",{className:"text-bold text-xl border-b",children:"Examples"}),e.examples.map((t,n)=>b("div",{className:"mt-2 mb-6",children:t},n))]})]})}function Gr(e){return K("div",{className:"mb-4",children:[b("h3",{className:"text-bold text-xl border-b",children:e.title}),b("div",{className:"grid-cols-4 grid space-y-1",children:e.items.map((t,n)=>{const r=hr(t.comment?.shortText??"");return[b(Lr,{className:"link",to:`/${e.package}/${e.version}/${e.type}/${t.name}`,children:t.name},t.name),b("div",{className:"col-span-3",children:r},n)]}).flat()})]})}function _a(){const e=Xi(),t=hr(It.comment.shortText),n=It.comment.tags.filter(o=>o.tag==="example").map(o=>hr(o.text)),{classes:r,functions:i,constants:a,interfaces:s}=lo(It);return K(co,{pkg:e.package,version:e.version,classes:r,constants:a,interfaces:s,functions:i,name:e.package,children:[b(ig,{version:e.version,package:e.package,examples:n,comment:t}),b(Gr,{title:"Classes",items:r,type:"class",package:e.package,version:e.version}),b(Gr,{title:"Functions",items:i,type:"function",package:e.package,version:e.version}),b(Gr,{title:"Interfaces",items:s,type:"constant",package:e.package,version:e.version}),b(Gr,{title:"Constants",items:a,type:"constant",package:e.package,version:e.version})]})}const ag={"/stage/query-registry/src/index.ts":`/**
 * This package exports several functions to query
 * the {@link https://www.npmjs.com | npm registry}
 * (or one of its mirrors) through one of its
 * {@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md | endpoints}.
 *
 * @example
 * Get the metadata for the npm registry:
 *
 * \`\`\`typescript
 * import { getRegistryMetadata } from 'query-registry';
 *
 * (async () => {
 *     const metadata = await getRegistryMetadata();
 *
 *     // Output: 'registry'
 *     console.log(metadata.db_name);
 * })();
 * \`\`\`
 *
 * @example
 * Get the latest manifest for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getPackageManifest } from 'query-registry';
 *
 * (async () => {
 *     const manifest = await getPackageManifest({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(manifest.name);
 * })();
 * \`\`\`
 *
 * @example
 * Get the abbreviated packument for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getAbbreviatedPackument } from 'query-registry';
 *
 * (async () => {
 *     const packument = await getAbbreviatedPackument({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(manifest.name);
 * })();
 * \`\`\`
 *
 * @example
 * Get the weekly downloads for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getPackageDownloads } from 'query-registry';
 *
 * (async () => {
 *     const downloads = await getPackageDownloads({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(downloads.package);
 *
 *     // Output: 'number'
 *     console.log(typeof downloads.downloads);
 * })();
 * \`\`\`
 *
 * @example
 * Get the search results for text query \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { searchPackages } from 'query-registry';
 *
 * (async () => {
 *     const results = await searchPackages({ query: { text: 'query-registry' } });
 *
 *     // Output: 'query-registry'
 *     console.log(results.objects[0].package.name);
 * })();
 * \`\`\`
 *
 * @example
 * Enable {@link https://www.npmjs.com/package/debug | debug messages}
 * by setting the \`DEBUG\` environment variable to \`query-registry\`
 * (available only in non production environments):
 *
 * \`\`\`bash
 * $ DEBUG="query-registry"
 * \`\`\`
 *
 * @packageDocumentation
 */

export * from './data/registries';
export * from './endpoints/get-abbreviated-packument';
export * from './endpoints/get-daily-package-downloads';
export * from './endpoints/get-daily-registry-downloads';
export * from './endpoints/get-package-downloads';
export * from './endpoints/get-package-manifest';
export * from './endpoints/get-packument';
export * from './endpoints/get-raw-abbreviated-packument';
export * from './endpoints/get-raw-package-manifest';
export * from './endpoints/get-raw-packument';
export * from './endpoints/get-registry-downloads';
export * from './endpoints/get-registry-metadata';
export * from './endpoints/search-packages';
export * from './types/abbreviated-packument';
export * from './types/bug-tracker';
export * from './types/dist-info';
export * from './types/dist-tags';
export * from './types/download-period';
export * from './types/downloads';
export * from './types/git-repository';
export * from './types/npm-operational-internal';
export * from './types/package-json';
export * from './types/package-manifest';
export * from './types/packument';
export * from './types/person';
export * from './types/raw-abbreviated-packument';
export * from './types/raw-package-manifest';
export * from './types/raw-packument';
export * from './types/registry-metadata';
export * from './types/repository';
export * from './types/search-criteria';
export * from './types/search-results';
export * from './types/versions-to-timestamps';
export * from './utils/errors';
`,"/stage/query-registry/src/data/registries.ts":`/**
 * npm registry
 *
 * @see {@link https://registry.npmjs.org}
 */
export const npmRegistry = 'https://registry.npmjs.org';

/**
 * npm registry mirror by Cloudflare
 *
 * @remarks
 * This registry has CORS enabled and can be used to retrieve
 * package manifests and packuments in the browser.
 *
 * @see {@link https://npmjs.cf}
 * @see {@link https://registry.npmjs.cf}
 */
export const cloudflareRegistry = 'https://registry.npmjs.cf';

/**
 * npm registry mirror by Yarn
 *
 * @see {@link https://registry.yarnpkg.com}
 */
export const yarnRegistry = 'https://registry.yarnpkg.com';

/**
 * Mirrors of the npm registry.
 *
 * @see {@link cloudflareRegistry}
 * @see {@link yarnRegistry}
 */
export const npmRegistryMirrors = [cloudflareRegistry, yarnRegistry];

/**
 * Downloads API for the npm registry
 *
 * @see {@link https://api.npmjs.org}
 */
export const npmRegistryDownloadsAPI = 'https://api.npmjs.org';
`,"/stage/query-registry/src/endpoints/get-abbreviated-packument.ts":`import { AbbreviatedPackument } from '../types/abbreviated-packument';
import { normalizeRawAbbreviatedPackument } from '../utils/normalize-raw-abbreviated-packument';
import { getRawAbbreviatedPackument } from './get-raw-abbreviated-packument';

/**
 * \`getAbbreviatedPackument\` returns the abbreviated packument (package document)
 * containing only the metadata necessary to install a package present on the registry.
 *
 * @remarks
 * To get all the metadata (full packument) about a package see {@link getPackument}.
 *
 * @param name - package name
 * @param registry - URL of the registry (default: npm registry)
 * @param mirrors - URLs of the registry mirrors (default: npm registry mirrors)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the abbreviated packument for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getAbbreviatedPackument } from 'query-registry';
 *
 * (async () => {
 *     const packument = await getAbbreviatedPackument({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(packument.name);
 * })();
 * \`\`\`
 *
 * @see {@link AbbreviatedPackument}
 * @see {@link RawAbbreviatedPackument}
 * @see {@link npmRegistry}
 * @see {@link npmRegistryMirrors}
 */
export async function getAbbreviatedPackument({
    name,
    registry,
    mirrors,
    cached,
}: {
    name: string;
    registry?: string;
    mirrors?: string[];
    cached?: boolean;
}): Promise<AbbreviatedPackument> {
    const rawAbbreviatedPackument = await getRawAbbreviatedPackument({
        name,
        registry,
        mirrors,
        cached,
    });
    return normalizeRawAbbreviatedPackument({ rawAbbreviatedPackument });
}
`,"/stage/query-registry/src/endpoints/get-daily-package-downloads.ts":`import { DownloadPeriod } from '../types/download-period';
import { DailyPackageDownloads } from '../types/downloads';
import { assertValidPackageName } from '../utils/assert-valid-package-name';
import { fetchDownloadsFromRegistry } from '../utils/fetch-downloads-from-registry';
import { normalizeRawDownloadPeriod } from '../utils/normalize-download-period';

/**
 * \`getDailyPackageDownloads\` returns the number of downloads for a package
 * for each day in a given time period.
 *
 * @param name - package name
 * @param period - time period in which downloads happened (default: \`last-week\`)
 * @param registryDownloadsAPI - URL of the registry's downloads API (default: npm registry)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the day by day weekly downloads for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getDailyPackageDownloads } from 'query-registry';
 *
 * (async () => {
 *     const downloads = await getDailyPackageDownloads({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(downloads.package);
 *
 *     // Output: 'number'
 *     console.log(typeof downloads.downloads[0].downloads);
 * })();
 * \`\`\`
 *
 * @example
 * Get the day by day monthly downloads for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getDailyPackageDownloads } from 'query-registry';
 *
 * (async () => {
 *     const downloads = await getDailyPackageDownloads({ name: 'query-registry', period: 'last-month' });
 *
 *     // Output: 'query-registry'
 *     console.log(downloads.package);
 *
 *     // Output: 'number'
 *     console.log(typeof downloads.downloads[0].downloads);
 * })();
 * \`\`\`
 *
 * @see {@link DailyPackageDownloads}
 * @see {@link DownloadPeriod}
 * @see {@link npmRegistryDownloadsAPI}
 * @see {@link https://github.com/npm/registry/blob/master/docs/download-counts.md#ranges}
 */
export async function getDailyPackageDownloads({
    name,
    period: rawDownloadPeriod,
    registryDownloadsAPI,
    cached,
}: {
    name: string;
    period?: DownloadPeriod;
    registryDownloadsAPI?: string;
    cached?: boolean;
}): Promise<DailyPackageDownloads> {
    assertValidPackageName({ name });

    const period = normalizeRawDownloadPeriod({ rawDownloadPeriod });
    const endpoint = \`/downloads/range/\${period}/\${name}\`;
    return fetchDownloadsFromRegistry({
        endpoint,
        registryDownloadsAPI,
        cached,
    });
}
`,"/stage/query-registry/src/endpoints/get-daily-registry-downloads.ts":`import { DownloadPeriod } from '../types/download-period';
import { DailyRegistryDownloads } from '../types/downloads';
import { fetchDownloadsFromRegistry } from '../utils/fetch-downloads-from-registry';
import { normalizeRawDownloadPeriod } from '../utils/normalize-download-period';

/**
 * \`getDailyRegistryDownloads\` returns the number of downloads for all registry packages
 * for each day in a given time period.
 *
 * @param period - time period in which downloads happened (default: \`last-week\`)
 * @param registryDownloadsAPI - URL of the registry's downloads API (default: npm registry)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the day by day weekly downloads for the npm registry:
 *
 * \`\`\`typescript
 * import { getDailyRegistryDownloads } from 'query-registry';
 *
 * (async () => {
 *     const downloads = await getDailyRegistryDownloads();
 *
 *     // Output: 'number'
 *     console.log(typeof downloads.downloads[0].downloads);
 * })();
 * \`\`\`
 *
 * @example
 * Get the day by day monthly downloads for the npm registry:
 *
 * \`\`\`typescript
 * import { getDailyRegistryDownloads } from 'query-registry';
 *
 * (async () => {
 *     const downloads = await getDailyRegistryDownloads({ period: 'last-month' });
 *
 *     // Output: 'number'
 *     console.log(typeof downloads.downloads[0].downloads);
 * })();
 * \`\`\`
 *
 * @see {@link DailyRegistryDownloads}
 * @see {@link DownloadPeriod}
 * @see {@link npmRegistryDownloadsAPI}
 * @see {@link https://github.com/npm/registry/blob/master/docs/download-counts.md#ranges}
 */
export async function getDailyRegistryDownloads({
    period: rawDownloadPeriod,
    registryDownloadsAPI,
    cached,
}: {
    period?: DownloadPeriod;
    registryDownloadsAPI?: string;
    cached?: boolean;
} = {}): Promise<DailyRegistryDownloads> {
    const period = normalizeRawDownloadPeriod({ rawDownloadPeriod });
    const endpoint = \`/downloads/range/\${period}\`;
    return fetchDownloadsFromRegistry({
        endpoint,
        registryDownloadsAPI,
        cached,
    });
}
`,"/stage/query-registry/src/endpoints/get-package-downloads.ts":`import { DownloadPeriod } from '../types/download-period';
import { PackageDownloads } from '../types/downloads';
import { assertValidPackageName } from '../utils/assert-valid-package-name';
import { fetchDownloadsFromRegistry } from '../utils/fetch-downloads-from-registry';
import { normalizeRawDownloadPeriod } from '../utils/normalize-download-period';

/**
 * \`getPackageDownloads\` returns the number of downloads for a package
 * in a given time period.
 *
 * @param name - package name
 * @param period - time period in which downloads happened (default: \`last-week\`)
 * @param registryDownloadsAPI - URL of the registry's downloads API (default: npm registry)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the weekly downloads for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getPackageDownloads } from 'query-registry';
 *
 * (async () => {
 *     const downloads = await getPackageDownloads({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(downloads.package);
 *
 *     // Output: 'number'
 *     console.log(typeof downloads.downloads);
 * })();
 * \`\`\`
 *
 * @example
 * Get the monthly downloads for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getPackageDownloads } from 'query-registry';
 *
 * (async () => {
 *     const downloads = await getPackageDownloads({ name: 'query-registry', period: 'last-month' });
 *
 *     // Output: 'query-registry'
 *     console.log(downloads.package);
 *
 *     // Output: 'number'
 *     console.log(typeof downloads.downloads);
 * })();
 * \`\`\`
 *
 * @see {@link PackageDownloads}
 * @see {@link DownloadPeriod}
 * @see {@link npmRegistryDownloadsAPI}
 * @see {@link https://github.com/npm/registry/blob/master/docs/download-counts.md#point-values}
 */
export async function getPackageDownloads({
    name,
    period: rawDownloadPeriod,
    registryDownloadsAPI,
    cached,
}: {
    name: string;
    period?: DownloadPeriod;
    registryDownloadsAPI?: string;
    cached?: boolean;
}): Promise<PackageDownloads> {
    assertValidPackageName({ name });

    const period = normalizeRawDownloadPeriod({ rawDownloadPeriod });
    const endpoint = \`/downloads/point/\${period}/\${name}\`;
    return fetchDownloadsFromRegistry({
        endpoint,
        registryDownloadsAPI,
        cached,
    });
}
`,"/stage/query-registry/src/endpoints/get-package-manifest.ts":`import { PackageManifest } from '../types/package-manifest';
import { extractRawPackageManifest } from '../utils/extract-package-manifest';
import { normalizeRawPackageManifest } from '../utils/normalize-raw-package-manifest';
import { getRawPackument } from './get-raw-packument';

/**
 * \`getPackageManifest\` returns the manifest describing
 * a specific version of a package.
 *
 * @param name - package name
 * @param version - package version (default: \`latest\`)
 * @param registry - URL of the registry (default: npm registry)
 * @param mirrors - URLs of the registry mirrors (default: npm registry mirrors)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the latest manifest for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getPackageManifest } from 'query-registry';
 *
 * (async () => {
 *     const manifest = await getPackageManifest({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(manifest.name);
 * })();
 * \`\`\`
 *
 * @example
 * Get the manifest for package \`query-registry@1.0.0\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getPackageManifest } from 'query-registry';
 *
 * (async () => {
 *     const manifest = await getPackageManifest({ name: 'query-registry', version: '1.0.0' });
 *
 *     // Output: 'query-registry'
 *     console.log(manifest.name);
 *
 *     // Output: '1.0.0'
 *     console.log(manifest.version);
 * })();
 * \`\`\`
 *
 * @see {@link PackageManifest}
 * @see {@link RawPackageManifest}
 * @see {@link npmRegistry}
 * @see {@link npmRegistryMirrors}
 */
export async function getPackageManifest({
    name,
    version,
    registry,
    mirrors,
    cached,
}: {
    name: string;
    version?: string;
    registry?: string;
    mirrors?: string[];
    cached?: boolean;
}): Promise<PackageManifest> {
    const rawPackument = await getRawPackument({
        name,
        registry,
        mirrors,
        cached,
    });

    const rawPackageManifest = extractRawPackageManifest({
        rawPackument,
        version,
    });

    const packageManifest = await normalizeRawPackageManifest({
        rawPackageManifest,
        rawPackument,
        registry,
        mirrors,
        cached,
    });

    return packageManifest;
}
`,"/stage/query-registry/src/endpoints/get-packument.ts":`import { Packument } from '../types/packument';
import { normalizeRawPackument } from '../utils/normalize-raw-packument';
import { getRawPackument } from './get-raw-packument';

/**
 * \`getPackument\` returns the packument (package document) containing
 * all the metadata about a package present on the registry.
 *
 * @param name - package name
 * @param registry - URL of the registry (default: npm registry)
 * @param mirrors - URLs of the registry mirrors (default: npm registry mirrors)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the packument for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getPackument } from 'query-registry';
 *
 * (async () => {
 *     const packument = await getPackument({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(packument.name);
 * })();
 * \`\`\`
 *
 * @see {@link Packument}
 * @see {@link RawPackument}
 * @see {@link npmRegistry}
 * @see {@link npmRegistryMirrors}
 */
export async function getPackument({
    name,
    registry,
    mirrors,
    cached,
}: {
    name: string;
    registry?: string;
    mirrors?: string[];
    cached?: boolean;
}): Promise<Packument> {
    const rawPackument = await getRawPackument({
        name,
        registry,
        mirrors,
        cached,
    });
    return normalizeRawPackument({ rawPackument });
}
`,"/stage/query-registry/src/endpoints/get-raw-abbreviated-packument.ts":`import { RawAbbreviatedPackument } from '../types/raw-abbreviated-packument';
import { assertValidPackageName } from '../utils/assert-valid-package-name';
import { fetchFromRegistry } from '../utils/fetch-from-registry';

/**
 * \`getRawAbbreviatedPackument\` returns the abbreviated packument (package document)
 * containing only the metadata necessary to install a package present on the registry.
 *
 * Note: the abbreviated packument is returned as retrieved from the registry.
 *
 * @param name - package name
 * @param registry - URL of the registry (default: npm registry)
 * @param mirrors - URLs of the registry mirrors (default: npm registry mirrors)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the abbreviated packument for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getRawAbbreviatedPackument } from 'query-registry';
 *
 * (async () => {
 *     const packument = await getRawAbbreviatedPackument({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(packument.name);
 * })();
 * \`\`\`
 *
 * @see {@link RawAbbreviatedPackument}
 * @see {@link npmRegistry}
 * @see {@link npmRegistryMirrors}
 */
export async function getRawAbbreviatedPackument({
    name,
    registry,
    mirrors,
    cached,
}: {
    name: string;
    registry?: string;
    mirrors?: string[];
    cached?: boolean;
}): Promise<RawAbbreviatedPackument> {
    assertValidPackageName({ name });

    const endpoint = \`/\${name}\`;
    const headers = { Accept: 'application/vnd.npm.install-v1+json' };
    return fetchFromRegistry({ endpoint, headers, registry, mirrors, cached });
}
`,"/stage/query-registry/src/endpoints/get-raw-package-manifest.ts":`import { RawPackageManifest } from '../types/raw-package-manifest';
import { extractRawPackageManifest } from '../utils/extract-package-manifest';
import { getRawPackument } from './get-raw-packument';

/**
 * \`getRawPackageManifest\` returns the manifest describing
 * a specific version of a package.
 *
 * Note: the manifest is returned as retrieved from the registry.
 *
 * @param name - package name
 * @param version - package version (default: \`latest\`)
 * @param registry - URL of the registry (default: npm registry)
 * @param mirrors - URLs of the registry mirrors (default: npm registry mirrors)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the latest manifest for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getRawPackageManifest } from 'query-registry';
 *
 * (async () => {
 *     const manifest = await getRawPackageManifest({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(manifest.name);
 * })();
 * \`\`\`
 *
 * @example
 * Get the manifest for package \`query-registry@1.0.0\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getRawPackageManifest } from 'query-registry';
 *
 * (async () => {
 *     const manifest = await getRawPackageManifest({ name: 'query-registry', version: '1.0.0' });
 *
 *     // Output: 'query-registry'
 *     console.log(manifest.name);
 *
 *     // Output: '1.0.0'
 *     console.log(manifest.version);
 * })();
 * \`\`\`
 *
 * @see {@link RawPackageManifest}
 * @see {@link npmRegistry}
 * @see {@link npmRegistryMirrors}
 */
export async function getRawPackageManifest({
    name,
    version,
    registry,
    mirrors,
    cached,
}: {
    name: string;
    version?: string;
    registry?: string;
    mirrors?: string[];
    cached?: boolean;
}): Promise<RawPackageManifest> {
    const rawPackument = await getRawPackument({
        name,
        registry,
        mirrors,
        cached,
    });

    return extractRawPackageManifest({ rawPackument, version });
}
`,"/stage/query-registry/src/endpoints/get-raw-packument.ts":`import { RawPackument } from '../types/raw-packument';
import { assertValidPackageName } from '../utils/assert-valid-package-name';
import { fetchFromRegistry } from '../utils/fetch-from-registry';

/**
 * \`getRawPackument\` returns the packument (package document) containing
 * all the metadata about a package present on the registry.
 *
 * Note: the packument is returned as retrieved from the registry.
 *
 * @param name - package name
 * @param registry - URL of the registry (default: npm registry)
 * @param mirrors - URLs of the registry mirrors (default: npm registry mirrors)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the packument for package \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { getRawPackument } from 'query-registry';
 *
 * (async () => {
 *     const packument = await getRawPackument({ name: 'query-registry' });
 *
 *     // Output: 'query-registry'
 *     console.log(packument.name);
 * })();
 * \`\`\`
 *
 * @see {@link RawPackument}
 * @see {@link npmRegistry}
 * @see {@link npmRegistryMirrors}
 */
export async function getRawPackument({
    name,
    registry,
    mirrors,
    cached,
}: {
    name: string;
    registry?: string;
    mirrors?: string[];
    cached?: boolean;
}): Promise<RawPackument> {
    assertValidPackageName({ name });

    const endpoint = \`/\${name}\`;
    return fetchFromRegistry({ endpoint, registry, mirrors, cached });
}
`,"/stage/query-registry/src/endpoints/get-registry-downloads.ts":`import { DownloadPeriod } from '../types/download-period';
import { RegistryDownloads } from '../types/downloads';
import { fetchDownloadsFromRegistry } from '../utils/fetch-downloads-from-registry';
import { normalizeRawDownloadPeriod } from '../utils/normalize-download-period';

/**
 * \`getRegistryDownloads\` returns the number of downloads for all registry packages
 * in a given time period.
 *
 * @param period - time period in which downloads happened (default: \`last-week\`)
 * @param registryDownloadsAPI - URL of the registry's downloads API (default: npm registry)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the weekly downloads for the npm registry:
 *
 * \`\`\`typescript
 * import { getRegistryDownloads } from 'query-registry';
 *
 * (async () => {
 *     const downloads = await getRegistryDownloads();
 *
 *     // Output: 'number'
 *     console.log(typeof downloads.downloads);
 * })();
 * \`\`\`
 *
 * @example
 * Get the monthly downloads for the npm registry:
 *
 * \`\`\`typescript
 * import { getRegistryDownloads } from 'query-registry';
 *
 * (async () => {
 *     const downloads = await getRegistryDownloads({ period: 'last-month' });
 *
 *     // Output: 'number'
 *     console.log(typeof downloads.downloads);
 * })();
 * \`\`\`
 *
 * @see {@link RegistryDownloads}
 * @see {@link DownloadPeriod}
 * @see {@link npmRegistryDownloadsAPI}
 * @see {@link https://github.com/npm/registry/blob/master/docs/download-counts.md#point-values}
 */
export async function getRegistryDownloads({
    period: rawDownloadPeriod,
    registryDownloadsAPI,
    cached,
}: {
    period?: DownloadPeriod;
    registryDownloadsAPI?: string;
    cached?: boolean;
} = {}): Promise<RegistryDownloads> {
    const period = normalizeRawDownloadPeriod({ rawDownloadPeriod });
    const endpoint = \`/downloads/point/\${period}\`;
    return fetchDownloadsFromRegistry({
        endpoint,
        registryDownloadsAPI,
        cached,
    });
}
`,"/stage/query-registry/src/endpoints/get-registry-metadata.ts":`import { RegistryMetadata } from '../types/registry-metadata';
import { fetchFromRegistry } from '../utils/fetch-from-registry';

/**
 * \`getRegistryMetadata\` returns the metadata describing the registry itself.
 *
 * @param registry - URL of the registry (default: npm registry)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the metadata for the npm registry:
 *
 * \`\`\`typescript
 * import { getRegistryMetadata } from 'query-registry';
 *
 * (async () => {
 *     const metadata = await getRegistryMetadata();
 *
 *     // Output: 'registry'
 *     console.log(metadata.db_name);
 * })();
 * \`\`\`
 *
 * @example
 * Get the metadata for a custom registry:
 *
 * \`\`\`typescript
 * import { getRegistryMetadata } from 'query-registry';
 *
 * (async () => {
 *     const metadata = await getRegistryMetadata({ registry: 'https://example.com' });
 * })();
 * \`\`\`
 *
 * @see {@link RegistryMetadata}
 * @see {@link npmRegistry}
 */
export async function getRegistryMetadata({
    registry,
    cached,
}: {
    registry?: string;
    cached?: boolean;
} = {}): Promise<RegistryMetadata> {
    const endpoint = '/';
    return fetchFromRegistry({ registry, mirrors: [], endpoint, cached });
}
`,"/stage/query-registry/src/endpoints/search-packages.ts":`import { SearchCriteria } from '../types/search-criteria';
import { SearchResults } from '../types/search-results';
import { fetchFromRegistry } from '../utils/fetch-from-registry';
import { normalizeRawSearchCriteria } from '../utils/normalize-raw-search-criteria';

/**
 * \`searchPackages\` returns the packages corresponding to a given query.
 *
 * @param query - one or more search criteria
 * @param registry - URL of the registry (default: npm registry)
 * @param mirrors - URLs of the registry mirrors (default: npm registry mirrors)
 * @param cached - accept cached responses (default: \`true\`)
 *
 * @example
 * Get the search results for text query \`query-registry\` from the npm registry:
 *
 * \`\`\`typescript
 * import { searchPackages } from 'query-registry';
 *
 * (async () => {
 *     const results = await searchPackages({ query: { text: 'query-registry' } });
 *
 *     // Output: 'query-registry'
 *     console.log(results.objects[0].package.name);
 * })();
 * \`\`\`
 *
 * @see {@link SearchResults}
 * @see {@link SearchCriteria}
 * @see {@link npmRegistry}
 * @see {@link npmRegistryMirrors}
 */
export async function searchPackages({
    query: rawSearchCriteria,
    registry,
    mirrors,
    cached,
}: {
    query: SearchCriteria;
    registry?: string;
    mirrors?: string[];
    cached?: boolean;
}): Promise<SearchResults> {
    const endpoint = '/-/v1/search';
    const query = normalizeRawSearchCriteria({ rawSearchCriteria });
    return fetchFromRegistry({ endpoint, query, registry, mirrors, cached });
}
`,"/stage/query-registry/src/types/abbreviated-packument.ts":`import { DistTags } from './dist-tags';
import { RawAbbreviatedPackument } from './raw-abbreviated-packument';

/**
 * \`AbbreviatedPackument\` represents a packument (package document)
 * containing only the metadata necessary to install a package.
 *
 * @see {@link RawAbbreviatedPackument}
 */
export interface AbbreviatedPackument extends RawAbbreviatedPackument {
    /** Unique package name (for example, \`foo\` or \`@bar/baz\`) */
    readonly id: string;

    /**
     * Timestamp of when the package was last modified
     * in ISO 8601 format (for example, \`2021-11-23T19:12:24.006Z\`);
     * (alias to \`modified\`)
     */
    readonly modifiedAt: string;

    /**
     * Mapping of distribution tags to version numbers
     * (alias to \`dist-tags\`)
     *
     * @see {@link DistTags}
     */
    readonly distTags: DistTags;
}
`,"/stage/query-registry/src/types/bug-tracker.ts":`/**
 * \`BugTracker\` represents the bug tracking methods.
 */
export interface BugTracker {
    readonly url?: string;
    readonly email?: string;
}
`,"/stage/query-registry/src/types/dist-info.ts":`/**
 * \`DistInfo\` contains data describing the distributed package.
 *
 * @see {@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#dist}
 */
export interface DistInfo {
    /** Tarball URL */
    readonly tarball: string;

    /** SHA1 sum of the tarball */
    readonly shasum: string;

    /** Usually, SHA512 sum of the tarball preceded by \`sha512-\` */
    readonly integrity?: string;

    /** Number of files in the tarball */
    readonly fileCount?: number;

    /** Total size in bytes of the unpacked files in the tarball */
    readonly unpackedSize?: number;

    /** npm PGP signature */
    readonly 'npm-signature'?: string;
}
`,"/stage/query-registry/src/types/dist-tags.ts":`/**
 * \`DistTags\` maps distribution tags to version numbers.
 */
export interface DistTags {
    /** Latest version number */
    readonly latest: string;

    /** Mapping of distribution tags to version numbers */
    readonly [key: string]: string;
}
`,"/stage/query-registry/src/types/download-period.ts":`/**
 * \`DownloadPeriod\` represents a time period
 * for which downloads should be counted.
 *
 * @remarks
 * The following time periods are supported:
 *
 * - a {@link DefaultDownloadPeriod} (for example, \`last-week\`)
 *
 * - a date for a single day (for example, \`new Date('2020-01-01')\`)
 *
 * - a {@link DateRange}
 *
 * @see {@link DefaultDownloadPeriod}
 * @see {@link DateRange}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date}
 */
export type DownloadPeriod = DefaultDownloadPeriod | Date | DateRange;

/**
 * \`DefaultDownloadPeriod\` represents the default time periods
 * supported by the npm registry.
 */
export type DefaultDownloadPeriod =
    | 'last-day'
    | 'last-week'
    | 'last-month'
    | 'last-year';

/**
 * \`DateRange\` represents a time period between two days
 * where the \`start\` and \`end\` dates are inclusive.
 *
 * @example
 * \`\`\`typescript
 * const dateRange = {
 *     start: new Date('2019-01-01'),
 *     end: new Date('2020-01-01'),
 * };
 * \`\`\`
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date}
 */
export interface DateRange {
    /** Date of the first day (inclusive) */
    readonly start: Date;

    /** Date of the last day (inclusive) */
    readonly end: Date;
}
`,"/stage/query-registry/src/types/downloads.ts":`/**
 * \`PackageDownloads\` lists the number of downloads for a package
 * in a given time period.
 *
 * @see {@link RegistryDownloads}
 * @see {@link https://github.com/npm/registry/blob/master/docs/download-counts.md#point-values}
 */
export interface PackageDownloads extends RegistryDownloads {
    /** Package name */
    readonly package: string;
}

/**
 * \`RegistryDownloads\` lists the number of downloads for the registry
 *  in a given time period.
 *
 * @see {@link https://github.com/npm/registry/blob/master/docs/download-counts.md#point-values}
 */
export interface RegistryDownloads {
    /** Total number of downloads */
    readonly downloads: number;

    /** Date of the first day (inclusive) */
    readonly start: string;

    /** Date of the last day (inclusive) */
    readonly end: string;
}

/**
 * \`DailyPackageDownloads\` lists the number of downloads for a package
 * for each day in a given time period.
 *
 * @see {@link DailyRegistryDownloads}
 * @see {@link https://github.com/npm/registry/blob/master/docs/download-counts.md#ranges}
 */
export interface DailyPackageDownloads extends DailyRegistryDownloads {
    /** Package name */
    readonly package: string;
}

/**
 * \`DailyRegistryDownloads\` lists the number of downloads for the registry
 * for each day in a given time period.
 *
 * @see {@link DownloadsPerDay}
 * @see {@link https://github.com/npm/registry/blob/master/docs/download-counts.md#ranges}
 */
export interface DailyRegistryDownloads {
    /** Download counts per day */
    readonly downloads: DownloadsPerDay[];

    /** Date of the first day (inclusive) */
    readonly start: string;

    /** Date of the last day (inclusive) */
    readonly end: string;
}

/**
 * \`DownloadsPerDay\` lists the number of downloads in a given day.
 */
export interface DownloadsPerDay {
    /** Total number of downloads in the day */
    readonly downloads: number;

    /** Day date */
    readonly day: string;
}
`,"/stage/query-registry/src/types/git-repository.ts":`/**
 * \`GitRepository\` represents a git repository hosting
 * the source code of a package.
 *
 * @see {@link Repository}
 */
export interface GitRepository {
    /** Repository type, always \`git\` */
    readonly type: 'git';

    /** Repository URL */
    readonly url: string;

    /**
     * Specific directory in the repository
     * (for example, a directory in a monorepo)
     */
    readonly directory?: string;
}
`,"/stage/query-registry/src/types/npm-operational-internal.ts":`export interface NpmOperationalInternal {
    readonly host: string;
    readonly tmp: string;
}
`,"/stage/query-registry/src/types/package-json.ts":`import { BugTracker } from './bug-tracker';
import { Person } from './person';
import { Repository } from './repository';

/**
 * \`PackageJSON\` contains the package metadata
 * usually found in \`package.json\` files.
 *
 * @remarks
 * For some packages, especially legacy ones,
 * the properties may be mistyped due to incorrect data present on the registry.
 *
 * @see {@link https://docs.npmjs.com/cli/v6/configuring-npm/package-json}
 */
export interface PackageJSON {
    /** Package name */
    readonly name: string;

    /** Package version number */
    readonly version: string;

    /** Package description */
    readonly description?: string;

    /** Homepage URL */
    readonly homepage?: string;

    /** SPDX license identifier */
    readonly license?: string;

    /** Text of the license */
    readonly licenseText?: string;

    /** Keywords describing the package */
    readonly keywords?: string[];

    /**
     * Author of the package
     *
     * @see {@link Person}
     */
    readonly author?: Person;

    /**
     * Maintainers of the package
     *
     * @see {@link Person}
     */
    readonly maintainers?: Person[];

    /**
     * Contributors to the package
     *
     * @see {@link Person}
     */
    readonly contributors?: Person[];

    /**
     * Repository containing the package's source
     *
     * @see {@link Repository}
     */
    readonly repository?: string | Repository;

    /**
     * Bug tracker
     *
     * @see {@link BugTracker}
     */
    readonly bugs?: BugTracker;

    /** Runtime dependencies */
    readonly dependencies?: Record<string, string>;

    /** Development dependencies */
    readonly devDependencies?: Record<string, string>;

    /** Peer dependencies */
    readonly peerDependencies?: Record<string, string>;

    /** Optional dependencies */
    readonly optionalDependencies?: Record<string, string>;

    /** Bundled dependencies */
    readonly bundleDependencies?: string[];

    /** Bundled dependencies (alias) */
    readonly bundledDependencies?: string[];

    /** Main source file */
    readonly source?: string;

    /** Main file (Node) */
    readonly main?: string;

    /** Main file (Browser) */
    readonly browser?: string;

    /** Main file (Modules) */
    readonly module?: string;

    /** Type declarations file */
    readonly types?: string;

    /** Type declarations file (alias) */
    readonly typings?: string;

    /**
     * Export map
     *
     * @see {@link https://nodejs.org/api/packages.html#packages_subpath_exports}
     */
    readonly exports?: string | Record<string, unknown>;

    /** File patterns included in the package */
    readonly files?: string[];

    /** Executable files */
    readonly bin?: string | Record<string, string>;

    /** Man pages */
    readonly man?: string | string[];

    /** Directories describing the package's structure */
    readonly directories?: Record<string, string>;

    /** npm scripts */
    readonly scripts?: Record<string, string>;

    /** npm config */
    readonly config?: Record<string, string>;

    /** Node compatibility */
    readonly engines?: Record<string, string>;

    /** OS compatibility */
    readonly os?: string[];

    /** CPU compatibility */
    readonly cpu?: string[];

    /** Prevent publishing */
    readonly private?: boolean;

    /** Publishing configuration */
    readonly publishConfig?: Record<string, string>;

    /** Deprecation message */
    readonly deprecated?: string;

    /** README contents */
    readonly readme?: string;

    /** Name of the README file */
    readonly readmeFilename?: string;

    /** Other fields */
    readonly [key: string]: unknown;
}
`,"/stage/query-registry/src/types/package-manifest.ts":`import { GitRepository } from './git-repository';
import { Person } from './person';
import { RawPackageManifest } from './raw-package-manifest';

/**
 * \`PackageManifest\` represents the manifest describing a specific version
 *  of a package.
 *
 * @remarks
 * For some packages, especially legacy ones,
 * the properties may be mistyped due to incorrect data present on the registry.
 *
 * @see {@link RawPackageManifest}
 */
export interface PackageManifest extends RawPackageManifest {
    /** Package version ID (for example, \`foo@1.0.0\` or \`@bar/baz@1.0.0\`) */
    readonly id: string;

    /** Publishing timestamp */
    readonly createdAt: string;

    /**
     * User who published this version of the package
     *
     * @see {@link Person}
     */
    readonly publisher: Person;

    /** Normalized license */
    readonly license?: string;

    /** Normalized git repository */
    readonly gitRepository?: GitRepository;

    /** Name of the corresponding DefinitelyTyped package, if any */
    readonly definitelyTypedName?: string;

    /** Name of the corresponding untyped package (w.r.t. DefinitelyTyped) */
    readonly untypedName?: string;
}
`,"/stage/query-registry/src/types/packument.ts":`import { DistTags } from './dist-tags';
import { GitRepository } from './git-repository';
import { RawPackument } from './raw-packument';

/**
 * \`Packument\` represents a packument (package document)
 * containing all the data about a package.
 *
 * @remarks
 * For some packages, especially legacy ones,
 * the properties may be mistyped due to incorrect data present on the registry.
 *
 * @see {@link RawPackument}
 */
export interface Packument extends RawPackument {
    /**
     * Unique package name (for example, \`foo\` or \`@bar/baz\`;
     * alias to \`_id\`)
     */
    readonly id: string;

    /**
     * Mapping of distribution tags to version numbers
     * (alias to \`dist-tags\`)
     *
     * @see {@link DistTags}
     */
    readonly distTags: DistTags;

    /**
     * Mapping of version numbers to publishing timestamps
     * without the \`created\` or \`modified\` properties
     * present in the \`time\` property
     *
     * @see {@link VersionsToTimestamps}
     */
    readonly versionsToTimestamps: Record<string, string>;

    /** Normalized license */
    readonly license?: string;

    /** Normalized git repository */
    readonly gitRepository?: GitRepository;
}
`,"/stage/query-registry/src/types/person.ts":`/**
 * \`Person\` represents a person associated to a package.
 */
export interface Person {
    readonly name?: string;
    readonly username?: string;
    readonly email?: string;
    readonly url?: string;
}
`,"/stage/query-registry/src/types/raw-abbreviated-packument.ts":`import { DistTags } from './dist-tags';
import { RawPackageManifest } from './raw-package-manifest';

/**
 * \`RawAbbreviatedPackument\` represents an abbreviated packument (package document),
 * as returned from the registry, containing only the metadata necessary to install a package.
 *
 * @see {@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#abbreviated-metadata-format}
 */
export interface RawAbbreviatedPackument {
    /** Package name */
    readonly name: string;

    /**
     * Timestamp of when the package was last modified
     * in ISO 8601 format (for example, \`2021-11-23T19:12:24.006Z\`)
     */
    readonly modified: string;

    /**
     * Mapping of distribution tags to version numbers
     *
     * @see {@link DistTags}
     */
    readonly 'dist-tags': DistTags;

    /**
     * Mapping of version numbers to package manifests
     *
     * @see {@link RawPackageManifest}
     */
    readonly versions: Record<
        string,
        Pick<
            RawPackageManifest,
            | 'name'
            | 'version'
            | 'dist'
            | 'deprecated'
            | 'dependencies'
            | 'optionalDependencies'
            | 'devDependencies'
            | 'bundleDependencies'
            | 'peerDependencies'
            | 'bin'
            | 'directories'
            | 'engines'
            | '_hasShrinkwrap'
        >
    >;
}
`,"/stage/query-registry/src/types/raw-package-manifest.ts":`import { DistInfo } from './dist-info';
import { NpmOperationalInternal } from './npm-operational-internal';
import { PackageJSON } from './package-json';
import { Person } from './person';

/**
 * \`RawPackageManifest\` represents the manifest, as returned by the registry,
 * describing a specific version of a package.
 *
 * @remarks
 * For some packages, especially legacy ones,
 * the properties may be mistyped due to incorrect data present on the registry.
 *
 * @see {@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#getpackageversion}
 * @see {@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#abbreviated-version-object}
 * @see {@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#full-metadata-format}
 * @see {@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#version}
 * @see {@link PackageJSON}
 */
export interface RawPackageManifest extends PackageJSON {
    /** Package version ID (for example, \`foo@1.0.0\` or \`@bar/baz@1.0.0\`) */
    readonly _id: string;

    /** Package name */
    readonly name: string;

    /** Package version number */
    readonly version: string;

    /**
     * Distribution data from the registry
     *
     * @see {@link DistInfo}
     */
    readonly dist: DistInfo;

    /** Commit hash corresponding to the published version */
    readonly gitHead?: string;

    /**
     * User who published this package version
     *
     * @see {@link Person}
     */
    readonly _npmUser: Person;

    /** Node version used when publishing */
    readonly _nodeVersion?: string;

    /** npm version used when publishing */
    readonly _npmVersion?: string;

    /**
     * Internal npm data
     *
     * @see {@link NpmOperationalInternal}
     */
    readonly _npmOperationalInternal?: NpmOperationalInternal;

    /** True if the package has a shrinkwrap file */
    readonly _hasShrinkwrap?: boolean;
}
`,"/stage/query-registry/src/types/raw-packument.ts":`import { DistTags } from './dist-tags';
import { PackageJSON } from './package-json';
import { RawPackageManifest } from './raw-package-manifest';
import { VersionsToTimestamps } from './versions-to-timestamps';

/**
 * \`RawPackument\` represents a packument (package document), as returned
 * from the registry, containing all the data about a package .
 *
 * @remarks
 * For some packages, especially legacy ones,
 * the properties may be mistyped due to incorrect data present on the registry.
 *
 * @see {@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#getpackage}
 * @see {@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#full-metadata-format}
 * @see {@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#package}
 * @see {@link HoistedPackageJSON}
 */
export interface RawPackument extends HoistedPackageJSON {
    /** Unique package name (for example, \`foo\` or \`@bar/baz\`) */
    readonly _id: string;

    /** Latest revision ID in CouchDB */
    readonly _rev: string;

    /** Package name */
    readonly name: string;

    /**
     * Mapping of distribution tags to version numbers
     *
     * @see {@link DistTags}
     */
    readonly 'dist-tags': DistTags;

    /**
     * Mapping of version numbers to publishing timestamps
     *
     * @see {@link VersionsToTimestamps}
     */
    readonly time: VersionsToTimestamps;

    /**
     * Mapping of version numbers to package manifests
     *
     * @see {@link RawPackageManifest}
     */
    readonly versions: Record<string, RawPackageManifest>;

    /** Names of the npm users who starred the package */
    readonly users?: Record<string, boolean>;
}

/**
 * \`HoistedPackageJSON\` contains the data hoisted
 * from the latest package version into the packument.
 *
 * @remarks
 * For some packages, especially legacy ones,
 * the properties may be mistyped due to incorrect data present on the registry.
 *
 * @see {@link PackageJSON}
 * @see {@link RawPackument}
 * @see {@link https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#full-metadata-format}
 */
export type HoistedPackageJSON = Pick<
    PackageJSON,
    | 'author'
    | 'bugs'
    | 'contributors'
    | 'description'
    | 'homepage'
    | 'keywords'
    | 'license'
    | 'maintainers'
    | 'readme'
    | 'readmeFilename'
    | 'repository'
>;
`,"/stage/query-registry/src/types/registry-metadata.ts":`/**
 * \`RegistryMetadata\` contains information about the registry itself.
 *
 * @see {@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#registry}
 * @see {@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#get}
 * @see {@link RegistryMetadataOther}
 * @see {@link RegistryMetadataSizes}
 */
export interface RegistryMetadata {
    /** Database name, usually \`registry\` */
    readonly db_name: string;
    readonly doc_count: number;
    readonly doc_del_count: number;
    readonly update_seq: number;
    readonly purge_seq: number;
    readonly compact_running: boolean;
    readonly disk_size: number;
    readonly data_size: number;
    readonly instance_start_time: string;
    readonly disk_format_version: number;
    readonly committed_update_seq: number;
    readonly compacted_seq: number;
    readonly uuid: string;
    readonly other: RegistryMetadataOther;
    readonly sizes: RegistryMetadataSizes;
}

export interface RegistryMetadataOther {
    readonly data_size: number;
}

export interface RegistryMetadataSizes {
    readonly file: number;
    readonly active: number;
    readonly external: number;
}
`,"/stage/query-registry/src/types/repository.ts":`/**
 * \`Repository\` represents a remote repository hosting
 * the source code of a package.
 *
 * @see {@link https://docs.npmjs.com/cli/v6/configuring-npm/package-json#repository}.
 */
export interface Repository {
    /** Repository type (for example, \`git\`) */
    readonly type?: string;

    /** Repository's URL */
    readonly url: string;

    /**
     * Specific directory in the repository containing the package
     * (for example, a directory in a monorepo)
     */
    readonly directory?: string;
}
`,"/stage/query-registry/src/types/search-criteria.ts":"/**\n * `SearchCriteria` represents the available search criteria.\n *\n * @see {@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#get-v1search}\n */\nexport interface SearchCriteria {\n    /**\n     * Query text\n     *\n     * @remarks\n     * The following special text attributes can be used to refine results:\n     *\n     * - `author:<name>`: show packages from the given author\n     *   (for example, `author:someone`)\n     *\n     * - `maintainer:<name>`: show packages with the given maintainer\n     *   (for example, `maintainer:someone`)\n     *\n     * - `keywords:<keyword list>`: show packages matching the given keyword(s);\n     *   separators `,`, `+` and `,-` mean respectively `OR`, `AND` and `NOT`\n     *   (for example, use `keywords:foo,bar+baz,-quux` to include keywords `foo`\n     *   or `bar` and `baz` but not `quux`)\n     *\n     * - `not:unstable`: exclude unstable packages (version `<1.0.0`)\n     *\n     * - `not:insecure`: exclude insecure packages\n     *\n     * - `is:unstable`: include only unstable packages (version `<1.0.0`)\n     *\n     * - `is:insecure`: include only insecure packages\n     *\n     * - `boost-exact:<true/false>`: boost packages with exact name match\n     *   (default: `true`)\n     */\n    readonly text?: string;\n\n    /** Number of results to return (from `0` to `250`; default: `20` on the npm registry) */\n    readonly size?: number;\n\n    /** Return results from this offset */\n    readonly from?: number;\n\n    /** Package quality influence on results (from `0.0` to `1.0`) */\n    readonly quality?: number;\n\n    /** Package popularity influence on results (from `0.0` to `1.0`) */\n    readonly popularity?: number;\n\n    /** Package maintenance influence on results (from `0.0` to `1.0`) */\n    readonly maintenance?: number;\n}\n","/stage/query-registry/src/types/search-results.ts":`import { Person } from './person';

/**
 * \`SearchResults\` contains the results returned by the registry for a query.
 *
 * @see {@link SearchResult}
 * @see {@link https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#get-v1search}
 */
export interface SearchResults {
    /**
     * List of search results
     *
     * @see {@link SearchResult}
     */
    readonly objects: SearchResult[];

    /**
     * Total number of search results corresponding to a query;
     * may be higher than the number of \`objects\`
     */
    readonly total: number;

    /** Date at which the search happened */
    readonly time: string;
}

/**
 * \`SearchResult\` contains the search result for a single package
 *  and its search score.
 *
 * @see {@link PackageSearchResult}
 * @see {@link SearchScore}
 * @see {@link PackageFlags}
 */
export interface SearchResult {
    /**
     * Abbreviated package metadata
     *
     * @see {@link PackageSearchResult}
     */
    readonly package: PackageSearchResult;

    /**
     * Final and detailed search score values
     *
     * @see {@link SearchScore}
     */
    readonly score: SearchScore;

    /** Search score value; may be different from \`score.final\` */
    readonly searchScore: number;

    /**
     * Flag attributes for the package
     *
     * @see {@link PackageFlags}
     */
    readonly flags?: PackageFlags;
}

/**
 * \`PackageSearchResult\` contains abbreviated package metadata returned
 * by searching the registry for packages.
 *
 * @see {@link Person}
 * @see {@link PackageLinks}
 */
export interface PackageSearchResult {
    /** Package name */
    readonly name: string;

    /** Latest package version number */
    readonly version: string;

    /** Package scope; either \`unscoped\` or the package's scope */
    readonly scope: string;

    /** Publishing timestamp for the latest version */
    readonly date: string;

    /**
     * Package publisher
     *
     * @see {@link Person}
     */
    readonly publisher: Person;

    /**
     * Links for pages associated to the package
     *
     * @see {@link PackageLinks}
     */
    readonly links: PackageLinks;

    /** Package description */
    readonly description?: string;

    /** Keywords describing the package */
    readonly keywords?: string[];

    /**
     * Package author
     *
     * @see {@link Person}
     */
    readonly author?: Person;

    /**
     * Package maintainers
     *
     * @see {@link Person}
     */
    readonly maintainers?: Person[];
}

/**
 * \`PackageLinks\` contains a collection of links of pages associated to the package.
 */
export interface PackageLinks {
    readonly npm?: string;
    readonly homepage?: string;
    readonly repository?: string;
    readonly bugs?: string;
    readonly [key: string]: string | undefined;
}

/**
 * \`SearchScore\` contains the final and detailed search score values.
 *
 * @see {@link SearchScoreDetail}
 */
export interface SearchScore {
    /** Final search score value, computed from the detailed scores */
    readonly final: number;

    /**
     * Detailed search score values
     *
     * @see {@link SearchScoreDetail}
     */
    readonly detail: SearchScoreDetail;
}

/**
 * \`SearchScoreDetail\` contains the search score values for the
 * quality, popularity and maintenance categories.
 */
export interface SearchScoreDetail {
    /** Package quality score value */
    readonly quality: number;

    /** Package popularity score value */
    readonly popularity: number;

    /** Package maintenance score value */
    readonly maintenance: number;
}

/**
 * \`PackageFlags\` contains flag attributes categorizing the package.
 */
export interface PackageFlags {
    /** If true, package version is \`<1.0.0\` */
    readonly unstable?: boolean;

    /** If true, package is insecure or has vulnerable dependencies */
    readonly insecure?: boolean;
}
`,"/stage/query-registry/src/types/versions-to-timestamps.ts":`/**
 * \`VersionsToTimestamps\` maps version numbers to their publishing timestamps.
 */
export interface VersionsToTimestamps {
    /** Package creation time */
    readonly created: string;

    /** Last package update time */
    readonly modified: string;

    /** Mapping of version numbers to publishing timestamps */
    readonly [key: string]: string;
}
`,"/stage/query-registry/src/utils/assert-valid-package-name.ts":`import validatePackageName from 'validate-npm-package-name';
import { InvalidPackageNameError } from './errors';
import { log } from './log';

export function assertValidPackageName({ name }: { name: string }): void {
    const { validForOldPackages, validForNewPackages } =
        validatePackageName(name);
    const valid = validForOldPackages || validForNewPackages;
    if (!valid) {
        log('assertValidPackageName: invalid package name: %O', { name });
        throw new InvalidPackageNameError(\`invalid package name: '\${name}'\`);
    }
}
`,"/stage/query-registry/src/utils/errors.ts":`import makeError, { BaseError } from 'make-error';

/**
 * \`FetchError\` represents an error that happened when fetching a URL.
 *
 * The \`instanceof\` operator can be used to check for this error.
 */
export class FetchError extends BaseError {
    constructor(
        /** URL originally fetched */
        readonly url: string,

        /** Response received */
        readonly response: Response
    ) {
        super(
            \`fetch: request to \${url} failed with status \${response.statusText}\`
        );
    }
}

/**
 * \`InvalidPackageNameError\` is thrown when the name of a package
 * is not valid according to the npm registry naming rules.
 *
 * The \`instanceof\` operator can be used to check for this error.
 *
 * @see {@link https://www.npmjs.com/package/validate-npm-package-name}
 */
export const InvalidPackageNameError = makeError('InvalidPackageNameError');

/**
 * \`InvalidPackageVersionError\` is thrown when a package's version does not exist.
 *
 * The \`instanceof\` operator can be used to check for this error.
 */
export const InvalidPackageVersionError = makeError(
    'InvalidPackageVersionError'
);
`,"/stage/query-registry/src/utils/extract-package-manifest.ts":`import { RawPackageManifest } from '../types/raw-package-manifest';
import { RawPackument } from '../types/raw-packument';
import { InvalidPackageVersionError } from './errors';
import { log } from './log';

export function extractRawPackageManifest({
    rawPackument,
    version = 'latest',
}: {
    rawPackument: RawPackument;
    version?: string;
}): RawPackageManifest {
    const { name, 'dist-tags': distTags, versions } = rawPackument;
    const versionNumber = distTags[version] ?? version;
    const manifest = versions[versionNumber];
    if (!manifest) {
        log('getPackageManifest: invalid package version: %O', {
            name,
            version,
        });
        throw new InvalidPackageVersionError(
            \`invalid package version: '\${name}@\${version}'\`
        );
    }

    return manifest;
}
`,"/stage/query-registry/src/utils/fetch-downloads-from-registry.ts":`import { npmRegistryDownloadsAPI } from '../data/registries';
import { fetchFromRegistry } from './fetch-from-registry';

export async function fetchDownloadsFromRegistry<T>({
    endpoint,
    registryDownloadsAPI = npmRegistryDownloadsAPI,
    cached,
}: {
    endpoint: string;
    registryDownloadsAPI?: string;
    cached?: boolean;
}): Promise<T> {
    return fetchFromRegistry({
        endpoint,
        registry: registryDownloadsAPI,
        mirrors: [],
        cached,
    });
}
`,"/stage/query-registry/src/utils/fetch-from-registry.ts":`import { npmRegistry, npmRegistryMirrors } from '../data/registries';
import { FetchError } from './errors';
import { fetch } from './fetch';
import { log } from './log';
import urlJoin from 'url-join';

export async function fetchFromRegistry<T>({
    endpoint,
    headers,
    query,
    registry = npmRegistry,
    mirrors = npmRegistryMirrors,
    cached,
}: {
    endpoint: string;
    headers?: Record<string, string>;
    query?: string;
    registry?: string;
    mirrors?: string[];
    cached?: boolean;
}): Promise<T> {
    const urls = [registry, ...mirrors].map((base) =>
        urlJoin(base, endpoint, query ? \`?\${query}\` : '')
    );

    let lastError: FetchError | undefined;
    for (const url of urls) {
        try {
            const json = await fetch({ url, headers, cached });
            return json as T;
        } catch (err) {
            // Keep last fetch error
            lastError = err as any;
        }
    }

    log(
        'fetchFromRegistry: cannot retrieve data from registry or mirrors: %O',
        {
            endpoint,
            headers,
            query,
            registry,
            mirrors,
            lastError,
        }
    );
    throw lastError;
}
`,"/stage/query-registry/src/utils/fetch.ts":`import unfetch from 'isomorphic-unfetch';
import lru from 'tiny-lru';
import { FetchError } from './errors';
import { log } from './log';

const maxItems = 250;
const fiveMinutesTTL = 5 * 60 * 1000;
const cache = lru(maxItems, fiveMinutesTTL);

export async function fetch({
    url,
    headers,
    cached = true,
}: {
    url: string;
    headers?: Record<string, string>;
    cached?: boolean;
}): Promise<any> {
    const cacheKey = \`headers=\${JSON.stringify(headers)};url=\${url}\`;
    const cachedJSON = cache.get(cacheKey);
    if (cached && cachedJSON) {
        log('fetch: returning cached response: %O', {
            cacheKey,
            url,
            cachedJSON,
        });
        return cachedJSON;
    }

    const response = await unfetch(url, { headers });
    if (!response.ok) {
        log('fetch: request failed: %O', {
            url,
            headers,
            status: response.statusText,
            response,
        });
        throw new FetchError(url, response);
    }

    const json = await response.json();
    if (cached) {
        cache.set(cacheKey, json);
    }

    log('fetch: returning fresh response: %O', { url, json });
    return json;
}
`,"/stage/query-registry/src/utils/get-definitely-typed-name.ts":`import { getRawPackageManifest } from '../endpoints/get-raw-package-manifest';
import { RawPackageManifest } from '../types/raw-package-manifest';

export async function getDefinitelyTypedName({
    rawPackageManifest,
    registry,
    mirrors,
    cached,
}: {
    rawPackageManifest: RawPackageManifest;
    registry?: string;
    mirrors?: string[];
    cached?: boolean;
}): Promise<string | undefined> {
    const { name, types, typings } = rawPackageManifest;
    const definitelyTypedName = toDefinitelyTypedName({ name });
    const alreadyTyped = name === definitelyTypedName || !!types || !!typings;
    if (alreadyTyped) {
        return undefined;
    }

    let ok = false;
    try {
        const { deprecated } = await getRawPackageManifest({
            name: definitelyTypedName,
            registry,
            mirrors,
            cached,
        });
        ok = deprecated === undefined;
    } catch {}
    return ok ? definitelyTypedName : undefined;
}

/**
 * \`toDefinitelyTypedName\` returns the name of the corresponding
 * DefinitelyTyped package (for example,
 * \`foo\` => \`@types/foo\`,
 * \`@bar/baz\` => \`@types/bar__baz\`).
 */
function toDefinitelyTypedName({ name }: { name: string }): string {
    return name.startsWith('@types/')
        ? name
        : \`@types/\${name.replace('@', '').replace('/', '__')}\`;
}
`,"/stage/query-registry/src/utils/get-untyped-name.ts":`/**
 * \`getUntypedName\` returns the name of the normal package
 * corresponding to a DefinitelyTyped package.
 */
export function getUntypedName({ name }: { name: string }): string | undefined {
    if (!name.startsWith('@types/')) {
        return undefined;
    }

    // ['foo', undefined] or ['@bar', 'baz']
    const [scopeOrName, scopedName] = name.replace('@types/', '').split('__');

    return scopedName ? \`@\${scopeOrName}/\${scopedName}\` : scopeOrName;
}
`,"/stage/query-registry/src/utils/log.ts":`export async function log(formatter: any, ...args: any[]): Promise<void> {
    if (process.env.NODE_ENV !== 'production') {
        try {
            const { debug } = await import('debug');
            const logger = debug('query-registry');
            logger(formatter, args);
        } catch {}
    }
}
`,"/stage/query-registry/src/utils/normalize-download-period.ts":`import { DownloadPeriod } from '../types/download-period';

export function normalizeRawDownloadPeriod({
    rawDownloadPeriod = 'last-week',
}: {
    rawDownloadPeriod?: DownloadPeriod;
}): string {
    if (typeof rawDownloadPeriod === 'string') {
        return rawDownloadPeriod;
    }

    if (rawDownloadPeriod instanceof Date) {
        return getDay(rawDownloadPeriod);
    }

    const { start, end } = rawDownloadPeriod;
    return \`\${getDay(start)}:\${getDay(end)}\`;
}

function getDay(date: Date): string {
    return date.toISOString().split('T')[0]!;
}
`,"/stage/query-registry/src/utils/normalize-raw-abbreviated-packument.ts":`import { AbbreviatedPackument } from '../types/abbreviated-packument';
import { RawAbbreviatedPackument } from '../types/raw-abbreviated-packument';

export function normalizeRawAbbreviatedPackument({
    rawAbbreviatedPackument,
}: {
    rawAbbreviatedPackument: RawAbbreviatedPackument;
}): AbbreviatedPackument {
    const {
        'dist-tags': distTags,
        name: id,
        modified: modifiedAt,
    } = rawAbbreviatedPackument;
    return {
        ...rawAbbreviatedPackument,
        id,
        distTags,
        modifiedAt,
    };
}
`,"/stage/query-registry/src/utils/normalize-raw-license.ts":`export function normalizeRawLicense({
    rawLicense,
}: {
    rawLicense?: any;
}): string | undefined {
    if (!rawLicense) {
        return undefined;
    }

    if (typeof rawLicense !== 'string') {
        return undefined;
    }

    return rawLicense;
}
`,"/stage/query-registry/src/utils/normalize-raw-package-manifest.ts":`import { PackageManifest } from '../types/package-manifest';
import { RawPackageManifest } from '../types/raw-package-manifest';
import { RawPackument } from '../types/raw-packument';
import { getDefinitelyTypedName } from './get-definitely-typed-name';
import { getUntypedName } from './get-untyped-name';
import { normalizeRawLicense } from './normalize-raw-license';
import { normalizeRawRepository } from './normalize-raw-repository';

export async function normalizeRawPackageManifest({
    rawPackageManifest,
    rawPackument,
    registry,
    mirrors,
    cached,
}: {
    rawPackageManifest: RawPackageManifest;
    rawPackument: RawPackument;
    registry?: string;
    mirrors?: string[];
    cached?: boolean;
}): Promise<PackageManifest> {
    const {
        _id: id,
        name,
        version,
        license: rawLicense,
        repository: rawRepository,
        _npmUser: publisher,
    } = rawPackageManifest;

    const createdAt = rawPackument.time[version]!;
    const license = normalizeRawLicense({ rawLicense });
    const gitRepository = normalizeRawRepository({ rawRepository });
    const definitelyTypedName = await getDefinitelyTypedName({
        rawPackageManifest,
        registry,
        mirrors,
        cached,
    });
    const untypedName = getUntypedName({ name });

    return {
        ...rawPackageManifest,
        id,
        createdAt,
        publisher,
        license,
        gitRepository,
        definitelyTypedName,
        untypedName,
    };
}
`,"/stage/query-registry/src/utils/normalize-raw-packument.ts":`import { Packument } from '../types/packument';
import { RawPackument } from '../types/raw-packument';
import { normalizeRawLicense } from './normalize-raw-license';
import { normalizeRawRepository } from './normalize-raw-repository';

export function normalizeRawPackument({
    rawPackument,
}: {
    rawPackument: RawPackument;
}): Packument {
    const {
        _id: id,
        'dist-tags': distTags,
        time,
        license: rawLicense,
        repository: rawRepository,
    } = rawPackument;
    const license = normalizeRawLicense({ rawLicense });
    const gitRepository = normalizeRawRepository({ rawRepository });
    const versionsToTimestamps = Object.fromEntries(
        Object.entries(time).filter(([key]) => {
            return !['created', 'modified'].includes(key);
        })
    );

    return {
        ...rawPackument,
        id,
        distTags,
        versionsToTimestamps,
        license,
        gitRepository,
    };
}
`,"/stage/query-registry/src/utils/normalize-raw-repository.ts":`import gitUrlParse from 'git-url-parse';
import { GitRepository } from '../types/git-repository';
import { Repository } from '../types/repository';

export function normalizeRawRepository({
    rawRepository,
}: {
    rawRepository?: any;
}): GitRepository | undefined {
    if (isRepository(rawRepository)) {
        return normalizeRepository({ rawRepository });
    }

    if (typeof rawRepository === 'string') {
        return normalizeRepository({
            rawRepository: { url: rawRepository },
        });
    }

    return undefined;
}

function isRepository(rawRepository: any): rawRepository is Repository {
    return (
        rawRepository &&
        typeof rawRepository === 'object' &&
        typeof rawRepository['url'] === 'string' &&
        ['string', 'undefined'].includes(typeof rawRepository['type']) &&
        ['string', 'undefined'].includes(typeof rawRepository['directory'])
    );
}

function normalizeRepository({
    rawRepository,
}: {
    rawRepository: Repository;
}): GitRepository | undefined {
    const { url, directory: repositoryDir } = rawRepository;

    const info = parseGitURL({ url });
    if (!info) {
        return undefined;
    }

    const { resource, full_name: repositoryID, filepath } = info;

    // Add domain to sources derived from npm-style shortcuts
    const host = resource
        .replace(/^$/, 'github.com')
        .replace(/^github$/, 'github.com')
        .replace(/^gitlab$/, 'gitlab.com')
        .replace(/^bitbucket$/, 'bitbucket.org');

    const parsedDir = filepath !== '' ? filepath : undefined;

    return {
        type: 'git',
        url: \`https://\${host}/\${repositoryID}\`,
        directory: repositoryDir ?? parsedDir,
    };
}

function parseGitURL({ url }: { url: string }): gitUrlParse.GitUrl | undefined {
    let info;
    try {
        info = gitUrlParse(url);
    } catch {}
    return info;
}
`,"/stage/query-registry/src/utils/normalize-raw-search-criteria.ts":`import { SearchCriteria } from '../types/search-criteria';

export function normalizeRawSearchCriteria({
    rawSearchCriteria,
}: {
    rawSearchCriteria: SearchCriteria;
}): string {
    // Convert SearchCriteria to a URL query string
    return Object.entries(rawSearchCriteria)
        .filter(([, value]) => ['string', 'number'].includes(typeof value))
        .map(([key, value]) => \`\${key}=\${value}\`)
        .join('&');
}
`};function sg(){const e=Xi(),{classes:t,functions:n,constants:r,interfaces:i}=lo(It),a=It.children.find(u=>u.name===e.name),s=a.signatures[0],o=s.comment,l=hr(o.shortText),c=o?.tags?.filter(u=>u.tag==="example").map(u=>hr(u.text))??[],{fileName:m,line:y}=a.sources[0],g=tg(m);let k=a.kindString?.toLowerCase();s.type.name==="Promise"&&(k="async "+k);const S={package:e.package,version:e.version},x=s?.parameters?.map(u=>[u.name,ss(u.type,S)]).join(", "),d=ss(s.type,S);return K(co,{pkg:e.package,version:e.version,classes:t,functions:n,constants:r,interfaces:i,name:a.name,children:[K("div",{className:"border-b-2 flex justify-between",children:[K("div",{className:"flex-grow flex items-end font-mono flex-wrap",children:[b("span",{className:"text-gray-500 mr-2 word",children:k}),b("h1",{className:"text-semibold inline",children:a.name}),K("span",{className:"inline",children:["(",x,")"]}),K("span",{className:"inline",children:[": ",d]})]}),b(bu,{pkg:e.package,version:e.version,file:g,line:y})]}),b("div",{className:"mt-3",children:l}),K("div",{className:"mt-6",children:[b("h3",{className:"text-bold text-xl border-b",children:"Examples"}),c.map((u,p)=>b("div",{className:"mt-2 mb-6 w-full well",children:u},p))]})]})}function og(){const t=Xi()["*"],n="/stage/query-registry/"+t,r=ag[n];return b(Tu,{children:b(Nu,{line_numbers:!0,code:r,language:"typescript",id:"source"})})}function lg(){const e=Xi(),{classes:t,functions:n,constants:r,interfaces:i}=lo(It),a=It.children.find(c=>c.name===e.name),{fileName:s,line:o}=a.sources[0],l="interface";return b(co,{pkg:e.package,version:e.version,classes:t,functions:n,constants:r,interfaces:i,name:a.name,children:K("div",{className:"border-b-2 flex justify-between",children:[K("div",{className:"flex-grow flex items-end font-mono",children:[b("div",{className:"text-gray-500 mr-2 text-sm",children:l}),b("h1",{className:"text-semibold text-xl inline-block",children:a.name})]}),b(bu,{pkg:e.package,version:e.version,file:s,line:o})]})})}function cg(){return K(jm,{children:[b(et,{path:"/:package/:version/",element:b(_a,{})}),b(et,{path:"/:package/:version/class/:name",element:b(_a,{})}),b(et,{path:"/:package/:version/function/:name",element:b(sg,{})}),b(et,{path:"/:package/:version/interface/:name",element:b(lg,{})}),b(et,{path:"/:package/:version/constant/:name",element:b(_a,{})}),b(et,{path:"/:package/:version/file/*",element:b(og,{})}),b(et,{path:"*",element:b("div",{children:"Library not found..."})})]})}function ug(){return M.exports.useEffect(()=>{yu(Pi.get())},[]),b(cg,{})}var Eu={exports:{}},Ee={},Ou={exports:{}},qu={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}if(typeof window>"u"||typeof MessageChannel!="function"){var l=null,c=null,m=function(){if(l!==null)try{var R=e.unstable_now();l(!0,R),l=null}catch(D){throw setTimeout(m,0),D}};t=function(R){l!==null?setTimeout(t,0,R):(l=R,setTimeout(m,0))},n=function(R,D){c=setTimeout(R,D)},r=function(){clearTimeout(c)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var y=window.setTimeout,g=window.clearTimeout;if(typeof console<"u"){var k=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof k!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var S=!1,x=null,d=-1,u=5,p=0;e.unstable_shouldYield=function(){return e.unstable_now()>=p},i=function(){},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):u=0<R?Math.floor(1e3/R):5};var f=new MessageChannel,h=f.port2;f.port1.onmessage=function(){if(x!==null){var R=e.unstable_now();p=R+u;try{x(!0,R)?h.postMessage(null):(S=!1,x=null)}catch(D){throw h.postMessage(null),D}}else S=!1},t=function(R){x=R,S||(S=!0,h.postMessage(null))},n=function(R,D){d=y(function(){R(e.unstable_now())},D)},r=function(){g(d),d=-1}}function O(R,D){var j=R.length;R.push(D);e:for(;;){var W=j-1>>>1,ne=R[W];if(ne!==void 0&&0<N(ne,D))R[W]=D,R[j]=ne,j=W;else break e}}function _(R){return R=R[0],R===void 0?null:R}function P(R){var D=R[0];if(D!==void 0){var j=R.pop();if(j!==D){R[0]=j;e:for(var W=0,ne=R.length;W<ne;){var bt=2*(W+1)-1,Nt=R[bt],Fn=bt+1,Yt=R[Fn];if(Nt!==void 0&&0>N(Nt,j))Yt!==void 0&&0>N(Yt,Nt)?(R[W]=Yt,R[Fn]=j,W=Fn):(R[W]=Nt,R[bt]=j,W=bt);else if(Yt!==void 0&&0>N(Yt,j))R[W]=Yt,R[Fn]=j,W=Fn;else break e}}return D}return null}function N(R,D){var j=R.sortIndex-D.sortIndex;return j!==0?j:R.id-D.id}var T=[],F=[],de=1,X=null,Y=3,$e=!1,Ze=!1,In=!1;function ka(R){for(var D=_(F);D!==null;){if(D.callback===null)P(F);else if(D.startTime<=R)P(F),D.sortIndex=D.expirationTime,O(T,D);else break;D=_(F)}}function va(R){if(In=!1,ka(R),!Ze)if(_(T)!==null)Ze=!0,t(wa);else{var D=_(F);D!==null&&n(va,D.startTime-R)}}function wa(R,D){Ze=!1,In&&(In=!1,r()),$e=!0;var j=Y;try{for(ka(D),X=_(T);X!==null&&(!(X.expirationTime>D)||R&&!e.unstable_shouldYield());){var W=X.callback;if(typeof W=="function"){X.callback=null,Y=X.priorityLevel;var ne=W(X.expirationTime<=D);D=e.unstable_now(),typeof ne=="function"?X.callback=ne:X===_(T)&&P(T),ka(D)}else P(T);X=_(T)}if(X!==null)var bt=!0;else{var Nt=_(F);Nt!==null&&n(va,Nt.startTime-D),bt=!1}return bt}finally{X=null,Y=j,$e=!1}}var Rd=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){Ze||$e||(Ze=!0,t(wa))},e.unstable_getCurrentPriorityLevel=function(){return Y},e.unstable_getFirstCallbackNode=function(){return _(T)},e.unstable_next=function(R){switch(Y){case 1:case 2:case 3:var D=3;break;default:D=Y}var j=Y;Y=D;try{return R()}finally{Y=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=Rd,e.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=Y;Y=R;try{return D()}finally{Y=j}},e.unstable_scheduleCallback=function(R,D,j){var W=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?W+j:W):j=W,R){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=j+ne,R={id:de++,callback:D,priorityLevel:R,startTime:j,expirationTime:ne,sortIndex:-1},j>W?(R.sortIndex=j,O(F,R),_(T)===null&&R===_(F)&&(In?r():In=!0,n(va,j-W))):(R.sortIndex=ne,O(T,R),Ze||$e||(Ze=!0,t(wa))),R},e.unstable_wrapCallback=function(R){var D=Y;return function(){var j=Y;Y=D;try{return R.apply(this,arguments)}finally{Y=j}}}})(qu);Ou.exports=qu;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=M.exports,H=eu,te=Ou.exports;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Zi)throw Error(w(227));var Du=new Set,kr={};function Vt(e,t){Sn(e,t),Sn(e+"Capture",t)}function Sn(e,t){for(kr[e]=t,e=0;e<t.length;e++)Du.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vl=Object.prototype.hasOwnProperty,wl={},Pl={};function dg(e){return vl.call(Pl,e)?!0:vl.call(wl,e)?!1:pg.test(e)?Pl[e]=!0:(wl[e]=!0,!1)}function mg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gg(e,t,n,r){if(t===null||typeof t>"u"||mg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var uo=/[\-:]([a-z])/g;function po(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uo,po);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uo,po);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uo,po);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function mo(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null,a=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");a||(gg(t,n,i,r)&&(n=null),r||i===null?dg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=Zi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xn=60103,qt=60106,rt=60107,go=60108,rr=60114,fo=60109,yo=60110,ea=60112,ir=60113,xi=60120,ta=60115,ho=60116,ko=60121,vo=60128,Mu=60129,wo=60130,os=60131;if(typeof Symbol=="function"&&Symbol.for){var ee=Symbol.for;Xn=ee("react.element"),qt=ee("react.portal"),rt=ee("react.fragment"),go=ee("react.strict_mode"),rr=ee("react.profiler"),fo=ee("react.provider"),yo=ee("react.context"),ea=ee("react.forward_ref"),ir=ee("react.suspense"),xi=ee("react.suspense_list"),ta=ee("react.memo"),ho=ee("react.lazy"),ko=ee("react.block"),ee("react.scope"),vo=ee("react.opaque.id"),Mu=ee("react.debug_trace_mode"),wo=ee("react.offscreen"),os=ee("react.legacy_hidden")}var Sl=typeof Symbol=="function"&&Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=Sl&&e[Sl]||e["@@iterator"],typeof e=="function"?e:null)}var xa;function Zn(e){if(xa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xa=t&&t[1]||""}return`
`+xa+e}var Ra=!1;function Wr(e,t){if(!e||Ra)return"";Ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o])return`
`+i[s].replace(" at new "," at ");while(1<=s&&0<=o);break}}}finally{Ra=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function fg(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=Wr(e.type,!1),e;case 11:return e=Wr(e.type.render,!1),e;case 22:return e=Wr(e.type._render,!1),e;case 1:return e=Wr(e.type,!0),e;default:return""}}function un(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rt:return"Fragment";case qt:return"Portal";case rr:return"Profiler";case go:return"StrictMode";case ir:return"Suspense";case xi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yo:return(e.displayName||"Context")+".Consumer";case fo:return(e._context.displayName||"Context")+".Provider";case ea:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case ta:return un(e.type);case ko:return un(e._render);case ho:t=e._payload,e=e._init;try{return un(e(t))}catch{}}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function ju(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yg(e){var t=ju(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=yg(e))}function Cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ju(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ls(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _l(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Iu(e,t){t=t.checked,t!=null&&mo(e,"checked",t,!1)}function cs(e,t){Iu(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?us(e,t.type,n):t.hasOwnProperty("defaultValue")&&us(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function us(e,t,n){(t!=="number"||Ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function hg(e){var t="";return Zi.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function ps(e,t){return e=H({children:void 0},t),(t=hg(t.children))&&(e.children=t),e}function pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function Fu(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var ms={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,Au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==ms.svg||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kg=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){kg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function Uu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function zu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var vg=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fs(e,t){if(t){if(vg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hs=null,dn=null,mn=null;function Nl(e){if(e=Ur(e)){if(typeof hs!="function")throw Error(w(280));var t=e.stateNode;t&&(t=oa(t),hs(e.stateNode,e.type,t))}}function Bu(e){dn?mn?mn.push(e):mn=[e]:dn=e}function Hu(){if(dn){var e=dn,t=mn;if(mn=dn=null,Nl(e),t)for(e=0;e<t.length;e++)Nl(t[e])}}function So(e,t){return e(t)}function $u(e,t,n,r,i){return e(t,n,r,i)}function _o(){}var Vu=So,Dt=!1,ba=!1;function xo(){(dn!==null||mn!==null)&&(_o(),Hu())}function wg(e,t,n){if(ba)return e(t,n);ba=!0;try{return Vu(e,t,n)}finally{ba=!1,xo()}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=oa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var ks=!1;if(Ke)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){ks=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{ks=!1}function Pg(e,t,n,r,i,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var sr=!1,bi=null,Ni=!1,vs=null,Sg={onError:function(e){sr=!0,bi=e}};function _g(e,t,n,r,i,a,s,o,l){sr=!1,bi=null,Pg.apply(Sg,arguments)}function xg(e,t,n,r,i,a,s,o,l){if(_g.apply(this,arguments),sr){if(sr){var c=bi;sr=!1,bi=null}else throw Error(w(198));Ni||(Ni=!0,vs=c)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tl(e){if(Wt(e)!==e)throw Error(w(188))}function Rg(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Tl(i),e;if(a===r)return Tl(i),t;a=a.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=a;break}if(o===r){s=!0,r=i,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,r=i;break}if(o===r){s=!0,r=a,n=i;break}o=o.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Wu(e){if(e=Rg(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function El(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Ju,Ro,Yu,Qu,ws=!1,Ie=[],ut=null,pt=null,dt=null,Pr=new Map,Sr=new Map,zn=[],Ol="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ps(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function ql(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Bn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e=Ps(t,n,r,i,a),t!==null&&(t=Ur(t),t!==null&&Ro(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bg(e,t,n,r,i){switch(t){case"focusin":return ut=Bn(ut,e,t,n,r,i),!0;case"dragenter":return pt=Bn(pt,e,t,n,r,i),!0;case"mouseover":return dt=Bn(dt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Pr.set(a,Bn(Pr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Sr.set(a,Bn(Sr.get(a)||null,e,t,n,r,i)),!0}return!1}function Ng(e){var t=Mt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=Gu(n),t!==null){e.blockedOn=t,Qu(e.lanePriority,function(){te.unstable_runWithPriority(e.priority,function(){Yu(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Ur(n),t!==null&&Ro(t),e.blockedOn=n,!1;t.shift()}return!0}function Dl(e,t,n){ui(e)&&n.delete(t)}function Tg(){for(ws=!1;0<Ie.length;){var e=Ie[0];if(e.blockedOn!==null){e=Ur(e.blockedOn),e!==null&&Ju(e);break}for(var t=e.targetContainers;0<t.length;){var n=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&Ie.shift()}ut!==null&&ui(ut)&&(ut=null),pt!==null&&ui(pt)&&(pt=null),dt!==null&&ui(dt)&&(dt=null),Pr.forEach(Dl),Sr.forEach(Dl)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,ws||(ws=!0,te.unstable_scheduleCallback(te.unstable_NormalPriority,Tg)))}function Ku(e){function t(i){return Hn(i,e)}if(0<Ie.length){Hn(Ie[0],e);for(var n=1;n<Ie.length;n++){var r=Ie[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Hn(ut,e),pt!==null&&Hn(pt,e),dt!==null&&Hn(dt,e),Pr.forEach(t),Sr.forEach(t),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)Ng(n),n.blockedOn===null&&zn.shift()}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},Na={},Xu={};Ke&&(Xu=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function na(e){if(Na[e])return Na[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xu)return Na[e]=t[n];return e}var Zu=na("animationend"),ep=na("animationiteration"),tp=na("animationstart"),np=na("transitionend"),rp=new Map,bo=new Map,Eg=["abort","abort",Zu,"animationEnd",ep,"animationIteration",tp,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",np,"transitionEnd","waiting","waiting"];function No(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),bo.set(r,t),rp.set(r,i),Vt(i,[r])}}var Og=te.unstable_now;Og();var L=8;function Xt(e){if((1&e)!==0)return L=15,1;if((2&e)!==0)return L=14,2;if((4&e)!==0)return L=13,4;var t=24&e;return t!==0?(L=12,t):(e&32)!==0?(L=11,32):(t=192&e,t!==0?(L=10,t):(e&256)!==0?(L=9,256):(t=3584&e,t!==0?(L=8,t):(e&4096)!==0?(L=7,4096):(t=4186112&e,t!==0?(L=6,t):(t=62914560&e,t!==0?(L=5,t):e&67108864?(L=4,67108864):(e&134217728)!==0?(L=3,134217728):(t=805306368&e,t!==0?(L=2,t):(1073741824&e)!==0?(L=1,1073741824):(L=8,e))))))}function qg(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Dg(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(w(358,e))}}function _r(e,t){var n=e.pendingLanes;if(n===0)return L=0;var r=0,i=0,a=e.expiredLanes,s=e.suspendedLanes,o=e.pingedLanes;if(a!==0)r=a,i=L=15;else if(a=n&134217727,a!==0){var l=a&~s;l!==0?(r=Xt(l),i=L):(o&=a,o!==0&&(r=Xt(o),i=L))}else a=n&~s,a!==0?(r=Xt(a),i=L):o!==0&&(r=Xt(o),i=L);if(r===0)return 0;if(r=31-vt(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&s)===0){if(Xt(t),i<=L)return t;L=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),i=1<<n,r|=e[n],t&=~i;return r}function ip(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ti(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Zt(24&~t),e===0?Ti(10,t):e;case 10:return e=Zt(192&~t),e===0?Ti(8,t):e;case 8:return e=Zt(3584&~t),e===0&&(e=Zt(4186112&~t),e===0&&(e=512)),e;case 2:return t=Zt(805306368&~t),t===0&&(t=268435456),t}throw Error(w(358,e))}function Zt(e){return e&-e}function Ta(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ra(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-vt(t),e[t]=n}var vt=Math.clz32?Math.clz32:Cg,Mg=Math.log,jg=Math.LN2;function Cg(e){return e===0?32:31-(Mg(e)/jg|0)|0}var Ig=te.unstable_UserBlockingPriority,Fg=te.unstable_runWithPriority,pi=!0;function Lg(e,t,n,r){Dt||_o();var i=To,a=Dt;Dt=!0;try{$u(i,e,t,n,r)}finally{(Dt=a)||xo()}}function Ag(e,t,n,r){Fg(Ig,To.bind(null,e,t,n,r))}function To(e,t,n,r){if(pi){var i;if((i=(t&4)===0)&&0<Ie.length&&-1<Ol.indexOf(e))e=Ps(null,e,t,n,r),Ie.push(e);else{var a=Eo(e,t,n,r);if(a===null)i&&ql(e,r);else{if(i){if(-1<Ol.indexOf(e)){e=Ps(a,e,t,n,r),Ie.push(e);return}if(bg(a,e,t,n,r))return;ql(e,r)}hp(e,t,r,null,n)}}}}function Eo(e,t,n,r){var i=Po(r);if(i=Mt(i),i!==null){var a=Wt(i);if(a===null)i=null;else{var s=a.tag;if(s===13){if(i=Gu(a),i!==null)return i;i=null}else if(s===3){if(a.stateNode.hydrate)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null)}}return hp(e,t,r,i,n),null}var st=null,Oo=null,di=null;function ap(){if(di)return di;var e,t=Oo,n=t.length,r,i="value"in st?st.value:st.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return di=i.slice(e,1<r?1-r:void 0)}function mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function Ml(){return!1}function _e(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Kr:Ml,this.isPropagationStopped=Ml,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=_e(qn),Ar=H({},qn,{view:0,detail:0}),Ug=_e(Ar),Ea,Oa,$n,ia=H({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Do,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Ea=e.screenX-$n.screenX,Oa=e.screenY-$n.screenY):Oa=Ea=0,$n=e),Ea)},movementY:function(e){return"movementY"in e?e.movementY:Oa}}),jl=_e(ia),zg=H({},ia,{dataTransfer:0}),Bg=_e(zg),Hg=H({},Ar,{relatedTarget:0}),qa=_e(Hg),$g=H({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=_e($g),Gg=H({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wg=_e(Gg),Jg=H({},qn,{data:0}),Cl=_e(Jg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kg[e])?!!t[e]:!1}function Do(){return Xg}var Zg=H({},Ar,{key:function(e){if(e.key){var t=Yg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Do,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ef=_e(Zg),tf=H({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Il=_e(tf),nf=H({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Do}),rf=_e(nf),af=H({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),sf=_e(af),of=H({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lf=_e(of),cf=[9,13,27,32],Mo=Ke&&"CompositionEvent"in window,or=null;Ke&&"documentMode"in document&&(or=document.documentMode);var uf=Ke&&"TextEvent"in window&&!or,sp=Ke&&(!Mo||or&&8<or&&11>=or),Fl=String.fromCharCode(32),Ll=!1;function op(e,t){switch(e){case"keyup":return cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rn=!1;function pf(e,t){switch(e){case"compositionend":return lp(t);case"keypress":return t.which!==32?null:(Ll=!0,Fl);case"textInput":return e=t.data,e===Fl&&Ll?null:e;default:return null}}function df(e,t){if(rn)return e==="compositionend"||!Mo&&op(e,t)?(e=ap(),di=Oo=st=null,rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sp&&t.locale!=="ko"?null:t.data;default:return null}}var mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mf[e.type]:t==="textarea"}function cp(e,t,n,r){Bu(r),t=Ei(t,"onChange"),0<t.length&&(n=new qo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lr=null,xr=null;function gf(e){gp(e,0)}function aa(e){var t=sn(e);if(Cu(t))return e}function ff(e,t){if(e==="change")return t}var up=!1;if(Ke){var Da;if(Ke){var Ma="oninput"in document;if(!Ma){var Ul=document.createElement("div");Ul.setAttribute("oninput","return;"),Ma=typeof Ul.oninput=="function"}Da=Ma}else Da=!1;up=Da&&(!document.documentMode||9<document.documentMode)}function zl(){lr&&(lr.detachEvent("onpropertychange",pp),xr=lr=null)}function pp(e){if(e.propertyName==="value"&&aa(xr)){var t=[];if(cp(t,xr,e,Po(e)),e=gf,Dt)e(t);else{Dt=!0;try{So(e,t)}finally{Dt=!1,xo()}}}}function yf(e,t,n){e==="focusin"?(zl(),lr=t,xr=n,lr.attachEvent("onpropertychange",pp)):e==="focusout"&&zl()}function hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(xr)}function kf(e,t){if(e==="click")return aa(t)}function vf(e,t){if(e==="input"||e==="change")return aa(t)}function wf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xe=typeof Object.is=="function"?Object.is:wf,Pf=Object.prototype.hasOwnProperty;function Rr(e,t){if(xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Pf.call(t,n[r])||!xe(e[n[r]],t[n[r]]))return!1;return!0}function Bl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hl(e,t){var n=Bl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bl(n)}}function dp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $l(){for(var e=window,t=Ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ri(e.document)}return t}function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Sf=Ke&&"documentMode"in document&&11>=document.documentMode,an=null,_s=null,cr=null,xs=!1;function Vl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xs||an==null||an!==Ri(r)||(r=an,"selectionStart"in r&&Ss(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&Rr(cr,r)||(cr=r,r=Ei(_s,"onSelect"),0<r.length&&(t=new qo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=an)))}No("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);No("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);No(Eg,2);for(var Gl="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),ja=0;ja<Gl.length;ja++)bo.set(Gl[ja],0);Sn("onMouseEnter",["mouseout","mouseover"]);Sn("onMouseLeave",["mouseout","mouseover"]);Sn("onPointerEnter",["pointerout","pointerover"]);Sn("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mp=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Wl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xg(r,t,void 0,e),e.currentTarget=null}function gp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;Wl(i,o,c),a=l}else for(s=0;s<r.length;s++){if(o=r[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;Wl(i,o,c),a=l}}}if(Ni)throw e=vs,Ni=!1,vs=null,e}function A(e,t){var n=vp(t),r=e+"__bubble";n.has(r)||(yp(t,e,2,!1),n.add(r))}var Jl="_reactListening"+Math.random().toString(36).slice(2);function fp(e){e[Jl]||(e[Jl]=!0,Du.forEach(function(t){mp.has(t)||Yl(t,!1,e,null),Yl(t,!0,e,null)}))}function Yl(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,a=n;if(e==="selectionchange"&&n.nodeType!==9&&(a=n.ownerDocument),r!==null&&!t&&mp.has(e)){if(e!=="scroll")return;i|=2,a=r}var s=vp(a),o=e+"__"+(t?"capture":"bubble");s.has(o)||(t&&(i|=4),yp(a,e,i,t),s.add(o))}function yp(e,t,n,r){var i=bo.get(t);switch(i===void 0?2:i){case 0:i=Lg;break;case 1:i=Ag;break;default:i=To}n=i.bind(null,t,n,e),i=void 0,!ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function hp(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Mt(o),s===null)return;if(l=s.tag,l===5||l===6){r=a=s;continue e}o=o.parentNode}}r=r.return}wg(function(){var c=a,m=Po(n),y=[];e:{var g=rp.get(e);if(g!==void 0){var k=qo,S=e;switch(e){case"keypress":if(mi(n)===0)break e;case"keydown":case"keyup":k=ef;break;case"focusin":S="focus",k=qa;break;case"focusout":S="blur",k=qa;break;case"beforeblur":case"afterblur":k=qa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=rf;break;case Zu:case ep:case tp:k=Vg;break;case np:k=sf;break;case"scroll":k=Ug;break;case"wheel":k=lf;break;case"copy":case"cut":case"paste":k=Wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Il}var x=(t&4)!==0,d=!x&&e==="scroll",u=x?g!==null?g+"Capture":null:g;x=[];for(var p=c,f;p!==null;){f=p;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,u!==null&&(h=wr(p,u),h!=null&&x.push(br(p,h,f)))),d)break;p=p.return}0<x.length&&(g=new k(g,S,null,n,m),y.push({event:g,listeners:x}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&(t&16)===0&&(S=n.relatedTarget||n.fromElement)&&(Mt(S)||S[Dn]))break e;if((k||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,k?(S=n.relatedTarget||n.toElement,k=c,S=S?Mt(S):null,S!==null&&(d=Wt(S),S!==d||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=c),k!==S)){if(x=jl,h="onMouseLeave",u="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Il,h="onPointerLeave",u="onPointerEnter",p="pointer"),d=k==null?g:sn(k),f=S==null?g:sn(S),g=new x(h,p+"leave",k,n,m),g.target=d,g.relatedTarget=f,h=null,Mt(m)===c&&(x=new x(u,p+"enter",S,n,m),x.target=f,x.relatedTarget=d,h=x),d=h,k&&S)t:{for(x=k,u=S,p=0,f=x;f;f=Qt(f))p++;for(f=0,h=u;h;h=Qt(h))f++;for(;0<p-f;)x=Qt(x),p--;for(;0<f-p;)u=Qt(u),f--;for(;p--;){if(x===u||u!==null&&x===u.alternate)break t;x=Qt(x),u=Qt(u)}x=null}else x=null;k!==null&&Ql(y,g,k,x,!1),S!==null&&d!==null&&Ql(y,d,S,x,!0)}}e:{if(g=c?sn(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var O=ff;else if(Al(g))if(up)O=vf;else{O=hf;var _=yf}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=kf);if(O&&(O=O(e,c))){cp(y,O,n,m);break e}_&&_(e,g,c),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&us(g,"number",g.value)}switch(_=c?sn(c):window,e){case"focusin":(Al(_)||_.contentEditable==="true")&&(an=_,_s=c,cr=null);break;case"focusout":cr=_s=an=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,Vl(y,n,m);break;case"selectionchange":if(Sf)break;case"keydown":case"keyup":Vl(y,n,m)}var P;if(Mo)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else rn?op(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(sp&&n.locale!=="ko"&&(rn||N!=="onCompositionStart"?N==="onCompositionEnd"&&rn&&(P=ap()):(st=m,Oo="value"in st?st.value:st.textContent,rn=!0)),_=Ei(c,N),0<_.length&&(N=new Cl(N,e,null,n,m),y.push({event:N,listeners:_}),P?N.data=P:(P=lp(n),P!==null&&(N.data=P)))),(P=uf?pf(e,n):df(e,n))&&(c=Ei(c,"onBeforeInput"),0<c.length&&(m=new Cl("onBeforeInput","beforeinput",null,n,m),y.push({event:m,listeners:c}),m.data=P))}gp(y,t)})}function br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ei(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=wr(e,n),a!=null&&r.unshift(br(e,a,i)),a=wr(e,t),a!=null&&r.push(br(e,a,i))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ql(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&c!==null&&(o=c,i?(l=wr(n,a),l!=null&&s.unshift(br(n,l,o))):i||(l=wr(n,a),l!=null&&s.push(br(n,l,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}function Oi(){}var Ca=null,Ia=null;function kp(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Rs(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,_f=typeof clearTimeout=="function"?clearTimeout:void 0;function jo(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Xl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fa=0;function xf(e){return{$$typeof:vo,toString:e,valueOf:e}}var sa=Math.random().toString(36).slice(2),ot="__reactFiber$"+sa,qi="__reactProps$"+sa,Dn="__reactContainer$"+sa,Zl="__reactEvents$"+sa;function Mt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dn]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xl(e);e!==null;){if(n=e[ot])return n;e=Xl(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[ot]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function oa(e){return e[qi]||null}function vp(e){var t=e[Zl];return t===void 0&&(t=e[Zl]=new Set),t}var bs=[],on=-1;function xt(e){return{current:e}}function U(e){0>on||(e.current=bs[on],bs[on]=null,on--)}function G(e,t){on++,bs[on]=e.current,e.current=t}var wt={},pe=xt(wt),ke=xt(!1),Ut=wt;function _n(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function Di(){U(ke),U(pe)}function ec(e,t,n){if(pe.current!==wt)throw Error(w(168));G(pe,t),G(ke,n)}function wp(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,un(t)||"Unknown",i));return H({},n,r)}function gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,Ut=pe.current,G(pe,e),G(ke,ke.current),!0}function tc(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=wp(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,U(ke),U(pe),G(pe,e)):U(ke),G(ke,n)}var Co=null,Ft=null,Rf=te.unstable_runWithPriority,Io=te.unstable_scheduleCallback,Ns=te.unstable_cancelCallback,bf=te.unstable_shouldYield,nc=te.unstable_requestPaint,Ts=te.unstable_now,Nf=te.unstable_getCurrentPriorityLevel,la=te.unstable_ImmediatePriority,Pp=te.unstable_UserBlockingPriority,Sp=te.unstable_NormalPriority,_p=te.unstable_LowPriority,xp=te.unstable_IdlePriority,La={},Tf=nc!==void 0?nc:function(){},Ve=null,fi=null,Aa=!1,rc=Ts(),ce=1e4>rc?Ts:function(){return Ts()-rc};function xn(){switch(Nf()){case la:return 99;case Pp:return 98;case Sp:return 97;case _p:return 96;case xp:return 95;default:throw Error(w(332))}}function Rp(e){switch(e){case 99:return la;case 98:return Pp;case 97:return Sp;case 96:return _p;case 95:return xp;default:throw Error(w(332))}}function zt(e,t){return e=Rp(e),Rf(e,t)}function Nr(e,t,n){return e=Rp(e),Io(e,t,n)}function He(){if(fi!==null){var e=fi;fi=null,Ns(e)}bp()}function bp(){if(!Aa&&Ve!==null){Aa=!0;var e=0;try{var t=Ve;zt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),Ve=null}catch(n){throw Ve!==null&&(Ve=Ve.slice(e+1)),Io(la,He),n}finally{Aa=!1}}}var Ef=Gt.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Mi=xt(null),ji=null,ln=null,Ci=null;function Fo(){Ci=ln=ji=null}function Lo(e){var t=Mi.current;U(Mi),e.type._context._currentValue=t}function Np(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function fn(e,t){ji=e,Ci=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Me=!0),e.firstContext=null)}function Ne(e,t){if(Ci!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ci=e,t=1073741823),t={context:e,observedBits:t,next:null},ln===null){if(ji===null)throw Error(w(308));ln=t,ji.dependencies={lanes:0,firstContext:t,responders:null}}else ln=ln.next=t;return e._currentValue}var tt=!1;function Ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Tp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function ic(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Tr(e,t,n,r){var i=e.updateQueue;tt=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var m=e.alternate;if(m!==null){m=m.updateQueue;var y=m.lastBaseUpdate;y!==s&&(y===null?m.firstBaseUpdate=c:y.next=c,m.lastBaseUpdate=l)}}if(a!==null){y=i.baseState,s=0,m=c=l=null;do{o=a.lane;var g=a.eventTime;if((r&o)===o){m!==null&&(m=m.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,S=a;switch(o=t,g=n,S.tag){case 1:if(k=S.payload,typeof k=="function"){y=k.call(g,y,o);break e}y=k;break e;case 3:k.flags=k.flags&-4097|64;case 0:if(k=S.payload,o=typeof k=="function"?k.call(g,y,o):k,o==null)break e;y=H({},y,o);break e;case 2:tt=!0}}a.callback!==null&&(e.flags|=32,o=i.effects,o===null?i.effects=[a]:o.push(a))}else g={eventTime:g,lane:o,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=g,l=y):m=m.next=g,s|=o;if(a=a.next,a===null){if(o=i.shared.pending,o===null)break;a=o.next,o.next=null,i.lastBaseUpdate=o,i.shared.pending=null}}while(1);m===null&&(l=y),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=m,Br|=s,e.lanes=s,e.memoizedState=y}}function ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Ep=new Zi.Component().refs;function Ii(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ca={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=ft(e),a=mt(r,i);a.payload=t,n!=null&&(a.callback=n),gt(e,a),yt(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=ft(e),a=mt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),gt(e,a),yt(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=ft(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),gt(e,i),yt(e,r,n)}};function sc(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,a):!0}function Op(e,t,n){var r=!1,i=wt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ne(a):(i=ve(t)?Ut:pe.current,r=t.contextTypes,a=(r=r!=null)?_n(e,i):wt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ca,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function oc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ca.enqueueReplaceState(t,t.state,null)}function Es(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ep,Ao(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ne(a):(a=ve(t)?Ut:pe.current,i.context=_n(e,a)),Tr(e,n,i,r),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ii(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ca.enqueueReplaceState(i,i.state,null),Tr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var Xr=Array.isArray;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=r.refs;s===Ep&&(s=r.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Zr(e,t){if(e.type!=="textarea")throw Error(w(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function qp(e){function t(d,u){if(e){var p=d.lastEffect;p!==null?(p.nextEffect=u,d.lastEffect=u):d.firstEffect=d.lastEffect=u,u.nextEffect=null,u.flags=8}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=St(d,u),d.index=0,d.sibling=null,d}function a(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags=2,u):p):(d.flags=2,u)):u}function s(d){return e&&d.alternate===null&&(d.flags=2),d}function o(d,u,p,f){return u===null||u.tag!==6?(u=$a(p,d.mode,f),u.return=d,u):(u=i(u,p),u.return=d,u)}function l(d,u,p,f){return u!==null&&u.elementType===p.type?(f=i(u,p.props),f.ref=Vn(d,u,p),f.return=d,f):(f=vi(p.type,p.key,p.props,null,d.mode,f),f.ref=Vn(d,u,p),f.return=d,f)}function c(d,u,p,f){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Va(p,d.mode,f),u.return=d,u):(u=i(u,p.children||[]),u.return=d,u)}function m(d,u,p,f,h){return u===null||u.tag!==7?(u=vn(p,d.mode,f,h),u.return=d,u):(u=i(u,p),u.return=d,u)}function y(d,u,p){if(typeof u=="string"||typeof u=="number")return u=$a(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Xn:return p=vi(u.type,u.key,u.props,null,d.mode,p),p.ref=Vn(d,null,u),p.return=d,p;case qt:return u=Va(u,d.mode,p),u.return=d,u}if(Xr(u)||An(u))return u=vn(u,d.mode,p,null),u.return=d,u;Zr(d,u)}return null}function g(d,u,p,f){var h=u!==null?u.key:null;if(typeof p=="string"||typeof p=="number")return h!==null?null:o(d,u,""+p,f);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xn:return p.key===h?p.type===rt?m(d,u,p.props.children,f,h):l(d,u,p,f):null;case qt:return p.key===h?c(d,u,p,f):null}if(Xr(p)||An(p))return h!==null?null:m(d,u,p,f,null);Zr(d,p)}return null}function k(d,u,p,f,h){if(typeof f=="string"||typeof f=="number")return d=d.get(p)||null,o(u,d,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xn:return d=d.get(f.key===null?p:f.key)||null,f.type===rt?m(u,d,f.props.children,h,f.key):l(u,d,f,h);case qt:return d=d.get(f.key===null?p:f.key)||null,c(u,d,f,h)}if(Xr(f)||An(f))return d=d.get(p)||null,m(u,d,f,h,null);Zr(u,f)}return null}function S(d,u,p,f){for(var h=null,O=null,_=u,P=u=0,N=null;_!==null&&P<p.length;P++){_.index>P?(N=_,_=null):N=_.sibling;var T=g(d,_,p[P],f);if(T===null){_===null&&(_=N);break}e&&_&&T.alternate===null&&t(d,_),u=a(T,u,P),O===null?h=T:O.sibling=T,O=T,_=N}if(P===p.length)return n(d,_),h;if(_===null){for(;P<p.length;P++)_=y(d,p[P],f),_!==null&&(u=a(_,u,P),O===null?h=_:O.sibling=_,O=_);return h}for(_=r(d,_);P<p.length;P++)N=k(_,d,P,p[P],f),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?P:N.key),u=a(N,u,P),O===null?h=N:O.sibling=N,O=N);return e&&_.forEach(function(F){return t(d,F)}),h}function x(d,u,p,f){var h=An(p);if(typeof h!="function")throw Error(w(150));if(p=h.call(p),p==null)throw Error(w(151));for(var O=h=null,_=u,P=u=0,N=null,T=p.next();_!==null&&!T.done;P++,T=p.next()){_.index>P?(N=_,_=null):N=_.sibling;var F=g(d,_,T.value,f);if(F===null){_===null&&(_=N);break}e&&_&&F.alternate===null&&t(d,_),u=a(F,u,P),O===null?h=F:O.sibling=F,O=F,_=N}if(T.done)return n(d,_),h;if(_===null){for(;!T.done;P++,T=p.next())T=y(d,T.value,f),T!==null&&(u=a(T,u,P),O===null?h=T:O.sibling=T,O=T);return h}for(_=r(d,_);!T.done;P++,T=p.next())T=k(_,d,P,T.value,f),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?P:T.key),u=a(T,u,P),O===null?h=T:O.sibling=T,O=T);return e&&_.forEach(function(de){return t(d,de)}),h}return function(d,u,p,f){var h=typeof p=="object"&&p!==null&&p.type===rt&&p.key===null;h&&(p=p.props.children);var O=typeof p=="object"&&p!==null;if(O)switch(p.$$typeof){case Xn:e:{for(O=p.key,h=u;h!==null;){if(h.key===O){switch(h.tag){case 7:if(p.type===rt){n(d,h.sibling),u=i(h,p.props.children),u.return=d,d=u;break e}break;default:if(h.elementType===p.type){n(d,h.sibling),u=i(h,p.props),u.ref=Vn(d,h,p),u.return=d,d=u;break e}}n(d,h);break}else t(d,h);h=h.sibling}p.type===rt?(u=vn(p.props.children,d.mode,f,p.key),u.return=d,d=u):(f=vi(p.type,p.key,p.props,null,d.mode,f),f.ref=Vn(d,u,p),f.return=d,d=f)}return s(d);case qt:e:{for(h=p.key;u!==null;){if(u.key===h)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=i(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Va(p,d.mode,f),u.return=d,d=u}return s(d)}if(typeof p=="string"||typeof p=="number")return p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,p),u.return=d,d=u):(n(d,u),u=$a(p,d.mode,f),u.return=d,d=u),s(d);if(Xr(p))return S(d,u,p,f);if(An(p))return x(d,u,p,f);if(O&&Zr(d,p),typeof p>"u"&&!h)switch(d.tag){case 1:case 22:case 0:case 11:case 15:throw Error(w(152,un(d.type)||"Component"))}return n(d,u)}}var Fi=qp(!0),Dp=qp(!1),zr={},Ae=xt(zr),Er=xt(zr),Or=xt(zr);function jt(e){if(e===zr)throw Error(w(174));return e}function Os(e,t){switch(G(Or,t),G(Er,e),G(Ae,zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gs(t,e)}U(Ae),G(Ae,t)}function Rn(){U(Ae),U(Er),U(Or)}function lc(e){jt(Or.current);var t=jt(Ae.current),n=gs(t,e.type);t!==n&&(G(Er,e),G(Ae,n))}function Uo(e){Er.current===e&&(U(Ae),U(Er))}var V=xt(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var We=null,lt=null,Ue=!1;function Mp(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function cc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function qs(e){if(Ue){var t=lt;if(t){var n=t;if(!cc(e,t)){if(t=gn(n.nextSibling),!t||!cc(e,t)){e.flags=e.flags&-1025|2,Ue=!1,We=e;return}Mp(We,n)}We=e,lt=gn(t.firstChild)}else e.flags=e.flags&-1025|2,Ue=!1,We=e}}function uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function ei(e){if(e!==We)return!1;if(!Ue)return uc(e),Ue=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Rs(t,e.memoizedProps))for(t=lt;t;)Mp(e,t),t=gn(t.nextSibling);if(uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=We?gn(e.stateNode.nextSibling):null;return!0}function Ua(){lt=We=null,Ue=!1}var yn=[];function zo(){for(var e=0;e<yn.length;e++)yn[e]._workInProgressVersionPrimary=null;yn.length=0}var ur=Gt.ReactCurrentDispatcher,be=Gt.ReactCurrentBatchConfig,qr=0,J=null,se=null,re=null,Ai=!1,pr=!1;function fe(){throw Error(w(321))}function Bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xe(e[n],t[n]))return!1;return!0}function Ho(e,t,n,r,i,a){if(qr=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ur.current=e===null||e.memoizedState===null?qf:Df,e=n(r,i),pr){a=0;do{if(pr=!1,!(25>a))throw Error(w(301));a+=1,re=se=null,t.updateQueue=null,ur.current=Mf,e=n(r,i)}while(pr)}if(ur.current=Hi,t=se!==null&&se.next!==null,qr=0,re=se=J=null,Ai=!1,t)throw Error(w(300));return e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?J.memoizedState=re=e:re=re.next=e,re}function Jt(){if(se===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=re===null?J.memoizedState:re.next;if(t!==null)re=t,se=e;else{if(e===null)throw Error(w(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},re===null?J.memoizedState=re=e:re=re.next=e}return re}function Fe(e,t){return typeof t=="function"?t(e):t}function Gn(e){var t=Jt(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var o=s=a=null,l=i;do{var c=l.lane;if((qr&c)===c)o!==null&&(o=o.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var m={lane:c,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};o===null?(s=o=m,a=r):o=o.next=m,J.lanes|=c,Br|=c}l=l.next}while(l!==null&&l!==i);o===null?a=r:o.next=s,xe(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=o,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Wn(e){var t=Jt(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);xe(a,t.memoizedState)||(Me=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function pc(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(qr&e)===e)&&(t._workInProgressVersionPrimary=r,yn.push(t))),e)return n(t._source);throw yn.push(t),Error(w(350))}function jp(e,t,n,r){var i=me;if(i===null)throw Error(w(349));var a=t._getVersion,s=a(t._source),o=ur.current,l=o.useState(function(){return pc(i,t,n)}),c=l[1],m=l[0];l=re;var y=e.memoizedState,g=y.refs,k=g.getSnapshot,S=y.source;y=y.subscribe;var x=J;return e.memoizedState={refs:g,source:t,subscribe:r},o.useEffect(function(){g.getSnapshot=n,g.setSnapshot=c;var d=a(t._source);if(!xe(s,d)){d=n(t._source),xe(m,d)||(c(d),d=ft(x),i.mutableReadLanes|=d&i.pendingLanes),d=i.mutableReadLanes,i.entangledLanes|=d;for(var u=i.entanglements,p=d;0<p;){var f=31-vt(p),h=1<<f;u[f]|=d,p&=~h}}},[n,t,r]),o.useEffect(function(){return r(t._source,function(){var d=g.getSnapshot,u=g.setSnapshot;try{u(d(t._source));var p=ft(x);i.mutableReadLanes|=p&i.pendingLanes}catch(f){u(function(){throw f})}})},[t,r]),xe(k,n)&&xe(S,t)&&xe(y,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:m},e.dispatch=c=Go.bind(null,J,e),l.queue=e,l.baseQueue=null,m=pc(i,t,n),l.memoizedState=l.baseState=m),m}function Cp(e,t,n){var r=Jt();return jp(r,e,t,n)}function Jn(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:e},e=e.dispatch=Go.bind(null,J,e),[t.memoizedState,e]}function Ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dc(e){var t=Ct();return e={current:e},t.memoizedState=e}function zi(){return Jt().memoizedState}function Ds(e,t,n,r){var i=Ct();J.flags|=e,i.memoizedState=Ui(1|t,n,void 0,r===void 0?null:r)}function $o(e,t,n,r){var i=Jt();r=r===void 0?null:r;var a=void 0;if(se!==null){var s=se.memoizedState;if(a=s.destroy,r!==null&&Bo(r,s.deps)){Ui(t,n,a,r);return}}J.flags|=e,i.memoizedState=Ui(1|t,n,a,r)}function mc(e,t){return Ds(516,4,e,t)}function Bi(e,t){return $o(516,4,e,t)}function Ip(e,t){return $o(4,2,e,t)}function Fp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lp(e,t,n){return n=n!=null?n.concat([e]):null,$o(4,2,Fp.bind(null,t,e),n)}function Vo(){}function Ap(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Up(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Of(e,t){var n=xn();zt(98>n?98:n,function(){e(!0)}),zt(97<n?97:n,function(){var r=be.transition;be.transition=1;try{e(!1),t()}finally{be.transition=r}})}function Go(e,t,n){var r=Se(),i=ft(e),a={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(s===null?a.next=a:(a.next=s.next,s.next=a),t.pending=a,s=e.alternate,e===J||s!==null&&s===J)pr=Ai=!0;else{if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(a.eagerReducer=s,a.eagerState=l,xe(l,o))return}catch{}finally{}yt(e,i,r)}}var Hi={readContext:Ne,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useOpaqueIdentifier:fe,unstable_isNewReconciler:!1},qf={readContext:Ne,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:mc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ds(4,2,Fp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ds(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Go.bind(null,J,e),[r.memoizedState,e]},useRef:dc,useState:Jn,useDebugValue:Vo,useDeferredValue:function(e){var t=Jn(e),n=t[0],r=t[1];return mc(function(){var i=be.transition;be.transition=1;try{r(e)}finally{be.transition=i}},[e]),n},useTransition:function(){var e=Jn(!1),t=e[0];return e=Of.bind(null,e[1]),dc(e),[e,t]},useMutableSource:function(e,t,n){var r=Ct();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},jp(r,e,t,n)},useOpaqueIdentifier:function(){if(Ue){var e=!1,t=xf(function(){throw e||(e=!0,n("r:"+(Fa++).toString(36))),Error(w(355))}),n=Jn(t)[1];return(J.mode&2)===0&&(J.flags|=516,Ui(5,function(){n("r:"+(Fa++).toString(36))},void 0,null)),t}return t="r:"+(Fa++).toString(36),Jn(t),t},unstable_isNewReconciler:!1},Df={readContext:Ne,useCallback:Ap,useContext:Ne,useEffect:Bi,useImperativeHandle:Lp,useLayoutEffect:Ip,useMemo:Up,useReducer:Gn,useRef:zi,useState:function(){return Gn(Fe)},useDebugValue:Vo,useDeferredValue:function(e){var t=Gn(Fe),n=t[0],r=t[1];return Bi(function(){var i=be.transition;be.transition=1;try{r(e)}finally{be.transition=i}},[e]),n},useTransition:function(){var e=Gn(Fe)[0];return[zi().current,e]},useMutableSource:Cp,useOpaqueIdentifier:function(){return Gn(Fe)[0]},unstable_isNewReconciler:!1},Mf={readContext:Ne,useCallback:Ap,useContext:Ne,useEffect:Bi,useImperativeHandle:Lp,useLayoutEffect:Ip,useMemo:Up,useReducer:Wn,useRef:zi,useState:function(){return Wn(Fe)},useDebugValue:Vo,useDeferredValue:function(e){var t=Wn(Fe),n=t[0],r=t[1];return Bi(function(){var i=be.transition;be.transition=1;try{r(e)}finally{be.transition=i}},[e]),n},useTransition:function(){var e=Wn(Fe)[0];return[zi().current,e]},useMutableSource:Cp,useOpaqueIdentifier:function(){return Wn(Fe)[0]},unstable_isNewReconciler:!1},jf=Gt.ReactCurrentOwner,Me=!1;function ye(e,t,n,r){t.child=e===null?Dp(t,null,n,r):Fi(t,e.child,n,r)}function gc(e,t,n,r,i){n=n.render;var a=t.ref;return fn(t,i),r=Ho(e,t,n,r,a,i),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Je(e,t,i)):(t.flags|=1,ye(e,t,r,i),t.child)}function fc(e,t,n,r,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Xo(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,zp(e,t,s,r,i,a)):(e=vi(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}return s=e.child,(i&a)===0&&(i=s.memoizedProps,n=n.compare,n=n!==null?n:Rr,n(i,r)&&e.ref===t.ref)?Je(e,t,a):(t.flags|=1,e=St(s,r),e.ref=t.ref,e.return=t,t.child=e)}function zp(e,t,n,r,i,a){if(e!==null&&Rr(e.memoizedProps,r)&&e.ref===t.ref)if(Me=!1,(a&i)!==0)(e.flags&16384)!==0&&(Me=!0);else return t.lanes=e.lanes,Je(e,t,a);return Ms(e,t,n,r,a)}function za(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},ni(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},ni(t,a!==null?a.baseLanes:n);else return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},ni(t,e),null;else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ni(t,r);return ye(e,t,i,n),t.child}function Bp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function Ms(e,t,n,r,i){var a=ve(n)?Ut:pe.current;return a=_n(t,a),fn(t,i),n=Ho(e,t,n,r,a,i),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Je(e,t,i)):(t.flags|=1,ye(e,t,n,i),t.child)}function yc(e,t,n,r,i){if(ve(n)){var a=!0;gi(t)}else a=!1;if(fn(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Op(t,n,r),Es(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=ve(n)?Ut:pe.current,c=_n(t,c));var m=n.getDerivedStateFromProps,y=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||l!==c)&&oc(t,s,r,c),tt=!1;var g=t.memoizedState;s.state=g,Tr(t,r,s,i),l=t.memoizedState,o!==r||g!==l||ke.current||tt?(typeof m=="function"&&(Ii(t,n,m,r),l=t.memoizedState),(o=tt||sc(t,n,o,r,g,l,c))?(y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4)):(typeof s.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{s=t.stateNode,Tp(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:qe(t.type,o),s.props=c,y=t.pendingProps,g=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ne(l):(l=ve(n)?Ut:pe.current,l=_n(t,l));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==y||g!==l)&&oc(t,s,r,l),tt=!1,g=t.memoizedState,s.state=g,Tr(t,r,s,i);var S=t.memoizedState;o!==y||g!==S||ke.current||tt?(typeof k=="function"&&(Ii(t,n,k,r),S=t.memoizedState),(c=tt||sc(t,n,c,r,g,S,l))?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=S),s.props=r,s.state=S,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=256),r=!1)}return js(e,t,n,r,a,i)}function js(e,t,n,r,i,a){Bp(e,t);var s=(t.flags&64)!==0;if(!r&&!s)return i&&tc(t,n,!1),Je(e,t,a);r=t.stateNode,jf.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Fi(t,e.child,null,a),t.child=Fi(t,null,o,a)):ye(e,t,o,a),t.memoizedState=r.state,i&&tc(t,n,!0),t.child}function hc(e){var t=e.stateNode;t.pendingContext?ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ec(e,t.context,!1),Os(e,t.containerInfo)}var ti={dehydrated:null,retryLane:0};function kc(e,t,n){var r=t.pendingProps,i=V.current,a=!1,s;return(s=(t.flags&64)!==0)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),G(V,i&1),e===null?(r.fallback!==void 0&&qs(t),e=r.children,i=r.fallback,a?(e=vc(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ti,e):typeof r.unstable_expectedLoadTime=="number"?(e=vc(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ti,t.lanes=33554432,e):(n=Zo({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?a?(r=Pc(e,t,r.children,r.fallback,n),a=t.child,i=e.child.memoizedState,a.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=ti,r):(n=wc(e,t,r.children,n),t.memoizedState=null,n):a?(r=Pc(e,t,r.children,r.fallback,n),a=t.child,i=e.child.memoizedState,a.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=ti,r):(n=wc(e,t,r.children,n),t.memoizedState=null,n)}function vc(e,t,n,r){var i=e.mode,a=e.child;return t={mode:"hidden",children:t},(i&2)===0&&a!==null?(a.childLanes=0,a.pendingProps=t):a=Zo(t,i,0,null),n=vn(n,i,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function wc(e,t,n,r){var i=e.child;return e=i.sibling,n=St(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Pc(e,t,n,r,i){var a=t.mode,s=e.child;e=s.sibling;var o={mode:"hidden",children:n};return(a&2)===0&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=o,s=n.lastEffect,s!==null?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null):n=St(s,o),e!==null?r=St(e,r):(r=vn(r,a,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Sc(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Np(e.return,t)}function Ba(e,t,n,r,i,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=a)}function _c(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ye(e,t,r.children,n),r=V.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sc(e,n);else if(e.tag===19)Sc(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(V,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Li(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ba(t,!1,i,n,a,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Li(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ba(t,!0,n,null,a,t.lastEffect);break;case"together":Ba(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Br|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Hp,Cs,$p,Vp;Hp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cs=function(){};$p=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jt(Ae.current);var a=null;switch(n){case"input":i=ls(e,i),r=ls(e,r),a=[];break;case"option":i=ps(e,i),r=ps(e,r),a=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),a=[];break;case"textarea":i=ds(e,i),r=ds(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oi)}fs(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var o=i[c];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(kr.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(o=i?.[c],r.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(kr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&A("scroll",e),a||o===l||(a=[])):typeof l=="object"&&l!==null&&l.$$typeof===vo?l.toString():(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Vp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Yn(e,t){if(!Ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Cf(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return ve(t.type)&&Di(),null;case 3:return Rn(),U(ke),U(pe),zo(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ei(t)?t.flags|=4:r.hydrate||(t.flags|=256)),Cs(t),null;case 5:Uo(t);var i=jt(Or.current);if(n=t.type,e!==null&&t.stateNode!=null)$p(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(w(166));return null}if(e=jt(Ae.current),ei(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ot]=t,r[qi]=a,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(e=0;e<er.length;e++)A(er[e],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":_l(r,a),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},A("invalid",r);break;case"textarea":Rl(r,a),A("invalid",r)}fs(n,a),e=null;for(var s in a)a.hasOwnProperty(s)&&(i=a[s],s==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):kr.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&A("scroll",r));switch(n){case"input":Jr(r),xl(r,a,!0);break;case"textarea":Jr(r),bl(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Oi)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(s=i.nodeType===9?i:i.ownerDocument,e===ms.html&&(e=Lu(n)),e===ms.html?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ot]=t,e[qi]=r,Hp(e,t,!1,!1),t.stateNode=e,s=ys(n,r),n){case"dialog":A("cancel",e),A("close",e),i=r;break;case"iframe":case"object":case"embed":A("load",e),i=r;break;case"video":case"audio":for(i=0;i<er.length;i++)A(er[i],e);i=r;break;case"source":A("error",e),i=r;break;case"img":case"image":case"link":A("error",e),A("load",e),i=r;break;case"details":A("toggle",e),i=r;break;case"input":_l(e,r),i=ls(e,r),A("invalid",e);break;case"option":i=ps(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),A("invalid",e);break;case"textarea":Rl(e,r),i=ds(e,r),A("invalid",e);break;default:i=r}fs(n,i);var o=i;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?zu(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Au(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vr(e,l):typeof l=="number"&&vr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(kr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&A("scroll",e):l!=null&&mo(e,a,l,s))}switch(n){case"input":Jr(e),xl(e,r,!1);break;case"textarea":Jr(e),bl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?pn(e,!!r.multiple,a,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Oi)}kp(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Vp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));n=jt(Or.current),jt(Ae.current),ei(t)?(r=t.stateNode,n=t.memoizedProps,r[ot]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r)}return null;case 13:return U(V),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&ei(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(V.current&1)!==0?ie===0&&(ie=3):((ie===0||ie===3)&&(ie=4),me===null||(Br&134217727)===0&&(jn&134217727)===0||hn(me,ue))),(r||n)&&(t.flags|=4),null);case 4:return Rn(),Cs(t),e===null&&fp(t.stateNode.containerInfo),null;case 10:return Lo(t),null;case 17:return ve(t.type)&&Di(),null;case 19:if(U(V),r=t.memoizedState,r===null)return null;if(a=(t.flags&64)!==0,s=r.rendering,s===null)if(a)Yn(r,!1);else{if(ie!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(s=Li(e),s!==null){for(t.flags|=64,Yn(r,!1),a=s.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(V,V.current&1|2),t.child}e=e.sibling}r.tail!==null&&ce()>zs&&(t.flags|=64,a=!0,Yn(r,!1),t.lanes=33554432)}else{if(!a)if(e=Li(s),e!==null){if(t.flags|=64,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yn(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!Ue)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*ce()-r.renderingStartTime>zs&&n!==1073741824&&(t.flags|=64,a=!0,Yn(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(n=r.last,n!==null?n.sibling=s:t.child=s,r.last=s)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=ce(),n.sibling=null,t=V.current,G(V,a?t&1|2:t&1),n):null;case 23:case 24:return Ko(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(w(156,t.tag))}function If(e){switch(e.tag){case 1:ve(e.type)&&Di();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(Rn(),U(ke),U(pe),zo(),t=e.flags,(t&64)!==0)throw Error(w(285));return e.flags=t&-4097|64,e;case 5:return Uo(e),null;case 13:return U(V),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return U(V),null;case 4:return Rn(),null;case 10:return Lo(e),null;case 23:case 24:return Ko(),null;default:return null}}function Wo(e,t){try{var n="",r=t;do n+=fg(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i}}function Is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ff=typeof WeakMap=="function"?WeakMap:Map;function Gp(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vi||(Vi=!0,Bs=r),Is(e,t)},n}function Wp(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return Is(e,t),r(i)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Le===null?Le=new Set([this]):Le.add(this),Is(e,t));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}var Lf=typeof WeakSet=="function"?WeakSet:Set;function xc(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){ht(e,n)}else t.current=null}function Af(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:qe(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&jo(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(w(163))}function Uf(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(nd(n,e),Jf(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:qe(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&ac(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}ac(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&kp(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Ku(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(w(163))}function Rc(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=Uu("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function bc(e,t){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Co,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)nd(t,n);else{r=t;try{i()}catch(a){ht(r,a)}}n=n.next}while(n!==e)}break;case 1:if(xc(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(a){ht(t,a)}break;case 5:xc(t);break;case 4:Jp(e,t)}}function Nc(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Tc(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){e:{for(var t=e.return;t!==null;){if(Tc(t))break e;t=t.return}throw Error(w(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(w(161))}n.flags&16&&(vr(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Tc(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Fs(e,n,t):Ls(e,n,t)}function Fs(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oi));else if(r!==4&&(e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}function Ls(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}function Jp(e,t){for(var n=t,r=!1,i,a;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(w(160));switch(i=r.stateNode,r.tag){case 5:a=!1;break e;case 3:i=i.containerInfo,a=!0;break e;case 4:i=i.containerInfo,a=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var s=e,o=n,l=o;;)if(bc(s,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===o)break e;for(;l.sibling===null;){if(l.return===null||l.return===o)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a?(s=i,o=n.stateNode,s.nodeType===8?s.parentNode.removeChild(o):s.removeChild(o)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,a=!0,n.child.return=n,n=n.child;continue}}else if(bc(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Ha(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,a!==null){for(n[qi]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Iu(n,r),ys(e,i),t=ys(e,r),i=0;i<a.length;i+=2){var s=a[i],o=a[i+1];s==="style"?zu(n,o):s==="dangerouslySetInnerHTML"?Au(n,o):s==="children"?vr(n,o):mo(n,s,o,t)}switch(e){case"input":cs(n,r);break;case"textarea":Fu(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,a=r.value,a!=null?pn(n,!!r.multiple,a,!1):e!==!!r.multiple&&(r.defaultValue!=null?pn(n,!!r.multiple,r.defaultValue,!0):pn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(w(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Ku(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Qo=ce(),Rc(t.child,!0)),Oc(t);return;case 19:Oc(t);return;case 17:return;case 23:case 24:Rc(t,t.memoizedState!==null);return}throw Error(w(163))}function Oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lf),t.forEach(function(r){var i=Kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zf(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Bf=Math.ceil,$i=Gt.ReactCurrentDispatcher,Jo=Gt.ReactCurrentOwner,q=0,me=null,Z=null,ue=0,Bt=0,As=xt(0),ie=0,ua=null,Mn=0,Br=0,jn=0,Yo=0,Us=null,Qo=0,zs=1/0;function Cn(){zs=ce()+500}var E=null,Vi=!1,Bs=null,Le=null,Pt=!1,dr=null,tr=90,Hs=[],$s=[],Ye=null,mr=0,Vs=null,yi=-1,Ge=0,hi=0,gr=null,ki=!1;function Se(){return(q&48)!==0?ce():yi!==-1?yi:yi=ce()}function ft(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return xn()===99?1:2;if(Ge===0&&(Ge=Mn),Ef.transition!==0){hi!==0&&(hi=Us!==null?Us.pendingLanes:0),e=Ge;var t=4186112&~hi;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=xn(),(q&4)!==0&&e===98?e=Ti(12,Ge):(e=qg(e),e=Ti(e,Ge)),e}function yt(e,t,n){if(50<mr)throw mr=0,Vs=null,Error(w(185));if(e=pa(e,t),e===null)return null;ra(e,t,n),e===me&&(jn|=t,ie===4&&hn(e,ue));var r=xn();t===1?(q&8)!==0&&(q&48)===0?Gs(e):(Te(e,n),q===0&&(Cn(),He())):((q&4)===0||r!==98&&r!==99||(Ye===null?Ye=new Set([e]):Ye.add(e)),Te(e,n)),Us=e}function pa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Te(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-vt(s),l=1<<o,c=a[o];if(c===-1){if((l&r)===0||(l&i)!==0){c=t,Xt(l);var m=L;a[o]=10<=m?c+250:6<=m?c+5e3:-1}}else c<=t&&(e.expiredLanes|=l);s&=~l}if(r=_r(e,e===me?ue:0),t=L,r===0)n!==null&&(n!==La&&Ns(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==La&&Ns(n)}t===15?(n=Gs.bind(null,e),Ve===null?(Ve=[n],fi=Io(la,bp)):Ve.push(n),n=La):t===14?n=Nr(99,Gs.bind(null,e)):(n=Dg(t),n=Nr(n,Yp.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Yp(e){if(yi=-1,hi=Ge=0,(q&48)!==0)throw Error(w(327));var t=e.callbackNode;if(Rt()&&e.callbackNode!==t)return null;var n=_r(e,e===me?ue:0);if(n===0)return null;var r=n,i=q;q|=16;var a=Zp();(me!==e||ue!==r)&&(Cn(),kn(e,r));do try{Vf();break}catch(o){Xp(e,o)}while(1);if(Fo(),$i.current=a,q=i,Z!==null?r=0:(me=null,ue=0,r=ie),(Mn&jn)!==0)kn(e,0);else if(r!==0){if(r===2&&(q|=64,e.hydrate&&(e.hydrate=!1,jo(e.containerInfo)),n=ip(e),n!==0&&(r=nr(e,n))),r===1)throw t=ua,kn(e,0),hn(e,n),Te(e,ce()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(w(345));case 2:Tt(e);break;case 3:if(hn(e,n),(n&62914560)===n&&(r=Qo+500-ce(),10<r)){if(_r(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(Tt.bind(null,e),r);break}Tt(e);break;case 4:if(hn(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-vt(n);a=1<<s,s=r[s],s>i&&(i=s),n&=~a}if(n=i,n=ce()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Bf(n/1960))-n,10<n){e.timeoutHandle=Kl(Tt.bind(null,e),n);break}Tt(e);break;case 5:Tt(e);break;default:throw Error(w(329))}}return Te(e,ce()),e.callbackNode===t?Yp.bind(null,e):null}function hn(e,t){for(t&=~Yo,t&=~jn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Gs(e){if((q&48)!==0)throw Error(w(327));if(Rt(),e===me&&(e.expiredLanes&ue)!==0){var t=ue,n=nr(e,t);(Mn&jn)!==0&&(t=_r(e,t),n=nr(e,t))}else t=_r(e,0),n=nr(e,t);if(e.tag!==0&&n===2&&(q|=64,e.hydrate&&(e.hydrate=!1,jo(e.containerInfo)),t=ip(e),t!==0&&(n=nr(e,t))),n===1)throw n=ua,kn(e,0),hn(e,t),Te(e,ce()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e),Te(e,ce()),null}function Hf(){if(Ye!==null){var e=Ye;Ye=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Te(t,ce())})}He()}function Qp(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Cn(),He())}}function Kp(e,t){var n=q;q&=-2,q|=8;try{return e(t)}finally{q=n,q===0&&(Cn(),He())}}function ni(e,t){G(As,Bt),Bt|=t,Mn|=t}function Ko(){Bt=As.current,U(As)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_f(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Di();break;case 3:Rn(),U(ke),U(pe),zo();break;case 5:Uo(r);break;case 4:Rn();break;case 13:U(V);break;case 19:U(V);break;case 10:Lo(r);break;case 23:case 24:Ko()}n=n.return}me=e,Z=St(e.current,null),ue=Bt=Mn=t,ie=0,ua=null,Yo=jn=Br=0}function Xp(e,t){do{var n=Z;try{if(Fo(),ur.current=Hi,Ai){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ai=!1}if(qr=0,re=se=J=null,pr=!1,Jo.current=null,n===null||n.return===null){ie=1,ua=t,Z=null;break}e:{var a=e,s=n.return,o=n,l=t;if(t=ue,o.flags|=2048,o.firstEffect=o.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l;if((o.mode&2)===0){var m=o.alternate;m?(o.updateQueue=m.updateQueue,o.memoizedState=m.memoizedState,o.lanes=m.lanes):(o.updateQueue=null,o.memoizedState=null)}var y=(V.current&1)!==0,g=s;do{var k;if(k=g.tag===13){var S=g.memoizedState;if(S!==null)k=S.dehydrated!==null;else{var x=g.memoizedProps;k=x.fallback===void 0?!1:x.unstable_avoidThisFallback!==!0?!0:!y}}if(k){var d=g.updateQueue;if(d===null){var u=new Set;u.add(c),g.updateQueue=u}else d.add(c);if((g.mode&2)===0){if(g.flags|=64,o.flags|=16384,o.flags&=-2981,o.tag===1)if(o.alternate===null)o.tag=17;else{var p=mt(-1,1);p.tag=2,gt(o,p)}o.lanes|=1;break e}l=void 0,o=t;var f=a.pingCache;if(f===null?(f=a.pingCache=new Ff,l=new Set,f.set(c,l)):(l=f.get(c),l===void 0&&(l=new Set,f.set(c,l))),!l.has(o)){l.add(o);var h=Qf.bind(null,a,c,o);c.then(h,h)}g.flags|=4096,g.lanes=t;break e}g=g.return}while(g!==null);l=Error((un(o.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}ie!==5&&(ie=2),l=Wo(l,o),g=s;do{switch(g.tag){case 3:a=l,g.flags|=4096,t&=-t,g.lanes|=t;var O=Gp(g,a,t);ic(g,O);break e;case 1:a=l;var _=g.type,P=g.stateNode;if((g.flags&64)===0&&(typeof _.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(Le===null||!Le.has(P)))){g.flags|=4096,t&=-t,g.lanes|=t;var N=Wp(g,a,t);ic(g,N);break e}}g=g.return}while(g!==null)}td(n)}catch(T){t=T,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function Zp(){var e=$i.current;return $i.current=Hi,e===null?Hi:e}function nr(e,t){var n=q;q|=16;var r=Zp();me===e&&ue===t||kn(e,t);do try{$f();break}catch(i){Xp(e,i)}while(1);if(Fo(),q=n,$i.current=r,Z!==null)throw Error(w(261));return me=null,ue=0,ie}function $f(){for(;Z!==null;)ed(Z)}function Vf(){for(;Z!==null&&!bf();)ed(Z)}function ed(e){var t=rd(e.alternate,e,Bt);e.memoizedProps=e.pendingProps,t===null?td(e):Z=t,Jo.current=null}function td(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=Cf(n,t,Bt),n!==null){Z=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Bt&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=If(t),n!==null){n.flags&=2047,Z=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ie===0&&(ie=5)}function Tt(e){var t=xn();return zt(99,Gf.bind(null,e,t)),null}function Gf(e,t){do Rt();while(dr!==null);if((q&48)!==0)throw Error(w(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,a=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,o=e.expirationTimes;0<a;){var l=31-vt(a),c=1<<l;i[l]=0,s[l]=-1,o[l]=-1,a&=~c}if(Ye!==null&&(r&24)===0&&Ye.has(e)&&Ye.delete(e),e===me&&(Z=me=null,ue=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=q,q|=32,Jo.current=null,Ca=pi,s=$l(),Ss(s)){if("selectionStart"in s)o={start:s.selectionStart,end:s.selectionEnd};else e:if(o=(o=s.ownerDocument)&&o.defaultView||window,(c=o.getSelection&&o.getSelection())&&c.rangeCount!==0){o=c.anchorNode,a=c.anchorOffset,l=c.focusNode,c=c.focusOffset;try{o.nodeType,l.nodeType}catch{o=null;break e}var m=0,y=-1,g=-1,k=0,S=0,x=s,d=null;t:for(;;){for(var u;x!==o||a!==0&&x.nodeType!==3||(y=m+a),x!==l||c!==0&&x.nodeType!==3||(g=m+c),x.nodeType===3&&(m+=x.nodeValue.length),(u=x.firstChild)!==null;)d=x,x=u;for(;;){if(x===s)break t;if(d===o&&++k===a&&(y=m),d===l&&++S===c&&(g=m),(u=x.nextSibling)!==null)break;x=d,d=x.parentNode}x=u}o=y===-1||g===-1?null:{start:y,end:g}}else o=null;o=o||{start:0,end:0}}else o=null;Ia={focusedElem:s,selectionRange:o},pi=!1,gr=null,ki=!1,E=r;do try{Wf()}catch(T){if(E===null)throw Error(w(330));ht(E,T),E=E.nextEffect}while(E!==null);gr=null,E=r;do try{for(s=e;E!==null;){var p=E.flags;if(p&16&&vr(E.stateNode,""),p&128){var f=E.alternate;if(f!==null){var h=f.ref;h!==null&&(typeof h=="function"?h(null):h.current=null)}}switch(p&1038){case 2:Ec(E),E.flags&=-3;break;case 6:Ec(E),E.flags&=-3,Ha(E.alternate,E);break;case 1024:E.flags&=-1025;break;case 1028:E.flags&=-1025,Ha(E.alternate,E);break;case 4:Ha(E.alternate,E);break;case 8:o=E,Jp(s,o);var O=o.alternate;Nc(o),O!==null&&Nc(O)}E=E.nextEffect}}catch(T){if(E===null)throw Error(w(330));ht(E,T),E=E.nextEffect}while(E!==null);if(h=Ia,f=$l(),p=h.focusedElem,s=h.selectionRange,f!==p&&p&&p.ownerDocument&&dp(p.ownerDocument.documentElement,p)){for(s!==null&&Ss(p)&&(f=s.start,h=s.end,h===void 0&&(h=f),"selectionStart"in p?(p.selectionStart=f,p.selectionEnd=Math.min(h,p.value.length)):(h=(f=p.ownerDocument||document)&&f.defaultView||window,h.getSelection&&(h=h.getSelection(),o=p.textContent.length,O=Math.min(s.start,o),s=s.end===void 0?O:Math.min(s.end,o),!h.extend&&O>s&&(o=s,s=O,O=o),o=Hl(p,O),a=Hl(p,s),o&&a&&(h.rangeCount!==1||h.anchorNode!==o.node||h.anchorOffset!==o.offset||h.focusNode!==a.node||h.focusOffset!==a.offset)&&(f=f.createRange(),f.setStart(o.node,o.offset),h.removeAllRanges(),O>s?(h.addRange(f),h.extend(a.node,a.offset)):(f.setEnd(a.node,a.offset),h.addRange(f)))))),f=[],h=p;h=h.parentNode;)h.nodeType===1&&f.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<f.length;p++)h=f[p],h.element.scrollLeft=h.left,h.element.scrollTop=h.top}pi=!!Ca,Ia=Ca=null,e.current=n,E=r;do try{for(p=e;E!==null;){var _=E.flags;if(_&36&&Uf(p,E.alternate,E),_&128){f=void 0;var P=E.ref;if(P!==null){var N=E.stateNode;switch(E.tag){case 5:f=N;break;default:f=N}typeof P=="function"?P(f):P.current=f}}E=E.nextEffect}}catch(T){if(E===null)throw Error(w(330));ht(E,T),E=E.nextEffect}while(E!==null);E=null,Tf(),q=i}else e.current=n;if(Pt)Pt=!1,dr=e,tr=t;else for(E=r;E!==null;)t=E.nextEffect,E.nextEffect=null,E.flags&8&&(_=E,_.sibling=null,_.stateNode=null),E=t;if(r=e.pendingLanes,r===0&&(Le=null),r===1?e===Vs?mr++:(mr=0,Vs=e):mr=0,n=n.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Co,n,void 0,(n.current.flags&64)===64)}catch{}if(Te(e,ce()),Vi)throw Vi=!1,e=Bs,Bs=null,e;return(q&8)!==0||He(),null}function Wf(){for(;E!==null;){var e=E.alternate;ki||gr===null||((E.flags&8)!==0?El(E,gr)&&(ki=!0):E.tag===13&&zf(e,E)&&El(E,gr)&&(ki=!0));var t=E.flags;(t&256)!==0&&Af(e,E),(t&512)===0||Pt||(Pt=!0,Nr(97,function(){return Rt(),null})),E=E.nextEffect}}function Rt(){if(tr!==90){var e=97<tr?97:tr;return tr=90,zt(e,Yf)}return!1}function Jf(e,t){Hs.push(t,e),Pt||(Pt=!0,Nr(97,function(){return Rt(),null}))}function nd(e,t){$s.push(t,e),Pt||(Pt=!0,Nr(97,function(){return Rt(),null}))}function Yf(){if(dr===null)return!1;var e=dr;if(dr=null,(q&48)!==0)throw Error(w(331));var t=q;q|=32;var n=$s;$s=[];for(var r=0;r<n.length;r+=2){var i=n[r],a=n[r+1],s=i.destroy;if(i.destroy=void 0,typeof s=="function")try{s()}catch(l){if(a===null)throw Error(w(330));ht(a,l)}}for(n=Hs,Hs=[],r=0;r<n.length;r+=2){i=n[r],a=n[r+1];try{var o=i.create;i.destroy=o()}catch(l){if(a===null)throw Error(w(330));ht(a,l)}}for(o=e.current.firstEffect;o!==null;)e=o.nextEffect,o.nextEffect=null,o.flags&8&&(o.sibling=null,o.stateNode=null),o=e;return q=t,He(),!0}function qc(e,t,n){t=Wo(n,t),t=Gp(e,t,1),gt(e,t),t=Se(),e=pa(e,1),e!==null&&(ra(e,1,t),Te(e,t))}function ht(e,t){if(e.tag===3)qc(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){qc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Le===null||!Le.has(r))){e=Wo(t,e);var i=Wp(n,e,1);if(gt(n,i),i=Se(),n=pa(n,1),n!==null)ra(n,1,i),Te(n,i);else if(typeof r.componentDidCatch=="function"&&(Le===null||!Le.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function Qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ue&n)===n&&(ie===4||ie===3&&(ue&62914560)===ue&&500>ce()-Qo?kn(e,0):Yo|=n),Te(e,t)}function Kf(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=xn()===99?1:2:(Ge===0&&(Ge=Mn),t=Zt(62914560&~Ge),t===0&&(t=4194304))),n=Se(),e=pa(e,t),e!==null&&(ra(e,t,n),Te(e,n))}var rd;rd=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Me=!0;else if((n&r)!==0)Me=(e.flags&16384)!==0;else{switch(Me=!1,t.tag){case 3:hc(t),Ua();break;case 5:lc(t);break;case 1:ve(t.type)&&gi(t);break;case 4:Os(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;G(Mi,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?kc(e,t,n):(G(V,V.current&1),t=Je(e,t,n),t!==null?t.sibling:null);G(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return _c(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(V,V.current),r)break;return null;case 23:case 24:return t.lanes=0,za(e,t,n)}return Je(e,t,n)}else Me=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=_n(t,pe.current),fn(t,n),i=Ho(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)){var a=!0;gi(t)}else a=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ao(t);var s=r.getDerivedStateFromProps;typeof s=="function"&&Ii(t,r,s,e),i.updater=ca,t.stateNode=i,i._reactInternals=t,Es(t,r,e,n),t=js(null,t,r,!0,a,n)}else t.tag=0,ye(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Zf(i),e=qe(i,e),a){case 0:t=Ms(null,t,i,e,n);break e;case 1:t=yc(null,t,i,e,n);break e;case 11:t=gc(null,t,i,e,n);break e;case 14:t=fc(null,t,i,qe(i.type,e),r,n);break e}throw Error(w(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Ms(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),yc(e,t,r,i,n);case 3:if(hc(t),r=t.updateQueue,e===null||r===null)throw Error(w(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,Tp(e,t),Tr(t,r,null,n),r=t.memoizedState.element,r===i)Ua(),t=Je(e,t,n);else{if(i=t.stateNode,(a=i.hydrate)&&(lt=gn(t.stateNode.containerInfo.firstChild),We=t,a=Ue=!0),a){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)a=e[i],a._workInProgressVersionPrimary=e[i+1],yn.push(a);for(n=Dp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else ye(e,t,r,n),Ua();t=t.child}return t;case 5:return lc(t),e===null&&qs(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Rs(r,i)?s=null:a!==null&&Rs(r,a)&&(t.flags|=16),Bp(e,t),ye(e,t,s,n),t.child;case 6:return e===null&&qs(t),null;case 13:return kc(e,t,n);case 4:return Os(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fi(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),gc(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value;var o=t.type._context;if(G(Mi,o._currentValue),o._currentValue=a,s!==null)if(o=s.value,a=xe(o,a)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(o,a):1073741823)|0,a===0){if(s.children===i.children&&!ke.current){t=Je(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r&&(c.observedBits&a)!==0){o.tag===1&&(c=mt(-1,n&-n),c.tag=2,gt(o,c)),o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Np(o.return,n),l.lanes|=n;break}c=c.next}}else s=o.tag===10&&o.type===t.type?null:o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps,r=a.children,fn(t,n),i=Ne(i,a.unstable_observedBits),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return i=t.type,a=qe(i,t.pendingProps),a=qe(i.type,a),fc(e,t,i,a,r,n);case 15:return zp(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,ve(r)?(e=!0,gi(t)):e=!1,fn(t,n),Op(t,r,i),Es(t,r,i,n),js(null,t,r,!0,e,n);case 19:return _c(e,t,n);case 23:return za(e,t,n);case 24:return za(e,t,n)}throw Error(w(156,t.tag))};function Xf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Xf(e,t,n,r)}function Xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zf(e){if(typeof e=="function")return Xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ea)return 11;if(e===ta)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vi(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")Xo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case rt:return vn(n.children,i,a,t);case Mu:s=8,i|=16;break;case go:s=8,i|=1;break;case rr:return e=Re(12,n,t,i|8),e.elementType=rr,e.type=rr,e.lanes=a,e;case ir:return e=Re(13,n,t,i),e.type=ir,e.elementType=ir,e.lanes=a,e;case xi:return e=Re(19,n,t,i),e.elementType=xi,e.lanes=a,e;case wo:return Zo(n,i,a,t);case os:return e=Re(24,n,t,i),e.elementType=os,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fo:s=10;break e;case yo:s=9;break e;case ea:s=11;break e;case ta:s=14;break e;case ho:s=16,r=null;break e;case ko:s=22;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Re(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function vn(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Zo(e,t,n,r){return e=Re(23,e,r,t),e.elementType=wo,e.lanes=n,e}function $a(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function Va(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ey(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Ta(0),this.expirationTimes=Ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ta(0),this.mutableSourceEagerHydrationData=null}function ty(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gi(e,t,n,r){var i=t.current,a=Se(),s=ft(i);e:if(n){n=n._reactInternals;t:{if(Wt(n)!==n||n.tag!==1)throw Error(w(170));var o=n;do{switch(o.tag){case 3:o=o.stateNode.context;break t;case 1:if(ve(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break t}}o=o.return}while(o!==null);throw Error(w(171))}if(n.tag===1){var l=n.type;if(ve(l)){n=wp(n,l,o);break e}}n=o}else n=wt;return t.context===null?t.context=n:t.pendingContext=n,t=mt(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),gt(i,t),yt(i,s,a),s}function Ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function el(e,t){Dc(e,t),(e=e.alternate)&&Dc(e,t)}function ny(){return null}function tl(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new ey(e,t,n!=null&&n.hydrate===!0),t=Re(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Ao(t),e[Dn]=n.current,fp(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}tl.prototype.render=function(e){Gi(e,this._internalRoot,null,null)};tl.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Gi(null,e,null,function(){t[Dn]=null})};function Hr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ry(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new tl(e,0,t?{hydrate:!0}:void 0)}function da(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a._internalRoot;if(typeof i=="function"){var o=i;i=function(){var c=Ga(s);o.call(c)}}Gi(t,s,e,i)}else{if(a=n._reactRootContainer=ry(n,r),s=a._internalRoot,typeof i=="function"){var l=i;i=function(){var c=Ga(s);l.call(c)}}Kp(function(){Gi(t,s,e,i)})}return Ga(s)}Ju=function(e){if(e.tag===13){var t=Se();yt(e,4,t),el(e,4)}};Ro=function(e){if(e.tag===13){var t=Se();yt(e,67108864,t),el(e,67108864)}};Yu=function(e){if(e.tag===13){var t=Se(),n=ft(e);yt(e,n,t),el(e,n)}};Qu=function(e,t){return t()};hs=function(e,t,n){switch(t){case"input":if(cs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oa(r);if(!i)throw Error(w(90));Cu(r),cs(r,i)}}}break;case"textarea":Fu(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};So=Qp;$u=function(e,t,n,r,i){var a=q;q|=4;try{return zt(98,e.bind(null,t,n,r,i))}finally{q=a,q===0&&(Cn(),He())}};_o=function(){(q&49)===0&&(Hf(),Rt())};Vu=function(e,t){var n=q;q|=2;try{return e(t)}finally{q=n,q===0&&(Cn(),He())}};function id(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hr(t))throw Error(w(200));return ty(e,t,null,n)}var iy={Events:[Ur,sn,oa,Bu,Hu,Rt,{current:!1}]},Qn={findFiberByHostInstance:Mt,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},ay={bundleType:Qn.bundleType,version:Qn.version,rendererPackageName:Qn.rendererPackageName,rendererConfig:Qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wu(e),e===null?null:e.stateNode},findFiberByHostInstance:Qn.findFiberByHostInstance||ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{Co=ri.inject(ay),Ft=ri}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;Ee.createPortal=id;Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):Error(w(268,Object.keys(e)));return e=Wu(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e,t){var n=q;if((n&48)!==0)return e(t);q|=1;try{if(e)return zt(99,e.bind(null,t))}finally{q=n,He()}};Ee.hydrate=function(e,t,n){if(!Hr(t))throw Error(w(200));return da(null,e,t,!0,n)};Ee.render=function(e,t,n){if(!Hr(t))throw Error(w(200));return da(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Hr(e))throw Error(w(40));return e._reactRootContainer?(Kp(function(){da(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1};Ee.unstable_batchedUpdates=Qp;Ee.unstable_createPortal=function(e,t){return id(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hr(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return da(e,t,n,!1,r)};Ee.version="17.0.2";function ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad)}catch(e){console.error(e)}}ad(),Eu.exports=Ee;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ws=function(e,t){return Ws=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Ws(e,t)};function $r(e,t){Ws(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var v=function(){return v=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},v.apply(this,arguments)};function sy(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Dr(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Mr(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(o){s={error:o}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return a}function z(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Mr(arguments[t]));return e}var Qe;(function(e){e.Ok="ok",e.Exited="exited",e.Crashed="crashed",e.Abnormal="abnormal"})(Qe||(Qe={}));var Mc;(function(e){e.Ok="ok",e.Errored="errored",e.Crashed="crashed"})(Mc||(Mc={}));var Be;(function(e){e.Fatal="fatal",e.Error="error",e.Warning="warning",e.Log="log",e.Info="info",e.Debug="debug",e.Critical="critical"})(Be||(Be={}));(function(e){function t(n){switch(n){case"debug":return e.Debug;case"info":return e.Info;case"warn":case"warning":return e.Warning;case"error":return e.Error;case"fatal":return e.Fatal;case"critical":return e.Critical;case"log":default:return e.Log}}e.fromString=t})(Be||(Be={}));var Ht;(function(e){e.Unknown="unknown",e.Skipped="skipped",e.Success="success",e.RateLimit="rate_limit",e.Invalid="invalid",e.Failed="failed"})(Ht||(Ht={}));(function(e){function t(n){return n>=200&&n<300?e.Success:n===429?e.RateLimit:n>=400&&n<500?e.Invalid:n>=500?e.Failed:e.Unknown}e.fromHttpCode=t})(Ht||(Ht={}));var je;(function(e){e.BeforeSend="before_send",e.EventProcessor="event_processor",e.NetworkError="network_error",e.QueueOverflow="queue_overflow",e.RateLimitBackoff="ratelimit_backoff",e.SampleRate="sample_rate"})(je||(je={}));function oy(e){e.then(null,function(t){console.error(t)})}function nl(){return Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"}function ly(e,t){return e.require(t)}var cy={};function $(){return nl()?global:typeof window<"u"?window:typeof self<"u"?self:cy}function sd(e){switch(Object.prototype.toString.call(e)){case"[object Error]":return!0;case"[object Exception]":return!0;case"[object DOMException]":return!0;default:return _t(e,Error)}}function od(e){return Object.prototype.toString.call(e)==="[object ErrorEvent]"}function jc(e){return Object.prototype.toString.call(e)==="[object DOMError]"}function uy(e){return Object.prototype.toString.call(e)==="[object DOMException]"}function bn(e){return Object.prototype.toString.call(e)==="[object String]"}function ma(e){return e===null||typeof e!="object"&&typeof e!="function"}function Nn(e){return Object.prototype.toString.call(e)==="[object Object]"}function rl(e){return typeof Event<"u"&&_t(e,Event)}function Cc(e){return typeof Element<"u"&&_t(e,Element)}function py(e){return Object.prototype.toString.call(e)==="[object RegExp]"}function il(e){return Boolean(e&&e.then&&typeof e.then=="function")}function dy(e){return Nn(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}function _t(e,t){try{return e instanceof t}catch{return!1}}function Wi(e,t){try{for(var n=e,r=5,i=80,a=[],s=0,o=0,l=" > ",c=l.length,m=void 0;n&&s++<r&&(m=my(n,t),!(m==="html"||s>1&&o+a.length*c+m.length>=i));)a.push(m),o+=m.length,n=n.parentNode;return a.reverse().join(l)}catch{return"<unknown>"}}function my(e,t){var n,r,i=e,a=[],s,o,l,c,m;if(!i||!i.tagName)return"";a.push(i.tagName.toLowerCase());var y=!((n=t)===null||n===void 0)&&n.length?t.filter(function(k){return i.getAttribute(k)}).map(function(k){return[k,i.getAttribute(k)]}):null;if(!((r=y)===null||r===void 0)&&r.length)y.forEach(function(k){a.push("["+k[0]+'="'+k[1]+'"]')});else if(i.id&&a.push("#"+i.id),s=i.className,s&&bn(s))for(o=s.split(/\s+/),m=0;m<o.length;m++)a.push("."+o[m]);var g=["type","name","title","alt"];for(m=0;m<g.length;m++)l=g[m],c=i.getAttribute(l),c&&a.push("["+l+'="'+c+'"]');return a.join("")}function gy(){var e=$();try{return e.document.location.href}catch{return""}}var fy=Object.setPrototypeOf||({__proto__:[]}instanceof Array?yy:hy);function yy(e,t){return e.__proto__=t,e}function hy(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(e,n)||(e[n]=t[n]);return e}var Q=function(e){$r(t,e);function t(n){var r=this.constructor,i=e.call(this,n)||this;return i.message=n,i.name=r.prototype.constructor.name,fy(i,r.prototype),i}return t}(Error),ky=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,Kn="Invalid Dsn",ld=function(){function e(t){typeof t=="string"?this._fromString(t):this._fromComponents(t),this._validate()}return e.prototype.toString=function(t){t===void 0&&(t=!1);var n=this,r=n.host,i=n.path,a=n.pass,s=n.port,o=n.projectId,l=n.protocol,c=n.publicKey;return l+"://"+c+(t&&a?":"+a:"")+("@"+r+(s?":"+s:"")+"/"+(i&&i+"/")+o)},e.prototype._fromString=function(t){var n=ky.exec(t);if(!n)throw new Q(Kn);var r=Mr(n.slice(1),6),i=r[0],a=r[1],s=r[2],o=s===void 0?"":s,l=r[3],c=r[4],m=c===void 0?"":c,y=r[5],g="",k=y,S=k.split("/");if(S.length>1&&(g=S.slice(0,-1).join("/"),k=S.pop()),k){var x=k.match(/^\d+/);x&&(k=x[0])}this._fromComponents({host:l,pass:o,path:g,projectId:k,port:m,protocol:i,publicKey:a})},e.prototype._fromComponents=function(t){"user"in t&&!("publicKey"in t)&&(t.publicKey=t.user),this.user=t.publicKey||"",this.protocol=t.protocol,this.publicKey=t.publicKey||"",this.pass=t.pass||"",this.host=t.host,this.port=t.port||"",this.path=t.path||"",this.projectId=t.projectId},e.prototype._validate=function(){var t=this;if(["protocol","publicKey","host","projectId"].forEach(function(n){if(!t[n])throw new Q(Kn+": "+n+" missing")}),!this.projectId.match(/^\d+$/))throw new Q(Kn+": Invalid projectId "+this.projectId);if(this.protocol!=="http"&&this.protocol!=="https")throw new Q(Kn+": Invalid protocol "+this.protocol);if(this.port&&isNaN(parseInt(this.port,10)))throw new Q(Kn+": Invalid port "+this.port)},e}(),Lt=$(),Wa="Sentry Logger ";function wi(e){var t=$(),n=["debug","info","warn","error","log","assert"];if(!("console"in t))return e();var r=t.console,i={};n.forEach(function(s){s in t.console&&r[s].__sentry_original__&&(i[s]=r[s],r[s]=r[s].__sentry_original__)});var a=e();return Object.keys(i).forEach(function(s){r[s]=i[s]}),a}var vy=function(){function e(){this._enabled=!1}return e.prototype.disable=function(){this._enabled=!1},e.prototype.enable=function(){this._enabled=!0},e.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];!this._enabled||wi(function(){Lt.console.log(Wa+"[Log]: "+t.join(" "))})},e.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];!this._enabled||wi(function(){Lt.console.warn(Wa+"[Warn]: "+t.join(" "))})},e.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];!this._enabled||wi(function(){Lt.console.error(Wa+"[Error]: "+t.join(" "))})},e}();Lt.__SENTRY__=Lt.__SENTRY__||{};var C=Lt.__SENTRY__.logger||(Lt.__SENTRY__.logger=new vy),wy=function(){function e(){this._hasWeakSet=typeof WeakSet=="function",this._inner=this._hasWeakSet?new WeakSet:[]}return e.prototype.memoize=function(t){if(this._hasWeakSet)return this._inner.has(t)?!0:(this._inner.add(t),!1);for(var n=0;n<this._inner.length;n++){var r=this._inner[n];if(r===t)return!0}return this._inner.push(t),!1},e.prototype.unmemoize=function(t){if(this._hasWeakSet)this._inner.delete(t);else for(var n=0;n<this._inner.length;n++)if(this._inner[n]===t){this._inner.splice(n,1);break}},e}(),Ja="<anonymous>";function nt(e){try{return!e||typeof e!="function"?Ja:e.name||Ja}catch{return Ja}}function fr(e,t){return t===void 0&&(t=0),typeof e!="string"||t===0||e.length<=t?e:e.substr(0,t)+"..."}function Ic(e,t){if(!Array.isArray(e))return"";for(var n=[],r=0;r<e.length;r++){var i=e[r];try{n.push(String(i))}catch{n.push("[value cannot be serialized]")}}return n.join(t)}function Ya(e,t){return bn(e)?py(t)?t.test(e):typeof t=="string"?e.indexOf(t)!==-1:!1:!1}function oe(e,t,n){if(t in e){var r=e[t],i=n(r);if(typeof i=="function")try{i.prototype=i.prototype||{},Object.defineProperties(i,{__sentry_original__:{enumerable:!1,value:r}})}catch{}e[t]=i}}function Py(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}function cd(e){if(sd(e)){var t=e,n={message:t.message,name:t.name,stack:t.stack};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}if(rl(e)){var i=e,a={};a.type=i.type;try{a.target=Cc(i.target)?Wi(i.target):Object.prototype.toString.call(i.target)}catch{a.target="<unknown>"}try{a.currentTarget=Cc(i.currentTarget)?Wi(i.currentTarget):Object.prototype.toString.call(i.currentTarget)}catch{a.currentTarget="<unknown>"}typeof CustomEvent<"u"&&_t(e,CustomEvent)&&(a.detail=i.detail);for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(a[s]=i[s]);return a}return e}function Sy(e){return~-encodeURI(e).split(/%..|./).length}function _y(e){return Sy(JSON.stringify(e))}function ud(e,t,n){t===void 0&&(t=3),n===void 0&&(n=100*1024);var r=en(e,t);return _y(r)>n?ud(e,t-1,n):r}function xy(e){var t=Object.prototype.toString.call(e);if(typeof e=="string")return e;if(t==="[object Object]")return"[Object]";if(t==="[object Array]")return"[Array]";var n=pd(e);return ma(n)?n:t}function pd(e,t){return t==="domain"&&e&&typeof e=="object"&&e._events?"[Domain]":t==="domainEmitter"?"[DomainEmitter]":typeof global<"u"&&e===global?"[Global]":typeof window<"u"&&e===window?"[Window]":typeof document<"u"&&e===document?"[Document]":dy(e)?"[SyntheticEvent]":typeof e=="number"&&e!==e?"[NaN]":e===void 0?"[undefined]":typeof e=="function"?"[Function: "+nt(e)+"]":typeof e=="symbol"?"["+String(e)+"]":typeof e=="bigint"?"[BigInt: "+String(e)+"]":e}function dd(e,t,n,r){if(n===void 0&&(n=1/0),r===void 0&&(r=new wy),n===0)return xy(t);if(t!=null&&typeof t.toJSON=="function")return t.toJSON();var i=pd(t,e);if(ma(i))return i;var a=cd(t),s=Array.isArray(t)?[]:{};if(r.memoize(t))return"[Circular ~]";for(var o in a)!Object.prototype.hasOwnProperty.call(a,o)||(s[o]=dd(o,a[o],n-1,r));return r.unmemoize(t),s}function en(e,t){try{return JSON.parse(JSON.stringify(e,function(n,r){return dd(n,r,t)}))}catch{return"**non-serializable**"}}function Ry(e,t){t===void 0&&(t=40);var n=Object.keys(cd(e));if(n.sort(),!n.length)return"[object has no keys]";if(n[0].length>=t)return fr(n[0],t);for(var r=n.length;r>0;r--){var i=n.slice(0,r).join(", ");if(!(i.length>t))return r===n.length?i:fr(i,t)}return""}function Ji(e){var t,n;if(Nn(e)){var r=e,i={};try{for(var a=Dr(Object.keys(r)),s=a.next();!s.done;s=a.next()){var o=s.value;typeof r[o]<"u"&&(i[o]=Ji(r[o]))}}catch(l){t={error:l}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return i}return Array.isArray(e)?e.map(Ji):e}function ga(){if(!("fetch"in $()))return!1;try{return new Headers,new Request(""),new Response,!0}catch{return!1}}function Js(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}function by(){if(!ga())return!1;var e=$();if(Js(e.fetch))return!0;var t=!1,n=e.document;if(n&&typeof n.createElement=="function")try{var r=n.createElement("iframe");r.hidden=!0,n.head.appendChild(r),r.contentWindow&&r.contentWindow.fetch&&(t=Js(r.contentWindow.fetch)),n.head.removeChild(r)}catch(i){C.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",i)}return t}function Ny(){if(!ga())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}function Ty(){var e=$(),t=e.chrome,n=t&&t.app&&t.app.runtime,r="history"in e&&!!e.history.pushState&&!!e.history.replaceState;return!n&&r}var B=$(),yr={},Fc={};function Ey(e){if(!Fc[e])switch(Fc[e]=!0,e){case"console":Oy();break;case"dom":Ay();break;case"xhr":jy();break;case"fetch":qy();break;case"history":Cy();break;case"error":Uy();break;case"unhandledrejection":zy();break;default:C.warn("unknown instrumentation type:",e)}}function it(e){!e||typeof e.type!="string"||typeof e.callback!="function"||(yr[e.type]=yr[e.type]||[],yr[e.type].push(e.callback),Ey(e.type))}function Ce(e,t){var n,r;if(!(!e||!yr[e]))try{for(var i=Dr(yr[e]||[]),a=i.next();!a.done;a=i.next()){var s=a.value;try{s(t)}catch(o){C.error(`Error while triggering instrumentation handler.
Type: `+e+`
Name: `+nt(s)+`
Error: `+o)}}}catch(o){n={error:o}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}function Oy(){"console"in B&&["debug","info","warn","error","log","assert"].forEach(function(e){e in B.console&&oe(B.console,e,function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];Ce("console",{args:n,level:e}),t&&Function.prototype.apply.call(t,B.console,n)}})})}function qy(){!by()||oe(B,"fetch",function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r={args:t,fetchData:{method:Dy(t),url:My(t)},startTimestamp:Date.now()};return Ce("fetch",v({},r)),e.apply(B,t).then(function(i){return Ce("fetch",v(v({},r),{endTimestamp:Date.now(),response:i})),i},function(i){throw Ce("fetch",v(v({},r),{endTimestamp:Date.now(),error:i})),i})}})}function Dy(e){return e===void 0&&(e=[]),"Request"in B&&_t(e[0],Request)&&e[0].method?String(e[0].method).toUpperCase():e[1]&&e[1].method?String(e[1].method).toUpperCase():"GET"}function My(e){return e===void 0&&(e=[]),typeof e[0]=="string"?e[0]:"Request"in B&&_t(e[0],Request)?e[0].url:String(e[0])}function jy(){if("XMLHttpRequest"in B){var e=[],t=[],n=XMLHttpRequest.prototype;oe(n,"open",function(r){return function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];var s=this,o=i[1];s.__sentry_xhr__={method:bn(i[0])?i[0].toUpperCase():i[0],url:i[1]},bn(o)&&s.__sentry_xhr__.method==="POST"&&o.match(/sentry_key/)&&(s.__sentry_own_request__=!0);var l=function(){if(s.readyState===4){try{s.__sentry_xhr__&&(s.__sentry_xhr__.status_code=s.status)}catch{}try{var c=e.indexOf(s);if(c!==-1){e.splice(c);var m=t.splice(c)[0];s.__sentry_xhr__&&m[0]!==void 0&&(s.__sentry_xhr__.body=m[0])}}catch{}Ce("xhr",{args:i,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:s})}};return"onreadystatechange"in s&&typeof s.onreadystatechange=="function"?oe(s,"onreadystatechange",function(c){return function(){for(var m=[],y=0;y<arguments.length;y++)m[y]=arguments[y];return l(),c.apply(s,m)}}):s.addEventListener("readystatechange",l),r.apply(s,i)}}),oe(n,"send",function(r){return function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];return e.push(this),t.push(i),Ce("xhr",{args:i,startTimestamp:Date.now(),xhr:this}),r.apply(this,i)}})}}var ii;function Cy(){if(!Ty())return;var e=B.onpopstate;B.onpopstate=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=B.location.href,a=ii;if(ii=i,Ce("history",{from:a,to:i}),e)try{return e.apply(this,n)}catch{}};function t(n){return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var a=r.length>2?r[2]:void 0;if(a){var s=ii,o=String(a);ii=o,Ce("history",{from:s,to:o})}return n.apply(this,r)}}oe(B.history,"pushState",t),oe(B.history,"replaceState",t)}var Iy=1e3,ai,si;function Fy(e,t){if(!e||e.type!==t.type)return!0;try{if(e.target!==t.target)return!0}catch{}return!1}function Ly(e){if(e.type!=="keypress")return!1;try{var t=e.target;if(!t||!t.tagName)return!0;if(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)return!1}catch{}return!0}function Lc(e,t){return t===void 0&&(t=!1),function(n){if(!(!n||si===n)&&!Ly(n)){var r=n.type==="keypress"?"input":n.type;ai===void 0?(e({event:n,name:r,global:t}),si=n):Fy(si,n)&&(e({event:n,name:r,global:t}),si=n),clearTimeout(ai),ai=B.setTimeout(function(){ai=void 0},Iy)}}}function Ay(){if("document"in B){var e=Ce.bind(null,"dom"),t=Lc(e,!0);B.document.addEventListener("click",t,!1),B.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach(function(n){var r=B[n]&&B[n].prototype;!r||!r.hasOwnProperty||!r.hasOwnProperty("addEventListener")||(oe(r,"addEventListener",function(i){return function(a,s,o){if(a==="click"||a=="keypress")try{var l=this,c=l.__sentry_instrumentation_handlers__=l.__sentry_instrumentation_handlers__||{},m=c[a]=c[a]||{refCount:0};if(!m.handler){var y=Lc(e);m.handler=y,i.call(this,a,y,o)}m.refCount+=1}catch{}return i.call(this,a,s,o)}}),oe(r,"removeEventListener",function(i){return function(a,s,o){if(a==="click"||a=="keypress")try{var l=this,c=l.__sentry_instrumentation_handlers__||{},m=c[a];m&&(m.refCount-=1,m.refCount<=0&&(i.call(this,a,m.handler,o),m.handler=void 0,delete c[a]),Object.keys(c).length===0&&delete l.__sentry_instrumentation_handlers__)}catch{}return i.call(this,a,s,o)}}))})}}var Qa=null;function Uy(){Qa=B.onerror,B.onerror=function(e,t,n,r,i){return Ce("error",{column:r,error:i,line:n,msg:e,url:t}),Qa?Qa.apply(this,arguments):!1}}var Ka=null;function zy(){Ka=B.onunhandledrejection,B.onunhandledrejection=function(e){return Ce("unhandledrejection",e),Ka?Ka.apply(this,arguments):!0}}function wn(){var e=$(),t=e.crypto||e.msCrypto;if(t!==void 0&&t.getRandomValues){var n=new Uint16Array(8);t.getRandomValues(n),n[3]=n[3]&4095|16384,n[4]=n[4]&16383|32768;var r=function(i){for(var a=i.toString(16);a.length<4;)a="0"+a;return a};return r(n[0])+r(n[1])+r(n[2])+r(n[3])+r(n[4])+r(n[5])+r(n[6])+r(n[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(i){var a=Math.random()*16|0,s=i==="x"?a:a&3|8;return s.toString(16)})}function Xa(e){if(!e)return{};var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};var n=t[6]||"",r=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],relative:t[5]+n+r}}function Et(e){if(e.message)return e.message;if(e.exception&&e.exception.values&&e.exception.values[0]){var t=e.exception.values[0];return t.type&&t.value?t.type+": "+t.value:t.type||t.value||e.event_id||"<unknown>"}return e.event_id||"<unknown>"}function Ys(e,t,n){e.exception=e.exception||{},e.exception.values=e.exception.values||[],e.exception.values[0]=e.exception.values[0]||{},e.exception.values[0].value=e.exception.values[0].value||t||"",e.exception.values[0].type=e.exception.values[0].type||n||"Error"}function Tn(e,t){var n;if(!(!e.exception||!e.exception.values)){var r=e.exception.values[0],i={type:"generic",handled:!0},a=r.mechanism;if(r.mechanism=v(v(v({},i),a),t),t&&"data"in t){var s=v(v({},(n=a)===null||n===void 0?void 0:n.data),t.data);r.mechanism.data=s}}}var Ac=60*1e3;function By(e,t){if(!t)return Ac;var n=parseInt(""+t,10);if(!isNaN(n))return n*1e3;var r=Date.parse(""+t);return isNaN(r)?Ac:r-e}function Uc(e){var t;if(!((t=e)===null||t===void 0)&&t.__sentry_captured__)return!0;try{Object.defineProperty(e,"__sentry_captured__",{value:!0})}catch{}return!1}var he=function(){function e(t){var n=this;this._state="PENDING",this._handlers=[],this._resolve=function(r){n._setResult("RESOLVED",r)},this._reject=function(r){n._setResult("REJECTED",r)},this._setResult=function(r,i){if(n._state==="PENDING"){if(il(i)){i.then(n._resolve,n._reject);return}n._state=r,n._value=i,n._executeHandlers()}},this._attachHandler=function(r){n._handlers=n._handlers.concat(r),n._executeHandlers()},this._executeHandlers=function(){if(n._state!=="PENDING"){var r=n._handlers.slice();n._handlers=[],r.forEach(function(i){i.done||(n._state==="RESOLVED"&&i.onfulfilled&&i.onfulfilled(n._value),n._state==="REJECTED"&&i.onrejected&&i.onrejected(n._value),i.done=!0)})}};try{t(this._resolve,this._reject)}catch(r){this._reject(r)}}return e.resolve=function(t){return new e(function(n){n(t)})},e.reject=function(t){return new e(function(n,r){r(t)})},e.all=function(t){return new e(function(n,r){if(!Array.isArray(t)){r(new TypeError("Promise.all requires an array as input."));return}if(t.length===0){n([]);return}var i=t.length,a=[];t.forEach(function(s,o){e.resolve(s).then(function(l){a[o]=l,i-=1,i===0&&n(a)}).then(null,r)})})},e.prototype.then=function(t,n){var r=this;return new e(function(i,a){r._attachHandler({done:!1,onfulfilled:function(s){if(!t){i(s);return}try{i(t(s));return}catch(o){a(o);return}},onrejected:function(s){if(!n){a(s);return}try{i(n(s));return}catch(o){a(o);return}}})})},e.prototype.catch=function(t){return this.then(function(n){return n},t)},e.prototype.finally=function(t){var n=this;return new e(function(r,i){var a,s;return n.then(function(o){s=!1,a=o,t&&t()},function(o){s=!0,a=o,t&&t()}).then(function(){if(s){i(a);return}r(a)})})},e.prototype.toString=function(){return"[object SyncPromise]"},e}(),Hy=function(){function e(t){this._limit=t,this._buffer=[]}return e.prototype.isReady=function(){return this._limit===void 0||this.length()<this._limit},e.prototype.add=function(t){var n=this;if(!this.isReady())return he.reject(new Q("Not adding Promise due to buffer limit reached."));var r=t();return this._buffer.indexOf(r)===-1&&this._buffer.push(r),r.then(function(){return n.remove(r)}).then(null,function(){return n.remove(r).then(null,function(){})}),r},e.prototype.remove=function(t){var n=this._buffer.splice(this._buffer.indexOf(t),1)[0];return n},e.prototype.length=function(){return this._buffer.length},e.prototype.drain=function(t){var n=this;return new he(function(r){var i=setTimeout(function(){t&&t>0&&r(!1)},t);he.all(n._buffer).then(function(){clearTimeout(i),r(!0)}).then(null,function(){r(!0)})})},e}(),Qs={nowSeconds:function(){return Date.now()/1e3}};function $y(){var e=$().performance;if(!(!e||!e.now)){var t=Date.now()-e.now();return{now:function(){return e.now()},timeOrigin:t}}}function Vy(){try{var e=ly(xd,"perf_hooks");return e.performance}catch{return}}var Za=nl()?Vy():$y(),zc=Za===void 0?Qs:{nowSeconds:function(){return(Za.timeOrigin+Za.now())/1e3}},fa=Qs.nowSeconds.bind(Qs),Bc=zc.nowSeconds.bind(zc);(function(){var e=$().performance;if(!(!e||!e.now)){var t=3600*1e3,n=e.now(),r=Date.now(),i=e.timeOrigin?Math.abs(e.timeOrigin+n-r):t,a=i<t,s=e.timing&&e.timing.navigationStart,o=typeof s=="number",l=o?Math.abs(s+n-r):t,c=l<t;return a||c?i<=l?e.timeOrigin:s:r}})();var Hc=100,Yi=function(){function e(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._user={},this._tags={},this._extra={},this._contexts={}}return e.clone=function(t){var n=new e;return t&&(n._breadcrumbs=z(t._breadcrumbs),n._tags=v({},t._tags),n._extra=v({},t._extra),n._contexts=v({},t._contexts),n._user=t._user,n._level=t._level,n._span=t._span,n._session=t._session,n._transactionName=t._transactionName,n._fingerprint=t._fingerprint,n._eventProcessors=z(t._eventProcessors),n._requestSession=t._requestSession),n},e.prototype.addScopeListener=function(t){this._scopeListeners.push(t)},e.prototype.addEventProcessor=function(t){return this._eventProcessors.push(t),this},e.prototype.setUser=function(t){return this._user=t||{},this._session&&this._session.update({user:t}),this._notifyScopeListeners(),this},e.prototype.getUser=function(){return this._user},e.prototype.getRequestSession=function(){return this._requestSession},e.prototype.setRequestSession=function(t){return this._requestSession=t,this},e.prototype.setTags=function(t){return this._tags=v(v({},this._tags),t),this._notifyScopeListeners(),this},e.prototype.setTag=function(t,n){var r;return this._tags=v(v({},this._tags),(r={},r[t]=n,r)),this._notifyScopeListeners(),this},e.prototype.setExtras=function(t){return this._extra=v(v({},this._extra),t),this._notifyScopeListeners(),this},e.prototype.setExtra=function(t,n){var r;return this._extra=v(v({},this._extra),(r={},r[t]=n,r)),this._notifyScopeListeners(),this},e.prototype.setFingerprint=function(t){return this._fingerprint=t,this._notifyScopeListeners(),this},e.prototype.setLevel=function(t){return this._level=t,this._notifyScopeListeners(),this},e.prototype.setTransactionName=function(t){return this._transactionName=t,this._notifyScopeListeners(),this},e.prototype.setTransaction=function(t){return this.setTransactionName(t)},e.prototype.setContext=function(t,n){var r;return n===null?delete this._contexts[t]:this._contexts=v(v({},this._contexts),(r={},r[t]=n,r)),this._notifyScopeListeners(),this},e.prototype.setSpan=function(t){return this._span=t,this._notifyScopeListeners(),this},e.prototype.getSpan=function(){return this._span},e.prototype.getTransaction=function(){var t,n,r,i,a=this.getSpan();if(!((t=a)===null||t===void 0)&&t.transaction)return(n=a)===null||n===void 0?void 0:n.transaction;if(!((i=(r=a)===null||r===void 0?void 0:r.spanRecorder)===null||i===void 0)&&i.spans[0])return a.spanRecorder.spans[0]},e.prototype.setSession=function(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this},e.prototype.getSession=function(){return this._session},e.prototype.update=function(t){if(!t)return this;if(typeof t=="function"){var n=t(this);return n instanceof e?n:this}return t instanceof e?(this._tags=v(v({},this._tags),t._tags),this._extra=v(v({},this._extra),t._extra),this._contexts=v(v({},this._contexts),t._contexts),t._user&&Object.keys(t._user).length&&(this._user=t._user),t._level&&(this._level=t._level),t._fingerprint&&(this._fingerprint=t._fingerprint),t._requestSession&&(this._requestSession=t._requestSession)):Nn(t)&&(t=t,this._tags=v(v({},this._tags),t.tags),this._extra=v(v({},this._extra),t.extra),this._contexts=v(v({},this._contexts),t.contexts),t.user&&(this._user=t.user),t.level&&(this._level=t.level),t.fingerprint&&(this._fingerprint=t.fingerprint),t.requestSession&&(this._requestSession=t.requestSession)),this},e.prototype.clear=function(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this},e.prototype.addBreadcrumb=function(t,n){var r=typeof n=="number"?Math.min(n,Hc):Hc;if(r<=0)return this;var i=v({timestamp:fa()},t);return this._breadcrumbs=z(this._breadcrumbs,[i]).slice(-r),this._notifyScopeListeners(),this},e.prototype.clearBreadcrumbs=function(){return this._breadcrumbs=[],this._notifyScopeListeners(),this},e.prototype.applyToEvent=function(t,n){var r;if(this._extra&&Object.keys(this._extra).length&&(t.extra=v(v({},this._extra),t.extra)),this._tags&&Object.keys(this._tags).length&&(t.tags=v(v({},this._tags),t.tags)),this._user&&Object.keys(this._user).length&&(t.user=v(v({},this._user),t.user)),this._contexts&&Object.keys(this._contexts).length&&(t.contexts=v(v({},this._contexts),t.contexts)),this._level&&(t.level=this._level),this._transactionName&&(t.transaction=this._transactionName),this._span){t.contexts=v({trace:this._span.getTraceContext()},t.contexts);var i=(r=this._span.transaction)===null||r===void 0?void 0:r.name;i&&(t.tags=v({transaction:i},t.tags))}return this._applyFingerprint(t),t.breadcrumbs=z(t.breadcrumbs||[],this._breadcrumbs),t.breadcrumbs=t.breadcrumbs.length>0?t.breadcrumbs:void 0,this._notifyEventProcessors(z(md(),this._eventProcessors),t,n)},e.prototype._notifyEventProcessors=function(t,n,r,i){var a=this;return i===void 0&&(i=0),new he(function(s,o){var l=t[i];if(n===null||typeof l!="function")s(n);else{var c=l(v({},n),r);il(c)?c.then(function(m){return a._notifyEventProcessors(t,m,r,i+1).then(s)}).then(null,o):a._notifyEventProcessors(t,c,r,i+1).then(s).then(null,o)}})},e.prototype._notifyScopeListeners=function(){var t=this;this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(function(n){n(t)}),this._notifyingListeners=!1)},e.prototype._applyFingerprint=function(t){t.fingerprint=t.fingerprint?Array.isArray(t.fingerprint)?t.fingerprint:[t.fingerprint]:[],this._fingerprint&&(t.fingerprint=t.fingerprint.concat(this._fingerprint)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint},e}();function md(){var e=$();return e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.globalEventProcessors=e.__SENTRY__.globalEventProcessors||[],e.__SENTRY__.globalEventProcessors}function ya(e){md().push(e)}var Gy=function(){function e(t){this.errors=0,this.sid=wn(),this.duration=0,this.status=Qe.Ok,this.init=!0,this.ignoreDuration=!1;var n=Bc();this.timestamp=n,this.started=n,t&&this.update(t)}return e.prototype.update=function(t){if(t===void 0&&(t={}),t.user&&(!this.ipAddress&&t.user.ip_address&&(this.ipAddress=t.user.ip_address),!this.did&&!t.did&&(this.did=t.user.id||t.user.email||t.user.username)),this.timestamp=t.timestamp||Bc(),t.ignoreDuration&&(this.ignoreDuration=t.ignoreDuration),t.sid&&(this.sid=t.sid.length===32?t.sid:wn()),t.init!==void 0&&(this.init=t.init),!this.did&&t.did&&(this.did=""+t.did),typeof t.started=="number"&&(this.started=t.started),this.ignoreDuration)this.duration=void 0;else if(typeof t.duration=="number")this.duration=t.duration;else{var n=this.timestamp-this.started;this.duration=n>=0?n:0}t.release&&(this.release=t.release),t.environment&&(this.environment=t.environment),!this.ipAddress&&t.ipAddress&&(this.ipAddress=t.ipAddress),!this.userAgent&&t.userAgent&&(this.userAgent=t.userAgent),typeof t.errors=="number"&&(this.errors=t.errors),t.status&&(this.status=t.status)},e.prototype.close=function(t){t?this.update({status:t}):this.status===Qe.Ok?this.update({status:Qe.Exited}):this.update()},e.prototype.toJSON=function(){return Ji({sid:""+this.sid,init:this.init,started:new Date(this.started*1e3).toISOString(),timestamp:new Date(this.timestamp*1e3).toISOString(),status:this.status,errors:this.errors,did:typeof this.did=="number"||typeof this.did=="string"?""+this.did:void 0,duration:this.duration,attrs:Ji({release:this.release,environment:this.environment,ip_address:this.ipAddress,user_agent:this.userAgent})})},e}(),al=4,Wy=100,sl=function(){function e(t,n,r){n===void 0&&(n=new Yi),r===void 0&&(r=al),this._version=r,this._stack=[{}],this.getStackTop().scope=n,t&&this.bindClient(t)}return e.prototype.isOlderThan=function(t){return this._version<t},e.prototype.bindClient=function(t){var n=this.getStackTop();n.client=t,t&&t.setupIntegrations&&t.setupIntegrations()},e.prototype.pushScope=function(){var t=Yi.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:t}),t},e.prototype.popScope=function(){return this.getStack().length<=1?!1:!!this.getStack().pop()},e.prototype.withScope=function(t){var n=this.pushScope();try{t(n)}finally{this.popScope()}},e.prototype.getClient=function(){return this.getStackTop().client},e.prototype.getScope=function(){return this.getStackTop().scope},e.prototype.getStack=function(){return this._stack},e.prototype.getStackTop=function(){return this._stack[this._stack.length-1]},e.prototype.captureException=function(t,n){var r=this._lastEventId=wn(),i=n;if(!n){var a=void 0;try{throw new Error("Sentry syntheticException")}catch(s){a=s}i={originalException:t,syntheticException:a}}return this._invokeClient("captureException",t,v(v({},i),{event_id:r})),r},e.prototype.captureMessage=function(t,n,r){var i=this._lastEventId=wn(),a=r;if(!r){var s=void 0;try{throw new Error(t)}catch(o){s=o}a={originalException:t,syntheticException:s}}return this._invokeClient("captureMessage",t,n,v(v({},a),{event_id:i})),i},e.prototype.captureEvent=function(t,n){var r=wn();return t.type!=="transaction"&&(this._lastEventId=r),this._invokeClient("captureEvent",t,v(v({},n),{event_id:r})),r},e.prototype.lastEventId=function(){return this._lastEventId},e.prototype.addBreadcrumb=function(t,n){var r=this.getStackTop(),i=r.scope,a=r.client;if(!(!i||!a)){var s=a.getOptions&&a.getOptions()||{},o=s.beforeBreadcrumb,l=o===void 0?null:o,c=s.maxBreadcrumbs,m=c===void 0?Wy:c;if(!(m<=0)){var y=fa(),g=v({timestamp:y},t),k=l?wi(function(){return l(g,n)}):g;k!==null&&i.addBreadcrumb(k,m)}}},e.prototype.setUser=function(t){var n=this.getScope();n&&n.setUser(t)},e.prototype.setTags=function(t){var n=this.getScope();n&&n.setTags(t)},e.prototype.setExtras=function(t){var n=this.getScope();n&&n.setExtras(t)},e.prototype.setTag=function(t,n){var r=this.getScope();r&&r.setTag(t,n)},e.prototype.setExtra=function(t,n){var r=this.getScope();r&&r.setExtra(t,n)},e.prototype.setContext=function(t,n){var r=this.getScope();r&&r.setContext(t,n)},e.prototype.configureScope=function(t){var n=this.getStackTop(),r=n.scope,i=n.client;r&&i&&t(r)},e.prototype.run=function(t){var n=$c(this);try{t(this)}finally{$c(n)}},e.prototype.getIntegration=function(t){var n=this.getClient();if(!n)return null;try{return n.getIntegration(t)}catch{return C.warn("Cannot retrieve integration "+t.id+" from the current Hub"),null}},e.prototype.startSpan=function(t){return this._callExtensionMethod("startSpan",t)},e.prototype.startTransaction=function(t,n){return this._callExtensionMethod("startTransaction",t,n)},e.prototype.traceHeaders=function(){return this._callExtensionMethod("traceHeaders")},e.prototype.captureSession=function(t){if(t===void 0&&(t=!1),t)return this.endSession();this._sendSessionUpdate()},e.prototype.endSession=function(){var t,n,r,i,a;(r=(n=(t=this.getStackTop())===null||t===void 0?void 0:t.scope)===null||n===void 0?void 0:n.getSession())===null||r===void 0||r.close(),this._sendSessionUpdate(),(a=(i=this.getStackTop())===null||i===void 0?void 0:i.scope)===null||a===void 0||a.setSession()},e.prototype.startSession=function(t){var n=this.getStackTop(),r=n.scope,i=n.client,a=i&&i.getOptions()||{},s=a.release,o=a.environment,l=$(),c=(l.navigator||{}).userAgent,m=new Gy(v(v(v({release:s,environment:o},r&&{user:r.getUser()}),c&&{userAgent:c}),t));if(r){var y=r.getSession&&r.getSession();y&&y.status===Qe.Ok&&y.update({status:Qe.Exited}),this.endSession(),r.setSession(m)}return m},e.prototype._sendSessionUpdate=function(){var t=this.getStackTop(),n=t.scope,r=t.client;if(!!n){var i=n.getSession&&n.getSession();i&&r&&r.captureSession&&r.captureSession(i)}},e.prototype._invokeClient=function(t){for(var n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var a=this.getStackTop(),s=a.scope,o=a.client;o&&o[t]&&(n=o)[t].apply(n,z(r,[s]))},e.prototype._callExtensionMethod=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=ha(),a=i.__SENTRY__;if(a&&a.extensions&&typeof a.extensions[t]=="function")return a.extensions[t].apply(this,n);C.warn("Extension method "+t+" couldn't be found, doing nothing.")},e}();function ha(){var e=$();return e.__SENTRY__=e.__SENTRY__||{extensions:{},hub:void 0},e}function $c(e){var t=ha(),n=at(t);return ol(t,e),n}function le(){var e=ha();return(!gd(e)||at(e).isOlderThan(al))&&ol(e,new sl),nl()?Jy(e):at(e)}function Jy(e){var t,n,r;try{var i=(r=(n=(t=ha().__SENTRY__)===null||t===void 0?void 0:t.extensions)===null||n===void 0?void 0:n.domain)===null||r===void 0?void 0:r.active;if(!i)return at(e);if(!gd(i)||at(i).isOlderThan(al)){var a=at(e).getStackTop();ol(i,new sl(a.client,Yi.clone(a.scope)))}return at(i)}catch{return at(e)}}function gd(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function at(e){return e&&e.__SENTRY__&&e.__SENTRY__.hub||(e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.hub=new sl),e.__SENTRY__.hub}function ol(e,t){return e?(e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.hub=t,!0):!1}function fd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=le();if(r&&r[e])return r[e].apply(r,z(t));throw new Error("No hub defined or "+e+" was not found on the hub, please open a bug report.")}function Yy(e,t){var n;try{throw new Error("Sentry syntheticException")}catch(r){n=r}return fd("captureException",e,{captureContext:t,originalException:e,syntheticException:n})}function Qy(e){fd("withScope",e)}var Vc="7",yd=function(){function e(t,n,r){n===void 0&&(n={}),this.dsn=t,this._dsnObject=new ld(t),this.metadata=n,this._tunnel=r}return e.prototype.getDsn=function(){return this._dsnObject},e.prototype.forceEnvelope=function(){return!!this._tunnel},e.prototype.getBaseApiEndpoint=function(){var t=this.getDsn(),n=t.protocol?t.protocol+":":"",r=t.port?":"+t.port:"";return n+"//"+t.host+r+(t.path?"/"+t.path:"")+"/api/"},e.prototype.getStoreEndpoint=function(){return this._getIngestEndpoint("store")},e.prototype.getStoreEndpointWithUrlEncodedAuth=function(){return this.getStoreEndpoint()+"?"+this._encodedAuth()},e.prototype.getEnvelopeEndpointWithUrlEncodedAuth=function(){return this.forceEnvelope()?this._tunnel:this._getEnvelopeEndpoint()+"?"+this._encodedAuth()},e.prototype.getStoreEndpointPath=function(){var t=this.getDsn();return(t.path?"/"+t.path:"")+"/api/"+t.projectId+"/store/"},e.prototype.getRequestHeaders=function(t,n){var r=this.getDsn(),i=["Sentry sentry_version="+Vc];return i.push("sentry_client="+t+"/"+n),i.push("sentry_key="+r.publicKey),r.pass&&i.push("sentry_secret="+r.pass),{"Content-Type":"application/json","X-Sentry-Auth":i.join(", ")}},e.prototype.getReportDialogEndpoint=function(t){t===void 0&&(t={});var n=this.getDsn(),r=this.getBaseApiEndpoint()+"embed/error-page/",i=[];i.push("dsn="+n.toString());for(var a in t)if(a!=="dsn")if(a==="user"){if(!t.user)continue;t.user.name&&i.push("name="+encodeURIComponent(t.user.name)),t.user.email&&i.push("email="+encodeURIComponent(t.user.email))}else i.push(encodeURIComponent(a)+"="+encodeURIComponent(t[a]));return i.length?r+"?"+i.join("&"):r},e.prototype._getEnvelopeEndpoint=function(){return this._getIngestEndpoint("envelope")},e.prototype._getIngestEndpoint=function(t){if(this._tunnel)return this._tunnel;var n=this.getBaseApiEndpoint(),r=this.getDsn();return""+n+r.projectId+"/"+t+"/"},e.prototype._encodedAuth=function(){var t=this.getDsn(),n={sentry_key:t.publicKey,sentry_version:Vc};return Py(n)},e}(),Gc=[];function Wc(e){return e.reduce(function(t,n){return t.every(function(r){return n.name!==r.name})&&t.push(n),t},[])}function Ky(e){var t=e.defaultIntegrations&&z(e.defaultIntegrations)||[],n=e.integrations,r=z(Wc(t));Array.isArray(n)?r=z(r.filter(function(s){return n.every(function(o){return o.name!==s.name})}),Wc(n)):typeof n=="function"&&(r=n(r),r=Array.isArray(r)?r:[r]);var i=r.map(function(s){return s.name}),a="Debug";return i.indexOf(a)!==-1&&r.push.apply(r,z(r.splice(i.indexOf(a),1))),r}function Xy(e){Gc.indexOf(e.name)===-1&&(e.setupOnce(ya,le),Gc.push(e.name),C.log("Integration installed: "+e.name))}function Zy(e){var t={};return Ky(e).forEach(function(n){t[n.name]=n,Xy(n)}),Object.defineProperty(t,"initialized",{value:!0}),t}var Jc="Not capturing exception because it's already been captured.",eh=function(){function e(t,n){this._integrations={},this._numProcessing=0,this._backend=new t(n),this._options=n,n.dsn&&(this._dsn=new ld(n.dsn))}return e.prototype.captureException=function(t,n,r){var i=this;if(Uc(t)){C.log(Jc);return}var a=n&&n.event_id;return this._process(this._getBackend().eventFromException(t,n).then(function(s){return i._captureEvent(s,n,r)}).then(function(s){a=s})),a},e.prototype.captureMessage=function(t,n,r,i){var a=this,s=r&&r.event_id,o=ma(t)?this._getBackend().eventFromMessage(String(t),n,r):this._getBackend().eventFromException(t,r);return this._process(o.then(function(l){return a._captureEvent(l,r,i)}).then(function(l){s=l})),s},e.prototype.captureEvent=function(t,n,r){var i;if(((i=n)===null||i===void 0?void 0:i.originalException)&&Uc(n.originalException)){C.log(Jc);return}var a=n&&n.event_id;return this._process(this._captureEvent(t,n,r).then(function(s){a=s})),a},e.prototype.captureSession=function(t){if(!this._isEnabled()){C.warn("SDK not enabled, will not capture session.");return}typeof t.release!="string"?C.warn("Discarded session because of missing or non-string release"):(this._sendSession(t),t.update({init:!1}))},e.prototype.getDsn=function(){return this._dsn},e.prototype.getOptions=function(){return this._options},e.prototype.getTransport=function(){return this._getBackend().getTransport()},e.prototype.flush=function(t){var n=this;return this._isClientDoneProcessing(t).then(function(r){return n.getTransport().close(t).then(function(i){return r&&i})})},e.prototype.close=function(t){var n=this;return this.flush(t).then(function(r){return n.getOptions().enabled=!1,r})},e.prototype.setupIntegrations=function(){this._isEnabled()&&!this._integrations.initialized&&(this._integrations=Zy(this._options))},e.prototype.getIntegration=function(t){try{return this._integrations[t.id]||null}catch{return C.warn("Cannot retrieve integration "+t.id+" from the current Client"),null}},e.prototype._updateSessionFromEvent=function(t,n){var r,i,a=!1,s=!1,o=n.exception&&n.exception.values;if(o){s=!0;try{for(var l=Dr(o),c=l.next();!c.done;c=l.next()){var m=c.value,y=m.mechanism;if(y&&y.handled===!1){a=!0;break}}}catch(S){r={error:S}}finally{try{c&&!c.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}}var g=t.status===Qe.Ok,k=g&&t.errors===0||g&&a;k&&(t.update(v(v({},a&&{status:Qe.Crashed}),{errors:t.errors||Number(s||a)})),this.captureSession(t))},e.prototype._sendSession=function(t){this._getBackend().sendSession(t)},e.prototype._isClientDoneProcessing=function(t){var n=this;return new he(function(r){var i=0,a=1,s=setInterval(function(){n._numProcessing==0?(clearInterval(s),r(!0)):(i+=a,t&&i>=t&&(clearInterval(s),r(!1)))},a)})},e.prototype._getBackend=function(){return this._backend},e.prototype._isEnabled=function(){return this.getOptions().enabled!==!1&&this._dsn!==void 0},e.prototype._prepareEvent=function(t,n,r){var i=this,a=this.getOptions().normalizeDepth,s=a===void 0?3:a,o=v(v({},t),{event_id:t.event_id||(r&&r.event_id?r.event_id:wn()),timestamp:t.timestamp||fa()});this._applyClientOptions(o),this._applyIntegrationsMetadata(o);var l=n;r&&r.captureContext&&(l=Yi.clone(l).update(r.captureContext));var c=he.resolve(o);return l&&(c=l.applyToEvent(o,r)),c.then(function(m){return typeof s=="number"&&s>0?i._normalizeEvent(m,s):m})},e.prototype._normalizeEvent=function(t,n){if(!t)return null;var r=v(v(v(v(v({},t),t.breadcrumbs&&{breadcrumbs:t.breadcrumbs.map(function(s){return v(v({},s),s.data&&{data:en(s.data,n)})})}),t.user&&{user:en(t.user,n)}),t.contexts&&{contexts:en(t.contexts,n)}),t.extra&&{extra:en(t.extra,n)});t.contexts&&t.contexts.trace&&(r.contexts.trace=t.contexts.trace);var i=this.getOptions()._experiments,a=i===void 0?{}:i;return a.ensureNoCircularStructures?en(r):r},e.prototype._applyClientOptions=function(t){var n=this.getOptions(),r=n.environment,i=n.release,a=n.dist,s=n.maxValueLength,o=s===void 0?250:s;"environment"in t||(t.environment="environment"in n?r:"production"),t.release===void 0&&i!==void 0&&(t.release=i),t.dist===void 0&&a!==void 0&&(t.dist=a),t.message&&(t.message=fr(t.message,o));var l=t.exception&&t.exception.values&&t.exception.values[0];l&&l.value&&(l.value=fr(l.value,o));var c=t.request;c&&c.url&&(c.url=fr(c.url,o))},e.prototype._applyIntegrationsMetadata=function(t){var n=Object.keys(this._integrations);n.length>0&&(t.sdk=t.sdk||{},t.sdk.integrations=z(t.sdk.integrations||[],n))},e.prototype._sendEvent=function(t){this._getBackend().sendEvent(t)},e.prototype._captureEvent=function(t,n,r){return this._processEvent(t,n,r).then(function(i){return i.event_id},function(i){C.error(i)})},e.prototype._processEvent=function(t,n,r){var i=this,a,s,o=this.getOptions(),l=o.beforeSend,c=o.sampleRate,m=this.getTransport();if(!this._isEnabled())return he.reject(new Q("SDK not enabled, will not capture event."));var y=t.type==="transaction";return!y&&typeof c=="number"&&Math.random()>c?((s=(a=m).recordLostEvent)===null||s===void 0||s.call(a,je.SampleRate,"event"),he.reject(new Q("Discarding event because it's not included in the random sample (sampling rate = "+c+")"))):this._prepareEvent(t,r,n).then(function(g){var k,S;if(g===null)throw(S=(k=m).recordLostEvent)===null||S===void 0||S.call(k,je.EventProcessor,t.type||"event"),new Q("An event processor returned null, will not send event.");var x=n&&n.data&&n.data.__sentry__===!0;if(x||y||!l)return g;var d=l(g,n);return i._ensureBeforeSendRv(d)}).then(function(g){var k,S;if(g===null)throw(S=(k=m).recordLostEvent)===null||S===void 0||S.call(k,je.BeforeSend,t.type||"event"),new Q("`beforeSend` returned `null`, will not send event.");var x=r&&r.getSession&&r.getSession();return!y&&x&&i._updateSessionFromEvent(x,g),i._sendEvent(g),g}).then(null,function(g){throw g instanceof Q?g:(i.captureException(g,{data:{__sentry__:!0},originalException:g}),new Q(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: `+g))})},e.prototype._process=function(t){var n=this;this._numProcessing+=1,t.then(function(r){return n._numProcessing-=1,r},function(r){return n._numProcessing-=1,r})},e.prototype._ensureBeforeSendRv=function(t){var n="`beforeSend` method has to return `null` or a valid event.";if(il(t))return t.then(function(r){if(!(Nn(r)||r===null))throw new Q(n);return r},function(r){throw new Q("beforeSend rejected with "+r)});if(!(Nn(t)||t===null))throw new Q(n);return t},e}(),th=function(){function e(){}return e.prototype.sendEvent=function(t){return he.resolve({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:Ht.Skipped})},e.prototype.close=function(t){return he.resolve(!0)},e}(),nh=function(){function e(t){this._options=t,this._options.dsn||C.warn("No DSN provided, backend will not do anything."),this._transport=this._setupTransport()}return e.prototype.eventFromException=function(t,n){throw new Q("Backend has to implement `eventFromException` method")},e.prototype.eventFromMessage=function(t,n,r){throw new Q("Backend has to implement `eventFromMessage` method")},e.prototype.sendEvent=function(t){this._transport.sendEvent(t).then(null,function(n){C.error("Error while sending event: "+n)})},e.prototype.sendSession=function(t){if(!this._transport.sendSession){C.warn("Dropping session because custom transport doesn't implement sendSession");return}this._transport.sendSession(t).then(null,function(n){C.error("Error while sending session: "+n)})},e.prototype.getTransport=function(){return this._transport},e.prototype._setupTransport=function(){return new th},e}();function hd(e){if(!(!e.metadata||!e.metadata.sdk)){var t=e.metadata.sdk,n=t.name,r=t.version;return{name:n,version:r}}}function rh(e,t){return t&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||t.name,e.sdk.version=e.sdk.version||t.version,e.sdk.integrations=z(e.sdk.integrations||[],t.integrations||[]),e.sdk.packages=z(e.sdk.packages||[],t.packages||[])),e}function kd(e,t){var n=hd(t),r=JSON.stringify(v(v({sent_at:new Date().toISOString()},n&&{sdk:n}),t.forceEnvelope()&&{dsn:t.getDsn().toString()})),i="aggregates"in e?"sessions":"session",a=JSON.stringify({type:i});return{body:r+`
`+a+`
`+JSON.stringify(e),type:i,url:t.getEnvelopeEndpointWithUrlEncodedAuth()}}function vd(e,t){var n=hd(t),r=e.type||"event",i=r==="transaction"||t.forceEnvelope(),a=e.debug_meta||{},s=a.transactionSampling,o=sy(a,["transactionSampling"]),l=s||{},c=l.method,m=l.rate;Object.keys(o).length===0?delete e.debug_meta:e.debug_meta=o;var y={body:JSON.stringify(n?rh(e,t.metadata.sdk):e),type:r,url:i?t.getEnvelopeEndpointWithUrlEncodedAuth():t.getStoreEndpointWithUrlEncodedAuth()};if(i){var g=JSON.stringify(v(v({event_id:e.event_id,sent_at:new Date().toISOString()},n&&{sdk:n}),t.forceEnvelope()&&{dsn:t.getDsn().toString()})),k=JSON.stringify({type:r,sample_rates:[{id:c,rate:m}]}),S=g+`
`+k+`
`+y.body;y.body=S}return y}function ih(e,t){var n;t.debug===!0&&C.enable();var r=le();(n=r.getScope())===null||n===void 0||n.update(t.initialScope);var i=new e(t);r.bindClient(i)}var Qi="6.16.1",Yc,ah=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(){Yc=Function.prototype.toString,Function.prototype.toString=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=this.__sentry_original__||this;return Yc.apply(r,t)}},e.id="FunctionToString",e}(),sh=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],oh=function(){function e(t){t===void 0&&(t={}),this._options=t,this.name=e.id}return e.prototype.setupOnce=function(){ya(function(t){var n=le();if(!n)return t;var r=n.getIntegration(e);if(r){var i=n.getClient(),a=i?i.getOptions():{},s=typeof r._mergeOptions=="function"?r._mergeOptions(a):{};return typeof r._shouldDropEvent!="function"?t:r._shouldDropEvent(t,s)?null:t}return t})},e.prototype._shouldDropEvent=function(t,n){return this._isSentryError(t,n)?(C.warn(`Event dropped due to being internal Sentry Error.
Event: `+Et(t)),!0):this._isIgnoredError(t,n)?(C.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+Et(t)),!0):this._isDeniedUrl(t,n)?(C.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: "+Et(t)+`.
Url: `+this._getEventFilterUrl(t)),!0):this._isAllowedUrl(t,n)?!1:(C.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: "+Et(t)+`.
Url: `+this._getEventFilterUrl(t)),!0)},e.prototype._isSentryError=function(t,n){if(!n.ignoreInternal)return!1;try{return t&&t.exception&&t.exception.values&&t.exception.values[0]&&t.exception.values[0].type==="SentryError"||!1}catch{return!1}},e.prototype._isIgnoredError=function(t,n){return!n.ignoreErrors||!n.ignoreErrors.length?!1:this._getPossibleEventMessages(t).some(function(r){return n.ignoreErrors.some(function(i){return Ya(r,i)})})},e.prototype._isDeniedUrl=function(t,n){if(!n.denyUrls||!n.denyUrls.length)return!1;var r=this._getEventFilterUrl(t);return r?n.denyUrls.some(function(i){return Ya(r,i)}):!1},e.prototype._isAllowedUrl=function(t,n){if(!n.allowUrls||!n.allowUrls.length)return!0;var r=this._getEventFilterUrl(t);return r?n.allowUrls.some(function(i){return Ya(r,i)}):!0},e.prototype._mergeOptions=function(t){return t===void 0&&(t={}),{allowUrls:z(this._options.whitelistUrls||[],this._options.allowUrls||[],t.whitelistUrls||[],t.allowUrls||[]),denyUrls:z(this._options.blacklistUrls||[],this._options.denyUrls||[],t.blacklistUrls||[],t.denyUrls||[]),ignoreErrors:z(this._options.ignoreErrors||[],t.ignoreErrors||[],sh),ignoreInternal:typeof this._options.ignoreInternal<"u"?this._options.ignoreInternal:!0}},e.prototype._getPossibleEventMessages=function(t){if(t.message)return[t.message];if(t.exception)try{var n=t.exception.values&&t.exception.values[0]||{},r=n.type,i=r===void 0?"":r,a=n.value,s=a===void 0?"":a;return[""+s,i+": "+s]}catch{return C.error("Cannot extract message for event "+Et(t)),[]}return[]},e.prototype._getLastValidUrl=function(t){t===void 0&&(t=[]);for(var n,r,i=t.length-1;i>=0;i--){var a=t[i];if(((n=a)===null||n===void 0?void 0:n.filename)!=="<anonymous>"&&((r=a)===null||r===void 0?void 0:r.filename)!=="[native code]")return a.filename||null}return null},e.prototype._getEventFilterUrl=function(t){try{if(t.stacktrace){var n=t.stacktrace.frames;return this._getLastValidUrl(n)}if(t.exception){var r=t.exception.values&&t.exception.values[0].stacktrace&&t.exception.values[0].stacktrace.frames;return this._getLastValidUrl(r)}return null}catch{return C.error("Cannot extract url for event "+Et(t)),null}},e.id="InboundFilters",e}(),cn="?",lh=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,ch=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,uh=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,ph=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,dh=/\((\S*)(?::(\d+))(?::(\d+))\)/,mh=/Minified React error #\d+;/i;function Pn(e){var t=null,n=0;e&&(typeof e.framesToPop=="number"?n=e.framesToPop:mh.test(e.message)&&(n=1));try{if(t=fh(e),t)return Kc(t,n)}catch{}try{if(t=gh(e),t)return Kc(t,n)}catch{}return{message:ll(e),name:e&&e.name,stack:[],failed:!0}}function gh(e){var t,n;if(!e||!e.stack)return null;for(var r=[],i=e.stack.split(`
`),a,s,o,l,c=0;c<i.length;++c){if(o=lh.exec(i[c])){var m=o[2]&&o[2].indexOf("native")===0;a=o[2]&&o[2].indexOf("eval")===0,a&&(s=dh.exec(o[2]))&&(o[2]=s[1],o[3]=s[2],o[4]=s[3]);var y=o[2]&&o[2].indexOf("address at ")===0?o[2].substr(11):o[2],g=o[1]||cn;t=Mr(Qc(g,y),2),g=t[0],y=t[1],l={url:y,func:g,args:m?[o[2]]:[],line:o[3]?+o[3]:null,column:o[4]?+o[4]:null}}else if(o=uh.exec(i[c]))l={url:o[2],func:o[1]||cn,args:[],line:+o[3],column:o[4]?+o[4]:null};else if(o=ch.exec(i[c])){a=o[3]&&o[3].indexOf(" > eval")>-1,a&&(s=ph.exec(o[3]))?(o[1]=o[1]||"eval",o[3]=s[1],o[4]=s[2],o[5]=""):c===0&&!o[5]&&e.columnNumber!==void 0&&(r[0].column=e.columnNumber+1);var y=o[3],g=o[1]||cn;n=Mr(Qc(g,y),2),g=n[0],y=n[1],l={url:y,func:g,args:o[2]?o[2].split(","):[],line:o[4]?+o[4]:null,column:o[5]?+o[5]:null}}else continue;!l.func&&l.line&&(l.func=cn),r.push(l)}return r.length?{message:ll(e),name:e.name,stack:r}:null}function fh(e){if(!e||!e.stacktrace)return null;for(var t=e.stacktrace,n=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,r=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,i=t.split(`
`),a=[],s,o=0;o<i.length;o+=2){var l=null;(s=n.exec(i[o]))?l={url:s[2],func:s[3],args:[],line:+s[1],column:null}:(s=r.exec(i[o]))&&(l={url:s[6],func:s[3]||s[4],args:s[5]?s[5].split(","):[],line:+s[1],column:+s[2]}),l&&(!l.func&&l.line&&(l.func=cn),a.push(l))}return a.length?{message:ll(e),name:e.name,stack:a}:null}var Qc=function(e,t){var n=e.indexOf("safari-extension")!==-1,r=e.indexOf("safari-web-extension")!==-1;return n||r?[e.indexOf("@")!==-1?e.split("@")[0]:cn,n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]};function Kc(e,t){try{return v(v({},e),{stack:e.stack.slice(t)})}catch{return e}}function ll(e){var t=e&&e.message;return t?t.error&&typeof t.error.message=="string"?t.error.message:t:"No error message"}var yh=50;function wd(e){var t=cl(e.stack),n={type:e.name,value:e.message};return t&&t.length&&(n.stacktrace={frames:t}),n.type===void 0&&n.value===""&&(n.value="Unrecoverable error caught"),n}function hh(e,t,n){var r={exception:{values:[{type:rl(e)?e.constructor.name:n?"UnhandledRejection":"Error",value:"Non-Error "+(n?"promise rejection":"exception")+" captured with keys: "+Ry(e)}]},extra:{__serialized__:ud(e)}};if(t){var i=Pn(t),a=cl(i.stack);r.stacktrace={frames:a}}return r}function es(e){var t=wd(e);return{exception:{values:[t]}}}function cl(e){if(!e||!e.length)return[];var t=e,n=t[0].func||"",r=t[t.length-1].func||"";return(n.indexOf("captureMessage")!==-1||n.indexOf("captureException")!==-1)&&(t=t.slice(1)),r.indexOf("sentryWrapped")!==-1&&(t=t.slice(0,-1)),t.slice(0,yh).map(function(i){return{colno:i.column===null?void 0:i.column,filename:i.url||t[0].url,function:i.func||"?",in_app:!0,lineno:i.line===null?void 0:i.line}}).reverse()}function kh(e,t,n){var r=n&&n.syntheticException||void 0,i=Ks(t,r,{attachStacktrace:e.attachStacktrace});return Tn(i),i.level=Be.Error,n&&n.event_id&&(i.event_id=n.event_id),he.resolve(i)}function vh(e,t,n,r){n===void 0&&(n=Be.Info);var i=r&&r.syntheticException||void 0,a=Xs(t,i,{attachStacktrace:e.attachStacktrace});return a.level=n,r&&r.event_id&&(a.event_id=r.event_id),he.resolve(a)}function Ks(e,t,n){n===void 0&&(n={});var r;if(od(e)&&e.error){var i=e;return e=i.error,r=es(Pn(e)),r}if(jc(e)||uy(e)){var a=e;if("stack"in e)r=es(Pn(e));else{var s=a.name||(jc(a)?"DOMError":"DOMException"),o=a.message?s+": "+a.message:s;r=Xs(o,t,n),Ys(r,o)}return"code"in a&&(r.tags=v(v({},r.tags),{"DOMException.code":""+a.code})),r}if(sd(e))return r=es(Pn(e)),r;if(Nn(e)||rl(e)){var l=e;return r=hh(l,t,n.rejection),Tn(r,{synthetic:!0}),r}return r=Xs(e,t,n),Ys(r,""+e,void 0),Tn(r,{synthetic:!0}),r}function Xs(e,t,n){n===void 0&&(n={});var r={message:e};if(n.attachStacktrace&&t){var i=Pn(t),a=cl(i.stack);r.stacktrace={frames:a}}return r}var De=$(),oi;function Pd(){var e,t;if(oi)return oi;if(Js(De.fetch))return oi=De.fetch.bind(De);var n=De.document,r=De.fetch;if(typeof((e=n)===null||e===void 0?void 0:e.createElement)=="function")try{var i=n.createElement("iframe");i.hidden=!0,n.head.appendChild(i),!((t=i.contentWindow)===null||t===void 0)&&t.fetch&&(r=i.contentWindow.fetch),n.head.removeChild(i)}catch(a){C.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",a)}return oi=r.bind(De)}function wh(e,t){var n=Object.prototype.toString.call(De&&De.navigator)==="[object Navigator]",r=n&&typeof De.navigator.sendBeacon=="function";if(r){var i=De.navigator.sendBeacon.bind(De.navigator);return i(e,t)}if(ga()){var a=Pd();return oy(a(e,{body:t,method:"POST",credentials:"omit",keepalive:!0}))}}var Xc={event:"error",transaction:"transaction",session:"session",attachment:"attachment"},ts=$(),Sd=function(){function e(t){var n=this;this.options=t,this._buffer=new Hy(30),this._rateLimits={},this._outcomes={},this._api=new yd(t.dsn,t._metadata,t.tunnel),this.url=this._api.getStoreEndpointWithUrlEncodedAuth(),this.options.sendClientReports&&ts.document&&ts.document.addEventListener("visibilitychange",function(){ts.document.visibilityState==="hidden"&&n._flushOutcomes()})}return e.prototype.sendEvent=function(t){throw new Q("Transport Class has to implement `sendEvent` method")},e.prototype.close=function(t){return this._buffer.drain(t)},e.prototype.recordLostEvent=function(t,n){var r;if(!!this.options.sendClientReports){var i=Xc[n]+":"+t;C.log("Adding outcome: "+i),this._outcomes[i]=(r=this._outcomes[i],(r??0)+1)}},e.prototype._flushOutcomes=function(){if(!!this.options.sendClientReports){var t=this._outcomes;if(this._outcomes={},!Object.keys(t).length){C.log("No outcomes to flush");return}C.log(`Flushing outcomes:
`+JSON.stringify(t,null,2));var n=this._api.getEnvelopeEndpointWithUrlEncodedAuth(),r=JSON.stringify(v({},this.options.tunnel&&{dsn:this._api.getDsn().toString()})),i=JSON.stringify({type:"client_report"}),a=JSON.stringify({timestamp:fa(),discarded_events:Object.keys(t).map(function(o){var l=Mr(o.split(":"),2),c=l[0],m=l[1];return{reason:m,category:c,quantity:t[o]}})}),s=r+`
`+i+`
`+a;try{wh(n,s)}catch(o){C.error(o)}}},e.prototype._handleResponse=function(t){var n=t.requestType,r=t.response,i=t.headers,a=t.resolve,s=t.reject,o=Ht.fromHttpCode(r.status),l=this._handleRateLimit(i);if(l&&C.warn("Too many "+n+" requests, backing off until: "+this._disabledUntil(n)),o===Ht.Success){a({status:o});return}s(r)},e.prototype._disabledUntil=function(t){var n=Xc[t];return this._rateLimits[n]||this._rateLimits.all},e.prototype._isRateLimited=function(t){return this._disabledUntil(t)>new Date(Date.now())},e.prototype._handleRateLimit=function(t){var n,r,i,a,s=Date.now(),o=t["x-sentry-rate-limits"],l=t["retry-after"];if(o){try{for(var c=Dr(o.trim().split(",")),m=c.next();!m.done;m=c.next()){var y=m.value,g=y.split(":",2),k=parseInt(g[0],10),S=(isNaN(k)?60:k)*1e3;try{for(var x=(i=void 0,Dr(g[1].split(";"))),d=x.next();!d.done;d=x.next()){var u=d.value;this._rateLimits[u||"all"]=new Date(s+S)}}catch(p){i={error:p}}finally{try{d&&!d.done&&(a=x.return)&&a.call(x)}finally{if(i)throw i.error}}}}catch(p){n={error:p}}finally{try{m&&!m.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return!0}else if(l)return this._rateLimits.all=new Date(s+By(s,l)),!0;return!1},e}(),Ph=function(e){$r(t,e);function t(n,r){r===void 0&&(r=Pd());var i=e.call(this,n)||this;return i._fetch=r,i}return t.prototype.sendEvent=function(n){return this._sendRequest(vd(n,this._api),n)},t.prototype.sendSession=function(n){return this._sendRequest(kd(n,this._api),n)},t.prototype._sendRequest=function(n,r){var i=this;if(this._isRateLimited(n.type))return this.recordLostEvent(je.RateLimitBackoff,n.type),Promise.reject({event:r,type:n.type,reason:"Transport for "+n.type+" requests locked till "+this._disabledUntil(n.type)+" due to too many requests.",status:429});var a={body:n.body,method:"POST",referrerPolicy:Ny()?"origin":""};return this.options.fetchParameters!==void 0&&Object.assign(a,this.options.fetchParameters),this.options.headers!==void 0&&(a.headers=this.options.headers),this._buffer.add(function(){return new he(function(s,o){i._fetch(n.url,a).then(function(l){var c={"x-sentry-rate-limits":l.headers.get("X-Sentry-Rate-Limits"),"retry-after":l.headers.get("Retry-After")};i._handleResponse({requestType:n.type,response:l,headers:c,resolve:s,reject:o})}).catch(o)})}).then(void 0,function(s){throw s instanceof Q?i.recordLostEvent(je.QueueOverflow,n.type):i.recordLostEvent(je.NetworkError,n.type),s})},t}(Sd),Sh=function(e){$r(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.sendEvent=function(n){return this._sendRequest(vd(n,this._api),n)},t.prototype.sendSession=function(n){return this._sendRequest(kd(n,this._api),n)},t.prototype._sendRequest=function(n,r){var i=this;return this._isRateLimited(n.type)?(this.recordLostEvent(je.RateLimitBackoff,n.type),Promise.reject({event:r,type:n.type,reason:"Transport for "+n.type+" requests locked till "+this._disabledUntil(n.type)+" due to too many requests.",status:429})):this._buffer.add(function(){return new he(function(a,s){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===4){var c={"x-sentry-rate-limits":o.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":o.getResponseHeader("Retry-After")};i._handleResponse({requestType:n.type,response:o,headers:c,resolve:a,reject:s})}},o.open("POST",n.url);for(var l in i.options.headers)Object.prototype.hasOwnProperty.call(i.options.headers,l)&&o.setRequestHeader(l,i.options.headers[l]);o.send(n.body)})}).then(void 0,function(a){throw a instanceof Q?i.recordLostEvent(je.QueueOverflow,n.type):i.recordLostEvent(je.NetworkError,n.type),a})},t}(Sd),_h=function(e){$r(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.eventFromException=function(n,r){return kh(this._options,n,r)},t.prototype.eventFromMessage=function(n,r,i){return r===void 0&&(r=Be.Info),vh(this._options,n,r,i)},t.prototype._setupTransport=function(){if(!this._options.dsn)return e.prototype._setupTransport.call(this);var n=v(v({},this._options.transportOptions),{dsn:this._options.dsn,tunnel:this._options.tunnel,sendClientReports:this._options.sendClientReports,_metadata:this._options._metadata});return this._options.transport?new this._options.transport(n):ga()?new Ph(n):new Sh(n)},t}(nh),li=$(),Zs=0;function Zc(){return Zs>0}function xh(){Zs+=1,setTimeout(function(){Zs-=1})}function tn(e,t,n){if(t===void 0&&(t={}),typeof e!="function")return e;try{if(e.__sentry__)return e;if(e.__sentry_wrapped__)return e.__sentry_wrapped__}catch{return e}var r=function(){var s=Array.prototype.slice.call(arguments);try{n&&typeof n=="function"&&n.apply(this,arguments);var o=s.map(function(l){return tn(l,t)});return e.handleEvent?e.handleEvent.apply(this,o):e.apply(this,o)}catch(l){throw xh(),Qy(function(c){c.addEventProcessor(function(m){var y=v({},m);return t.mechanism&&(Ys(y,void 0,void 0),Tn(y,t.mechanism)),y.extra=v(v({},y.extra),{arguments:s}),y}),Yy(l)}),l}};try{for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}catch{}e.prototype=e.prototype||{},r.prototype=e.prototype,Object.defineProperty(e,"__sentry_wrapped__",{enumerable:!1,value:r}),Object.defineProperties(r,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:e}});try{var a=Object.getOwnPropertyDescriptor(r,"name");a.configurable&&Object.defineProperty(r,"name",{get:function(){return e.name}})}catch{}return r}function Rh(e){if(e===void 0&&(e={}),!!li.document){if(!e.eventId){C.error("Missing eventId option in showReportDialog call");return}if(!e.dsn){C.error("Missing dsn option in showReportDialog call");return}var t=li.document.createElement("script");t.async=!0,t.src=new yd(e.dsn).getReportDialogEndpoint(e),e.onLoad&&(t.onload=e.onLoad);var n=li.document.head||li.document.body;n&&n.appendChild(t)}}var bh=function(){function e(t){this.name=e.id,this._onErrorHandlerInstalled=!1,this._onUnhandledRejectionHandlerInstalled=!1,this._options=v({onerror:!0,onunhandledrejection:!0},t)}return e.prototype.setupOnce=function(){Error.stackTraceLimit=50,this._options.onerror&&(C.log("Global Handler attached: onerror"),this._installGlobalOnErrorHandler()),this._options.onunhandledrejection&&(C.log("Global Handler attached: onunhandledrejection"),this._installGlobalOnUnhandledRejectionHandler())},e.prototype._installGlobalOnErrorHandler=function(){var t=this;this._onErrorHandlerInstalled||(it({callback:function(n){var r=n.error,i=le(),a=i.getIntegration(e),s=r&&r.__sentry_own_request__===!0;if(!(!a||Zc()||s)){var o=i.getClient(),l=r===void 0&&bn(n.msg)?t._eventFromIncompleteOnError(n.msg,n.url,n.line,n.column):t._enhanceEventWithInitialFrame(Ks(r||n.msg,void 0,{attachStacktrace:o&&o.getOptions().attachStacktrace,rejection:!1}),n.url,n.line,n.column);Tn(l,{handled:!1,type:"onerror"}),i.captureEvent(l,{originalException:r})}},type:"error"}),this._onErrorHandlerInstalled=!0)},e.prototype._installGlobalOnUnhandledRejectionHandler=function(){var t=this;this._onUnhandledRejectionHandlerInstalled||(it({callback:function(n){var r=n;try{"reason"in n?r=n.reason:"detail"in n&&"reason"in n.detail&&(r=n.detail.reason)}catch{}var i=le(),a=i.getIntegration(e),s=r&&r.__sentry_own_request__===!0;if(!a||Zc()||s)return!0;var o=i.getClient(),l=ma(r)?t._eventFromRejectionWithPrimitive(r):Ks(r,void 0,{attachStacktrace:o&&o.getOptions().attachStacktrace,rejection:!0});l.level=Be.Error,Tn(l,{handled:!1,type:"onunhandledrejection"}),i.captureEvent(l,{originalException:r})},type:"unhandledrejection"}),this._onUnhandledRejectionHandlerInstalled=!0)},e.prototype._eventFromIncompleteOnError=function(t,n,r,i){var a=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,s=od(t)?t.message:t,o,l=s.match(a);l&&(o=l[1],s=l[2]);var c={exception:{values:[{type:o||"Error",value:s}]}};return this._enhanceEventWithInitialFrame(c,n,r,i)},e.prototype._eventFromRejectionWithPrimitive=function(t){return{exception:{values:[{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(t)}]}}},e.prototype._enhanceEventWithInitialFrame=function(t,n,r,i){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].stacktrace=t.exception.values[0].stacktrace||{},t.exception.values[0].stacktrace.frames=t.exception.values[0].stacktrace.frames||[];var a=isNaN(parseInt(i,10))?void 0:i,s=isNaN(parseInt(r,10))?void 0:r,o=bn(n)&&n.length>0?n:gy();return t.exception.values[0].stacktrace.frames.length===0&&t.exception.values[0].stacktrace.frames.push({colno:a,filename:o,function:"?",in_app:!0,lineno:s}),t},e.id="GlobalHandlers",e}(),Nh=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Th=function(){function e(t){this.name=e.id,this._options=v({XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0},t)}return e.prototype.setupOnce=function(){var t=$();if(this._options.setTimeout&&oe(t,"setTimeout",this._wrapTimeFunction.bind(this)),this._options.setInterval&&oe(t,"setInterval",this._wrapTimeFunction.bind(this)),this._options.requestAnimationFrame&&oe(t,"requestAnimationFrame",this._wrapRAF.bind(this)),this._options.XMLHttpRequest&&"XMLHttpRequest"in t&&oe(XMLHttpRequest.prototype,"send",this._wrapXHR.bind(this)),this._options.eventTarget){var n=Array.isArray(this._options.eventTarget)?this._options.eventTarget:Nh;n.forEach(this._wrapEventTarget.bind(this))}},e.prototype._wrapTimeFunction=function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=n[0];return n[0]=tn(i,{mechanism:{data:{function:nt(t)},handled:!0,type:"instrument"}}),t.apply(this,n)}},e.prototype._wrapRAF=function(t){return function(n){return t.call(this,tn(n,{mechanism:{data:{function:"requestAnimationFrame",handler:nt(t)},handled:!0,type:"instrument"}}))}},e.prototype._wrapEventTarget=function(t){var n=$(),r=n[t]&&n[t].prototype;!r||!r.hasOwnProperty||!r.hasOwnProperty("addEventListener")||(oe(r,"addEventListener",function(i){return function(a,s,o){try{typeof s.handleEvent=="function"&&(s.handleEvent=tn(s.handleEvent.bind(s),{mechanism:{data:{function:"handleEvent",handler:nt(s),target:t},handled:!0,type:"instrument"}}))}catch{}return i.call(this,a,tn(s,{mechanism:{data:{function:"addEventListener",handler:nt(s),target:t},handled:!0,type:"instrument"}}),o)}}),oe(r,"removeEventListener",function(i){return function(a,s,o){var l,c=s;try{var m=(l=c)===null||l===void 0?void 0:l.__sentry_wrapped__;m&&i.call(this,a,m,o)}catch{}return i.call(this,a,c,o)}}))},e.prototype._wrapXHR=function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=this,a=["onload","onerror","onprogress","onreadystatechange"];return a.forEach(function(s){s in i&&typeof i[s]=="function"&&oe(i,s,function(o){var l={mechanism:{data:{function:s,handler:nt(o)},handled:!0,type:"instrument"}};return o.__sentry_original__&&(l.mechanism.data.handler=nt(o.__sentry_original__)),tn(o,l)})}),t.apply(this,n)}},e.id="TryCatch",e}(),_d=function(){function e(t){this.name=e.id,this._options=v({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},t)}return e.prototype.addSentryBreadcrumb=function(t){!this._options.sentry||le().addBreadcrumb({category:"sentry."+(t.type==="transaction"?"transaction":"event"),event_id:t.event_id,level:t.level,message:Et(t)},{event:t})},e.prototype.setupOnce=function(){var t=this;this._options.console&&it({callback:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t._consoleBreadcrumb.apply(t,z(n))},type:"console"}),this._options.dom&&it({callback:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t._domBreadcrumb.apply(t,z(n))},type:"dom"}),this._options.xhr&&it({callback:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t._xhrBreadcrumb.apply(t,z(n))},type:"xhr"}),this._options.fetch&&it({callback:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t._fetchBreadcrumb.apply(t,z(n))},type:"fetch"}),this._options.history&&it({callback:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t._historyBreadcrumb.apply(t,z(n))},type:"history"})},e.prototype._consoleBreadcrumb=function(t){var n={category:"console",data:{arguments:t.args,logger:"console"},level:Be.fromString(t.level),message:Ic(t.args," ")};if(t.level==="assert")if(t.args[0]===!1)n.message="Assertion failed: "+(Ic(t.args.slice(1)," ")||"console.assert"),n.data.arguments=t.args.slice(1);else return;le().addBreadcrumb(n,{input:t.args,level:t.level})},e.prototype._domBreadcrumb=function(t){var n,r=typeof this._options.dom=="object"?this._options.dom.serializeAttribute:void 0;typeof r=="string"&&(r=[r]);try{n=t.event.target?Wi(t.event.target,r):Wi(t.event,r)}catch{n="<unknown>"}n.length!==0&&le().addBreadcrumb({category:"ui."+t.name,message:n},{event:t.event,name:t.name,global:t.global})},e.prototype._xhrBreadcrumb=function(t){if(t.endTimestamp){if(t.xhr.__sentry_own_request__)return;var n=t.xhr.__sentry_xhr__||{},r=n.method,i=n.url,a=n.status_code,s=n.body;le().addBreadcrumb({category:"xhr",data:{method:r,url:i,status_code:a},type:"http"},{xhr:t.xhr,input:s});return}},e.prototype._fetchBreadcrumb=function(t){!t.endTimestamp||t.fetchData.url.match(/sentry_key/)&&t.fetchData.method==="POST"||(t.error?le().addBreadcrumb({category:"fetch",data:t.fetchData,level:Be.Error,type:"http"},{data:t.error,input:t.args}):le().addBreadcrumb({category:"fetch",data:v(v({},t.fetchData),{status_code:t.response.status}),type:"http"},{input:t.args,response:t.response}))},e.prototype._historyBreadcrumb=function(t){var n=$(),r=t.from,i=t.to,a=Xa(n.location.href),s=Xa(r),o=Xa(i);s.path||(s=a),a.protocol===o.protocol&&a.host===o.host&&(i=o.relative),a.protocol===s.protocol&&a.host===s.host&&(r=s.relative),le().addBreadcrumb({category:"navigation",data:{from:r,to:i}})},e.id="Breadcrumbs",e}(),Eh="cause",Oh=5,qh=function(){function e(t){t===void 0&&(t={}),this.name=e.id,this._key=t.key||Eh,this._limit=t.limit||Oh}return e.prototype.setupOnce=function(){ya(function(t,n){var r=le().getIntegration(e);if(r){var i=r._handler&&r._handler.bind(r);return typeof i=="function"?i(t,n):t}return t})},e.prototype._handler=function(t,n){if(!t.exception||!t.exception.values||!n||!_t(n.originalException,Error))return t;var r=this._walkErrorTree(n.originalException,this._key);return t.exception.values=z(r,t.exception.values),t},e.prototype._walkErrorTree=function(t,n,r){if(r===void 0&&(r=[]),!_t(t[n],Error)||r.length+1>=this._limit)return r;var i=Pn(t[n]),a=wd(i);return this._walkErrorTree(t[n],n,z([a],r))},e.id="LinkedErrors",e}(),Kt=$(),Dh=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(){ya(function(t){var n,r,i;if(le().getIntegration(e)){if(!Kt.navigator&&!Kt.location&&!Kt.document)return t;var a=((n=t.request)===null||n===void 0?void 0:n.url)||((r=Kt.location)===null||r===void 0?void 0:r.href),s=(Kt.document||{}).referrer,o=(Kt.navigator||{}).userAgent,l=v(v(v({},(i=t.request)===null||i===void 0?void 0:i.headers),s&&{Referer:s}),o&&{"User-Agent":o}),c=v(v({},a&&{url:a}),{headers:l});return v(v({},t),{request:c})}return t})},e.id="UserAgent",e}(),Mh=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(t,n){t(function(r){var i=n().getIntegration(e);if(i){try{if(i._shouldDropEvent(r,i._previousEvent))return C.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{return i._previousEvent=r}return i._previousEvent=r}return r})},e.prototype._shouldDropEvent=function(t,n){return n?!!(this._isSameMessageEvent(t,n)||this._isSameExceptionEvent(t,n)):!1},e.prototype._isSameMessageEvent=function(t,n){var r=t.message,i=n.message;return!(!r&&!i||r&&!i||!r&&i||r!==i||!this._isSameFingerprint(t,n)||!this._isSameStacktrace(t,n))},e.prototype._getFramesFromEvent=function(t){var n=t.exception;if(n)try{return n.values[0].stacktrace.frames}catch{return}else if(t.stacktrace)return t.stacktrace.frames},e.prototype._isSameStacktrace=function(t,n){var r=this._getFramesFromEvent(t),i=this._getFramesFromEvent(n);if(!r&&!i)return!0;if(r&&!i||!r&&i||(r=r,i=i,i.length!==r.length))return!1;for(var a=0;a<i.length;a++){var s=i[a],o=r[a];if(s.filename!==o.filename||s.lineno!==o.lineno||s.colno!==o.colno||s.function!==o.function)return!1}return!0},e.prototype._getExceptionFromEvent=function(t){return t.exception&&t.exception.values&&t.exception.values[0]},e.prototype._isSameExceptionEvent=function(t,n){var r=this._getExceptionFromEvent(n),i=this._getExceptionFromEvent(t);return!(!r||!i||r.type!==i.type||r.value!==i.value||!this._isSameFingerprint(t,n)||!this._isSameStacktrace(t,n))},e.prototype._isSameFingerprint=function(t,n){var r=t.fingerprint,i=n.fingerprint;if(!r&&!i)return!0;if(r&&!i||!r&&i)return!1;r=r,i=i;try{return r.join("")===i.join("")}catch{return!1}},e.id="Dedupe",e}(),jh=function(e){$r(t,e);function t(n){n===void 0&&(n={});var r=this;return n._metadata=n._metadata||{},n._metadata.sdk=n._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:Qi}],version:Qi},r=e.call(this,_h,n)||this,r}return t.prototype.showReportDialog=function(n){n===void 0&&(n={});var r=$().document;if(!!r){if(!this._isEnabled()){C.error("Trying to call showReportDialog with Sentry Client disabled");return}Rh(v(v({},n),{dsn:n.dsn||this.getDsn()}))}},t.prototype._prepareEvent=function(n,r,i){return n.platform=n.platform||"javascript",e.prototype._prepareEvent.call(this,n,r,i)},t.prototype._sendEvent=function(n){var r=this.getIntegration(_d);r&&r.addSentryBreadcrumb(n),e.prototype._sendEvent.call(this,n)},t}(eh),Ch=[new oh,new ah,new Th,new _d,new bh,new qh,new Mh,new Dh];function Ih(e){if(e===void 0&&(e={}),e.defaultIntegrations===void 0&&(e.defaultIntegrations=Ch),e.release===void 0){var t=$();t.SENTRY_RELEASE&&t.SENTRY_RELEASE.id&&(e.release=t.SENTRY_RELEASE.id)}e.autoSessionTracking===void 0&&(e.autoSessionTracking=!0),e.sendClientReports===void 0&&(e.sendClientReports=!0),ih(jh,e),e.autoSessionTracking&&Fh()}function Fh(){var e=$(),t=e.document;if(typeof t>"u"){C.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}var n=le();typeof n.startSession!="function"||typeof n.captureSession!="function"||(n.startSession({ignoreDuration:!0}),n.captureSession(),it({callback:function(r){var i=r.from,a=r.to;i===void 0||i===a||(n.startSession({ignoreDuration:!0}),n.captureSession())},type:"history"}))}function Lh(e){e._metadata=e._metadata||{},e._metadata.sdk=e._metadata.sdk||{name:"sentry.javascript.react",packages:[{name:"npm:@sentry/react",version:Qi}],version:Qi},Ih(e)}const Ah={}.VITE_SENTRY_DSN;Lh({dsn:Ah});Eu.exports.render(b(Ad.StrictMode,{children:b(Fm,{children:b(ug,{})})}),document.getElementById("root"))});export default Uh();
