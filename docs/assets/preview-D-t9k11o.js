import{i as H}from"./i18next-cOPaZ5Oq.js";import{c as k,g as ve}from"./_commonjsHelpers-Cpj98o6Y.js";import{s as we,b as Oe}from"./i18nInstance-DCxlOlkw.js";function Se(n,e){for(var r=0;r<e.length;r++){const t=e[r];if(typeof t!="string"&&!Array.isArray(t)){for(const i in t)if(i!=="default"&&!(i in n)){const a=Object.getOwnPropertyDescriptor(t,i);a&&Object.defineProperty(n,i,a.get?a:{enumerable:!0,get:()=>t[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}const Pe={type:"3rdParty",init(n){we(n.options.react),Oe(n)}},{slice:Ae,forEach:Ee}=[];function _e(n){return Ee.call(Ae.call(arguments,1),e=>{if(e)for(const r in e)n[r]===void 0&&(n[r]=e[r])}),n}const G=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Te=(n,e,r)=>{const t=r||{};t.path=t.path||"/";const i=encodeURIComponent(e);let a=`${n}=${i}`;if(t.maxAge>0){const f=t.maxAge-0;if(Number.isNaN(f))throw new Error("maxAge should be a Number");a+=`; Max-Age=${Math.floor(f)}`}if(t.domain){if(!G.test(t.domain))throw new TypeError("option domain is invalid");a+=`; Domain=${t.domain}`}if(t.path){if(!G.test(t.path))throw new TypeError("option path is invalid");a+=`; Path=${t.path}`}if(t.expires){if(typeof t.expires.toUTCString!="function")throw new TypeError("option expires is invalid");a+=`; Expires=${t.expires.toUTCString()}`}if(t.httpOnly&&(a+="; HttpOnly"),t.secure&&(a+="; Secure"),t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a},V={create(n,e,r,t){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};r&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+r*60*1e3)),t&&(i.domain=t),document.cookie=Te(n,encodeURIComponent(e),i)},read(n){const e=`${n}=`,r=document.cookie.split(";");for(let t=0;t<r.length;t++){let i=r[t];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(e)===0)return i.substring(e.length,i.length)}return null},remove(n){this.create(n,"",-1)}};var je={name:"cookie",lookup(n){let{lookupCookie:e}=n;if(e&&typeof document<"u")return V.read(e)||void 0},cacheUserLanguage(n,e){let{lookupCookie:r,cookieMinutes:t,cookieDomain:i,cookieOptions:a}=e;r&&typeof document<"u"&&V.create(r,n,t,i,a)}},xe={name:"querystring",lookup(n){var t;let{lookupQuerystring:e}=n,r;if(typeof window<"u"){let{search:i}=window.location;!window.location.search&&((t=window.location.hash)==null?void 0:t.indexOf("?"))>-1&&(i=window.location.hash.substring(window.location.hash.indexOf("?")));const f=i.substring(1).split("&");for(let u=0;u<f.length;u++){const c=f[u].indexOf("=");c>0&&f[u].substring(0,c)===e&&(r=f[u].substring(c+1))}}return r}};let x=null;const K=()=>{if(x!==null)return x;try{x=window!=="undefined"&&window.localStorage!==null;const n="i18next.translate.boo";window.localStorage.setItem(n,"foo"),window.localStorage.removeItem(n)}catch{x=!1}return x};var De={name:"localStorage",lookup(n){let{lookupLocalStorage:e}=n;if(e&&K())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(n,e){let{lookupLocalStorage:r}=e;r&&K()&&window.localStorage.setItem(r,n)}};let D=null;const Q=()=>{if(D!==null)return D;try{D=window!=="undefined"&&window.sessionStorage!==null;const n="i18next.translate.boo";window.sessionStorage.setItem(n,"foo"),window.sessionStorage.removeItem(n)}catch{D=!1}return D};var ke={name:"sessionStorage",lookup(n){let{lookupSessionStorage:e}=n;if(e&&Q())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(n,e){let{lookupSessionStorage:r}=e;r&&Q()&&window.sessionStorage.setItem(r,n)}},qe={name:"navigator",lookup(n){const e=[];if(typeof navigator<"u"){const{languages:r,userLanguage:t,language:i}=navigator;if(r)for(let a=0;a<r.length;a++)e.push(r[a]);t&&e.push(t),i&&e.push(i)}return e.length>0?e:void 0}},Re={name:"htmlTag",lookup(n){let{htmlTag:e}=n,r;const t=e||(typeof document<"u"?document.documentElement:null);return t&&typeof t.getAttribute=="function"&&(r=t.getAttribute("lang")),r}},Be={name:"path",lookup(n){var i;let{lookupFromPathIndex:e}=n;if(typeof window>"u")return;const r=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(r)?(i=r[typeof e=="number"?e:0])==null?void 0:i.replace("/",""):void 0}},Le={name:"subdomain",lookup(n){var i,a;let{lookupFromSubdomainIndex:e}=n;const r=typeof e=="number"?e+1:1,t=typeof window<"u"&&((a=(i=window.location)==null?void 0:i.hostname)==null?void 0:a.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(t)return t[r]}};function Ue(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:n=>n}}class ne{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,r)}init(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=_e(r,this.options||{},Ue()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=i=>i.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=t,this.addDetector(je),this.addDetector(xe),this.addDetector(De),this.addDetector(ke),this.addDetector(qe),this.addDetector(Re),this.addDetector(Be),this.addDetector(Le)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let r=[];return e.forEach(t=>{if(this.detectors[t]){let i=this.detectors[t].lookup(this.options);i&&typeof i=="string"&&(i=[i]),i&&(r=r.concat(i))}}),r=r.map(t=>this.options.convertDetectedLanguage(t)),this.services.languageUtils.getBestMatchFromCodes?r:r.length>0?r[0]:null}cacheUserLanguage(e,r){r||(r=this.options.caches),r&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||r.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}}ne.type="languageDetector";function F(n){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(n)}function oe(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":F(XMLHttpRequest))==="object"}function Ce(n){return!!n&&typeof n.then=="function"}function Ie(n){return Ce(n)?n:Promise.resolve(n)}function He(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var M={exports:{}},L={exports:{}},W;function Fe(){return W||(W=1,function(n,e){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof k<"u"&&k,t=function(){function a(){this.fetch=!1,this.DOMException=r.DOMException}return a.prototype=r,new a}();(function(a){(function(f){var u=typeof a<"u"&&a||typeof self<"u"&&self||typeof u<"u"&&u,c={searchParams:"URLSearchParams"in u,iterable:"Symbol"in u&&"iterator"in Symbol,blob:"FileReader"in u&&"Blob"in u&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in u,arrayBuffer:"ArrayBuffer"in u};function b(o){return o&&DataView.prototype.isPrototypeOf(o)}if(c.arrayBuffer)var p=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],y=ArrayBuffer.isView||function(o){return o&&p.indexOf(Object.prototype.toString.call(o))>-1};function v(o){if(typeof o!="string"&&(o=String(o)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(o)||o==="")throw new TypeError('Invalid character in header field name: "'+o+'"');return o.toLowerCase()}function w(o){return typeof o!="string"&&(o=String(o)),o}function P(o){var s={next:function(){var l=o.shift();return{done:l===void 0,value:l}}};return c.iterable&&(s[Symbol.iterator]=function(){return s}),s}function h(o){this.map={},o instanceof h?o.forEach(function(s,l){this.append(l,s)},this):Array.isArray(o)?o.forEach(function(s){this.append(s[0],s[1])},this):o&&Object.getOwnPropertyNames(o).forEach(function(s){this.append(s,o[s])},this)}h.prototype.append=function(o,s){o=v(o),s=w(s);var l=this.map[o];this.map[o]=l?l+", "+s:s},h.prototype.delete=function(o){delete this.map[v(o)]},h.prototype.get=function(o){return o=v(o),this.has(o)?this.map[o]:null},h.prototype.has=function(o){return this.map.hasOwnProperty(v(o))},h.prototype.set=function(o,s){this.map[v(o)]=w(s)},h.prototype.forEach=function(o,s){for(var l in this.map)this.map.hasOwnProperty(l)&&o.call(s,this.map[l],l,this)},h.prototype.keys=function(){var o=[];return this.forEach(function(s,l){o.push(l)}),P(o)},h.prototype.values=function(){var o=[];return this.forEach(function(s){o.push(s)}),P(o)},h.prototype.entries=function(){var o=[];return this.forEach(function(s,l){o.push([l,s])}),P(o)},c.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);function A(o){if(o.bodyUsed)return Promise.reject(new TypeError("Already read"));o.bodyUsed=!0}function $(o){return new Promise(function(s,l){o.onload=function(){s(o.result)},o.onerror=function(){l(o.error)}})}function ce(o){var s=new FileReader,l=$(s);return s.readAsArrayBuffer(o),l}function le(o){var s=new FileReader,l=$(s);return s.readAsText(o),l}function de(o){for(var s=new Uint8Array(o),l=new Array(s.length),g=0;g<s.length;g++)l[g]=String.fromCharCode(s[g]);return l.join("")}function N(o){if(o.slice)return o.slice(0);var s=new Uint8Array(o.byteLength);return s.set(new Uint8Array(o)),s.buffer}function z(){return this.bodyUsed=!1,this._initBody=function(o){this.bodyUsed=this.bodyUsed,this._bodyInit=o,o?typeof o=="string"?this._bodyText=o:c.blob&&Blob.prototype.isPrototypeOf(o)?this._bodyBlob=o:c.formData&&FormData.prototype.isPrototypeOf(o)?this._bodyFormData=o:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(o)?this._bodyText=o.toString():c.arrayBuffer&&c.blob&&b(o)?(this._bodyArrayBuffer=N(o.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(o)||y(o))?this._bodyArrayBuffer=N(o):this._bodyText=o=Object.prototype.toString.call(o):this._bodyText="",this.headers.get("content-type")||(typeof o=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(o)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var o=A(this);if(o)return o;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var o=A(this);return o||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(ce)}),this.text=function(){var o=A(this);if(o)return o;if(this._bodyBlob)return le(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(de(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(ye)}),this.json=function(){return this.text().then(JSON.parse)},this}var he=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function pe(o){var s=o.toUpperCase();return he.indexOf(s)>-1?s:o}function E(o,s){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');s=s||{};var l=s.body;if(o instanceof E){if(o.bodyUsed)throw new TypeError("Already read");this.url=o.url,this.credentials=o.credentials,s.headers||(this.headers=new h(o.headers)),this.method=o.method,this.mode=o.mode,this.signal=o.signal,!l&&o._bodyInit!=null&&(l=o._bodyInit,o.bodyUsed=!0)}else this.url=String(o);if(this.credentials=s.credentials||this.credentials||"same-origin",(s.headers||!this.headers)&&(this.headers=new h(s.headers)),this.method=pe(s.method||this.method||"GET"),this.mode=s.mode||this.mode||null,this.signal=s.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&l)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(l),(this.method==="GET"||this.method==="HEAD")&&(s.cache==="no-store"||s.cache==="no-cache")){var g=/([?&])_=[^&]*/;if(g.test(this.url))this.url=this.url.replace(g,"$1_="+new Date().getTime());else{var m=/\?/;this.url+=(m.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})};function ye(o){var s=new FormData;return o.trim().split("&").forEach(function(l){if(l){var g=l.split("="),m=g.shift().replace(/\+/g," "),d=g.join("=").replace(/\+/g," ");s.append(decodeURIComponent(m),decodeURIComponent(d))}}),s}function ge(o){var s=new h,l=o.replace(/\r?\n[\t ]+/g," ");return l.split("\r").map(function(g){return g.indexOf(`
`)===0?g.substr(1,g.length):g}).forEach(function(g){var m=g.split(":"),d=m.shift().trim();if(d){var R=m.join(":").trim();s.append(d,R)}}),s}z.call(E.prototype);function S(o,s){if(!(this instanceof S))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');s||(s={}),this.type="default",this.status=s.status===void 0?200:s.status,this.ok=this.status>=200&&this.status<300,this.statusText=s.statusText===void 0?"":""+s.statusText,this.headers=new h(s.headers),this.url=s.url||"",this._initBody(o)}z.call(S.prototype),S.prototype.clone=function(){return new S(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},S.error=function(){var o=new S(null,{status:0,statusText:""});return o.type="error",o};var me=[301,302,303,307,308];S.redirect=function(o,s){if(me.indexOf(s)===-1)throw new RangeError("Invalid status code");return new S(null,{status:s,headers:{location:o}})},f.DOMException=u.DOMException;try{new f.DOMException}catch{f.DOMException=function(s,l){this.message=s,this.name=l;var g=Error(s);this.stack=g.stack},f.DOMException.prototype=Object.create(Error.prototype),f.DOMException.prototype.constructor=f.DOMException}function C(o,s){return new Promise(function(l,g){var m=new E(o,s);if(m.signal&&m.signal.aborted)return g(new f.DOMException("Aborted","AbortError"));var d=new XMLHttpRequest;function R(){d.abort()}d.onload=function(){var O={status:d.status,statusText:d.statusText,headers:ge(d.getAllResponseHeaders()||"")};O.url="responseURL"in d?d.responseURL:O.headers.get("X-Request-URL");var B="response"in d?d.response:d.responseText;setTimeout(function(){l(new S(B,O))},0)},d.onerror=function(){setTimeout(function(){g(new TypeError("Network request failed"))},0)},d.ontimeout=function(){setTimeout(function(){g(new TypeError("Network request failed"))},0)},d.onabort=function(){setTimeout(function(){g(new f.DOMException("Aborted","AbortError"))},0)};function be(O){try{return O===""&&u.location.href?u.location.href:O}catch{return O}}d.open(m.method,be(m.url),!0),m.credentials==="include"?d.withCredentials=!0:m.credentials==="omit"&&(d.withCredentials=!1),"responseType"in d&&(c.blob?d.responseType="blob":c.arrayBuffer&&m.headers.get("Content-Type")&&m.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(d.responseType="arraybuffer")),s&&typeof s.headers=="object"&&!(s.headers instanceof h)?Object.getOwnPropertyNames(s.headers).forEach(function(O){d.setRequestHeader(O,w(s.headers[O]))}):m.headers.forEach(function(O,B){d.setRequestHeader(B,O)}),m.signal&&(m.signal.addEventListener("abort",R),d.onreadystatechange=function(){d.readyState===4&&m.signal.removeEventListener("abort",R)}),d.send(typeof m._bodyInit>"u"?null:m._bodyInit)})}return C.polyfill=!0,u.fetch||(u.fetch=C,u.Headers=h,u.Request=E,u.Response=S),f.Headers=h,f.Request=E,f.Response=S,f.fetch=C,f})({})})(t),t.fetch.ponyfill=!0,delete t.fetch.polyfill;var i=r.fetch?r:t;e=i.fetch,e.default=i.fetch,e.fetch=i.fetch,e.Headers=i.Headers,e.Request=i.Request,e.Response=i.Response,n.exports=e}(L,L.exports)),L.exports}(function(n,e){var r=typeof fetch=="function"?fetch:void 0;if(typeof k<"u"&&k.fetch?r=k.fetch:typeof window<"u"&&window.fetch&&(r=window.fetch),typeof He<"u"&&typeof window>"u"){var t=r||Fe();t.default&&(t=t.default),e.default=t,n.exports=e.default}})(M,M.exports);var ie=M.exports;const se=ve(ie),J=Se({__proto__:null,default:se},[ie]);function Z(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),r.push.apply(r,t)}return r}function Y(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Z(Object(r),!0).forEach(function(t){Me(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Me(n,e,r){return(e=Xe(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Xe(n){var e=$e(n,"string");return T(e)=="symbol"?e:e+""}function $e(n,e){if(T(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var t=r.call(n,e||"default");if(T(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function T(n){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(n)}var _=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?_=global.fetch:typeof window<"u"&&window.fetch&&(_=window.fetch);var q;oe()&&(typeof global<"u"&&global.XMLHttpRequest?q=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(q=window.XMLHttpRequest));var U;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?U=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(U=window.ActiveXObject));!_&&J&&!q&&!U&&(_=se||J);typeof _!="function"&&(_=void 0);var X=function(e,r){if(r&&T(r)==="object"){var t="";for(var i in r)t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(r[i]);if(!t)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+t.slice(1)}return e},ee=function(e,r,t,i){var a=function(c){if(!c.ok)return t(c.statusText||"Error",{status:c.status});c.text().then(function(b){t(null,{status:c.status,data:b})}).catch(t)};if(i){var f=i(e,r);if(f instanceof Promise){f.then(a).catch(t);return}}typeof fetch=="function"?fetch(e,r).then(a).catch(t):_(e,r).then(a).catch(t)},te=!1,Ne=function(e,r,t,i){e.queryStringParams&&(r=X(r,e.queryStringParams));var a=Y({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(a["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),t&&(a["Content-Type"]="application/json");var f=typeof e.requestOptions=="function"?e.requestOptions(t):e.requestOptions,u=Y({method:t?"POST":"GET",body:t?e.stringify(t):void 0,headers:a},te?{}:f),c=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{ee(r,u,i,c)}catch(b){if(!f||Object.keys(f).length===0||!b.message||b.message.indexOf("not implemented")<0)return i(b);try{Object.keys(f).forEach(function(p){delete u[p]}),ee(r,u,i,c),te=!0}catch(p){i(p)}}},ze=function(e,r,t,i){t&&T(t)==="object"&&(t=X("",t).slice(1)),e.queryStringParams&&(r=X(r,e.queryStringParams));try{var a;q?a=new q:a=new U("MSXML2.XMLHTTP.3.0"),a.open(t?"POST":"GET",r,1),e.crossDomain||a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.withCredentials=!!e.withCredentials,t&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.overrideMimeType&&a.overrideMimeType("application/json");var f=e.customHeaders;if(f=typeof f=="function"?f():f,f)for(var u in f)a.setRequestHeader(u,f[u]);a.onreadystatechange=function(){a.readyState>3&&i(a.status>=400?a.statusText:null,{status:a.status,data:a.responseText})},a.send(t)}catch(c){console&&console.log(c)}},Ge=function(e,r,t,i){if(typeof t=="function"&&(i=t,t=void 0),i=i||function(){},_&&r.indexOf("file:")!==0)return Ne(e,r,t,i);if(oe()||typeof ActiveXObject=="function")return ze(e,r,t,i);i(new Error("No fetch and no xhr implementation found!"))};function j(n){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(n)}function re(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),r.push.apply(r,t)}return r}function I(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?re(Object(r),!0).forEach(function(t){ae(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Ve(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Ke(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,fe(t.key),t)}}function Qe(n,e,r){return e&&Ke(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function ae(n,e,r){return(e=fe(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function fe(n){var e=We(n,"string");return j(e)=="symbol"?e:e+""}function We(n,e){if(j(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var t=r.call(n,e||"default");if(j(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Je=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(r){return JSON.parse(r)},stringify:JSON.stringify,parsePayload:function(r,t,i){return ae({},t,i||"")},parseLoadPayload:function(r,t){},request:Ge,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},ue=function(){function n(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Ve(this,n),this.services=e,this.options=r,this.allOptions=t,this.type="backend",this.init(e,r,t)}return Qe(n,[{key:"init",value:function(r){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=r,this.options=I(I(I({},Je()),this.options||{}),i),this.allOptions=a,this.services&&this.options.reloadInterval){var f=setInterval(function(){return t.reload()},this.options.reloadInterval);j(f)==="object"&&typeof f.unref=="function"&&f.unref()}}},{key:"readMulti",value:function(r,t,i){this._readAny(r,r,t,t,i)}},{key:"read",value:function(r,t,i){this._readAny([r],r,[t],t,i)}},{key:"_readAny",value:function(r,t,i,a,f){var u=this,c=this.options.loadPath;typeof this.options.loadPath=="function"&&(c=this.options.loadPath(r,i)),c=Ie(c),c.then(function(b){if(!b)return f(null,{});var p=u.services.interpolator.interpolate(b,{lng:r.join("+"),ns:i.join("+")});u.loadUrl(p,f,t,a)})}},{key:"loadUrl",value:function(r,t,i,a){var f=this,u=typeof i=="string"?[i]:i,c=typeof a=="string"?[a]:a,b=this.options.parseLoadPayload(u,c);this.options.request(this.options,r,b,function(p,y){if(y&&(y.status>=500&&y.status<600||!y.status))return t("failed loading "+r+"; status code: "+y.status,!0);if(y&&y.status>=400&&y.status<500)return t("failed loading "+r+"; status code: "+y.status,!1);if(!y&&p&&p.message){var v=p.message.toLowerCase(),w=["failed","fetch","network","load"].find(function(A){return v.indexOf(A)>-1});if(w)return t("failed loading "+r+": "+p.message,!0)}if(p)return t(p,!1);var P,h;try{typeof y.data=="string"?P=f.options.parse(y.data,i,a):P=y.data}catch{h="failed parsing "+r+" to json"}if(h)return t(h,!1);t(null,P)})}},{key:"create",value:function(r,t,i,a,f){var u=this;if(this.options.addPath){typeof r=="string"&&(r=[r]);var c=this.options.parsePayload(t,i,a),b=0,p=[],y=[];r.forEach(function(v){var w=u.options.addPath;typeof u.options.addPath=="function"&&(w=u.options.addPath(v,t));var P=u.services.interpolator.interpolate(w,{lng:v,ns:t});u.options.request(u.options,P,c,function(h,A){b+=1,p.push(h),y.push(A),b===r.length&&typeof f=="function"&&f(p,y)})})}}},{key:"reload",value:function(){var r=this,t=this.services,i=t.backendConnector,a=t.languageUtils,f=t.logger,u=i.language;if(!(u&&u.toLowerCase()==="cimode")){var c=[],b=function(y){var v=a.toResolveHierarchy(y);v.forEach(function(w){c.indexOf(w)<0&&c.push(w)})};b(u),this.allOptions.preload&&this.allOptions.preload.forEach(function(p){return b(p)}),c.forEach(function(p){r.allOptions.ns.forEach(function(y){i.read(p,y,"read",null,null,function(v,w){v&&f.warn("loading namespace ".concat(y," for language ").concat(p," failed"),v),!v&&w&&f.log("loaded namespace ".concat(y," for language ").concat(p),w),i.loaded("".concat(p,"|").concat(y),v,w)})})})}}}])}();ue.type="backend";H.use(ne).use(ue).use(Pe).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},react:{useSuspense:!1},backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"}});const Ze=H.on("languageChanged",n=>{const e=H.dir(n);document.dir=e}),rt={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i,decorators:[Ze]}}}};export{rt as default};
