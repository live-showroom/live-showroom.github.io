import{k as Mc,r as E,l as Ee,m as Ie,p as Ts,q as Fc,s as Bc,v as Hc,x as ui,y as $c,z as xo,d as de,c as R,A as Oo,o as le,B as Wc,C as Uc,D as jc,E as ae,F as Vc,G as qc,H as zc,I as Gc,J as Kc,a as Yc,K as Do,L as Qc,M as Xc,N as Jc,O as be,P as Ne,Q as Zc,R as Lo,S as Ae,n as eu,T as Mo,U as tu,V as nu,W as Is,j as ke,h as iu,w as wt,e as Wt,g as Y,X as it,Y as Fo,Z as su,_ as ru,f as he,b as De,$ as ou,t as Ze,i as Ut,a0 as Sr}from"./ClArkDUg.js";function au(t,e={}){const n=e.head||Mc();if(n)return n.ssr?n.push(t,e):lu(n,t,e)}function lu(t,e,n={}){const i=E(!1),s=E({});Ee(()=>{s.value=i.value?{}:Hc(e)});const r=t.push(s.value,n);return Ie(s,a=>{r.patch(a)}),ui()&&(Ts(()=>{r.dispose()}),Fc(()=>{i.value=!0}),Bc(()=>{i.value=!1})),r}function pv(t,e={}){return au(t,{...e,transform:$c})}async function Bo(t,e=xo()){const{path:n,matched:i}=e.resolve(t);if(!i.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>Bo(t,e));e._routePreloaded.add(n);const r=i.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of r){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const cu=(...t)=>t.find(e=>e!==void 0);function uu(t){const e=t.componentName||"NuxtLink";function n(i,s){if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;if(typeof i=="string")return Tr(i,t.trailingSlash);const r="path"in i&&i.path!==void 0?i.path:s(i).path;return{...i,name:void 0,path:Tr(r,t.trailingSlash)}}return de({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(i,{slots:s}){const r=xo(),o=Yc(),a=R(()=>{const p=i.to||i.href||"";return n(p,r.resolve)}),l=R(()=>typeof a.value=="string"&&Oo(a.value,{acceptRelative:!0})),c=R(()=>i.target&&i.target!=="_self"),u=R(()=>i.external||c.value?!0:typeof a.value=="object"?!1:a.value===""||l.value),d=E(!1),h=E(null),f=p=>{var m;h.value=i.custom?(m=p==null?void 0:p.$el)==null?void 0:m.nextElementSibling:p==null?void 0:p.$el};if(i.prefetch!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!hu()){const m=Do();let v,I=null;le(()=>{const T=du();Wc(()=>{v=Uc(()=>{var O;(O=h==null?void 0:h.value)!=null&&O.tagName&&(I=T.observe(h.value,async()=>{I==null||I(),I=null;const j=typeof a.value=="string"?a.value:r.resolve(a.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",j).catch(()=>{}),!u.value&&Bo(a.value,r).catch(()=>{})]),d.value=!0}))})})}),Ts(()=>{v&&jc(v),I==null||I(),I=null})}return()=>{var I,T;if(!u.value){const O={ref:f,to:a.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(d.value&&(O.class=i.prefetchedClass||t.prefetchedClass),O.rel=i.rel||void 0),ae(Vc("RouterLink"),O,s.default)}const p=typeof a.value=="object"?((I=r.resolve(a.value))==null?void 0:I.href)??null:a.value&&!i.external&&!l.value?n(qc(o.app.baseURL,a.value),r.resolve):a.value||null,m=i.target||null,v=cu(i.noRel?"":i.rel,t.externalRelAttribute,l.value||c.value?"noopener noreferrer":"")||null;if(i.custom){if(!s.default)return null;const O=()=>Qc(p,{replace:i.replace,external:i.external});return s.default({href:p,navigate:O,get route(){if(!p)return;const j=zc(p);return{path:j.pathname,fullPath:j.pathname,get query(){return Gc(j.search)},hash:j.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:p}},rel:v,target:m,isExternal:u.value,isActive:!1,isExactActive:!1})}return ae("a",{ref:h,href:p,rel:v,target:m},(T=s.default)==null?void 0:T.call(s))}}})}const _v=uu(Kc);function Tr(t,e){const n=e==="append"?Xc:Jc;return Oo(t)&&!t.startsWith("http")?t:n(t,!0)}function du(){const t=Do();if(t._observer)return t._observer;let e=null;const n=new Map,i=(r,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),n.set(r,o),e.observe(r),()=>{n.delete(r),e.unobserve(r),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:i}}function hu(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}let fu=Symbol("headlessui.useid"),pu=0;function di(){return be(fu,()=>`${++pu}`)()}let Ho=Symbol("Context");var ge=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(ge||{});function _u(){return As()!==null}function As(){return be(Ho,null)}function gu(t){Ne(Ho,t)}function J(t){var e;if(t==null||t.value==null)return null;let n=(e=t.value.$el)!=null?e:t.value;return n instanceof Node?n:null}var mu=Object.defineProperty,vu=(t,e,n)=>e in t?mu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ir=(t,e,n)=>(vu(t,typeof e!="symbol"?e+"":e,n),n);let yu=class{constructor(){Ir(this,"current",this.detect()),Ir(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},wn=new yu;function Re(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let i=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Re),i}var Vn=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Vn||{}),Ue=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(Ue||{});function xe({visible:t=!0,features:e=0,ourProps:n,theirProps:i,...s}){var r;let o=Wo(i,n),a=Object.assign(s,{props:o});if(t||e&2&&o.static)return Ri(a);if(e&1){let l=(r=o.unmount)==null||r?0:1;return Re(l,{0(){return null},1(){return Ri({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Ri(a)}function Ri({props:t,attrs:e,slots:n,slot:i,name:s}){var r,o;let{as:a,...l}=Uo(t,["unmount","static"]),c=(r=n.default)==null?void 0:r.call(n,i),u={};if(i){let d=!1,h=[];for(let[f,p]of Object.entries(i))typeof p=="boolean"&&(d=!0),p===!0&&h.push(f);d&&(u["data-headlessui-state"]=h.join(" "))}if(a==="template"){if(c=$o(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...h]=c??[];if(!wu(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(m=>m.trim()).filter((m,v,I)=>I.indexOf(m)===v).sort((m,v)=>m.localeCompare(v)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let f=Wo((o=d.props)!=null?o:{},l,u),p=Zc(d,f,!0);for(let m in f)m.startsWith("on")&&(p.props||(p.props={}),p.props[m]=f[m]);return p}return Array.isArray(c)&&c.length===1?c[0]:c}return ae(a,Object.assign({},l,u),{default:()=>c})}function $o(t){return t.flatMap(e=>e.type===Lo?$o(e.children):[e])}function Wo(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let i of t)for(let s in i)s.startsWith("on")&&typeof i[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(i[s])):e[s]=i[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(i=>[i,void 0])));for(let i in n)Object.assign(e,{[i](s,...r){let o=n[i];for(let a of o){if(s instanceof Event&&s.defaultPrevented)return;a(s,...r)}}});return e}function Uo(t,e=[]){let n=Object.assign({},t);for(let i of e)i in n&&delete n[i];return n}function wu(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}function ks(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function En(){let t=[],e={addEventListener(n,i,s,r){return n.addEventListener(i,s,r),e.add(()=>n.removeEventListener(i,s,r))},requestAnimationFrame(...n){let i=requestAnimationFrame(...n);e.add(()=>cancelAnimationFrame(i))},nextFrame(...n){e.requestAnimationFrame(()=>{e.requestAnimationFrame(...n)})},setTimeout(...n){let i=setTimeout(...n);e.add(()=>clearTimeout(i))},microTask(...n){let i={current:!0};return ks(()=>{i.current&&n[0]()}),e.add(()=>{i.current=!1})},style(n,i,s){let r=n.style.getPropertyValue(i);return Object.assign(n.style,{[i]:s}),this.add(()=>{Object.assign(n.style,{[i]:r})})},group(n){let i=En();return n(i),this.add(()=>i.dispose())},add(n){return t.push(n),()=>{let i=t.indexOf(n);if(i>=0)for(let s of t.splice(i,1))s()}},dispose(){for(let n of t.splice(0))n()}};return e}function Eu(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function Pi(t,...e){t&&e.length>0&&t.classList.add(...e)}function Pn(t,...e){t&&e.length>0&&t.classList.remove(...e)}var zi=(t=>(t.Finished="finished",t.Cancelled="cancelled",t))(zi||{});function bu(t,e){let n=En();if(!t)return n.dispose;let{transitionDuration:i,transitionDelay:s}=getComputedStyle(t),[r,o]=[i,s].map(a=>{let[l=0]=a.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,u)=>u-c);return l});return r!==0?n.setTimeout(()=>e("finished"),r+o):e("finished"),n.add(()=>e("cancelled")),n.dispose}function Ar(t,e,n,i,s,r){let o=En(),a=r!==void 0?Eu(r):()=>{};return Pn(t,...s),Pi(t,...e,...n),o.nextFrame(()=>{Pn(t,...n),Pi(t,...i),o.add(bu(t,l=>(Pn(t,...i,...e),Pi(t,...s),a(l))))}),o.add(()=>Pn(t,...e,...n,...i,...s)),o.add(()=>a("cancelled")),o.dispose}function et(t=""){return t.split(/\s+/).filter(e=>e.length>1)}let Ns=Symbol("TransitionContext");var Cu=(t=>(t.Visible="visible",t.Hidden="hidden",t))(Cu||{});function Su(){return be(Ns,null)!==null}function Tu(){let t=be(Ns,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function Iu(){let t=be(Rs,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}let Rs=Symbol("NestingContext");function hi(t){return"children"in t?hi(t.children):t.value.filter(({state:e})=>e==="visible").length>0}function jo(t){let e=E([]),n=E(!1);le(()=>n.value=!0),Ae(()=>n.value=!1);function i(r,o=Ue.Hidden){let a=e.value.findIndex(({id:l})=>l===r);a!==-1&&(Re(o,{[Ue.Unmount](){e.value.splice(a,1)},[Ue.Hidden](){e.value[a].state="hidden"}}),!hi(e)&&n.value&&(t==null||t()))}function s(r){let o=e.value.find(({id:a})=>a===r);return o?o.state!=="visible"&&(o.state="visible"):e.value.push({id:r,state:"visible"}),()=>i(r,Ue.Unmount)}return{children:e,register:s,unregister:i}}let Vo=Vn.RenderStrategy,qo=de({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:i,expose:s}){let r=E(0);function o(){r.value|=ge.Opening,e("beforeEnter")}function a(){r.value&=~ge.Opening,e("afterEnter")}function l(){r.value|=ge.Closing,e("beforeLeave")}function c(){r.value&=~ge.Closing,e("afterLeave")}if(!Su()&&_u())return()=>ae(zo,{...t,onBeforeEnter:o,onAfterEnter:a,onBeforeLeave:l,onAfterLeave:c},i);let u=E(null),d=R(()=>t.unmount?Ue.Unmount:Ue.Hidden);s({el:u,$el:u});let{show:h,appear:f}=Tu(),{register:p,unregister:m}=Iu(),v=E(h.value?"visible":"hidden"),I={value:!0},T=di(),O={value:!1},j=jo(()=>{!O.value&&v.value!=="hidden"&&(v.value="hidden",m(T),c())});le(()=>{let y=p(T);Ae(y)}),Ee(()=>{if(d.value===Ue.Hidden&&T){if(h.value&&v.value!=="visible"){v.value="visible";return}Re(v.value,{hidden:()=>m(T),visible:()=>p(T)})}});let ce=et(t.enter),Z=et(t.enterFrom),P=et(t.enterTo),w=et(t.entered),G=et(t.leave),S=et(t.leaveFrom),V=et(t.leaveTo);le(()=>{Ee(()=>{if(v.value==="visible"){let y=J(u);if(y instanceof Comment&&y.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function _(y){let M=I.value&&!f.value,x=J(u);!x||!(x instanceof HTMLElement)||M||(O.value=!0,h.value&&o(),h.value||l(),y(h.value?Ar(x,ce,Z,P,w,F=>{O.value=!1,F===zi.Finished&&a()}):Ar(x,G,S,V,w,F=>{O.value=!1,F===zi.Finished&&(hi(j)||(v.value="hidden",m(T),c()))})))}return le(()=>{Ie([h],(y,M,x)=>{_(x),I.value=!1},{immediate:!0})}),Ne(Rs,j),gu(R(()=>Re(v.value,{visible:ge.Open,hidden:ge.Closed})|r.value)),()=>{let{appear:y,show:M,enter:x,enterFrom:F,enterTo:X,entered:Ht,leave:$t,leaveFrom:Nn,leaveTo:H,...K}=t,ve={ref:u},ye={...K,...f.value&&h.value&&wn.isServer?{class:eu([n.class,K.class,...ce,...Z])}:{}};return xe({theirProps:ye,ourProps:ve,slot:{},slots:i,attrs:n,features:Vo,visible:v.value==="visible",name:"TransitionChild"})}}}),Au=qo,zo=de({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:i}){let s=As(),r=R(()=>t.show===null&&s!==null?(s.value&ge.Open)===ge.Open:t.show);Ee(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=E(r.value?"visible":"hidden"),a=jo(()=>{o.value="hidden"}),l=E(!0),c={show:r,appear:R(()=>t.appear||!l.value)};return le(()=>{Ee(()=>{l.value=!1,r.value?o.value="visible":hi(a)||(o.value="hidden")})}),Ne(Rs,a),Ne(Ns,c),()=>{let u=Uo(t,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),d={unmount:t.unmount};return xe({ourProps:{...d,as:"template"},theirProps:{},slot:{},slots:{...i,default:()=>[ae(Au,{onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave"),...n,...d,...u},i.default)]},attrs:{},features:Vo,visible:o.value==="visible",name:"Transition"})}}});function Go(t,e,n,i){wn.isServer||Ee(s=>{t=t??window,t.addEventListener(e,n,i),s(()=>t.removeEventListener(e,n,i))})}function Ko(t,e,n){wn.isServer||Ee(i=>{window.addEventListener(t,e,n),i(()=>window.removeEventListener(t,e,n))})}var Qt=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(Qt||{});function ku(){let t=E(0);return Ko("keydown",e=>{e.key==="Tab"&&(t.value=e.shiftKey?1:0)}),t}var qn=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(qn||{});let Gi=de({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{var i;let{features:s,...r}=t,o={"aria-hidden":(s&2)===2?!0:(i=r["aria-hidden"])!=null?i:void 0,hidden:(s&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return xe({ourProps:o,theirProps:r,slot:{},attrs:n,slots:e,name:"Hidden"})}}});function Nu(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",e),e())}let st=[];Nu(()=>{function t(e){e.target instanceof HTMLElement&&e.target!==document.body&&st[0]!==e.target&&(st.unshift(e.target),st=st.filter(n=>n!=null&&n.isConnected),st.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function xt(t){if(wn.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=J(t);if(e)return e.ownerDocument}return document}let Ki=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var We=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(We||{}),Yo=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(Yo||{}),Ru=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(Ru||{});function Pu(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Ki)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Qo=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Qo||{});function xu(t,e=0){var n;return t===((n=xt(t))==null?void 0:n.body)?!1:Re(e,{0(){return t.matches(Ki)},1(){let i=t;for(;i!==null;){if(i.matches(Ki))return!0;i=i.parentElement}return!1}})}var Ou=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(Ou||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function lt(t){t==null||t.focus({preventScroll:!0})}let Du=["textarea","input"].join(",");function Lu(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,Du))!=null?n:!1}function Mu(t,e=n=>n){return t.slice().sort((n,i)=>{let s=e(n),r=e(i);if(s===null||r===null)return 0;let o=s.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Un(t,e,{sorted:n=!0,relativeTo:i=null,skipElements:s=[]}={}){var r;let o=(r=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?r:document,a=Array.isArray(t)?n?Mu(t):t:Pu(t);s.length>0&&a.length>1&&(a=a.filter(p=>!s.includes(p))),i=i??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(i))-1;if(e&4)return Math.max(0,a.indexOf(i))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,h=a.length,f;do{if(d>=h||d+h<=0)return 0;let p=c+d;if(e&16)p=(p+h)%h;else{if(p<0)return 3;if(p>=h)return 1}f=a[p],f==null||f.focus(u),d+=l}while(f!==o.activeElement);return e&6&&Lu(f)&&f.select(),2}function Xo(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let e=new Set;for(let n of t.value){let i=J(n);i instanceof HTMLElement&&e.add(i)}return e}var Jo=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(Jo||{});let jt=Object.assign(de({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:E(new Set)}},inheritAttrs:!1,setup(t,{attrs:e,slots:n,expose:i}){let s=E(null);i({el:s,$el:s});let r=R(()=>xt(s)),o=E(!1);le(()=>o.value=!0),Ae(()=>o.value=!1),Bu({ownerDocument:r},R(()=>o.value&&!!(t.features&16)));let a=Hu({ownerDocument:r,container:s,initialFocus:R(()=>t.initialFocus)},R(()=>o.value&&!!(t.features&2)));$u({ownerDocument:r,container:s,containers:t.containers,previousActiveElement:a},R(()=>o.value&&!!(t.features&8)));let l=ku();function c(f){let p=J(s);p&&(m=>m())(()=>{Re(l.value,{[Qt.Forwards]:()=>{Un(p,We.First,{skipElements:[f.relatedTarget]})},[Qt.Backwards]:()=>{Un(p,We.Last,{skipElements:[f.relatedTarget]})}})})}let u=E(!1);function d(f){f.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function h(f){if(!o.value)return;let p=Xo(t.containers);J(s)instanceof HTMLElement&&p.add(J(s));let m=f.relatedTarget;m instanceof HTMLElement&&m.dataset.headlessuiFocusGuard!=="true"&&(Zo(p,m)||(u.value?Un(J(s),Re(l.value,{[Qt.Forwards]:()=>We.Next,[Qt.Backwards]:()=>We.Previous})|We.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&lt(f.target)))}return()=>{let f={},p={ref:s,onKeydown:d,onFocusout:h},{features:m,initialFocus:v,containers:I,...T}=t;return ae(Lo,[!!(m&4)&&ae(Gi,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:qn.Focusable}),xe({ourProps:p,theirProps:{...e,...T},slot:f,attrs:e,slots:n,name:"FocusTrap"}),!!(m&4)&&ae(Gi,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:qn.Focusable})])}}}),{features:Jo});function Fu(t){let e=E(st.slice());return Ie([t],([n],[i])=>{i===!0&&n===!1?ks(()=>{e.value.splice(0)}):i===!1&&n===!0&&(e.value=st.slice())},{flush:"post"}),()=>{var n;return(n=e.value.find(i=>i!=null&&i.isConnected))!=null?n:null}}function Bu({ownerDocument:t},e){let n=Fu(e);le(()=>{Ee(()=>{var i,s;e.value||((i=t.value)==null?void 0:i.activeElement)===((s=t.value)==null?void 0:s.body)&&lt(n())},{flush:"post"})}),Ae(()=>{e.value&&lt(n())})}function Hu({ownerDocument:t,container:e,initialFocus:n},i){let s=E(null),r=E(!1);return le(()=>r.value=!0),Ae(()=>r.value=!1),le(()=>{Ie([e,n,i],(o,a)=>{if(o.every((c,u)=>(a==null?void 0:a[u])===c)||!i.value)return;let l=J(e);l&&ks(()=>{var c,u;if(!r.value)return;let d=J(n),h=(c=t.value)==null?void 0:c.activeElement;if(d){if(d===h){s.value=h;return}}else if(l.contains(h)){s.value=h;return}d?lt(d):Un(l,We.First|We.NoScroll)===Yo.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),s.value=(u=t.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),s}function $u({ownerDocument:t,container:e,containers:n,previousActiveElement:i},s){var r;Go((r=t.value)==null?void 0:r.defaultView,"focus",o=>{if(!s.value)return;let a=Xo(n);J(e)instanceof HTMLElement&&a.add(J(e));let l=i.value;if(!l)return;let c=o.target;c&&c instanceof HTMLElement?Zo(a,c)?(i.value=c,lt(c)):(o.preventDefault(),o.stopPropagation(),lt(l)):lt(i.value)},!0)}function Zo(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function Wu(t){let e=Mo(t.getSnapshot());return Ae(t.subscribe(()=>{e.value=t.getSnapshot()})),e}function Uu(t,e){let n=t(),i=new Set;return{getSnapshot(){return n},subscribe(s){return i.add(s),()=>i.delete(s)},dispatch(s,...r){let o=e[s].call(n,...r);o&&(n=o,i.forEach(a=>a()))}}}function ju(){let t;return{before({doc:e}){var n;let i=e.documentElement;t=((n=e.defaultView)!=null?n:window).innerWidth-i.clientWidth},after({doc:e,d:n}){let i=e.documentElement,s=i.clientWidth-i.offsetWidth,r=t-s;n.style(i,"paddingRight",`${r}px`)}}}function ea(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Vu(){return/Android/gi.test(window.navigator.userAgent)}function qu(){return ea()||Vu()}function zu(){return ea()?{before({doc:t,d:e,meta:n}){function i(s){return n.containers.flatMap(r=>r()).some(r=>r.contains(s))}e.microTask(()=>{var s;if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=En();a.style(t.documentElement,"scrollBehavior","auto"),e.add(()=>e.microTask(()=>a.dispose()))}let r=(s=window.scrollY)!=null?s:window.pageYOffset,o=null;e.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let l=a.target.closest("a");if(!l)return;let{hash:c}=new URL(l.href),u=t.querySelector(c);u&&!i(u)&&(o=u)}catch{}},!0),e.addEventListener(t,"touchstart",a=>{if(a.target instanceof HTMLElement)if(i(a.target)){let l=a.target;for(;l.parentElement&&i(l.parentElement);)l=l.parentElement;e.style(l,"overscrollBehavior","contain")}else e.style(a.target,"touchAction","none")}),e.addEventListener(t,"touchmove",a=>{if(a.target instanceof HTMLElement)if(i(a.target)){let l=a.target;for(;l.parentElement&&l.dataset.headlessuiPortal!==""&&!(l.scrollHeight>l.clientHeight||l.scrollWidth>l.clientWidth);)l=l.parentElement;l.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()},{passive:!1}),e.add(()=>{var a;let l=(a=window.scrollY)!=null?a:window.pageYOffset;r!==l&&window.scrollTo(0,r),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function Gu(){return{before({doc:t,d:e}){e.style(t.documentElement,"overflow","hidden")}}}function Ku(t){let e={};for(let n of t)Object.assign(e,n(e));return e}let rt=Uu(()=>new Map,{PUSH(t,e){var n;let i=(n=this.get(t))!=null?n:{doc:t,count:0,d:En(),meta:new Set};return i.count++,i.meta.add(e),this.set(t,i),this},POP(t,e){let n=this.get(t);return n&&(n.count--,n.meta.delete(e)),this},SCROLL_PREVENT({doc:t,d:e,meta:n}){let i={doc:t,d:e,meta:Ku(n)},s=[zu(),ju(),Gu()];s.forEach(({before:r})=>r==null?void 0:r(i)),s.forEach(({after:r})=>r==null?void 0:r(i))},SCROLL_ALLOW({d:t}){t.dispose()},TEARDOWN({doc:t}){this.delete(t)}});rt.subscribe(()=>{let t=rt.getSnapshot(),e=new Map;for(let[n]of t)e.set(n,n.documentElement.style.overflow);for(let n of t.values()){let i=e.get(n.doc)==="hidden",s=n.count!==0;(s&&!i||!s&&i)&&rt.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&rt.dispatch("TEARDOWN",n)}});function Yu(t,e,n){let i=Wu(rt),s=R(()=>{let r=t.value?i.value.get(t.value):void 0;return r?r.count>0:!1});return Ie([t,e],([r,o],[a],l)=>{if(!r||!o)return;rt.dispatch("PUSH",r,n);let c=!1;l(()=>{c||(rt.dispatch("POP",a??r,n),c=!0)})},{immediate:!0}),s}let xi=new Map,Vt=new Map;function kr(t,e=E(!0)){Ee(n=>{var i;if(!e.value)return;let s=J(t);if(!s)return;n(function(){var o;if(!s)return;let a=(o=Vt.get(s))!=null?o:1;if(a===1?Vt.delete(s):Vt.set(s,a-1),a!==1)return;let l=xi.get(s);l&&(l["aria-hidden"]===null?s.removeAttribute("aria-hidden"):s.setAttribute("aria-hidden",l["aria-hidden"]),s.inert=l.inert,xi.delete(s))});let r=(i=Vt.get(s))!=null?i:0;Vt.set(s,r+1),r===0&&(xi.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),s.setAttribute("aria-hidden","true"),s.inert=!0)})}function xn(t,e,n){wn.isServer||Ee(i=>{document.addEventListener(t,e,n),i(()=>document.removeEventListener(t,e,n))})}function Qu(t,e,n=R(()=>!0)){function i(r,o){if(!n.value||r.defaultPrevented)return;let a=o(r);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:J(c);if(u!=null&&u.contains(a)||r.composed&&r.composedPath().includes(u))return}return!xu(a,Qo.Loose)&&a.tabIndex!==-1&&r.preventDefault(),e(r,a)}let s=E(null);xn("pointerdown",r=>{var o,a;n.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),xn("mousedown",r=>{var o,a;n.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),xn("click",r=>{qu()||s.value&&(i(r,()=>s.value),s.value=null)},!0),xn("touchend",r=>i(r,()=>r.target instanceof HTMLElement?r.target:null),!0),Ko("blur",r=>i(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Xu({defaultContainers:t=[],portals:e,mainTreeNodeRef:n}={}){let i=E(null),s=xt(i);function r(){var o,a,l;let c=[];for(let u of t)u!==null&&(u instanceof HTMLElement?c.push(u):"value"in u&&u.value instanceof HTMLElement&&c.push(u.value));if(e!=null&&e.value)for(let u of e.value)c.push(u);for(let u of(o=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(J(i))||u.contains((l=(a=J(i))==null?void 0:a.getRootNode())==null?void 0:l.host)||c.some(d=>u.contains(d))||c.push(u));return c}return{resolveContainers:r,contains(o){return r().some(a=>a.contains(o))},mainTreeNodeRef:i,MainTreeNode(){return n!=null?null:ae(Gi,{features:qn.Hidden,ref:i})}}}let ta=Symbol("ForcePortalRootContext");function Ju(){return be(ta,!1)}let Nr=de({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){return Ne(ta,t.force),()=>{let{force:i,...s}=t;return xe({theirProps:s,ourProps:{},slot:{},slots:e,attrs:n,name:"ForcePortalRoot"})}}}),na=Symbol("StackContext");var Yi=(t=>(t[t.Add=0]="Add",t[t.Remove=1]="Remove",t))(Yi||{});function Zu(){return be(na,()=>{})}function ed({type:t,enabled:e,element:n,onUpdate:i}){let s=Zu();function r(...o){i==null||i(...o),s(...o)}le(()=>{Ie(e,(o,a)=>{o?r(0,t,n):a===!0&&r(1,t,n)},{immediate:!0,flush:"sync"})}),Ae(()=>{e.value&&r(1,t,n)}),Ne(na,r)}var ia=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(ia||{});let td=Symbol("DescriptionContext");function nd({slot:t=E({}),name:e="Description",props:n={}}={}){let i=E([]);function s(r){return i.value.push(r),()=>{let o=i.value.indexOf(r);o!==-1&&i.value.splice(o,1)}}return Ne(td,{register:s,slot:t,name:e,props:n}),R(()=>i.value.length>0?i.value.join(" "):void 0)}function id(t){let e=xt(t);if(!e){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let n=e.getElementById("headlessui-portal-root");if(n)return n;let i=e.createElement("div");return i.setAttribute("id","headlessui-portal-root"),e.body.appendChild(i)}let sd=de({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let i=E(null),s=R(()=>xt(i)),r=Ju(),o=be(sa,null),a=E(r===!0||o==null?id(i.value):o.resolveTarget()),l=E(!1);le(()=>{l.value=!0}),Ee(()=>{r||o!=null&&(a.value=o.resolveTarget())});let c=be(Qi,null),u=!1,d=ui();return Ie(i,()=>{if(u||!c)return;let h=J(i);h&&(Ae(c.register(h),d),u=!0)}),Ae(()=>{var h,f;let p=(h=s.value)==null?void 0:h.getElementById("headlessui-portal-root");p&&a.value===p&&a.value.children.length<=0&&((f=a.value.parentElement)==null||f.removeChild(a.value))}),()=>{if(!l.value||a.value===null)return null;let h={ref:i,"data-headlessui-portal":""};return ae(tu,{to:a.value},xe({ourProps:h,theirProps:t,slot:{},attrs:n,slots:e,name:"Portal"}))}}}),Qi=Symbol("PortalParentContext");function rd(){let t=be(Qi,null),e=E([]);function n(r){return e.value.push(r),t&&t.register(r),()=>i(r)}function i(r){let o=e.value.indexOf(r);o!==-1&&e.value.splice(o,1),t&&t.unregister(r)}let s={register:n,unregister:i,portals:e};return[e,de({name:"PortalWrapper",setup(r,{slots:o}){return Ne(Qi,s),()=>{var a;return(a=o.default)==null?void 0:a.call(o)}}})]}let sa=Symbol("PortalGroupContext"),od=de({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let i=nu({resolveTarget(){return t.target}});return Ne(sa,i),()=>{let{target:s,...r}=t;return xe({theirProps:r,ourProps:{},slot:{},attrs:e,slots:n,name:"PortalGroup"})}}});var ad=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ad||{});let Xi=Symbol("DialogContext");function Ps(t){let e=be(Xi,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ps),n}return e}let On="DC8F892D-2EBD-447C-A4C8-A03058436FF4",ld=de({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:On},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:t=>!0},setup(t,{emit:e,attrs:n,slots:i,expose:s}){var r,o;let a=(r=t.id)!=null?r:`headlessui-dialog-${di()}`,l=E(!1);le(()=>{l.value=!0});let c=!1,u=R(()=>t.role==="dialog"||t.role==="alertdialog"?t.role:(c||(c=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),d=E(0),h=As(),f=R(()=>t.open===On&&h!==null?(h.value&ge.Open)===ge.Open:t.open),p=E(null),m=R(()=>xt(p));if(s({el:p,$el:p}),!(t.open!==On||h!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof f.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value===On?void 0:t.open}`);let v=R(()=>l.value&&f.value?0:1),I=R(()=>v.value===0),T=R(()=>d.value>1),O=be(Xi,null)!==null,[j,ce]=rd(),{resolveContainers:Z,mainTreeNodeRef:P,MainTreeNode:w}=Xu({portals:j,defaultContainers:[R(()=>{var H;return(H=X.panelRef.value)!=null?H:p.value})]}),G=R(()=>T.value?"parent":"leaf"),S=R(()=>h!==null?(h.value&ge.Closing)===ge.Closing:!1),V=R(()=>O||S.value?!1:I.value),_=R(()=>{var H,K,ve;return(ve=Array.from((K=(H=m.value)==null?void 0:H.querySelectorAll("body > *"))!=null?K:[]).find(ye=>ye.id==="headlessui-portal-root"?!1:ye.contains(J(P))&&ye instanceof HTMLElement))!=null?ve:null});kr(_,V);let y=R(()=>T.value?!0:I.value),M=R(()=>{var H,K,ve;return(ve=Array.from((K=(H=m.value)==null?void 0:H.querySelectorAll("[data-headlessui-portal]"))!=null?K:[]).find(ye=>ye.contains(J(P))&&ye instanceof HTMLElement))!=null?ve:null});kr(M,y),ed({type:"Dialog",enabled:R(()=>v.value===0),element:p,onUpdate:(H,K)=>{if(K==="Dialog")return Re(H,{[Yi.Add]:()=>d.value+=1,[Yi.Remove]:()=>d.value-=1})}});let x=nd({name:"DialogDescription",slot:R(()=>({open:f.value}))}),F=E(null),X={titleId:F,panelRef:E(null),dialogState:v,setTitleId(H){F.value!==H&&(F.value=H)},close(){e("close",!1)}};Ne(Xi,X);let Ht=R(()=>!(!I.value||T.value));Qu(Z,(H,K)=>{H.preventDefault(),X.close(),Is(()=>K==null?void 0:K.focus())},Ht);let $t=R(()=>!(T.value||v.value!==0));Go((o=m.value)==null?void 0:o.defaultView,"keydown",H=>{$t.value&&(H.defaultPrevented||H.key===ia.Escape&&(H.preventDefault(),H.stopPropagation(),X.close()))});let Nn=R(()=>!(S.value||v.value!==0||O));return Yu(m,Nn,H=>{var K;return{containers:[...(K=H.containers)!=null?K:[],Z]}}),Ee(H=>{if(v.value!==0)return;let K=J(p);if(!K)return;let ve=new ResizeObserver(ye=>{for(let Ni of ye){let Rn=Ni.target.getBoundingClientRect();Rn.x===0&&Rn.y===0&&Rn.width===0&&Rn.height===0&&X.close()}});ve.observe(K),H(()=>ve.disconnect())}),()=>{let{open:H,initialFocus:K,...ve}=t,ye={...n,ref:p,id:a,role:u.value,"aria-modal":v.value===0?!0:void 0,"aria-labelledby":F.value,"aria-describedby":x.value},Ni={open:v.value===0};return ae(Nr,{force:!0},()=>[ae(sd,()=>ae(od,{target:p.value},()=>ae(Nr,{force:!1},()=>ae(jt,{initialFocus:K,containers:Z,features:I.value?Re(G.value,{parent:jt.features.RestoreFocus,leaf:jt.features.All&~jt.features.FocusLock}):jt.features.None},()=>ae(ce,{},()=>xe({ourProps:ye,theirProps:{...ve,...n},slot:Ni,attrs:n,slots:i,visible:v.value===0,features:Vn.RenderStrategy|Vn.Static,name:"Dialog"})))))),ae(w)])}}}),cd=de({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:i}){var s;let r=(s=t.id)!=null?s:`headlessui-dialog-panel-${di()}`,o=Ps("DialogPanel");i({el:o.panelRef,$el:o.panelRef});function a(l){l.stopPropagation()}return()=>{let{...l}=t,c={id:r,ref:o.panelRef,onClick:a};return xe({ourProps:c,theirProps:l,slot:{open:o.dialogState.value===0},attrs:e,slots:n,name:"DialogPanel"})}}}),ud=de({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n}){var i;let s=(i=t.id)!=null?i:`headlessui-dialog-title-${di()}`,r=Ps("DialogTitle");return le(()=>{r.setTitleId(s),Ae(()=>r.setTitleId(null))}),()=>{let{...o}=t;return xe({ourProps:{id:s},theirProps:o,slot:{open:r.dialogState.value===0},attrs:e,slots:n,name:"DialogTitle"})}}});const dd=Y("div",{class:"fixed inset-0 bg-black/50"},null,-1),hd={class:"fixed inset-0 overflow-y-auto"},fd={class:"flex min-h-full items-center justify-center p-4 text-center"},pd=Y("div",{class:"mt-2"},[Y("p",{class:"text-sm text-gray-500"},[it(" Gunakan fitur ini untuk mereset semua pemutaran yang ada. "),Y("b",null,"Semua pemutaran yang ada akan berhenti!")])],-1),_d={class:"mt-4 flex justify-end gap-3"},mv=de({__name:"ResetDialog",props:{isOpen:{type:Boolean}},emits:["close","reset"],setup(t){return(e,n)=>{const i=qo,s=ud,r=cd,o=ld,a=zo;return ke(),iu(a,{appear:"",show:e.isOpen,as:"template"},{default:wt(()=>[Wt(o,{as:"div",class:"relative z-10",onClose:n[2]||(n[2]=l=>e.$emit("close"))},{default:wt(()=>[Wt(i,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:wt(()=>[dd]),_:1}),Y("div",hd,[Y("div",fd,[Wt(i,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:wt(()=>[Wt(r,{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:wt(()=>[Wt(s,{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:wt(()=>[it(" Reset pemutaran ")]),_:1}),pd,Y("div",_d,[Y("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:n[0]||(n[0]=l=>e.$emit("reset"))}," Reset "),Y("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:n[1]||(n[1]=l=>e.$emit("close"))}," Batal ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}});function ra(t){return su()?(ru(t),!0):!1}function ct(t){return typeof t=="function"?t():he(t)}const xs=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const gd=Object.prototype.toString,md=t=>gd.call(t)==="[object Object]",oa=()=>{};function vd(t,e){function n(...i){return new Promise((s,r)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(s).catch(r)})}return n}const aa=t=>t();function yd(t=aa){const e=E(!0);function n(){e.value=!1}function i(){e.value=!0}const s=(...r)=>{e.value&&t(...r)};return{isActive:Fo(e),pause:n,resume:i,eventFilter:s}}function la(t){return ui()}function wd(t,e,n={}){const{eventFilter:i=aa,...s}=n;return Ie(t,vd(i,e),s)}function Ed(t,e,n={}){const{eventFilter:i,...s}=n,{eventFilter:r,pause:o,resume:a,isActive:l}=yd(i);return{stop:wd(t,e,{...s,eventFilter:r}),pause:o,resume:a,isActive:l}}function ca(t,e=!0,n){la()?le(t,n):e?t():Is(t)}function bd(t,e){la()&&Ae(t,e)}function Cd(t,e,n={}){const{immediate:i=!0}=n,s=E(!1);let r=null;function o(){r&&(clearTimeout(r),r=null)}function a(){s.value=!1,o()}function l(...c){o(),s.value=!0,r=setTimeout(()=>{s.value=!1,r=null,t(...c)},ct(e))}return i&&(s.value=!0,xs&&l()),ra(a),{isPending:Fo(s),start:l,stop:a}}function Sd(t){var e;const n=ct(t);return(e=n==null?void 0:n.$el)!=null?e:n}const sn=xs?window:void 0,Td=xs?window.document:void 0;function Ji(...t){let e,n,i,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,s]=t,e=sn):[e,n,i,s]=t,!e)return oa;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,d,h,f)=>(u.addEventListener(d,h,f),()=>u.removeEventListener(d,h,f)),l=Ie(()=>[Sd(e),ct(s)],([u,d])=>{if(o(),!u)return;const h=md(d)?{...d}:d;r.push(...n.flatMap(f=>i.map(p=>a(u,f,p,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return ra(c),c}function Id(){const t=E(!1),e=ui();return e&&le(()=>{t.value=!0},e),t}function Ad(t){const e=Id();return R(()=>(e.value,!!t()))}const Dn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ln="__vueuse_ssr_handlers__",kd=Nd();function Nd(){return Ln in Dn||(Dn[Ln]=Dn[Ln]||{}),Dn[Ln]}function Rd(t,e){return kd[t]||e}function Pd(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const xd={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Rr="vueuse-storage";function Od(t,e,n,i={}){var s;const{flush:r="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=sn,eventFilter:h,onError:f=S=>{console.error(S)},initOnMounted:p}=i,m=(u?Mo:E)(e);if(!n)try{n=Rd("getDefaultStorage",()=>{var S;return(S=sn)==null?void 0:S.localStorage})()}catch(S){f(S)}if(!n)return m;const v=ct(e),I=Pd(v),T=(s=i.serializer)!=null?s:xd[I],{pause:O,resume:j}=Ed(m,()=>Z(m.value),{flush:r,deep:o,eventFilter:h});d&&a&&ca(()=>{Ji(d,"storage",w),Ji(d,Rr,G),p&&w()}),p||w();function ce(S,V){d&&d.dispatchEvent(new CustomEvent(Rr,{detail:{key:t,oldValue:S,newValue:V,storageArea:n}}))}function Z(S){try{const V=n.getItem(t);if(S==null)ce(V,null),n.removeItem(t);else{const _=T.write(S);V!==_&&(n.setItem(t,_),ce(V,_))}}catch(V){f(V)}}function P(S){const V=S?S.newValue:n.getItem(t);if(V==null)return l&&v!=null&&n.setItem(t,T.write(v)),v;if(!S&&c){const _=T.read(V);return typeof c=="function"?c(_,v):I==="object"&&!Array.isArray(_)?{...v,..._}:_}else return typeof V!="string"?V:T.read(V)}function w(S){if(!(S&&S.storageArea!==n)){if(S&&S.key==null){m.value=v;return}if(!(S&&S.key!==t)){O();try{(S==null?void 0:S.newValue)!==T.write(m.value)&&(m.value=P(S))}catch(V){f(V)}finally{S?Is(j):j()}}}}function G(S){w(S.detail)}return m}function Dd(t,e,n={}){const{window:i=sn}=n;return Od(t,e,i==null?void 0:i.localStorage,n)}function Ld(t={}){const{window:e=sn}=t,n=Ad(()=>e&&"screen"in e&&"orientation"in e.screen),i=n.value?e.screen.orientation:{},s=E(i.type),r=E(i.angle||0);return n.value&&Ji(e,"orientationchange",()=>{s.value=i.type,r.value=i.angle}),{isSupported:n,orientation:s,angle:r,lockOrientation:l=>n.value&&typeof i.lock=="function"?i.lock(l):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{n.value&&typeof i.unlock=="function"&&i.unlock()}}}function Pr(t,e=oa,n={}){const{immediate:i=!0,manual:s=!1,type:r="text/javascript",async:o=!0,crossOrigin:a,referrerPolicy:l,noModule:c,defer:u,document:d=Td,attrs:h={}}=n,f=E(null);let p=null;const m=T=>new Promise((O,j)=>{const ce=w=>(f.value=w,O(w),w);if(!d){O(!1);return}let Z=!1,P=d.querySelector(`script[src="${ct(t)}"]`);P?P.hasAttribute("data-loaded")&&ce(P):(P=d.createElement("script"),P.type=r,P.async=o,P.src=ct(t),u&&(P.defer=u),a&&(P.crossOrigin=a),c&&(P.noModule=c),l&&(P.referrerPolicy=l),Object.entries(h).forEach(([w,G])=>P==null?void 0:P.setAttribute(w,G)),Z=!0),P.addEventListener("error",w=>j(w)),P.addEventListener("abort",w=>j(w)),P.addEventListener("load",()=>{P.setAttribute("data-loaded","true"),e(P),ce(P)}),Z&&(P=d.head.appendChild(P)),T||ce(P)}),v=(T=!0)=>(p||(p=m(T)),p),I=()=>{if(!d)return;p=null,f.value&&(f.value=null);const T=d.querySelector(`script[src="${ct(t)}"]`);T&&d.head.removeChild(T)};return i&&!s&&ca(v),s||bd(I),{scriptTag:f,load:v,unload:I}}const Md=["poster"],vv=de({__name:"NewVideoPlayer",props:{sources:{},poster:{},landscape:{type:Boolean,default:!0},useShortcut:{type:Boolean,default:!0},useDefaultControl:{type:Boolean,default:!1},hideControl:{type:Boolean,default:!1},maxBufferSize:{},maxMaxBufferLength:{},saveState:{type:Boolean,default:!0},rotateFill:{default:"width"},videoFill:{default:"width"},compact:{type:Boolean,default:!1}},emits:["fullscreen"],setup(t,{emit:e}){const n=t,i=e;Ie(()=>n.sources,w=>{Z.value=null,c.value=w,l.value&&(l.value.quality=m()),P(u.value)});const s=E(!1),r=E(!1),{load:o}=Pr("https://cdn.jsdelivr.net/npm/hls.js@1.5.6",()=>{s.value=!0},{manual:!0}),{load:a}=Pr("https://cdn.plyr.io/3.7.8/plyr.polyfilled.js",()=>{r.value=!0},{manual:!0}),l=E(),c=E(n.sources),u=Dd("quality-id",2),d=E((c.value??[]).find(w=>u.value===w.id)??c.value[0]);Ie(d,w=>{u.value=w.id});const h=E();function f(){l.value&&(console.log("Destroy player"),l.value.destroy()),window.hls&&(window.hls.destroy(),window.hls=void 0)}const p=R(()=>c.value.some(w=>w.type==="hls"));function m(){return p.value?{default:u.value,options:c.value.map(w=>w.id),forced:!0,onChange:w=>P(w)}:{}}const{isSupported:v,lockOrientation:I,unlockOrientation:T}=Ld();function O(){if(!h.value)return;const w={speed:{selected:1,options:[1]},poster:n.poster,fullscreen:{enabled:!0,fallback:!0,iosNative:!0}};w.quality=m(),w.quality.default==null&&(w.quality.default=d.value.quality);const G={};for(const S of c.value)G[S.id]=S.label;w.i18n={qualityLabel:G},console.log(w),Z.value=u.value,l.value=new Plyr(h.value,w),l.value.on("enterfullscreen",()=>{i("fullscreen",!0),v.value&&I("landscape")}),l.value.on("exitfullscreen",()=>{i("fullscreen",!1),T()}),l.value.on("qualitychange",S=>{var V;u.value=(V=c.value.find(_=>_.quality===S.detail.quality))==null?void 0:V.id,console.log("quality ",u.value)}),p.value||(l.value.source={type:"video",title:"Video",sources:c.value.map(S=>({src:S.url,type:S.type,size:S.quality})),poster:n.poster}),j()}function j(){if(!h.value)return;window.hls&&window.hls.destroy(),h.value.removeAttribute("src");const w=d.value;if(p.value)if(Hls.isSupported()){const G=new Hls;G.loadSource(w.url),G.attachMedia(h.value),window.hls=G}else h.value.src=w.url;ce()}async function ce(w=0){if(console.log("Try to play"),!!l.value)try{await l.value.play()}catch(G){w<5?(console.log("RETRY"),setTimeout(()=>{ce(w+1)},100)):(console.log("Mute video"),l.value.muted=!0,l.value.play()),console.error(G)}}const Z=E();function P(w){if(console.log(Z.value,w),Z.value===w)return;Z.value=w;const G=c.value.find(S=>S.id===w);G&&(d.value=G,j())}return Ts(()=>{f()}),console.log(n.sources),le(async()=>{await o(),await a(),O()}),(w,G)=>(ke(),De("video",{id:"video",ref_key:"video",ref:h,poster:w.poster,class:"size-full",playsInline:""},null,8,Md))}});function Fd(){return ou}class Bd{static encrypt(e,n){let i="";for(let s=0;s<e.length;s++){const r=s%n.length,a=`00${(e[s].charCodeAt(0)^n[r].charCodeAt(0)).toString(16)}`.slice(-2);i+=a}return i}static decrypt(e,n){let i="";const s=[];let r;for(r=0;r<e.length;r=r+2)s.push(e[r]+e[r+1]);for(r=0;r<s.length;r++){const o=s[r],a=parseInt(o,16),l=r%n.length,c=a^n[l].charCodeAt(0);i+=String.fromCharCode(c)}return i}}const Hd="KimiNo";function yv(t){return Bd.decrypt(t,Hd+$d+Ud)}const $d="Kotoga";function Wd(t){return typeof t=="string"&&(t=parseInt(t)),t.toString().length>10}const Ud="SukiDakara";function wv(t){return["www.youtube.com/embed"].some(e=>t.includes(e))}const jd={key:0,class:"text-center flex flex-col gap-3 md:gap-1.5"},Vd={class:"text-xl"},qd={class:"flex gap-3 justify-center"},zd={key:0,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Gd={class:"leading-4 pt-0.5"},Kd=Y("span",{class:"text-sm"},"bulan",-1),Yd={key:1,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Qd={class:"leading-4 pt-0.5"},Xd=Y("span",{class:"text-sm"},"hari",-1),Jd={key:2,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Zd={class:"leading-4 pt-0.5"},eh=Y("span",{class:"text-sm"},"jam",-1),th={key:3,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},nh={class:"leading-4 pt-0.5"},ih=Y("span",{class:"text-sm"},"menit",-1),sh={key:4,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},rh={class:"leading-4 pt-0.5"},oh=Y("span",{class:"text-sm"},"detik",-1),ah={key:1,class:"text-2xl text-center pt-2"},Ev=de({__name:"CountDown",props:{time:{},title:{}},setup(t){const e=t,n=Fd(),i=n(Wd(e.time)?e.time:Number(e.time)*1e3),s=E(n.duration(i.diff(n()))),r=E(s.value.asSeconds()<=0),{start:o}=Cd(()=>{const a=n.duration(i.diff(n()));s.value.asSeconds()<=1?(r.value=!0,s.value=n.duration(0)):(s.value=a,o())},1e3,{immediate:!0});return(a,l)=>(ke(),De("div",null,[he(r)?(ke(),De("div",ah,Ze(a.title),1)):(ke(),De("div",jd,[Y("div",Vd,Ze(he(i).format("dddd, DD MMMM YYYY, hh:mm A")),1),Y("div",qd,[he(s).months()>0?(ke(),De("div",zd,[Y("span",Gd,Ze(he(s).months()),1),it(),Kd])):Ut("",!0),he(s).days()>0?(ke(),De("div",Yd,[Y("span",Qd,Ze(he(s).days()),1),it(),Xd])):Ut("",!0),he(s).hours()>0?(ke(),De("div",Jd,[Y("span",Zd,Ze(he(s).hours()),1),it(),eh])):Ut("",!0),he(s).minutes()>0?(ke(),De("div",th,[Y("span",nh,Ze(he(s).minutes()),1),it(),ih])):Ut("",!0),he(s).seconds()>0||he(s).asSeconds()>0?(ke(),De("div",sh,[Y("span",rh,Ze(he(s).seconds()),1),it(),oh])):Ut("",!0)])]))]))}});var xr={};/**
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
 */const g=function(t,e){if(!t)throw Ot(e)},Ot=function(t){return new Error("Firebase Database ("+ua.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const da=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lh=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},fi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(n[u],n[d],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(da(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new ch;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ch extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ha=function(t){const e=da(t);return fi.encodeByteArray(e,!0)},zn=function(t){return ha(t).replace(/\./g,"")},Zi=function(t){try{return fi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uh(t){return fa(void 0,t)}function fa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dh(n)||(t[n]=fa(t[n],e[n]));return t}function dh(t){return t!=="__proto__"}/**
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
 */const hh=()=>pa().__FIREBASE_DEFAULTS__,fh=()=>{if(typeof process>"u"||typeof xr>"u")return;const t=xr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ph=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zi(t[1]);return e&&JSON.parse(e)},Os=()=>{try{return hh()||fh()||ph()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_h=t=>{var e,n;return(n=(e=Os())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gh=t=>{const e=_h(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},_a=()=>{var t;return(t=Os())===null||t===void 0?void 0:t.config},bv=t=>{var e;return(e=Os())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class me{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function mh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zn(JSON.stringify(n)),zn(JSON.stringify(o)),""].join(".")}/**
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
 */function ga(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ma(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ga())}function Cv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sv(){const t=ga();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function va(){return ua.NODE_ADMIN===!0}function Ds(){try{return typeof indexedDB=="object"}catch{return!1}}function yh(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const wh="FirebaseError";class bn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=wh,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Eh(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new bn(s,a,i)}}function Eh(t,e){return t.replace(bh,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const bh=/\{\$([^}]+)}/g;/**
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
 */function rn(t){return JSON.parse(t)}function ee(t){return JSON.stringify(t)}/**
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
 */const ya=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=rn(Zi(r[0])||""),n=rn(Zi(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Ch=function(t){const e=ya(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Sh=function(t){const e=ya(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Oe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function It(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function es(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gn(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ts(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Or(r)&&Or(o)){if(!ts(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Or(t){return t!==null&&typeof t=="object"}/**
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
 */function Th(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Tv(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Iv(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Ih{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Av(t,e){const n=new Ah(t,e);return n.subscribe.bind(n)}class Ah{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");kh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Oi),s.error===void 0&&(s.error=Oi),s.complete===void 0&&(s.complete=Oi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oi(){}function At(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Nh=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,g(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pi=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Rh=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
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
 */const Ph=1e3,xh=2,Oh=4*60*60*1e3,Dh=.5;function Lh(t,e=Ph,n=xh){const i=e*Math.pow(n,t),s=Math.round(Dh*i*(Math.random()-.5)*2);return Math.min(Oh,i+s)}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class ht{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tt="[DEFAULT]";/**
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
 */class Mh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new me;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bh(e))try{this.getOrInitializeService({instanceIdentifier:tt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tt){return this.instances.has(e)}getOptions(e=tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Fh(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=tt){return this.component?this.component.multipleInstances?e:tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fh(t){return t===tt?void 0:t}function Bh(t){return t.instantiationMode==="EAGER"}/**
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
 */class Hh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U||(U={}));const $h={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Wh=U.INFO,Uh={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},jh=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Uh[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ms{constructor(e){this.name=e,this._logLevel=Wh,this._logHandler=jh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$h[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const Vh=(t,e)=>e.some(n=>t instanceof n);let Dr,Lr;function qh(){return Dr||(Dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zh(){return Lr||(Lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wa=new WeakMap,ns=new WeakMap,Ea=new WeakMap,Di=new WeakMap,Fs=new WeakMap;function Gh(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(je(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wa.set(n,t)}).catch(()=>{}),Fs.set(e,t),e}function Kh(t){if(ns.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ns.set(t,e)}let is={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ns.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ea.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return je(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yh(t){is=t(is)}function Qh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Li(this),e,...n);return Ea.set(i,e.sort?e.sort():[e]),je(i)}:zh().includes(t)?function(...e){return t.apply(Li(this),e),je(wa.get(this))}:function(...e){return je(t.apply(Li(this),e))}}function Xh(t){return typeof t=="function"?Qh(t):(t instanceof IDBTransaction&&Kh(t),Vh(t,qh())?new Proxy(t,is):t)}function je(t){if(t instanceof IDBRequest)return Gh(t);if(Di.has(t))return Di.get(t);const e=Xh(t);return e!==t&&(Di.set(t,e),Fs.set(e,t)),e}const Li=t=>Fs.get(t);function Jh(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=je(o);return i&&o.addEventListener("upgradeneeded",l=>{i(je(o.result),l.oldVersion,l.newVersion,je(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Zh=["get","getKey","getAll","getAllKeys","count"],ef=["put","add","delete","clear"],Mi=new Map;function Mr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mi.get(e))return Mi.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ef.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Zh.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Mi.set(e,r),r}Yh(t=>({...t,get:(e,n,i)=>Mr(e,n)||t.get(e,n,i),has:(e,n)=>!!Mr(e,n)||t.has(e,n)}));/**
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
 */class tf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nf(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function nf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ss="@firebase/app",Fr="0.10.1";/**
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
 */const ft=new Ms("@firebase/app"),sf="@firebase/app-compat",rf="@firebase/analytics-compat",of="@firebase/analytics",af="@firebase/app-check-compat",lf="@firebase/app-check",cf="@firebase/auth",uf="@firebase/auth-compat",df="@firebase/database",hf="@firebase/database-compat",ff="@firebase/functions",pf="@firebase/functions-compat",_f="@firebase/installations",gf="@firebase/installations-compat",mf="@firebase/messaging",vf="@firebase/messaging-compat",yf="@firebase/performance",wf="@firebase/performance-compat",Ef="@firebase/remote-config",bf="@firebase/remote-config-compat",Cf="@firebase/storage",Sf="@firebase/storage-compat",Tf="@firebase/firestore",If="@firebase/firestore-compat",Af="firebase",kf="10.11.0";/**
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
 */const rs="[DEFAULT]",Nf={[ss]:"fire-core",[sf]:"fire-core-compat",[of]:"fire-analytics",[rf]:"fire-analytics-compat",[lf]:"fire-app-check",[af]:"fire-app-check-compat",[cf]:"fire-auth",[uf]:"fire-auth-compat",[df]:"fire-rtdb",[hf]:"fire-rtdb-compat",[ff]:"fire-fn",[pf]:"fire-fn-compat",[_f]:"fire-iid",[gf]:"fire-iid-compat",[mf]:"fire-fcm",[vf]:"fire-fcm-compat",[yf]:"fire-perf",[wf]:"fire-perf-compat",[Ef]:"fire-rc",[bf]:"fire-rc-compat",[Cf]:"fire-gcs",[Sf]:"fire-gcs-compat",[Tf]:"fire-fst",[If]:"fire-fst-compat","fire-js":"fire-js",[Af]:"fire-js-all"};/**
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
 */const Kn=new Map,Rf=new Map,os=new Map;function Br(t,e){try{t.container.addComponent(e)}catch(n){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kt(t){const e=t.name;if(os.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;os.set(e,t);for(const n of Kn.values())Br(n,t);for(const n of Rf.values())Br(n,t);return!0}function Bs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kv(t){return t.settings!==void 0}/**
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
 */const Pf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ve=new Ls("app","Firebase",Pf);/**
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
 */class xf{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
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
 */const Of=kf;function Df(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:rs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ve.create("bad-app-name",{appName:String(s)});if(n||(n=_a()),!n)throw Ve.create("no-options");const r=Kn.get(s);if(r){if(ts(n,r.options)&&ts(i,r.config))return r;throw Ve.create("duplicate-app",{appName:s})}const o=new Hh(s);for(const l of os.values())o.addComponent(l);const a=new xf(n,i,o);return Kn.set(s,a),a}function ba(t=rs){const e=Kn.get(t);if(!e&&t===rs&&_a())return Df();if(!e)throw Ve.create("no-app",{appName:t});return e}function ut(t,e,n){var i;let s=(i=Nf[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(a.join(" "));return}kt(new ht(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Lf="firebase-heartbeat-database",Mf=1,on="firebase-heartbeat-store";let Fi=null;function Ca(){return Fi||(Fi=Jh(Lf,Mf,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(on)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ve.create("idb-open",{originalErrorMessage:t.message})})),Fi}async function Ff(t){try{const n=(await Ca()).transaction(on),i=await n.objectStore(on).get(Sa(t));return await n.done,i}catch(e){if(e instanceof bn)ft.warn(e.message);else{const n=Ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(n.message)}}}async function Hr(t,e){try{const i=(await Ca()).transaction(on,"readwrite");await i.objectStore(on).put(e,Sa(t)),await i.done}catch(n){if(n instanceof bn)ft.warn(n.message);else{const i=Ve.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ft.warn(i.message)}}}function Sa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Bf=1024,Hf=30*24*60*60*1e3;class $f{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uf(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$r();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Hf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$r(),{heartbeatsToSend:i,unsentEntries:s}=Wf(this._heartbeatsCache.heartbeats),r=zn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function $r(){return new Date().toISOString().substring(0,10)}function Wf(t,e=Bf){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Wr(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Uf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ds()?yh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ff(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wr(t){return zn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jf(t){kt(new ht("platform-logger",e=>new tf(e),"PRIVATE")),kt(new ht("heartbeat",e=>new $f(e),"PRIVATE")),ut(ss,Fr,t),ut(ss,Fr,"esm2017"),ut("fire-js","")}jf("");var Vf="firebase",qf="10.11.0";/**
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
 */ut(Vf,qf,"app");var Ur={};const jr="@firebase/database",Vr="1.0.4";/**
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
 */let Ta="";function zf(t){Ta=t}/**
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
 */class Gf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Kf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Oe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ia=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Gf(e)}}catch{}return new Kf},ot=Ia("localStorage"),Yf=Ia("sessionStorage");/**
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
 */const Tt=new Ms("@firebase/database"),Qf=function(){let t=1;return function(){return t++}}(),Aa=function(t){const e=Nh(t),n=new Ih;n.update(e);const i=n.digest();return fi.encodeByteArray(i)},Cn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Cn.apply(null,i):typeof i=="object"?e+=ee(i):e+=i,e+=" "}return e};let Xt=null,qr=!0;const Xf=function(t,e){g(!e,"Can't turn on custom loggers persistently."),Tt.logLevel=U.VERBOSE,Xt=Tt.log.bind(Tt)},re=function(...t){if(qr===!0&&(qr=!1,Xt===null&&Yf.get("logging_enabled")===!0&&Xf()),Xt){const e=Cn.apply(null,t);Xt(e)}},Sn=function(t){return function(...e){re(t,...e)}},as=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cn(...t);Tt.error(e)},Be=function(...t){const e=`FIREBASE FATAL ERROR: ${Cn(...t)}`;throw Tt.error(e),new Error(e)},_e=function(...t){const e="FIREBASE WARNING: "+Cn(...t);Tt.warn(e)},Jf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_i=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Zf=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pt="[MIN_NAME]",Ge="[MAX_NAME]",vt=function(t,e){if(t===e)return 0;if(t===pt||e===Ge)return-1;if(e===pt||t===Ge)return 1;{const n=zr(t),i=zr(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},ep=function(t,e){return t===e?0:t<e?-1:1},qt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ee(e))},Hs=function(t){if(typeof t!="object"||t===null)return ee(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ee(e[i]),n+=":",n+=Hs(t[e[i]]);return n+="}",n},ka=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Na=function(t){g(!_i(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},tp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},np=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ip(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const sp=new RegExp("^-?(0*)\\d{1,10}$"),rp=-2147483648,op=2147483647,zr=function(t){if(sp.test(t)){const e=Number(t);if(e>=rp&&e<=op)return e}return null},Dt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw _e("Exception was thrown by user callback.",n),e},Math.floor(0))}},ap=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){_e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class cp{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_e(e)}}class jn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}jn.OWNER="owner";/**
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
 */const $s="5",Ra="v",Pa="s",xa="r",Oa="f",Da=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,La="ls",Ma="p",ls="ac",Fa="websocket",Ba="long_polling";/**
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
 */class Ha{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ot.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ot.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function up(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $a(t,e,n){g(typeof e=="string","typeof type must == string"),g(typeof n=="object","typeof params must == object");let i;if(e===Fa)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ba)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);up(t)&&(n.ns=t.namespace);const s=[];return oe(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class dp{constructor(){this.counters_={}}incrementCounter(e,n=1){Oe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return uh(this.counters_)}}/**
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
 */const Bi={},Hi={};function Ws(t){const e=t.toString();return Bi[e]||(Bi[e]=new dp),Bi[e]}function hp(t,e){const n=t.toString();return Hi[n]||(Hi[n]=e()),Hi[n]}/**
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
 */class fp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Dt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Gr="start",pp="close",_p="pLPCommand",gp="pRTLPCB",Wa="id",Ua="pw",ja="ser",mp="cb",vp="seg",yp="ts",wp="d",Ep="dframe",Va=1870,qa=30,bp=Va-qa,Cp=25e3,Sp=3e4;class Ct{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Sn(e),this.stats_=Ws(n),this.urlFn=l=>(this.appCheckToken&&(l[ls]=this.appCheckToken),$a(n,Ba,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new fp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sp)),Zf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Us((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gr)this.id=a,this.password=l;else if(o===pp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Gr]="t",i[ja]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[mp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ra]=$s,this.transportSessionId&&(i[Pa]=this.transportSessionId),this.lastSessionId&&(i[La]=this.lastSessionId),this.applicationId&&(i[Ma]=this.applicationId),this.appCheckToken&&(i[ls]=this.appCheckToken),typeof location<"u"&&location.hostname&&Da.test(location.hostname)&&(i[xa]=Oa);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ct.forceAllow_=!0}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){return Ct.forceAllow_?!0:!Ct.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tp()&&!np()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ha(n),s=ka(i,bp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Ep]="t",i[Wa]=e,i[Ua]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Us{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qf(),window[_p+this.uniqueCallbackIdentifier]=e,window[gp+this.uniqueCallbackIdentifier]=n,this.myIFrame=Us.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){re("frame writing exception"),a.stack&&re(a.stack),re(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||re("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wa]=this.myID,e[Ua]=this.myPW,e[ja]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qa+i.length<=Va;){const o=this.pendingSegs.shift();i=i+"&"+vp+s+"="+o.seg+"&"+yp+s+"="+o.ts+"&"+wp+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Cp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Tp=16384,Ip=45e3;let Yn=null;typeof MozWebSocket<"u"?Yn=MozWebSocket:typeof WebSocket<"u"&&(Yn=WebSocket);class Ce{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Sn(this.connId),this.stats_=Ws(n),this.connURL=Ce.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Ra]=$s,typeof location<"u"&&location.hostname&&Da.test(location.hostname)&&(o[xa]=Oa),n&&(o[Pa]=n),i&&(o[La]=i),s&&(o[ls]=s),r&&(o[Ma]=r),$a(e,Fa,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ot.set("previous_websocket_failure",!0);try{let i;va(),this.mySock=new Yn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ce.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Yn!==null&&!Ce.forceDisallow_}static previouslyFailed(){return ot.isInMemoryStorage||ot.get("previous_websocket_failure")===!0}markConnectionHealthy(){ot.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=rn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ka(n,Tp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ip))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ce.responsesRequiredToBeHealthy=2;Ce.healthyTimeout=3e4;/**
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
 */class an{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ct,Ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ce&&Ce.isAvailable();let i=n&&!Ce.previouslyFailed();if(e.webSocketOnly&&(n||_e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ce];else{const s=this.transports_=[];for(const r of an.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);an.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}an.globalTransportInitialized_=!1;/**
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
 */const Ap=6e4,kp=5e3,Np=10*1024,Rp=100*1024,$i="t",Kr="d",Pp="s",Yr="r",xp="e",Qr="o",Xr="a",Jr="n",Zr="p",Op="h";class Dp{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Sn("c:"+this.id+":"),this.transportManager_=new an(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Jt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Rp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Np?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($i in e){const n=e[$i];n===Xr?this.upgradeIfSecondaryHealthy_():n===Yr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qt("t",e),i=qt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qt("t",e),i=qt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qt($i,e);if(Kr in e){const i=e[Kr];if(n===Op){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Jr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Pp?this.onConnectionShutdown_(i):n===Yr?this.onReset_(i):n===xp?as("Server Error: "+i):n===Qr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):as("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$s!==i&&_e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Jt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ap))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ot.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class za{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */const eo=32,to=768;class L{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function D(){return new L("")}function A(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ke(t){return t.pieces_.length-t.pieceNum_}function B(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new L(t.pieces_,e)}function js(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Lp(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ln(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ka(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new L(e,0)}function z(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof L)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new L(n,0)}function k(t){return t.pieceNum_>=t.pieces_.length}function ue(t,e){const n=A(t),i=A(e);if(n===null)return e;if(n===i)return ue(B(t),B(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Mp(t,e){const n=ln(t,0),i=ln(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=vt(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function Vs(t,e){if(Ke(t)!==Ke(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function we(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ke(t)>Ke(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Fp{constructor(e,n){this.errorPrefix_=n,this.parts_=ln(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=pi(this.parts_[i]);Ya(this)}}function Bp(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=pi(e),Ya(t)}function Hp(t){const e=t.parts_.pop();t.byteLength_-=pi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ya(t){if(t.byteLength_>to)throw new Error(t.errorPrefix_+"has a key path longer than "+to+" bytes ("+t.byteLength_+").");if(t.parts_.length>eo)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+eo+") or object contains a cycle "+nt(t))}function nt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class qs extends Ga{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new qs}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zt=1e3,$p=60*5*1e3,no=30*1e3,Wp=1.3,Up=3e4,jp="server_kill",io=3;class Fe extends za{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fe.nextPersistentConnectionId_++,this.log_=Sn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zt,this.maxReconnectDelay_=$p,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!va())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(ee(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new me,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Fe.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Oe(e,"w")){const i=It(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();_e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Sh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=no)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ch(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ee(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):as("Unrecognized action received from server: "+ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Up&&(this.reconnectDelay_=zt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Wp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Fe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?re("getToken() completed but was canceled"):(re("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Dp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{_e(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(jp)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&_e(d),l())}}}interrupt(e){re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],es(this.interruptReasons_)&&(this.reconnectDelay_=zt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Hs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new L(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=io&&(this.reconnectDelay_=no,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=io&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ta.replace(/\./g,"-")]=1,ma()?e["framework.cordova"]=1:vh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qn.getInstance().currentlyOnline();return es(this.interruptReasons_)&&e}}Fe.nextPersistentConnectionId_=0;Fe.nextConnectionId_=0;/**
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
 */class N{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new N(e,n)}}/**
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
 */class gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new N(pt,e),s=new N(pt,n);return this.compare(i,s)!==0}minPost(){return N.MIN}}/**
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
 */let Mn;class Qa extends gi{static get __EMPTY_NODE(){return Mn}static set __EMPTY_NODE(e){Mn=e}compare(e,n){return vt(e.name,n.name)}isDefinedOn(e){throw Ot("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return N.MIN}maxPost(){return new N(Ge,Mn)}makePost(e,n){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new N(e,Mn)}toString(){return".key"}}const dt=new Qa;/**
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
 */class Fn{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ie{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??ie.RED,this.left=s??fe.EMPTY_NODE,this.right=r??fe.EMPTY_NODE}copy(e,n,i,s,r){return new ie(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return fe.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ie.RED=!0;ie.BLACK=!1;class Vp{copy(e,n,i,s,r){return this}insert(e,n,i){return new ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class fe{constructor(e,n=fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ie.BLACK,null,null))}remove(e){return new fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ie.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fn(this.root_,null,this.comparator_,!0,e)}}fe.EMPTY_NODE=new Vp;/**
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
 */function qp(t,e){return vt(t.name,e.name)}function zs(t,e){return vt(t,e)}/**
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
 */let cs;function zp(t){cs=t}const Xa=function(t){return typeof t=="number"?"number:"+Na(t):"string:"+t},Ja=function(t){if(t.isLeafNode()){const e=t.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Oe(e,".sv"),"Priority must be a string or number.")}else g(t===cs||t.isEmpty(),"priority of unexpected type.");g(t===cs||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let so;class ne{constructor(e,n=ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ja(this.priorityNode_)}static set __childrenNodeConstructor(e){so=e}static get __childrenNodeConstructor(){return so}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return k(e)?this:A(e)===".priority"?this.priorityNode_:ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=A(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(g(i!==".priority"||Ke(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xa(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Na(this.value_):e+=this.value_,this.lazyHash_=Aa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ne.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ne.VALUE_TYPE_ORDER.indexOf(n),r=ne.VALUE_TYPE_ORDER.indexOf(i);return g(s>=0,"Unknown leaf type: "+n),g(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Za,el;function Gp(t){Za=t}function Kp(t){el=t}class Yp extends gi{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?vt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return N.MIN}maxPost(){return new N(Ge,new ne("[PRIORITY-POST]",el))}makePost(e,n){const i=Za(e);return new N(n,new ne("[PRIORITY-POST]",i))}toString(){return".priority"}}const q=new Yp;/**
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
 */const Qp=Math.log(2);class Xp{constructor(e){const n=r=>parseInt(Math.log(r)/Qp,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xn=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new ie(h,d.node,ie.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),m=s(f+1,c);return d=t[f],h=n?n(d):d,new ie(h,d.node,ie.BLACK,p,m)}},r=function(l){let c=null,u=null,d=t.length;const h=function(p,m){const v=d-p,I=d;d-=p;const T=s(v+1,I),O=t[v],j=n?n(O):O;f(new ie(j,O.node,m,null,T))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));m?h(v,ie.BLACK):(h(v,ie.BLACK),h(v,ie.RED))}return u},o=new Xp(t.length),a=r(o);return new fe(i||e,a)};/**
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
 */let Wi;const Et={};class Me{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return g(Et&&q,"ChildrenNode.ts has not been loaded"),Wi=Wi||new Me({".priority":Et},{".priority":q}),Wi}get(e){const n=It(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof fe?n:null}hasIndex(e){return Oe(this.indexSet_,e.toString())}addIndex(e,n){g(e!==dt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(N.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Xn(i,e.getCompare()):a=Et;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Me(u,c)}addToIndexes(e,n){const i=Gn(this.indexes_,(s,r)=>{const o=It(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),s===Et)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(N.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Xn(a,o.getCompare())}else return Et;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new N(e.name,a))),l.insert(e,e.node)}});return new Me(i,this.indexSet_)}removeFromIndexes(e,n){const i=Gn(this.indexes_,s=>{if(s===Et)return s;{const r=n.get(e.name);return r?s.remove(new N(e.name,r)):s}});return new Me(i,this.indexSet_)}}/**
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
 */let Gt;class b{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ja(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gt||(Gt=new b(new fe(zs),null,Me.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gt}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Gt:n}}getChild(e){const n=A(e);return n===null?this:this.getImmediateChild(n).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(g(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new N(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Gt:this.priorityNode_;return new b(s,o,r)}}updateChild(e,n){const i=A(e);if(i===null)return n;{g(A(e)!==".priority"||Ke(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(B(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(q,(o,a)=>{n[o]=a.val(e),i++,r&&b.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xa(this.getPriority().val())+":"),this.forEachChild(q,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Aa(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new N(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new N(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new N(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Tn?-1:0}withIndex(e){if(e===dt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===dt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(q),s=n.getIterator(q);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===dt?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Jp extends b{constructor(){super(new fe(zs),b.EMPTY_NODE,Me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const Tn=new Jp;Object.defineProperties(N,{MIN:{value:new N(pt,b.EMPTY_NODE)},MAX:{value:new N(Ge,Tn)}});Qa.__EMPTY_NODE=b.EMPTY_NODE;ne.__childrenNodeConstructor=b;zp(Tn);Kp(Tn);/**
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
 */const Zp=!0;function Q(t,e=null){if(t===null)return b.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ne(n,Q(e))}if(!(t instanceof Array)&&Zp){const n=[];let i=!1;if(oe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Q(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new N(o,l)))}}),n.length===0)return b.EMPTY_NODE;const r=Xn(n,qp,o=>o.name,zs);if(i){const o=Xn(n,q.getCompare());return new b(r,Q(e),new Me({".priority":o},{".priority":q}))}else return new b(r,Q(e),Me.Default)}else{let n=b.EMPTY_NODE;return oe(t,(i,s)=>{if(Oe(t,i)&&i.substring(0,1)!=="."){const r=Q(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Q(e))}}Gp(Q);/**
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
 */class Gs extends gi{constructor(e){super(),this.indexPath_=e,g(!k(e)&&A(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?vt(e.name,n.name):r}makePost(e,n){const i=Q(e),s=b.EMPTY_NODE.updateChild(this.indexPath_,i);return new N(n,s)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,Tn);return new N(Ge,e)}toString(){return ln(this.indexPath_,0).join("/")}}/**
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
 */class e_ extends gi{compare(e,n){const i=e.node.compareTo(n.node);return i===0?vt(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return N.MIN}maxPost(){return N.MAX}makePost(e,n){const i=Q(e);return new N(n,i)}toString(){return".value"}}const tl=new e_;/**
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
 */function nl(t){return{type:"value",snapshotNode:t}}function Nt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function un(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function t_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ks{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(cn(n,a)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Nt(n,i)):o.trackChildChange(un(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(q,(s,r)=>{n.hasChild(s)||i.trackChildChange(cn(s,r))}),n.isLeafNode()||n.forEachChild(q,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(un(s,r,o))}else i.trackChildChange(Nt(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class dn{constructor(e){this.indexedFilter_=new Ks(e.getIndex()),this.index_=e.getIndex(),this.startPost_=dn.getStartPost_(e),this.endPost_=dn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new N(n,i))||(i=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=b.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(b.EMPTY_NODE);const r=this;return n.forEachChild(q,(o,a)=>{r.matches(new N(o,a))||(s=s.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class n_{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new dn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new N(n,i))||(i=b.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=b.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(b.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;g(a.numChildren()===this.limit_,"");const l=new N(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(un(n,i,d)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(cn(n,d));const m=a.updateImmediateChild(n,b.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Nt(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(cn(c.name,c.node)),r.trackChildChange(Nt(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,b.EMPTY_NODE)):e}}/**
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
 */class Ys{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pt}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ge}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new Ys;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function i_(t){return t.loadsAllData()?new Ks(t.getIndex()):t.hasLimit()?new n_(t):new dn(t)}function s_(t,e,n){const i=t.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,n!=null?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function r_(t,e,n){const i=t.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,n!==void 0?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function o_(t,e){const n=t.copy();return n.index_=e,n}function ro(t){const e={};if(t.isDefault())return e;let n;if(t.index_===q?n="$priority":t.index_===tl?n="$value":t.index_===dt?n="$key":(g(t.index_ instanceof Gs,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ee(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=ee(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+ee(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=ee(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function oo(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==q&&(e.i=t.index_.toString()),e}/**
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
 */class Jn extends za{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Sn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Jn.getListenId_(e,i),a={};this.listens_[o]=a;const l=ro(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),It(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=Jn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=ro(e._queryParams),i=e._path.toString(),s=new me;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Th(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rn(a.responseText)}catch{_e("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&_e("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class a_{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Zn(){return{value:null,children:new Map}}function Lt(t,e,n){if(k(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=A(e);t.children.has(i)||t.children.set(i,Zn());const s=t.children.get(i);e=B(e),Lt(s,e,n)}}function us(t,e){if(k(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(q,(i,s)=>{Lt(t,new L(i),s)}),us(t,e)}}else if(t.children.size>0){const n=A(e);return e=B(e),t.children.has(n)&&us(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function ds(t,e,n){t.value!==null?n(e,t.value):l_(t,(i,s)=>{const r=new L(e.toString()+"/"+i);ds(s,r,n)})}function l_(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class c_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&oe(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const ao=10*1e3,u_=30*1e3,d_=5*60*1e3;class h_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new c_(e);const i=ao+(u_-ao)*Math.random();Jt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;oe(e,(s,r)=>{r>0&&Oe(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Jt(this.reportStats_.bind(this),Math.floor(Math.random()*2*d_))}}/**
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
 */class ei{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Se.ACK_USER_WRITE,this.source=Qs()}operationForChild(e){if(k(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new L(e));return new ei(D(),n,this.revert)}}else return g(A(this.path)===e,"operationForChild called for unrelated child."),new ei(B(this.path),this.affectedTree,this.revert)}}/**
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
 */class hn{constructor(e,n){this.source=e,this.path=n,this.type=Se.LISTEN_COMPLETE}operationForChild(e){return k(this.path)?new hn(this.source,D()):new hn(this.source,B(this.path))}}/**
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
 */class _t{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Se.OVERWRITE}operationForChild(e){return k(this.path)?new _t(this.source,D(),this.snap.getImmediateChild(e)):new _t(this.source,B(this.path),this.snap)}}/**
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
 */class Rt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Se.MERGE}operationForChild(e){if(k(this.path)){const n=this.children.subtree(new L(e));return n.isEmpty()?null:n.value?new _t(this.source,D(),n.value):new Rt(this.source,D(),n)}else return g(A(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rt(this.source,B(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ye{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(k(e))return this.isFullyInitialized()&&!this.filtered_;const n=A(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class f_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function p_(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(t_(o.childName,o.snapshotNode))}),Kt(t,s,"child_removed",e,i,n),Kt(t,s,"child_added",e,i,n),Kt(t,s,"child_moved",r,i,n),Kt(t,s,"child_changed",e,i,n),Kt(t,s,"value",e,i,n),s}function Kt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>g_(t,a,l)),o.forEach(a=>{const l=__(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function __(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function g_(t,e,n){if(e.childName==null||n.childName==null)throw Ot("Should only compare child_ events.");const i=new N(e.childName,e.snapshotNode),s=new N(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function mi(t,e){return{eventCache:t,serverCache:e}}function Zt(t,e,n,i){return mi(new Ye(e,n,i),t.serverCache)}function il(t,e,n,i){return mi(t.eventCache,new Ye(e,n,i))}function ti(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ui;const m_=()=>(Ui||(Ui=new fe(ep)),Ui);class ${constructor(e,n=m_()){this.value=e,this.children=n}static fromObject(e){let n=new $(null);return oe(e,(i,s)=>{n=n.set(new L(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:D(),value:this.value};if(k(e))return null;{const i=A(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(B(e),n);return r!=null?{path:z(new L(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(k(e))return this;{const n=A(e),i=this.children.get(n);return i!==null?i.subtree(B(e)):new $(null)}}set(e,n){if(k(e))return new $(n,this.children);{const i=A(e),r=(this.children.get(i)||new $(null)).set(B(e),n),o=this.children.insert(i,r);return new $(this.value,o)}}remove(e){if(k(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const n=A(e),i=this.children.get(n);if(i){const s=i.remove(B(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new $(null):new $(this.value,r)}else return this}}get(e){if(k(e))return this.value;{const n=A(e),i=this.children.get(n);return i?i.get(B(e)):null}}setTree(e,n){if(k(e))return n;{const i=A(e),r=(this.children.get(i)||new $(null)).setTree(B(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new $(this.value,o)}}fold(e){return this.fold_(D(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(z(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,D(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(k(e))return null;{const r=A(e),o=this.children.get(r);return o?o.findOnPath_(B(e),z(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,D(),n)}foreachOnPath_(e,n,i){if(k(e))return this;{this.value&&i(n,this.value);const s=A(e),r=this.children.get(s);return r?r.foreachOnPath_(B(e),z(n,s),i):new $(null)}}foreach(e){this.foreach_(D(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(z(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Te{constructor(e){this.writeTree_=e}static empty(){return new Te(new $(null))}}function en(t,e,n){if(k(e))return new Te(new $(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ue(s,e);return r=r.updateChild(o,n),new Te(t.writeTree_.set(s,r))}else{const s=new $(n),r=t.writeTree_.setTree(e,s);return new Te(r)}}}function hs(t,e,n){let i=t;return oe(n,(s,r)=>{i=en(i,z(e,s),r)}),i}function lo(t,e){if(k(e))return Te.empty();{const n=t.writeTree_.setTree(e,new $(null));return new Te(n)}}function fs(t,e){return yt(t,e)!=null}function yt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ue(n.path,e)):null}function co(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(q,(i,s)=>{e.push(new N(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new N(i,s.value))}),e}function qe(t,e){if(k(e))return t;{const n=yt(t,e);return n!=null?new Te(new $(n)):new Te(t.writeTree_.subtree(e))}}function ps(t){return t.writeTree_.isEmpty()}function Pt(t,e){return sl(D(),t.writeTree_,e)}function sl(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=sl(z(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(z(t,".priority"),i)),n}}/**
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
 */function vi(t,e){return ll(e,t)}function v_(t,e,n,i,s){g(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=en(t.visibleWrites,e,n)),t.lastWriteId=i}function y_(t,e,n,i){g(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=hs(t.visibleWrites,e,n),t.lastWriteId=i}function w_(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function E_(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);g(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&b_(a,i.path)?s=!1:we(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return C_(t),!0;if(i.snap)t.visibleWrites=lo(t.visibleWrites,i.path);else{const a=i.children;oe(a,l=>{t.visibleWrites=lo(t.visibleWrites,z(i.path,l))})}return!0}else return!1}function b_(t,e){if(t.snap)return we(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&we(z(t.path,n),e))return!0;return!1}function C_(t){t.visibleWrites=rl(t.allWrites,S_,D()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function S_(t){return t.visible}function rl(t,e,n){let i=Te.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)we(n,o)?(a=ue(n,o),i=en(i,a,r.snap)):we(o,n)&&(a=ue(o,n),i=en(i,D(),r.snap.getChild(a)));else if(r.children){if(we(n,o))a=ue(n,o),i=hs(i,a,r.children);else if(we(o,n))if(a=ue(o,n),k(a))i=hs(i,D(),r.children);else{const l=It(r.children,A(a));if(l){const c=l.getChild(B(a));i=en(i,D(),c)}}}else throw Ot("WriteRecord should have .snap or .children")}}return i}function ol(t,e,n,i,s){if(!i&&!s){const r=yt(t.visibleWrites,e);if(r!=null)return r;{const o=qe(t.visibleWrites,e);if(ps(o))return n;if(n==null&&!fs(o,D()))return null;{const a=n||b.EMPTY_NODE;return Pt(o,a)}}}else{const r=qe(t.visibleWrites,e);if(!s&&ps(r))return n;if(!s&&n==null&&!fs(r,D()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(we(c.path,e)||we(e,c.path))},a=rl(t.allWrites,o,e),l=n||b.EMPTY_NODE;return Pt(a,l)}}}function T_(t,e,n){let i=b.EMPTY_NODE;const s=yt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(q,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=qe(t.visibleWrites,e);return n.forEachChild(q,(o,a)=>{const l=Pt(qe(r,new L(o)),a);i=i.updateImmediateChild(o,l)}),co(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=qe(t.visibleWrites,e);return co(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function I_(t,e,n,i,s){g(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=z(e,n);if(fs(t.visibleWrites,r))return null;{const o=qe(t.visibleWrites,r);return ps(o)?s.getChild(n):Pt(o,s.getChild(n))}}function A_(t,e,n,i){const s=z(e,n),r=yt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=qe(t.visibleWrites,s);return Pt(o,i.getNode().getImmediateChild(n))}else return null}function k_(t,e){return yt(t.visibleWrites,e)}function N_(t,e,n,i,s,r,o){let a;const l=qe(t.visibleWrites,e),c=yt(l,D());if(c!=null)a=c;else if(n!=null)a=Pt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function R_(){return{visibleWrites:Te.empty(),allWrites:[],lastWriteId:-1}}function ni(t,e,n,i){return ol(t.writeTree,t.treePath,e,n,i)}function Zs(t,e){return T_(t.writeTree,t.treePath,e)}function uo(t,e,n,i){return I_(t.writeTree,t.treePath,e,n,i)}function ii(t,e){return k_(t.writeTree,z(t.treePath,e))}function P_(t,e,n,i,s,r){return N_(t.writeTree,t.treePath,e,n,i,s,r)}function er(t,e,n){return A_(t.writeTree,t.treePath,e,n)}function al(t,e){return ll(z(t.treePath,e),t.writeTree)}function ll(t,e){return{treePath:t,writeTree:e}}/**
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
 */class x_{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;g(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),g(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,un(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,cn(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Nt(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,un(i,e.snapshotNode,s.oldSnap));else throw Ot("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class O_{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const cl=new O_;class tr{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ye(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return er(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gt(this.viewCache_),r=P_(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function D_(t){return{filter:t}}function L_(t,e){g(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function M_(t,e,n,i,s){const r=new x_;let o,a;if(n.type===Se.OVERWRITE){const c=n;c.source.fromUser?o=_s(t,e,c.path,c.snap,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!k(c.path),o=si(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Se.MERGE){const c=n;c.source.fromUser?o=B_(t,e,c.path,c.children,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=gs(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Se.ACK_USER_WRITE){const c=n;c.revert?o=W_(t,e,c.path,i,s,r):o=H_(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Se.LISTEN_COMPLETE)o=$_(t,e,n.path,i,r);else throw Ot("Unknown operation type: "+n.type);const l=r.getChanges();return F_(e,o,l),{viewCache:o,changes:l}}function F_(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ti(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(nl(ti(e)))}}function ul(t,e,n,i,s,r){const o=e.eventCache;if(ii(i,n)!=null)return e;{let a,l;if(k(n))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=gt(e),u=c instanceof b?c:b.EMPTY_NODE,d=Zs(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=ni(i,gt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=A(n);if(c===".priority"){g(Ke(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=uo(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=B(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=uo(i,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=er(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return Zt(e,a,o.isFullyInitialized()||k(n),t.filter.filtersNodes())}}function si(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(k(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=A(n);if(!l.isCompleteForPath(n)&&Ke(n)>1)return e;const p=B(n),v=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,p,cl,null)}const d=il(e,c,l.isFullyInitialized()||k(n),u.filtersNodes()),h=new tr(s,d,r);return ul(t,d,n,s,h,a)}function _s(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new tr(s,e,r);if(k(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Zt(e,c,!0,t.filter.filtersNodes());else{const d=A(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Zt(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=B(n),f=a.getNode().getImmediateChild(d);let p;if(k(h))p=i;else{const m=u.getCompleteChild(d);m!=null?js(h)===".priority"&&m.getChild(Ka(h)).isEmpty()?p=m:p=m.updateChild(h,i):p=b.EMPTY_NODE}if(f.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=Zt(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ho(t,e){return t.eventCache.isCompleteForChild(e)}function B_(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=z(n,l);ho(e,A(u))&&(a=_s(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=z(n,l);ho(e,A(u))||(a=_s(t,a,u,c,s,r,o))}),a}function fo(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function gs(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;k(n)?c=i:c=new $(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=fo(t,f,h);l=si(t,l,new L(d),p,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),m=fo(t,p,h);l=si(t,l,new L(d),m,s,r,o,a)}}),l}function H_(t,e,n,i,s,r,o){if(ii(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(k(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return si(t,e,n,l.getNode().getChild(n),s,r,a,o);if(k(n)){let c=new $(null);return l.getNode().forEachChild(dt,(u,d)=>{c=c.set(new L(u),d)}),gs(t,e,n,c,s,r,a,o)}else return e}else{let c=new $(null);return i.foreach((u,d)=>{const h=z(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),gs(t,e,n,c,s,r,a,o)}}function $_(t,e,n,i,s){const r=e.serverCache,o=il(e,r.getNode(),r.isFullyInitialized()||k(n),r.isFiltered());return ul(t,o,n,i,cl,s)}function W_(t,e,n,i,s,r){let o;if(ii(i,n)!=null)return e;{const a=new tr(i,e,s),l=e.eventCache.getNode();let c;if(k(n)||A(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ni(i,gt(e));else{const d=e.serverCache.getNode();g(d instanceof b,"serverChildren would be complete if leaf node"),u=Zs(i,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=A(n);let d=er(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,B(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,b.EMPTY_NODE,B(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ni(i,gt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ii(i,D())!=null,Zt(e,c,o,t.filter.filtersNodes())}}/**
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
 */class U_{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ks(i.getIndex()),r=i_(i);this.processor_=D_(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(b.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(b.EMPTY_NODE,a.getNode(),null),u=new Ye(l,o.isFullyInitialized(),s.filtersNodes()),d=new Ye(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=mi(d,u),this.eventGenerator_=new f_(this.query_)}get query(){return this.query_}}function j_(t){return t.viewCache_.serverCache.getNode()}function V_(t){return ti(t.viewCache_)}function q_(t,e){const n=gt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!k(e)&&!n.getImmediateChild(A(e)).isEmpty())?n.getChild(e):null}function po(t){return t.eventRegistrations_.length===0}function z_(t,e){t.eventRegistrations_.push(e)}function _o(t,e,n){const i=[];if(n){g(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function go(t,e,n,i){e.type===Se.MERGE&&e.source.queryId!==null&&(g(gt(t.viewCache_),"We should always have a full cache before handling merges"),g(ti(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=M_(t.processor_,s,e,n,i);return L_(t.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,dl(t,r.changes,r.viewCache.eventCache.getNode(),null)}function G_(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(q,(r,o)=>{i.push(Nt(r,o))}),n.isFullyInitialized()&&i.push(nl(n.getNode())),dl(t,i,n.getNode(),e)}function dl(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return p_(t.eventGenerator_,e,n,s)}/**
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
 */let ri;class hl{constructor(){this.views=new Map}}function K_(t){g(!ri,"__referenceConstructor has already been defined"),ri=t}function Y_(){return g(ri,"Reference.ts has not been loaded"),ri}function Q_(t){return t.views.size===0}function nr(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return g(r!=null,"SyncTree gave us an op for an invalid query."),go(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(go(o,e,n,i));return r}}function fl(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ni(n,s?i:null),l=!1;a?l=!0:i instanceof b?(a=Zs(n,i),l=!1):(a=b.EMPTY_NODE,l=!1);const c=mi(new Ye(a,l,!1),new Ye(i,s,!1));return new U_(e,c)}return o}function X_(t,e,n,i,s,r){const o=fl(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),z_(o,n),G_(o,n)}function J_(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Qe(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(_o(c,n,i)),po(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(_o(l,n,i)),po(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Qe(t)&&r.push(new(Y_())(e._repo,e._path)),{removed:r,events:o}}function pl(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ze(t,e){let n=null;for(const i of t.views.values())n=n||q_(i,e);return n}function _l(t,e){if(e._queryParams.loadsAllData())return yi(t);{const i=e._queryIdentifier;return t.views.get(i)}}function gl(t,e){return _l(t,e)!=null}function Qe(t){return yi(t)!=null}function yi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let oi;function Z_(t){g(!oi,"__referenceConstructor has already been defined"),oi=t}function eg(){return g(oi,"Reference.ts has not been loaded"),oi}let tg=1;class mo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=R_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ng(t,e,n,i,s){return v_(t.pendingWriteTree_,e,n,i,s),s?Mt(t,new _t(Qs(),e,n)):[]}function ig(t,e,n,i){y_(t.pendingWriteTree_,e,n,i);const s=$.fromObject(n);return Mt(t,new Rt(Qs(),e,s))}function at(t,e,n=!1){const i=w_(t.pendingWriteTree_,e);if(E_(t.pendingWriteTree_,e)){let r=new $(null);return i.snap!=null?r=r.set(D(),!0):oe(i.children,o=>{r=r.set(new L(o),!0)}),Mt(t,new ei(i.path,r,n))}else return[]}function In(t,e,n){return Mt(t,new _t(Xs(),e,n))}function sg(t,e,n){const i=$.fromObject(n);return Mt(t,new Rt(Xs(),e,i))}function rg(t,e){return Mt(t,new hn(Xs(),e))}function og(t,e,n){const i=ir(t,n);if(i){const s=sr(i),r=s.path,o=s.queryId,a=ue(r,e),l=new hn(Js(o),a);return rr(t,r,l)}else return[]}function ai(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||gl(o,e))){const l=J_(o,e,n,i);Q_(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,f)=>Qe(f));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=cg(h);for(let p=0;p<f.length;++p){const m=f[p],v=m.query,I=El(t,m);t.listenProvider_.startListening(tn(v),fn(t,v),I.hashFn,I.onComplete)}}}!d&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(tn(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(wi(h));t.listenProvider_.stopListening(tn(h),f)}))}ug(t,c)}return a}function ml(t,e,n,i){const s=ir(t,i);if(s!=null){const r=sr(s),o=r.path,a=r.queryId,l=ue(o,e),c=new _t(Js(a),l,n);return rr(t,o,c)}else return[]}function ag(t,e,n,i){const s=ir(t,i);if(s){const r=sr(s),o=r.path,a=r.queryId,l=ue(o,e),c=$.fromObject(n),u=new Rt(Js(a),l,c);return rr(t,o,u)}else return[]}function ms(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const p=ue(h,s);r=r||ze(f,p),o=o||Qe(f)});let a=t.syncPointTree_.get(s);a?(o=o||Qe(a),r=r||ze(a,D())):(a=new hl,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=b.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,p)=>{const m=ze(p,D());m&&(r=r.updateImmediateChild(f,m))}));const c=gl(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=wi(e);g(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=dg();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=vi(t.pendingWriteTree_,s);let d=X_(a,e,n,u,r,l);if(!c&&!o&&!i){const h=_l(a,e);d=d.concat(hg(t,e,h))}return d}function vl(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ue(o,e),c=ze(a,l);if(c)return c});return ol(s,e,r,n,!0)}function lg(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ue(c,n);i=i||ze(u,d)});let s=t.syncPointTree_.get(n);s?i=i||ze(s,D()):(s=new hl,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Ye(i,!0,!1):null,a=vi(t.pendingWriteTree_,e._path),l=fl(s,e,a,r?o.getNode():b.EMPTY_NODE,r);return V_(l)}function Mt(t,e){return yl(e,t.syncPointTree_,null,vi(t.pendingWriteTree_,D()))}function yl(t,e,n,i){if(k(t.path))return wl(t,e,n,i);{const s=e.get(D());s!=null&&(n=ze(s,D()));let r=[];const o=A(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=al(i,o);r=r.concat(yl(a,l,null,u))}return s&&(r=r.concat(nr(s,t,i,n))),r}}function wl(t,e,n,i){const s=e.get(D());s!=null&&(n=ze(s,D()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=al(i,o),u=t.operationForChild(o);u&&(r=r.concat(wl(u,a,null,c)))}),s&&(r=r.concat(nr(s,t,i,n))),r}function El(t,e){const n=e.query,i=fn(t,n);return{hashFn:()=>(j_(e)||b.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?og(t,n._path,i):rg(t,n._path);{const r=ip(s,n);return ai(t,n,null,r)}}}}function fn(t,e){const n=wi(e);return t.queryToTagMap.get(n)}function wi(t){return t._path.toString()+"$"+t._queryIdentifier}function ir(t,e){return t.tagToQueryMap.get(e)}function sr(t){const e=t.indexOf("$");return g(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new L(t.substr(0,e))}}function rr(t,e,n){const i=t.syncPointTree_.get(e);g(i,"Missing sync point for query tag that we're tracking");const s=vi(t.pendingWriteTree_,e);return nr(i,n,s,null)}function cg(t){return t.fold((e,n,i)=>{if(n&&Qe(n))return[yi(n)];{let s=[];return n&&(s=pl(n)),oe(i,(r,o)=>{s=s.concat(o)}),s}})}function tn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(eg())(t._repo,t._path):t}function ug(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=wi(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function dg(){return tg++}function hg(t,e,n){const i=e._path,s=fn(t,e),r=El(t,n),o=t.listenProvider_.startListening(tn(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)g(!Qe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!k(c)&&u&&Qe(u))return[yi(u).query];{let h=[];return u&&(h=h.concat(pl(u).map(f=>f.query))),oe(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(tn(u),fn(t,u))}}return o}/**
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
 */class or{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new or(n)}node(){return this.node_}}class ar{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=z(this.path_,e);return new ar(this.syncTree_,n)}node(){return vl(this.syncTree_,this.path_)}}const fg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},vo=function(t,e,n){if(!t||typeof t!="object")return t;if(g(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _g(t[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:g(!1,"Unexpected server value: "+t)}},_g=function(t,e,n){t.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&g(!1,"Unexpected increment value: "+i);const s=e.node();if(g(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},bl=function(t,e,n,i){return lr(e,new ar(n,t),i)},gg=function(t,e,n){return lr(t,new or(e),n)};function lr(t,e,n){const i=t.getPriority().val(),s=vo(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=vo(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ne(a,Q(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ne(s))),o.forEachChild(q,(a,l)=>{const c=lr(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class cr{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ur(t,e){let n=e instanceof L?e:new L(e),i=t,s=A(n);for(;s!==null;){const r=It(i.node.children,s)||{children:{},childCount:0};i=new cr(s,i,r),n=B(n),s=A(n)}return i}function Ft(t){return t.node.value}function Cl(t,e){t.node.value=e,vs(t)}function Sl(t){return t.node.childCount>0}function mg(t){return Ft(t)===void 0&&!Sl(t)}function Ei(t,e){oe(t.node.children,(n,i)=>{e(new cr(n,t,i))})}function Tl(t,e,n,i){n&&!i&&e(t),Ei(t,s=>{Tl(s,e,!0,i)}),n&&i&&e(t)}function vg(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function An(t){return new L(t.parent===null?t.name:An(t.parent)+"/"+t.name)}function vs(t){t.parent!==null&&yg(t.parent,t.name,t)}function yg(t,e,n){const i=mg(n),s=Oe(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,vs(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,vs(t))}/**
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
 */const wg=/[\[\].#$\/\u0000-\u001F\u007F]/,Eg=/[\[\].#$\u0000-\u001F\u007F]/,ji=10*1024*1024,dr=function(t){return typeof t=="string"&&t.length!==0&&!wg.test(t)},Il=function(t){return typeof t=="string"&&t.length!==0&&!Eg.test(t)},bg=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Il(t)},li=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!_i(t)||t&&typeof t=="object"&&Oe(t,".sv")},pn=function(t,e,n,i){i&&e===void 0||bi(At(t,"value"),e,n)},bi=function(t,e,n){const i=n instanceof L?new Fp(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+nt(i));if(typeof e=="function")throw new Error(t+"contains a function "+nt(i)+" with contents = "+e.toString());if(_i(e))throw new Error(t+"contains "+e.toString()+" "+nt(i));if(typeof e=="string"&&e.length>ji/3&&pi(e)>ji)throw new Error(t+"contains a string greater than "+ji+" utf8 bytes "+nt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(oe(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!dr(o)))throw new Error(t+" contains an invalid key ("+o+") "+nt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Bp(i,o),bi(t,a,i),Hp(i)}),s&&r)throw new Error(t+' contains ".value" child '+nt(i)+" in addition to actual children.")}},Cg=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=ln(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!dr(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Mp);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&we(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Al=function(t,e,n,i){const s=At(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];oe(e,(o,a)=>{const l=new L(o);if(bi(s,a,z(n,l)),js(l)===".priority"&&!li(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Cg(s,r)},Sg=function(t,e,n){if(_i(e))throw new Error(At(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!li(e))throw new Error(At(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Tg=function(t,e,n,i){},hr=function(t,e,n,i){if(!Il(n))throw new Error(At(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ig=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hr(t,e,n)},Bn=function(t,e){if(A(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Ag=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bg(n))throw new Error(At(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class kg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fr(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Vs(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function kl(t,e,n){fr(t,n),Nl(t,i=>Vs(i,e))}function Pe(t,e,n){fr(t,n),Nl(t,i=>we(i,e)||we(e,i))}function Nl(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Ng(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ng(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Xt&&re("event: "+n.toString()),Dt(i)}}}/**
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
 */const Rg="repo_interrupt",Pg=25;class xg{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zn(),this.transactionQueueTree_=new cr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Og(t,e,n){if(t.stats_=Ws(t.repoInfo_),t.forceRestClient_||ap())t.server_=new Jn(t.repoInfo_,(i,s,r,o)=>{yo(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wo(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ee(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Fe(t.repoInfo_,e,(i,s,r,o)=>{yo(t,i,s,r,o)},i=>{wo(t,i)},i=>{Lg(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=hp(t.repoInfo_,()=>new h_(t.stats_,t.server_)),t.infoData_=new a_,t.infoSyncTree_=new mo({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=In(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_r(t,"connected",!1),t.serverSyncTree_=new mo({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Pe(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Dg(t){const n=t.infoData_.getNode(new L(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pr(t){return fg({timestamp:Dg(t)})}function yo(t,e,n,i,s){t.dataUpdateCount++;const r=new L(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Gn(n,c=>Q(c));o=ag(t.serverSyncTree_,r,l,s)}else{const l=Q(n);o=ml(t.serverSyncTree_,r,l,s)}else if(i){const l=Gn(n,c=>Q(c));o=sg(t.serverSyncTree_,r,l)}else{const l=Q(n);o=In(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=_n(t,r)),Pe(t.eventQueue_,a,o)}function wo(t,e){_r(t,"connected",e),e===!1&&Bg(t)}function Lg(t,e){oe(e,(n,i)=>{_r(t,n,i)})}function _r(t,e,n){const i=new L("/.info/"+e),s=Q(n);t.infoData_.updateSnapshot(i,s);const r=In(t.infoSyncTree_,i,s);Pe(t.eventQueue_,i,r)}function Rl(t){return t.nextWriteId_++}function Mg(t,e,n){const i=lg(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=Q(s).withIndex(e._queryParams.getIndex());ms(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=In(t.serverSyncTree_,e._path,r);else{const a=fn(t.serverSyncTree_,e);o=ml(t.serverSyncTree_,e._path,r,a)}return Pe(t.eventQueue_,e._path,o),ai(t.serverSyncTree_,e,n,null,!0),r},s=>(Ci(t,"get for query "+ee(e)+" failed: "+s),Promise.reject(new Error(s))))}function Fg(t,e,n,i){Ci(t,"update",{path:e.toString(),value:n});let s=!0;const r=pr(t),o={};if(oe(n,(a,l)=>{s=!1,o[a]=bl(z(e,a),Q(l),t.serverSyncTree_,r)}),s)re("update() called with empty data.  Don't do anything."),mt(t,i,"ok",void 0);else{const a=Rl(t),l=ig(t.serverSyncTree_,e,o,a);fr(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||_e("update at "+e+" failed: "+c);const h=at(t.serverSyncTree_,a,!d),f=h.length>0?_n(t,e):e;Pe(t.eventQueue_,f,h),mt(t,i,c,u)}),oe(n,c=>{const u=Ml(t,z(e,c));_n(t,u)}),Pe(t.eventQueue_,e,[])}}function Bg(t){Ci(t,"onDisconnectEvents");const e=pr(t),n=Zn();ds(t.onDisconnect_,D(),(s,r)=>{const o=bl(s,r,t.serverSyncTree_,e);Lt(n,s,o)});let i=[];ds(n,D(),(s,r)=>{i=i.concat(In(t.serverSyncTree_,s,r));const o=Ml(t,s);_n(t,o)}),t.onDisconnect_=Zn(),Pe(t.eventQueue_,D(),i)}function Hg(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&us(t.onDisconnect_,e),mt(t,n,i,s)})}function Eo(t,e,n,i){const s=Q(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Lt(t.onDisconnect_,e,s),mt(t,i,r,o)})}function $g(t,e,n,i,s){const r=Q(n,i);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Lt(t.onDisconnect_,e,r),mt(t,s,o,a)})}function Wg(t,e,n,i){if(es(n)){re("onDisconnect().update() called with empty data.  Don't do anything."),mt(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,r)=>{s==="ok"&&oe(n,(o,a)=>{const l=Q(a);Lt(t.onDisconnect_,z(e,o),l)}),mt(t,i,s,r)})}function Ug(t,e,n){let i;A(e._path)===".info"?i=ms(t.infoSyncTree_,e,n):i=ms(t.serverSyncTree_,e,n),kl(t.eventQueue_,e._path,i)}function jg(t,e,n){let i;A(e._path)===".info"?i=ai(t.infoSyncTree_,e,n):i=ai(t.serverSyncTree_,e,n),kl(t.eventQueue_,e._path,i)}function Pl(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Rg)}function Ci(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),re(n,...e)}function mt(t,e,n,i){e&&Dt(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function xl(t,e,n){return vl(t.serverSyncTree_,e,n)||b.EMPTY_NODE}function gr(t,e=t.transactionQueueTree_){if(e||Si(t,e),Ft(e)){const n=Dl(t,e);g(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Vg(t,An(e),n)}else Sl(e)&&Ei(e,n=>{gr(t,n)})}function Vg(t,e,n){const i=n.map(c=>c.currentWriteId),s=xl(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ue(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ci(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(at(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Si(t,ur(t.transactionQueueTree_,e)),gr(t,t.transactionQueueTree_),Pe(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Dt(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{_e("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}_n(t,e)}},o)}function _n(t,e){const n=Ol(t,e),i=An(n),s=Dl(t,n);return qg(t,s,i),i}function qg(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ue(n,l.path);let u=!1,d;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(at(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Pg)u=!0,d="maxretry",s=s.concat(at(t.serverSyncTree_,l.currentWriteId,!0));else{const h=xl(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){bi("transaction failed: Data returned ",f,l.path);let p=Q(f);typeof f=="object"&&f!=null&&Oe(f,".priority")||(p=p.updatePriority(h.getPriority()));const v=l.currentWriteId,I=pr(t),T=gg(p,h,I);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=T,l.currentWriteId=Rl(t),o.splice(o.indexOf(v),1),s=s.concat(ng(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),s=s.concat(at(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",s=s.concat(at(t.serverSyncTree_,l.currentWriteId,!0))}Pe(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}Si(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Dt(i[a]);gr(t,t.transactionQueueTree_)}function Ol(t,e){let n,i=t.transactionQueueTree_;for(n=A(e);n!==null&&Ft(i)===void 0;)i=ur(i,n),e=B(e),n=A(e);return i}function Dl(t,e){const n=[];return Ll(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Ll(t,e,n){const i=Ft(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Ei(e,s=>{Ll(t,s,n)})}function Si(t,e){const n=Ft(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Cl(e,n.length>0?n:void 0)}Ei(e,i=>{Si(t,i)})}function Ml(t,e){const n=An(Ol(t,e)),i=ur(t.transactionQueueTree_,e);return vg(i,s=>{Vi(t,s)}),Vi(t,i),Tl(i,s=>{Vi(t,s)}),n}function Vi(t,e){const n=Ft(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(g(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(at(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cl(e,void 0):n.length=r+1,Pe(t.eventQueue_,An(e),s);for(let o=0;o<i.length;o++)Dt(i[o])}}/**
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
 */function zg(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Gg(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):_e(`Invalid query segment '${n}' in query '${t}'`)}return e}const bo=function(t,e){const n=Kg(t),i=n.namespace;n.domain==="firebase.com"&&Be(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Jf();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ha(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new L(n.pathString)}},Kg=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(s=zg(t.substring(u,d)));const h=Gg(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Yg{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ee(this.snapshot.exportVal())}}class Qg{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Xg{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new me;return Hg(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Bn("OnDisconnect.remove",this._path);const e=new me;return Eo(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Bn("OnDisconnect.set",this._path),pn("OnDisconnect.set",e,this._path,!1);const n=new me;return Eo(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Bn("OnDisconnect.setWithPriority",this._path),pn("OnDisconnect.setWithPriority",e,this._path,!1),Sg("OnDisconnect.setWithPriority",n);const i=new me;return $g(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){Bn("OnDisconnect.update",this._path),Al("OnDisconnect.update",e,this._path);const n=new me;return Wg(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Bt{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return k(this._path)?null:js(this._path)}get ref(){return new $e(this._repo,this._path)}get _queryIdentifier(){const e=oo(this._queryParams),n=Hs(e);return n==="{}"?"default":n}get _queryObject(){return oo(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof Bt))return!1;const n=this._repo===e._repo,i=Vs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lp(this._path)}}function Jg(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function mr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===dt){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==pt)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==Ge)throw new Error(i);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===q){if(e!=null&&!li(e)||n!=null&&!li(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(g(t.getIndex()instanceof Gs||t.getIndex()===tl,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Bl(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class $e extends Bt{constructor(e,n){super(e,n,new Ys,!1)}get parent(){const e=Ka(this._path);return e===null?null:new $e(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gn{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new L(e),i=ys(this.ref,e);return new gn(this._node.getChild(n),i,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new gn(s,ys(this.ref,i),q)))}hasChild(e){const n=new L(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Nv(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?ys(t._root,e):t._root}function ys(t,e){return t=He(t),A(t._path)===null?Ig("child","path",e):hr("child","path",e),new $e(t._repo,z(t._path,e))}function Rv(t){return t=He(t),new Xg(t._repo,t._path)}function Pv(t,e){Al("update",e,t._path);const n=new me;return Fg(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function xv(t){t=He(t);const e=new Fl(()=>{}),n=new Ti(e);return Mg(t._repo,t,n).then(i=>new gn(i,new $e(t._repo,t._path),t._queryParams.getIndex()))}class Ti{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Yg("value",this,new gn(e.snapshotNode,new $e(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qg(this,e,n):null}matches(e){return e instanceof Ti?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Zg(t,e,n,i,s){const r=new Fl(n,void 0),o=new Ti(r);return Ug(t._repo,t,o),()=>jg(t._repo,t,o)}function Ov(t,e,n,i){return Zg(t,"value",e)}class Ii{}class em extends Ii{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){pn("endAt",this._value,e._path,!0);const n=r_(e._queryParams,this._value,this._key);if(Bl(n),mr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Bt(e._repo,e._path,n,e._orderByCalled)}}class tm extends Ii{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){pn("startAt",this._value,e._path,!0);const n=s_(e._queryParams,this._value,this._key);if(Bl(n),mr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Bt(e._repo,e._path,n,e._orderByCalled)}}class nm extends Ii{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Jg(e,"orderByChild");const n=new L(this._path);if(k(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new Gs(n),s=o_(e._queryParams,i);return mr(s),new Bt(e._repo,e._path,s,!0)}}function Dv(t){return hr("orderByChild","path",t),new nm(t)}class im extends Ii{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(pn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new em(this._value,this._key)._apply(new tm(this._value,this._key)._apply(e))}}function Lv(t,e){return Tg(),new im(t,e)}function Mv(t,...e){let n=He(t);for(const i of e)n=i._apply(n);return n}K_($e);Z_($e);/**
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
 */const sm="FIREBASE_DATABASE_EMULATOR_HOST",ws={};let rm=!1;function om(t,e,n,i){t.repoInfo_=new Ha(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function am(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),re("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=bo(r,s),a=o.repoInfo,l;typeof process<"u"&&Ur&&(l=Ur[sm]),l?(r=`http://${l}?ns=${a.namespace}`,o=bo(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new cp(t.name,t.options,e);Ag("Invalid Firebase Database URL",o),k(o.path)||Be("Database URL must point to the root of a Firebase Database (not including a child path).");const u=cm(a,t,c,new lp(t.name,n));return new um(u,t)}function lm(t,e){const n=ws[e];(!n||n[t.key]!==t)&&Be(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Pl(t),delete n[t.key]}function cm(t,e,n,i){let s=ws[e.name];s||(s={},ws[e.name]=s);let r=s[t.toURLString()];return r&&Be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new xg(t,rm,n,i),s[t.toURLString()]=r,r}class um{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Og(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $e(this._repo,D())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Be("Cannot call "+e+" on a deleted database.")}}function Fv(t=ba(),e){const n=Bs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=gh("database");i&&dm(n,...i)}return n}function dm(t,e,n,i={}){t=He(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Be("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new jn(jn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:mh(i.mockUserToken,t.app.options.projectId);r=new jn(o)}om(s,e,n,r)}function Bv(t){t=He(t),t._checkNotDeleted("goOffline"),Pl(t._repo)}/**
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
 */function hm(t){zf(Of),kt(new ht("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return am(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),ut(jr,Vr,t),ut(jr,Vr,"esm2017")}/**
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
 */const fm={".sv":"timestamp"};function Hv(){return fm}function $v(t){return{".sv":{increment:t}}}Fe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hm();/**
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
 */const Es=new Map,Hl={activated:!1,tokenObservers:[]},pm={initialized:!1,enabled:!1};function te(t){return Es.get(t)||Object.assign({},Hl)}function _m(t,e){return Es.set(t,e),Es.get(t)}function Ai(){return pm}/**
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
 */const $l="https://content-firebaseappcheck.googleapis.com/v1",gm="exchangeRecaptchaEnterpriseToken",mm="exchangeDebugToken",Co={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},vm=24*60*60*1e3;/**
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
 */class ym{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new me,this.pending.promise.catch(n=>{}),await wm(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new me,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function wm(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const Em={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},pe=new Ls("appCheck","AppCheck",Em);/**
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
 */function So(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function vr(t){if(!te(t).activated)throw pe.create("use-before-activation",{appName:t.name})}function Wl(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),i=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-i*3600)/60),r=e-n*3600*24-i*3600-s*60;let o="";return n&&(o+=Hn(n)+"d:"),i&&(o+=Hn(i)+"h:"),o+=Hn(s)+"m:"+Hn(r)+"s",o}function Hn(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
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
 */async function yr({url:t,body:e},n){const i={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&(i["X-Firebase-Client"]=d)}const r={method:"POST",body:JSON.stringify(e),headers:i};let o;try{o=await fetch(t,r)}catch(d){throw pe.create("fetch-network-error",{originalErrorMessage:d==null?void 0:d.message})}if(o.status!==200)throw pe.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(d){throw pe.create("fetch-parse-error",{originalErrorMessage:d==null?void 0:d.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw pe.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(l[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+c,issuedAtTimeMillis:u}}function bm(t,e){const{projectId:n,appId:i,apiKey:s}=t.options;return{url:`${$l}/projects/${n}/apps/${i}:${gm}?key=${s}`,body:{recaptcha_enterprise_token:e}}}function Ul(t,e){const{projectId:n,appId:i,apiKey:s}=t.options;return{url:`${$l}/projects/${n}/apps/${i}:${mm}?key=${s}`,body:{debug_token:e}}}/**
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
 */const Cm="firebase-app-check-database",Sm=1,mn="firebase-app-check-store",jl="debug-token";let $n=null;function Vl(){return $n||($n=new Promise((t,e)=>{try{const n=indexedDB.open(Cm,Sm);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(pe.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(mn,{keyPath:"compositeKey"})}}}catch(n){e(pe.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),$n)}function Tm(t){return zl(Gl(t))}function Im(t,e){return ql(Gl(t),e)}function Am(t){return ql(jl,t)}function km(){return zl(jl)}async function ql(t,e){const i=(await Vl()).transaction(mn,"readwrite"),r=i.objectStore(mn).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(pe.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}async function zl(t){const n=(await Vl()).transaction(mn,"readonly"),s=n.objectStore(mn).get(t);return new Promise((r,o)=>{s.onsuccess=a=>{const l=a.target.result;r(l?l.value:void 0)},n.onerror=a=>{var l;o(pe.create("storage-get",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))}})}function Gl(t){return`${t.options.appId}-${t.name}`}/**
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
 */const vn=new Ms("@firebase/app-check");/**
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
 */async function Nm(t){if(Ds()){let e;try{e=await Tm(t)}catch(n){vn.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function qi(t,e){return Ds()?Im(t,e).catch(n=>{vn.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function Rm(){let t;try{t=await km()}catch{}if(t)return t;{const e=Rh();return Am(e).catch(n=>vn.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
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
 */function wr(){return Ai().enabled}async function Er(){const t=Ai();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Pm(){const t=pa(),e=Ai();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new me;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Rm())}/**
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
 */const xm={error:"UNKNOWN_ERROR"};function Om(t){return fi.encodeString(JSON.stringify(t),!1)}async function bs(t,e=!1){const n=t.app;vr(n);const i=te(n);let s=i.token,r;if(s&&!St(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(St(l)?s=l:await qi(n,void 0))}if(!e&&s&&St(s))return{token:s.token};let o=!1;if(wr()){i.exchangeTokenPromise||(i.exchangeTokenPromise=yr(Ul(n,await Er()),t.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),o=!0);const l=await i.exchangeTokenPromise;return await qi(n,l),i.token=l,{token:l.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await te(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?vn.warn(l.message):vn.error(l),r=l}let a;return s?r?St(s)?a={token:s.token,internalError:r}:a=Io(r):(a={token:s.token},i.token=s,await qi(n,s)):a=Io(r),o&&Ql(n,a),a}async function Dm(t){const e=t.app;vr(e);const{provider:n}=te(e);if(wr()){const i=await Er(),{token:s}=await yr(Ul(e,i),t.heartbeatServiceProvider);return{token:s}}else{const{token:i}=await n.getToken();return{token:i}}}function Kl(t,e,n,i){const{app:s}=t,r=te(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&St(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),To(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>To(t))}function Yl(t,e){const n=te(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function To(t){const{app:e}=t,n=te(e);let i=n.tokenRefresher;i||(i=Lm(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function Lm(t){const{app:e}=t;return new ym(async()=>{const n=te(e);let i;if(n.token?i=await bs(t,!0):i=await bs(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=te(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Co.RETRIAL_MIN_WAIT,Co.RETRIAL_MAX_WAIT)}function Ql(t,e){const n=te(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function St(t){return t.expireTimeMillis-Date.now()>0}function Io(t){return{token:Om(xm),error:t}}/**
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
 */class Mm{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=te(this.app);for(const n of e)Yl(this.app,n.next);return Promise.resolve()}}function Fm(t,e){return new Mm(t,e)}function Bm(t){return{getToken:e=>bs(t,e),getLimitedUseToken:()=>Dm(t),addTokenListener:e=>Kl(t,"INTERNAL",e),removeTokenListener:e=>Yl(t.app,e)}}const Hm="@firebase/app-check",$m="0.8.3",Wm="https://www.google.com/recaptcha/enterprise.js";function Um(t,e){const n=new me,i=te(t);i.reCAPTCHAState={initialized:n};const s=jm(t),r=So(!0);return r?Ao(t,e,r,s,n):zm(()=>{const o=So(!0);if(!o)throw new Error("no recaptcha");Ao(t,e,o,s,n)}),n.promise}function Ao(t,e,n,i,s){n.ready(()=>{qm(t,e,n,i),s.resolve(n)})}function jm(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Vm(t){vr(t);const n=await te(t).reCAPTCHAState.initialized.promise;return new Promise((i,s)=>{const r=te(t).reCAPTCHAState;n.ready(()=>{i(n.execute(r.widgetId,{action:"fire_app_check"}))})})}function qm(t,e,n,i){const s=n.render(i,{sitekey:e,size:"invisible",callback:()=>{te(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{te(t).reCAPTCHAState.succeeded=!1}}),r=te(t);r.reCAPTCHAState=Object.assign(Object.assign({},r.reCAPTCHAState),{widgetId:s})}function zm(t){const e=document.createElement("script");e.src=Wm,e.onload=t,document.head.appendChild(e)}class Xl{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,i;Km(this._throttleData);const s=await Vm(this._app).catch(o=>{throw pe.create("recaptcha-error")});if(!(!((e=te(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw pe.create("recaptcha-error");let r;try{r=await yr(bm(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=Gm(Number((i=o.customData)===null||i===void 0?void 0:i.httpStatus),this._throttleData),pe.create("throttled",{time:Wl(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=Bs(e,"heartbeat"),Um(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Xl?this._siteKey===e._siteKey:!1}}function Gm(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+vm,httpStatus:t};{const n=e?e.backoffCount:0,i=Lh(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+i,httpStatus:t}}}function Km(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw pe.create("throttled",{time:Wl(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
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
 */function Wv(t=ba(),e){t=He(t);const n=Bs(t,"app-check");if(Ai().initialized||Pm(),wr()&&Er().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(r.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&r.provider.isEqual(e.provider))return s;throw pe.create("already-initialized",{appName:t.name})}const i=n.initialize({options:e});return Ym(t,e.provider,e.isTokenAutoRefreshEnabled),te(t).isTokenAutoRefreshEnabled&&Kl(i,"INTERNAL",()=>{}),i}function Ym(t,e,n){const i=_m(t,Object.assign({},Hl));i.activated=!0,i.provider=e,i.cachedTokenPromise=Nm(t).then(s=>(s&&St(s)&&(i.token=s,Ql(t,{token:s.token})),s)),i.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,i.provider.initialize(t)}const Qm="app-check",ko="app-check-internal";function Xm(){kt(new ht(Qm,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Fm(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(ko).initialize()})),kt(new ht(ko,t=>{const e=t.getProvider("app-check").getImmediate();return Bm(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ut(Hm,$m)}Xm();var Xe={},W={},se={};Object.defineProperty(se,"__esModule",{value:!0});se.output=se.exists=se.hash=se.bytes=se.bool=se.number=se.isBytes=void 0;function ci(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`positive integer expected, not ${t}`)}se.number=ci;function Jl(t){if(typeof t!="boolean")throw new Error(`boolean expected, not ${t}`)}se.bool=Jl;function Zl(t){return t instanceof Uint8Array||t!=null&&typeof t=="object"&&t.constructor.name==="Uint8Array"}se.isBytes=Zl;function br(t,...e){if(!Zl(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)}se.bytes=br;function ec(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");ci(t.outputLen),ci(t.blockLen)}se.hash=ec;function tc(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}se.exists=tc;function nc(t,e){br(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}se.output=nc;const Jm={number:ci,bool:Jl,bytes:br,hash:ec,exists:tc,output:nc};se.default=Jm;var C={};Object.defineProperty(C,"__esModule",{value:!0});C.add5L=C.add5H=C.add4H=C.add4L=C.add3H=C.add3L=C.add=C.rotlBL=C.rotlBH=C.rotlSL=C.rotlSH=C.rotr32L=C.rotr32H=C.rotrBL=C.rotrBH=C.rotrSL=C.rotrSH=C.shrSL=C.shrSH=C.toBig=C.split=C.fromBig=void 0;const Wn=BigInt(2**32-1),Cs=BigInt(32);function Cr(t,e=!1){return e?{h:Number(t&Wn),l:Number(t>>Cs&Wn)}:{h:Number(t>>Cs&Wn)|0,l:Number(t&Wn)|0}}C.fromBig=Cr;function ic(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:r,l:o}=Cr(t[s],e);[n[s],i[s]]=[r,o]}return[n,i]}C.split=ic;const sc=(t,e)=>BigInt(t>>>0)<<Cs|BigInt(e>>>0);C.toBig=sc;const rc=(t,e,n)=>t>>>n;C.shrSH=rc;const oc=(t,e,n)=>t<<32-n|e>>>n;C.shrSL=oc;const ac=(t,e,n)=>t>>>n|e<<32-n;C.rotrSH=ac;const lc=(t,e,n)=>t<<32-n|e>>>n;C.rotrSL=lc;const cc=(t,e,n)=>t<<64-n|e>>>n-32;C.rotrBH=cc;const uc=(t,e,n)=>t>>>n-32|e<<64-n;C.rotrBL=uc;const dc=(t,e)=>e;C.rotr32H=dc;const hc=(t,e)=>t;C.rotr32L=hc;const fc=(t,e,n)=>t<<n|e>>>32-n;C.rotlSH=fc;const pc=(t,e,n)=>e<<n|t>>>32-n;C.rotlSL=pc;const _c=(t,e,n)=>e<<n-32|t>>>64-n;C.rotlBH=_c;const gc=(t,e,n)=>t<<n-32|e>>>64-n;C.rotlBL=gc;function mc(t,e,n,i){const s=(e>>>0)+(i>>>0);return{h:t+n+(s/2**32|0)|0,l:s|0}}C.add=mc;const vc=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0);C.add3L=vc;const yc=(t,e,n,i)=>e+n+i+(t/2**32|0)|0;C.add3H=yc;const wc=(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0);C.add4L=wc;const Ec=(t,e,n,i,s)=>e+n+i+s+(t/2**32|0)|0;C.add4H=Ec;const bc=(t,e,n,i,s)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(s>>>0);C.add5L=bc;const Cc=(t,e,n,i,s,r)=>e+n+i+s+r+(t/2**32|0)|0;C.add5H=Cc;const Zm={fromBig:Cr,split:ic,toBig:sc,shrSH:rc,shrSL:oc,rotrSH:ac,rotrSL:lc,rotrBH:cc,rotrBL:uc,rotr32H:dc,rotr32L:hc,rotlSH:fc,rotlSL:pc,rotlBH:_c,rotlBL:gc,add:mc,add3L:vc,add3H:yc,add4L:wc,add4H:Ec,add5H:Cc,add5L:bc};C.default=Zm;var Sc={},ki={};Object.defineProperty(ki,"__esModule",{value:!0});ki.crypto=void 0;ki.crypto=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;(function(t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(t,"__esModule",{value:!0}),t.randomBytes=t.wrapXOFConstructorWithOpts=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.byteSwap32=t.byteSwapIfBE=t.byteSwap=t.isLE=t.rotl=t.rotr=t.createView=t.u32=t.u8=t.isBytes=void 0;const e=ki,n=se;function i(_){return _ instanceof Uint8Array||_!=null&&typeof _=="object"&&_.constructor.name==="Uint8Array"}t.isBytes=i;const s=_=>new Uint8Array(_.buffer,_.byteOffset,_.byteLength);t.u8=s;const r=_=>new Uint32Array(_.buffer,_.byteOffset,Math.floor(_.byteLength/4));t.u32=r;const o=_=>new DataView(_.buffer,_.byteOffset,_.byteLength);t.createView=o;const a=(_,y)=>_<<32-y|_>>>y;t.rotr=a;const l=(_,y)=>_<<y|_>>>32-y>>>0;t.rotl=l,t.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;const c=_=>_<<24&4278190080|_<<8&16711680|_>>>8&65280|_>>>24&255;t.byteSwap=c,t.byteSwapIfBE=t.isLE?_=>_:_=>(0,t.byteSwap)(_);function u(_){for(let y=0;y<_.length;y++)_[y]=(0,t.byteSwap)(_[y])}t.byteSwap32=u;const d=Array.from({length:256},(_,y)=>y.toString(16).padStart(2,"0"));function h(_){(0,n.bytes)(_);let y="";for(let M=0;M<_.length;M++)y+=d[_[M]];return y}t.bytesToHex=h;const f={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function p(_){if(_>=f._0&&_<=f._9)return _-f._0;if(_>=f._A&&_<=f._F)return _-(f._A-10);if(_>=f._a&&_<=f._f)return _-(f._a-10)}function m(_){if(typeof _!="string")throw new Error("hex string expected, got "+typeof _);const y=_.length,M=y/2;if(y%2)throw new Error("padded hex string expected, got unpadded hex of length "+y);const x=new Uint8Array(M);for(let F=0,X=0;F<M;F++,X+=2){const Ht=p(_.charCodeAt(X)),$t=p(_.charCodeAt(X+1));if(Ht===void 0||$t===void 0){const Nn=_[X]+_[X+1];throw new Error('hex string expected, got non-hex character "'+Nn+'" at index '+X)}x[F]=Ht*16+$t}return x}t.hexToBytes=m;const v=async()=>{};t.nextTick=v;async function I(_,y,M){let x=Date.now();for(let F=0;F<_;F++){M(F);const X=Date.now()-x;X>=0&&X<y||(await(0,t.nextTick)(),x+=X)}}t.asyncLoop=I;function T(_){if(typeof _!="string")throw new Error(`utf8ToBytes expected string, got ${typeof _}`);return new Uint8Array(new TextEncoder().encode(_))}t.utf8ToBytes=T;function O(_){return typeof _=="string"&&(_=T(_)),(0,n.bytes)(_),_}t.toBytes=O;function j(..._){let y=0;for(let x=0;x<_.length;x++){const F=_[x];(0,n.bytes)(F),y+=F.length}const M=new Uint8Array(y);for(let x=0,F=0;x<_.length;x++){const X=_[x];M.set(X,F),F+=X.length}return M}t.concatBytes=j;class ce{clone(){return this._cloneInto()}}t.Hash=ce;const Z={}.toString;function P(_,y){if(y!==void 0&&Z.call(y)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(_,y)}t.checkOpts=P;function w(_){const y=x=>_().update(O(x)).digest(),M=_();return y.outputLen=M.outputLen,y.blockLen=M.blockLen,y.create=()=>_(),y}t.wrapConstructor=w;function G(_){const y=(x,F)=>_(F).update(O(x)).digest(),M=_({});return y.outputLen=M.outputLen,y.blockLen=M.blockLen,y.create=x=>_(x),y}t.wrapConstructorWithOpts=G;function S(_){const y=(x,F)=>_(F).update(O(x)).digest(),M=_({});return y.outputLen=M.outputLen,y.blockLen=M.blockLen,y.create=x=>_(x),y}t.wrapXOFConstructorWithOpts=S;function V(_=32){if(e.crypto&&typeof e.crypto.getRandomValues=="function")return e.crypto.getRandomValues(new Uint8Array(_));throw new Error("crypto.getRandomValues must be defined")}t.randomBytes=V})(Sc);Object.defineProperty(W,"__esModule",{value:!0});W.shake256=W.shake128=W.keccak_512=W.keccak_384=W.keccak_256=W.keccak_224=W.sha3_512=W.sha3_384=W.sha3_256=W.sha3_224=W.Keccak=W.keccakP=void 0;const bt=se,yn=C,Le=Sc,Tc=[],Ic=[],Ac=[],ev=BigInt(0),Yt=BigInt(1),tv=BigInt(2),nv=BigInt(7),iv=BigInt(256),sv=BigInt(113);for(let t=0,e=Yt,n=1,i=0;t<24;t++){[n,i]=[i,(2*n+3*i)%5],Tc.push(2*(5*i+n)),Ic.push((t+1)*(t+2)/2%64);let s=ev;for(let r=0;r<7;r++)e=(e<<Yt^(e>>nv)*sv)%iv,e&tv&&(s^=Yt<<(Yt<<BigInt(r))-Yt);Ac.push(s)}const[rv,ov]=(0,yn.split)(Ac,!0),No=(t,e,n)=>n>32?(0,yn.rotlBH)(t,e,n):(0,yn.rotlSH)(t,e,n),Ro=(t,e,n)=>n>32?(0,yn.rotlBL)(t,e,n):(0,yn.rotlSL)(t,e,n);function kc(t,e=24){const n=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let o=0;o<10;o++)n[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,l=(o+2)%10,c=n[l],u=n[l+1],d=No(c,u,1)^n[a],h=Ro(c,u,1)^n[a+1];for(let f=0;f<50;f+=10)t[o+f]^=d,t[o+f+1]^=h}let s=t[2],r=t[3];for(let o=0;o<24;o++){const a=Ic[o],l=No(s,r,a),c=Ro(s,r,a),u=Tc[o];s=t[u],r=t[u+1],t[u]=l,t[u+1]=c}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)n[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=rv[i],t[1]^=ov[i]}n.fill(0)}W.keccakP=kc;class kn extends Le.Hash{constructor(e,n,i,s=!1,r=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=i,this.enableXOF=s,this.rounds=r,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,bt.number)(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,Le.u32)(this.state)}keccak(){Le.isLE||(0,Le.byteSwap32)(this.state32),kc(this.state32,this.rounds),Le.isLE||(0,Le.byteSwap32)(this.state32),this.posOut=0,this.pos=0}update(e){(0,bt.exists)(this);const{blockLen:n,state:i}=this;e=(0,Le.toBytes)(e);const s=e.length;for(let r=0;r<s;){const o=Math.min(n-this.pos,s-r);for(let a=0;a<o;a++)i[this.pos++]^=e[r++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:i,blockLen:s}=this;e[i]^=n,n&128&&i===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){(0,bt.exists)(this,!1),(0,bt.bytes)(e),this.finish();const n=this.state,{blockLen:i}=this;for(let s=0,r=e.length;s<r;){this.posOut>=i&&this.keccak();const o=Math.min(i-this.posOut,r-s);e.set(n.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return(0,bt.number)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,bt.output)(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:i,outputLen:s,rounds:r,enableXOF:o}=this;return e||(e=new kn(n,i,s,o,r)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=r,e.suffix=i,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}}W.Keccak=kn;const Je=(t,e,n)=>(0,Le.wrapConstructor)(()=>new kn(e,t,n));W.sha3_224=Je(6,144,224/8);W.sha3_256=Je(6,136,256/8);W.sha3_384=Je(6,104,384/8);W.sha3_512=Je(6,72,512/8);W.keccak_224=Je(1,144,224/8);W.keccak_256=Je(1,136,256/8);W.keccak_384=Je(1,104,384/8);W.keccak_512=Je(1,72,512/8);const Nc=(t,e,n)=>(0,Le.wrapXOFConstructorWithOpts)((i={})=>new kn(e,t,i.dkLen===void 0?n:i.dkLen,!0));W.shake128=Nc(31,168,128/8);W.shake256=Nc(31,136,256/8);const{sha3_512:av}=W,Rc=24,nn=32,Ss=(t=4,e=Math.random)=>{let n="";for(;n.length<t;)n=n+Math.floor(e()*36).toString(36);return n};function Pc(t){let e=8n,n=0n;for(const i of t.values()){const s=BigInt(i);n=(n<<e)+s}return n}const xc=(t="")=>Pc(av(t)).toString(36).slice(1),Po=Array.from({length:26},(t,e)=>String.fromCharCode(e+97)),lv=t=>Po[Math.floor(t()*Po.length)],Oc=({globalObj:t=typeof Sr<"u"?Sr:typeof window<"u"?window:{},random:e=Math.random}={})=>{const n=Object.keys(t).toString(),i=n.length?n+Ss(nn,e):Ss(nn,e);return xc(i).substring(0,nn)},Dc=t=>()=>t++,cv=476782367,Lc=({random:t=Math.random,counter:e=Dc(Math.floor(t()*cv)),length:n=Rc,fingerprint:i=Oc({random:t})}={})=>function(){const r=lv(t),o=Date.now().toString(36),a=e().toString(36),l=Ss(n,t),c=`${o+l+a+i}`;return`${r+xc(c).substring(1,n)}`},uv=Lc(),dv=(t,{minLength:e=2,maxLength:n=nn}={})=>{const i=t.length,s=/^[0-9a-z]+$/;try{if(typeof t=="string"&&i>=e&&i<=n&&s.test(t))return!0}finally{}return!1};Xe.getConstants=()=>({defaultLength:Rc,bigLength:nn});Xe.init=Lc;Xe.createId=uv;Xe.bufToBigInt=Pc;Xe.createCounter=Dc;Xe.createFingerprint=Oc;Xe.isCuid=dv;const{createId:hv,init:Uv,getConstants:jv,isCuid:Vv}=Xe;var qv=hv;export{Nv as A,xv as B,ht as C,Rv as D,Ls as E,bn as F,Pv as G,Ov as H,Bv as I,pv as J,qv as K,Ms as L,mv as M,vv as N,_v as O,Ev as P,wv as Q,Xl as R,Of as S,Mv as T,Dv as U,Lv as V,kt as _,vh as a,Cv as b,kv as c,He as d,Av as e,Bs as f,bv as g,_h as h,ma as i,ba as j,U as k,ga as l,ts as m,Zi as n,Iv as o,Th as p,Tv as q,ut as r,Sv as s,es as t,Df as u,yv as v,Wv as w,Fv as x,$v as y,Hv as z};
