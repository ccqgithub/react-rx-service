import{BehaviorSubject as e,Subject as t}from"rxjs";import r,{createContext as o,useContext as s,forwardRef as n,useState as i,useCallback as c,useEffect as a,useRef as u}from"react";const f={logLevel:"error",log:(e,t="info")=>{console&&console[t]&&console[t](e)}},l=e=>{Object.keys(e).forEach((t=>{t in f&&void 0!==e[t]&&(f[t]=e[t])}))},p=(e,t="info",r=!0)=>{if(!r)return;const o=["info","warn","error","never"];o.indexOf(f.logLevel)>o.indexOf(t)||f.log(e,t)},y=Symbol("empty");class d{constructor(){this.$_disposers=[]}beforeDispose(e){this.$_disposers.push(e)}dispose(){this.$_disposers.forEach((e=>{e()}))}}class h{constructor(e,t){this._desc=e,this.factory=t?.factory}toString(){return`InjectionToken: ${this._desc}`}}class b{constructor(e=[],t=null){this.parent=null,this.records=new Map,this.parent=t,e.forEach((e=>{let t=null;if("object"==typeof e){const r=e,o=["useValue","useClass","useExisiting","useFactory"];let s=0;o.forEach((e=>{void 0!==r[e]&&s++})),s>1&&p(`These keys [${o.join(",")}] can only use one, other will be ignored!`,"warn");const{useValue:n,...i}=r;t={...i,value:n}}else if("function"==typeof e&&"function"==typeof e.prototype.constructor){t={provide:e,useClass:e}}if(!t)throw p(e),new Error("Error provider onfig!");if(!(void 0!==t.value||t.useClass||t.useExisiting||t.useFactory||t.provide instanceof h&&t.useFactory))throw p(e),new Error("Error provider onfig!");this.records.set(t.provide,t)}))}isProvided(e){return!!this.records.has(e)||!!this.parent&&this.parent.isProvided(e)}get(e,t){const r=this.records.get(e);let o=null;if(r?(void 0===r.value&&this.$_initRecord(r),o=r.value||null):this.parent&&(o=this.parent.get(e,t)),!o&&!t?.optional)throw new Error("Service not be provided, and not optional!");return o}$_initRecord(e){const t={useService:(e,t)=>this.get(e,t)};e.provide instanceof h&&e.provide.factory&&(e.value=e.provide.factory(t)),e.useClass?e.value=new e.useClass(t):e.useExisiting?e.value=this.get(e.useExisiting):e.useFactory&&(e.value=e.useFactory(t))}dispose(){for(const[,e]of this.records){if(!e.value)return;e.dispose?e.dispose(e.value):"function"==typeof e.value.dispose&&e.value.dispose()}this.parent=null,this.records.clear()}}class m extends d{constructor(r={}){super(),this.displayName="",this.$$={},this.$={};const o=r.state||{};Object.keys(o).forEach((t=>{this.$$[t]=new e(o[t])}));(r.actions||[]).forEach((e=>{this.$[e]=new t})),Object.keys(this.$$).forEach((e=>{this.subscribe(this.$$[e],{next:t=>{p(`[Service ${this.displayName}]: set new state [${e}].`,"info"),p(t,"info")}})})),Object.keys(this.$).forEach((e=>{this.subscribe(this.$[e],{next:t=>{p(`[Service ${this.displayName}]: receive new action [${e}].`,"info"),p(t,"info")}})}))}get state(){const t={};return Object.keys(this.$$).forEach((r=>{const o=this.$$[r];o instanceof e&&(t[r]=o.value)})),t}subscribe(e,...t){const r=e.subscribe(...t);this.beforeDispose((()=>{r.unsubscribe()}))}}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v="function"==typeof Symbol&&Symbol.for,$=v?Symbol.for("react.element"):60103,S=v?Symbol.for("react.portal"):60106,g=v?Symbol.for("react.fragment"):60107,w=v?Symbol.for("react.strict_mode"):60108,x=v?Symbol.for("react.profiler"):60114,E=v?Symbol.for("react.provider"):60109,j=v?Symbol.for("react.context"):60110,O=v?Symbol.for("react.async_mode"):60111,P=v?Symbol.for("react.concurrent_mode"):60111,C=v?Symbol.for("react.forward_ref"):60112,F=v?Symbol.for("react.suspense"):60113,_=v?Symbol.for("react.suspense_list"):60120,M=v?Symbol.for("react.memo"):60115,T=v?Symbol.for("react.lazy"):60116,N=v?Symbol.for("react.block"):60121,k=v?Symbol.for("react.fundamental"):60117,D=v?Symbol.for("react.responder"):60118,R=v?Symbol.for("react.scope"):60119;function L(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case $:switch(e=e.type){case O:case P:case g:case x:case w:case F:return e;default:switch(e=e&&e.$$typeof){case j:case C:case T:case M:case E:return e;default:return t}}case S:return t}}}function V(e){return L(e)===P}var z,A={AsyncMode:O,ConcurrentMode:P,ContextConsumer:j,ContextProvider:E,Element:$,ForwardRef:C,Fragment:g,Lazy:T,Memo:M,Portal:S,Profiler:x,StrictMode:w,Suspense:F,isAsyncMode:function(e){return V(e)||L(e)===O},isConcurrentMode:V,isContextConsumer:function(e){return L(e)===j},isContextProvider:function(e){return L(e)===E},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===$},isForwardRef:function(e){return L(e)===C},isFragment:function(e){return L(e)===g},isLazy:function(e){return L(e)===T},isMemo:function(e){return L(e)===M},isPortal:function(e){return L(e)===S},isProfiler:function(e){return L(e)===x},isStrictMode:function(e){return L(e)===w},isSuspense:function(e){return L(e)===F},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===g||e===P||e===x||e===w||e===F||e===_||"object"==typeof e&&null!==e&&(e.$$typeof===T||e.$$typeof===M||e.$$typeof===E||e.$$typeof===j||e.$$typeof===C||e.$$typeof===k||e.$$typeof===D||e.$$typeof===R||e.$$typeof===N)},typeOf:L},B=(function(e){e.exports=A}(z={exports:{}},z.exports),z.exports),I={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},H={};function J(e){return B.isMemo(e)?G:H[e.$$typeof]||I}H[B.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},H[B.Memo]=G;var K=Object.defineProperty,Q=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,W=Object.getOwnPropertyDescriptor,X=Object.getPrototypeOf,Y=Object.prototype;var Z=function e(t,r,o){if("string"!=typeof r){if(Y){var s=X(r);s&&s!==Y&&e(t,s,o)}var n=Q(r);U&&(n=n.concat(U(r)));for(var i=J(t),c=J(r),a=0;a<n.length;++a){var u=n[a];if(!(q[u]||o&&o[u]||c&&c[u]||i&&i[u])){var f=W(r,u);try{K(t,u,f)}catch(g){}}}}return t};const ee=o(new b),te=e=>{const t=s(ee),{providers:o=[],children:n}=e,i=new b(o,t);return r.createElement(ee.Provider,{value:i},n)},re=e=>{const t=s(ee);return"function"==typeof e.children?e.children({getService:(e,r)=>t.get(e,r)}):e.children},oe=e=>t=>{const o="withInjector("+(t.displayName||t.name)+")",s=n(((o,s)=>r.createElement(te,{providers:e.providers},r.createElement(t,Object.assign({ref:s},o)))));return s.displayName=o,Z(s,t)};function se(e){const[t,r]=i(e),[o]=i((()=>({state:t,setState:r,get current(){return this.state},set current(e){this.setState&&this.setState(e)}})));return o.state=t,o.setState=r,o}function ne(e){const[t]=i((()=>({state:e,get current(){return this.state},set current(e){throw new Error("Can not set value to this ref of useValueRef!")}})));return t.state=e,t}function ie(){const e=s(ee);return c(((t,r)=>e.get(t,r)),[e])}const ce=(e,t)=>ie()(e,t);function ae(e,t){const[r,o]=i(t);return a((()=>{const t=e.subscribe({next:e=>o(e)});return()=>{t.unsubscribe()}}),[e]),r}function ue(t){if(!(t instanceof e))throw new Error("The useBehaviorState can only use with BehaviorSubject!");const[r,o]=i(t.value);return a((()=>{const e=t.subscribe({next:e=>o(e)});return()=>{e.unsubscribe()}}),[t]),r}function fe(e,r=!1){const[o,s]=i(null);return a((()=>{if(e instanceof t&&r&&e.hasError)return;const o=e.subscribe({error:e=>{s(e)}});return()=>{o.unsubscribe()}}),[e,r]),o}function le(e,t){const r=u(t);r.current=t,a((()=>{r.current(e)}),[e])}function pe(e,t){const r=ne(t);a((()=>{const t=e.subscribe((e=>r.current.next&&r.current.next(e)),(e=>r.current.error&&r.current.error(e)),(()=>r.current.complete&&r.current.complete()));return()=>{t.unsubscribe()}}),[e,r])}export{d as Disposable,h as InjectionToken,b as Injector,m as Service,re as ServiceConsumer,te as ServiceInjector,l as config,p as debug,y as empty,ue as useBehavior,ie as useGetService,le as useListenValue,ae as useObservable,fe as useObservableError,se as useRSRef,ce as useService,pe as useSubscribe,ne as useValueRef,oe as withInjector};
