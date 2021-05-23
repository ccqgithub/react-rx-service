import{Injector as e,Disposable as t,debug as r}from"@reactive-service/core";export*from"@reactive-service/core";import{defineComponent as s,inject as i,provide as n,reactive as o,readonly as c,getCurrentInstance as u,ref as a,onBeforeUnmount as b}from"vue";import{Subject as h,BehaviorSubject as f}from"rxjs";const l=Symbol("Injector Key"),v=Symbol("Instance Injector Key"),p=s({props:{providers:{type:Object,required:!0}},setup(t){const r=i(l),s=new e(t.providers,r);n(l,s)}});class y extends t{constructor(e={}){super(),this.displayName="",this.$={},this.$e={};const t=o(e.state||{}),s=c(t);this._state=t,this.state=s;(e.actions||[]).forEach((e=>{this.$[e]=new h}));(e.events||[]).forEach((e=>{this.$e[e]=new h})),Object.keys(this.$).forEach((e=>{this.subscribe(this.$[e],{next:t=>{r(`[Service ${this.displayName}]: receive new action [${e}].`,"info"),r(t,"info")}})})),Object.keys(this.$e).forEach((e=>{this.subscribe(this.$e[e],{next:t=>{r(`[Service ${this.displayName}]: emit new event [${e}].`,"info"),r(t,"info")}})}))}setState(e){e(this._state)}subscribe(e,...t){const r=e.subscribe(...t);this.beforeDispose((()=>{r.unsubscribe()}))}}const m=()=>{const e=u()[v]||i(l);return(t,r)=>{if(!e){if(!r||!r.optional)throw new Error("Never register any injector!");return null}return e.get(t,r)}},w=(e,t)=>{const r=u()[v]||i(l);if(!r){if(!t||!t.optional)throw new Error("Never register any injectorå!");return null}return r.get(e,t)},$=(e,t)=>{const r=a(t),s=e.subscribe({next:e=>r.value=e});return b((()=>{s.unsubscribe()})),r},j=e=>{if(!(e instanceof f))throw new Error("The useBehaviorState can only use with BehaviorSubject!");const t=a(e.value),r=e.subscribe({next:e=>t.value=e});return b((()=>{r.unsubscribe()})),t},x=(e,t=null,r={onlyAfter:!0})=>{const s=a(t);let i=!1;const n=e.subscribe({error:e=>{r.onlyAfter&&!i||(s.value=e)}});return i=!0,b((()=>{n.unsubscribe()})),s};function d(e,t){const r=e.subscribe(t);b((()=>{r.unsubscribe()}))}export{y as Service,p as ServiceInjector,j as useBehavior,m as useGetService,$ as useObservable,x as useObservableError,w as useService,d as useSubscribe};
