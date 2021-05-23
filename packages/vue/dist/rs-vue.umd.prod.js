var e,s;e=this,s=function(e,s,r){const t={logLevel:"error",log:(e,s="info")=>{console&&console[s]&&console[s](e)}},o=(e,s="info",r=!0)=>{if(!r)return;const o=["info","warn","error","never"];o.indexOf(t.logLevel)>o.indexOf(s)||t.log(e,s)};class n{constructor(){this.$_disposers=[]}beforeDispose(e){this.$_disposers.push(e)}dispose(){this.$_disposers.forEach((e=>{e()}))}}class i{constructor(e,s){this._desc=e,this.factory=s?.factory}toString(){return`InjectionToken: ${this._desc}`}}class c{constructor(e=[],s=null){this.parent=null,this.records=new Map,this.parent=s,e.forEach((e=>{let s=null;if("object"==typeof e){const r=e,t=["useValue","useClass","useExisiting","useFactory"];let n=0;t.forEach((e=>{void 0!==r[e]&&n++})),n>1&&o(`These keys [${t.join(",")}] can only use one, other will be ignored!`,"warn");const{useValue:i,...c}=r;s={...c,value:i}}else"function"==typeof e&&"function"==typeof e.prototype.constructor&&(s={provide:e,useClass:e});if(!s)throw o(e),new Error("Error provider onfig!");if(!(void 0!==s.value||s.useClass||s.useExisiting||s.useFactory||s.provide instanceof i&&s.useFactory))throw o(e),new Error("Error provider onfig!");this.records.set(s.provide,s)}))}isProvided(e){return!!this.records.has(e)||!!this.parent&&this.parent.isProvided(e)}get(e,s){const r=this.records.get(e);let t=null;if(r?(void 0===r.value&&this.$_initRecord(r),t=r.value||null):this.parent&&(t=this.parent.get(e,s)),!t&&!s?.optional)throw new Error("Service not be provided, and not optional!");return t}$_initRecord(e){const s={useService:(e,s)=>this.get(e,s)};e.provide instanceof i&&e.provide.factory&&(e.value=e.provide.factory(s)),e.useClass?e.value=new e.useClass(s):e.useExisiting?e.value=this.get(e.useExisiting):e.useFactory&&(e.value=e.useFactory(s))}dispose(){for(const[,e]of this.records){if(!e.value)return;e.dispose?e.dispose(e.value):"function"==typeof e.value.dispose&&e.value.dispose()}this.parent=null,this.records.clear()}}const u=Symbol("Injector Key"),a=Symbol("Instance Injector Key"),l=r.defineComponent({props:{providers:{type:Object,required:!0}},setup(e){const s=r.inject(u),t=new c(e.providers,s);r.provide(u,t)}});e.Disposable=n,e.InjectionToken=i,e.Injector=c,e.Service=class extends n{constructor(e={}){super(),this.displayName="",this.$={},this.$e={};const t=r.reactive(e.state||{}),n=r.readonly(t);this._state=t,this.state=n,(e.actions||[]).forEach((e=>{this.$[e]=new s.Subject})),(e.events||[]).forEach((e=>{this.$e[e]=new s.Subject})),Object.keys(this.$).forEach((e=>{this.subscribe(this.$[e],{next:s=>{o(`[Service ${this.displayName}]: receive new action [${e}].`,"info"),o(s,"info")}})})),Object.keys(this.$e).forEach((e=>{this.subscribe(this.$e[e],{next:s=>{o(`[Service ${this.displayName}]: emit new event [${e}].`,"info"),o(s,"info")}})}))}setState(e){e(this._state)}subscribe(e,...s){const r=e.subscribe(...s);this.beforeDispose((()=>{r.unsubscribe()}))}},e.ServiceInjector=l,e.config=e=>{Object.keys(e).forEach((s=>{s in t&&void 0!==e[s]&&(t[s]=e[s])}))},e.debug=o,e.useBehavior=e=>{if(!(e instanceof s.BehaviorSubject))throw new Error("The useBehaviorState can only use with BehaviorSubject!");const t=r.ref(e.value),o=e.subscribe({next:e=>t.value=e});return r.onBeforeUnmount((()=>{o.unsubscribe()})),t},e.useGetService=()=>{const e=r.getCurrentInstance()[a]||r.inject(u);return(s,r)=>{if(!e){if(!r||!r.optional)throw new Error("Never register any injector!");return null}return e.get(s,r)}},e.useObservable=(e,s)=>{const t=r.ref(s),o=e.subscribe({next:e=>t.value=e});return r.onBeforeUnmount((()=>{o.unsubscribe()})),t},e.useObservableError=(e,s=null,t={onlyAfter:!0})=>{const o=r.ref(s);let n=!1;const i=e.subscribe({error:e=>{t.onlyAfter&&!n||(o.value=e)}});return n=!0,r.onBeforeUnmount((()=>{i.unsubscribe()})),o},e.useService=(e,s)=>{const t=r.getCurrentInstance()[a]||r.inject(u);if(!t){if(!s||!s.optional)throw new Error("Never register any injectorå!");return null}return t.get(e,s)},e.useSubscribe=function(e,s){const t=e.subscribe(s);r.onBeforeUnmount((()=>{t.unsubscribe()}))},Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("rxjs"),require("vue")):"function"==typeof define&&define.amd?define(["exports","rxjs","vue"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).RSVue={},e.rxjs,e.Vue);
