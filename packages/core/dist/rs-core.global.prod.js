var RSCore=function(e,t){"use strict";const r={logLevel:"error",log:(e,t="info")=>{console&&console[t]&&console[t](e)}},n=(e,t="info",n=!0)=>{if(!n)return;const o=["info","warn","error","never"];o.indexOf(r.logLevel)>o.indexOf(t)||r.log(e,t)},o=Symbol("empty");class i{constructor(){this.$_disposers=[]}beforeDispose(e){this.$_disposers.push(e)}dispose(){this.$_disposers.forEach((e=>{e()}))}}var s="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function u(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}var c=u,f=a;function h(e){if(c===setTimeout)return setTimeout(e,0);if((c===u||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}"function"==typeof s.setTimeout&&(c=setTimeout),"function"==typeof s.clearTimeout&&(f=clearTimeout);var l,p=[],y=!1,d=-1;function v(){y&&l&&(y=!1,l.length?p=l.concat(p):d=-1,p.length&&w())}function w(){if(!y){var e=h(v);y=!0;for(var t=p.length;t;){for(l=p,p=[];++d<t;)l&&l[d].run();d=-1,t=p.length}l=null,y=!1,function(e){if(f===clearTimeout)return clearTimeout(e);if((f===a||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}_.prototype.run=function(){this.fun.apply(null,this.array)};function g(){}var b=g,m=g,E=g,T=g,k=g,j=g,O=g;var x=s.performance||{},$=x.now||x.mozNow||x.msNow||x.oNow||x.webkitNow||function(){return(new Date).getTime()};var S=new Date;var M,A={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];p.push(new _(e,t)),1!==p.length||y||h(w)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:b,addListener:m,once:E,off:T,removeListener:k,removeAllListeners:j,emit:O,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*$.call(x),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-S)/1e3}},I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(e){!function(t){var r="object"==typeof I?I:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),n=o(e);function o(e,t){return function(r,n){"function"!=typeof e[r]&&Object.defineProperty(e,r,{configurable:!0,writable:!0,value:n}),t&&t(r,n)}}void 0===r.Reflect?r.Reflect=e:n=o(r.Reflect,n),function(e){var t=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,n=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",o=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,s={__proto__:[]}instanceof Array,u=!i&&!s,a={create:i?function(){return oe(Object.create(null))}:s?function(){return oe({__proto__:null})}:function(){return oe({})},has:u?function(e,r){return t.call(e,r)}:function(e,t){return t in e},get:u?function(e,r){return t.call(e,r)?e[r]:void 0}:function(e,t){return e[t]}},c=Object.getPrototypeOf(Function),f="object"==typeof A&&A.env&&"true"===A.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=f||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?te():Map,l=f||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?re():Set,p=new(f||"function"!=typeof WeakMap?ne():WeakMap);function y(e,t,r,n){if(R(r)){if(!B(e))throw new TypeError;if(!q(t))throw new TypeError;return k(e,t)}if(!B(e))throw new TypeError;if(!L(t))throw new TypeError;if(!L(n)&&!R(n)&&!N(n))throw new TypeError;return N(n)&&(n=void 0),j(e,t,r=W(r),n)}function d(e,t){function r(r,n){if(!L(r))throw new TypeError;if(!R(n)&&!G(n))throw new TypeError;I(e,t,r,n)}return r}function v(e,t,r,n){if(!L(r))throw new TypeError;return R(n)||(n=W(n)),I(e,t,r,n)}function w(e,t,r){if(!L(t))throw new TypeError;return R(r)||(r=W(r)),x(e,t,r)}function _(e,t,r){if(!L(t))throw new TypeError;return R(r)||(r=W(r)),$(e,t,r)}function g(e,t,r){if(!L(t))throw new TypeError;return R(r)||(r=W(r)),S(e,t,r)}function b(e,t,r){if(!L(t))throw new TypeError;return R(r)||(r=W(r)),M(e,t,r)}function m(e,t){if(!L(e))throw new TypeError;return R(t)||(t=W(t)),C(e,t)}function E(e,t){if(!L(e))throw new TypeError;return R(t)||(t=W(t)),P(e,t)}function T(e,t,r){if(!L(t))throw new TypeError;R(r)||(r=W(r));var n=O(t,r,!1);if(R(n))return!1;if(!n.delete(e))return!1;if(n.size>0)return!0;var o=p.get(t);return o.delete(r),o.size>0||p.delete(t),!0}function k(e,t){for(var r=e.length-1;r>=0;--r){var n=(0,e[r])(t);if(!R(n)&&!N(n)){if(!q(n))throw new TypeError;t=n}}return t}function j(e,t,r,n){for(var o=e.length-1;o>=0;--o){var i=(0,e[o])(t,r,n);if(!R(i)&&!N(i)){if(!L(i))throw new TypeError;n=i}}return n}function O(e,t,r){var n=p.get(e);if(R(n)){if(!r)return;n=new h,p.set(e,n)}var o=n.get(t);if(R(o)){if(!r)return;o=new h,n.set(t,o)}return o}function x(e,t,r){if($(e,t,r))return!0;var n=ee(t);return!N(n)&&x(e,n,r)}function $(e,t,r){var n=O(t,r,!1);return!R(n)&&U(n.has(e))}function S(e,t,r){if($(e,t,r))return M(e,t,r);var n=ee(t);return N(n)?void 0:S(e,n,r)}function M(e,t,r){var n=O(t,r,!1);if(!R(n))return n.get(e)}function I(e,t,r,n){O(r,n,!0).set(e,t)}function C(e,t){var r=P(e,t),n=ee(e);if(null===n)return r;var o=C(n,t);if(o.length<=0)return r;if(r.length<=0)return o;for(var i=new l,s=[],u=0,a=r;u<a.length;u++){i.has(h=a[u])||(i.add(h),s.push(h))}for(var c=0,f=o;c<f.length;c++){var h;i.has(h=f[c])||(i.add(h),s.push(h))}return s}function P(e,t){var r=[],n=O(e,t,!1);if(R(n))return r;for(var o=J(n.keys()),i=0;;){var s=X(o);if(!s)return r.length=i,r;var u=Q(s);try{r[i]=u}catch(a){try{Z(o)}finally{throw a}}i++}}function F(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function R(e){return void 0===e}function N(e){return null===e}function D(e){return"symbol"==typeof e}function L(e){return"object"==typeof e?null!==e:"function"==typeof e}function K(e,t){switch(F(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var r=3===t?"string":5===t?"number":"default",o=H(e,n);if(void 0!==o){var i=o.call(e,r);if(L(i))throw new TypeError;return i}return z(e,"default"===r?"number":r)}function z(e,t){if("string"===t){var r=e.toString;if(Y(r))if(!L(o=r.call(e)))return o;if(Y(n=e.valueOf))if(!L(o=n.call(e)))return o}else{var n;if(Y(n=e.valueOf))if(!L(o=n.call(e)))return o;var o,i=e.toString;if(Y(i))if(!L(o=i.call(e)))return o}throw new TypeError}function U(e){return!!e}function V(e){return""+e}function W(e){var t=K(e,3);return D(t)?t:V(t)}function B(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function Y(e){return"function"==typeof e}function q(e){return"function"==typeof e}function G(e){switch(F(e)){case 3:case 4:return!0;default:return!1}}function H(e,t){var r=e[t];if(null!=r){if(!Y(r))throw new TypeError;return r}}function J(e){var t=H(e,o);if(!Y(t))throw new TypeError;var r=t.call(e);if(!L(r))throw new TypeError;return r}function Q(e){return e.value}function X(e){var t=e.next();return!t.done&&t}function Z(e){var t=e.return;t&&t.call(e)}function ee(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===c)return t;if(t!==c)return t;var r=e.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return t;var o=n.constructor;return"function"!=typeof o||o===e?t:o}function te(){var e={},t=[],r=function(){function e(e,t,r){this._index=0,this._keys=e,this._values=t,this._selector=r}return e.prototype["@@iterator"]=function(){return this},e.prototype[o]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var r=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var r=this._find(e,!0);return this._values[r]=t,this},t.prototype.delete=function(t){var r=this._find(t,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new r(this._keys,this._values,n)},t.prototype.values=function(){return new r(this._keys,this._values,i)},t.prototype.entries=function(){return new r(this._keys,this._values,s)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[o]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function n(e,t){return e}function i(e,t){return t}function s(e,t){return[e,t]}}function re(){return function(){function e(){this._map=new h}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[o]=function(){return this.keys()},e}()}function ne(){var e=16,r=a.create(),n=o();return function(){function e(){this._key=o()}return e.prototype.has=function(e){var t=i(e,!1);return void 0!==t&&a.has(t,this._key)},e.prototype.get=function(e){var t=i(e,!1);return void 0!==t?a.get(t,this._key):void 0},e.prototype.set=function(e,t){return i(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=i(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=o()},e}();function o(){var e;do{e="@@WeakMap@@"+c()}while(a.has(r,e));return r[e]=!0,e}function i(e,r){if(!t.call(e,n)){if(!r)return;Object.defineProperty(e,n,{value:a.create()})}return e[n]}function s(e,t){for(var r=0;r<t;++r)e[r]=255*Math.random()|0;return e}function u(e){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):s(new Uint8Array(e),e):s(new Array(e),e)}function c(){var t=u(e);t[6]=79&t[6]|64,t[8]=191&t[8]|128;for(var r="",n=0;n<e;++n){var o=t[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}function oe(e){return e.__=void 0,delete e.__,e}e("decorate",y),e("metadata",d),e("defineMetadata",v),e("hasMetadata",w),e("hasOwnMetadata",_),e("getMetadata",g),e("getOwnMetadata",b),e("getMetadataKeys",m),e("getOwnMetadataKeys",E),e("deleteMetadata",T)}(n)}()}(M||(M={}));class C{constructor(e,t){this._desc=e,this.factory=t?.factory}toString(){return`InjectionToken: ${this._desc}`}}const P=Symbol("inject:constructor:params");return e.Disposable=i,e.Inject=(e,t={})=>(r,n,o)=>{if(void 0!==n)throw new Error("The @inject decorator can only be used on consturctor parameters!");const i=Reflect.getOwnMetadata(P,r)||[];i[o]={provide:e,optional:!!t.optional},Reflect.defineMetadata(P,i,r)},e.InjectionToken=C,e.Injector=class{constructor(e=[],t=null){this.parent=null,this.records=new Map,this.parent=t,e.forEach((e=>{let t=null;if("object"==typeof e){const r=e,o=["useValue","useClass","useExisiting","useFactory"];let i=0;o.forEach((e=>{void 0!==r[e]&&i++})),i>1&&n(`These keys [${o.join(",")}] can only use one, other will be ignored!`,"warn");const{useValue:s=null,...u}=r;t={...u,value:s}}else if("function"==typeof e&&"function"==typeof e.prototype.constructor){t={provide:e,useClass:e}}if(!t)throw n(e),new Error("Error provider onfig!");if(!(void 0!==t.value||t.useClass||t.useExisiting||t.useFactory||t.provide instanceof C&&t.useFactory))throw n(e),new Error("Error provider onfig!");this.records.set(t.provide,t)}))}isProvided(e){return!!this.records.has(e)||!!this.parent&&this.parent.isProvided(e)}get(e){const t=this.records.get(e);return t?(void 0===t.value&&this.$_initRecord(t),t.value||null):this.parent?this.parent.get(e):null}$_initRecord(e){if(e.provide instanceof C&&e.provide.factory){e.value=e.provide.factory(((t,r={})=>{const{optional:o}=r,i=this.get(t);if(!i&&!o)throw n(e),n(C),new Error("Can not find all deps in the DI tree when init the InjectionToken, please provide them before you use the InjectionToken's factory!");return i}))}if(e.useClass){const t=(Reflect.getOwnMetadata(P,e.useClass)||[]).map((t=>{if("object"!=typeof t)return;const{provide:r,optional:o}=t,i=this.get(r);if(!i&&!o)throw n(e),new Error("Can not find all deps in the DI tree when init the useClass, please provide them before you use the useClass!");return i}));e.value=new e.useClass(...t)}else if(e.useExisiting)e.value=this.get(e.useExisiting);else if(e.useFactory){e.value=e.useFactory(((t,r={})=>{const{optional:o}=r,i=this.get(t);if(!i&&!o)throw n(e),new Error("Can not find all deps in the DI tree when init the useFactory, please provide them before you use the useFactory!");return i}))}}dispose(){for(const[,e]of this.records){if(!e.value)return;e.dispose?e.dispose(e.value):"function"==typeof e.value.dispose&&e.value.dispose()}this.parent=null,this.records.clear()}},e.Service=class extends i{constructor(e={}){super(),this.displayName="",this.$$={},this.$={},this.displayName||(this.displayName=this.constructor.name,n(`[Service ${this.displayName}]: For better debugging, you'd better add an attribute 'displayName' to each service class.`,"warn"));const r=e.state||{};Object.keys(r).forEach((e=>{this.$$[e]=void 0===r[e]||r[e]===o?new t.Subject:new t.BehaviorSubject(r[e])}));(e.actions||[]).forEach((e=>{this.$[e]=new t.Subject})),Object.keys(this.$$).forEach((e=>{this.subscribe(this.$$[e],{next:t=>{n(`[Service ${this.displayName}]: set new state [${e}].`,"info"),n(t,"info")}})})),Object.keys(this.$).forEach((e=>{this.subscribe(this.$[e],{next:t=>{n(`[Service ${this.displayName}]: receive new action [${e}].`,"info"),n(t,"info")}})}))}get state(){const e={};return Object.keys(this.$$).forEach((r=>{const n=this.$$[r];n instanceof t.BehaviorSubject&&(e[r]=n.value)})),e}subscribe(e,...t){const r=e.subscribe(...t);this.beforeDispose((()=>{r.unsubscribe()}))}},e.config=e=>{Object.keys(r).forEach((t=>{const n=e[t];null!=n&&(r[t]=n)}))},e.debug=n,e.empty=o,Object.defineProperty(e,"__esModule",{value:!0}),e}({},rxjs);