import{BehaviorSubject as e,Subject as r}from"rxjs";import t,{createContext as o,useRef as s,useContext as n,useState as i,useEffect as c,forwardRef as a,useCallback as u}from"react";const f={logLevel:"error",log:(e,r="info")=>{console&&console[r]&&console[r](e)}},l=e=>{Object.keys(e).forEach((r=>{r in f&&void 0!==e[r]&&(f[r]=e[r])}))},p=(e,r="info",t=!0)=>{if(!t)return;const o=["info","warn","error","never"];o.indexOf(f.logLevel)>o.indexOf(r)||f.log(e,r)},y=Symbol("empty");class d{constructor(){this.$_disposers=[]}beforeDispose(e){this.$_disposers.push(e)}dispose(){this.$_disposers.forEach((e=>{e()}))}}class h{constructor(e,r){this._desc=e,this.factory=r?.factory}toString(){return`InjectionToken: ${this._desc}`}}class b{constructor(e=[],r=null){this.parent=null,this.records=new Map,this.parent=r,e.forEach((e=>{let r=null;if("object"==typeof e){const t=e,o=["useValue","useClass","useExisiting","useFactory"];let s=0;o.forEach((e=>{void 0!==t[e]&&s++})),s>1&&p(`These keys [${o.join(",")}] can only use one, other will be ignored!`,"warn");const{useValue:n,...i}=t;r={...i,value:n}}else if("function"==typeof e&&"function"==typeof e.prototype.constructor){r={provide:e,useClass:e}}if(!r)throw p(e),new Error("Error provider onfig!");if(!(void 0!==r.value||r.useClass||r.useExisiting||r.useFactory||r.provide instanceof h&&r.useFactory))throw p(e),new Error("Error provider onfig!");this.records.set(r.provide,r)}))}isProvided(e){return!!this.records.has(e)||!!this.parent&&this.parent.isProvided(e)}get(e,r){const t=this.records.get(e);let o=null;if(t?(void 0===t.value&&this.$_initRecord(t),o=t.value||null):this.parent&&(o=this.parent.get(e,r)),!o&&!r?.optional)throw new Error("Service not be provided, and not optional!");return o}$_initRecord(e){const r={useService:(e,r)=>this.get(e,r)};e.provide instanceof h&&e.provide.factory&&(e.value=e.provide.factory(r)),e.useClass?e.value=new e.useClass(r):e.useExisiting?e.value=this.get(e.useExisiting):e.useFactory&&(e.value=e.useFactory(r))}dispose(){for(const[,e]of this.records){if(!e.value)return;e.dispose?e.dispose(e.value):"function"==typeof e.value.dispose&&e.value.dispose()}this.parent=null,this.records.clear()}}class m extends d{constructor(t={}){super(),this.displayName="",this.$$={},this.$={},this.$e={};const o=t.state||{};Object.keys(o).forEach((r=>{this.$$[r]=new e(o[r])}));(t.actions||[]).forEach((e=>{this.$[e]=new r}));(t.events||[]).forEach((e=>{this.$e[e]=new r})),Object.keys(this.$$).forEach((e=>{this.subscribe(this.$$[e],{next:r=>{p(`[Service ${this.displayName}]: set new state [${e}].`,"info"),p(r,"info")}})})),Object.keys(this.$).forEach((e=>{this.subscribe(this.$[e],{next:r=>{p(`[Service ${this.displayName}]: receive new action [${e}].`,"info"),p(r,"info")}})})),Object.keys(this.$e).forEach((e=>{this.subscribe(this.$e[e],{next:r=>{p(`[Service ${this.displayName}]: emit new event [${e}].`,"info"),p(r,"info")}})}))}get state(){const r={};return Object.keys(this.$$).forEach((t=>{const o=this.$$[t];o instanceof e&&(r[t]=o.value)})),r}subscribe(e,...r){const t=e.subscribe(...r);this.beforeDispose((()=>{t.unsubscribe()}))}}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v="function"==typeof Symbol&&Symbol.for,$=v?Symbol.for("react.element"):60103,g=v?Symbol.for("react.portal"):60106,S=v?Symbol.for("react.fragment"):60107,w=v?Symbol.for("react.strict_mode"):60108,x=v?Symbol.for("react.profiler"):60114,E=v?Symbol.for("react.provider"):60109,j=v?Symbol.for("react.context"):60110,O=v?Symbol.for("react.async_mode"):60111,P=v?Symbol.for("react.concurrent_mode"):60111,C=v?Symbol.for("react.forward_ref"):60112,F=v?Symbol.for("react.suspense"):60113,_=v?Symbol.for("react.suspense_list"):60120,M=v?Symbol.for("react.memo"):60115,N=v?Symbol.for("react.lazy"):60116,T=v?Symbol.for("react.block"):60121,k=v?Symbol.for("react.fundamental"):60117,D=v?Symbol.for("react.responder"):60118,R=v?Symbol.for("react.scope"):60119;function L(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case $:switch(e=e.type){case O:case P:case S:case x:case w:case F:return e;default:switch(e=e&&e.$$typeof){case j:case C:case N:case M:case E:return e;default:return r}}case g:return r}}}function z(e){return L(e)===P}var V,A={AsyncMode:O,ConcurrentMode:P,ContextConsumer:j,ContextProvider:E,Element:$,ForwardRef:C,Fragment:S,Lazy:N,Memo:M,Portal:g,Profiler:x,StrictMode:w,Suspense:F,isAsyncMode:function(e){return z(e)||L(e)===O},isConcurrentMode:z,isContextConsumer:function(e){return L(e)===j},isContextProvider:function(e){return L(e)===E},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===$},isForwardRef:function(e){return L(e)===C},isFragment:function(e){return L(e)===S},isLazy:function(e){return L(e)===N},isMemo:function(e){return L(e)===M},isPortal:function(e){return L(e)===g},isProfiler:function(e){return L(e)===x},isStrictMode:function(e){return L(e)===w},isSuspense:function(e){return L(e)===F},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===S||e===P||e===x||e===w||e===F||e===_||"object"==typeof e&&null!==e&&(e.$$typeof===N||e.$$typeof===M||e.$$typeof===E||e.$$typeof===j||e.$$typeof===C||e.$$typeof===k||e.$$typeof===D||e.$$typeof===R||e.$$typeof===T)},typeOf:L},B=(function(e){e.exports=A}(V={exports:{}},V.exports),V.exports),I={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},H={};function J(e){return B.isMemo(e)?G:H[e.$$typeof]||I}H[B.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},H[B.Memo]=G;var K=Object.defineProperty,Q=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,W=Object.getOwnPropertyDescriptor,X=Object.getPrototypeOf,Y=Object.prototype;var Z=function e(r,t,o){if("string"!=typeof t){if(Y){var s=X(t);s&&s!==Y&&e(r,s,o)}var n=Q(t);U&&(n=n.concat(U(t)));for(var i=J(r),c=J(t),a=0;a<n.length;++a){var u=n[a];if(!(q[u]||o&&o[u]||c&&c[u]||i&&i[u])){var f=W(t,u);try{K(r,u,f)}catch(S){}}}}return r};const ee=o(new b),re=e=>{const r=s(!0),o=n(ee),{providers:a=[],children:u}=e,[f,l]=i((()=>new b(a,o)));return c((()=>{if(r.current)return void(r.current=!1);const e=new b(a,o);l(e)}),[a,o]),t.createElement(ee.Provider,{value:f},u)},te=e=>{const r=n(ee);return"function"==typeof e.children?e.children({getService:(e,t)=>r.get(e,t)}):e.children},oe=e=>r=>{const o="withInjector("+(r.displayName||r.name)+")",s=a(((o,s)=>t.createElement(re,{providers:e.providers},t.createElement(r,Object.assign({ref:s},o)))));return s.displayName=o,Z(s,r)},se=()=>{const e=n(ee);return u(((r,t)=>e.get(r,t)),[e])},ne=(e,r)=>se()(e,r),ie=(e,r)=>{const[t,o]=i(r);return c((()=>{const r=e.subscribe({next:e=>o(e)});return()=>{r.unsubscribe()}}),[e]),t},ce=r=>{if(!(r instanceof e))throw new Error("The useBehaviorState can only use with BehaviorSubject!");const[t,o]=i(r.value);return c((()=>{const e=r.subscribe({next:e=>o(e)});return()=>{e.unsubscribe()}}),[r]),t},ae=(e,t=!1)=>{const[o,s]=i(null);return c((()=>{if(e instanceof r&&t&&e.hasError)return;const o=e.subscribe({error:e=>{s(e)}});return()=>{o.unsubscribe()}}),[e,t]),o},ue=(e,r)=>{const t=s(r);t.current=r,c((()=>{const r=e.subscribe((e=>t.current.next&&t.current.next(e)),(e=>t.current.error&&t.current.error(e)),(()=>t.current.complete&&t.current.complete()));return()=>{r.unsubscribe()}}),[e,t])};export{d as Disposable,h as InjectionToken,b as Injector,m as Service,te as ServiceConsumer,re as ServiceInjector,l as config,p as debug,y as empty,ce as useBehavior,se as useGetService,ie as useObservable,ae as useObservableError,ne as useService,ue as useSubscribe,oe as withInjector};
