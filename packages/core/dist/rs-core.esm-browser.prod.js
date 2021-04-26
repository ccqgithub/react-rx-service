import{BehaviorSubject as e,Subject as s}from"rxjs";const t={logLevel:"error",log:(e,s="info")=>{console&&console[s]&&console[s](e)}},o=e=>{Object.keys(e).forEach((s=>{s in t&&void 0!==e[s]&&(t[s]=e[s])}))},i=(e,s="info",o=!0)=>{if(!o)return;const i=["info","warn","error","never"];i.indexOf(t.logLevel)>i.indexOf(s)||t.log(e,s)},r=Symbol("empty");class n{constructor(){this.$_disposers=[]}beforeDispose(e){this.$_disposers.push(e)}dispose(){this.$_disposers.forEach((e=>{e()}))}}class c{constructor(e,s){this._desc=e,this.factory=s?.factory}toString(){return`InjectionToken: ${this._desc}`}}class a{constructor(e=[],s=null){this.parent=null,this.records=new Map,this.parent=s,e.forEach((e=>{let s=null;if("object"==typeof e){const t=e,o=["useValue","useClass","useExisiting","useFactory"];let r=0;o.forEach((e=>{void 0!==t[e]&&r++})),r>1&&i(`These keys [${o.join(",")}] can only use one, other will be ignored!`,"warn");const{useValue:n,...c}=t;s={...c,value:n}}else if("function"==typeof e&&"function"==typeof e.prototype.constructor){s={provide:e,useClass:e}}if(!s)throw i(e),new Error("Error provider onfig!");if(!(void 0!==s.value||s.useClass||s.useExisiting||s.useFactory||s.provide instanceof c&&s.useFactory))throw i(e),new Error("Error provider onfig!");this.records.set(s.provide,s)}))}isProvided(e){return!!this.records.has(e)||!!this.parent&&this.parent.isProvided(e)}get(e,s){const t=this.records.get(e);let o=null;if(t?(void 0===t.value&&this.$_initRecord(t),o=t.value||null):this.parent&&(o=this.parent.get(e,s)),!o&&!s?.optional)throw new Error("Service not be provided, and not optional!");return o}$_initRecord(e){const s={useService:(e,s)=>this.get(e,s)};e.provide instanceof c&&e.provide.factory&&(e.value=e.provide.factory(s)),e.useClass?e.value=new e.useClass(s):e.useExisiting?e.value=this.get(e.useExisiting):e.useFactory&&(e.value=e.useFactory(s))}dispose(){for(const[,e]of this.records){if(!e.value)return;e.dispose?e.dispose(e.value):"function"==typeof e.value.dispose&&e.value.dispose()}this.parent=null,this.records.clear()}}class u extends n{constructor(t={}){super(),this.displayName="",this.$$={},this.$={};const o=t.state||{};Object.keys(o).forEach((s=>{this.$$[s]=new e(o[s])}));(t.actions||[]).forEach((e=>{this.$[e]=new s})),Object.keys(this.$$).forEach((e=>{this.subscribe(this.$$[e],{next:s=>{i(`[Service ${this.displayName}]: set new state [${e}].`,"info"),i(s,"info")}})})),Object.keys(this.$).forEach((e=>{this.subscribe(this.$[e],{next:s=>{i(`[Service ${this.displayName}]: receive new action [${e}].`,"info"),i(s,"info")}})}))}get state(){const s={};return Object.keys(this.$$).forEach((t=>{const o=this.$$[t];o instanceof e&&(s[t]=o.value)})),s}subscribe(e,...s){const t=e.subscribe(...s);this.beforeDispose((()=>{t.unsubscribe()}))}}export{n as Disposable,c as InjectionToken,a as Injector,u as Service,o as config,i as debug,r as empty};
