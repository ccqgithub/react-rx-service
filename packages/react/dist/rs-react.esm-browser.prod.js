import{BehaviorSubject as e,Subject as t}from"rxjs";import r,{createContext as n,useContext as o,forwardRef as i,useState as s,useRef as u,useCallback as a,useEffect as c}from"react";var f,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(e){!function(t){var r="object"==typeof l?l:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),n=o(e);function o(e,t){return function(r,n){"function"!=typeof e[r]&&Object.defineProperty(e,r,{configurable:!0,writable:!0,value:n}),t&&t(r,n)}}void 0===r.Reflect?r.Reflect=e:n=o(r.Reflect,n),function(e){var t=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,n=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",o=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,s={__proto__:[]}instanceof Array,u=!i&&!s,a={create:i?function(){return oe(Object.create(null))}:s?function(){return oe({__proto__:null})}:function(){return oe({})},has:u?function(e,r){return t.call(e,r)}:function(e,t){return t in e},get:u?function(e,r){return t.call(e,r)?e[r]:void 0}:function(e,t){return e[t]}},c=Object.getPrototypeOf(Function),f="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,l=f||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?te():Map,p=f||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?re():Set,h=new(f||"function"!=typeof WeakMap?ne():WeakMap);function y(e,t,r,n){if(I(r)){if(!W(e))throw new TypeError;if(!q(t))throw new TypeError;return S(e,t)}if(!W(e))throw new TypeError;if(!N(t))throw new TypeError;if(!N(n)&&!I(n)&&!D(n))throw new TypeError;return D(n)&&(n=void 0),O(e,t,r=B(r),n)}function d(e,t){function r(r,n){if(!N(r))throw new TypeError;if(!I(n)&&!G(n))throw new TypeError;C(e,t,r,n)}return r}function v(e,t,r,n){if(!N(r))throw new TypeError;return I(n)||(n=B(n)),C(e,t,r,n)}function w(e,t,r){if(!N(t))throw new TypeError;return I(r)||(r=B(r)),x(e,t,r)}function b(e,t,r){if(!N(t))throw new TypeError;return I(r)||(r=B(r)),T(e,t,r)}function _(e,t,r){if(!N(t))throw new TypeError;return I(r)||(r=B(r)),P(e,t,r)}function m(e,t,r){if(!N(t))throw new TypeError;return I(r)||(r=B(r)),M(e,t,r)}function g(e,t){if(!N(e))throw new TypeError;return I(t)||(t=B(t)),R(e,t)}function E(e,t){if(!N(e))throw new TypeError;return I(t)||(t=B(t)),A(e,t)}function $(e,t,r){if(!N(t))throw new TypeError;I(r)||(r=B(r));var n=k(t,r,!1);if(I(n))return!1;if(!n.delete(e))return!1;if(n.size>0)return!0;var o=h.get(t);return o.delete(r),o.size>0||h.delete(t),!0}function S(e,t){for(var r=e.length-1;r>=0;--r){var n=(0,e[r])(t);if(!I(n)&&!D(n)){if(!q(n))throw new TypeError;t=n}}return t}function O(e,t,r,n){for(var o=e.length-1;o>=0;--o){var i=(0,e[o])(t,r,n);if(!I(i)&&!D(i)){if(!N(i))throw new TypeError;n=i}}return n}function k(e,t,r){var n=h.get(e);if(I(n)){if(!r)return;n=new l,h.set(e,n)}var o=n.get(t);if(I(o)){if(!r)return;o=new l,n.set(t,o)}return o}function x(e,t,r){if(T(e,t,r))return!0;var n=ee(t);return!D(n)&&x(e,n,r)}function T(e,t,r){var n=k(t,r,!1);return!I(n)&&U(n.has(e))}function P(e,t,r){if(T(e,t,r))return M(e,t,r);var n=ee(t);return D(n)?void 0:P(e,n,r)}function M(e,t,r){var n=k(t,r,!1);if(!I(n))return n.get(e)}function C(e,t,r,n){k(r,n,!0).set(e,t)}function R(e,t){var r=A(e,t),n=ee(e);if(null===n)return r;var o=R(n,t);if(o.length<=0)return r;if(r.length<=0)return o;for(var i=new p,s=[],u=0,a=r;u<a.length;u++){i.has(l=a[u])||(i.add(l),s.push(l))}for(var c=0,f=o;c<f.length;c++){var l;i.has(l=f[c])||(i.add(l),s.push(l))}return s}function A(e,t){var r=[],n=k(e,t,!1);if(I(n))return r;for(var o=J(n.keys()),i=0;;){var s=X(o);if(!s)return r.length=i,r;var u=Q(s);try{r[i]=u}catch(j){try{Z(o)}finally{throw j}}i++}}function F(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function I(e){return void 0===e}function D(e){return null===e}function L(e){return"symbol"==typeof e}function N(e){return"object"==typeof e?null!==e:"function"==typeof e}function z(e,t){switch(F(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var r=3===t?"string":5===t?"number":"default",o=H(e,n);if(void 0!==o){var i=o.call(e,r);if(N(i))throw new TypeError;return i}return K(e,"default"===r?"number":r)}function K(e,t){if("string"===t){var r=e.toString;if(Y(r))if(!N(o=r.call(e)))return o;if(Y(n=e.valueOf))if(!N(o=n.call(e)))return o}else{var n;if(Y(n=e.valueOf))if(!N(o=n.call(e)))return o;var o,i=e.toString;if(Y(i))if(!N(o=i.call(e)))return o}throw new TypeError}function U(e){return!!e}function V(e){return""+e}function B(e){var t=z(e,3);return L(t)?t:V(t)}function W(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function Y(e){return"function"==typeof e}function q(e){return"function"==typeof e}function G(e){switch(F(e)){case 3:case 4:return!0;default:return!1}}function H(e,t){var r=e[t];if(null!=r){if(!Y(r))throw new TypeError;return r}}function J(e){var t=H(e,o);if(!Y(t))throw new TypeError;var r=t.call(e);if(!N(r))throw new TypeError;return r}function Q(e){return e.value}function X(e){var t=e.next();return!t.done&&t}function Z(e){var t=e.return;t&&t.call(e)}function ee(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===c)return t;if(t!==c)return t;var r=e.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return t;var o=n.constructor;return"function"!=typeof o||o===e?t:o}function te(){var e={},t=[],r=function(){function e(e,t,r){this._index=0,this._keys=e,this._values=t,this._selector=r}return e.prototype["@@iterator"]=function(){return this},e.prototype[o]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var r=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var r=this._find(e,!0);return this._values[r]=t,this},t.prototype.delete=function(t){var r=this._find(t,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new r(this._keys,this._values,n)},t.prototype.values=function(){return new r(this._keys,this._values,i)},t.prototype.entries=function(){return new r(this._keys,this._values,s)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[o]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function n(e,t){return e}function i(e,t){return t}function s(e,t){return[e,t]}}function re(){return function(){function e(){this._map=new l}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[o]=function(){return this.keys()},e}()}function ne(){var e=16,r=a.create(),n=o();return function(){function e(){this._key=o()}return e.prototype.has=function(e){var t=i(e,!1);return void 0!==t&&a.has(t,this._key)},e.prototype.get=function(e){var t=i(e,!1);return void 0!==t?a.get(t,this._key):void 0},e.prototype.set=function(e,t){return i(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=i(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=o()},e}();function o(){var e;do{e="@@WeakMap@@"+c()}while(a.has(r,e));return r[e]=!0,e}function i(e,r){if(!t.call(e,n)){if(!r)return;Object.defineProperty(e,n,{value:a.create()})}return e[n]}function s(e,t){for(var r=0;r<t;++r)e[r]=255*Math.random()|0;return e}function u(e){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):s(new Uint8Array(e),e):s(new Array(e),e)}function c(){var t=u(e);t[6]=79&t[6]|64,t[8]=191&t[8]|128;for(var r="",n=0;n<e;++n){var o=t[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}function oe(e){return e.__=void 0,delete e.__,e}e("decorate",y),e("metadata",d),e("defineMetadata",v),e("hasMetadata",w),e("hasOwnMetadata",b),e("getMetadata",_),e("getOwnMetadata",m),e("getMetadataKeys",g),e("getOwnMetadataKeys",E),e("deleteMetadata",$)}(n)}()}(f||(f={}));const p={logLevel:"error",log:(e,t="info")=>{console&&console[t]&&console[t](e)}},h=e=>{Object.keys(e).forEach((t=>{t in p&&void 0!==e[t]&&(p[t]=e[t])}))},y=(e,t="info",r=!0)=>{if(!r)return;const n=["info","warn","error","never"];n.indexOf(p.logLevel)>n.indexOf(t)||p.log(e,t)},d=Symbol("empty");class v{constructor(){this.$_disposers=[]}beforeDispose(e){this.$_disposers.push(e)}dispose(){this.$_disposers.forEach((e=>{e()}))}}class w{constructor(e,t){this._desc=e,this.factory=t?.factory}toString(){return`InjectionToken: ${this._desc}`}}const b=Symbol("inject:constructor:params"),_=(e,t={})=>(r,n,o)=>{if(void 0!==n)throw new Error("The @inject decorator can only be used on consturctor parameters!");const i=Reflect.getOwnMetadata(b,r)||[];i[o]={provide:e,optional:!!t.optional},Reflect.defineMetadata(b,i,r)};class m{constructor(e=[],t=null){this.parent=null,this.records=new Map,this.parent=t,e.forEach((e=>{let t=null;if("object"==typeof e){const r=e,n=["useValue","useClass","useExisiting","useFactory"];let o=0;n.forEach((e=>{void 0!==r[e]&&o++})),o>1&&y(`These keys [${n.join(",")}] can only use one, other will be ignored!`,"warn");const{useValue:i=null,...s}=r;t={...s,value:i}}else if("function"==typeof e&&"function"==typeof e.prototype.constructor){t={provide:e,useClass:e}}if(!t)throw y(e),new Error("Error provider onfig!");if(!(void 0!==t.value||t.useClass||t.useExisiting||t.useFactory||t.provide instanceof w&&t.useFactory))throw y(e),new Error("Error provider onfig!");this.records.set(t.provide,t)}))}isProvided(e){return!!this.records.has(e)||!!this.parent&&this.parent.isProvided(e)}get(e){const t=this.records.get(e);return t?(void 0===t.value&&this.$_initRecord(t),t.value||null):this.parent?this.parent.get(e):null}$_initRecord(e){if(e.provide instanceof w&&e.provide.factory){e.value=e.provide.factory(((t,r={})=>{const{optional:n}=r,o=this.get(t);if(!o&&!n)throw y(e),y(w),new Error("Can not find all deps in the DI tree when init the InjectionToken, please provide them before you use the InjectionToken's factory!");return o}))}if(e.useClass){const t=(Reflect.getOwnMetadata(b,e.useClass)||[]).map((t=>{if("object"!=typeof t)return;const{provide:r,optional:n}=t,o=this.get(r);if(!o&&!n)throw y(e),new Error("Can not find all deps in the DI tree when init the useClass, please provide them before you use the useClass!");return o}));e.value=new e.useClass(...t)}else if(e.useExisiting)e.value=this.get(e.useExisiting);else if(e.useFactory){e.value=e.useFactory(((t,r={})=>{const{optional:n}=r,o=this.get(t);if(!o&&!n)throw y(e),new Error("Can not find all deps in the DI tree when init the useFactory, please provide them before you use the useFactory!");return o}))}}dispose(){for(const[,e]of this.records){if(!e.value)return;e.dispose?e.dispose(e.value):"function"==typeof e.value.dispose&&e.value.dispose()}this.parent=null,this.records.clear()}}class g extends v{constructor(r={}){super(),this.displayName="",this.$$={},this.$={};const n=r.state||{};Object.keys(n).forEach((t=>{this.$$[t]=new e(n[t])}));(r.actions||[]).forEach((e=>{this.$[e]=new t})),Object.keys(this.$$).forEach((e=>{this.subscribe(this.$$[e],{next:t=>{y(`[Service ${this.displayName}]: set new state [${e}].`,"info"),y(t,"info")}})})),Object.keys(this.$).forEach((e=>{this.subscribe(this.$[e],{next:t=>{y(`[Service ${this.displayName}]: receive new action [${e}].`,"info"),y(t,"info")}})}))}get state(){const t={};return Object.keys(this.$$).forEach((r=>{const n=this.$$[r];n instanceof e&&(t[r]=n.value)})),t}subscribe(e,...t){const r=e.subscribe(...t);this.beforeDispose((()=>{r.unsubscribe()}))}}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E="function"==typeof Symbol&&Symbol.for,$=E?Symbol.for("react.element"):60103,S=E?Symbol.for("react.portal"):60106,j=E?Symbol.for("react.fragment"):60107,O=E?Symbol.for("react.strict_mode"):60108,k=E?Symbol.for("react.profiler"):60114,x=E?Symbol.for("react.provider"):60109,T=E?Symbol.for("react.context"):60110,P=E?Symbol.for("react.async_mode"):60111,M=E?Symbol.for("react.concurrent_mode"):60111,C=E?Symbol.for("react.forward_ref"):60112,R=E?Symbol.for("react.suspense"):60113,A=E?Symbol.for("react.suspense_list"):60120,F=E?Symbol.for("react.memo"):60115,I=E?Symbol.for("react.lazy"):60116,D=E?Symbol.for("react.block"):60121,L=E?Symbol.for("react.fundamental"):60117,N=E?Symbol.for("react.responder"):60118,z=E?Symbol.for("react.scope"):60119;function K(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case $:switch(e=e.type){case P:case M:case j:case k:case O:case R:return e;default:switch(e=e&&e.$$typeof){case T:case C:case I:case F:case x:return e;default:return t}}case S:return t}}}function U(e){return K(e)===M}var V,B={AsyncMode:P,ConcurrentMode:M,ContextConsumer:T,ContextProvider:x,Element:$,ForwardRef:C,Fragment:j,Lazy:I,Memo:F,Portal:S,Profiler:k,StrictMode:O,Suspense:R,isAsyncMode:function(e){return U(e)||K(e)===P},isConcurrentMode:U,isContextConsumer:function(e){return K(e)===T},isContextProvider:function(e){return K(e)===x},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===$},isForwardRef:function(e){return K(e)===C},isFragment:function(e){return K(e)===j},isLazy:function(e){return K(e)===I},isMemo:function(e){return K(e)===F},isPortal:function(e){return K(e)===S},isProfiler:function(e){return K(e)===k},isStrictMode:function(e){return K(e)===O},isSuspense:function(e){return K(e)===R},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===j||e===M||e===k||e===O||e===R||e===A||"object"==typeof e&&null!==e&&(e.$$typeof===I||e.$$typeof===F||e.$$typeof===x||e.$$typeof===T||e.$$typeof===C||e.$$typeof===L||e.$$typeof===N||e.$$typeof===z||e.$$typeof===D)},typeOf:K},W=(function(e){e.exports=B}(V={exports:{}},V.exports),V.exports),Y={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},H={};function J(e){return W.isMemo(e)?G:H[e.$$typeof]||Y}H[W.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},H[W.Memo]=G;var Q=Object.defineProperty,X=Object.getOwnPropertyNames,Z=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,re=Object.prototype;var ne=function e(t,r,n){if("string"!=typeof r){if(re){var o=te(r);o&&o!==re&&e(t,o,n)}var i=X(r);Z&&(i=i.concat(Z(r)));for(var s=J(t),u=J(r),a=0;a<i.length;++a){var c=i[a];if(!(q[c]||n&&n[c]||u&&u[c]||s&&s[c])){var f=ee(r,c);try{Q(t,c,f)}catch(j){}}}}return t};const oe=n(new m),ie=e=>{const t=o(oe),{providers:n=[],children:i}=e,s=new m(n,t);return r.createElement(oe.Provider,{value:s},i)},se=e=>{const t=o(oe);return"function"==typeof e.children?e.children({getService:(e,r={})=>{const{optional:n=!1}=r;if(!t.get(e)&&!n)throw y(e,"error"),new Error("Can not find the service, you provide it?")}}):e.children},ue=e=>t=>{const n="withInjector("+(t.displayName||t.name)+")",o=i(((n,o)=>r.createElement(ie,{providers:e.providers},r.createElement(t,Object.assign({ref:o},n)))));return o.displayName=n,ne(o,t)};function ae(e){const[t,r]=s(e);return{get value(){return t},set value(e){r(e)}}}function ce(e){const t=u(e);t.current=e;return{get value(){return t.current},set value(e){throw new Error("Can not set value to this ref of useRSWatchRef!")}}}function fe(){const e=o(oe);return a((t=>e.get(t)),[e])}function le(e){return fe()(e)}function pe(e,t){const r=ae(t),n={get value(){return r.value},set value(e){throw new Error("Can not set value to this ref of useObservableRef!")}};return c((()=>{const t=e.subscribe({next:e=>r.value=e});return()=>{t.unsubscribe()}}),[e,r]),n}function he(t){if(!(t instanceof e))throw new Error("The useBehaviorState can only use with BehaviorSubject!");const r=ae(t.value),n={get value(){return r.value},set value(e){throw new Error("Can not set value to this ref of useBehaviorRef!")}};return c((()=>{const e=t.subscribe({next:e=>r.value=e});return()=>{e.unsubscribe()}}),[t,r]),n}function ye(e,r=!1){const n=ae(null),o={get value(){return n.value},set value(e){throw new Error("Can not set value to this ref of useBehaviorRef!")}};return c((()=>{if(e instanceof t&&r&&e.hasError)return;const o=e.subscribe({error:e=>{n.value=e}});return()=>{o.unsubscribe()}}),[e,r,n]),o}function de(e,t){const r=u(t);r.current=t,c((()=>{r.current(e)}),[e])}export{v as Disposable,_ as Inject,w as InjectionToken,m as Injector,g as Service,se as ServiceConsumer,ie as ServiceInjector,h as config,y as debug,d as empty,he as useBehaviorRef,fe as useGetService,de as useListenValue,ye as useObservableError,pe as useObservableRef,ae as useRSRef,le as useService,ce as useValueRef,ue as withInjector};
