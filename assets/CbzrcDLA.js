import{k as Mc,r as C,l as we,m as Pe,n as Cs,p as Fc,q as Bc,s as $c,v as Ss,x as Hc,y as Oo,d as ce,c as R,z as Do,o as ae,A as Wc,B as Uc,C as jc,D as oe,E as Vc,F as zc,G as qc,H as Gc,I as Kc,a as Yc,J as Lo,K as Qc,L as Xc,M as Jc,N as Ee,O as ke,P as Zc,Q as Ts,R as Ie,S as eu,T as Mo,U as tu,V as nu,W as Is,j as be,h as iu,w as yt,e as Ut,g as K,X as nt,Y as Fo,Z as su,_ as ru,f as ee,b as Ae,$ as ou,a0 as au,t as wt,i as Et,a1 as Sr}from"./DqPUB4IS.js";function lu(t,e={}){const n=e.head||Mc();if(n)return n.ssr?n.push(t,e):cu(n,t,e)}function cu(t,e,n={}){const i=C(!1),s=C({});we(()=>{s.value=i.value?{}:$c(e)});const r=t.push(s.value,n);return Pe(s,a=>{r.patch(a)}),Ss()&&(Cs(()=>{r.dispose()}),Fc(()=>{i.value=!0}),Bc(()=>{i.value=!1})),r}function hv(t,e={}){return lu(t,{...e,transform:Hc})}async function Bo(t,e=Oo()){const{path:n,matched:i}=e.resolve(t);if(!i.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>Bo(t,e));e._routePreloaded.add(n);const r=i.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of r){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const uu=(...t)=>t.find(e=>e!==void 0);function du(t){const e=t.componentName||"NuxtLink";function n(i,s){if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;if(typeof i=="string")return Tr(i,t.trailingSlash);const r="path"in i&&i.path!==void 0?i.path:s(i).path;return{...i,name:void 0,path:Tr(r,t.trailingSlash)}}return ce({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(i,{slots:s}){const r=Oo(),o=Yc(),a=R(()=>{const p=i.to||i.href||"";return n(p,r.resolve)}),l=R(()=>typeof a.value=="string"&&Do(a.value,{acceptRelative:!0})),c=R(()=>i.target&&i.target!=="_self"),u=R(()=>i.external||c.value?!0:typeof a.value=="object"?!1:a.value===""||l.value),d=C(!1),h=C(null),f=p=>{var m;h.value=i.custom?(m=p==null?void 0:p.$el)==null?void 0:m.nextElementSibling:p==null?void 0:p.$el};if(i.prefetch!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!fu()){const m=Lo();let v,T=null;ae(()=>{const y=hu();Wc(()=>{v=Uc(()=>{var S;(S=h==null?void 0:h.value)!=null&&S.tagName&&(T=y.observe(h.value,async()=>{T==null||T(),T=null;const L=typeof a.value=="string"?a.value:r.resolve(a.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",L).catch(()=>{}),!u.value&&Bo(a.value,r).catch(()=>{})]),d.value=!0}))})})}),Cs(()=>{v&&jc(v),T==null||T(),T=null})}return()=>{var T,y;if(!u.value){const S={ref:f,to:a.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(d.value&&(S.class=i.prefetchedClass||t.prefetchedClass),S.rel=i.rel||void 0),oe(Vc("RouterLink"),S,s.default)}const p=typeof a.value=="object"?((T=r.resolve(a.value))==null?void 0:T.href)??null:a.value&&!i.external&&!l.value?n(zc(o.app.baseURL,a.value),r.resolve):a.value||null,m=i.target||null,v=uu(i.noRel?"":i.rel,t.externalRelAttribute,l.value||c.value?"noopener noreferrer":"")||null;if(i.custom){if(!s.default)return null;const S=()=>Qc(p,{replace:i.replace,external:i.external});return s.default({href:p,navigate:S,get route(){if(!p)return;const L=qc(p);return{path:L.pathname,fullPath:L.pathname,get query(){return Gc(L.search)},hash:L.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:p}},rel:v,target:m,isExternal:u.value,isActive:!1,isExactActive:!1})}return oe("a",{ref:h,href:p,rel:v,target:m},(y=s.default)==null?void 0:y.call(s))}}})}const fv=du(Kc);function Tr(t,e){const n=e==="append"?Xc:Jc;return Do(t)&&!t.startsWith("http")?t:n(t,!0)}function hu(){const t=Lo();if(t._observer)return t._observer;let e=null;const n=new Map,i=(r,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),n.set(r,o),e.observe(r),()=>{n.delete(r),e.unobserve(r),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:i}}function fu(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}let pu=Symbol("headlessui.useid"),_u=0;function ui(){return Ee(pu,()=>`${++_u}`)()}let $o=Symbol("Context");var _e=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(_e||{});function gu(){return As()!==null}function As(){return Ee($o,null)}function mu(t){ke($o,t)}function X(t){var e;if(t==null||t.value==null)return null;let n=(e=t.value.$el)!=null?e:t.value;return n instanceof Node?n:null}var vu=Object.defineProperty,yu=(t,e,n)=>e in t?vu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ir=(t,e,n)=>(yu(t,typeof e!="symbol"?e+"":e,n),n);let wu=class{constructor(){Ir(this,"current",this.detect()),Ir(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},yn=new wu;function Ne(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let i=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Ne),i}var jn=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(jn||{}),Ue=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(Ue||{});function xe({visible:t=!0,features:e=0,ourProps:n,theirProps:i,...s}){var r;let o=Wo(i,n),a=Object.assign(s,{props:o});if(t||e&2&&o.static)return Ni(a);if(e&1){let l=(r=o.unmount)==null||r?0:1;return Ne(l,{0(){return null},1(){return Ni({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Ni(a)}function Ni({props:t,attrs:e,slots:n,slot:i,name:s}){var r,o;let{as:a,...l}=Uo(t,["unmount","static"]),c=(r=n.default)==null?void 0:r.call(n,i),u={};if(i){let d=!1,h=[];for(let[f,p]of Object.entries(i))typeof p=="boolean"&&(d=!0),p===!0&&h.push(f);d&&(u["data-headlessui-state"]=h.join(" "))}if(a==="template"){if(c=Ho(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...h]=c??[];if(!Eu(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(m=>m.trim()).filter((m,v,T)=>T.indexOf(m)===v).sort((m,v)=>m.localeCompare(v)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let f=Wo((o=d.props)!=null?o:{},l,u),p=Zc(d,f,!0);for(let m in f)m.startsWith("on")&&(p.props||(p.props={}),p.props[m]=f[m]);return p}return Array.isArray(c)&&c.length===1?c[0]:c}return oe(a,Object.assign({},l,u),{default:()=>c})}function Ho(t){return t.flatMap(e=>e.type===Ts?Ho(e.children):[e])}function Wo(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let i of t)for(let s in i)s.startsWith("on")&&typeof i[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(i[s])):e[s]=i[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(i=>[i,void 0])));for(let i in n)Object.assign(e,{[i](s,...r){let o=n[i];for(let a of o){if(s instanceof Event&&s.defaultPrevented)return;a(s,...r)}}});return e}function Uo(t,e=[]){let n=Object.assign({},t);for(let i of e)i in n&&delete n[i];return n}function Eu(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}function ks(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function wn(){let t=[],e={addEventListener(n,i,s,r){return n.addEventListener(i,s,r),e.add(()=>n.removeEventListener(i,s,r))},requestAnimationFrame(...n){let i=requestAnimationFrame(...n);e.add(()=>cancelAnimationFrame(i))},nextFrame(...n){e.requestAnimationFrame(()=>{e.requestAnimationFrame(...n)})},setTimeout(...n){let i=setTimeout(...n);e.add(()=>clearTimeout(i))},microTask(...n){let i={current:!0};return ks(()=>{i.current&&n[0]()}),e.add(()=>{i.current=!1})},style(n,i,s){let r=n.style.getPropertyValue(i);return Object.assign(n.style,{[i]:s}),this.add(()=>{Object.assign(n.style,{[i]:r})})},group(n){let i=wn();return n(i),this.add(()=>i.dispose())},add(n){return t.push(n),()=>{let i=t.indexOf(n);if(i>=0)for(let s of t.splice(i,1))s()}},dispose(){for(let n of t.splice(0))n()}};return e}function bu(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function Ri(t,...e){t&&e.length>0&&t.classList.add(...e)}function Rn(t,...e){t&&e.length>0&&t.classList.remove(...e)}var zi=(t=>(t.Finished="finished",t.Cancelled="cancelled",t))(zi||{});function Cu(t,e){let n=wn();if(!t)return n.dispose;let{transitionDuration:i,transitionDelay:s}=getComputedStyle(t),[r,o]=[i,s].map(a=>{let[l=0]=a.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,u)=>u-c);return l});return r!==0?n.setTimeout(()=>e("finished"),r+o):e("finished"),n.add(()=>e("cancelled")),n.dispose}function Ar(t,e,n,i,s,r){let o=wn(),a=r!==void 0?bu(r):()=>{};return Rn(t,...s),Ri(t,...e,...n),o.nextFrame(()=>{Rn(t,...n),Ri(t,...i),o.add(Cu(t,l=>(Rn(t,...i,...e),Ri(t,...s),a(l))))}),o.add(()=>Rn(t,...e,...n,...i,...s)),o.add(()=>a("cancelled")),o.dispose}function Ze(t=""){return t.split(/\s+/).filter(e=>e.length>1)}let Ns=Symbol("TransitionContext");var Su=(t=>(t.Visible="visible",t.Hidden="hidden",t))(Su||{});function Tu(){return Ee(Ns,null)!==null}function Iu(){let t=Ee(Ns,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function Au(){let t=Ee(Rs,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}let Rs=Symbol("NestingContext");function di(t){return"children"in t?di(t.children):t.value.filter(({state:e})=>e==="visible").length>0}function jo(t){let e=C([]),n=C(!1);ae(()=>n.value=!0),Ie(()=>n.value=!1);function i(r,o=Ue.Hidden){let a=e.value.findIndex(({id:l})=>l===r);a!==-1&&(Ne(o,{[Ue.Unmount](){e.value.splice(a,1)},[Ue.Hidden](){e.value[a].state="hidden"}}),!di(e)&&n.value&&(t==null||t()))}function s(r){let o=e.value.find(({id:a})=>a===r);return o?o.state!=="visible"&&(o.state="visible"):e.value.push({id:r,state:"visible"}),()=>i(r,Ue.Unmount)}return{children:e,register:s,unregister:i}}let Vo=jn.RenderStrategy,zo=ce({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:i,expose:s}){let r=C(0);function o(){r.value|=_e.Opening,e("beforeEnter")}function a(){r.value&=~_e.Opening,e("afterEnter")}function l(){r.value|=_e.Closing,e("beforeLeave")}function c(){r.value&=~_e.Closing,e("afterLeave")}if(!Tu()&&gu())return()=>oe(qo,{...t,onBeforeEnter:o,onAfterEnter:a,onBeforeLeave:l,onAfterLeave:c},i);let u=C(null),d=R(()=>t.unmount?Ue.Unmount:Ue.Hidden);s({el:u,$el:u});let{show:h,appear:f}=Iu(),{register:p,unregister:m}=Au(),v=C(h.value?"visible":"hidden"),T={value:!0},y=ui(),S={value:!1},L=jo(()=>{!S.value&&v.value!=="hidden"&&(v.value="hidden",m(y),c())});ae(()=>{let w=p(y);Ie(w)}),we(()=>{if(d.value===Ue.Hidden&&y){if(h.value&&v.value!=="visible"){v.value="visible";return}Ne(v.value,{hidden:()=>m(y),visible:()=>p(y)})}});let fe=Ze(t.enter),pe=Ze(t.enterFrom),O=Ze(t.enterTo),z=Ze(t.entered),De=Ze(t.leave),N=Ze(t.leaveFrom),q=Ze(t.leaveTo);ae(()=>{we(()=>{if(v.value==="visible"){let w=X(u);if(w instanceof Comment&&w.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function _(w){let M=T.value&&!f.value,P=X(u);!P||!(P instanceof HTMLElement)||M||(S.value=!0,h.value&&o(),h.value||l(),w(h.value?Ar(P,fe,pe,O,z,F=>{S.value=!1,F===zi.Finished&&a()}):Ar(P,De,N,q,z,F=>{S.value=!1,F===zi.Finished&&(di(L)||(v.value="hidden",m(y),c()))})))}return ae(()=>{Pe([h],(w,M,P)=>{_(P),T.value=!1},{immediate:!0})}),ke(Rs,L),mu(R(()=>Ne(v.value,{visible:_e.Open,hidden:_e.Closed})|r.value)),()=>{let{appear:w,show:M,enter:P,enterFrom:F,enterTo:Q,entered:Ht,leave:Wt,leaveFrom:kn,leaveTo:$,...G}=t,me={ref:u},ve={...G,...f.value&&h.value&&yn.isServer?{class:eu([n.class,G.class,...fe,...pe])}:{}};return xe({theirProps:ve,ourProps:me,slot:{},slots:i,attrs:n,features:Vo,visible:v.value==="visible",name:"TransitionChild"})}}}),ku=zo,qo=ce({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:i}){let s=As(),r=R(()=>t.show===null&&s!==null?(s.value&_e.Open)===_e.Open:t.show);we(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=C(r.value?"visible":"hidden"),a=jo(()=>{o.value="hidden"}),l=C(!0),c={show:r,appear:R(()=>t.appear||!l.value)};return ae(()=>{we(()=>{l.value=!1,r.value?o.value="visible":di(a)||(o.value="hidden")})}),ke(Rs,a),ke(Ns,c),()=>{let u=Uo(t,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),d={unmount:t.unmount};return xe({ourProps:{...d,as:"template"},theirProps:{},slot:{},slots:{...i,default:()=>[oe(ku,{onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave"),...n,...d,...u},i.default)]},attrs:{},features:Vo,visible:o.value==="visible",name:"Transition"})}}});function Go(t,e,n,i){yn.isServer||we(s=>{t=t??window,t.addEventListener(e,n,i),s(()=>t.removeEventListener(e,n,i))})}function Ko(t,e,n){yn.isServer||we(i=>{window.addEventListener(t,e,n),i(()=>window.removeEventListener(t,e,n))})}var Qt=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(Qt||{});function Nu(){let t=C(0);return Ko("keydown",e=>{e.key==="Tab"&&(t.value=e.shiftKey?1:0)}),t}var Vn=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Vn||{});let qi=ce({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{var i;let{features:s,...r}=t,o={"aria-hidden":(s&2)===2?!0:(i=r["aria-hidden"])!=null?i:void 0,hidden:(s&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return xe({ourProps:o,theirProps:r,slot:{},attrs:n,slots:e,name:"Hidden"})}}});function Ru(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",e),e())}let it=[];Ru(()=>{function t(e){e.target instanceof HTMLElement&&e.target!==document.body&&it[0]!==e.target&&(it.unshift(e.target),it=it.filter(n=>n!=null&&n.isConnected),it.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function Ot(t){if(yn.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=X(t);if(e)return e.ownerDocument}return document}let Gi=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var We=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(We||{}),Yo=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(Yo||{}),Pu=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(Pu||{});function xu(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Gi)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Qo=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Qo||{});function Ou(t,e=0){var n;return t===((n=Ot(t))==null?void 0:n.body)?!1:Ne(e,{0(){return t.matches(Gi)},1(){let i=t;for(;i!==null;){if(i.matches(Gi))return!0;i=i.parentElement}return!1}})}var Du=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(Du||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function at(t){t==null||t.focus({preventScroll:!0})}let Lu=["textarea","input"].join(",");function Mu(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,Lu))!=null?n:!1}function Fu(t,e=n=>n){return t.slice().sort((n,i)=>{let s=e(n),r=e(i);if(s===null||r===null)return 0;let o=s.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Wn(t,e,{sorted:n=!0,relativeTo:i=null,skipElements:s=[]}={}){var r;let o=(r=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?r:document,a=Array.isArray(t)?n?Fu(t):t:xu(t);s.length>0&&a.length>1&&(a=a.filter(p=>!s.includes(p))),i=i??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(i))-1;if(e&4)return Math.max(0,a.indexOf(i))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,h=a.length,f;do{if(d>=h||d+h<=0)return 0;let p=c+d;if(e&16)p=(p+h)%h;else{if(p<0)return 3;if(p>=h)return 1}f=a[p],f==null||f.focus(u),d+=l}while(f!==o.activeElement);return e&6&&Mu(f)&&f.select(),2}function Xo(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let e=new Set;for(let n of t.value){let i=X(n);i instanceof HTMLElement&&e.add(i)}return e}var Jo=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(Jo||{});let jt=Object.assign(ce({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:C(new Set)}},inheritAttrs:!1,setup(t,{attrs:e,slots:n,expose:i}){let s=C(null);i({el:s,$el:s});let r=R(()=>Ot(s)),o=C(!1);ae(()=>o.value=!0),Ie(()=>o.value=!1),$u({ownerDocument:r},R(()=>o.value&&!!(t.features&16)));let a=Hu({ownerDocument:r,container:s,initialFocus:R(()=>t.initialFocus)},R(()=>o.value&&!!(t.features&2)));Wu({ownerDocument:r,container:s,containers:t.containers,previousActiveElement:a},R(()=>o.value&&!!(t.features&8)));let l=Nu();function c(f){let p=X(s);p&&(m=>m())(()=>{Ne(l.value,{[Qt.Forwards]:()=>{Wn(p,We.First,{skipElements:[f.relatedTarget]})},[Qt.Backwards]:()=>{Wn(p,We.Last,{skipElements:[f.relatedTarget]})}})})}let u=C(!1);function d(f){f.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function h(f){if(!o.value)return;let p=Xo(t.containers);X(s)instanceof HTMLElement&&p.add(X(s));let m=f.relatedTarget;m instanceof HTMLElement&&m.dataset.headlessuiFocusGuard!=="true"&&(Zo(p,m)||(u.value?Wn(X(s),Ne(l.value,{[Qt.Forwards]:()=>We.Next,[Qt.Backwards]:()=>We.Previous})|We.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&at(f.target)))}return()=>{let f={},p={ref:s,onKeydown:d,onFocusout:h},{features:m,initialFocus:v,containers:T,...y}=t;return oe(Ts,[!!(m&4)&&oe(qi,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:Vn.Focusable}),xe({ourProps:p,theirProps:{...e,...y},slot:f,attrs:e,slots:n,name:"FocusTrap"}),!!(m&4)&&oe(qi,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:Vn.Focusable})])}}}),{features:Jo});function Bu(t){let e=C(it.slice());return Pe([t],([n],[i])=>{i===!0&&n===!1?ks(()=>{e.value.splice(0)}):i===!1&&n===!0&&(e.value=it.slice())},{flush:"post"}),()=>{var n;return(n=e.value.find(i=>i!=null&&i.isConnected))!=null?n:null}}function $u({ownerDocument:t},e){let n=Bu(e);ae(()=>{we(()=>{var i,s;e.value||((i=t.value)==null?void 0:i.activeElement)===((s=t.value)==null?void 0:s.body)&&at(n())},{flush:"post"})}),Ie(()=>{e.value&&at(n())})}function Hu({ownerDocument:t,container:e,initialFocus:n},i){let s=C(null),r=C(!1);return ae(()=>r.value=!0),Ie(()=>r.value=!1),ae(()=>{Pe([e,n,i],(o,a)=>{if(o.every((c,u)=>(a==null?void 0:a[u])===c)||!i.value)return;let l=X(e);l&&ks(()=>{var c,u;if(!r.value)return;let d=X(n),h=(c=t.value)==null?void 0:c.activeElement;if(d){if(d===h){s.value=h;return}}else if(l.contains(h)){s.value=h;return}d?at(d):Wn(l,We.First|We.NoScroll)===Yo.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),s.value=(u=t.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),s}function Wu({ownerDocument:t,container:e,containers:n,previousActiveElement:i},s){var r;Go((r=t.value)==null?void 0:r.defaultView,"focus",o=>{if(!s.value)return;let a=Xo(n);X(e)instanceof HTMLElement&&a.add(X(e));let l=i.value;if(!l)return;let c=o.target;c&&c instanceof HTMLElement?Zo(a,c)?(i.value=c,at(c)):(o.preventDefault(),o.stopPropagation(),at(l)):at(i.value)},!0)}function Zo(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function Uu(t){let e=Mo(t.getSnapshot());return Ie(t.subscribe(()=>{e.value=t.getSnapshot()})),e}function ju(t,e){let n=t(),i=new Set;return{getSnapshot(){return n},subscribe(s){return i.add(s),()=>i.delete(s)},dispatch(s,...r){let o=e[s].call(n,...r);o&&(n=o,i.forEach(a=>a()))}}}function Vu(){let t;return{before({doc:e}){var n;let i=e.documentElement;t=((n=e.defaultView)!=null?n:window).innerWidth-i.clientWidth},after({doc:e,d:n}){let i=e.documentElement,s=i.clientWidth-i.offsetWidth,r=t-s;n.style(i,"paddingRight",`${r}px`)}}}function ea(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function zu(){return/Android/gi.test(window.navigator.userAgent)}function qu(){return ea()||zu()}function Gu(){return ea()?{before({doc:t,d:e,meta:n}){function i(s){return n.containers.flatMap(r=>r()).some(r=>r.contains(s))}e.microTask(()=>{var s;if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=wn();a.style(t.documentElement,"scrollBehavior","auto"),e.add(()=>e.microTask(()=>a.dispose()))}let r=(s=window.scrollY)!=null?s:window.pageYOffset,o=null;e.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let l=a.target.closest("a");if(!l)return;let{hash:c}=new URL(l.href),u=t.querySelector(c);u&&!i(u)&&(o=u)}catch{}},!0),e.addEventListener(t,"touchstart",a=>{if(a.target instanceof HTMLElement)if(i(a.target)){let l=a.target;for(;l.parentElement&&i(l.parentElement);)l=l.parentElement;e.style(l,"overscrollBehavior","contain")}else e.style(a.target,"touchAction","none")}),e.addEventListener(t,"touchmove",a=>{if(a.target instanceof HTMLElement)if(i(a.target)){let l=a.target;for(;l.parentElement&&l.dataset.headlessuiPortal!==""&&!(l.scrollHeight>l.clientHeight||l.scrollWidth>l.clientWidth);)l=l.parentElement;l.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()},{passive:!1}),e.add(()=>{var a;let l=(a=window.scrollY)!=null?a:window.pageYOffset;r!==l&&window.scrollTo(0,r),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function Ku(){return{before({doc:t,d:e}){e.style(t.documentElement,"overflow","hidden")}}}function Yu(t){let e={};for(let n of t)Object.assign(e,n(e));return e}let st=ju(()=>new Map,{PUSH(t,e){var n;let i=(n=this.get(t))!=null?n:{doc:t,count:0,d:wn(),meta:new Set};return i.count++,i.meta.add(e),this.set(t,i),this},POP(t,e){let n=this.get(t);return n&&(n.count--,n.meta.delete(e)),this},SCROLL_PREVENT({doc:t,d:e,meta:n}){let i={doc:t,d:e,meta:Yu(n)},s=[Gu(),Vu(),Ku()];s.forEach(({before:r})=>r==null?void 0:r(i)),s.forEach(({after:r})=>r==null?void 0:r(i))},SCROLL_ALLOW({d:t}){t.dispose()},TEARDOWN({doc:t}){this.delete(t)}});st.subscribe(()=>{let t=st.getSnapshot(),e=new Map;for(let[n]of t)e.set(n,n.documentElement.style.overflow);for(let n of t.values()){let i=e.get(n.doc)==="hidden",s=n.count!==0;(s&&!i||!s&&i)&&st.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&st.dispatch("TEARDOWN",n)}});function Qu(t,e,n){let i=Uu(st),s=R(()=>{let r=t.value?i.value.get(t.value):void 0;return r?r.count>0:!1});return Pe([t,e],([r,o],[a],l)=>{if(!r||!o)return;st.dispatch("PUSH",r,n);let c=!1;l(()=>{c||(st.dispatch("POP",a??r,n),c=!0)})},{immediate:!0}),s}let Pi=new Map,Vt=new Map;function kr(t,e=C(!0)){we(n=>{var i;if(!e.value)return;let s=X(t);if(!s)return;n(function(){var o;if(!s)return;let a=(o=Vt.get(s))!=null?o:1;if(a===1?Vt.delete(s):Vt.set(s,a-1),a!==1)return;let l=Pi.get(s);l&&(l["aria-hidden"]===null?s.removeAttribute("aria-hidden"):s.setAttribute("aria-hidden",l["aria-hidden"]),s.inert=l.inert,Pi.delete(s))});let r=(i=Vt.get(s))!=null?i:0;Vt.set(s,r+1),r===0&&(Pi.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),s.setAttribute("aria-hidden","true"),s.inert=!0)})}function Pn(t,e,n){yn.isServer||we(i=>{document.addEventListener(t,e,n),i(()=>document.removeEventListener(t,e,n))})}function Xu(t,e,n=R(()=>!0)){function i(r,o){if(!n.value||r.defaultPrevented)return;let a=o(r);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:X(c);if(u!=null&&u.contains(a)||r.composed&&r.composedPath().includes(u))return}return!Ou(a,Qo.Loose)&&a.tabIndex!==-1&&r.preventDefault(),e(r,a)}let s=C(null);Pn("pointerdown",r=>{var o,a;n.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),Pn("mousedown",r=>{var o,a;n.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),Pn("click",r=>{qu()||s.value&&(i(r,()=>s.value),s.value=null)},!0),Pn("touchend",r=>i(r,()=>r.target instanceof HTMLElement?r.target:null),!0),Ko("blur",r=>i(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Ju({defaultContainers:t=[],portals:e,mainTreeNodeRef:n}={}){let i=C(null),s=Ot(i);function r(){var o,a,l;let c=[];for(let u of t)u!==null&&(u instanceof HTMLElement?c.push(u):"value"in u&&u.value instanceof HTMLElement&&c.push(u.value));if(e!=null&&e.value)for(let u of e.value)c.push(u);for(let u of(o=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(X(i))||u.contains((l=(a=X(i))==null?void 0:a.getRootNode())==null?void 0:l.host)||c.some(d=>u.contains(d))||c.push(u));return c}return{resolveContainers:r,contains(o){return r().some(a=>a.contains(o))},mainTreeNodeRef:i,MainTreeNode(){return n!=null?null:oe(qi,{features:Vn.Hidden,ref:i})}}}let ta=Symbol("ForcePortalRootContext");function Zu(){return Ee(ta,!1)}let Nr=ce({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){return ke(ta,t.force),()=>{let{force:i,...s}=t;return xe({theirProps:s,ourProps:{},slot:{},slots:e,attrs:n,name:"ForcePortalRoot"})}}}),na=Symbol("StackContext");var Ki=(t=>(t[t.Add=0]="Add",t[t.Remove=1]="Remove",t))(Ki||{});function ed(){return Ee(na,()=>{})}function td({type:t,enabled:e,element:n,onUpdate:i}){let s=ed();function r(...o){i==null||i(...o),s(...o)}ae(()=>{Pe(e,(o,a)=>{o?r(0,t,n):a===!0&&r(1,t,n)},{immediate:!0,flush:"sync"})}),Ie(()=>{e.value&&r(1,t,n)}),ke(na,r)}var ia=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(ia||{});let nd=Symbol("DescriptionContext");function id({slot:t=C({}),name:e="Description",props:n={}}={}){let i=C([]);function s(r){return i.value.push(r),()=>{let o=i.value.indexOf(r);o!==-1&&i.value.splice(o,1)}}return ke(nd,{register:s,slot:t,name:e,props:n}),R(()=>i.value.length>0?i.value.join(" "):void 0)}function sd(t){let e=Ot(t);if(!e){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let n=e.getElementById("headlessui-portal-root");if(n)return n;let i=e.createElement("div");return i.setAttribute("id","headlessui-portal-root"),e.body.appendChild(i)}let rd=ce({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let i=C(null),s=R(()=>Ot(i)),r=Zu(),o=Ee(sa,null),a=C(r===!0||o==null?sd(i.value):o.resolveTarget()),l=C(!1);ae(()=>{l.value=!0}),we(()=>{r||o!=null&&(a.value=o.resolveTarget())});let c=Ee(Yi,null),u=!1,d=Ss();return Pe(i,()=>{if(u||!c)return;let h=X(i);h&&(Ie(c.register(h),d),u=!0)}),Ie(()=>{var h,f;let p=(h=s.value)==null?void 0:h.getElementById("headlessui-portal-root");p&&a.value===p&&a.value.children.length<=0&&((f=a.value.parentElement)==null||f.removeChild(a.value))}),()=>{if(!l.value||a.value===null)return null;let h={ref:i,"data-headlessui-portal":""};return oe(tu,{to:a.value},xe({ourProps:h,theirProps:t,slot:{},attrs:n,slots:e,name:"Portal"}))}}}),Yi=Symbol("PortalParentContext");function od(){let t=Ee(Yi,null),e=C([]);function n(r){return e.value.push(r),t&&t.register(r),()=>i(r)}function i(r){let o=e.value.indexOf(r);o!==-1&&e.value.splice(o,1),t&&t.unregister(r)}let s={register:n,unregister:i,portals:e};return[e,ce({name:"PortalWrapper",setup(r,{slots:o}){return ke(Yi,s),()=>{var a;return(a=o.default)==null?void 0:a.call(o)}}})]}let sa=Symbol("PortalGroupContext"),ad=ce({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let i=nu({resolveTarget(){return t.target}});return ke(sa,i),()=>{let{target:s,...r}=t;return xe({theirProps:r,ourProps:{},slot:{},attrs:e,slots:n,name:"PortalGroup"})}}});var ld=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ld||{});let Qi=Symbol("DialogContext");function Ps(t){let e=Ee(Qi,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ps),n}return e}let xn="DC8F892D-2EBD-447C-A4C8-A03058436FF4",cd=ce({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:xn},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:t=>!0},setup(t,{emit:e,attrs:n,slots:i,expose:s}){var r,o;let a=(r=t.id)!=null?r:`headlessui-dialog-${ui()}`,l=C(!1);ae(()=>{l.value=!0});let c=!1,u=R(()=>t.role==="dialog"||t.role==="alertdialog"?t.role:(c||(c=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),d=C(0),h=As(),f=R(()=>t.open===xn&&h!==null?(h.value&_e.Open)===_e.Open:t.open),p=C(null),m=R(()=>Ot(p));if(s({el:p,$el:p}),!(t.open!==xn||h!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof f.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value===xn?void 0:t.open}`);let v=R(()=>l.value&&f.value?0:1),T=R(()=>v.value===0),y=R(()=>d.value>1),S=Ee(Qi,null)!==null,[L,fe]=od(),{resolveContainers:pe,mainTreeNodeRef:O,MainTreeNode:z}=Ju({portals:L,defaultContainers:[R(()=>{var $;return($=Q.panelRef.value)!=null?$:p.value})]}),De=R(()=>y.value?"parent":"leaf"),N=R(()=>h!==null?(h.value&_e.Closing)===_e.Closing:!1),q=R(()=>S||N.value?!1:T.value),_=R(()=>{var $,G,me;return(me=Array.from((G=($=m.value)==null?void 0:$.querySelectorAll("body > *"))!=null?G:[]).find(ve=>ve.id==="headlessui-portal-root"?!1:ve.contains(X(O))&&ve instanceof HTMLElement))!=null?me:null});kr(_,q);let w=R(()=>y.value?!0:T.value),M=R(()=>{var $,G,me;return(me=Array.from((G=($=m.value)==null?void 0:$.querySelectorAll("[data-headlessui-portal]"))!=null?G:[]).find(ve=>ve.contains(X(O))&&ve instanceof HTMLElement))!=null?me:null});kr(M,w),td({type:"Dialog",enabled:R(()=>v.value===0),element:p,onUpdate:($,G)=>{if(G==="Dialog")return Ne($,{[Ki.Add]:()=>d.value+=1,[Ki.Remove]:()=>d.value-=1})}});let P=id({name:"DialogDescription",slot:R(()=>({open:f.value}))}),F=C(null),Q={titleId:F,panelRef:C(null),dialogState:v,setTitleId($){F.value!==$&&(F.value=$)},close(){e("close",!1)}};ke(Qi,Q);let Ht=R(()=>!(!T.value||y.value));Xu(pe,($,G)=>{$.preventDefault(),Q.close(),Is(()=>G==null?void 0:G.focus())},Ht);let Wt=R(()=>!(y.value||v.value!==0));Go((o=m.value)==null?void 0:o.defaultView,"keydown",$=>{Wt.value&&($.defaultPrevented||$.key===ia.Escape&&($.preventDefault(),$.stopPropagation(),Q.close()))});let kn=R(()=>!(N.value||v.value!==0||S));return Qu(m,kn,$=>{var G;return{containers:[...(G=$.containers)!=null?G:[],pe]}}),we($=>{if(v.value!==0)return;let G=X(p);if(!G)return;let me=new ResizeObserver(ve=>{for(let ki of ve){let Nn=ki.target.getBoundingClientRect();Nn.x===0&&Nn.y===0&&Nn.width===0&&Nn.height===0&&Q.close()}});me.observe(G),$(()=>me.disconnect())}),()=>{let{open:$,initialFocus:G,...me}=t,ve={...n,ref:p,id:a,role:u.value,"aria-modal":v.value===0?!0:void 0,"aria-labelledby":F.value,"aria-describedby":P.value},ki={open:v.value===0};return oe(Nr,{force:!0},()=>[oe(rd,()=>oe(ad,{target:p.value},()=>oe(Nr,{force:!1},()=>oe(jt,{initialFocus:G,containers:pe,features:T.value?Ne(De.value,{parent:jt.features.RestoreFocus,leaf:jt.features.All&~jt.features.FocusLock}):jt.features.None},()=>oe(fe,{},()=>xe({ourProps:ve,theirProps:{...me,...n},slot:ki,attrs:n,slots:i,visible:v.value===0,features:jn.RenderStrategy|jn.Static,name:"Dialog"})))))),oe(z)])}}}),ud=ce({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:i}){var s;let r=(s=t.id)!=null?s:`headlessui-dialog-panel-${ui()}`,o=Ps("DialogPanel");i({el:o.panelRef,$el:o.panelRef});function a(l){l.stopPropagation()}return()=>{let{...l}=t,c={id:r,ref:o.panelRef,onClick:a};return xe({ourProps:c,theirProps:l,slot:{open:o.dialogState.value===0},attrs:e,slots:n,name:"DialogPanel"})}}}),dd=ce({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n}){var i;let s=(i=t.id)!=null?i:`headlessui-dialog-title-${ui()}`,r=Ps("DialogTitle");return ae(()=>{r.setTitleId(s),Ie(()=>r.setTitleId(null))}),()=>{let{...o}=t;return xe({ourProps:{id:s},theirProps:o,slot:{open:r.dialogState.value===0},attrs:e,slots:n,name:"DialogTitle"})}}});const hd=K("div",{class:"fixed inset-0 bg-black/50"},null,-1),fd={class:"fixed inset-0 overflow-y-auto"},pd={class:"flex min-h-full items-center justify-center p-4 text-center"},_d=K("div",{class:"mt-2"},[K("p",{class:"text-sm text-gray-500"},[nt(" Gunakan fitur ini untuk mereset semua pemutaran yang ada. "),K("b",null,"Semua pemutaran yang ada akan berhenti!")])],-1),gd={class:"mt-4 flex justify-end gap-3"},_v=ce({__name:"ResetDialog",props:{isOpen:{type:Boolean}},emits:["close","reset"],setup(t){return(e,n)=>{const i=zo,s=dd,r=ud,o=cd,a=qo;return be(),iu(a,{appear:"",show:e.isOpen,as:"template"},{default:yt(()=>[Ut(o,{as:"div",class:"relative z-10",onClose:n[2]||(n[2]=l=>e.$emit("close"))},{default:yt(()=>[Ut(i,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:yt(()=>[hd]),_:1}),K("div",fd,[K("div",pd,[Ut(i,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:yt(()=>[Ut(r,{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:yt(()=>[Ut(s,{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:yt(()=>[nt(" Reset pemutaran ")]),_:1}),_d,K("div",gd,[K("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:n[0]||(n[0]=l=>e.$emit("reset"))}," Reset "),K("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:n[1]||(n[1]=l=>e.$emit("close"))}," Batal ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}});function ra(t){return su()?(ru(t),!0):!1}function lt(t){return typeof t=="function"?t():ee(t)}const xs=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const md=Object.prototype.toString,vd=t=>md.call(t)==="[object Object]",oa=()=>{};function yd(t,e){function n(...i){return new Promise((s,r)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(s).catch(r)})}return n}const aa=t=>t();function wd(t=aa){const e=C(!0);function n(){e.value=!1}function i(){e.value=!0}const s=(...r)=>{e.value&&t(...r)};return{isActive:Fo(e),pause:n,resume:i,eventFilter:s}}function la(t){return Ss()}function Ed(t,e,n={}){const{eventFilter:i=aa,...s}=n;return Pe(t,yd(i,e),s)}function bd(t,e,n={}){const{eventFilter:i,...s}=n,{eventFilter:r,pause:o,resume:a,isActive:l}=wd(i);return{stop:Ed(t,e,{...s,eventFilter:r}),pause:o,resume:a,isActive:l}}function ca(t,e=!0,n){la()?ae(t,n):e?t():Is(t)}function Cd(t,e){la()&&Ie(t,e)}function Sd(t,e,n={}){const{immediate:i=!0}=n,s=C(!1);let r=null;function o(){r&&(clearTimeout(r),r=null)}function a(){s.value=!1,o()}function l(...c){o(),s.value=!0,r=setTimeout(()=>{s.value=!1,r=null,t(...c)},lt(e))}return i&&(s.value=!0,xs&&l()),ra(a),{isPending:Fo(s),start:l,stop:a}}function Td(t){var e;const n=lt(t);return(e=n==null?void 0:n.$el)!=null?e:n}const zn=xs?window:void 0,Id=xs?window.document:void 0;function Rr(...t){let e,n,i,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,s]=t,e=zn):[e,n,i,s]=t,!e)return oa;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,d,h,f)=>(u.addEventListener(d,h,f),()=>u.removeEventListener(d,h,f)),l=Pe(()=>[Td(e),lt(s)],([u,d])=>{if(o(),!u)return;const h=vd(d)?{...d}:d;r.push(...n.flatMap(f=>i.map(p=>a(u,f,p,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return ra(c),c}const On=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dn="__vueuse_ssr_handlers__",Ad=kd();function kd(){return Dn in On||(On[Dn]=On[Dn]||{}),On[Dn]}function Nd(t,e){return Ad[t]||e}function Rd(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const Pd={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Pr="vueuse-storage";function xd(t,e,n,i={}){var s;const{flush:r="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=zn,eventFilter:h,onError:f=N=>{console.error(N)},initOnMounted:p}=i,m=(u?Mo:C)(e);if(!n)try{n=Nd("getDefaultStorage",()=>{var N;return(N=zn)==null?void 0:N.localStorage})()}catch(N){f(N)}if(!n)return m;const v=lt(e),T=Rd(v),y=(s=i.serializer)!=null?s:Pd[T],{pause:S,resume:L}=bd(m,()=>pe(m.value),{flush:r,deep:o,eventFilter:h});d&&a&&ca(()=>{Rr(d,"storage",z),Rr(d,Pr,De),p&&z()}),p||z();function fe(N,q){d&&d.dispatchEvent(new CustomEvent(Pr,{detail:{key:t,oldValue:N,newValue:q,storageArea:n}}))}function pe(N){try{const q=n.getItem(t);if(N==null)fe(q,null),n.removeItem(t);else{const _=y.write(N);q!==_&&(n.setItem(t,_),fe(q,_))}}catch(q){f(q)}}function O(N){const q=N?N.newValue:n.getItem(t);if(q==null)return l&&v!=null&&n.setItem(t,y.write(v)),v;if(!N&&c){const _=y.read(q);return typeof c=="function"?c(_,v):T==="object"&&!Array.isArray(_)?{...v,..._}:_}else return typeof q!="string"?q:y.read(q)}function z(N){if(!(N&&N.storageArea!==n)){if(N&&N.key==null){m.value=v;return}if(!(N&&N.key!==t)){S();try{(N==null?void 0:N.newValue)!==y.write(m.value)&&(m.value=O(N))}catch(q){f(q)}finally{N?Is(L):L()}}}}function De(N){z(N.detail)}return m}function Od(t,e,n={}){const{window:i=zn}=n;return xd(t,e,i==null?void 0:i.localStorage,n)}function xr(t,e=oa,n={}){const{immediate:i=!0,manual:s=!1,type:r="text/javascript",async:o=!0,crossOrigin:a,referrerPolicy:l,noModule:c,defer:u,document:d=Id,attrs:h={}}=n,f=C(null);let p=null;const m=y=>new Promise((S,L)=>{const fe=z=>(f.value=z,S(z),z);if(!d){S(!1);return}let pe=!1,O=d.querySelector(`script[src="${lt(t)}"]`);O?O.hasAttribute("data-loaded")&&fe(O):(O=d.createElement("script"),O.type=r,O.async=o,O.src=lt(t),u&&(O.defer=u),a&&(O.crossOrigin=a),c&&(O.noModule=c),l&&(O.referrerPolicy=l),Object.entries(h).forEach(([z,De])=>O==null?void 0:O.setAttribute(z,De)),pe=!0),O.addEventListener("error",z=>L(z)),O.addEventListener("abort",z=>L(z)),O.addEventListener("load",()=>{O.setAttribute("data-loaded","true"),e(O),fe(O)}),pe&&(O=d.head.appendChild(O)),y||fe(O)}),v=(y=!0)=>(p||(p=m(y)),p),T=()=>{if(!d)return;p=null,f.value&&(f.value=null);const y=d.querySelector(`script[src="${lt(t)}"]`);y&&d.head.removeChild(y)};return i&&!s&&ca(v),s||Cd(T),{scriptTag:f,load:v,unload:T}}const Dd=["data-poster"],Ld=["src","type","size"],gv=ce({__name:"NewVideoPlayer",props:{sources:{},poster:{},landscape:{type:Boolean,default:!0},useShortcut:{type:Boolean,default:!0},useDefaultControl:{type:Boolean,default:!1},hideControl:{type:Boolean,default:!1},maxBufferSize:{},maxMaxBufferLength:{},saveState:{type:Boolean,default:!0},rotateFill:{default:"width"},videoFill:{default:"width"},compact:{type:Boolean,default:!1}},setup(t){const e=t,n=C(!1),i=C(!1),{load:s}=xr("https://cdn.jsdelivr.net/npm/hls.js@1.5.6",()=>{n.value=!0},{manual:!0}),{load:r}=xr("https://cdn.plyr.io/3.7.8/plyr.polyfilled.js",()=>{i.value=!0},{manual:!0}),o=C(),a=C(e.sources);Pe(()=>e.sources,()=>{o.value&&(o.value.quality=h())});const l=Od("quality-id",2),c=C((a.value??[]).find(y=>l.value===y.id)??a.value[0]),u=C();function d(){o.value&&o.value.destroy(),window.hls&&(window.hls.destroy(),window.hls=void 0)}function h(){return{default:l.value,options:a.value.map(y=>y.id),forced:!0,onChange:y=>T(y)}}function f(){if(console.log("CREATING VIDEO PLAYER",u.value),!u.value)return;const y={speed:{selected:1,options:[1]},poster:e.poster};y.quality=h();const S={};for(const L of a.value)S[L.id]=L.label;y.i18n={qualityLabel:S},o.value=new Plyr(u.value,y)}function p(){if(!u.value)return;window.hls&&window.hls.destroy(),u.value.removeAttribute("src");const y=c.value;if(y.type==="hls")if(!Hls.isSupported())u.value.src=y.url;else{const S=new Hls;S.loadSource(y.url),S.attachMedia(u.value),window.hls=S}m()}async function m(y=0){if(u.value)try{await u.value.play()}catch(S){y<5?setTimeout(()=>{m(y+1)},100):(o.value.muted=!0,u.value.play()),console.error(S)}}const v=C();function T(y){if(v.value===y)return;v.value=y;const S=a.value.find(L=>L.id===y);S&&(c.value=S,p())}return Cs(()=>{d()}),ae(async()=>{await s(),await r(),f()}),(y,S)=>(be(),Ae("video",{ref_key:"video",ref:u,"data-poster":y.poster,class:"size-full"},[(be(!0),Ae(Ts,null,ou(ee(a),L=>(be(),Ae("source",{key:L.id,src:ee(c).url,type:ee(c).type,size:ee(c).quality},null,8,Ld))),128))],8,Dd))}});function Md(){return au}class Fd{static encrypt(e,n){let i="";for(let s=0;s<e.length;s++){const r=s%n.length,a=`00${(e[s].charCodeAt(0)^n[r].charCodeAt(0)).toString(16)}`.slice(-2);i+=a}return i}static decrypt(e,n){let i="";const s=[];let r;for(r=0;r<e.length;r=r+2)s.push(e[r]+e[r+1]);for(r=0;r<s.length;r++){const o=s[r],a=parseInt(o,16),l=r%n.length,c=a^n[l].charCodeAt(0);i+=String.fromCharCode(c)}return i}}const Bd="KimiNo";function mv(t){return Fd.decrypt(t,Bd+$d+Wd)}const $d="Kotoga";function Hd(t){return typeof t=="string"&&(t=parseInt(t)),t.toString().length>10}const Wd="SukiDakara";function vv(t){return["www.youtube.com/embed"].some(e=>t.includes(e))}const Ud={key:0,class:"text-center flex flex-col gap-3 md:gap-1.5"},jd={class:"text-xl"},Vd={class:"flex gap-3 justify-center"},zd={key:0,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},qd={class:"leading-4 pt-0.5"},Gd=K("span",{class:"text-sm"},"bulan",-1),Kd={key:1,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Yd={class:"leading-4 pt-0.5"},Qd=K("span",{class:"text-sm"},"hari",-1),Xd={key:2,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Jd={class:"leading-4 pt-0.5"},Zd=K("span",{class:"text-sm"},"jam",-1),eh={key:3,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},th={class:"leading-4 pt-0.5"},nh=K("span",{class:"text-sm"},"menit",-1),ih={key:4,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},sh={class:"leading-4 pt-0.5"},rh=K("span",{class:"text-sm"},"detik",-1),yv=ce({__name:"CountDown",props:{time:{}},setup(t){const e=t,n=Md(),i=n(Hd(e.time)?e.time:Number(e.time)*1e3),s=C(n.duration(i.diff(n()))),r=C(s.value.asSeconds()<=0),{start:o}=Sd(()=>{const a=s.value.subtract(1,"seconds");s.value.asSeconds()<=1?(r.value=!0,s.value=n.duration(0)):(s.value=a,o())},1e3,{immediate:!0});return(a,l)=>(be(),Ae("div",null,[ee(r)?Et("",!0):(be(),Ae("div",Ud,[K("div",jd,wt(ee(i).format("dddd, DD MMMM YYYY, hh:mm A")),1),K("div",Vd,[ee(s).months()>0?(be(),Ae("div",zd,[K("span",qd,wt(ee(s).months()),1),nt(),Gd])):Et("",!0),ee(s).days()>0?(be(),Ae("div",Kd,[K("span",Yd,wt(ee(s).days()),1),nt(),Qd])):Et("",!0),ee(s).hours()>0?(be(),Ae("div",Xd,[K("span",Jd,wt(ee(s).hours()),1),nt(),Zd])):Et("",!0),ee(s).minutes()>0?(be(),Ae("div",eh,[K("span",th,wt(ee(s).minutes()),1),nt(),nh])):Et("",!0),ee(s).seconds()>0||ee(s).asSeconds()>0?(be(),Ae("div",ih,[K("span",sh,wt(ee(s).seconds()),1),nt(),rh])):Et("",!0)])]))]))}});var Or={};/**
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
 */const ua={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const g=function(t,e){if(!t)throw Dt(e)},Dt=function(t){return new Error("Firebase Database ("+ua.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const da=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},oh=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},hi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(n[u],n[d],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(da(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new ah;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ah extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ha=function(t){const e=da(t);return hi.encodeByteArray(e,!0)},qn=function(t){return ha(t).replace(/\./g,"")},Xi=function(t){try{return hi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lh(t){return fa(void 0,t)}function fa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ch(n)||(t[n]=fa(t[n],e[n]));return t}function ch(t){return t!=="__proto__"}/**
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
 */function pa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uh=()=>pa().__FIREBASE_DEFAULTS__,dh=()=>{if(typeof process>"u"||typeof Or>"u")return;const t=Or.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xi(t[1]);return e&&JSON.parse(e)},Os=()=>{try{return uh()||dh()||hh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fh=t=>{var e,n;return(n=(e=Os())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ph=t=>{const e=fh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},_a=()=>{var t;return(t=Os())===null||t===void 0?void 0:t.config},wv=t=>{var e;return(e=Os())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ge{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function _h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qn(JSON.stringify(n)),qn(JSON.stringify(o)),""].join(".")}/**
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
 */function ga(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ma(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ga())}function Ev(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bv(){const t=ga();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function va(){return ua.NODE_ADMIN===!0}function Ds(){try{return typeof indexedDB=="object"}catch{return!1}}function mh(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const vh="FirebaseError";class En extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=vh,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?yh(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new En(s,a,i)}}function yh(t,e){return t.replace(wh,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const wh=/\{\$([^}]+)}/g;/**
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
 */function sn(t){return JSON.parse(t)}function J(t){return JSON.stringify(t)}/**
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
 */const ya=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=sn(Xi(r[0])||""),n=sn(Xi(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Eh=function(t){const e=ya(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bh=function(t){const e=ya(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Oe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function At(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ji(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gn(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Dr(r)&&Dr(o)){if(!Zi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Dr(t){return t!==null&&typeof t=="object"}/**
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
 */function Ch(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Cv(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Sv(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Sh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Tv(t,e){const n=new Th(t,e);return n.subscribe.bind(n)}class Th{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Ih(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=xi),s.error===void 0&&(s.error=xi),s.complete===void 0&&(s.complete=xi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ih(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xi(){}function kt(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Ah=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,g(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fi=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const kh=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
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
 */const Nh=1e3,Rh=2,Ph=4*60*60*1e3,xh=.5;function Oh(t,e=Nh,n=Rh){const i=e*Math.pow(n,t),s=Math.round(xh*i*(Math.random()-.5)*2);return Math.min(Ph,i+s)}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class dt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const et="[DEFAULT]";/**
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
 */class Dh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ge;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mh(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Lh(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lh(t){return t===et?void 0:t}function Mh(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U||(U={}));const Bh={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},$h=U.INFO,Hh={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Wh=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Hh[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ms{constructor(e){this.name=e,this._logLevel=$h,this._logHandler=Wh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const Uh=(t,e)=>e.some(n=>t instanceof n);let Lr,Mr;function jh(){return Lr||(Lr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vh(){return Mr||(Mr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wa=new WeakMap,es=new WeakMap,Ea=new WeakMap,Oi=new WeakMap,Fs=new WeakMap;function zh(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(je(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wa.set(n,t)}).catch(()=>{}),Fs.set(e,t),e}function qh(t){if(es.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});es.set(t,e)}let ts={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return es.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ea.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return je(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gh(t){ts=t(ts)}function Kh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Di(this),e,...n);return Ea.set(i,e.sort?e.sort():[e]),je(i)}:Vh().includes(t)?function(...e){return t.apply(Di(this),e),je(wa.get(this))}:function(...e){return je(t.apply(Di(this),e))}}function Yh(t){return typeof t=="function"?Kh(t):(t instanceof IDBTransaction&&qh(t),Uh(t,jh())?new Proxy(t,ts):t)}function je(t){if(t instanceof IDBRequest)return zh(t);if(Oi.has(t))return Oi.get(t);const e=Yh(t);return e!==t&&(Oi.set(t,e),Fs.set(e,t)),e}const Di=t=>Fs.get(t);function Qh(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=je(o);return i&&o.addEventListener("upgradeneeded",l=>{i(je(o.result),l.oldVersion,l.newVersion,je(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Xh=["get","getKey","getAll","getAllKeys","count"],Jh=["put","add","delete","clear"],Li=new Map;function Fr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Li.get(e))return Li.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Jh.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Xh.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Li.set(e,r),r}Gh(t=>({...t,get:(e,n,i)=>Fr(e,n)||t.get(e,n,i),has:(e,n)=>!!Fr(e,n)||t.has(e,n)}));/**
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
 */class Zh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ef(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ef(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ns="@firebase/app",Br="0.10.1";/**
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
 */const ht=new Ms("@firebase/app"),tf="@firebase/app-compat",nf="@firebase/analytics-compat",sf="@firebase/analytics",rf="@firebase/app-check-compat",of="@firebase/app-check",af="@firebase/auth",lf="@firebase/auth-compat",cf="@firebase/database",uf="@firebase/database-compat",df="@firebase/functions",hf="@firebase/functions-compat",ff="@firebase/installations",pf="@firebase/installations-compat",_f="@firebase/messaging",gf="@firebase/messaging-compat",mf="@firebase/performance",vf="@firebase/performance-compat",yf="@firebase/remote-config",wf="@firebase/remote-config-compat",Ef="@firebase/storage",bf="@firebase/storage-compat",Cf="@firebase/firestore",Sf="@firebase/firestore-compat",Tf="firebase",If="10.11.0";/**
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
 */const is="[DEFAULT]",Af={[ns]:"fire-core",[tf]:"fire-core-compat",[sf]:"fire-analytics",[nf]:"fire-analytics-compat",[of]:"fire-app-check",[rf]:"fire-app-check-compat",[af]:"fire-auth",[lf]:"fire-auth-compat",[cf]:"fire-rtdb",[uf]:"fire-rtdb-compat",[df]:"fire-fn",[hf]:"fire-fn-compat",[ff]:"fire-iid",[pf]:"fire-iid-compat",[_f]:"fire-fcm",[gf]:"fire-fcm-compat",[mf]:"fire-perf",[vf]:"fire-perf-compat",[yf]:"fire-rc",[wf]:"fire-rc-compat",[Ef]:"fire-gcs",[bf]:"fire-gcs-compat",[Cf]:"fire-fst",[Sf]:"fire-fst-compat","fire-js":"fire-js",[Tf]:"fire-js-all"};/**
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
 */const Kn=new Map,kf=new Map,ss=new Map;function $r(t,e){try{t.container.addComponent(e)}catch(n){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nt(t){const e=t.name;if(ss.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;ss.set(e,t);for(const n of Kn.values())$r(n,t);for(const n of kf.values())$r(n,t);return!0}function Bs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Iv(t){return t.settings!==void 0}/**
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
 */const Nf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ve=new Ls("app","Firebase",Nf);/**
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
 */class Rf{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
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
 */const Pf=If;function xf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:is,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ve.create("bad-app-name",{appName:String(s)});if(n||(n=_a()),!n)throw Ve.create("no-options");const r=Kn.get(s);if(r){if(Zi(n,r.options)&&Zi(i,r.config))return r;throw Ve.create("duplicate-app",{appName:s})}const o=new Fh(s);for(const l of ss.values())o.addComponent(l);const a=new Rf(n,i,o);return Kn.set(s,a),a}function ba(t=is){const e=Kn.get(t);if(!e&&t===is&&_a())return xf();if(!e)throw Ve.create("no-app",{appName:t});return e}function ct(t,e,n){var i;let s=(i=Af[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(a.join(" "));return}Nt(new dt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Of="firebase-heartbeat-database",Df=1,rn="firebase-heartbeat-store";let Mi=null;function Ca(){return Mi||(Mi=Qh(Of,Df,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ve.create("idb-open",{originalErrorMessage:t.message})})),Mi}async function Lf(t){try{const n=(await Ca()).transaction(rn),i=await n.objectStore(rn).get(Sa(t));return await n.done,i}catch(e){if(e instanceof En)ht.warn(e.message);else{const n=Ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(n.message)}}}async function Hr(t,e){try{const i=(await Ca()).transaction(rn,"readwrite");await i.objectStore(rn).put(e,Sa(t)),await i.done}catch(n){if(n instanceof En)ht.warn(n.message);else{const i=Ve.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ht.warn(i.message)}}}function Sa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Mf=1024,Ff=30*24*60*60*1e3;class Bf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hf(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ff}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wr(),{heartbeatsToSend:i,unsentEntries:s}=$f(this._heartbeatsCache.heartbeats),r=qn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Wr(){return new Date().toISOString().substring(0,10)}function $f(t,e=Mf){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ur(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ur(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Hf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ds()?mh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Lf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ur(t){return qn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wf(t){Nt(new dt("platform-logger",e=>new Zh(e),"PRIVATE")),Nt(new dt("heartbeat",e=>new Bf(e),"PRIVATE")),ct(ns,Br,t),ct(ns,Br,"esm2017"),ct("fire-js","")}Wf("");var Uf="firebase",jf="10.11.0";/**
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
 */ct(Uf,jf,"app");var jr={};const Vr="@firebase/database",zr="1.0.4";/**
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
 */let Ta="";function Vf(t){Ta=t}/**
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
 */class zf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),J(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:sn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class qf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Oe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ia=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zf(e)}}catch{}return new qf},rt=Ia("localStorage"),Gf=Ia("sessionStorage");/**
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
 */const It=new Ms("@firebase/database"),Kf=function(){let t=1;return function(){return t++}}(),Aa=function(t){const e=Ah(t),n=new Sh;n.update(e);const i=n.digest();return hi.encodeByteArray(i)},bn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=bn.apply(null,i):typeof i=="object"?e+=J(i):e+=i,e+=" "}return e};let Xt=null,qr=!0;const Yf=function(t,e){g(!e,"Can't turn on custom loggers persistently."),It.logLevel=U.VERBOSE,Xt=It.log.bind(It)},se=function(...t){if(qr===!0&&(qr=!1,Xt===null&&Gf.get("logging_enabled")===!0&&Yf()),Xt){const e=bn.apply(null,t);Xt(e)}},Cn=function(t){return function(...e){se(t,...e)}},rs=function(...t){const e="FIREBASE INTERNAL ERROR: "+bn(...t);It.error(e)},Be=function(...t){const e=`FIREBASE FATAL ERROR: ${bn(...t)}`;throw It.error(e),new Error(e)},he=function(...t){const e="FIREBASE WARNING: "+bn(...t);It.warn(e)},Qf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&he("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Xf=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ft="[MIN_NAME]",Ge="[MAX_NAME]",mt=function(t,e){if(t===e)return 0;if(t===ft||e===Ge)return-1;if(e===ft||t===Ge)return 1;{const n=Gr(t),i=Gr(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Jf=function(t,e){return t===e?0:t<e?-1:1},zt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+J(e))},$s=function(t){if(typeof t!="object"||t===null)return J(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=J(e[i]),n+=":",n+=$s(t[e[i]]);return n+="}",n},ka=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Na=function(t){g(!pi(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Zf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ep=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const np=new RegExp("^-?(0*)\\d{1,10}$"),ip=-2147483648,sp=2147483647,Gr=function(t){if(np.test(t)){const e=Number(t);if(e>=ip&&e<=sp)return e}return null},Lt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw he("Exception was thrown by user callback.",n),e},Math.floor(0))}},rp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class op{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){he(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ap{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',he(e)}}class Un{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Un.OWNER="owner";/**
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
 */const Hs="5",Ra="v",Pa="s",xa="r",Oa="f",Da=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,La="ls",Ma="p",os="ac",Fa="websocket",Ba="long_polling";/**
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
 */class $a{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ha(t,e,n){g(typeof e=="string","typeof type must == string"),g(typeof n=="object","typeof params must == object");let i;if(e===Fa)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ba)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lp(t)&&(n.ns=t.namespace);const s=[];return re(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class cp{constructor(){this.counters_={}}incrementCounter(e,n=1){Oe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lh(this.counters_)}}/**
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
 */const Fi={},Bi={};function Ws(t){const e=t.toString();return Fi[e]||(Fi[e]=new cp),Fi[e]}function up(t,e){const n=t.toString();return Bi[n]||(Bi[n]=e()),Bi[n]}/**
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
 */class dp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Lt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Kr="start",hp="close",fp="pLPCommand",pp="pRTLPCB",Wa="id",Ua="pw",ja="ser",_p="cb",gp="seg",mp="ts",vp="d",yp="dframe",Va=1870,za=30,wp=Va-za,Ep=25e3,bp=3e4;class St{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cn(e),this.stats_=Ws(n),this.urlFn=l=>(this.appCheckToken&&(l[os]=this.appCheckToken),Ha(n,Ba,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bp)),Xf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Us((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kr)this.id=a,this.password=l;else if(o===hp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Kr]="t",i[ja]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[_p]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ra]=Hs,this.transportSessionId&&(i[Pa]=this.transportSessionId),this.lastSessionId&&(i[La]=this.lastSessionId),this.applicationId&&(i[Ma]=this.applicationId),this.appCheckToken&&(i[os]=this.appCheckToken),typeof location<"u"&&location.hostname&&Da.test(location.hostname)&&(i[xa]=Oa);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){St.forceAllow_=!0}static forceDisallow(){St.forceDisallow_=!0}static isAvailable(){return St.forceAllow_?!0:!St.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Zf()&&!ep()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=J(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ha(n),s=ka(i,wp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[yp]="t",i[Wa]=e,i[Ua]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=J(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Us{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Kf(),window[fp+this.uniqueCallbackIdentifier]=e,window[pp+this.uniqueCallbackIdentifier]=n,this.myIFrame=Us.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){se("frame writing exception"),a.stack&&se(a.stack),se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||se("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wa]=this.myID,e[Ua]=this.myPW,e[ja]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+za+i.length<=Va;){const o=this.pendingSegs.shift();i=i+"&"+gp+s+"="+o.seg+"&"+mp+s+"="+o.ts+"&"+vp+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Ep)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Cp=16384,Sp=45e3;let Yn=null;typeof MozWebSocket<"u"?Yn=MozWebSocket:typeof WebSocket<"u"&&(Yn=WebSocket);class Ce{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cn(this.connId),this.stats_=Ws(n),this.connURL=Ce.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Ra]=Hs,typeof location<"u"&&location.hostname&&Da.test(location.hostname)&&(o[xa]=Oa),n&&(o[Pa]=n),i&&(o[La]=i),s&&(o[os]=s),r&&(o[Ma]=r),Ha(e,Fa,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rt.set("previous_websocket_failure",!0);try{let i;va(),this.mySock=new Yn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ce.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Yn!==null&&!Ce.forceDisallow_}static previouslyFailed(){return rt.isInMemoryStorage||rt.get("previous_websocket_failure")===!0}markConnectionHealthy(){rt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=sn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=J(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ka(n,Cp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Sp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ce.responsesRequiredToBeHealthy=2;Ce.healthyTimeout=3e4;/**
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
 */class on{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[St,Ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ce&&Ce.isAvailable();let i=n&&!Ce.previouslyFailed();if(e.webSocketOnly&&(n||he("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ce];else{const s=this.transports_=[];for(const r of on.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);on.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}on.globalTransportInitialized_=!1;/**
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
 */const Tp=6e4,Ip=5e3,Ap=10*1024,kp=100*1024,$i="t",Yr="d",Np="s",Qr="r",Rp="e",Xr="o",Jr="a",Zr="n",eo="p",Pp="h";class xp{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cn("c:"+this.id+":"),this.transportManager_=new on(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Jt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ap?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($i in e){const n=e[$i];n===Jr?this.upgradeIfSecondaryHealthy_():n===Qr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zt("t",e),i=zt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:eo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zt("t",e),i=zt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zt($i,e);if(Yr in e){const i=e[Yr];if(n===Pp){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Zr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Np?this.onConnectionShutdown_(i):n===Qr?this.onReset_(i):n===Rp?rs("Server Error: "+i):n===Xr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rs("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hs!==i&&he("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Jt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Tp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ip))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:eo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class qa{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ga{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Qn extends Ga{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ma()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qn}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const to=32,no=768;class D{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function x(){return new D("")}function I(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ke(t){return t.pieces_.length-t.pieceNum_}function B(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new D(t.pieces_,e)}function js(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Op(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function an(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ka(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new D(e,0)}function V(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof D)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new D(n,0)}function A(t){return t.pieceNum_>=t.pieces_.length}function le(t,e){const n=I(t),i=I(e);if(n===null)return e;if(n===i)return le(B(t),B(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Dp(t,e){const n=an(t,0),i=an(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=mt(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function Vs(t,e){if(Ke(t)!==Ke(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ye(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ke(t)>Ke(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Lp{constructor(e,n){this.errorPrefix_=n,this.parts_=an(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=fi(this.parts_[i]);Ya(this)}}function Mp(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fi(e),Ya(t)}function Fp(t){const e=t.parts_.pop();t.byteLength_-=fi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ya(t){if(t.byteLength_>no)throw new Error(t.errorPrefix_+"has a key path longer than "+no+" bytes ("+t.byteLength_+").");if(t.parts_.length>to)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+to+") or object contains a cycle "+tt(t))}function tt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class zs extends Ga{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new zs}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const qt=1e3,Bp=60*5*1e3,io=30*1e3,$p=1.3,Hp=3e4,Wp="server_kill",so=3;class Fe extends qa{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fe.nextPersistentConnectionId_++,this.log_=Cn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qt,this.maxReconnectDelay_=Bp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!va())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(J(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ge,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Fe.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Oe(e,"w")){const i=At(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();he(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=io)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Eh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+J(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rs("Unrecognized action received from server: "+J(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Hp&&(this.reconnectDelay_=qt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$p)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Fe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?se("getToken() completed but was canceled"):(se("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new xp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{he(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wp)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&he(d),l())}}}interrupt(e){se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ji(this.interruptReasons_)&&(this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>$s(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new D(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=so&&(this.reconnectDelay_=io,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=so&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ta.replace(/\./g,"-")]=1,ma()?e["framework.cordova"]=1:gh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qn.getInstance().currentlyOnline();return Ji(this.interruptReasons_)&&e}}Fe.nextPersistentConnectionId_=0;Fe.nextConnectionId_=0;/**
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
 */class k{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new k(e,n)}}/**
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
 */class _i{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new k(ft,e),s=new k(ft,n);return this.compare(i,s)!==0}minPost(){return k.MIN}}/**
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
 */let Ln;class Qa extends _i{static get __EMPTY_NODE(){return Ln}static set __EMPTY_NODE(e){Ln=e}compare(e,n){return mt(e.name,n.name)}isDefinedOn(e){throw Dt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return k.MIN}maxPost(){return new k(Ge,Ln)}makePost(e,n){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new k(e,Ln)}toString(){return".key"}}const ut=new Qa;/**
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
 */class Mn{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ne{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??ne.RED,this.left=s??ue.EMPTY_NODE,this.right=r??ue.EMPTY_NODE}copy(e,n,i,s,r){return new ne(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ne.RED=!0;ne.BLACK=!1;class Up{copy(e,n,i,s,r){return this}insert(e,n,i){return new ne(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ue{constructor(e,n=ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ne.BLACK,null,null))}remove(e){return new ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ne.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Mn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Mn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Mn(this.root_,null,this.comparator_,!0,e)}}ue.EMPTY_NODE=new Up;/**
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
 */function jp(t,e){return mt(t.name,e.name)}function qs(t,e){return mt(t,e)}/**
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
 */let as;function Vp(t){as=t}const Xa=function(t){return typeof t=="number"?"number:"+Na(t):"string:"+t},Ja=function(t){if(t.isLeafNode()){const e=t.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Oe(e,".sv"),"Priority must be a string or number.")}else g(t===as||t.isEmpty(),"priority of unexpected type.");g(t===as||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ro;class te{constructor(e,n=te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ja(this.priorityNode_)}static set __childrenNodeConstructor(e){ro=e}static get __childrenNodeConstructor(){return ro}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return A(e)?this:I(e)===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=I(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(g(i!==".priority"||Ke(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,te.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xa(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Na(this.value_):e+=this.value_,this.lazyHash_=Aa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof te.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=te.VALUE_TYPE_ORDER.indexOf(n),r=te.VALUE_TYPE_ORDER.indexOf(i);return g(s>=0,"Unknown leaf type: "+n),g(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Za,el;function zp(t){Za=t}function qp(t){el=t}class Gp extends _i{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?mt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return k.MIN}maxPost(){return new k(Ge,new te("[PRIORITY-POST]",el))}makePost(e,n){const i=Za(e);return new k(n,new te("[PRIORITY-POST]",i))}toString(){return".priority"}}const j=new Gp;/**
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
 */const Kp=Math.log(2);class Yp{constructor(e){const n=r=>parseInt(Math.log(r)/Kp,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xn=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new ne(h,d.node,ne.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),m=s(f+1,c);return d=t[f],h=n?n(d):d,new ne(h,d.node,ne.BLACK,p,m)}},r=function(l){let c=null,u=null,d=t.length;const h=function(p,m){const v=d-p,T=d;d-=p;const y=s(v+1,T),S=t[v],L=n?n(S):S;f(new ne(L,S.node,m,null,y))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));m?h(v,ne.BLACK):(h(v,ne.BLACK),h(v,ne.RED))}return u},o=new Yp(t.length),a=r(o);return new ue(i||e,a)};/**
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
 */let Hi;const bt={};class Me{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return g(bt&&j,"ChildrenNode.ts has not been loaded"),Hi=Hi||new Me({".priority":bt},{".priority":j}),Hi}get(e){const n=At(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ue?n:null}hasIndex(e){return Oe(this.indexSet_,e.toString())}addIndex(e,n){g(e!==ut,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(k.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Xn(i,e.getCompare()):a=bt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Me(u,c)}addToIndexes(e,n){const i=Gn(this.indexes_,(s,r)=>{const o=At(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),s===bt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(k.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Xn(a,o.getCompare())}else return bt;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new k(e.name,a))),l.insert(e,e.node)}});return new Me(i,this.indexSet_)}removeFromIndexes(e,n){const i=Gn(this.indexes_,s=>{if(s===bt)return s;{const r=n.get(e.name);return r?s.remove(new k(e.name,r)):s}});return new Me(i,this.indexSet_)}}/**
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
 */let Gt;class E{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ja(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gt||(Gt=new E(new ue(qs),null,Me.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gt}updatePriority(e){return this.children_.isEmpty()?this:new E(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Gt:n}}getChild(e){const n=I(e);return n===null?this:this.getImmediateChild(n).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(g(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new k(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Gt:this.priorityNode_;return new E(s,o,r)}}updateChild(e,n){const i=I(e);if(i===null)return n;{g(I(e)!==".priority"||Ke(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(B(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(j,(o,a)=>{n[o]=a.val(e),i++,r&&E.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xa(this.getPriority().val())+":"),this.forEachChild(j,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Aa(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new k(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new k(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new k(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,k.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,k.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Sn?-1:0}withIndex(e){if(e===ut||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new E(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ut||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(j),s=n.getIterator(j);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ut?null:this.indexMap_.get(e.toString())}}E.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qp extends E{constructor(){super(new ue(qs),E.EMPTY_NODE,Me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return E.EMPTY_NODE}isEmpty(){return!1}}const Sn=new Qp;Object.defineProperties(k,{MIN:{value:new k(ft,E.EMPTY_NODE)},MAX:{value:new k(Ge,Sn)}});Qa.__EMPTY_NODE=E.EMPTY_NODE;te.__childrenNodeConstructor=E;Vp(Sn);qp(Sn);/**
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
 */const Xp=!0;function Y(t,e=null){if(t===null)return E.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new te(n,Y(e))}if(!(t instanceof Array)&&Xp){const n=[];let i=!1;if(re(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Y(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new k(o,l)))}}),n.length===0)return E.EMPTY_NODE;const r=Xn(n,jp,o=>o.name,qs);if(i){const o=Xn(n,j.getCompare());return new E(r,Y(e),new Me({".priority":o},{".priority":j}))}else return new E(r,Y(e),Me.Default)}else{let n=E.EMPTY_NODE;return re(t,(i,s)=>{if(Oe(t,i)&&i.substring(0,1)!=="."){const r=Y(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Y(e))}}zp(Y);/**
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
 */class Gs extends _i{constructor(e){super(),this.indexPath_=e,g(!A(e)&&I(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?mt(e.name,n.name):r}makePost(e,n){const i=Y(e),s=E.EMPTY_NODE.updateChild(this.indexPath_,i);return new k(n,s)}maxPost(){const e=E.EMPTY_NODE.updateChild(this.indexPath_,Sn);return new k(Ge,e)}toString(){return an(this.indexPath_,0).join("/")}}/**
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
 */class Jp extends _i{compare(e,n){const i=e.node.compareTo(n.node);return i===0?mt(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return k.MIN}maxPost(){return k.MAX}makePost(e,n){const i=Y(e);return new k(n,i)}toString(){return".value"}}const tl=new Jp;/**
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
 */function nl(t){return{type:"value",snapshotNode:t}}function Rt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ln(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Zp(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ks{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(ln(n,a)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rt(n,i)):o.trackChildChange(cn(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(j,(s,r)=>{n.hasChild(s)||i.trackChildChange(ln(s,r))}),n.isLeafNode()||n.forEachChild(j,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(cn(s,r,o))}else i.trackChildChange(Rt(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?E.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class un{constructor(e){this.indexedFilter_=new Ks(e.getIndex()),this.index_=e.getIndex(),this.startPost_=un.getStartPost_(e),this.endPost_=un.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new k(n,i))||(i=E.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=E.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(E.EMPTY_NODE);const r=this;return n.forEachChild(j,(o,a)=>{r.matches(new k(o,a))||(s=s.updateImmediateChild(o,E.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class e_{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new un(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new k(n,i))||(i=E.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=E.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=E.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(E.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,E.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;g(a.numChildren()===this.limit_,"");const l=new k(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(cn(n,i,d)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(ln(n,d));const m=a.updateImmediateChild(n,E.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Rt(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ln(c.name,c.node)),r.trackChildChange(Rt(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,E.EMPTY_NODE)):e}}/**
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
 */class Ys{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=j}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ft}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ge}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===j}copy(){const e=new Ys;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function t_(t){return t.loadsAllData()?new Ks(t.getIndex()):t.hasLimit()?new e_(t):new un(t)}function n_(t,e,n){const i=t.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,n!=null?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function i_(t,e,n){const i=t.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,n!==void 0?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function s_(t,e){const n=t.copy();return n.index_=e,n}function oo(t){const e={};if(t.isDefault())return e;let n;if(t.index_===j?n="$priority":t.index_===tl?n="$value":t.index_===ut?n="$key":(g(t.index_ instanceof Gs,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=J(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=J(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+J(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=J(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+J(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ao(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==j&&(e.i=t.index_.toString()),e}/**
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
 */class Jn extends qa{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Cn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Jn.getListenId_(e,i),a={};this.listens_[o]=a;const l=oo(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),At(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=Jn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=oo(e._queryParams),i=e._path.toString(),s=new ge;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ch(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=sn(a.responseText)}catch{he("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&he("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class r_{constructor(){this.rootNode_=E.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Zn(){return{value:null,children:new Map}}function Mt(t,e,n){if(A(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=I(e);t.children.has(i)||t.children.set(i,Zn());const s=t.children.get(i);e=B(e),Mt(s,e,n)}}function ls(t,e){if(A(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(j,(i,s)=>{Mt(t,new D(i),s)}),ls(t,e)}}else if(t.children.size>0){const n=I(e);return e=B(e),t.children.has(n)&&ls(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function cs(t,e,n){t.value!==null?n(e,t.value):o_(t,(i,s)=>{const r=new D(e.toString()+"/"+i);cs(s,r,n)})}function o_(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class a_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&re(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const lo=10*1e3,l_=30*1e3,c_=5*60*1e3;class u_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new a_(e);const i=lo+(l_-lo)*Math.random();Jt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;re(e,(s,r)=>{r>0&&Oe(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Jt(this.reportStats_.bind(this),Math.floor(Math.random()*2*c_))}}/**
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
 */var Se;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Se||(Se={}));function Qs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Js(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ei{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Se.ACK_USER_WRITE,this.source=Qs()}operationForChild(e){if(A(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new D(e));return new ei(x(),n,this.revert)}}else return g(I(this.path)===e,"operationForChild called for unrelated child."),new ei(B(this.path),this.affectedTree,this.revert)}}/**
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
 */class dn{constructor(e,n){this.source=e,this.path=n,this.type=Se.LISTEN_COMPLETE}operationForChild(e){return A(this.path)?new dn(this.source,x()):new dn(this.source,B(this.path))}}/**
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
 */class pt{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Se.OVERWRITE}operationForChild(e){return A(this.path)?new pt(this.source,x(),this.snap.getImmediateChild(e)):new pt(this.source,B(this.path),this.snap)}}/**
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
 */class Pt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Se.MERGE}operationForChild(e){if(A(this.path)){const n=this.children.subtree(new D(e));return n.isEmpty()?null:n.value?new pt(this.source,x(),n.value):new Pt(this.source,x(),n)}else return g(I(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pt(this.source,B(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ye{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(A(e))return this.isFullyInitialized()&&!this.filtered_;const n=I(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class d_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function h_(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Zp(o.childName,o.snapshotNode))}),Kt(t,s,"child_removed",e,i,n),Kt(t,s,"child_added",e,i,n),Kt(t,s,"child_moved",r,i,n),Kt(t,s,"child_changed",e,i,n),Kt(t,s,"value",e,i,n),s}function Kt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>p_(t,a,l)),o.forEach(a=>{const l=f_(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function f_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function p_(t,e,n){if(e.childName==null||n.childName==null)throw Dt("Should only compare child_ events.");const i=new k(e.childName,e.snapshotNode),s=new k(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function gi(t,e){return{eventCache:t,serverCache:e}}function Zt(t,e,n,i){return gi(new Ye(e,n,i),t.serverCache)}function il(t,e,n,i){return gi(t.eventCache,new Ye(e,n,i))}function ti(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _t(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Wi;const __=()=>(Wi||(Wi=new ue(Jf)),Wi);class H{constructor(e,n=__()){this.value=e,this.children=n}static fromObject(e){let n=new H(null);return re(e,(i,s)=>{n=n.set(new D(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:x(),value:this.value};if(A(e))return null;{const i=I(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(B(e),n);return r!=null?{path:V(new D(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(A(e))return this;{const n=I(e),i=this.children.get(n);return i!==null?i.subtree(B(e)):new H(null)}}set(e,n){if(A(e))return new H(n,this.children);{const i=I(e),r=(this.children.get(i)||new H(null)).set(B(e),n),o=this.children.insert(i,r);return new H(this.value,o)}}remove(e){if(A(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const n=I(e),i=this.children.get(n);if(i){const s=i.remove(B(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new H(null):new H(this.value,r)}else return this}}get(e){if(A(e))return this.value;{const n=I(e),i=this.children.get(n);return i?i.get(B(e)):null}}setTree(e,n){if(A(e))return n;{const i=I(e),r=(this.children.get(i)||new H(null)).setTree(B(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new H(this.value,o)}}fold(e){return this.fold_(x(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(V(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,x(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(A(e))return null;{const r=I(e),o=this.children.get(r);return o?o.findOnPath_(B(e),V(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,x(),n)}foreachOnPath_(e,n,i){if(A(e))return this;{this.value&&i(n,this.value);const s=I(e),r=this.children.get(s);return r?r.foreachOnPath_(B(e),V(n,s),i):new H(null)}}foreach(e){this.foreach_(x(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(V(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Te{constructor(e){this.writeTree_=e}static empty(){return new Te(new H(null))}}function en(t,e,n){if(A(e))return new Te(new H(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=le(s,e);return r=r.updateChild(o,n),new Te(t.writeTree_.set(s,r))}else{const s=new H(n),r=t.writeTree_.setTree(e,s);return new Te(r)}}}function us(t,e,n){let i=t;return re(n,(s,r)=>{i=en(i,V(e,s),r)}),i}function co(t,e){if(A(e))return Te.empty();{const n=t.writeTree_.setTree(e,new H(null));return new Te(n)}}function ds(t,e){return vt(t,e)!=null}function vt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(le(n.path,e)):null}function uo(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(j,(i,s)=>{e.push(new k(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new k(i,s.value))}),e}function ze(t,e){if(A(e))return t;{const n=vt(t,e);return n!=null?new Te(new H(n)):new Te(t.writeTree_.subtree(e))}}function hs(t){return t.writeTree_.isEmpty()}function xt(t,e){return sl(x(),t.writeTree_,e)}function sl(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=sl(V(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(V(t,".priority"),i)),n}}/**
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
 */function mi(t,e){return ll(e,t)}function g_(t,e,n,i,s){g(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=en(t.visibleWrites,e,n)),t.lastWriteId=i}function m_(t,e,n,i){g(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=us(t.visibleWrites,e,n),t.lastWriteId=i}function v_(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function y_(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);g(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&w_(a,i.path)?s=!1:ye(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return E_(t),!0;if(i.snap)t.visibleWrites=co(t.visibleWrites,i.path);else{const a=i.children;re(a,l=>{t.visibleWrites=co(t.visibleWrites,V(i.path,l))})}return!0}else return!1}function w_(t,e){if(t.snap)return ye(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ye(V(t.path,n),e))return!0;return!1}function E_(t){t.visibleWrites=rl(t.allWrites,b_,x()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function b_(t){return t.visible}function rl(t,e,n){let i=Te.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)ye(n,o)?(a=le(n,o),i=en(i,a,r.snap)):ye(o,n)&&(a=le(o,n),i=en(i,x(),r.snap.getChild(a)));else if(r.children){if(ye(n,o))a=le(n,o),i=us(i,a,r.children);else if(ye(o,n))if(a=le(o,n),A(a))i=us(i,x(),r.children);else{const l=At(r.children,I(a));if(l){const c=l.getChild(B(a));i=en(i,x(),c)}}}else throw Dt("WriteRecord should have .snap or .children")}}return i}function ol(t,e,n,i,s){if(!i&&!s){const r=vt(t.visibleWrites,e);if(r!=null)return r;{const o=ze(t.visibleWrites,e);if(hs(o))return n;if(n==null&&!ds(o,x()))return null;{const a=n||E.EMPTY_NODE;return xt(o,a)}}}else{const r=ze(t.visibleWrites,e);if(!s&&hs(r))return n;if(!s&&n==null&&!ds(r,x()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ye(c.path,e)||ye(e,c.path))},a=rl(t.allWrites,o,e),l=n||E.EMPTY_NODE;return xt(a,l)}}}function C_(t,e,n){let i=E.EMPTY_NODE;const s=vt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(j,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=ze(t.visibleWrites,e);return n.forEachChild(j,(o,a)=>{const l=xt(ze(r,new D(o)),a);i=i.updateImmediateChild(o,l)}),uo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ze(t.visibleWrites,e);return uo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function S_(t,e,n,i,s){g(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=V(e,n);if(ds(t.visibleWrites,r))return null;{const o=ze(t.visibleWrites,r);return hs(o)?s.getChild(n):xt(o,s.getChild(n))}}function T_(t,e,n,i){const s=V(e,n),r=vt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=ze(t.visibleWrites,s);return xt(o,i.getNode().getImmediateChild(n))}else return null}function I_(t,e){return vt(t.visibleWrites,e)}function A_(t,e,n,i,s,r,o){let a;const l=ze(t.visibleWrites,e),c=vt(l,x());if(c!=null)a=c;else if(n!=null)a=xt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function k_(){return{visibleWrites:Te.empty(),allWrites:[],lastWriteId:-1}}function ni(t,e,n,i){return ol(t.writeTree,t.treePath,e,n,i)}function Zs(t,e){return C_(t.writeTree,t.treePath,e)}function ho(t,e,n,i){return S_(t.writeTree,t.treePath,e,n,i)}function ii(t,e){return I_(t.writeTree,V(t.treePath,e))}function N_(t,e,n,i,s,r){return A_(t.writeTree,t.treePath,e,n,i,s,r)}function er(t,e,n){return T_(t.writeTree,t.treePath,e,n)}function al(t,e){return ll(V(t.treePath,e),t.writeTree)}function ll(t,e){return{treePath:t,writeTree:e}}/**
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
 */class R_{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;g(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),g(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,cn(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,ln(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Rt(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,cn(i,e.snapshotNode,s.oldSnap));else throw Dt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class P_{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const cl=new P_;class tr{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ye(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return er(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_t(this.viewCache_),r=N_(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function x_(t){return{filter:t}}function O_(t,e){g(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function D_(t,e,n,i,s){const r=new R_;let o,a;if(n.type===Se.OVERWRITE){const c=n;c.source.fromUser?o=fs(t,e,c.path,c.snap,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!A(c.path),o=si(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Se.MERGE){const c=n;c.source.fromUser?o=M_(t,e,c.path,c.children,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ps(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Se.ACK_USER_WRITE){const c=n;c.revert?o=$_(t,e,c.path,i,s,r):o=F_(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Se.LISTEN_COMPLETE)o=B_(t,e,n.path,i,r);else throw Dt("Unknown operation type: "+n.type);const l=r.getChanges();return L_(e,o,l),{viewCache:o,changes:l}}function L_(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ti(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(nl(ti(e)))}}function ul(t,e,n,i,s,r){const o=e.eventCache;if(ii(i,n)!=null)return e;{let a,l;if(A(n))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_t(e),u=c instanceof E?c:E.EMPTY_NODE,d=Zs(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=ni(i,_t(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=I(n);if(c===".priority"){g(Ke(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=ho(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=B(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=ho(i,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=er(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return Zt(e,a,o.isFullyInitialized()||A(n),t.filter.filtersNodes())}}function si(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(A(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=I(n);if(!l.isCompleteForPath(n)&&Ke(n)>1)return e;const p=B(n),v=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,p,cl,null)}const d=il(e,c,l.isFullyInitialized()||A(n),u.filtersNodes()),h=new tr(s,d,r);return ul(t,d,n,s,h,a)}function fs(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new tr(s,e,r);if(A(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Zt(e,c,!0,t.filter.filtersNodes());else{const d=I(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Zt(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=B(n),f=a.getNode().getImmediateChild(d);let p;if(A(h))p=i;else{const m=u.getCompleteChild(d);m!=null?js(h)===".priority"&&m.getChild(Ka(h)).isEmpty()?p=m:p=m.updateChild(h,i):p=E.EMPTY_NODE}if(f.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=Zt(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function fo(t,e){return t.eventCache.isCompleteForChild(e)}function M_(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=V(n,l);fo(e,I(u))&&(a=fs(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=V(n,l);fo(e,I(u))||(a=fs(t,a,u,c,s,r,o))}),a}function po(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ps(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;A(n)?c=i:c=new H(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=po(t,f,h);l=si(t,l,new D(d),p,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),m=po(t,p,h);l=si(t,l,new D(d),m,s,r,o,a)}}),l}function F_(t,e,n,i,s,r,o){if(ii(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(A(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return si(t,e,n,l.getNode().getChild(n),s,r,a,o);if(A(n)){let c=new H(null);return l.getNode().forEachChild(ut,(u,d)=>{c=c.set(new D(u),d)}),ps(t,e,n,c,s,r,a,o)}else return e}else{let c=new H(null);return i.foreach((u,d)=>{const h=V(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),ps(t,e,n,c,s,r,a,o)}}function B_(t,e,n,i,s){const r=e.serverCache,o=il(e,r.getNode(),r.isFullyInitialized()||A(n),r.isFiltered());return ul(t,o,n,i,cl,s)}function $_(t,e,n,i,s,r){let o;if(ii(i,n)!=null)return e;{const a=new tr(i,e,s),l=e.eventCache.getNode();let c;if(A(n)||I(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ni(i,_t(e));else{const d=e.serverCache.getNode();g(d instanceof E,"serverChildren would be complete if leaf node"),u=Zs(i,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=I(n);let d=er(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,B(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,E.EMPTY_NODE,B(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ni(i,_t(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ii(i,x())!=null,Zt(e,c,o,t.filter.filtersNodes())}}/**
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
 */class H_{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ks(i.getIndex()),r=t_(i);this.processor_=x_(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(E.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(E.EMPTY_NODE,a.getNode(),null),u=new Ye(l,o.isFullyInitialized(),s.filtersNodes()),d=new Ye(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=gi(d,u),this.eventGenerator_=new d_(this.query_)}get query(){return this.query_}}function W_(t){return t.viewCache_.serverCache.getNode()}function U_(t){return ti(t.viewCache_)}function j_(t,e){const n=_t(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!A(e)&&!n.getImmediateChild(I(e)).isEmpty())?n.getChild(e):null}function _o(t){return t.eventRegistrations_.length===0}function V_(t,e){t.eventRegistrations_.push(e)}function go(t,e,n){const i=[];if(n){g(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function mo(t,e,n,i){e.type===Se.MERGE&&e.source.queryId!==null&&(g(_t(t.viewCache_),"We should always have a full cache before handling merges"),g(ti(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=D_(t.processor_,s,e,n,i);return O_(t.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,dl(t,r.changes,r.viewCache.eventCache.getNode(),null)}function z_(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(j,(r,o)=>{i.push(Rt(r,o))}),n.isFullyInitialized()&&i.push(nl(n.getNode())),dl(t,i,n.getNode(),e)}function dl(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return h_(t.eventGenerator_,e,n,s)}/**
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
 */let ri;class hl{constructor(){this.views=new Map}}function q_(t){g(!ri,"__referenceConstructor has already been defined"),ri=t}function G_(){return g(ri,"Reference.ts has not been loaded"),ri}function K_(t){return t.views.size===0}function nr(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return g(r!=null,"SyncTree gave us an op for an invalid query."),mo(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(mo(o,e,n,i));return r}}function fl(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ni(n,s?i:null),l=!1;a?l=!0:i instanceof E?(a=Zs(n,i),l=!1):(a=E.EMPTY_NODE,l=!1);const c=gi(new Ye(a,l,!1),new Ye(i,s,!1));return new H_(e,c)}return o}function Y_(t,e,n,i,s,r){const o=fl(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),V_(o,n),z_(o,n)}function Q_(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Qe(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(go(c,n,i)),_o(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(go(l,n,i)),_o(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Qe(t)&&r.push(new(G_())(e._repo,e._path)),{removed:r,events:o}}function pl(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qe(t,e){let n=null;for(const i of t.views.values())n=n||j_(i,e);return n}function _l(t,e){if(e._queryParams.loadsAllData())return vi(t);{const i=e._queryIdentifier;return t.views.get(i)}}function gl(t,e){return _l(t,e)!=null}function Qe(t){return vi(t)!=null}function vi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let oi;function X_(t){g(!oi,"__referenceConstructor has already been defined"),oi=t}function J_(){return g(oi,"Reference.ts has not been loaded"),oi}let Z_=1;class vo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=k_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function eg(t,e,n,i,s){return g_(t.pendingWriteTree_,e,n,i,s),s?Ft(t,new pt(Qs(),e,n)):[]}function tg(t,e,n,i){m_(t.pendingWriteTree_,e,n,i);const s=H.fromObject(n);return Ft(t,new Pt(Qs(),e,s))}function ot(t,e,n=!1){const i=v_(t.pendingWriteTree_,e);if(y_(t.pendingWriteTree_,e)){let r=new H(null);return i.snap!=null?r=r.set(x(),!0):re(i.children,o=>{r=r.set(new D(o),!0)}),Ft(t,new ei(i.path,r,n))}else return[]}function Tn(t,e,n){return Ft(t,new pt(Xs(),e,n))}function ng(t,e,n){const i=H.fromObject(n);return Ft(t,new Pt(Xs(),e,i))}function ig(t,e){return Ft(t,new dn(Xs(),e))}function sg(t,e,n){const i=ir(t,n);if(i){const s=sr(i),r=s.path,o=s.queryId,a=le(r,e),l=new dn(Js(o),a);return rr(t,r,l)}else return[]}function ai(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||gl(o,e))){const l=Q_(o,e,n,i);K_(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,f)=>Qe(f));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=ag(h);for(let p=0;p<f.length;++p){const m=f[p],v=m.query,T=El(t,m);t.listenProvider_.startListening(tn(v),hn(t,v),T.hashFn,T.onComplete)}}}!d&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(tn(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(yi(h));t.listenProvider_.stopListening(tn(h),f)}))}lg(t,c)}return a}function ml(t,e,n,i){const s=ir(t,i);if(s!=null){const r=sr(s),o=r.path,a=r.queryId,l=le(o,e),c=new pt(Js(a),l,n);return rr(t,o,c)}else return[]}function rg(t,e,n,i){const s=ir(t,i);if(s){const r=sr(s),o=r.path,a=r.queryId,l=le(o,e),c=H.fromObject(n),u=new Pt(Js(a),l,c);return rr(t,o,u)}else return[]}function _s(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const p=le(h,s);r=r||qe(f,p),o=o||Qe(f)});let a=t.syncPointTree_.get(s);a?(o=o||Qe(a),r=r||qe(a,x())):(a=new hl,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=E.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,p)=>{const m=qe(p,x());m&&(r=r.updateImmediateChild(f,m))}));const c=gl(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=yi(e);g(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=cg();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=mi(t.pendingWriteTree_,s);let d=Y_(a,e,n,u,r,l);if(!c&&!o&&!i){const h=_l(a,e);d=d.concat(ug(t,e,h))}return d}function vl(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=le(o,e),c=qe(a,l);if(c)return c});return ol(s,e,r,n,!0)}function og(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=le(c,n);i=i||qe(u,d)});let s=t.syncPointTree_.get(n);s?i=i||qe(s,x()):(s=new hl,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Ye(i,!0,!1):null,a=mi(t.pendingWriteTree_,e._path),l=fl(s,e,a,r?o.getNode():E.EMPTY_NODE,r);return U_(l)}function Ft(t,e){return yl(e,t.syncPointTree_,null,mi(t.pendingWriteTree_,x()))}function yl(t,e,n,i){if(A(t.path))return wl(t,e,n,i);{const s=e.get(x());s!=null&&(n=qe(s,x()));let r=[];const o=I(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=al(i,o);r=r.concat(yl(a,l,null,u))}return s&&(r=r.concat(nr(s,t,i,n))),r}}function wl(t,e,n,i){const s=e.get(x());s!=null&&(n=qe(s,x()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=al(i,o),u=t.operationForChild(o);u&&(r=r.concat(wl(u,a,null,c)))}),s&&(r=r.concat(nr(s,t,i,n))),r}function El(t,e){const n=e.query,i=hn(t,n);return{hashFn:()=>(W_(e)||E.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?sg(t,n._path,i):ig(t,n._path);{const r=tp(s,n);return ai(t,n,null,r)}}}}function hn(t,e){const n=yi(e);return t.queryToTagMap.get(n)}function yi(t){return t._path.toString()+"$"+t._queryIdentifier}function ir(t,e){return t.tagToQueryMap.get(e)}function sr(t){const e=t.indexOf("$");return g(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new D(t.substr(0,e))}}function rr(t,e,n){const i=t.syncPointTree_.get(e);g(i,"Missing sync point for query tag that we're tracking");const s=mi(t.pendingWriteTree_,e);return nr(i,n,s,null)}function ag(t){return t.fold((e,n,i)=>{if(n&&Qe(n))return[vi(n)];{let s=[];return n&&(s=pl(n)),re(i,(r,o)=>{s=s.concat(o)}),s}})}function tn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(J_())(t._repo,t._path):t}function lg(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=yi(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function cg(){return Z_++}function ug(t,e,n){const i=e._path,s=hn(t,e),r=El(t,n),o=t.listenProvider_.startListening(tn(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)g(!Qe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!A(c)&&u&&Qe(u))return[vi(u).query];{let h=[];return u&&(h=h.concat(pl(u).map(f=>f.query))),re(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(tn(u),hn(t,u))}}return o}/**
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
 */class or{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new or(n)}node(){return this.node_}}class ar{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=V(this.path_,e);return new ar(this.syncTree_,n)}node(){return vl(this.syncTree_,this.path_)}}const dg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yo=function(t,e,n){if(!t||typeof t!="object")return t;if(g(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return hg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fg(t[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},hg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:g(!1,"Unexpected server value: "+t)}},fg=function(t,e,n){t.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&g(!1,"Unexpected increment value: "+i);const s=e.node();if(g(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},bl=function(t,e,n,i){return lr(e,new ar(n,t),i)},pg=function(t,e,n){return lr(t,new or(e),n)};function lr(t,e,n){const i=t.getPriority().val(),s=yo(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=yo(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new te(a,Y(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new te(s))),o.forEachChild(j,(a,l)=>{const c=lr(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class cr{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ur(t,e){let n=e instanceof D?e:new D(e),i=t,s=I(n);for(;s!==null;){const r=At(i.node.children,s)||{children:{},childCount:0};i=new cr(s,i,r),n=B(n),s=I(n)}return i}function Bt(t){return t.node.value}function Cl(t,e){t.node.value=e,gs(t)}function Sl(t){return t.node.childCount>0}function _g(t){return Bt(t)===void 0&&!Sl(t)}function wi(t,e){re(t.node.children,(n,i)=>{e(new cr(n,t,i))})}function Tl(t,e,n,i){n&&!i&&e(t),wi(t,s=>{Tl(s,e,!0,i)}),n&&i&&e(t)}function gg(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function In(t){return new D(t.parent===null?t.name:In(t.parent)+"/"+t.name)}function gs(t){t.parent!==null&&mg(t.parent,t.name,t)}function mg(t,e,n){const i=_g(n),s=Oe(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,gs(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,gs(t))}/**
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
 */const vg=/[\[\].#$\/\u0000-\u001F\u007F]/,yg=/[\[\].#$\u0000-\u001F\u007F]/,Ui=10*1024*1024,dr=function(t){return typeof t=="string"&&t.length!==0&&!vg.test(t)},Il=function(t){return typeof t=="string"&&t.length!==0&&!yg.test(t)},wg=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Il(t)},li=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!pi(t)||t&&typeof t=="object"&&Oe(t,".sv")},fn=function(t,e,n,i){i&&e===void 0||Ei(kt(t,"value"),e,n)},Ei=function(t,e,n){const i=n instanceof D?new Lp(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+tt(i));if(typeof e=="function")throw new Error(t+"contains a function "+tt(i)+" with contents = "+e.toString());if(pi(e))throw new Error(t+"contains "+e.toString()+" "+tt(i));if(typeof e=="string"&&e.length>Ui/3&&fi(e)>Ui)throw new Error(t+"contains a string greater than "+Ui+" utf8 bytes "+tt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(re(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!dr(o)))throw new Error(t+" contains an invalid key ("+o+") "+tt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Mp(i,o),Ei(t,a,i),Fp(i)}),s&&r)throw new Error(t+' contains ".value" child '+tt(i)+" in addition to actual children.")}},Eg=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=an(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!dr(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Dp);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&ye(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Al=function(t,e,n,i){const s=kt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];re(e,(o,a)=>{const l=new D(o);if(Ei(s,a,V(n,l)),js(l)===".priority"&&!li(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Eg(s,r)},bg=function(t,e,n){if(pi(e))throw new Error(kt(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!li(e))throw new Error(kt(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Cg=function(t,e,n,i){},hr=function(t,e,n,i){if(!Il(n))throw new Error(kt(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sg=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hr(t,e,n)},Fn=function(t,e){if(I(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Tg=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wg(n))throw new Error(kt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ig{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fr(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Vs(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function kl(t,e,n){fr(t,n),Nl(t,i=>Vs(i,e))}function Re(t,e,n){fr(t,n),Nl(t,i=>ye(i,e)||ye(e,i))}function Nl(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Ag(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ag(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Xt&&se("event: "+n.toString()),Lt(i)}}}/**
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
 */const kg="repo_interrupt",Ng=25;class Rg{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ig,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zn(),this.transactionQueueTree_=new cr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Pg(t,e,n){if(t.stats_=Ws(t.repoInfo_),t.forceRestClient_||rp())t.server_=new Jn(t.repoInfo_,(i,s,r,o)=>{wo(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Eo(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{J(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Fe(t.repoInfo_,e,(i,s,r,o)=>{wo(t,i,s,r,o)},i=>{Eo(t,i)},i=>{Og(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=up(t.repoInfo_,()=>new u_(t.stats_,t.server_)),t.infoData_=new r_,t.infoSyncTree_=new vo({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Tn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_r(t,"connected",!1),t.serverSyncTree_=new vo({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Re(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function xg(t){const n=t.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pr(t){return dg({timestamp:xg(t)})}function wo(t,e,n,i,s){t.dataUpdateCount++;const r=new D(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Gn(n,c=>Y(c));o=rg(t.serverSyncTree_,r,l,s)}else{const l=Y(n);o=ml(t.serverSyncTree_,r,l,s)}else if(i){const l=Gn(n,c=>Y(c));o=ng(t.serverSyncTree_,r,l)}else{const l=Y(n);o=Tn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=pn(t,r)),Re(t.eventQueue_,a,o)}function Eo(t,e){_r(t,"connected",e),e===!1&&Mg(t)}function Og(t,e){re(e,(n,i)=>{_r(t,n,i)})}function _r(t,e,n){const i=new D("/.info/"+e),s=Y(n);t.infoData_.updateSnapshot(i,s);const r=Tn(t.infoSyncTree_,i,s);Re(t.eventQueue_,i,r)}function Rl(t){return t.nextWriteId_++}function Dg(t,e,n){const i=og(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=Y(s).withIndex(e._queryParams.getIndex());_s(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Tn(t.serverSyncTree_,e._path,r);else{const a=hn(t.serverSyncTree_,e);o=ml(t.serverSyncTree_,e._path,r,a)}return Re(t.eventQueue_,e._path,o),ai(t.serverSyncTree_,e,n,null,!0),r},s=>(bi(t,"get for query "+J(e)+" failed: "+s),Promise.reject(new Error(s))))}function Lg(t,e,n,i){bi(t,"update",{path:e.toString(),value:n});let s=!0;const r=pr(t),o={};if(re(n,(a,l)=>{s=!1,o[a]=bl(V(e,a),Y(l),t.serverSyncTree_,r)}),s)se("update() called with empty data.  Don't do anything."),gt(t,i,"ok",void 0);else{const a=Rl(t),l=tg(t.serverSyncTree_,e,o,a);fr(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||he("update at "+e+" failed: "+c);const h=ot(t.serverSyncTree_,a,!d),f=h.length>0?pn(t,e):e;Re(t.eventQueue_,f,h),gt(t,i,c,u)}),re(n,c=>{const u=Ml(t,V(e,c));pn(t,u)}),Re(t.eventQueue_,e,[])}}function Mg(t){bi(t,"onDisconnectEvents");const e=pr(t),n=Zn();cs(t.onDisconnect_,x(),(s,r)=>{const o=bl(s,r,t.serverSyncTree_,e);Mt(n,s,o)});let i=[];cs(n,x(),(s,r)=>{i=i.concat(Tn(t.serverSyncTree_,s,r));const o=Ml(t,s);pn(t,o)}),t.onDisconnect_=Zn(),Re(t.eventQueue_,x(),i)}function Fg(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&ls(t.onDisconnect_,e),gt(t,n,i,s)})}function bo(t,e,n,i){const s=Y(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Mt(t.onDisconnect_,e,s),gt(t,i,r,o)})}function Bg(t,e,n,i,s){const r=Y(n,i);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Mt(t.onDisconnect_,e,r),gt(t,s,o,a)})}function $g(t,e,n,i){if(Ji(n)){se("onDisconnect().update() called with empty data.  Don't do anything."),gt(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,r)=>{s==="ok"&&re(n,(o,a)=>{const l=Y(a);Mt(t.onDisconnect_,V(e,o),l)}),gt(t,i,s,r)})}function Hg(t,e,n){let i;I(e._path)===".info"?i=_s(t.infoSyncTree_,e,n):i=_s(t.serverSyncTree_,e,n),kl(t.eventQueue_,e._path,i)}function Wg(t,e,n){let i;I(e._path)===".info"?i=ai(t.infoSyncTree_,e,n):i=ai(t.serverSyncTree_,e,n),kl(t.eventQueue_,e._path,i)}function Pl(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kg)}function bi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),se(n,...e)}function gt(t,e,n,i){e&&Lt(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function xl(t,e,n){return vl(t.serverSyncTree_,e,n)||E.EMPTY_NODE}function gr(t,e=t.transactionQueueTree_){if(e||Ci(t,e),Bt(e)){const n=Dl(t,e);g(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Ug(t,In(e),n)}else Sl(e)&&wi(e,n=>{gr(t,n)})}function Ug(t,e,n){const i=n.map(c=>c.currentWriteId),s=xl(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=le(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{bi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(ot(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ci(t,ur(t.transactionQueueTree_,e)),gr(t,t.transactionQueueTree_),Re(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Lt(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{he("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}pn(t,e)}},o)}function pn(t,e){const n=Ol(t,e),i=In(n),s=Dl(t,n);return jg(t,s,i),i}function jg(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=le(n,l.path);let u=!1,d;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(ot(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ng)u=!0,d="maxretry",s=s.concat(ot(t.serverSyncTree_,l.currentWriteId,!0));else{const h=xl(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Ei("transaction failed: Data returned ",f,l.path);let p=Y(f);typeof f=="object"&&f!=null&&Oe(f,".priority")||(p=p.updatePriority(h.getPriority()));const v=l.currentWriteId,T=pr(t),y=pg(p,h,T);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=y,l.currentWriteId=Rl(t),o.splice(o.indexOf(v),1),s=s.concat(eg(t.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(ot(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",s=s.concat(ot(t.serverSyncTree_,l.currentWriteId,!0))}Re(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ci(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Lt(i[a]);gr(t,t.transactionQueueTree_)}function Ol(t,e){let n,i=t.transactionQueueTree_;for(n=I(e);n!==null&&Bt(i)===void 0;)i=ur(i,n),e=B(e),n=I(e);return i}function Dl(t,e){const n=[];return Ll(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Ll(t,e,n){const i=Bt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);wi(e,s=>{Ll(t,s,n)})}function Ci(t,e){const n=Bt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Cl(e,n.length>0?n:void 0)}wi(e,i=>{Ci(t,i)})}function Ml(t,e){const n=In(Ol(t,e)),i=ur(t.transactionQueueTree_,e);return gg(i,s=>{ji(t,s)}),ji(t,i),Tl(i,s=>{ji(t,s)}),n}function ji(t,e){const n=Bt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(g(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ot(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cl(e,void 0):n.length=r+1,Re(t.eventQueue_,In(e),s);for(let o=0;o<i.length;o++)Lt(i[o])}}/**
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
 */function Vg(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function zg(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):he(`Invalid query segment '${n}' in query '${t}'`)}return e}const Co=function(t,e){const n=qg(t),i=n.namespace;n.domain==="firebase.com"&&Be(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Qf();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $a(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new D(n.pathString)}},qg=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(s=Vg(t.substring(u,d)));const h=zg(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Gg{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+J(this.snapshot.exportVal())}}class Kg{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Fl{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Yg{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new ge;return Fg(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Fn("OnDisconnect.remove",this._path);const e=new ge;return bo(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Fn("OnDisconnect.set",this._path),fn("OnDisconnect.set",e,this._path,!1);const n=new ge;return bo(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Fn("OnDisconnect.setWithPriority",this._path),fn("OnDisconnect.setWithPriority",e,this._path,!1),bg("OnDisconnect.setWithPriority",n);const i=new ge;return Bg(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){Fn("OnDisconnect.update",this._path),Al("OnDisconnect.update",e,this._path);const n=new ge;return $g(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class $t{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return A(this._path)?null:js(this._path)}get ref(){return new He(this._repo,this._path)}get _queryIdentifier(){const e=ao(this._queryParams),n=$s(e);return n==="{}"?"default":n}get _queryObject(){return ao(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof $t))return!1;const n=this._repo===e._repo,i=Vs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Op(this._path)}}function Qg(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function mr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===ut){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==ft)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==Ge)throw new Error(i);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===j){if(e!=null&&!li(e)||n!=null&&!li(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(g(t.getIndex()instanceof Gs||t.getIndex()===tl,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Bl(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class He extends $t{constructor(e,n){super(e,n,new Ys,!1)}get parent(){const e=Ka(this._path);return e===null?null:new He(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _n{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new D(e),i=ms(this.ref,e);return new _n(this._node.getChild(n),i,j)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new _n(s,ms(this.ref,i),j)))}hasChild(e){const n=new D(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Av(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?ms(t._root,e):t._root}function ms(t,e){return t=$e(t),I(t._path)===null?Sg("child","path",e):hr("child","path",e),new He(t._repo,V(t._path,e))}function kv(t){return t=$e(t),new Yg(t._repo,t._path)}function Nv(t,e){Al("update",e,t._path);const n=new ge;return Lg(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Rv(t){t=$e(t);const e=new Fl(()=>{}),n=new Si(e);return Dg(t._repo,t,n).then(i=>new _n(i,new He(t._repo,t._path),t._queryParams.getIndex()))}class Si{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Gg("value",this,new _n(e.snapshotNode,new He(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Kg(this,e,n):null}matches(e){return e instanceof Si?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Xg(t,e,n,i,s){const r=new Fl(n,void 0),o=new Si(r);return Hg(t._repo,t,o),()=>Wg(t._repo,t,o)}function Pv(t,e,n,i){return Xg(t,"value",e)}class Ti{}class Jg extends Ti{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){fn("endAt",this._value,e._path,!0);const n=i_(e._queryParams,this._value,this._key);if(Bl(n),mr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new $t(e._repo,e._path,n,e._orderByCalled)}}class Zg extends Ti{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){fn("startAt",this._value,e._path,!0);const n=n_(e._queryParams,this._value,this._key);if(Bl(n),mr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new $t(e._repo,e._path,n,e._orderByCalled)}}class em extends Ti{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Qg(e,"orderByChild");const n=new D(this._path);if(A(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new Gs(n),s=s_(e._queryParams,i);return mr(s),new $t(e._repo,e._path,s,!0)}}function xv(t){return hr("orderByChild","path",t),new em(t)}class tm extends Ti{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(fn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Jg(this._value,this._key)._apply(new Zg(this._value,this._key)._apply(e))}}function Ov(t,e){return Cg(),new tm(t,e)}function Dv(t,...e){let n=$e(t);for(const i of e)n=i._apply(n);return n}q_(He);X_(He);/**
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
 */const nm="FIREBASE_DATABASE_EMULATOR_HOST",vs={};let im=!1;function sm(t,e,n,i){t.repoInfo_=new $a(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function rm(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),se("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Co(r,s),a=o.repoInfo,l;typeof process<"u"&&jr&&(l=jr[nm]),l?(r=`http://${l}?ns=${a.namespace}`,o=Co(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new ap(t.name,t.options,e);Tg("Invalid Firebase Database URL",o),A(o.path)||Be("Database URL must point to the root of a Firebase Database (not including a child path).");const u=am(a,t,c,new op(t.name,n));return new lm(u,t)}function om(t,e){const n=vs[e];(!n||n[t.key]!==t)&&Be(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Pl(t),delete n[t.key]}function am(t,e,n,i){let s=vs[e.name];s||(s={},vs[e.name]=s);let r=s[t.toURLString()];return r&&Be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Rg(t,im,n,i),s[t.toURLString()]=r,r}class lm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Pg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new He(this._repo,x())),this._rootInternal}_delete(){return this._rootInternal!==null&&(om(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Be("Cannot call "+e+" on a deleted database.")}}function Lv(t=ba(),e){const n=Bs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=ph("database");i&&cm(n,...i)}return n}function cm(t,e,n,i={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Be("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Un(Un.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:_h(i.mockUserToken,t.app.options.projectId);r=new Un(o)}sm(s,e,n,r)}function Mv(t){t=$e(t),t._checkNotDeleted("goOffline"),Pl(t._repo)}/**
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
 */function um(t){Vf(Pf),Nt(new dt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rm(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),ct(Vr,zr,t),ct(Vr,zr,"esm2017")}/**
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
 */const dm={".sv":"timestamp"};function Fv(){return dm}function Bv(t){return{".sv":{increment:t}}}Fe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};um();/**
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
 */const ys=new Map,$l={activated:!1,tokenObservers:[]},hm={initialized:!1,enabled:!1};function Z(t){return ys.get(t)||Object.assign({},$l)}function fm(t,e){return ys.set(t,e),ys.get(t)}function Ii(){return hm}/**
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
 */const Hl="https://content-firebaseappcheck.googleapis.com/v1",pm="exchangeRecaptchaV3Token",_m="exchangeDebugToken",So={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},gm=24*60*60*1e3;/**
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
 */class mm{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ge,this.pending.promise.catch(n=>{}),await vm(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ge,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function vm(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const ym={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},de=new Ls("appCheck","AppCheck",ym);/**
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
 */function To(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function vr(t){if(!Z(t).activated)throw de.create("use-before-activation",{appName:t.name})}function Wl(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),i=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-i*3600)/60),r=e-n*3600*24-i*3600-s*60;let o="";return n&&(o+=Bn(n)+"d:"),i&&(o+=Bn(i)+"h:"),o+=Bn(s)+"m:"+Bn(r)+"s",o}function Bn(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
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
 */async function yr({url:t,body:e},n){const i={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&(i["X-Firebase-Client"]=d)}const r={method:"POST",body:JSON.stringify(e),headers:i};let o;try{o=await fetch(t,r)}catch(d){throw de.create("fetch-network-error",{originalErrorMessage:d==null?void 0:d.message})}if(o.status!==200)throw de.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(d){throw de.create("fetch-parse-error",{originalErrorMessage:d==null?void 0:d.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw de.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(l[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+c,issuedAtTimeMillis:u}}function wm(t,e){const{projectId:n,appId:i,apiKey:s}=t.options;return{url:`${Hl}/projects/${n}/apps/${i}:${pm}?key=${s}`,body:{recaptcha_v3_token:e}}}function Ul(t,e){const{projectId:n,appId:i,apiKey:s}=t.options;return{url:`${Hl}/projects/${n}/apps/${i}:${_m}?key=${s}`,body:{debug_token:e}}}/**
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
 */const Em="firebase-app-check-database",bm=1,gn="firebase-app-check-store",jl="debug-token";let $n=null;function Vl(){return $n||($n=new Promise((t,e)=>{try{const n=indexedDB.open(Em,bm);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(de.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(gn,{keyPath:"compositeKey"})}}}catch(n){e(de.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),$n)}function Cm(t){return ql(Gl(t))}function Sm(t,e){return zl(Gl(t),e)}function Tm(t){return zl(jl,t)}function Im(){return ql(jl)}async function zl(t,e){const i=(await Vl()).transaction(gn,"readwrite"),r=i.objectStore(gn).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(de.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}async function ql(t){const n=(await Vl()).transaction(gn,"readonly"),s=n.objectStore(gn).get(t);return new Promise((r,o)=>{s.onsuccess=a=>{const l=a.target.result;r(l?l.value:void 0)},n.onerror=a=>{var l;o(de.create("storage-get",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))}})}function Gl(t){return`${t.options.appId}-${t.name}`}/**
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
 */const mn=new Ms("@firebase/app-check");/**
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
 */async function Am(t){if(Ds()){let e;try{e=await Cm(t)}catch(n){mn.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Vi(t,e){return Ds()?Sm(t,e).catch(n=>{mn.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function km(){let t;try{t=await Im()}catch{}if(t)return t;{const e=kh();return Tm(e).catch(n=>mn.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
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
 */function wr(){return Ii().enabled}async function Er(){const t=Ii();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Nm(){const t=pa(),e=Ii();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new ge;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(km())}/**
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
 */const Rm={error:"UNKNOWN_ERROR"};function Pm(t){return hi.encodeString(JSON.stringify(t),!1)}async function ws(t,e=!1){const n=t.app;vr(n);const i=Z(n);let s=i.token,r;if(s&&!Tt(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Tt(l)?s=l:await Vi(n,void 0))}if(!e&&s&&Tt(s))return{token:s.token};let o=!1;if(wr()){i.exchangeTokenPromise||(i.exchangeTokenPromise=yr(Ul(n,await Er()),t.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),o=!0);const l=await i.exchangeTokenPromise;return await Vi(n,l),i.token=l,{token:l.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Z(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?mn.warn(l.message):mn.error(l),r=l}let a;return s?r?Tt(s)?a={token:s.token,internalError:r}:a=Ao(r):(a={token:s.token},i.token=s,await Vi(n,s)):a=Ao(r),o&&Ql(n,a),a}async function xm(t){const e=t.app;vr(e);const{provider:n}=Z(e);if(wr()){const i=await Er(),{token:s}=await yr(Ul(e,i),t.heartbeatServiceProvider);return{token:s}}else{const{token:i}=await n.getToken();return{token:i}}}function Kl(t,e,n,i){const{app:s}=t,r=Z(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Tt(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Io(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Io(t))}function Yl(t,e){const n=Z(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Io(t){const{app:e}=t,n=Z(e);let i=n.tokenRefresher;i||(i=Om(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function Om(t){const{app:e}=t;return new mm(async()=>{const n=Z(e);let i;if(n.token?i=await ws(t,!0):i=await ws(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Z(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},So.RETRIAL_MIN_WAIT,So.RETRIAL_MAX_WAIT)}function Ql(t,e){const n=Z(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Tt(t){return t.expireTimeMillis-Date.now()>0}function Ao(t){return{token:Pm(Rm),error:t}}/**
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
 */class Dm{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Z(this.app);for(const n of e)Yl(this.app,n.next);return Promise.resolve()}}function Lm(t,e){return new Dm(t,e)}function Mm(t){return{getToken:e=>ws(t,e),getLimitedUseToken:()=>xm(t),addTokenListener:e=>Kl(t,"INTERNAL",e),removeTokenListener:e=>Yl(t.app,e)}}const Fm="@firebase/app-check",Bm="0.8.3";/**
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
 */const $m="https://www.google.com/recaptcha/api.js";function Hm(t,e){const n=new ge,i=Z(t);i.reCAPTCHAState={initialized:n};const s=Wm(t),r=To(!1);return r?ko(t,e,r,s,n):Vm(()=>{const o=To(!1);if(!o)throw new Error("no recaptcha");ko(t,e,o,s,n)}),n.promise}function ko(t,e,n,i,s){n.ready(()=>{jm(t,e,n,i),s.resolve(n)})}function Wm(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Um(t){vr(t);const n=await Z(t).reCAPTCHAState.initialized.promise;return new Promise((i,s)=>{const r=Z(t).reCAPTCHAState;n.ready(()=>{i(n.execute(r.widgetId,{action:"fire_app_check"}))})})}function jm(t,e,n,i){const s=n.render(i,{sitekey:e,size:"invisible",callback:()=>{Z(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Z(t).reCAPTCHAState.succeeded=!1}}),r=Z(t);r.reCAPTCHAState=Object.assign(Object.assign({},r.reCAPTCHAState),{widgetId:s})}function Vm(t){const e=document.createElement("script");e.src=$m,e.onload=t,document.head.appendChild(e)}/**
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
 */class Xl{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,i;qm(this._throttleData);const s=await Um(this._app).catch(o=>{throw de.create("recaptcha-error")});if(!(!((e=Z(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw de.create("recaptcha-error");let r;try{r=await yr(wm(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=zm(Number((i=o.customData)===null||i===void 0?void 0:i.httpStatus),this._throttleData),de.create("throttled",{time:Wl(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=Bs(e,"heartbeat"),Hm(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Xl?this._siteKey===e._siteKey:!1}}function zm(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+gm,httpStatus:t};{const n=e?e.backoffCount:0,i=Oh(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+i,httpStatus:t}}}function qm(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw de.create("throttled",{time:Wl(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
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
 */function $v(t=ba(),e){t=$e(t);const n=Bs(t,"app-check");if(Ii().initialized||Nm(),wr()&&Er().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(r.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&r.provider.isEqual(e.provider))return s;throw de.create("already-initialized",{appName:t.name})}const i=n.initialize({options:e});return Gm(t,e.provider,e.isTokenAutoRefreshEnabled),Z(t).isTokenAutoRefreshEnabled&&Kl(i,"INTERNAL",()=>{}),i}function Gm(t,e,n){const i=fm(t,Object.assign({},$l));i.activated=!0,i.provider=e,i.cachedTokenPromise=Am(t).then(s=>(s&&Tt(s)&&(i.token=s,Ql(t,{token:s.token})),s)),i.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,i.provider.initialize(t)}const Km="app-check",No="app-check-internal";function Ym(){Nt(new dt(Km,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Lm(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(No).initialize()})),Nt(new dt(No,t=>{const e=t.getProvider("app-check").getImmediate();return Mm(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ct(Fm,Bm)}Ym();var Xe={},W={},ie={};Object.defineProperty(ie,"__esModule",{value:!0});ie.output=ie.exists=ie.hash=ie.bytes=ie.bool=ie.number=ie.isBytes=void 0;function ci(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`positive integer expected, not ${t}`)}ie.number=ci;function Jl(t){if(typeof t!="boolean")throw new Error(`boolean expected, not ${t}`)}ie.bool=Jl;function Zl(t){return t instanceof Uint8Array||t!=null&&typeof t=="object"&&t.constructor.name==="Uint8Array"}ie.isBytes=Zl;function br(t,...e){if(!Zl(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)}ie.bytes=br;function ec(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");ci(t.outputLen),ci(t.blockLen)}ie.hash=ec;function tc(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}ie.exists=tc;function nc(t,e){br(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}ie.output=nc;const Qm={number:ci,bool:Jl,bytes:br,hash:ec,exists:tc,output:nc};ie.default=Qm;var b={};Object.defineProperty(b,"__esModule",{value:!0});b.add5L=b.add5H=b.add4H=b.add4L=b.add3H=b.add3L=b.add=b.rotlBL=b.rotlBH=b.rotlSL=b.rotlSH=b.rotr32L=b.rotr32H=b.rotrBL=b.rotrBH=b.rotrSL=b.rotrSH=b.shrSL=b.shrSH=b.toBig=b.split=b.fromBig=void 0;const Hn=BigInt(2**32-1),Es=BigInt(32);function Cr(t,e=!1){return e?{h:Number(t&Hn),l:Number(t>>Es&Hn)}:{h:Number(t>>Es&Hn)|0,l:Number(t&Hn)|0}}b.fromBig=Cr;function ic(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:r,l:o}=Cr(t[s],e);[n[s],i[s]]=[r,o]}return[n,i]}b.split=ic;const sc=(t,e)=>BigInt(t>>>0)<<Es|BigInt(e>>>0);b.toBig=sc;const rc=(t,e,n)=>t>>>n;b.shrSH=rc;const oc=(t,e,n)=>t<<32-n|e>>>n;b.shrSL=oc;const ac=(t,e,n)=>t>>>n|e<<32-n;b.rotrSH=ac;const lc=(t,e,n)=>t<<32-n|e>>>n;b.rotrSL=lc;const cc=(t,e,n)=>t<<64-n|e>>>n-32;b.rotrBH=cc;const uc=(t,e,n)=>t>>>n-32|e<<64-n;b.rotrBL=uc;const dc=(t,e)=>e;b.rotr32H=dc;const hc=(t,e)=>t;b.rotr32L=hc;const fc=(t,e,n)=>t<<n|e>>>32-n;b.rotlSH=fc;const pc=(t,e,n)=>e<<n|t>>>32-n;b.rotlSL=pc;const _c=(t,e,n)=>e<<n-32|t>>>64-n;b.rotlBH=_c;const gc=(t,e,n)=>t<<n-32|e>>>64-n;b.rotlBL=gc;function mc(t,e,n,i){const s=(e>>>0)+(i>>>0);return{h:t+n+(s/2**32|0)|0,l:s|0}}b.add=mc;const vc=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0);b.add3L=vc;const yc=(t,e,n,i)=>e+n+i+(t/2**32|0)|0;b.add3H=yc;const wc=(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0);b.add4L=wc;const Ec=(t,e,n,i,s)=>e+n+i+s+(t/2**32|0)|0;b.add4H=Ec;const bc=(t,e,n,i,s)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(s>>>0);b.add5L=bc;const Cc=(t,e,n,i,s,r)=>e+n+i+s+r+(t/2**32|0)|0;b.add5H=Cc;const Xm={fromBig:Cr,split:ic,toBig:sc,shrSH:rc,shrSL:oc,rotrSH:ac,rotrSL:lc,rotrBH:cc,rotrBL:uc,rotr32H:dc,rotr32L:hc,rotlSH:fc,rotlSL:pc,rotlBH:_c,rotlBL:gc,add:mc,add3L:vc,add3H:yc,add4L:wc,add4H:Ec,add5H:Cc,add5L:bc};b.default=Xm;var Sc={},Ai={};Object.defineProperty(Ai,"__esModule",{value:!0});Ai.crypto=void 0;Ai.crypto=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;(function(t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(t,"__esModule",{value:!0}),t.randomBytes=t.wrapXOFConstructorWithOpts=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.byteSwap32=t.byteSwapIfBE=t.byteSwap=t.isLE=t.rotl=t.rotr=t.createView=t.u32=t.u8=t.isBytes=void 0;const e=Ai,n=ie;function i(_){return _ instanceof Uint8Array||_!=null&&typeof _=="object"&&_.constructor.name==="Uint8Array"}t.isBytes=i;const s=_=>new Uint8Array(_.buffer,_.byteOffset,_.byteLength);t.u8=s;const r=_=>new Uint32Array(_.buffer,_.byteOffset,Math.floor(_.byteLength/4));t.u32=r;const o=_=>new DataView(_.buffer,_.byteOffset,_.byteLength);t.createView=o;const a=(_,w)=>_<<32-w|_>>>w;t.rotr=a;const l=(_,w)=>_<<w|_>>>32-w>>>0;t.rotl=l,t.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;const c=_=>_<<24&4278190080|_<<8&16711680|_>>>8&65280|_>>>24&255;t.byteSwap=c,t.byteSwapIfBE=t.isLE?_=>_:_=>(0,t.byteSwap)(_);function u(_){for(let w=0;w<_.length;w++)_[w]=(0,t.byteSwap)(_[w])}t.byteSwap32=u;const d=Array.from({length:256},(_,w)=>w.toString(16).padStart(2,"0"));function h(_){(0,n.bytes)(_);let w="";for(let M=0;M<_.length;M++)w+=d[_[M]];return w}t.bytesToHex=h;const f={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function p(_){if(_>=f._0&&_<=f._9)return _-f._0;if(_>=f._A&&_<=f._F)return _-(f._A-10);if(_>=f._a&&_<=f._f)return _-(f._a-10)}function m(_){if(typeof _!="string")throw new Error("hex string expected, got "+typeof _);const w=_.length,M=w/2;if(w%2)throw new Error("padded hex string expected, got unpadded hex of length "+w);const P=new Uint8Array(M);for(let F=0,Q=0;F<M;F++,Q+=2){const Ht=p(_.charCodeAt(Q)),Wt=p(_.charCodeAt(Q+1));if(Ht===void 0||Wt===void 0){const kn=_[Q]+_[Q+1];throw new Error('hex string expected, got non-hex character "'+kn+'" at index '+Q)}P[F]=Ht*16+Wt}return P}t.hexToBytes=m;const v=async()=>{};t.nextTick=v;async function T(_,w,M){let P=Date.now();for(let F=0;F<_;F++){M(F);const Q=Date.now()-P;Q>=0&&Q<w||(await(0,t.nextTick)(),P+=Q)}}t.asyncLoop=T;function y(_){if(typeof _!="string")throw new Error(`utf8ToBytes expected string, got ${typeof _}`);return new Uint8Array(new TextEncoder().encode(_))}t.utf8ToBytes=y;function S(_){return typeof _=="string"&&(_=y(_)),(0,n.bytes)(_),_}t.toBytes=S;function L(..._){let w=0;for(let P=0;P<_.length;P++){const F=_[P];(0,n.bytes)(F),w+=F.length}const M=new Uint8Array(w);for(let P=0,F=0;P<_.length;P++){const Q=_[P];M.set(Q,F),F+=Q.length}return M}t.concatBytes=L;class fe{clone(){return this._cloneInto()}}t.Hash=fe;const pe={}.toString;function O(_,w){if(w!==void 0&&pe.call(w)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(_,w)}t.checkOpts=O;function z(_){const w=P=>_().update(S(P)).digest(),M=_();return w.outputLen=M.outputLen,w.blockLen=M.blockLen,w.create=()=>_(),w}t.wrapConstructor=z;function De(_){const w=(P,F)=>_(F).update(S(P)).digest(),M=_({});return w.outputLen=M.outputLen,w.blockLen=M.blockLen,w.create=P=>_(P),w}t.wrapConstructorWithOpts=De;function N(_){const w=(P,F)=>_(F).update(S(P)).digest(),M=_({});return w.outputLen=M.outputLen,w.blockLen=M.blockLen,w.create=P=>_(P),w}t.wrapXOFConstructorWithOpts=N;function q(_=32){if(e.crypto&&typeof e.crypto.getRandomValues=="function")return e.crypto.getRandomValues(new Uint8Array(_));throw new Error("crypto.getRandomValues must be defined")}t.randomBytes=q})(Sc);Object.defineProperty(W,"__esModule",{value:!0});W.shake256=W.shake128=W.keccak_512=W.keccak_384=W.keccak_256=W.keccak_224=W.sha3_512=W.sha3_384=W.sha3_256=W.sha3_224=W.Keccak=W.keccakP=void 0;const Ct=ie,vn=b,Le=Sc,Tc=[],Ic=[],Ac=[],Jm=BigInt(0),Yt=BigInt(1),Zm=BigInt(2),ev=BigInt(7),tv=BigInt(256),nv=BigInt(113);for(let t=0,e=Yt,n=1,i=0;t<24;t++){[n,i]=[i,(2*n+3*i)%5],Tc.push(2*(5*i+n)),Ic.push((t+1)*(t+2)/2%64);let s=Jm;for(let r=0;r<7;r++)e=(e<<Yt^(e>>ev)*nv)%tv,e&Zm&&(s^=Yt<<(Yt<<BigInt(r))-Yt);Ac.push(s)}const[iv,sv]=(0,vn.split)(Ac,!0),Ro=(t,e,n)=>n>32?(0,vn.rotlBH)(t,e,n):(0,vn.rotlSH)(t,e,n),Po=(t,e,n)=>n>32?(0,vn.rotlBL)(t,e,n):(0,vn.rotlSL)(t,e,n);function kc(t,e=24){const n=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let o=0;o<10;o++)n[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,l=(o+2)%10,c=n[l],u=n[l+1],d=Ro(c,u,1)^n[a],h=Po(c,u,1)^n[a+1];for(let f=0;f<50;f+=10)t[o+f]^=d,t[o+f+1]^=h}let s=t[2],r=t[3];for(let o=0;o<24;o++){const a=Ic[o],l=Ro(s,r,a),c=Po(s,r,a),u=Tc[o];s=t[u],r=t[u+1],t[u]=l,t[u+1]=c}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)n[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=iv[i],t[1]^=sv[i]}n.fill(0)}W.keccakP=kc;class An extends Le.Hash{constructor(e,n,i,s=!1,r=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=i,this.enableXOF=s,this.rounds=r,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,Ct.number)(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,Le.u32)(this.state)}keccak(){Le.isLE||(0,Le.byteSwap32)(this.state32),kc(this.state32,this.rounds),Le.isLE||(0,Le.byteSwap32)(this.state32),this.posOut=0,this.pos=0}update(e){(0,Ct.exists)(this);const{blockLen:n,state:i}=this;e=(0,Le.toBytes)(e);const s=e.length;for(let r=0;r<s;){const o=Math.min(n-this.pos,s-r);for(let a=0;a<o;a++)i[this.pos++]^=e[r++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:i,blockLen:s}=this;e[i]^=n,n&128&&i===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){(0,Ct.exists)(this,!1),(0,Ct.bytes)(e),this.finish();const n=this.state,{blockLen:i}=this;for(let s=0,r=e.length;s<r;){this.posOut>=i&&this.keccak();const o=Math.min(i-this.posOut,r-s);e.set(n.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return(0,Ct.number)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,Ct.output)(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:i,outputLen:s,rounds:r,enableXOF:o}=this;return e||(e=new An(n,i,s,o,r)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=r,e.suffix=i,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}}W.Keccak=An;const Je=(t,e,n)=>(0,Le.wrapConstructor)(()=>new An(e,t,n));W.sha3_224=Je(6,144,224/8);W.sha3_256=Je(6,136,256/8);W.sha3_384=Je(6,104,384/8);W.sha3_512=Je(6,72,512/8);W.keccak_224=Je(1,144,224/8);W.keccak_256=Je(1,136,256/8);W.keccak_384=Je(1,104,384/8);W.keccak_512=Je(1,72,512/8);const Nc=(t,e,n)=>(0,Le.wrapXOFConstructorWithOpts)((i={})=>new An(e,t,i.dkLen===void 0?n:i.dkLen,!0));W.shake128=Nc(31,168,128/8);W.shake256=Nc(31,136,256/8);const{sha3_512:rv}=W,Rc=24,nn=32,bs=(t=4,e=Math.random)=>{let n="";for(;n.length<t;)n=n+Math.floor(e()*36).toString(36);return n};function Pc(t){let e=8n,n=0n;for(const i of t.values()){const s=BigInt(i);n=(n<<e)+s}return n}const xc=(t="")=>Pc(rv(t)).toString(36).slice(1),xo=Array.from({length:26},(t,e)=>String.fromCharCode(e+97)),ov=t=>xo[Math.floor(t()*xo.length)],Oc=({globalObj:t=typeof Sr<"u"?Sr:typeof window<"u"?window:{},random:e=Math.random}={})=>{const n=Object.keys(t).toString(),i=n.length?n+bs(nn,e):bs(nn,e);return xc(i).substring(0,nn)},Dc=t=>()=>t++,av=476782367,Lc=({random:t=Math.random,counter:e=Dc(Math.floor(t()*av)),length:n=Rc,fingerprint:i=Oc({random:t})}={})=>function(){const r=ov(t),o=Date.now().toString(36),a=e().toString(36),l=bs(n,t),c=`${o+l+a+i}`;return`${r+xc(c).substring(1,n)}`},lv=Lc(),cv=(t,{minLength:e=2,maxLength:n=nn}={})=>{const i=t.length,s=/^[0-9a-z]+$/;try{if(typeof t=="string"&&i>=e&&i<=n&&s.test(t))return!0}finally{}return!1};Xe.getConstants=()=>({defaultLength:Rc,bigLength:nn});Xe.init=Lc;Xe.createId=lv;Xe.bufToBigInt=Pc;Xe.createCounter=Dc;Xe.createFingerprint=Oc;Xe.isCuid=cv;const{createId:uv,init:Hv,getConstants:Wv,isCuid:Uv}=Xe;var jv=uv;export{Av as A,Rv as B,dt as C,kv as D,Ls as E,En as F,Nv as G,Pv as H,Mv as I,hv as J,jv as K,Ms as L,_v as M,gv as N,fv as O,yv as P,vv as Q,Xl as R,Pf as S,Dv as T,xv as U,Ov as V,Nt as _,gh as a,Ev as b,Iv as c,$e as d,Tv as e,Bs as f,wv as g,fh as h,ma as i,ba as j,U as k,ga as l,Zi as m,Xi as n,Sv as o,Ch as p,Cv as q,ct as r,bv as s,Ji as t,xf as u,mv as v,$v as w,Lv as x,Bv as y,Fv as z};
