import{i as eh,r as E,w as Ae,a as $e,o as Pr,b as th,c as nh,d as ih,g as os,e as sh,u as wl,f as Ce,h as Nr,j as ge,k as x,l as El,m as fe,n as rh,p as oh,q as ah,s as he,t as lh,v as ch,x as uh,y as dh,z as hh,A as Qs,B as fh,C as ph,D as _h,E as Fe,F as gh,G as bl,H as Oe,I as mh,J as Il,T as vh,K as yh,L as Or,M as de,N as Js,O as Ct,P as kt,Q as j,R as At,S as Cl,U as wh,V as Eh,W as L,X as ve,Y as bh,Z as nt,_ as Le,$ as Bo,a0 as Ih}from"./_Y6vZy58.js";function Ch(t,e={}){const n=e.head||eh();if(n)return n.ssr?n.push(t,e):Th(n,t,e)}function Th(t,e,n={}){const i=E(!1),s=E({});Ae(()=>{s.value=i.value?{}:ih(e)});const r=t.push(s.value,n);return $e(s,a=>{r.patch(a)}),os()&&(Pr(()=>{r.dispose()}),th(()=>{i.value=!0}),nh(()=>{i.value=!1})),r}function Sh(t,e={}){return Ch(t,{...e,transform:sh})}async function Tl(t,e=wl()){const{path:n,matched:i}=e.resolve(t);if(!i.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>Tl(t,e));e._routePreloaded.add(n);const r=i.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of r){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const kh=Symbol.for("nuxt:client-only"),Ah="data-n-ids",Rh="-";function Ph(t){var s,r,o,a,l,c;if(typeof t!="string")throw new TypeError("[nuxt] [useId] key must be a string.");t=`n${t.slice(1)}`;const e=Nr(),n=os();if(!n)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");e._id||(e._id=0),n._nuxtIdIndex||(n._nuxtIdIndex={}),(s=n._nuxtIdIndex)[t]||(s[t]=0);const i=t+Rh+n._nuxtIdIndex[t]++;if(e.payload.serverRendered&&e.isHydrating&&!Ce(kh,!1)){const u=((r=n.vnode.el)==null?void 0:r.nodeType)===8&&((a=(o=n.vnode.el)==null?void 0:o.nextElementSibling)!=null&&a.getAttribute)?(l=n.vnode.el)==null?void 0:l.nextElementSibling:n.vnode.el,d=JSON.parse(((c=u==null?void 0:u.getAttribute)==null?void 0:c.call(u,Ah))||"{}");if(d[i])return d[i]}return t+"_"+e._id++}const Nh=(...t)=>t.find(e=>e!==void 0);function Oh(t){const e=t.componentName||"NuxtLink";function n(i,s){if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;if(typeof i=="string")return $o(i,t.trailingSlash);const r="path"in i&&i.path!==void 0?i.path:s(i).path;return{...i,name:void 0,path:$o(r,t.trailingSlash)}}return ge({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(i,{slots:s}){const r=wl(),o=Qs(),a=x(()=>{const p=i.to||i.href||"";return n(p,r.resolve)}),l=x(()=>typeof a.value=="string"&&El(a.value,{acceptRelative:!0})),c=x(()=>i.target&&i.target!=="_self"),u=x(()=>i.external||c.value?!0:typeof a.value=="object"?!1:a.value===""||l.value),d=E(!1),h=E(null),f=p=>{var g;h.value=i.custom?(g=p==null?void 0:p.$el)==null?void 0:g.nextElementSibling:p==null?void 0:p.$el};if(i.prefetch!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!xh()){const g=Nr();let v,b=null;fe(()=>{const C=Lh();rh(()=>{v=oh(()=>{var y;(y=h==null?void 0:h.value)!=null&&y.tagName&&(b=C.observe(h.value,async()=>{b==null||b(),b=null;const k=typeof a.value=="string"?a.value:r.resolve(a.value).fullPath;await Promise.all([g.hooks.callHook("link:prefetch",k).catch(()=>{}),!u.value&&Tl(a.value,r).catch(()=>{})]),d.value=!0}))})})}),Pr(()=>{v&&ah(v),b==null||b(),b=null})}return()=>{var b,C;if(!u.value){const y={ref:f,to:a.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(d.value&&(y.class=i.prefetchedClass||t.prefetchedClass),y.rel=i.rel||void 0),he(lh("RouterLink"),y,s.default)}const p=typeof a.value=="object"?((b=r.resolve(a.value))==null?void 0:b.href)??null:a.value&&!i.external&&!l.value?n(ch(o.app.baseURL,a.value),r.resolve):a.value||null,g=i.target||null,v=Nh(i.noRel?"":i.rel,t.externalRelAttribute,l.value||c.value?"noopener noreferrer":"")||null;if(i.custom){if(!s.default)return null;const y=()=>fh(p,{replace:i.replace,external:i.external});return s.default({href:p,navigate:y,get route(){if(!p)return;const k=uh(p);return{path:k.pathname,fullPath:k.pathname,get query(){return dh(k.search)},hash:k.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:p}},rel:v,target:g,isExternal:u.value,isActive:!1,isExactActive:!1})}return he("a",{ref:h,href:p,rel:v,target:g},(C=s.default)==null?void 0:C.call(s))}}})}const Dh=Oh(hh);function $o(t,e){const n=e==="append"?ph:_h;return El(t)&&!t.startsWith("http")?t:n(t,!0)}function Lh(){const t=Nr();if(t._observer)return t._observer;let e=null;const n=new Map,i=(r,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),n.set(r,o),e.observe(r),()=>{n.delete(r),e.unobserve(r),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:i}}function xh(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}let Mh=Symbol("headlessui.useid"),Fh=0;function as(){return Ce(Mh,()=>`${++Fh}`)()}let Sl=Symbol("Context");var be=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(be||{});function Uh(){return Dr()!==null}function Dr(){return Ce(Sl,null)}function Bh(t){Fe(Sl,t)}function ne(t){var e;if(t==null||t.value==null)return null;let n=(e=t.value.$el)!=null?e:t.value;return n instanceof Node?n:null}var $h=Object.defineProperty,Hh=(t,e,n)=>e in t?$h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ho=(t,e,n)=>(Hh(t,typeof e!="symbol"?e+"":e,n),n);let Wh=class{constructor(){Ho(this,"current",this.detect()),Ho(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ei=new Wh;function Ue(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let i=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Ue),i}var Oi=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Oi||{}),lt=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(lt||{});function He({visible:t=!0,features:e=0,ourProps:n,theirProps:i,...s}){var r;let o=Al(i,n),a=Object.assign(s,{props:o});if(t||e&2&&o.static)return Ns(a);if(e&1){let l=(r=o.unmount)==null||r?0:1;return Ue(l,{0(){return null},1(){return Ns({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Ns(a)}function Ns({props:t,attrs:e,slots:n,slot:i,name:s}){var r,o;let{as:a,...l}=Rl(t,["unmount","static"]),c=(r=n.default)==null?void 0:r.call(n,i),u={};if(i){let d=!1,h=[];for(let[f,p]of Object.entries(i))typeof p=="boolean"&&(d=!0),p===!0&&h.push(f);d&&(u["data-headlessui-state"]=h.join(" "))}if(a==="template"){if(c=kl(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...h]=c??[];if(!Vh(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(g=>g.trim()).filter((g,v,b)=>b.indexOf(g)===v).sort((g,v)=>g.localeCompare(v)).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let f=Al((o=d.props)!=null?o:{},l,u),p=gh(d,f,!0);for(let g in f)g.startsWith("on")&&(p.props||(p.props={}),p.props[g]=f[g]);return p}return Array.isArray(c)&&c.length===1?c[0]:c}return he(a,Object.assign({},l,u),{default:()=>c})}function kl(t){return t.flatMap(e=>e.type===bl?kl(e.children):[e])}function Al(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let i of t)for(let s in i)s.startsWith("on")&&typeof i[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(i[s])):e[s]=i[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(i=>[i,void 0])));for(let i in n)Object.assign(e,{[i](s,...r){let o=n[i];for(let a of o){if(s instanceof Event&&s.defaultPrevented)return;a(s,...r)}}});return e}function Rl(t,e=[]){let n=Object.assign({},t);for(let i of e)i in n&&delete n[i];return n}function Vh(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}function Lr(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function ti(){let t=[],e={addEventListener(n,i,s,r){return n.addEventListener(i,s,r),e.add(()=>n.removeEventListener(i,s,r))},requestAnimationFrame(...n){let i=requestAnimationFrame(...n);e.add(()=>cancelAnimationFrame(i))},nextFrame(...n){e.requestAnimationFrame(()=>{e.requestAnimationFrame(...n)})},setTimeout(...n){let i=setTimeout(...n);e.add(()=>clearTimeout(i))},microTask(...n){let i={current:!0};return Lr(()=>{i.current&&n[0]()}),e.add(()=>{i.current=!1})},style(n,i,s){let r=n.style.getPropertyValue(i);return Object.assign(n.style,{[i]:s}),this.add(()=>{Object.assign(n.style,{[i]:r})})},group(n){let i=ti();return n(i),this.add(()=>i.dispose())},add(n){return t.push(n),()=>{let i=t.indexOf(n);if(i>=0)for(let s of t.splice(i,1))s()}},dispose(){for(let n of t.splice(0))n()}};return e}function jh(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function Os(t,...e){t&&e.length>0&&t.classList.add(...e)}function fi(t,...e){t&&e.length>0&&t.classList.remove(...e)}var Xs=(t=>(t.Finished="finished",t.Cancelled="cancelled",t))(Xs||{});function zh(t,e){let n=ti();if(!t)return n.dispose;let{transitionDuration:i,transitionDelay:s}=getComputedStyle(t),[r,o]=[i,s].map(a=>{let[l=0]=a.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,u)=>u-c);return l});return r!==0?n.setTimeout(()=>e("finished"),r+o):e("finished"),n.add(()=>e("cancelled")),n.dispose}function Wo(t,e,n,i,s,r){let o=ti(),a=r!==void 0?jh(r):()=>{};return fi(t,...s),Os(t,...e,...n),o.nextFrame(()=>{fi(t,...n),Os(t,...i),o.add(zh(t,l=>(fi(t,...i,...e),Os(t,...s),a(l))))}),o.add(()=>fi(t,...e,...n,...i,...s)),o.add(()=>a("cancelled")),o.dispose}function It(t=""){return t.split(/\s+/).filter(e=>e.length>1)}let xr=Symbol("TransitionContext");var qh=(t=>(t.Visible="visible",t.Hidden="hidden",t))(qh||{});function Gh(){return Ce(xr,null)!==null}function Kh(){let t=Ce(xr,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function Yh(){let t=Ce(Mr,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}let Mr=Symbol("NestingContext");function ls(t){return"children"in t?ls(t.children):t.value.filter(({state:e})=>e==="visible").length>0}function Pl(t){let e=E([]),n=E(!1);fe(()=>n.value=!0),Oe(()=>n.value=!1);function i(r,o=lt.Hidden){let a=e.value.findIndex(({id:l})=>l===r);a!==-1&&(Ue(o,{[lt.Unmount](){e.value.splice(a,1)},[lt.Hidden](){e.value[a].state="hidden"}}),!ls(e)&&n.value&&(t==null||t()))}function s(r){let o=e.value.find(({id:a})=>a===r);return o?o.state!=="visible"&&(o.state="visible"):e.value.push({id:r,state:"visible"}),()=>i(r,lt.Unmount)}return{children:e,register:s,unregister:i}}let Nl=Oi.RenderStrategy,Ol=ge({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:i,expose:s}){let r=E(0);function o(){r.value|=be.Opening,e("beforeEnter")}function a(){r.value&=~be.Opening,e("afterEnter")}function l(){r.value|=be.Closing,e("beforeLeave")}function c(){r.value&=~be.Closing,e("afterLeave")}if(!Gh()&&Uh())return()=>he(Dl,{...t,onBeforeEnter:o,onAfterEnter:a,onBeforeLeave:l,onAfterLeave:c},i);let u=E(null),d=x(()=>t.unmount?lt.Unmount:lt.Hidden);s({el:u,$el:u});let{show:h,appear:f}=Kh(),{register:p,unregister:g}=Yh(),v=E(h.value?"visible":"hidden"),b={value:!0},C=as(),y={value:!1},k=Pl(()=>{!y.value&&v.value!=="hidden"&&(v.value="hidden",g(C),c())});fe(()=>{let w=p(C);Oe(w)}),Ae(()=>{if(d.value===lt.Hidden&&C){if(h.value&&v.value!=="visible"){v.value="visible";return}Ue(v.value,{hidden:()=>g(C),visible:()=>p(C)})}});let H=It(t.enter),z=It(t.enterFrom),P=It(t.enterTo),W=It(t.entered),Z=It(t.leave),A=It(t.leaveFrom),B=It(t.leaveTo);fe(()=>{Ae(()=>{if(v.value==="visible"){let w=ne(u);if(w instanceof Comment&&w.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function _(w){let M=b.value&&!f.value,R=ne(u);!R||!(R instanceof HTMLElement)||M||(y.value=!0,h.value&&o(),h.value||l(),w(h.value?Wo(R,H,z,P,W,U=>{y.value=!1,U===Xs.Finished&&a()}):Wo(R,Z,A,B,W,U=>{y.value=!1,U===Xs.Finished&&(ls(k)||(v.value="hidden",g(C),c()))})))}return fe(()=>{$e([h],(w,M,R)=>{_(R),b.value=!1},{immediate:!0})}),Fe(Mr,k),Bh(x(()=>Ue(v.value,{visible:be.Open,hidden:be.Closed})|r.value)),()=>{let{appear:w,show:M,enter:R,enterFrom:U,enterTo:Q,entered:re,leave:bt,leaveFrom:jt,leaveTo:G,...ee}=t,Te={ref:u},Se={...ee,...f.value&&h.value&&ei.isServer?{class:mh([n.class,ee.class,...H,...z])}:{}};return He({theirProps:Se,ourProps:Te,slot:{},slots:i,attrs:n,features:Nl,visible:v.value==="visible",name:"TransitionChild"})}}}),Qh=Ol,Dl=ge({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:i}){let s=Dr(),r=x(()=>t.show===null&&s!==null?(s.value&be.Open)===be.Open:t.show);Ae(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=E(r.value?"visible":"hidden"),a=Pl(()=>{o.value="hidden"}),l=E(!0),c={show:r,appear:x(()=>t.appear||!l.value)};return fe(()=>{Ae(()=>{l.value=!1,r.value?o.value="visible":ls(a)||(o.value="hidden")})}),Fe(Mr,a),Fe(xr,c),()=>{let u=Rl(t,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),d={unmount:t.unmount};return He({ourProps:{...d,as:"template"},theirProps:{},slot:{},slots:{...i,default:()=>[he(Qh,{onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave"),...n,...d,...u},i.default)]},attrs:{},features:Nl,visible:o.value==="visible",name:"Transition"})}}});function Ll(t,e,n,i){ei.isServer||Ae(s=>{t=t??window,t.addEventListener(e,n,i),s(()=>t.removeEventListener(e,n,i))})}function xl(t,e,n){ei.isServer||Ae(i=>{window.addEventListener(t,e,n),i(()=>window.removeEventListener(t,e,n))})}var An=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(An||{});function Jh(){let t=E(0);return xl("keydown",e=>{e.key==="Tab"&&(t.value=e.shiftKey?1:0)}),t}var Di=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Di||{});let Zs=ge({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{var i;let{features:s,...r}=t,o={"aria-hidden":(s&2)===2?!0:(i=r["aria-hidden"])!=null?i:void 0,hidden:(s&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return He({ourProps:o,theirProps:r,slot:{},attrs:n,slots:e,name:"Hidden"})}}});function Xh(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",e),e())}let Rt=[];Xh(()=>{function t(e){e.target instanceof HTMLElement&&e.target!==document.body&&Rt[0]!==e.target&&(Rt.unshift(e.target),Rt=Rt.filter(n=>n!=null&&n.isConnected),Rt.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function cn(t){if(ei.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=ne(t);if(e)return e.ownerDocument}return document}let er=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var it=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(it||{}),Ml=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(Ml||{}),Zh=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(Zh||{});function ef(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(er)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Fl=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Fl||{});function tf(t,e=0){var n;return t===((n=cn(t))==null?void 0:n.body)?!1:Ue(e,{0(){return t.matches(er)},1(){let i=t;for(;i!==null;){if(i.matches(er))return!0;i=i.parentElement}return!1}})}var nf=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(nf||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Dt(t){t==null||t.focus({preventScroll:!0})}let sf=["textarea","input"].join(",");function rf(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,sf))!=null?n:!1}function of(t,e=n=>n){return t.slice().sort((n,i)=>{let s=e(n),r=e(i);if(s===null||r===null)return 0;let o=s.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Si(t,e,{sorted:n=!0,relativeTo:i=null,skipElements:s=[]}={}){var r;let o=(r=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?r:document,a=Array.isArray(t)?n?of(t):t:ef(t);s.length>0&&a.length>1&&(a=a.filter(p=>!s.includes(p))),i=i??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(i))-1;if(e&4)return Math.max(0,a.indexOf(i))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,h=a.length,f;do{if(d>=h||d+h<=0)return 0;let p=c+d;if(e&16)p=(p+h)%h;else{if(p<0)return 3;if(p>=h)return 1}f=a[p],f==null||f.focus(u),d+=l}while(f!==o.activeElement);return e&6&&rf(f)&&f.select(),2}function Ul(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let e=new Set;for(let n of t.value){let i=ne(n);i instanceof HTMLElement&&e.add(i)}return e}var Bl=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(Bl||{});let wn=Object.assign(ge({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:E(new Set)}},inheritAttrs:!1,setup(t,{attrs:e,slots:n,expose:i}){let s=E(null);i({el:s,$el:s});let r=x(()=>cn(s)),o=E(!1);fe(()=>o.value=!0),Oe(()=>o.value=!1),lf({ownerDocument:r},x(()=>o.value&&!!(t.features&16)));let a=cf({ownerDocument:r,container:s,initialFocus:x(()=>t.initialFocus)},x(()=>o.value&&!!(t.features&2)));uf({ownerDocument:r,container:s,containers:t.containers,previousActiveElement:a},x(()=>o.value&&!!(t.features&8)));let l=Jh();function c(f){let p=ne(s);p&&(g=>g())(()=>{Ue(l.value,{[An.Forwards]:()=>{Si(p,it.First,{skipElements:[f.relatedTarget]})},[An.Backwards]:()=>{Si(p,it.Last,{skipElements:[f.relatedTarget]})}})})}let u=E(!1);function d(f){f.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function h(f){if(!o.value)return;let p=Ul(t.containers);ne(s)instanceof HTMLElement&&p.add(ne(s));let g=f.relatedTarget;g instanceof HTMLElement&&g.dataset.headlessuiFocusGuard!=="true"&&($l(p,g)||(u.value?Si(ne(s),Ue(l.value,{[An.Forwards]:()=>it.Next,[An.Backwards]:()=>it.Previous})|it.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&Dt(f.target)))}return()=>{let f={},p={ref:s,onKeydown:d,onFocusout:h},{features:g,initialFocus:v,containers:b,...C}=t;return he(bl,[!!(g&4)&&he(Zs,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:Di.Focusable}),He({ourProps:p,theirProps:{...e,...C},slot:f,attrs:e,slots:n,name:"FocusTrap"}),!!(g&4)&&he(Zs,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:Di.Focusable})])}}}),{features:Bl});function af(t){let e=E(Rt.slice());return $e([t],([n],[i])=>{i===!0&&n===!1?Lr(()=>{e.value.splice(0)}):i===!1&&n===!0&&(e.value=Rt.slice())},{flush:"post"}),()=>{var n;return(n=e.value.find(i=>i!=null&&i.isConnected))!=null?n:null}}function lf({ownerDocument:t},e){let n=af(e);fe(()=>{Ae(()=>{var i,s;e.value||((i=t.value)==null?void 0:i.activeElement)===((s=t.value)==null?void 0:s.body)&&Dt(n())},{flush:"post"})}),Oe(()=>{e.value&&Dt(n())})}function cf({ownerDocument:t,container:e,initialFocus:n},i){let s=E(null),r=E(!1);return fe(()=>r.value=!0),Oe(()=>r.value=!1),fe(()=>{$e([e,n,i],(o,a)=>{if(o.every((c,u)=>(a==null?void 0:a[u])===c)||!i.value)return;let l=ne(e);l&&Lr(()=>{var c,u;if(!r.value)return;let d=ne(n),h=(c=t.value)==null?void 0:c.activeElement;if(d){if(d===h){s.value=h;return}}else if(l.contains(h)){s.value=h;return}d?Dt(d):Si(l,it.First|it.NoScroll)===Ml.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),s.value=(u=t.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),s}function uf({ownerDocument:t,container:e,containers:n,previousActiveElement:i},s){var r;Ll((r=t.value)==null?void 0:r.defaultView,"focus",o=>{if(!s.value)return;let a=Ul(n);ne(e)instanceof HTMLElement&&a.add(ne(e));let l=i.value;if(!l)return;let c=o.target;c&&c instanceof HTMLElement?$l(a,c)?(i.value=c,Dt(c)):(o.preventDefault(),o.stopPropagation(),Dt(l)):Dt(i.value)},!0)}function $l(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function df(t){let e=Il(t.getSnapshot());return Oe(t.subscribe(()=>{e.value=t.getSnapshot()})),e}function hf(t,e){let n=t(),i=new Set;return{getSnapshot(){return n},subscribe(s){return i.add(s),()=>i.delete(s)},dispatch(s,...r){let o=e[s].call(n,...r);o&&(n=o,i.forEach(a=>a()))}}}function ff(){let t;return{before({doc:e}){var n;let i=e.documentElement;t=((n=e.defaultView)!=null?n:window).innerWidth-i.clientWidth},after({doc:e,d:n}){let i=e.documentElement,s=i.clientWidth-i.offsetWidth,r=t-s;n.style(i,"paddingRight",`${r}px`)}}}function Hl(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function pf(){return/Android/gi.test(window.navigator.userAgent)}function _f(){return Hl()||pf()}function gf(){return Hl()?{before({doc:t,d:e,meta:n}){function i(s){return n.containers.flatMap(r=>r()).some(r=>r.contains(s))}e.microTask(()=>{var s;if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=ti();a.style(t.documentElement,"scrollBehavior","auto"),e.add(()=>e.microTask(()=>a.dispose()))}let r=(s=window.scrollY)!=null?s:window.pageYOffset,o=null;e.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let l=a.target.closest("a");if(!l)return;let{hash:c}=new URL(l.href),u=t.querySelector(c);u&&!i(u)&&(o=u)}catch{}},!0),e.addEventListener(t,"touchstart",a=>{if(a.target instanceof HTMLElement)if(i(a.target)){let l=a.target;for(;l.parentElement&&i(l.parentElement);)l=l.parentElement;e.style(l,"overscrollBehavior","contain")}else e.style(a.target,"touchAction","none")}),e.addEventListener(t,"touchmove",a=>{if(a.target instanceof HTMLElement)if(i(a.target)){let l=a.target;for(;l.parentElement&&l.dataset.headlessuiPortal!==""&&!(l.scrollHeight>l.clientHeight||l.scrollWidth>l.clientWidth);)l=l.parentElement;l.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()},{passive:!1}),e.add(()=>{var a;let l=(a=window.scrollY)!=null?a:window.pageYOffset;r!==l&&window.scrollTo(0,r),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function mf(){return{before({doc:t,d:e}){e.style(t.documentElement,"overflow","hidden")}}}function vf(t){let e={};for(let n of t)Object.assign(e,n(e));return e}let Pt=hf(()=>new Map,{PUSH(t,e){var n;let i=(n=this.get(t))!=null?n:{doc:t,count:0,d:ti(),meta:new Set};return i.count++,i.meta.add(e),this.set(t,i),this},POP(t,e){let n=this.get(t);return n&&(n.count--,n.meta.delete(e)),this},SCROLL_PREVENT({doc:t,d:e,meta:n}){let i={doc:t,d:e,meta:vf(n)},s=[gf(),ff(),mf()];s.forEach(({before:r})=>r==null?void 0:r(i)),s.forEach(({after:r})=>r==null?void 0:r(i))},SCROLL_ALLOW({d:t}){t.dispose()},TEARDOWN({doc:t}){this.delete(t)}});Pt.subscribe(()=>{let t=Pt.getSnapshot(),e=new Map;for(let[n]of t)e.set(n,n.documentElement.style.overflow);for(let n of t.values()){let i=e.get(n.doc)==="hidden",s=n.count!==0;(s&&!i||!s&&i)&&Pt.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&Pt.dispatch("TEARDOWN",n)}});function yf(t,e,n){let i=df(Pt),s=x(()=>{let r=t.value?i.value.get(t.value):void 0;return r?r.count>0:!1});return $e([t,e],([r,o],[a],l)=>{if(!r||!o)return;Pt.dispatch("PUSH",r,n);let c=!1;l(()=>{c||(Pt.dispatch("POP",a??r,n),c=!0)})},{immediate:!0}),s}let Ds=new Map,En=new Map;function Vo(t,e=E(!0)){Ae(n=>{var i;if(!e.value)return;let s=ne(t);if(!s)return;n(function(){var o;if(!s)return;let a=(o=En.get(s))!=null?o:1;if(a===1?En.delete(s):En.set(s,a-1),a!==1)return;let l=Ds.get(s);l&&(l["aria-hidden"]===null?s.removeAttribute("aria-hidden"):s.setAttribute("aria-hidden",l["aria-hidden"]),s.inert=l.inert,Ds.delete(s))});let r=(i=En.get(s))!=null?i:0;En.set(s,r+1),r===0&&(Ds.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),s.setAttribute("aria-hidden","true"),s.inert=!0)})}function pi(t,e,n){ei.isServer||Ae(i=>{document.addEventListener(t,e,n),i(()=>document.removeEventListener(t,e,n))})}function wf(t,e,n=x(()=>!0)){function i(r,o){if(!n.value||r.defaultPrevented)return;let a=o(r);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:ne(c);if(u!=null&&u.contains(a)||r.composed&&r.composedPath().includes(u))return}return!tf(a,Fl.Loose)&&a.tabIndex!==-1&&r.preventDefault(),e(r,a)}let s=E(null);pi("pointerdown",r=>{var o,a;n.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),pi("mousedown",r=>{var o,a;n.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),pi("click",r=>{_f()||s.value&&(i(r,()=>s.value),s.value=null)},!0),pi("touchend",r=>i(r,()=>r.target instanceof HTMLElement?r.target:null),!0),xl("blur",r=>i(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Ef({defaultContainers:t=[],portals:e,mainTreeNodeRef:n}={}){let i=E(null),s=cn(i);function r(){var o,a,l;let c=[];for(let u of t)u!==null&&(u instanceof HTMLElement?c.push(u):"value"in u&&u.value instanceof HTMLElement&&c.push(u.value));if(e!=null&&e.value)for(let u of e.value)c.push(u);for(let u of(o=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(ne(i))||u.contains((l=(a=ne(i))==null?void 0:a.getRootNode())==null?void 0:l.host)||c.some(d=>u.contains(d))||c.push(u));return c}return{resolveContainers:r,contains(o){return r().some(a=>a.contains(o))},mainTreeNodeRef:i,MainTreeNode(){return n!=null?null:he(Zs,{features:Di.Hidden,ref:i})}}}let Wl=Symbol("ForcePortalRootContext");function bf(){return Ce(Wl,!1)}let jo=ge({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){return Fe(Wl,t.force),()=>{let{force:i,...s}=t;return He({theirProps:s,ourProps:{},slot:{},slots:e,attrs:n,name:"ForcePortalRoot"})}}}),Vl=Symbol("StackContext");var tr=(t=>(t[t.Add=0]="Add",t[t.Remove=1]="Remove",t))(tr||{});function If(){return Ce(Vl,()=>{})}function Cf({type:t,enabled:e,element:n,onUpdate:i}){let s=If();function r(...o){i==null||i(...o),s(...o)}fe(()=>{$e(e,(o,a)=>{o?r(0,t,n):a===!0&&r(1,t,n)},{immediate:!0,flush:"sync"})}),Oe(()=>{e.value&&r(1,t,n)}),Fe(Vl,r)}var jl=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(jl||{});let Tf=Symbol("DescriptionContext");function Sf({slot:t=E({}),name:e="Description",props:n={}}={}){let i=E([]);function s(r){return i.value.push(r),()=>{let o=i.value.indexOf(r);o!==-1&&i.value.splice(o,1)}}return Fe(Tf,{register:s,slot:t,name:e,props:n}),x(()=>i.value.length>0?i.value.join(" "):void 0)}function kf(t){let e=cn(t);if(!e){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let n=e.getElementById("headlessui-portal-root");if(n)return n;let i=e.createElement("div");return i.setAttribute("id","headlessui-portal-root"),e.body.appendChild(i)}let Af=ge({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let i=E(null),s=x(()=>cn(i)),r=bf(),o=Ce(zl,null),a=E(r===!0||o==null?kf(i.value):o.resolveTarget()),l=E(!1);fe(()=>{l.value=!0}),Ae(()=>{r||o!=null&&(a.value=o.resolveTarget())});let c=Ce(nr,null),u=!1,d=os();return $e(i,()=>{if(u||!c)return;let h=ne(i);h&&(Oe(c.register(h),d),u=!0)}),Oe(()=>{var h,f;let p=(h=s.value)==null?void 0:h.getElementById("headlessui-portal-root");p&&a.value===p&&a.value.children.length<=0&&((f=a.value.parentElement)==null||f.removeChild(a.value))}),()=>{if(!l.value||a.value===null)return null;let h={ref:i,"data-headlessui-portal":""};return he(vh,{to:a.value},He({ourProps:h,theirProps:t,slot:{},attrs:n,slots:e,name:"Portal"}))}}}),nr=Symbol("PortalParentContext");function Rf(){let t=Ce(nr,null),e=E([]);function n(r){return e.value.push(r),t&&t.register(r),()=>i(r)}function i(r){let o=e.value.indexOf(r);o!==-1&&e.value.splice(o,1),t&&t.unregister(r)}let s={register:n,unregister:i,portals:e};return[e,ge({name:"PortalWrapper",setup(r,{slots:o}){return Fe(nr,s),()=>{var a;return(a=o.default)==null?void 0:a.call(o)}}})]}let zl=Symbol("PortalGroupContext"),Pf=ge({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let i=yh({resolveTarget(){return t.target}});return Fe(zl,i),()=>{let{target:s,...r}=t;return He({theirProps:r,ourProps:{},slot:{},attrs:e,slots:n,name:"PortalGroup"})}}});var Nf=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Nf||{});let ir=Symbol("DialogContext");function Fr(t){let e=Ce(ir,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Fr),n}return e}let _i="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Of=ge({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:_i},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:t=>!0},setup(t,{emit:e,attrs:n,slots:i,expose:s}){var r,o;let a=(r=t.id)!=null?r:`headlessui-dialog-${as()}`,l=E(!1);fe(()=>{l.value=!0});let c=!1,u=x(()=>t.role==="dialog"||t.role==="alertdialog"?t.role:(c||(c=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),d=E(0),h=Dr(),f=x(()=>t.open===_i&&h!==null?(h.value&be.Open)===be.Open:t.open),p=E(null),g=x(()=>cn(p));if(s({el:p,$el:p}),!(t.open!==_i||h!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof f.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value===_i?void 0:t.open}`);let v=x(()=>l.value&&f.value?0:1),b=x(()=>v.value===0),C=x(()=>d.value>1),y=Ce(ir,null)!==null,[k,H]=Rf(),{resolveContainers:z,mainTreeNodeRef:P,MainTreeNode:W}=Ef({portals:k,defaultContainers:[x(()=>{var G;return(G=Q.panelRef.value)!=null?G:p.value})]}),Z=x(()=>C.value?"parent":"leaf"),A=x(()=>h!==null?(h.value&be.Closing)===be.Closing:!1),B=x(()=>y||A.value?!1:b.value),_=x(()=>{var G,ee,Te;return(Te=Array.from((ee=(G=g.value)==null?void 0:G.querySelectorAll("body > *"))!=null?ee:[]).find(Se=>Se.id==="headlessui-portal-root"?!1:Se.contains(ne(P))&&Se instanceof HTMLElement))!=null?Te:null});Vo(_,B);let w=x(()=>C.value?!0:b.value),M=x(()=>{var G,ee,Te;return(Te=Array.from((ee=(G=g.value)==null?void 0:G.querySelectorAll("[data-headlessui-portal]"))!=null?ee:[]).find(Se=>Se.contains(ne(P))&&Se instanceof HTMLElement))!=null?Te:null});Vo(M,w),Cf({type:"Dialog",enabled:x(()=>v.value===0),element:p,onUpdate:(G,ee)=>{if(ee==="Dialog")return Ue(G,{[tr.Add]:()=>d.value+=1,[tr.Remove]:()=>d.value-=1})}});let R=Sf({name:"DialogDescription",slot:x(()=>({open:f.value}))}),U=E(null),Q={titleId:U,panelRef:E(null),dialogState:v,setTitleId(G){U.value!==G&&(U.value=G)},close(){e("close",!1)}};Fe(ir,Q);let re=x(()=>!(!b.value||C.value));wf(z,(G,ee)=>{G.preventDefault(),Q.close(),Or(()=>ee==null?void 0:ee.focus())},re);let bt=x(()=>!(C.value||v.value!==0));Ll((o=g.value)==null?void 0:o.defaultView,"keydown",G=>{bt.value&&(G.defaultPrevented||G.key===jl.Escape&&(G.preventDefault(),G.stopPropagation(),Q.close()))});let jt=x(()=>!(A.value||v.value!==0||y));return yf(g,jt,G=>{var ee;return{containers:[...(ee=G.containers)!=null?ee:[],z]}}),Ae(G=>{if(v.value!==0)return;let ee=ne(p);if(!ee)return;let Te=new ResizeObserver(Se=>{for(let Ps of Se){let hi=Ps.target.getBoundingClientRect();hi.x===0&&hi.y===0&&hi.width===0&&hi.height===0&&Q.close()}});Te.observe(ee),G(()=>Te.disconnect())}),()=>{let{open:G,initialFocus:ee,...Te}=t,Se={...n,ref:p,id:a,role:u.value,"aria-modal":v.value===0?!0:void 0,"aria-labelledby":U.value,"aria-describedby":R.value},Ps={open:v.value===0};return he(jo,{force:!0},()=>[he(Af,()=>he(Pf,{target:p.value},()=>he(jo,{force:!1},()=>he(wn,{initialFocus:ee,containers:z,features:b.value?Ue(Z.value,{parent:wn.features.RestoreFocus,leaf:wn.features.All&~wn.features.FocusLock}):wn.features.None},()=>he(H,{},()=>He({ourProps:Se,theirProps:{...Te,...n},slot:Ps,attrs:n,slots:i,visible:v.value===0,features:Oi.RenderStrategy|Oi.Static,name:"Dialog"})))))),he(W)])}}}),Df=ge({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:i}){var s;let r=(s=t.id)!=null?s:`headlessui-dialog-panel-${as()}`,o=Fr("DialogPanel");i({el:o.panelRef,$el:o.panelRef});function a(l){l.stopPropagation()}return()=>{let{...l}=t,c={id:r,ref:o.panelRef,onClick:a};return He({ourProps:c,theirProps:l,slot:{open:o.dialogState.value===0},attrs:e,slots:n,name:"DialogPanel"})}}}),Lf=ge({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n}){var i;let s=(i=t.id)!=null?i:`headlessui-dialog-title-${as()}`,r=Fr("DialogTitle");return fe(()=>{r.setTitleId(s),Oe(()=>r.setTitleId(null))}),()=>{let{...o}=t;return He({ourProps:{id:s},theirProps:o,slot:{open:r.dialogState.value===0},attrs:e,slots:n,name:"DialogTitle"})}}});const xf=j("div",{class:"fixed inset-0 bg-black/50"},null,-1),Mf={class:"fixed inset-0 overflow-y-auto"},Ff={class:"flex min-h-full items-center justify-center p-4 text-center"},Uf=j("div",{class:"mt-2"},[j("p",{class:"text-sm text-gray-500"},[At(" Gunakan fitur ini untuk mereset semua pemutaran yang ada. "),j("b",null,"Semua pemutaran yang ada akan berhenti!")])],-1),Bf={class:"mt-4 flex justify-end gap-3"},$f=ge({__name:"ResetDialog",props:{isOpen:{type:Boolean}},emits:["close","reset"],setup(t){return(e,n)=>{const i=Ol,s=Lf,r=Df,o=Of,a=Dl;return de(),Js(a,{appear:"",show:e.isOpen,as:"template"},{default:Ct(()=>[kt(o,{as:"div",class:"relative z-10",onClose:n[2]||(n[2]=l=>e.$emit("close"))},{default:Ct(()=>[kt(i,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:Ct(()=>[xf]),_:1}),j("div",Mf,[j("div",Ff,[kt(i,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:Ct(()=>[kt(r,{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:Ct(()=>[kt(s,{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:Ct(()=>[At(" Reset pemutaran ")]),_:1}),Uf,j("div",Bf,[j("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:n[0]||(n[0]=l=>e.$emit("reset"))}," Reset "),j("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:n[1]||(n[1]=l=>e.$emit("close"))}," Batal ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}});function ql(t){return wh()?(Eh(t),!0):!1}function Lt(t){return typeof t=="function"?t():L(t)}const Ur=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Hf=Object.prototype.toString,Wf=t=>Hf.call(t)==="[object Object]",Gl=()=>{};function Vf(t,e){function n(...i){return new Promise((s,r)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(s).catch(r)})}return n}const Kl=t=>t();function jf(t=Kl){const e=E(!0);function n(){e.value=!1}function i(){e.value=!0}const s=(...r)=>{e.value&&t(...r)};return{isActive:Cl(e),pause:n,resume:i,eventFilter:s}}function Yl(t){return os()}function zf(t,e,n={}){const{eventFilter:i=Kl,...s}=n;return $e(t,Vf(i,e),s)}function qf(t,e,n={}){const{eventFilter:i,...s}=n,{eventFilter:r,pause:o,resume:a,isActive:l}=jf(i);return{stop:zf(t,e,{...s,eventFilter:r}),pause:o,resume:a,isActive:l}}function Ql(t,e=!0,n){Yl()?fe(t,n):e?t():Or(t)}function Gf(t,e){Yl()&&Oe(t,e)}function Kf(t,e,n={}){const{immediate:i=!0}=n,s=E(!1);let r=null;function o(){r&&(clearTimeout(r),r=null)}function a(){s.value=!1,o()}function l(...c){o(),s.value=!0,r=setTimeout(()=>{s.value=!1,r=null,t(...c)},Lt(e))}return i&&(s.value=!0,Ur&&l()),ql(a),{isPending:Cl(s),start:l,stop:a}}function Yf(t){var e;const n=Lt(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Li=Ur?window:void 0,Qf=Ur?window.document:void 0;function zo(...t){let e,n,i,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,s]=t,e=Li):[e,n,i,s]=t,!e)return Gl;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,d,h,f)=>(u.addEventListener(d,h,f),()=>u.removeEventListener(d,h,f)),l=$e(()=>[Yf(e),Lt(s)],([u,d])=>{if(o(),!u)return;const h=Wf(d)?{...d}:d;r.push(...n.flatMap(f=>i.map(p=>a(u,f,p,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return ql(c),c}const gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mi="__vueuse_ssr_handlers__",Jf=Xf();function Xf(){return mi in gi||(gi[mi]=gi[mi]||{}),gi[mi]}function Zf(t,e){return Jf[t]||e}function ep(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const tp={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},qo="vueuse-storage";function np(t,e,n,i={}){var s;const{flush:r="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Li,eventFilter:h,onError:f=A=>{console.error(A)},initOnMounted:p}=i,g=(u?Il:E)(e);if(!n)try{n=Zf("getDefaultStorage",()=>{var A;return(A=Li)==null?void 0:A.localStorage})()}catch(A){f(A)}if(!n)return g;const v=Lt(e),b=ep(v),C=(s=i.serializer)!=null?s:tp[b],{pause:y,resume:k}=qf(g,()=>z(g.value),{flush:r,deep:o,eventFilter:h});d&&a&&Ql(()=>{zo(d,"storage",W),zo(d,qo,Z),p&&W()}),p||W();function H(A,B){d&&d.dispatchEvent(new CustomEvent(qo,{detail:{key:t,oldValue:A,newValue:B,storageArea:n}}))}function z(A){try{const B=n.getItem(t);if(A==null)H(B,null),n.removeItem(t);else{const _=C.write(A);B!==_&&(n.setItem(t,_),H(B,_))}}catch(B){f(B)}}function P(A){const B=A?A.newValue:n.getItem(t);if(B==null)return l&&v!=null&&n.setItem(t,C.write(v)),v;if(!A&&c){const _=C.read(B);return typeof c=="function"?c(_,v):b==="object"&&!Array.isArray(_)?{...v,..._}:_}else return typeof B!="string"?B:C.read(B)}function W(A){if(!(A&&A.storageArea!==n)){if(A&&A.key==null){g.value=v;return}if(!(A&&A.key!==t)){y();try{(A==null?void 0:A.newValue)!==C.write(g.value)&&(g.value=P(A))}catch(B){f(B)}finally{A?Or(k):k()}}}}function Z(A){W(A.detail)}return g}function ip(t,e,n={}){const{window:i=Li}=n;return np(t,e,i==null?void 0:i.localStorage,n)}function Go(t,e=Gl,n={}){const{immediate:i=!0,manual:s=!1,type:r="text/javascript",async:o=!0,crossOrigin:a,referrerPolicy:l,noModule:c,defer:u,document:d=Qf,attrs:h={}}=n,f=E(null);let p=null;const g=C=>new Promise((y,k)=>{const H=W=>(f.value=W,y(W),W);if(!d){y(!1);return}let z=!1,P=d.querySelector(`script[src="${Lt(t)}"]`);P?P.hasAttribute("data-loaded")&&H(P):(P=d.createElement("script"),P.type=r,P.async=o,P.src=Lt(t),u&&(P.defer=u),a&&(P.crossOrigin=a),c&&(P.noModule=c),l&&(P.referrerPolicy=l),Object.entries(h).forEach(([W,Z])=>P==null?void 0:P.setAttribute(W,Z)),z=!0),P.addEventListener("error",W=>k(W)),P.addEventListener("abort",W=>k(W)),P.addEventListener("load",()=>{P.setAttribute("data-loaded","true"),e(P),H(P)}),z&&(P=d.head.appendChild(P)),C||H(P)}),v=(C=!0)=>(p||(p=g(C)),p),b=()=>{if(!d)return;p=null,f.value&&(f.value=null);const C=d.querySelector(`script[src="${Lt(t)}"]`);C&&d.head.removeChild(C)};return i&&!s&&Ql(v),s||Gf(b),{scriptTag:f,load:v,unload:b}}const sp=["id","poster"],rp=ge({__name:"NewVideoPlayer",props:{sources:{},poster:{},landscape:{type:Boolean,default:!0},useShortcut:{type:Boolean,default:!0},useDefaultControl:{type:Boolean,default:!1},hideControl:{type:Boolean,default:!1},maxBufferSize:{},maxMaxBufferLength:{},saveState:{type:Boolean,default:!0},rotateFill:{default:"width"},videoFill:{default:"width"},compact:{type:Boolean,default:!1}},setup(t){const e=t,n=E(!1),i=E(!1),{load:s}=Go("https://cdn.jsdelivr.net/npm/hls.js@1.5.6",()=>{n.value=!0},{manual:!0}),{load:r}=Go("https://cdn.plyr.io/3.7.8/plyr.polyfilled.js",()=>{i.value=!0},{manual:!0}),o=E(),a=E(e.sources);$e(()=>e.sources,()=>{o.value&&(o.value.quality=f())});const l=ip("quality-id",2),c=E((a.value??[]).find(y=>l.value===y.id)??a.value[0]),u=Ph("$ExRRm5u7KD"),d=E();function h(){o.value&&o.value.destroy(),window.hls&&(window.hls.destroy(),window.hls=void 0)}function f(){return{default:l.value,options:a.value.map(y=>y.id),forced:!0,onChange:y=>C(y)}}function p(){if(!d.value)return;const y={speed:{selected:1,options:[1]},poster:e.poster};y.quality=f();const k={};for(const H of a.value)k[H.id]=H.label;y.i18n={qualityLabel:k},o.value=new Plyr(d.value,y)}function g(){if(!d.value)return;window.hls&&window.hls.destroy();const y=c.value;if(y.type==="hls")if(!Hls.isSupported())d.value.src=y.url;else{const k=new Hls;k.loadSource(y.url),k.attachMedia(d.value),window.hls=k}else d.value.src=y.url;v()}async function v(y=0){if(d.value)try{await d.value.play()}catch(k){y<5&&setTimeout(()=>{v(y+1)},100),console.error(k)}}const b=E();function C(y){if(b.value===y)return;b.value=y;const k=a.value.find(H=>H.id===y);k&&(c.value=k,g())}return Pr(()=>{h()}),fe(async()=>{await s(),await r(),p()}),(y,k)=>(de(),ve("video",{id:L(u),ref_key:"video",ref:d,poster:y.poster,class:"size-full"},null,8,sp))}});function op(){return bh}class ap{static encrypt(e,n){let i="";for(let s=0;s<e.length;s++){const r=s%n.length,a=`00${(e[s].charCodeAt(0)^n[r].charCodeAt(0)).toString(16)}`.slice(-2);i+=a}return i}static decrypt(e,n){let i="";const s=[];let r;for(r=0;r<e.length;r=r+2)s.push(e[r]+e[r+1]);for(r=0;r<s.length;r++){const o=s[r],a=parseInt(o,16),l=r%n.length,c=a^n[l].charCodeAt(0);i+=String.fromCharCode(c)}return i}}const lp="KimiNo";function cp(t){return ap.decrypt(t,lp+up+hp)}const up="Kotoga";function dp(t){return typeof t=="string"&&(t=parseInt(t)),t.toString().length>10}const hp="SukiDakara";function Ko(t){return["www.youtube.com/embed"].some(e=>t.includes(e))}const fp={key:0,class:"text-center flex flex-col gap-3 md:gap-1.5"},pp={class:"text-xl"},_p={class:"flex gap-3 justify-center"},gp={key:0,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},mp={class:"leading-4 pt-0.5"},vp=j("span",{class:"text-sm"},"bulan",-1),yp={key:1,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},wp={class:"leading-4 pt-0.5"},Ep=j("span",{class:"text-sm"},"hari",-1),bp={key:2,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Ip={class:"leading-4 pt-0.5"},Cp=j("span",{class:"text-sm"},"jam",-1),Tp={key:3,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Sp={class:"leading-4 pt-0.5"},kp=j("span",{class:"text-sm"},"menit",-1),Ap={key:4,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Rp={class:"leading-4 pt-0.5"},Pp=j("span",{class:"text-sm"},"detik",-1),Np=ge({__name:"CountDown",props:{time:{}},setup(t){const e=t,n=op(),i=n(dp(e.time)?e.time:Number(e.time)*1e3),s=E(n.duration(i.diff(n()))),r=E(s.value.asSeconds()<=0),{start:o}=Kf(()=>{const a=s.value.subtract(1,"seconds");s.value.asSeconds()<=1?(r.value=!0,s.value=n.duration(0)):(s.value=a,o())},1e3,{immediate:!0});return(a,l)=>(de(),ve("div",null,[L(r)?Le("",!0):(de(),ve("div",fp,[j("div",pp,nt(L(i).format("dddd, DD MMMM YYYY, hh:mm A")),1),j("div",_p,[L(s).months()>0?(de(),ve("div",gp,[j("span",mp,nt(L(s).months()),1),At(),vp])):Le("",!0),L(s).days()>0?(de(),ve("div",yp,[j("span",wp,nt(L(s).days()),1),At(),Ep])):Le("",!0),L(s).hours()>0?(de(),ve("div",bp,[j("span",Ip,nt(L(s).hours()),1),At(),Cp])):Le("",!0),L(s).minutes()>0?(de(),ve("div",Tp,[j("span",Sp,nt(L(s).minutes()),1),At(),kp])):Le("",!0),L(s).seconds()>0||L(s).asSeconds()>0?(de(),ve("div",Ap,[j("span",Rp,nt(L(s).seconds()),1),At(),Pp])):Le("",!0)])]))]))}});var Yo={};/**
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
 */const Jl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(t,e){if(!t)throw un(e)},un=function(t){return new Error("Firebase Database ("+Jl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Xl=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Op=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},cs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(n[u],n[d],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Op(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Dp;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Dp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zl=function(t){const e=Xl(t);return cs.encodeByteArray(e,!0)},xi=function(t){return Zl(t).replace(/\./g,"")},Mi=function(t){try{return cs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lp(t){return ec(void 0,t)}function ec(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xp(n)||(t[n]=ec(t[n],e[n]));return t}function xp(t){return t!=="__proto__"}/**
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
 */function tc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mp=()=>tc().__FIREBASE_DEFAULTS__,Fp=()=>{if(typeof process>"u"||typeof Yo>"u")return;const t=Yo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Up=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mi(t[1]);return e&&JSON.parse(e)},Br=()=>{try{return Mp()||Fp()||Up()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nc=t=>{var e,n;return(n=(e=Br())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bp=t=>{const e=nc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ic=()=>{var t;return(t=Br())===null||t===void 0?void 0:t.config},sc=t=>{var e;return(e=Br())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ie{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function $p(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xi(JSON.stringify(n)),xi(JSON.stringify(o)),""].join(".")}/**
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $r(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Hp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wp(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oc(){return Jl.NODE_ADMIN===!0}function Hr(){try{return typeof indexedDB=="object"}catch{return!1}}function Vp(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const jp="FirebaseError";class vt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=jp,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?zp(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vt(s,a,i)}}function zp(t,e){return t.replace(qp,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const qp=/\{\$([^}]+)}/g;/**
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
 */function Un(t){return JSON.parse(t)}function ie(t){return JSON.stringify(t)}/**
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
 */const ac=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Un(Mi(r[0])||""),n=Un(Mi(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Gp=function(t){const e=ac(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Kp=function(t){const e=ac(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function We(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function tn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ui(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Bi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Qo(r)&&Qo(o)){if(!Bi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Qo(t){return t!==null&&typeof t=="object"}/**
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
 */function hn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Rn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Pn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Yp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Qp(t,e){const n=new Jp(t,e);return n.subscribe.bind(n)}class Jp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Xp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Ls),s.error===void 0&&(s.error=Ls),s.complete===void 0&&(s.complete=Ls);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ls(){}function nn(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Zp=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},us=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const e_=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
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
 */const t_=1e3,n_=2,i_=4*60*60*1e3,s_=.5;function r_(t,e=t_,n=n_){const i=e*Math.pow(n,t),s=Math.round(s_*i*(Math.random()-.5)*2);return Math.min(i_,i+s)}/**
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
 */function pe(t){return t&&t._delegate?t._delegate:t}class Je{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tt="[DEFAULT]";/**
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
 */class o_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ie;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l_(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:a_(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a_(t){return t===Tt?void 0:t}function l_(t){return t.instantiationMode==="EAGER"}/**
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
 */class c_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new o_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const u_={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},d_=V.INFO,h_={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},f_=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=h_[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ds{constructor(e){this.name=e,this._logLevel=d_,this._logHandler=f_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const p_=(t,e)=>e.some(n=>t instanceof n);let Jo,Xo;function __(){return Jo||(Jo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g_(){return Xo||(Xo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lc=new WeakMap,sr=new WeakMap,cc=new WeakMap,xs=new WeakMap,Wr=new WeakMap;function m_(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ct(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lc.set(n,t)}).catch(()=>{}),Wr.set(e,t),e}function v_(t){if(sr.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});sr.set(t,e)}let rr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y_(t){rr=t(rr)}function w_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ms(this),e,...n);return cc.set(i,e.sort?e.sort():[e]),ct(i)}:g_().includes(t)?function(...e){return t.apply(Ms(this),e),ct(lc.get(this))}:function(...e){return ct(t.apply(Ms(this),e))}}function E_(t){return typeof t=="function"?w_(t):(t instanceof IDBTransaction&&v_(t),p_(t,__())?new Proxy(t,rr):t)}function ct(t){if(t instanceof IDBRequest)return m_(t);if(xs.has(t))return xs.get(t);const e=E_(t);return e!==t&&(xs.set(t,e),Wr.set(e,t)),e}const Ms=t=>Wr.get(t);function b_(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=ct(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ct(o.result),l.oldVersion,l.newVersion,ct(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const I_=["get","getKey","getAll","getAllKeys","count"],C_=["put","add","delete","clear"],Fs=new Map;function Zo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fs.get(e))return Fs.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=C_.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||I_.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Fs.set(e,r),r}y_(t=>({...t,get:(e,n,i)=>Zo(e,n)||t.get(e,n,i),has:(e,n)=>!!Zo(e,n)||t.has(e,n)}));/**
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
 */class T_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S_(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function S_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const or="@firebase/app",ea="0.10.1";/**
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
 */const xt=new ds("@firebase/app"),k_="@firebase/app-compat",A_="@firebase/analytics-compat",R_="@firebase/analytics",P_="@firebase/app-check-compat",N_="@firebase/app-check",O_="@firebase/auth",D_="@firebase/auth-compat",L_="@firebase/database",x_="@firebase/database-compat",M_="@firebase/functions",F_="@firebase/functions-compat",U_="@firebase/installations",B_="@firebase/installations-compat",$_="@firebase/messaging",H_="@firebase/messaging-compat",W_="@firebase/performance",V_="@firebase/performance-compat",j_="@firebase/remote-config",z_="@firebase/remote-config-compat",q_="@firebase/storage",G_="@firebase/storage-compat",K_="@firebase/firestore",Y_="@firebase/firestore-compat",Q_="firebase",J_="10.11.0";/**
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
 */const ar="[DEFAULT]",X_={[or]:"fire-core",[k_]:"fire-core-compat",[R_]:"fire-analytics",[A_]:"fire-analytics-compat",[N_]:"fire-app-check",[P_]:"fire-app-check-compat",[O_]:"fire-auth",[D_]:"fire-auth-compat",[L_]:"fire-rtdb",[x_]:"fire-rtdb-compat",[M_]:"fire-fn",[F_]:"fire-fn-compat",[U_]:"fire-iid",[B_]:"fire-iid-compat",[$_]:"fire-fcm",[H_]:"fire-fcm-compat",[W_]:"fire-perf",[V_]:"fire-perf-compat",[j_]:"fire-rc",[z_]:"fire-rc-compat",[q_]:"fire-gcs",[G_]:"fire-gcs-compat",[K_]:"fire-fst",[Y_]:"fire-fst-compat","fire-js":"fire-js",[Q_]:"fire-js-all"};/**
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
 */const $i=new Map,Z_=new Map,lr=new Map;function ta(t,e){try{t.container.addComponent(e)}catch(n){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pt(t){const e=t.name;if(lr.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;lr.set(e,t);for(const n of $i.values())ta(n,t);for(const n of Z_.values())ta(n,t);return!0}function ni(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function je(t){return t.settings!==void 0}/**
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
 */const eg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ut=new dn("app","Firebase",eg);/**
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
 */class tg{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
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
 */const fn=J_;function uc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ar,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ut.create("bad-app-name",{appName:String(s)});if(n||(n=ic()),!n)throw ut.create("no-options");const r=$i.get(s);if(r){if(Bi(n,r.options)&&Bi(i,r.config))return r;throw ut.create("duplicate-app",{appName:s})}const o=new c_(s);for(const l of lr.values())o.addComponent(l);const a=new tg(n,i,o);return $i.set(s,a),a}function Vr(t=ar){const e=$i.get(t);if(!e&&t===ar&&ic())return uc();if(!e)throw ut.create("no-app",{appName:t});return e}function Ye(t,e,n){var i;let s=(i=X_[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(a.join(" "));return}pt(new Je(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ng="firebase-heartbeat-database",ig=1,Bn="firebase-heartbeat-store";let Us=null;function dc(){return Us||(Us=b_(ng,ig,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bn)}catch(n){console.warn(n)}}}}).catch(t=>{throw ut.create("idb-open",{originalErrorMessage:t.message})})),Us}async function sg(t){try{const n=(await dc()).transaction(Bn),i=await n.objectStore(Bn).get(hc(t));return await n.done,i}catch(e){if(e instanceof vt)xt.warn(e.message);else{const n=ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(n.message)}}}async function na(t,e){try{const i=(await dc()).transaction(Bn,"readwrite");await i.objectStore(Bn).put(e,hc(t)),await i.done}catch(n){if(n instanceof vt)xt.warn(n.message);else{const i=ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(i.message)}}}function hc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rg=1024,og=30*24*60*60*1e3;class ag{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ia();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=og}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ia(),{heartbeatsToSend:i,unsentEntries:s}=lg(this._heartbeatsCache.heartbeats),r=xi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ia(){return new Date().toISOString().substring(0,10)}function lg(t,e=rg){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),sa(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),sa(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class cg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hr()?Vp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return na(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return na(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sa(t){return xi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ug(t){pt(new Je("platform-logger",e=>new T_(e),"PRIVATE")),pt(new Je("heartbeat",e=>new ag(e),"PRIVATE")),Ye(or,ea,t),Ye(or,ea,"esm2017"),Ye("fire-js","")}ug("");var dg="firebase",hg="10.11.0";/**
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
 */Ye(dg,hg,"app");var ra={};const oa="@firebase/database",aa="1.0.4";/**
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
 */let fc="";function fg(t){fc=t}/**
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
 */class pg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Un(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class _g{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return We(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const pc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pg(e)}}catch{}return new _g},Nt=pc("localStorage"),gg=pc("sessionStorage");/**
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
 */const Qt=new ds("@firebase/database"),mg=function(){let t=1;return function(){return t++}}(),_c=function(t){const e=Zp(t),n=new Yp;n.update(e);const i=n.digest();return cs.encodeByteArray(i)},ii=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ii.apply(null,i):typeof i=="object"?e+=ie(i):e+=i,e+=" "}return e};let Nn=null,la=!0;const vg=function(t,e){m(!e,"Can't turn on custom loggers persistently."),Qt.logLevel=V.VERBOSE,Nn=Qt.log.bind(Qt)},ce=function(...t){if(la===!0&&(la=!1,Nn===null&&gg.get("logging_enabled")===!0&&vg()),Nn){const e=ii.apply(null,t);Nn(e)}},si=function(t){return function(...e){ce(t,...e)}},cr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ii(...t);Qt.error(e)},Xe=function(...t){const e=`FIREBASE FATAL ERROR: ${ii(...t)}`;throw Qt.error(e),new Error(e)},Ee=function(...t){const e="FIREBASE WARNING: "+ii(...t);Qt.warn(e)},yg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ee("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hs=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},sn="[MIN_NAME]",Mt="[MAX_NAME]",Ht=function(t,e){if(t===e)return 0;if(t===sn||e===Mt)return-1;if(e===sn||t===Mt)return 1;{const n=ca(t),i=ca(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Eg=function(t,e){return t===e?0:t<e?-1:1},bn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ie(e))},jr=function(t){if(typeof t!="object"||t===null)return ie(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ie(e[i]),n+=":",n+=jr(t[e[i]]);return n+="}",n},gc=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mc=function(t){m(!hs(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},bg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ig=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Cg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Tg=new RegExp("^-?(0*)\\d{1,10}$"),Sg=-2147483648,kg=2147483647,ca=function(t){if(Tg.test(t)){const e=Number(t);if(e>=Sg&&e<=kg)return e}return null},pn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ee("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ag=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},On=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Rg{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ee(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Pg{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ee(e)}}class ki{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ki.OWNER="owner";/**
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
 */const zr="5",vc="v",yc="s",wc="r",Ec="f",bc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ic="ls",Cc="p",ur="ac",Tc="websocket",Sc="long_polling";/**
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
 */class kc{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Nt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Nt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ng(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ac(t,e,n){m(typeof e=="string","typeof type must == string"),m(typeof n=="object","typeof params must == object");let i;if(e===Tc)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Sc)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ng(t)&&(n.ns=t.namespace);const s=[];return ue(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Og{constructor(){this.counters_={}}incrementCounter(e,n=1){We(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Lp(this.counters_)}}/**
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
 */const Bs={},$s={};function qr(t){const e=t.toString();return Bs[e]||(Bs[e]=new Og),Bs[e]}function Dg(t,e){const n=t.toString();return $s[n]||($s[n]=e()),$s[n]}/**
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
 */class Lg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&pn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ua="start",xg="close",Mg="pLPCommand",Fg="pRTLPCB",Rc="id",Pc="pw",Nc="ser",Ug="cb",Bg="seg",$g="ts",Hg="d",Wg="dframe",Oc=1870,Dc=30,Vg=Oc-Dc,jg=25e3,zg=3e4;class Gt{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=si(e),this.stats_=qr(n),this.urlFn=l=>(this.appCheckToken&&(l[ur]=this.appCheckToken),Ac(n,Sc,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Lg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zg)),wg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gr((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ua)this.id=a,this.password=l;else if(o===xg)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ua]="t",i[Nc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Ug]=this.scriptTagHolder.uniqueCallbackIdentifier),i[vc]=zr,this.transportSessionId&&(i[yc]=this.transportSessionId),this.lastSessionId&&(i[Ic]=this.lastSessionId),this.applicationId&&(i[Cc]=this.applicationId),this.appCheckToken&&(i[ur]=this.appCheckToken),typeof location<"u"&&location.hostname&&bc.test(location.hostname)&&(i[wc]=Ec);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gt.forceAllow_=!0}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){return Gt.forceAllow_?!0:!Gt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bg()&&!Ig()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Zl(n),s=gc(i,Vg);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Wg]="t",i[Rc]=e,i[Pc]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gr{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mg(),window[Mg+this.uniqueCallbackIdentifier]=e,window[Fg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ce("frame writing exception"),a.stack&&ce(a.stack),ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ce("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Rc]=this.myID,e[Pc]=this.myPW,e[Nc]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dc+i.length<=Oc;){const o=this.pendingSegs.shift();i=i+"&"+Bg+s+"="+o.seg+"&"+$g+s+"="+o.ts+"&"+Hg+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(jg)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const qg=16384,Gg=45e3;let Hi=null;typeof MozWebSocket<"u"?Hi=MozWebSocket:typeof WebSocket<"u"&&(Hi=WebSocket);class Re{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=si(this.connId),this.stats_=qr(n),this.connURL=Re.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[vc]=zr,typeof location<"u"&&location.hostname&&bc.test(location.hostname)&&(o[wc]=Ec),n&&(o[yc]=n),i&&(o[Ic]=i),s&&(o[ur]=s),r&&(o[Cc]=r),Ac(e,Tc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Nt.set("previous_websocket_failure",!0);try{let i;oc(),this.mySock=new Hi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Hi!==null&&!Re.forceDisallow_}static previouslyFailed(){return Nt.isInMemoryStorage||Nt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Nt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Un(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=gc(n,qg);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Gg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Re.responsesRequiredToBeHealthy=2;Re.healthyTimeout=3e4;/**
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
 */class $n{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gt,Re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Re&&Re.isAvailable();let i=n&&!Re.previouslyFailed();if(e.webSocketOnly&&(n||Ee("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Re];else{const s=this.transports_=[];for(const r of $n.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);$n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$n.globalTransportInitialized_=!1;/**
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
 */const Kg=6e4,Yg=5e3,Qg=10*1024,Jg=100*1024,Hs="t",da="d",Xg="s",ha="r",Zg="e",fa="o",pa="a",_a="n",ga="p",em="h";class tm{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=si("c:"+this.id+":"),this.transportManager_=new $n(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=On(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hs in e){const n=e[Hs];n===pa?this.upgradeIfSecondaryHealthy_():n===ha?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bn("t",e),i=bn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ga,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_a,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bn("t",e),i=bn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bn(Hs,e);if(da in e){const i=e[da];if(n===em){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===_a){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Xg?this.onConnectionShutdown_(i):n===ha?this.onReset_(i):n===Zg?cr("Server Error: "+i):n===fa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zr!==i&&Ee("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),On(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Kg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):On(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ga,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Nt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Lc{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class xc{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Wi extends xc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$r()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wi}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ma=32,va=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function F(){return new $("")}function N(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _t(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function Kr(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hn(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function J(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof $)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new $(n,0)}function O(t){return t.pieceNum_>=t.pieces_.length}function me(t,e){const n=N(t),i=N(e);if(n===null)return e;if(n===i)return me(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function im(t,e){const n=Hn(t,0),i=Hn(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=Ht(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function Yr(t,e){if(_t(t)!==_t(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ke(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(_t(t)>_t(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class sm{constructor(e,n){this.errorPrefix_=n,this.parts_=Hn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=us(this.parts_[i]);Fc(this)}}function rm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=us(e),Fc(t)}function om(t){const e=t.parts_.pop();t.byteLength_-=us(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fc(t){if(t.byteLength_>va)throw new Error(t.errorPrefix_+"has a key path longer than "+va+" bytes ("+t.byteLength_+").");if(t.parts_.length>ma)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ma+") or object contains a cycle "+St(t))}function St(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Qr extends xc{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Qr}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const In=1e3,am=60*5*1e3,ya=30*1e3,lm=1.3,cm=3e4,um="server_kill",wa=3;class Qe extends Lc{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qe.nextPersistentConnectionId_++,this.log_=si("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=In,this.maxReconnectDelay_=am,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!oc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(ie(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Ie,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Qe.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&We(e,"w")){const i=tn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ee(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ya)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Gp(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ie(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):cr("Unrecognized action received from server: "+ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cm&&(this.reconnectDelay_=In),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Qe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ce("getToken() completed but was canceled"):(ce("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new tm(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Ee(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(um)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ee(d),l())}}}interrupt(e){ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fi(this.interruptReasons_)&&(this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>jr(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new $(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wa&&(this.reconnectDelay_=ya,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fc.replace(/\./g,"-")]=1,$r()?e["framework.cordova"]=1:rc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wi.getInstance().currentlyOnline();return Fi(this.interruptReasons_)&&e}}Qe.nextPersistentConnectionId_=0;Qe.nextConnectionId_=0;/**
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
 */class D{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new D(e,n)}}/**
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
 */class fs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new D(sn,e),s=new D(sn,n);return this.compare(i,s)!==0}minPost(){return D.MIN}}/**
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
 */let vi;class Uc extends fs{static get __EMPTY_NODE(){return vi}static set __EMPTY_NODE(e){vi=e}compare(e,n){return Ht(e.name,n.name)}isDefinedOn(e){throw un("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return D.MIN}maxPost(){return new D(Mt,vi)}makePost(e,n){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,vi)}toString(){return".key"}}const Jt=new Uc;/**
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
 */class yi{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ae{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??ae.RED,this.left=s??ye.EMPTY_NODE,this.right=r??ye.EMPTY_NODE}copy(e,n,i,s,r){return new ae(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ye.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ae.RED=!0;ae.BLACK=!1;class dm{copy(e,n,i,s,r){return this}insert(e,n,i){return new ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ye{constructor(e,n=ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ae.BLACK,null,null))}remove(e){return new ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ae.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yi(this.root_,null,this.comparator_,!0,e)}}ye.EMPTY_NODE=new dm;/**
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
 */function hm(t,e){return Ht(t.name,e.name)}function Jr(t,e){return Ht(t,e)}/**
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
 */let dr;function fm(t){dr=t}const Bc=function(t){return typeof t=="number"?"number:"+mc(t):"string:"+t},$c=function(t){if(t.isLeafNode()){const e=t.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&We(e,".sv"),"Priority must be a string or number.")}else m(t===dr||t.isEmpty(),"priority of unexpected type.");m(t===dr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ea;class oe{constructor(e,n=oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$c(this.priorityNode_)}static set __childrenNodeConstructor(e){Ea=e}static get __childrenNodeConstructor(){return Ea}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return O(e)?this:N(e)===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=N(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||_t(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mc(this.value_):e+=this.value_,this.lazyHash_=_c(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof oe.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=oe.VALUE_TYPE_ORDER.indexOf(n),r=oe.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+n),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Hc,Wc;function pm(t){Hc=t}function _m(t){Wc=t}class gm extends fs{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ht(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return D.MIN}maxPost(){return new D(Mt,new oe("[PRIORITY-POST]",Wc))}makePost(e,n){const i=Hc(e);return new D(n,new oe("[PRIORITY-POST]",i))}toString(){return".priority"}}const X=new gm;/**
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
 */const mm=Math.log(2);class vm{constructor(e){const n=r=>parseInt(Math.log(r)/mm,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vi=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new ae(h,d.node,ae.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),g=s(f+1,c);return d=t[f],h=n?n(d):d,new ae(h,d.node,ae.BLACK,p,g)}},r=function(l){let c=null,u=null,d=t.length;const h=function(p,g){const v=d-p,b=d;d-=p;const C=s(v+1,b),y=t[v],k=n?n(y):y;f(new ae(k,y.node,g,null,C))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));g?h(v,ae.BLACK):(h(v,ae.BLACK),h(v,ae.RED))}return u},o=new vm(t.length),a=r(o);return new ye(i||e,a)};/**
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
 */let Ws;const zt={};class ze{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return m(zt&&X,"ChildrenNode.ts has not been loaded"),Ws=Ws||new ze({".priority":zt},{".priority":X}),Ws}get(e){const n=tn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ye?n:null}hasIndex(e){return We(this.indexSet_,e.toString())}addIndex(e,n){m(e!==Jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(D.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Vi(i,e.getCompare()):a=zt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ze(u,c)}addToIndexes(e,n){const i=Ui(this.indexes_,(s,r)=>{const o=tn(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===zt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(D.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Vi(a,o.getCompare())}else return zt;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new D(e.name,a))),l.insert(e,e.node)}});return new ze(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ui(this.indexes_,s=>{if(s===zt)return s;{const r=n.get(e.name);return r?s.remove(new D(e.name,r)):s}});return new ze(i,this.indexSet_)}}/**
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
 */let Cn;class I{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&$c(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Cn||(Cn=new I(new ye(Jr),null,ze.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cn}updatePriority(e){return this.children_.isEmpty()?this:new I(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Cn:n}}getChild(e){const n=N(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(m(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new D(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Cn:this.priorityNode_;return new I(s,o,r)}}updateChild(e,n){const i=N(e);if(i===null)return n;{m(N(e)!==".priority"||_t(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(q(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(X,(o,a)=>{n[o]=a.val(e),i++,r&&I.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bc(this.getPriority().val())+":"),this.forEachChild(X,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":_c(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new D(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new D(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new D(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ri?-1:0}withIndex(e){if(e===Jt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new I(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(X),s=n.getIterator(X);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Jt?null:this.indexMap_.get(e.toString())}}I.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ym extends I{constructor(){super(new ye(Jr),I.EMPTY_NODE,ze.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return I.EMPTY_NODE}isEmpty(){return!1}}const ri=new ym;Object.defineProperties(D,{MIN:{value:new D(sn,I.EMPTY_NODE)},MAX:{value:new D(Mt,ri)}});Uc.__EMPTY_NODE=I.EMPTY_NODE;oe.__childrenNodeConstructor=I;fm(ri);_m(ri);/**
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
 */const wm=!0;function te(t,e=null){if(t===null)return I.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new oe(n,te(e))}if(!(t instanceof Array)&&wm){const n=[];let i=!1;if(ue(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=te(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new D(o,l)))}}),n.length===0)return I.EMPTY_NODE;const r=Vi(n,hm,o=>o.name,Jr);if(i){const o=Vi(n,X.getCompare());return new I(r,te(e),new ze({".priority":o},{".priority":X}))}else return new I(r,te(e),ze.Default)}else{let n=I.EMPTY_NODE;return ue(t,(i,s)=>{if(We(t,i)&&i.substring(0,1)!=="."){const r=te(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(te(e))}}pm(te);/**
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
 */class Em extends fs{constructor(e){super(),this.indexPath_=e,m(!O(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ht(e.name,n.name):r}makePost(e,n){const i=te(e),s=I.EMPTY_NODE.updateChild(this.indexPath_,i);return new D(n,s)}maxPost(){const e=I.EMPTY_NODE.updateChild(this.indexPath_,ri);return new D(Mt,e)}toString(){return Hn(this.indexPath_,0).join("/")}}/**
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
 */class bm extends fs{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ht(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,n){const i=te(e);return new D(n,i)}toString(){return".value"}}const Im=new bm;/**
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
 */function Vc(t){return{type:"value",snapshotNode:t}}function rn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Wn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Cm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Xr{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Wn(n,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(rn(n,i)):o.trackChildChange(Vn(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(X,(s,r)=>{n.hasChild(s)||i.trackChildChange(Wn(s,r))}),n.isLeafNode()||n.forEachChild(X,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Vn(s,r,o))}else i.trackChildChange(rn(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?I.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class jn{constructor(e){this.indexedFilter_=new Xr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=jn.getStartPost_(e),this.endPost_=jn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new D(n,i))||(i=I.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=I.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(I.EMPTY_NODE);const r=this;return n.forEachChild(X,(o,a)=>{r.matches(new D(o,a))||(s=s.updateImmediateChild(o,I.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Tm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new jn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new D(n,i))||(i=I.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=I.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=I.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(I.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,I.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new D(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Vn(n,i,d)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Wn(n,d));const g=a.updateImmediateChild(n,I.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(rn(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Wn(c.name,c.node)),r.trackChildChange(rn(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,I.EMPTY_NODE)):e}}/**
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
 */class Zr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=X}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:sn}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===X}copy(){const e=new Zr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sm(t){return t.loadsAllData()?new Xr(t.getIndex()):t.hasLimit()?new Tm(t):new jn(t)}function ba(t){const e={};if(t.isDefault())return e;let n;if(t.index_===X?n="$priority":t.index_===Im?n="$value":t.index_===Jt?n="$key":(m(t.index_ instanceof Em,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ie(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=ie(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+ie(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=ie(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ia(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==X&&(e.i=t.index_.toString()),e}/**
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
 */class ji extends Lc{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=si("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ji.getListenId_(e,i),a={};this.listens_[o]=a;const l=ba(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),tn(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=ji.getListenId_(e,n);delete this.listens_[i]}get(e){const n=ba(e._queryParams),i=e._path.toString(),s=new Ie;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Un(a.responseText)}catch{Ee("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Ee("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class km{constructor(){this.rootNode_=I.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function zi(){return{value:null,children:new Map}}function _n(t,e,n){if(O(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=N(e);t.children.has(i)||t.children.set(i,zi());const s=t.children.get(i);e=q(e),_n(s,e,n)}}function hr(t,e){if(O(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(X,(i,s)=>{_n(t,new $(i),s)}),hr(t,e)}}else if(t.children.size>0){const n=N(e);return e=q(e),t.children.has(n)&&hr(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function fr(t,e,n){t.value!==null?n(e,t.value):Am(t,(i,s)=>{const r=new $(e.toString()+"/"+i);fr(s,r,n)})}function Am(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Rm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ue(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Ca=10*1e3,Pm=30*1e3,Nm=5*60*1e3;class Om{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Rm(e);const i=Ca+(Pm-Ca)*Math.random();On(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ue(e,(s,r)=>{r>0&&We(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),On(this.reportStats_.bind(this),Math.floor(Math.random()*2*Nm))}}/**
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
 */var Pe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pe||(Pe={}));function eo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function to(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function no(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class qi{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Pe.ACK_USER_WRITE,this.source=eo()}operationForChild(e){if(O(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new qi(F(),n,this.revert)}}else return m(N(this.path)===e,"operationForChild called for unrelated child."),new qi(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class zn{constructor(e,n){this.source=e,this.path=n,this.type=Pe.LISTEN_COMPLETE}operationForChild(e){return O(this.path)?new zn(this.source,F()):new zn(this.source,q(this.path))}}/**
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
 */class Ft{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Pe.OVERWRITE}operationForChild(e){return O(this.path)?new Ft(this.source,F(),this.snap.getImmediateChild(e)):new Ft(this.source,q(this.path),this.snap)}}/**
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
 */class on{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Pe.MERGE}operationForChild(e){if(O(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Ft(this.source,F(),n.value):new on(this.source,F(),n)}else return m(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new on(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class gt{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(O(e))return this.isFullyInitialized()&&!this.filtered_;const n=N(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Dm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Lm(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Cm(o.childName,o.snapshotNode))}),Tn(t,s,"child_removed",e,i,n),Tn(t,s,"child_added",e,i,n),Tn(t,s,"child_moved",r,i,n),Tn(t,s,"child_changed",e,i,n),Tn(t,s,"value",e,i,n),s}function Tn(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Mm(t,a,l)),o.forEach(a=>{const l=xm(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function xm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Mm(t,e,n){if(e.childName==null||n.childName==null)throw un("Should only compare child_ events.");const i=new D(e.childName,e.snapshotNode),s=new D(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function ps(t,e){return{eventCache:t,serverCache:e}}function Dn(t,e,n,i){return ps(new gt(e,n,i),t.serverCache)}function jc(t,e,n,i){return ps(t.eventCache,new gt(e,n,i))}function Gi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ut(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Vs;const Fm=()=>(Vs||(Vs=new ye(Eg)),Vs);class K{constructor(e,n=Fm()){this.value=e,this.children=n}static fromObject(e){let n=new K(null);return ue(e,(i,s)=>{n=n.set(new $(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:F(),value:this.value};if(O(e))return null;{const i=N(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(q(e),n);return r!=null?{path:J(new $(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(O(e))return this;{const n=N(e),i=this.children.get(n);return i!==null?i.subtree(q(e)):new K(null)}}set(e,n){if(O(e))return new K(n,this.children);{const i=N(e),r=(this.children.get(i)||new K(null)).set(q(e),n),o=this.children.insert(i,r);return new K(this.value,o)}}remove(e){if(O(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=N(e),i=this.children.get(n);if(i){const s=i.remove(q(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new K(null):new K(this.value,r)}else return this}}get(e){if(O(e))return this.value;{const n=N(e),i=this.children.get(n);return i?i.get(q(e)):null}}setTree(e,n){if(O(e))return n;{const i=N(e),r=(this.children.get(i)||new K(null)).setTree(q(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new K(this.value,o)}}fold(e){return this.fold_(F(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(J(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,F(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(O(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(q(e),J(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,F(),n)}foreachOnPath_(e,n,i){if(O(e))return this;{this.value&&i(n,this.value);const s=N(e),r=this.children.get(s);return r?r.foreachOnPath_(q(e),J(n,s),i):new K(null)}}foreach(e){this.foreach_(F(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(J(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Ne{constructor(e){this.writeTree_=e}static empty(){return new Ne(new K(null))}}function Ln(t,e,n){if(O(e))return new Ne(new K(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=me(s,e);return r=r.updateChild(o,n),new Ne(t.writeTree_.set(s,r))}else{const s=new K(n),r=t.writeTree_.setTree(e,s);return new Ne(r)}}}function pr(t,e,n){let i=t;return ue(n,(s,r)=>{i=Ln(i,J(e,s),r)}),i}function Ta(t,e){if(O(e))return Ne.empty();{const n=t.writeTree_.setTree(e,new K(null));return new Ne(n)}}function _r(t,e){return Wt(t,e)!=null}function Wt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(me(n.path,e)):null}function Sa(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(X,(i,s)=>{e.push(new D(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new D(i,s.value))}),e}function dt(t,e){if(O(e))return t;{const n=Wt(t,e);return n!=null?new Ne(new K(n)):new Ne(t.writeTree_.subtree(e))}}function gr(t){return t.writeTree_.isEmpty()}function an(t,e){return zc(F(),t.writeTree_,e)}function zc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=zc(J(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(J(t,".priority"),i)),n}}/**
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
 */function _s(t,e){return Yc(e,t)}function Um(t,e,n,i,s){m(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Ln(t.visibleWrites,e,n)),t.lastWriteId=i}function Bm(t,e,n,i){m(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=pr(t.visibleWrites,e,n),t.lastWriteId=i}function $m(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Hm(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);m(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Wm(a,i.path)?s=!1:ke(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Vm(t),!0;if(i.snap)t.visibleWrites=Ta(t.visibleWrites,i.path);else{const a=i.children;ue(a,l=>{t.visibleWrites=Ta(t.visibleWrites,J(i.path,l))})}return!0}else return!1}function Wm(t,e){if(t.snap)return ke(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ke(J(t.path,n),e))return!0;return!1}function Vm(t){t.visibleWrites=qc(t.allWrites,jm,F()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jm(t){return t.visible}function qc(t,e,n){let i=Ne.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)ke(n,o)?(a=me(n,o),i=Ln(i,a,r.snap)):ke(o,n)&&(a=me(o,n),i=Ln(i,F(),r.snap.getChild(a)));else if(r.children){if(ke(n,o))a=me(n,o),i=pr(i,a,r.children);else if(ke(o,n))if(a=me(o,n),O(a))i=pr(i,F(),r.children);else{const l=tn(r.children,N(a));if(l){const c=l.getChild(q(a));i=Ln(i,F(),c)}}}else throw un("WriteRecord should have .snap or .children")}}return i}function Gc(t,e,n,i,s){if(!i&&!s){const r=Wt(t.visibleWrites,e);if(r!=null)return r;{const o=dt(t.visibleWrites,e);if(gr(o))return n;if(n==null&&!_r(o,F()))return null;{const a=n||I.EMPTY_NODE;return an(o,a)}}}else{const r=dt(t.visibleWrites,e);if(!s&&gr(r))return n;if(!s&&n==null&&!_r(r,F()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ke(c.path,e)||ke(e,c.path))},a=qc(t.allWrites,o,e),l=n||I.EMPTY_NODE;return an(a,l)}}}function zm(t,e,n){let i=I.EMPTY_NODE;const s=Wt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(X,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=dt(t.visibleWrites,e);return n.forEachChild(X,(o,a)=>{const l=an(dt(r,new $(o)),a);i=i.updateImmediateChild(o,l)}),Sa(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=dt(t.visibleWrites,e);return Sa(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function qm(t,e,n,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=J(e,n);if(_r(t.visibleWrites,r))return null;{const o=dt(t.visibleWrites,r);return gr(o)?s.getChild(n):an(o,s.getChild(n))}}function Gm(t,e,n,i){const s=J(e,n),r=Wt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=dt(t.visibleWrites,s);return an(o,i.getNode().getImmediateChild(n))}else return null}function Km(t,e){return Wt(t.visibleWrites,e)}function Ym(t,e,n,i,s,r,o){let a;const l=dt(t.visibleWrites,e),c=Wt(l,F());if(c!=null)a=c;else if(n!=null)a=an(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function Qm(){return{visibleWrites:Ne.empty(),allWrites:[],lastWriteId:-1}}function Ki(t,e,n,i){return Gc(t.writeTree,t.treePath,e,n,i)}function io(t,e){return zm(t.writeTree,t.treePath,e)}function ka(t,e,n,i){return qm(t.writeTree,t.treePath,e,n,i)}function Yi(t,e){return Km(t.writeTree,J(t.treePath,e))}function Jm(t,e,n,i,s,r){return Ym(t.writeTree,t.treePath,e,n,i,s,r)}function so(t,e,n){return Gm(t.writeTree,t.treePath,e,n)}function Kc(t,e){return Yc(J(t.treePath,e),t.writeTree)}function Yc(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Xm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;m(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Vn(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Wn(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,rn(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Vn(i,e.snapshotNode,s.oldSnap));else throw un("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Zm{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Qc=new Zm;class ro{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new gt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return so(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ut(this.viewCache_),r=Jm(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function ev(t){return{filter:t}}function tv(t,e){m(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nv(t,e,n,i,s){const r=new Xm;let o,a;if(n.type===Pe.OVERWRITE){const c=n;c.source.fromUser?o=mr(t,e,c.path,c.snap,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!O(c.path),o=Qi(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Pe.MERGE){const c=n;c.source.fromUser?o=sv(t,e,c.path,c.children,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vr(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Pe.ACK_USER_WRITE){const c=n;c.revert?o=av(t,e,c.path,i,s,r):o=rv(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Pe.LISTEN_COMPLETE)o=ov(t,e,n.path,i,r);else throw un("Unknown operation type: "+n.type);const l=r.getChanges();return iv(e,o,l),{viewCache:o,changes:l}}function iv(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Gi(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Vc(Gi(e)))}}function Jc(t,e,n,i,s,r){const o=e.eventCache;if(Yi(i,n)!=null)return e;{let a,l;if(O(n))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ut(e),u=c instanceof I?c:I.EMPTY_NODE,d=io(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Ki(i,Ut(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=N(n);if(c===".priority"){m(_t(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=ka(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=q(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=ka(i,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=so(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return Dn(e,a,o.isFullyInitialized()||O(n),t.filter.filtersNodes())}}function Qi(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(O(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=N(n);if(!l.isCompleteForPath(n)&&_t(n)>1)return e;const p=q(n),v=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,p,Qc,null)}const d=jc(e,c,l.isFullyInitialized()||O(n),u.filtersNodes()),h=new ro(s,d,r);return Jc(t,d,n,s,h,a)}function mr(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new ro(s,e,r);if(O(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Dn(e,c,!0,t.filter.filtersNodes());else{const d=N(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Dn(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=q(n),f=a.getNode().getImmediateChild(d);let p;if(O(h))p=i;else{const g=u.getCompleteChild(d);g!=null?Kr(h)===".priority"&&g.getChild(Mc(h)).isEmpty()?p=g:p=g.updateChild(h,i):p=I.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=Dn(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Aa(t,e){return t.eventCache.isCompleteForChild(e)}function sv(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=J(n,l);Aa(e,N(u))&&(a=mr(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=J(n,l);Aa(e,N(u))||(a=mr(t,a,u,c,s,r,o))}),a}function Ra(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function vr(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;O(n)?c=i:c=new K(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=Ra(t,f,h);l=Qi(t,l,new $(d),p,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=Ra(t,p,h);l=Qi(t,l,new $(d),g,s,r,o,a)}}),l}function rv(t,e,n,i,s,r,o){if(Yi(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(O(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Qi(t,e,n,l.getNode().getChild(n),s,r,a,o);if(O(n)){let c=new K(null);return l.getNode().forEachChild(Jt,(u,d)=>{c=c.set(new $(u),d)}),vr(t,e,n,c,s,r,a,o)}else return e}else{let c=new K(null);return i.foreach((u,d)=>{const h=J(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),vr(t,e,n,c,s,r,a,o)}}function ov(t,e,n,i,s){const r=e.serverCache,o=jc(e,r.getNode(),r.isFullyInitialized()||O(n),r.isFiltered());return Jc(t,o,n,i,Qc,s)}function av(t,e,n,i,s,r){let o;if(Yi(i,n)!=null)return e;{const a=new ro(i,e,s),l=e.eventCache.getNode();let c;if(O(n)||N(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ki(i,Ut(e));else{const d=e.serverCache.getNode();m(d instanceof I,"serverChildren would be complete if leaf node"),u=io(i,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=N(n);let d=so(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,q(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,I.EMPTY_NODE,q(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ki(i,Ut(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Yi(i,F())!=null,Dn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class lv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Xr(i.getIndex()),r=Sm(i);this.processor_=ev(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(I.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(I.EMPTY_NODE,a.getNode(),null),u=new gt(l,o.isFullyInitialized(),s.filtersNodes()),d=new gt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ps(d,u),this.eventGenerator_=new Dm(this.query_)}get query(){return this.query_}}function cv(t){return t.viewCache_.serverCache.getNode()}function uv(t){return Gi(t.viewCache_)}function dv(t,e){const n=Ut(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!O(e)&&!n.getImmediateChild(N(e)).isEmpty())?n.getChild(e):null}function Pa(t){return t.eventRegistrations_.length===0}function hv(t,e){t.eventRegistrations_.push(e)}function Na(t,e,n){const i=[];if(n){m(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Oa(t,e,n,i){e.type===Pe.MERGE&&e.source.queryId!==null&&(m(Ut(t.viewCache_),"We should always have a full cache before handling merges"),m(Gi(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=nv(t.processor_,s,e,n,i);return tv(t.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Xc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function fv(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(X,(r,o)=>{i.push(rn(r,o))}),n.isFullyInitialized()&&i.push(Vc(n.getNode())),Xc(t,i,n.getNode(),e)}function Xc(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Lm(t.eventGenerator_,e,n,s)}/**
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
 */let Ji;class Zc{constructor(){this.views=new Map}}function pv(t){m(!Ji,"__referenceConstructor has already been defined"),Ji=t}function _v(){return m(Ji,"Reference.ts has not been loaded"),Ji}function gv(t){return t.views.size===0}function oo(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),Oa(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Oa(o,e,n,i));return r}}function eu(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ki(n,s?i:null),l=!1;a?l=!0:i instanceof I?(a=io(n,i),l=!1):(a=I.EMPTY_NODE,l=!1);const c=ps(new gt(a,l,!1),new gt(i,s,!1));return new lv(e,c)}return o}function mv(t,e,n,i,s,r){const o=eu(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hv(o,n),fv(o,n)}function vv(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=mt(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Na(c,n,i)),Pa(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Na(l,n,i)),Pa(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!mt(t)&&r.push(new(_v())(e._repo,e._path)),{removed:r,events:o}}function tu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ht(t,e){let n=null;for(const i of t.views.values())n=n||dv(i,e);return n}function nu(t,e){if(e._queryParams.loadsAllData())return gs(t);{const i=e._queryIdentifier;return t.views.get(i)}}function iu(t,e){return nu(t,e)!=null}function mt(t){return gs(t)!=null}function gs(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Xi;function yv(t){m(!Xi,"__referenceConstructor has already been defined"),Xi=t}function wv(){return m(Xi,"Reference.ts has not been loaded"),Xi}let Ev=1;class Da{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=Qm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bv(t,e,n,i,s){return Um(t.pendingWriteTree_,e,n,i,s),s?gn(t,new Ft(eo(),e,n)):[]}function Iv(t,e,n,i){Bm(t.pendingWriteTree_,e,n,i);const s=K.fromObject(n);return gn(t,new on(eo(),e,s))}function Ot(t,e,n=!1){const i=$m(t.pendingWriteTree_,e);if(Hm(t.pendingWriteTree_,e)){let r=new K(null);return i.snap!=null?r=r.set(F(),!0):ue(i.children,o=>{r=r.set(new $(o),!0)}),gn(t,new qi(i.path,r,n))}else return[]}function oi(t,e,n){return gn(t,new Ft(to(),e,n))}function Cv(t,e,n){const i=K.fromObject(n);return gn(t,new on(to(),e,i))}function Tv(t,e){return gn(t,new zn(to(),e))}function Sv(t,e,n){const i=ao(t,n);if(i){const s=lo(i),r=s.path,o=s.queryId,a=me(r,e),l=new zn(no(o),a);return co(t,r,l)}else return[]}function Zi(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||iu(o,e))){const l=vv(o,e,n,i);gv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,f)=>mt(f));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=Rv(h);for(let p=0;p<f.length;++p){const g=f[p],v=g.query,b=lu(t,g);t.listenProvider_.startListening(xn(v),qn(t,v),b.hashFn,b.onComplete)}}}!d&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(xn(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(ms(h));t.listenProvider_.stopListening(xn(h),f)}))}Pv(t,c)}return a}function su(t,e,n,i){const s=ao(t,i);if(s!=null){const r=lo(s),o=r.path,a=r.queryId,l=me(o,e),c=new Ft(no(a),l,n);return co(t,o,c)}else return[]}function kv(t,e,n,i){const s=ao(t,i);if(s){const r=lo(s),o=r.path,a=r.queryId,l=me(o,e),c=K.fromObject(n),u=new on(no(a),l,c);return co(t,o,u)}else return[]}function yr(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const p=me(h,s);r=r||ht(f,p),o=o||mt(f)});let a=t.syncPointTree_.get(s);a?(o=o||mt(a),r=r||ht(a,F())):(a=new Zc,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=I.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,p)=>{const g=ht(p,F());g&&(r=r.updateImmediateChild(f,g))}));const c=iu(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ms(e);m(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Nv();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=_s(t.pendingWriteTree_,s);let d=mv(a,e,n,u,r,l);if(!c&&!o&&!i){const h=nu(a,e);d=d.concat(Ov(t,e,h))}return d}function ru(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=me(o,e),c=ht(a,l);if(c)return c});return Gc(s,e,r,n,!0)}function Av(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=me(c,n);i=i||ht(u,d)});let s=t.syncPointTree_.get(n);s?i=i||ht(s,F()):(s=new Zc,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new gt(i,!0,!1):null,a=_s(t.pendingWriteTree_,e._path),l=eu(s,e,a,r?o.getNode():I.EMPTY_NODE,r);return uv(l)}function gn(t,e){return ou(e,t.syncPointTree_,null,_s(t.pendingWriteTree_,F()))}function ou(t,e,n,i){if(O(t.path))return au(t,e,n,i);{const s=e.get(F());s!=null&&(n=ht(s,F()));let r=[];const o=N(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=Kc(i,o);r=r.concat(ou(a,l,null,u))}return s&&(r=r.concat(oo(s,t,i,n))),r}}function au(t,e,n,i){const s=e.get(F());s!=null&&(n=ht(s,F()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=Kc(i,o),u=t.operationForChild(o);u&&(r=r.concat(au(u,a,null,c)))}),s&&(r=r.concat(oo(s,t,i,n))),r}function lu(t,e){const n=e.query,i=qn(t,n);return{hashFn:()=>(cv(e)||I.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Sv(t,n._path,i):Tv(t,n._path);{const r=Cg(s,n);return Zi(t,n,null,r)}}}}function qn(t,e){const n=ms(e);return t.queryToTagMap.get(n)}function ms(t){return t._path.toString()+"$"+t._queryIdentifier}function ao(t,e){return t.tagToQueryMap.get(e)}function lo(t){const e=t.indexOf("$");return m(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function co(t,e,n){const i=t.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=_s(t.pendingWriteTree_,e);return oo(i,n,s,null)}function Rv(t){return t.fold((e,n,i)=>{if(n&&mt(n))return[gs(n)];{let s=[];return n&&(s=tu(n)),ue(i,(r,o)=>{s=s.concat(o)}),s}})}function xn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(wv())(t._repo,t._path):t}function Pv(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=ms(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Nv(){return Ev++}function Ov(t,e,n){const i=e._path,s=qn(t,e),r=lu(t,n),o=t.listenProvider_.startListening(xn(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)m(!mt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!O(c)&&u&&mt(u))return[gs(u).query];{let h=[];return u&&(h=h.concat(tu(u).map(f=>f.query))),ue(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(xn(u),qn(t,u))}}return o}/**
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
 */class uo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new uo(n)}node(){return this.node_}}class ho{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=J(this.path_,e);return new ho(this.syncTree_,n)}node(){return ru(this.syncTree_,this.path_)}}const Dv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},La=function(t,e,n){if(!t||typeof t!="object")return t;if(m(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Lv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xv(t[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Lv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:m(!1,"Unexpected server value: "+t)}},xv=function(t,e,n){t.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},cu=function(t,e,n,i){return fo(e,new ho(n,t),i)},Mv=function(t,e,n){return fo(t,new uo(e),n)};function fo(t,e,n){const i=t.getPriority().val(),s=La(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=La(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new oe(a,te(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new oe(s))),o.forEachChild(X,(a,l)=>{const c=fo(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class po{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function _o(t,e){let n=e instanceof $?e:new $(e),i=t,s=N(n);for(;s!==null;){const r=tn(i.node.children,s)||{children:{},childCount:0};i=new po(s,i,r),n=q(n),s=N(n)}return i}function mn(t){return t.node.value}function uu(t,e){t.node.value=e,wr(t)}function du(t){return t.node.childCount>0}function Fv(t){return mn(t)===void 0&&!du(t)}function vs(t,e){ue(t.node.children,(n,i)=>{e(new po(n,t,i))})}function hu(t,e,n,i){n&&!i&&e(t),vs(t,s=>{hu(s,e,!0,i)}),n&&i&&e(t)}function Uv(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ai(t){return new $(t.parent===null?t.name:ai(t.parent)+"/"+t.name)}function wr(t){t.parent!==null&&Bv(t.parent,t.name,t)}function Bv(t,e,n){const i=Fv(n),s=We(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,wr(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,wr(t))}/**
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
 */const $v=/[\[\].#$\/\u0000-\u001F\u007F]/,Hv=/[\[\].#$\u0000-\u001F\u007F]/,js=10*1024*1024,go=function(t){return typeof t=="string"&&t.length!==0&&!$v.test(t)},fu=function(t){return typeof t=="string"&&t.length!==0&&!Hv.test(t)},Wv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fu(t)},pu=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!hs(t)||t&&typeof t=="object"&&We(t,".sv")},xa=function(t,e,n,i){ys(nn(t,"value"),e,n)},ys=function(t,e,n){const i=n instanceof $?new sm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+St(i));if(typeof e=="function")throw new Error(t+"contains a function "+St(i)+" with contents = "+e.toString());if(hs(e))throw new Error(t+"contains "+e.toString()+" "+St(i));if(typeof e=="string"&&e.length>js/3&&us(e)>js)throw new Error(t+"contains a string greater than "+js+" utf8 bytes "+St(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ue(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!go(o)))throw new Error(t+" contains an invalid key ("+o+") "+St(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rm(i,o),ys(t,a,i),om(i)}),s&&r)throw new Error(t+' contains ".value" child '+St(i)+" in addition to actual children.")}},Vv=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=Hn(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!go(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(im);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&ke(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},_u=function(t,e,n,i){const s=nn(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];ue(e,(o,a)=>{const l=new $(o);if(ys(s,a,J(n,l)),Kr(l)===".priority"&&!pu(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Vv(s,r)},jv=function(t,e,n){if(hs(e))throw new Error(nn(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!pu(e))throw new Error(nn(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},gu=function(t,e,n,i){if(!fu(n))throw new Error(nn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zv=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gu(t,e,n)},wi=function(t,e){if(N(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!go(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wv(n))throw new Error(nn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Gv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mo(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Yr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function mu(t,e,n){mo(t,n),vu(t,i=>Yr(i,e))}function Be(t,e,n){mo(t,n),vu(t,i=>ke(i,e)||ke(e,i))}function vu(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Kv(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Kv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Nn&&ce("event: "+n.toString()),pn(i)}}}/**
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
 */const Yv="repo_interrupt",Qv=25;class Jv{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zi(),this.transactionQueueTree_=new po,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xv(t,e,n){if(t.stats_=qr(t.repoInfo_),t.forceRestClient_||Ag())t.server_=new ji(t.repoInfo_,(i,s,r,o)=>{Ma(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fa(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ie(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Qe(t.repoInfo_,e,(i,s,r,o)=>{Ma(t,i,s,r,o)},i=>{Fa(t,i)},i=>{ey(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Dg(t.repoInfo_,()=>new Om(t.stats_,t.server_)),t.infoData_=new km,t.infoSyncTree_=new Da({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=oi(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yo(t,"connected",!1),t.serverSyncTree_=new Da({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Be(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Zv(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vo(t){return Dv({timestamp:Zv(t)})}function Ma(t,e,n,i,s){t.dataUpdateCount++;const r=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Ui(n,c=>te(c));o=kv(t.serverSyncTree_,r,l,s)}else{const l=te(n);o=su(t.serverSyncTree_,r,l,s)}else if(i){const l=Ui(n,c=>te(c));o=Cv(t.serverSyncTree_,r,l)}else{const l=te(n);o=oi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Gn(t,r)),Be(t.eventQueue_,a,o)}function Fa(t,e){yo(t,"connected",e),e===!1&&iy(t)}function ey(t,e){ue(e,(n,i)=>{yo(t,n,i)})}function yo(t,e,n){const i=new $("/.info/"+e),s=te(n);t.infoData_.updateSnapshot(i,s);const r=oi(t.infoSyncTree_,i,s);Be(t.eventQueue_,i,r)}function yu(t){return t.nextWriteId_++}function ty(t,e,n){const i=Av(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=te(s).withIndex(e._queryParams.getIndex());yr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=oi(t.serverSyncTree_,e._path,r);else{const a=qn(t.serverSyncTree_,e);o=su(t.serverSyncTree_,e._path,r,a)}return Be(t.eventQueue_,e._path,o),Zi(t.serverSyncTree_,e,n,null,!0),r},s=>(ws(t,"get for query "+ie(e)+" failed: "+s),Promise.reject(new Error(s))))}function ny(t,e,n,i){ws(t,"update",{path:e.toString(),value:n});let s=!0;const r=vo(t),o={};if(ue(n,(a,l)=>{s=!1,o[a]=cu(J(e,a),te(l),t.serverSyncTree_,r)}),s)ce("update() called with empty data.  Don't do anything."),Bt(t,i,"ok",void 0);else{const a=yu(t),l=Iv(t.serverSyncTree_,e,o,a);mo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Ee("update at "+e+" failed: "+c);const h=Ot(t.serverSyncTree_,a,!d),f=h.length>0?Gn(t,e):e;Be(t.eventQueue_,f,h),Bt(t,i,c,u)}),ue(n,c=>{const u=Tu(t,J(e,c));Gn(t,u)}),Be(t.eventQueue_,e,[])}}function iy(t){ws(t,"onDisconnectEvents");const e=vo(t),n=zi();fr(t.onDisconnect_,F(),(s,r)=>{const o=cu(s,r,t.serverSyncTree_,e);_n(n,s,o)});let i=[];fr(n,F(),(s,r)=>{i=i.concat(oi(t.serverSyncTree_,s,r));const o=Tu(t,s);Gn(t,o)}),t.onDisconnect_=zi(),Be(t.eventQueue_,F(),i)}function sy(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&hr(t.onDisconnect_,e),Bt(t,n,i,s)})}function Ua(t,e,n,i){const s=te(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&_n(t.onDisconnect_,e,s),Bt(t,i,r,o)})}function ry(t,e,n,i,s){const r=te(n,i);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&_n(t.onDisconnect_,e,r),Bt(t,s,o,a)})}function oy(t,e,n,i){if(Fi(n)){ce("onDisconnect().update() called with empty data.  Don't do anything."),Bt(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,r)=>{s==="ok"&&ue(n,(o,a)=>{const l=te(a);_n(t.onDisconnect_,J(e,o),l)}),Bt(t,i,s,r)})}function ay(t,e,n){let i;N(e._path)===".info"?i=yr(t.infoSyncTree_,e,n):i=yr(t.serverSyncTree_,e,n),mu(t.eventQueue_,e._path,i)}function ly(t,e,n){let i;N(e._path)===".info"?i=Zi(t.infoSyncTree_,e,n):i=Zi(t.serverSyncTree_,e,n),mu(t.eventQueue_,e._path,i)}function wu(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Yv)}function ws(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ce(n,...e)}function Bt(t,e,n,i){e&&pn(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Eu(t,e,n){return ru(t.serverSyncTree_,e,n)||I.EMPTY_NODE}function wo(t,e=t.transactionQueueTree_){if(e||Es(t,e),mn(e)){const n=Iu(t,e);m(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&cy(t,ai(e),n)}else du(e)&&vs(e,n=>{wo(t,n)})}function cy(t,e,n){const i=n.map(c=>c.currentWriteId),s=Eu(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=me(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ws(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Ot(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Es(t,_o(t.transactionQueueTree_,e)),wo(t,t.transactionQueueTree_),Be(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)pn(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ee("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Gn(t,e)}},o)}function Gn(t,e){const n=bu(t,e),i=ai(n),s=Iu(t,n);return uy(t,s,i),i}function uy(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=me(n,l.path);let u=!1,d;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(Ot(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Qv)u=!0,d="maxretry",s=s.concat(Ot(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Eu(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){ys("transaction failed: Data returned ",f,l.path);let p=te(f);typeof f=="object"&&f!=null&&We(f,".priority")||(p=p.updatePriority(h.getPriority()));const v=l.currentWriteId,b=vo(t),C=Mv(p,h,b);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=C,l.currentWriteId=yu(t),o.splice(o.indexOf(v),1),s=s.concat(bv(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),s=s.concat(Ot(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",s=s.concat(Ot(t.serverSyncTree_,l.currentWriteId,!0))}Be(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}Es(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)pn(i[a]);wo(t,t.transactionQueueTree_)}function bu(t,e){let n,i=t.transactionQueueTree_;for(n=N(e);n!==null&&mn(i)===void 0;)i=_o(i,n),e=q(e),n=N(e);return i}function Iu(t,e){const n=[];return Cu(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Cu(t,e,n){const i=mn(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);vs(e,s=>{Cu(t,s,n)})}function Es(t,e){const n=mn(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,uu(e,n.length>0?n:void 0)}vs(e,i=>{Es(t,i)})}function Tu(t,e){const n=ai(bu(t,e)),i=_o(t.transactionQueueTree_,e);return Uv(i,s=>{zs(t,s)}),zs(t,i),hu(i,s=>{zs(t,s)}),n}function zs(t,e){const n=mn(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(m(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ot(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?uu(e,void 0):n.length=r+1,Be(t.eventQueue_,ai(e),s);for(let o=0;o<i.length;o++)pn(i[o])}}/**
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
 */function dy(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function hy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ee(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ba=function(t,e){const n=fy(t),i=n.namespace;n.domain==="firebase.com"&&Xe(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Xe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yg();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kc(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new $(n.pathString)}},fy=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(s=dy(t.substring(u,d)));const h=hy(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class py{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ie(this.snapshot.exportVal())}}class _y{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Su{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class gy{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Ie;return sy(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){wi("OnDisconnect.remove",this._path);const e=new Ie;return Ua(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){wi("OnDisconnect.set",this._path),xa("OnDisconnect.set",e,this._path);const n=new Ie;return Ua(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){wi("OnDisconnect.setWithPriority",this._path),xa("OnDisconnect.setWithPriority",e,this._path),jv("OnDisconnect.setWithPriority",n);const i=new Ie;return ry(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){wi("OnDisconnect.update",this._path),_u("OnDisconnect.update",e,this._path);const n=new Ie;return oy(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Eo{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return O(this._path)?null:Kr(this._path)}get ref(){return new et(this._repo,this._path)}get _queryIdentifier(){const e=Ia(this._queryParams),n=jr(e);return n==="{}"?"default":n}get _queryObject(){return Ia(this._queryParams)}isEqual(e){if(e=pe(e),!(e instanceof Eo))return!1;const n=this._repo===e._repo,i=Yr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+nm(this._path)}}class et extends Eo{constructor(e,n){super(e,n,new Zr,!1)}get parent(){const e=Mc(this._path);return e===null?null:new et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kn{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),i=Er(this.ref,e);return new Kn(this._node.getChild(n),i,X)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Kn(s,Er(this.ref,i),X)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sn(t,e){return t=pe(t),t._checkNotDeleted("ref"),e!==void 0?Er(t._root,e):t._root}function Er(t,e){return t=pe(t),N(t._path)===null?zv("child","path",e):gu("child","path",e),new et(t._repo,J(t._path,e))}function my(t){return t=pe(t),new gy(t._repo,t._path)}function $a(t,e){_u("update",e,t._path);const n=new Ie;return ny(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ei(t){t=pe(t);const e=new Su(()=>{}),n=new bs(e);return ty(t._repo,t,n).then(i=>new Kn(i,new et(t._repo,t._path),t._queryParams.getIndex()))}class bs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new py("value",this,new Kn(e.snapshotNode,new et(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _y(this,e,n):null}matches(e){return e instanceof bs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function vy(t,e,n,i,s){const r=new Su(n,void 0),o=new bs(r);return ay(t._repo,t,o),()=>ly(t._repo,t,o)}function Ha(t,e,n,i){return vy(t,"value",e)}pv(et);yv(et);/**
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
 */const yy="FIREBASE_DATABASE_EMULATOR_HOST",br={};let wy=!1;function Ey(t,e,n,i){t.repoInfo_=new kc(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function by(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Xe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ba(r,s),a=o.repoInfo,l;typeof process<"u"&&ra&&(l=ra[yy]),l?(r=`http://${l}?ns=${a.namespace}`,o=Ba(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Pg(t.name,t.options,e);qv("Invalid Firebase Database URL",o),O(o.path)||Xe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Cy(a,t,c,new Rg(t.name,n));return new Ty(u,t)}function Iy(t,e){const n=br[e];(!n||n[t.key]!==t)&&Xe(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wu(t),delete n[t.key]}function Cy(t,e,n,i){let s=br[e.name];s||(s={},br[e.name]=s);let r=s[t.toURLString()];return r&&Xe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Jv(t,wy,n,i),s[t.toURLString()]=r,r}class Ty{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new et(this._repo,F())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Iy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xe("Cannot call "+e+" on a deleted database.")}}function Wa(t=Vr(),e){const n=ni(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Bp("database");i&&Sy(n,...i)}return n}function Sy(t,e,n,i={}){t=pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Xe("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Xe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ki(ki.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:$p(i.mockUserToken,t.app.options.projectId);r=new ki(o)}Ey(s,e,n,r)}function Va(t){t=pe(t),t._checkNotDeleted("goOffline"),wu(t._repo)}/**
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
 */function ky(t){fg(fn),pt(new Je("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return by(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ye(oa,aa,t),Ye(oa,aa,"esm2017")}/**
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
 */const Ay={".sv":"timestamp"};function ja(){return Ay}function qs(t){return{".sv":{increment:t}}}Qe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ky();function bo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function ku(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ry=ku,Au=new dn("auth","Firebase",ku());/**
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
 */const es=new ds("@firebase/auth");function Py(t,...e){es.logLevel<=V.WARN&&es.warn(`Auth (${fn}): ${t}`,...e)}function Ai(t,...e){es.logLevel<=V.ERROR&&es.error(`Auth (${fn}): ${t}`,...e)}/**
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
 */function De(t,...e){throw Io(t,...e)}function xe(t,...e){return Io(t,...e)}function Ru(t,e,n){const i=Object.assign(Object.assign({},Ry()),{[e]:n});return new dn("auth","Firebase",i).create(e,{appName:t.name})}function ft(t){return Ru(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Io(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Au.create(t,...e)}function T(t,e,...n){if(!t)throw Io(e,...n)}function qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ai(e),new Error(e)}function Ze(t,e){t||qe(e)}/**
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
 */function Ir(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ny(){return za()==="http:"||za()==="https:"}function za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Oy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ny()||Hp()||"connection"in navigator)?navigator.onLine:!0}function Dy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class li{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ze(n>e,"Short delay should be less than long delay!"),this.isMobile=$r()||rc()}get(){return Oy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Co(t,e){Ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Pu{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ly={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xy=new li(3e4,6e4);function Vt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yt(t,e,n,i,s={}){return Nu(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=hn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Pu.fetch()(Ou(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Nu(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ly),e);try{const s=new Fy(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw bi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bi(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ru(t,u,c);De(t,u)}}catch(s){if(s instanceof vt)throw s;De(t,"network-request-failed",{message:String(s)})}}async function Is(t,e,n,i,s={}){const r=await yt(t,e,n,i,s);return"mfaPendingCredential"in r&&De(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ou(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Co(t.config,s):`${t.config.apiScheme}://${s}`}function My(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(xe(this.auth,"network-request-failed")),xy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bi(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=xe(t,e,i);return s.customData._tokenResponse=n,s}function qa(t){return t!==void 0&&t.enterprise!==void 0}class Uy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return My(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function By(t,e){return yt(t,"GET","/v2/recaptchaConfig",Vt(t,e))}/**
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
 */async function $y(t,e){return yt(t,"POST","/v1/accounts:delete",e)}async function Du(t,e){return yt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hy(t,e=!1){const n=pe(t),i=await n.getIdToken(e),s=To(i);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Mn(Gs(s.auth_time)),issuedAtTime:Mn(Gs(s.iat)),expirationTime:Mn(Gs(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Gs(t){return Number(t)*1e3}function To(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ai("JWT malformed, contained fewer than 3 sections"),null;try{const s=Mi(n);return s?JSON.parse(s):(Ai("Failed to decode base64 JWT payload"),null)}catch(s){return Ai("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ga(t){const e=To(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yn(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof vt&&Wy(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Wy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Vy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ts(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Yn(t,Du(n,{idToken:i}));T(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Lu(r.providerUserInfo):[],a=zy(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Cr(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function jy(t){const e=pe(t);await ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zy(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Lu(t){return t.map(e=>{var{providerId:n}=e,i=bo(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function qy(t,e){const n=await Nu(t,{},async()=>{const i=hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Ou(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pu.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Gy(t,e){return yt(t,"POST","/v2/accounts:revokeToken",Vt(t,e))}/**
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
 */class Xt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ga(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){T(e.length!==0,"internal-error");const n=Ga(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(T(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await qy(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Xt;return i&&(T(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(T(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(T(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xt,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
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
 */function tt(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ge{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=bo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Cr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hy(this,e)}reload(){return jy(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ge(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ts(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(ft(this.auth));const e=await this.getIdToken();return await Yn(this,$y(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:k,isAnonymous:H,providerData:z,stsTokenManager:P}=n;T(y&&P,e,"internal-error");const W=Xt.fromJSON(this.name,P);T(typeof y=="string",e,"internal-error"),tt(d,e.name),tt(h,e.name),T(typeof k=="boolean",e,"internal-error"),T(typeof H=="boolean",e,"internal-error"),tt(f,e.name),tt(p,e.name),tt(g,e.name),tt(v,e.name),tt(b,e.name),tt(C,e.name);const Z=new Ge({uid:y,auth:e,email:h,emailVerified:k,displayName:d,isAnonymous:H,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:W,createdAt:b,lastLoginAt:C});return z&&Array.isArray(z)&&(Z.providerData=z.map(A=>Object.assign({},A))),v&&(Z._redirectEventId=v),Z}static async _fromIdTokenResponse(e,n,i=!1){const s=new Xt;s.updateFromServerResponse(n);const r=new Ge({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ts(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];T(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Lu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new Xt;a.updateFromIdToken(i);const l=new Ge({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Cr(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Ka=new Map;function Ke(t){Ze(t instanceof Function,"Expected a class definition");let e=Ka.get(t);return e?(Ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ka.set(t,e),e)}/**
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
 */class xu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xu.type="NONE";const Ya=xu;/**
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
 */function Ri(t,e,n){return`firebase:${t}:${e}:${n}`}class Zt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ri(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ri("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ge._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Zt(Ke(Ya),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ke(Ya);const o=Ri(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Ge._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Zt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Zt(r,e,i))}}/**
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
 */function Qa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($u(e))return"Blackberry";if(Hu(e))return"Webos";if(So(e))return"Safari";if((e.includes("chrome/")||Fu(e))&&!e.includes("edge/"))return"Chrome";if(Bu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Mu(t=_e()){return/firefox\//i.test(t)}function So(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fu(t=_e()){return/crios\//i.test(t)}function Uu(t=_e()){return/iemobile/i.test(t)}function Bu(t=_e()){return/android/i.test(t)}function $u(t=_e()){return/blackberry/i.test(t)}function Hu(t=_e()){return/webos/i.test(t)}function Cs(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ky(t=_e()){var e;return Cs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yy(){return Wp()&&document.documentMode===10}function Wu(t=_e()){return Cs(t)||Bu(t)||Hu(t)||$u(t)||/windows phone/i.test(t)||Uu(t)}function Qy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vu(t,e=[]){let n;switch(t){case"Browser":n=Qa(_e());break;case"Worker":n=`${Qa(_e())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fn}/${i}`}/**
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
 */class Jy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Xy(t,e={}){return yt(t,"GET","/v2/passwordPolicy",Vt(t,e))}/**
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
 */const Zy=6;class ew{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Zy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class tw{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ja(this),this.idTokenSubscription=new Ja(this),this.beforeStateQueue=new Jy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Au,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ke(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Zt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Du(this,{idToken:e}),i=await Ge._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ts(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(ft(this));const n=e?pe(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xy(this),n=new ew(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Gy(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ke(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await Zt.create(this,[Ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(T(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Py(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vn(t){return pe(t)}class Ja{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qp(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ts={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nw(t){Ts=t}function ju(t){return Ts.loadJS(t)}function iw(){return Ts.recaptchaEnterpriseScript}function sw(){return Ts.gapiScript}function rw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ow="recaptcha-enterprise",aw="NO_RECAPTCHA";class lw{constructor(e){this.type=ow,this.auth=vn(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{By(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Uy(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;qa(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(aw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&qa(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=iw();l.length!==0&&(l+=a),ju(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Xa(t,e,n,i=!1){const s=new lw(t);let r;try{r=await s.verify(n)}catch{r=await s.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Za(t,e,n,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Xa(t,e,n,n==="getOobCode");return i(t,r)}else return i(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xa(t,e,n,n==="getOobCode");return i(t,o)}else return Promise.reject(r)})}/**
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
 */function cw(t,e){const n=ni(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Bi(r,e??{}))return s;De(s,"already-initialized")}return n.initialize({options:e})}function uw(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function dw(t,e,n){const i=vn(t);T(i._canInitEmulator,i,"emulator-config-failed"),T(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=zu(e),{host:o,port:a}=hw(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),fw()}function zu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hw(t){const e=zu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:el(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:el(o)}}}function el(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ko{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,n){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}async function pw(t,e){return yt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _w(t,e){return Is(t,"POST","/v1/accounts:signInWithPassword",Vt(t,e))}/**
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
 */async function gw(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}async function mw(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}/**
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
 */class Qn extends ko{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Qn(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Qn(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Za(e,n,"signInWithPassword",_w);case"emailLink":return gw(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Za(e,i,"signUpPassword",pw);case"emailLink":return mw(e,{idToken:n,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function en(t,e){return Is(t,"POST","/v1/accounts:signInWithIdp",Vt(t,e))}/**
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
 */const vw="http://localhost";class $t extends ko{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):De("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=bo(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new $t(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return en(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,en(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,en(e,n)}buildRequest(){const e={requestUri:vw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hn(n)}return e}}/**
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
 */function yw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ww(t){const e=Rn(Pn(t)).link,n=e?Rn(Pn(e)).deep_link_id:null,i=Rn(Pn(t)).deep_link_id;return(i?Rn(Pn(i)).link:null)||i||n||e||t}class Ao{constructor(e){var n,i,s,r,o,a;const l=Rn(Pn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=yw((s=l.mode)!==null&&s!==void 0?s:null);T(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ww(e);try{return new Ao(n)}catch{return null}}}/**
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
 */class yn{constructor(){this.providerId=yn.PROVIDER_ID}static credential(e,n){return Qn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Ao.parseLink(n);return T(i,"argument-error"),Qn._fromEmailAndCode(e,i.code,i.tenantId)}}yn.PROVIDER_ID="password";yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ci extends qu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class st extends ci{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.FACEBOOK_SIGN_IN_METHOD="facebook.com";st.PROVIDER_ID="facebook.com";/**
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
 */class rt extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return rt.credential(n,i)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class ot extends ci{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
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
 */class at extends ci{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return at.credential(n,i)}catch{return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com";at.PROVIDER_ID="twitter.com";/**
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
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Ge._fromIdTokenResponse(e,i,s),o=tl(i);return new ln({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=tl(i);return new ln({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function tl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ns extends vt{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ns.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new ns(e,n,i,s)}}function Gu(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ns._fromErrorAndOperation(t,r,e,i):r})}async function Ew(t,e,n=!1){const i=await Yn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ln._forOperation(t,"link",i)}/**
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
 */async function bw(t,e,n=!1){const{auth:i}=t;if(je(i.app))return Promise.reject(ft(i));const s="reauthenticate";try{const r=await Yn(t,Gu(i,s,e,t),n);T(r.idToken,i,"internal-error");const o=To(r.idToken);T(o,i,"internal-error");const{sub:a}=o;return T(t.uid===a,i,"user-mismatch"),ln._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&De(i,"user-mismatch"),r}}/**
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
 */async function Ku(t,e,n=!1){if(je(t.app))return Promise.reject(ft(t));const i="signIn",s=await Gu(t,i,e),r=await ln._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Iw(t,e){return Ku(vn(t),e)}/**
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
 */async function Cw(t){const e=vn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Tw(t,e,n){return je(t.app)?Promise.reject(ft(t)):Iw(pe(t),yn.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Cw(t),i})}/**
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
 */function Sw(t,e){return pe(t).setPersistence(e)}function kw(t,e,n,i){return pe(t).onIdTokenChanged(e,n,i)}function Aw(t,e,n){return pe(t).beforeAuthStateChanged(e,n)}function Rw(t){return pe(t).signOut()}const is="__sak";/**
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
 */class Yu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(is,"1"),this.storage.removeItem(is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Pw(){const t=_e();return So(t)||Cs(t)}const Nw=1e3,Ow=10;class Qu extends Yu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pw()&&Qy(),this.fallbackToPolling=Wu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Yy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ow):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Nw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qu.type="LOCAL";const Dw=Qu;/**
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
 */class Ju extends Yu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ju.type="SESSION";const Ro=Ju;/**
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
 */function Lw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ss{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Ss(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Lw(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ss.receivers=[];/**
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
 */function Po(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Po("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Me(){return window}function Mw(t){Me().location.href=t}/**
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
 */function Xu(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function Fw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bw(){return Xu()?self:null}/**
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
 */const Zu="firebaseLocalStorageDb",$w=1,ss="firebaseLocalStorage",ed="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ks(t,e){return t.transaction([ss],e?"readwrite":"readonly").objectStore(ss)}function Hw(){const t=indexedDB.deleteDatabase(Zu);return new ui(t).toPromise()}function Tr(){const t=indexedDB.open(Zu,$w);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ss,{keyPath:ed})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ss)?e(i):(i.close(),await Hw(),e(await Tr()))})})}async function nl(t,e,n){const i=ks(t,!0).put({[ed]:e,value:n});return new ui(i).toPromise()}async function Ww(t,e){const n=ks(t,!1).get(e),i=await new ui(n).toPromise();return i===void 0?null:i.value}function il(t,e){const n=ks(t,!0).delete(e);return new ui(n).toPromise()}const Vw=800,jw=3;class td{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>jw)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ss._getInstance(Bw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fw(),!this.activeServiceWorker)return;this.sender=new xw(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tr();return await nl(e,is,"1"),await il(e,is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>nl(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Ww(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>il(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ks(s,!1).getAll();return new ui(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}td.type="LOCAL";const zw=td;new li(3e4,6e4);/**
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
 */function qw(t,e){return e?Ke(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class No extends ko{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return en(e,this._buildIdpRequest())}_linkToIdToken(e,n){return en(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return en(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gw(t){return Ku(t.auth,new No(t),t.bypassAuthState)}function Kw(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),bw(n,new No(t),t.bypassAuthState)}async function Yw(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Ew(n,new No(t),t.bypassAuthState)}/**
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
 */class nd{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gw;case"linkViaPopup":case"linkViaRedirect":return Yw;case"reauthViaPopup":case"reauthViaRedirect":return Kw;default:De(this.auth,"internal-error")}}resolve(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qw=new li(2e3,1e4);class Kt extends nd{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){Ze(this.filter.length===1,"Popup operations only handle one event");const e=Po();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qw.get())};e()}}Kt.currentPopupAction=null;/**
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
 */const Jw="pendingRedirect",Pi=new Map;class Xw extends nd{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const i=await Zw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zw(t,e){const n=nE(e),i=tE(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function eE(t,e){Pi.set(t._key(),e)}function tE(t){return Ke(t._redirectPersistence)}function nE(t){return Ri(Jw,t.config.apiKey,t.name)}async function iE(t,e,n=!1){if(je(t.app))return Promise.reject(ft(t));const i=vn(t),s=qw(i,e),o=await new Xw(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const sE=10*60*1e3;class rE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!id(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(xe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sE&&this.cachedEventUids.clear(),this.cachedEventUids.has(sl(e))}saveEventToCache(e){this.cachedEventUids.add(sl(e)),this.lastProcessedEventTime=Date.now()}}function sl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function id({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return id(t);default:return!1}}/**
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
 */async function aE(t,e={}){return yt(t,"GET","/v1/projects",e)}/**
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
 */const lE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cE=/^https?/;async function uE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aE(t);for(const n of e)try{if(dE(n))return}catch{}De(t,"unauthorized-domain")}function dE(t){const e=Ir(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!cE.test(n))return!1;if(lE.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const hE=new li(3e4,6e4);function rl(){const t=Me().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fE(t){return new Promise((e,n)=>{var i,s,r;function o(){rl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rl(),n(xe(t,"network-request-failed"))},timeout:hE.get()})}if(!((s=(i=Me().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Me().gapi)===null||r===void 0)&&r.load)o();else{const a=rw("iframefcb");return Me()[a]=()=>{gapi.load?o():n(xe(t,"network-request-failed"))},ju(`${sw()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ni=null,e})}let Ni=null;function pE(t){return Ni=Ni||fE(t),Ni}/**
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
 */const _E=new li(5e3,15e3),gE="__/auth/iframe",mE="emulator/auth/iframe",vE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wE(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Co(e,mE):`https://${t.config.authDomain}/${gE}`,i={apiKey:e.apiKey,appName:t.name,v:fn},s=yE.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${hn(i).slice(1)}`}async function EE(t){const e=await pE(t),n=Me().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:wE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vE,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=xe(t,"network-request-failed"),a=Me().setTimeout(()=>{r(o)},_E.get());function l(){Me().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const bE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IE=500,CE=600,TE="_blank",SE="http://localhost";class ol{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kE(t,e,n,i=IE,s=CE){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bE),{width:i.toString(),height:s.toString(),top:r,left:o}),c=_e().toLowerCase();n&&(a=Fu(c)?TE:n),Mu(c)&&(e=e||SE,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(Ky(c)&&a!=="_self")return AE(e||"",a),new ol(null);const d=window.open(e||"",a,u);T(d,t,"popup-blocked");try{d.focus()}catch{}return new ol(d)}function AE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const RE="__/auth/handler",PE="emulator/auth/handler",NE=encodeURIComponent("fac");async function al(t,e,n,i,s,r){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:fn,eventId:s};if(e instanceof qu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof ci){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${NE}=${encodeURIComponent(l)}`:"";return`${OE(t)}?${hn(a).slice(1)}${c}`}function OE({config:t}){return t.emulator?Co(t,PE):`https://${t.authDomain}/${RE}`}/**
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
 */const Ks="webStorageSupport";class DE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ro,this._completeRedirectFn=iE,this._overrideRedirectResult=eE}async _openPopup(e,n,i,s){var r;Ze((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await al(e,n,i,Ir(),s);return kE(e,o,Po())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await al(e,n,i,Ir(),s);return Mw(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ze(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await EE(e),i=new rE(e);return n.register("authEvent",s=>(T(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ks,{type:Ks},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ks];o!==void 0&&n(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wu()||So()||Cs()}}const LE=DE;var ll="@firebase/auth",cl="1.7.1";/**
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
 */class xE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ME(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FE(t){pt(new Je("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vu(t)},c=new tw(i,s,r,l);return uw(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),pt(new Je("auth-internal",e=>{const n=vn(e.getProvider("auth").getImmediate());return(i=>new xE(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(ll,cl,ME(t)),Ye(ll,cl,"esm2017")}/**
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
 */const UE=5*60,BE=sc("authIdTokenMaxAge")||UE;let ul=null;const $E=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>BE)return;const s=n==null?void 0:n.token;ul!==s&&(ul=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function HE(t=Vr()){const e=ni(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cw(t,{popupRedirectResolver:LE,persistence:[zw,Dw,Ro]}),i=sc("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=$E(r.toString());Aw(n,o,()=>o(n.currentUser)),kw(n,a=>o(a))}}const s=nc("auth");return s&&dw(n,`http://${s}`),n}function WE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nw({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=xe("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",WE().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FE("Browser");/**
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
 */const Sr=new Map,sd={activated:!1,tokenObservers:[]},VE={initialized:!1,enabled:!1};function se(t){return Sr.get(t)||Object.assign({},sd)}function jE(t,e){return Sr.set(t,e),Sr.get(t)}function As(){return VE}/**
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
 */const rd="https://content-firebaseappcheck.googleapis.com/v1",zE="exchangeRecaptchaV3Token",qE="exchangeDebugToken",dl={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},GE=24*60*60*1e3;/**
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
 */class KE{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ie,this.pending.promise.catch(n=>{}),await YE(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ie,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function YE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const QE={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},we=new dn("appCheck","AppCheck",QE);/**
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
 */function hl(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function Oo(t){if(!se(t).activated)throw we.create("use-before-activation",{appName:t.name})}function od(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),i=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-i*3600)/60),r=e-n*3600*24-i*3600-s*60;let o="";return n&&(o+=Ii(n)+"d:"),i&&(o+=Ii(i)+"h:"),o+=Ii(s)+"m:"+Ii(r)+"s",o}function Ii(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
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
 */async function Do({url:t,body:e},n){const i={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&(i["X-Firebase-Client"]=d)}const r={method:"POST",body:JSON.stringify(e),headers:i};let o;try{o=await fetch(t,r)}catch(d){throw we.create("fetch-network-error",{originalErrorMessage:d==null?void 0:d.message})}if(o.status!==200)throw we.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(d){throw we.create("fetch-parse-error",{originalErrorMessage:d==null?void 0:d.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw we.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(l[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+c,issuedAtTimeMillis:u}}function JE(t,e){const{projectId:n,appId:i,apiKey:s}=t.options;return{url:`${rd}/projects/${n}/apps/${i}:${zE}?key=${s}`,body:{recaptcha_v3_token:e}}}function ad(t,e){const{projectId:n,appId:i,apiKey:s}=t.options;return{url:`${rd}/projects/${n}/apps/${i}:${qE}?key=${s}`,body:{debug_token:e}}}/**
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
 */const XE="firebase-app-check-database",ZE=1,Jn="firebase-app-check-store",ld="debug-token";let Ci=null;function cd(){return Ci||(Ci=new Promise((t,e)=>{try{const n=indexedDB.open(XE,ZE);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(we.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Jn,{keyPath:"compositeKey"})}}}catch(n){e(we.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ci)}function eb(t){return dd(hd(t))}function tb(t,e){return ud(hd(t),e)}function nb(t){return ud(ld,t)}function ib(){return dd(ld)}async function ud(t,e){const i=(await cd()).transaction(Jn,"readwrite"),r=i.objectStore(Jn).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(we.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}async function dd(t){const n=(await cd()).transaction(Jn,"readonly"),s=n.objectStore(Jn).get(t);return new Promise((r,o)=>{s.onsuccess=a=>{const l=a.target.result;r(l?l.value:void 0)},n.onerror=a=>{var l;o(we.create("storage-get",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))}})}function hd(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Xn=new ds("@firebase/app-check");/**
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
 */async function sb(t){if(Hr()){let e;try{e=await eb(t)}catch(n){Xn.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Ys(t,e){return Hr()?tb(t,e).catch(n=>{Xn.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function rb(){let t;try{t=await ib()}catch{}if(t)return t;{const e=e_();return nb(e).catch(n=>Xn.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
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
 */function Lo(){return As().enabled}async function xo(){const t=As();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function ob(){const t=tc(),e=As();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new Ie;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(rb())}/**
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
 */const ab={error:"UNKNOWN_ERROR"};function lb(t){return cs.encodeString(JSON.stringify(t),!1)}async function kr(t,e=!1){const n=t.app;Oo(n);const i=se(n);let s=i.token,r;if(s&&!Yt(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Yt(l)?s=l:await Ys(n,void 0))}if(!e&&s&&Yt(s))return{token:s.token};let o=!1;if(Lo()){i.exchangeTokenPromise||(i.exchangeTokenPromise=Do(ad(n,await xo()),t.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),o=!0);const l=await i.exchangeTokenPromise;return await Ys(n,l),i.token=l,{token:l.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await se(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Xn.warn(l.message):Xn.error(l),r=l}let a;return s?r?Yt(s)?a={token:s.token,internalError:r}:a=pl(r):(a={token:s.token},i.token=s,await Ys(n,s)):a=pl(r),o&&_d(n,a),a}async function cb(t){const e=t.app;Oo(e);const{provider:n}=se(e);if(Lo()){const i=await xo(),{token:s}=await Do(ad(e,i),t.heartbeatServiceProvider);return{token:s}}else{const{token:i}=await n.getToken();return{token:i}}}function fd(t,e,n,i){const{app:s}=t,r=se(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Yt(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),fl(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>fl(t))}function pd(t,e){const n=se(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function fl(t){const{app:e}=t,n=se(e);let i=n.tokenRefresher;i||(i=ub(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function ub(t){const{app:e}=t;return new KE(async()=>{const n=se(e);let i;if(n.token?i=await kr(t,!0):i=await kr(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=se(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},dl.RETRIAL_MIN_WAIT,dl.RETRIAL_MAX_WAIT)}function _d(t,e){const n=se(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Yt(t){return t.expireTimeMillis-Date.now()>0}function pl(t){return{token:lb(ab),error:t}}/**
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
 */class db{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=se(this.app);for(const n of e)pd(this.app,n.next);return Promise.resolve()}}function hb(t,e){return new db(t,e)}function fb(t){return{getToken:e=>kr(t,e),getLimitedUseToken:()=>cb(t),addTokenListener:e=>fd(t,"INTERNAL",e),removeTokenListener:e=>pd(t.app,e)}}const pb="@firebase/app-check",_b="0.8.3";/**
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
 */const gb="https://www.google.com/recaptcha/api.js";function mb(t,e){const n=new Ie,i=se(t);i.reCAPTCHAState={initialized:n};const s=vb(t),r=hl(!1);return r?_l(t,e,r,s,n):Eb(()=>{const o=hl(!1);if(!o)throw new Error("no recaptcha");_l(t,e,o,s,n)}),n.promise}function _l(t,e,n,i,s){n.ready(()=>{wb(t,e,n,i),s.resolve(n)})}function vb(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function yb(t){Oo(t);const n=await se(t).reCAPTCHAState.initialized.promise;return new Promise((i,s)=>{const r=se(t).reCAPTCHAState;n.ready(()=>{i(n.execute(r.widgetId,{action:"fire_app_check"}))})})}function wb(t,e,n,i){const s=n.render(i,{sitekey:e,size:"invisible",callback:()=>{se(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{se(t).reCAPTCHAState.succeeded=!1}}),r=se(t);r.reCAPTCHAState=Object.assign(Object.assign({},r.reCAPTCHAState),{widgetId:s})}function Eb(t){const e=document.createElement("script");e.src=gb,e.onload=t,document.head.appendChild(e)}/**
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
 */class Mo{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,i;Ib(this._throttleData);const s=await yb(this._app).catch(o=>{throw we.create("recaptcha-error")});if(!(!((e=se(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw we.create("recaptcha-error");let r;try{r=await Do(JE(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=bb(Number((i=o.customData)===null||i===void 0?void 0:i.httpStatus),this._throttleData),we.create("throttled",{time:od(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=ni(e,"heartbeat"),mb(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Mo?this._siteKey===e._siteKey:!1}}function bb(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+GE,httpStatus:t};{const n=e?e.backoffCount:0,i=r_(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+i,httpStatus:t}}}function Ib(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw we.create("throttled",{time:od(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
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
 */function Cb(t=Vr(),e){t=pe(t);const n=ni(t,"app-check");if(As().initialized||ob(),Lo()&&xo().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(r.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&r.provider.isEqual(e.provider))return s;throw we.create("already-initialized",{appName:t.name})}const i=n.initialize({options:e});return Tb(t,e.provider,e.isTokenAutoRefreshEnabled),se(t).isTokenAutoRefreshEnabled&&fd(i,"INTERNAL",()=>{}),i}function Tb(t,e,n){const i=jE(t,Object.assign({},sd));i.activated=!0,i.provider=e,i.cachedTokenPromise=sb(t).then(s=>(s&&Yt(s)&&(i.token=s,_d(t,{token:s.token})),s)),i.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,i.provider.initialize(t)}const Sb="app-check",gl="app-check-internal";function kb(){pt(new Je(Sb,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return hb(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(gl).initialize()})),pt(new Je(gl,t=>{const e=t.getProvider("app-check").getImmediate();return fb(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ye(pb,_b)}kb();var wt={},Y={},le={};Object.defineProperty(le,"__esModule",{value:!0});le.output=le.exists=le.hash=le.bytes=le.bool=le.number=le.isBytes=void 0;function rs(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`positive integer expected, not ${t}`)}le.number=rs;function gd(t){if(typeof t!="boolean")throw new Error(`boolean expected, not ${t}`)}le.bool=gd;function md(t){return t instanceof Uint8Array||t!=null&&typeof t=="object"&&t.constructor.name==="Uint8Array"}le.isBytes=md;function Fo(t,...e){if(!md(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)}le.bytes=Fo;function vd(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");rs(t.outputLen),rs(t.blockLen)}le.hash=vd;function yd(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}le.exists=yd;function wd(t,e){Fo(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}le.output=wd;const Ab={number:rs,bool:gd,bytes:Fo,hash:vd,exists:yd,output:wd};le.default=Ab;var S={};Object.defineProperty(S,"__esModule",{value:!0});S.add5L=S.add5H=S.add4H=S.add4L=S.add3H=S.add3L=S.add=S.rotlBL=S.rotlBH=S.rotlSL=S.rotlSH=S.rotr32L=S.rotr32H=S.rotrBL=S.rotrBH=S.rotrSL=S.rotrSH=S.shrSL=S.shrSH=S.toBig=S.split=S.fromBig=void 0;const Ti=BigInt(2**32-1),Ar=BigInt(32);function Uo(t,e=!1){return e?{h:Number(t&Ti),l:Number(t>>Ar&Ti)}:{h:Number(t>>Ar&Ti)|0,l:Number(t&Ti)|0}}S.fromBig=Uo;function Ed(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:r,l:o}=Uo(t[s],e);[n[s],i[s]]=[r,o]}return[n,i]}S.split=Ed;const bd=(t,e)=>BigInt(t>>>0)<<Ar|BigInt(e>>>0);S.toBig=bd;const Id=(t,e,n)=>t>>>n;S.shrSH=Id;const Cd=(t,e,n)=>t<<32-n|e>>>n;S.shrSL=Cd;const Td=(t,e,n)=>t>>>n|e<<32-n;S.rotrSH=Td;const Sd=(t,e,n)=>t<<32-n|e>>>n;S.rotrSL=Sd;const kd=(t,e,n)=>t<<64-n|e>>>n-32;S.rotrBH=kd;const Ad=(t,e,n)=>t>>>n-32|e<<64-n;S.rotrBL=Ad;const Rd=(t,e)=>e;S.rotr32H=Rd;const Pd=(t,e)=>t;S.rotr32L=Pd;const Nd=(t,e,n)=>t<<n|e>>>32-n;S.rotlSH=Nd;const Od=(t,e,n)=>e<<n|t>>>32-n;S.rotlSL=Od;const Dd=(t,e,n)=>e<<n-32|t>>>64-n;S.rotlBH=Dd;const Ld=(t,e,n)=>t<<n-32|e>>>64-n;S.rotlBL=Ld;function xd(t,e,n,i){const s=(e>>>0)+(i>>>0);return{h:t+n+(s/2**32|0)|0,l:s|0}}S.add=xd;const Md=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0);S.add3L=Md;const Fd=(t,e,n,i)=>e+n+i+(t/2**32|0)|0;S.add3H=Fd;const Ud=(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0);S.add4L=Ud;const Bd=(t,e,n,i,s)=>e+n+i+s+(t/2**32|0)|0;S.add4H=Bd;const $d=(t,e,n,i,s)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(s>>>0);S.add5L=$d;const Hd=(t,e,n,i,s,r)=>e+n+i+s+r+(t/2**32|0)|0;S.add5H=Hd;const Rb={fromBig:Uo,split:Ed,toBig:bd,shrSH:Id,shrSL:Cd,rotrSH:Td,rotrSL:Sd,rotrBH:kd,rotrBL:Ad,rotr32H:Rd,rotr32L:Pd,rotlSH:Nd,rotlSL:Od,rotlBH:Dd,rotlBL:Ld,add:xd,add3L:Md,add3H:Fd,add4L:Ud,add4H:Bd,add5H:Hd,add5L:$d};S.default=Rb;var Wd={},Rs={};Object.defineProperty(Rs,"__esModule",{value:!0});Rs.crypto=void 0;Rs.crypto=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;(function(t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(t,"__esModule",{value:!0}),t.randomBytes=t.wrapXOFConstructorWithOpts=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.byteSwap32=t.byteSwapIfBE=t.byteSwap=t.isLE=t.rotl=t.rotr=t.createView=t.u32=t.u8=t.isBytes=void 0;const e=Rs,n=le;function i(_){return _ instanceof Uint8Array||_!=null&&typeof _=="object"&&_.constructor.name==="Uint8Array"}t.isBytes=i;const s=_=>new Uint8Array(_.buffer,_.byteOffset,_.byteLength);t.u8=s;const r=_=>new Uint32Array(_.buffer,_.byteOffset,Math.floor(_.byteLength/4));t.u32=r;const o=_=>new DataView(_.buffer,_.byteOffset,_.byteLength);t.createView=o;const a=(_,w)=>_<<32-w|_>>>w;t.rotr=a;const l=(_,w)=>_<<w|_>>>32-w>>>0;t.rotl=l,t.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;const c=_=>_<<24&4278190080|_<<8&16711680|_>>>8&65280|_>>>24&255;t.byteSwap=c,t.byteSwapIfBE=t.isLE?_=>_:_=>(0,t.byteSwap)(_);function u(_){for(let w=0;w<_.length;w++)_[w]=(0,t.byteSwap)(_[w])}t.byteSwap32=u;const d=Array.from({length:256},(_,w)=>w.toString(16).padStart(2,"0"));function h(_){(0,n.bytes)(_);let w="";for(let M=0;M<_.length;M++)w+=d[_[M]];return w}t.bytesToHex=h;const f={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function p(_){if(_>=f._0&&_<=f._9)return _-f._0;if(_>=f._A&&_<=f._F)return _-(f._A-10);if(_>=f._a&&_<=f._f)return _-(f._a-10)}function g(_){if(typeof _!="string")throw new Error("hex string expected, got "+typeof _);const w=_.length,M=w/2;if(w%2)throw new Error("padded hex string expected, got unpadded hex of length "+w);const R=new Uint8Array(M);for(let U=0,Q=0;U<M;U++,Q+=2){const re=p(_.charCodeAt(Q)),bt=p(_.charCodeAt(Q+1));if(re===void 0||bt===void 0){const jt=_[Q]+_[Q+1];throw new Error('hex string expected, got non-hex character "'+jt+'" at index '+Q)}R[U]=re*16+bt}return R}t.hexToBytes=g;const v=async()=>{};t.nextTick=v;async function b(_,w,M){let R=Date.now();for(let U=0;U<_;U++){M(U);const Q=Date.now()-R;Q>=0&&Q<w||(await(0,t.nextTick)(),R+=Q)}}t.asyncLoop=b;function C(_){if(typeof _!="string")throw new Error(`utf8ToBytes expected string, got ${typeof _}`);return new Uint8Array(new TextEncoder().encode(_))}t.utf8ToBytes=C;function y(_){return typeof _=="string"&&(_=C(_)),(0,n.bytes)(_),_}t.toBytes=y;function k(..._){let w=0;for(let R=0;R<_.length;R++){const U=_[R];(0,n.bytes)(U),w+=U.length}const M=new Uint8Array(w);for(let R=0,U=0;R<_.length;R++){const Q=_[R];M.set(Q,U),U+=Q.length}return M}t.concatBytes=k;class H{clone(){return this._cloneInto()}}t.Hash=H;const z={}.toString;function P(_,w){if(w!==void 0&&z.call(w)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(_,w)}t.checkOpts=P;function W(_){const w=R=>_().update(y(R)).digest(),M=_();return w.outputLen=M.outputLen,w.blockLen=M.blockLen,w.create=()=>_(),w}t.wrapConstructor=W;function Z(_){const w=(R,U)=>_(U).update(y(R)).digest(),M=_({});return w.outputLen=M.outputLen,w.blockLen=M.blockLen,w.create=R=>_(R),w}t.wrapConstructorWithOpts=Z;function A(_){const w=(R,U)=>_(U).update(y(R)).digest(),M=_({});return w.outputLen=M.outputLen,w.blockLen=M.blockLen,w.create=R=>_(R),w}t.wrapXOFConstructorWithOpts=A;function B(_=32){if(e.crypto&&typeof e.crypto.getRandomValues=="function")return e.crypto.getRandomValues(new Uint8Array(_));throw new Error("crypto.getRandomValues must be defined")}t.randomBytes=B})(Wd);Object.defineProperty(Y,"__esModule",{value:!0});Y.shake256=Y.shake128=Y.keccak_512=Y.keccak_384=Y.keccak_256=Y.keccak_224=Y.sha3_512=Y.sha3_384=Y.sha3_256=Y.sha3_224=Y.Keccak=Y.keccakP=void 0;const qt=le,Zn=S,Ve=Wd,Vd=[],jd=[],zd=[],Pb=BigInt(0),kn=BigInt(1),Nb=BigInt(2),Ob=BigInt(7),Db=BigInt(256),Lb=BigInt(113);for(let t=0,e=kn,n=1,i=0;t<24;t++){[n,i]=[i,(2*n+3*i)%5],Vd.push(2*(5*i+n)),jd.push((t+1)*(t+2)/2%64);let s=Pb;for(let r=0;r<7;r++)e=(e<<kn^(e>>Ob)*Lb)%Db,e&Nb&&(s^=kn<<(kn<<BigInt(r))-kn);zd.push(s)}const[xb,Mb]=(0,Zn.split)(zd,!0),ml=(t,e,n)=>n>32?(0,Zn.rotlBH)(t,e,n):(0,Zn.rotlSH)(t,e,n),vl=(t,e,n)=>n>32?(0,Zn.rotlBL)(t,e,n):(0,Zn.rotlSL)(t,e,n);function qd(t,e=24){const n=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let o=0;o<10;o++)n[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,l=(o+2)%10,c=n[l],u=n[l+1],d=ml(c,u,1)^n[a],h=vl(c,u,1)^n[a+1];for(let f=0;f<50;f+=10)t[o+f]^=d,t[o+f+1]^=h}let s=t[2],r=t[3];for(let o=0;o<24;o++){const a=jd[o],l=ml(s,r,a),c=vl(s,r,a),u=Vd[o];s=t[u],r=t[u+1],t[u]=l,t[u+1]=c}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)n[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=xb[i],t[1]^=Mb[i]}n.fill(0)}Y.keccakP=qd;class di extends Ve.Hash{constructor(e,n,i,s=!1,r=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=i,this.enableXOF=s,this.rounds=r,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,qt.number)(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,Ve.u32)(this.state)}keccak(){Ve.isLE||(0,Ve.byteSwap32)(this.state32),qd(this.state32,this.rounds),Ve.isLE||(0,Ve.byteSwap32)(this.state32),this.posOut=0,this.pos=0}update(e){(0,qt.exists)(this);const{blockLen:n,state:i}=this;e=(0,Ve.toBytes)(e);const s=e.length;for(let r=0;r<s;){const o=Math.min(n-this.pos,s-r);for(let a=0;a<o;a++)i[this.pos++]^=e[r++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:i,blockLen:s}=this;e[i]^=n,n&128&&i===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){(0,qt.exists)(this,!1),(0,qt.bytes)(e),this.finish();const n=this.state,{blockLen:i}=this;for(let s=0,r=e.length;s<r;){this.posOut>=i&&this.keccak();const o=Math.min(i-this.posOut,r-s);e.set(n.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return(0,qt.number)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,qt.output)(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:i,outputLen:s,rounds:r,enableXOF:o}=this;return e||(e=new di(n,i,s,o,r)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=r,e.suffix=i,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}}Y.Keccak=di;const Et=(t,e,n)=>(0,Ve.wrapConstructor)(()=>new di(e,t,n));Y.sha3_224=Et(6,144,224/8);Y.sha3_256=Et(6,136,256/8);Y.sha3_384=Et(6,104,384/8);Y.sha3_512=Et(6,72,512/8);Y.keccak_224=Et(1,144,224/8);Y.keccak_256=Et(1,136,256/8);Y.keccak_384=Et(1,104,384/8);Y.keccak_512=Et(1,72,512/8);const Gd=(t,e,n)=>(0,Ve.wrapXOFConstructorWithOpts)((i={})=>new di(e,t,i.dkLen===void 0?n:i.dkLen,!0));Y.shake128=Gd(31,168,128/8);Y.shake256=Gd(31,136,256/8);const{sha3_512:Fb}=Y,Kd=24,Fn=32,Rr=(t=4,e=Math.random)=>{let n="";for(;n.length<t;)n=n+Math.floor(e()*36).toString(36);return n};function Yd(t){let e=8n,n=0n;for(const i of t.values()){const s=BigInt(i);n=(n<<e)+s}return n}const Qd=(t="")=>Yd(Fb(t)).toString(36).slice(1),yl=Array.from({length:26},(t,e)=>String.fromCharCode(e+97)),Ub=t=>yl[Math.floor(t()*yl.length)],Jd=({globalObj:t=typeof Bo<"u"?Bo:typeof window<"u"?window:{},random:e=Math.random}={})=>{const n=Object.keys(t).toString(),i=n.length?n+Rr(Fn,e):Rr(Fn,e);return Qd(i).substring(0,Fn)},Xd=t=>()=>t++,Bb=476782367,Zd=({random:t=Math.random,counter:e=Xd(Math.floor(t()*Bb)),length:n=Kd,fingerprint:i=Jd({random:t})}={})=>function(){const r=Ub(t),o=Date.now().toString(36),a=e().toString(36),l=Rr(n,t),c=`${o+l+a+i}`;return`${r+Qd(c).substring(1,n)}`},$b=Zd(),Hb=(t,{minLength:e=2,maxLength:n=Fn}={})=>{const i=t.length,s=/^[0-9a-z]+$/;try{if(typeof t=="string"&&i>=e&&i<=n&&s.test(t))return!0}finally{}return!1};wt.getConstants=()=>({defaultLength:Kd,bigLength:Fn});wt.init=Zd;wt.createId=$b;wt.bufToBigInt=Yd;wt.createCounter=Xd;wt.createFingerprint=Jd;wt.isCuid=Hb;const{createId:Wb,init:nI,getConstants:iI,isCuid:sI}=wt;var Vb=Wb;const jb={class:"bg-black min-h-[100dvh] w-full flex flex-col overflow-x-hidden"},zb={class:"w-[max(min(81%,640px),33.3333%)] aspect-[640/1080] relative left-1/2 -translate-x-1/2"},qb={class:"flex justify-center absolute items-center w-full aspect-video top-[9.07407407407%]"},Gb={key:0,class:"size-full"},Kb=["src"],Yb={key:1,class:"text-white text-lg md:text-xl text-center flex flex-col gap-3"},Qb=j("div",null,"Live belum dimulai",-1),Jb={key:2,class:"text-white font-semibold px-4 text-center text-base md:text-lg lg:text-xl"},Xb=j("div",{class:"absolute top-0 aspect-video w-[300%] left-1/2 -translate-x-1/2 -z-10"},[j("img",{class:"size-full object-cover",src:"https://static.showroom-live.com/image/room_background/default.png?v=3",alt:""})],-1),Zb=j("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"},null,-1),rI=ge({__name:"index",setup(t){const e=E(!1),n=E(null),i={apiKey:"AIzaSyCmFoeQm28lLubMcuXjwfVrO2Grwn57E_s",authDomain:"showroom-shared.firebaseapp.com",projectId:"showroom-shared",storageBucket:"showroom-shared.appspot.com",messagingSenderId:"888402111940",appId:"1:888402111940:web:2d4ed3c66a21893c45c891",measurementId:"G-EEC924TW6T",databaseURL:"https://showroom-shared-default-rtdb.asia-southeast1.firebasedatabase.app/"},s=E(null),r=E(0),o=Ih(),a=E(0),l=E(),c=E(),u=uc(i);fe(()=>{const g=String(o.hash);if(g)try{Qs().public.debug_token&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=Qs().public.debug_token);const v=cp(g.replace("#","")),[b,C,y]=v.split(":");Cb(u,{provider:new Mo("6LefEccpAAAAANFbgY9zm6MQjhIiuYhvgamAG4dF"),isTokenAutoRefreshEnabled:!0});const k=Wa(u),H=HE(u);Sw(H,Ro).then(()=>Tw(H,b,C)).then(async z=>{if(c.value=z,z.user.email!==b){await Rw(H).catch(R=>null),window.location.reload();return}const P={device_count:qs(-1),last_changed:ja()},W={device_count:qs(1),play_count:qs(1),last_changed:ja()},Z=Sn(k,`status/${z.user.uid}`),A=Sn(k,`/ticket/${z.user.uid}`),B=(await Ei(A)).val(),_=Sn(k,`/premium_live/${y??(B==null?void 0:B.ticket)}`);a.value=Number.isNaN(B.max_device)?1:Number(B.max_device);const w=(await Ei(Z)).val();l.value=w==null?void 0:w.refresh_key;let M;(w==null?void 0:w.device_count)>=a.value?e.value=!0:(M=my(Z),M.update(P).then(function(){$a(Z,W)}),Ha(_,async R=>{var Q;if((((Q=R.val())==null?void 0:Q.mode)??"")==="spread"){const re=(await Ei(A)).val();console.log("REF",`/stream_urls/${y??(re==null?void 0:re.ticket)}/${String(re==null?void 0:re.stream_id)}`);const bt=Sn(k,`/stream_urls/${y??(re==null?void 0:re.ticket)}/${String(re==null?void 0:re.stream_id)}`),jt=(await Ei(bt)).val();r.value+=1,s.value={...R.val(),streaming_url_list:jt}}else R.val()?(s.value=R.val(),r.value+=1):Va(k)})),Ha(Z,R=>{var U;((U=R.val())==null?void 0:U.refresh_key)!==l.value&&(n.value="Kamu menekan tombol reset, silahkan refresh halaman ini",e.value=!0,M&&M.cancel().then(()=>{Va(k)}))})}).catch(z=>{console.error(z)})}catch(v){console.error(v)}});const d=E(!1);async function h(){d.value=!1;try{if(!c.value)return;const g=Wa(u),v=Sn(g,`status/${c.value.user.uid}`);await $a(v,{device_count:0,refresh_key:Vb()})}catch(g){console.error(g)}}const f=x(()=>{var g;return((g=s.value)==null?void 0:g.title)??"Showroom Live"}),p=x(()=>{var g,v;return(v=(g=s.value)==null?void 0:g.streaming_url_list)==null?void 0:v.some(b=>Ko(b.url))});return Sh({title:f}),(g,v)=>{var H,z,P,W,Z,A;const b=$f,C=rp,y=Dh,k=Np;return de(),ve("div",jb,[kt(b,{"is-open":L(d),onClose:v[0]||(v[0]=()=>d.value=!1),onReset:h},null,8,["is-open"]),j("div",zb,[j("div",qb,[L(s)&&!L(e)&&((z=(H=L(s))==null?void 0:H.streaming_url_list)!=null&&z.length)?(de(),ve("div",Gb,[L(p)?(de(),ve("iframe",{id:"ytplayer",key:`yt-${L(r)}`,type:"text/html",class:"size-full",src:(A=L(s).streaming_url_list.find(B=>("isYoutubeEmbedUrl"in g?g.isYoutubeEmbedUrl:L(Ko))(B.url)))==null?void 0:A.url,frameborder:"0"},null,8,Kb)):(de(),Js(C,{key:L(r),class:"size-full",sources:((P=L(s))==null?void 0:P.streaming_url_list)??[],title:(W=L(s))==null?void 0:W.title,poster:(Z=L(s))==null?void 0:Z.image},null,8,["sources","title","poster"]))])):!L(e)&&L(s)?(de(),ve("div",Yb,[j("div",null,nt(L(s).title),1),Qb])):Le("",!0),L(e)?(de(),ve("div",Jb,nt(L(n)??`Maaf pemutaran hanya
          untuk ${L(a)} device`),1)):Le("",!0)]),L(c)?(de(),ve("button",{key:0,class:"absolute top-[44.44%] right-0 hover:bg-red-400/30 text-red-500 px-3 py-1 rounded-full",onClick:v[1]||(v[1]=()=>d.value=!0)},"Reset")):Le("",!0),Xb,kt(y,{to:"https://t.me/showroomlivebot",external:!0,target:"_blank",title:"Showroom Live Bot Telegram",class:"telegram-button absolute left-1/2 -translate-x-1/2 bottom-[41%] w-[10.5%] aspect-square rounded-full bg-red-500 hover:scale-110 transition-[box-shadow,transform] duration-300 origin-bottom"},{default:Ct(()=>[Zb]),_:1}),L(s)&&!L(e)?(de(),Js(k,{key:1,time:L(s).start_at,class:"absolute left-1/2 -translate-x-1/2 top-[80%] md:top-[44.3%] text-white font-bold"},null,8,["time"])):Le("",!0)])])}}});export{rI as default};
