import Id from"./CvKRIzPQ.js";import{i as Cd,r as w,w as Ge,a as _e,o as Tr,b as Td,c as Sd,d as kd,g as Sr,e as Rd,u as ml,f as Ke,h as $,j as gl,k as ke,l as Pd,m as Ad,n as Nd,p as ve,q as Od,s as Dd,t as xd,v as Md,x as Ld,y as vl,z as kr,A as Fd,B as Ud,C as $d,_ as Wd,D as U,E as G,F as Hd,G as Bd,H as Jn,I as en,J as rs,K as Rr,L as yl,M as Vd,N as jd,O as Ni,P as E,Q as zd,R as D,S as Se,T as _i,U as pe,V as Z,W as me,X as qd,Y as Gd,Z as Kd,$ as wt,a0 as Ft,a1 as Yd,a2 as Qd,a3 as Ut,a4 as Jd,a5 as Xd}from"./BtM7V9zn.js";import"./CvPl5tTm.js";function Zd(n,e={}){const t=e.head||Cd();if(t)return t.ssr?t.push(n,e):eh(t,n,e)}function eh(n,e,t={}){const i=w(!1),s=w({});Ge(()=>{s.value=i.value?{}:kd(e)});const r=n.push(s.value,t);return _e(s,a=>{r.patch(a)}),Sr()&&(Tr(()=>{r.dispose()}),Td(()=>{i.value=!0}),Sd(()=>{i.value=!1})),r}function th(n,e={}){return Zd(n,{...e,transform:Rd})}async function wl(n,e=ml()){const{path:t,matched:i}=e.resolve(n);if(!i.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(t)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>wl(n,e));e._routePreloaded.add(t);const r=i.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of r){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const nh=(...n)=>n.find(e=>e!==void 0);function ih(n){const e=n.componentName||"NuxtLink";function t(i,s){if(!i||n.trailingSlash!=="append"&&n.trailingSlash!=="remove")return i;if(typeof i=="string")return Bo(i,n.trailingSlash);const r="path"in i&&i.path!==void 0?i.path:s(i).path;return{...i,name:void 0,path:Bo(r,n.trailingSlash)}}return Ke({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(i,{slots:s}){const r=ml(),o=vl(),a=$(()=>{const p=i.to||i.href||"";return t(p,r.resolve)}),l=$(()=>typeof a.value=="string"&&gl(a.value,{acceptRelative:!0})),c=$(()=>i.target&&i.target!=="_self"),u=$(()=>i.external||c.value?!0:typeof a.value=="object"?!1:a.value===""||l.value),d=w(!1),h=w(null),f=p=>{var _;h.value=i.custom?(_=p==null?void 0:p.$el)==null?void 0:_.nextElementSibling:p==null?void 0:p.$el};if(i.prefetch!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!oh()){const _=kr();let b,v=null;ke(()=>{const S=rh();Pd(()=>{b=Ad(()=>{var k;(k=h==null?void 0:h.value)!=null&&k.tagName&&(v=S.observe(h.value,async()=>{v==null||v(),v=null;const C=typeof a.value=="string"?a.value:r.resolve(a.value).fullPath;await Promise.all([_.hooks.callHook("link:prefetch",C).catch(()=>{}),!u.value&&wl(a.value,r).catch(()=>{})]),d.value=!0}))})})}),Tr(()=>{b&&Nd(b),v==null||v(),v=null})}return()=>{var v,S;if(!u.value){const k={ref:f,to:a.value,activeClass:i.activeClass||n.activeClass,exactActiveClass:i.exactActiveClass||n.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(d.value&&(k.class=i.prefetchedClass||n.prefetchedClass),k.rel=i.rel||void 0),ve(Od("RouterLink"),k,s.default)}const p=typeof a.value=="object"?((v=r.resolve(a.value))==null?void 0:v.href)??null:a.value&&!i.external&&!l.value?t(Dd(o.app.baseURL,a.value),r.resolve):a.value||null,_=i.target||null,b=nh(i.noRel?"":i.rel,n.externalRelAttribute,l.value||c.value?"noopener noreferrer":"")||null;if(i.custom){if(!s.default)return null;const k=()=>Fd(p,{replace:i.replace,external:i.external});return s.default({href:p,navigate:k,get route(){if(!p)return;const C=xd(p);return{path:C.pathname,fullPath:C.pathname,get query(){return Md(C.search)},hash:C.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:p}},rel:b,target:_,isExternal:u.value,isActive:!1,isExactActive:!1})}return ve("a",{ref:h,href:p,rel:b,target:_},(S=s.default)==null?void 0:S.call(s))}}})}const sh=ih(Ld);function Bo(n,e){const t=e==="append"?Ud:$d;return gl(n)&&!n.startsWith("http")?n:t(n,!0)}function rh(){const n=kr();if(n._observer)return n._observer;let e=null;const t=new Map,i=(r,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=t.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),t.set(r,o),e.observe(r),()=>{t.delete(r),e.unobserve(r),t.size===0&&(e.disconnect(),e=null)});return n._observer={observe:i}}function oh(){const n=navigator.connection;return!!(n&&(n.saveData||/2g/.test(n.effectiveType)))}const ah={},lh={class:"inline-block",role:"status"},ch=Hd('<svg class="size-full stroke-white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline" values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"></animate></circle><animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12" repeatCount="indefinite"></animateTransform></g></svg><span class="sr-only">Loading...</span>',2),uh=[ch];function dh(n,e){return U(),G("div",lh,uh)}const hh=Wd(ah,[["render",dh]]);function Ve(n,e,...t){if(n in e){let s=e[n];return typeof s=="function"?s(...t):s}let i=new Error(`Tried to handle "${n}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Ve),i}var Xs=(n=>(n[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n))(Xs||{}),fh=(n=>(n[n.Unmount=0]="Unmount",n[n.Hidden=1]="Hidden",n))(fh||{});function os({visible:n=!0,features:e=0,ourProps:t,theirProps:i,...s}){var r;let o=bl(i,t),a=Object.assign(s,{props:o});if(n||e&2&&o.static)return xs(a);if(e&1){let l=(r=o.unmount)==null||r?0:1;return Ve(l,{0(){return null},1(){return xs({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return xs(a)}function xs({props:n,attrs:e,slots:t,slot:i,name:s}){var r,o;let{as:a,...l}=ph(n,["unmount","static"]),c=(r=t.default)==null?void 0:r.call(t,i),u={};if(i){let d=!1,h=[];for(let[f,p]of Object.entries(i))typeof p=="boolean"&&(d=!0),p===!0&&h.push(f);d&&(u["data-headlessui-state"]=h.join(" "))}if(a==="template"){if(c=El(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...h]=c??[];if(!_h(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(_=>_.trim()).filter((_,b,v)=>v.indexOf(_)===b).sort((_,b)=>_.localeCompare(b)).map(_=>`  - ${_}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(_=>`  - ${_}`).join(`
`)].join(`
`));let f=bl((o=d.props)!=null?o:{},l,u),p=Bd(d,f,!0);for(let _ in f)_.startsWith("on")&&(p.props||(p.props={}),p.props[_]=f[_]);return p}return Array.isArray(c)&&c.length===1?c[0]:c}return ve(a,Object.assign({},l,u),{default:()=>c})}function El(n){return n.flatMap(e=>e.type===Jn?El(e.children):[e])}function bl(...n){if(n.length===0)return{};if(n.length===1)return n[0];let e={},t={};for(let i of n)for(let s in i)s.startsWith("on")&&typeof i[s]=="function"?(t[s]!=null||(t[s]=[]),t[s].push(i[s])):e[s]=i[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(t).map(i=>[i,void 0])));for(let i in t)Object.assign(e,{[i](s,...r){let o=t[i];for(let a of o){if(s instanceof Event&&s.defaultPrevented)return;a(s,...r)}}});return e}function ph(n,e=[]){let t=Object.assign({},n);for(let i of e)i in t&&delete t[i];return t}function _h(n){return n==null?!1:typeof n.type=="string"||typeof n.type=="object"||typeof n.type=="function"}function A(n){var e;if(n==null||n.value==null)return null;let t=(e=n.value.$el)!=null?e:n.value;return t instanceof Node?t:null}var mh=Object.defineProperty,gh=(n,e,t)=>e in n?mh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Vo=(n,e,t)=>(gh(n,typeof e!="symbol"?e+"":e,t),t);let vh=class{constructor(){Vo(this,"current",this.detect()),Vo(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},as=new vh;function Xn(n){if(as.isServer)return null;if(n instanceof Node)return n.ownerDocument;if(n!=null&&n.hasOwnProperty("value")){let e=A(n);if(e)return e.ownerDocument}return document}let jo=Symbol("PortalParentContext");function yh(){let n=en(jo,null),e=w([]);function t(r){return e.value.push(r),n&&n.register(r),()=>i(r)}function i(r){let o=e.value.indexOf(r);o!==-1&&e.value.splice(o,1),n&&n.unregister(r)}let s={register:t,unregister:i,portals:e};return[e,Ke({name:"PortalWrapper",setup(r,{slots:o}){return rs(jo,s),()=>{var a;return(a=o.default)==null?void 0:a.call(o)}}})]}function wh(n,e,t,i){as.isServer||Ge(s=>{n=n??window,n.addEventListener(e,t,i),s(()=>n.removeEventListener(e,t,i))})}let Eh=Symbol("headlessui.useid"),bh=0;function kn(){return en(Eh,()=>`${++bh}`)()}let Zs=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(n=>`${n}:not([tabindex='-1'])`).join(",");var xe=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(xe||{}),Oi=(n=>(n[n.Error=0]="Error",n[n.Overflow=1]="Overflow",n[n.Success=2]="Success",n[n.Underflow=3]="Underflow",n))(Oi||{}),Ih=(n=>(n[n.Previous=-1]="Previous",n[n.Next=1]="Next",n))(Ih||{});function ls(n=document.body){return n==null?[]:Array.from(n.querySelectorAll(Zs)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var Pr=(n=>(n[n.Strict=0]="Strict",n[n.Loose=1]="Loose",n))(Pr||{});function Il(n,e=0){var t;return n===((t=Xn(n))==null?void 0:t.body)?!1:Ve(e,{0(){return n.matches(Zs)},1(){let i=n;for(;i!==null;){if(i.matches(Zs))return!0;i=i.parentElement}return!1}})}var Ch=(n=>(n[n.Keyboard=0]="Keyboard",n[n.Mouse=1]="Mouse",n))(Ch||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",n=>{n.metaKey||n.altKey||n.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",n=>{n.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:n.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let Th=["textarea","input"].join(",");function Sh(n){var e,t;return(t=(e=n==null?void 0:n.matches)==null?void 0:e.call(n,Th))!=null?t:!1}function kh(n,e=t=>t){return n.slice().sort((t,i)=>{let s=e(t),r=e(i);if(s===null||r===null)return 0;let o=s.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Et(n,e,{sorted:t=!0,relativeTo:i=null,skipElements:s=[]}={}){var r;let o=(r=Array.isArray(n)?n.length>0?n[0].ownerDocument:document:n==null?void 0:n.ownerDocument)!=null?r:document,a=Array.isArray(n)?t?kh(n):n:ls(n);s.length>0&&a.length>1&&(a=a.filter(p=>!s.includes(p))),i=i??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(i))-1;if(e&4)return Math.max(0,a.indexOf(i))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,h=a.length,f;do{if(d>=h||d+h<=0)return 0;let p=c+d;if(e&16)p=(p+h)%h;else{if(p<0)return 3;if(p>=h)return 1}f=a[p],f==null||f.focus(u),d+=l}while(f!==o.activeElement);return e&6&&Sh(f)&&f.select(),2}function Rh(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Ph(){return/Android/gi.test(window.navigator.userAgent)}function Ah(){return Rh()||Ph()}function mi(n,e,t){as.isServer||Ge(i=>{document.addEventListener(n,e,t),i(()=>document.removeEventListener(n,e,t))})}function Cl(n,e,t){as.isServer||Ge(i=>{window.addEventListener(n,e,t),i(()=>window.removeEventListener(n,e,t))})}function Nh(n,e,t=$(()=>!0)){function i(r,o){if(!t.value||r.defaultPrevented)return;let a=o(r);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(n);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:A(c);if(u!=null&&u.contains(a)||r.composed&&r.composedPath().includes(u))return}return!Il(a,Pr.Loose)&&a.tabIndex!==-1&&r.preventDefault(),e(r,a)}let s=w(null);mi("pointerdown",r=>{var o,a;t.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),mi("mousedown",r=>{var o,a;t.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),mi("click",r=>{Ah()||s.value&&(i(r,()=>s.value),s.value=null)},!0),mi("touchend",r=>i(r,()=>r.target instanceof HTMLElement?r.target:null),!0),Cl("blur",r=>i(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function zo(n,e){if(n)return n;let t=e??"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function Oh(n,e){let t=w(zo(n.value.type,n.value.as));return ke(()=>{t.value=zo(n.value.type,n.value.as)}),Ge(()=>{var i;t.value||A(e)&&A(e)instanceof HTMLButtonElement&&!((i=A(e))!=null&&i.hasAttribute("type"))&&(t.value="button")}),t}var xn=(n=>(n[n.None=1]="None",n[n.Focusable=2]="Focusable",n[n.Hidden=4]="Hidden",n))(xn||{});let Di=Ke({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(n,{slots:e,attrs:t}){return()=>{var i;let{features:s,...r}=n,o={"aria-hidden":(s&2)===2?!0:(i=r["aria-hidden"])!=null?i:void 0,hidden:(s&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return os({ourProps:o,theirProps:r,slot:{},attrs:t,slots:e,name:"Hidden"})}}});function Dh({defaultContainers:n=[],portals:e,mainTreeNodeRef:t}={}){let i=w(null),s=Xn(i);function r(){var o,a,l;let c=[];for(let u of n)u!==null&&(u instanceof HTMLElement?c.push(u):"value"in u&&u.value instanceof HTMLElement&&c.push(u.value));if(e!=null&&e.value)for(let u of e.value)c.push(u);for(let u of(o=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(A(i))||u.contains((l=(a=A(i))==null?void 0:a.getRootNode())==null?void 0:l.host)||c.some(d=>u.contains(d))||c.push(u));return c}return{resolveContainers:r,contains(o){return r().some(a=>a.contains(o))},mainTreeNodeRef:i,MainTreeNode(){return t!=null?null:ve(Di,{features:xn.Hidden,ref:i})}}}var Me=(n=>(n[n.Forwards=0]="Forwards",n[n.Backwards=1]="Backwards",n))(Me||{});function Tl(){let n=w(0);return Cl("keydown",e=>{e.key==="Tab"&&(n.value=e.shiftKey?1:0)}),n}let Sl=Symbol("Context");var Mn=(n=>(n[n.Open=1]="Open",n[n.Closed=2]="Closed",n[n.Closing=4]="Closing",n[n.Opening=8]="Opening",n))(Mn||{});function xh(){return en(Sl,null)}function Mh(n){rs(Sl,n)}var Xe=(n=>(n.Space=" ",n.Enter="Enter",n.Escape="Escape",n.Backspace="Backspace",n.Delete="Delete",n.ArrowLeft="ArrowLeft",n.ArrowUp="ArrowUp",n.ArrowRight="ArrowRight",n.ArrowDown="ArrowDown",n.Home="Home",n.End="End",n.PageUp="PageUp",n.PageDown="PageDown",n.Tab="Tab",n))(Xe||{}),Lh=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Lh||{});let kl=Symbol("PopoverContext");function Ar(n){let e=en(kl,null);if(e===null){let t=new Error(`<${n} /> is missing a parent <${Al.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Ar),t}return e}let Fh=Symbol("PopoverGroupContext");function Rl(){return en(Fh,null)}let Pl=Symbol("PopoverPanelContext");function Uh(){return en(Pl,null)}let Al=Ke({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(n,{slots:e,attrs:t,expose:i}){var s;let r=w(null);i({el:r,$el:r});let o=w(1),a=w(null),l=w(null),c=w(null),u=w(null),d=$(()=>Xn(r)),h=$(()=>{var m,T;if(!A(a)||!A(u))return!1;for(let pt of document.querySelectorAll("body > *"))if(Number(pt==null?void 0:pt.contains(A(a)))^Number(pt==null?void 0:pt.contains(A(u))))return!0;let I=ls(),N=I.indexOf(A(a)),K=(N+I.length-1)%I.length,O=(N+1)%I.length,J=I[K],fe=I[O];return!((m=A(u))!=null&&m.contains(J))&&!((T=A(u))!=null&&T.contains(fe))}),f={popoverState:o,buttonId:w(null),panelId:w(null),panel:u,button:a,isPortalled:h,beforePanelSentinel:l,afterPanelSentinel:c,togglePopover(){o.value=Ve(o.value,{0:1,1:0})},closePopover(){o.value!==1&&(o.value=1)},close(m){f.closePopover();let T=m?m instanceof HTMLElement?m:m.value instanceof HTMLElement?A(m):A(f.button):A(f.button);T==null||T.focus()}};rs(kl,f),Mh($(()=>Ve(o.value,{0:Mn.Open,1:Mn.Closed})));let p={buttonId:f.buttonId,panelId:f.panelId,close(){f.closePopover()}},_=Rl(),b=_==null?void 0:_.registerPopover,[v,S]=yh(),k=Dh({mainTreeNodeRef:_==null?void 0:_.mainTreeNodeRef,portals:v,defaultContainers:[a,u]});function C(){var m,T,I,N;return(N=_==null?void 0:_.isFocusWithinPopoverGroup())!=null?N:((m=d.value)==null?void 0:m.activeElement)&&(((T=A(a))==null?void 0:T.contains(d.value.activeElement))||((I=A(u))==null?void 0:I.contains(d.value.activeElement)))}return Ge(()=>b==null?void 0:b(p)),wh((s=d.value)==null?void 0:s.defaultView,"focus",m=>{var T,I;m.target!==window&&m.target instanceof HTMLElement&&o.value===0&&(C()||a&&u&&(k.contains(m.target)||(T=A(f.beforePanelSentinel))!=null&&T.contains(m.target)||(I=A(f.afterPanelSentinel))!=null&&I.contains(m.target)||f.closePopover()))},!0),Nh(k.resolveContainers,(m,T)=>{var I;f.closePopover(),Il(T,Pr.Loose)||(m.preventDefault(),(I=A(a))==null||I.focus())},$(()=>o.value===0)),()=>{let m={open:o.value===0,close:f.close};return ve(Jn,[ve(S,{},()=>os({theirProps:{...n,...t},ourProps:{ref:r},slot:m,slots:e,attrs:t,name:"Popover"})),ve(k.MainTreeNode)])}}}),$h=Ke({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(n,{attrs:e,slots:t,expose:i}){var s;let r=(s=n.id)!=null?s:`headlessui-popover-button-${kn()}`,o=Ar("PopoverButton"),a=$(()=>Xn(o.button));i({el:o.button,$el:o.button}),ke(()=>{o.buttonId.value=r}),Rr(()=>{o.buttonId.value=null});let l=Rl(),c=l==null?void 0:l.closeOthers,u=Uh(),d=$(()=>u===null?!1:u.value===o.panelId.value),h=w(null),f=`headlessui-focus-sentinel-${kn()}`;d.value||Ge(()=>{o.button.value=A(h)});let p=Oh($(()=>({as:n.as,type:e.type})),h);function _(m){var T,I,N,K,O;if(d.value){if(o.popoverState.value===1)return;switch(m.key){case Xe.Space:case Xe.Enter:m.preventDefault(),(I=(T=m.target).click)==null||I.call(T),o.closePopover(),(N=A(o.button))==null||N.focus();break}}else switch(m.key){case Xe.Space:case Xe.Enter:m.preventDefault(),m.stopPropagation(),o.popoverState.value===1&&(c==null||c(o.buttonId.value)),o.togglePopover();break;case Xe.Escape:if(o.popoverState.value!==0)return c==null?void 0:c(o.buttonId.value);if(!A(o.button)||(K=a.value)!=null&&K.activeElement&&!((O=A(o.button))!=null&&O.contains(a.value.activeElement)))return;m.preventDefault(),m.stopPropagation(),o.closePopover();break}}function b(m){d.value||m.key===Xe.Space&&m.preventDefault()}function v(m){var T,I;n.disabled||(d.value?(o.closePopover(),(T=A(o.button))==null||T.focus()):(m.preventDefault(),m.stopPropagation(),o.popoverState.value===1&&(c==null||c(o.buttonId.value)),o.togglePopover(),(I=A(o.button))==null||I.focus()))}function S(m){m.preventDefault(),m.stopPropagation()}let k=Tl();function C(){let m=A(o.panel);if(!m)return;function T(){Ve(k.value,{[Me.Forwards]:()=>Et(m,xe.First),[Me.Backwards]:()=>Et(m,xe.Last)})===Oi.Error&&Et(ls().filter(I=>I.dataset.headlessuiFocusGuard!=="true"),Ve(k.value,{[Me.Forwards]:xe.Next,[Me.Backwards]:xe.Previous}),{relativeTo:A(o.button)})}T()}return()=>{let m=o.popoverState.value===0,T={open:m},{...I}=n,N=d.value?{ref:h,type:p.value,onKeydown:_,onClick:v}:{ref:h,id:r,type:p.value,"aria-expanded":o.popoverState.value===0,"aria-controls":A(o.panel)?o.panelId.value:void 0,disabled:n.disabled?!0:void 0,onKeydown:_,onKeyup:b,onClick:v,onMousedown:S};return ve(Jn,[os({ourProps:N,theirProps:{...e,...I},slot:T,attrs:e,slots:t,name:"PopoverButton"}),m&&!d.value&&o.isPortalled.value&&ve(Di,{id:f,features:xn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:C})])}}}),Wh=Ke({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(n,{attrs:e,slots:t,expose:i}){var s;let r=(s=n.id)!=null?s:`headlessui-popover-panel-${kn()}`,{focus:o}=n,a=Ar("PopoverPanel"),l=$(()=>Xn(a.panel)),c=`headlessui-focus-sentinel-before-${kn()}`,u=`headlessui-focus-sentinel-after-${kn()}`;i({el:a.panel,$el:a.panel}),ke(()=>{a.panelId.value=r}),Rr(()=>{a.panelId.value=null}),rs(Pl,a.panelId),Ge(()=>{var S,k;if(!o||a.popoverState.value!==0||!a.panel)return;let C=(S=l.value)==null?void 0:S.activeElement;(k=A(a.panel))!=null&&k.contains(C)||Et(A(a.panel),xe.First)});let d=xh(),h=$(()=>d!==null?(d.value&Mn.Open)===Mn.Open:a.popoverState.value===0);function f(S){var k,C;switch(S.key){case Xe.Escape:if(a.popoverState.value!==0||!A(a.panel)||l.value&&!((k=A(a.panel))!=null&&k.contains(l.value.activeElement)))return;S.preventDefault(),S.stopPropagation(),a.closePopover(),(C=A(a.button))==null||C.focus();break}}function p(S){var k,C,m,T,I;let N=S.relatedTarget;N&&A(a.panel)&&((k=A(a.panel))!=null&&k.contains(N)||(a.closePopover(),((m=(C=A(a.beforePanelSentinel))==null?void 0:C.contains)!=null&&m.call(C,N)||(I=(T=A(a.afterPanelSentinel))==null?void 0:T.contains)!=null&&I.call(T,N))&&N.focus({preventScroll:!0})))}let _=Tl();function b(){let S=A(a.panel);if(!S)return;function k(){Ve(_.value,{[Me.Forwards]:()=>{var C;Et(S,xe.First)===Oi.Error&&((C=A(a.afterPanelSentinel))==null||C.focus())},[Me.Backwards]:()=>{var C;(C=A(a.button))==null||C.focus({preventScroll:!0})}})}k()}function v(){let S=A(a.panel);if(!S)return;function k(){Ve(_.value,{[Me.Forwards]:()=>{let C=A(a.button),m=A(a.panel);if(!C)return;let T=ls(),I=T.indexOf(C),N=T.slice(0,I+1),K=[...T.slice(I+1),...N];for(let O of K.slice())if(O.dataset.headlessuiFocusGuard==="true"||m!=null&&m.contains(O)){let J=K.indexOf(O);J!==-1&&K.splice(J,1)}Et(K,xe.First,{sorted:!1})},[Me.Backwards]:()=>{var C;Et(S,xe.Previous)===Oi.Error&&((C=A(a.button))==null||C.focus())}})}k()}return()=>{let S={open:a.popoverState.value===0,close:a.close},{focus:k,...C}=n,m={ref:a.panel,id:r,onKeydown:f,onFocusout:o&&a.popoverState.value===0?p:void 0,tabIndex:-1};return os({ourProps:m,theirProps:{...e,...C},attrs:e,slot:S,slots:{...t,default:(...T)=>{var I;return[ve(Jn,[h.value&&a.isPortalled.value&&ve(Di,{id:c,ref:a.beforePanelSentinel,features:xn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:b}),(I=t.default)==null?void 0:I.call(t,...T),h.value&&a.isPortalled.value&&ve(Di,{id:u,ref:a.afterPanelSentinel,features:xn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:v})])]}},features:Xs.RenderStrategy|Xs.Static,visible:h.value,name:"PopoverPanel"})}}});function cs(n){return Vd()?(jd(n),!0):!1}function be(n){return typeof n=="function"?n():E(n)}const Nr=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Hh=Object.prototype.toString,Bh=n=>Hh.call(n)==="[object Object]",Nl=()=>{};function Vh(n,e){function t(...i){return new Promise((s,r)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(s).catch(r)})}return t}const Ol=n=>n();function jh(n=Ol){const e=w(!0);function t(){e.value=!1}function i(){e.value=!0}const s=(...r)=>{e.value&&n(...r)};return{isActive:yl(e),pause:t,resume:i,eventFilter:s}}function zh(n,e){var t;if(typeof n=="number")return n+e;const i=((t=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",s=n.slice(i.length),r=Number.parseFloat(i)+e;return Number.isNaN(r)?n:r+s}function Dl(n){return Sr()}function qh(n,e,t={}){const{eventFilter:i=Ol,...s}=t;return _e(n,Vh(i,e),s)}function Gh(n,e,t={}){const{eventFilter:i,...s}=t,{eventFilter:r,pause:o,resume:a,isActive:l}=jh(i);return{stop:qh(n,e,{...s,eventFilter:r}),pause:o,resume:a,isActive:l}}function xl(n,e=!0,t){Dl()?ke(n,t):e?n():Ni(n)}function Kh(n,e){Dl()&&Rr(n,e)}function er(n,e,t={}){const{immediate:i=!0}=t,s=w(!1);let r=null;function o(){r&&(clearTimeout(r),r=null)}function a(){s.value=!1,o()}function l(...c){o(),s.value=!0,r=setTimeout(()=>{s.value=!1,r=null,n(...c)},be(e))}return i&&(s.value=!0,Nr&&l()),cs(a),{isPending:yl(s),start:l,stop:a}}function xi(n){var e;const t=be(n);return(e=t==null?void 0:t.$el)!=null?e:t}const Ae=Nr?window:void 0,Ml=Nr?window.document:void 0;function H(...n){let e,t,i,s;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,i,s]=n,e=Ae):[e,t,i,s]=n,!e)return Nl;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,d,h,f)=>(u.addEventListener(d,h,f),()=>u.removeEventListener(d,h,f)),l=_e(()=>[xi(e),be(s)],([u,d])=>{if(o(),!u)return;const h=Bh(d)?{...d}:d;r.push(...t.flatMap(f=>i.map(p=>a(u,f,p,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return cs(c),c}function Yh(n){return typeof n=="function"?n:typeof n=="string"?e=>e.key===n:Array.isArray(n)?e=>n.includes(e.key):()=>!0}function qo(...n){let e,t,i={};n.length===3?(e=n[0],t=n[1],i=n[2]):n.length===2?typeof n[1]=="object"?(e=!0,t=n[0],i=n[1]):(e=n[0],t=n[1]):(e=!0,t=n[0]);const{target:s=Ae,eventName:r="keydown",passive:o=!1,dedupe:a=!1}=i,l=Yh(e);return H(s,r,u=>{u.repeat&&be(a)||l(u)&&t(u)},o)}function Qh(){const n=w(!1),e=Sr();return e&&ke(()=>{n.value=!0},e),n}function Or(n){const e=Qh();return $(()=>(e.value,!!n()))}function wn(n,e={}){const{window:t=Ae}=e,i=Or(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let s;const r=w(!1),o=c=>{r.value=c.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},l=Ge(()=>{i.value&&(a(),s=t.matchMedia(be(n)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),r.value=s.matches)});return cs(()=>{l(),a(),s=void 0}),r}const Jh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function Xh(n,e={}){function t(u,d){let h=be(n[be(u)]);return d!=null&&(h=zh(h,d)),typeof h=="number"&&(h=`${h}px`),h}const{window:i=Ae,strategy:s="min-width"}=e;function r(u){return i?i.matchMedia(u).matches:!1}const o=u=>wn(()=>`(min-width: ${t(u)})`,e),a=u=>wn(()=>`(max-width: ${t(u)})`,e),l=Object.keys(n).reduce((u,d)=>(Object.defineProperty(u,d,{get:()=>s==="min-width"?o(d):a(d),enumerable:!0,configurable:!0}),u),{});function c(){const u=Object.keys(n).map(d=>[d,o(d)]);return $(()=>u.filter(([,d])=>d.value).map(([d])=>d))}return Object.assign(l,{greaterOrEqual:o,smallerOrEqual:a,greater(u){return wn(()=>`(min-width: ${t(u,.1)})`,e)},smaller(u){return wn(()=>`(max-width: ${t(u,-.1)})`,e)},between(u,d){return wn(()=>`(min-width: ${t(u)}) and (max-width: ${t(d,-.1)})`,e)},isGreater(u){return r(`(min-width: ${t(u,.1)})`)},isGreaterOrEqual(u){return r(`(min-width: ${t(u)})`)},isSmaller(u){return r(`(max-width: ${t(u,-.1)})`)},isSmallerOrEqual(u){return r(`(max-width: ${t(u)})`)},isInBetween(u,d){return r(`(min-width: ${t(u)}) and (max-width: ${t(d,-.1)})`)},current:c,active(){const u=c();return $(()=>u.value.length===0?"":u.value.at(-1))}})}const gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vi="__vueuse_ssr_handlers__",Zh=ef();function ef(){return vi in gi||(gi[vi]=gi[vi]||{}),gi[vi]}function tf(n,e){return Zh[n]||e}function nf(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const sf={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Go="vueuse-storage";function rf(n,e,t,i={}){var s;const{flush:r="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Ae,eventFilter:h,onError:f=O=>{console.error(O)},initOnMounted:p}=i,_=(u?zd:w)(typeof e=="function"?e():e);if(!t)try{t=tf("getDefaultStorage",()=>{var O;return(O=Ae)==null?void 0:O.localStorage})()}catch(O){f(O)}if(!t)return _;const b=be(e),v=nf(b),S=(s=i.serializer)!=null?s:sf[v],{pause:k,resume:C}=Gh(_,()=>T(_.value),{flush:r,deep:o,eventFilter:h});d&&a&&xl(()=>{H(d,"storage",N),H(d,Go,K),p&&N()}),p||N();function m(O,J){d&&d.dispatchEvent(new CustomEvent(Go,{detail:{key:n,oldValue:O,newValue:J,storageArea:t}}))}function T(O){try{const J=t.getItem(n);if(O==null)m(J,null),t.removeItem(n);else{const fe=S.write(O);J!==fe&&(t.setItem(n,fe),m(J,fe))}}catch(J){f(J)}}function I(O){const J=O?O.newValue:t.getItem(n);if(J==null)return l&&b!=null&&t.setItem(n,S.write(b)),b;if(!O&&c){const fe=S.read(J);return typeof c=="function"?c(fe,b):v==="object"&&!Array.isArray(fe)?{...b,...fe}:fe}else return typeof J!="string"?J:S.read(J)}function N(O){if(!(O&&O.storageArea!==t)){if(O&&O.key==null){_.value=b;return}if(!(O&&O.key!==n)){k();try{(O==null?void 0:O.newValue)!==S.write(_.value)&&(_.value=I(O))}catch(J){f(J)}finally{O?Ni(C):C()}}}}function K(O){N(O.detail)}return _}const Ko=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function of(n,e={}){const{document:t=Ml,autoExit:i=!1}=e,s=$(()=>{var v;return(v=xi(n))!=null?v:t==null?void 0:t.querySelector("html")}),r=w(!1),o=$(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(v=>t&&v in t||s.value&&v in s.value)),a=$(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(v=>t&&v in t||s.value&&v in s.value)),l=$(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(v=>t&&v in t||s.value&&v in s.value)),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(v=>t&&v in t),u=Or(()=>s.value&&t&&o.value!==void 0&&a.value!==void 0&&l.value!==void 0),d=()=>c?(t==null?void 0:t[c])===s.value:!1,h=()=>{if(l.value){if(t&&t[l.value]!=null)return t[l.value];{const v=s.value;if((v==null?void 0:v[l.value])!=null)return!!v[l.value]}}return!1};async function f(){if(!(!u.value||!r.value)){if(a.value)if((t==null?void 0:t[a.value])!=null)await t[a.value]();else{const v=s.value;(v==null?void 0:v[a.value])!=null&&await v[a.value]()}r.value=!1}}async function p(){if(!u.value||r.value)return;h()&&await f();const v=s.value;o.value&&(v==null?void 0:v[o.value])!=null&&(await v[o.value](),r.value=!0)}async function _(){await(r.value?f():p())}const b=()=>{const v=h();(!v||v&&d())&&(r.value=v)};return H(t,Ko,b,!1),H(()=>xi(s),Ko,b,!1),i&&cs(f),{isSupported:u,isFullscreen:r,enter:p,exit:f,toggle:_}}function yi(n,e,t={}){const{window:i=Ae}=t;return rf(n,e,i==null?void 0:i.localStorage,t)}const af={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof Touch?null:[n.movementX,n.movementY]};function lf(n={}){const{type:e="page",touch:t=!0,resetOnTouchEnds:i=!1,initialValue:s={x:0,y:0},window:r=Ae,target:o=r,scroll:a=!0,eventFilter:l}=n;let c=null;const u=w(s.x),d=w(s.y),h=w(null),f=typeof e=="function"?e:af[e],p=m=>{const T=f(m);c=m,T&&([u.value,d.value]=T,h.value="mouse")},_=m=>{if(m.touches.length>0){const T=f(m.touches[0]);T&&([u.value,d.value]=T,h.value="touch")}},b=()=>{if(!c||!r)return;const m=f(c);c instanceof MouseEvent&&m&&(u.value=m[0]+r.scrollX,d.value=m[1]+r.scrollY)},v=()=>{u.value=s.x,d.value=s.y},S=l?m=>l(()=>p(m),{}):m=>p(m),k=l?m=>l(()=>_(m),{}):m=>_(m),C=l?()=>l(()=>b(),{}):()=>b();if(o){const m={passive:!0};H(o,["mousemove","dragover"],S,m),t&&e!=="movement"&&(H(o,["touchstart","touchmove"],k,m),i&&H(o,"touchend",v,m)),a&&e==="page"&&H(r,"scroll",C,{passive:!0})}return{x:u,y:d,sourceType:h}}function cf(n,e={}){const{handleOutside:t=!0,window:i=Ae}=e,s=e.type||"page",{x:r,y:o,sourceType:a}=lf(e),l=w(n??(i==null?void 0:i.document.body)),c=w(0),u=w(0),d=w(0),h=w(0),f=w(0),p=w(0),_=w(!0);let b=()=>{};return i&&(b=_e([l,r,o],()=>{const v=xi(l);if(!v)return;const{left:S,top:k,width:C,height:m}=v.getBoundingClientRect();d.value=S+(s==="page"?i.pageXOffset:0),h.value=k+(s==="page"?i.pageYOffset:0),f.value=m,p.value=C;const T=r.value-d.value,I=o.value-h.value;_.value=C===0||m===0||T<0||I<0||T>C||I>m,(t||!_.value)&&(c.value=T,u.value=I)},{immediate:!0}),H(document,"mouseleave",()=>{_.value=!0})),{x:r,y:o,sourceType:a,elementX:c,elementY:u,elementPositionX:d,elementPositionY:h,elementHeight:f,elementWidth:p,isOutside:_,stop:b}}function uf(n={}){const{window:e=Ae}=n,t=Or(()=>e&&"screen"in e&&"orientation"in e.screen),i=t.value?e.screen.orientation:{},s=w(i.type),r=w(i.angle||0);return t.value&&H(e,"orientationchange",()=>{s.value=i.type,r.value=i.angle}),{isSupported:t,orientation:s,angle:r,lockOrientation:l=>t.value&&typeof i.lock=="function"?i.lock(l):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{t.value&&typeof i.unlock=="function"&&i.unlock()}}}function df(n,e=Nl,t={}){const{immediate:i=!0,manual:s=!1,type:r="text/javascript",async:o=!0,crossOrigin:a,referrerPolicy:l,noModule:c,defer:u,document:d=Ml,attrs:h={}}=t,f=w(null);let p=null;const _=S=>new Promise((k,C)=>{const m=N=>(f.value=N,k(N),N);if(!d){k(!1);return}let T=!1,I=d.querySelector(`script[src="${be(n)}"]`);I?I.hasAttribute("data-loaded")&&m(I):(I=d.createElement("script"),I.type=r,I.async=o,I.src=be(n),u&&(I.defer=u),a&&(I.crossOrigin=a),c&&(I.noModule=c),l&&(I.referrerPolicy=l),Object.entries(h).forEach(([N,K])=>I==null?void 0:I.setAttribute(N,K)),T=!0),I.addEventListener("error",N=>C(N)),I.addEventListener("abort",N=>C(N)),I.addEventListener("load",()=>{I.setAttribute("data-loaded","true"),e(I),m(I)}),T&&(I=d.head.appendChild(I)),S||m(I)}),b=(S=!0)=>(p||(p=_(S)),p),v=()=>{if(!d)return;p=null,f.value&&(f.value=null);const S=d.querySelector(`script[src="${be(n)}"]`);S&&d.head.removeChild(S)};return i&&!s&&xl(b),s||Kh(v),{scriptTag:f,load:b,unload:v}}const hf=()=>kr().$device,ff=["controls","poster"],pf=D("p",{class:"vjs-no-js"},[Ut(" To view this video please enable JavaScript, and consider upgrading to a web browser that "),D("a",{href:"https://videojs.com/html5-video-support/",target:"_blank"},"supports HTML5 video")],-1),_f=[pf],mf={key:0},gf={key:2,id:"loading-spinner",class:"absolute inset-0 z-0 flex items-center justify-center bg-black/30 text-black"},vf={key:0,class:"group flex items-center justify-center"},yf={class:"relative flex h-full w-full duration-200 group-hover/volume:w-20"},wf={class:"flex w-full bg-zinc-800/80 px-1 duration-200 dark:bg-black/75 md:px-2 items-center"},Ef={key:0,class:"group/volume flex items-center gap-1"},bf={class:"relative flex h-full w-16 items-center duration-200 group-hover/volume:w-20 md:w-20"},If={class:"absolute inset-0 top-1/2 h-1 z-0 w-16 overflow-hidden rounded-sm bg-gray-300/25 md:w-20"},Cf=D("div",{class:"flex-1"},null,-1),Tf={key:1,class:"flex items-center text-xs md:text-sm pt-0.5"},Sf=D("div",{class:"border-b border-white/20 px-3 py-1.5 md:px-4 md:py-2.5"}," Kualitas ",-1),kf={class:"flex w-[220px] flex-col py-1 text-base md:w-[250px]"},Rf={class:"h-10 w-10"},Pf=Ke({__name:"VideoPlayer",props:{sources:{},poster:{},landscape:{type:Boolean,default:!0},useShortcut:{type:Boolean,default:!0},useDefaultControl:{type:Boolean,default:!1},hideControl:{type:Boolean,default:!1},saveState:{type:Boolean,default:!0},rotateFill:{default:"width"},videoFill:{default:"width"},compact:{type:Boolean,default:!1},title:{}},setup(n,{expose:e}){const{greaterOrEqual:t}=Xh(Jh),i=n,s=w(i.sources.filter(y=>y.type==="hls")??[]);_e(()=>i.sources,()=>{s.value=i.sources.filter(y=>y.type==="hls")??[]});const r=yi("quality-id",2),o=w((s.value??[]).find(y=>r.value===y.id)??s.value[0]),a=w(),l=w(),c=w(),u=i.saveState?yi("data-volume",0):w(1),d=w(!1),h=i.saveState?yi("data-muted",!1):w(!1),f=w(!1),p=w(!0),_=w(0),{isMobile:b}=hf(),{start:v,stop:S}=er(()=>{Dt()},1e4),k=w(!1);function C(y,V=!1){const W=Number.parseFloat(y);l.value&&(W===0?(l.value.muted=!0,l.value.volume=0):(l.value.muted=!1,l.value.volume=W),W>0&&(u.value=W),V||(h.value=l.value.muted),d.value=l.value.muted)}const m=w(!1),T=w(!1),I=w(!1),{start:N,stop:K}=er(()=>{I.value=!1,T.value=!1,_t(!1)},2e3);_e(T,y=>{y&&N()});const{isOutside:O,x:J,y:fe}=cf(a);_e(J,()=>{!b&&!O.value!==m.value&&_t(!O.value),N()}),_e(fe,()=>{!b&&!O.value!==m.value&&_t(!O.value),N()});const pt=w(null);H(pt,"input",y=>{_t(!0),C(y.target.value)});function _t(y){console.log("SET SHOW",y),y?N():(T.value=!1,I.value=!1,K()),m.value=y}const td=w(0),No=w(!1);df("https://cdn.jsdelivr.net/npm/hls.js@1.5.6",()=>{fn()},{defer:!0});const hn=w(!1),Oo=w(!0);ke(()=>{!No.value&&typeof Hls<"u"&&(No.value=!0,fn())});function fn(){var V;const y=o.value;Hls.isSupported()&&!hn.value?(td.value=0,p.value=!0,li(),c.value=new Hls({enableWorker:!1,liveDurationInfinity:y.live??!0,maxBufferSize:254*1e3*1e3,maxBufferLength:60,lowLatencyMode:!0}),c.value.on(Hls.Events.ERROR,(W,ye)=>{if(console.error(ye),ye.details==="manifestParsingError"&&!hn.value)return hn.value=!0,fn();if(v(),ye.fatal)switch(ye.type){case Hls.ErrorTypes.NETWORK_ERROR:console.error("fatal network error encountered, try to recover"),c.value.startLoad();break;case Hls.ErrorTypes.MEDIA_ERROR:console.error("fatal media error encountered, try to recover"),c.value.recoverMediaError();break;default:if(console.error("cannot recover error"),Oo.value)return Oo.value=!1,fn();Dt();break}else ye.details===Hls.ErrorDetails.BUFFER_STALLED_ERROR&&(p.value=!0)}),c.value.on(Hls.Events.FRAG_BUFFERED,()=>{S(),p.value=!1}),c.value.on(Hls.Events.MANIFEST_LOADING,()=>{p.value=!0}),c.value.on(Hls.Events.LEVEL_LOADED,()=>{S(),p.value=!1}),c.value.attachMedia(l.value),c.value.loadSource(y.url),xt()):l.value&&((V=l.value)==null||V.setAttribute("src",y.url),xt())}function li(){c.value&&c.value.destroy()}function nd(){l.value&&(l.value.muted?ui():ci())}function ci(){l.value?(l.value.muted=!0,d.value=!0):C(0)}function ui(){l.value?(l.value.muted=!1,d.value=!1):C(u.value||1)}const di=w(!1);async function pn(){if(!di.value&&l.value){di.value=!0;try{l.value.paused?(k.value=!1,await xt()):(k.value=!0,await l.value.pause()),di.value=!1}catch{di.value=!1}}}function Dt(){f.value=!1,p.value=!0,hn.value=!1,S();try{fn()}catch(y){console.error(y),li()}}const _n=w();H(_n,"pointerenter",()=>{I.value=!0}),H(_n,"pointerleave",()=>{I.value=!1}),H(_n,"focusin",()=>{b||(T.value=!0)}),H(_n,"focusout",()=>{T.value=!1});const{isSupported:Do,orientation:id,lockOrientation:xo,unlockOrientation:sd}=uf(),As=w(0),Ns=w(0),mn=$(()=>Ns.value<=As.value),Mo=w(!1),{isFullscreen:rd,toggle:Lo}=of(a),gn=$(()=>Mo.value||rd.value);async function od(){if(gn.value)sd(),await Lo();else{const y=id.value;await Lo();try{mn.value?["portrait-primary","portrait-secondary","portrait"].includes(y??"")&&Do.value&&await xo("landscape"):["landscape-primary","landscape-secondary","landscape"].includes(y??"")&&Do.value&&await xo("portrait")}catch(V){console.error(V)}}}function ad(){var y;document.pictureInPictureElement?document.exitPictureInPicture():document.pictureInPictureEnabled&&((y=l.value)==null||y.requestPictureInPicture())}function Fo(y){hn.value=!1,r.value=y.id,o.value=y,Dt()}const hi=w(0);_e(f,y=>{!y&&!k.value?v():(S(),hi.value=0)},{immediate:!0});async function xt(){if(k.value=!1,l.value)try{h.value?ci():ui(),await l.value.play()}catch(y){if(console.error(y),hi.value>5)return;hi.value+=1,await Ni(async()=>(hi.value>4&&(l.value&&(l.value.muted=!0,l.value.volume=0),_.value=0,d.value=!0),xt()))}}const fi=w(!1),Uo=w(!1);_e(gn,()=>{Uo.value=window.innerHeight<=window.innerWidth,pi()});const Qe=w(0),Mt=w(0);Tr(()=>{li(),document!=null&&document.pictureInPictureElement&&document.exitPictureInPicture()});function ld(){b?m.value?_t(!1):_t(!0):pn()}function cd(){li(),document!=null&&document.pictureInPictureElement&&document.exitPictureInPicture()}const Te=w(),Os=$(()=>Qe.value===0?0:Mt.value/Qe.value*100);i.useShortcut&&(qo("ArrowLeft",()=>{const y=Mt.value-2;l.value&&(l.value.currentTime=y<0?0:y)},{eventName:"keyup"}),qo("ArrowRight",()=>{const y=Mt.value+2,V=Qe.value-3;l.value&&(l.value.currentTime=y>V?V:y)},{eventName:"keyup"})),_e(Os,y=>{Te.value&&(Te.value.value=String(y*(Number(Te.value.max)||0)/100))},{immediate:!0});const ud=$(()=>Math.floor(Mt.value));function dd(){var y;return(y=l.value)==null?void 0:y.getAttribute("prop")}H(l,"volumechange",y=>{var V,W;d.value=(V=y.target)==null?void 0:V.muted,_.value=((W=y.target)==null?void 0:W.volume)||0});const hd=$(()=>!d.value&&_.value>=.5?"material-symbols:volume-up":!d.value&&_.value>0?"material-symbols:volume-down":"material-symbols:volume-off"),fd=$(()=>f.value?"material-symbols:pause":"material-symbols:play-arrow");function pd(){var y;(y=l.value)==null||y.pause(),k.value=!0}function _d(){l.value&&(l.value.currentTime=Qe.value-3)}const vn=yi("rotate_feature_v1",()=>!1),yn=w(0);function md(){vn.value&&(yn.value+=90)}const mt=w(null),$o=$(()=>yn.value/90%2!==0);function pi(){var V;if(!mt.value){const W=(V=l.value)==null?void 0:V.getBoundingClientRect();mt.value={width:(W==null?void 0:W.width)||0,height:(W==null?void 0:W.height)||0}}const y=yn.value;if(!(!l.value||!a.value)&&(l.value.style.removeProperty("scale"),y/90%2!==0)){if(!mt.value)return;const W=mt.value.height/mt.value.width,ye=mt.value.width/mt.value.height;let gt;i.rotateFill==="width"?gt=ye:gt=W,gn.value&&(gt=Uo.value?mn.value?W:ye:mn.value?ye:W),l.value.style.scale=`${gt}`}}_e(yn,()=>{requestAnimationFrame(()=>pi())}),H(l,"loadedmetadata",function(){As.value=this.videoWidth,Ns.value=this.videoHeight}),H(l,"loadeddata",function(){As.value=this.videoWidth,Ns.value=this.videoHeight}),H(l,"play",()=>{p.value=!1,f.value=!0}),H(l,"pause",()=>{p.value=!1,f.value=!1}),H(l,"playing",()=>{p.value=!1,f.value=!0}),H(l,"stalled",()=>{p.value=!0}),H(l,"durationchange",()=>{var y;Qe.value=((y=l.value)==null?void 0:y.duration)||0}),H(l,"timeupdate",()=>{var y;fi.value||(Mt.value=((y=l.value)==null?void 0:y.currentTime)||0)}),H(l,"loadstart",()=>{p.value=!0});function Ds(){Mo.value=document.fullscreenElement!==null}H(l,"webkitfullscreenchange",()=>{Ds()}),H(l,"mozfullscreenchange",()=>{Ds()}),H(l,"fullscreenchange",()=>{Ds()});const Wo=w(!1);ke(()=>{H(window,"resize",()=>{requestAnimationFrame(()=>pi())}),Wo.value=document.pictureInPictureEnabled;try{navigator.mediaSession.setActionHandler("nexttrack",()=>{Dt()})}catch(y){console.error(y)}l.value&&(_.value=Number(u.value)||1,C(_.value),f.value=!l.value.paused),Ni(()=>{h.value?ci():ui()})});const gd=$(()=>{const y=$o.value?"aspect-[9/12]":"aspect-video",V=$o.value?"aspect-video":"aspect-[9/12]";return mn.value?y:V}),Ho=w(!1);ke(()=>{Ho.value=!0});function vd(){Te.value&&(Mt.value=Number(Te.value.value)/(Number(Te.value.max)||0)*Qe.value)}function yd(){Te.value&&l.value&&(l.value.currentTime=Number(Te.value.value)/(Number(Te.value.max)||0)*Qe.value),fi.value=!1}const wd=t("md");return e({stop:cd,rotate:md,syncLive:_d,calculateVideoSize:pi,isPlaying:f,isMuted:d,reload:Dt,togglePlay:pn,isLandscape:mn,changeSource:Fo,checkMute:dd,volume:_,pause:pd,play:xt,mute:ci,unmute:ui,setVolume:C}),(y,V)=>{const W=Id,ye=hh,gt=$h,Ed=Wh,bd=Al;return U(),G("div",{ref_key:"videoPlayer",ref:a,class:Se(["overflow-hidden relative group flex items-center transform-all duration-300",[E(vn)?y.rotateFill==="width"?E(gd):"h-full w-full":"w-full h-full",{"!cursor-none":!E(m)&&E(f),invisible:!E(Ho)}]])},[D("video",{ref_key:"video",ref:l,playsinline:"",controls:!(!y.useDefaultControl||E(vn)||y.hideControl),class:Se([{"object-cover":!E(gn)},"inset-0 w-full h-full transition-all duration-500 origin-center"]),style:_i({transform:E(vn)?`rotate(${E(yn)}deg)`:"none"}),poster:y.poster,onClick:ld},_f,14,ff),!y.useDefaultControl||E(vn)?(U(),G("div",mf,[!E(f)&&!E(p)?(U(),G("div",{key:0,class:Se(["z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1",{"pointer-events-none":!E(b)}]),onClick:V[0]||(V[0]=()=>{E(b)&&pn()})},[pe(W,{name:"material-symbols:play-arrow",class:"text-white/60",size:"3rem"})],2)):Z("",!0),E(b)&&E(f)&&E(m)&&!E(p)?(U(),G("div",{key:1,class:Se(["z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1",{"pointer-events-none":!E(b)}]),onClick:pn},[pe(W,{name:"material-symbols:pause",class:"text-white/60",size:"3rem"})],2)):Z("",!0),E(p)?(U(),G("div",gf,[pe(ye,{class:"text-white size-12"})])):Z("",!0),y.title?(U(),G("div",{key:3,class:Se([{"opacity-100":E(m)||E(T)||E(I)},"absolute top-0 inset-x-0 z-10 opacity-0 text-white px-3 pt-2 pb-4 text-base md:text-lg font-bold bg-title transition-opacity duration-200"])},me(y.title),3)):Z("",!0),D("div",{id:"control",ref_key:"videoControl",ref:_n,class:Se([{"opacity-100":E(m)||E(T)||E(I)},"absolute inset-x-0 bottom-0 z-10 text-slate-200 opacity-0 duration-200 ease-in-out transition-opacity"]),onClick:V[4]||(V[4]=De=>_t(!0))},[D("div",{class:Se({"pointer-events-none":E(b)&&!E(m)})},[E(o).live??!0?Z("",!0):(U(),G("div",vf,[D("div",yf,[D("div",{class:Se([{"h-[3px]":y.compact,"h-1":!y.compact},"absolute bottom-0 z-0 w-full overflow-hidden bg-neutral-700/75"])},[D("div",{class:"h-full bg-red-600",style:_i({width:`${E(Os)}%`})},null,4)],2),D("div",{class:Se([{"opacity-0":!E(b),"h-3 w-3":!y.compact,"h-2 w-2":y.compact},"absolute bottom-[2px] -translate-x-1/2 translate-y-1/2 rounded-full bg-red-600 transition-opacity duration-300 group-hover:opacity-100"]),style:_i({left:`${E(Os)}%`})},null,6),D("input",{ref_key:"seekSlider",ref:Te,class:Se([{"opacity-0":!E(b),compact:y.compact},"volume-slider hidden-slider z-20 h-4 w-full cursor-pointer transition-opacity duration-300 hover:opacity-100"]),"aria-label":"Playback",type:"range",min:"0",max:"10000",step:"1",onChange:yd,onInput:vd,onPointerdown:V[1]||(V[1]=De=>fi.value=!0),onPointerup:V[2]||(V[2]=De=>fi.value=!1)},null,34)])])),D("div",wf,[D("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Play",type:"button",onClick:pn},[pe(W,{name:E(fd),class:"h-full w-full"},null,8,["name"])]),y.compact?Z("",!0):(U(),G("div",Ef,[D("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Mute",type:"button",onClick:nd},[pe(W,{name:E(hd),class:"h-full w-full"},null,8,["name"])]),D("div",bf,[D("div",If,[D("div",{class:"h-full bg-slate-200",style:_i({width:`${E(_)*100}%`})},null,4)]),qd(D("input",{ref_key:"volumeSlider",ref:pt,"onUpdate:modelValue":V[3]||(V[3]=De=>Kd(_)?_.value=De:null),"aria-label":"Volume",type:"range",min:"0",max:"1",step:"0.01",class:"volume-slider z-20 h-1 w-16 cursor-pointer md:w-20 pt-1"},null,512),[[Gd,E(_)]])])])),Cf,!y.compact&&E(wd)&&!(E(o).live??!0)?(U(),G("div",Tf,me(y.$dayjs.duration(E(ud),"second").format("mm:ss"))+" / "+me(y.$dayjs.duration(E(Qe),"second").format("mm:ss")),1)):Z("",!0),D("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Reload",type:"button",onClick:Dt},[pe(W,{name:"material-symbols:refresh",class:"h-full w-full p-[1px]"})]),y.compact?Z("",!0):(U(),wt(bd,{key:2},{default:Ft(()=>[pe(gt,{"aria-label":"Setting",class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1"},{default:Ft(()=>[pe(W,{name:"material-symbols:settings",class:"h-full w-full p-[2px] duration-300"})]),_:1}),pe(Qd,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-2 translate-x-1 opacity-0","enter-to-class":"translate-y-0 translate-x-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 translate-x-x opacity-100","leave-to-class":"translate-y-2 translate-x-1 opacity-0"},{default:Ft(()=>[pe(Ed,{class:"absolute bottom-11 right-4 rounded-md bg-black/70 dark:bg-black/80"},{default:Ft(()=>[D("div",null,[Sf,D("div",kf,[(U(!0),G(Jn,null,Yd(E(s),De=>(U(),wt(gt,{key:De.id,class:"flex items-center truncate text-left text-sm hover:bg-black/50",onClick:()=>Fo(De)},{default:Ft(()=>[D("div",Rf,[E(o).id===De.id?(U(),wt(W,{key:0,name:"ic:round-check",class:"h-full w-full p-2.5"})):Z("",!0)]),D("div",null,me(De.label),1)]),_:2},1032,["onClick"]))),128))])])]),_:1})]),_:1})]),_:1})),E(Wo)?(U(),G("button",{key:3,class:"group h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Fullscreen",type:"button",onClick:ad},[pe(W,{name:"material-symbols:picture-in-picture-sharp",class:"h-full w-full p-0.5 duration-300"})])):Z("",!0),D("button",{class:"group h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Fullscreen",type:"button",onClick:od},[E(gn)?(U(),wt(W,{key:1,name:"material-symbols:fullscreen-exit",class:"h-full w-full duration-300 hover:scale-125"})):(U(),wt(W,{key:0,name:"material-symbols:fullscreen",class:"h-full w-full duration-300 hover:scale-125"}))])])],2)],2)])):Z("",!0)],2)}}});function Af(){return Jd}class Nf{static encrypt(e,t){let i="";for(let s=0;s<e.length;s++){const r=s%t.length,a=`00${(e[s].charCodeAt(0)^t[r].charCodeAt(0)).toString(16)}`.slice(-2);i+=a}return i}static decrypt(e,t){let i="";const s=[];let r;for(r=0;r<e.length;r=r+2)s.push(e[r]+e[r+1]);for(r=0;r<s.length;r++){const o=s[r],a=parseInt(o,16),l=r%t.length,c=a^t[l].charCodeAt(0);i+=String.fromCharCode(c)}return i}}const Of="KimiNo";function Df(n){return Nf.decrypt(n,Of+xf+Lf)}const xf="Kotoga";function Mf(n){return typeof n=="string"&&(n=parseInt(n)),n.toString().length>10}const Lf="SukiDakara";function Yo(n){return["www.youtube.com/embed"].some(e=>n.includes(e))}const Ff={key:0,class:"text-center flex flex-col gap-1"},Uf={class:"text-xl"},$f={class:"flex gap-3 justify-center"},Wf={key:0,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Hf={class:"leading-6"},Bf=D("span",{class:"text-sm"},"bulan",-1),Vf={key:1,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},jf={class:"leading-6"},zf=D("span",{class:"text-sm"},"hari",-1),qf={key:2,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Gf={class:"leading-6"},Kf=D("span",{class:"text-sm"},"jam",-1),Yf={key:3,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Qf={class:"leading-6"},Jf=D("span",{class:"text-sm"},"menit",-1),Xf={key:4,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Zf={class:"leading-6"},ep=D("span",{class:"text-sm"},"detik",-1),tp=Ke({__name:"CountDown",props:{time:{}},setup(n){const e=n,t=Af(),i=t(Mf(e.time)?e.time:Number(e.time)*1e3),s=w(t.duration(i.diff(t()))),r=w(s.value.asSeconds()<=0),{start:o}=er(()=>{const a=s.value.subtract(1,"seconds");s.value.asSeconds()<=1?(r.value=!0,s.value=t.duration(0)):(s.value=a,o())},1e3,{immediate:!0});return(a,l)=>(U(),G("div",null,[E(r)?Z("",!0):(U(),G("div",Ff,[D("div",Uf,me(E(i).format("dddd, DD MMMM YYYY")),1),D("div",$f,[E(s).months()>0?(U(),G("div",Wf,[D("span",Hf,me(E(s).months()),1),Ut(),Bf])):Z("",!0),E(s).days()>0?(U(),G("div",Vf,[D("span",jf,me(E(s).days()),1),Ut(),zf])):Z("",!0),E(s).hours()>0?(U(),G("div",qf,[D("span",Gf,me(E(s).hours()),1),Ut(),Kf])):Z("",!0),E(s).minutes()>0?(U(),G("div",Yf,[D("span",Qf,me(E(s).minutes()),1),Ut(),Jf])):Z("",!0),E(s).seconds()>0||E(s).asSeconds()>0?(U(),G("div",Xf,[D("span",Zf,me(E(s).seconds()),1),Ut(),ep])):Z("",!0)])]))]))}});var Qo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(n,e){if(!n)throw tn(e)},tn=function(n){return new Error("Firebase Database ("+Ll.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},np=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},us={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(t[u],t[d],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):np(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new ip;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ip extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ul=function(n){const e=Fl(n);return us.encodeByteArray(e,!0)},Mi=function(n){return Ul(n).replace(/\./g,"")},Li=function(n){try{return us.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n){return $l(void 0,n)}function $l(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!rp(t)||(n[t]=$l(n[t],e[t]));return n}function rp(n){return n!=="__proto__"}/**
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
 */function Wl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const op=()=>Wl().__FIREBASE_DEFAULTS__,ap=()=>{if(typeof process>"u"||typeof Qo>"u")return;const n=Qo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Li(n[1]);return e&&JSON.parse(e)},Dr=()=>{try{return op()||ap()||lp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hl=n=>{var e,t;return(t=(e=Dr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cp=n=>{const e=Hl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Bl=()=>{var n;return(n=Dr())===null||n===void 0?void 0:n.config},Vl=n=>{var e;return(e=Dr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function up(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Mi(JSON.stringify(t)),Mi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function dp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hp(){const n=ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zl(){return Ll.NODE_ADMIN===!0}function Mr(){try{return typeof indexedDB=="object"}catch{return!1}}function fp(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="FirebaseError";class ht extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=pp,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nn.prototype.create)}}class nn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?_p(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ht(s,a,i)}}function _p(n,e){return n.replace(mp,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const mp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n){return JSON.parse(n)}function ee(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Ln(Li(r[0])||""),t=Ln(Li(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},gp=function(n){const e=ql(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},vp=function(n){const e=ql(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Gt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Fi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ui(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function $i(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Jo(r)&&Jo(o)){if(!$i(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Jo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Tn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Sn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function wp(n,e){const t=new Ep(n,e);return t.subscribe.bind(t)}class Ep{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");bp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Ms),s.error===void 0&&(s.error=Ms),s.complete===void 0&&(s.complete=Ms);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ms(){}function Kt(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,g(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ds=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Cp=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})};/**
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
 */const Tp=1e3,Sp=2,kp=4*60*60*1e3,Rp=.5;function Pp(n,e=Tp,t=Sp){const i=e*Math.pow(t,n),s=Math.round(Rp*i*(Math.random()-.5)*2);return Math.min(kp,i+s)}/**
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
 */function oe(n){return n&&n._delegate?n._delegate:n}class je{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vt="[DEFAULT]";/**
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
 */class Ap{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new he;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Op(e))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vt){return this.instances.has(e)}getOptions(e=vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Np(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=vt){return this.component?this.component.multipleInstances?e:vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Np(n){return n===vt?void 0:n}function Op(n){return n.instantiationMode==="EAGER"}/**
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
 */class Dp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ap(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const xp={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Mp=j.INFO,Lp={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Fp=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Lp[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hs{constructor(e){this.name=e,this._logLevel=Mp,this._logHandler=Fp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Up=(n,e)=>e.some(t=>n instanceof t);let Xo,Zo;function $p(){return Xo||(Xo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wp(){return Zo||(Zo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gl=new WeakMap,tr=new WeakMap,Kl=new WeakMap,Ls=new WeakMap,Lr=new WeakMap;function Hp(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(it(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Gl.set(t,n)}).catch(()=>{}),Lr.set(e,n),e}function Bp(n){if(tr.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});tr.set(n,e)}let nr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return tr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return it(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Vp(n){nr=n(nr)}function jp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Fs(this),e,...t);return Kl.set(i,e.sort?e.sort():[e]),it(i)}:Wp().includes(n)?function(...e){return n.apply(Fs(this),e),it(Gl.get(this))}:function(...e){return it(n.apply(Fs(this),e))}}function zp(n){return typeof n=="function"?jp(n):(n instanceof IDBTransaction&&Bp(n),Up(n,$p())?new Proxy(n,nr):n)}function it(n){if(n instanceof IDBRequest)return Hp(n);if(Ls.has(n))return Ls.get(n);const e=zp(n);return e!==n&&(Ls.set(n,e),Lr.set(e,n)),e}const Fs=n=>Lr.get(n);function qp(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=it(o);return i&&o.addEventListener("upgradeneeded",l=>{i(it(o.result),l.oldVersion,l.newVersion,it(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Gp=["get","getKey","getAll","getAllKeys","count"],Kp=["put","add","delete","clear"],Us=new Map;function ea(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Us.get(e))return Us.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Kp.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Gp.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Us.set(e,r),r}Vp(n=>({...n,get:(e,t,i)=>ea(e,t)||n.get(e,t,i),has:(e,t)=>!!ea(e,t)||n.has(e,t)}));/**
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
 */class Yp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qp(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Qp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ir="@firebase/app",ta="0.10.1";/**
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
 */const Ct=new hs("@firebase/app"),Jp="@firebase/app-compat",Xp="@firebase/analytics-compat",Zp="@firebase/analytics",e_="@firebase/app-check-compat",t_="@firebase/app-check",n_="@firebase/auth",i_="@firebase/auth-compat",s_="@firebase/database",r_="@firebase/database-compat",o_="@firebase/functions",a_="@firebase/functions-compat",l_="@firebase/installations",c_="@firebase/installations-compat",u_="@firebase/messaging",d_="@firebase/messaging-compat",h_="@firebase/performance",f_="@firebase/performance-compat",p_="@firebase/remote-config",__="@firebase/remote-config-compat",m_="@firebase/storage",g_="@firebase/storage-compat",v_="@firebase/firestore",y_="@firebase/firestore-compat",w_="firebase",E_="10.11.0";/**
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
 */const sr="[DEFAULT]",b_={[ir]:"fire-core",[Jp]:"fire-core-compat",[Zp]:"fire-analytics",[Xp]:"fire-analytics-compat",[t_]:"fire-app-check",[e_]:"fire-app-check-compat",[n_]:"fire-auth",[i_]:"fire-auth-compat",[s_]:"fire-rtdb",[r_]:"fire-rtdb-compat",[o_]:"fire-fn",[a_]:"fire-fn-compat",[l_]:"fire-iid",[c_]:"fire-iid-compat",[u_]:"fire-fcm",[d_]:"fire-fcm-compat",[h_]:"fire-perf",[f_]:"fire-perf-compat",[p_]:"fire-rc",[__]:"fire-rc-compat",[m_]:"fire-gcs",[g_]:"fire-gcs-compat",[v_]:"fire-fst",[y_]:"fire-fst-compat","fire-js":"fire-js",[w_]:"fire-js-all"};/**
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
 */const Wi=new Map,I_=new Map,rr=new Map;function na(n,e){try{n.container.addComponent(e)}catch(t){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lt(n){const e=n.name;if(rr.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;rr.set(e,n);for(const t of Wi.values())na(t,n);for(const t of I_.values())na(t,n);return!0}function Zn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n.settings!==void 0}/**
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
 */const C_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},st=new nn("app","Firebase",C_);/**
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
 */class T_{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw st.create("app-deleted",{appName:this._name})}}/**
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
 */const rn=E_;function Yl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:sr,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw st.create("bad-app-name",{appName:String(s)});if(t||(t=Bl()),!t)throw st.create("no-options");const r=Wi.get(s);if(r){if($i(t,r.options)&&$i(i,r.config))return r;throw st.create("duplicate-app",{appName:s})}const o=new Dp(s);for(const l of rr.values())o.addComponent(l);const a=new T_(t,i,o);return Wi.set(s,a),a}function Fr(n=sr){const e=Wi.get(n);if(!e&&n===sr&&Bl())return Yl();if(!e)throw st.create("no-app",{appName:n});return e}function He(n,e,t){var i;let s=(i=b_[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(a.join(" "));return}lt(new je(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const S_="firebase-heartbeat-database",k_=1,Fn="firebase-heartbeat-store";let $s=null;function Ql(){return $s||($s=qp(S_,k_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Fn)}catch(t){console.warn(t)}}}}).catch(n=>{throw st.create("idb-open",{originalErrorMessage:n.message})})),$s}async function R_(n){try{const t=(await Ql()).transaction(Fn),i=await t.objectStore(Fn).get(Jl(n));return await t.done,i}catch(e){if(e instanceof ht)Ct.warn(e.message);else{const t=st.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(t.message)}}}async function ia(n,e){try{const i=(await Ql()).transaction(Fn,"readwrite");await i.objectStore(Fn).put(e,Jl(n)),await i.done}catch(t){if(t instanceof ht)Ct.warn(t.message);else{const i=st.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ct.warn(i.message)}}}function Jl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const P_=1024,A_=30*24*60*60*1e3;class N_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new D_(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sa();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=A_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sa(),{heartbeatsToSend:i,unsentEntries:s}=O_(this._heartbeatsCache.heartbeats),r=Mi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function sa(){return new Date().toISOString().substring(0,10)}function O_(n,e=P_){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ra(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ra(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class D_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mr()?fp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await R_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ia(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ia(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ra(n){return Mi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function x_(n){lt(new je("platform-logger",e=>new Yp(e),"PRIVATE")),lt(new je("heartbeat",e=>new N_(e),"PRIVATE")),He(ir,ta,n),He(ir,ta,"esm2017"),He("fire-js","")}x_("");var M_="firebase",L_="10.11.0";/**
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
 */He(M_,L_,"app");var oa={};const aa="@firebase/database",la="1.0.4";/**
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
 */let Xl="";function F_(n){Xl=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ee(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ln(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Oe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new U_(e)}}catch{}return new $_},bt=Zl("localStorage"),W_=Zl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new hs("@firebase/database"),H_=function(){let n=1;return function(){return n++}}(),ec=function(n){const e=Ip(n),t=new yp;t.update(e);const i=t.digest();return us.encodeByteArray(i)},ei=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ei.apply(null,i):typeof i=="object"?e+=ee(i):e+=i,e+=" "}return e};let Rn=null,ca=!0;const B_=function(n,e){g(!e,"Can't turn on custom loggers persistently."),Bt.logLevel=j.VERBOSE,Rn=Bt.log.bind(Bt)},se=function(...n){if(ca===!0&&(ca=!1,Rn===null&&W_.get("logging_enabled")===!0&&B_()),Rn){const e=ei.apply(null,n);Rn(e)}},ti=function(n){return function(...e){se(n,...e)}},or=function(...n){const e="FIREBASE INTERNAL ERROR: "+ei(...n);Bt.error(e)},ze=function(...n){const e=`FIREBASE FATAL ERROR: ${ei(...n)}`;throw Bt.error(e),new Error(e)},de=function(...n){const e="FIREBASE WARNING: "+ei(...n);Bt.warn(e)},V_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&de("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},j_=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Yt="[MIN_NAME]",Tt="[MAX_NAME]",At=function(n,e){if(n===e)return 0;if(n===Yt||e===Tt)return-1;if(e===Yt||n===Tt)return 1;{const t=ua(n),i=ua(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},z_=function(n,e){return n===e?0:n<e?-1:1},En=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ee(e))},Ur=function(n){if(typeof n!="object"||n===null)return ee(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ee(e[i]),t+=":",t+=Ur(n[e[i]]);return t+="}",t},tc=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function re(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const nc=function(n){g(!fs(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},q_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},G_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function K_(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Y_=new RegExp("^-?(0*)\\d{1,10}$"),Q_=-2147483648,J_=2147483647,ua=function(n){if(Y_.test(n)){const e=Number(n);if(e>=Q_&&e<=J_)return e}return null},on=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw de("Exception was thrown by user callback.",t),e},Math.floor(0))}},X_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Z_{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){de(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',de(e)}}class Si{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Si.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="5",ic="v",sc="s",rc="r",oc="f",ac=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lc="ls",cc="p",ar="ac",uc="websocket",dc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function tm(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function fc(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let i;if(e===uc)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===dc)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);tm(n)&&(t.ns=n.namespace);const s=[];return re(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.counters_={}}incrementCounter(e,t=1){Oe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return sp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws={},Hs={};function Wr(n){const e=n.toString();return Ws[e]||(Ws[e]=new nm),Ws[e]}function im(n,e){const t=n.toString();return Hs[t]||(Hs[t]=e()),Hs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&on(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="start",rm="close",om="pLPCommand",am="pRTLPCB",pc="id",_c="pw",mc="ser",lm="cb",cm="seg",um="ts",dm="d",hm="dframe",gc=1870,vc=30,fm=gc-vc,pm=25e3,_m=3e4;class $t{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ti(e),this.stats_=Wr(t),this.urlFn=l=>(this.appCheckToken&&(l[ar]=this.appCheckToken),fc(t,dc,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new sm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_m)),j_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hr((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===da)this.id=a,this.password=l;else if(o===rm)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[da]="t",i[mc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[lm]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ic]=$r,this.transportSessionId&&(i[sc]=this.transportSessionId),this.lastSessionId&&(i[lc]=this.lastSessionId),this.applicationId&&(i[cc]=this.applicationId),this.appCheckToken&&(i[ar]=this.appCheckToken),typeof location<"u"&&location.hostname&&ac.test(location.hostname)&&(i[rc]=oc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$t.forceAllow_=!0}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){return $t.forceAllow_?!0:!$t.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!q_()&&!G_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ul(t),s=tc(i,fm);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[hm]="t",i[pc]=e,i[_c]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ee(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Hr{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=H_(),window[om+this.uniqueCallbackIdentifier]=e,window[am+this.uniqueCallbackIdentifier]=t,this.myIFrame=Hr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){se("frame writing exception"),a.stack&&se(a.stack),se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||se("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pc]=this.myID,e[_c]=this.myPW,e[mc]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vc+i.length<=gc;){const o=this.pendingSegs.shift();i=i+"&"+cm+s+"="+o.seg+"&"+um+s+"="+o.ts+"&"+dm+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(pm)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=16384,gm=45e3;let Hi=null;typeof MozWebSocket<"u"?Hi=MozWebSocket:typeof WebSocket<"u"&&(Hi=WebSocket);class we{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ti(this.connId),this.stats_=Wr(t),this.connURL=we.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[ic]=$r,typeof location<"u"&&location.hostname&&ac.test(location.hostname)&&(o[rc]=oc),t&&(o[sc]=t),i&&(o[lc]=i),s&&(o[ar]=s),r&&(o[cc]=r),fc(e,uc,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bt.set("previous_websocket_failure",!0);try{let i;zl(),this.mySock=new Hi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){we.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Hi!==null&&!we.forceDisallow_}static previouslyFailed(){return bt.isInMemoryStorage||bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Ln(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=tc(t,mm);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gm))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}we.responsesRequiredToBeHealthy=2;we.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$t,we]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=we&&we.isAvailable();let i=t&&!we.previouslyFailed();if(e.webSocketOnly&&(t||de("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[we];else{const s=this.transports_=[];for(const r of Un.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Un.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Un.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=6e4,ym=5e3,wm=10*1024,Em=100*1024,Bs="t",ha="d",bm="s",fa="r",Im="e",pa="o",_a="a",ma="n",ga="p",Cm="h";class Tm{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ti("c:"+this.id+":"),this.transportManager_=new Un(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Pn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Em?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bs in e){const t=e[Bs];t===_a?this.upgradeIfSecondaryHealthy_():t===fa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===pa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=En("t",e),i=En("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ga,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_a,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ma,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=En("t",e),i=En("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=En(Bs,e);if(ha in e){const i=e[ha];if(t===Cm){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===ma){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===bm?this.onConnectionShutdown_(i):t===fa?this.onReset_(i):t===Im?or("Server Error: "+i):t===pa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):or("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$r!==i&&de("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Pn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ym))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ga,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends wc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bi}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=32,ya=768;class B{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function F(){return new B("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ct(n){return n.pieces_.length-n.pieceNum_}function z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new B(n.pieces_,e)}function Br(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Sm(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function $n(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ec(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new B(e,0)}function Y(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof B)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new B(t,0)}function M(n){return n.pieceNum_>=n.pieces_.length}function le(n,e){const t=x(n),i=x(e);if(t===null)return e;if(t===i)return le(z(n),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function km(n,e){const t=$n(n,0),i=$n(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=At(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Vr(n,e){if(ct(n)!==ct(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ge(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ct(n)>ct(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Rm{constructor(e,t){this.errorPrefix_=t,this.parts_=$n(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ds(this.parts_[i]);bc(this)}}function Pm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ds(e),bc(n)}function Am(n){const e=n.parts_.pop();n.byteLength_-=ds(e),n.parts_.length>0&&(n.byteLength_-=1)}function bc(n){if(n.byteLength_>ya)throw new Error(n.errorPrefix_+"has a key path longer than "+ya+" bytes ("+n.byteLength_+").");if(n.parts_.length>va)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+va+") or object contains a cycle "+yt(n))}function yt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends wc{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new jr}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=1e3,Nm=60*5*1e3,wa=30*1e3,Om=1.3,Dm=3e4,xm="server_kill",Ea=3;class Be extends yc{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Be.nextPersistentConnectionId_++,this.log_=ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bn,this.maxReconnectDelay_=Nm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!zl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(ee(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new he,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Be.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Oe(e,"w")){const i=Gt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();de(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=gp(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ee(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):or("Unrecognized action received from server: "+ee(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Dm&&(this.reconnectDelay_=bn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Om)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Be.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?se("getToken() completed but was canceled"):(se("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Tm(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{de(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(xm)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&de(d),l())}}}interrupt(e){se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fi(this.interruptReasons_)&&(this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Ur(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new B(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){se("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ea&&(this.reconnectDelay_=wa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){se("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ea&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Xl.replace(/\./g,"-")]=1,xr()?e["framework.cordova"]=1:jl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bi.getInstance().currentlyOnline();return Fi(this.interruptReasons_)&&e}}Be.nextPersistentConnectionId_=0;Be.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new L(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new L(Yt,e),s=new L(Yt,t);return this.compare(i,s)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class Ic extends ps{static get __EMPTY_NODE(){return wi}static set __EMPTY_NODE(e){wi=e}compare(e,t){return At(e.name,t.name)}isDefinedOn(e){throw tn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return L.MIN}maxPost(){return new L(Tt,wi)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,wi)}toString(){return".key"}}const Vt=new Ic;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ie{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ie.RED,this.left=s??ce.EMPTY_NODE,this.right=r??ce.EMPTY_NODE}copy(e,t,i,s,r){return new ie(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ce.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ce.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ie.RED=!0;ie.BLACK=!1;class Mm{copy(e,t,i,s,r){return this}insert(e,t,i){return new ie(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ce{constructor(e,t=ce.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ce(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ie.BLACK,null,null))}remove(e){return new ce(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ie.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ei(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ei(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ei(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ei(this.root_,null,this.comparator_,!0,e)}}ce.EMPTY_NODE=new Mm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n,e){return At(n.name,e.name)}function zr(n,e){return At(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr;function Fm(n){lr=n}const Cc=function(n){return typeof n=="number"?"number:"+nc(n):"string:"+n},Tc=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Oe(e,".sv"),"Priority must be a string or number.")}else g(n===lr||n.isEmpty(),"priority of unexpected type.");g(n===lr||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba;class ne{constructor(e,t=ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tc(this.priorityNode_)}static set __childrenNodeConstructor(e){ba=e}static get __childrenNodeConstructor(){return ba}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:x(e)===".priority"?this.priorityNode_:ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=x(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(g(i!==".priority"||ct(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=nc(this.value_):e+=this.value_,this.lazyHash_=ec(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ne.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ne.VALUE_TYPE_ORDER.indexOf(t),r=ne.VALUE_TYPE_ORDER.indexOf(i);return g(s>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc,kc;function Um(n){Sc=n}function $m(n){kc=n}class Wm extends ps{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?At(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Tt,new ne("[PRIORITY-POST]",kc))}makePost(e,t){const i=Sc(e);return new L(t,new ne("[PRIORITY-POST]",i))}toString(){return".priority"}}const Q=new Wm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=Math.log(2);class Bm{constructor(e){const t=r=>parseInt(Math.log(r)/Hm,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vi=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new ie(h,d.node,ie.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),_=s(f+1,c);return d=n[f],h=t?t(d):d,new ie(h,d.node,ie.BLACK,p,_)}},r=function(l){let c=null,u=null,d=n.length;const h=function(p,_){const b=d-p,v=d;d-=p;const S=s(b+1,v),k=n[b],C=t?t(k):k;f(new ie(C,k.node,_,null,S))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const _=l.nextBitIsOne(),b=Math.pow(2,l.count-(p+1));_?h(b,ie.BLACK):(h(b,ie.BLACK),h(b,ie.RED))}return u},o=new Bm(n.length),a=r(o);return new ce(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs;const Lt={};class Fe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return g(Lt&&Q,"ChildrenNode.ts has not been loaded"),Vs=Vs||new Fe({".priority":Lt},{".priority":Q}),Vs}get(e){const t=Gt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ce?t:null}hasIndex(e){return Oe(this.indexSet_,e.toString())}addIndex(e,t){g(e!==Vt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(L.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Vi(i,e.getCompare()):a=Lt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Fe(u,c)}addToIndexes(e,t){const i=Ui(this.indexes_,(s,r)=>{const o=Gt(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),s===Lt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(L.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Vi(a,o.getCompare())}else return Lt;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new L(e.name,a))),l.insert(e,e.node)}});return new Fe(i,this.indexSet_)}removeFromIndexes(e,t){const i=Ui(this.indexes_,s=>{if(s===Lt)return s;{const r=t.get(e.name);return r?s.remove(new L(e.name,r)):s}});return new Fe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In;class R{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Tc(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return In||(In=new R(new ce(zr),null,Fe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||In}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?In:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new L(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?In:this.priorityNode_;return new R(s,o,r)}}updateChild(e,t){const i=x(e);if(i===null)return t;{g(x(e)!==".priority"||ct(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(z(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(Q,(o,a)=>{t[o]=a.val(e),i++,r&&R.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cc(this.getPriority().val())+":"),this.forEachChild(Q,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":ec(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new L(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new L(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new L(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,L.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ni?-1:0}withIndex(e){if(e===Vt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Q),s=t.getIterator(Q);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vt?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Vm extends R{constructor(){super(new ce(zr),R.EMPTY_NODE,Fe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const ni=new Vm;Object.defineProperties(L,{MIN:{value:new L(Yt,R.EMPTY_NODE)},MAX:{value:new L(Tt,ni)}});Ic.__EMPTY_NODE=R.EMPTY_NODE;ne.__childrenNodeConstructor=R;Fm(ni);$m(ni);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=!0;function X(n,e=null){if(n===null)return R.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ne(t,X(e))}if(!(n instanceof Array)&&jm){const t=[];let i=!1;if(re(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=X(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new L(o,l)))}}),t.length===0)return R.EMPTY_NODE;const r=Vi(t,Lm,o=>o.name,zr);if(i){const o=Vi(t,Q.getCompare());return new R(r,X(e),new Fe({".priority":o},{".priority":Q}))}else return new R(r,X(e),Fe.Default)}else{let t=R.EMPTY_NODE;return re(n,(i,s)=>{if(Oe(n,i)&&i.substring(0,1)!=="."){const r=X(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(X(e))}}Um(X);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm extends ps{constructor(e){super(),this.indexPath_=e,g(!M(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?At(e.name,t.name):r}makePost(e,t){const i=X(e),s=R.EMPTY_NODE.updateChild(this.indexPath_,i);return new L(t,s)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,ni);return new L(Tt,e)}toString(){return $n(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends ps{compare(e,t){const i=e.node.compareTo(t.node);return i===0?At(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,t){const i=X(e);return new L(t,i)}toString(){return".value"}}const Gm=new qm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n){return{type:"value",snapshotNode:n}}function Qt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Wn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Hn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Km(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Wn(t,a)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qt(t,i)):o.trackChildChange(Hn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Q,(s,r)=>{t.hasChild(s)||i.trackChildChange(Wn(s,r))}),t.isLeafNode()||t.forEachChild(Q,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Hn(s,r,o))}else i.trackChildChange(Qt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.indexedFilter_=new qr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bn.getStartPost_(e),this.endPost_=Bn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new L(t,i))||(i=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=R.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(R.EMPTY_NODE);const r=this;return t.forEachChild(Q,(o,a)=>{r.matches(new L(o,a))||(s=s.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Bn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new L(t,i))||(i=R.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=R.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(R.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;g(a.numChildren()===this.limit_,"");const l=new L(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Hn(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Wn(t,d));const _=a.updateImmediateChild(t,R.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Qt(h.name,h.node)),_.updateImmediateChild(h.name,h.node)):_}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Wn(c.name,c.node)),r.trackChildChange(Qt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,R.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yt}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Q}copy(){const e=new Gr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qm(n){return n.loadsAllData()?new qr(n.getIndex()):n.hasLimit()?new Ym(n):new Bn(n)}function Ia(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Q?t="$priority":n.index_===Gm?t="$value":n.index_===Vt?t="$key":(g(n.index_ instanceof zm,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ee(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=ee(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+ee(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=ee(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+ee(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ca(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends yc{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ti("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ji.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ia(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Gt(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=ji.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ia(e._queryParams),i=e._path.toString(),s=new he;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ln(a.responseText)}catch{de("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&de("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return{value:null,children:new Map}}function an(n,e,t){if(M(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=x(e);n.children.has(i)||n.children.set(i,zi());const s=n.children.get(i);e=z(e),an(s,e,t)}}function cr(n,e){if(M(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Q,(i,s)=>{an(n,new B(i),s)}),cr(n,e)}}else if(n.children.size>0){const t=x(e);return e=z(e),n.children.has(t)&&cr(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function ur(n,e,t){n.value!==null?t(e,n.value):Xm(n,(i,s)=>{const r=new B(e.toString()+"/"+i);ur(s,r,t)})}function Xm(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&re(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=10*1e3,eg=30*1e3,tg=5*60*1e3;class ng{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Zm(e);const i=Ta+(eg-Ta)*Math.random();Pn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;re(e,(s,r)=>{r>0&&Oe(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Pn(this.reportStats_.bind(this),Math.floor(Math.random()*2*tg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ee||(Ee={}));function Kr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ee.ACK_USER_WRITE,this.source=Kr()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new B(e));return new qi(F(),t,this.revert)}}else return g(x(this.path)===e,"operationForChild called for unrelated child."),new qi(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t){this.source=e,this.path=t,this.type=Ee.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new Vn(this.source,F()):new Vn(this.source,z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ee.OVERWRITE}operationForChild(e){return M(this.path)?new St(this.source,F(),this.snap.getImmediateChild(e)):new St(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ee.MERGE}operationForChild(e){if(M(this.path)){const t=this.children.subtree(new B(e));return t.isEmpty()?null:t.value?new St(this.source,F(),t.value):new Jt(this.source,F(),t)}else return g(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jt(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sg(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Km(o.childName,o.snapshotNode))}),Cn(n,s,"child_removed",e,i,t),Cn(n,s,"child_added",e,i,t),Cn(n,s,"child_moved",r,i,t),Cn(n,s,"child_changed",e,i,t),Cn(n,s,"value",e,i,t),s}function Cn(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>og(n,a,l)),o.forEach(a=>{const l=rg(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function rg(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function og(n,e,t){if(e.childName==null||t.childName==null)throw tn("Should only compare child_ events.");const i=new L(e.childName,e.snapshotNode),s=new L(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n,e){return{eventCache:n,serverCache:e}}function An(n,e,t,i){return _s(new ut(e,t,i),n.serverCache)}function Pc(n,e,t,i){return _s(n.eventCache,new ut(e,t,i))}function Gi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function kt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js;const ag=()=>(js||(js=new ce(z_)),js);class q{constructor(e,t=ag()){this.value=e,this.children=t}static fromObject(e){let t=new q(null);return re(e,(i,s)=>{t=t.set(new B(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:F(),value:this.value};if(M(e))return null;{const i=x(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(z(e),t);return r!=null?{path:Y(new B(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const t=x(e),i=this.children.get(t);return i!==null?i.subtree(z(e)):new q(null)}}set(e,t){if(M(e))return new q(t,this.children);{const i=x(e),r=(this.children.get(i)||new q(null)).set(z(e),t),o=this.children.insert(i,r);return new q(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const t=x(e),i=this.children.get(t);if(i){const s=i.remove(z(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new q(null):new q(this.value,r)}else return this}}get(e){if(M(e))return this.value;{const t=x(e),i=this.children.get(t);return i?i.get(z(e)):null}}setTree(e,t){if(M(e))return t;{const i=x(e),r=(this.children.get(i)||new q(null)).setTree(z(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new q(this.value,o)}}fold(e){return this.fold_(F(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Y(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,F(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(M(e))return null;{const r=x(e),o=this.children.get(r);return o?o.findOnPath_(z(e),Y(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,F(),t)}foreachOnPath_(e,t,i){if(M(e))return this;{this.value&&i(t,this.value);const s=x(e),r=this.children.get(s);return r?r.foreachOnPath_(z(e),Y(t,s),i):new q(null)}}foreach(e){this.foreach_(F(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Y(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.writeTree_=e}static empty(){return new Ie(new q(null))}}function Nn(n,e,t){if(M(e))return new Ie(new q(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=le(s,e);return r=r.updateChild(o,t),new Ie(n.writeTree_.set(s,r))}else{const s=new q(t),r=n.writeTree_.setTree(e,s);return new Ie(r)}}}function dr(n,e,t){let i=n;return re(t,(s,r)=>{i=Nn(i,Y(e,s),r)}),i}function Sa(n,e){if(M(e))return Ie.empty();{const t=n.writeTree_.setTree(e,new q(null));return new Ie(t)}}function hr(n,e){return Nt(n,e)!=null}function Nt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(le(t.path,e)):null}function ka(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Q,(i,s)=>{e.push(new L(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new L(i,s.value))}),e}function rt(n,e){if(M(e))return n;{const t=Nt(n,e);return t!=null?new Ie(new q(t)):new Ie(n.writeTree_.subtree(e))}}function fr(n){return n.writeTree_.isEmpty()}function Xt(n,e){return Ac(F(),n.writeTree_,e)}function Ac(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Ac(Y(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Y(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n,e){return xc(e,n)}function lg(n,e,t,i,s){g(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Nn(n.visibleWrites,e,t)),n.lastWriteId=i}function cg(n,e,t,i){g(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=dr(n.visibleWrites,e,t),n.lastWriteId=i}function ug(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function dg(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&hg(a,i.path)?s=!1:ge(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return fg(n),!0;if(i.snap)n.visibleWrites=Sa(n.visibleWrites,i.path);else{const a=i.children;re(a,l=>{n.visibleWrites=Sa(n.visibleWrites,Y(i.path,l))})}return!0}else return!1}function hg(n,e){if(n.snap)return ge(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ge(Y(n.path,t),e))return!0;return!1}function fg(n){n.visibleWrites=Nc(n.allWrites,pg,F()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function pg(n){return n.visible}function Nc(n,e,t){let i=Ie.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)ge(t,o)?(a=le(t,o),i=Nn(i,a,r.snap)):ge(o,t)&&(a=le(o,t),i=Nn(i,F(),r.snap.getChild(a)));else if(r.children){if(ge(t,o))a=le(t,o),i=dr(i,a,r.children);else if(ge(o,t))if(a=le(o,t),M(a))i=dr(i,F(),r.children);else{const l=Gt(r.children,x(a));if(l){const c=l.getChild(z(a));i=Nn(i,F(),c)}}}else throw tn("WriteRecord should have .snap or .children")}}return i}function Oc(n,e,t,i,s){if(!i&&!s){const r=Nt(n.visibleWrites,e);if(r!=null)return r;{const o=rt(n.visibleWrites,e);if(fr(o))return t;if(t==null&&!hr(o,F()))return null;{const a=t||R.EMPTY_NODE;return Xt(o,a)}}}else{const r=rt(n.visibleWrites,e);if(!s&&fr(r))return t;if(!s&&t==null&&!hr(r,F()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ge(c.path,e)||ge(e,c.path))},a=Nc(n.allWrites,o,e),l=t||R.EMPTY_NODE;return Xt(a,l)}}}function _g(n,e,t){let i=R.EMPTY_NODE;const s=Nt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Q,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=rt(n.visibleWrites,e);return t.forEachChild(Q,(o,a)=>{const l=Xt(rt(r,new B(o)),a);i=i.updateImmediateChild(o,l)}),ka(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=rt(n.visibleWrites,e);return ka(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function mg(n,e,t,i,s){g(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Y(e,t);if(hr(n.visibleWrites,r))return null;{const o=rt(n.visibleWrites,r);return fr(o)?s.getChild(t):Xt(o,s.getChild(t))}}function gg(n,e,t,i){const s=Y(e,t),r=Nt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=rt(n.visibleWrites,s);return Xt(o,i.getNode().getImmediateChild(t))}else return null}function vg(n,e){return Nt(n.visibleWrites,e)}function yg(n,e,t,i,s,r,o){let a;const l=rt(n.visibleWrites,e),c=Nt(l,F());if(c!=null)a=c;else if(t!=null)a=Xt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function wg(){return{visibleWrites:Ie.empty(),allWrites:[],lastWriteId:-1}}function Ki(n,e,t,i){return Oc(n.writeTree,n.treePath,e,t,i)}function Jr(n,e){return _g(n.writeTree,n.treePath,e)}function Ra(n,e,t,i){return mg(n.writeTree,n.treePath,e,t,i)}function Yi(n,e){return vg(n.writeTree,Y(n.treePath,e))}function Eg(n,e,t,i,s,r){return yg(n.writeTree,n.treePath,e,t,i,s,r)}function Xr(n,e,t){return gg(n.writeTree,n.treePath,e,t)}function Dc(n,e){return xc(Y(n.treePath,e),n.writeTree)}function xc(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Hn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Wn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Qt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Hn(i,e.snapshotNode,s.oldSnap));else throw tn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Mc=new Ig;class Zr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ut(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kt(this.viewCache_),r=Eg(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n){return{filter:n}}function Tg(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Sg(n,e,t,i,s){const r=new bg;let o,a;if(t.type===Ee.OVERWRITE){const c=t;c.source.fromUser?o=pr(n,e,c.path,c.snap,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!M(c.path),o=Qi(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Ee.MERGE){const c=t;c.source.fromUser?o=Rg(n,e,c.path,c.children,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=_r(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Ee.ACK_USER_WRITE){const c=t;c.revert?o=Ng(n,e,c.path,i,s,r):o=Pg(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Ee.LISTEN_COMPLETE)o=Ag(n,e,t.path,i,r);else throw tn("Unknown operation type: "+t.type);const l=r.getChanges();return kg(e,o,l),{viewCache:o,changes:l}}function kg(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Gi(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Rc(Gi(e)))}}function Lc(n,e,t,i,s,r){const o=e.eventCache;if(Yi(i,t)!=null)return e;{let a,l;if(M(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kt(e),u=c instanceof R?c:R.EMPTY_NODE,d=Jr(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Ki(i,kt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=x(t);if(c===".priority"){g(ct(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Ra(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=z(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Ra(i,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Xr(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return An(e,a,o.isFullyInitialized()||M(t),n.filter.filtersNodes())}}function Qi(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(M(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=x(t);if(!l.isCompleteForPath(t)&&ct(t)>1)return e;const p=z(t),b=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),f,b,p,Mc,null)}const d=Pc(e,c,l.isFullyInitialized()||M(t),u.filtersNodes()),h=new Zr(s,d,r);return Lc(n,d,t,s,h,a)}function pr(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Zr(s,e,r);if(M(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=An(e,c,!0,n.filter.filtersNodes());else{const d=x(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=An(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=z(t),f=a.getNode().getImmediateChild(d);let p;if(M(h))p=i;else{const _=u.getCompleteChild(d);_!=null?Br(h)===".priority"&&_.getChild(Ec(h)).isEmpty()?p=_:p=_.updateChild(h,i):p=R.EMPTY_NODE}if(f.equals(p))l=e;else{const _=n.filter.updateChild(a.getNode(),d,p,h,u,o);l=An(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Pa(n,e){return n.eventCache.isCompleteForChild(e)}function Rg(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Y(t,l);Pa(e,x(u))&&(a=pr(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Y(t,l);Pa(e,x(u))||(a=pr(n,a,u,c,s,r,o))}),a}function Aa(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function _r(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;M(t)?c=i:c=new q(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=Aa(n,f,h);l=Qi(n,l,new B(d),p,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),_=Aa(n,p,h);l=Qi(n,l,new B(d),_,s,r,o,a)}}),l}function Pg(n,e,t,i,s,r,o){if(Yi(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(M(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Qi(n,e,t,l.getNode().getChild(t),s,r,a,o);if(M(t)){let c=new q(null);return l.getNode().forEachChild(Vt,(u,d)=>{c=c.set(new B(u),d)}),_r(n,e,t,c,s,r,a,o)}else return e}else{let c=new q(null);return i.foreach((u,d)=>{const h=Y(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),_r(n,e,t,c,s,r,a,o)}}function Ag(n,e,t,i,s){const r=e.serverCache,o=Pc(e,r.getNode(),r.isFullyInitialized()||M(t),r.isFiltered());return Lc(n,o,t,i,Mc,s)}function Ng(n,e,t,i,s,r){let o;if(Yi(i,t)!=null)return e;{const a=new Zr(i,e,s),l=e.eventCache.getNode();let c;if(M(t)||x(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ki(i,kt(e));else{const d=e.serverCache.getNode();g(d instanceof R,"serverChildren would be complete if leaf node"),u=Jr(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=x(t);let d=Xr(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,z(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,R.EMPTY_NODE,z(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ki(i,kt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Yi(i,F())!=null,An(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new qr(i.getIndex()),r=Qm(i);this.processor_=Cg(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(R.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(R.EMPTY_NODE,a.getNode(),null),u=new ut(l,o.isFullyInitialized(),s.filtersNodes()),d=new ut(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=_s(d,u),this.eventGenerator_=new ig(this.query_)}get query(){return this.query_}}function Dg(n){return n.viewCache_.serverCache.getNode()}function xg(n){return Gi(n.viewCache_)}function Mg(n,e){const t=kt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!M(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function Na(n){return n.eventRegistrations_.length===0}function Lg(n,e){n.eventRegistrations_.push(e)}function Oa(n,e,t){const i=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Da(n,e,t,i){e.type===Ee.MERGE&&e.source.queryId!==null&&(g(kt(n.viewCache_),"We should always have a full cache before handling merges"),g(Gi(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Sg(n.processor_,s,e,t,i);return Tg(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Fc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Fg(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Q,(r,o)=>{i.push(Qt(r,o))}),t.isFullyInitialized()&&i.push(Rc(t.getNode())),Fc(n,i,t.getNode(),e)}function Fc(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return sg(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;class Uc{constructor(){this.views=new Map}}function Ug(n){g(!Ji,"__referenceConstructor has already been defined"),Ji=n}function $g(){return g(Ji,"Reference.ts has not been loaded"),Ji}function Wg(n){return n.views.size===0}function eo(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return g(r!=null,"SyncTree gave us an op for an invalid query."),Da(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Da(o,e,t,i));return r}}function $c(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ki(t,s?i:null),l=!1;a?l=!0:i instanceof R?(a=Jr(t,i),l=!1):(a=R.EMPTY_NODE,l=!1);const c=_s(new ut(a,l,!1),new ut(i,s,!1));return new Og(e,c)}return o}function Hg(n,e,t,i,s,r){const o=$c(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Lg(o,t),Fg(o,t)}function Bg(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=dt(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Oa(c,t,i)),Na(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Oa(l,t,i)),Na(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!dt(n)&&r.push(new($g())(e._repo,e._path)),{removed:r,events:o}}function Wc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ot(n,e){let t=null;for(const i of n.views.values())t=t||Mg(i,e);return t}function Hc(n,e){if(e._queryParams.loadsAllData())return gs(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Bc(n,e){return Hc(n,e)!=null}function dt(n){return gs(n)!=null}function gs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi;function Vg(n){g(!Xi,"__referenceConstructor has already been defined"),Xi=n}function jg(){return g(Xi,"Reference.ts has not been loaded"),Xi}let zg=1;class xa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=wg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qg(n,e,t,i,s){return lg(n.pendingWriteTree_,e,t,i,s),s?ln(n,new St(Kr(),e,t)):[]}function Gg(n,e,t,i){cg(n.pendingWriteTree_,e,t,i);const s=q.fromObject(t);return ln(n,new Jt(Kr(),e,s))}function It(n,e,t=!1){const i=ug(n.pendingWriteTree_,e);if(dg(n.pendingWriteTree_,e)){let r=new q(null);return i.snap!=null?r=r.set(F(),!0):re(i.children,o=>{r=r.set(new B(o),!0)}),ln(n,new qi(i.path,r,t))}else return[]}function ii(n,e,t){return ln(n,new St(Yr(),e,t))}function Kg(n,e,t){const i=q.fromObject(t);return ln(n,new Jt(Yr(),e,i))}function Yg(n,e){return ln(n,new Vn(Yr(),e))}function Qg(n,e,t){const i=to(n,t);if(i){const s=no(i),r=s.path,o=s.queryId,a=le(r,e),l=new Vn(Qr(o),a);return io(n,r,l)}else return[]}function Zi(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Bc(o,e))){const l=Bg(o,e,t,i);Wg(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>dt(f));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=Zg(h);for(let p=0;p<f.length;++p){const _=f[p],b=_.query,v=Gc(n,_);n.listenProvider_.startListening(On(b),jn(n,b),v.hashFn,v.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(On(e),null):c.forEach(h=>{const f=n.queryToTagMap.get(vs(h));n.listenProvider_.stopListening(On(h),f)}))}ev(n,c)}return a}function Vc(n,e,t,i){const s=to(n,i);if(s!=null){const r=no(s),o=r.path,a=r.queryId,l=le(o,e),c=new St(Qr(a),l,t);return io(n,o,c)}else return[]}function Jg(n,e,t,i){const s=to(n,i);if(s){const r=no(s),o=r.path,a=r.queryId,l=le(o,e),c=q.fromObject(t),u=new Jt(Qr(a),l,c);return io(n,o,u)}else return[]}function mr(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,f)=>{const p=le(h,s);r=r||ot(f,p),o=o||dt(f)});let a=n.syncPointTree_.get(s);a?(o=o||dt(a),r=r||ot(a,F())):(a=new Uc,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=R.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const _=ot(p,F());_&&(r=r.updateImmediateChild(f,_))}));const c=Bc(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=vs(e);g(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=tv();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=ms(n.pendingWriteTree_,s);let d=Hg(a,e,t,u,r,l);if(!c&&!o&&!i){const h=Hc(a,e);d=d.concat(nv(n,e,h))}return d}function jc(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=le(o,e),c=ot(a,l);if(c)return c});return Oc(s,e,r,t,!0)}function Xg(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=le(c,t);i=i||ot(u,d)});let s=n.syncPointTree_.get(t);s?i=i||ot(s,F()):(s=new Uc,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new ut(i,!0,!1):null,a=ms(n.pendingWriteTree_,e._path),l=$c(s,e,a,r?o.getNode():R.EMPTY_NODE,r);return xg(l)}function ln(n,e){return zc(e,n.syncPointTree_,null,ms(n.pendingWriteTree_,F()))}function zc(n,e,t,i){if(M(n.path))return qc(n,e,t,i);{const s=e.get(F());s!=null&&(t=ot(s,F()));let r=[];const o=x(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=Dc(i,o);r=r.concat(zc(a,l,null,u))}return s&&(r=r.concat(eo(s,n,i,t))),r}}function qc(n,e,t,i){const s=e.get(F());s!=null&&(t=ot(s,F()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=Dc(i,o),u=n.operationForChild(o);u&&(r=r.concat(qc(u,a,null,c)))}),s&&(r=r.concat(eo(s,n,i,t))),r}function Gc(n,e){const t=e.query,i=jn(n,t);return{hashFn:()=>(Dg(e)||R.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Qg(n,t._path,i):Yg(n,t._path);{const r=K_(s,t);return Zi(n,t,null,r)}}}}function jn(n,e){const t=vs(e);return n.queryToTagMap.get(t)}function vs(n){return n._path.toString()+"$"+n._queryIdentifier}function to(n,e){return n.tagToQueryMap.get(e)}function no(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new B(n.substr(0,e))}}function io(n,e,t){const i=n.syncPointTree_.get(e);g(i,"Missing sync point for query tag that we're tracking");const s=ms(n.pendingWriteTree_,e);return eo(i,t,s,null)}function Zg(n){return n.fold((e,t,i)=>{if(t&&dt(t))return[gs(t)];{let s=[];return t&&(s=Wc(t)),re(i,(r,o)=>{s=s.concat(o)}),s}})}function On(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(jg())(n._repo,n._path):n}function ev(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=vs(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function tv(){return zg++}function nv(n,e,t){const i=e._path,s=jn(n,e),r=Gc(n,t),o=n.listenProvider_.startListening(On(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)g(!dt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!M(c)&&u&&dt(u))return[gs(u).query];{let h=[];return u&&(h=h.concat(Wc(u).map(f=>f.query))),re(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(On(u),jn(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new so(t)}node(){return this.node_}}class ro{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Y(this.path_,e);return new ro(this.syncTree_,t)}node(){return jc(this.syncTree_,this.path_)}}const iv=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ma=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return sv(n[".sv"],e,t);if(typeof n[".sv"]=="object")return rv(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},sv=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},rv=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&g(!1,"Unexpected increment value: "+i);const s=e.node();if(g(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Kc=function(n,e,t,i){return oo(e,new ro(t,n),i)},ov=function(n,e,t){return oo(n,new so(e),t)};function oo(n,e,t){const i=n.getPriority().val(),s=Ma(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ma(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ne(a,X(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ne(s))),o.forEachChild(Q,(a,l)=>{const c=oo(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function lo(n,e){let t=e instanceof B?e:new B(e),i=n,s=x(t);for(;s!==null;){const r=Gt(i.node.children,s)||{children:{},childCount:0};i=new ao(s,i,r),t=z(t),s=x(t)}return i}function cn(n){return n.node.value}function Yc(n,e){n.node.value=e,gr(n)}function Qc(n){return n.node.childCount>0}function av(n){return cn(n)===void 0&&!Qc(n)}function ys(n,e){re(n.node.children,(t,i)=>{e(new ao(t,n,i))})}function Jc(n,e,t,i){t&&!i&&e(n),ys(n,s=>{Jc(s,e,!0,i)}),t&&i&&e(n)}function lv(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function si(n){return new B(n.parent===null?n.name:si(n.parent)+"/"+n.name)}function gr(n){n.parent!==null&&cv(n.parent,n.name,n)}function cv(n,e,t){const i=av(t),s=Oe(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,gr(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,gr(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=/[\[\].#$\/\u0000-\u001F\u007F]/,dv=/[\[\].#$\u0000-\u001F\u007F]/,zs=10*1024*1024,co=function(n){return typeof n=="string"&&n.length!==0&&!uv.test(n)},Xc=function(n){return typeof n=="string"&&n.length!==0&&!dv.test(n)},hv=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xc(n)},Zc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!fs(n)||n&&typeof n=="object"&&Oe(n,".sv")},La=function(n,e,t,i){ws(Kt(n,"value"),e,t)},ws=function(n,e,t){const i=t instanceof B?new Rm(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+yt(i));if(typeof e=="function")throw new Error(n+"contains a function "+yt(i)+" with contents = "+e.toString());if(fs(e))throw new Error(n+"contains "+e.toString()+" "+yt(i));if(typeof e=="string"&&e.length>zs/3&&ds(e)>zs)throw new Error(n+"contains a string greater than "+zs+" utf8 bytes "+yt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(re(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!co(o)))throw new Error(n+" contains an invalid key ("+o+") "+yt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pm(i,o),ws(n,a,i),Am(i)}),s&&r)throw new Error(n+' contains ".value" child '+yt(i)+" in addition to actual children.")}},fv=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=$n(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!co(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(km);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&ge(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},eu=function(n,e,t,i){const s=Kt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];re(e,(o,a)=>{const l=new B(o);if(ws(s,a,Y(t,l)),Br(l)===".priority"&&!Zc(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),fv(s,r)},pv=function(n,e,t){if(fs(e))throw new Error(Kt(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Zc(e))throw new Error(Kt(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},tu=function(n,e,t,i){if(!Xc(t))throw new Error(Kt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_v=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tu(n,e,t)},bi=function(n,e){if(x(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},mv=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!co(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!hv(t))throw new Error(Kt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uo(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Vr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function nu(n,e,t){uo(n,t),iu(n,i=>Vr(i,e))}function Ne(n,e,t){uo(n,t),iu(n,i=>ge(i,e)||ge(e,i))}function iu(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(vv(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function vv(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Rn&&se("event: "+t.toString()),on(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="repo_interrupt",wv=25;class Ev{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zi(),this.transactionQueueTree_=new ao,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bv(n,e,t){if(n.stats_=Wr(n.repoInfo_),n.forceRestClient_||X_())n.server_=new ji(n.repoInfo_,(i,s,r,o)=>{Fa(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ua(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ee(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Be(n.repoInfo_,e,(i,s,r,o)=>{Fa(n,i,s,r,o)},i=>{Ua(n,i)},i=>{Cv(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=im(n.repoInfo_,()=>new ng(n.stats_,n.server_)),n.infoData_=new Jm,n.infoSyncTree_=new xa({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=ii(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fo(n,"connected",!1),n.serverSyncTree_=new xa({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Ne(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Iv(n){const t=n.infoData_.getNode(new B(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ho(n){return iv({timestamp:Iv(n)})}function Fa(n,e,t,i,s){n.dataUpdateCount++;const r=new B(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Ui(t,c=>X(c));o=Jg(n.serverSyncTree_,r,l,s)}else{const l=X(t);o=Vc(n.serverSyncTree_,r,l,s)}else if(i){const l=Ui(t,c=>X(c));o=Kg(n.serverSyncTree_,r,l)}else{const l=X(t);o=ii(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=zn(n,r)),Ne(n.eventQueue_,a,o)}function Ua(n,e){fo(n,"connected",e),e===!1&&kv(n)}function Cv(n,e){re(e,(t,i)=>{fo(n,t,i)})}function fo(n,e,t){const i=new B("/.info/"+e),s=X(t);n.infoData_.updateSnapshot(i,s);const r=ii(n.infoSyncTree_,i,s);Ne(n.eventQueue_,i,r)}function su(n){return n.nextWriteId_++}function Tv(n,e,t){const i=Xg(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=X(s).withIndex(e._queryParams.getIndex());mr(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=ii(n.serverSyncTree_,e._path,r);else{const a=jn(n.serverSyncTree_,e);o=Vc(n.serverSyncTree_,e._path,r,a)}return Ne(n.eventQueue_,e._path,o),Zi(n.serverSyncTree_,e,t,null,!0),r},s=>(Es(n,"get for query "+ee(e)+" failed: "+s),Promise.reject(new Error(s))))}function Sv(n,e,t,i){Es(n,"update",{path:e.toString(),value:t});let s=!0;const r=ho(n),o={};if(re(t,(a,l)=>{s=!1,o[a]=Kc(Y(e,a),X(l),n.serverSyncTree_,r)}),s)se("update() called with empty data.  Don't do anything."),Rt(n,i,"ok",void 0);else{const a=su(n),l=Gg(n.serverSyncTree_,e,o,a);uo(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,u)=>{const d=c==="ok";d||de("update at "+e+" failed: "+c);const h=It(n.serverSyncTree_,a,!d),f=h.length>0?zn(n,e):e;Ne(n.eventQueue_,f,h),Rt(n,i,c,u)}),re(t,c=>{const u=uu(n,Y(e,c));zn(n,u)}),Ne(n.eventQueue_,e,[])}}function kv(n){Es(n,"onDisconnectEvents");const e=ho(n),t=zi();ur(n.onDisconnect_,F(),(s,r)=>{const o=Kc(s,r,n.serverSyncTree_,e);an(t,s,o)});let i=[];ur(t,F(),(s,r)=>{i=i.concat(ii(n.serverSyncTree_,s,r));const o=uu(n,s);zn(n,o)}),n.onDisconnect_=zi(),Ne(n.eventQueue_,F(),i)}function Rv(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&cr(n.onDisconnect_,e),Rt(n,t,i,s)})}function $a(n,e,t,i){const s=X(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&an(n.onDisconnect_,e,s),Rt(n,i,r,o)})}function Pv(n,e,t,i,s){const r=X(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&an(n.onDisconnect_,e,r),Rt(n,s,o,a)})}function Av(n,e,t,i){if(Fi(t)){se("onDisconnect().update() called with empty data.  Don't do anything."),Rt(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&re(t,(o,a)=>{const l=X(a);an(n.onDisconnect_,Y(e,o),l)}),Rt(n,i,s,r)})}function Nv(n,e,t){let i;x(e._path)===".info"?i=mr(n.infoSyncTree_,e,t):i=mr(n.serverSyncTree_,e,t),nu(n.eventQueue_,e._path,i)}function Ov(n,e,t){let i;x(e._path)===".info"?i=Zi(n.infoSyncTree_,e,t):i=Zi(n.serverSyncTree_,e,t),nu(n.eventQueue_,e._path,i)}function ru(n){n.persistentConnection_&&n.persistentConnection_.interrupt(yv)}function Es(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),se(t,...e)}function Rt(n,e,t,i){e&&on(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function ou(n,e,t){return jc(n.serverSyncTree_,e,t)||R.EMPTY_NODE}function po(n,e=n.transactionQueueTree_){if(e||bs(n,e),cn(e)){const t=lu(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Dv(n,si(e),t)}else Qc(e)&&ys(e,t=>{po(n,t)})}function Dv(n,e,t){const i=t.map(c=>c.currentWriteId),s=ou(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=le(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Es(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(It(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();bs(n,lo(n.transactionQueueTree_,e)),po(n,n.transactionQueueTree_),Ne(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)on(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{de("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}zn(n,e)}},o)}function zn(n,e){const t=au(n,e),i=si(t),s=lu(n,t);return xv(n,s,i),i}function xv(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=le(t,l.path);let u=!1,d;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(It(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=wv)u=!0,d="maxretry",s=s.concat(It(n.serverSyncTree_,l.currentWriteId,!0));else{const h=ou(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){ws("transaction failed: Data returned ",f,l.path);let p=X(f);typeof f=="object"&&f!=null&&Oe(f,".priority")||(p=p.updatePriority(h.getPriority()));const b=l.currentWriteId,v=ho(n),S=ov(p,h,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=S,l.currentWriteId=su(n),o.splice(o.indexOf(b),1),s=s.concat(qg(n.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(It(n.serverSyncTree_,b,!0))}else u=!0,d="nodata",s=s.concat(It(n.serverSyncTree_,l.currentWriteId,!0))}Ne(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}bs(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)on(i[a]);po(n,n.transactionQueueTree_)}function au(n,e){let t,i=n.transactionQueueTree_;for(t=x(e);t!==null&&cn(i)===void 0;)i=lo(i,t),e=z(e),t=x(e);return i}function lu(n,e){const t=[];return cu(n,e,t),t.sort((i,s)=>i.order-s.order),t}function cu(n,e,t){const i=cn(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);ys(e,s=>{cu(n,s,t)})}function bs(n,e){const t=cn(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Yc(e,t.length>0?t:void 0)}ys(e,i=>{bs(n,i)})}function uu(n,e){const t=si(au(n,e)),i=lo(n.transactionQueueTree_,e);return lv(i,s=>{qs(n,s)}),qs(n,i),Jc(i,s=>{qs(n,s)}),t}function qs(n,e){const t=cn(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(It(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Yc(e,void 0):t.length=r+1,Ne(n.eventQueue_,si(e),s);for(let o=0;o<i.length;o++)on(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Lv(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):de(`Invalid query segment '${t}' in query '${n}'`)}return e}const Wa=function(n,e){const t=Fv(n),i=t.namespace;t.domain==="firebase.com"&&ze(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ze("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||V_();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new hc(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new B(t.pathString)}},Fv=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=Mv(n.substring(u,d)));const h=Lv(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ee(this.snapshot.exportVal())}}class $v{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Wv{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new he;return Rv(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){bi("OnDisconnect.remove",this._path);const e=new he;return $a(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){bi("OnDisconnect.set",this._path),La("OnDisconnect.set",e,this._path);const t=new he;return $a(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){bi("OnDisconnect.setWithPriority",this._path),La("OnDisconnect.setWithPriority",e,this._path),pv("OnDisconnect.setWithPriority",t);const i=new he;return Pv(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){bi("OnDisconnect.update",this._path),eu("OnDisconnect.update",e,this._path);const t=new he;return Av(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class _o{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return M(this._path)?null:Br(this._path)}get ref(){return new Ye(this._repo,this._path)}get _queryIdentifier(){const e=Ca(this._queryParams),t=Ur(e);return t==="{}"?"default":t}get _queryObject(){return Ca(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof _o))return!1;const t=this._repo===e._repo,i=Vr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sm(this._path)}}class Ye extends _o{constructor(e,t){super(e,t,new Gr,!1)}get parent(){const e=Ec(this._path);return e===null?null:new Ye(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new B(e),i=vr(this.ref,e);return new qn(this._node.getChild(t),i,Q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new qn(s,vr(this.ref,i),Q)))}hasChild(e){const t=new B(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Gs(n,e){return n=oe(n),n._checkNotDeleted("ref"),e!==void 0?vr(n._root,e):n._root}function vr(n,e){return n=oe(n),x(n._path)===null?_v("child","path",e):tu("child","path",e),new Ye(n._repo,Y(n._path,e))}function Hv(n){return n=oe(n),new Wv(n._repo,n._path)}function Bv(n,e){eu("update",e,n._path);const t=new he;return Sv(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Ha(n){n=oe(n);const e=new du(()=>{}),t=new Is(e);return Tv(n._repo,n,t).then(i=>new qn(i,new Ye(n._repo,n._path),n._queryParams.getIndex()))}class Is{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Uv("value",this,new qn(e.snapshotNode,new Ye(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new $v(this,e,t):null}matches(e){return e instanceof Is?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Vv(n,e,t,i,s){const r=new du(t,void 0),o=new Is(r);return Nv(n._repo,n,o),()=>Ov(n._repo,n,o)}function jv(n,e,t,i){return Vv(n,"value",e)}Ug(Ye);Vg(Ye);/**
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
 */const zv="FIREBASE_DATABASE_EMULATOR_HOST",yr={};let qv=!1;function Gv(n,e,t,i){n.repoInfo_=new hc(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Kv(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ze("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),se("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Wa(r,s),a=o.repoInfo,l;typeof process<"u"&&oa&&(l=oa[zv]),l?(r=`http://${l}?ns=${a.namespace}`,o=Wa(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new em(n.name,n.options,e);mv("Invalid Firebase Database URL",o),M(o.path)||ze("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Qv(a,n,c,new Z_(n.name,t));return new Jv(u,n)}function Yv(n,e){const t=yr[e];(!t||t[n.key]!==n)&&ze(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ru(n),delete t[n.key]}function Qv(n,e,t,i){let s=yr[e.name];s||(s={},yr[e.name]=s);let r=s[n.toURLString()];return r&&ze("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ev(n,qv,t,i),s[n.toURLString()]=r,r}class Jv{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ye(this._repo,F())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Yv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ze("Cannot call "+e+" on a deleted database.")}}function Xv(n=Fr(),e){const t=Zn(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=cp("database");i&&Zv(t,...i)}return t}function Zv(n,e,t,i={}){n=oe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&ze("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ze('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Si(Si.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:up(i.mockUserToken,n.app.options.projectId);r=new Si(o)}Gv(s,e,t,r)}function Ba(n){n=oe(n),n._checkNotDeleted("goOffline"),ru(n._repo)}/**
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
 */function ey(n){F_(rn),lt(new je("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Kv(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),He(aa,la,n),He(aa,la,"esm2017")}/**
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
 */const ty={".sv":"timestamp"};function Va(){return ty}function Ks(n){return{".sv":{increment:n}}}Be.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Be.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ey();function mo(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function hu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ny=hu,fu=new nn("auth","Firebase",hu());/**
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
 */const es=new hs("@firebase/auth");function iy(n,...e){es.logLevel<=j.WARN&&es.warn(`Auth (${rn}): ${n}`,...e)}function ki(n,...e){es.logLevel<=j.ERROR&&es.error(`Auth (${rn}): ${n}`,...e)}/**
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
 */function Ce(n,...e){throw go(n,...e)}function Re(n,...e){return go(n,...e)}function pu(n,e,t){const i=Object.assign(Object.assign({},ny()),{[e]:t});return new nn("auth","Firebase",i).create(e,{appName:n.name})}function at(n){return pu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function go(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return fu.create(n,...e)}function P(n,e,...t){if(!n)throw go(e,...t)}function Ue(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ki(e),new Error(e)}function qe(n,e){n||Ue(e)}/**
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
 */function wr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function sy(){return ja()==="http:"||ja()==="https:"}function ja(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ry(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sy()||dp()||"connection"in navigator)?navigator.onLine:!0}function oy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ri{constructor(e,t){this.shortDelay=e,this.longDelay=t,qe(t>e,"Short delay should be less than long delay!"),this.isMobile=xr()||jl()}get(){return ry()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vo(n,e){qe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class _u{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ay={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ly=new ri(3e4,6e4);function Ot(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ft(n,e,t,i,s={}){return mu(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=sn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),_u.fetch()(gu(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function mu(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},ay),e);try{const s=new uy(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ii(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ii(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ii(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pu(n,u,c);Ce(n,u)}}catch(s){if(s instanceof ht)throw s;Ce(n,"network-request-failed",{message:String(s)})}}async function Cs(n,e,t,i,s={}){const r=await ft(n,e,t,i,s);return"mfaPendingCredential"in r&&Ce(n,"multi-factor-auth-required",{_serverResponse:r}),r}function gu(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?vo(n.config,s):`${n.config.apiScheme}://${s}`}function cy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Re(this.auth,"network-request-failed")),ly.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ii(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Re(n,e,i);return s.customData._tokenResponse=t,s}function za(n){return n!==void 0&&n.enterprise!==void 0}class dy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function hy(n,e){return ft(n,"GET","/v2/recaptchaConfig",Ot(n,e))}/**
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
 */async function fy(n,e){return ft(n,"POST","/v1/accounts:delete",e)}async function vu(n,e){return ft(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Dn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function py(n,e=!1){const t=oe(n),i=await t.getIdToken(e),s=yo(i);P(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Dn(Ys(s.auth_time)),issuedAtTime:Dn(Ys(s.iat)),expirationTime:Dn(Ys(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ys(n){return Number(n)*1e3}function yo(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ki("JWT malformed, contained fewer than 3 sections"),null;try{const s=Li(t);return s?JSON.parse(s):(ki("Failed to decode base64 JWT payload"),null)}catch(s){return ki("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qa(n){const e=yo(n);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ht&&_y(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function _y({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class my{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Er{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dn(this.lastLoginAt),this.creationTime=Dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ts(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Gn(n,vu(t,{idToken:i}));P(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?yu(r.providerUserInfo):[],a=vy(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Er(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function gy(n){const e=oe(n);await ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vy(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function yu(n){return n.map(e=>{var{providerId:t}=e,i=mo(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function yy(n,e){const t=await mu(n,{},async()=>{const i=sn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=gu(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_u.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wy(n,e){return ft(n,"POST","/v2/accounts:revokeToken",Ot(n,e))}/**
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
 */class jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){P(e.length!==0,"internal-error");const t=qa(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await yy(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new jt;return i&&(P(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(P(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(P(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jt,this.toJSON())}_performRefresh(){return Ue("not implemented")}}/**
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
 */function Je(n,e){P(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $e{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=mo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new my(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Er(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return py(this,e)}reload(){return gy(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $e(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ts(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await Gn(this,fy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=t.createdAt)!==null&&c!==void 0?c:void 0,S=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:C,isAnonymous:m,providerData:T,stsTokenManager:I}=t;P(k&&I,e,"internal-error");const N=jt.fromJSON(this.name,I);P(typeof k=="string",e,"internal-error"),Je(d,e.name),Je(h,e.name),P(typeof C=="boolean",e,"internal-error"),P(typeof m=="boolean",e,"internal-error"),Je(f,e.name),Je(p,e.name),Je(_,e.name),Je(b,e.name),Je(v,e.name),Je(S,e.name);const K=new $e({uid:k,auth:e,email:h,emailVerified:C,displayName:d,isAnonymous:m,photoURL:p,phoneNumber:f,tenantId:_,stsTokenManager:N,createdAt:v,lastLoginAt:S});return T&&Array.isArray(T)&&(K.providerData=T.map(O=>Object.assign({},O))),b&&(K._redirectEventId=b),K}static async _fromIdTokenResponse(e,t,i=!1){const s=new jt;s.updateFromServerResponse(t);const r=new $e({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ts(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];P(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?yu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new jt;a.updateFromIdToken(i);const l=new $e({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Er(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Ga=new Map;function We(n){qe(n instanceof Function,"Expected a class definition");let e=Ga.get(n);return e?(qe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ga.set(n,e),e)}/**
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
 */class wu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wu.type="NONE";const Ka=wu;/**
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
 */function Ri(n,e,t){return`firebase:${n}:${e}:${t}`}class zt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ri(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ri("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$e._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new zt(We(Ka),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||We(Ka);const o=Ri(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=$e._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new zt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new zt(r,e,i))}}/**
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
 */function Ya(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tu(e))return"Blackberry";if(Su(e))return"Webos";if(wo(e))return"Safari";if((e.includes("chrome/")||bu(e))&&!e.includes("edge/"))return"Chrome";if(Cu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Eu(n=ae()){return/firefox\//i.test(n)}function wo(n=ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bu(n=ae()){return/crios\//i.test(n)}function Iu(n=ae()){return/iemobile/i.test(n)}function Cu(n=ae()){return/android/i.test(n)}function Tu(n=ae()){return/blackberry/i.test(n)}function Su(n=ae()){return/webos/i.test(n)}function Ts(n=ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ey(n=ae()){var e;return Ts(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function by(){return hp()&&document.documentMode===10}function ku(n=ae()){return Ts(n)||Cu(n)||Su(n)||Tu(n)||/windows phone/i.test(n)||Iu(n)}function Iy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ru(n,e=[]){let t;switch(n){case"Browser":t=Ya(ae());break;case"Worker":t=`${Ya(ae())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rn}/${i}`}/**
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
 */class Cy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Ty(n,e={}){return ft(n,"GET","/v2/passwordPolicy",Ot(n,e))}/**
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
 */const Sy=6;class ky{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Sy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Ry{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qa(this),this.idTokenSubscription=new Qa(this),this.beforeStateQueue=new Cy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await zt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vu(this,{idToken:e}),i=await $e._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ts(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(at(this));const t=e?oe(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ty(this),t=new ky(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await wy(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;P(t,this,"argument-error"),this.redirectPersistenceManager=await zt.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ru(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&iy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function un(n){return oe(n)}class Qa{constructor(e){this.auth=e,this.observer=null,this.addObserver=wp(t=>this.observer=t)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ss={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Py(n){Ss=n}function Pu(n){return Ss.loadJS(n)}function Ay(){return Ss.recaptchaEnterpriseScript}function Ny(){return Ss.gapiScript}function Oy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Dy="recaptcha-enterprise",xy="NO_RECAPTCHA";class My{constructor(e){this.type=Dy,this.auth=un(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{hy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new dy(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;za(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(xy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&za(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ay();l.length!==0&&(l+=a),Pu(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ja(n,e,t,i=!1){const s=new My(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Xa(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ja(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ja(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
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
 */function Ly(n,e){const t=Zn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if($i(r,e??{}))return s;Ce(s,"already-initialized")}return t.initialize({options:e})}function Fy(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Uy(n,e,t){const i=un(n);P(i._canInitEmulator,i,"emulator-config-failed"),P(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Au(e),{host:o,port:a}=$y(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Wy()}function Au(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $y(n){const e=Au(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Za(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Za(o)}}}function Za(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Wy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Eo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ue("not implemented")}_getIdTokenResponse(e){return Ue("not implemented")}_linkToIdToken(e,t){return Ue("not implemented")}_getReauthenticationResolver(e){return Ue("not implemented")}}async function Hy(n,e){return ft(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function By(n,e){return Cs(n,"POST","/v1/accounts:signInWithPassword",Ot(n,e))}/**
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
 */async function Vy(n,e){return Cs(n,"POST","/v1/accounts:signInWithEmailLink",Ot(n,e))}async function jy(n,e){return Cs(n,"POST","/v1/accounts:signInWithEmailLink",Ot(n,e))}/**
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
 */class Kn extends Eo{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Kn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Kn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xa(e,t,"signInWithPassword",By);case"emailLink":return Vy(e,{email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xa(e,i,"signUpPassword",Hy);case"emailLink":return jy(e,{idToken:t,email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function qt(n,e){return Cs(n,"POST","/v1/accounts:signInWithIdp",Ot(n,e))}/**
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
 */const zy="http://localhost";class Pt extends Eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ce("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=mo(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Pt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return qt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,qt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qt(e,t)}buildRequest(){const e={requestUri:zy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sn(t)}return e}}/**
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
 */function qy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gy(n){const e=Tn(Sn(n)).link,t=e?Tn(Sn(e)).deep_link_id:null,i=Tn(Sn(n)).deep_link_id;return(i?Tn(Sn(i)).link:null)||i||t||e||n}class bo{constructor(e){var t,i,s,r,o,a;const l=Tn(Sn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=qy((s=l.mode)!==null&&s!==void 0?s:null);P(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Gy(e);try{return new bo(t)}catch{return null}}}/**
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
 */class dn{constructor(){this.providerId=dn.PROVIDER_ID}static credential(e,t){return Kn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=bo.parseLink(t);return P(i,"argument-error"),Kn._fromEmailAndCode(e,i.code,i.tenantId)}}dn.PROVIDER_ID="password";dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oi extends Nu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ze extends oi{constructor(){super("facebook.com")}static credential(e){return Pt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
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
 */class et extends oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return et.credential(t,i)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
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
 */class tt extends oi{constructor(){super("github.com")}static credential(e){return Pt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.GITHUB_SIGN_IN_METHOD="github.com";tt.PROVIDER_ID="github.com";/**
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
 */class nt extends oi{constructor(){super("twitter.com")}static credential(e,t){return Pt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return nt.credential(t,i)}catch{return null}}}nt.TWITTER_SIGN_IN_METHOD="twitter.com";nt.PROVIDER_ID="twitter.com";/**
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
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await $e._fromIdTokenResponse(e,i,s),o=el(i);return new Zt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=el(i);return new Zt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function el(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ns extends ht{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ns.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new ns(e,t,i,s)}}function Ou(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ns._fromErrorAndOperation(n,r,e,i):r})}async function Ky(n,e,t=!1){const i=await Gn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Zt._forOperation(n,"link",i)}/**
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
 */async function Yy(n,e,t=!1){const{auth:i}=n;if(Le(i.app))return Promise.reject(at(i));const s="reauthenticate";try{const r=await Gn(n,Ou(i,s,e,n),t);P(r.idToken,i,"internal-error");const o=yo(r.idToken);P(o,i,"internal-error");const{sub:a}=o;return P(n.uid===a,i,"user-mismatch"),Zt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ce(i,"user-mismatch"),r}}/**
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
 */async function Du(n,e,t=!1){if(Le(n.app))return Promise.reject(at(n));const i="signIn",s=await Ou(n,i,e),r=await Zt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Qy(n,e){return Du(un(n),e)}/**
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
 */async function Jy(n){const e=un(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Xy(n,e,t){return Le(n.app)?Promise.reject(at(n)):Qy(oe(n),dn.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Jy(n),i})}/**
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
 */function Zy(n,e){return oe(n).setPersistence(e)}function ew(n,e,t,i){return oe(n).onIdTokenChanged(e,t,i)}function tw(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function nw(n){return oe(n).signOut()}const is="__sak";/**
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
 */class xu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(is,"1"),this.storage.removeItem(is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function iw(){const n=ae();return wo(n)||Ts(n)}const sw=1e3,rw=10;class Mu extends xu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iw()&&Iy(),this.fallbackToPolling=ku(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);by()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,rw):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mu.type="LOCAL";const ow=Mu;/**
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
 */class Lu extends xu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lu.type="SESSION";const Io=Lu;/**
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
 */function aw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ks(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await aw(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ks.receivers=[];/**
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
 */function Co(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class lw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Co("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pe(){return window}function cw(n){Pe().location.href=n}/**
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
 */function Fu(){return typeof Pe().WorkerGlobalScope<"u"&&typeof Pe().importScripts=="function"}async function uw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function hw(){return Fu()?self:null}/**
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
 */const Uu="firebaseLocalStorageDb",fw=1,ss="firebaseLocalStorage",$u="fbase_key";class ai{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Rs(n,e){return n.transaction([ss],e?"readwrite":"readonly").objectStore(ss)}function pw(){const n=indexedDB.deleteDatabase(Uu);return new ai(n).toPromise()}function br(){const n=indexedDB.open(Uu,fw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ss,{keyPath:$u})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ss)?e(i):(i.close(),await pw(),e(await br()))})})}async function tl(n,e,t){const i=Rs(n,!0).put({[$u]:e,value:t});return new ai(i).toPromise()}async function _w(n,e){const t=Rs(n,!1).get(e),i=await new ai(t).toPromise();return i===void 0?null:i.value}function nl(n,e){const t=Rs(n,!0).delete(e);return new ai(t).toPromise()}const mw=800,gw=3;class Wu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await br(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>gw)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ks._getInstance(hw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await uw(),!this.activeServiceWorker)return;this.sender=new lw(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await br();return await tl(e,is,"1"),await nl(e,is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>tl(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>_w(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Rs(s,!1).getAll();return new ai(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wu.type="LOCAL";const vw=Wu;new ri(3e4,6e4);/**
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
 */function yw(n,e){return e?We(e):(P(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class To extends Eo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ww(n){return Du(n.auth,new To(n),n.bypassAuthState)}function Ew(n){const{auth:e,user:t}=n;return P(t,e,"internal-error"),Yy(t,new To(n),n.bypassAuthState)}async function bw(n){const{auth:e,user:t}=n;return P(t,e,"internal-error"),Ky(t,new To(n),n.bypassAuthState)}/**
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
 */class Hu{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ww;case"linkViaPopup":case"linkViaRedirect":return bw;case"reauthViaPopup":case"reauthViaRedirect":return Ew;default:Ce(this.auth,"internal-error")}}resolve(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Iw=new ri(2e3,1e4);class Wt extends Hu{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){qe(this.filter.length===1,"Popup operations only handle one event");const e=Co();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Iw.get())};e()}}Wt.currentPopupAction=null;/**
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
 */const Cw="pendingRedirect",Pi=new Map;class Tw extends Hu{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const i=await Sw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sw(n,e){const t=Pw(e),i=Rw(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function kw(n,e){Pi.set(n._key(),e)}function Rw(n){return We(n._redirectPersistence)}function Pw(n){return Ri(Cw,n.config.apiKey,n.name)}async function Aw(n,e,t=!1){if(Le(n.app))return Promise.reject(at(n));const i=un(n),s=yw(i,e),o=await new Tw(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Nw=10*60*1e3;class Ow{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Bu(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Re(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nw&&this.cachedEventUids.clear(),this.cachedEventUids.has(il(e))}saveEventToCache(e){this.cachedEventUids.add(il(e)),this.lastProcessedEventTime=Date.now()}}function il(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bu(n);default:return!1}}/**
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
 */async function xw(n,e={}){return ft(n,"GET","/v1/projects",e)}/**
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
 */const Mw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lw=/^https?/;async function Fw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xw(n);for(const t of e)try{if(Uw(t))return}catch{}Ce(n,"unauthorized-domain")}function Uw(n){const e=wr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Lw.test(t))return!1;if(Mw.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const $w=new ri(3e4,6e4);function sl(){const n=Pe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ww(n){return new Promise((e,t)=>{var i,s,r;function o(){sl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sl(),t(Re(n,"network-request-failed"))},timeout:$w.get()})}if(!((s=(i=Pe().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Pe().gapi)===null||r===void 0)&&r.load)o();else{const a=Oy("iframefcb");return Pe()[a]=()=>{gapi.load?o():t(Re(n,"network-request-failed"))},Pu(`${Ny()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ai=null,e})}let Ai=null;function Hw(n){return Ai=Ai||Ww(n),Ai}/**
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
 */const Bw=new ri(5e3,15e3),Vw="__/auth/iframe",jw="emulator/auth/iframe",zw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gw(n){const e=n.config;P(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vo(e,jw):`https://${n.config.authDomain}/${Vw}`,i={apiKey:e.apiKey,appName:n.name,v:rn},s=qw.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${sn(i).slice(1)}`}async function Kw(n){const e=await Hw(n),t=Pe().gapi;return P(t,n,"internal-error"),e.open({where:document.body,url:Gw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zw,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Re(n,"network-request-failed"),a=Pe().setTimeout(()=>{r(o)},Bw.get());function l(){Pe().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Yw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qw=500,Jw=600,Xw="_blank",Zw="http://localhost";class rl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eE(n,e,t,i=Qw,s=Jw){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Yw),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ae().toLowerCase();t&&(a=bu(c)?Xw:t),Eu(c)&&(e=e||Zw,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(Ey(c)&&a!=="_self")return tE(e||"",a),new rl(null);const d=window.open(e||"",a,u);P(d,n,"popup-blocked");try{d.focus()}catch{}return new rl(d)}function tE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const nE="__/auth/handler",iE="emulator/auth/handler",sE=encodeURIComponent("fac");async function ol(n,e,t,i,s,r){P(n.config.authDomain,n,"auth-domain-config-required"),P(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:rn,eventId:s};if(e instanceof Nu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Fi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof oi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${sE}=${encodeURIComponent(l)}`:"";return`${rE(n)}?${sn(a).slice(1)}${c}`}function rE({config:n}){return n.emulator?vo(n,iE):`https://${n.authDomain}/${nE}`}/**
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
 */const Qs="webStorageSupport";class oE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Io,this._completeRedirectFn=Aw,this._overrideRedirectResult=kw}async _openPopup(e,t,i,s){var r;qe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ol(e,t,i,wr(),s);return eE(e,o,Co())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await ol(e,t,i,wr(),s);return cw(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(qe(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Kw(e),i=new Ow(e);return t.register("authEvent",s=>(P(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qs,{type:Qs},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Qs];o!==void 0&&t(!!o),Ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ku()||wo()||Ts()}}const aE=oE;var al="@firebase/auth",ll="1.7.1";/**
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
 */class lE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uE(n){lt(new je("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ru(n)},c=new Ry(i,s,r,l);return Fy(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),lt(new je("auth-internal",e=>{const t=un(e.getProvider("auth").getImmediate());return(i=>new lE(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(al,ll,cE(n)),He(al,ll,"esm2017")}/**
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
 */const dE=5*60,hE=Vl("authIdTokenMaxAge")||dE;let cl=null;const fE=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>hE)return;const s=t==null?void 0:t.token;cl!==s&&(cl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pE(n=Fr()){const e=Zn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ly(n,{popupRedirectResolver:aE,persistence:[vw,ow,Io]}),i=Vl("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=fE(r.toString());tw(t,o,()=>o(t.currentUser)),ew(t,a=>o(a))}}const s=Hl("auth");return s&&Uy(t,`http://${s}`),t}function _E(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Py({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Re("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",_E().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uE("Browser");/**
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
 */const Ir=new Map,Vu={activated:!1,tokenObservers:[]},mE={initialized:!1,enabled:!1};function te(n){return Ir.get(n)||Object.assign({},Vu)}function gE(n,e){return Ir.set(n,e),Ir.get(n)}function Ps(){return mE}/**
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
 */const ju="https://content-firebaseappcheck.googleapis.com/v1",vE="exchangeRecaptchaV3Token",yE="exchangeDebugToken",ul={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},wE=24*60*60*1e3;/**
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
 */class EE{constructor(e,t,i,s,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new he,this.pending.promise.catch(t=>{}),await bE(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new he,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function bE(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const IE={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ue=new nn("appCheck","AppCheck",IE);/**
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
 */function dl(n=!1){var e;return n?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function So(n){if(!te(n).activated)throw ue.create("use-before-activation",{appName:n.name})}function zu(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),i=Math.floor((e-t*3600*24)/3600),s=Math.floor((e-t*3600*24-i*3600)/60),r=e-t*3600*24-i*3600-s*60;let o="";return t&&(o+=Ci(t)+"d:"),i&&(o+=Ci(i)+"h:"),o+=Ci(s)+"m:"+Ci(r)+"s",o}function Ci(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
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
 */async function ko({url:n,body:e},t){const i={"Content-Type":"application/json"},s=t.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&(i["X-Firebase-Client"]=d)}const r={method:"POST",body:JSON.stringify(e),headers:i};let o;try{o=await fetch(n,r)}catch(d){throw ue.create("fetch-network-error",{originalErrorMessage:d==null?void 0:d.message})}if(o.status!==200)throw ue.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(d){throw ue.create("fetch-parse-error",{originalErrorMessage:d==null?void 0:d.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw ue.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(l[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+c,issuedAtTimeMillis:u}}function CE(n,e){const{projectId:t,appId:i,apiKey:s}=n.options;return{url:`${ju}/projects/${t}/apps/${i}:${vE}?key=${s}`,body:{recaptcha_v3_token:e}}}function qu(n,e){const{projectId:t,appId:i,apiKey:s}=n.options;return{url:`${ju}/projects/${t}/apps/${i}:${yE}?key=${s}`,body:{debug_token:e}}}/**
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
 */const TE="firebase-app-check-database",SE=1,Yn="firebase-app-check-store",Gu="debug-token";let Ti=null;function Ku(){return Ti||(Ti=new Promise((n,e)=>{try{const t=indexedDB.open(TE,SE);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;e(ue.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},t.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Yn,{keyPath:"compositeKey"})}}}catch(t){e(ue.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Ti)}function kE(n){return Qu(Ju(n))}function RE(n,e){return Yu(Ju(n),e)}function PE(n){return Yu(Gu,n)}function AE(){return Qu(Gu)}async function Yu(n,e){const i=(await Ku()).transaction(Yn,"readwrite"),r=i.objectStore(Yn).put({compositeKey:n,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(ue.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}async function Qu(n){const t=(await Ku()).transaction(Yn,"readonly"),s=t.objectStore(Yn).get(n);return new Promise((r,o)=>{s.onsuccess=a=>{const l=a.target.result;r(l?l.value:void 0)},t.onerror=a=>{var l;o(ue.create("storage-get",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))}})}function Ju(n){return`${n.options.appId}-${n.name}`}/**
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
 */const Qn=new hs("@firebase/app-check");/**
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
 */async function NE(n){if(Mr()){let e;try{e=await kE(n)}catch(t){Qn.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function Js(n,e){return Mr()?RE(n,e).catch(t=>{Qn.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function OE(){let n;try{n=await AE()}catch{}if(n)return n;{const e=Cp();return PE(e).catch(t=>Qn.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
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
 */function Ro(){return Ps().enabled}async function Po(){const n=Ps();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function DE(){const n=Wl(),e=Ps();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new he;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(OE())}/**
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
 */const xE={error:"UNKNOWN_ERROR"};function ME(n){return us.encodeString(JSON.stringify(n),!1)}async function Cr(n,e=!1){const t=n.app;So(t);const i=te(t);let s=i.token,r;if(s&&!Ht(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Ht(l)?s=l:await Js(t,void 0))}if(!e&&s&&Ht(s))return{token:s.token};let o=!1;if(Ro()){i.exchangeTokenPromise||(i.exchangeTokenPromise=ko(qu(t,await Po()),n.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),o=!0);const l=await i.exchangeTokenPromise;return await Js(t,l),i.token=l,{token:l.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await te(t).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Qn.warn(l.message):Qn.error(l),r=l}let a;return s?r?Ht(s)?a={token:s.token,internalError:r}:a=fl(r):(a={token:s.token},i.token=s,await Js(t,s)):a=fl(r),o&&ed(t,a),a}async function LE(n){const e=n.app;So(e);const{provider:t}=te(e);if(Ro()){const i=await Po(),{token:s}=await ko(qu(e,i),n.heartbeatServiceProvider);return{token:s}}else{const{token:i}=await t.getToken();return{token:i}}}function Xu(n,e,t,i){const{app:s}=n,r=te(s),o={next:t,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Ht(r.token)){const a=r.token;Promise.resolve().then(()=>{t({token:a.token}),hl(n)}).catch(()=>{})}r.cachedTokenPromise.then(()=>hl(n))}function Zu(n,e){const t=te(n),i=t.tokenObservers.filter(s=>s.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function hl(n){const{app:e}=n,t=te(e);let i=t.tokenRefresher;i||(i=FE(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function FE(n){const{app:e}=n;return new EE(async()=>{const t=te(e);let i;if(t.token?i=await Cr(n,!0):i=await Cr(n),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const t=te(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const s=t.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},ul.RETRIAL_MIN_WAIT,ul.RETRIAL_MAX_WAIT)}function ed(n,e){const t=te(n).tokenObservers;for(const i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ht(n){return n.expireTimeMillis-Date.now()>0}function fl(n){return{token:ME(xE),error:n}}/**
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
 */class UE{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=te(this.app);for(const t of e)Zu(this.app,t.next);return Promise.resolve()}}function $E(n,e){return new UE(n,e)}function WE(n){return{getToken:e=>Cr(n,e),getLimitedUseToken:()=>LE(n),addTokenListener:e=>Xu(n,"INTERNAL",e),removeTokenListener:e=>Zu(n.app,e)}}const HE="@firebase/app-check",BE="0.8.3";/**
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
 */const VE="https://www.google.com/recaptcha/api.js";function jE(n,e){const t=new he,i=te(n);i.reCAPTCHAState={initialized:t};const s=zE(n),r=dl(!1);return r?pl(n,e,r,s,t):KE(()=>{const o=dl(!1);if(!o)throw new Error("no recaptcha");pl(n,e,o,s,t)}),t.promise}function pl(n,e,t,i,s){t.ready(()=>{GE(n,e,t,i),s.resolve(t)})}function zE(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function qE(n){So(n);const t=await te(n).reCAPTCHAState.initialized.promise;return new Promise((i,s)=>{const r=te(n).reCAPTCHAState;t.ready(()=>{i(t.execute(r.widgetId,{action:"fire_app_check"}))})})}function GE(n,e,t,i){const s=t.render(i,{sitekey:e,size:"invisible",callback:()=>{te(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{te(n).reCAPTCHAState.succeeded=!1}}),r=te(n);r.reCAPTCHAState=Object.assign(Object.assign({},r.reCAPTCHAState),{widgetId:s})}function KE(n){const e=document.createElement("script");e.src=VE,e.onload=n,document.head.appendChild(e)}/**
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
 */class Ao{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,i;QE(this._throttleData);const s=await qE(this._app).catch(o=>{throw ue.create("recaptcha-error")});if(!(!((e=te(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw ue.create("recaptcha-error");let r;try{r=await ko(CE(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((t=o.code)===null||t===void 0)&&t.includes("fetch-status-error")?(this._throttleData=YE(Number((i=o.customData)===null||i===void 0?void 0:i.httpStatus),this._throttleData),ue.create("throttled",{time:zu(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=Zn(e,"heartbeat"),jE(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Ao?this._siteKey===e._siteKey:!1}}function YE(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+wE,httpStatus:n};{const t=e?e.backoffCount:0,i=Pp(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+i,httpStatus:n}}}function QE(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw ue.create("throttled",{time:zu(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
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
 */function JE(n=Fr(),e){n=oe(n);const t=Zn(n,"app-check");if(Ps().initialized||DE(),Ro()&&Po().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(r.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&r.provider.isEqual(e.provider))return s;throw ue.create("already-initialized",{appName:n.name})}const i=t.initialize({options:e});return XE(n,e.provider,e.isTokenAutoRefreshEnabled),te(n).isTokenAutoRefreshEnabled&&Xu(i,"INTERNAL",()=>{}),i}function XE(n,e,t){const i=gE(n,Object.assign({},Vu));i.activated=!0,i.provider=e,i.cachedTokenPromise=NE(n).then(s=>(s&&Ht(s)&&(i.token=s,ed(n,{token:s.token})),s)),i.isTokenAutoRefreshEnabled=t===void 0?n.automaticDataCollectionEnabled:t,i.provider.initialize(n)}const ZE="app-check",_l="app-check-internal";function eb(){lt(new je(ZE,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return $E(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(_l).initialize()})),lt(new je(_l,n=>{const e=n.getProvider("app-check").getImmediate();return WE(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),He(HE,BE)}eb();const tb={class:"bg-black min-h-[100dvh] w-full flex flex-col overflow-x-hidden"},nb={class:"w-[max(min(95%,640px),33.3333%)] aspect-[640/1080] relative left-1/2 -translate-x-1/2"},ib={class:"flex justify-center absolute items-center w-full aspect-video top-[9.07407407407%]"},sb={key:0,class:"size-full"},rb=["src"],ob={key:1,class:"text-white text-lg md:text-xl text-center flex flex-col gap-3"},ab=D("div",null,"Live belum dimulai",-1),lb={key:2,class:"text-white font-semibold px-3 text-center text-lg md:text-xl"},cb=D("div",{class:"absolute top-0 aspect-video w-[300%] left-1/2 -translate-x-1/2 -z-10"},[D("img",{class:"size-full object-cover",src:"https://static.showroom-live.com/image/room_background/default.png?v=3",alt:""})],-1),ub=D("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"},null,-1),_b=Ke({__name:"index",setup(n){const e=w(!1),t={apiKey:"AIzaSyCmFoeQm28lLubMcuXjwfVrO2Grwn57E_s",authDomain:"showroom-shared.firebaseapp.com",projectId:"showroom-shared",storageBucket:"showroom-shared.appspot.com",messagingSenderId:"888402111940",appId:"1:888402111940:web:2d4ed3c66a21893c45c891",measurementId:"G-EEC924TW6T",databaseURL:"https://showroom-shared-default-rtdb.asia-southeast1.firebasedatabase.app/"},i=w(null),s=w(0),r=Xd(),o=w(0);ke(()=>{const c=String(r.hash);if(c)try{self.FIREBASE_APPCHECK_DEBUG_TOKEN=vl().public.debug_token;const u=Df(c.replace("#","")),[d,h,f]=u.split(":"),p=Yl(t);JE(p,{provider:new Ao("6LefEccpAAAAANFbgY9zm6MQjhIiuYhvgamAG4dF"),isTokenAutoRefreshEnabled:!0});const _=Xv(p),b=pE(p);Zy(b,Io).then(()=>Xy(b,d,h)).then(async v=>{if(v.user.email!==d){await nw(b).catch(K=>null),window.location.reload();return}const S={device_count:Ks(-1),last_changed:Va()},k={device_count:Ks(1),play_count:Ks(1),last_changed:Va()},C=Gs(_,`status/${v.user.uid}`),m=Gs(_,`/premium_live/${f}`),T=Gs(_,`/ticket/${v.user.uid}`),I=(await Ha(T)).val();o.value=Number.isNaN(I.max_device)?1:Number(I.max_device);const N=(await Ha(C)).val();(N==null?void 0:N.device_count)>=o.value?(e.value=!0,Ba(_)):(Hv(C).update(S).then(function(){Bv(C,k)}),jv(m,K=>{K.val()?(i.value=K.val(),s.value+=1):Ba(_)}))}).catch(v=>{console.error(v)})}catch(u){console.error(u)}});const a=$(()=>{var c;return((c=i.value)==null?void 0:c.title)??"Showroom Live"}),l=$(()=>{var c,u;return(u=(c=i.value)==null?void 0:c.streaming_url_list)==null?void 0:u.some(d=>Yo(d.url))});return th({title:a}),(c,u)=>{var p,_,b,v,S,k;const d=Pf,h=tp,f=sh;return U(),G("div",tb,[D("div",nb,[D("div",ib,[E(i)&&!E(e)&&((_=(p=E(i))==null?void 0:p.streaming_url_list)!=null&&_.length)?(U(),G("div",sb,[E(l)?(U(),G("iframe",{id:"ytplayer",key:`yt-${E(s)}`,type:"text/html",class:"size-full",src:(k=E(i).streaming_url_list.find(C=>("isYoutubeEmbedUrl"in c?c.isYoutubeEmbedUrl:E(Yo))(C.url)))==null?void 0:k.url,frameborder:"0"},null,8,rb)):(U(),wt(d,{key:E(s),class:"size-full",sources:((b=E(i))==null?void 0:b.streaming_url_list)??[],title:(v=E(i))==null?void 0:v.title,poster:(S=E(i))==null?void 0:S.image},null,8,["sources","title","poster"]))])):!E(e)&&E(i)?(U(),G("div",ob,[D("div",null,me(E(i).title),1),ab])):Z("",!0),E(e)?(U(),G("div",lb,"Maaf pemutaran hanya untuk "+me(E(o))+" device",1)):Z("",!0)]),cb,E(i)&&!E(e)?(U(),wt(h,{key:0,time:E(i).start_at,class:"fixed md:absolute left-1/2 -translate-x-1/2 bottom-[24px] md:top-[44.44444%] text-white font-bold"},null,8,["time"])):Z("",!0),pe(f,{to:"https://t.me/showroomlivebot",external:!0,target:"_blank",title:"Showroom Live Bot Telegram",class:"telegram-button absolute left-1/2 -translate-x-1/2 bottom-[41%] w-[10.5%] aspect-square rounded-full bg-red-500 hover:scale-110 transition-[box-shadow,transform] duration-300 origin-bottom"},{default:Ft(()=>[ub]),_:1})])])}}});export{_b as default};
