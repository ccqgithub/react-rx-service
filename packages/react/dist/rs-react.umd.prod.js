var e,t;e=this,t=function(e,t,r){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=s(r);const n={logLevel:"error",log:(e,t="info")=>{console&&console[t]&&console[t](e)}},i=(e,t="info",r=!0)=>{if(!r)return;const s=["info","warn","error","never"];s.indexOf(n.logLevel)>s.indexOf(t)||n.log(e,t)};class c{constructor(){this.$_disposers=[]}beforeDispose(e){this.$_disposers.push(e)}dispose(){this.$_disposers.forEach((e=>{e()}))}}
/*! *****************************************************************************
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
  ***************************************************************************** */class u{constructor(e,t){this._desc=e,this.factory=null==t?void 0:t.factory}toString(){return`InjectionToken: ${this._desc}`}}class a{constructor(e=[],t=null){this.parent=null,this.records=new Map,this.parent=t,e.forEach((e=>{let t=null;if("object"==typeof e){const r=e,s=["useValue","useClass","useExisiting","useFactory"];let o=0;s.forEach((e=>{void 0!==r[e]&&o++})),o>1&&i(`These keys [${s.join(",")}] can only use one, other will be ignored!`,"warn");const{useValue:n}=r,c=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]])}return r}(r,["useValue"]);t=Object.assign(Object.assign({},c),{value:n})}else"function"==typeof e&&"function"==typeof e.prototype.constructor&&(t={provide:e,useClass:e});if(!t)throw i(e),new Error("Error provider onfig!");if(!(void 0!==t.value||t.useClass||t.useExisiting||t.useFactory||t.provide instanceof u&&t.useFactory))throw i(e),new Error("Error provider onfig!");this.records.set(t.provide,t)}))}isProvided(e){return!!this.records.has(e)||!!this.parent&&this.parent.isProvided(e)}get(e,t){const r=this.records.get(e);let s=null;if(r?(void 0===r.value&&this.$_initRecord(r),s=r.value||null):this.parent&&(s=this.parent.get(e,t)),!s&&!(null==t?void 0:t.optional))throw new Error("Service not be provided, and not optional!");return s}$_initRecord(e){const t={useService:(e,t)=>this.get(e,t)};e.provide instanceof u&&e.provide.factory&&(e.value=e.provide.factory(t)),e.useClass?e.value=new e.useClass(t):e.useExisiting?e.value=this.get(e.useExisiting):e.useFactory&&(e.value=e.useFactory(t))}dispose(){for(const[,e]of this.records){if(!e.value)return;e.dispose?e.dispose(e.value):"function"==typeof e.value.dispose&&e.value.dispose()}this.parent=null,this.records.clear()}}const l=r.createContext(new a),f=()=>{const e=r.useContext(l);return r.useCallback(((t,r)=>e.get(t,r)),[e])};e.Disposable=c,e.InjectionToken=u,e.Injector=a,e.Service=class extends c{constructor(e={}){super(),this.displayName="",this.$$={},this.$={},this.$e={};const r=e.state||{};Object.keys(r).forEach((e=>{this.$$[e]=new t.BehaviorSubject(r[e])})),(e.actions||[]).forEach((e=>{this.$[e]=new t.Subject})),(e.events||[]).forEach((e=>{this.$e[e]=new t.Subject})),Object.keys(this.$$).forEach((e=>{this.subscribe(this.$$[e],{next:t=>{i(`[Service ${this.displayName}]: set new state [${e}].`,"info"),i(t,"info")}})})),Object.keys(this.$).forEach((e=>{this.subscribe(this.$[e],{next:t=>{i(`[Service ${this.displayName}]: receive new action [${e}].`,"info"),i(t,"info")}})})),Object.keys(this.$e).forEach((e=>{this.subscribe(this.$e[e],{next:t=>{i(`[Service ${this.displayName}]: emit new event [${e}].`,"info"),i(t,"info")}})}))}get state(){const e={};return Object.keys(this.$$).forEach((r=>{const s=this.$$[r];s instanceof t.BehaviorSubject&&(e[r]=s.value)})),e}subscribe(e,...t){const r=e.subscribe(...t);this.beforeDispose((()=>{r.unsubscribe()}))}},e.ServiceConsumer=e=>{const t=r.useContext(l);return"function"==typeof e.children?e.children({getService:(e,r)=>t.get(e,r)}):e.children},e.ServiceInjector=e=>{const t=r.useRef(!0),s=r.useContext(l),{providers:n=[],children:i}=e,[c,u]=r.useState((()=>new a(n,s)));return r.useEffect((()=>{if(t.current)return void(t.current=!1);const e=new a(n,s);u(e)}),[n,s]),o.default.createElement(l.Provider,{value:c},i)},e.config=e=>{Object.keys(e).forEach((t=>{t in n&&void 0!==e[t]&&(n[t]=e[t])}))},e.debug=i,e.useBehavior=e=>{if(!(e instanceof t.BehaviorSubject))throw new Error("The useBehaviorState can only use with BehaviorSubject!");const[s,o]=r.useState(e.value);return r.useEffect((()=>{const t=e.subscribe({next:e=>o(e)});return()=>{t.unsubscribe()}}),[e]),s},e.useGetService=f,e.useObservable=(e,t)=>{const[s,o]=r.useState(t);return r.useEffect((()=>{const t=e.subscribe({next:e=>o(e)});return()=>{t.unsubscribe()}}),[e]),s},e.useObservableError=(e,t=null,s={onlyAfter:!0})=>{const[o,n]=r.useState(t);return r.useEffect((()=>{let t=!1;const r=e.subscribe({error:e=>{s.onlyAfter&&!t||n(e)}});return t=!0,()=>{r.unsubscribe()}}),[e,s.onlyAfter]),o},e.useService=(e,t)=>f()(e,t),e.useSubscribe=function(e,t,s,o){const n=r.useMemo((()=>"object"==typeof t&&null!==t?t:{next:t,error:s,complete:o}),[t,s,o]),i=r.useRef(n);i.current=n,r.useEffect((()=>{const t=e.subscribe((e=>i.current.next&&i.current.next(e)),(e=>i.current.error&&i.current.error(e)),(()=>i.current.complete&&i.current.complete()));return()=>{t.unsubscribe()}}),[e,i])},Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("rxjs"),require("react")):"function"==typeof define&&define.amd?define(["exports","rxjs","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).RSReact={},e.rxjs,e.React);