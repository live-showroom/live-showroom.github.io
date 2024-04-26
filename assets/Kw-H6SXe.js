import{i as bf,r as v,w as Se,a as ge,o as fo,b as Ef,c as If,d as Cf,g as Ur,e as Sf,u as _c,f as pe,h as N,j as gc,k as ce,l as Tf,m as kf,n as Af,p as oe,q as Pf,s as Rf,t as Nf,v as Of,x as Df,y as Ds,z as po,A as xf,B as Lf,C as Mf,D as Ne,E as We,F as Ff,G as xn,H as Fe,I as qe,J as vc,T as Uf,K as $f,L as fi,M as z,N as Tt,O as $e,P as me,Q as D,R as kt,_ as Bf,S as se,U as Hf,V as yc,W as Wf,X as Vf,Y as C,Z as qi,$ as ue,a0 as Be,a1 as jf,a2 as zf,a3 as qf,a4 as Gf,a5 as Kf,a6 as Yf,a7 as Da,a8 as Qf}from"./ChprAkhK.js";import Xf from"./BU73kf65.js";import"./CvPl5tTm.js";function Jf(t,e={}){const n=e.head||bf();if(n)return n.ssr?n.push(t,e):Zf(n,t,e)}function Zf(t,e,n={}){const i=v(!1),r=v({});Se(()=>{r.value=i.value?{}:Cf(e)});const s=t.push(r.value,n);return ge(r,a=>{s.patch(a)}),Ur()&&(fo(()=>{s.dispose()}),Ef(()=>{i.value=!0}),If(()=>{i.value=!1})),s}function ep(t,e={}){return Jf(t,{...e,transform:Sf})}async function wc(t,e=_c()){const{path:n,matched:i}=e.resolve(t);if(!i.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const r=e._preloadPromises=e._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>wc(t,e));e._routePreloaded.add(n);const s=i.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of s){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}const tp=(...t)=>t.find(e=>e!==void 0);function np(t){const e=t.componentName||"NuxtLink";function n(i,r){if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;if(typeof i=="string")return xa(i,t.trailingSlash);const s="path"in i&&i.path!==void 0?i.path:r(i).path;return{...i,name:void 0,path:xa(s,t.trailingSlash)}}return pe({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(i,{slots:r}){const s=_c(),o=Ds(),a=N(()=>{const p=i.to||i.href||"";return n(p,s.resolve)}),l=N(()=>typeof a.value=="string"&&gc(a.value,{acceptRelative:!0})),c=N(()=>i.target&&i.target!=="_self"),u=N(()=>i.external||c.value?!0:typeof a.value=="object"?!1:a.value===""||l.value),d=v(!1),h=v(null),f=p=>{var m;h.value=i.custom?(m=p==null?void 0:p.$el)==null?void 0:m.nextElementSibling:p==null?void 0:p.$el};if(i.prefetch!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!sp()){const m=po();let y,w=null;ce(()=>{const T=rp();Tf(()=>{y=kf(()=>{var A;(A=h==null?void 0:h.value)!=null&&A.tagName&&(w=T.observe(h.value,async()=>{w==null||w(),w=null;const k=typeof a.value=="string"?a.value:s.resolve(a.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",k).catch(()=>{}),!u.value&&wc(a.value,s).catch(()=>{})]),d.value=!0}))})})}),fo(()=>{y&&Af(y),w==null||w(),w=null})}return()=>{var w,T;if(!u.value){const A={ref:f,to:a.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(d.value&&(A.class=i.prefetchedClass||t.prefetchedClass),A.rel=i.rel||void 0),oe(Pf("RouterLink"),A,r.default)}const p=typeof a.value=="object"?((w=s.resolve(a.value))==null?void 0:w.href)??null:a.value&&!i.external&&!l.value?n(Rf(o.app.baseURL,a.value),s.resolve):a.value||null,m=i.target||null,y=tp(i.noRel?"":i.rel,t.externalRelAttribute,l.value||c.value?"noopener noreferrer":"")||null;if(i.custom){if(!r.default)return null;const A=()=>xf(p,{replace:i.replace,external:i.external});return r.default({href:p,navigate:A,get route(){if(!p)return;const k=Nf(p);return{path:k.pathname,fullPath:k.pathname,get query(){return Of(k.search)},hash:k.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:p}},rel:y,target:m,isExternal:u.value,isActive:!1,isExactActive:!1})}return oe("a",{ref:h,href:p,rel:y,target:m},(T=r.default)==null?void 0:T.call(r))}}})}const ip=np(Df);function xa(t,e){const n=e==="append"?Lf:Mf;return gc(t)&&!t.startsWith("http")?t:n(t,!0)}function rp(){const t=po();if(t._observer)return t._observer;let e=null;const n=new Map,i=(s,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),n.set(s,o),e.observe(s),()=>{n.delete(s),e.unobserve(s),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:i}}function sp(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}let op=Symbol("headlessui.useid"),ap=0;function mt(){return Ne(op,()=>`${++ap}`)()}let bc=Symbol("Context");var Ce=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(Ce||{});function lp(){return $r()!==null}function $r(){return Ne(bc,null)}function Ec(t){We(bc,t)}function R(t){var e;if(t==null||t.value==null)return null;let n=(e=t.value.$el)!=null?e:t.value;return n instanceof Node?n:null}var cp=Object.defineProperty,up=(t,e,n)=>e in t?cp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,La=(t,e,n)=>(up(t,typeof e!="symbol"?e+"":e,n),n);let dp=class{constructor(){La(this,"current",this.detect()),La(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Ni=new dp;function Ae(t,e,...n){if(t in e){let r=e[t];return typeof r=="function"?r(...n):r}let i=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Ae),i}var Sn=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Sn||{}),Ot=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(Ot||{});function Ue({visible:t=!0,features:e=0,ourProps:n,theirProps:i,...r}){var s;let o=Cc(i,n),a=Object.assign(r,{props:o});if(t||e&2&&o.static)return ps(a);if(e&1){let l=(s=o.unmount)==null||s?0:1;return Ae(l,{0(){return null},1(){return ps({...r,props:{...o,hidden:!0,style:{display:"none"}}})}})}return ps(a)}function ps({props:t,attrs:e,slots:n,slot:i,name:r}){var s,o;let{as:a,...l}=Sc(t,["unmount","static"]),c=(s=n.default)==null?void 0:s.call(n,i),u={};if(i){let d=!1,h=[];for(let[f,p]of Object.entries(i))typeof p=="boolean"&&(d=!0),p===!0&&h.push(f);d&&(u["data-headlessui-state"]=h.join(" "))}if(a==="template"){if(c=Ic(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...h]=c??[];if(!hp(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(m=>m.trim()).filter((m,y,w)=>w.indexOf(m)===y).sort((m,y)=>m.localeCompare(y)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let f=Cc((o=d.props)!=null?o:{},l,u),p=Ff(d,f,!0);for(let m in f)m.startsWith("on")&&(p.props||(p.props={}),p.props[m]=f[m]);return p}return Array.isArray(c)&&c.length===1?c[0]:c}return oe(a,Object.assign({},l,u),{default:()=>c})}function Ic(t){return t.flatMap(e=>e.type===xn?Ic(e.children):[e])}function Cc(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let i of t)for(let r in i)r.startsWith("on")&&typeof i[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(i[r])):e[r]=i[r];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(i=>[i,void 0])));for(let i in n)Object.assign(e,{[i](r,...s){let o=n[i];for(let a of o){if(r instanceof Event&&r.defaultPrevented)return;a(r,...s)}}});return e}function Sc(t,e=[]){let n=Object.assign({},t);for(let i of e)i in n&&delete n[i];return n}function hp(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}function mo(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function Oi(){let t=[],e={addEventListener(n,i,r,s){return n.addEventListener(i,r,s),e.add(()=>n.removeEventListener(i,r,s))},requestAnimationFrame(...n){let i=requestAnimationFrame(...n);e.add(()=>cancelAnimationFrame(i))},nextFrame(...n){e.requestAnimationFrame(()=>{e.requestAnimationFrame(...n)})},setTimeout(...n){let i=setTimeout(...n);e.add(()=>clearTimeout(i))},microTask(...n){let i={current:!0};return mo(()=>{i.current&&n[0]()}),e.add(()=>{i.current=!1})},style(n,i,r){let s=n.style.getPropertyValue(i);return Object.assign(n.style,{[i]:r}),this.add(()=>{Object.assign(n.style,{[i]:s})})},group(n){let i=Oi();return n(i),this.add(()=>i.dispose())},add(n){return t.push(n),()=>{let i=t.indexOf(n);if(i>=0)for(let r of t.splice(i,1))r()}},dispose(){for(let n of t.splice(0))n()}};return e}function fp(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function ms(t,...e){t&&e.length>0&&t.classList.add(...e)}function Gi(t,...e){t&&e.length>0&&t.classList.remove(...e)}var xs=(t=>(t.Finished="finished",t.Cancelled="cancelled",t))(xs||{});function pp(t,e){let n=Oi();if(!t)return n.dispose;let{transitionDuration:i,transitionDelay:r}=getComputedStyle(t),[s,o]=[i,r].map(a=>{let[l=0]=a.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,u)=>u-c);return l});return s!==0?n.setTimeout(()=>e("finished"),s+o):e("finished"),n.add(()=>e("cancelled")),n.dispose}function Ma(t,e,n,i,r,s){let o=Oi(),a=s!==void 0?fp(s):()=>{};return Gi(t,...r),ms(t,...e,...n),o.nextFrame(()=>{Gi(t,...n),ms(t,...i),o.add(pp(t,l=>(Gi(t,...i,...e),ms(t,...r),a(l))))}),o.add(()=>Gi(t,...e,...n,...i,...r)),o.add(()=>a("cancelled")),o.dispose}function Kt(t=""){return t.split(/\s+/).filter(e=>e.length>1)}let _o=Symbol("TransitionContext");var mp=(t=>(t.Visible="visible",t.Hidden="hidden",t))(mp||{});function _p(){return Ne(_o,null)!==null}function gp(){let t=Ne(_o,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function vp(){let t=Ne(go,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}let go=Symbol("NestingContext");function Br(t){return"children"in t?Br(t.children):t.value.filter(({state:e})=>e==="visible").length>0}function Tc(t){let e=v([]),n=v(!1);ce(()=>n.value=!0),Fe(()=>n.value=!1);function i(s,o=Ot.Hidden){let a=e.value.findIndex(({id:l})=>l===s);a!==-1&&(Ae(o,{[Ot.Unmount](){e.value.splice(a,1)},[Ot.Hidden](){e.value[a].state="hidden"}}),!Br(e)&&n.value&&(t==null||t()))}function r(s){let o=e.value.find(({id:a})=>a===s);return o?o.state!=="visible"&&(o.state="visible"):e.value.push({id:s,state:"visible"}),()=>i(s,Ot.Unmount)}return{children:e,register:r,unregister:i}}let kc=Sn.RenderStrategy,Ac=pe({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:i,expose:r}){let s=v(0);function o(){s.value|=Ce.Opening,e("beforeEnter")}function a(){s.value&=~Ce.Opening,e("afterEnter")}function l(){s.value|=Ce.Closing,e("beforeLeave")}function c(){s.value&=~Ce.Closing,e("afterLeave")}if(!_p()&&lp())return()=>oe(Pc,{...t,onBeforeEnter:o,onAfterEnter:a,onBeforeLeave:l,onAfterLeave:c},i);let u=v(null),d=N(()=>t.unmount?Ot.Unmount:Ot.Hidden);r({el:u,$el:u});let{show:h,appear:f}=gp(),{register:p,unregister:m}=vp(),y=v(h.value?"visible":"hidden"),w={value:!0},T=mt(),A={value:!1},k=Tc(()=>{!A.value&&y.value!=="hidden"&&(y.value="hidden",m(T),c())});ce(()=>{let P=p(T);Fe(P)}),Se(()=>{if(d.value===Ot.Hidden&&T){if(h.value&&y.value!=="visible"){y.value="visible";return}Ae(y.value,{hidden:()=>m(T),visible:()=>p(T)})}});let _=Kt(t.enter),S=Kt(t.enterFrom),b=Kt(t.enterTo),x=Kt(t.entered),V=Kt(t.leave),O=Kt(t.leaveFrom),q=Kt(t.leaveTo);ce(()=>{Se(()=>{if(y.value==="visible"){let P=R(u);if(P instanceof Comment&&P.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function g(P){let $=w.value&&!f.value,U=R(u);!U||!(U instanceof HTMLElement)||$||(A.value=!0,h.value&&o(),h.value||l(),P(h.value?Ma(U,_,S,b,x,j=>{A.value=!1,j===xs.Finished&&a()}):Ma(U,V,O,q,x,j=>{A.value=!1,j===xs.Finished&&(Br(k)||(y.value="hidden",m(T),c()))})))}return ce(()=>{ge([h],(P,$,U)=>{g(U),w.value=!1},{immediate:!0})}),We(go,k),Ec(N(()=>Ae(y.value,{visible:Ce.Open,hidden:Ce.Closed})|s.value)),()=>{let{appear:P,show:$,enter:U,enterFrom:j,enterTo:te,entered:It,leave:Ve,leaveFrom:st,leaveTo:X,...ne}=t,Ee={ref:u},Ie={...ne,...f.value&&h.value&&Ni.isServer?{class:qe([n.class,ne.class,..._,...S])}:{}};return Ue({theirProps:Ie,ourProps:Ee,slot:{},slots:i,attrs:n,features:kc,visible:y.value==="visible",name:"TransitionChild"})}}}),yp=Ac,Pc=pe({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:i}){let r=$r(),s=N(()=>t.show===null&&r!==null?(r.value&Ce.Open)===Ce.Open:t.show);Se(()=>{if(![!0,!1].includes(s.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=v(s.value?"visible":"hidden"),a=Tc(()=>{o.value="hidden"}),l=v(!0),c={show:s,appear:N(()=>t.appear||!l.value)};return ce(()=>{Se(()=>{l.value=!1,s.value?o.value="visible":Br(a)||(o.value="hidden")})}),We(go,a),We(_o,c),()=>{let u=Sc(t,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),d={unmount:t.unmount};return Ue({ourProps:{...d,as:"template"},theirProps:{},slot:{},slots:{...i,default:()=>[oe(yp,{onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave"),...n,...d,...u},i.default)]},attrs:{},features:kc,visible:o.value==="visible",name:"Transition"})}}});function vo(t,e,n,i){Ni.isServer||Se(r=>{t=t??window,t.addEventListener(e,n,i),r(()=>t.removeEventListener(e,n,i))})}function Rc(t,e,n){Ni.isServer||Se(i=>{window.addEventListener(t,e,n),i(()=>window.removeEventListener(t,e,n))})}var Me=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(Me||{});function yo(){let t=v(0);return Rc("keydown",e=>{e.key==="Tab"&&(t.value=e.shiftKey?1:0)}),t}var nn=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(nn||{});let Tn=pe({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{var i;let{features:r,...s}=t,o={"aria-hidden":(r&2)===2?!0:(i=s["aria-hidden"])!=null?i:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return Ue({ourProps:o,theirProps:s,slot:{},attrs:n,slots:e,name:"Hidden"})}}});function wp(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",e),e())}let Xt=[];wp(()=>{function t(e){e.target instanceof HTMLElement&&e.target!==document.body&&Xt[0]!==e.target&&(Xt.unshift(e.target),Xt=Xt.filter(n=>n!=null&&n.isConnected),Xt.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function bt(t){if(Ni.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=R(t);if(e)return e.ownerDocument}return document}let Ls=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var ke=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(ke||{}),pi=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(pi||{}),bp=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(bp||{});function Hr(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Ls)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var wo=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(wo||{});function Nc(t,e=0){var n;return t===((n=bt(t))==null?void 0:n.body)?!1:Ae(e,{0(){return t.matches(Ls)},1(){let i=t;for(;i!==null;){if(i.matches(Ls))return!0;i=i.parentElement}return!1}})}var Ep=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(Ep||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function tn(t){t==null||t.focus({preventScroll:!0})}let Ip=["textarea","input"].join(",");function Cp(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,Ip))!=null?n:!1}function Sp(t,e=n=>n){return t.slice().sort((n,i)=>{let r=e(n),s=e(i);if(r===null||s===null)return 0;let o=r.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ke(t,e,{sorted:n=!0,relativeTo:i=null,skipElements:r=[]}={}){var s;let o=(s=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?s:document,a=Array.isArray(t)?n?Sp(t):t:Hr(t);r.length>0&&a.length>1&&(a=a.filter(p=>!r.includes(p))),i=i??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(i))-1;if(e&4)return Math.max(0,a.indexOf(i))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,h=a.length,f;do{if(d>=h||d+h<=0)return 0;let p=c+d;if(e&16)p=(p+h)%h;else{if(p<0)return 3;if(p>=h)return 1}f=a[p],f==null||f.focus(u),d+=l}while(f!==o.activeElement);return e&6&&Cp(f)&&f.select(),2}function Oc(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let e=new Set;for(let n of t.value){let i=R(n);i instanceof HTMLElement&&e.add(i)}return e}var Dc=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(Dc||{});let Qn=Object.assign(pe({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(t,{attrs:e,slots:n,expose:i}){let r=v(null);i({el:r,$el:r});let s=N(()=>bt(r)),o=v(!1);ce(()=>o.value=!0),Fe(()=>o.value=!1),kp({ownerDocument:s},N(()=>o.value&&!!(t.features&16)));let a=Ap({ownerDocument:s,container:r,initialFocus:N(()=>t.initialFocus)},N(()=>o.value&&!!(t.features&2)));Pp({ownerDocument:s,container:r,containers:t.containers,previousActiveElement:a},N(()=>o.value&&!!(t.features&8)));let l=yo();function c(f){let p=R(r);p&&(m=>m())(()=>{Ae(l.value,{[Me.Forwards]:()=>{Ke(p,ke.First,{skipElements:[f.relatedTarget]})},[Me.Backwards]:()=>{Ke(p,ke.Last,{skipElements:[f.relatedTarget]})}})})}let u=v(!1);function d(f){f.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function h(f){if(!o.value)return;let p=Oc(t.containers);R(r)instanceof HTMLElement&&p.add(R(r));let m=f.relatedTarget;m instanceof HTMLElement&&m.dataset.headlessuiFocusGuard!=="true"&&(xc(p,m)||(u.value?Ke(R(r),Ae(l.value,{[Me.Forwards]:()=>ke.Next,[Me.Backwards]:()=>ke.Previous})|ke.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&tn(f.target)))}return()=>{let f={},p={ref:r,onKeydown:d,onFocusout:h},{features:m,initialFocus:y,containers:w,...T}=t;return oe(xn,[!!(m&4)&&oe(Tn,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:nn.Focusable}),Ue({ourProps:p,theirProps:{...e,...T},slot:f,attrs:e,slots:n,name:"FocusTrap"}),!!(m&4)&&oe(Tn,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:nn.Focusable})])}}}),{features:Dc});function Tp(t){let e=v(Xt.slice());return ge([t],([n],[i])=>{i===!0&&n===!1?mo(()=>{e.value.splice(0)}):i===!1&&n===!0&&(e.value=Xt.slice())},{flush:"post"}),()=>{var n;return(n=e.value.find(i=>i!=null&&i.isConnected))!=null?n:null}}function kp({ownerDocument:t},e){let n=Tp(e);ce(()=>{Se(()=>{var i,r;e.value||((i=t.value)==null?void 0:i.activeElement)===((r=t.value)==null?void 0:r.body)&&tn(n())},{flush:"post"})}),Fe(()=>{e.value&&tn(n())})}function Ap({ownerDocument:t,container:e,initialFocus:n},i){let r=v(null),s=v(!1);return ce(()=>s.value=!0),Fe(()=>s.value=!1),ce(()=>{ge([e,n,i],(o,a)=>{if(o.every((c,u)=>(a==null?void 0:a[u])===c)||!i.value)return;let l=R(e);l&&mo(()=>{var c,u;if(!s.value)return;let d=R(n),h=(c=t.value)==null?void 0:c.activeElement;if(d){if(d===h){r.value=h;return}}else if(l.contains(h)){r.value=h;return}d?tn(d):Ke(l,ke.First|ke.NoScroll)===pi.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(u=t.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),r}function Pp({ownerDocument:t,container:e,containers:n,previousActiveElement:i},r){var s;vo((s=t.value)==null?void 0:s.defaultView,"focus",o=>{if(!r.value)return;let a=Oc(n);R(e)instanceof HTMLElement&&a.add(R(e));let l=i.value;if(!l)return;let c=o.target;c&&c instanceof HTMLElement?xc(a,c)?(i.value=c,tn(c)):(o.preventDefault(),o.stopPropagation(),tn(l)):tn(i.value)},!0)}function xc(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function Rp(t){let e=vc(t.getSnapshot());return Fe(t.subscribe(()=>{e.value=t.getSnapshot()})),e}function Np(t,e){let n=t(),i=new Set;return{getSnapshot(){return n},subscribe(r){return i.add(r),()=>i.delete(r)},dispatch(r,...s){let o=e[r].call(n,...s);o&&(n=o,i.forEach(a=>a()))}}}function Op(){let t;return{before({doc:e}){var n;let i=e.documentElement;t=((n=e.defaultView)!=null?n:window).innerWidth-i.clientWidth},after({doc:e,d:n}){let i=e.documentElement,r=i.clientWidth-i.offsetWidth,s=t-r;n.style(i,"paddingRight",`${s}px`)}}}function Lc(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Dp(){return/Android/gi.test(window.navigator.userAgent)}function xp(){return Lc()||Dp()}function Lp(){return Lc()?{before({doc:t,d:e,meta:n}){function i(r){return n.containers.flatMap(s=>s()).some(s=>s.contains(r))}e.microTask(()=>{var r;if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=Oi();a.style(t.documentElement,"scrollBehavior","auto"),e.add(()=>e.microTask(()=>a.dispose()))}let s=(r=window.scrollY)!=null?r:window.pageYOffset,o=null;e.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let l=a.target.closest("a");if(!l)return;let{hash:c}=new URL(l.href),u=t.querySelector(c);u&&!i(u)&&(o=u)}catch{}},!0),e.addEventListener(t,"touchstart",a=>{if(a.target instanceof HTMLElement)if(i(a.target)){let l=a.target;for(;l.parentElement&&i(l.parentElement);)l=l.parentElement;e.style(l,"overscrollBehavior","contain")}else e.style(a.target,"touchAction","none")}),e.addEventListener(t,"touchmove",a=>{if(a.target instanceof HTMLElement)if(i(a.target)){let l=a.target;for(;l.parentElement&&l.dataset.headlessuiPortal!==""&&!(l.scrollHeight>l.clientHeight||l.scrollWidth>l.clientWidth);)l=l.parentElement;l.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()},{passive:!1}),e.add(()=>{var a;let l=(a=window.scrollY)!=null?a:window.pageYOffset;s!==l&&window.scrollTo(0,s),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function Mp(){return{before({doc:t,d:e}){e.style(t.documentElement,"overflow","hidden")}}}function Fp(t){let e={};for(let n of t)Object.assign(e,n(e));return e}let Jt=Np(()=>new Map,{PUSH(t,e){var n;let i=(n=this.get(t))!=null?n:{doc:t,count:0,d:Oi(),meta:new Set};return i.count++,i.meta.add(e),this.set(t,i),this},POP(t,e){let n=this.get(t);return n&&(n.count--,n.meta.delete(e)),this},SCROLL_PREVENT({doc:t,d:e,meta:n}){let i={doc:t,d:e,meta:Fp(n)},r=[Lp(),Op(),Mp()];r.forEach(({before:s})=>s==null?void 0:s(i)),r.forEach(({after:s})=>s==null?void 0:s(i))},SCROLL_ALLOW({d:t}){t.dispose()},TEARDOWN({doc:t}){this.delete(t)}});Jt.subscribe(()=>{let t=Jt.getSnapshot(),e=new Map;for(let[n]of t)e.set(n,n.documentElement.style.overflow);for(let n of t.values()){let i=e.get(n.doc)==="hidden",r=n.count!==0;(r&&!i||!r&&i)&&Jt.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&Jt.dispatch("TEARDOWN",n)}});function Up(t,e,n){let i=Rp(Jt),r=N(()=>{let s=t.value?i.value.get(t.value):void 0;return s?s.count>0:!1});return ge([t,e],([s,o],[a],l)=>{if(!s||!o)return;Jt.dispatch("PUSH",s,n);let c=!1;l(()=>{c||(Jt.dispatch("POP",a??s,n),c=!0)})},{immediate:!0}),r}let _s=new Map,Xn=new Map;function Fa(t,e=v(!0)){Se(n=>{var i;if(!e.value)return;let r=R(t);if(!r)return;n(function(){var o;if(!r)return;let a=(o=Xn.get(r))!=null?o:1;if(a===1?Xn.delete(r):Xn.set(r,a-1),a!==1)return;let l=_s.get(r);l&&(l["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",l["aria-hidden"]),r.inert=l.inert,_s.delete(r))});let s=(i=Xn.get(r))!=null?i:0;Xn.set(r,s+1),s===0&&(_s.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}function Ki(t,e,n){Ni.isServer||Se(i=>{document.addEventListener(t,e,n),i(()=>document.removeEventListener(t,e,n))})}function Mc(t,e,n=N(()=>!0)){function i(s,o){if(!n.value||s.defaultPrevented)return;let a=o(s);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:R(c);if(u!=null&&u.contains(a)||s.composed&&s.composedPath().includes(u))return}return!Nc(a,wo.Loose)&&a.tabIndex!==-1&&s.preventDefault(),e(s,a)}let r=v(null);Ki("pointerdown",s=>{var o,a;n.value&&(r.value=((a=(o=s.composedPath)==null?void 0:o.call(s))==null?void 0:a[0])||s.target)},!0),Ki("mousedown",s=>{var o,a;n.value&&(r.value=((a=(o=s.composedPath)==null?void 0:o.call(s))==null?void 0:a[0])||s.target)},!0),Ki("click",s=>{xp()||r.value&&(i(s,()=>r.value),r.value=null)},!0),Ki("touchend",s=>i(s,()=>s.target instanceof HTMLElement?s.target:null),!0),Rc("blur",s=>i(s,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Fc({defaultContainers:t=[],portals:e,mainTreeNodeRef:n}={}){let i=v(null),r=bt(i);function s(){var o,a,l;let c=[];for(let u of t)u!==null&&(u instanceof HTMLElement?c.push(u):"value"in u&&u.value instanceof HTMLElement&&c.push(u.value));if(e!=null&&e.value)for(let u of e.value)c.push(u);for(let u of(o=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(R(i))||u.contains((l=(a=R(i))==null?void 0:a.getRootNode())==null?void 0:l.host)||c.some(d=>u.contains(d))||c.push(u));return c}return{resolveContainers:s,contains(o){return s().some(a=>a.contains(o))},mainTreeNodeRef:i,MainTreeNode(){return n!=null?null:oe(Tn,{features:nn.Hidden,ref:i})}}}let Uc=Symbol("ForcePortalRootContext");function $p(){return Ne(Uc,!1)}let Ua=pe({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){return We(Uc,t.force),()=>{let{force:i,...r}=t;return Ue({theirProps:r,ourProps:{},slot:{},slots:e,attrs:n,name:"ForcePortalRoot"})}}}),$c=Symbol("StackContext");var Ms=(t=>(t[t.Add=0]="Add",t[t.Remove=1]="Remove",t))(Ms||{});function Bp(){return Ne($c,()=>{})}function Hp({type:t,enabled:e,element:n,onUpdate:i}){let r=Bp();function s(...o){i==null||i(...o),r(...o)}ce(()=>{ge(e,(o,a)=>{o?s(0,t,n):a===!0&&s(1,t,n)},{immediate:!0,flush:"sync"})}),Fe(()=>{e.value&&s(1,t,n)}),We($c,s)}var ct=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(ct||{});let Wp=Symbol("DescriptionContext");function Vp({slot:t=v({}),name:e="Description",props:n={}}={}){let i=v([]);function r(s){return i.value.push(s),()=>{let o=i.value.indexOf(s);o!==-1&&i.value.splice(o,1)}}return We(Wp,{register:r,slot:t,name:e,props:n}),N(()=>i.value.length>0?i.value.join(" "):void 0)}function jp(t){let e=bt(t);if(!e){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let n=e.getElementById("headlessui-portal-root");if(n)return n;let i=e.createElement("div");return i.setAttribute("id","headlessui-portal-root"),e.body.appendChild(i)}let zp=pe({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let i=v(null),r=N(()=>bt(i)),s=$p(),o=Ne(Hc,null),a=v(s===!0||o==null?jp(i.value):o.resolveTarget()),l=v(!1);ce(()=>{l.value=!0}),Se(()=>{s||o!=null&&(a.value=o.resolveTarget())});let c=Ne(Fs,null),u=!1,d=Ur();return ge(i,()=>{if(u||!c)return;let h=R(i);h&&(Fe(c.register(h),d),u=!0)}),Fe(()=>{var h,f;let p=(h=r.value)==null?void 0:h.getElementById("headlessui-portal-root");p&&a.value===p&&a.value.children.length<=0&&((f=a.value.parentElement)==null||f.removeChild(a.value))}),()=>{if(!l.value||a.value===null)return null;let h={ref:i,"data-headlessui-portal":""};return oe(Uf,{to:a.value},Ue({ourProps:h,theirProps:t,slot:{},attrs:n,slots:e,name:"Portal"}))}}}),Fs=Symbol("PortalParentContext");function Bc(){let t=Ne(Fs,null),e=v([]);function n(s){return e.value.push(s),t&&t.register(s),()=>i(s)}function i(s){let o=e.value.indexOf(s);o!==-1&&e.value.splice(o,1),t&&t.unregister(s)}let r={register:n,unregister:i,portals:e};return[e,pe({name:"PortalWrapper",setup(s,{slots:o}){return We(Fs,r),()=>{var a;return(a=o.default)==null?void 0:a.call(o)}}})]}let Hc=Symbol("PortalGroupContext"),qp=pe({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let i=$f({resolveTarget(){return t.target}});return We(Hc,i),()=>{let{target:r,...s}=t;return Ue({theirProps:s,ourProps:{},slot:{},attrs:e,slots:n,name:"PortalGroup"})}}});var Gp=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Gp||{});let Us=Symbol("DialogContext");function bo(t){let e=Ne(Us,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,bo),n}return e}let Yi="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Kp=pe({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:Yi},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:t=>!0},setup(t,{emit:e,attrs:n,slots:i,expose:r}){var s,o;let a=(s=t.id)!=null?s:`headlessui-dialog-${mt()}`,l=v(!1);ce(()=>{l.value=!0});let c=!1,u=N(()=>t.role==="dialog"||t.role==="alertdialog"?t.role:(c||(c=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),d=v(0),h=$r(),f=N(()=>t.open===Yi&&h!==null?(h.value&Ce.Open)===Ce.Open:t.open),p=v(null),m=N(()=>bt(p));if(r({el:p,$el:p}),!(t.open!==Yi||h!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof f.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value===Yi?void 0:t.open}`);let y=N(()=>l.value&&f.value?0:1),w=N(()=>y.value===0),T=N(()=>d.value>1),A=Ne(Us,null)!==null,[k,_]=Bc(),{resolveContainers:S,mainTreeNodeRef:b,MainTreeNode:x}=Fc({portals:k,defaultContainers:[N(()=>{var X;return(X=te.panelRef.value)!=null?X:p.value})]}),V=N(()=>T.value?"parent":"leaf"),O=N(()=>h!==null?(h.value&Ce.Closing)===Ce.Closing:!1),q=N(()=>A||O.value?!1:w.value),g=N(()=>{var X,ne,Ee;return(Ee=Array.from((ne=(X=m.value)==null?void 0:X.querySelectorAll("body > *"))!=null?ne:[]).find(Ie=>Ie.id==="headlessui-portal-root"?!1:Ie.contains(R(b))&&Ie instanceof HTMLElement))!=null?Ee:null});Fa(g,q);let P=N(()=>T.value?!0:w.value),$=N(()=>{var X,ne,Ee;return(Ee=Array.from((ne=(X=m.value)==null?void 0:X.querySelectorAll("[data-headlessui-portal]"))!=null?ne:[]).find(Ie=>Ie.contains(R(b))&&Ie instanceof HTMLElement))!=null?Ee:null});Fa($,P),Hp({type:"Dialog",enabled:N(()=>y.value===0),element:p,onUpdate:(X,ne)=>{if(ne==="Dialog")return Ae(X,{[Ms.Add]:()=>d.value+=1,[Ms.Remove]:()=>d.value-=1})}});let U=Vp({name:"DialogDescription",slot:N(()=>({open:f.value}))}),j=v(null),te={titleId:j,panelRef:v(null),dialogState:y,setTitleId(X){j.value!==X&&(j.value=X)},close(){e("close",!1)}};We(Us,te);let It=N(()=>!(!w.value||T.value));Mc(S,(X,ne)=>{X.preventDefault(),te.close(),fi(()=>ne==null?void 0:ne.focus())},It);let Ve=N(()=>!(T.value||y.value!==0));vo((o=m.value)==null?void 0:o.defaultView,"keydown",X=>{Ve.value&&(X.defaultPrevented||X.key===ct.Escape&&(X.preventDefault(),X.stopPropagation(),te.close()))});let st=N(()=>!(O.value||y.value!==0||A));return Up(m,st,X=>{var ne;return{containers:[...(ne=X.containers)!=null?ne:[],S]}}),Se(X=>{if(y.value!==0)return;let ne=R(p);if(!ne)return;let Ee=new ResizeObserver(Ie=>{for(let ot of Ie){let je=ot.target.getBoundingClientRect();je.x===0&&je.y===0&&je.width===0&&je.height===0&&te.close()}});Ee.observe(ne),X(()=>Ee.disconnect())}),()=>{let{open:X,initialFocus:ne,...Ee}=t,Ie={...n,ref:p,id:a,role:u.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":j.value,"aria-describedby":U.value},ot={open:y.value===0};return oe(Ua,{force:!0},()=>[oe(zp,()=>oe(qp,{target:p.value},()=>oe(Ua,{force:!1},()=>oe(Qn,{initialFocus:ne,containers:S,features:w.value?Ae(V.value,{parent:Qn.features.RestoreFocus,leaf:Qn.features.All&~Qn.features.FocusLock}):Qn.features.None},()=>oe(_,{},()=>Ue({ourProps:Ie,theirProps:{...Ee,...n},slot:ot,attrs:n,slots:i,visible:y.value===0,features:Sn.RenderStrategy|Sn.Static,name:"Dialog"})))))),oe(x)])}}}),Yp=pe({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:i}){var r;let s=(r=t.id)!=null?r:`headlessui-dialog-panel-${mt()}`,o=bo("DialogPanel");i({el:o.panelRef,$el:o.panelRef});function a(l){l.stopPropagation()}return()=>{let{...l}=t,c={id:s,ref:o.panelRef,onClick:a};return Ue({ourProps:c,theirProps:l,slot:{open:o.dialogState.value===0},attrs:e,slots:n,name:"DialogPanel"})}}}),Qp=pe({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n}){var i;let r=(i=t.id)!=null?i:`headlessui-dialog-title-${mt()}`,s=bo("DialogTitle");return ce(()=>{s.setTitleId(r),Fe(()=>s.setTitleId(null))}),()=>{let{...o}=t;return Ue({ourProps:{id:r},theirProps:o,slot:{open:s.dialogState.value===0},attrs:e,slots:n,name:"DialogTitle"})}}});const Xp=D("div",{class:"fixed inset-0 bg-black/50"},null,-1),Jp={class:"fixed inset-0 overflow-y-auto"},Zp={class:"flex min-h-full items-center justify-center p-4 text-center"},em=D("div",{class:"mt-2"},[D("p",{class:"text-sm text-gray-500"},[kt(" Gunakan fitur ini untuk mereset semua pemutaran yang ada. "),D("b",null,"Semua pemutaran yang ada akan berhenti!")])],-1),tm={class:"mt-4 flex justify-end gap-3"},nm=pe({__name:"ResetDialog",props:{isOpen:{type:Boolean}},emits:["close","reset"],setup(t){return(e,n)=>{const i=Ac,r=Qp,s=Yp,o=Kp,a=Pc;return z(),Tt(a,{appear:"",show:e.isOpen,as:"template"},{default:$e(()=>[me(o,{as:"div",class:"relative z-10",onClose:n[2]||(n[2]=l=>e.$emit("close"))},{default:$e(()=>[me(i,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:$e(()=>[Xp]),_:1}),D("div",Jp,[D("div",Zp,[me(i,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:$e(()=>[me(s,{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:$e(()=>[me(r,{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:$e(()=>[kt(" Reset pemutaran ")]),_:1}),em,D("div",tm,[D("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:n[0]||(n[0]=l=>e.$emit("reset"))}," Reset "),D("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:n[1]||(n[1]=l=>e.$emit("close"))}," Batal ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}}),im={},rm={class:"inline-block",role:"status"},sm=Hf('<svg class="size-full stroke-white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline" values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"></animate></circle><animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12" repeatCount="indefinite"></animateTransform></g></svg><span class="sr-only">Loading...</span>',2),om=[sm];function am(t,e){return z(),se("div",rm,om)}const lm=Bf(im,[["render",am]]);function $a(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function cm(t,e){let n=v($a(t.value.type,t.value.as));return ce(()=>{n.value=$a(t.value.type,t.value.as)}),Se(()=>{var i;n.value||R(e)&&R(e)instanceof HTMLButtonElement&&!((i=R(e))!=null&&i.hasAttribute("type"))&&(n.value="button")}),n}var um=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(um||{});let Wc=Symbol("PopoverContext");function Eo(t){let e=Ne(Wc,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <${zc.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Eo),n}return e}let dm=Symbol("PopoverGroupContext");function Vc(){return Ne(dm,null)}let jc=Symbol("PopoverPanelContext");function hm(){return Ne(jc,null)}let zc=pe({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n,expose:i}){var r;let s=v(null);i({el:s,$el:s});let o=v(1),a=v(null),l=v(null),c=v(null),u=v(null),d=N(()=>bt(s)),h=N(()=>{var _,S;if(!R(a)||!R(u))return!1;for(let P of document.querySelectorAll("body > *"))if(Number(P==null?void 0:P.contains(R(a)))^Number(P==null?void 0:P.contains(R(u))))return!0;let b=Hr(),x=b.indexOf(R(a)),V=(x+b.length-1)%b.length,O=(x+1)%b.length,q=b[V],g=b[O];return!((_=R(u))!=null&&_.contains(q))&&!((S=R(u))!=null&&S.contains(g))}),f={popoverState:o,buttonId:v(null),panelId:v(null),panel:u,button:a,isPortalled:h,beforePanelSentinel:l,afterPanelSentinel:c,togglePopover(){o.value=Ae(o.value,{0:1,1:0})},closePopover(){o.value!==1&&(o.value=1)},close(_){f.closePopover();let S=_?_ instanceof HTMLElement?_:_.value instanceof HTMLElement?R(_):R(f.button):R(f.button);S==null||S.focus()}};We(Wc,f),Ec(N(()=>Ae(o.value,{0:Ce.Open,1:Ce.Closed})));let p={buttonId:f.buttonId,panelId:f.panelId,close(){f.closePopover()}},m=Vc(),y=m==null?void 0:m.registerPopover,[w,T]=Bc(),A=Fc({mainTreeNodeRef:m==null?void 0:m.mainTreeNodeRef,portals:w,defaultContainers:[a,u]});function k(){var _,S,b,x;return(x=m==null?void 0:m.isFocusWithinPopoverGroup())!=null?x:((_=d.value)==null?void 0:_.activeElement)&&(((S=R(a))==null?void 0:S.contains(d.value.activeElement))||((b=R(u))==null?void 0:b.contains(d.value.activeElement)))}return Se(()=>y==null?void 0:y(p)),vo((r=d.value)==null?void 0:r.defaultView,"focus",_=>{var S,b;_.target!==window&&_.target instanceof HTMLElement&&o.value===0&&(k()||a&&u&&(A.contains(_.target)||(S=R(f.beforePanelSentinel))!=null&&S.contains(_.target)||(b=R(f.afterPanelSentinel))!=null&&b.contains(_.target)||f.closePopover()))},!0),Mc(A.resolveContainers,(_,S)=>{var b;f.closePopover(),Nc(S,wo.Loose)||(_.preventDefault(),(b=R(a))==null||b.focus())},N(()=>o.value===0)),()=>{let _={open:o.value===0,close:f.close};return oe(xn,[oe(T,{},()=>Ue({theirProps:{...t,...n},ourProps:{ref:s},slot:_,slots:e,attrs:n,name:"Popover"})),oe(A.MainTreeNode)])}}}),fm=pe({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(t,{attrs:e,slots:n,expose:i}){var r;let s=(r=t.id)!=null?r:`headlessui-popover-button-${mt()}`,o=Eo("PopoverButton"),a=N(()=>bt(o.button));i({el:o.button,$el:o.button}),ce(()=>{o.buttonId.value=s}),Fe(()=>{o.buttonId.value=null});let l=Vc(),c=l==null?void 0:l.closeOthers,u=hm(),d=N(()=>u===null?!1:u.value===o.panelId.value),h=v(null),f=`headlessui-focus-sentinel-${mt()}`;d.value||Se(()=>{o.button.value=R(h)});let p=cm(N(()=>({as:t.as,type:e.type})),h);function m(_){var S,b,x,V,O;if(d.value){if(o.popoverState.value===1)return;switch(_.key){case ct.Space:case ct.Enter:_.preventDefault(),(b=(S=_.target).click)==null||b.call(S),o.closePopover(),(x=R(o.button))==null||x.focus();break}}else switch(_.key){case ct.Space:case ct.Enter:_.preventDefault(),_.stopPropagation(),o.popoverState.value===1&&(c==null||c(o.buttonId.value)),o.togglePopover();break;case ct.Escape:if(o.popoverState.value!==0)return c==null?void 0:c(o.buttonId.value);if(!R(o.button)||(V=a.value)!=null&&V.activeElement&&!((O=R(o.button))!=null&&O.contains(a.value.activeElement)))return;_.preventDefault(),_.stopPropagation(),o.closePopover();break}}function y(_){d.value||_.key===ct.Space&&_.preventDefault()}function w(_){var S,b;t.disabled||(d.value?(o.closePopover(),(S=R(o.button))==null||S.focus()):(_.preventDefault(),_.stopPropagation(),o.popoverState.value===1&&(c==null||c(o.buttonId.value)),o.togglePopover(),(b=R(o.button))==null||b.focus()))}function T(_){_.preventDefault(),_.stopPropagation()}let A=yo();function k(){let _=R(o.panel);if(!_)return;function S(){Ae(A.value,{[Me.Forwards]:()=>Ke(_,ke.First),[Me.Backwards]:()=>Ke(_,ke.Last)})===pi.Error&&Ke(Hr().filter(b=>b.dataset.headlessuiFocusGuard!=="true"),Ae(A.value,{[Me.Forwards]:ke.Next,[Me.Backwards]:ke.Previous}),{relativeTo:R(o.button)})}S()}return()=>{let _=o.popoverState.value===0,S={open:_},{...b}=t,x=d.value?{ref:h,type:p.value,onKeydown:m,onClick:w}:{ref:h,id:s,type:p.value,"aria-expanded":o.popoverState.value===0,"aria-controls":R(o.panel)?o.panelId.value:void 0,disabled:t.disabled?!0:void 0,onKeydown:m,onKeyup:y,onClick:w,onMousedown:T};return oe(xn,[Ue({ourProps:x,theirProps:{...e,...b},slot:S,attrs:e,slots:n,name:"PopoverButton"}),_&&!d.value&&o.isPortalled.value&&oe(Tn,{id:f,features:nn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:k})])}}}),pm=pe({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(t,{attrs:e,slots:n,expose:i}){var r;let s=(r=t.id)!=null?r:`headlessui-popover-panel-${mt()}`,{focus:o}=t,a=Eo("PopoverPanel"),l=N(()=>bt(a.panel)),c=`headlessui-focus-sentinel-before-${mt()}`,u=`headlessui-focus-sentinel-after-${mt()}`;i({el:a.panel,$el:a.panel}),ce(()=>{a.panelId.value=s}),Fe(()=>{a.panelId.value=null}),We(jc,a.panelId),Se(()=>{var T,A;if(!o||a.popoverState.value!==0||!a.panel)return;let k=(T=l.value)==null?void 0:T.activeElement;(A=R(a.panel))!=null&&A.contains(k)||Ke(R(a.panel),ke.First)});let d=$r(),h=N(()=>d!==null?(d.value&Ce.Open)===Ce.Open:a.popoverState.value===0);function f(T){var A,k;switch(T.key){case ct.Escape:if(a.popoverState.value!==0||!R(a.panel)||l.value&&!((A=R(a.panel))!=null&&A.contains(l.value.activeElement)))return;T.preventDefault(),T.stopPropagation(),a.closePopover(),(k=R(a.button))==null||k.focus();break}}function p(T){var A,k,_,S,b;let x=T.relatedTarget;x&&R(a.panel)&&((A=R(a.panel))!=null&&A.contains(x)||(a.closePopover(),((_=(k=R(a.beforePanelSentinel))==null?void 0:k.contains)!=null&&_.call(k,x)||(b=(S=R(a.afterPanelSentinel))==null?void 0:S.contains)!=null&&b.call(S,x))&&x.focus({preventScroll:!0})))}let m=yo();function y(){let T=R(a.panel);if(!T)return;function A(){Ae(m.value,{[Me.Forwards]:()=>{var k;Ke(T,ke.First)===pi.Error&&((k=R(a.afterPanelSentinel))==null||k.focus())},[Me.Backwards]:()=>{var k;(k=R(a.button))==null||k.focus({preventScroll:!0})}})}A()}function w(){let T=R(a.panel);if(!T)return;function A(){Ae(m.value,{[Me.Forwards]:()=>{let k=R(a.button),_=R(a.panel);if(!k)return;let S=Hr(),b=S.indexOf(k),x=S.slice(0,b+1),V=[...S.slice(b+1),...x];for(let O of V.slice())if(O.dataset.headlessuiFocusGuard==="true"||_!=null&&_.contains(O)){let q=V.indexOf(O);q!==-1&&V.splice(q,1)}Ke(V,ke.First,{sorted:!1})},[Me.Backwards]:()=>{var k;Ke(T,ke.Previous)===pi.Error&&((k=R(a.button))==null||k.focus())}})}A()}return()=>{let T={open:a.popoverState.value===0,close:a.close},{focus:A,...k}=t,_={ref:a.panel,id:s,onKeydown:f,onFocusout:o&&a.popoverState.value===0?p:void 0,tabIndex:-1};return Ue({ourProps:_,theirProps:{...e,...k},attrs:e,slot:T,slots:{...n,default:(...S)=>{var b;return[oe(xn,[h.value&&a.isPortalled.value&&oe(Tn,{id:c,ref:a.beforePanelSentinel,features:nn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:y}),(b=n.default)==null?void 0:b.call(n,...S),h.value&&a.isPortalled.value&&oe(Tn,{id:u,ref:a.afterPanelSentinel,features:nn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:w})])]}},features:Sn.RenderStrategy|Sn.Static,visible:h.value,name:"PopoverPanel"})}}});function Wr(t){return Wf()?(Vf(t),!0):!1}function Qe(t){return typeof t=="function"?t():C(t)}const Io=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const mm=Object.prototype.toString,_m=t=>mm.call(t)==="[object Object]",qc=()=>{};function gm(t,e){function n(...i){return new Promise((r,s)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return n}const Gc=t=>t();function vm(t=Gc){const e=v(!0);function n(){e.value=!1}function i(){e.value=!0}const r=(...s)=>{e.value&&t(...s)};return{isActive:yc(e),pause:n,resume:i,eventFilter:r}}function ym(t,e){var n;if(typeof t=="number")return t+e;const i=((n=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=t.slice(i.length),s=Number.parseFloat(i)+e;return Number.isNaN(s)?t:s+r}function Kc(t){return Ur()}function wm(t,e,n={}){const{eventFilter:i=Gc,...r}=n;return ge(t,gm(i,e),r)}function bm(t,e,n={}){const{eventFilter:i,...r}=n,{eventFilter:s,pause:o,resume:a,isActive:l}=vm(i);return{stop:wm(t,e,{...r,eventFilter:s}),pause:o,resume:a,isActive:l}}function Yc(t,e=!0,n){Kc()?ce(t,n):e?t():fi(t)}function Em(t,e){Kc()&&Fe(t,e)}function $s(t,e,n={}){const{immediate:i=!0}=n,r=v(!1);let s=null;function o(){s&&(clearTimeout(s),s=null)}function a(){r.value=!1,o()}function l(...c){o(),r.value=!0,s=setTimeout(()=>{r.value=!1,s=null,t(...c)},Qe(e))}return i&&(r.value=!0,Io&&l()),Wr(a),{isPending:yc(r),start:l,stop:a}}function hr(t){var e;const n=Qe(t);return(e=n==null?void 0:n.$el)!=null?e:n}const nt=Io?window:void 0,Qc=Io?window.document:void 0;function Y(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=nt):[e,n,i,r]=t,!e)return qc;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,d,h,f)=>(u.addEventListener(d,h,f),()=>u.removeEventListener(d,h,f)),l=ge(()=>[hr(e),Qe(r)],([u,d])=>{if(o(),!u)return;const h=_m(d)?{...d}:d;s.push(...n.flatMap(f=>i.map(p=>a(u,f,p,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return Wr(c),c}function Im(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function Ba(...t){let e,n,i={};t.length===3?(e=t[0],n=t[1],i=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],i=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:r=nt,eventName:s="keydown",passive:o=!1,dedupe:a=!1}=i,l=Im(e);return Y(r,s,u=>{u.repeat&&Qe(a)||l(u)&&n(u)},o)}function Cm(){const t=v(!1),e=Ur();return e&&ce(()=>{t.value=!0},e),t}function Co(t){const e=Cm();return N(()=>(e.value,!!t()))}function Jn(t,e={}){const{window:n=nt}=e,i=Co(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const s=v(!1),o=c=>{s.value=c.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},l=Se(()=>{i.value&&(a(),r=n.matchMedia(Qe(t)),"addEventListener"in r?r.addEventListener("change",o):r.addListener(o),s.value=r.matches)});return Wr(()=>{l(),a(),r=void 0}),s}const Sm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function Tm(t,e={}){function n(u,d){let h=Qe(t[Qe(u)]);return d!=null&&(h=ym(h,d)),typeof h=="number"&&(h=`${h}px`),h}const{window:i=nt,strategy:r="min-width"}=e;function s(u){return i?i.matchMedia(u).matches:!1}const o=u=>Jn(()=>`(min-width: ${n(u)})`,e),a=u=>Jn(()=>`(max-width: ${n(u)})`,e),l=Object.keys(t).reduce((u,d)=>(Object.defineProperty(u,d,{get:()=>r==="min-width"?o(d):a(d),enumerable:!0,configurable:!0}),u),{});function c(){const u=Object.keys(t).map(d=>[d,o(d)]);return N(()=>u.filter(([,d])=>d.value).map(([d])=>d))}return Object.assign(l,{greaterOrEqual:o,smallerOrEqual:a,greater(u){return Jn(()=>`(min-width: ${n(u,.1)})`,e)},smaller(u){return Jn(()=>`(max-width: ${n(u,-.1)})`,e)},between(u,d){return Jn(()=>`(min-width: ${n(u)}) and (max-width: ${n(d,-.1)})`,e)},isGreater(u){return s(`(min-width: ${n(u,.1)})`)},isGreaterOrEqual(u){return s(`(min-width: ${n(u)})`)},isSmaller(u){return s(`(max-width: ${n(u,-.1)})`)},isSmallerOrEqual(u){return s(`(max-width: ${n(u)})`)},isInBetween(u,d){return s(`(min-width: ${n(u)}) and (max-width: ${n(d,-.1)})`)},current:c,active(){const u=c();return N(()=>u.value.length===0?"":u.value.at(-1))}})}const Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xi="__vueuse_ssr_handlers__",km=Am();function Am(){return Xi in Qi||(Qi[Xi]=Qi[Xi]||{}),Qi[Xi]}function Pm(t,e){return km[t]||e}function Rm(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const Nm={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Ha="vueuse-storage";function Om(t,e,n,i={}){var r;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=nt,eventFilter:h,onError:f=O=>{console.error(O)},initOnMounted:p}=i,m=(u?vc:v)(typeof e=="function"?e():e);if(!n)try{n=Pm("getDefaultStorage",()=>{var O;return(O=nt)==null?void 0:O.localStorage})()}catch(O){f(O)}if(!n)return m;const y=Qe(e),w=Rm(y),T=(r=i.serializer)!=null?r:Nm[w],{pause:A,resume:k}=bm(m,()=>S(m.value),{flush:s,deep:o,eventFilter:h});d&&a&&Yc(()=>{Y(d,"storage",x),Y(d,Ha,V),p&&x()}),p||x();function _(O,q){d&&d.dispatchEvent(new CustomEvent(Ha,{detail:{key:t,oldValue:O,newValue:q,storageArea:n}}))}function S(O){try{const q=n.getItem(t);if(O==null)_(q,null),n.removeItem(t);else{const g=T.write(O);q!==g&&(n.setItem(t,g),_(q,g))}}catch(q){f(q)}}function b(O){const q=O?O.newValue:n.getItem(t);if(q==null)return l&&y!=null&&n.setItem(t,T.write(y)),y;if(!O&&c){const g=T.read(q);return typeof c=="function"?c(g,y):w==="object"&&!Array.isArray(g)?{...y,...g}:g}else return typeof q!="string"?q:T.read(q)}function x(O){if(!(O&&O.storageArea!==n)){if(O&&O.key==null){m.value=y;return}if(!(O&&O.key!==t)){A();try{(O==null?void 0:O.newValue)!==T.write(m.value)&&(m.value=b(O))}catch(q){f(q)}finally{O?fi(k):k()}}}}function V(O){x(O.detail)}return m}const Wa=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Dm(t,e={}){const{document:n=Qc,autoExit:i=!1}=e,r=N(()=>{var w;return(w=hr(t))!=null?w:n==null?void 0:n.querySelector("html")}),s=v(!1),o=N(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(w=>n&&w in n||r.value&&w in r.value)),a=N(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(w=>n&&w in n||r.value&&w in r.value)),l=N(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(w=>n&&w in n||r.value&&w in r.value)),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(w=>n&&w in n),u=Co(()=>r.value&&n&&o.value!==void 0&&a.value!==void 0&&l.value!==void 0),d=()=>c?(n==null?void 0:n[c])===r.value:!1,h=()=>{if(l.value){if(n&&n[l.value]!=null)return n[l.value];{const w=r.value;if((w==null?void 0:w[l.value])!=null)return!!w[l.value]}}return!1};async function f(){if(!(!u.value||!s.value)){if(a.value)if((n==null?void 0:n[a.value])!=null)await n[a.value]();else{const w=r.value;(w==null?void 0:w[a.value])!=null&&await w[a.value]()}s.value=!1}}async function p(){if(!u.value||s.value)return;h()&&await f();const w=r.value;o.value&&(w==null?void 0:w[o.value])!=null&&(await w[o.value](),s.value=!0)}async function m(){await(s.value?f():p())}const y=()=>{const w=h();(!w||w&&d())&&(s.value=w)};return Y(n,Wa,y,!1),Y(()=>hr(r),Wa,y,!1),i&&Wr(f),{isSupported:u,isFullscreen:s,enter:p,exit:f,toggle:m}}function Ji(t,e,n={}){const{window:i=nt}=n;return Om(t,e,i==null?void 0:i.localStorage,n)}const xm={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function Lm(t={}){const{type:e="page",touch:n=!0,resetOnTouchEnds:i=!1,initialValue:r={x:0,y:0},window:s=nt,target:o=s,scroll:a=!0,eventFilter:l}=t;let c=null;const u=v(r.x),d=v(r.y),h=v(null),f=typeof e=="function"?e:xm[e],p=_=>{const S=f(_);c=_,S&&([u.value,d.value]=S,h.value="mouse")},m=_=>{if(_.touches.length>0){const S=f(_.touches[0]);S&&([u.value,d.value]=S,h.value="touch")}},y=()=>{if(!c||!s)return;const _=f(c);c instanceof MouseEvent&&_&&(u.value=_[0]+s.scrollX,d.value=_[1]+s.scrollY)},w=()=>{u.value=r.x,d.value=r.y},T=l?_=>l(()=>p(_),{}):_=>p(_),A=l?_=>l(()=>m(_),{}):_=>m(_),k=l?()=>l(()=>y(),{}):()=>y();if(o){const _={passive:!0};Y(o,["mousemove","dragover"],T,_),n&&e!=="movement"&&(Y(o,["touchstart","touchmove"],A,_),i&&Y(o,"touchend",w,_)),a&&e==="page"&&Y(s,"scroll",k,{passive:!0})}return{x:u,y:d,sourceType:h}}function Mm(t,e={}){const{handleOutside:n=!0,window:i=nt}=e,r=e.type||"page",{x:s,y:o,sourceType:a}=Lm(e),l=v(t??(i==null?void 0:i.document.body)),c=v(0),u=v(0),d=v(0),h=v(0),f=v(0),p=v(0),m=v(!0);let y=()=>{};return i&&(y=ge([l,s,o],()=>{const w=hr(l);if(!w)return;const{left:T,top:A,width:k,height:_}=w.getBoundingClientRect();d.value=T+(r==="page"?i.pageXOffset:0),h.value=A+(r==="page"?i.pageYOffset:0),f.value=_,p.value=k;const S=s.value-d.value,b=o.value-h.value;m.value=k===0||_===0||S<0||b<0||S>k||b>_,(n||!m.value)&&(c.value=S,u.value=b)},{immediate:!0}),Y(document,"mouseleave",()=>{m.value=!0})),{x:s,y:o,sourceType:a,elementX:c,elementY:u,elementPositionX:d,elementPositionY:h,elementHeight:f,elementWidth:p,isOutside:m,stop:y}}function Fm(t={}){const{window:e=nt}=t,n=Co(()=>e&&"screen"in e&&"orientation"in e.screen),i=n.value?e.screen.orientation:{},r=v(i.type),s=v(i.angle||0);return n.value&&Y(e,"orientationchange",()=>{r.value=i.type,s.value=i.angle}),{isSupported:n,orientation:r,angle:s,lockOrientation:l=>n.value&&typeof i.lock=="function"?i.lock(l):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{n.value&&typeof i.unlock=="function"&&i.unlock()}}}function Um(t,e=qc,n={}){const{immediate:i=!0,manual:r=!1,type:s="text/javascript",async:o=!0,crossOrigin:a,referrerPolicy:l,noModule:c,defer:u,document:d=Qc,attrs:h={}}=n,f=v(null);let p=null;const m=T=>new Promise((A,k)=>{const _=x=>(f.value=x,A(x),x);if(!d){A(!1);return}let S=!1,b=d.querySelector(`script[src="${Qe(t)}"]`);b?b.hasAttribute("data-loaded")&&_(b):(b=d.createElement("script"),b.type=s,b.async=o,b.src=Qe(t),u&&(b.defer=u),a&&(b.crossOrigin=a),c&&(b.noModule=c),l&&(b.referrerPolicy=l),Object.entries(h).forEach(([x,V])=>b==null?void 0:b.setAttribute(x,V)),S=!0),b.addEventListener("error",x=>k(x)),b.addEventListener("abort",x=>k(x)),b.addEventListener("load",()=>{b.setAttribute("data-loaded","true"),e(b),_(b)}),S&&(b=d.head.appendChild(b)),T||_(b)}),y=(T=!0)=>(p||(p=m(T)),p),w=()=>{if(!d)return;p=null,f.value&&(f.value=null);const T=d.querySelector(`script[src="${Qe(t)}"]`);T&&d.head.removeChild(T)};return i&&!r&&Yc(y),r||Em(w),{scriptTag:f,load:y,unload:w}}const $m=()=>po().$device,Bm=["controls","poster"],Hm=D("p",{class:"vjs-no-js"},[kt(" To view this video please enable JavaScript, and consider upgrading to a web browser that "),D("a",{href:"https://videojs.com/html5-video-support/",target:"_blank"},"supports HTML5 video")],-1),Wm=[Hm],Vm={key:0},jm={key:2,id:"loading-spinner",class:"absolute inset-0 z-0 flex items-center justify-center bg-black/30 text-black"},zm={key:0,class:"group flex items-center justify-center"},qm={class:"relative flex h-full w-full duration-200 group-hover/volume:w-20"},Gm={class:"flex w-full bg-zinc-800/80 px-1 duration-200 dark:bg-black/75 md:px-2 items-center"},Km={key:0,class:"group/volume flex items-center gap-1"},Ym={class:"relative flex h-full w-16 items-center duration-200 group-hover/volume:w-20 md:w-20"},Qm={class:"absolute inset-0 top-1/2 h-1 z-0 w-16 overflow-hidden rounded-sm bg-gray-300/25 md:w-20"},Xm=D("div",{class:"flex-1"},null,-1),Jm={key:1,class:"flex items-center text-xs md:text-sm pt-0.5"},Zm=D("div",{class:"border-b border-white/20 px-3 py-1.5 md:px-4 md:py-2.5"}," Kualitas ",-1),e_={class:"flex w-[220px] flex-col py-1 text-base md:w-[250px]"},t_={class:"h-10 w-10"},n_=pe({__name:"VideoPlayer",props:{sources:{},poster:{},landscape:{type:Boolean,default:!0},useShortcut:{type:Boolean,default:!0},useDefaultControl:{type:Boolean,default:!1},hideControl:{type:Boolean,default:!1},saveState:{type:Boolean,default:!0},rotateFill:{default:"width"},videoFill:{default:"width"},compact:{type:Boolean,default:!1},title:{}},setup(t,{expose:e}){const{greaterOrEqual:n}=Tm(Sm),i=t,r=v(i.sources.filter(I=>I.type==="hls")??[]);ge(()=>i.sources,()=>{r.value=i.sources.filter(I=>I.type==="hls")??[]});const s=Ji("quality-id",2),o=v((r.value??[]).find(I=>s.value===I.id)??r.value[0]),a=v(),l=v(),c=v(),u=i.saveState?Ji("data-volume",0):v(1),d=v(!1),h=i.saveState?Ji("data-muted",!1):v(!1),f=v(!1),p=v(!0),m=v(0),{isMobile:y}=$m(),{start:w,stop:T}=$s(()=>{je()},1e4),A=v(!1);function k(I,J=!1){const K=Number.parseFloat(I);l.value&&(K===0?(l.value.muted=!0,l.value.volume=0):(l.value.muted=!1,l.value.volume=K),K>0&&(u.value=K),J||(h.value=l.value.muted),d.value=l.value.muted)}const _=v(!1),S=v(!1),b=v(!1),{start:x,stop:V}=$s(()=>{b.value=!1,S.value=!1,$(!1)},2e3);ge(S,I=>{I&&x()});const{isOutside:O,x:q,y:g}=Mm(a);ge(q,()=>{!y&&!O.value!==_.value&&$(!O.value),x()}),ge(g,()=>{!y&&!O.value!==_.value&&$(!O.value),x()});const P=v(null);Y(P,"input",I=>{$(!0),k(I.target.value)});function $(I){console.log("SET SHOW",I),I?x():(S.value=!1,b.value=!1,V()),_.value=I}const U=v(0),j=v(!1);Um("https://cdn.jsdelivr.net/npm/hls.js@1.5.6",()=>{Ve()},{defer:!0});const te=v(!1),It=v(!0);ce(()=>{!j.value&&typeof Hls<"u"&&(j.value=!0,Ve())});function Ve(){var J;const I=o.value;Hls.isSupported()&&!te.value?(U.value=0,p.value=!0,st(),c.value=new Hls({enableWorker:!1,liveDurationInfinity:I.live??!0,maxBufferSize:254*1e3*1e3,maxBufferLength:60,lowLatencyMode:!0}),c.value.on(Hls.Events.ERROR,(K,ze)=>{if(console.error(ze),ze.details==="manifestParsingError"&&!te.value)return te.value=!0,Ve();if(w(),ze.fatal)switch(ze.type){case Hls.ErrorTypes.NETWORK_ERROR:console.error("fatal network error encountered, try to recover"),c.value.startLoad();break;case Hls.ErrorTypes.MEDIA_ERROR:console.error("fatal media error encountered, try to recover"),c.value.recoverMediaError();break;default:if(console.error("cannot recover error"),It.value)return It.value=!1,Ve();je();break}else ze.details===Hls.ErrorDetails.BUFFER_STALLED_ERROR&&(p.value=!0)}),c.value.on(Hls.Events.FRAG_BUFFERED,()=>{T(),p.value=!1}),c.value.on(Hls.Events.MANIFEST_LOADING,()=>{p.value=!0}),c.value.on(Hls.Events.LEVEL_LOADED,()=>{T(),p.value=!1}),c.value.attachMedia(l.value),c.value.loadSource(I.url),fn()):l.value&&((J=l.value)==null||J.setAttribute("src",I.url),fn())}function st(){c.value&&c.value.destroy()}function X(){l.value&&(l.value.muted?Ee():ne())}function ne(){l.value?(l.value.muted=!0,d.value=!0):k(0)}function Ee(){l.value?(l.value.muted=!1,d.value=!1):k(u.value||1)}const Ie=v(!1);async function ot(){if(!Ie.value&&l.value){Ie.value=!0;try{l.value.paused?(A.value=!1,await fn()):(A.value=!0,await l.value.pause()),Ie.value=!1}catch{Ie.value=!1}}}function je(){f.value=!1,p.value=!0,te.value=!1,T();try{Ve()}catch(I){console.error(I),st()}}const zn=v();Y(zn,"pointerenter",()=>{b.value=!0}),Y(zn,"pointerleave",()=>{b.value=!1}),Y(zn,"focusin",()=>{y||(S.value=!0)}),Y(zn,"focusout",()=>{S.value=!1});const{isSupported:Ca,orientation:ef,lockOrientation:Sa,unlockOrientation:tf}=Fm(),us=v(0),ds=v(0),qn=N(()=>ds.value<=us.value),Ta=v(!1),{isFullscreen:nf,toggle:ka}=Dm(a),Gn=N(()=>Ta.value||nf.value);async function rf(){if(Gn.value)tf(),await ka();else{const I=ef.value;await ka();try{qn.value?["portrait-primary","portrait-secondary","portrait"].includes(I??"")&&Ca.value&&await Sa("landscape"):["landscape-primary","landscape-secondary","landscape"].includes(I??"")&&Ca.value&&await Sa("portrait")}catch(J){console.error(J)}}}function sf(){var I;document.pictureInPictureElement?document.exitPictureInPicture():document.pictureInPictureEnabled&&((I=l.value)==null||I.requestPictureInPicture())}function Aa(I){te.value=!1,s.value=I.id,o.value=I,je()}const Vi=v(0);ge(f,I=>{!I&&!A.value?w():(T(),Vi.value=0)},{immediate:!0});async function fn(){if(A.value=!1,l.value)try{h.value?ne():Ee(),await l.value.play()}catch(I){if(console.error(I),Vi.value>5)return;Vi.value+=1,await fi(async()=>(Vi.value>4&&(l.value&&(l.value.muted=!0,l.value.volume=0),m.value=0,d.value=!0),fn()))}}const ji=v(!1),Pa=v(!1);ge(Gn,()=>{Pa.value=window.innerHeight<=window.innerWidth,zi()});const Ct=v(0),pn=v(0);fo(()=>{st(),document!=null&&document.pictureInPictureElement&&document.exitPictureInPicture()});function of(){y?_.value?$(!1):$(!0):ot()}function af(){st(),document!=null&&document.pictureInPictureElement&&document.exitPictureInPicture()}const Ze=v(),hs=N(()=>Ct.value===0?0:pn.value/Ct.value*100);i.useShortcut&&(Ba("ArrowLeft",()=>{const I=pn.value-2;l.value&&(l.value.currentTime=I<0?0:I)},{eventName:"keyup"}),Ba("ArrowRight",()=>{const I=pn.value+2,J=Ct.value-3;l.value&&(l.value.currentTime=I>J?J:I)},{eventName:"keyup"})),ge(hs,I=>{Ze.value&&(Ze.value.value=String(I*(Number(Ze.value.max)||0)/100))},{immediate:!0});const lf=N(()=>Math.floor(pn.value));function cf(){var I;return(I=l.value)==null?void 0:I.getAttribute("prop")}Y(l,"volumechange",I=>{var J,K;d.value=(J=I.target)==null?void 0:J.muted,m.value=((K=I.target)==null?void 0:K.volume)||0});const uf=N(()=>!d.value&&m.value>=.5?"material-symbols:volume-up":!d.value&&m.value>0?"material-symbols:volume-down":"material-symbols:volume-off"),df=N(()=>f.value?"material-symbols:pause":"material-symbols:play-arrow");function hf(){var I;(I=l.value)==null||I.pause(),A.value=!0}function ff(){l.value&&(l.value.currentTime=Ct.value-3)}const Kn=Ji("rotate_feature_v1",()=>!1),Yn=v(0);function pf(){Kn.value&&(Yn.value+=90)}const qt=v(null),Ra=N(()=>Yn.value/90%2!==0);function zi(){var J;if(!qt.value){const K=(J=l.value)==null?void 0:J.getBoundingClientRect();qt.value={width:(K==null?void 0:K.width)||0,height:(K==null?void 0:K.height)||0}}const I=Yn.value;if(!(!l.value||!a.value)&&(l.value.style.removeProperty("scale"),I/90%2!==0)){if(!qt.value)return;const K=qt.value.height/qt.value.width,ze=qt.value.width/qt.value.height;let Gt;i.rotateFill==="width"?Gt=ze:Gt=K,Gn.value&&(Gt=Pa.value?qn.value?K:ze:qn.value?ze:K),l.value.style.scale=`${Gt}`}}ge(Yn,()=>{requestAnimationFrame(()=>zi())}),Y(l,"loadedmetadata",function(){us.value=this.videoWidth,ds.value=this.videoHeight}),Y(l,"loadeddata",function(){us.value=this.videoWidth,ds.value=this.videoHeight}),Y(l,"play",()=>{p.value=!1,f.value=!0}),Y(l,"pause",()=>{p.value=!1,f.value=!1}),Y(l,"playing",()=>{p.value=!1,f.value=!0}),Y(l,"stalled",()=>{p.value=!0}),Y(l,"durationchange",()=>{var I;Ct.value=((I=l.value)==null?void 0:I.duration)||0}),Y(l,"timeupdate",()=>{var I;ji.value||(pn.value=((I=l.value)==null?void 0:I.currentTime)||0)}),Y(l,"loadstart",()=>{p.value=!0});function fs(){Ta.value=document.fullscreenElement!==null}Y(l,"webkitfullscreenchange",()=>{fs()}),Y(l,"mozfullscreenchange",()=>{fs()}),Y(l,"fullscreenchange",()=>{fs()});const Na=v(!1);ce(()=>{Y(window,"resize",()=>{requestAnimationFrame(()=>zi())}),Na.value=document.pictureInPictureEnabled;try{navigator.mediaSession.setActionHandler("nexttrack",()=>{je()})}catch(I){console.error(I)}l.value&&(m.value=Number(u.value)||1,k(m.value),f.value=!l.value.paused),fi(()=>{h.value?ne():Ee()})});const mf=N(()=>{const I=Ra.value?"aspect-[9/12]":"aspect-video",J=Ra.value?"aspect-video":"aspect-[9/12]";return qn.value?I:J}),Oa=v(!1);ce(()=>{Oa.value=!0});function _f(){Ze.value&&(pn.value=Number(Ze.value.value)/(Number(Ze.value.max)||0)*Ct.value)}function gf(){Ze.value&&l.value&&(l.value.currentTime=Number(Ze.value.value)/(Number(Ze.value.max)||0)*Ct.value),ji.value=!1}const vf=n("md");return e({stop:af,rotate:pf,syncLive:ff,calculateVideoSize:zi,isPlaying:f,isMuted:d,reload:je,togglePlay:ot,isLandscape:qn,changeSource:Aa,checkMute:cf,volume:m,pause:hf,play:fn,mute:ne,unmute:Ee,setVolume:k}),(I,J)=>{const K=Xf,ze=lm,Gt=fm,yf=pm,wf=zc;return z(),se("div",{ref_key:"videoPlayer",ref:a,class:qe(["overflow-hidden relative group flex items-center transform-all duration-300",[C(Kn)?I.rotateFill==="width"?C(mf):"h-full w-full":"w-full h-full",{"!cursor-none":!C(_)&&C(f),invisible:!C(Oa)}]])},[D("video",{ref_key:"video",ref:l,playsinline:"",controls:!(!I.useDefaultControl||C(Kn)||I.hideControl),class:qe([{"object-cover":!C(Gn)},"inset-0 w-full h-full transition-all duration-500 origin-center"]),style:qi({transform:C(Kn)?`rotate(${C(Yn)}deg)`:"none"}),poster:I.poster,onClick:of},Wm,14,Bm),!I.useDefaultControl||C(Kn)?(z(),se("div",Vm,[!C(f)&&!C(p)?(z(),se("div",{key:0,class:qe(["z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1",{"pointer-events-none":!C(y)}]),onClick:J[0]||(J[0]=()=>{C(y)&&ot()})},[me(K,{name:"material-symbols:play-arrow",class:"text-white/60",size:"3rem"})],2)):ue("",!0),C(y)&&C(f)&&C(_)&&!C(p)?(z(),se("div",{key:1,class:qe(["z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1",{"pointer-events-none":!C(y)}]),onClick:ot},[me(K,{name:"material-symbols:pause",class:"text-white/60",size:"3rem"})],2)):ue("",!0),C(p)?(z(),se("div",jm,[me(ze,{class:"text-white size-12"})])):ue("",!0),I.title?(z(),se("div",{key:3,class:qe([{"opacity-100":C(_)||C(S)||C(b)},"absolute top-0 inset-x-0 z-10 opacity-0 text-white px-3 pt-2 pb-4 text-base md:text-lg font-bold bg-title transition-opacity duration-200"])},Be(I.title),3)):ue("",!0),D("div",{id:"control",ref_key:"videoControl",ref:zn,class:qe([{"opacity-100":C(_)||C(S)||C(b)},"absolute inset-x-0 bottom-0 z-10 text-slate-200 opacity-0 duration-200 ease-in-out transition-opacity"]),onClick:J[4]||(J[4]=at=>$(!0))},[D("div",{class:qe({"pointer-events-none":C(y)&&!C(_)})},[C(o).live??!0?ue("",!0):(z(),se("div",zm,[D("div",qm,[D("div",{class:qe([{"h-[3px]":I.compact,"h-1":!I.compact},"absolute bottom-0 z-0 w-full overflow-hidden bg-neutral-700/75"])},[D("div",{class:"h-full bg-red-600",style:qi({width:`${C(hs)}%`})},null,4)],2),D("div",{class:qe([{"opacity-0":!C(y),"h-3 w-3":!I.compact,"h-2 w-2":I.compact},"absolute bottom-[2px] -translate-x-1/2 translate-y-1/2 rounded-full bg-red-600 transition-opacity duration-300 group-hover:opacity-100"]),style:qi({left:`${C(hs)}%`})},null,6),D("input",{ref_key:"seekSlider",ref:Ze,class:qe([{"opacity-0":!C(y),compact:I.compact},"volume-slider hidden-slider z-20 h-4 w-full cursor-pointer transition-opacity duration-300 hover:opacity-100"]),"aria-label":"Playback",type:"range",min:"0",max:"10000",step:"1",onChange:gf,onInput:_f,onPointerdown:J[1]||(J[1]=at=>ji.value=!0),onPointerup:J[2]||(J[2]=at=>ji.value=!1)},null,34)])])),D("div",Gm,[D("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Play",type:"button",onClick:ot},[me(K,{name:C(df),class:"h-full w-full"},null,8,["name"])]),I.compact?ue("",!0):(z(),se("div",Km,[D("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Mute",type:"button",onClick:X},[me(K,{name:C(uf),class:"h-full w-full"},null,8,["name"])]),D("div",Ym,[D("div",Qm,[D("div",{class:"h-full bg-slate-200",style:qi({width:`${C(m)*100}%`})},null,4)]),jf(D("input",{ref_key:"volumeSlider",ref:P,"onUpdate:modelValue":J[3]||(J[3]=at=>qf(m)?m.value=at:null),"aria-label":"Volume",type:"range",min:"0",max:"1",step:"0.01",class:"volume-slider z-20 h-1 w-16 cursor-pointer md:w-20 pt-1"},null,512),[[zf,C(m)]])])])),Xm,!I.compact&&C(vf)&&!(C(o).live??!0)?(z(),se("div",Jm,Be(I.$dayjs.duration(C(lf),"second").format("mm:ss"))+" / "+Be(I.$dayjs.duration(C(Ct),"second").format("mm:ss")),1)):ue("",!0),D("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Reload",type:"button",onClick:je},[me(K,{name:"material-symbols:refresh",class:"h-full w-full p-[1px]"})]),I.compact?ue("",!0):(z(),Tt(wf,{key:2},{default:$e(()=>[me(Gt,{"aria-label":"Setting",class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1"},{default:$e(()=>[me(K,{name:"material-symbols:settings",class:"h-full w-full p-[2px] duration-300"})]),_:1}),me(Kf,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-2 translate-x-1 opacity-0","enter-to-class":"translate-y-0 translate-x-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 translate-x-x opacity-100","leave-to-class":"translate-y-2 translate-x-1 opacity-0"},{default:$e(()=>[me(yf,{class:"absolute bottom-11 right-4 rounded-md bg-black/70 dark:bg-black/80"},{default:$e(()=>[D("div",null,[Zm,D("div",e_,[(z(!0),se(xn,null,Gf(C(r),at=>(z(),Tt(Gt,{key:at.id,class:"flex items-center truncate text-left text-sm hover:bg-black/50",onClick:()=>Aa(at)},{default:$e(()=>[D("div",t_,[C(o).id===at.id?(z(),Tt(K,{key:0,name:"ic:round-check",class:"h-full w-full p-2.5"})):ue("",!0)]),D("div",null,Be(at.label),1)]),_:2},1032,["onClick"]))),128))])])]),_:1})]),_:1})]),_:1})),C(Na)?(z(),se("button",{key:3,class:"group h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Fullscreen",type:"button",onClick:sf},[me(K,{name:"material-symbols:picture-in-picture-sharp",class:"h-full w-full p-0.5 duration-300"})])):ue("",!0),D("button",{class:"group h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Fullscreen",type:"button",onClick:rf},[C(Gn)?(z(),Tt(K,{key:1,name:"material-symbols:fullscreen-exit",class:"h-full w-full duration-300 hover:scale-125"})):(z(),Tt(K,{key:0,name:"material-symbols:fullscreen",class:"h-full w-full duration-300 hover:scale-125"}))])])],2)],2)])):ue("",!0)],2)}}});function i_(){return Yf}class r_{static encrypt(e,n){let i="";for(let r=0;r<e.length;r++){const s=r%n.length,a=`00${(e[r].charCodeAt(0)^n[s].charCodeAt(0)).toString(16)}`.slice(-2);i+=a}return i}static decrypt(e,n){let i="";const r=[];let s;for(s=0;s<e.length;s=s+2)r.push(e[s]+e[s+1]);for(s=0;s<r.length;s++){const o=r[s],a=parseInt(o,16),l=s%n.length,c=a^n[l].charCodeAt(0);i+=String.fromCharCode(c)}return i}}const s_="KimiNo";function o_(t){return r_.decrypt(t,s_+a_+c_)}const a_="Kotoga";function l_(t){return typeof t=="string"&&(t=parseInt(t)),t.toString().length>10}const c_="SukiDakara";function Va(t){return["www.youtube.com/embed"].some(e=>t.includes(e))}const u_={key:0,class:"text-center flex flex-col gap-3 md:gap-1.5"},d_={class:"text-xl"},h_={class:"flex gap-3 justify-center"},f_={key:0,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},p_={class:"leading-4 pt-0.5"},m_=D("span",{class:"text-sm"},"bulan",-1),__={key:1,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},g_={class:"leading-4 pt-0.5"},v_=D("span",{class:"text-sm"},"hari",-1),y_={key:2,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},w_={class:"leading-4 pt-0.5"},b_=D("span",{class:"text-sm"},"jam",-1),E_={key:3,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},I_={class:"leading-4 pt-0.5"},C_=D("span",{class:"text-sm"},"menit",-1),S_={key:4,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},T_={class:"leading-4 pt-0.5"},k_=D("span",{class:"text-sm"},"detik",-1),A_=pe({__name:"CountDown",props:{time:{}},setup(t){const e=t,n=i_(),i=n(l_(e.time)?e.time:Number(e.time)*1e3),r=v(n.duration(i.diff(n()))),s=v(r.value.asSeconds()<=0),{start:o}=$s(()=>{const a=r.value.subtract(1,"seconds");r.value.asSeconds()<=1?(s.value=!0,r.value=n.duration(0)):(r.value=a,o())},1e3,{immediate:!0});return(a,l)=>(z(),se("div",null,[C(s)?ue("",!0):(z(),se("div",u_,[D("div",d_,Be(C(i).format("dddd, DD MMMM YYYY, hh:mm A")),1),D("div",h_,[C(r).months()>0?(z(),se("div",f_,[D("span",p_,Be(C(r).months()),1),kt(),m_])):ue("",!0),C(r).days()>0?(z(),se("div",__,[D("span",g_,Be(C(r).days()),1),kt(),v_])):ue("",!0),C(r).hours()>0?(z(),se("div",y_,[D("span",w_,Be(C(r).hours()),1),kt(),b_])):ue("",!0),C(r).minutes()>0?(z(),se("div",E_,[D("span",I_,Be(C(r).minutes()),1),kt(),C_])):ue("",!0),C(r).seconds()>0||C(r).asSeconds()>0?(z(),se("div",S_,[D("span",T_,Be(C(r).seconds()),1),kt(),k_])):ue("",!0)])]))]))}});var ja={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw Ln(e)},Ln=function(t){return new Error("Firebase Database ("+Xc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},P_=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(n[u],n[d],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):P_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new R_;const h=s<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class R_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zc=function(t){const e=Jc(t);return Vr.encodeByteArray(e,!0)},fr=function(t){return Zc(t).replace(/\./g,"")},pr=function(t){try{return Vr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t){return eu(void 0,t)}function eu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!O_(n)||(t[n]=eu(t[n],e[n]));return t}function O_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=()=>tu().__FIREBASE_DEFAULTS__,x_=()=>{if(typeof process>"u"||typeof ja>"u")return;const t=ja.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pr(t[1]);return e&&JSON.parse(e)},So=()=>{try{return D_()||x_()||L_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nu=t=>{var e,n;return(n=(e=So())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},M_=t=>{const e=nu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},iu=()=>{var t;return(t=So())===null||t===void 0?void 0:t.config},ru=t=>{var e;return(e=So())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fr(JSON.stringify(n)),fr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function To(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function U_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function su(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $_(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ou(){return Xc.NODE_ADMIN===!0}function ko(){try{return typeof indexedDB=="object"}catch{return!1}}function B_(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="FirebaseError";class Wt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=H_,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?W_(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Wt(r,a,i)}}function W_(t,e){return t.replace(V_,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const V_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=mi(pr(s[0])||""),n=mi(pr(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},j_=function(t){const e=au(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},z_=function(t){const e=au(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function kn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _r(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(za(s)&&za(o)){if(!gr(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function za(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function G_(t,e){const n=new K_(t,e);return n.subscribe.bind(n)}class K_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Y_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=gs),r.error===void 0&&(r.error=gs),r.complete===void 0&&(r.complete=gs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gs(){}function An(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,E(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},jr=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=1e3,Z_=2,eg=4*60*60*1e3,tg=.5;function ng(t,e=J_,n=Z_){const i=e*Math.pow(n,t),r=Math.round(tg*i*(Math.random()-.5)*2);return Math.min(eg,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class vt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Le;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sg(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rg(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rg(t){return t===Yt?void 0:t}function sg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ig(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const ag={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},lg=Z.INFO,cg={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},ug=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=cg[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zr{constructor(e){this.name=e,this._logLevel=lg,this._logHandler=ug,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ag[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const dg=(t,e)=>e.some(n=>t instanceof n);let qa,Ga;function hg(){return qa||(qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fg(){return Ga||(Ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lu=new WeakMap,Bs=new WeakMap,cu=new WeakMap,vs=new WeakMap,Ao=new WeakMap;function pg(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lu.set(n,t)}).catch(()=>{}),Ao.set(e,t),e}function mg(t){if(Bs.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bs.set(t,e)}let Hs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _g(t){Hs=t(Hs)}function gg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ys(this),e,...n);return cu.set(i,e.sort?e.sort():[e]),Dt(i)}:fg().includes(t)?function(...e){return t.apply(ys(this),e),Dt(lu.get(this))}:function(...e){return Dt(t.apply(ys(this),e))}}function vg(t){return typeof t=="function"?gg(t):(t instanceof IDBTransaction&&mg(t),dg(t,hg())?new Proxy(t,Hs):t)}function Dt(t){if(t instanceof IDBRequest)return pg(t);if(vs.has(t))return vs.get(t);const e=vg(t);return e!==t&&(vs.set(t,e),Ao.set(e,t)),e}const ys=t=>Ao.get(t);function yg(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Dt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Dt(o.result),l.oldVersion,l.newVersion,Dt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wg=["get","getKey","getAll","getAllKeys","count"],bg=["put","add","delete","clear"],ws=new Map;function Ka(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ws.get(e))return ws.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=bg.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||wg.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return ws.set(e,s),s}_g(t=>({...t,get:(e,n,i)=>Ka(e,n)||t.get(e,n,i),has:(e,n)=>!!Ka(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ig(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ig(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ws="@firebase/app",Ya="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new zr("@firebase/app"),Cg="@firebase/app-compat",Sg="@firebase/analytics-compat",Tg="@firebase/analytics",kg="@firebase/app-check-compat",Ag="@firebase/app-check",Pg="@firebase/auth",Rg="@firebase/auth-compat",Ng="@firebase/database",Og="@firebase/database-compat",Dg="@firebase/functions",xg="@firebase/functions-compat",Lg="@firebase/installations",Mg="@firebase/installations-compat",Fg="@firebase/messaging",Ug="@firebase/messaging-compat",$g="@firebase/performance",Bg="@firebase/performance-compat",Hg="@firebase/remote-config",Wg="@firebase/remote-config-compat",Vg="@firebase/storage",jg="@firebase/storage-compat",zg="@firebase/firestore",qg="@firebase/firestore-compat",Gg="firebase",Kg="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="[DEFAULT]",Yg={[Ws]:"fire-core",[Cg]:"fire-core-compat",[Tg]:"fire-analytics",[Sg]:"fire-analytics-compat",[Ag]:"fire-app-check",[kg]:"fire-app-check-compat",[Pg]:"fire-auth",[Rg]:"fire-auth-compat",[Ng]:"fire-rtdb",[Og]:"fire-rtdb-compat",[Dg]:"fire-fn",[xg]:"fire-fn-compat",[Lg]:"fire-iid",[Mg]:"fire-iid-compat",[Fg]:"fire-fcm",[Ug]:"fire-fcm-compat",[$g]:"fire-perf",[Bg]:"fire-perf-compat",[Hg]:"fire-rc",[Wg]:"fire-rc-compat",[Vg]:"fire-gcs",[jg]:"fire-gcs-compat",[zg]:"fire-fst",[qg]:"fire-fst-compat","fire-js":"fire-js",[Gg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map,Qg=new Map,js=new Map;function Qa(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ut(t){const e=t.name;if(js.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;js.set(e,t);for(const n of vr.values())Qa(n,t);for(const n of Qg.values())Qa(n,t);return!0}function Di(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ut(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new Mn("app","Firebase",Xg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=Kg;function uu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Vs,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw xt.create("bad-app-name",{appName:String(r)});if(n||(n=iu()),!n)throw xt.create("no-options");const s=vr.get(r);if(s){if(gr(n,s.options)&&gr(i,s.config))return s;throw xt.create("duplicate-app",{appName:r})}const o=new og(r);for(const l of js.values())o.addComponent(l);const a=new Jg(n,i,o);return vr.set(r,a),a}function Po(t=Vs){const e=vr.get(t);if(!e&&t===Vs&&iu())return uu();if(!e)throw xt.create("no-app",{appName:t});return e}function _t(t,e,n){var i;let r=(i=Yg[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}Ut(new vt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="firebase-heartbeat-database",ev=1,_i="firebase-heartbeat-store";let bs=null;function du(){return bs||(bs=yg(Zg,ev,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_i)}catch(n){console.warn(n)}}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),bs}async function tv(t){try{const n=(await du()).transaction(_i),i=await n.objectStore(_i).get(hu(t));return await n.done,i}catch(e){if(e instanceof Wt)rn.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(n.message)}}}async function Xa(t,e){try{const i=(await du()).transaction(_i,"readwrite");await i.objectStore(_i).put(e,hu(t)),await i.done}catch(n){if(n instanceof Wt)rn.warn(n.message);else{const i=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(i.message)}}}function hu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=1024,iv=30*24*60*60*1e3;class rv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ov(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ja();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=iv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ja(),{heartbeatsToSend:i,unsentEntries:r}=sv(this._heartbeatsCache.heartbeats),s=fr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ja(){return new Date().toISOString().substring(0,10)}function sv(t,e=nv){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Za(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Za(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ov{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ko()?B_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Za(t){return fr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t){Ut(new vt("platform-logger",e=>new Eg(e),"PRIVATE")),Ut(new vt("heartbeat",e=>new rv(e),"PRIVATE")),_t(Ws,Ya,t),_t(Ws,Ya,"esm2017"),_t("fire-js","")}av("");var lv="firebase",cv="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(lv,cv,"app");var el={};const tl="@firebase/database",nl="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu="";function uv(t){fu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:mi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dv(e)}}catch{}return new hv},Zt=pu("localStorage"),fv=pu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new zr("@firebase/database"),pv=function(){let t=1;return function(){return t++}}(),mu=function(t){const e=Q_(t),n=new q_;n.update(e);const i=n.digest();return Vr.encodeByteArray(i)},xi=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=xi.apply(null,i):typeof i=="object"?e+=he(i):e+=i,e+=" "}return e};let oi=null,il=!0;const mv=function(t,e){E(!e,"Can't turn on custom loggers persistently."),wn.logLevel=Z.VERBOSE,oi=wn.log.bind(wn)},we=function(...t){if(il===!0&&(il=!1,oi===null&&fv.get("logging_enabled")===!0&&mv()),oi){const e=xi.apply(null,t);oi(e)}},Li=function(t){return function(...e){we(t,...e)}},zs=function(...t){const e="FIREBASE INTERNAL ERROR: "+xi(...t);wn.error(e)},yt=function(...t){const e=`FIREBASE FATAL ERROR: ${xi(...t)}`;throw wn.error(e),new Error(e)},xe=function(...t){const e="FIREBASE WARNING: "+xi(...t);wn.warn(e)},_v=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gv=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pn="[MIN_NAME]",sn="[MAX_NAME]",un=function(t,e){if(t===e)return 0;if(t===Pn||e===sn)return-1;if(e===Pn||t===sn)return 1;{const n=rl(t),i=rl(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},vv=function(t,e){return t===e?0:t<e?-1:1},Zn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},Ro=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=he(e[i]),n+=":",n+=Ro(t[e[i]]);return n+="}",n},_u=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gu=function(t){E(!qr(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},yv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bv(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Ev=new RegExp("^-?(0*)\\d{1,10}$"),Iv=-2147483648,Cv=2147483647,rl=function(t){if(Ev.test(t)){const e=Number(t);if(e>=Iv&&e<=Cv)return e}return null},$n=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Sv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ai=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xe(e)}}class ar{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ar.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="5",vu="v",yu="s",wu="r",bu="f",Eu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Iu="ls",Cu="p",qs="ac",Su="websocket",Tu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Av(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Au(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let i;if(e===Su)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tu)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Av(t)&&(n.ns=t.namespace);const r=[];return be(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(){this.counters_={}}incrementCounter(e,n=1){rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return N_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es={},Is={};function Oo(t){const e=t.toString();return Es[e]||(Es[e]=new Pv),Es[e]}function Rv(t,e){const n=t.toString();return Is[n]||(Is[n]=e()),Is[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&$n(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="start",Ov="close",Dv="pLPCommand",xv="pRTLPCB",Pu="id",Ru="pw",Nu="ser",Lv="cb",Mv="seg",Fv="ts",Uv="d",$v="dframe",Ou=1870,Du=30,Bv=Ou-Du,Hv=25e3,Wv=3e4;class gn{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Li(e),this.stats_=Oo(n),this.urlFn=l=>(this.appCheckToken&&(l[qs]=this.appCheckToken),Au(n,Tu,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Nv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wv)),gv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Do((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===sl)this.id=a,this.password=l;else if(o===Ov)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[sl]="t",i[Nu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Lv]=this.scriptTagHolder.uniqueCallbackIdentifier),i[vu]=No,this.transportSessionId&&(i[yu]=this.transportSessionId),this.lastSessionId&&(i[Iu]=this.lastSessionId),this.applicationId&&(i[Cu]=this.applicationId),this.appCheckToken&&(i[qs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Eu.test(location.hostname)&&(i[wu]=bu);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gn.forceAllow_=!0}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){return gn.forceAllow_?!0:!gn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yv()&&!wv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Zc(n),r=_u(i,Bv);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[$v]="t",i[Pu]=e,i[Ru]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Do{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pv(),window[Dv+this.uniqueCallbackIdentifier]=e,window[xv+this.uniqueCallbackIdentifier]=n,this.myIFrame=Do.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){we("frame writing exception"),a.stack&&we(a.stack),we(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Pu]=this.myID,e[Ru]=this.myPW,e[Nu]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Du+i.length<=Ou;){const o=this.pendingSegs.shift();i=i+"&"+Mv+r+"="+o.seg+"&"+Fv+r+"="+o.ts+"&"+Uv+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(Hv)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=16384,jv=45e3;let yr=null;typeof MozWebSocket<"u"?yr=MozWebSocket:typeof WebSocket<"u"&&(yr=WebSocket);class Ge{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Li(this.connId),this.stats_=Oo(n),this.connURL=Ge.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[vu]=No,typeof location<"u"&&location.hostname&&Eu.test(location.hostname)&&(o[wu]=bu),n&&(o[yu]=n),i&&(o[Iu]=i),r&&(o[qs]=r),s&&(o[Cu]=s),Au(e,Su,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zt.set("previous_websocket_failure",!0);try{let i;ou(),this.mySock=new yr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&yr!==null&&!Ge.forceDisallow_}static previouslyFailed(){return Zt.isInMemoryStorage||Zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=mi(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=_u(n,Vv);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jv))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ge.responsesRequiredToBeHealthy=2;Ge.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gn,Ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ge&&Ge.isAvailable();let i=n&&!Ge.previouslyFailed();if(e.webSocketOnly&&(n||xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ge];else{const r=this.transports_=[];for(const s of gi.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);gi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=6e4,qv=5e3,Gv=10*1024,Kv=100*1024,Cs="t",ol="d",Yv="s",al="r",Qv="e",ll="o",cl="a",ul="n",dl="p",Xv="h";class Jv{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Li("c:"+this.id+":"),this.transportManager_=new gi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ai(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kv?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cs in e){const n=e[Cs];n===cl?this.upgradeIfSecondaryHealthy_():n===al?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ll&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zn("t",e),i=Zn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ul,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zn("t",e),i=Zn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zn(Cs,e);if(ol in e){const i=e[ol];if(n===Xv){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===ul){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Yv?this.onConnectionShutdown_(i):n===al?this.onReset_(i):n===Qv?zs("Server Error: "+i):n===ll?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zs("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),No!==i&&xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ai(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ai(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Lu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!To()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wr}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=32,fl=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new Q("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $t(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function xo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Zv(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function ae(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Q)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Q(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function Re(t,e){const n=B(t),i=B(e);if(n===null)return e;if(n===i)return Re(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ey(t,e){const n=vi(t,0),i=vi(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=un(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function Lo(t,e){if($t(t)!==$t(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function He(t,e){let n=t.pieceNum_,i=e.pieceNum_;if($t(t)>$t(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ty{constructor(e,n){this.errorPrefix_=n,this.parts_=vi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=jr(this.parts_[i]);Fu(this)}}function ny(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jr(e),Fu(t)}function iy(t){const e=t.parts_.pop();t.byteLength_-=jr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fu(t){if(t.byteLength_>fl)throw new Error(t.errorPrefix_+"has a key path longer than "+fl+" bytes ("+t.byteLength_+").");if(t.parts_.length>hl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hl+") or object contains a cycle "+Qt(t))}function Qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Lu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Mo}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=1e3,ry=60*5*1e3,pl=30*1e3,sy=1.3,oy=3e4,ay="server_kill",ml=3;class gt extends xu{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gt.nextPersistentConnectionId_++,this.log_=Li("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ei,this.maxReconnectDelay_=ry,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ou())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(he(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Le,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;gt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rt(e,"w")){const i=kn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||z_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=j_(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zs("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oy&&(this.reconnectDelay_=ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+gt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Jv(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{xe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(ay)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&xe(d),l())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mr(this.interruptReasons_)&&(this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Ro(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Q(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ml&&(this.reconnectDelay_=pl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ml&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fu.replace(/\./g,"-")]=1,To()?e["framework.cordova"]=1:su()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wr.getInstance().currentlyOnline();return mr(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new W(Pn,e),r=new W(Pn,n);return this.compare(i,r)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi;class Uu extends Gr{static get __EMPTY_NODE(){return Zi}static set __EMPTY_NODE(e){Zi=e}compare(e,n){return un(e.name,n.name)}isDefinedOn(e){throw Ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(sn,Zi)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,Zi)}toString(){return".key"}}const bn=new Uu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??ve.RED,this.left=r??Oe.EMPTY_NODE,this.right=s??Oe.EMPTY_NODE}copy(e,n,i,r,s){return new ve(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class ly{copy(e,n,i,r,s){return this}insert(e,n,i){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new er(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new er(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new er(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new er(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t,e){return un(t.name,e.name)}function Fo(t,e){return un(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs;function uy(t){Gs=t}const $u=function(t){return typeof t=="number"?"number:"+gu(t):"string:"+t},Bu=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rt(e,".sv"),"Priority must be a string or number.")}else E(t===Gs||t.isEmpty(),"priority of unexpected type.");E(t===Gs||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bu(this.priorityNode_)}static set __childrenNodeConstructor(e){_l=e}static get __childrenNodeConstructor(){return _l}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:B(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=B(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(E(i!==".priority"||$t(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$u(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gu(this.value_):e+=this.value_,this.lazyHash_=mu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=_e.VALUE_TYPE_ORDER.indexOf(n),s=_e.VALUE_TYPE_ORDER.indexOf(i);return E(r>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu,Wu;function dy(t){Hu=t}function hy(t){Wu=t}class fy extends Gr{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?un(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(sn,new _e("[PRIORITY-POST]",Wu))}makePost(e,n){const i=Hu(e);return new W(n,new _e("[PRIORITY-POST]",i))}toString(){return".priority"}}const le=new fy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=Math.log(2);class my{constructor(e){const n=s=>parseInt(Math.log(s)/py,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const br=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new ve(h,d.node,ve.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=r(l,f),m=r(f+1,c);return d=t[f],h=n?n(d):d,new ve(h,d.node,ve.BLACK,p,m)}},s=function(l){let c=null,u=null,d=t.length;const h=function(p,m){const y=d-p,w=d;d-=p;const T=r(y+1,w),A=t[y],k=n?n(A):A;f(new ve(k,A.node,m,null,T))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));m?h(y,ve.BLACK):(h(y,ve.BLACK),h(y,ve.RED))}return u},o=new my(t.length),a=s(o);return new Oe(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;const mn={};class dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(mn&&le,"ChildrenNode.ts has not been loaded"),Ss=Ss||new dt({".priority":mn},{".priority":le}),Ss}get(e){const n=kn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return rt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=br(i,e.getCompare()):a=mn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new dt(u,c)}addToIndexes(e,n){const i=_r(this.indexes_,(r,s)=>{const o=kn(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),r===mn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),br(a,o.getCompare())}else return mn;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new dt(i,this.indexSet_)}removeFromIndexes(e,n){const i=_r(this.indexes_,r=>{if(r===mn)return r;{const s=n.get(e.name);return s?r.remove(new W(e.name,s)):r}});return new dt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;class L{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Bu(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ti||(ti=new L(new Oe(Fo),null,dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ti}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ti:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new W(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?ti:this.priorityNode_;return new L(r,o,s)}}updateChild(e,n){const i=B(e);if(i===null)return n;{E(B(e)!==".priority"||$t(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(ee(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(le,(o,a)=>{n[o]=a.val(e),i++,s&&L.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$u(this.getPriority().val())+":"),this.forEachChild(le,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":mu(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,W.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mi?-1:0}withIndex(e){if(e===bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(le),r=n.getIterator(le);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _y extends L{constructor(){super(new Oe(Fo),L.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Mi=new _y;Object.defineProperties(W,{MIN:{value:new W(Pn,L.EMPTY_NODE)},MAX:{value:new W(sn,Mi)}});Uu.__EMPTY_NODE=L.EMPTY_NODE;_e.__childrenNodeConstructor=L;uy(Mi);hy(Mi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=!0;function de(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,de(e))}if(!(t instanceof Array)&&gy){const n=[];let i=!1;if(be(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=de(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=br(n,cy,o=>o.name,Fo);if(i){const o=br(n,le.getCompare());return new L(s,de(e),new dt({".priority":o},{".priority":le}))}else return new L(s,de(e),dt.Default)}else{let n=L.EMPTY_NODE;return be(t,(i,r)=>{if(rt(t,i)&&i.substring(0,1)!=="."){const s=de(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(de(e))}}dy(de);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy extends Gr{constructor(e){super(),this.indexPath_=e,E(!H(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?un(e.name,n.name):s}makePost(e,n){const i=de(e),r=L.EMPTY_NODE.updateChild(this.indexPath_,i);return new W(n,r)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Mi);return new W(sn,e)}toString(){return vi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy extends Gr{compare(e,n){const i=e.node.compareTo(n.node);return i===0?un(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const i=de(e);return new W(n,i)}toString(){return".value"}}const wy=new yy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){return{type:"value",snapshotNode:t}}function Rn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function yi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function by(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(yi(n,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rn(n,i)):o.trackChildChange(wi(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(le,(r,s)=>{n.hasChild(r)||i.trackChildChange(yi(r,s))}),n.isLeafNode()||n.forEachChild(le,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(wi(r,s,o))}else i.trackChildChange(Rn(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.indexedFilter_=new Uo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bi.getStartPost_(e),this.endPost_=bi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,s,o){return this.matches(new W(n,i))||(i=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=L.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,a)=>{s.matches(new W(o,a))||(r=r.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new bi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new W(n,i))||(i=L.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const l=new W(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(wi(n,i,d)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(yi(n,d));const m=a.updateImmediateChild(n,L.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Rn(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(yi(c.name,c.node)),s.trackChildChange(Rn(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new $o;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Iy(t){return t.loadsAllData()?new Uo(t.getIndex()):t.hasLimit()?new Ey(t):new bi(t)}function gl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===wy?n="$value":t.index_===bn?n="$key":(E(t.index_ instanceof vy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=he(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+he(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=he(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+he(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends xu{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Li("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Er.getListenId_(e,i),a={};this.listens_[o]=a;const l=gl(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,i),kn(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const i=Er.getListenId_(e,n);delete this.listens_[i]}get(e){const n=gl(e._queryParams),i=e._path.toString(),r=new Le;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=mi(a.responseText)}catch{xe("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&xe("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){return{value:null,children:new Map}}function Bn(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=B(e);t.children.has(i)||t.children.set(i,Ir());const r=t.children.get(i);e=ee(e),Bn(r,e,n)}}function Ks(t,e){if(H(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(le,(i,r)=>{Bn(t,new Q(i),r)}),Ks(t,e)}}else if(t.children.size>0){const n=B(e);return e=ee(e),t.children.has(n)&&Ks(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Ys(t,e,n){t.value!==null?n(e,t.value):Sy(t,(i,r)=>{const s=new Q(e.toString()+"/"+i);Ys(r,s,n)})}function Sy(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=10*1e3,ky=30*1e3,Ay=5*60*1e3;class Py{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ty(e);const i=yl+(ky-yl)*Math.random();ai(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;be(e,(r,s)=>{s>0&&rt(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),ai(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ay))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function Bo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ho(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ye.ACK_USER_WRITE,this.source=Bo()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new Cr(G(),n,this.revert)}}else return E(B(this.path)===e,"operationForChild called for unrelated child."),new Cr(ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.source=e,this.path=n,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new Ei(this.source,G()):new Ei(this.source,ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ye.OVERWRITE}operationForChild(e){return H(this.path)?new on(this.source,G(),this.snap.getImmediateChild(e)):new on(this.source,ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ye.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new on(this.source,G(),n.value):new Nn(this.source,G(),n)}else return E(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Nn(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ny(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(by(o.childName,o.snapshotNode))}),ni(t,r,"child_removed",e,i,n),ni(t,r,"child_added",e,i,n),ni(t,r,"child_moved",s,i,n),ni(t,r,"child_changed",e,i,n),ni(t,r,"value",e,i,n),r}function ni(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Dy(t,a,l)),o.forEach(a=>{const l=Oy(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Oy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Dy(t,e,n){if(e.childName==null||n.childName==null)throw Ln("Should only compare child_ events.");const i=new W(e.childName,e.snapshotNode),r=new W(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t,e){return{eventCache:t,serverCache:e}}function li(t,e,n,i){return Kr(new Bt(e,n,i),t.serverCache)}function ju(t,e,n,i){return Kr(t.eventCache,new Bt(e,n,i))}function Sr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function an(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;const xy=()=>(Ts||(Ts=new Oe(vv)),Ts);class ie{constructor(e,n=xy()){this.value=e,this.children=n}static fromObject(e){let n=new ie(null);return be(e,(i,r)=>{n=n.set(new Q(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(H(e))return null;{const i=B(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(ee(e),n);return s!=null?{path:ae(new Q(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=B(e),i=this.children.get(n);return i!==null?i.subtree(ee(e)):new ie(null)}}set(e,n){if(H(e))return new ie(n,this.children);{const i=B(e),s=(this.children.get(i)||new ie(null)).set(ee(e),n),o=this.children.insert(i,s);return new ie(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=B(e),i=this.children.get(n);if(i){const r=i.remove(ee(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ie(null):new ie(this.value,s)}else return this}}get(e){if(H(e))return this.value;{const n=B(e),i=this.children.get(n);return i?i.get(ee(e)):null}}setTree(e,n){if(H(e))return n;{const i=B(e),s=(this.children.get(i)||new ie(null)).setTree(ee(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ie(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(ae(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(H(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(ee(e),ae(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,i){if(H(e))return this;{this.value&&i(n,this.value);const r=B(e),s=this.children.get(r);return s?s.foreachOnPath_(ee(e),ae(n,r),i):new ie(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(ae(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new ie(null))}}function ci(t,e,n){if(H(e))return new Xe(new ie(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Re(r,e);return s=s.updateChild(o,n),new Xe(t.writeTree_.set(r,s))}else{const r=new ie(n),s=t.writeTree_.setTree(e,r);return new Xe(s)}}}function Qs(t,e,n){let i=t;return be(n,(r,s)=>{i=ci(i,ae(e,r),s)}),i}function wl(t,e){if(H(e))return Xe.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new Xe(n)}}function Xs(t,e){return dn(t,e)!=null}function dn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Re(n.path,e)):null}function bl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(i,r)=>{e.push(new W(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new W(i,r.value))}),e}function Lt(t,e){if(H(e))return t;{const n=dn(t,e);return n!=null?new Xe(new ie(n)):new Xe(t.writeTree_.subtree(e))}}function Js(t){return t.writeTree_.isEmpty()}function On(t,e){return zu(G(),t.writeTree_,e)}function zu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=zu(ae(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ae(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t,e){return Yu(e,t)}function Ly(t,e,n,i,r){E(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=ci(t.visibleWrites,e,n)),t.lastWriteId=i}function My(t,e,n,i){E(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Qs(t.visibleWrites,e,n),t.lastWriteId=i}function Fy(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Uy(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$y(a,i.path)?r=!1:He(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return By(t),!0;if(i.snap)t.visibleWrites=wl(t.visibleWrites,i.path);else{const a=i.children;be(a,l=>{t.visibleWrites=wl(t.visibleWrites,ae(i.path,l))})}return!0}else return!1}function $y(t,e){if(t.snap)return He(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&He(ae(t.path,n),e))return!0;return!1}function By(t){t.visibleWrites=qu(t.allWrites,Hy,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Hy(t){return t.visible}function qu(t,e,n){let i=Xe.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)He(n,o)?(a=Re(n,o),i=ci(i,a,s.snap)):He(o,n)&&(a=Re(o,n),i=ci(i,G(),s.snap.getChild(a)));else if(s.children){if(He(n,o))a=Re(n,o),i=Qs(i,a,s.children);else if(He(o,n))if(a=Re(o,n),H(a))i=Qs(i,G(),s.children);else{const l=kn(s.children,B(a));if(l){const c=l.getChild(ee(a));i=ci(i,G(),c)}}}else throw Ln("WriteRecord should have .snap or .children")}}return i}function Gu(t,e,n,i,r){if(!i&&!r){const s=dn(t.visibleWrites,e);if(s!=null)return s;{const o=Lt(t.visibleWrites,e);if(Js(o))return n;if(n==null&&!Xs(o,G()))return null;{const a=n||L.EMPTY_NODE;return On(o,a)}}}else{const s=Lt(t.visibleWrites,e);if(!r&&Js(s))return n;if(!r&&n==null&&!Xs(s,G()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(He(c.path,e)||He(e,c.path))},a=qu(t.allWrites,o,e),l=n||L.EMPTY_NODE;return On(a,l)}}}function Wy(t,e,n){let i=L.EMPTY_NODE;const r=dn(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(le,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Lt(t.visibleWrites,e);return n.forEachChild(le,(o,a)=>{const l=On(Lt(s,new Q(o)),a);i=i.updateImmediateChild(o,l)}),bl(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Lt(t.visibleWrites,e);return bl(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Vy(t,e,n,i,r){E(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(Xs(t.visibleWrites,s))return null;{const o=Lt(t.visibleWrites,s);return Js(o)?r.getChild(n):On(o,r.getChild(n))}}function jy(t,e,n,i){const r=ae(e,n),s=dn(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Lt(t.visibleWrites,r);return On(o,i.getNode().getImmediateChild(n))}else return null}function zy(t,e){return dn(t.visibleWrites,e)}function qy(t,e,n,i,r,s,o){let a;const l=Lt(t.visibleWrites,e),c=dn(l,G());if(c!=null)a=c;else if(n!=null)a=On(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<r;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function Gy(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function Tr(t,e,n,i){return Gu(t.writeTree,t.treePath,e,n,i)}function Vo(t,e){return Wy(t.writeTree,t.treePath,e)}function El(t,e,n,i){return Vy(t.writeTree,t.treePath,e,n,i)}function kr(t,e){return zy(t.writeTree,ae(t.treePath,e))}function Ky(t,e,n,i,r,s){return qy(t.writeTree,t.treePath,e,n,i,r,s)}function jo(t,e,n){return jy(t.writeTree,t.treePath,e,n)}function Ku(t,e){return Yu(ae(t.treePath,e),t.writeTree)}function Yu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,wi(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,yi(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Rn(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,wi(i,e.snapshotNode,r.oldSnap));else throw Ln("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Qu=new Qy;class zo{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jo(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:an(this.viewCache_),s=Ky(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){return{filter:t}}function Jy(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Zy(t,e,n,i,r){const s=new Yy;let o,a;if(n.type===Ye.OVERWRITE){const c=n;c.source.fromUser?o=Zs(t,e,c.path,c.snap,i,r,s):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!H(c.path),o=Ar(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Ye.MERGE){const c=n;c.source.fromUser?o=tw(t,e,c.path,c.children,i,r,s):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=eo(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Ye.ACK_USER_WRITE){const c=n;c.revert?o=rw(t,e,c.path,i,r,s):o=nw(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Ye.LISTEN_COMPLETE)o=iw(t,e,n.path,i,s);else throw Ln("Unknown operation type: "+n.type);const l=s.getChanges();return ew(e,o,l),{viewCache:o,changes:l}}function ew(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Sr(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Vu(Sr(e)))}}function Xu(t,e,n,i,r,s){const o=e.eventCache;if(kr(i,n)!=null)return e;{let a,l;if(H(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=an(e),u=c instanceof L?c:L.EMPTY_NODE,d=Vo(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Tr(i,an(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=B(n);if(c===".priority"){E($t(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=El(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ee(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=El(i,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=jo(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,s):a=o.getNode()}}return li(e,a,o.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function Ar(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(H(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=B(n);if(!l.isCompleteForPath(n)&&$t(n)>1)return e;const p=ee(n),y=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,p,Qu,null)}const d=ju(e,c,l.isFullyInitialized()||H(n),u.filtersNodes()),h=new zo(r,d,s);return Xu(t,d,n,r,h,a)}function Zs(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new zo(r,e,s);if(H(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=li(e,c,!0,t.filter.filtersNodes());else{const d=B(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=li(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ee(n),f=a.getNode().getImmediateChild(d);let p;if(H(h))p=i;else{const m=u.getCompleteChild(d);m!=null?xo(h)===".priority"&&m.getChild(Mu(h)).isEmpty()?p=m:p=m.updateChild(h,i):p=L.EMPTY_NODE}if(f.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=li(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Il(t,e){return t.eventCache.isCompleteForChild(e)}function tw(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=ae(n,l);Il(e,B(u))&&(a=Zs(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=ae(n,l);Il(e,B(u))||(a=Zs(t,a,u,c,r,s,o))}),a}function Cl(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function eo(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;H(n)?c=i:c=new ie(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=Cl(t,f,h);l=Ar(t,l,new Q(d),p,r,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),m=Cl(t,p,h);l=Ar(t,l,new Q(d),m,r,s,o,a)}}),l}function nw(t,e,n,i,r,s,o){if(kr(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(H(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ar(t,e,n,l.getNode().getChild(n),r,s,a,o);if(H(n)){let c=new ie(null);return l.getNode().forEachChild(bn,(u,d)=>{c=c.set(new Q(u),d)}),eo(t,e,n,c,r,s,a,o)}else return e}else{let c=new ie(null);return i.foreach((u,d)=>{const h=ae(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),eo(t,e,n,c,r,s,a,o)}}function iw(t,e,n,i,r){const s=e.serverCache,o=ju(e,s.getNode(),s.isFullyInitialized()||H(n),s.isFiltered());return Xu(t,o,n,i,Qu,r)}function rw(t,e,n,i,r,s){let o;if(kr(i,n)!=null)return e;{const a=new zo(i,e,r),l=e.eventCache.getNode();let c;if(H(n)||B(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Tr(i,an(e));else{const d=e.serverCache.getNode();E(d instanceof L,"serverChildren would be complete if leaf node"),u=Vo(i,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=B(n);let d=jo(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ee(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,L.EMPTY_NODE,ee(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Tr(i,an(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||kr(i,G())!=null,li(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Uo(i.getIndex()),s=Iy(i);this.processor_=Xy(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),u=new Bt(l,o.isFullyInitialized(),r.filtersNodes()),d=new Bt(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Kr(d,u),this.eventGenerator_=new Ry(this.query_)}get query(){return this.query_}}function ow(t){return t.viewCache_.serverCache.getNode()}function aw(t){return Sr(t.viewCache_)}function lw(t,e){const n=an(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function Sl(t){return t.eventRegistrations_.length===0}function cw(t,e){t.eventRegistrations_.push(e)}function Tl(t,e,n){const i=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function kl(t,e,n,i){e.type===Ye.MERGE&&e.source.queryId!==null&&(E(an(t.viewCache_),"We should always have a full cache before handling merges"),E(Sr(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=Zy(t.processor_,r,e,n,i);return Jy(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ju(t,s.changes,s.viewCache.eventCache.getNode(),null)}function uw(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{i.push(Rn(s,o))}),n.isFullyInitialized()&&i.push(Vu(n.getNode())),Ju(t,i,n.getNode(),e)}function Ju(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return Ny(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr;class Zu{constructor(){this.views=new Map}}function dw(t){E(!Pr,"__referenceConstructor has already been defined"),Pr=t}function hw(){return E(Pr,"Reference.ts has not been loaded"),Pr}function fw(t){return t.views.size===0}function qo(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return E(s!=null,"SyncTree gave us an op for an invalid query."),kl(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(kl(o,e,n,i));return s}}function ed(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Tr(n,r?i:null),l=!1;a?l=!0:i instanceof L?(a=Vo(n,i),l=!1):(a=L.EMPTY_NODE,l=!1);const c=Kr(new Bt(a,l,!1),new Bt(i,r,!1));return new sw(e,c)}return o}function pw(t,e,n,i,r,s){const o=ed(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),cw(o,n),uw(o,n)}function mw(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Ht(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Tl(c,n,i)),Sl(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Tl(l,n,i)),Sl(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ht(t)&&s.push(new(hw())(e._repo,e._path)),{removed:s,events:o}}function td(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mt(t,e){let n=null;for(const i of t.views.values())n=n||lw(i,e);return n}function nd(t,e){if(e._queryParams.loadsAllData())return Qr(t);{const i=e._queryIdentifier;return t.views.get(i)}}function id(t,e){return nd(t,e)!=null}function Ht(t){return Qr(t)!=null}function Qr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr;function _w(t){E(!Rr,"__referenceConstructor has already been defined"),Rr=t}function gw(){return E(Rr,"Reference.ts has not been loaded"),Rr}let vw=1;class Al{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=Gy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yw(t,e,n,i,r){return Ly(t.pendingWriteTree_,e,n,i,r),r?Hn(t,new on(Bo(),e,n)):[]}function ww(t,e,n,i){My(t.pendingWriteTree_,e,n,i);const r=ie.fromObject(n);return Hn(t,new Nn(Bo(),e,r))}function en(t,e,n=!1){const i=Fy(t.pendingWriteTree_,e);if(Uy(t.pendingWriteTree_,e)){let s=new ie(null);return i.snap!=null?s=s.set(G(),!0):be(i.children,o=>{s=s.set(new Q(o),!0)}),Hn(t,new Cr(i.path,s,n))}else return[]}function Fi(t,e,n){return Hn(t,new on(Ho(),e,n))}function bw(t,e,n){const i=ie.fromObject(n);return Hn(t,new Nn(Ho(),e,i))}function Ew(t,e){return Hn(t,new Ei(Ho(),e))}function Iw(t,e,n){const i=Go(t,n);if(i){const r=Ko(i),s=r.path,o=r.queryId,a=Re(s,e),l=new Ei(Wo(o),a);return Yo(t,s,l)}else return[]}function Nr(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||id(o,e))){const l=mw(o,e,n,i);fw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,f)=>Ht(f));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=Tw(h);for(let p=0;p<f.length;++p){const m=f[p],y=m.query,w=ld(t,m);t.listenProvider_.startListening(ui(y),Ii(t,y),w.hashFn,w.onComplete)}}}!d&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(ui(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(Xr(h));t.listenProvider_.stopListening(ui(h),f)}))}kw(t,c)}return a}function rd(t,e,n,i){const r=Go(t,i);if(r!=null){const s=Ko(r),o=s.path,a=s.queryId,l=Re(o,e),c=new on(Wo(a),l,n);return Yo(t,o,c)}else return[]}function Cw(t,e,n,i){const r=Go(t,i);if(r){const s=Ko(r),o=s.path,a=s.queryId,l=Re(o,e),c=ie.fromObject(n),u=new Nn(Wo(a),l,c);return Yo(t,o,u)}else return[]}function to(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(h,f)=>{const p=Re(h,r);s=s||Mt(f,p),o=o||Ht(f)});let a=t.syncPointTree_.get(r);a?(o=o||Ht(a),s=s||Mt(a,G())):(a=new Zu,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((f,p)=>{const m=Mt(p,G());m&&(s=s.updateImmediateChild(f,m))}));const c=id(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Xr(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Aw();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=Yr(t.pendingWriteTree_,r);let d=pw(a,e,n,u,s,l);if(!c&&!o&&!i){const h=nd(a,e);d=d.concat(Pw(t,e,h))}return d}function sd(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Re(o,e),c=Mt(a,l);if(c)return c});return Gu(r,e,s,n,!0)}function Sw(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Re(c,n);i=i||Mt(u,d)});let r=t.syncPointTree_.get(n);r?i=i||Mt(r,G()):(r=new Zu,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new Bt(i,!0,!1):null,a=Yr(t.pendingWriteTree_,e._path),l=ed(r,e,a,s?o.getNode():L.EMPTY_NODE,s);return aw(l)}function Hn(t,e){return od(e,t.syncPointTree_,null,Yr(t.pendingWriteTree_,G()))}function od(t,e,n,i){if(H(t.path))return ad(t,e,n,i);{const r=e.get(G());r!=null&&(n=Mt(r,G()));let s=[];const o=B(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=Ku(i,o);s=s.concat(od(a,l,null,u))}return r&&(s=s.concat(qo(r,t,i,n))),s}}function ad(t,e,n,i){const r=e.get(G());r!=null&&(n=Mt(r,G()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=Ku(i,o),u=t.operationForChild(o);u&&(s=s.concat(ad(u,a,null,c)))}),r&&(s=s.concat(qo(r,t,i,n))),s}function ld(t,e){const n=e.query,i=Ii(t,n);return{hashFn:()=>(ow(e)||L.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?Iw(t,n._path,i):Ew(t,n._path);{const s=bv(r,n);return Nr(t,n,null,s)}}}}function Ii(t,e){const n=Xr(e);return t.queryToTagMap.get(n)}function Xr(t){return t._path.toString()+"$"+t._queryIdentifier}function Go(t,e){return t.tagToQueryMap.get(e)}function Ko(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function Yo(t,e,n){const i=t.syncPointTree_.get(e);E(i,"Missing sync point for query tag that we're tracking");const r=Yr(t.pendingWriteTree_,e);return qo(i,n,r,null)}function Tw(t){return t.fold((e,n,i)=>{if(n&&Ht(n))return[Qr(n)];{let r=[];return n&&(r=td(n)),be(i,(s,o)=>{r=r.concat(o)}),r}})}function ui(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(gw())(t._repo,t._path):t}function kw(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Xr(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function Aw(){return vw++}function Pw(t,e,n){const i=e._path,r=Ii(t,e),s=ld(t,n),o=t.listenProvider_.startListening(ui(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)E(!Ht(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!H(c)&&u&&Ht(u))return[Qr(u).query];{let h=[];return u&&(h=h.concat(td(u).map(f=>f.query))),be(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ui(u),Ii(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Qo(n)}node(){return this.node_}}class Xo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Xo(this.syncTree_,n)}node(){return sd(this.syncTree_,this.path_)}}const Rw=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pl=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Nw(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ow(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Nw=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Ow=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&E(!1,"Unexpected increment value: "+i);const r=e.node();if(E(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},cd=function(t,e,n,i){return Jo(e,new Xo(n,t),i)},Dw=function(t,e,n){return Jo(t,new Qo(e),n)};function Jo(t,e,n){const i=t.getPriority().val(),r=Pl(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Pl(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new _e(a,de(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new _e(r))),o.forEachChild(le,(a,l)=>{const c=Jo(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ea(t,e){let n=e instanceof Q?e:new Q(e),i=t,r=B(n);for(;r!==null;){const s=kn(i.node.children,r)||{children:{},childCount:0};i=new Zo(r,i,s),n=ee(n),r=B(n)}return i}function Wn(t){return t.node.value}function ud(t,e){t.node.value=e,no(t)}function dd(t){return t.node.childCount>0}function xw(t){return Wn(t)===void 0&&!dd(t)}function Jr(t,e){be(t.node.children,(n,i)=>{e(new Zo(n,t,i))})}function hd(t,e,n,i){n&&!i&&e(t),Jr(t,r=>{hd(r,e,!0,i)}),n&&i&&e(t)}function Lw(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ui(t){return new Q(t.parent===null?t.name:Ui(t.parent)+"/"+t.name)}function no(t){t.parent!==null&&Mw(t.parent,t.name,t)}function Mw(t,e,n){const i=xw(n),r=rt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,no(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,no(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=/[\[\].#$\/\u0000-\u001F\u007F]/,Uw=/[\[\].#$\u0000-\u001F\u007F]/,ks=10*1024*1024,ta=function(t){return typeof t=="string"&&t.length!==0&&!Fw.test(t)},fd=function(t){return typeof t=="string"&&t.length!==0&&!Uw.test(t)},$w=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fd(t)},pd=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!qr(t)||t&&typeof t=="object"&&rt(t,".sv")},Rl=function(t,e,n,i){Zr(An(t,"value"),e,n)},Zr=function(t,e,n){const i=n instanceof Q?new ty(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qt(i));if(typeof e=="function")throw new Error(t+"contains a function "+Qt(i)+" with contents = "+e.toString());if(qr(e))throw new Error(t+"contains "+e.toString()+" "+Qt(i));if(typeof e=="string"&&e.length>ks/3&&jr(e)>ks)throw new Error(t+"contains a string greater than "+ks+" utf8 bytes "+Qt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(be(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ta(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ny(i,o),Zr(t,a,i),iy(i)}),r&&s)throw new Error(t+' contains ".value" child '+Qt(i)+" in addition to actual children.")}},Bw=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=vi(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ta(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ey);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&He(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},md=function(t,e,n,i){const r=An(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];be(e,(o,a)=>{const l=new Q(o);if(Zr(r,a,ae(n,l)),xo(l)===".priority"&&!pd(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),Bw(r,s)},Hw=function(t,e,n){if(qr(e))throw new Error(An(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!pd(e))throw new Error(An(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},_d=function(t,e,n,i){if(!fd(n))throw new Error(An(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ww=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_d(t,e,n)},tr=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Vw=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ta(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$w(n))throw new Error(An(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function na(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Lo(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function gd(t,e,n){na(t,n),vd(t,i=>Lo(i,e))}function it(t,e,n){na(t,n),vd(t,i=>He(i,e)||He(e,i))}function vd(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(zw(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zw(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();oi&&we("event: "+n.toString()),$n(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="repo_interrupt",Gw=25;class Kw{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jw,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ir(),this.transactionQueueTree_=new Zo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Yw(t,e,n){if(t.stats_=Oo(t.repoInfo_),t.forceRestClient_||Sv())t.server_=new Er(t.repoInfo_,(i,r,s,o)=>{Nl(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ol(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new gt(t.repoInfo_,e,(i,r,s,o)=>{Nl(t,i,r,s,o)},i=>{Ol(t,i)},i=>{Xw(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Rv(t.repoInfo_,()=>new Py(t.stats_,t.server_)),t.infoData_=new Cy,t.infoSyncTree_=new Al({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Fi(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ra(t,"connected",!1),t.serverSyncTree_=new Al({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);it(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function Qw(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ia(t){return Rw({timestamp:Qw(t)})}function Nl(t,e,n,i,r){t.dataUpdateCount++;const s=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=_r(n,c=>de(c));o=Cw(t.serverSyncTree_,s,l,r)}else{const l=de(n);o=rd(t.serverSyncTree_,s,l,r)}else if(i){const l=_r(n,c=>de(c));o=bw(t.serverSyncTree_,s,l)}else{const l=de(n);o=Fi(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ci(t,s)),it(t.eventQueue_,a,o)}function Ol(t,e){ra(t,"connected",e),e===!1&&eb(t)}function Xw(t,e){be(e,(n,i)=>{ra(t,n,i)})}function ra(t,e,n){const i=new Q("/.info/"+e),r=de(n);t.infoData_.updateSnapshot(i,r);const s=Fi(t.infoSyncTree_,i,r);it(t.eventQueue_,i,s)}function yd(t){return t.nextWriteId_++}function Jw(t,e,n){const i=Sw(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=de(r).withIndex(e._queryParams.getIndex());to(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Fi(t.serverSyncTree_,e._path,s);else{const a=Ii(t.serverSyncTree_,e);o=rd(t.serverSyncTree_,e._path,s,a)}return it(t.eventQueue_,e._path,o),Nr(t.serverSyncTree_,e,n,null,!0),s},r=>(es(t,"get for query "+he(e)+" failed: "+r),Promise.reject(new Error(r))))}function Zw(t,e,n,i){es(t,"update",{path:e.toString(),value:n});let r=!0;const s=ia(t),o={};if(be(n,(a,l)=>{r=!1,o[a]=cd(ae(e,a),de(l),t.serverSyncTree_,s)}),r)we("update() called with empty data.  Don't do anything."),ln(t,i,"ok",void 0);else{const a=yd(t),l=ww(t.serverSyncTree_,e,o,a);na(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||xe("update at "+e+" failed: "+c);const h=en(t.serverSyncTree_,a,!d),f=h.length>0?Ci(t,e):e;it(t.eventQueue_,f,h),ln(t,i,c,u)}),be(n,c=>{const u=Sd(t,ae(e,c));Ci(t,u)}),it(t.eventQueue_,e,[])}}function eb(t){es(t,"onDisconnectEvents");const e=ia(t),n=Ir();Ys(t.onDisconnect_,G(),(r,s)=>{const o=cd(r,s,t.serverSyncTree_,e);Bn(n,r,o)});let i=[];Ys(n,G(),(r,s)=>{i=i.concat(Fi(t.serverSyncTree_,r,s));const o=Sd(t,r);Ci(t,o)}),t.onDisconnect_=Ir(),it(t.eventQueue_,G(),i)}function tb(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&Ks(t.onDisconnect_,e),ln(t,n,i,r)})}function Dl(t,e,n,i){const r=de(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&Bn(t.onDisconnect_,e,r),ln(t,i,s,o)})}function nb(t,e,n,i,r){const s=de(n,i);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Bn(t.onDisconnect_,e,s),ln(t,r,o,a)})}function ib(t,e,n,i){if(mr(n)){we("onDisconnect().update() called with empty data.  Don't do anything."),ln(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(r,s)=>{r==="ok"&&be(n,(o,a)=>{const l=de(a);Bn(t.onDisconnect_,ae(e,o),l)}),ln(t,i,r,s)})}function rb(t,e,n){let i;B(e._path)===".info"?i=to(t.infoSyncTree_,e,n):i=to(t.serverSyncTree_,e,n),gd(t.eventQueue_,e._path,i)}function sb(t,e,n){let i;B(e._path)===".info"?i=Nr(t.infoSyncTree_,e,n):i=Nr(t.serverSyncTree_,e,n),gd(t.eventQueue_,e._path,i)}function wd(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qw)}function es(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function ln(t,e,n,i){e&&$n(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function bd(t,e,n){return sd(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function sa(t,e=t.transactionQueueTree_){if(e||ts(t,e),Wn(e)){const n=Id(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&ob(t,Ui(e),n)}else dd(e)&&Jr(e,n=>{sa(t,n)})}function ob(t,e,n){const i=n.map(c=>c.currentWriteId),r=bd(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Re(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{es(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(en(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ts(t,ea(t.transactionQueueTree_,e)),sa(t,t.transactionQueueTree_),it(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)$n(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{xe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ci(t,e)}},o)}function Ci(t,e){const n=Ed(t,e),i=Ui(n),r=Id(t,n);return ab(t,r,i),i}function ab(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Re(n,l.path);let u=!1,d;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(en(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Gw)u=!0,d="maxretry",r=r.concat(en(t.serverSyncTree_,l.currentWriteId,!0));else{const h=bd(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Zr("transaction failed: Data returned ",f,l.path);let p=de(f);typeof f=="object"&&f!=null&&rt(f,".priority")||(p=p.updatePriority(h.getPriority()));const y=l.currentWriteId,w=ia(t),T=Dw(p,h,w);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=T,l.currentWriteId=yd(t),o.splice(o.indexOf(y),1),r=r.concat(yw(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),r=r.concat(en(t.serverSyncTree_,y,!0))}else u=!0,d="nodata",r=r.concat(en(t.serverSyncTree_,l.currentWriteId,!0))}it(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}ts(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)$n(i[a]);sa(t,t.transactionQueueTree_)}function Ed(t,e){let n,i=t.transactionQueueTree_;for(n=B(e);n!==null&&Wn(i)===void 0;)i=ea(i,n),e=ee(e),n=B(e);return i}function Id(t,e){const n=[];return Cd(t,e,n),n.sort((i,r)=>i.order-r.order),n}function Cd(t,e,n){const i=Wn(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Jr(e,r=>{Cd(t,r,n)})}function ts(t,e){const n=Wn(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,ud(e,n.length>0?n:void 0)}Jr(e,i=>{ts(t,i)})}function Sd(t,e){const n=Ui(Ed(t,e)),i=ea(t.transactionQueueTree_,e);return Lw(i,r=>{As(t,r)}),As(t,i),hd(i,r=>{As(t,r)}),n}function As(t,e){const n=Wn(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(en(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ud(e,void 0):n.length=s+1,it(t.eventQueue_,Ui(e),r);for(let o=0;o<i.length;o++)$n(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function cb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const xl=function(t,e){const n=ub(t),i=n.namespace;n.domain==="firebase.com"&&yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_v();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ku(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Q(n.pathString)}},ub=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=lb(t.substring(u,d)));const h=cb(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class hb{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Le;return tb(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){tr("OnDisconnect.remove",this._path);const e=new Le;return Dl(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){tr("OnDisconnect.set",this._path),Rl("OnDisconnect.set",e,this._path);const n=new Le;return Dl(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){tr("OnDisconnect.setWithPriority",this._path),Rl("OnDisconnect.setWithPriority",e,this._path),Hw("OnDisconnect.setWithPriority",n);const i=new Le;return nb(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){tr("OnDisconnect.update",this._path),md("OnDisconnect.update",e,this._path);const n=new Le;return ib(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return H(this._path)?null:xo(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=vl(this._queryParams),n=Ro(e);return n==="{}"?"default":n}get _queryObject(){return vl(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof oa))return!1;const n=this._repo===e._repo,i=Lo(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zv(this._path)}}class Et extends oa{constructor(e,n){super(e,n,new $o,!1)}get parent(){const e=Mu(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Si{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),i=io(this.ref,e);return new Si(this._node.getChild(n),i,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Si(r,io(this.ref,i),le)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function nr(t,e){return t=Te(t),t._checkNotDeleted("ref"),e!==void 0?io(t._root,e):t._root}function io(t,e){return t=Te(t),B(t._path)===null?Ww("child","path",e):_d("child","path",e),new Et(t._repo,ae(t._path,e))}function pb(t){return t=Te(t),new fb(t._repo,t._path)}function Ll(t,e){md("update",e,t._path);const n=new Le;return Zw(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ml(t){t=Te(t);const e=new Td(()=>{}),n=new ns(e);return Jw(t._repo,t,n).then(i=>new Si(i,new Et(t._repo,t._path),t._queryParams.getIndex()))}class ns{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new db("value",this,new Si(e.snapshotNode,new Et(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hb(this,e,n):null}matches(e){return e instanceof ns?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mb(t,e,n,i,r){const s=new Td(n,void 0),o=new ns(s);return rb(t._repo,t,o),()=>sb(t._repo,t,o)}function Fl(t,e,n,i){return mb(t,"value",e)}dw(Et);_w(Et);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="FIREBASE_DATABASE_EMULATOR_HOST",ro={};let gb=!1;function vb(t,e,n,i){t.repoInfo_=new ku(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function yb(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xl(s,r),a=o.repoInfo,l;typeof process<"u"&&el&&(l=el[_b]),l?(s=`http://${l}?ns=${a.namespace}`,o=xl(s,r),a=o.repoInfo):o.repoInfo.secure;const c=new kv(t.name,t.options,e);Vw("Invalid Firebase Database URL",o),H(o.path)||yt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=bb(a,t,c,new Tv(t.name,n));return new Eb(u,t)}function wb(t,e){const n=ro[e];(!n||n[t.key]!==t)&&yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wd(t),delete n[t.key]}function bb(t,e,n,i){let r=ro[e.name];r||(r={},ro[e.name]=r);let s=r[t.toURLString()];return s&&yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Kw(t,gb,n,i),r[t.toURLString()]=s,s}class Eb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Yw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yt("Cannot call "+e+" on a deleted database.")}}function Ul(t=Po(),e){const n=Di(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=M_("database");i&&Ib(n,...i)}return n}function Ib(t,e,n,i={}){t=Te(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&yt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ar(ar.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:F_(i.mockUserToken,t.app.options.projectId);s=new ar(o)}vb(r,e,n,s)}function $l(t){t=Te(t),t._checkNotDeleted("goOffline"),wd(t._repo)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t){uv(Un),Ut(new vt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return yb(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),_t(tl,nl,t),_t(tl,nl,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb={".sv":"timestamp"};function Bl(){return Sb}function Ps(t){return{".sv":{increment:t}}}gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Cb();function aa(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function kd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tb=kd,Ad=new Mn("auth","Firebase",kd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new zr("@firebase/auth");function kb(t,...e){Or.logLevel<=Z.WARN&&Or.warn(`Auth (${Un}): ${t}`,...e)}function lr(t,...e){Or.logLevel<=Z.ERROR&&Or.error(`Auth (${Un}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,...e){throw la(t,...e)}function et(t,...e){return la(t,...e)}function Pd(t,e,n){const i=Object.assign(Object.assign({},Tb()),{[e]:n});return new Mn("auth","Firebase",i).create(e,{appName:t.name})}function Ft(t){return Pd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function la(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Ad.create(t,...e)}function M(t,e,...n){if(!t)throw la(e,...n)}function ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lr(e),new Error(e)}function wt(t,e){t||ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ab(){return Hl()==="http:"||Hl()==="https:"}function Hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ab()||U_()||"connection"in navigator)?navigator.onLine:!0}function Rb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.shortDelay=e,this.longDelay=n,wt(n>e,"Short delay should be less than long delay!"),this.isMobile=To()||su()}get(){return Pb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t,e){wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new $i(3e4,6e4);function hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vt(t,e,n,i,r={}){return Nd(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Fn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Rd.fetch()(Od(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Nd(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Nb),e);try{const r=new xb(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ir(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ir(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ir(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ir(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pd(t,u,c);Je(t,u)}}catch(r){if(r instanceof Wt)throw r;Je(t,"network-request-failed",{message:String(r)})}}async function is(t,e,n,i,r={}){const s=await Vt(t,e,n,i,r);return"mfaPendingCredential"in s&&Je(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Od(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ca(t.config,r):`${t.config.apiScheme}://${r}`}function Db(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(et(this.auth,"network-request-failed")),Ob.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ir(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=et(t,e,i);return r.customData._tokenResponse=n,r}function Wl(t){return t!==void 0&&t.enterprise!==void 0}class Lb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Db(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Mb(t,e){return Vt(t,"GET","/v2/recaptchaConfig",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function Dd(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ub(t,e=!1){const n=Te(t),i=await n.getIdToken(e),r=ua(i);M(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:di(Rs(r.auth_time)),issuedAtTime:di(Rs(r.iat)),expirationTime:di(Rs(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rs(t){return Number(t)*1e3}function ua(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return lr("JWT malformed, contained fewer than 3 sections"),null;try{const r=pr(n);return r?JSON.parse(r):(lr("Failed to decode base64 JWT payload"),null)}catch(r){return lr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Vl(t){const e=ua(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Wt&&$b(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function $b({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Ti(t,Dd(n,{idToken:i}));M(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xd(s.providerUserInfo):[],a=Wb(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oo(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Hb(t){const e=Te(t);await Dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wb(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function xd(t){return t.map(e=>{var{providerId:n}=e,i=aa(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e){const n=await Nd(t,{},async()=>{const i=Fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Od(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rd.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jb(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=Vl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Vb(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new En;return i&&(M(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(M(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ft{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=aa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ti(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ub(this,e)}reload(){return Hb(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Dr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(Ft(this.auth));const e=await this.getIdToken();return await Ti(this,Fb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:k,isAnonymous:_,providerData:S,stsTokenManager:b}=n;M(A&&b,e,"internal-error");const x=En.fromJSON(this.name,b);M(typeof A=="string",e,"internal-error"),St(d,e.name),St(h,e.name),M(typeof k=="boolean",e,"internal-error"),M(typeof _=="boolean",e,"internal-error"),St(f,e.name),St(p,e.name),St(m,e.name),St(y,e.name),St(w,e.name),St(T,e.name);const V=new ft({uid:A,auth:e,email:h,emailVerified:k,displayName:d,isAnonymous:_,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:x,createdAt:w,lastLoginAt:T});return S&&Array.isArray(S)&&(V.providerData=S.map(O=>Object.assign({},O))),y&&(V._redirectEventId=y),V}static async _fromIdTokenResponse(e,n,i=!1){const r=new En;r.updateFromServerResponse(n);const s=new ft({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Dr(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];M(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?xd(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new En;a.updateFromIdToken(i);const l=new ft({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new oo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Map;function pt(t){wt(t instanceof Function,"Expected a class definition");let e=jl.get(t);return e?(wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ld.type="NONE";const zl=Ld;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e,n){return`firebase:${t}:${e}:${n}`}class In{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=cr(this.userKey,r.apiKey,s),this.fullPersistenceKey=cr("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new In(pt(zl),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||pt(zl);const o=cr(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=ft._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new In(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new In(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ud(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Md(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bd(e))return"Blackberry";if(Hd(e))return"Webos";if(da(e))return"Safari";if((e.includes("chrome/")||Fd(e))&&!e.includes("edge/"))return"Chrome";if($d(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Md(t=Pe()){return/firefox\//i.test(t)}function da(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fd(t=Pe()){return/crios\//i.test(t)}function Ud(t=Pe()){return/iemobile/i.test(t)}function $d(t=Pe()){return/android/i.test(t)}function Bd(t=Pe()){return/blackberry/i.test(t)}function Hd(t=Pe()){return/webos/i.test(t)}function rs(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zb(t=Pe()){var e;return rs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qb(){return $_()&&document.documentMode===10}function Wd(t=Pe()){return rs(t)||$d(t)||Hd(t)||Bd(t)||/windows phone/i.test(t)||Ud(t)}function Gb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t,e=[]){let n;switch(t){case"Browser":n=ql(Pe());break;case"Worker":n=`${ql(Pe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Un}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",hn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=6;class Xb{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Qb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gl(this),this.idTokenSubscription=new Gl(this),this.beforeStateQueue=new Kb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ad,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await In.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dd(this,{idToken:e}),i=await ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(Ft(this));const n=e?Te(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(Ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(Ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yb(this),n=new Xb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await jb(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vn(t){return Te(t)}class Gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=G_(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zb(t){ss=t}function jd(t){return ss.loadJS(t)}function eE(){return ss.recaptchaEnterpriseScript}function tE(){return ss.gapiScript}function nE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const iE="recaptcha-enterprise",rE="NO_RECAPTCHA";class sE{constructor(e){this.type=iE,this.auth=Vn(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Mb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Lb(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;Wl(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(rE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&Wl(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=eE();l.length!==0&&(l+=a),jd(l).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Kl(t,e,n,i=!1){const r=new sE(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Yl(t,e,n,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Kl(t,e,n,n==="getOobCode");return i(t,s)}else return i(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kl(t,e,n,n==="getOobCode");return i(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t,e){const n=Di(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(gr(s,e??{}))return r;Je(r,"already-initialized")}return n.initialize({options:e})}function aE(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function lE(t,e,n){const i=Vn(t);M(i._canInitEmulator,i,"emulator-config-failed"),M(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=zd(e),{host:o,port:a}=cE(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),uE()}function zd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cE(t){const e=zd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Ql(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Ql(o)}}}function Ql(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,n){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function dE(t,e){return Vt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(t,e){return is(t,"POST","/v1/accounts:signInWithPassword",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}async function pE(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends ha{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ki(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new ki(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,n,"signInWithPassword",hE);case"emailLink":return fE(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,i,"signUpPassword",dE);case"emailLink":return pE(e,{idToken:n,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(t,e){return is(t,"POST","/v1/accounts:signInWithIdp",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="http://localhost";class cn extends ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=aa(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new cn(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Cn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cn(e,n)}buildRequest(){const e={requestUri:mE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gE(t){const e=ri(si(t)).link,n=e?ri(si(e)).deep_link_id:null,i=ri(si(t)).deep_link_id;return(i?ri(si(i)).link:null)||i||n||e||t}class fa{constructor(e){var n,i,r,s,o,a;const l=ri(si(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=_E((r=l.mode)!==null&&r!==void 0?r:null);M(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gE(e);try{return new fa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.providerId=jn.PROVIDER_ID}static credential(e,n){return ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=fa.parseLink(n);return M(i,"argument-error"),ki._fromEmailAndCode(e,i.code,i.tenantId)}}jn.PROVIDER_ID="password";jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends qd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Bi{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Pt.credential(n,i)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Bi{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Bi{constructor(){super("twitter.com")}static credential(e,n){return cn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Nt.credential(n,i)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await ft._fromIdTokenResponse(e,i,r),o=Xl(i);return new Dn({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Xl(i);return new Dn({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Xl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Wt{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,xr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new xr(e,n,i,r)}}function Gd(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xr._fromErrorAndOperation(t,s,e,i):s})}async function vE(t,e,n=!1){const i=await Ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dn._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(t,e,n=!1){const{auth:i}=t;if(ut(i.app))return Promise.reject(Ft(i));const r="reauthenticate";try{const s=await Ti(t,Gd(i,r,e,t),n);M(s.idToken,i,"internal-error");const o=ua(s.idToken);M(o,i,"internal-error");const{sub:a}=o;return M(t.uid===a,i,"user-mismatch"),Dn._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Je(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(t,e,n=!1){if(ut(t.app))return Promise.reject(Ft(t));const i="signIn",r=await Gd(t,i,e),s=await Dn._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function wE(t,e){return Kd(Vn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(t){const e=Vn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function EE(t,e,n){return ut(t.app)?Promise.reject(Ft(t)):wE(Te(t),jn.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&bE(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e){return Te(t).setPersistence(e)}function CE(t,e,n,i){return Te(t).onIdTokenChanged(e,n,i)}function SE(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function TE(t){return Te(t).signOut()}const Lr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lr,"1"),this.storage.removeItem(Lr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){const t=Pe();return da(t)||rs(t)}const AE=1e3,PE=10;class Qd extends Yd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kE()&&Gb(),this.fallbackToPolling=Wd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);qb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,PE):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},AE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qd.type="LOCAL";const RE=Qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends Yd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xd.type="SESSION";const pa=Xd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new os(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await NE(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ma("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function DE(t){tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function xE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ME(){return Jd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="firebaseLocalStorageDb",FE=1,Mr="firebaseLocalStorage",eh="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function as(t,e){return t.transaction([Mr],e?"readwrite":"readonly").objectStore(Mr)}function UE(){const t=indexedDB.deleteDatabase(Zd);return new Hi(t).toPromise()}function ao(){const t=indexedDB.open(Zd,FE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Mr,{keyPath:eh})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Mr)?e(i):(i.close(),await UE(),e(await ao()))})})}async function Jl(t,e,n){const i=as(t,!0).put({[eh]:e,value:n});return new Hi(i).toPromise()}async function $E(t,e){const n=as(t,!1).get(e),i=await new Hi(n).toPromise();return i===void 0?null:i.value}function Zl(t,e){const n=as(t,!0).delete(e);return new Hi(n).toPromise()}const BE=800,HE=3;class th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ao(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>HE)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(ME()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xE(),!this.activeServiceWorker)return;this.sender=new OE(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ao();return await Jl(e,Lr,"1"),await Zl(e,Lr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Jl(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>$E(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=as(r,!1).getAll();return new Hi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}th.type="LOCAL";const WE=th;new $i(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e){return e?pt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jE(t){return Kd(t.auth,new _a(t),t.bypassAuthState)}function zE(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),yE(n,new _a(t),t.bypassAuthState)}async function qE(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),vE(n,new _a(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jE;case"linkViaPopup":case"linkViaRedirect":return qE;case"reauthViaPopup":case"reauthViaRedirect":return zE;default:Je(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=new $i(2e3,1e4);class vn extends nh{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GE.get())};e()}}vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="pendingRedirect",ur=new Map;class YE extends nh{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ur.get(this.auth._key());if(!e){try{const i=await QE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ur.set(this.auth._key(),e)}return this.bypassAuthState||ur.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QE(t,e){const n=ZE(e),i=JE(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function XE(t,e){ur.set(t._key(),e)}function JE(t){return pt(t._redirectPersistence)}function ZE(t){return cr(KE,t.config.apiKey,t.name)}async function e0(t,e,n=!1){if(ut(t.app))return Promise.reject(Ft(t));const i=Vn(t),r=VE(i,e),o=await new YE(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=10*60*1e3;class n0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ih(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(et(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=t0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ec(e))}saveEventToCache(e){this.cachedEventUids.add(ec(e)),this.lastProcessedEventTime=Date.now()}}function ec(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ih({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ih(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(t,e={}){return Vt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o0=/^https?/;async function a0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await r0(t);for(const n of e)try{if(l0(n))return}catch{}Je(t,"unauthorized-domain")}function l0(t){const e=so(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!o0.test(n))return!1;if(s0.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=new $i(3e4,6e4);function tc(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function u0(t){return new Promise((e,n)=>{var i,r,s;function o(){tc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tc(),n(et(t,"network-request-failed"))},timeout:c0.get()})}if(!((r=(i=tt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)o();else{const a=nE("iframefcb");return tt()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},jd(`${tE()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw dr=null,e})}let dr=null;function d0(t){return dr=dr||u0(t),dr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=new $i(5e3,15e3),f0="__/auth/iframe",p0="emulator/auth/iframe",m0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function g0(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ca(e,p0):`https://${t.config.authDomain}/${f0}`,i={apiKey:e.apiKey,appName:t.name,v:Un},r=_0.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Fn(i).slice(1)}`}async function v0(t){const e=await d0(t),n=tt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:g0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m0,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=tt().setTimeout(()=>{s(o)},h0.get());function l(){tt().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},w0=500,b0=600,E0="_blank",I0="http://localhost";class nc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C0(t,e,n,i=w0,r=b0){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},y0),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Pe().toLowerCase();n&&(a=Fd(c)?E0:n),Md(c)&&(e=e||I0,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(zb(c)&&a!=="_self")return S0(e||"",a),new nc(null);const d=window.open(e||"",a,u);M(d,t,"popup-blocked");try{d.focus()}catch{}return new nc(d)}function S0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="__/auth/handler",k0="emulator/auth/handler",A0=encodeURIComponent("fac");async function ic(t,e,n,i,r,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Un,eventId:r};if(e instanceof qd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Bi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${A0}=${encodeURIComponent(l)}`:"";return`${P0(t)}?${Fn(a).slice(1)}${c}`}function P0({config:t}){return t.emulator?ca(t,k0):`https://${t.authDomain}/${T0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="webStorageSupport";class R0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pa,this._completeRedirectFn=e0,this._overrideRedirectResult=XE}async _openPopup(e,n,i,r){var s;wt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ic(e,n,i,so(),r);return C0(e,o,ma())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await ic(e,n,i,so(),r);return DE(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(wt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await v0(e),i=new n0(e);return n.register("authEvent",r=>(M(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ns,{type:Ns},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Ns];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=a0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wd()||da()||rs()}}const N0=R0;var rc="@firebase/auth",sc="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function x0(t){Ut(new vt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vd(t)},c=new Jb(i,r,s,l);return aE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ut(new vt("auth-internal",e=>{const n=Vn(e.getProvider("auth").getImmediate());return(i=>new O0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(rc,sc,D0(t)),_t(rc,sc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=5*60,M0=ru("authIdTokenMaxAge")||L0;let oc=null;const F0=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>M0)return;const r=n==null?void 0:n.token;oc!==r&&(oc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function U0(t=Po()){const e=Di(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oE(t,{popupRedirectResolver:N0,persistence:[WE,RE,pa]}),i=ru("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=F0(s.toString());SE(n,o,()=>o(n.currentUser)),CE(n,a=>o(a))}}const r=nu("auth");return r&&lE(n,`http://${r}`),n}function $0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Zb({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=et("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",$0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});x0("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map,rh={activated:!1,tokenObservers:[]},B0={initialized:!1,enabled:!1};function fe(t){return lo.get(t)||Object.assign({},rh)}function H0(t,e){return lo.set(t,e),lo.get(t)}function ls(){return B0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="https://content-firebaseappcheck.googleapis.com/v1",W0="exchangeRecaptchaV3Token",V0="exchangeDebugToken",ac={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},j0=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Le,this.pending.promise.catch(n=>{}),await q0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Le,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function q0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},De=new Mn("appCheck","AppCheck",G0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function ga(t){if(!fe(t).activated)throw De.create("use-before-activation",{appName:t.name})}function oh(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),i=Math.floor((e-n*3600*24)/3600),r=Math.floor((e-n*3600*24-i*3600)/60),s=e-n*3600*24-i*3600-r*60;let o="";return n&&(o+=rr(n)+"d:"),i&&(o+=rr(i)+"h:"),o+=rr(r)+"m:"+rr(s)+"s",o}function rr(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va({url:t,body:e},n){const i={"Content-Type":"application/json"},r=n.getImmediate({optional:!0});if(r){const d=await r.getHeartbeatsHeader();d&&(i["X-Firebase-Client"]=d)}const s={method:"POST",body:JSON.stringify(e),headers:i};let o;try{o=await fetch(t,s)}catch(d){throw De.create("fetch-network-error",{originalErrorMessage:d==null?void 0:d.message})}if(o.status!==200)throw De.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(d){throw De.create("fetch-parse-error",{originalErrorMessage:d==null?void 0:d.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw De.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(l[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+c,issuedAtTimeMillis:u}}function K0(t,e){const{projectId:n,appId:i,apiKey:r}=t.options;return{url:`${sh}/projects/${n}/apps/${i}:${W0}?key=${r}`,body:{recaptcha_v3_token:e}}}function ah(t,e){const{projectId:n,appId:i,apiKey:r}=t.options;return{url:`${sh}/projects/${n}/apps/${i}:${V0}?key=${r}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="firebase-app-check-database",Q0=1,Ai="firebase-app-check-store",lh="debug-token";let sr=null;function ch(){return sr||(sr=new Promise((t,e)=>{try{const n=indexedDB.open(Y0,Q0);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var r;e(De.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(Ai,{keyPath:"compositeKey"})}}}catch(n){e(De.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),sr)}function X0(t){return dh(hh(t))}function J0(t,e){return uh(hh(t),e)}function Z0(t){return uh(lh,t)}function eI(){return dh(lh)}async function uh(t,e){const i=(await ch()).transaction(Ai,"readwrite"),s=i.objectStore(Ai).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var c;a(De.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}async function dh(t){const n=(await ch()).transaction(Ai,"readonly"),r=n.objectStore(Ai).get(t);return new Promise((s,o)=>{r.onsuccess=a=>{const l=a.target.result;s(l?l.value:void 0)},n.onerror=a=>{var l;o(De.create("storage-get",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))}})}function hh(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new zr("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t){if(ko()){let e;try{e=await X0(t)}catch(n){Pi.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Os(t,e){return ko()?J0(t,e).catch(n=>{Pi.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function nI(){let t;try{t=await eI()}catch{}if(t)return t;{const e=X_();return Z0(e).catch(n=>Pi.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(){return ls().enabled}async function wa(){const t=ls();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function iI(){const t=tu(),e=ls();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new Le;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(nI())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={error:"UNKNOWN_ERROR"};function sI(t){return Vr.encodeString(JSON.stringify(t),!1)}async function co(t,e=!1){const n=t.app;ga(n);const i=fe(n);let r=i.token,s;if(r&&!yn(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(yn(l)?r=l:await Os(n,void 0))}if(!e&&r&&yn(r))return{token:r.token};let o=!1;if(ya()){i.exchangeTokenPromise||(i.exchangeTokenPromise=va(ah(n,await wa()),t.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),o=!0);const l=await i.exchangeTokenPromise;return await Os(n,l),i.token=l,{token:l.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await fe(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Pi.warn(l.message):Pi.error(l),s=l}let a;return r?s?yn(r)?a={token:r.token,internalError:s}:a=uc(s):(a={token:r.token},i.token=r,await Os(n,r)):a=uc(s),o&&mh(n,a),a}async function oI(t){const e=t.app;ga(e);const{provider:n}=fe(e);if(ya()){const i=await wa(),{token:r}=await va(ah(e,i),t.heartbeatServiceProvider);return{token:r}}else{const{token:i}=await n.getToken();return{token:i}}}function fh(t,e,n,i){const{app:r}=t,s=fe(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&yn(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),cc(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>cc(t))}function ph(t,e){const n=fe(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function cc(t){const{app:e}=t,n=fe(e);let i=n.tokenRefresher;i||(i=aI(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function aI(t){const{app:e}=t;return new z0(async()=>{const n=fe(e);let i;if(n.token?i=await co(t,!0):i=await co(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=fe(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},ac.RETRIAL_MIN_WAIT,ac.RETRIAL_MAX_WAIT)}function mh(t,e){const n=fe(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function yn(t){return t.expireTimeMillis-Date.now()>0}function uc(t){return{token:sI(rI),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=fe(this.app);for(const n of e)ph(this.app,n.next);return Promise.resolve()}}function cI(t,e){return new lI(t,e)}function uI(t){return{getToken:e=>co(t,e),getLimitedUseToken:()=>oI(t),addTokenListener:e=>fh(t,"INTERNAL",e),removeTokenListener:e=>ph(t.app,e)}}const dI="@firebase/app-check",hI="0.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="https://www.google.com/recaptcha/api.js";function pI(t,e){const n=new Le,i=fe(t);i.reCAPTCHAState={initialized:n};const r=mI(t),s=lc(!1);return s?dc(t,e,s,r,n):vI(()=>{const o=lc(!1);if(!o)throw new Error("no recaptcha");dc(t,e,o,r,n)}),n.promise}function dc(t,e,n,i,r){n.ready(()=>{gI(t,e,n,i),r.resolve(n)})}function mI(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function _I(t){ga(t);const n=await fe(t).reCAPTCHAState.initialized.promise;return new Promise((i,r)=>{const s=fe(t).reCAPTCHAState;n.ready(()=>{i(n.execute(s.widgetId,{action:"fire_app_check"}))})})}function gI(t,e,n,i){const r=n.render(i,{sitekey:e,size:"invisible",callback:()=>{fe(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{fe(t).reCAPTCHAState.succeeded=!1}}),s=fe(t);s.reCAPTCHAState=Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:r})}function vI(t){const e=document.createElement("script");e.src=fI,e.onload=t,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,i;wI(this._throttleData);const r=await _I(this._app).catch(o=>{throw De.create("recaptcha-error")});if(!(!((e=fe(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw De.create("recaptcha-error");let s;try{s=await va(K0(this._app,r),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=yI(Number((i=o.customData)===null||i===void 0?void 0:i.httpStatus),this._throttleData),De.create("throttled",{time:oh(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=Di(e,"heartbeat"),pI(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof ba?this._siteKey===e._siteKey:!1}}function yI(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+j0,httpStatus:t};{const n=e?e.backoffCount:0,i=ng(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+i,httpStatus:t}}}function wI(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw De.create("throttled",{time:oh(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t=Po(),e){t=Te(t);const n=Di(t,"app-check");if(ls().initialized||iI(),ya()&&wa().then(r=>console.log(`App Check debug token: ${r}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(s.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&s.provider.isEqual(e.provider))return r;throw De.create("already-initialized",{appName:t.name})}const i=n.initialize({options:e});return EI(t,e.provider,e.isTokenAutoRefreshEnabled),fe(t).isTokenAutoRefreshEnabled&&fh(i,"INTERNAL",()=>{}),i}function EI(t,e,n){const i=H0(t,Object.assign({},rh));i.activated=!0,i.provider=e,i.cachedTokenPromise=tI(t).then(r=>(r&&yn(r)&&(i.token=r,mh(t,{token:r.token})),r)),i.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,i.provider.initialize(t)}const II="app-check",hc="app-check-internal";function CI(){Ut(new vt(II,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return cI(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(hc).initialize()})),Ut(new vt(hc,t=>{const e=t.getProvider("app-check").getImmediate();return uI(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),_t(dI,hI)}CI();var jt={},re={},ye={};Object.defineProperty(ye,"__esModule",{value:!0});ye.output=ye.exists=ye.hash=ye.bytes=ye.bool=ye.number=ye.isBytes=void 0;function Fr(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`positive integer expected, not ${t}`)}ye.number=Fr;function _h(t){if(typeof t!="boolean")throw new Error(`boolean expected, not ${t}`)}ye.bool=_h;function gh(t){return t instanceof Uint8Array||t!=null&&typeof t=="object"&&t.constructor.name==="Uint8Array"}ye.isBytes=gh;function Ea(t,...e){if(!gh(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)}ye.bytes=Ea;function vh(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Fr(t.outputLen),Fr(t.blockLen)}ye.hash=vh;function yh(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}ye.exists=yh;function wh(t,e){Ea(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}ye.output=wh;const SI={number:Fr,bool:_h,bytes:Ea,hash:vh,exists:yh,output:wh};ye.default=SI;var F={};Object.defineProperty(F,"__esModule",{value:!0});F.add5L=F.add5H=F.add4H=F.add4L=F.add3H=F.add3L=F.add=F.rotlBL=F.rotlBH=F.rotlSL=F.rotlSH=F.rotr32L=F.rotr32H=F.rotrBL=F.rotrBH=F.rotrSL=F.rotrSH=F.shrSL=F.shrSH=F.toBig=F.split=F.fromBig=void 0;const or=BigInt(2**32-1),uo=BigInt(32);function Ia(t,e=!1){return e?{h:Number(t&or),l:Number(t>>uo&or)}:{h:Number(t>>uo&or)|0,l:Number(t&or)|0}}F.fromBig=Ia;function bh(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let r=0;r<t.length;r++){const{h:s,l:o}=Ia(t[r],e);[n[r],i[r]]=[s,o]}return[n,i]}F.split=bh;const Eh=(t,e)=>BigInt(t>>>0)<<uo|BigInt(e>>>0);F.toBig=Eh;const Ih=(t,e,n)=>t>>>n;F.shrSH=Ih;const Ch=(t,e,n)=>t<<32-n|e>>>n;F.shrSL=Ch;const Sh=(t,e,n)=>t>>>n|e<<32-n;F.rotrSH=Sh;const Th=(t,e,n)=>t<<32-n|e>>>n;F.rotrSL=Th;const kh=(t,e,n)=>t<<64-n|e>>>n-32;F.rotrBH=kh;const Ah=(t,e,n)=>t>>>n-32|e<<64-n;F.rotrBL=Ah;const Ph=(t,e)=>e;F.rotr32H=Ph;const Rh=(t,e)=>t;F.rotr32L=Rh;const Nh=(t,e,n)=>t<<n|e>>>32-n;F.rotlSH=Nh;const Oh=(t,e,n)=>e<<n|t>>>32-n;F.rotlSL=Oh;const Dh=(t,e,n)=>e<<n-32|t>>>64-n;F.rotlBH=Dh;const xh=(t,e,n)=>t<<n-32|e>>>64-n;F.rotlBL=xh;function Lh(t,e,n,i){const r=(e>>>0)+(i>>>0);return{h:t+n+(r/2**32|0)|0,l:r|0}}F.add=Lh;const Mh=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0);F.add3L=Mh;const Fh=(t,e,n,i)=>e+n+i+(t/2**32|0)|0;F.add3H=Fh;const Uh=(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0);F.add4L=Uh;const $h=(t,e,n,i,r)=>e+n+i+r+(t/2**32|0)|0;F.add4H=$h;const Bh=(t,e,n,i,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(r>>>0);F.add5L=Bh;const Hh=(t,e,n,i,r,s)=>e+n+i+r+s+(t/2**32|0)|0;F.add5H=Hh;const TI={fromBig:Ia,split:bh,toBig:Eh,shrSH:Ih,shrSL:Ch,rotrSH:Sh,rotrSL:Th,rotrBH:kh,rotrBL:Ah,rotr32H:Ph,rotr32L:Rh,rotlSH:Nh,rotlSL:Oh,rotlBH:Dh,rotlBL:xh,add:Lh,add3L:Mh,add3H:Fh,add4L:Uh,add4H:$h,add5H:Hh,add5L:Bh};F.default=TI;var Wh={},cs={};Object.defineProperty(cs,"__esModule",{value:!0});cs.crypto=void 0;cs.crypto=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;(function(t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(t,"__esModule",{value:!0}),t.randomBytes=t.wrapXOFConstructorWithOpts=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.byteSwap32=t.byteSwapIfBE=t.byteSwap=t.isLE=t.rotl=t.rotr=t.createView=t.u32=t.u8=t.isBytes=void 0;const e=cs,n=ye;function i(g){return g instanceof Uint8Array||g!=null&&typeof g=="object"&&g.constructor.name==="Uint8Array"}t.isBytes=i;const r=g=>new Uint8Array(g.buffer,g.byteOffset,g.byteLength);t.u8=r;const s=g=>new Uint32Array(g.buffer,g.byteOffset,Math.floor(g.byteLength/4));t.u32=s;const o=g=>new DataView(g.buffer,g.byteOffset,g.byteLength);t.createView=o;const a=(g,P)=>g<<32-P|g>>>P;t.rotr=a;const l=(g,P)=>g<<P|g>>>32-P>>>0;t.rotl=l,t.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;const c=g=>g<<24&4278190080|g<<8&16711680|g>>>8&65280|g>>>24&255;t.byteSwap=c,t.byteSwapIfBE=t.isLE?g=>g:g=>(0,t.byteSwap)(g);function u(g){for(let P=0;P<g.length;P++)g[P]=(0,t.byteSwap)(g[P])}t.byteSwap32=u;const d=Array.from({length:256},(g,P)=>P.toString(16).padStart(2,"0"));function h(g){(0,n.bytes)(g);let P="";for(let $=0;$<g.length;$++)P+=d[g[$]];return P}t.bytesToHex=h;const f={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function p(g){if(g>=f._0&&g<=f._9)return g-f._0;if(g>=f._A&&g<=f._F)return g-(f._A-10);if(g>=f._a&&g<=f._f)return g-(f._a-10)}function m(g){if(typeof g!="string")throw new Error("hex string expected, got "+typeof g);const P=g.length,$=P/2;if(P%2)throw new Error("padded hex string expected, got unpadded hex of length "+P);const U=new Uint8Array($);for(let j=0,te=0;j<$;j++,te+=2){const It=p(g.charCodeAt(te)),Ve=p(g.charCodeAt(te+1));if(It===void 0||Ve===void 0){const st=g[te]+g[te+1];throw new Error('hex string expected, got non-hex character "'+st+'" at index '+te)}U[j]=It*16+Ve}return U}t.hexToBytes=m;const y=async()=>{};t.nextTick=y;async function w(g,P,$){let U=Date.now();for(let j=0;j<g;j++){$(j);const te=Date.now()-U;te>=0&&te<P||(await(0,t.nextTick)(),U+=te)}}t.asyncLoop=w;function T(g){if(typeof g!="string")throw new Error(`utf8ToBytes expected string, got ${typeof g}`);return new Uint8Array(new TextEncoder().encode(g))}t.utf8ToBytes=T;function A(g){return typeof g=="string"&&(g=T(g)),(0,n.bytes)(g),g}t.toBytes=A;function k(...g){let P=0;for(let U=0;U<g.length;U++){const j=g[U];(0,n.bytes)(j),P+=j.length}const $=new Uint8Array(P);for(let U=0,j=0;U<g.length;U++){const te=g[U];$.set(te,j),j+=te.length}return $}t.concatBytes=k;class _{clone(){return this._cloneInto()}}t.Hash=_;const S={}.toString;function b(g,P){if(P!==void 0&&S.call(P)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(g,P)}t.checkOpts=b;function x(g){const P=U=>g().update(A(U)).digest(),$=g();return P.outputLen=$.outputLen,P.blockLen=$.blockLen,P.create=()=>g(),P}t.wrapConstructor=x;function V(g){const P=(U,j)=>g(j).update(A(U)).digest(),$=g({});return P.outputLen=$.outputLen,P.blockLen=$.blockLen,P.create=U=>g(U),P}t.wrapConstructorWithOpts=V;function O(g){const P=(U,j)=>g(j).update(A(U)).digest(),$=g({});return P.outputLen=$.outputLen,P.blockLen=$.blockLen,P.create=U=>g(U),P}t.wrapXOFConstructorWithOpts=O;function q(g=32){if(e.crypto&&typeof e.crypto.getRandomValues=="function")return e.crypto.getRandomValues(new Uint8Array(g));throw new Error("crypto.getRandomValues must be defined")}t.randomBytes=q})(Wh);Object.defineProperty(re,"__esModule",{value:!0});re.shake256=re.shake128=re.keccak_512=re.keccak_384=re.keccak_256=re.keccak_224=re.sha3_512=re.sha3_384=re.sha3_256=re.sha3_224=re.Keccak=re.keccakP=void 0;const _n=ye,Ri=F,lt=Wh,Vh=[],jh=[],zh=[],kI=BigInt(0),ii=BigInt(1),AI=BigInt(2),PI=BigInt(7),RI=BigInt(256),NI=BigInt(113);for(let t=0,e=ii,n=1,i=0;t<24;t++){[n,i]=[i,(2*n+3*i)%5],Vh.push(2*(5*i+n)),jh.push((t+1)*(t+2)/2%64);let r=kI;for(let s=0;s<7;s++)e=(e<<ii^(e>>PI)*NI)%RI,e&AI&&(r^=ii<<(ii<<BigInt(s))-ii);zh.push(r)}const[OI,DI]=(0,Ri.split)(zh,!0),fc=(t,e,n)=>n>32?(0,Ri.rotlBH)(t,e,n):(0,Ri.rotlSH)(t,e,n),pc=(t,e,n)=>n>32?(0,Ri.rotlBL)(t,e,n):(0,Ri.rotlSL)(t,e,n);function qh(t,e=24){const n=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let o=0;o<10;o++)n[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,l=(o+2)%10,c=n[l],u=n[l+1],d=fc(c,u,1)^n[a],h=pc(c,u,1)^n[a+1];for(let f=0;f<50;f+=10)t[o+f]^=d,t[o+f+1]^=h}let r=t[2],s=t[3];for(let o=0;o<24;o++){const a=jh[o],l=fc(r,s,a),c=pc(r,s,a),u=Vh[o];r=t[u],s=t[u+1],t[u]=l,t[u+1]=c}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)n[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=OI[i],t[1]^=DI[i]}n.fill(0)}re.keccakP=qh;class Wi extends lt.Hash{constructor(e,n,i,r=!1,s=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=i,this.enableXOF=r,this.rounds=s,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,_n.number)(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,lt.u32)(this.state)}keccak(){lt.isLE||(0,lt.byteSwap32)(this.state32),qh(this.state32,this.rounds),lt.isLE||(0,lt.byteSwap32)(this.state32),this.posOut=0,this.pos=0}update(e){(0,_n.exists)(this);const{blockLen:n,state:i}=this;e=(0,lt.toBytes)(e);const r=e.length;for(let s=0;s<r;){const o=Math.min(n-this.pos,r-s);for(let a=0;a<o;a++)i[this.pos++]^=e[s++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:i,blockLen:r}=this;e[i]^=n,n&128&&i===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){(0,_n.exists)(this,!1),(0,_n.bytes)(e),this.finish();const n=this.state,{blockLen:i}=this;for(let r=0,s=e.length;r<s;){this.posOut>=i&&this.keccak();const o=Math.min(i-this.posOut,s-r);e.set(n.subarray(this.posOut,this.posOut+o),r),this.posOut+=o,r+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return(0,_n.number)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,_n.output)(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:i,outputLen:r,rounds:s,enableXOF:o}=this;return e||(e=new Wi(n,i,r,o,s)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=s,e.suffix=i,e.outputLen=r,e.enableXOF=o,e.destroyed=this.destroyed,e}}re.Keccak=Wi;const zt=(t,e,n)=>(0,lt.wrapConstructor)(()=>new Wi(e,t,n));re.sha3_224=zt(6,144,224/8);re.sha3_256=zt(6,136,256/8);re.sha3_384=zt(6,104,384/8);re.sha3_512=zt(6,72,512/8);re.keccak_224=zt(1,144,224/8);re.keccak_256=zt(1,136,256/8);re.keccak_384=zt(1,104,384/8);re.keccak_512=zt(1,72,512/8);const Gh=(t,e,n)=>(0,lt.wrapXOFConstructorWithOpts)((i={})=>new Wi(e,t,i.dkLen===void 0?n:i.dkLen,!0));re.shake128=Gh(31,168,128/8);re.shake256=Gh(31,136,256/8);const{sha3_512:xI}=re,Kh=24,hi=32,ho=(t=4,e=Math.random)=>{let n="";for(;n.length<t;)n=n+Math.floor(e()*36).toString(36);return n};function Yh(t){let e=8n,n=0n;for(const i of t.values()){const r=BigInt(i);n=(n<<e)+r}return n}const Qh=(t="")=>Yh(xI(t)).toString(36).slice(1),mc=Array.from({length:26},(t,e)=>String.fromCharCode(e+97)),LI=t=>mc[Math.floor(t()*mc.length)],Xh=({globalObj:t=typeof Da<"u"?Da:typeof window<"u"?window:{},random:e=Math.random}={})=>{const n=Object.keys(t).toString(),i=n.length?n+ho(hi,e):ho(hi,e);return Qh(i).substring(0,hi)},Jh=t=>()=>t++,MI=476782367,Zh=({random:t=Math.random,counter:e=Jh(Math.floor(t()*MI)),length:n=Kh,fingerprint:i=Xh({random:t})}={})=>function(){const s=LI(t),o=Date.now().toString(36),a=e().toString(36),l=ho(n,t),c=`${o+l+a+i}`;return`${s+Qh(c).substring(1,n)}`},FI=Zh(),UI=(t,{minLength:e=2,maxLength:n=hi}={})=>{const i=t.length,r=/^[0-9a-z]+$/;try{if(typeof t=="string"&&i>=e&&i<=n&&r.test(t))return!0}finally{}return!1};jt.getConstants=()=>({defaultLength:Kh,bigLength:hi});jt.init=Zh;jt.createId=FI;jt.bufToBigInt=Yh;jt.createCounter=Jh;jt.createFingerprint=Xh;jt.isCuid=UI;const{createId:$I,init:tC,getConstants:nC,isCuid:iC}=jt;var BI=$I;const HI={class:"bg-black min-h-[100dvh] w-full flex flex-col overflow-x-hidden"},WI={class:"w-[max(min(81%,640px),33.3333%)] aspect-[640/1080] relative left-1/2 -translate-x-1/2"},VI={class:"flex justify-center absolute items-center w-full aspect-video top-[9.07407407407%]"},jI={key:0,class:"size-full"},zI=["src"],qI={key:1,class:"text-white text-lg md:text-xl text-center flex flex-col gap-3"},GI=D("div",null,"Live belum dimulai",-1),KI={key:2,class:"text-white font-semibold px-4 text-center text-base md:text-lg lg:text-xl"},YI=D("div",{class:"absolute top-0 aspect-video w-[300%] left-1/2 -translate-x-1/2 -z-10"},[D("img",{class:"size-full object-cover",src:"https://static.showroom-live.com/image/room_background/default.png?v=3",alt:""})],-1),QI=D("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"},null,-1),rC=pe({__name:"index",setup(t){const e=v(!1),n=v(null),i={apiKey:"AIzaSyCmFoeQm28lLubMcuXjwfVrO2Grwn57E_s",authDomain:"showroom-shared.firebaseapp.com",projectId:"showroom-shared",storageBucket:"showroom-shared.appspot.com",messagingSenderId:"888402111940",appId:"1:888402111940:web:2d4ed3c66a21893c45c891",measurementId:"G-EEC924TW6T",databaseURL:"https://showroom-shared-default-rtdb.asia-southeast1.firebasedatabase.app/"},r=v(null),s=v(0),o=Qf(),a=v(0),l=v(),c=v(),u=uu(i);ce(()=>{const m=String(o.hash);if(m)try{Ds().public.debug_token&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=Ds().public.debug_token);const y=o_(m.replace("#","")),[w,T,A]=y.split(":");bI(u,{provider:new ba("6LefEccpAAAAANFbgY9zm6MQjhIiuYhvgamAG4dF"),isTokenAutoRefreshEnabled:!0});const k=Ul(u),_=U0(u);IE(_,pa).then(()=>EE(_,w,T)).then(async S=>{if(c.value=S,S.user.email!==w){await TE(_).catch(U=>null),window.location.reload();return}const b={device_count:Ps(-1),last_changed:Bl()},x={device_count:Ps(1),play_count:Ps(1),last_changed:Bl()},V=nr(k,`status/${S.user.uid}`),O=nr(k,`/premium_live/${A}`),q=nr(k,`/ticket/${S.user.uid}`),g=(await Ml(q)).val();a.value=Number.isNaN(g.max_device)?1:Number(g.max_device);const P=(await Ml(V)).val();l.value=P==null?void 0:P.refresh_key;let $;(P==null?void 0:P.device_count)>=a.value?e.value=!0:($=pb(V),$.update(b).then(function(){Ll(V,x)}),Fl(O,U=>{U.val()?(r.value=U.val(),s.value+=1):$l(k)})),Fl(V,U=>{var j;((j=U.val())==null?void 0:j.refresh_key)!==l.value&&(n.value="Kamu menekan tombol reset, silahkan refresh halaman ini",e.value=!0,$&&$.cancel().then(()=>{$l(k)}))})}).catch(S=>{console.error(S)})}catch(y){console.error(y)}});const d=v(!1);async function h(){d.value=!1;try{if(!c.value)return;const m=Ul(u),y=nr(m,`status/${c.value.user.uid}`);await Ll(y,{device_count:0,refresh_key:BI()})}catch(m){console.error(m)}}const f=N(()=>{var m;return((m=r.value)==null?void 0:m.title)??"Showroom Live"}),p=N(()=>{var m,y;return(y=(m=r.value)==null?void 0:m.streaming_url_list)==null?void 0:y.some(w=>Va(w.url))});return ep({title:f}),(m,y)=>{var _,S,b,x,V,O;const w=nm,T=n_,A=ip,k=A_;return z(),se("div",HI,[me(w,{"is-open":C(d),onClose:y[0]||(y[0]=()=>d.value=!1),onReset:h},null,8,["is-open"]),D("div",WI,[D("div",VI,[C(r)&&!C(e)&&((S=(_=C(r))==null?void 0:_.streaming_url_list)!=null&&S.length)?(z(),se("div",jI,[C(p)?(z(),se("iframe",{id:"ytplayer",key:`yt-${C(s)}`,type:"text/html",class:"size-full",src:(O=C(r).streaming_url_list.find(q=>("isYoutubeEmbedUrl"in m?m.isYoutubeEmbedUrl:C(Va))(q.url)))==null?void 0:O.url,frameborder:"0"},null,8,zI)):(z(),Tt(T,{key:C(s),class:"size-full",sources:((b=C(r))==null?void 0:b.streaming_url_list)??[],title:(x=C(r))==null?void 0:x.title,poster:(V=C(r))==null?void 0:V.image},null,8,["sources","title","poster"]))])):!C(e)&&C(r)?(z(),se("div",qI,[D("div",null,Be(C(r).title),1),GI])):ue("",!0),C(e)?(z(),se("div",KI,Be(C(n)??`Maaf pemutaran hanya
          untuk ${C(a)} device`),1)):ue("",!0),C(c)?(z(),se("button",{key:3,class:"absolute top-[calc(100%+14px)] md:top-[calc(100%+24px)] right-0 hover:bg-red-400/30 text-red-500 px-3 py-1 rounded-full",onClick:y[1]||(y[1]=()=>d.value=!0)},"Reset")):ue("",!0)]),YI,me(A,{to:"https://t.me/showroomlivebot",external:!0,target:"_blank",title:"Showroom Live Bot Telegram",class:"telegram-button absolute left-1/2 -translate-x-1/2 bottom-[41%] w-[10.5%] aspect-square rounded-full bg-red-500 hover:scale-110 transition-[box-shadow,transform] duration-300 origin-bottom"},{default:$e(()=>[QI]),_:1}),C(r)&&!C(e)?(z(),Tt(k,{key:0,time:C(r).start_at,class:"absolute left-1/2 -translate-x-1/2 top-[80%] md:top-[44.3%] text-white font-bold"},null,8,["time"])):ue("",!0)])])}}});export{rC as default};
