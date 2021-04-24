var RSForm=function(e,t){"use strict";function s(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=s(t);const{catchError:r,concatAll:a,reduce:n,switchMap:o,tap:l,skip:u,map:h}=i.operators,d=/%[sdj%]/g;function f(e,...t){let s=0;const i=t.length;if("function"==typeof e)return e(...t);if("string"==typeof e){return e.replace(d,(e=>{if("%%"===e)return"%";if(s>=i)return e;switch(e){case"%s":case"%d":return t[s++];case"%j":try{return JSON.stringify(t[s++])}catch(r){return"[Circular]"}default:return e}}))}return e}function c(e,t,s,i){if(!e.required)return[];const r=[];return function(e,t){return null==e||!("array"!==t||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(t)||"string"!=typeof e||e)}(t,e.type)&&r.push(f(i.messages.required,i.fullField)),r}const m={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},p={integer:e=>p.number(e)&&parseInt(e,10)===e,float:e=>p.number(e)&&!p.integer(e),array:e=>Array.isArray(e),regexp(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(t){return!1}},date:e=>"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime()),number:e=>!isNaN(e)&&"number"==typeof e,object:e=>"object"==typeof e&&!p.array(e),method:e=>"function"==typeof e,email:e=>"string"==typeof e&&!!e.match(m.email)&&e.length<255,url:e=>"string"==typeof e&&!!e.match(m.url),hex:e=>"string"==typeof e&&!!e.match(m.hex)};var g={required:c,whitespace:function(e,t,s,i){if(!e.notWhitespace)return[];const r=[];return(/^\s+$/.test(t)||""===t)&&r.push(f(i.messages.notWhitespace,i.fullField)),r},type:function(e,t,s,i){const r=[],a=e.type;return a?null==t?e.required?c(e,t,0,i):r:(["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)>-1?p[a](t)||r.push(f(i.messages.types[a],i.fullField,a)):a&&typeof t!==a&&r.push(f(i.messages.types[a],i.fullField,a)),r):r},range:function(e,t,s,i){const r=[],a="number"==typeof e.len,n="number"==typeof e.min,o="number"==typeof e.max;if(!a&&!n&&!o)return r;const l=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;let u=t,h=null;const d="number"==typeof t,c="string"==typeof t,m=Array.isArray(t);return d?h="number":c?h="string":m&&(h="array"),h?(m&&(u=t.length),c&&(u=t.replace(l,"_").length),a?u!==e.len&&r.push(f(i.messages[h].len,i.fullField,e.len)):n&&!o&&u<e.min?r.push(f(i.messages[h].min,i.fullField,e.min)):o&&!n&&u>e.max?r.push(f(i.messages[h].max,i.fullField,e.max)):n&&o&&(u<e.min||u>e.max)&&r.push(f(i.messages[h].range,i.fullField,e.min,e.max)),r):r},enum:function(e,t,s,i){if(!e.enum||!Array.isArray(e.enum))return[];const r=[];return-1===e.enum.indexOf(t)&&r.push(f(i.messages.enum,i.fullField,e.enum.join(", "))),r},pattern:function(e,t,s,i){if(!e.pattern)return[];const r=[];if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||r.push(f(i.messages.pattern.mismatch,i.fullField,t,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(t)||r.push(f(i.messages.pattern.mismatch,i.fullField,t,e.pattern))}return r}};const v={default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",notWhitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{match:"%s value %s does not match pattern %s"},clone(){const e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}};class b extends Error{constructor(e,t=!1){super(e),this.self=t}}class y{constructor(e,s,i){this.shouldValidate=(e,t)=>e!==t,this.fields={},this.validating$$=new t.BehaviorSubject(!1),this.errors$$=new t.BehaviorSubject([]),this.validate$=new t.Subject,this.waiting=null,this.disposers=[];const{rules:a=[]}=e,{name:n,namePath:h,form:d,index:f}=i;if(void 0===n)throw new Error("Need a name for RSField!");this.rules=a,this.namePath=h,this.index=f,this.form=d,this.value$$=new t.BehaviorSubject(s),this.updateFields(e,s);const c=this.validate$.pipe(l((()=>{this.validating$$.next(!0);const e={};e.promise=new Promise((t=>{e.resolve=t})),this.waiting=e})),o((()=>this.validateAll())),l((e=>{this.validating$$.next(!1),this.errors$$.next(e),this.waiting&&this.waiting.resolve(e)})),r(((e,t)=>(console.log(e),t)))).subscribe();this.disposers.push((()=>{c.unsubscribe()}));const m=this.errors$$.pipe(u(1)).subscribe((()=>{this.form.updateErrors()}));this.disposers.push((()=>{m.unsubscribe()})),this.form.dirty&&this.validate$.next()}get value(){return this.value$$.value}get errors(){return this.errors$$.value}get fieldErrors(){const{fields:e}=this,t={};return Object.keys(e).forEach((s=>{t[e[s].index]={errors:e[s].errors,fields:e[s].fieldErrors}})),t}get validating(){return this.validating$$.value}updateFields(e,t){const s={};Array.isArray(e.fields)?e.fields.forEach(((e,t)=>{if(!e.name)throw new Error("Array field need a name property!");s[e.name]={...e,index:`${t}`}})):"object"==typeof e.fields&&Object.keys(e.fields).forEach((t=>{s[t]={...e.fields[t],name:t,index:t}}));const i=Object.keys(this.fields),r=Object.keys(s);i.forEach((e=>{-1===r.indexOf(e)&&(this.fields[e].dispose(),delete this.fields[e])})),r.forEach((e=>{-1===i.indexOf(e)?this.fields[e]=new y(s[e],this.getSubValue(t,s[e].index),{form:this.form,name:e,namePath:this.namePath?`${this.namePath}.${s[e].index}`:s[e].index,index:s[e].index}):this.fields[e].update(s[e],this.getSubValue(t,s[e].index))}))}update(e,t){const{rules:s=[]}=e;this.rules=s;const i=this.shouldValidate(t,this.value);this.value$$.next(t),this.updateFields(e,t),i&&this.validate$.next()}validateRules(){const{value:e,rules:s,form:i}=this,r=s.map((t=>this.validateRule(t,e,i.data)));return t.of(...r).pipe(a(),n(((e,t)=>e.concat(...t)),[]),h((e=>e.map((e=>new b(e,!0))))))}validateRule(e,s,i){const r=[];Object.keys(g).forEach((t=>{r.push(...g[t](e,s,i,{messages:v,fullField:this.namePath}))}));let a=null;if(e.validator){const r=e.validator(e,s,i,{messages:v,fullField:this.namePath});a=r instanceof t.Observable?r:r instanceof Promise?t.from(r):t.of(r)}return a?a.pipe(h((e=>r.concat(...e))),h((t=>e.message?[e.message]:t))):t.of(e.message?[e.message]:r)}validateFields(){const{fields:e}=this,s=Object.keys(e).map((t=>e[t].validateWait()));return t.zip(...s).pipe(h((e=>e.reduce(((e,t)=>[...e,...t]),[]))))}validateAll(){return t.concat(this.validateRules(),this.validateFields())}validateWait(){return this.waiting?t.from(this.waiting.promise):t.of([])}validate(){return this.waiting||this.validate$.next(),this.waiting.promise}getSubValue(e,t){if("object"==typeof e)return e[t]}dispose(){this.disposers.forEach((e=>{e()})),this.disposers=[]}}return e.Field=y,e.Form=class{constructor(e,s){this.disposers=[],this.waiting=null,this.dirty=!1,this.validating$$=new t.BehaviorSubject(!1),this.errors$$=new t.BehaviorSubject([]),this.fields$$=new t.BehaviorSubject({}),this.validate$=new t.Subject,this.schema=e,this.data$$=new t.BehaviorSubject(s),this.form=new y(this.getFormFieldSchema(),s,{form:this,name:"",namePath:"",index:""});const i=this.validate$.pipe(l((()=>{this.dirty=!0,this.validating$$.next(!0);const e={};e.promise=new Promise((t=>{e.resolve=t})),this.waiting=e})),o((()=>{const e=this.form.validate();return t.from(e)})),l((e=>{this.validating$$.next(!1),this.errors$$.next(e),this.waiting&&this.waiting.resolve(e)})),r(((e,t)=>(console.log(e),t)))).subscribe();this.disposers.push((()=>{i.unsubscribe()}))}get data(){return this.data$$.value}get validating(){return this.validating$$.value}get errors(){return this.errors$$.value}get fields(){return this.fields$$.value}getFormFieldSchema(){const{schema:e}=this;return{rules:[],fields:"function"==typeof e?e(this.data):e}}updateErrors(){this.errors$$.next(this.form.errors),this.fields$$.next(this.form.fieldErrors)}update(e){this.data$$.next({...this.data,...e}),this.form.update(this.getFormFieldSchema(),this.data)}validate(){return this.validating||this.validate$.next(),this.waiting.promise}dispose(){this.disposers.forEach((e=>{e()}))}},e.messages=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({},rxjs);