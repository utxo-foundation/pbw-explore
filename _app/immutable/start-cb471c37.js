import{S as ot,i as it,s as st,a as lt,e as U,c as ct,b as G,g as Z,t as D,d as Q,f as j,h as B,j as ft,o as Ae,k as ut,l as dt,m as pt,n as ke,p as W,q as ht,r as _t,u as mt,v as H,w as K,x as se,y as z,z as J,A as he}from"./chunks/index-bc2baea7.js";import{S as tt,I as M,g as ze,f as Je,a as Re,b as _e,s as Y,i as We,c as oe,P as Ye,d as gt,e as wt,h as yt}from"./chunks/singletons-be286767.js";import{R as Xe,H as Pe}from"./chunks/control-e7f5239e.js";function vt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function bt(r){return r.split("%25").map(decodeURI).join("%25")}function Et(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const kt=["href","pathname","search","searchParams","toString","toJSON"];function Rt(r,e){const n=new URL(r);for(const o of kt){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return $t(n),n}function $t(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function Lt(r){return r.replace(/\/$/,"")+St}function It(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ie.delete(Ne(r)),me(r,e));const ie=new Map;function At(r,e){const n=Ne(r,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:a,...d}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ie.set(n,{body:a,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,d))}return me(r,e)}function Pt(r,e,n){if(ie.size>0){const o=Ne(r,n),a=ie.get(o);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);ie.delete(o)}}return me(e,n)}function Ne(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${It(e.body)}"]`),o}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Nt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Ut(r).map(o=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,p)=>{if(p%2){if(u.startsWith("x+"))return $e(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return $e(String.fromCharCode(...u.slice(2).split("-").map(L=>parseInt(L,16))));const g=Ot.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,N,k,F]=g;return e.push({name:k,matcher:F,optional:!!y,rest:!!N,chained:N?p===1&&t[0]==="":!1}),N?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return $e(u)}).join("")}).join("")}/?$`),params:e}}function Tt(r){return!/^\([^)]+\)$/.test(r)}function Ut(r){return r.slice(1).split("/").filter(Tt)}function Dt(r,e,n){const o={},a=r.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=a[t];if(f.chained&&f.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)f.rest&&(o[f.name]="");else{if(f.matcher&&!n[f.matcher](u)){if(f.optional&&f.chained){let p=a.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;p>=t;)a[p]=a[p-1],p-=1;continue}return}o[f.name]=u}}if(!d)return o}function $e(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([f,[u,p,g]])=>{const{pattern:y,params:N}=Nt(f),k={id:f,exec:F=>{const L=y.exec(F);if(L)return Dt(L,N,o)},errors:[1,...g||[]].map(F=>r[F]),layouts:[0,...p||[]].map(t),leaf:d(u)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function d(f){const u=f<0;return u&&(f=~f),[u,r[f]]}function t(f){return f===void 0?f:[a.has(f),r[f]]}}function Vt(r){let e,n,o;var a=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=H(a,d(r))),{c(){e&&K(e.$$.fragment),n=U()},l(t){e&&se(e.$$.fragment,t),n=U()},m(t,f){e&&z(e,t,f),G(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),a!==(a=t[0][0])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{J(p,1)}),Q()}a?(e=H(a,d(t)),K(e.$$.fragment),j(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&J(e,t)}}}function Ct(r){let e,n,o;var a=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Mt]},$$scope:{ctx:t}}}}return a&&(e=H(a,d(r))),{c(){e&&K(e.$$.fragment),n=U()},l(t){e&&se(e.$$.fragment,t),n=U()},m(t,f){e&&z(e,t,f),G(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),a!==(a=t[0][0])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{J(p,1)}),Q()}a?(e=H(a,d(t)),K(e.$$.fragment),j(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&J(e,t)}}}function qt(r){let e,n,o;var a=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=H(a,d(r))),{c(){e&&K(e.$$.fragment),n=U()},l(t){e&&se(e.$$.fragment,t),n=U()},m(t,f){e&&z(e,t,f),G(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),a!==(a=t[0][1])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{J(p,1)}),Q()}a?(e=H(a,d(t)),K(e.$$.fragment),j(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&J(e,t)}}}function Bt(r){let e,n,o;var a=r[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return a&&(e=H(a,d(r))),{c(){e&&K(e.$$.fragment),n=U()},l(t){e&&se(e.$$.fragment,t),n=U()},m(t,f){e&&z(e,t,f),G(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),a!==(a=t[0][1])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{J(p,1)}),Q()}a?(e=H(a,d(t)),K(e.$$.fragment),j(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&J(e,t)}}}function Ft(r){let e,n,o;var a=r[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=H(a,d(r))),{c(){e&&K(e.$$.fragment),n=U()},l(t){e&&se(e.$$.fragment,t),n=U()},m(t,f){e&&z(e,t,f),G(t,n,f),o=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),a!==(a=t[0][2])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{J(p,1)}),Q()}a?(e=H(a,d(t)),K(e.$$.fragment),j(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&J(e,t)}}}function Mt(r){let e,n,o,a;const d=[Bt,qt],t=[];function f(u,p){return u[0][2]?0:1}return e=f(r),n=t[e]=d[e](r),{c(){n.c(),o=U()},l(u){n.l(u),o=U()},m(u,p){t[e].m(u,p),G(u,o,p),a=!0},p(u,p){let g=e;e=f(u),e===g?t[e].p(u,p):(Z(),D(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(u,p):(n=t[e]=d[e](u),n.c()),j(n,1),n.m(o.parentNode,o))},i(u){a||(j(n),a=!0)},o(u){D(n),a=!1},d(u){t[e].d(u),u&&B(o)}}}function Ze(r){let e,n=r[6]&&Qe(r);return{c(){e=ut("div"),n&&n.c(),this.h()},l(o){e=dt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=pt(e);n&&n.l(a),a.forEach(B),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),W(e,"position","absolute"),W(e,"left","0"),W(e,"top","0"),W(e,"clip","rect(0 0 0 0)"),W(e,"clip-path","inset(50%)"),W(e,"overflow","hidden"),W(e,"white-space","nowrap"),W(e,"width","1px"),W(e,"height","1px")},m(o,a){G(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=Qe(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&B(e),n&&n.d()}}}function Qe(r){let e;return{c(){e=ht(r[7])},l(n){e=_t(n,r[7])},m(n,o){G(n,e,o)},p(n,o){o&128&&mt(e,n[7])},d(n){n&&B(e)}}}function Gt(r){let e,n,o,a,d;const t=[Ct,Vt],f=[];function u(g,y){return g[0][1]?0:1}e=u(r),n=f[e]=t[e](r);let p=r[5]&&Ze(r);return{c(){n.c(),o=lt(),p&&p.c(),a=U()},l(g){n.l(g),o=ct(g),p&&p.l(g),a=U()},m(g,y){f[e].m(g,y),G(g,o,y),p&&p.m(g,y),G(g,a,y),d=!0},p(g,[y]){let N=e;e=u(g),e===N?f[e].p(g,y):(Z(),D(f[N],1,1,()=>{f[N]=null}),Q(),n=f[e],n?n.p(g,y):(n=f[e]=t[e](g),n.c()),j(n,1),n.m(o.parentNode,o)),g[5]?p?p.p(g,y):(p=Ze(g),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(g){d||(j(n),d=!0)},o(g){D(n),d=!1},d(g){f[e].d(g),g&&B(o),p&&p.d(g),g&&B(a)}}}function Ht(r,e,n){let{stores:o}=e,{page:a}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:p=null}=e;ft(o.page.notify);let g=!1,y=!1,N=null;return Ae(()=>{const k=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,N=document.title||"untitled page"))});return n(5,g=!0),k}),r.$$set=k=>{"stores"in k&&n(8,o=k.stores),"page"in k&&n(9,a=k.page),"components"in k&&n(0,d=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,f=k.data_0),"data_1"in k&&n(3,u=k.data_1),"data_2"in k&&n(4,p=k.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[d,t,f,u,p,g,y,N,o,a]}class Kt extends ot{constructor(e){super(),it(this,e,Ht,Gt,st,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const zt="modulepreload",Jt=function(r,e){return new URL(r,e).href},xe={},q=function(e,n,o){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Jt(d,o),d in xe)return;xe[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!o)for(let g=a.length-1;g>=0;g--){const y=a[g];if(y.href===d&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":zt,t||(p.as="script",p.crossOrigin=""),p.href=d,document.head.appendChild(p),t)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Wt={},ge=[()=>q(()=>import("./chunks/0-f9d37d48.js"),["./chunks/0-f9d37d48.js","./components/pages/_layout.svelte-881d16bd.js","./chunks/index-bc2baea7.js","./chunks/stores-16595c51.js","./chunks/singletons-be286767.js","./assets/_layout-b34e4d6c.css"],import.meta.url),()=>q(()=>import("./chunks/1-6b65ec40.js"),["./chunks/1-6b65ec40.js","./components/error.svelte-1e1dd53e.js","./chunks/index-bc2baea7.js","./chunks/stores-16595c51.js","./chunks/singletons-be286767.js"],import.meta.url),()=>q(()=>import("./chunks/2-2ae9aa39.js"),["./chunks/2-2ae9aa39.js","./chunks/_layout-3974462a.js","./components/layout.svelte-77e7f4c1.js","./chunks/index-bc2baea7.js"],import.meta.url),()=>q(()=>import("./chunks/3-6c3e60c6.js"),["./chunks/3-6c3e60c6.js","./chunks/_page-6ce32609.js","./chunks/control-e7f5239e.js","./components/pages/_page.svelte-3336b2dd.js","./chunks/index-bc2baea7.js"],import.meta.url),()=>q(()=>import("./chunks/4-b1b35353.js"),["./chunks/4-b1b35353.js","./components/pages/_entry_/_page.svelte-68ab58a4.js","./chunks/index-bc2baea7.js","./chunks/CollectionList-ff3bfeb8.js","./chunks/SvelteMarkdown-a05ade2d.js","./chunks/utils-de551328.js","./chunks/Footer-45bd9e70.js","./chunks/TimelineHeatmap-6a9bd822.js","./chunks/Disclaimer-1872fbc3.js","./chunks/singletons-be286767.js","./chunks/stores-16595c51.js"],import.meta.url),()=>q(()=>import("./chunks/5-66e2bab5.js"),["./chunks/5-66e2bab5.js","./components/pages/_entry_/_type_/_page.svelte-7ad524a5.js","./chunks/index-bc2baea7.js","./chunks/stores-16595c51.js","./chunks/singletons-be286767.js","./chunks/Footer-45bd9e70.js","./chunks/Disclaimer-1872fbc3.js","./chunks/SvelteMarkdown-a05ade2d.js","./chunks/Header-c7de4272.js","./chunks/DisclaimerHidden-7c122652.js","./chunks/utils-de551328.js"],import.meta.url),()=>q(()=>import("./chunks/6-edb4a023.js"),["./chunks/6-edb4a023.js","./components/pages/_entry_/_type_/_slug_/_page.svelte-1e3db662.js","./chunks/index-bc2baea7.js","./chunks/stores-16595c51.js","./chunks/singletons-be286767.js","./chunks/CollectionList-ff3bfeb8.js","./chunks/SvelteMarkdown-a05ade2d.js","./chunks/utils-de551328.js","./chunks/Footer-45bd9e70.js","./chunks/CalendarList-7e525307.js","./chunks/DisclaimerHidden-7c122652.js","./chunks/Header-c7de4272.js"],import.meta.url),()=>q(()=>import("./chunks/7-2543e030.js"),["./chunks/7-2543e030.js","./components/pages/_entry_/day/_date_/_page.svelte-15021dbe.js","./chunks/index-bc2baea7.js","./chunks/stores-16595c51.js","./chunks/singletons-be286767.js","./chunks/TimelineHeatmap-6a9bd822.js","./chunks/Disclaimer-1872fbc3.js","./chunks/Footer-45bd9e70.js","./chunks/CalendarList-7e525307.js","./chunks/DisclaimerHidden-7c122652.js","./chunks/Header-c7de4272.js"],import.meta.url),()=>q(()=>import("./chunks/8-7d3f8c10.js"),["./chunks/8-7d3f8c10.js","./components/pages/_entry_/for-speakers/_page.svelte-14949875.js","./chunks/index-bc2baea7.js","./chunks/stores-16595c51.js","./chunks/singletons-be286767.js","./chunks/Footer-45bd9e70.js","./chunks/Header-c7de4272.js","./chunks/utils-de551328.js"],import.meta.url),()=>q(()=>import("./chunks/9-85d77da5.js"),["./chunks/9-85d77da5.js","./components/pages/_entry_/for-sponsors/_page.svelte-56f8560a.js","./chunks/index-bc2baea7.js","./chunks/stores-16595c51.js","./chunks/singletons-be286767.js","./chunks/Footer-45bd9e70.js","./chunks/Header-c7de4272.js","./chunks/utils-de551328.js"],import.meta.url),()=>q(()=>import("./chunks/10-d8f31efc.js"),["./chunks/10-d8f31efc.js","./components/pages/_entry_/schedule/_page.svelte-95532a3e.js","./chunks/index-bc2baea7.js","./chunks/stores-16595c51.js","./chunks/singletons-be286767.js","./chunks/TimelineHeatmap-6a9bd822.js","./chunks/Disclaimer-1872fbc3.js","./chunks/Footer-45bd9e70.js","./chunks/DisclaimerHidden-7c122652.js","./chunks/CalendarList-7e525307.js","./chunks/Header-c7de4272.js"],import.meta.url)],nt=[],Yt={"/":[3],"/[entry]":[4,[2]],"/[entry]/day/[date]":[7,[2]],"/[entry]/for-speakers":[8,[2]],"/[entry]/for-sponsors":[9,[2]],"/[entry]/schedule":[10,[2]],"/[entry]/[type]":[5,[2]],"/[entry]/[type]/[slug]":[6,[2]]},Xt={handleError:({error:r})=>{console.error(r)}};async function Zt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Qt=-1,xt=-2,en=-3,tn=-4,nn=-5,an=-6;function rn(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function o(a,d=!1){if(a===Qt)return;if(a===en)return NaN;if(a===tn)return 1/0;if(a===nn)return-1/0;if(a===an)return-0;if(d)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const u=new Set;n[a]=u;for(let y=1;y<t.length;y+=1)u.add(o(t[y]));break;case"Map":const p=new Map;n[a]=p;for(let y=1;y<t.length;y+=2)p.set(o(t[y]),o(t[y+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=o(t[y+1]);break}else{const f=new Array(t.length);n[a]=f;for(let u=0;u<t.length;u+=1){const p=t[u];p!==xt&&(f[u]=o(p))}}else{const f={};n[a]=f;for(const u in t){const p=t[u];f[u]=o(p)}}return n[a]}return o(0)}function on(r){return r.filter(e=>e!=null)}const Se=jt(ge,nt,Yt,Wt),at=ge[0],Oe=ge[1];at();Oe();let te={};try{te=JSON.parse(sessionStorage[tt])}catch{}function Le(r){te[r]=oe()}function sn({target:r,base:e}){var Ge;const n=document.documentElement,o=[];let a=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,p=!0,g=!1,y=!1,N=!1,k=!1,F,L=(Ge=history.state)==null?void 0:Ge[M];L||(L=Date.now(),history.replaceState({...history.state,[M]:L},"",location.href));const we=te[L];we&&(history.scrollRestoration="manual",scrollTo(we.x,we.y));let X,Te,le;async function Ue(){le=le||Promise.resolve(),await le,le=null;const i=new URL(location.href),s=ue(i,!0);a=null,await je(s,i,[])}async function ye(i,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:_={},invalidateAll:h=!1},m,b){return typeof i=="string"&&(i=new URL(i,ze(document))),pe({url:i,scroll:s?oe():null,keepfocus:l,redirect_chain:m,details:{state:_,replaceState:c},nav_token:b,accepted:()=>{h&&(k=!0)},blocked:()=>{},type:"goto"})}async function De(i){const s=ue(i,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);return a={id:s.id,promise:qe(s).then(c=>(c.type==="loaded"&&c.state.error&&(a=null),c))},a.promise}async function ce(...i){const c=Se.filter(l=>i.some(_=>l.exec(_))).map(l=>Promise.all([...l.layouts,l.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(c)}async function je(i,s,c,l,_={},h){var b,v;Te=_;let m=i&&await qe(i);if(m||(m=await Me(s,{id:null},await re(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(i==null?void 0:i.url)||s,Te!==_)return!1;if(m.type==="redirect")if(c.length>10||c.includes(s.pathname))m=await fe({status:500,error:await re(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return ye(new URL(m.location,s).href,{},[...c,s.pathname],_),!1;else((v=(b=m.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await Y.updated.check()&&await ae(s);if(o.length=0,k=!1,g=!0,l&&l.details){const{details:w}=l,R=w.replaceState?0:1;w.state[M]=L+=R,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(a=null,u?(t=m.state,m.props.page&&(m.props.page.url=s),F.$set(m.props)):Ve(m),l){const{scroll:w,keepfocus:R}=l,{activeElement:P}=document;await he();const C=document.activeElement!==P&&document.activeElement!==document.body;if(!R&&!C&&await Ie(),p){const S=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await he();p=!0,m.props.page&&(X=m.props.page),h&&h(),g=!1}function Ve(i){var l;t=i.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),X=i.props.page,F=new Kt({target:r,props:{...i.props,stores:Y},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(_=>_(c)),u=!0}async function ne({url:i,params:s,branch:c,status:l,error:_,route:h,form:m}){let b="never";for(const S of c)(S==null?void 0:S.slash)!==void 0&&(b=S.slash);i.pathname=vt(i.pathname,b),i.search=i.search;const v={type:"loaded",state:{url:i,params:s,branch:c,error:_,route:h},props:{components:on(c).map(S=>S.node.component)}};m!==void 0&&(v.props.form=m);let w={},R=!X,P=0;for(let S=0;S<Math.max(c.length,t.branch.length);S+=1){const E=c[S],O=t.branch[S];(E==null?void 0:E.data)!==(O==null?void 0:O.data)&&(R=!0),E&&(w={...w,...E.data},R&&(v.props[`data_${P}`]=w),P+=1)}return(!t.url||i.href!==t.url.href||t.error!==_||m!==void 0&&m!==X.form||R)&&(v.props.page={error:_,params:s,route:{id:(h==null?void 0:h.id)??null},status:l,url:new URL(i),form:m??null,data:R?w:X.data}),v}async function ve({loader:i,parent:s,url:c,params:l,route:_,server_data_node:h}){var w,R,P;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await i();if((w=v.universal)!=null&&w.load){let C=function(...E){for(const O of E){const{href:V}=new URL(O,c);b.dependencies.add(V)}};const S={route:{get id(){return b.route=!0,_.id}},params:new Proxy(l,{get:(E,O)=>(b.params.add(O),E[O])}),data:(h==null?void 0:h.data)??null,url:Rt(c,()=>{b.url=!0}),async fetch(E,O){let V;E instanceof Request?(V=E.url,O={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...O}):V=E;const $=new URL(V,c).href;return C($),u?Pt(V,$,O):At(V,O)},setHeaders:()=>{},depends:C,parent(){return b.parent=!0,s()}};m=await v.universal.load.call(null,S)??null,m=m?await Zt(m):null}return{node:v,loader:i,server:h,universal:(R=v.universal)!=null&&R.load?{type:"data",data:m,uses:b}:null,data:m??(h==null?void 0:h.data)??null,slash:((P=v.universal)==null?void 0:P.trailingSlash)??(h==null?void 0:h.slash)}}function Ce(i,s,c,l,_){if(k)return!0;if(!l)return!1;if(l.parent&&i||l.route&&s||l.url&&c)return!0;for(const h of l.params)if(_[h]!==t.params[h])return!0;for(const h of l.dependencies)if(o.some(m=>m(new URL(h))))return!0;return!1}function be(i,s){return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url},slash:i.slash}:(i==null?void 0:i.type)==="skip"?s??null:null}async function qe({id:i,invalidating:s,url:c,params:l,route:_}){if((a==null?void 0:a.id)===i)return a.promise;const{errors:h,layouts:m,leaf:b}=_,v=[...m,b];h.forEach($=>$==null?void 0:$().catch(()=>{})),v.forEach($=>$==null?void 0:$[1]().catch(()=>{}));let w=null;const R=t.url?i!==t.url.pathname+t.url.search:!1,P=t.route?_.id!==t.route.id:!1,C=v.reduce(($,A,T)=>{var ee;const I=t.branch[T],x=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||Ce($.some(Boolean),P,R,(ee=I.server)==null?void 0:ee.uses,l));return $.push(x),$},[]);if(C.some(Boolean)){try{w=await et(c,C)}catch($){return fe({status:500,error:await re($,{url:c,params:l,route:{id:_.id}}),url:c,route:_})}if(w.type==="redirect")return w}const S=w==null?void 0:w.nodes;let E=!1;const O=v.map(async($,A)=>{var ee;if(!$)return;const T=t.branch[A],I=S==null?void 0:S[A];if((!I||I.type==="skip")&&$[1]===(T==null?void 0:T.loader)&&!Ce(E,P,R,(ee=T.universal)==null?void 0:ee.uses,l))return T;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return ve({loader:$[1],url:c,params:l,route:_,parent:async()=>{var Ke;const He={};for(let Ee=0;Ee<A;Ee+=1)Object.assign(He,(Ke=await O[Ee])==null?void 0:Ke.data);return He},server_data_node:be(I===void 0&&$[0]?{type:"skip"}:I??null,T==null?void 0:T.server)})});for(const $ of O)$.catch(()=>{});const V=[];for(let $=0;$<v.length;$+=1)if(v[$])try{V.push(await O[$])}catch(A){if(A instanceof Xe)return{type:"redirect",location:A.location};let T=500,I;if(S!=null&&S.includes(A))T=A.status??T,I=A.error;else if(A instanceof Pe)T=A.status,I=A.body;else{if(await Y.updated.check())return await ae(c);I=await re(A,{params:l,url:c,route:{id:_.id}})}const x=await Be($,V,h);return x?await ne({url:c,params:l,branch:V.slice(0,x.idx).concat(x.node),status:T,error:I,route:_}):await Me(c,{id:_.id},I,T)}else V.push(void 0);return await ne({url:c,params:l,branch:V,status:200,error:null,route:_,form:s?void 0:null})}async function Be(i,s,c){for(;i--;)if(c[i]){let l=i;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[i](),loader:c[i],data:{},server:null,universal:null}}}catch{continue}}}async function fe({status:i,error:s,url:c,route:l}){const _={};let h=null;if(nt[0]===0)try{const w=await et(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;h=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ae(c)}const b=await ve({loader:at,url:c,params:_,route:l,parent:()=>Promise.resolve({}),server_data_node:be(h)}),v={node:await Oe(),loader:Oe,universal:null,server:null,data:null};return await ne({url:c,params:_,branch:[b,v],status:i,error:s,route:null})}function ue(i,s){if(We(i,e))return;const c=de(i);for(const l of Se){const _=l.exec(c);if(_)return{id:i.pathname+i.search,invalidating:s,route:l,params:Et(_),url:i}}}function de(i){return bt(i.pathname.slice(e.length)||"/")}function Fe({url:i,type:s,intent:c,delta:l}){var b,v;let _=!1;const h={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:i},willUnload:!c,type:s};l!==void 0&&(h.delta=l);const m={...h,cancel:()=>{_=!0}};return y||d.before_navigate.forEach(w=>w(m)),_?null:h}async function pe({url:i,scroll:s,keepfocus:c,redirect_chain:l,details:_,type:h,delta:m,nav_token:b,accepted:v,blocked:w}){const R=ue(i,!1),P=Fe({url:i,type:h,delta:m,intent:R});if(!P){w();return}Le(L),v(),y=!0,u&&Y.navigating.set(P),await je(R,i,l,{scroll:s,keepfocus:c,details:_},b,()=>{y=!1,d.after_navigate.forEach(C=>C(P)),Y.navigating.set(null)})}async function Me(i,s,c,l){return i.origin===location.origin&&i.pathname===location.pathname&&!f?await fe({status:l,error:c,url:i,route:s}):await ae(i)}function ae(i){return location.href=i.href,new Promise(()=>{})}function rt(){let i;n.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(i),i=setTimeout(()=>{l(m,2)},20)});function s(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(ce(de(new URL(m.target.href))),c.unobserve(m.target))},{threshold:0});function l(h,m){const b=Je(h,n);if(!b)return;const{url:v,external:w}=Re(b,e);if(w)return;const R=_e(b);R.reload||(m<=R.preload_data?De(v):m<=R.preload_code&&ce(de(v)))}function _(){c.disconnect();for(const h of n.querySelectorAll("a")){const{url:m,external:b}=Re(h,e);if(b)continue;const v=_e(h);v.reload||(v.preload_code===Ye.viewport&&c.observe(h),v.preload_code===Ye.eager&&ce(de(m)))}}d.after_navigate.push(_),_()}return{after_navigate:i=>{Ae(()=>(d.after_navigate.push(i),()=>{const s=d.after_navigate.indexOf(i);d.after_navigate.splice(s,1)}))},before_navigate:i=>{Ae(()=>(d.before_navigate.push(i),()=>{const s=d.before_navigate.indexOf(i);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!u)&&(p=!1)},goto:(i,s={})=>ye(i,s,[]),invalidate:i=>{if(typeof i=="function")o.push(i);else{const{href:s}=new URL(i,location.href);o.push(c=>c.href===s)}return Ue()},invalidateAll:()=>(k=!0,Ue()),preload_data:async i=>{const s=new URL(i,ze(document));await De(s)},preload_code:ce,apply_action:async i=>{if(i.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const _=await Be(t.branch.length,c,l.errors);if(_){const h=await ne({url:s,params:t.params,branch:c.slice(0,_.idx).concat(_.node),status:i.status??500,error:i.error,route:l});t=h.state,F.$set(h.props),he().then(Ie)}}else if(i.type==="redirect")ye(i.location,{invalidateAll:!0},[]);else{const s={form:i.data,page:{...X,form:i.data,status:i.status}};F.$set(s),i.type==="success"&&he().then(Ie)}},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!y){const _={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(h=>h(_))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(L);try{sessionStorage[tt]=JSON.stringify(te)}catch{}}}),(i=navigator.connection)!=null&&i.saveData||rt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=Je(s.composedPath()[0],n);if(!c)return;const{url:l,external:_,target:h}=Re(c,e);if(!l)return;if(h==="_parent"||h==="_top"){if(window.parent!==window)return}else if(h&&h!=="_self")return;const m=_e(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(_||m.reload){Fe({url:l,type:"link"})||s.preventDefault(),y=!0;return}const[v,w]=l.href.split("#");if(w!==void 0&&v===location.href.split("#")[0]){N=!0,Le(L),t.url=l,Y.page.set({...X,url:l}),Y.page.notify();return}pe({url:l,scroll:m.noscroll?oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(h,e))return;const m=s.target,{noscroll:b,reload:v}=_e(m);if(v)return;s.preventDefault(),s.stopPropagation();const w=new FormData(m),R=l==null?void 0:l.getAttribute("name");R&&w.append(R,(l==null?void 0:l.getAttribute("value"))??""),h.search=new URLSearchParams(w).toString(),pe({url:h,scroll:b?oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[M]){if(s.state[M]===L)return;const l=te[s.state[M]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){te[L]=oe(),L=s.state[M],scrollTo(l.x,l.y);return}const _=s.state[M]-L;pe({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=s.state[M]},blocked:()=>{history.go(-_)},type:"popstate",delta:_})}}),addEventListener("hashchange",()=>{N&&(N=!1,history.replaceState({...history.state,[M]:++L},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&Y.navigating.set(null)})},_hydrate:async({status:i=200,error:s,node_ids:c,params:l,route:_,data:h,form:m})=>{f=!0;const b=new URL(location.href);({params:l={},route:_={id:null}}=ue(b,!1)||{});let v;try{const w=c.map(async(R,P)=>{const C=h[P];return ve({loader:ge[R],url:b,params:l,route:_,parent:async()=>{const S={};for(let E=0;E<P;E+=1)Object.assign(S,(await w[E]).data);return S},server_data_node:be(C)})});v=await ne({url:b,params:l,branch:await Promise.all(w),status:i,error:s,form:m,route:Se.find(({id:R})=>R===_.id)??null})}catch(w){if(w instanceof Xe){await ae(new URL(w.location,location.href));return}v=await fe({status:w instanceof Pe?w.status:500,error:await re(w,{url:b,params:l,route:_}),url:b,route:_})}Ve(v)}}}async function et(r,e){var d;const n=new URL(r);n.pathname=Lt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await me(n.href),a=await o.json();if(!o.ok)throw new Error(a);return(d=a.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=rn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function re(r,e){return r instanceof Pe?r.body:Xt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ie(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(o=>{setTimeout(()=>{var a;o((a=getSelection())==null?void 0:a.removeAllRanges())})})}}async function un({env:r,hydrate:e,paths:n,target:o,version:a}){gt(n),yt(a);const d=sn({target:o,base:n.base});wt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{un as start};