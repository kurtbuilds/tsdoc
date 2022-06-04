var um=Object.defineProperty;var dm=(e,t,n)=>t in e?um(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var pm=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var rt=(e,t,n)=>(dm(e,typeof t!="symbol"?t+"":t,n),n);var Gk=pm((Jk,lm)=>{const mm=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};mm();var q={exports:{}},I={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ql=Object.getOwnPropertySymbols,fm=Object.prototype.hasOwnProperty,gm=Object.prototype.propertyIsEnumerable;function ym(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function hm(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Ru=hm()?Object.assign:function(e,t){for(var n,r=ym(e),i,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var s in n)fm.call(n,s)&&(r[s]=n[s]);if(ql){i=ql(n);for(var o=0;o<i.length;o++)gm.call(n,i[o])&&(r[i[o]]=n[i[o]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Ru,In=60103,bu=60106;I.Fragment=60107;I.StrictMode=60108;I.Profiler=60114;var Nu=60109,Eu=60110,Tu=60112;I.Suspense=60113;var Ou=60115,qu=60116;if(typeof Symbol=="function"&&Symbol.for){var qe=Symbol.for;In=qe("react.element"),bu=qe("react.portal"),I.Fragment=qe("react.fragment"),I.StrictMode=qe("react.strict_mode"),I.Profiler=qe("react.profiler"),Nu=qe("react.provider"),Eu=qe("react.context"),Tu=qe("react.forward_ref"),I.Suspense=qe("react.suspense"),Ou=qe("react.memo"),qu=qe("react.lazy")}var Dl=typeof Symbol=="function"&&Symbol.iterator;function km(e){return e===null||typeof e!="object"?null:(e=Dl&&e[Dl]||e["@@iterator"],typeof e=="function"?e:null)}function Hr(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju={};function Fn(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Du}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Hr(85));this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mu(){}Mu.prototype=Fn.prototype;function ko(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Du}var vo=ko.prototype=new Mu;vo.constructor=ko;ho(vo,Fn.prototype);vo.isPureReactComponent=!0;var wo={current:null},Cu=Object.prototype.hasOwnProperty,Iu={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var r,i={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Cu.call(t,r)&&!Iu.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:In,type:e,key:a,ref:s,props:i,_owner:wo.current}}function vm(e,t){return{$$typeof:In,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Po(e){return typeof e=="object"&&e!==null&&e.$$typeof===In}function wm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jl=/\/+/g;function Da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wm(""+e.key):t.toString(36)}function vi(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case In:case bu:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Da(s,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(jl,"$&/")+"/"),vi(i,t,n,"",function(c){return c})):i!=null&&(Po(i)&&(i=vm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(jl,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Array.isArray(e))for(var o=0;o<e.length;o++){a=e[o];var l=r+Da(a,o);s+=vi(a,t,n,l,i)}else if(l=km(e),typeof l=="function")for(e=l.call(e),o=0;!(a=e.next()).done;)a=a.value,l=r+Da(a,o++),s+=vi(a,t,n,l,i);else if(a==="object")throw t=""+e,Error(Hr(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function ti(e,t,n){if(e==null)return e;var r=[],i=0;return vi(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Pm(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var Lu={current:null};function tt(){var e=Lu.current;if(e===null)throw Error(Hr(321));return e}var _m={ReactCurrentDispatcher:Lu,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:wo,IsSomeRendererActing:{current:!1},assign:ho};I.Children={map:ti,forEach:function(e,t,n){ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ti(e,function(){t++}),t},toArray:function(e){return ti(e,function(t){return t})||[]},only:function(e){if(!Po(e))throw Error(Hr(143));return e}};I.Component=Fn;I.PureComponent=ko;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;I.cloneElement=function(e,t,n){if(e==null)throw Error(Hr(267,e));var r=ho({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=wo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)Cu.call(t,l)&&!Iu.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:In,type:e.type,key:i,ref:a,props:r,_owner:s}};I.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Eu,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Nu,_context:e},e.Consumer=e};I.createElement=Fu;I.createFactory=function(e){var t=Fu.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Tu,render:e}};I.isValidElement=Po;I.lazy=function(e){return{$$typeof:qu,_payload:{_status:-1,_result:e},_init:Pm}};I.memo=function(e,t){return{$$typeof:Ou,type:e,compare:t===void 0?null:t}};I.useCallback=function(e,t){return tt().useCallback(e,t)};I.useContext=function(e,t){return tt().useContext(e,t)};I.useDebugValue=function(){};I.useEffect=function(e,t){return tt().useEffect(e,t)};I.useImperativeHandle=function(e,t,n){return tt().useImperativeHandle(e,t,n)};I.useLayoutEffect=function(e,t){return tt().useLayoutEffect(e,t)};I.useMemo=function(e,t){return tt().useMemo(e,t)};I.useReducer=function(e,t,n){return tt().useReducer(e,t,n)};I.useRef=function(e){return tt().useRef(e)};I.useState=function(e){return tt().useState(e)};I.version="17.0.2";q.exports=I;var Sm=q.exports,_o={};Object.defineProperty(_o,"__esModule",{value:!0});var So=_o.useFormState=void 0;const ja=q.exports;function Ma(e,t,n){return e={...e},e[t]=n,e}function xm(e){let[t,n]=(0,ja.useState)(e),[r,i]=(0,ja.useState)(Object.fromEntries(Object.entries(e).map(([c,m])=>[c,null]))),[a,s]=(0,ja.useState)(null),o=Object.fromEntries(Object.entries(e).map(([c,m])=>["set_"+c,g=>{i(Ma(r,c,null)),n(Ma(t,c,g.target.value))}])),l=Object.fromEntries(Object.entries(e).map(([c,m])=>["set_"+c+"_errors",g=>{i(Ma(r,c,Array.isArray(g)?g:[g]))}]));return{...t,...o,...l,set_form_errors:c=>s(Array.isArray(c)?c.map(m=>({type:"danger",message:m})):[{type:"danger",message:c}]),set_form_errors_from_gql:c=>s(c.errors.map(m=>({type:"danger",message:m.message}))),set_form_success:c=>s([{type:"success",message:c}]),errors:r,form_alerts:a,form_data:t}}So=_o.useFormState=xm;var Rm="/query-registry/2.5.0/assets/icon.9ba35879.png",xo={exports:{}},Vr={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=q.exports,Au=60103;Vr.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Ml=Symbol.for;Au=Ml("react.element"),Vr.Fragment=Ml("react.fragment")}var Nm=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Em=Object.prototype.hasOwnProperty,Tm={key:!0,ref:!0,__self:!0,__source:!0};function Uu(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Em.call(t,r)&&!Tm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Au,type:e,key:a,ref:s,props:i,_owner:Nm.current}}Vr.jsx=Uu;Vr.jsxs=Uu;xo.exports=Vr;const y=xo.exports.jsx,F=xo.exports.jsxs;function zu(){return F("div",{className:"h-12 text-primary text-2xl font-bold flex content-between items-center rounded-xl mx-auto",children:[y("img",{src:Rm,className:"w-12 mr-2",alt:""}),"Template"]})}const Om=(e,t)=>e===t,qm=()=>{const e=!!(typeof window<"u"&&window.document&&window.document.createElement),t=typeof navigator<"u"&&navigator.product==="ReactNative";return e||t},Dm=qm();let jm=!1;const Mm=()=>Dm&&!jm,Cm=e=>e,Im=(e,t=Cm,n=Om)=>{if(!(e._subscribers instanceof Set))throw new Error("Invalid entity.");const[r,i]=q.exports.useState(t(e._value)),a=q.exports.useCallback(o=>{const l=t(o);!n(r,l)&&i(l)},[t,n,r]);return(Mm()?q.exports.useLayoutEffect:q.exports.useEffect)(()=>e._subscribe(a),[a,e]),a(e._value),r},Fm=new Set,Lm=(e,t=[])=>{if(e===void 0)throw new Error("Entity requires an initial value.");if(!(t instanceof Array))throw new Error("Invalid plug-ins array.");const n={_value:void 0,_subscribers:new Set};return n._subscribe=Bm(n),n.get=()=>n._value,n.set=Am(n),n.init=Um(n,e),n.use=zm(n),$m(n,t),n.init(),Fm.add(n),n},Am=e=>(t,...n)=>{typeof t=="function"&&(t=t(e._value,...n)),e._value=t,e._subscribers.forEach(r=>r(e._value))},Um=(e,t)=>t&&typeof t.then=="function"?()=>{t.then(n=>setTimeout(()=>e.set(n)))}:()=>{e._value=t},zm=e=>(...t)=>Im(e,...t),Bm=e=>t=>(e._subscribers.add(t),()=>{e._subscribers.delete(t)}),$m=(e,t)=>{t.forEach(n=>{if(typeof n!="object")throw new Error("Invalid plug-in");const r=i=>{if(typeof n[i]=="function"){const a=n[i](e[i],e);if(typeof a!="function")throw new Error(`Invalid override for '${i}' in plug-in.`);e[i]=a}};r("init"),r("set")})};var Bu=Lm;const $u=Bu(null);function gs(e){$u.set(e)}const ca=`
uuid
email
`;function qi(){return qi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}var Ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ct||(Ct={}));var Cl=function(e){return e},Il="beforeunload",Hm="popstate";function Vm(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function a(){var _=r.location,N=_.pathname,E=_.search,L=_.hash,pe=i.state||{};return[pe.idx,Cl({pathname:N,search:E,hash:L,state:pe.usr||null,key:pe.key||"default"})]}var s=null;function o(){if(s)v.call(s),s=null;else{var _=Ct.Pop,N=a(),E=N[0],L=N[1];if(v.length){if(E!=null){var pe=m-E;pe&&(s={action:_,location:L,retry:function(){O(pe*-1)}},O(pe))}}else d(_)}}r.addEventListener(Hm,o);var l=Ct.Pop,c=a(),m=c[0],g=c[1],f=Ll(),v=Ll();m==null&&(m=0,i.replaceState(qi({},i.state,{idx:m}),""));function S(_){return typeof _=="string"?_:ys(_)}function R(_,N){return N===void 0&&(N=null),Cl(qi({pathname:g.pathname,hash:"",search:""},typeof _=="string"?Qt(_):_,{state:N,key:Gm()}))}function p(_,N){return[{usr:_.state,key:_.key,idx:N},S(_)]}function u(_,N,E){return!v.length||(v.call({action:_,location:N,retry:E}),!1)}function d(_){l=_;var N=a();m=N[0],g=N[1],f.call({action:l,location:g})}function h(_,N){var E=Ct.Push,L=R(_,N);function pe(){h(_,N)}if(u(E,L,pe)){var X=p(L,m+1),Q=X[0],We=X[1];try{i.pushState(Q,"",We)}catch{r.location.assign(We)}d(E)}}function k(_,N){var E=Ct.Replace,L=R(_,N);function pe(){k(_,N)}if(u(E,L,pe)){var X=p(L,m),Q=X[0],We=X[1];i.replaceState(Q,"",We),d(E)}}function O(_){i.go(_)}var x={get action(){return l},get location(){return g},createHref:S,push:h,replace:k,go:O,back:function(){O(-1)},forward:function(){O(1)},listen:function(N){return f.push(N)},block:function(N){var E=v.push(N);return v.length===1&&r.addEventListener(Il,Fl),function(){E(),v.length||r.removeEventListener(Il,Fl)}}};return x}function Fl(e){e.preventDefault(),e.returnValue=""}function Ll(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function Gm(){return Math.random().toString(36).substr(2,8)}function ys(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,a=e.hash,s=a===void 0?"":a;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Qt(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ro=q.exports.createContext(null),bo=q.exports.createContext(null),Gr=q.exports.createContext({outlet:null,matches:[]});function Ae(e,t){if(!e)throw new Error(t)}function Wm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Qt(t):t,i=Gu(r.pathname||"/",n);if(i==null)return null;let a=Hu(e);Jm(a);let s=null;for(let o=0;s==null&&o<a.length;++o)s=rf(a[o],i);return s}function Hu(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,a)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(r)||Ae(!1),s.relativePath=s.relativePath.slice(r.length));let o=mt([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(i.index===!0&&Ae(!1),Hu(i.children,t,l,o)),!(i.path==null&&!i.index)&&t.push({path:o,score:tf(o,i.index),routesMeta:l})}),t}function Jm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ym=/^:\w+$/,Qm=3,Km=2,Xm=1,Zm=10,ef=-2,Al=e=>e==="*";function tf(e,t){let n=e.split("/"),r=n.length;return n.some(Al)&&(r+=ef),t&&(r+=Km),n.filter(i=>!Al(i)).reduce((i,a)=>i+(Ym.test(a)?Qm:a===""?Xm:Zm),r)}function nf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function rf(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let s=0;s<n.length;++s){let o=n[s],l=s===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",m=af({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},c);if(!m)return null;Object.assign(r,m.params);let g=o.route;a.push({params:r,pathname:mt([i,m.pathname]),pathnameBase:Wu(mt([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=mt([i,m.pathnameBase]))}return a}function af(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=sf(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((c,m,g)=>{if(m==="*"){let f=o[g]||"";s=a.slice(0,a.length-f.length).replace(/(.)\/+$/,"$1")}return c[m]=of(o[g]||""),c},{}),pathname:a,pathnameBase:s,pattern:e}}function sf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,o)=>(r.push(o),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function of(e,t){try{return decodeURIComponent(e)}catch{return e}}function lf(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Qt(e):e;return{pathname:n?n.startsWith("/")?n:cf(n,t):t,search:df(r),hash:pf(i)}}function cf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vu(e,t,n){let r=typeof e=="string"?Qt(e):e,i=e===""||r.pathname===""?"/":r.pathname,a;if(i==null)a=n;else{let o=t.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),o-=1;r.pathname=l.join("/")}a=o>=0?t[o]:"/"}let s=lf(r,a);return i&&i!=="/"&&i.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function uf(e){return e===""||e.pathname===""?"/":typeof e=="string"?Qt(e).pathname:e.pathname}function Gu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const mt=e=>e.join("/").replace(/\/\/+/g,"/"),Wu=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),df=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mf(e){Ln()||Ae(!1);let{basename:t,navigator:n}=q.exports.useContext(Ro),{hash:r,pathname:i,search:a}=Ju(e),s=i;if(t!=="/"){let o=uf(e),l=o!=null&&o.endsWith("/");s=i==="/"?t+(l?"/":""):mt([t,i])}return n.createHref({pathname:s,search:a,hash:r})}function Ln(){return q.exports.useContext(bo)!=null}function Wr(){return Ln()||Ae(!1),q.exports.useContext(bo).location}function An(){Ln()||Ae(!1);let{basename:e,navigator:t}=q.exports.useContext(Ro),{matches:n}=q.exports.useContext(Gr),{pathname:r}=Wr(),i=JSON.stringify(n.map(o=>o.pathnameBase)),a=q.exports.useRef(!1);return q.exports.useEffect(()=>{a.current=!0}),q.exports.useCallback(function(o,l){if(l===void 0&&(l={}),!a.current)return;if(typeof o=="number"){t.go(o);return}let c=Vu(o,JSON.parse(i),r);e!=="/"&&(c.pathname=mt([e,c.pathname])),(l.replace?t.replace:t.push)(c,l.state)},[e,t,i,r])}function Jr(){let{matches:e}=q.exports.useContext(Gr),t=e[e.length-1];return t?t.params:{}}function Ju(e){let{matches:t}=q.exports.useContext(Gr),{pathname:n}=Wr(),r=JSON.stringify(t.map(i=>i.pathnameBase));return q.exports.useMemo(()=>Vu(e,JSON.parse(r),n),[e,r,n])}function ff(e,t){Ln()||Ae(!1);let{matches:n}=q.exports.useContext(Gr),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let a=r?r.pathnameBase:"/";r&&r.route;let s=Wr(),o;if(t){var l;let f=typeof t=="string"?Qt(t):t;a==="/"||((l=f.pathname)==null?void 0:l.startsWith(a))||Ae(!1),o=f}else o=s;let c=o.pathname||"/",m=a==="/"?c:c.slice(a.length)||"/",g=Wm(e,{pathname:m});return gf(g&&g.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:mt([a,f.pathname]),pathnameBase:f.pathnameBase==="/"?a:mt([a,f.pathnameBase])})),n)}function gf(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>q.exports.createElement(Gr.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function hs(e){let{to:t,replace:n,state:r}=e;Ln()||Ae(!1);let i=An();return q.exports.useEffect(()=>{i(t,{replace:n,state:r})}),null}function De(e){Ae(!1)}function yf(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ct.Pop,navigator:a,static:s=!1}=e;Ln()&&Ae(!1);let o=Wu(t),l=q.exports.useMemo(()=>({basename:o,navigator:a,static:s}),[o,a,s]);typeof r=="string"&&(r=Qt(r));let{pathname:c="/",search:m="",hash:g="",state:f=null,key:v="default"}=r,S=q.exports.useMemo(()=>{let R=Gu(c,o);return R==null?null:{pathname:R,search:m,hash:g,state:f,key:v}},[o,c,m,g,f,v]);return S==null?null:q.exports.createElement(Ro.Provider,{value:l},q.exports.createElement(bo.Provider,{children:n,value:{location:S,navigationType:i}}))}function hf(e){let{children:t,location:n}=e;return ff(ks(t),n)}function ks(e){let t=[];return q.exports.Children.forEach(e,n=>{if(!q.exports.isValidElement(n))return;if(n.type===q.exports.Fragment){t.push.apply(t,ks(n.props.children));return}n.type!==De&&Ae(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=ks(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}function kf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const vf=["onClick","reloadDocument","replace","state","target","to"];function wf(e){let{basename:t,children:n,window:r}=e,i=q.exports.useRef();i.current==null&&(i.current=Vm({window:r}));let a=i.current,[s,o]=q.exports.useState({action:a.action,location:a.location});return q.exports.useLayoutEffect(()=>a.listen(o),[a]),q.exports.createElement(yf,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}function Pf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const _t=q.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:a=!1,state:s,target:o,to:l}=t,c=kf(t,vf),m=mf(l),g=_f(l,{replace:a,state:s,target:o});function f(v){r&&r(v),!v.defaultPrevented&&!i&&g(v)}return q.exports.createElement("a",vs({},c,{href:m,onClick:f,ref:n,target:o}))});function _f(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,a=An(),s=Wr(),o=Ju(e);return q.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!Pf(l)){l.preventDefault();let c=!!r||ys(s)===ys(o);a(e,{replace:c,state:i})}},[s,a,o,r,i,n,e])}function Yu(e){const t=An();return F("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center pb-12 sm:px-6 lg:px-8 w-full",children:[y("div",{className:"flex flex-col items-center justify-center w-full my-8 text-blue-300",children:y("button",{onClick:()=>t(-1),children:"Back"})}),e.logo,y("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:y("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:e.title})}),y("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:y("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:e.children})}),y("div",{className:"mt-12"})]})}function Di(e){return F("div",{className:"",children:[y("label",{htmlFor:e.name,className:"block text-sm font-medium text-gray-700",children:e.label}),y("div",{className:"mt-1",children:y("input",{tabIndex:e.tabIndex,type:e.type,name:e.name,id:e.name,autoComplete:e.autocomplete,value:e.value,required:e.required,placeholder:e.placeholder,onChange:e.onChange,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})})]})}var ct={},Pe={};Object.defineProperty(Pe,"__esModule",{value:!0});Pe.Serr=Pe.Maybe=Pe.Err=Pe.Ok=Pe.Result=void 0;class we{constructor(t){rt(this,"result");this.result=t}static value(t){return new we({type:"value",value:t})}static error(t){return new we({type:"error",error:t})}unwrap(){switch(this.result.type){case"value":return this.result.value;case"error":throw this.result.error}}unwrap_err(){switch(this.result.type){case"error":return this.result.error;case"value":throw new Error("Tried to unwrap_err on result, but not an error.")}}map(t){switch(this.result.type){case"value":return new we({type:"value",value:t(this.result.value)});case"error":return new we(this.result)}}async amap(t){switch(this.result.type){case"value":return new we({type:"value",value:await t(this.result.value)});case"error":return new we(this.result)}}unwrap_or(t){switch(this.result.type){case"value":return this.result.value;case"error":return t}}is_ok(){return this.result.type==="value"}is_err(){return this.result.type==="error"}map_err(t){switch(this.result.type){case"value":return new we(this.result);case"error":return new we({type:"error",error:t(this.result.error)})}}}Pe.Result=we;function Qu(e){return we.value(e)}Pe.Ok=Qu;function Ku(e){return we.error(e)}Pe.Err=Ku;function Sf(e){return e==null?Ku(new Error("Not found.")):Qu(e)}Pe.Maybe=Sf;function xf(e){return we.error(new Error(e))}Pe.Serr=xf;var Ht={};Object.defineProperty(Ht,"__esModule",{value:!0});Ht.GQLErrorGroup=Ht.GQLError=void 0;class ws extends Error{constructor(t){super(t.message)}}Ht.GQLError=ws;class ji extends Error{constructor(n){super(n.map(r=>r.message).join(`
`));rt(this,"errors");this.errors=n}static from_gql_errors(n){return new ji(n.map(r=>new ws(r)))}static from_string(n){return new ji([new ws({message:n})])}}Ht.GQLErrorGroup=ji;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.unimplemented=e.infallible=e.NULL_UUID=e.GQLErrorGroup=e.Maybe=e.Serr=e.Result=e.Ok=e.Err=e.gql=e.result=void 0,e.result=Pe,e.gql=Ht;var t=Pe;Object.defineProperty(e,"Err",{enumerable:!0,get:function(){return t.Err}}),Object.defineProperty(e,"Ok",{enumerable:!0,get:function(){return t.Ok}}),Object.defineProperty(e,"Result",{enumerable:!0,get:function(){return t.Result}}),Object.defineProperty(e,"Serr",{enumerable:!0,get:function(){return t.Serr}}),Object.defineProperty(e,"Maybe",{enumerable:!0,get:function(){return t.Maybe}});var n=Ht;Object.defineProperty(e,"GQLErrorGroup",{enumerable:!0,get:function(){return n.GQLErrorGroup}}),e.NULL_UUID="00000000-0000-0000-0000-000000000000";function r(a){throw new Error("Reached infallible but that shouldn't be possible.")}e.infallible=r;function i(){throw new Error("This codepath has not been implemented.")}e.unimplemented=i})(ct);function Rf(e){switch(e){case"danger":return"text-red-600";case"info":return"text-blue-300";case"success":return"text-green-500";case"warning":return"text-yellow-800";default:ct.infallible(e)}}function bf({alerts:e,className:t="mx-4"}){return e?.length?y("div",{className:t,children:e.map(n=>y("div",{className:Rf(n.type),dangerouslySetInnerHTML:n.html?{__html:n.html}:void 0,children:n.html?null:n.message},n.message))}):null}function Xu({className:e,children:t,alerts:n,onSubmit:r}){return F("form",{className:e,onSubmit:r,children:[y(bf,{alerts:n,className:"text-sm"}),t]})}/*! *****************************************************************************
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
***************************************************************************** */var Ps=function(e,t){return Ps=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Ps(e,t)};function Yr(e,t){Ps(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var w=function(){return w=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},w.apply(this,arguments)};function Nf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Nr(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Er(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(o){s={error:o}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return a}function B(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Er(arguments[t]));return e}var Xe;(function(e){e.Ok="ok",e.Exited="exited",e.Crashed="crashed",e.Abnormal="abnormal"})(Xe||(Xe={}));var Ul;(function(e){e.Ok="ok",e.Errored="errored",e.Crashed="crashed"})(Ul||(Ul={}));var Ve;(function(e){e.Fatal="fatal",e.Error="error",e.Warning="warning",e.Log="log",e.Info="info",e.Debug="debug",e.Critical="critical"})(Ve||(Ve={}));(function(e){function t(n){switch(n){case"debug":return e.Debug;case"info":return e.Info;case"warn":case"warning":return e.Warning;case"error":return e.Error;case"fatal":return e.Fatal;case"critical":return e.Critical;case"log":default:return e.Log}}e.fromString=t})(Ve||(Ve={}));var Vt;(function(e){e.Unknown="unknown",e.Skipped="skipped",e.Success="success",e.RateLimit="rate_limit",e.Invalid="invalid",e.Failed="failed"})(Vt||(Vt={}));(function(e){function t(n){return n>=200&&n<300?e.Success:n===429?e.RateLimit:n>=400&&n<500?e.Invalid:n>=500?e.Failed:e.Unknown}e.fromHttpCode=t})(Vt||(Vt={}));var Fe;(function(e){e.BeforeSend="before_send",e.EventProcessor="event_processor",e.NetworkError="network_error",e.QueueOverflow="queue_overflow",e.RateLimitBackoff="ratelimit_backoff",e.SampleRate="sample_rate"})(Fe||(Fe={}));function Ef(e){e.then(null,function(t){console.error(t)})}function No(){return Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"}function Tf(e,t){return e.require(t)}var Of={};function V(){return No()?global:typeof window<"u"?window:typeof self<"u"?self:Of}function Zu(e){switch(Object.prototype.toString.call(e)){case"[object Error]":return!0;case"[object Exception]":return!0;case"[object DOMException]":return!0;default:return St(e,Error)}}function ed(e){return Object.prototype.toString.call(e)==="[object ErrorEvent]"}function zl(e){return Object.prototype.toString.call(e)==="[object DOMError]"}function qf(e){return Object.prototype.toString.call(e)==="[object DOMException]"}function Tn(e){return Object.prototype.toString.call(e)==="[object String]"}function ua(e){return e===null||typeof e!="object"&&typeof e!="function"}function On(e){return Object.prototype.toString.call(e)==="[object Object]"}function Eo(e){return typeof Event<"u"&&St(e,Event)}function Bl(e){return typeof Element<"u"&&St(e,Element)}function Df(e){return Object.prototype.toString.call(e)==="[object RegExp]"}function To(e){return Boolean(e&&e.then&&typeof e.then=="function")}function jf(e){return On(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}function St(e,t){try{return e instanceof t}catch{return!1}}function Mi(e,t){try{for(var n=e,r=5,i=80,a=[],s=0,o=0,l=" > ",c=l.length,m=void 0;n&&s++<r&&(m=Mf(n,t),!(m==="html"||s>1&&o+a.length*c+m.length>=i));)a.push(m),o+=m.length,n=n.parentNode;return a.reverse().join(l)}catch{return"<unknown>"}}function Mf(e,t){var n,r,i=e,a=[],s,o,l,c,m;if(!i||!i.tagName)return"";a.push(i.tagName.toLowerCase());var g=!((n=t)===null||n===void 0)&&n.length?t.filter(function(v){return i.getAttribute(v)}).map(function(v){return[v,i.getAttribute(v)]}):null;if(!((r=g)===null||r===void 0)&&r.length)g.forEach(function(v){a.push("["+v[0]+'="'+v[1]+'"]')});else if(i.id&&a.push("#"+i.id),s=i.className,s&&Tn(s))for(o=s.split(/\s+/),m=0;m<o.length;m++)a.push("."+o[m]);var f=["type","name","title","alt"];for(m=0;m<f.length;m++)l=f[m],c=i.getAttribute(l),c&&a.push("["+l+'="'+c+'"]');return a.join("")}function Cf(){var e=V();try{return e.document.location.href}catch{return""}}var If=Object.setPrototypeOf||({__proto__:[]}instanceof Array?Ff:Lf);function Ff(e,t){return e.__proto__=t,e}function Lf(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(e,n)||(e[n]=t[n]);return e}var K=function(e){Yr(t,e);function t(n){var r=this.constructor,i=e.call(this,n)||this;return i.message=n,i.name=r.prototype.constructor.name,If(i,r.prototype),i}return t}(Error),Af=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,Wn="Invalid Dsn",td=function(){function e(t){typeof t=="string"?this._fromString(t):this._fromComponents(t),this._validate()}return e.prototype.toString=function(t){t===void 0&&(t=!1);var n=this,r=n.host,i=n.path,a=n.pass,s=n.port,o=n.projectId,l=n.protocol,c=n.publicKey;return l+"://"+c+(t&&a?":"+a:"")+("@"+r+(s?":"+s:"")+"/"+(i&&i+"/")+o)},e.prototype._fromString=function(t){var n=Af.exec(t);if(!n)throw new K(Wn);var r=Er(n.slice(1),6),i=r[0],a=r[1],s=r[2],o=s===void 0?"":s,l=r[3],c=r[4],m=c===void 0?"":c,g=r[5],f="",v=g,S=v.split("/");if(S.length>1&&(f=S.slice(0,-1).join("/"),v=S.pop()),v){var R=v.match(/^\d+/);R&&(v=R[0])}this._fromComponents({host:l,pass:o,path:f,projectId:v,port:m,protocol:i,publicKey:a})},e.prototype._fromComponents=function(t){"user"in t&&!("publicKey"in t)&&(t.publicKey=t.user),this.user=t.publicKey||"",this.protocol=t.protocol,this.publicKey=t.publicKey||"",this.pass=t.pass||"",this.host=t.host,this.port=t.port||"",this.path=t.path||"",this.projectId=t.projectId},e.prototype._validate=function(){var t=this;if(["protocol","publicKey","host","projectId"].forEach(function(n){if(!t[n])throw new K(Wn+": "+n+" missing")}),!this.projectId.match(/^\d+$/))throw new K(Wn+": Invalid projectId "+this.projectId);if(this.protocol!=="http"&&this.protocol!=="https")throw new K(Wn+": Invalid protocol "+this.protocol);if(this.port&&isNaN(parseInt(this.port,10)))throw new K(Wn+": Invalid port "+this.port)},e}(),zt=V(),Ca="Sentry Logger ";function wi(e){var t=V(),n=["debug","info","warn","error","log","assert"];if(!("console"in t))return e();var r=t.console,i={};n.forEach(function(s){s in t.console&&r[s].__sentry_original__&&(i[s]=r[s],r[s]=r[s].__sentry_original__)});var a=e();return Object.keys(i).forEach(function(s){r[s]=i[s]}),a}var Uf=function(){function e(){this._enabled=!1}return e.prototype.disable=function(){this._enabled=!1},e.prototype.enable=function(){this._enabled=!0},e.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];!this._enabled||wi(function(){zt.console.log(Ca+"[Log]: "+t.join(" "))})},e.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];!this._enabled||wi(function(){zt.console.warn(Ca+"[Warn]: "+t.join(" "))})},e.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];!this._enabled||wi(function(){zt.console.error(Ca+"[Error]: "+t.join(" "))})},e}();zt.__SENTRY__=zt.__SENTRY__||{};var C=zt.__SENTRY__.logger||(zt.__SENTRY__.logger=new Uf),zf=function(){function e(){this._hasWeakSet=typeof WeakSet=="function",this._inner=this._hasWeakSet?new WeakSet:[]}return e.prototype.memoize=function(t){if(this._hasWeakSet)return this._inner.has(t)?!0:(this._inner.add(t),!1);for(var n=0;n<this._inner.length;n++){var r=this._inner[n];if(r===t)return!0}return this._inner.push(t),!1},e.prototype.unmemoize=function(t){if(this._hasWeakSet)this._inner.delete(t);else for(var n=0;n<this._inner.length;n++)if(this._inner[n]===t){this._inner.splice(n,1);break}},e}(),Ia="<anonymous>";function it(e){try{return!e||typeof e!="function"?Ia:e.name||Ia}catch{return Ia}}function pr(e,t){return t===void 0&&(t=0),typeof e!="string"||t===0||e.length<=t?e:e.substr(0,t)+"..."}function $l(e,t){if(!Array.isArray(e))return"";for(var n=[],r=0;r<e.length;r++){var i=e[r];try{n.push(String(i))}catch{n.push("[value cannot be serialized]")}}return n.join(t)}function Fa(e,t){return Tn(e)?Df(t)?t.test(e):typeof t=="string"?e.indexOf(t)!==-1:!1:!1}function oe(e,t,n){if(t in e){var r=e[t],i=n(r);if(typeof i=="function")try{i.prototype=i.prototype||{},Object.defineProperties(i,{__sentry_original__:{enumerable:!1,value:r}})}catch{}e[t]=i}}function Bf(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}function nd(e){if(Zu(e)){var t=e,n={message:t.message,name:t.name,stack:t.stack};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}if(Eo(e)){var i=e,a={};a.type=i.type;try{a.target=Bl(i.target)?Mi(i.target):Object.prototype.toString.call(i.target)}catch{a.target="<unknown>"}try{a.currentTarget=Bl(i.currentTarget)?Mi(i.currentTarget):Object.prototype.toString.call(i.currentTarget)}catch{a.currentTarget="<unknown>"}typeof CustomEvent<"u"&&St(e,CustomEvent)&&(a.detail=i.detail);for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(a[s]=i[s]);return a}return e}function $f(e){return~-encodeURI(e).split(/%..|./).length}function Hf(e){return $f(JSON.stringify(e))}function rd(e,t,n){t===void 0&&(t=3),n===void 0&&(n=100*1024);var r=an(e,t);return Hf(r)>n?rd(e,t-1,n):r}function Vf(e){var t=Object.prototype.toString.call(e);if(typeof e=="string")return e;if(t==="[object Object]")return"[Object]";if(t==="[object Array]")return"[Array]";var n=id(e);return ua(n)?n:t}function id(e,t){return t==="domain"&&e&&typeof e=="object"&&e._events?"[Domain]":t==="domainEmitter"?"[DomainEmitter]":typeof global<"u"&&e===global?"[Global]":typeof window<"u"&&e===window?"[Window]":typeof document<"u"&&e===document?"[Document]":jf(e)?"[SyntheticEvent]":typeof e=="number"&&e!==e?"[NaN]":e===void 0?"[undefined]":typeof e=="function"?"[Function: "+it(e)+"]":typeof e=="symbol"?"["+String(e)+"]":typeof e=="bigint"?"[BigInt: "+String(e)+"]":e}function ad(e,t,n,r){if(n===void 0&&(n=1/0),r===void 0&&(r=new zf),n===0)return Vf(t);if(t!=null&&typeof t.toJSON=="function")return t.toJSON();var i=id(t,e);if(ua(i))return i;var a=nd(t),s=Array.isArray(t)?[]:{};if(r.memoize(t))return"[Circular ~]";for(var o in a)!Object.prototype.hasOwnProperty.call(a,o)||(s[o]=ad(o,a[o],n-1,r));return r.unmemoize(t),s}function an(e,t){try{return JSON.parse(JSON.stringify(e,function(n,r){return ad(n,r,t)}))}catch{return"**non-serializable**"}}function Gf(e,t){t===void 0&&(t=40);var n=Object.keys(nd(e));if(n.sort(),!n.length)return"[object has no keys]";if(n[0].length>=t)return pr(n[0],t);for(var r=n.length;r>0;r--){var i=n.slice(0,r).join(", ");if(!(i.length>t))return r===n.length?i:pr(i,t)}return""}function Ci(e){var t,n;if(On(e)){var r=e,i={};try{for(var a=Nr(Object.keys(r)),s=a.next();!s.done;s=a.next()){var o=s.value;typeof r[o]<"u"&&(i[o]=Ci(r[o]))}}catch(l){t={error:l}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return i}return Array.isArray(e)?e.map(Ci):e}function da(){if(!("fetch"in V()))return!1;try{return new Headers,new Request(""),new Response,!0}catch{return!1}}function _s(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}function Wf(){if(!da())return!1;var e=V();if(_s(e.fetch))return!0;var t=!1,n=e.document;if(n&&typeof n.createElement=="function")try{var r=n.createElement("iframe");r.hidden=!0,n.head.appendChild(r),r.contentWindow&&r.contentWindow.fetch&&(t=_s(r.contentWindow.fetch)),n.head.removeChild(r)}catch(i){C.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",i)}return t}function Jf(){if(!da())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}function Yf(){var e=V(),t=e.chrome,n=t&&t.app&&t.app.runtime,r="history"in e&&!!e.history.pushState&&!!e.history.replaceState;return!n&&r}var $=V(),mr={},Hl={};function Qf(e){if(!Hl[e])switch(Hl[e]=!0,e){case"console":Kf();break;case"dom":sg();break;case"xhr":tg();break;case"fetch":Xf();break;case"history":ng();break;case"error":og();break;case"unhandledrejection":lg();break;default:C.warn("unknown instrumentation type:",e)}}function st(e){!e||typeof e.type!="string"||typeof e.callback!="function"||(mr[e.type]=mr[e.type]||[],mr[e.type].push(e.callback),Qf(e.type))}function Le(e,t){var n,r;if(!(!e||!mr[e]))try{for(var i=Nr(mr[e]||[]),a=i.next();!a.done;a=i.next()){var s=a.value;try{s(t)}catch(o){C.error(`Error while triggering instrumentation handler.
Type: `+e+`
Name: `+it(s)+`
Error: `+o)}}}catch(o){n={error:o}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}function Kf(){"console"in $&&["debug","info","warn","error","log","assert"].forEach(function(e){e in $.console&&oe($.console,e,function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];Le("console",{args:n,level:e}),t&&Function.prototype.apply.call(t,$.console,n)}})})}function Xf(){!Wf()||oe($,"fetch",function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r={args:t,fetchData:{method:Zf(t),url:eg(t)},startTimestamp:Date.now()};return Le("fetch",w({},r)),e.apply($,t).then(function(i){return Le("fetch",w(w({},r),{endTimestamp:Date.now(),response:i})),i},function(i){throw Le("fetch",w(w({},r),{endTimestamp:Date.now(),error:i})),i})}})}function Zf(e){return e===void 0&&(e=[]),"Request"in $&&St(e[0],Request)&&e[0].method?String(e[0].method).toUpperCase():e[1]&&e[1].method?String(e[1].method).toUpperCase():"GET"}function eg(e){return e===void 0&&(e=[]),typeof e[0]=="string"?e[0]:"Request"in $&&St(e[0],Request)?e[0].url:String(e[0])}function tg(){if("XMLHttpRequest"in $){var e=[],t=[],n=XMLHttpRequest.prototype;oe(n,"open",function(r){return function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];var s=this,o=i[1];s.__sentry_xhr__={method:Tn(i[0])?i[0].toUpperCase():i[0],url:i[1]},Tn(o)&&s.__sentry_xhr__.method==="POST"&&o.match(/sentry_key/)&&(s.__sentry_own_request__=!0);var l=function(){if(s.readyState===4){try{s.__sentry_xhr__&&(s.__sentry_xhr__.status_code=s.status)}catch{}try{var c=e.indexOf(s);if(c!==-1){e.splice(c);var m=t.splice(c)[0];s.__sentry_xhr__&&m[0]!==void 0&&(s.__sentry_xhr__.body=m[0])}}catch{}Le("xhr",{args:i,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:s})}};return"onreadystatechange"in s&&typeof s.onreadystatechange=="function"?oe(s,"onreadystatechange",function(c){return function(){for(var m=[],g=0;g<arguments.length;g++)m[g]=arguments[g];return l(),c.apply(s,m)}}):s.addEventListener("readystatechange",l),r.apply(s,i)}}),oe(n,"send",function(r){return function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];return e.push(this),t.push(i),Le("xhr",{args:i,startTimestamp:Date.now(),xhr:this}),r.apply(this,i)}})}}var ni;function ng(){if(!Yf())return;var e=$.onpopstate;$.onpopstate=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=$.location.href,a=ni;if(ni=i,Le("history",{from:a,to:i}),e)try{return e.apply(this,n)}catch{}};function t(n){return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var a=r.length>2?r[2]:void 0;if(a){var s=ni,o=String(a);ni=o,Le("history",{from:s,to:o})}return n.apply(this,r)}}oe($.history,"pushState",t),oe($.history,"replaceState",t)}var rg=1e3,ri,ii;function ig(e,t){if(!e||e.type!==t.type)return!0;try{if(e.target!==t.target)return!0}catch{}return!1}function ag(e){if(e.type!=="keypress")return!1;try{var t=e.target;if(!t||!t.tagName)return!0;if(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)return!1}catch{}return!0}function Vl(e,t){return t===void 0&&(t=!1),function(n){if(!(!n||ii===n)&&!ag(n)){var r=n.type==="keypress"?"input":n.type;ri===void 0?(e({event:n,name:r,global:t}),ii=n):ig(ii,n)&&(e({event:n,name:r,global:t}),ii=n),clearTimeout(ri),ri=$.setTimeout(function(){ri=void 0},rg)}}}function sg(){if("document"in $){var e=Le.bind(null,"dom"),t=Vl(e,!0);$.document.addEventListener("click",t,!1),$.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach(function(n){var r=$[n]&&$[n].prototype;!r||!r.hasOwnProperty||!r.hasOwnProperty("addEventListener")||(oe(r,"addEventListener",function(i){return function(a,s,o){if(a==="click"||a=="keypress")try{var l=this,c=l.__sentry_instrumentation_handlers__=l.__sentry_instrumentation_handlers__||{},m=c[a]=c[a]||{refCount:0};if(!m.handler){var g=Vl(e);m.handler=g,i.call(this,a,g,o)}m.refCount+=1}catch{}return i.call(this,a,s,o)}}),oe(r,"removeEventListener",function(i){return function(a,s,o){if(a==="click"||a=="keypress")try{var l=this,c=l.__sentry_instrumentation_handlers__||{},m=c[a];m&&(m.refCount-=1,m.refCount<=0&&(i.call(this,a,m.handler,o),m.handler=void 0,delete c[a]),Object.keys(c).length===0&&delete l.__sentry_instrumentation_handlers__)}catch{}return i.call(this,a,s,o)}}))})}}var La=null;function og(){La=$.onerror,$.onerror=function(e,t,n,r,i){return Le("error",{column:r,error:i,line:n,msg:e,url:t}),La?La.apply(this,arguments):!1}}var Aa=null;function lg(){Aa=$.onunhandledrejection,$.onunhandledrejection=function(e){return Le("unhandledrejection",e),Aa?Aa.apply(this,arguments):!0}}function yn(){var e=V(),t=e.crypto||e.msCrypto;if(t!==void 0&&t.getRandomValues){var n=new Uint16Array(8);t.getRandomValues(n),n[3]=n[3]&4095|16384,n[4]=n[4]&16383|32768;var r=function(i){for(var a=i.toString(16);a.length<4;)a="0"+a;return a};return r(n[0])+r(n[1])+r(n[2])+r(n[3])+r(n[4])+r(n[5])+r(n[6])+r(n[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(i){var a=Math.random()*16|0,s=i==="x"?a:a&3|8;return s.toString(16)})}function Ua(e){if(!e)return{};var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};var n=t[6]||"",r=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],relative:t[5]+n+r}}function jt(e){if(e.message)return e.message;if(e.exception&&e.exception.values&&e.exception.values[0]){var t=e.exception.values[0];return t.type&&t.value?t.type+": "+t.value:t.type||t.value||e.event_id||"<unknown>"}return e.event_id||"<unknown>"}function Ss(e,t,n){e.exception=e.exception||{},e.exception.values=e.exception.values||[],e.exception.values[0]=e.exception.values[0]||{},e.exception.values[0].value=e.exception.values[0].value||t||"",e.exception.values[0].type=e.exception.values[0].type||n||"Error"}function qn(e,t){var n;if(!(!e.exception||!e.exception.values)){var r=e.exception.values[0],i={type:"generic",handled:!0},a=r.mechanism;if(r.mechanism=w(w(w({},i),a),t),t&&"data"in t){var s=w(w({},(n=a)===null||n===void 0?void 0:n.data),t.data);r.mechanism.data=s}}}var Gl=60*1e3;function cg(e,t){if(!t)return Gl;var n=parseInt(""+t,10);if(!isNaN(n))return n*1e3;var r=Date.parse(""+t);return isNaN(r)?Gl:r-e}function Wl(e){var t;if(!((t=e)===null||t===void 0)&&t.__sentry_captured__)return!0;try{Object.defineProperty(e,"__sentry_captured__",{value:!0})}catch{}return!1}var he=function(){function e(t){var n=this;this._state="PENDING",this._handlers=[],this._resolve=function(r){n._setResult("RESOLVED",r)},this._reject=function(r){n._setResult("REJECTED",r)},this._setResult=function(r,i){if(n._state==="PENDING"){if(To(i)){i.then(n._resolve,n._reject);return}n._state=r,n._value=i,n._executeHandlers()}},this._attachHandler=function(r){n._handlers=n._handlers.concat(r),n._executeHandlers()},this._executeHandlers=function(){if(n._state!=="PENDING"){var r=n._handlers.slice();n._handlers=[],r.forEach(function(i){i.done||(n._state==="RESOLVED"&&i.onfulfilled&&i.onfulfilled(n._value),n._state==="REJECTED"&&i.onrejected&&i.onrejected(n._value),i.done=!0)})}};try{t(this._resolve,this._reject)}catch(r){this._reject(r)}}return e.resolve=function(t){return new e(function(n){n(t)})},e.reject=function(t){return new e(function(n,r){r(t)})},e.all=function(t){return new e(function(n,r){if(!Array.isArray(t)){r(new TypeError("Promise.all requires an array as input."));return}if(t.length===0){n([]);return}var i=t.length,a=[];t.forEach(function(s,o){e.resolve(s).then(function(l){a[o]=l,i-=1,i===0&&n(a)}).then(null,r)})})},e.prototype.then=function(t,n){var r=this;return new e(function(i,a){r._attachHandler({done:!1,onfulfilled:function(s){if(!t){i(s);return}try{i(t(s));return}catch(o){a(o);return}},onrejected:function(s){if(!n){a(s);return}try{i(n(s));return}catch(o){a(o);return}}})})},e.prototype.catch=function(t){return this.then(function(n){return n},t)},e.prototype.finally=function(t){var n=this;return new e(function(r,i){var a,s;return n.then(function(o){s=!1,a=o,t&&t()},function(o){s=!0,a=o,t&&t()}).then(function(){if(s){i(a);return}r(a)})})},e.prototype.toString=function(){return"[object SyncPromise]"},e}(),ug=function(){function e(t){this._limit=t,this._buffer=[]}return e.prototype.isReady=function(){return this._limit===void 0||this.length()<this._limit},e.prototype.add=function(t){var n=this;if(!this.isReady())return he.reject(new K("Not adding Promise due to buffer limit reached."));var r=t();return this._buffer.indexOf(r)===-1&&this._buffer.push(r),r.then(function(){return n.remove(r)}).then(null,function(){return n.remove(r).then(null,function(){})}),r},e.prototype.remove=function(t){var n=this._buffer.splice(this._buffer.indexOf(t),1)[0];return n},e.prototype.length=function(){return this._buffer.length},e.prototype.drain=function(t){var n=this;return new he(function(r){var i=setTimeout(function(){t&&t>0&&r(!1)},t);he.all(n._buffer).then(function(){clearTimeout(i),r(!0)}).then(null,function(){r(!0)})})},e}(),xs={nowSeconds:function(){return Date.now()/1e3}};function dg(){var e=V().performance;if(!(!e||!e.now)){var t=Date.now()-e.now();return{now:function(){return e.now()},timeOrigin:t}}}function pg(){try{var e=Tf(lm,"perf_hooks");return e.performance}catch{return}}var za=No()?pg():dg(),Jl=za===void 0?xs:{nowSeconds:function(){return(za.timeOrigin+za.now())/1e3}},pa=xs.nowSeconds.bind(xs),Yl=Jl.nowSeconds.bind(Jl);(function(){var e=V().performance;if(!(!e||!e.now)){var t=3600*1e3,n=e.now(),r=Date.now(),i=e.timeOrigin?Math.abs(e.timeOrigin+n-r):t,a=i<t,s=e.timing&&e.timing.navigationStart,o=typeof s=="number",l=o?Math.abs(s+n-r):t,c=l<t;return a||c?i<=l?e.timeOrigin:s:r}})();var Ql=100,Ii=function(){function e(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._user={},this._tags={},this._extra={},this._contexts={}}return e.clone=function(t){var n=new e;return t&&(n._breadcrumbs=B(t._breadcrumbs),n._tags=w({},t._tags),n._extra=w({},t._extra),n._contexts=w({},t._contexts),n._user=t._user,n._level=t._level,n._span=t._span,n._session=t._session,n._transactionName=t._transactionName,n._fingerprint=t._fingerprint,n._eventProcessors=B(t._eventProcessors),n._requestSession=t._requestSession),n},e.prototype.addScopeListener=function(t){this._scopeListeners.push(t)},e.prototype.addEventProcessor=function(t){return this._eventProcessors.push(t),this},e.prototype.setUser=function(t){return this._user=t||{},this._session&&this._session.update({user:t}),this._notifyScopeListeners(),this},e.prototype.getUser=function(){return this._user},e.prototype.getRequestSession=function(){return this._requestSession},e.prototype.setRequestSession=function(t){return this._requestSession=t,this},e.prototype.setTags=function(t){return this._tags=w(w({},this._tags),t),this._notifyScopeListeners(),this},e.prototype.setTag=function(t,n){var r;return this._tags=w(w({},this._tags),(r={},r[t]=n,r)),this._notifyScopeListeners(),this},e.prototype.setExtras=function(t){return this._extra=w(w({},this._extra),t),this._notifyScopeListeners(),this},e.prototype.setExtra=function(t,n){var r;return this._extra=w(w({},this._extra),(r={},r[t]=n,r)),this._notifyScopeListeners(),this},e.prototype.setFingerprint=function(t){return this._fingerprint=t,this._notifyScopeListeners(),this},e.prototype.setLevel=function(t){return this._level=t,this._notifyScopeListeners(),this},e.prototype.setTransactionName=function(t){return this._transactionName=t,this._notifyScopeListeners(),this},e.prototype.setTransaction=function(t){return this.setTransactionName(t)},e.prototype.setContext=function(t,n){var r;return n===null?delete this._contexts[t]:this._contexts=w(w({},this._contexts),(r={},r[t]=n,r)),this._notifyScopeListeners(),this},e.prototype.setSpan=function(t){return this._span=t,this._notifyScopeListeners(),this},e.prototype.getSpan=function(){return this._span},e.prototype.getTransaction=function(){var t,n,r,i,a=this.getSpan();if(!((t=a)===null||t===void 0)&&t.transaction)return(n=a)===null||n===void 0?void 0:n.transaction;if(!((i=(r=a)===null||r===void 0?void 0:r.spanRecorder)===null||i===void 0)&&i.spans[0])return a.spanRecorder.spans[0]},e.prototype.setSession=function(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this},e.prototype.getSession=function(){return this._session},e.prototype.update=function(t){if(!t)return this;if(typeof t=="function"){var n=t(this);return n instanceof e?n:this}return t instanceof e?(this._tags=w(w({},this._tags),t._tags),this._extra=w(w({},this._extra),t._extra),this._contexts=w(w({},this._contexts),t._contexts),t._user&&Object.keys(t._user).length&&(this._user=t._user),t._level&&(this._level=t._level),t._fingerprint&&(this._fingerprint=t._fingerprint),t._requestSession&&(this._requestSession=t._requestSession)):On(t)&&(t=t,this._tags=w(w({},this._tags),t.tags),this._extra=w(w({},this._extra),t.extra),this._contexts=w(w({},this._contexts),t.contexts),t.user&&(this._user=t.user),t.level&&(this._level=t.level),t.fingerprint&&(this._fingerprint=t.fingerprint),t.requestSession&&(this._requestSession=t.requestSession)),this},e.prototype.clear=function(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this},e.prototype.addBreadcrumb=function(t,n){var r=typeof n=="number"?Math.min(n,Ql):Ql;if(r<=0)return this;var i=w({timestamp:pa()},t);return this._breadcrumbs=B(this._breadcrumbs,[i]).slice(-r),this._notifyScopeListeners(),this},e.prototype.clearBreadcrumbs=function(){return this._breadcrumbs=[],this._notifyScopeListeners(),this},e.prototype.applyToEvent=function(t,n){var r;if(this._extra&&Object.keys(this._extra).length&&(t.extra=w(w({},this._extra),t.extra)),this._tags&&Object.keys(this._tags).length&&(t.tags=w(w({},this._tags),t.tags)),this._user&&Object.keys(this._user).length&&(t.user=w(w({},this._user),t.user)),this._contexts&&Object.keys(this._contexts).length&&(t.contexts=w(w({},this._contexts),t.contexts)),this._level&&(t.level=this._level),this._transactionName&&(t.transaction=this._transactionName),this._span){t.contexts=w({trace:this._span.getTraceContext()},t.contexts);var i=(r=this._span.transaction)===null||r===void 0?void 0:r.name;i&&(t.tags=w({transaction:i},t.tags))}return this._applyFingerprint(t),t.breadcrumbs=B(t.breadcrumbs||[],this._breadcrumbs),t.breadcrumbs=t.breadcrumbs.length>0?t.breadcrumbs:void 0,this._notifyEventProcessors(B(sd(),this._eventProcessors),t,n)},e.prototype._notifyEventProcessors=function(t,n,r,i){var a=this;return i===void 0&&(i=0),new he(function(s,o){var l=t[i];if(n===null||typeof l!="function")s(n);else{var c=l(w({},n),r);To(c)?c.then(function(m){return a._notifyEventProcessors(t,m,r,i+1).then(s)}).then(null,o):a._notifyEventProcessors(t,c,r,i+1).then(s).then(null,o)}})},e.prototype._notifyScopeListeners=function(){var t=this;this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(function(n){n(t)}),this._notifyingListeners=!1)},e.prototype._applyFingerprint=function(t){t.fingerprint=t.fingerprint?Array.isArray(t.fingerprint)?t.fingerprint:[t.fingerprint]:[],this._fingerprint&&(t.fingerprint=t.fingerprint.concat(this._fingerprint)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint},e}();function sd(){var e=V();return e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.globalEventProcessors=e.__SENTRY__.globalEventProcessors||[],e.__SENTRY__.globalEventProcessors}function ma(e){sd().push(e)}var mg=function(){function e(t){this.errors=0,this.sid=yn(),this.duration=0,this.status=Xe.Ok,this.init=!0,this.ignoreDuration=!1;var n=Yl();this.timestamp=n,this.started=n,t&&this.update(t)}return e.prototype.update=function(t){if(t===void 0&&(t={}),t.user&&(!this.ipAddress&&t.user.ip_address&&(this.ipAddress=t.user.ip_address),!this.did&&!t.did&&(this.did=t.user.id||t.user.email||t.user.username)),this.timestamp=t.timestamp||Yl(),t.ignoreDuration&&(this.ignoreDuration=t.ignoreDuration),t.sid&&(this.sid=t.sid.length===32?t.sid:yn()),t.init!==void 0&&(this.init=t.init),!this.did&&t.did&&(this.did=""+t.did),typeof t.started=="number"&&(this.started=t.started),this.ignoreDuration)this.duration=void 0;else if(typeof t.duration=="number")this.duration=t.duration;else{var n=this.timestamp-this.started;this.duration=n>=0?n:0}t.release&&(this.release=t.release),t.environment&&(this.environment=t.environment),!this.ipAddress&&t.ipAddress&&(this.ipAddress=t.ipAddress),!this.userAgent&&t.userAgent&&(this.userAgent=t.userAgent),typeof t.errors=="number"&&(this.errors=t.errors),t.status&&(this.status=t.status)},e.prototype.close=function(t){t?this.update({status:t}):this.status===Xe.Ok?this.update({status:Xe.Exited}):this.update()},e.prototype.toJSON=function(){return Ci({sid:""+this.sid,init:this.init,started:new Date(this.started*1e3).toISOString(),timestamp:new Date(this.timestamp*1e3).toISOString(),status:this.status,errors:this.errors,did:typeof this.did=="number"||typeof this.did=="string"?""+this.did:void 0,duration:this.duration,attrs:Ci({release:this.release,environment:this.environment,ip_address:this.ipAddress,user_agent:this.userAgent})})},e}(),Oo=4,fg=100,qo=function(){function e(t,n,r){n===void 0&&(n=new Ii),r===void 0&&(r=Oo),this._version=r,this._stack=[{}],this.getStackTop().scope=n,t&&this.bindClient(t)}return e.prototype.isOlderThan=function(t){return this._version<t},e.prototype.bindClient=function(t){var n=this.getStackTop();n.client=t,t&&t.setupIntegrations&&t.setupIntegrations()},e.prototype.pushScope=function(){var t=Ii.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:t}),t},e.prototype.popScope=function(){return this.getStack().length<=1?!1:!!this.getStack().pop()},e.prototype.withScope=function(t){var n=this.pushScope();try{t(n)}finally{this.popScope()}},e.prototype.getClient=function(){return this.getStackTop().client},e.prototype.getScope=function(){return this.getStackTop().scope},e.prototype.getStack=function(){return this._stack},e.prototype.getStackTop=function(){return this._stack[this._stack.length-1]},e.prototype.captureException=function(t,n){var r=this._lastEventId=yn(),i=n;if(!n){var a=void 0;try{throw new Error("Sentry syntheticException")}catch(s){a=s}i={originalException:t,syntheticException:a}}return this._invokeClient("captureException",t,w(w({},i),{event_id:r})),r},e.prototype.captureMessage=function(t,n,r){var i=this._lastEventId=yn(),a=r;if(!r){var s=void 0;try{throw new Error(t)}catch(o){s=o}a={originalException:t,syntheticException:s}}return this._invokeClient("captureMessage",t,n,w(w({},a),{event_id:i})),i},e.prototype.captureEvent=function(t,n){var r=yn();return t.type!=="transaction"&&(this._lastEventId=r),this._invokeClient("captureEvent",t,w(w({},n),{event_id:r})),r},e.prototype.lastEventId=function(){return this._lastEventId},e.prototype.addBreadcrumb=function(t,n){var r=this.getStackTop(),i=r.scope,a=r.client;if(!(!i||!a)){var s=a.getOptions&&a.getOptions()||{},o=s.beforeBreadcrumb,l=o===void 0?null:o,c=s.maxBreadcrumbs,m=c===void 0?fg:c;if(!(m<=0)){var g=pa(),f=w({timestamp:g},t),v=l?wi(function(){return l(f,n)}):f;v!==null&&i.addBreadcrumb(v,m)}}},e.prototype.setUser=function(t){var n=this.getScope();n&&n.setUser(t)},e.prototype.setTags=function(t){var n=this.getScope();n&&n.setTags(t)},e.prototype.setExtras=function(t){var n=this.getScope();n&&n.setExtras(t)},e.prototype.setTag=function(t,n){var r=this.getScope();r&&r.setTag(t,n)},e.prototype.setExtra=function(t,n){var r=this.getScope();r&&r.setExtra(t,n)},e.prototype.setContext=function(t,n){var r=this.getScope();r&&r.setContext(t,n)},e.prototype.configureScope=function(t){var n=this.getStackTop(),r=n.scope,i=n.client;r&&i&&t(r)},e.prototype.run=function(t){var n=Kl(this);try{t(this)}finally{Kl(n)}},e.prototype.getIntegration=function(t){var n=this.getClient();if(!n)return null;try{return n.getIntegration(t)}catch{return C.warn("Cannot retrieve integration "+t.id+" from the current Hub"),null}},e.prototype.startSpan=function(t){return this._callExtensionMethod("startSpan",t)},e.prototype.startTransaction=function(t,n){return this._callExtensionMethod("startTransaction",t,n)},e.prototype.traceHeaders=function(){return this._callExtensionMethod("traceHeaders")},e.prototype.captureSession=function(t){if(t===void 0&&(t=!1),t)return this.endSession();this._sendSessionUpdate()},e.prototype.endSession=function(){var t,n,r,i,a;(r=(n=(t=this.getStackTop())===null||t===void 0?void 0:t.scope)===null||n===void 0?void 0:n.getSession())===null||r===void 0||r.close(),this._sendSessionUpdate(),(a=(i=this.getStackTop())===null||i===void 0?void 0:i.scope)===null||a===void 0||a.setSession()},e.prototype.startSession=function(t){var n=this.getStackTop(),r=n.scope,i=n.client,a=i&&i.getOptions()||{},s=a.release,o=a.environment,l=V(),c=(l.navigator||{}).userAgent,m=new mg(w(w(w({release:s,environment:o},r&&{user:r.getUser()}),c&&{userAgent:c}),t));if(r){var g=r.getSession&&r.getSession();g&&g.status===Xe.Ok&&g.update({status:Xe.Exited}),this.endSession(),r.setSession(m)}return m},e.prototype._sendSessionUpdate=function(){var t=this.getStackTop(),n=t.scope,r=t.client;if(!!n){var i=n.getSession&&n.getSession();i&&r&&r.captureSession&&r.captureSession(i)}},e.prototype._invokeClient=function(t){for(var n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var a=this.getStackTop(),s=a.scope,o=a.client;o&&o[t]&&(n=o)[t].apply(n,B(r,[s]))},e.prototype._callExtensionMethod=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=fa(),a=i.__SENTRY__;if(a&&a.extensions&&typeof a.extensions[t]=="function")return a.extensions[t].apply(this,n);C.warn("Extension method "+t+" couldn't be found, doing nothing.")},e}();function fa(){var e=V();return e.__SENTRY__=e.__SENTRY__||{extensions:{},hub:void 0},e}function Kl(e){var t=fa(),n=ot(t);return Do(t,e),n}function le(){var e=fa();return(!od(e)||ot(e).isOlderThan(Oo))&&Do(e,new qo),No()?gg(e):ot(e)}function gg(e){var t,n,r;try{var i=(r=(n=(t=fa().__SENTRY__)===null||t===void 0?void 0:t.extensions)===null||n===void 0?void 0:n.domain)===null||r===void 0?void 0:r.active;if(!i)return ot(e);if(!od(i)||ot(i).isOlderThan(Oo)){var a=ot(e).getStackTop();Do(i,new qo(a.client,Ii.clone(a.scope)))}return ot(i)}catch{return ot(e)}}function od(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function ot(e){return e&&e.__SENTRY__&&e.__SENTRY__.hub||(e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.hub=new qo),e.__SENTRY__.hub}function Do(e,t){return e?(e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.hub=t,!0):!1}function ld(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=le();if(r&&r[e])return r[e].apply(r,B(t));throw new Error("No hub defined or "+e+" was not found on the hub, please open a bug report.")}function cd(e,t){var n;try{throw new Error("Sentry syntheticException")}catch(r){n=r}return ld("captureException",e,{captureContext:t,originalException:e,syntheticException:n})}function yg(e){ld("withScope",e)}var Xl="7",ud=function(){function e(t,n,r){n===void 0&&(n={}),this.dsn=t,this._dsnObject=new td(t),this.metadata=n,this._tunnel=r}return e.prototype.getDsn=function(){return this._dsnObject},e.prototype.forceEnvelope=function(){return!!this._tunnel},e.prototype.getBaseApiEndpoint=function(){var t=this.getDsn(),n=t.protocol?t.protocol+":":"",r=t.port?":"+t.port:"";return n+"//"+t.host+r+(t.path?"/"+t.path:"")+"/api/"},e.prototype.getStoreEndpoint=function(){return this._getIngestEndpoint("store")},e.prototype.getStoreEndpointWithUrlEncodedAuth=function(){return this.getStoreEndpoint()+"?"+this._encodedAuth()},e.prototype.getEnvelopeEndpointWithUrlEncodedAuth=function(){return this.forceEnvelope()?this._tunnel:this._getEnvelopeEndpoint()+"?"+this._encodedAuth()},e.prototype.getStoreEndpointPath=function(){var t=this.getDsn();return(t.path?"/"+t.path:"")+"/api/"+t.projectId+"/store/"},e.prototype.getRequestHeaders=function(t,n){var r=this.getDsn(),i=["Sentry sentry_version="+Xl];return i.push("sentry_client="+t+"/"+n),i.push("sentry_key="+r.publicKey),r.pass&&i.push("sentry_secret="+r.pass),{"Content-Type":"application/json","X-Sentry-Auth":i.join(", ")}},e.prototype.getReportDialogEndpoint=function(t){t===void 0&&(t={});var n=this.getDsn(),r=this.getBaseApiEndpoint()+"embed/error-page/",i=[];i.push("dsn="+n.toString());for(var a in t)if(a!=="dsn")if(a==="user"){if(!t.user)continue;t.user.name&&i.push("name="+encodeURIComponent(t.user.name)),t.user.email&&i.push("email="+encodeURIComponent(t.user.email))}else i.push(encodeURIComponent(a)+"="+encodeURIComponent(t[a]));return i.length?r+"?"+i.join("&"):r},e.prototype._getEnvelopeEndpoint=function(){return this._getIngestEndpoint("envelope")},e.prototype._getIngestEndpoint=function(t){if(this._tunnel)return this._tunnel;var n=this.getBaseApiEndpoint(),r=this.getDsn();return""+n+r.projectId+"/"+t+"/"},e.prototype._encodedAuth=function(){var t=this.getDsn(),n={sentry_key:t.publicKey,sentry_version:Xl};return Bf(n)},e}(),Zl=[];function ec(e){return e.reduce(function(t,n){return t.every(function(r){return n.name!==r.name})&&t.push(n),t},[])}function hg(e){var t=e.defaultIntegrations&&B(e.defaultIntegrations)||[],n=e.integrations,r=B(ec(t));Array.isArray(n)?r=B(r.filter(function(s){return n.every(function(o){return o.name!==s.name})}),ec(n)):typeof n=="function"&&(r=n(r),r=Array.isArray(r)?r:[r]);var i=r.map(function(s){return s.name}),a="Debug";return i.indexOf(a)!==-1&&r.push.apply(r,B(r.splice(i.indexOf(a),1))),r}function kg(e){Zl.indexOf(e.name)===-1&&(e.setupOnce(ma,le),Zl.push(e.name),C.log("Integration installed: "+e.name))}function vg(e){var t={};return hg(e).forEach(function(n){t[n.name]=n,kg(n)}),Object.defineProperty(t,"initialized",{value:!0}),t}var tc="Not capturing exception because it's already been captured.",wg=function(){function e(t,n){this._integrations={},this._numProcessing=0,this._backend=new t(n),this._options=n,n.dsn&&(this._dsn=new td(n.dsn))}return e.prototype.captureException=function(t,n,r){var i=this;if(Wl(t)){C.log(tc);return}var a=n&&n.event_id;return this._process(this._getBackend().eventFromException(t,n).then(function(s){return i._captureEvent(s,n,r)}).then(function(s){a=s})),a},e.prototype.captureMessage=function(t,n,r,i){var a=this,s=r&&r.event_id,o=ua(t)?this._getBackend().eventFromMessage(String(t),n,r):this._getBackend().eventFromException(t,r);return this._process(o.then(function(l){return a._captureEvent(l,r,i)}).then(function(l){s=l})),s},e.prototype.captureEvent=function(t,n,r){var i;if(((i=n)===null||i===void 0?void 0:i.originalException)&&Wl(n.originalException)){C.log(tc);return}var a=n&&n.event_id;return this._process(this._captureEvent(t,n,r).then(function(s){a=s})),a},e.prototype.captureSession=function(t){if(!this._isEnabled()){C.warn("SDK not enabled, will not capture session.");return}typeof t.release!="string"?C.warn("Discarded session because of missing or non-string release"):(this._sendSession(t),t.update({init:!1}))},e.prototype.getDsn=function(){return this._dsn},e.prototype.getOptions=function(){return this._options},e.prototype.getTransport=function(){return this._getBackend().getTransport()},e.prototype.flush=function(t){var n=this;return this._isClientDoneProcessing(t).then(function(r){return n.getTransport().close(t).then(function(i){return r&&i})})},e.prototype.close=function(t){var n=this;return this.flush(t).then(function(r){return n.getOptions().enabled=!1,r})},e.prototype.setupIntegrations=function(){this._isEnabled()&&!this._integrations.initialized&&(this._integrations=vg(this._options))},e.prototype.getIntegration=function(t){try{return this._integrations[t.id]||null}catch{return C.warn("Cannot retrieve integration "+t.id+" from the current Client"),null}},e.prototype._updateSessionFromEvent=function(t,n){var r,i,a=!1,s=!1,o=n.exception&&n.exception.values;if(o){s=!0;try{for(var l=Nr(o),c=l.next();!c.done;c=l.next()){var m=c.value,g=m.mechanism;if(g&&g.handled===!1){a=!0;break}}}catch(S){r={error:S}}finally{try{c&&!c.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}}var f=t.status===Xe.Ok,v=f&&t.errors===0||f&&a;v&&(t.update(w(w({},a&&{status:Xe.Crashed}),{errors:t.errors||Number(s||a)})),this.captureSession(t))},e.prototype._sendSession=function(t){this._getBackend().sendSession(t)},e.prototype._isClientDoneProcessing=function(t){var n=this;return new he(function(r){var i=0,a=1,s=setInterval(function(){n._numProcessing==0?(clearInterval(s),r(!0)):(i+=a,t&&i>=t&&(clearInterval(s),r(!1)))},a)})},e.prototype._getBackend=function(){return this._backend},e.prototype._isEnabled=function(){return this.getOptions().enabled!==!1&&this._dsn!==void 0},e.prototype._prepareEvent=function(t,n,r){var i=this,a=this.getOptions().normalizeDepth,s=a===void 0?3:a,o=w(w({},t),{event_id:t.event_id||(r&&r.event_id?r.event_id:yn()),timestamp:t.timestamp||pa()});this._applyClientOptions(o),this._applyIntegrationsMetadata(o);var l=n;r&&r.captureContext&&(l=Ii.clone(l).update(r.captureContext));var c=he.resolve(o);return l&&(c=l.applyToEvent(o,r)),c.then(function(m){return typeof s=="number"&&s>0?i._normalizeEvent(m,s):m})},e.prototype._normalizeEvent=function(t,n){if(!t)return null;var r=w(w(w(w(w({},t),t.breadcrumbs&&{breadcrumbs:t.breadcrumbs.map(function(s){return w(w({},s),s.data&&{data:an(s.data,n)})})}),t.user&&{user:an(t.user,n)}),t.contexts&&{contexts:an(t.contexts,n)}),t.extra&&{extra:an(t.extra,n)});t.contexts&&t.contexts.trace&&(r.contexts.trace=t.contexts.trace);var i=this.getOptions()._experiments,a=i===void 0?{}:i;return a.ensureNoCircularStructures?an(r):r},e.prototype._applyClientOptions=function(t){var n=this.getOptions(),r=n.environment,i=n.release,a=n.dist,s=n.maxValueLength,o=s===void 0?250:s;"environment"in t||(t.environment="environment"in n?r:"production"),t.release===void 0&&i!==void 0&&(t.release=i),t.dist===void 0&&a!==void 0&&(t.dist=a),t.message&&(t.message=pr(t.message,o));var l=t.exception&&t.exception.values&&t.exception.values[0];l&&l.value&&(l.value=pr(l.value,o));var c=t.request;c&&c.url&&(c.url=pr(c.url,o))},e.prototype._applyIntegrationsMetadata=function(t){var n=Object.keys(this._integrations);n.length>0&&(t.sdk=t.sdk||{},t.sdk.integrations=B(t.sdk.integrations||[],n))},e.prototype._sendEvent=function(t){this._getBackend().sendEvent(t)},e.prototype._captureEvent=function(t,n,r){return this._processEvent(t,n,r).then(function(i){return i.event_id},function(i){C.error(i)})},e.prototype._processEvent=function(t,n,r){var i=this,a,s,o=this.getOptions(),l=o.beforeSend,c=o.sampleRate,m=this.getTransport();if(!this._isEnabled())return he.reject(new K("SDK not enabled, will not capture event."));var g=t.type==="transaction";return!g&&typeof c=="number"&&Math.random()>c?((s=(a=m).recordLostEvent)===null||s===void 0||s.call(a,Fe.SampleRate,"event"),he.reject(new K("Discarding event because it's not included in the random sample (sampling rate = "+c+")"))):this._prepareEvent(t,r,n).then(function(f){var v,S;if(f===null)throw(S=(v=m).recordLostEvent)===null||S===void 0||S.call(v,Fe.EventProcessor,t.type||"event"),new K("An event processor returned null, will not send event.");var R=n&&n.data&&n.data.__sentry__===!0;if(R||g||!l)return f;var p=l(f,n);return i._ensureBeforeSendRv(p)}).then(function(f){var v,S;if(f===null)throw(S=(v=m).recordLostEvent)===null||S===void 0||S.call(v,Fe.BeforeSend,t.type||"event"),new K("`beforeSend` returned `null`, will not send event.");var R=r&&r.getSession&&r.getSession();return!g&&R&&i._updateSessionFromEvent(R,f),i._sendEvent(f),f}).then(null,function(f){throw f instanceof K?f:(i.captureException(f,{data:{__sentry__:!0},originalException:f}),new K(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: `+f))})},e.prototype._process=function(t){var n=this;this._numProcessing+=1,t.then(function(r){return n._numProcessing-=1,r},function(r){return n._numProcessing-=1,r})},e.prototype._ensureBeforeSendRv=function(t){var n="`beforeSend` method has to return `null` or a valid event.";if(To(t))return t.then(function(r){if(!(On(r)||r===null))throw new K(n);return r},function(r){throw new K("beforeSend rejected with "+r)});if(!(On(t)||t===null))throw new K(n);return t},e}(),Pg=function(){function e(){}return e.prototype.sendEvent=function(t){return he.resolve({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:Vt.Skipped})},e.prototype.close=function(t){return he.resolve(!0)},e}(),_g=function(){function e(t){this._options=t,this._options.dsn||C.warn("No DSN provided, backend will not do anything."),this._transport=this._setupTransport()}return e.prototype.eventFromException=function(t,n){throw new K("Backend has to implement `eventFromException` method")},e.prototype.eventFromMessage=function(t,n,r){throw new K("Backend has to implement `eventFromMessage` method")},e.prototype.sendEvent=function(t){this._transport.sendEvent(t).then(null,function(n){C.error("Error while sending event: "+n)})},e.prototype.sendSession=function(t){if(!this._transport.sendSession){C.warn("Dropping session because custom transport doesn't implement sendSession");return}this._transport.sendSession(t).then(null,function(n){C.error("Error while sending session: "+n)})},e.prototype.getTransport=function(){return this._transport},e.prototype._setupTransport=function(){return new Pg},e}();function dd(e){if(!(!e.metadata||!e.metadata.sdk)){var t=e.metadata.sdk,n=t.name,r=t.version;return{name:n,version:r}}}function Sg(e,t){return t&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||t.name,e.sdk.version=e.sdk.version||t.version,e.sdk.integrations=B(e.sdk.integrations||[],t.integrations||[]),e.sdk.packages=B(e.sdk.packages||[],t.packages||[])),e}function pd(e,t){var n=dd(t),r=JSON.stringify(w(w({sent_at:new Date().toISOString()},n&&{sdk:n}),t.forceEnvelope()&&{dsn:t.getDsn().toString()})),i="aggregates"in e?"sessions":"session",a=JSON.stringify({type:i});return{body:r+`
`+a+`
`+JSON.stringify(e),type:i,url:t.getEnvelopeEndpointWithUrlEncodedAuth()}}function md(e,t){var n=dd(t),r=e.type||"event",i=r==="transaction"||t.forceEnvelope(),a=e.debug_meta||{},s=a.transactionSampling,o=Nf(a,["transactionSampling"]),l=s||{},c=l.method,m=l.rate;Object.keys(o).length===0?delete e.debug_meta:e.debug_meta=o;var g={body:JSON.stringify(n?Sg(e,t.metadata.sdk):e),type:r,url:i?t.getEnvelopeEndpointWithUrlEncodedAuth():t.getStoreEndpointWithUrlEncodedAuth()};if(i){var f=JSON.stringify(w(w({event_id:e.event_id,sent_at:new Date().toISOString()},n&&{sdk:n}),t.forceEnvelope()&&{dsn:t.getDsn().toString()})),v=JSON.stringify({type:r,sample_rates:[{id:c,rate:m}]}),S=f+`
`+v+`
`+g.body;g.body=S}return g}function xg(e,t){var n;t.debug===!0&&C.enable();var r=le();(n=r.getScope())===null||n===void 0||n.update(t.initialScope);var i=new e(t);r.bindClient(i)}var Fi="6.16.1",nc,Rg=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(){nc=Function.prototype.toString,Function.prototype.toString=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=this.__sentry_original__||this;return nc.apply(r,t)}},e.id="FunctionToString",e}(),bg=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],Ng=function(){function e(t){t===void 0&&(t={}),this._options=t,this.name=e.id}return e.prototype.setupOnce=function(){ma(function(t){var n=le();if(!n)return t;var r=n.getIntegration(e);if(r){var i=n.getClient(),a=i?i.getOptions():{},s=typeof r._mergeOptions=="function"?r._mergeOptions(a):{};return typeof r._shouldDropEvent!="function"?t:r._shouldDropEvent(t,s)?null:t}return t})},e.prototype._shouldDropEvent=function(t,n){return this._isSentryError(t,n)?(C.warn(`Event dropped due to being internal Sentry Error.
Event: `+jt(t)),!0):this._isIgnoredError(t,n)?(C.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+jt(t)),!0):this._isDeniedUrl(t,n)?(C.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: "+jt(t)+`.
Url: `+this._getEventFilterUrl(t)),!0):this._isAllowedUrl(t,n)?!1:(C.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: "+jt(t)+`.
Url: `+this._getEventFilterUrl(t)),!0)},e.prototype._isSentryError=function(t,n){if(!n.ignoreInternal)return!1;try{return t&&t.exception&&t.exception.values&&t.exception.values[0]&&t.exception.values[0].type==="SentryError"||!1}catch{return!1}},e.prototype._isIgnoredError=function(t,n){return!n.ignoreErrors||!n.ignoreErrors.length?!1:this._getPossibleEventMessages(t).some(function(r){return n.ignoreErrors.some(function(i){return Fa(r,i)})})},e.prototype._isDeniedUrl=function(t,n){if(!n.denyUrls||!n.denyUrls.length)return!1;var r=this._getEventFilterUrl(t);return r?n.denyUrls.some(function(i){return Fa(r,i)}):!1},e.prototype._isAllowedUrl=function(t,n){if(!n.allowUrls||!n.allowUrls.length)return!0;var r=this._getEventFilterUrl(t);return r?n.allowUrls.some(function(i){return Fa(r,i)}):!0},e.prototype._mergeOptions=function(t){return t===void 0&&(t={}),{allowUrls:B(this._options.whitelistUrls||[],this._options.allowUrls||[],t.whitelistUrls||[],t.allowUrls||[]),denyUrls:B(this._options.blacklistUrls||[],this._options.denyUrls||[],t.blacklistUrls||[],t.denyUrls||[]),ignoreErrors:B(this._options.ignoreErrors||[],t.ignoreErrors||[],bg),ignoreInternal:typeof this._options.ignoreInternal<"u"?this._options.ignoreInternal:!0}},e.prototype._getPossibleEventMessages=function(t){if(t.message)return[t.message];if(t.exception)try{var n=t.exception.values&&t.exception.values[0]||{},r=n.type,i=r===void 0?"":r,a=n.value,s=a===void 0?"":a;return[""+s,i+": "+s]}catch{return C.error("Cannot extract message for event "+jt(t)),[]}return[]},e.prototype._getLastValidUrl=function(t){t===void 0&&(t=[]);for(var n,r,i=t.length-1;i>=0;i--){var a=t[i];if(((n=a)===null||n===void 0?void 0:n.filename)!=="<anonymous>"&&((r=a)===null||r===void 0?void 0:r.filename)!=="[native code]")return a.filename||null}return null},e.prototype._getEventFilterUrl=function(t){try{if(t.stacktrace){var n=t.stacktrace.frames;return this._getLastValidUrl(n)}if(t.exception){var r=t.exception.values&&t.exception.values[0].stacktrace&&t.exception.values[0].stacktrace.frames;return this._getLastValidUrl(r)}return null}catch{return C.error("Cannot extract url for event "+jt(t)),null}},e.id="InboundFilters",e}(),cn="?",Eg=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Tg=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Og=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,qg=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Dg=/\((\S*)(?::(\d+))(?::(\d+))\)/,jg=/Minified React error #\d+;/i;function hn(e){var t=null,n=0;e&&(typeof e.framesToPop=="number"?n=e.framesToPop:jg.test(e.message)&&(n=1));try{if(t=Cg(e),t)return ic(t,n)}catch{}try{if(t=Mg(e),t)return ic(t,n)}catch{}return{message:jo(e),name:e&&e.name,stack:[],failed:!0}}function Mg(e){var t,n;if(!e||!e.stack)return null;for(var r=[],i=e.stack.split(`
`),a,s,o,l,c=0;c<i.length;++c){if(o=Eg.exec(i[c])){var m=o[2]&&o[2].indexOf("native")===0;a=o[2]&&o[2].indexOf("eval")===0,a&&(s=Dg.exec(o[2]))&&(o[2]=s[1],o[3]=s[2],o[4]=s[3]);var g=o[2]&&o[2].indexOf("address at ")===0?o[2].substr(11):o[2],f=o[1]||cn;t=Er(rc(f,g),2),f=t[0],g=t[1],l={url:g,func:f,args:m?[o[2]]:[],line:o[3]?+o[3]:null,column:o[4]?+o[4]:null}}else if(o=Og.exec(i[c]))l={url:o[2],func:o[1]||cn,args:[],line:+o[3],column:o[4]?+o[4]:null};else if(o=Tg.exec(i[c])){a=o[3]&&o[3].indexOf(" > eval")>-1,a&&(s=qg.exec(o[3]))?(o[1]=o[1]||"eval",o[3]=s[1],o[4]=s[2],o[5]=""):c===0&&!o[5]&&e.columnNumber!==void 0&&(r[0].column=e.columnNumber+1);var g=o[3],f=o[1]||cn;n=Er(rc(f,g),2),f=n[0],g=n[1],l={url:g,func:f,args:o[2]?o[2].split(","):[],line:o[4]?+o[4]:null,column:o[5]?+o[5]:null}}else continue;!l.func&&l.line&&(l.func=cn),r.push(l)}return r.length?{message:jo(e),name:e.name,stack:r}:null}function Cg(e){if(!e||!e.stacktrace)return null;for(var t=e.stacktrace,n=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,r=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,i=t.split(`
`),a=[],s,o=0;o<i.length;o+=2){var l=null;(s=n.exec(i[o]))?l={url:s[2],func:s[3],args:[],line:+s[1],column:null}:(s=r.exec(i[o]))&&(l={url:s[6],func:s[3]||s[4],args:s[5]?s[5].split(","):[],line:+s[1],column:+s[2]}),l&&(!l.func&&l.line&&(l.func=cn),a.push(l))}return a.length?{message:jo(e),name:e.name,stack:a}:null}var rc=function(e,t){var n=e.indexOf("safari-extension")!==-1,r=e.indexOf("safari-web-extension")!==-1;return n||r?[e.indexOf("@")!==-1?e.split("@")[0]:cn,n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]};function ic(e,t){try{return w(w({},e),{stack:e.stack.slice(t)})}catch{return e}}function jo(e){var t=e&&e.message;return t?t.error&&typeof t.error.message=="string"?t.error.message:t:"No error message"}var Ig=50;function fd(e){var t=Mo(e.stack),n={type:e.name,value:e.message};return t&&t.length&&(n.stacktrace={frames:t}),n.type===void 0&&n.value===""&&(n.value="Unrecoverable error caught"),n}function Fg(e,t,n){var r={exception:{values:[{type:Eo(e)?e.constructor.name:n?"UnhandledRejection":"Error",value:"Non-Error "+(n?"promise rejection":"exception")+" captured with keys: "+Gf(e)}]},extra:{__serialized__:rd(e)}};if(t){var i=hn(t),a=Mo(i.stack);r.stacktrace={frames:a}}return r}function Ba(e){var t=fd(e);return{exception:{values:[t]}}}function Mo(e){if(!e||!e.length)return[];var t=e,n=t[0].func||"",r=t[t.length-1].func||"";return(n.indexOf("captureMessage")!==-1||n.indexOf("captureException")!==-1)&&(t=t.slice(1)),r.indexOf("sentryWrapped")!==-1&&(t=t.slice(0,-1)),t.slice(0,Ig).map(function(i){return{colno:i.column===null?void 0:i.column,filename:i.url||t[0].url,function:i.func||"?",in_app:!0,lineno:i.line===null?void 0:i.line}}).reverse()}function Lg(e,t,n){var r=n&&n.syntheticException||void 0,i=Rs(t,r,{attachStacktrace:e.attachStacktrace});return qn(i),i.level=Ve.Error,n&&n.event_id&&(i.event_id=n.event_id),he.resolve(i)}function Ag(e,t,n,r){n===void 0&&(n=Ve.Info);var i=r&&r.syntheticException||void 0,a=bs(t,i,{attachStacktrace:e.attachStacktrace});return a.level=n,r&&r.event_id&&(a.event_id=r.event_id),he.resolve(a)}function Rs(e,t,n){n===void 0&&(n={});var r;if(ed(e)&&e.error){var i=e;return e=i.error,r=Ba(hn(e)),r}if(zl(e)||qf(e)){var a=e;if("stack"in e)r=Ba(hn(e));else{var s=a.name||(zl(a)?"DOMError":"DOMException"),o=a.message?s+": "+a.message:s;r=bs(o,t,n),Ss(r,o)}return"code"in a&&(r.tags=w(w({},r.tags),{"DOMException.code":""+a.code})),r}if(Zu(e))return r=Ba(hn(e)),r;if(On(e)||Eo(e)){var l=e;return r=Fg(l,t,n.rejection),qn(r,{synthetic:!0}),r}return r=bs(e,t,n),Ss(r,""+e,void 0),qn(r,{synthetic:!0}),r}function bs(e,t,n){n===void 0&&(n={});var r={message:e};if(n.attachStacktrace&&t){var i=hn(t),a=Mo(i.stack);r.stacktrace={frames:a}}return r}var Me=V(),ai;function gd(){var e,t;if(ai)return ai;if(_s(Me.fetch))return ai=Me.fetch.bind(Me);var n=Me.document,r=Me.fetch;if(typeof((e=n)===null||e===void 0?void 0:e.createElement)=="function")try{var i=n.createElement("iframe");i.hidden=!0,n.head.appendChild(i),!((t=i.contentWindow)===null||t===void 0)&&t.fetch&&(r=i.contentWindow.fetch),n.head.removeChild(i)}catch(a){C.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",a)}return ai=r.bind(Me)}function Ug(e,t){var n=Object.prototype.toString.call(Me&&Me.navigator)==="[object Navigator]",r=n&&typeof Me.navigator.sendBeacon=="function";if(r){var i=Me.navigator.sendBeacon.bind(Me.navigator);return i(e,t)}if(da()){var a=gd();return Ef(a(e,{body:t,method:"POST",credentials:"omit",keepalive:!0}))}}var ac={event:"error",transaction:"transaction",session:"session",attachment:"attachment"},$a=V(),yd=function(){function e(t){var n=this;this.options=t,this._buffer=new ug(30),this._rateLimits={},this._outcomes={},this._api=new ud(t.dsn,t._metadata,t.tunnel),this.url=this._api.getStoreEndpointWithUrlEncodedAuth(),this.options.sendClientReports&&$a.document&&$a.document.addEventListener("visibilitychange",function(){$a.document.visibilityState==="hidden"&&n._flushOutcomes()})}return e.prototype.sendEvent=function(t){throw new K("Transport Class has to implement `sendEvent` method")},e.prototype.close=function(t){return this._buffer.drain(t)},e.prototype.recordLostEvent=function(t,n){var r;if(!!this.options.sendClientReports){var i=ac[n]+":"+t;C.log("Adding outcome: "+i),this._outcomes[i]=(r=this._outcomes[i],(r??0)+1)}},e.prototype._flushOutcomes=function(){if(!!this.options.sendClientReports){var t=this._outcomes;if(this._outcomes={},!Object.keys(t).length){C.log("No outcomes to flush");return}C.log(`Flushing outcomes:
`+JSON.stringify(t,null,2));var n=this._api.getEnvelopeEndpointWithUrlEncodedAuth(),r=JSON.stringify(w({},this.options.tunnel&&{dsn:this._api.getDsn().toString()})),i=JSON.stringify({type:"client_report"}),a=JSON.stringify({timestamp:pa(),discarded_events:Object.keys(t).map(function(o){var l=Er(o.split(":"),2),c=l[0],m=l[1];return{reason:m,category:c,quantity:t[o]}})}),s=r+`
`+i+`
`+a;try{Ug(n,s)}catch(o){C.error(o)}}},e.prototype._handleResponse=function(t){var n=t.requestType,r=t.response,i=t.headers,a=t.resolve,s=t.reject,o=Vt.fromHttpCode(r.status),l=this._handleRateLimit(i);if(l&&C.warn("Too many "+n+" requests, backing off until: "+this._disabledUntil(n)),o===Vt.Success){a({status:o});return}s(r)},e.prototype._disabledUntil=function(t){var n=ac[t];return this._rateLimits[n]||this._rateLimits.all},e.prototype._isRateLimited=function(t){return this._disabledUntil(t)>new Date(Date.now())},e.prototype._handleRateLimit=function(t){var n,r,i,a,s=Date.now(),o=t["x-sentry-rate-limits"],l=t["retry-after"];if(o){try{for(var c=Nr(o.trim().split(",")),m=c.next();!m.done;m=c.next()){var g=m.value,f=g.split(":",2),v=parseInt(f[0],10),S=(isNaN(v)?60:v)*1e3;try{for(var R=(i=void 0,Nr(f[1].split(";"))),p=R.next();!p.done;p=R.next()){var u=p.value;this._rateLimits[u||"all"]=new Date(s+S)}}catch(d){i={error:d}}finally{try{p&&!p.done&&(a=R.return)&&a.call(R)}finally{if(i)throw i.error}}}}catch(d){n={error:d}}finally{try{m&&!m.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return!0}else if(l)return this._rateLimits.all=new Date(s+cg(s,l)),!0;return!1},e}(),zg=function(e){Yr(t,e);function t(n,r){r===void 0&&(r=gd());var i=e.call(this,n)||this;return i._fetch=r,i}return t.prototype.sendEvent=function(n){return this._sendRequest(md(n,this._api),n)},t.prototype.sendSession=function(n){return this._sendRequest(pd(n,this._api),n)},t.prototype._sendRequest=function(n,r){var i=this;if(this._isRateLimited(n.type))return this.recordLostEvent(Fe.RateLimitBackoff,n.type),Promise.reject({event:r,type:n.type,reason:"Transport for "+n.type+" requests locked till "+this._disabledUntil(n.type)+" due to too many requests.",status:429});var a={body:n.body,method:"POST",referrerPolicy:Jf()?"origin":""};return this.options.fetchParameters!==void 0&&Object.assign(a,this.options.fetchParameters),this.options.headers!==void 0&&(a.headers=this.options.headers),this._buffer.add(function(){return new he(function(s,o){i._fetch(n.url,a).then(function(l){var c={"x-sentry-rate-limits":l.headers.get("X-Sentry-Rate-Limits"),"retry-after":l.headers.get("Retry-After")};i._handleResponse({requestType:n.type,response:l,headers:c,resolve:s,reject:o})}).catch(o)})}).then(void 0,function(s){throw s instanceof K?i.recordLostEvent(Fe.QueueOverflow,n.type):i.recordLostEvent(Fe.NetworkError,n.type),s})},t}(yd),Bg=function(e){Yr(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.sendEvent=function(n){return this._sendRequest(md(n,this._api),n)},t.prototype.sendSession=function(n){return this._sendRequest(pd(n,this._api),n)},t.prototype._sendRequest=function(n,r){var i=this;return this._isRateLimited(n.type)?(this.recordLostEvent(Fe.RateLimitBackoff,n.type),Promise.reject({event:r,type:n.type,reason:"Transport for "+n.type+" requests locked till "+this._disabledUntil(n.type)+" due to too many requests.",status:429})):this._buffer.add(function(){return new he(function(a,s){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===4){var c={"x-sentry-rate-limits":o.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":o.getResponseHeader("Retry-After")};i._handleResponse({requestType:n.type,response:o,headers:c,resolve:a,reject:s})}},o.open("POST",n.url);for(var l in i.options.headers)Object.prototype.hasOwnProperty.call(i.options.headers,l)&&o.setRequestHeader(l,i.options.headers[l]);o.send(n.body)})}).then(void 0,function(a){throw a instanceof K?i.recordLostEvent(Fe.QueueOverflow,n.type):i.recordLostEvent(Fe.NetworkError,n.type),a})},t}(yd),$g=function(e){Yr(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.eventFromException=function(n,r){return Lg(this._options,n,r)},t.prototype.eventFromMessage=function(n,r,i){return r===void 0&&(r=Ve.Info),Ag(this._options,n,r,i)},t.prototype._setupTransport=function(){if(!this._options.dsn)return e.prototype._setupTransport.call(this);var n=w(w({},this._options.transportOptions),{dsn:this._options.dsn,tunnel:this._options.tunnel,sendClientReports:this._options.sendClientReports,_metadata:this._options._metadata});return this._options.transport?new this._options.transport(n):da()?new zg(n):new Bg(n)},t}(_g),si=V(),Ns=0;function sc(){return Ns>0}function Hg(){Ns+=1,setTimeout(function(){Ns-=1})}function sn(e,t,n){if(t===void 0&&(t={}),typeof e!="function")return e;try{if(e.__sentry__)return e;if(e.__sentry_wrapped__)return e.__sentry_wrapped__}catch{return e}var r=function(){var s=Array.prototype.slice.call(arguments);try{n&&typeof n=="function"&&n.apply(this,arguments);var o=s.map(function(l){return sn(l,t)});return e.handleEvent?e.handleEvent.apply(this,o):e.apply(this,o)}catch(l){throw Hg(),yg(function(c){c.addEventProcessor(function(m){var g=w({},m);return t.mechanism&&(Ss(g,void 0,void 0),qn(g,t.mechanism)),g.extra=w(w({},g.extra),{arguments:s}),g}),cd(l)}),l}};try{for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}catch{}e.prototype=e.prototype||{},r.prototype=e.prototype,Object.defineProperty(e,"__sentry_wrapped__",{enumerable:!1,value:r}),Object.defineProperties(r,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:e}});try{var a=Object.getOwnPropertyDescriptor(r,"name");a.configurable&&Object.defineProperty(r,"name",{get:function(){return e.name}})}catch{}return r}function Vg(e){if(e===void 0&&(e={}),!!si.document){if(!e.eventId){C.error("Missing eventId option in showReportDialog call");return}if(!e.dsn){C.error("Missing dsn option in showReportDialog call");return}var t=si.document.createElement("script");t.async=!0,t.src=new ud(e.dsn).getReportDialogEndpoint(e),e.onLoad&&(t.onload=e.onLoad);var n=si.document.head||si.document.body;n&&n.appendChild(t)}}var Gg=function(){function e(t){this.name=e.id,this._onErrorHandlerInstalled=!1,this._onUnhandledRejectionHandlerInstalled=!1,this._options=w({onerror:!0,onunhandledrejection:!0},t)}return e.prototype.setupOnce=function(){Error.stackTraceLimit=50,this._options.onerror&&(C.log("Global Handler attached: onerror"),this._installGlobalOnErrorHandler()),this._options.onunhandledrejection&&(C.log("Global Handler attached: onunhandledrejection"),this._installGlobalOnUnhandledRejectionHandler())},e.prototype._installGlobalOnErrorHandler=function(){var t=this;this._onErrorHandlerInstalled||(st({callback:function(n){var r=n.error,i=le(),a=i.getIntegration(e),s=r&&r.__sentry_own_request__===!0;if(!(!a||sc()||s)){var o=i.getClient(),l=r===void 0&&Tn(n.msg)?t._eventFromIncompleteOnError(n.msg,n.url,n.line,n.column):t._enhanceEventWithInitialFrame(Rs(r||n.msg,void 0,{attachStacktrace:o&&o.getOptions().attachStacktrace,rejection:!1}),n.url,n.line,n.column);qn(l,{handled:!1,type:"onerror"}),i.captureEvent(l,{originalException:r})}},type:"error"}),this._onErrorHandlerInstalled=!0)},e.prototype._installGlobalOnUnhandledRejectionHandler=function(){var t=this;this._onUnhandledRejectionHandlerInstalled||(st({callback:function(n){var r=n;try{"reason"in n?r=n.reason:"detail"in n&&"reason"in n.detail&&(r=n.detail.reason)}catch{}var i=le(),a=i.getIntegration(e),s=r&&r.__sentry_own_request__===!0;if(!a||sc()||s)return!0;var o=i.getClient(),l=ua(r)?t._eventFromRejectionWithPrimitive(r):Rs(r,void 0,{attachStacktrace:o&&o.getOptions().attachStacktrace,rejection:!0});l.level=Ve.Error,qn(l,{handled:!1,type:"onunhandledrejection"}),i.captureEvent(l,{originalException:r})},type:"unhandledrejection"}),this._onUnhandledRejectionHandlerInstalled=!0)},e.prototype._eventFromIncompleteOnError=function(t,n,r,i){var a=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,s=ed(t)?t.message:t,o,l=s.match(a);l&&(o=l[1],s=l[2]);var c={exception:{values:[{type:o||"Error",value:s}]}};return this._enhanceEventWithInitialFrame(c,n,r,i)},e.prototype._eventFromRejectionWithPrimitive=function(t){return{exception:{values:[{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(t)}]}}},e.prototype._enhanceEventWithInitialFrame=function(t,n,r,i){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].stacktrace=t.exception.values[0].stacktrace||{},t.exception.values[0].stacktrace.frames=t.exception.values[0].stacktrace.frames||[];var a=isNaN(parseInt(i,10))?void 0:i,s=isNaN(parseInt(r,10))?void 0:r,o=Tn(n)&&n.length>0?n:Cf();return t.exception.values[0].stacktrace.frames.length===0&&t.exception.values[0].stacktrace.frames.push({colno:a,filename:o,function:"?",in_app:!0,lineno:s}),t},e.id="GlobalHandlers",e}(),Wg=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Jg=function(){function e(t){this.name=e.id,this._options=w({XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0},t)}return e.prototype.setupOnce=function(){var t=V();if(this._options.setTimeout&&oe(t,"setTimeout",this._wrapTimeFunction.bind(this)),this._options.setInterval&&oe(t,"setInterval",this._wrapTimeFunction.bind(this)),this._options.requestAnimationFrame&&oe(t,"requestAnimationFrame",this._wrapRAF.bind(this)),this._options.XMLHttpRequest&&"XMLHttpRequest"in t&&oe(XMLHttpRequest.prototype,"send",this._wrapXHR.bind(this)),this._options.eventTarget){var n=Array.isArray(this._options.eventTarget)?this._options.eventTarget:Wg;n.forEach(this._wrapEventTarget.bind(this))}},e.prototype._wrapTimeFunction=function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=n[0];return n[0]=sn(i,{mechanism:{data:{function:it(t)},handled:!0,type:"instrument"}}),t.apply(this,n)}},e.prototype._wrapRAF=function(t){return function(n){return t.call(this,sn(n,{mechanism:{data:{function:"requestAnimationFrame",handler:it(t)},handled:!0,type:"instrument"}}))}},e.prototype._wrapEventTarget=function(t){var n=V(),r=n[t]&&n[t].prototype;!r||!r.hasOwnProperty||!r.hasOwnProperty("addEventListener")||(oe(r,"addEventListener",function(i){return function(a,s,o){try{typeof s.handleEvent=="function"&&(s.handleEvent=sn(s.handleEvent.bind(s),{mechanism:{data:{function:"handleEvent",handler:it(s),target:t},handled:!0,type:"instrument"}}))}catch{}return i.call(this,a,sn(s,{mechanism:{data:{function:"addEventListener",handler:it(s),target:t},handled:!0,type:"instrument"}}),o)}}),oe(r,"removeEventListener",function(i){return function(a,s,o){var l,c=s;try{var m=(l=c)===null||l===void 0?void 0:l.__sentry_wrapped__;m&&i.call(this,a,m,o)}catch{}return i.call(this,a,c,o)}}))},e.prototype._wrapXHR=function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=this,a=["onload","onerror","onprogress","onreadystatechange"];return a.forEach(function(s){s in i&&typeof i[s]=="function"&&oe(i,s,function(o){var l={mechanism:{data:{function:s,handler:it(o)},handled:!0,type:"instrument"}};return o.__sentry_original__&&(l.mechanism.data.handler=it(o.__sentry_original__)),sn(o,l)})}),t.apply(this,n)}},e.id="TryCatch",e}(),hd=function(){function e(t){this.name=e.id,this._options=w({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},t)}return e.prototype.addSentryBreadcrumb=function(t){!this._options.sentry||le().addBreadcrumb({category:"sentry."+(t.type==="transaction"?"transaction":"event"),event_id:t.event_id,level:t.level,message:jt(t)},{event:t})},e.prototype.setupOnce=function(){var t=this;this._options.console&&st({callback:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t._consoleBreadcrumb.apply(t,B(n))},type:"console"}),this._options.dom&&st({callback:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t._domBreadcrumb.apply(t,B(n))},type:"dom"}),this._options.xhr&&st({callback:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t._xhrBreadcrumb.apply(t,B(n))},type:"xhr"}),this._options.fetch&&st({callback:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t._fetchBreadcrumb.apply(t,B(n))},type:"fetch"}),this._options.history&&st({callback:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t._historyBreadcrumb.apply(t,B(n))},type:"history"})},e.prototype._consoleBreadcrumb=function(t){var n={category:"console",data:{arguments:t.args,logger:"console"},level:Ve.fromString(t.level),message:$l(t.args," ")};if(t.level==="assert")if(t.args[0]===!1)n.message="Assertion failed: "+($l(t.args.slice(1)," ")||"console.assert"),n.data.arguments=t.args.slice(1);else return;le().addBreadcrumb(n,{input:t.args,level:t.level})},e.prototype._domBreadcrumb=function(t){var n,r=typeof this._options.dom=="object"?this._options.dom.serializeAttribute:void 0;typeof r=="string"&&(r=[r]);try{n=t.event.target?Mi(t.event.target,r):Mi(t.event,r)}catch{n="<unknown>"}n.length!==0&&le().addBreadcrumb({category:"ui."+t.name,message:n},{event:t.event,name:t.name,global:t.global})},e.prototype._xhrBreadcrumb=function(t){if(t.endTimestamp){if(t.xhr.__sentry_own_request__)return;var n=t.xhr.__sentry_xhr__||{},r=n.method,i=n.url,a=n.status_code,s=n.body;le().addBreadcrumb({category:"xhr",data:{method:r,url:i,status_code:a},type:"http"},{xhr:t.xhr,input:s});return}},e.prototype._fetchBreadcrumb=function(t){!t.endTimestamp||t.fetchData.url.match(/sentry_key/)&&t.fetchData.method==="POST"||(t.error?le().addBreadcrumb({category:"fetch",data:t.fetchData,level:Ve.Error,type:"http"},{data:t.error,input:t.args}):le().addBreadcrumb({category:"fetch",data:w(w({},t.fetchData),{status_code:t.response.status}),type:"http"},{input:t.args,response:t.response}))},e.prototype._historyBreadcrumb=function(t){var n=V(),r=t.from,i=t.to,a=Ua(n.location.href),s=Ua(r),o=Ua(i);s.path||(s=a),a.protocol===o.protocol&&a.host===o.host&&(i=o.relative),a.protocol===s.protocol&&a.host===s.host&&(r=s.relative),le().addBreadcrumb({category:"navigation",data:{from:r,to:i}})},e.id="Breadcrumbs",e}(),Yg="cause",Qg=5,Kg=function(){function e(t){t===void 0&&(t={}),this.name=e.id,this._key=t.key||Yg,this._limit=t.limit||Qg}return e.prototype.setupOnce=function(){ma(function(t,n){var r=le().getIntegration(e);if(r){var i=r._handler&&r._handler.bind(r);return typeof i=="function"?i(t,n):t}return t})},e.prototype._handler=function(t,n){if(!t.exception||!t.exception.values||!n||!St(n.originalException,Error))return t;var r=this._walkErrorTree(n.originalException,this._key);return t.exception.values=B(r,t.exception.values),t},e.prototype._walkErrorTree=function(t,n,r){if(r===void 0&&(r=[]),!St(t[n],Error)||r.length+1>=this._limit)return r;var i=hn(t[n]),a=fd(i);return this._walkErrorTree(t[n],n,B([a],r))},e.id="LinkedErrors",e}(),nn=V(),Xg=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(){ma(function(t){var n,r,i;if(le().getIntegration(e)){if(!nn.navigator&&!nn.location&&!nn.document)return t;var a=((n=t.request)===null||n===void 0?void 0:n.url)||((r=nn.location)===null||r===void 0?void 0:r.href),s=(nn.document||{}).referrer,o=(nn.navigator||{}).userAgent,l=w(w(w({},(i=t.request)===null||i===void 0?void 0:i.headers),s&&{Referer:s}),o&&{"User-Agent":o}),c=w(w({},a&&{url:a}),{headers:l});return w(w({},t),{request:c})}return t})},e.id="UserAgent",e}(),Zg=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(t,n){t(function(r){var i=n().getIntegration(e);if(i){try{if(i._shouldDropEvent(r,i._previousEvent))return C.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{return i._previousEvent=r}return i._previousEvent=r}return r})},e.prototype._shouldDropEvent=function(t,n){return n?!!(this._isSameMessageEvent(t,n)||this._isSameExceptionEvent(t,n)):!1},e.prototype._isSameMessageEvent=function(t,n){var r=t.message,i=n.message;return!(!r&&!i||r&&!i||!r&&i||r!==i||!this._isSameFingerprint(t,n)||!this._isSameStacktrace(t,n))},e.prototype._getFramesFromEvent=function(t){var n=t.exception;if(n)try{return n.values[0].stacktrace.frames}catch{return}else if(t.stacktrace)return t.stacktrace.frames},e.prototype._isSameStacktrace=function(t,n){var r=this._getFramesFromEvent(t),i=this._getFramesFromEvent(n);if(!r&&!i)return!0;if(r&&!i||!r&&i||(r=r,i=i,i.length!==r.length))return!1;for(var a=0;a<i.length;a++){var s=i[a],o=r[a];if(s.filename!==o.filename||s.lineno!==o.lineno||s.colno!==o.colno||s.function!==o.function)return!1}return!0},e.prototype._getExceptionFromEvent=function(t){return t.exception&&t.exception.values&&t.exception.values[0]},e.prototype._isSameExceptionEvent=function(t,n){var r=this._getExceptionFromEvent(n),i=this._getExceptionFromEvent(t);return!(!r||!i||r.type!==i.type||r.value!==i.value||!this._isSameFingerprint(t,n)||!this._isSameStacktrace(t,n))},e.prototype._isSameFingerprint=function(t,n){var r=t.fingerprint,i=n.fingerprint;if(!r&&!i)return!0;if(r&&!i||!r&&i)return!1;r=r,i=i;try{return r.join("")===i.join("")}catch{return!1}},e.id="Dedupe",e}(),ey=function(e){Yr(t,e);function t(n){n===void 0&&(n={});var r=this;return n._metadata=n._metadata||{},n._metadata.sdk=n._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:Fi}],version:Fi},r=e.call(this,$g,n)||this,r}return t.prototype.showReportDialog=function(n){n===void 0&&(n={});var r=V().document;if(!!r){if(!this._isEnabled()){C.error("Trying to call showReportDialog with Sentry Client disabled");return}Vg(w(w({},n),{dsn:n.dsn||this.getDsn()}))}},t.prototype._prepareEvent=function(n,r,i){return n.platform=n.platform||"javascript",e.prototype._prepareEvent.call(this,n,r,i)},t.prototype._sendEvent=function(n){var r=this.getIntegration(hd);r&&r.addSentryBreadcrumb(n),e.prototype._sendEvent.call(this,n)},t}(wg),ty=[new Ng,new Rg,new Jg,new hd,new Gg,new Kg,new Zg,new Xg];function ny(e){if(e===void 0&&(e={}),e.defaultIntegrations===void 0&&(e.defaultIntegrations=ty),e.release===void 0){var t=V();t.SENTRY_RELEASE&&t.SENTRY_RELEASE.id&&(e.release=t.SENTRY_RELEASE.id)}e.autoSessionTracking===void 0&&(e.autoSessionTracking=!0),e.sendClientReports===void 0&&(e.sendClientReports=!0),xg(ey,e),e.autoSessionTracking&&ry()}function ry(){var e=V(),t=e.document;if(typeof t>"u"){C.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}var n=le();typeof n.startSession!="function"||typeof n.captureSession!="function"||(n.startSession({ignoreDuration:!0}),n.captureSession(),st({callback:function(r){var i=r.from,a=r.to;i===void 0||i===a||(n.startSession({ignoreDuration:!0}),n.captureSession())},type:"history"}))}function iy(e){e._metadata=e._metadata||{},e._metadata.sdk=e._metadata.sdk||{name:"sentry.javascript.react",packages:[{name:"npm:@sentry/react",version:Fi}],version:Fi},ny(e)}function kd(e,t){let n=null;const r=new Promise((i,a)=>{n=setTimeout(()=>{a(new Error("Timeout"))},e)});return Promise.race([t,r]).finally(()=>{n!==null&&clearTimeout(n)})}function ay(e){e().catch(t=>{cd(t),console.log(t)})}function sy(e){switch(e){case String:return"String!";case Boolean:return"Boolean!";case"id":return"ID!";default:return e}}function oy(e){const t=Object.keys(e||{});return t.length===0?"":`(${t.map(r=>`$${r}: ${sy(e[r])}`).join(", ")})`}function vd(e,t){const n=Object.keys(t),r={},i=n.map(a=>{const s=t[a];let o,l;typeof s=="string"?(o=s.split(/\s+/),l={}):(o=s.fields.split(/\s+/),l=s.args||{}),Object.assign(r,l);let c=o.join(`
`);c=c?"{"+c+"}":"";let g=Object.keys(l).map(f=>`${f}: $${f}`).join(", ");return g=g?"("+g+")":"",`${a}${g} ${c}`});return`${e} ${n[0]}${oy(r)} {
${i}
}`}function ly(e){return vd("query",e)}function Co(e){return vd("mutation",e)}function Io(e){return{mutation:e}}const wd={}.VITE_SUPPORT_EMAIL;class fr extends Error{constructor(t){super(t.message)}}class kn extends Error{constructor(n){super(n.map(r=>r.message).join(`
`));rt(this,"errors");this.errors=n}static from_gql_errors(n){return new kn(n.map(r=>new fr(r)))}static from_string(n){return new kn([new fr({message:n})])}}async function oc(e,t){const n={query:e,variables:t};let r;try{r=await kd(1e4,fetch("/gql",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify(n)}))}catch{return ct.Err(kn.from_string("There is a problem with your internet connection. Check your connection and try again."))}if(r.status===500)return ct.Err(kn.from_string(`There was a server error. Please try again later, or contact ${wd}`));const{data:i,errors:a}=await r.json();return a?ct.Err(kn.from_gql_errors(a)):ct.Ok(i)}async function cy(e,t,n){const r={query:e,variables:t};let i;try{i=await kd(1e4,fetch("/gql",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify(r)}))}catch{return{errors:[new fr({message:"There is a problem with your internet connection. Check your connection and try again."})]}}if(i.status===500)return{errors:[new fr({message:`There was a server error. Please try again later, or contact ${wd}`})]};const{data:a,errors:s}=await i.json();return s?{errors:s.map(o=>new fr(o))}:{data:a}}async function Ha(e,t,n){let r;return"query"in e?r=ly(e.query):"mutation"in e?r=Co(e.mutation):ct.unimplemented(),cy(r,t)}const uy=Co({sign_up_password:{fields:ca,args:{email:String,password:String,timezone:String}}}),dy=Co({sign_up_email:{fields:"",args:{email:String,timezone:String}}});function py(){return Intl.DateTimeFormat().resolvedOptions().timeZone}function my(){const e=An(),t=So({email:"",password:""});return y(Yu,{title:"Sign in to Your Account",logo:y(zu,{}),children:F(Xu,{className:"space-y-6",onSubmit:async r=>{const i=py();if(r.preventDefault(),t.password){const a=await oc(uy,{timezone:i,...t.form_data});a.map(s=>{gs(s.sign_up_password),e("/onboarding/link-accounts")}),a.map_err(t.set_form_errors_from_gql)}else{const a=await oc(dy,{timezone:i,email:t.email});a.map_err(t.set_form_errors_from_gql),a.map(s=>t.set_form_success("Check your email to complete signup."))}},alerts:t.form_alerts,children:[y(Di,{name:"email",label:"Email address",type:"email",autocomplete:"email",required:!0,errors:t.errors.email,value:t.email,onChange:t.set_email}),y(Di,{name:"password",label:"Password",type:"password",autocomplete:"current-passowrd",required:!1,value:t.password,onChange:t.set_password,errors:t.errors.password}),y("button",{type:"submit",className:"w-full flex btn text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:t.password?"Create Account":"Create Account via Email Link"})]})})}function fy(...e){return e.filter(Boolean).join(" ")}function gy(){if(typeof window<"u"&&window.localStorage){const e=window.localStorage.getItem("color-theme");if(typeof e=="string")return e;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"}function Pd(e){const t=Li.get(),n=window.document.documentElement,r=t==="dark";n.classList.remove(r?"light":"dark"),n.classList.add(t),localStorage.setItem("color-theme",t)}function _d(){const e=Li.use(),t=q.exports.useCallback(()=>{const n=e==="light"?"dark":"light";Li.set(n),Pd()},[e]);return y("button",{className:"dark-mode-toggle",onClick:t,children:e==="dark"?"Light Mode":"Dark Mode"})}const Li=Bu(gy());function yy(){return y("div",{className:"flex flex-col min-h-full w-full min-h-full",children:F("div",{className:"mx-auto max-w-4xl w-full",children:[y("div",{className:"flex justify-end",children:y(_d,{})}),y("h1",{className:"text-center font-bold mt-24 text-7xl",children:"Typescript Docs"}),y("div",{className:"max-w-xl w-full mx-auto",children:y("input",{className:"border w-full border-black rounded-lg p-1 border-2 mt-6",placeholder:"Search..."})}),F("div",{className:"text-center text-xl mt-6 grid grid-cols-2",children:[y("div",{className:"flex justify-end",children:y("strong",{children:"1,000"})}),y("div",{className:"flex justify-start ml-1",children:"libraries"}),y("div",{className:"flex justify-end",children:y("strong",{children:"10,000"})}),y("div",{className:"flex justify-start ml-1",children:"visitors last month"})]}),F("div",{className:"grid grid-cols-2 mt-6 max-w-xl mx-auto",children:[F("div",{className:"",children:[y("h3",{className:"font-bold text-xl",children:"Recent Packages"}),y(_t,{className:"text-blue-500 hover:text-blue-700",to:"/query-registry/2.5.0",children:"query-registry"})]}),F("div",{children:[y("h3",{className:"font-bold text-xl",children:"Recent Packages"}),y(_t,{className:"text-blue-500 hover:text-blue-700",to:"/query-registry/2.5.0",children:"query-registry"})]})]}),y("div",{})]})})}function hy(){return y("div",{className:"bg-gray-400 dark:bg-gray-600 p-2",children:y(_t,{className:"",to:"/",children:"Site-wide navigation"})})}function ky(){const e=typeof location<"u"?new URLSearchParams(location.search).entries():[];return Object.fromEntries(e)}function Sd({children:e}){return F("div",{className:"flex flex-col w-full",children:[y(hy,{}),e]})}function vy(e){return q.exports.useEffect(()=>ay(e),[])}const lc="/account",wy=Io({log_in_password:{fields:ca,args:{email:String,password:String}}}),Py=Io({log_in_token:{fields:ca,args:{token:String}}}),_y=Io({send_login_email:{fields:ca,args:{email:String}}});function Sy(){const e=An(),t=So({email:"",password:""}),n=ky(),r=n.next??lc;return vy(async()=>{if(n.token){const{data:a,errors:s}=await Ha(Py,{token:n.token});a?(gs(a.log_in_token),e(r)):s&&t.set_form_errors(s.map(o=>o.message))}}),y(Yu,{title:"Log in to Your Account",logo:y(zu,{}),children:F(Xu,{className:"space-y-6",onSubmit:async a=>{if(a.preventDefault(),t.password){const{data:s,errors:o}=await Ha(wy,t.form_data);s?(gs(s.log_in_password),e(lc)):o&&t.set_form_errors(o.map(l=>l.message))}else{const{data:s,errors:o}=await Ha(_y,{email:t.email});s?t.set_form_success("Check your email to complete login."):o&&t.set_form_errors(o.map(l=>l.message))}},alerts:t.form_alerts,children:[y(Di,{name:"email",label:"Email address",type:"email",autocomplete:"email",required:!0,value:t.email,onChange:t.set_email,errors:t.errors.email}),y(Di,{name:"password",label:"Password",type:"password",autocomplete:"current-passowrd",required:!1,value:t.password,onChange:t.set_password,errors:t.errors.password}),y("button",{type:"submit",className:"w-full flex btn text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:t.password?"Log In":"Log In via Email Link"})]})})}function xd(e){return q.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),q.exports.createElement("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}function Rd({pkg:e,version:t,file:n,line:r}){return y(_t,{to:`/${e}/${t}/file/${n}#source.${r}`,className:"text-gray-400 hover:text-gray-600",children:y(xd,{className:"w-6 mt-1"})})}function bd({code:e,language:t,line_numbers:n,well:r,id:i}){if(n&&!i)throw new Error("line_numbers requires id");const a=fy(n?"line-numbers linkable-line-numbers":"no-line-numbers",r?"well":"",`language-${t}`),s=q.exports.useRef(null);return q.exports.useEffect(()=>{window.Prism.highlightElement(s.current)},[e]),y("pre",{className:a,id:i,children:y("code",{className:`language-${t}`,ref:s,children:e})})}function xy(e,t){let n=-1,r=e.length,i=0,a=[];for(let s=0;s<t.length;s++){const o=t[s].exec(e);(o?.index??e.length)<r&&(a=o?.map(l=>l.toString())??[],n=s,r=o.index,i=o[0].length)}return r!==0?{content:e.slice(0,r),groups:a,regex_index:-1}:{content:e.slice(0,i),groups:a,regex_index:n}}function Tr(e){e=e.trim();const t=[/```\n?(\w+)\n([\s\S]*?)```/m,/\n\n/m,/\n/m,/{@(\w+) (.*?)( \| (.*?))?}/m,/`(.*?)`/],n=[];let r=0;for(;e;){const i=xy(e,t);i.regex_index===0?n.push(y(bd,{well:!0,code:i.groups[2],language:"typescript"},r)):i.regex_index===1?n.push(y("br",{},r)):i.regex_index===2?n.push(" "):i.regex_index===3?n.push(y("a",{href:i.groups[2],className:"link",target:"_blank",referrerPolicy:"no-referrer",children:i.groups[4]},r)):i.regex_index===4?n.push(y("span",{className:"code",children:i.groups[1]},r)):n.push(i.content),r+=1,e=e.slice(i.content.length)}return n}function Ry(e,t){return[...Array(2*e.length-1)].map((n,r)=>r%2?t:e[r/2])}function Es(e,t){if(e.type==="intrinsic")return e.name;if(e.type==="reference")if(e.typeArguments){const n=Ry(e.typeArguments.map(r=>Es(r,t)),", ");return F("span",{children:[e.name,"<",n,">"]})}else return y(_t,{className:"hover:text-gray-400",to:`/${t.package}/${t.version}/interface/${e.name}`,children:e.name},e.name);else{if(e.type==="reflection")return y("span",{children:"Unsupported"});ct.infallible(e)}}const by=0,Ny="query-registry",Ey=1,Ty="Project",Oy={},qy={shortText:`This package exports several functions to query
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
`},{tag:"example",text:'\nEnable {@link https://www.npmjs.com/package/debug | debug messages}\nby setting the `DEBUG` environment variable to `query-registry`\n(available only in non production environments):\n\n```bash\n$ DEBUG="query-registry"\n```\n'}]},Dy="",jy=[{id:427,name:"FetchError",kind:128,kindString:"Class",flags:{},comment:{shortText:"`FetchError` represents an error that happened when fetching a URL.",text:"The `instanceof` operator can be used to check for this error.\n"},children:[{id:438,name:"constructor",kind:512,kindString:"Constructor",flags:{},sources:[{fileName:"stage/query-registry/src/utils/errors.ts",line:9,character:4}],signatures:[{id:439,name:"new FetchError",kind:16384,kindString:"Constructor signature",flags:{},parameters:[{id:440,name:"url",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"string"}},{id:441,name:"response",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",qualifiedName:"Response",package:".pnpm",name:"Response"}}],type:{type:"reference",id:427,name:"FetchError"},overwrites:{type:"reference",name:"BaseError.constructor"}}],overwrites:{type:"reference",name:"BaseError.constructor"}},{id:447,name:"cause",kind:1024,kindString:"Property",flags:{isExternal:!0,isOptional:!0},sources:[{fileName:"node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es2022.error.d.ts",line:26,character:4}],type:{type:"reference",qualifiedName:"Error",package:".pnpm",name:"Error"},inheritedFrom:{type:"reference",name:"BaseError.cause"}},{id:444,name:"message",kind:1024,kindString:"Property",flags:{isExternal:!0},sources:[{fileName:"stage/query-registry/node_modules/.pnpm/make-error@1.3.6/node_modules/make-error/index.d.ts",line:28,character:4}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"BaseError.message"}},{id:445,name:"name",kind:1024,kindString:"Property",flags:{isExternal:!0},sources:[{fileName:"stage/query-registry/node_modules/.pnpm/make-error@1.3.6/node_modules/make-error/index.d.ts",line:29,character:4}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"BaseError.name"}},{id:443,name:"response",kind:1024,kindString:"Property",flags:{isReadonly:!0},type:{type:"reference",qualifiedName:"Response",package:".pnpm",name:"Response"}},{id:446,name:"stack",kind:1024,kindString:"Property",flags:{isExternal:!0},sources:[{fileName:"stage/query-registry/node_modules/.pnpm/make-error@1.3.6/node_modules/make-error/index.d.ts",line:30,character:4}],type:{type:"intrinsic",name:"string"},inheritedFrom:{type:"reference",name:"BaseError.stack"}},{id:442,name:"url",kind:1024,kindString:"Property",flags:{isReadonly:!0},type:{type:"intrinsic",name:"string"}},{id:432,name:"prepareStackTrace",kind:1024,kindString:"Property",flags:{isStatic:!0,isExternal:!0,isOptional:!0},sources:[{fileName:"stage/query-registry/node_modules/.pnpm/@types+node@17.0.39/node_modules/@types/node/globals.d.ts",line:11,character:4}],type:{type:"reflection",declaration:{id:433,name:"__type",kind:65536,kindString:"Type literal",flags:{},signatures:[{id:434,name:"__type",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Optional override for formatting stack traces",tags:[{tag:"see",text:`https://v8.dev/docs/stack-trace-api#customizing-stack-traces
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
`}]},parameters:[{id:94,name:"__namedParameters",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:95,name:"__type",kind:65536,kindString:"Type literal",flags:{},children:[{id:99,name:"cached",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/search-packages.ts",line:42,character:4}],type:{type:"intrinsic",name:"boolean"}},{id:98,name:"mirrors",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/search-packages.ts",line:41,character:4}],type:{type:"array",elementType:{type:"intrinsic",name:"string"}}},{id:96,name:"query",kind:1024,kindString:"Property",flags:{},sources:[{fileName:"stage/query-registry/src/endpoints/search-packages.ts",line:39,character:4}],type:{type:"reference",id:378,name:"SearchCriteria"}},{id:97,name:"registry",kind:1024,kindString:"Property",flags:{isOptional:!0},sources:[{fileName:"stage/query-registry/src/endpoints/search-packages.ts",line:40,character:4}],type:{type:"intrinsic",name:"string"}}],groups:[{title:"Properties",kind:1024,children:[99,98,96,97]}]}}}],type:{type:"reference",typeArguments:[{type:"reference",id:385,name:"SearchResults"}],qualifiedName:"Promise",package:".pnpm",name:"Promise"}}]}],My=[{title:"Classes",kind:128,children:[427]},{title:"Interfaces",kind:256,children:[100,108,136,141,124,111,118,145,148,152,127,419,155,405,197,394,251,274,279,284,332,132,352,368,370,374,378,389,385,412,415,422]},{title:"Type Aliases",kind:4194304,children:[123,122,351]},{title:"Variables",kind:32,children:[448,449,2,1,5,4,3]},{title:"Functions",kind:64,children:[6,14,22,29,37,46,54,62,71,79,86,92]}],Cy=[{fileName:"stage/query-registry/src/index.ts",line:92,character:0}];var Bt={id:by,name:Ny,kind:Ey,kindString:Ty,flags:Oy,comment:qy,originalName:Dy,children:jy,groups:My,sources:Cy};function Fo(e){const t=e.groups.find(a=>a.kind===128)?.children.map(a=>e.children.find(s=>s.id===a))??[],n=e.groups.find(a=>a.kind===64)?.children.map(a=>e.children.find(s=>s.id===a))??[],r=e.groups.find(a=>[256,4194304].includes(a.kind))?.children.map(a=>e.children.find(s=>s.id===a))??[],i=e.groups.find(a=>[32].includes(a.kind))?.children.map(a=>e.children.find(s=>s.id===a))??[];return{classes:t,functions:n,interfaces:r,constants:i}}function Iy(e){return e.split("/").slice(2).join("/")}function Jn(e){return F("div",{className:"mb-4",children:[y("h3",{className:"text-bold text-xl",children:e.title}),e.items.map(t=>y(_t,{className:"block link ml-3",to:`/${e.package}/${e.version}/${e.type}/${t.name}`,children:t.name},t.name))]})}function Fy(e){return F("div",{className:"bg-gray-300 p-2 dark:bg-gray-700 pt-4",children:[y("div",{className:"mb-4",children:y(_t,{className:"text-bold text-xl",to:`/${e.package}/${e.version}`,children:e.package})}),y(Jn,{title:"Modules",package:e.package,version:e.version,items:[],type:"subdir"}),y(Jn,{title:"Classes",package:e.package,version:e.version,items:e.classes,type:"class"}),y(Jn,{title:"Functions",package:e.package,version:e.version,items:e.functions,type:"function"}),y(Jn,{title:"Interfaces",package:e.package,version:e.version,items:e.interfaces,type:"interface"}),y(Jn,{title:"Constants",package:e.package,version:e.version,items:e.constants,type:"constant"})]})}function Lo({pkg:e,version:t,children:n,constants:r,interfaces:i,classes:a,functions:s,name:o}){return y(Sd,{children:F("div",{className:"flex w-screen",children:[y(Fy,{package:e,version:t,classes:a,functions:s,constants:r,interfaces:i}),F("div",{className:"p-4 flex-grow min-w-0",children:[y("div",{className:"flex justify-end",children:y(_d,{})}),n]})]})})}function Ly(e){return F("div",{children:[F("div",{className:"border-b-2 flex justify-between",children:[y("h1",{className:"text-bold text-2xl inline-block",children:e.package}),y("a",{href:`/${e.package}/${e.version}/file/src/index.ts`,className:"text-gray-400 hover:text-gray-600",children:y(xd,{className:"w-6 mt-1"})})]}),y("div",{className:"mt-3",children:e.comment}),F("div",{className:"mt-6",children:[y("h3",{className:"text-bold text-xl border-b",children:"Examples"}),e.examples.map((t,n)=>y("div",{className:"mt-2 mb-6",children:t},n))]})]})}function oi(e){return F("div",{className:"mb-4",children:[y("h3",{className:"text-bold text-xl border-b",children:e.title}),y("div",{className:"grid-cols-4 grid space-y-1",children:e.items.map((t,n)=>{const r=Tr(t.comment?.shortText??"");return[y(_t,{className:"link",to:`/${e.package}/${e.version}/${e.type}/${t.name}`,children:t.name},t.name),y("div",{className:"col-span-3",children:r},n)]}).flat()})]})}function Va(){const e=Jr(),t=Tr(Bt.comment.shortText),n=Bt.comment.tags.filter(o=>o.tag==="example").map(o=>Tr(o.text)),{classes:r,functions:i,constants:a,interfaces:s}=Fo(Bt);return F(Lo,{pkg:e.package,version:e.version,classes:r,constants:a,interfaces:s,functions:i,name:e.package,children:[y(Ly,{version:e.version,package:e.package,examples:n,comment:t}),y(oi,{title:"Classes",items:r,type:"class",package:e.package,version:e.version}),y(oi,{title:"Functions",items:i,type:"function",package:e.package,version:e.version}),y(oi,{title:"Interfaces",items:s,type:"constant",package:e.package,version:e.version}),y(oi,{title:"Constants",items:a,type:"constant",package:e.package,version:e.version})]})}function Ay(){const e=Jr();return y(hs,{to:`/${e.package}/2.5.0`})}const Uy={"/stage/query-registry/src/index.ts":`/**
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
`};function zy(){const e=Jr(),{classes:t,functions:n,constants:r,interfaces:i}=Fo(Bt),a=Bt.children.find(u=>u.name===e.name),s=a.signatures[0],o=s.comment,l=Tr(o.shortText),c=o?.tags?.filter(u=>u.tag==="example").map(u=>Tr(u.text))??[],{fileName:m,line:g}=a.sources[0],f=Iy(m);let v=a.kindString?.toLowerCase();s.type.name==="Promise"&&(v="async "+v);const S={package:e.package,version:e.version},R=s?.parameters?.map(u=>[u.name,Es(u.type,S)]).join(", "),p=Es(s.type,S);return F(Lo,{pkg:e.package,version:e.version,classes:t,functions:n,constants:r,interfaces:i,name:a.name,children:[F("div",{className:"border-b-2 flex justify-between",children:[F("div",{className:"flex-grow flex items-end font-mono flex-wrap",children:[y("span",{className:"text-gray-500 mr-2 word",children:v}),y("h1",{className:"text-semibold inline",children:a.name}),F("span",{className:"inline",children:["(",R,")"]}),F("span",{className:"inline",children:[": ",p]})]}),y(Rd,{pkg:e.package,version:e.version,file:f,line:g})]}),y("div",{className:"mt-3",children:l}),F("div",{className:"mt-6",children:[y("h3",{className:"text-bold text-xl border-b",children:"Examples"}),c.map((u,d)=>y("div",{className:"mt-2 mb-6 w-full well",children:u},d))]})]})}function By(){const t=Jr()["*"],n="/stage/query-registry/"+t,r=Uy[n];return y(Sd,{children:y(bd,{line_numbers:!0,code:r,language:"typescript",id:"source"})})}function $y(){const e=Jr(),{classes:t,functions:n,constants:r,interfaces:i}=Fo(Bt),a=Bt.children.find(c=>c.name===e.name),{fileName:s,line:o}=a.sources[0],l="interface";return y(Lo,{pkg:e.package,version:e.version,classes:t,functions:n,constants:r,interfaces:i,name:a.name,children:F("div",{className:"border-b-2 flex justify-between",children:[F("div",{className:"flex-grow flex items-end font-mono",children:[y("div",{className:"text-gray-500 mr-2 text-sm",children:l}),y("h1",{className:"text-semibold text-xl inline-block",children:a.name})]}),y(Rd,{pkg:e.package,version:e.version,file:s,line:o})]})})}const cc="/account";function Hy(){const e=$u.use();return F(hf,{children:[y(De,{path:"/",element:y(yy,{})}),y(De,{path:"/login",element:e?y(hs,{replace:!0,to:cc}):y(Sy,{})}),y(De,{path:"/signup",element:e?y(hs,{to:cc}):y(my,{})}),y(De,{path:"/:package",element:y(Ay,{})}),y(De,{path:"/:package/:version/",element:y(Va,{})}),y(De,{path:"/:package/:version/class/:name",element:y(Va,{})}),y(De,{path:"/:package/:version/function/:name",element:y(zy,{})}),y(De,{path:"/:package/:version/interface/:name",element:y($y,{})}),y(De,{path:"/:package/:version/constant/:name",element:y(Va,{})}),y(De,{path:"/:package/:version/file/*",element:y(By,{})})]})}var Ao={},Nd={},_e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.Serr=_e.Maybe=_e.Err=_e.Ok=_e.Result=void 0;class uc extends Error{constructor(n,r){super(n+": "+r);rt(this,"other");rt(this,"name","ResultError");this.other=r,this.stack=this.stack?.split(`
`).slice(6).join(`
`)}}class Ce{constructor(t){rt(this,"result");this.result=t}static value(t){return new Ce({type:"value",value:t})}static error(t){return new Ce({type:"error",error:t})}unwrap(){switch(this.result.type){case"value":return this.result.value;case"error":throw new uc("Tried to .unwrap() on Result, but it contains an error",this.result.error)}}unwrap_err(){switch(this.result.type){case"value":throw new uc("Tried to .unwrap_err() on a Result, but it contains a value",this.result.value);case"error":return this.result.error}}map(t){switch(this.result.type){case"value":return new Ce({type:"value",value:t(this.result.value)});case"error":return this}}try_catch(t){switch(this.result.type){case"value":try{return new Ce({type:"value",value:t(this.result.value)})}catch(n){return new Ce({type:"error",error:n})}case"error":return this}}val_as(){return this}err_as(){return this}unwrap_or(t){switch(this.result.type){case"value":return this.result.value;case"error":return t}}is_ok(){return this.result.type==="value"}is_err(){return this.result.type==="error"}map_err(t){switch(this.result.type){case"value":return this;case"error":return new Ce({type:"error",error:t(this.result.error)})}}and_then(t){switch(this.result.type){case"value":return t(this.result.value);case"error":return this}}and_then_async(t){switch(this.result.type){case"value":return t(this.result.value);case"error":return this}}or_else(t){switch(this.result.type){case"value":return this;case"error":return t(this.result.error)}}or_else_async(t){switch(this.result.type){case"value":return this;case"error":return t(this.result.error)}}}_e.Result=Ce;function Ed(e){return Ce.value(e)}_e.Ok=Ed;function Td(e){return Ce.error(e)}_e.Err=Td;function Vy(e){return e==null?Td(new Error("Not found.")):Ed(e)}_e.Maybe=Vy;function Gy(e){return Ce.error(new Error(e))}_e.Serr=Gy;var Gt={};Object.defineProperty(Gt,"__esModule",{value:!0});Gt.GQLErrorGroup=Gt.GQLError=void 0;class Ts extends Error{constructor(t){super(t.message),this.stack=t.extensions?.exception?.stacktrace?.join(`
`)}}Gt.GQLError=Ts;class Ai extends Error{constructor(n){super(n.map(r=>r.message).join(`
`));rt(this,"errors");this.errors=n}static from_gql_errors(n){return new Ai(n.map(r=>new Ts(r)))}static from_string(n){return new Ai([new Ts({message:n})])}}Gt.GQLErrorGroup=Ai;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.unimplemented=e.infallible=e.NULL_UUID=e.GQLErrorGroup=e.Maybe=e.Serr=e.Result=e.Ok=e.Err=e.gql=e.result=void 0,e.result=_e,e.gql=Gt;var t=_e;Object.defineProperty(e,"Err",{enumerable:!0,get:function(){return t.Err}}),Object.defineProperty(e,"Ok",{enumerable:!0,get:function(){return t.Ok}}),Object.defineProperty(e,"Result",{enumerable:!0,get:function(){return t.Result}}),Object.defineProperty(e,"Serr",{enumerable:!0,get:function(){return t.Serr}}),Object.defineProperty(e,"Maybe",{enumerable:!0,get:function(){return t.Maybe}});var n=Gt;Object.defineProperty(e,"GQLErrorGroup",{enumerable:!0,get:function(){return n.GQLErrorGroup}}),e.NULL_UUID="00000000-0000-0000-0000-000000000000";function r(a){throw new Error("Reached infallible but that shouldn't be possible.")}e.infallible=r;function i(){throw new Error("This codepath has not been implemented.")}e.unimplemented=i})(Nd);Object.defineProperty(Ao,"__esModule",{value:!0});var Od=Ao.usePageState=void 0;const Wy=q.exports,Jy=Nd;function Yy(e){let[t,n]=(0,Wy.useState)(e??{loading:!0});return{set_errors:function(r){n({alerts:(r instanceof Jy.GQLErrorGroup?r.errors:r).map(i=>({message:i.message,type:"danger"}))})},set_alerts:function(r){n({alerts:r})},set_loading:function(){n({loading:!0})},set_state:function(r){n(r)},update_state:function(r){n(i=>({...i,loading:!1,...r}))},state:t,...t}}Od=Ao.usePageState=Yy;function Qy(){return Od(),Wr(),An(),q.exports.useEffect(()=>{Pd(Li.get())},[]),y(Hy,{})}var qd={exports:{}},Oe={},Dd={exports:{}},jd={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}if(typeof window>"u"||typeof MessageChannel!="function"){var l=null,c=null,m=function(){if(l!==null)try{var b=e.unstable_now();l(!0,b),l=null}catch(j){throw setTimeout(m,0),j}};t=function(b){l!==null?setTimeout(t,0,b):(l=b,setTimeout(m,0))},n=function(b,j){c=setTimeout(b,j)},r=function(){clearTimeout(c)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var g=window.setTimeout,f=window.clearTimeout;if(typeof console<"u"){var v=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof v!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var S=!1,R=null,p=-1,u=5,d=0;e.unstable_shouldYield=function(){return e.unstable_now()>=d},i=function(){},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):u=0<b?Math.floor(1e3/b):5};var h=new MessageChannel,k=h.port2;h.port1.onmessage=function(){if(R!==null){var b=e.unstable_now();d=b+u;try{R(!0,b)?k.postMessage(null):(S=!1,R=null)}catch(j){throw k.postMessage(null),j}}else S=!1},t=function(b){R=b,S||(S=!0,k.postMessage(null))},n=function(b,j){p=g(function(){b(e.unstable_now())},j)},r=function(){f(p),p=-1}}function O(b,j){var M=b.length;b.push(j);e:for(;;){var J=M-1>>>1,ne=b[J];if(ne!==void 0&&0<N(ne,j))b[J]=j,b[M]=ne,M=J;else break e}}function x(b){return b=b[0],b===void 0?null:b}function _(b){var j=b[0];if(j!==void 0){var M=b.pop();if(M!==j){b[0]=M;e:for(var J=0,ne=b.length;J<ne;){var qt=2*(J+1)-1,Dt=b[qt],Gn=qt+1,tn=b[Gn];if(Dt!==void 0&&0>N(Dt,M))tn!==void 0&&0>N(tn,Dt)?(b[J]=tn,b[Gn]=M,J=Gn):(b[J]=Dt,b[qt]=M,J=qt);else if(tn!==void 0&&0>N(tn,M))b[J]=tn,b[Gn]=M,J=Gn;else break e}}return j}return null}function N(b,j){var M=b.sortIndex-j.sortIndex;return M!==0?M:b.id-j.id}var E=[],L=[],pe=1,X=null,Q=3,We=!1,nt=!1,Vn=!1;function Ta(b){for(var j=x(L);j!==null;){if(j.callback===null)_(L);else if(j.startTime<=b)_(L),j.sortIndex=j.expirationTime,O(E,j);else break;j=x(L)}}function Oa(b){if(Vn=!1,Ta(b),!nt)if(x(E)!==null)nt=!0,t(qa);else{var j=x(L);j!==null&&n(Oa,j.startTime-b)}}function qa(b,j){nt=!1,Vn&&(Vn=!1,r()),We=!0;var M=Q;try{for(Ta(j),X=x(E);X!==null&&(!(X.expirationTime>j)||b&&!e.unstable_shouldYield());){var J=X.callback;if(typeof J=="function"){X.callback=null,Q=X.priorityLevel;var ne=J(X.expirationTime<=j);j=e.unstable_now(),typeof ne=="function"?X.callback=ne:X===x(E)&&_(E),Ta(j)}else _(E);X=x(E)}if(X!==null)var qt=!0;else{var Dt=x(L);Dt!==null&&n(Oa,Dt.startTime-j),qt=!1}return qt}finally{X=null,Q=M,We=!1}}var cm=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){nt||We||(nt=!0,t(qa))},e.unstable_getCurrentPriorityLevel=function(){return Q},e.unstable_getFirstCallbackNode=function(){return x(E)},e.unstable_next=function(b){switch(Q){case 1:case 2:case 3:var j=3;break;default:j=Q}var M=Q;Q=j;try{return b()}finally{Q=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=cm,e.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var M=Q;Q=b;try{return j()}finally{Q=M}},e.unstable_scheduleCallback=function(b,j,M){var J=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?J+M:J):M=J,b){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=M+ne,b={id:pe++,callback:j,priorityLevel:b,startTime:M,expirationTime:ne,sortIndex:-1},M>J?(b.sortIndex=M,O(L,b),x(E)===null&&b===x(L)&&(Vn?r():Vn=!0,n(Oa,M-J))):(b.sortIndex=ne,O(E,b),nt||We||(nt=!0,t(qa))),b},e.unstable_wrapCallback=function(b){var j=Q;return function(){var M=Q;Q=j;try{return b.apply(this,arguments)}finally{Q=M}}}})(jd);Dd.exports=jd;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=q.exports,H=Ru,te=Dd.exports;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!ga)throw Error(P(227));var Md=new Set,Or={};function Kt(e,t){Dn(e,t),Dn(e+"Capture",t)}function Dn(e,t){for(Or[e]=t,e=0;e<t.length;e++)Md.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dc=Object.prototype.hasOwnProperty,pc={},mc={};function Xy(e){return dc.call(mc,e)?!0:dc.call(pc,e)?!1:Ky.test(e)?mc[e]=!0:(pc[e]=!0,!1)}function Zy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eh(e,t,n,r){if(t===null||typeof t>"u"||Zy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uo=/[\-:]([a-z])/g;function zo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uo,zo);ae[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uo,zo);ae[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uo,zo);ae[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bo(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null,a=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");a||(eh(t,n,i,r)&&(n=null),r||i===null?Xy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xt=ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=60103,It=60106,lt=60107,$o=60108,gr=60114,Ho=60109,Vo=60110,ya=60112,yr=60113,Ui=60120,ha=60115,Go=60116,Wo=60121,Jo=60128,Cd=60129,Yo=60130,Os=60131;if(typeof Symbol=="function"&&Symbol.for){var ee=Symbol.for;or=ee("react.element"),It=ee("react.portal"),lt=ee("react.fragment"),$o=ee("react.strict_mode"),gr=ee("react.profiler"),Ho=ee("react.provider"),Vo=ee("react.context"),ya=ee("react.forward_ref"),yr=ee("react.suspense"),Ui=ee("react.suspense_list"),ha=ee("react.memo"),Go=ee("react.lazy"),Wo=ee("react.block"),ee("react.scope"),Jo=ee("react.opaque.id"),Cd=ee("react.debug_trace_mode"),Yo=ee("react.offscreen"),Os=ee("react.legacy_hidden")}var fc=typeof Symbol=="function"&&Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=fc&&e[fc]||e["@@iterator"],typeof e=="function"?e:null)}var Ga;function lr(e){if(Ga===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ga=t&&t[1]||""}return`
`+Ga+e}var Wa=!1;function li(e,t){if(!e||Wa)return"";Wa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o])return`
`+i[s].replace(" at new "," at ");while(1<=s&&0<=o);break}}}finally{Wa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function th(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=li(e.type,!1),e;case 11:return e=li(e.type.render,!1),e;case 22:return e=li(e.type._render,!1),e;case 1:return e=li(e.type,!0),e;default:return""}}function vn(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lt:return"Fragment";case It:return"Portal";case gr:return"Profiler";case $o:return"StrictMode";case yr:return"Suspense";case Ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vo:return(e.displayName||"Context")+".Consumer";case Ho:return(e._context.displayName||"Context")+".Provider";case ya:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case ha:return vn(e.type);case Wo:return vn(e._render);case Go:t=e._payload,e=e._init;try{return vn(e(t))}catch{}}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Id(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nh(e){var t=Id(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ci(e){e._valueTracker||(e._valueTracker=nh(e))}function Fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Id(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qs(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ld(e,t){t=t.checked,t!=null&&Bo(e,"checked",t,!1)}function Ds(e,t){Ld(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?js(e,t.type,n):t.hasOwnProperty("defaultValue")&&js(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function js(e,t,n){(t!=="number"||zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function rh(e){var t="";return ga.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Ms(e,t){return e=H({children:void 0},t),(t=rh(t.children))&&(e.children=t),e}function wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function Ad(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Is={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ud(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ud(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,zd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==Is.svg||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ih=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){ih.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function Bd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function $d(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ah=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ls(e,t){if(t){if(ah[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function As(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,Pn=null,_n=null;function vc(e){if(e=Kr(e)){if(typeof Us!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Sa(t),Us(e.stateNode,e.type,t))}}function Hd(e){Pn?_n?_n.push(e):_n=[e]:Pn=e}function Vd(){if(Pn){var e=Pn,t=_n;if(_n=Pn=null,vc(e),t)for(e=0;e<t.length;e++)vc(t[e])}}function Ko(e,t){return e(t)}function Gd(e,t,n,r,i){return e(t,n,r,i)}function Xo(){}var Wd=Ko,Ft=!1,Ja=!1;function Zo(){(Pn!==null||_n!==null)&&(Xo(),Vd())}function sh(e,t,n){if(Ja)return e(t,n);Ja=!0;try{return Wd(e,t,n)}finally{Ja=!1,Zo()}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var r=Sa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var zs=!1;if(et)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{zs=!1}function oh(e,t,n,r,i,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var kr=!1,Bi=null,$i=!1,Bs=null,lh={onError:function(e){kr=!0,Bi=e}};function ch(e,t,n,r,i,a,s,o,l){kr=!1,Bi=null,oh.apply(lh,arguments)}function uh(e,t,n,r,i,a,s,o,l){if(ch.apply(this,arguments),kr){if(kr){var c=Bi;kr=!1,Bi=null}else throw Error(P(198));$i||($i=!0,Bs=c)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wc(e){if(Zt(e)!==e)throw Error(P(188))}function dh(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return wc(i),e;if(a===r)return wc(i),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=a;break}if(o===r){s=!0,r=i,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,r=i;break}if(o===r){s=!0,r=a,n=i;break}o=o.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Yd(e){if(e=dh(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Pc(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Qd,el,Kd,Xd,$s=!1,Ue=[],ft=null,gt=null,yt=null,jr=new Map,Mr=new Map,Kn=[],_c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hs(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Sc(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function Xn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e=Hs(t,n,r,i,a),t!==null&&(t=Kr(t),t!==null&&el(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ph(e,t,n,r,i){switch(t){case"focusin":return ft=Xn(ft,e,t,n,r,i),!0;case"dragenter":return gt=Xn(gt,e,t,n,r,i),!0;case"mouseover":return yt=Xn(yt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return jr.set(a,Xn(jr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Mr.set(a,Xn(Mr.get(a)||null,e,t,n,r,i)),!0}return!1}function mh(e){var t=Lt(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=Jd(n),t!==null){e.blockedOn=t,Xd(e.lanePriority,function(){te.unstable_runWithPriority(e.priority,function(){Kd(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Kr(n),t!==null&&el(t),e.blockedOn=n,!1;t.shift()}return!0}function xc(e,t,n){Pi(e)&&n.delete(t)}function fh(){for($s=!1;0<Ue.length;){var e=Ue[0];if(e.blockedOn!==null){e=Kr(e.blockedOn),e!==null&&Qd(e);break}for(var t=e.targetContainers;0<t.length;){var n=il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&Ue.shift()}ft!==null&&Pi(ft)&&(ft=null),gt!==null&&Pi(gt)&&(gt=null),yt!==null&&Pi(yt)&&(yt=null),jr.forEach(xc),Mr.forEach(xc)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,$s||($s=!0,te.unstable_scheduleCallback(te.unstable_NormalPriority,fh)))}function Zd(e){function t(i){return Zn(i,e)}if(0<Ue.length){Zn(Ue[0],e);for(var n=1;n<Ue.length;n++){var r=Ue[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&Zn(ft,e),gt!==null&&Zn(gt,e),yt!==null&&Zn(yt,e),jr.forEach(t),Mr.forEach(t),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)mh(n),n.blockedOn===null&&Kn.shift()}function di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var un={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},Ya={},ep={};et&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete un.animationend.animation,delete un.animationiteration.animation,delete un.animationstart.animation),"TransitionEvent"in window||delete un.transitionend.transition);function ka(e){if(Ya[e])return Ya[e];if(!un[e])return e;var t=un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ep)return Ya[e]=t[n];return e}var tp=ka("animationend"),np=ka("animationiteration"),rp=ka("animationstart"),ip=ka("transitionend"),ap=new Map,tl=new Map,gh=["abort","abort",tp,"animationEnd",np,"animationIteration",rp,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",ip,"transitionEnd","waiting","waiting"];function nl(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),tl.set(r,t),ap.set(r,i),Kt(i,[r])}}var yh=te.unstable_now;yh();var A=8;function on(e){if((1&e)!==0)return A=15,1;if((2&e)!==0)return A=14,2;if((4&e)!==0)return A=13,4;var t=24&e;return t!==0?(A=12,t):(e&32)!==0?(A=11,32):(t=192&e,t!==0?(A=10,t):(e&256)!==0?(A=9,256):(t=3584&e,t!==0?(A=8,t):(e&4096)!==0?(A=7,4096):(t=4186112&e,t!==0?(A=6,t):(t=62914560&e,t!==0?(A=5,t):e&67108864?(A=4,67108864):(e&134217728)!==0?(A=3,134217728):(t=805306368&e,t!==0?(A=2,t):(1073741824&e)!==0?(A=1,1073741824):(A=8,e))))))}function hh(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function kh(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(P(358,e))}}function Cr(e,t){var n=e.pendingLanes;if(n===0)return A=0;var r=0,i=0,a=e.expiredLanes,s=e.suspendedLanes,o=e.pingedLanes;if(a!==0)r=a,i=A=15;else if(a=n&134217727,a!==0){var l=a&~s;l!==0?(r=on(l),i=A):(o&=a,o!==0&&(r=on(o),i=A))}else a=n&~s,a!==0?(r=on(a),i=A):o!==0&&(r=on(o),i=A);if(r===0)return 0;if(r=31-Rt(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&s)===0){if(on(t),i<=A)return t;A=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),i=1<<n,r|=e[n],t&=~i;return r}function sp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hi(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=ln(24&~t),e===0?Hi(10,t):e;case 10:return e=ln(192&~t),e===0?Hi(8,t):e;case 8:return e=ln(3584&~t),e===0&&(e=ln(4186112&~t),e===0&&(e=512)),e;case 2:return t=ln(805306368&~t),t===0&&(t=268435456),t}throw Error(P(358,e))}function ln(e){return e&-e}function Qa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function va(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-Rt(t),e[t]=n}var Rt=Math.clz32?Math.clz32:Ph,vh=Math.log,wh=Math.LN2;function Ph(e){return e===0?32:31-(vh(e)/wh|0)|0}var _h=te.unstable_UserBlockingPriority,Sh=te.unstable_runWithPriority,_i=!0;function xh(e,t,n,r){Ft||Xo();var i=rl,a=Ft;Ft=!0;try{Gd(i,e,t,n,r)}finally{(Ft=a)||Zo()}}function Rh(e,t,n,r){Sh(_h,rl.bind(null,e,t,n,r))}function rl(e,t,n,r){if(_i){var i;if((i=(t&4)===0)&&0<Ue.length&&-1<_c.indexOf(e))e=Hs(null,e,t,n,r),Ue.push(e);else{var a=il(e,t,n,r);if(a===null)i&&Sc(e,r);else{if(i){if(-1<_c.indexOf(e)){e=Hs(a,e,t,n,r),Ue.push(e);return}if(ph(a,e,t,n,r))return;Sc(e,r)}vp(e,t,r,null,n)}}}}function il(e,t,n,r){var i=Qo(r);if(i=Lt(i),i!==null){var a=Zt(i);if(a===null)i=null;else{var s=a.tag;if(s===13){if(i=Jd(a),i!==null)return i;i=null}else if(s===3){if(a.stateNode.hydrate)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null)}}return vp(e,t,r,i,n),null}var ut=null,al=null,Si=null;function op(){if(Si)return Si;var e,t=al,n=t.length,r,i="value"in ut?ut.value:ut.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return Si=i.slice(e,1<r?1-r:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function Rc(){return!1}function xe(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?pi:Rc,this.isPropagationStopped=Rc,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=xe(Un),Qr=H({},Un,{view:0,detail:0}),bh=xe(Qr),Ka,Xa,er,wa=H({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Ka=e.screenX-er.screenX,Xa=e.screenY-er.screenY):Xa=Ka=0,er=e),Ka)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),bc=xe(wa),Nh=H({},wa,{dataTransfer:0}),Eh=xe(Nh),Th=H({},Qr,{relatedTarget:0}),Za=xe(Th),Oh=H({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),qh=xe(Oh),Dh=H({},Un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jh=xe(Dh),Mh=H({},Un,{data:0}),Nc=xe(Mh),Ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fh[e])?!!t[e]:!1}function ol(){return Lh}var Ah=H({},Qr,{key:function(e){if(e.key){var t=Ch[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uh=xe(Ah),zh=H({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=xe(zh),Bh=H({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),$h=xe(Bh),Hh=H({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vh=xe(Hh),Gh=H({},wa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wh=xe(Gh),Jh=[9,13,27,32],ll=et&&"CompositionEvent"in window,vr=null;et&&"documentMode"in document&&(vr=document.documentMode);var Yh=et&&"TextEvent"in window&&!vr,lp=et&&(!ll||vr&&8<vr&&11>=vr),Tc=String.fromCharCode(32),Oc=!1;function cp(e,t){switch(e){case"keyup":return Jh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function Qh(e,t){switch(e){case"compositionend":return up(t);case"keypress":return t.which!==32?null:(Oc=!0,Tc);case"textInput":return e=t.data,e===Tc&&Oc?null:e;default:return null}}function Kh(e,t){if(dn)return e==="compositionend"||!ll&&cp(e,t)?(e=op(),Si=al=ut=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lp&&t.locale!=="ko"?null:t.data;default:return null}}var Xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xh[e.type]:t==="textarea"}function dp(e,t,n,r){Hd(r),t=Vi(t,"onChange"),0<t.length&&(n=new sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Ir=null;function Zh(e){yp(e,0)}function Pa(e){var t=mn(e);if(Fd(t))return e}function ek(e,t){if(e==="change")return t}var pp=!1;if(et){var es;if(et){var ts="oninput"in document;if(!ts){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),ts=typeof Dc.oninput=="function"}es=ts}else es=!1;pp=es&&(!document.documentMode||9<document.documentMode)}function jc(){wr&&(wr.detachEvent("onpropertychange",mp),Ir=wr=null)}function mp(e){if(e.propertyName==="value"&&Pa(Ir)){var t=[];if(dp(t,Ir,e,Qo(e)),e=Zh,Ft)e(t);else{Ft=!0;try{Ko(e,t)}finally{Ft=!1,Zo()}}}}function tk(e,t,n){e==="focusin"?(jc(),wr=t,Ir=n,wr.attachEvent("onpropertychange",mp)):e==="focusout"&&jc()}function nk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pa(Ir)}function rk(e,t){if(e==="click")return Pa(t)}function ik(e,t){if(e==="input"||e==="change")return Pa(t)}function ak(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:ak,sk=Object.prototype.hasOwnProperty;function Fr(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!sk.call(t,n[r])||!Re(e[n[r]],t[n[r]]))return!1;return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cc(e,t){var n=Mc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mc(n)}}function fp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ic(){for(var e=window,t=zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zi(e.document)}return t}function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ok=et&&"documentMode"in document&&11>=document.documentMode,pn=null,Gs=null,Pr=null,Ws=!1;function Fc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ws||pn==null||pn!==zi(r)||(r=pn,"selectionStart"in r&&Vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Fr(Pr,r)||(Pr=r,r=Vi(Gs,"onSelect"),0<r.length&&(t=new sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}nl("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);nl("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);nl(gh,2);for(var Lc="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),ns=0;ns<Lc.length;ns++)tl.set(Lc[ns],0);Dn("onMouseEnter",["mouseout","mouseover"]);Dn("onMouseLeave",["mouseout","mouseover"]);Dn("onPointerEnter",["pointerout","pointerover"]);Dn("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gp=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function Ac(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uh(r,t,void 0,e),e.currentTarget=null}function yp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;Ac(i,o,c),a=l}else for(s=0;s<r.length;s++){if(o=r[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;Ac(i,o,c),a=l}}}if($i)throw e=Bs,$i=!1,Bs=null,e}function U(e,t){var n=Pp(t),r=e+"__bubble";n.has(r)||(kp(t,e,2,!1),n.add(r))}var Uc="_reactListening"+Math.random().toString(36).slice(2);function hp(e){e[Uc]||(e[Uc]=!0,Md.forEach(function(t){gp.has(t)||zc(t,!1,e,null),zc(t,!0,e,null)}))}function zc(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,a=n;if(e==="selectionchange"&&n.nodeType!==9&&(a=n.ownerDocument),r!==null&&!t&&gp.has(e)){if(e!=="scroll")return;i|=2,a=r}var s=Pp(a),o=e+"__"+(t?"capture":"bubble");s.has(o)||(t&&(i|=4),kp(a,e,i,t),s.add(o))}function kp(e,t,n,r){var i=tl.get(t);switch(i===void 0?2:i){case 0:i=xh;break;case 1:i=Rh;break;default:i=rl}n=i.bind(null,t,n,e),i=void 0,!zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vp(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Lt(o),s===null)return;if(l=s.tag,l===5||l===6){r=a=s;continue e}o=o.parentNode}}r=r.return}sh(function(){var c=a,m=Qo(n),g=[];e:{var f=ap.get(e);if(f!==void 0){var v=sl,S=e;switch(e){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":v=Uh;break;case"focusin":S="focus",v=Za;break;case"focusout":S="blur",v=Za;break;case"beforeblur":case"afterblur":v=Za;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=$h;break;case tp:case np:case rp:v=qh;break;case ip:v=Vh;break;case"scroll":v=bh;break;case"wheel":v=Wh;break;case"copy":case"cut":case"paste":v=jh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ec}var R=(t&4)!==0,p=!R&&e==="scroll",u=R?f!==null?f+"Capture":null:f;R=[];for(var d=c,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,u!==null&&(k=Dr(d,u),k!=null&&R.push(Lr(d,k,h)))),p)break;d=d.return}0<R.length&&(f=new v(f,S,null,n,m),g.push({event:f,listeners:R}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&(t&16)===0&&(S=n.relatedTarget||n.fromElement)&&(Lt(S)||S[zn]))break e;if((v||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=c,S=S?Lt(S):null,S!==null&&(p=Zt(S),S!==p||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=c),v!==S)){if(R=bc,k="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(R=Ec,k="onPointerLeave",u="onPointerEnter",d="pointer"),p=v==null?f:mn(v),h=S==null?f:mn(S),f=new R(k,d+"leave",v,n,m),f.target=p,f.relatedTarget=h,k=null,Lt(m)===c&&(R=new R(u,d+"enter",S,n,m),R.target=h,R.relatedTarget=p,k=R),p=k,v&&S)t:{for(R=v,u=S,d=0,h=R;h;h=rn(h))d++;for(h=0,k=u;k;k=rn(k))h++;for(;0<d-h;)R=rn(R),d--;for(;0<h-d;)u=rn(u),h--;for(;d--;){if(R===u||u!==null&&R===u.alternate)break t;R=rn(R),u=rn(u)}R=null}else R=null;v!==null&&Bc(g,f,v,R,!1),S!==null&&p!==null&&Bc(g,p,S,R,!0)}}e:{if(f=c?mn(c):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var O=ek;else if(qc(f))if(pp)O=ik;else{O=nk;var x=tk}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(O=rk);if(O&&(O=O(e,c))){dp(g,O,n,m);break e}x&&x(e,f,c),e==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&js(f,"number",f.value)}switch(x=c?mn(c):window,e){case"focusin":(qc(x)||x.contentEditable==="true")&&(pn=x,Gs=c,Pr=null);break;case"focusout":Pr=Gs=pn=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,Fc(g,n,m);break;case"selectionchange":if(ok)break;case"keydown":case"keyup":Fc(g,n,m)}var _;if(ll)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else dn?cp(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(lp&&n.locale!=="ko"&&(dn||N!=="onCompositionStart"?N==="onCompositionEnd"&&dn&&(_=op()):(ut=m,al="value"in ut?ut.value:ut.textContent,dn=!0)),x=Vi(c,N),0<x.length&&(N=new Nc(N,e,null,n,m),g.push({event:N,listeners:x}),_?N.data=_:(_=up(n),_!==null&&(N.data=_)))),(_=Yh?Qh(e,n):Kh(e,n))&&(c=Vi(c,"onBeforeInput"),0<c.length&&(m=new Nc("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:c}),m.data=_))}yp(g,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Dr(e,n),a!=null&&r.unshift(Lr(e,a,i)),a=Dr(e,t),a!=null&&r.push(Lr(e,a,i))),e=e.return}return r}function rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bc(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&c!==null&&(o=c,i?(l=Dr(n,a),l!=null&&s.unshift(Lr(n,l,o))):i||(l=Dr(n,a),l!=null&&s.push(Lr(n,l,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}function Gi(){}var rs=null,is=null;function wp(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Js(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,lk=typeof clearTimeout=="function"?clearTimeout:void 0;function cl(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var as=0;function ck(e){return{$$typeof:Jo,toString:e,valueOf:e}}var _a=Math.random().toString(36).slice(2),dt="__reactFiber$"+_a,Wi="__reactProps$"+_a,zn="__reactContainer$"+_a,Vc="__reactEvents$"+_a;function Lt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zn]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hc(e);e!==null;){if(n=e[dt])return n;e=Hc(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[dt]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Sa(e){return e[Wi]||null}function Pp(e){var t=e[Vc];return t===void 0&&(t=e[Vc]=new Set),t}var Ys=[],fn=-1;function Tt(e){return{current:e}}function z(e){0>fn||(e.current=Ys[fn],Ys[fn]=null,fn--)}function W(e,t){fn++,Ys[fn]=e.current,e.current=t}var bt={},de=Tt(bt),ke=Tt(!1),Wt=bt;function jn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function Ji(){z(ke),z(de)}function Gc(e,t,n){if(de.current!==bt)throw Error(P(168));W(de,t),W(ke,n)}function _p(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,vn(t)||"Unknown",i));return H({},n,r)}function Ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,Wt=de.current,W(de,e),W(ke,ke.current),!0}function Wc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=_p(e,t,Wt),r.__reactInternalMemoizedMergedChildContext=e,z(ke),z(de),W(de,e)):z(ke),W(ke,n)}var ul=null,$t=null,uk=te.unstable_runWithPriority,dl=te.unstable_scheduleCallback,Qs=te.unstable_cancelCallback,dk=te.unstable_shouldYield,Jc=te.unstable_requestPaint,Ks=te.unstable_now,pk=te.unstable_getCurrentPriorityLevel,xa=te.unstable_ImmediatePriority,Sp=te.unstable_UserBlockingPriority,xp=te.unstable_NormalPriority,Rp=te.unstable_LowPriority,bp=te.unstable_IdlePriority,ss={},mk=Jc!==void 0?Jc:function(){},Je=null,bi=null,os=!1,Yc=Ks(),ce=1e4>Yc?Ks:function(){return Ks()-Yc};function Mn(){switch(pk()){case xa:return 99;case Sp:return 98;case xp:return 97;case Rp:return 96;case bp:return 95;default:throw Error(P(332))}}function Np(e){switch(e){case 99:return xa;case 98:return Sp;case 97:return xp;case 96:return Rp;case 95:return bp;default:throw Error(P(332))}}function Jt(e,t){return e=Np(e),uk(e,t)}function Ar(e,t,n){return e=Np(e),dl(e,t,n)}function Ge(){if(bi!==null){var e=bi;bi=null,Qs(e)}Ep()}function Ep(){if(!os&&Je!==null){os=!0;var e=0;try{var t=Je;Jt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),Je=null}catch(n){throw Je!==null&&(Je=Je.slice(e+1)),dl(xa,Ge),n}finally{os=!1}}}var fk=Xt.ReactCurrentBatchConfig;function je(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yi=Tt(null),Qi=null,gn=null,Ki=null;function pl(){Ki=gn=Qi=null}function ml(e){var t=Yi.current;z(Yi),e.type._context._currentValue=t}function Tp(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function xn(e,t){Qi=e,Ki=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ie=!0),e.firstContext=null)}function Ee(e,t){if(Ki!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ki=e,t=1073741823),t={context:e,observedBits:t,next:null},gn===null){if(Qi===null)throw Error(P(308));gn=t,Qi.dependencies={lanes:0,firstContext:t,responders:null}}else gn=gn.next=t;return e._currentValue}var at=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Qc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ur(e,t,n,r){var i=e.updateQueue;at=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var m=e.alternate;if(m!==null){m=m.updateQueue;var g=m.lastBaseUpdate;g!==s&&(g===null?m.firstBaseUpdate=c:g.next=c,m.lastBaseUpdate=l)}}if(a!==null){g=i.baseState,s=0,m=c=l=null;do{o=a.lane;var f=a.eventTime;if((r&o)===o){m!==null&&(m=m.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,S=a;switch(o=t,f=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){g=v.call(f,g,o);break e}g=v;break e;case 3:v.flags=v.flags&-4097|64;case 0:if(v=S.payload,o=typeof v=="function"?v.call(f,g,o):v,o==null)break e;g=H({},g,o);break e;case 2:at=!0}}a.callback!==null&&(e.flags|=32,o=i.effects,o===null?i.effects=[a]:o.push(a))}else f={eventTime:f,lane:o,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=f,l=g):m=m.next=f,s|=o;if(a=a.next,a===null){if(o=i.shared.pending,o===null)break;a=o.next,o.next=null,i.lastBaseUpdate=o,i.shared.pending=null}}while(1);m===null&&(l=g),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=m,Zr|=s,e.lanes=s,e.memoizedState=g}}function Kc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var qp=new ga.Component().refs;function Xi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ra={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=vt(e),a=ht(r,i);a.payload=t,n!=null&&(a.callback=n),kt(e,a),wt(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=vt(e),a=ht(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),kt(e,a),wt(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=vt(e),i=ht(n,r);i.tag=2,t!=null&&(i.callback=t),kt(e,i),wt(e,r,n)}};function Xc(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,a):!0}function Dp(e,t,n){var r=!1,i=bt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ee(a):(i=ve(t)?Wt:de.current,r=t.contextTypes,a=(r=r!=null)?jn(e,i):bt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ra.enqueueReplaceState(t,t.state,null)}function Xs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=qp,fl(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ee(a):(a=ve(t)?Wt:de.current,i.context=jn(e,a)),Ur(e,n,i,r),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Xi(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ra.enqueueReplaceState(i,i.state,null),Ur(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var mi=Array.isArray;function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=r.refs;s===qp&&(s=r.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function fi(e,t){if(e.type!=="textarea")throw Error(P(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function jp(e){function t(p,u){if(e){var d=p.lastEffect;d!==null?(d.nextEffect=u,p.lastEffect=u):p.firstEffect=p.lastEffect=u,u.nextEffect=null,u.flags=8}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=Et(p,u),p.index=0,p.sibling=null,p}function a(p,u,d){return p.index=d,e?(d=p.alternate,d!==null?(d=d.index,d<u?(p.flags=2,u):d):(p.flags=2,u)):u}function s(p){return e&&p.alternate===null&&(p.flags=2),p}function o(p,u,d,h){return u===null||u.tag!==6?(u=ps(d,p.mode,h),u.return=p,u):(u=i(u,d),u.return=p,u)}function l(p,u,d,h){return u!==null&&u.elementType===d.type?(h=i(u,d.props),h.ref=tr(p,u,d),h.return=p,h):(h=Oi(d.type,d.key,d.props,null,p.mode,h),h.ref=tr(p,u,d),h.return=p,h)}function c(p,u,d,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=ms(d,p.mode,h),u.return=p,u):(u=i(u,d.children||[]),u.return=p,u)}function m(p,u,d,h,k){return u===null||u.tag!==7?(u=En(d,p.mode,h,k),u.return=p,u):(u=i(u,d),u.return=p,u)}function g(p,u,d){if(typeof u=="string"||typeof u=="number")return u=ps(""+u,p.mode,d),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case or:return d=Oi(u.type,u.key,u.props,null,p.mode,d),d.ref=tr(p,null,u),d.return=p,d;case It:return u=ms(u,p.mode,d),u.return=p,u}if(mi(u)||Yn(u))return u=En(u,p.mode,d,null),u.return=p,u;fi(p,u)}return null}function f(p,u,d,h){var k=u!==null?u.key:null;if(typeof d=="string"||typeof d=="number")return k!==null?null:o(p,u,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case or:return d.key===k?d.type===lt?m(p,u,d.props.children,h,k):l(p,u,d,h):null;case It:return d.key===k?c(p,u,d,h):null}if(mi(d)||Yn(d))return k!==null?null:m(p,u,d,h,null);fi(p,d)}return null}function v(p,u,d,h,k){if(typeof h=="string"||typeof h=="number")return p=p.get(d)||null,o(u,p,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case or:return p=p.get(h.key===null?d:h.key)||null,h.type===lt?m(u,p,h.props.children,k,h.key):l(u,p,h,k);case It:return p=p.get(h.key===null?d:h.key)||null,c(u,p,h,k)}if(mi(h)||Yn(h))return p=p.get(d)||null,m(u,p,h,k,null);fi(u,h)}return null}function S(p,u,d,h){for(var k=null,O=null,x=u,_=u=0,N=null;x!==null&&_<d.length;_++){x.index>_?(N=x,x=null):N=x.sibling;var E=f(p,x,d[_],h);if(E===null){x===null&&(x=N);break}e&&x&&E.alternate===null&&t(p,x),u=a(E,u,_),O===null?k=E:O.sibling=E,O=E,x=N}if(_===d.length)return n(p,x),k;if(x===null){for(;_<d.length;_++)x=g(p,d[_],h),x!==null&&(u=a(x,u,_),O===null?k=x:O.sibling=x,O=x);return k}for(x=r(p,x);_<d.length;_++)N=v(x,p,_,d[_],h),N!==null&&(e&&N.alternate!==null&&x.delete(N.key===null?_:N.key),u=a(N,u,_),O===null?k=N:O.sibling=N,O=N);return e&&x.forEach(function(L){return t(p,L)}),k}function R(p,u,d,h){var k=Yn(d);if(typeof k!="function")throw Error(P(150));if(d=k.call(d),d==null)throw Error(P(151));for(var O=k=null,x=u,_=u=0,N=null,E=d.next();x!==null&&!E.done;_++,E=d.next()){x.index>_?(N=x,x=null):N=x.sibling;var L=f(p,x,E.value,h);if(L===null){x===null&&(x=N);break}e&&x&&L.alternate===null&&t(p,x),u=a(L,u,_),O===null?k=L:O.sibling=L,O=L,x=N}if(E.done)return n(p,x),k;if(x===null){for(;!E.done;_++,E=d.next())E=g(p,E.value,h),E!==null&&(u=a(E,u,_),O===null?k=E:O.sibling=E,O=E);return k}for(x=r(p,x);!E.done;_++,E=d.next())E=v(x,p,_,E.value,h),E!==null&&(e&&E.alternate!==null&&x.delete(E.key===null?_:E.key),u=a(E,u,_),O===null?k=E:O.sibling=E,O=E);return e&&x.forEach(function(pe){return t(p,pe)}),k}return function(p,u,d,h){var k=typeof d=="object"&&d!==null&&d.type===lt&&d.key===null;k&&(d=d.props.children);var O=typeof d=="object"&&d!==null;if(O)switch(d.$$typeof){case or:e:{for(O=d.key,k=u;k!==null;){if(k.key===O){switch(k.tag){case 7:if(d.type===lt){n(p,k.sibling),u=i(k,d.props.children),u.return=p,p=u;break e}break;default:if(k.elementType===d.type){n(p,k.sibling),u=i(k,d.props),u.ref=tr(p,k,d),u.return=p,p=u;break e}}n(p,k);break}else t(p,k);k=k.sibling}d.type===lt?(u=En(d.props.children,p.mode,h,d.key),u.return=p,p=u):(h=Oi(d.type,d.key,d.props,null,p.mode,h),h.ref=tr(p,u,d),h.return=p,p=h)}return s(p);case It:e:{for(k=d.key;u!==null;){if(u.key===k)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(p,u.sibling),u=i(u,d.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=ms(d,p.mode,h),u.return=p,p=u}return s(p)}if(typeof d=="string"||typeof d=="number")return d=""+d,u!==null&&u.tag===6?(n(p,u.sibling),u=i(u,d),u.return=p,p=u):(n(p,u),u=ps(d,p.mode,h),u.return=p,p=u),s(p);if(mi(d))return S(p,u,d,h);if(Yn(d))return R(p,u,d,h);if(O&&fi(p,d),typeof d>"u"&&!k)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(P(152,vn(p.type)||"Component"))}return n(p,u)}}var Zi=jp(!0),Mp=jp(!1),Xr={},$e=Tt(Xr),zr=Tt(Xr),Br=Tt(Xr);function At(e){if(e===Xr)throw Error(P(174));return e}function Zs(e,t){switch(W(Br,t),W(zr,e),W($e,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fs(t,e)}z($e),W($e,t)}function Cn(){z($e),z(zr),z(Br)}function eu(e){At(Br.current);var t=At($e.current),n=Fs(t,e.type);t!==n&&(W(zr,e),W($e,n))}function gl(e){zr.current===e&&(z($e),z(zr))}var G=Tt(0);function ea(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qe=null,pt=null,He=!1;function Cp(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function tu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function eo(e){if(He){var t=pt;if(t){var n=t;if(!tu(e,t)){if(t=Sn(n.nextSibling),!t||!tu(e,t)){e.flags=e.flags&-1025|2,He=!1,Qe=e;return}Cp(Qe,n)}Qe=e,pt=Sn(t.firstChild)}else e.flags=e.flags&-1025|2,He=!1,Qe=e}}function nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function gi(e){if(e!==Qe)return!1;if(!He)return nu(e),He=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Js(t,e.memoizedProps))for(t=pt;t;)Cp(e,t),t=Sn(t.nextSibling);if(nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=Qe?Sn(e.stateNode.nextSibling):null;return!0}function ls(){pt=Qe=null,He=!1}var Rn=[];function yl(){for(var e=0;e<Rn.length;e++)Rn[e]._workInProgressVersionPrimary=null;Rn.length=0}var _r=Xt.ReactCurrentDispatcher,Ne=Xt.ReactCurrentBatchConfig,$r=0,Y=null,se=null,re=null,ta=!1,Sr=!1;function ge(){throw Error(P(321))}function hl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function kl(e,t,n,r,i,a){if($r=a,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?yk:hk,e=n(r,i),Sr){a=0;do{if(Sr=!1,!(25>a))throw Error(P(301));a+=1,re=se=null,t.updateQueue=null,_r.current=kk,e=n(r,i)}while(Sr)}if(_r.current=aa,t=se!==null&&se.next!==null,$r=0,re=se=Y=null,ta=!1,t)throw Error(P(300));return e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function en(){if(se===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,se=e;else{if(e===null)throw Error(P(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function ze(e,t){return typeof t=="function"?t(e):t}function nr(e){var t=en(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var o=s=a=null,l=i;do{var c=l.lane;if(($r&c)===c)o!==null&&(o=o.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var m={lane:c,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};o===null?(s=o=m,a=r):o=o.next=m,Y.lanes|=c,Zr|=c}l=l.next}while(l!==null&&l!==i);o===null?a=r:o.next=s,Re(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=o,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function rr(e){var t=en(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);Re(a,t.memoizedState)||(Ie=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ru(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=($r&e)===e)&&(t._workInProgressVersionPrimary=r,Rn.push(t))),e)return n(t._source);throw Rn.push(t),Error(P(350))}function Ip(e,t,n,r){var i=me;if(i===null)throw Error(P(349));var a=t._getVersion,s=a(t._source),o=_r.current,l=o.useState(function(){return ru(i,t,n)}),c=l[1],m=l[0];l=re;var g=e.memoizedState,f=g.refs,v=f.getSnapshot,S=g.source;g=g.subscribe;var R=Y;return e.memoizedState={refs:f,source:t,subscribe:r},o.useEffect(function(){f.getSnapshot=n,f.setSnapshot=c;var p=a(t._source);if(!Re(s,p)){p=n(t._source),Re(m,p)||(c(p),p=vt(R),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var u=i.entanglements,d=p;0<d;){var h=31-Rt(d),k=1<<h;u[h]|=p,d&=~k}}},[n,t,r]),o.useEffect(function(){return r(t._source,function(){var p=f.getSnapshot,u=f.setSnapshot;try{u(p(t._source));var d=vt(R);i.mutableReadLanes|=d&i.pendingLanes}catch(h){u(function(){throw h})}})},[t,r]),Re(v,n)&&Re(S,t)&&Re(g,r)||(e={pending:null,dispatch:null,lastRenderedReducer:ze,lastRenderedState:m},e.dispatch=c=Pl.bind(null,Y,e),l.queue=e,l.baseQueue=null,m=ru(i,t,n),l.memoizedState=l.baseState=m),m}function Fp(e,t,n){var r=en();return Ip(r,e,t,n)}function ir(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:ze,lastRenderedState:e},e=e.dispatch=Pl.bind(null,Y,e),[t.memoizedState,e]}function na(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function iu(e){var t=Ut();return e={current:e},t.memoizedState=e}function ra(){return en().memoizedState}function to(e,t,n,r){var i=Ut();Y.flags|=e,i.memoizedState=na(1|t,n,void 0,r===void 0?null:r)}function vl(e,t,n,r){var i=en();r=r===void 0?null:r;var a=void 0;if(se!==null){var s=se.memoizedState;if(a=s.destroy,r!==null&&hl(r,s.deps)){na(t,n,a,r);return}}Y.flags|=e,i.memoizedState=na(1|t,n,a,r)}function au(e,t){return to(516,4,e,t)}function ia(e,t){return vl(516,4,e,t)}function Lp(e,t){return vl(4,2,e,t)}function Ap(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Up(e,t,n){return n=n!=null?n.concat([e]):null,vl(4,2,Ap.bind(null,t,e),n)}function wl(){}function zp(e,t){var n=en();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bp(e,t){var n=en();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gk(e,t){var n=Mn();Jt(98>n?98:n,function(){e(!0)}),Jt(97<n?97:n,function(){var r=Ne.transition;Ne.transition=1;try{e(!1),t()}finally{Ne.transition=r}})}function Pl(e,t,n){var r=Se(),i=vt(e),a={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(s===null?a.next=a:(a.next=s.next,s.next=a),t.pending=a,s=e.alternate,e===Y||s!==null&&s===Y)Sr=ta=!0;else{if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(a.eagerReducer=s,a.eagerState=l,Re(l,o))return}catch{}finally{}wt(e,i,r)}}var aa={readContext:Ee,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useOpaqueIdentifier:ge,unstable_isNewReconciler:!1},yk={readContext:Ee,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:au,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,to(4,2,Ap.bind(null,t,e),n)},useLayoutEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Pl.bind(null,Y,e),[r.memoizedState,e]},useRef:iu,useState:ir,useDebugValue:wl,useDeferredValue:function(e){var t=ir(e),n=t[0],r=t[1];return au(function(){var i=Ne.transition;Ne.transition=1;try{r(e)}finally{Ne.transition=i}},[e]),n},useTransition:function(){var e=ir(!1),t=e[0];return e=gk.bind(null,e[1]),iu(e),[e,t]},useMutableSource:function(e,t,n){var r=Ut();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Ip(r,e,t,n)},useOpaqueIdentifier:function(){if(He){var e=!1,t=ck(function(){throw e||(e=!0,n("r:"+(as++).toString(36))),Error(P(355))}),n=ir(t)[1];return(Y.mode&2)===0&&(Y.flags|=516,na(5,function(){n("r:"+(as++).toString(36))},void 0,null)),t}return t="r:"+(as++).toString(36),ir(t),t},unstable_isNewReconciler:!1},hk={readContext:Ee,useCallback:zp,useContext:Ee,useEffect:ia,useImperativeHandle:Up,useLayoutEffect:Lp,useMemo:Bp,useReducer:nr,useRef:ra,useState:function(){return nr(ze)},useDebugValue:wl,useDeferredValue:function(e){var t=nr(ze),n=t[0],r=t[1];return ia(function(){var i=Ne.transition;Ne.transition=1;try{r(e)}finally{Ne.transition=i}},[e]),n},useTransition:function(){var e=nr(ze)[0];return[ra().current,e]},useMutableSource:Fp,useOpaqueIdentifier:function(){return nr(ze)[0]},unstable_isNewReconciler:!1},kk={readContext:Ee,useCallback:zp,useContext:Ee,useEffect:ia,useImperativeHandle:Up,useLayoutEffect:Lp,useMemo:Bp,useReducer:rr,useRef:ra,useState:function(){return rr(ze)},useDebugValue:wl,useDeferredValue:function(e){var t=rr(ze),n=t[0],r=t[1];return ia(function(){var i=Ne.transition;Ne.transition=1;try{r(e)}finally{Ne.transition=i}},[e]),n},useTransition:function(){var e=rr(ze)[0];return[ra().current,e]},useMutableSource:Fp,useOpaqueIdentifier:function(){return rr(ze)[0]},unstable_isNewReconciler:!1},vk=Xt.ReactCurrentOwner,Ie=!1;function ye(e,t,n,r){t.child=e===null?Mp(t,null,n,r):Zi(t,e.child,n,r)}function su(e,t,n,r,i){n=n.render;var a=t.ref;return xn(t,i),r=kl(e,t,n,r,a,i),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Ke(e,t,i)):(t.flags|=1,ye(e,t,r,i),t.child)}function ou(e,t,n,r,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Nl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,$p(e,t,s,r,i,a)):(e=Oi(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}return s=e.child,(i&a)===0&&(i=s.memoizedProps,n=n.compare,n=n!==null?n:Fr,n(i,r)&&e.ref===t.ref)?Ke(e,t,a):(t.flags|=1,e=Et(s,r),e.ref=t.ref,e.return=t,t.child=e)}function $p(e,t,n,r,i,a){if(e!==null&&Fr(e.memoizedProps,r)&&e.ref===t.ref)if(Ie=!1,(a&i)!==0)(e.flags&16384)!==0&&(Ie=!0);else return t.lanes=e.lanes,Ke(e,t,a);return no(e,t,n,r,a)}function cs(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},hi(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},hi(t,a!==null?a.baseLanes:n);else return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},hi(t,e),null;else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,hi(t,r);return ye(e,t,i,n),t.child}function Hp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function no(e,t,n,r,i){var a=ve(n)?Wt:de.current;return a=jn(t,a),xn(t,i),n=kl(e,t,n,r,a,i),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Ke(e,t,i)):(t.flags|=1,ye(e,t,n,i),t.child)}function lu(e,t,n,r,i){if(ve(n)){var a=!0;Ri(t)}else a=!1;if(xn(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Dp(t,n,r),Xs(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=ve(n)?Wt:de.current,c=jn(t,c));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||l!==c)&&Zc(t,s,r,c),at=!1;var f=t.memoizedState;s.state=f,Ur(t,r,s,i),l=t.memoizedState,o!==r||f!==l||ke.current||at?(typeof m=="function"&&(Xi(t,n,m,r),l=t.memoizedState),(o=at||Xc(t,n,o,r,f,l,c))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4)):(typeof s.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{s=t.stateNode,Op(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:je(t.type,o),s.props=c,g=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ee(l):(l=ve(n)?Wt:de.current,l=jn(t,l));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==g||f!==l)&&Zc(t,s,r,l),at=!1,f=t.memoizedState,s.state=f,Ur(t,r,s,i);var S=t.memoizedState;o!==g||f!==S||ke.current||at?(typeof v=="function"&&(Xi(t,n,v,r),S=t.memoizedState),(c=at||Xc(t,n,c,r,f,S,l))?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=S),s.props=r,s.state=S,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),r=!1)}return ro(e,t,n,r,a,i)}function ro(e,t,n,r,i,a){Hp(e,t);var s=(t.flags&64)!==0;if(!r&&!s)return i&&Wc(t,n,!1),Ke(e,t,a);r=t.stateNode,vk.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Zi(t,e.child,null,a),t.child=Zi(t,null,o,a)):ye(e,t,o,a),t.memoizedState=r.state,i&&Wc(t,n,!0),t.child}function cu(e){var t=e.stateNode;t.pendingContext?Gc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gc(e,t.context,!1),Zs(e,t.containerInfo)}var yi={dehydrated:null,retryLane:0};function uu(e,t,n){var r=t.pendingProps,i=G.current,a=!1,s;return(s=(t.flags&64)!==0)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),W(G,i&1),e===null?(r.fallback!==void 0&&eo(t),e=r.children,i=r.fallback,a?(e=du(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=yi,e):typeof r.unstable_expectedLoadTime=="number"?(e=du(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=yi,t.lanes=33554432,e):(n=El({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?a?(r=mu(e,t,r.children,r.fallback,n),a=t.child,i=e.child.memoizedState,a.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=yi,r):(n=pu(e,t,r.children,n),t.memoizedState=null,n):a?(r=mu(e,t,r.children,r.fallback,n),a=t.child,i=e.child.memoizedState,a.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=yi,r):(n=pu(e,t,r.children,n),t.memoizedState=null,n)}function du(e,t,n,r){var i=e.mode,a=e.child;return t={mode:"hidden",children:t},(i&2)===0&&a!==null?(a.childLanes=0,a.pendingProps=t):a=El(t,i,0,null),n=En(n,i,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function pu(e,t,n,r){var i=e.child;return e=i.sibling,n=Et(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function mu(e,t,n,r,i){var a=t.mode,s=e.child;e=s.sibling;var o={mode:"hidden",children:n};return(a&2)===0&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=o,s=n.lastEffect,s!==null?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Et(s,o),e!==null?r=Et(e,r):(r=En(r,a,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function fu(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Tp(e.return,t)}function us(e,t,n,r,i,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=a)}function gu(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ye(e,t,r.children,n),r=G.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fu(e,n);else if(e.tag===19)fu(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(G,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ea(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),us(t,!1,i,n,a,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ea(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}us(t,!0,n,null,a,t.lastEffect);break;case"together":us(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zr|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Vp,io,Gp,Wp;Vp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};io=function(){};Gp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,At($e.current);var a=null;switch(n){case"input":i=qs(e,i),r=qs(e,r),a=[];break;case"option":i=Ms(e,i),r=Ms(e,r),a=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),a=[];break;case"textarea":i=Cs(e,i),r=Cs(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}Ls(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var o=i[c];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Or.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(o=i?.[c],r.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Or.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&U("scroll",e),a||o===l||(a=[])):typeof l=="object"&&l!==null&&l.$$typeof===Jo?l.toString():(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Wp=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function wk(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return ve(t.type)&&Ji(),null;case 3:return Cn(),z(ke),z(de),yl(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:r.hydrate||(t.flags|=256)),io(t),null;case 5:gl(t);var i=At(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)Gp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(P(166));return null}if(e=At($e.current),gi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[dt]=t,r[Wi]=a,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(e=0;e<cr.length;e++)U(cr[e],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":gc(r,a),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},U("invalid",r);break;case"textarea":hc(r,a),U("invalid",r)}Ls(n,a),e=null;for(var s in a)a.hasOwnProperty(s)&&(i=a[s],s==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):Or.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&U("scroll",r));switch(n){case"input":ci(r),yc(r,a,!0);break;case"textarea":ci(r),kc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Gi)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(s=i.nodeType===9?i:i.ownerDocument,e===Is.html&&(e=Ud(n)),e===Is.html?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[dt]=t,e[Wi]=r,Vp(e,t,!1,!1),t.stateNode=e,s=As(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<cr.length;i++)U(cr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":gc(e,r),i=qs(e,r),U("invalid",e);break;case"option":i=Ms(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),U("invalid",e);break;case"textarea":hc(e,r),i=Cs(e,r),U("invalid",e);break;default:i=r}Ls(n,i);var o=i;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?$d(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zd(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qr(e,l):typeof l=="number"&&qr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Or.hasOwnProperty(a)?l!=null&&a==="onScroll"&&U("scroll",e):l!=null&&Bo(e,a,l,s))}switch(n){case"input":ci(e),yc(e,r,!1);break;case"textarea":ci(e),kc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?wn(e,!!r.multiple,a,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}wp(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Wp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));n=At(Br.current),At($e.current),gi(t)?(r=t.stateNode,n=t.memoizedProps,r[dt]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r)}return null;case 13:return z(G),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&gi(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(G.current&1)!==0?ie===0&&(ie=3):((ie===0||ie===3)&&(ie=4),me===null||(Zr&134217727)===0&&($n&134217727)===0||bn(me,ue))),(r||n)&&(t.flags|=4),null);case 4:return Cn(),io(t),e===null&&hp(t.stateNode.containerInfo),null;case 10:return ml(t),null;case 17:return ve(t.type)&&Ji(),null;case 19:if(z(G),r=t.memoizedState,r===null)return null;if(a=(t.flags&64)!==0,s=r.rendering,s===null)if(a)ar(r,!1);else{if(ie!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(s=ea(e),s!==null){for(t.flags|=64,ar(r,!1),a=s.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(G,G.current&1|2),t.child}e=e.sibling}r.tail!==null&&ce()>uo&&(t.flags|=64,a=!0,ar(r,!1),t.lanes=33554432)}else{if(!a)if(e=ea(s),e!==null){if(t.flags|=64,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!He)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*ce()-r.renderingStartTime>uo&&n!==1073741824&&(t.flags|=64,a=!0,ar(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(n=r.last,n!==null?n.sibling=s:t.child=s,r.last=s)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=ce(),n.sibling=null,t=G.current,W(G,a?t&1|2:t&1),n):null;case 23:case 24:return bl(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(P(156,t.tag))}function Pk(e){switch(e.tag){case 1:ve(e.type)&&Ji();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(Cn(),z(ke),z(de),yl(),t=e.flags,(t&64)!==0)throw Error(P(285));return e.flags=t&-4097|64,e;case 5:return gl(e),null;case 13:return z(G),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return z(G),null;case 4:return Cn(),null;case 10:return ml(e),null;case 23:case 24:return bl(),null;default:return null}}function _l(e,t){try{var n="",r=t;do n+=th(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i}}function ao(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _k=typeof WeakMap=="function"?WeakMap:Map;function Jp(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oa||(oa=!0,po=r),ao(e,t)},n}function Yp(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return ao(e,t),r(i)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Be===null?Be=new Set([this]):Be.add(this),ao(e,t));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}var Sk=typeof WeakSet=="function"?WeakSet:Set;function yu(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Pt(e,n)}else t.current=null}function xk(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:je(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&cl(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(P(163))}function Rk(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(im(n,e),jk(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:je(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Kc(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Kc(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&wp(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Zd(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(P(163))}function hu(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=Bd("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function ku(e,t){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(ul,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)im(t,n);else{r=t;try{i()}catch(a){Pt(r,a)}}n=n.next}while(n!==e)}break;case 1:if(yu(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(a){Pt(t,a)}break;case 5:yu(t);break;case 4:Qp(e,t)}}function vu(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function wu(e){return e.tag===5||e.tag===3||e.tag===4}function Pu(e){e:{for(var t=e.return;t!==null;){if(wu(t))break e;t=t.return}throw Error(P(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(P(161))}n.flags&16&&(qr(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||wu(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?so(e,n,t):oo(e,n,t)}function so(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(so(e,t,n),e=e.sibling;e!==null;)so(e,t,n),e=e.sibling}function oo(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}function Qp(e,t){for(var n=t,r=!1,i,a;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(P(160));switch(i=r.stateNode,r.tag){case 5:a=!1;break e;case 3:i=i.containerInfo,a=!0;break e;case 4:i=i.containerInfo,a=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var s=e,o=n,l=o;;)if(ku(s,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===o)break e;for(;l.sibling===null;){if(l.return===null||l.return===o)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a?(s=i,o=n.stateNode,s.nodeType===8?s.parentNode.removeChild(o):s.removeChild(o)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,a=!0,n.child.return=n,n=n.child;continue}}else if(ku(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function ds(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,a!==null){for(n[Wi]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Ld(n,r),As(e,i),t=As(e,r),i=0;i<a.length;i+=2){var s=a[i],o=a[i+1];s==="style"?$d(n,o):s==="dangerouslySetInnerHTML"?zd(n,o):s==="children"?qr(n,o):Bo(n,s,o,t)}switch(e){case"input":Ds(n,r);break;case"textarea":Ad(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,a=r.value,a!=null?wn(n,!!r.multiple,a,!1):e!==!!r.multiple&&(r.defaultValue!=null?wn(n,!!r.multiple,r.defaultValue,!0):wn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(P(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Zd(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Rl=ce(),hu(t.child,!0)),_u(t);return;case 19:_u(t);return;case 17:return;case 23:case 24:hu(t,t.memoizedState!==null);return}throw Error(P(163))}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sk),t.forEach(function(r){var i=Ik.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bk(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Nk=Math.ceil,sa=Xt.ReactCurrentDispatcher,Sl=Xt.ReactCurrentOwner,D=0,me=null,Z=null,ue=0,Yt=0,lo=Tt(0),ie=0,ba=null,Bn=0,Zr=0,$n=0,xl=0,co=null,Rl=0,uo=1/0;function Hn(){uo=ce()+500}var T=null,oa=!1,po=null,Be=null,Nt=!1,xr=null,ur=90,mo=[],fo=[],Ze=null,Rr=0,go=null,Ni=-1,Ye=0,Ei=0,br=null,Ti=!1;function Se(){return(D&48)!==0?ce():Ni!==-1?Ni:Ni=ce()}function vt(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return Mn()===99?1:2;if(Ye===0&&(Ye=Bn),fk.transition!==0){Ei!==0&&(Ei=co!==null?co.pendingLanes:0),e=Ye;var t=4186112&~Ei;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=Mn(),(D&4)!==0&&e===98?e=Hi(12,Ye):(e=hh(e),e=Hi(e,Ye)),e}function wt(e,t,n){if(50<Rr)throw Rr=0,go=null,Error(P(185));if(e=Na(e,t),e===null)return null;va(e,t,n),e===me&&($n|=t,ie===4&&bn(e,ue));var r=Mn();t===1?(D&8)!==0&&(D&48)===0?yo(e):(Te(e,n),D===0&&(Hn(),Ge())):((D&4)===0||r!==98&&r!==99||(Ze===null?Ze=new Set([e]):Ze.add(e)),Te(e,n)),co=e}function Na(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Te(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Rt(s),l=1<<o,c=a[o];if(c===-1){if((l&r)===0||(l&i)!==0){c=t,on(l);var m=A;a[o]=10<=m?c+250:6<=m?c+5e3:-1}}else c<=t&&(e.expiredLanes|=l);s&=~l}if(r=Cr(e,e===me?ue:0),t=A,r===0)n!==null&&(n!==ss&&Qs(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==ss&&Qs(n)}t===15?(n=yo.bind(null,e),Je===null?(Je=[n],bi=dl(xa,Ep)):Je.push(n),n=ss):t===14?n=Ar(99,yo.bind(null,e)):(n=kh(t),n=Ar(n,Kp.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Kp(e){if(Ni=-1,Ei=Ye=0,(D&48)!==0)throw Error(P(327));var t=e.callbackNode;if(Ot()&&e.callbackNode!==t)return null;var n=Cr(e,e===me?ue:0);if(n===0)return null;var r=n,i=D;D|=16;var a=tm();(me!==e||ue!==r)&&(Hn(),Nn(e,r));do try{Ok();break}catch(o){em(e,o)}while(1);if(pl(),sa.current=a,D=i,Z!==null?r=0:(me=null,ue=0,r=ie),(Bn&$n)!==0)Nn(e,0);else if(r!==0){if(r===2&&(D|=64,e.hydrate&&(e.hydrate=!1,cl(e.containerInfo)),n=sp(e),n!==0&&(r=dr(e,n))),r===1)throw t=ba,Nn(e,0),bn(e,n),Te(e,ce()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(P(345));case 2:Mt(e);break;case 3:if(bn(e,n),(n&62914560)===n&&(r=Rl+500-ce(),10<r)){if(Cr(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$c(Mt.bind(null,e),r);break}Mt(e);break;case 4:if(bn(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-Rt(n);a=1<<s,s=r[s],s>i&&(i=s),n&=~a}if(n=i,n=ce()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Nk(n/1960))-n,10<n){e.timeoutHandle=$c(Mt.bind(null,e),n);break}Mt(e);break;case 5:Mt(e);break;default:throw Error(P(329))}}return Te(e,ce()),e.callbackNode===t?Kp.bind(null,e):null}function bn(e,t){for(t&=~xl,t&=~$n,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function yo(e){if((D&48)!==0)throw Error(P(327));if(Ot(),e===me&&(e.expiredLanes&ue)!==0){var t=ue,n=dr(e,t);(Bn&$n)!==0&&(t=Cr(e,t),n=dr(e,t))}else t=Cr(e,0),n=dr(e,t);if(e.tag!==0&&n===2&&(D|=64,e.hydrate&&(e.hydrate=!1,cl(e.containerInfo)),t=sp(e),t!==0&&(n=dr(e,t))),n===1)throw n=ba,Nn(e,0),bn(e,t),Te(e,ce()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e),Te(e,ce()),null}function Ek(){if(Ze!==null){var e=Ze;Ze=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Te(t,ce())})}Ge()}function Xp(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Hn(),Ge())}}function Zp(e,t){var n=D;D&=-2,D|=8;try{return e(t)}finally{D=n,D===0&&(Hn(),Ge())}}function hi(e,t){W(lo,Yt),Yt|=t,Bn|=t}function bl(){Yt=lo.current,z(lo)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lk(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ji();break;case 3:Cn(),z(ke),z(de),yl();break;case 5:gl(r);break;case 4:Cn();break;case 13:z(G);break;case 19:z(G);break;case 10:ml(r);break;case 23:case 24:bl()}n=n.return}me=e,Z=Et(e.current,null),ue=Yt=Bn=t,ie=0,ba=null,xl=$n=Zr=0}function em(e,t){do{var n=Z;try{if(pl(),_r.current=aa,ta){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ta=!1}if($r=0,re=se=Y=null,Sr=!1,Sl.current=null,n===null||n.return===null){ie=1,ba=t,Z=null;break}e:{var a=e,s=n.return,o=n,l=t;if(t=ue,o.flags|=2048,o.firstEffect=o.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l;if((o.mode&2)===0){var m=o.alternate;m?(o.updateQueue=m.updateQueue,o.memoizedState=m.memoizedState,o.lanes=m.lanes):(o.updateQueue=null,o.memoizedState=null)}var g=(G.current&1)!==0,f=s;do{var v;if(v=f.tag===13){var S=f.memoizedState;if(S!==null)v=S.dehydrated!==null;else{var R=f.memoizedProps;v=R.fallback===void 0?!1:R.unstable_avoidThisFallback!==!0?!0:!g}}if(v){var p=f.updateQueue;if(p===null){var u=new Set;u.add(c),f.updateQueue=u}else p.add(c);if((f.mode&2)===0){if(f.flags|=64,o.flags|=16384,o.flags&=-2981,o.tag===1)if(o.alternate===null)o.tag=17;else{var d=ht(-1,1);d.tag=2,kt(o,d)}o.lanes|=1;break e}l=void 0,o=t;var h=a.pingCache;if(h===null?(h=a.pingCache=new _k,l=new Set,h.set(c,l)):(l=h.get(c),l===void 0&&(l=new Set,h.set(c,l))),!l.has(o)){l.add(o);var k=Ck.bind(null,a,c,o);c.then(k,k)}f.flags|=4096,f.lanes=t;break e}f=f.return}while(f!==null);l=Error((vn(o.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}ie!==5&&(ie=2),l=_l(l,o),f=s;do{switch(f.tag){case 3:a=l,f.flags|=4096,t&=-t,f.lanes|=t;var O=Jp(f,a,t);Qc(f,O);break e;case 1:a=l;var x=f.type,_=f.stateNode;if((f.flags&64)===0&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Be===null||!Be.has(_)))){f.flags|=4096,t&=-t,f.lanes|=t;var N=Yp(f,a,t);Qc(f,N);break e}}f=f.return}while(f!==null)}rm(n)}catch(E){t=E,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function tm(){var e=sa.current;return sa.current=aa,e===null?aa:e}function dr(e,t){var n=D;D|=16;var r=tm();me===e&&ue===t||Nn(e,t);do try{Tk();break}catch(i){em(e,i)}while(1);if(pl(),D=n,sa.current=r,Z!==null)throw Error(P(261));return me=null,ue=0,ie}function Tk(){for(;Z!==null;)nm(Z)}function Ok(){for(;Z!==null&&!dk();)nm(Z)}function nm(e){var t=am(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?rm(e):Z=t,Sl.current=null}function rm(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=wk(n,t,Yt),n!==null){Z=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Yt&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=Pk(t),n!==null){n.flags&=2047,Z=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ie===0&&(ie=5)}function Mt(e){var t=Mn();return Jt(99,qk.bind(null,e,t)),null}function qk(e,t){do Ot();while(xr!==null);if((D&48)!==0)throw Error(P(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,a=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,o=e.expirationTimes;0<a;){var l=31-Rt(a),c=1<<l;i[l]=0,s[l]=-1,o[l]=-1,a&=~c}if(Ze!==null&&(r&24)===0&&Ze.has(e)&&Ze.delete(e),e===me&&(Z=me=null,ue=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=D,D|=32,Sl.current=null,rs=_i,s=Ic(),Vs(s)){if("selectionStart"in s)o={start:s.selectionStart,end:s.selectionEnd};else e:if(o=(o=s.ownerDocument)&&o.defaultView||window,(c=o.getSelection&&o.getSelection())&&c.rangeCount!==0){o=c.anchorNode,a=c.anchorOffset,l=c.focusNode,c=c.focusOffset;try{o.nodeType,l.nodeType}catch{o=null;break e}var m=0,g=-1,f=-1,v=0,S=0,R=s,p=null;t:for(;;){for(var u;R!==o||a!==0&&R.nodeType!==3||(g=m+a),R!==l||c!==0&&R.nodeType!==3||(f=m+c),R.nodeType===3&&(m+=R.nodeValue.length),(u=R.firstChild)!==null;)p=R,R=u;for(;;){if(R===s)break t;if(p===o&&++v===a&&(g=m),p===l&&++S===c&&(f=m),(u=R.nextSibling)!==null)break;R=p,p=R.parentNode}R=u}o=g===-1||f===-1?null:{start:g,end:f}}else o=null;o=o||{start:0,end:0}}else o=null;is={focusedElem:s,selectionRange:o},_i=!1,br=null,Ti=!1,T=r;do try{Dk()}catch(E){if(T===null)throw Error(P(330));Pt(T,E),T=T.nextEffect}while(T!==null);br=null,T=r;do try{for(s=e;T!==null;){var d=T.flags;if(d&16&&qr(T.stateNode,""),d&128){var h=T.alternate;if(h!==null){var k=h.ref;k!==null&&(typeof k=="function"?k(null):k.current=null)}}switch(d&1038){case 2:Pu(T),T.flags&=-3;break;case 6:Pu(T),T.flags&=-3,ds(T.alternate,T);break;case 1024:T.flags&=-1025;break;case 1028:T.flags&=-1025,ds(T.alternate,T);break;case 4:ds(T.alternate,T);break;case 8:o=T,Qp(s,o);var O=o.alternate;vu(o),O!==null&&vu(O)}T=T.nextEffect}}catch(E){if(T===null)throw Error(P(330));Pt(T,E),T=T.nextEffect}while(T!==null);if(k=is,h=Ic(),d=k.focusedElem,s=k.selectionRange,h!==d&&d&&d.ownerDocument&&fp(d.ownerDocument.documentElement,d)){for(s!==null&&Vs(d)&&(h=s.start,k=s.end,k===void 0&&(k=h),"selectionStart"in d?(d.selectionStart=h,d.selectionEnd=Math.min(k,d.value.length)):(k=(h=d.ownerDocument||document)&&h.defaultView||window,k.getSelection&&(k=k.getSelection(),o=d.textContent.length,O=Math.min(s.start,o),s=s.end===void 0?O:Math.min(s.end,o),!k.extend&&O>s&&(o=s,s=O,O=o),o=Cc(d,O),a=Cc(d,s),o&&a&&(k.rangeCount!==1||k.anchorNode!==o.node||k.anchorOffset!==o.offset||k.focusNode!==a.node||k.focusOffset!==a.offset)&&(h=h.createRange(),h.setStart(o.node,o.offset),k.removeAllRanges(),O>s?(k.addRange(h),k.extend(a.node,a.offset)):(h.setEnd(a.node,a.offset),k.addRange(h)))))),h=[],k=d;k=k.parentNode;)k.nodeType===1&&h.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<h.length;d++)k=h[d],k.element.scrollLeft=k.left,k.element.scrollTop=k.top}_i=!!rs,is=rs=null,e.current=n,T=r;do try{for(d=e;T!==null;){var x=T.flags;if(x&36&&Rk(d,T.alternate,T),x&128){h=void 0;var _=T.ref;if(_!==null){var N=T.stateNode;switch(T.tag){case 5:h=N;break;default:h=N}typeof _=="function"?_(h):_.current=h}}T=T.nextEffect}}catch(E){if(T===null)throw Error(P(330));Pt(T,E),T=T.nextEffect}while(T!==null);T=null,mk(),D=i}else e.current=n;if(Nt)Nt=!1,xr=e,ur=t;else for(T=r;T!==null;)t=T.nextEffect,T.nextEffect=null,T.flags&8&&(x=T,x.sibling=null,x.stateNode=null),T=t;if(r=e.pendingLanes,r===0&&(Be=null),r===1?e===go?Rr++:(Rr=0,go=e):Rr=0,n=n.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(ul,n,void 0,(n.current.flags&64)===64)}catch{}if(Te(e,ce()),oa)throw oa=!1,e=po,po=null,e;return(D&8)!==0||Ge(),null}function Dk(){for(;T!==null;){var e=T.alternate;Ti||br===null||((T.flags&8)!==0?Pc(T,br)&&(Ti=!0):T.tag===13&&bk(e,T)&&Pc(T,br)&&(Ti=!0));var t=T.flags;(t&256)!==0&&xk(e,T),(t&512)===0||Nt||(Nt=!0,Ar(97,function(){return Ot(),null})),T=T.nextEffect}}function Ot(){if(ur!==90){var e=97<ur?97:ur;return ur=90,Jt(e,Mk)}return!1}function jk(e,t){mo.push(t,e),Nt||(Nt=!0,Ar(97,function(){return Ot(),null}))}function im(e,t){fo.push(t,e),Nt||(Nt=!0,Ar(97,function(){return Ot(),null}))}function Mk(){if(xr===null)return!1;var e=xr;if(xr=null,(D&48)!==0)throw Error(P(331));var t=D;D|=32;var n=fo;fo=[];for(var r=0;r<n.length;r+=2){var i=n[r],a=n[r+1],s=i.destroy;if(i.destroy=void 0,typeof s=="function")try{s()}catch(l){if(a===null)throw Error(P(330));Pt(a,l)}}for(n=mo,mo=[],r=0;r<n.length;r+=2){i=n[r],a=n[r+1];try{var o=i.create;i.destroy=o()}catch(l){if(a===null)throw Error(P(330));Pt(a,l)}}for(o=e.current.firstEffect;o!==null;)e=o.nextEffect,o.nextEffect=null,o.flags&8&&(o.sibling=null,o.stateNode=null),o=e;return D=t,Ge(),!0}function Su(e,t,n){t=_l(n,t),t=Jp(e,t,1),kt(e,t),t=Se(),e=Na(e,1),e!==null&&(va(e,1,t),Te(e,t))}function Pt(e,t){if(e.tag===3)Su(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Su(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Be===null||!Be.has(r))){e=_l(t,e);var i=Yp(n,e,1);if(kt(n,i),i=Se(),n=Na(n,1),n!==null)va(n,1,i),Te(n,i);else if(typeof r.componentDidCatch=="function"&&(Be===null||!Be.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function Ck(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ue&n)===n&&(ie===4||ie===3&&(ue&62914560)===ue&&500>ce()-Rl?Nn(e,0):xl|=n),Te(e,t)}function Ik(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=Mn()===99?1:2:(Ye===0&&(Ye=Bn),t=ln(62914560&~Ye),t===0&&(t=4194304))),n=Se(),e=Na(e,t),e!==null&&(va(e,t,n),Te(e,n))}var am;am=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ie=!0;else if((n&r)!==0)Ie=(e.flags&16384)!==0;else{switch(Ie=!1,t.tag){case 3:cu(t),ls();break;case 5:eu(t);break;case 1:ve(t.type)&&Ri(t);break;case 4:Zs(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;W(Yi,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?uu(e,t,n):(W(G,G.current&1),t=Ke(e,t,n),t!==null?t.sibling:null);W(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return gu(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(G,G.current),r)break;return null;case 23:case 24:return t.lanes=0,cs(e,t,n)}return Ke(e,t,n)}else Ie=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=jn(t,de.current),xn(t,n),i=kl(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)){var a=!0;Ri(t)}else a=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fl(t);var s=r.getDerivedStateFromProps;typeof s=="function"&&Xi(t,r,s,e),i.updater=Ra,t.stateNode=i,i._reactInternals=t,Xs(t,r,e,n),t=ro(null,t,r,!0,a,n)}else t.tag=0,ye(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Lk(i),e=je(i,e),a){case 0:t=no(null,t,i,e,n);break e;case 1:t=lu(null,t,i,e,n);break e;case 11:t=su(null,t,i,e,n);break e;case 14:t=ou(null,t,i,je(i.type,e),r,n);break e}throw Error(P(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),no(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),lu(e,t,r,i,n);case 3:if(cu(t),r=t.updateQueue,e===null||r===null)throw Error(P(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,Op(e,t),Ur(t,r,null,n),r=t.memoizedState.element,r===i)ls(),t=Ke(e,t,n);else{if(i=t.stateNode,(a=i.hydrate)&&(pt=Sn(t.stateNode.containerInfo.firstChild),Qe=t,a=He=!0),a){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)a=e[i],a._workInProgressVersionPrimary=e[i+1],Rn.push(a);for(n=Mp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else ye(e,t,r,n),ls();t=t.child}return t;case 5:return eu(t),e===null&&eo(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Js(r,i)?s=null:a!==null&&Js(r,a)&&(t.flags|=16),Hp(e,t),ye(e,t,s,n),t.child;case 6:return e===null&&eo(t),null;case 13:return uu(e,t,n);case 4:return Zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zi(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),su(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value;var o=t.type._context;if(W(Yi,o._currentValue),o._currentValue=a,s!==null)if(o=s.value,a=Re(o,a)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(o,a):1073741823)|0,a===0){if(s.children===i.children&&!ke.current){t=Ke(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r&&(c.observedBits&a)!==0){o.tag===1&&(c=ht(-1,n&-n),c.tag=2,kt(o,c)),o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Tp(o.return,n),l.lanes|=n;break}c=c.next}}else s=o.tag===10&&o.type===t.type?null:o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps,r=a.children,xn(t,n),i=Ee(i,a.unstable_observedBits),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return i=t.type,a=je(i,t.pendingProps),a=je(i.type,a),ou(e,t,i,a,r,n);case 15:return $p(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,ve(r)?(e=!0,Ri(t)):e=!1,xn(t,n),Dp(t,r,i),Xs(t,r,i,n),ro(null,t,r,!0,e,n);case 19:return gu(e,t,n);case 23:return cs(e,t,n);case 24:return cs(e,t,n)}throw Error(P(156,t.tag))};function Fk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new Fk(e,t,n,r)}function Nl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lk(e){if(typeof e=="function")return Nl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ya)return 11;if(e===ha)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oi(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")Nl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case lt:return En(n.children,i,a,t);case Cd:s=8,i|=16;break;case $o:s=8,i|=1;break;case gr:return e=be(12,n,t,i|8),e.elementType=gr,e.type=gr,e.lanes=a,e;case yr:return e=be(13,n,t,i),e.type=yr,e.elementType=yr,e.lanes=a,e;case Ui:return e=be(19,n,t,i),e.elementType=Ui,e.lanes=a,e;case Yo:return El(n,i,a,t);case Os:return e=be(24,n,t,i),e.elementType=Os,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ho:s=10;break e;case Vo:s=9;break e;case ya:s=11;break e;case ha:s=14;break e;case Go:s=16,r=null;break e;case Wo:s=22;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=be(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function En(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function El(e,t,n,r){return e=be(23,e,r,t),e.elementType=Yo,e.lanes=n,e}function ps(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ak(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Qa(0),this.expirationTimes=Qa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qa(0),this.mutableSourceEagerHydrationData=null}function Uk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function la(e,t,n,r){var i=t.current,a=Se(),s=vt(i);e:if(n){n=n._reactInternals;t:{if(Zt(n)!==n||n.tag!==1)throw Error(P(170));var o=n;do{switch(o.tag){case 3:o=o.stateNode.context;break t;case 1:if(ve(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break t}}o=o.return}while(o!==null);throw Error(P(171))}if(n.tag===1){var l=n.type;if(ve(l)){n=_p(n,l,o);break e}}n=o}else n=bt;return t.context===null?t.context=n:t.pendingContext=n,t=ht(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),kt(i,t),wt(i,s,a),s}function fs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tl(e,t){xu(e,t),(e=e.alternate)&&xu(e,t)}function zk(){return null}function Ol(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new Ak(e,t,n!=null&&n.hydrate===!0),t=be(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,fl(t),e[zn]=n.current,hp(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}Ol.prototype.render=function(e){la(e,this._internalRoot,null,null)};Ol.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;la(null,e,null,function(){t[zn]=null})};function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bk(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Ol(e,0,t?{hydrate:!0}:void 0)}function Ea(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a._internalRoot;if(typeof i=="function"){var o=i;i=function(){var c=fs(s);o.call(c)}}la(t,s,e,i)}else{if(a=n._reactRootContainer=Bk(n,r),s=a._internalRoot,typeof i=="function"){var l=i;i=function(){var c=fs(s);l.call(c)}}Zp(function(){la(t,s,e,i)})}return fs(s)}Qd=function(e){if(e.tag===13){var t=Se();wt(e,4,t),Tl(e,4)}};el=function(e){if(e.tag===13){var t=Se();wt(e,67108864,t),Tl(e,67108864)}};Kd=function(e){if(e.tag===13){var t=Se(),n=vt(e);wt(e,n,t),Tl(e,n)}};Xd=function(e,t){return t()};Us=function(e,t,n){switch(t){case"input":if(Ds(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Sa(r);if(!i)throw Error(P(90));Fd(r),Ds(r,i)}}}break;case"textarea":Ad(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};Ko=Xp;Gd=function(e,t,n,r,i){var a=D;D|=4;try{return Jt(98,e.bind(null,t,n,r,i))}finally{D=a,D===0&&(Hn(),Ge())}};Xo=function(){(D&49)===0&&(Ek(),Ot())};Wd=function(e,t){var n=D;D|=2;try{return e(t)}finally{D=n,D===0&&(Hn(),Ge())}};function sm(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ei(t))throw Error(P(200));return Uk(e,t,null,n)}var $k={Events:[Kr,mn,Sa,Hd,Vd,Ot,{current:!1}]},sr={findFiberByHostInstance:Lt,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Hk={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yd(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||zk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{ul=ki.inject(Hk),$t=ki}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$k;Oe.createPortal=sm;Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):Error(P(268,Object.keys(e)));return e=Yd(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e,t){var n=D;if((n&48)!==0)return e(t);D|=1;try{if(e)return Jt(99,e.bind(null,t))}finally{D=n,Ge()}};Oe.hydrate=function(e,t,n){if(!ei(t))throw Error(P(200));return Ea(null,e,t,!0,n)};Oe.render=function(e,t,n){if(!ei(t))throw Error(P(200));return Ea(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!ei(e))throw Error(P(40));return e._reactRootContainer?(Zp(function(){Ea(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1};Oe.unstable_batchedUpdates=Xp;Oe.unstable_createPortal=function(e,t){return sm(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ei(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ea(e,t,n,!1,r)};Oe.version="17.0.2";function om(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(om)}catch(e){console.error(e)}}om(),qd.exports=Oe;const Vk={}.VITE_SENTRY_DSN;iy({dsn:Vk});qd.exports.render(y(Sm.StrictMode,{children:y(wf,{children:y(Qy,{})})}),document.getElementById("root"))});export default Gk();
