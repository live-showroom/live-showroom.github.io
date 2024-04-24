import Ru from"./CHpnHc2m.js";import{i as Pu,r as y,w as it,a as he,o as Fa,b as Nu,c as Au,d as Ou,g as rr,e as Du,_ as xu,f as V,h as X,j as Mu,k as Lu,l as Ee,F as Bn,m as zt,n as st,p as Gi,q as G,s as xe,t as or,u as Ua,v as Fu,x as Uu,y as vi,z as b,A as Wu,B as Hu,C as L,D as dn,E as mo,G as _e,H as te,I as we,J as Bu,K as Vu,L as $u,M as ht,N as hn,O as ju,T as zu,P as Pt,Q as Gu,R as qu}from"./MA_Sxu6t.js";import"./CvPl5tTm.js";function Ku(n,e={}){const t=e.head||Pu();if(t)return t.ssr?t.push(n,e):Yu(t,n,e)}function Yu(n,e,t={}){const i=y(!1),s=y({});it(()=>{s.value=i.value?{}:Ou(e)});const r=n.push(s.value,t);return he(s,a=>{r.patch(a)}),rr()&&(Fa(()=>{r.dispose()}),Nu(()=>{i.value=!0}),Au(()=>{i.value=!1})),r}function Qu(n,e={}){return Ku(n,{...e,transform:Du})}const Ju={},Xu={class:"inline-block",role:"status"},Zu=Mu('<svg class="size-full stroke-white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline" values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"></animate></circle><animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12" repeatCount="indefinite"></animateTransform></g></svg><span class="sr-only">Loading...</span>',2),ed=[Zu];function td(n,e){return V(),X("div",Xu,ed)}const nd=xu(Ju,[["render",td]]);function Le(n,e,...t){if(n in e){let s=e[n];return typeof s=="function"?s(...t):s}let i=new Error(`Tried to handle "${n}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Le),i}var xs=(n=>(n[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n))(xs||{}),id=(n=>(n[n.Unmount=0]="Unmount",n[n.Hidden=1]="Hidden",n))(id||{});function qi({visible:n=!0,features:e=0,ourProps:t,theirProps:i,...s}){var r;let o=Ha(i,t),a=Object.assign(s,{props:o});if(n||e&2&&o.static)return gs(a);if(e&1){let l=(r=o.unmount)==null||r?0:1;return Le(l,{0(){return null},1(){return gs({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return gs(a)}function gs({props:n,attrs:e,slots:t,slot:i,name:s}){var r,o;let{as:a,...l}=sd(n,["unmount","static"]),c=(r=t.default)==null?void 0:r.call(t,i),u={};if(i){let d=!1,h=[];for(let[f,p]of Object.entries(i))typeof p=="boolean"&&(d=!0),p===!0&&h.push(f);d&&(u["data-headlessui-state"]=h.join(" "))}if(a==="template"){if(c=Wa(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...h]=c??[];if(!rd(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(m=>m.trim()).filter((m,C,E)=>E.indexOf(m)===C).sort((m,C)=>m.localeCompare(C)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let f=Ha((o=d.props)!=null?o:{},l,u),p=Lu(d,f,!0);for(let m in f)m.startsWith("on")&&(p.props||(p.props={}),p.props[m]=f[m]);return p}return Array.isArray(c)&&c.length===1?c[0]:c}return Ee(a,Object.assign({},l,u),{default:()=>c})}function Wa(n){return n.flatMap(e=>e.type===Bn?Wa(e.children):[e])}function Ha(...n){if(n.length===0)return{};if(n.length===1)return n[0];let e={},t={};for(let i of n)for(let s in i)s.startsWith("on")&&typeof i[s]=="function"?(t[s]!=null||(t[s]=[]),t[s].push(i[s])):e[s]=i[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(t).map(i=>[i,void 0])));for(let i in t)Object.assign(e,{[i](s,...r){let o=t[i];for(let a of o){if(s instanceof Event&&s.defaultPrevented)return;a(s,...r)}}});return e}function sd(n,e=[]){let t=Object.assign({},n);for(let i of e)i in t&&delete t[i];return t}function rd(n){return n==null?!1:typeof n.type=="string"||typeof n.type=="object"||typeof n.type=="function"}function N(n){var e;if(n==null||n.value==null)return null;let t=(e=n.value.$el)!=null?e:n.value;return t instanceof Node?t:null}var od=Object.defineProperty,ad=(n,e,t)=>e in n?od(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,go=(n,e,t)=>(ad(n,typeof e!="symbol"?e+"":e,t),t);let ld=class{constructor(){go(this,"current",this.detect()),go(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Ki=new ld;function Vn(n){if(Ki.isServer)return null;if(n instanceof Node)return n.ownerDocument;if(n!=null&&n.hasOwnProperty("value")){let e=N(n);if(e)return e.ownerDocument}return document}let vo=Symbol("PortalParentContext");function cd(){let n=zt(vo,null),e=y([]);function t(r){return e.value.push(r),n&&n.register(r),()=>i(r)}function i(r){let o=e.value.indexOf(r);o!==-1&&e.value.splice(o,1),n&&n.unregister(r)}let s={register:t,unregister:i,portals:e};return[e,st({name:"PortalWrapper",setup(r,{slots:o}){return Gi(vo,s),()=>{var a;return(a=o.default)==null?void 0:a.call(o)}}})]}function ud(n,e,t,i){Ki.isServer||it(s=>{n=n??window,n.addEventListener(e,t,i),s(()=>n.removeEventListener(e,t,i))})}let dd=Symbol("headlessui.useid"),hd=0;function yn(){return zt(dd,()=>`${++hd}`)()}let Ms=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(n=>`${n}:not([tabindex='-1'])`).join(",");var ke=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(ke||{}),yi=(n=>(n[n.Error=0]="Error",n[n.Overflow=1]="Overflow",n[n.Success=2]="Success",n[n.Underflow=3]="Underflow",n))(yi||{}),fd=(n=>(n[n.Previous=-1]="Previous",n[n.Next=1]="Next",n))(fd||{});function Yi(n=document.body){return n==null?[]:Array.from(n.querySelectorAll(Ms)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var ar=(n=>(n[n.Strict=0]="Strict",n[n.Loose=1]="Loose",n))(ar||{});function Ba(n,e=0){var t;return n===((t=Vn(n))==null?void 0:t.body)?!1:Le(e,{0(){return n.matches(Ms)},1(){let i=n;for(;i!==null;){if(i.matches(Ms))return!0;i=i.parentElement}return!1}})}var pd=(n=>(n[n.Keyboard=0]="Keyboard",n[n.Mouse=1]="Mouse",n))(pd||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",n=>{n.metaKey||n.altKey||n.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",n=>{n.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:n.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let _d=["textarea","input"].join(",");function md(n){var e,t;return(t=(e=n==null?void 0:n.matches)==null?void 0:e.call(n,_d))!=null?t:!1}function gd(n,e=t=>t){return n.slice().sort((t,i)=>{let s=e(t),r=e(i);if(s===null||r===null)return 0;let o=s.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ft(n,e,{sorted:t=!0,relativeTo:i=null,skipElements:s=[]}={}){var r;let o=(r=Array.isArray(n)?n.length>0?n[0].ownerDocument:document:n==null?void 0:n.ownerDocument)!=null?r:document,a=Array.isArray(n)?t?gd(n):n:Yi(n);s.length>0&&a.length>1&&(a=a.filter(p=>!s.includes(p))),i=i??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(i))-1;if(e&4)return Math.max(0,a.indexOf(i))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,h=a.length,f;do{if(d>=h||d+h<=0)return 0;let p=c+d;if(e&16)p=(p+h)%h;else{if(p<0)return 3;if(p>=h)return 1}f=a[p],f==null||f.focus(u),d+=l}while(f!==o.activeElement);return e&6&&md(f)&&f.select(),2}function vd(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function yd(){return/Android/gi.test(window.navigator.userAgent)}function wd(){return vd()||yd()}function ri(n,e,t){Ki.isServer||it(i=>{document.addEventListener(n,e,t),i(()=>document.removeEventListener(n,e,t))})}function Va(n,e,t){Ki.isServer||it(i=>{window.addEventListener(n,e,t),i(()=>window.removeEventListener(n,e,t))})}function Ed(n,e,t=G(()=>!0)){function i(r,o){if(!t.value||r.defaultPrevented)return;let a=o(r);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(n);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:N(c);if(u!=null&&u.contains(a)||r.composed&&r.composedPath().includes(u))return}return!Ba(a,ar.Loose)&&a.tabIndex!==-1&&r.preventDefault(),e(r,a)}let s=y(null);ri("pointerdown",r=>{var o,a;t.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),ri("mousedown",r=>{var o,a;t.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),ri("click",r=>{wd()||s.value&&(i(r,()=>s.value),s.value=null)},!0),ri("touchend",r=>i(r,()=>r.target instanceof HTMLElement?r.target:null),!0),Va("blur",r=>i(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function yo(n,e){if(n)return n;let t=e??"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function Id(n,e){let t=y(yo(n.value.type,n.value.as));return xe(()=>{t.value=yo(n.value.type,n.value.as)}),it(()=>{var i;t.value||N(e)&&N(e)instanceof HTMLButtonElement&&!((i=N(e))!=null&&i.hasAttribute("type"))&&(t.value="button")}),t}var Tn=(n=>(n[n.None=1]="None",n[n.Focusable=2]="Focusable",n[n.Hidden=4]="Hidden",n))(Tn||{});let wi=st({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(n,{slots:e,attrs:t}){return()=>{var i;let{features:s,...r}=n,o={"aria-hidden":(s&2)===2?!0:(i=r["aria-hidden"])!=null?i:void 0,hidden:(s&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return qi({ourProps:o,theirProps:r,slot:{},attrs:t,slots:e,name:"Hidden"})}}});function bd({defaultContainers:n=[],portals:e,mainTreeNodeRef:t}={}){let i=y(null),s=Vn(i);function r(){var o,a,l;let c=[];for(let u of n)u!==null&&(u instanceof HTMLElement?c.push(u):"value"in u&&u.value instanceof HTMLElement&&c.push(u.value));if(e!=null&&e.value)for(let u of e.value)c.push(u);for(let u of(o=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(N(i))||u.contains((l=(a=N(i))==null?void 0:a.getRootNode())==null?void 0:l.host)||c.some(d=>u.contains(d))||c.push(u));return c}return{resolveContainers:r,contains(o){return r().some(a=>a.contains(o))},mainTreeNodeRef:i,MainTreeNode(){return t!=null?null:Ee(wi,{features:Tn.Hidden,ref:i})}}}var Re=(n=>(n[n.Forwards=0]="Forwards",n[n.Backwards=1]="Backwards",n))(Re||{});function $a(){let n=y(0);return Va("keydown",e=>{e.key==="Tab"&&(n.value=e.shiftKey?1:0)}),n}let ja=Symbol("Context");var kn=(n=>(n[n.Open=1]="Open",n[n.Closed=2]="Closed",n[n.Closing=4]="Closing",n[n.Opening=8]="Opening",n))(kn||{});function Cd(){return zt(ja,null)}function Sd(n){Gi(ja,n)}var Be=(n=>(n.Space=" ",n.Enter="Enter",n.Escape="Escape",n.Backspace="Backspace",n.Delete="Delete",n.ArrowLeft="ArrowLeft",n.ArrowUp="ArrowUp",n.ArrowRight="ArrowRight",n.ArrowDown="ArrowDown",n.Home="Home",n.End="End",n.PageUp="PageUp",n.PageDown="PageDown",n.Tab="Tab",n))(Be||{}),Td=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Td||{});let za=Symbol("PopoverContext");function lr(n){let e=zt(za,null);if(e===null){let t=new Error(`<${n} /> is missing a parent <${Ka.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,lr),t}return e}let kd=Symbol("PopoverGroupContext");function Ga(){return zt(kd,null)}let qa=Symbol("PopoverPanelContext");function Rd(){return zt(qa,null)}let Ka=st({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(n,{slots:e,attrs:t,expose:i}){var s;let r=y(null);i({el:r,$el:r});let o=y(1),a=y(null),l=y(null),c=y(null),u=y(null),d=G(()=>Vn(r)),h=G(()=>{var _,I;if(!N(a)||!N(u))return!1;for(let de of document.querySelectorAll("body > *"))if(Number(de==null?void 0:de.contains(N(a)))^Number(de==null?void 0:de.contains(N(u))))return!0;let w=Yi(),A=w.indexOf(N(a)),Y=(A+w.length-1)%w.length,O=(A+1)%w.length,Q=w[Y],ue=w[O];return!((_=N(u))!=null&&_.contains(Q))&&!((I=N(u))!=null&&I.contains(ue))}),f={popoverState:o,buttonId:y(null),panelId:y(null),panel:u,button:a,isPortalled:h,beforePanelSentinel:l,afterPanelSentinel:c,togglePopover(){o.value=Le(o.value,{0:1,1:0})},closePopover(){o.value!==1&&(o.value=1)},close(_){f.closePopover();let I=_?_ instanceof HTMLElement?_:_.value instanceof HTMLElement?N(_):N(f.button):N(f.button);I==null||I.focus()}};Gi(za,f),Sd(G(()=>Le(o.value,{0:kn.Open,1:kn.Closed})));let p={buttonId:f.buttonId,panelId:f.panelId,close(){f.closePopover()}},m=Ga(),C=m==null?void 0:m.registerPopover,[E,T]=cd(),P=bd({mainTreeNodeRef:m==null?void 0:m.mainTreeNodeRef,portals:E,defaultContainers:[a,u]});function S(){var _,I,w,A;return(A=m==null?void 0:m.isFocusWithinPopoverGroup())!=null?A:((_=d.value)==null?void 0:_.activeElement)&&(((I=N(a))==null?void 0:I.contains(d.value.activeElement))||((w=N(u))==null?void 0:w.contains(d.value.activeElement)))}return it(()=>C==null?void 0:C(p)),ud((s=d.value)==null?void 0:s.defaultView,"focus",_=>{var I,w;_.target!==window&&_.target instanceof HTMLElement&&o.value===0&&(S()||a&&u&&(P.contains(_.target)||(I=N(f.beforePanelSentinel))!=null&&I.contains(_.target)||(w=N(f.afterPanelSentinel))!=null&&w.contains(_.target)||f.closePopover()))},!0),Ed(P.resolveContainers,(_,I)=>{var w;f.closePopover(),Ba(I,ar.Loose)||(_.preventDefault(),(w=N(a))==null||w.focus())},G(()=>o.value===0)),()=>{let _={open:o.value===0,close:f.close};return Ee(Bn,[Ee(T,{},()=>qi({theirProps:{...n,...t},ourProps:{ref:r},slot:_,slots:e,attrs:t,name:"Popover"})),Ee(P.MainTreeNode)])}}}),Pd=st({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(n,{attrs:e,slots:t,expose:i}){var s;let r=(s=n.id)!=null?s:`headlessui-popover-button-${yn()}`,o=lr("PopoverButton"),a=G(()=>Vn(o.button));i({el:o.button,$el:o.button}),xe(()=>{o.buttonId.value=r}),or(()=>{o.buttonId.value=null});let l=Ga(),c=l==null?void 0:l.closeOthers,u=Rd(),d=G(()=>u===null?!1:u.value===o.panelId.value),h=y(null),f=`headlessui-focus-sentinel-${yn()}`;d.value||it(()=>{o.button.value=N(h)});let p=Id(G(()=>({as:n.as,type:e.type})),h);function m(_){var I,w,A,Y,O;if(d.value){if(o.popoverState.value===1)return;switch(_.key){case Be.Space:case Be.Enter:_.preventDefault(),(w=(I=_.target).click)==null||w.call(I),o.closePopover(),(A=N(o.button))==null||A.focus();break}}else switch(_.key){case Be.Space:case Be.Enter:_.preventDefault(),_.stopPropagation(),o.popoverState.value===1&&(c==null||c(o.buttonId.value)),o.togglePopover();break;case Be.Escape:if(o.popoverState.value!==0)return c==null?void 0:c(o.buttonId.value);if(!N(o.button)||(Y=a.value)!=null&&Y.activeElement&&!((O=N(o.button))!=null&&O.contains(a.value.activeElement)))return;_.preventDefault(),_.stopPropagation(),o.closePopover();break}}function C(_){d.value||_.key===Be.Space&&_.preventDefault()}function E(_){var I,w;n.disabled||(d.value?(o.closePopover(),(I=N(o.button))==null||I.focus()):(_.preventDefault(),_.stopPropagation(),o.popoverState.value===1&&(c==null||c(o.buttonId.value)),o.togglePopover(),(w=N(o.button))==null||w.focus()))}function T(_){_.preventDefault(),_.stopPropagation()}let P=$a();function S(){let _=N(o.panel);if(!_)return;function I(){Le(P.value,{[Re.Forwards]:()=>ft(_,ke.First),[Re.Backwards]:()=>ft(_,ke.Last)})===yi.Error&&ft(Yi().filter(w=>w.dataset.headlessuiFocusGuard!=="true"),Le(P.value,{[Re.Forwards]:ke.Next,[Re.Backwards]:ke.Previous}),{relativeTo:N(o.button)})}I()}return()=>{let _=o.popoverState.value===0,I={open:_},{...w}=n,A=d.value?{ref:h,type:p.value,onKeydown:m,onClick:E}:{ref:h,id:r,type:p.value,"aria-expanded":o.popoverState.value===0,"aria-controls":N(o.panel)?o.panelId.value:void 0,disabled:n.disabled?!0:void 0,onKeydown:m,onKeyup:C,onClick:E,onMousedown:T};return Ee(Bn,[qi({ourProps:A,theirProps:{...e,...w},slot:I,attrs:e,slots:t,name:"PopoverButton"}),_&&!d.value&&o.isPortalled.value&&Ee(wi,{id:f,features:Tn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S})])}}}),Nd=st({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(n,{attrs:e,slots:t,expose:i}){var s;let r=(s=n.id)!=null?s:`headlessui-popover-panel-${yn()}`,{focus:o}=n,a=lr("PopoverPanel"),l=G(()=>Vn(a.panel)),c=`headlessui-focus-sentinel-before-${yn()}`,u=`headlessui-focus-sentinel-after-${yn()}`;i({el:a.panel,$el:a.panel}),xe(()=>{a.panelId.value=r}),or(()=>{a.panelId.value=null}),Gi(qa,a.panelId),it(()=>{var T,P;if(!o||a.popoverState.value!==0||!a.panel)return;let S=(T=l.value)==null?void 0:T.activeElement;(P=N(a.panel))!=null&&P.contains(S)||ft(N(a.panel),ke.First)});let d=Cd(),h=G(()=>d!==null?(d.value&kn.Open)===kn.Open:a.popoverState.value===0);function f(T){var P,S;switch(T.key){case Be.Escape:if(a.popoverState.value!==0||!N(a.panel)||l.value&&!((P=N(a.panel))!=null&&P.contains(l.value.activeElement)))return;T.preventDefault(),T.stopPropagation(),a.closePopover(),(S=N(a.button))==null||S.focus();break}}function p(T){var P,S,_,I,w;let A=T.relatedTarget;A&&N(a.panel)&&((P=N(a.panel))!=null&&P.contains(A)||(a.closePopover(),((_=(S=N(a.beforePanelSentinel))==null?void 0:S.contains)!=null&&_.call(S,A)||(w=(I=N(a.afterPanelSentinel))==null?void 0:I.contains)!=null&&w.call(I,A))&&A.focus({preventScroll:!0})))}let m=$a();function C(){let T=N(a.panel);if(!T)return;function P(){Le(m.value,{[Re.Forwards]:()=>{var S;ft(T,ke.First)===yi.Error&&((S=N(a.afterPanelSentinel))==null||S.focus())},[Re.Backwards]:()=>{var S;(S=N(a.button))==null||S.focus({preventScroll:!0})}})}P()}function E(){let T=N(a.panel);if(!T)return;function P(){Le(m.value,{[Re.Forwards]:()=>{let S=N(a.button),_=N(a.panel);if(!S)return;let I=Yi(),w=I.indexOf(S),A=I.slice(0,w+1),Y=[...I.slice(w+1),...A];for(let O of Y.slice())if(O.dataset.headlessuiFocusGuard==="true"||_!=null&&_.contains(O)){let Q=Y.indexOf(O);Q!==-1&&Y.splice(Q,1)}ft(Y,ke.First,{sorted:!1})},[Re.Backwards]:()=>{var S;ft(T,ke.Previous)===yi.Error&&((S=N(a.button))==null||S.focus())}})}P()}return()=>{let T={open:a.popoverState.value===0,close:a.close},{focus:P,...S}=n,_={ref:a.panel,id:r,onKeydown:f,onFocusout:o&&a.popoverState.value===0?p:void 0,tabIndex:-1};return qi({ourProps:_,theirProps:{...e,...S},attrs:e,slot:T,slots:{...t,default:(...I)=>{var w;return[Ee(Bn,[h.value&&a.isPortalled.value&&Ee(wi,{id:c,ref:a.beforePanelSentinel,features:Tn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:C}),(w=t.default)==null?void 0:w.call(t,...I),h.value&&a.isPortalled.value&&Ee(wi,{id:u,ref:a.afterPanelSentinel,features:Tn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:E})])]}},features:xs.RenderStrategy|xs.Static,visible:h.value,name:"PopoverPanel"})}}});function cr(n){return Fu()?(Uu(n),!0):!1}function Ge(n){return typeof n=="function"?n():b(n)}const ur=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ad=Object.prototype.toString,Od=n=>Ad.call(n)==="[object Object]",Ya=()=>{};function Dd(n,e){function t(...i){return new Promise((s,r)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(s).catch(r)})}return t}const Qa=n=>n();function xd(n=Qa){const e=y(!0);function t(){e.value=!1}function i(){e.value=!0}const s=(...r)=>{e.value&&n(...r)};return{isActive:Ua(e),pause:t,resume:i,eventFilter:s}}function Ja(n){return rr()}function Md(n,e,t={}){const{eventFilter:i=Qa,...s}=t;return he(n,Dd(i,e),s)}function Ld(n,e,t={}){const{eventFilter:i,...s}=t,{eventFilter:r,pause:o,resume:a,isActive:l}=xd(i);return{stop:Md(n,e,{...s,eventFilter:r}),pause:o,resume:a,isActive:l}}function Xa(n,e=!0,t){Ja()?xe(n,t):e?n():vi(n)}function Fd(n,e){Ja()&&or(n,e)}function Ls(n,e,t={}){const{immediate:i=!0}=t,s=y(!1);let r=null;function o(){r&&(clearTimeout(r),r=null)}function a(){s.value=!1,o()}function l(...c){o(),s.value=!0,r=setTimeout(()=>{s.value=!1,r=null,n(...c)},Ge(e))}return i&&(s.value=!0,ur&&l()),cr(a),{isPending:Ua(s),start:l,stop:a}}function Ei(n){var e;const t=Ge(n);return(e=t==null?void 0:t.$el)!=null?e:t}const Ze=ur?window:void 0,Za=ur?window.document:void 0;function U(...n){let e,t,i,s;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,i,s]=n,e=Ze):[e,t,i,s]=n,!e)return Ya;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,d,h,f)=>(u.addEventListener(d,h,f),()=>u.removeEventListener(d,h,f)),l=he(()=>[Ei(e),Ge(s)],([u,d])=>{if(o(),!u)return;const h=Od(d)?{...d}:d;r.push(...t.flatMap(f=>i.map(p=>a(u,f,p,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return cr(c),c}function Ud(n){return typeof n=="function"?n:typeof n=="string"?e=>e.key===n:Array.isArray(n)?e=>n.includes(e.key):()=>!0}function wo(...n){let e,t,i={};n.length===3?(e=n[0],t=n[1],i=n[2]):n.length===2?typeof n[1]=="object"?(e=!0,t=n[0],i=n[1]):(e=n[0],t=n[1]):(e=!0,t=n[0]);const{target:s=Ze,eventName:r="keydown",passive:o=!1,dedupe:a=!1}=i,l=Ud(e);return U(s,r,u=>{u.repeat&&Ge(a)||l(u)&&t(u)},o)}function Wd(){const n=y(!1),e=rr();return e&&xe(()=>{n.value=!0},e),n}function el(n){const e=Wd();return G(()=>(e.value,!!n()))}const oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ai="__vueuse_ssr_handlers__",Hd=Bd();function Bd(){return ai in oi||(oi[ai]=oi[ai]||{}),oi[ai]}function Vd(n,e){return Hd[n]||e}function $d(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const jd={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Eo="vueuse-storage";function zd(n,e,t,i={}){var s;const{flush:r="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Ze,eventFilter:h,onError:f=O=>{console.error(O)},initOnMounted:p}=i,m=(u?Wu:y)(typeof e=="function"?e():e);if(!t)try{t=Vd("getDefaultStorage",()=>{var O;return(O=Ze)==null?void 0:O.localStorage})()}catch(O){f(O)}if(!t)return m;const C=Ge(e),E=$d(C),T=(s=i.serializer)!=null?s:jd[E],{pause:P,resume:S}=Ld(m,()=>I(m.value),{flush:r,deep:o,eventFilter:h});d&&a&&Xa(()=>{U(d,"storage",A),U(d,Eo,Y),p&&A()}),p||A();function _(O,Q){d&&d.dispatchEvent(new CustomEvent(Eo,{detail:{key:n,oldValue:O,newValue:Q,storageArea:t}}))}function I(O){try{const Q=t.getItem(n);if(O==null)_(Q,null),t.removeItem(n);else{const ue=T.write(O);Q!==ue&&(t.setItem(n,ue),_(Q,ue))}}catch(Q){f(Q)}}function w(O){const Q=O?O.newValue:t.getItem(n);if(Q==null)return l&&C!=null&&t.setItem(n,T.write(C)),C;if(!O&&c){const ue=T.read(Q);return typeof c=="function"?c(ue,C):E==="object"&&!Array.isArray(ue)?{...C,...ue}:ue}else return typeof Q!="string"?Q:T.read(Q)}function A(O){if(!(O&&O.storageArea!==t)){if(O&&O.key==null){m.value=C;return}if(!(O&&O.key!==n)){P();try{(O==null?void 0:O.newValue)!==T.write(m.value)&&(m.value=w(O))}catch(Q){f(Q)}finally{O?vi(S):S()}}}}function Y(O){A(O.detail)}return m}const Io=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Gd(n,e={}){const{document:t=Za,autoExit:i=!1}=e,s=G(()=>{var E;return(E=Ei(n))!=null?E:t==null?void 0:t.querySelector("html")}),r=y(!1),o=G(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(E=>t&&E in t||s.value&&E in s.value)),a=G(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(E=>t&&E in t||s.value&&E in s.value)),l=G(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(E=>t&&E in t||s.value&&E in s.value)),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(E=>t&&E in t),u=el(()=>s.value&&t&&o.value!==void 0&&a.value!==void 0&&l.value!==void 0),d=()=>c?(t==null?void 0:t[c])===s.value:!1,h=()=>{if(l.value){if(t&&t[l.value]!=null)return t[l.value];{const E=s.value;if((E==null?void 0:E[l.value])!=null)return!!E[l.value]}}return!1};async function f(){if(!(!u.value||!r.value)){if(a.value)if((t==null?void 0:t[a.value])!=null)await t[a.value]();else{const E=s.value;(E==null?void 0:E[a.value])!=null&&await E[a.value]()}r.value=!1}}async function p(){if(!u.value||r.value)return;h()&&await f();const E=s.value;o.value&&(E==null?void 0:E[o.value])!=null&&(await E[o.value](),r.value=!0)}async function m(){await(r.value?f():p())}const C=()=>{const E=h();(!E||E&&d())&&(r.value=E)};return U(t,Io,C,!1),U(()=>Ei(s),Io,C,!1),i&&cr(f),{isSupported:u,isFullscreen:r,enter:p,exit:f,toggle:m}}function li(n,e,t={}){const{window:i=Ze}=t;return zd(n,e,i==null?void 0:i.localStorage,t)}const qd={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof Touch?null:[n.movementX,n.movementY]};function Kd(n={}){const{type:e="page",touch:t=!0,resetOnTouchEnds:i=!1,initialValue:s={x:0,y:0},window:r=Ze,target:o=r,scroll:a=!0,eventFilter:l}=n;let c=null;const u=y(s.x),d=y(s.y),h=y(null),f=typeof e=="function"?e:qd[e],p=_=>{const I=f(_);c=_,I&&([u.value,d.value]=I,h.value="mouse")},m=_=>{if(_.touches.length>0){const I=f(_.touches[0]);I&&([u.value,d.value]=I,h.value="touch")}},C=()=>{if(!c||!r)return;const _=f(c);c instanceof MouseEvent&&_&&(u.value=_[0]+r.scrollX,d.value=_[1]+r.scrollY)},E=()=>{u.value=s.x,d.value=s.y},T=l?_=>l(()=>p(_),{}):_=>p(_),P=l?_=>l(()=>m(_),{}):_=>m(_),S=l?()=>l(()=>C(),{}):()=>C();if(o){const _={passive:!0};U(o,["mousemove","dragover"],T,_),t&&e!=="movement"&&(U(o,["touchstart","touchmove"],P,_),i&&U(o,"touchend",E,_)),a&&e==="page"&&U(r,"scroll",S,{passive:!0})}return{x:u,y:d,sourceType:h}}function Yd(n,e={}){const{handleOutside:t=!0,window:i=Ze}=e,s=e.type||"page",{x:r,y:o,sourceType:a}=Kd(e),l=y(n??(i==null?void 0:i.document.body)),c=y(0),u=y(0),d=y(0),h=y(0),f=y(0),p=y(0),m=y(!0);let C=()=>{};return i&&(C=he([l,r,o],()=>{const E=Ei(l);if(!E)return;const{left:T,top:P,width:S,height:_}=E.getBoundingClientRect();d.value=T+(s==="page"?i.pageXOffset:0),h.value=P+(s==="page"?i.pageYOffset:0),f.value=_,p.value=S;const I=r.value-d.value,w=o.value-h.value;m.value=S===0||_===0||I<0||w<0||I>S||w>_,(t||!m.value)&&(c.value=I,u.value=w)},{immediate:!0}),U(document,"mouseleave",()=>{m.value=!0})),{x:r,y:o,sourceType:a,elementX:c,elementY:u,elementPositionX:d,elementPositionY:h,elementHeight:f,elementWidth:p,isOutside:m,stop:C}}function Qd(n={}){const{window:e=Ze}=n,t=el(()=>e&&"screen"in e&&"orientation"in e.screen),i=t.value?e.screen.orientation:{},s=y(i.type),r=y(i.angle||0);return t.value&&U(e,"orientationchange",()=>{s.value=i.type,r.value=i.angle}),{isSupported:t,orientation:s,angle:r,lockOrientation:l=>t.value&&typeof i.lock=="function"?i.lock(l):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{t.value&&typeof i.unlock=="function"&&i.unlock()}}}function Jd(n,e=Ya,t={}){const{immediate:i=!0,manual:s=!1,type:r="text/javascript",async:o=!0,crossOrigin:a,referrerPolicy:l,noModule:c,defer:u,document:d=Za,attrs:h={}}=t,f=y(null);let p=null;const m=T=>new Promise((P,S)=>{const _=A=>(f.value=A,P(A),A);if(!d){P(!1);return}let I=!1,w=d.querySelector(`script[src="${Ge(n)}"]`);w?w.hasAttribute("data-loaded")&&_(w):(w=d.createElement("script"),w.type=r,w.async=o,w.src=Ge(n),u&&(w.defer=u),a&&(w.crossOrigin=a),c&&(w.noModule=c),l&&(w.referrerPolicy=l),Object.entries(h).forEach(([A,Y])=>w==null?void 0:w.setAttribute(A,Y)),I=!0),w.addEventListener("error",A=>S(A)),w.addEventListener("abort",A=>S(A)),w.addEventListener("load",()=>{w.setAttribute("data-loaded","true"),e(w),_(w)}),I&&(w=d.head.appendChild(w)),T||_(w)}),C=(T=!0)=>(p||(p=m(T)),p),E=()=>{if(!d)return;p=null,f.value&&(f.value=null);const T=d.querySelector(`script[src="${Ge(n)}"]`);T&&d.head.removeChild(T)};return i&&!s&&Xa(C),s||Fd(E),{scriptTag:f,load:C,unload:E}}const Xd=()=>Hu().$device,Zd=["controls","poster"],eh=L("p",{class:"vjs-no-js"},[Pt(" To view this video please enable JavaScript, and consider upgrading to a web browser that "),L("a",{href:"https://videojs.com/html5-video-support/",target:"_blank"},"supports HTML5 video")],-1),th=[eh],nh={key:0},ih={key:2,id:"loading-spinner",class:"absolute inset-0 z-0 flex items-center justify-center bg-black/30 text-black"},sh={class:"flex w-full bg-zinc-800/80 px-1 duration-200 dark:bg-black/75 md:px-2 items-center"},rh={key:0,class:"group/volume flex items-center gap-1"},oh={class:"relative flex h-full w-16 items-center duration-200 group-hover/volume:w-20 md:w-20"},ah={class:"absolute inset-0 top-1/2 h-1 z-0 w-16 overflow-hidden rounded-sm bg-gray-300/25 md:w-20"},lh=L("div",{class:"flex-1"},null,-1),ch=L("div",{class:"border-b border-white/20 px-3 py-1.5 md:px-4 md:py-2.5"}," Kualitas ",-1),uh={class:"flex w-[220px] flex-col py-1 text-base md:w-[250px]"},dh={class:"h-10 w-10"},hh=st({__name:"VideoPlayer",props:{sources:{},poster:{},landscape:{type:Boolean,default:!0},useShortcut:{type:Boolean,default:!0},useDefaultControl:{type:Boolean,default:!1},hideControl:{type:Boolean,default:!1},saveState:{type:Boolean,default:!0},rotateFill:{default:"width"},videoFill:{default:"width"},compact:{type:Boolean,default:!1},title:{}},setup(n,{expose:e}){const t=n,i=y(t.sources.filter(v=>v.type==="hls")??[]);he(()=>t.sources,()=>{i.value=t.sources.filter(v=>v.type==="hls")??[]});const s=li("quality-id",2),r=y((i.value??[]).find(v=>s.value===v.id)??i.value[0]),o=y(),a=y(),l=y(),c=t.saveState?li("data-volume",0):y(1),u=y(!1),d=t.saveState?li("data-muted",!1):y(!1),h=y(!1),f=y(!0),p=y(0),{isMobile:m}=Xd(),{start:C,stop:E}=Ls(()=>{Tt()},1e4),T=y(!1);function P(v,z=!1){const W=Number.parseFloat(v);a.value&&(W===0?(a.value.muted=!0,a.value.volume=0):(a.value.muted=!1,a.value.volume=W),W>0&&(c.value=W),z||(d.value=a.value.muted),u.value=a.value.muted)}const S=y(!1),_=y(!1),I=y(!1),{start:w,stop:A}=Ls(()=>{I.value=!1,_.value=!1,de(!1)},2500);he(_,v=>{v&&w()});const{isOutside:Y,x:O,y:Q}=Yd(o);he(O,()=>{!m&&!Y.value!==S.value&&de(!Y.value),w()}),he(Q,()=>{!m&&!Y.value!==S.value&&de(!Y.value),w()}),he(_,v=>{m||de(v)});const ue=y(null);U(ue,"input",v=>{de(!0),P(v.target.value)});function de(v){v?w():(_.value=!1,I.value=!1,A()),S.value=v}const lu=y(0),so=y(!1);Jd("https://cdn.jsdelivr.net/npm/hls.js@1.5.6",()=>{nn(r.value.url)},{defer:!0});const tn=y(!1),ro=y(!0);xe(()=>{!so.value&&typeof Hls<"u"&&(so.value=!0,nn(r.value.url))});function nn(v){var z;Hls.isSupported()&&!tn.value?(lu.value=0,f.value=!0,Xn(),l.value=new Hls({enableWorker:!1,liveDurationInfinity:!0,maxBufferSize:254*1e3*1e3,maxBufferLength:60,lowLatencyMode:!0}),l.value.on(Hls.Events.ERROR,(W,pe)=>{if(console.error(pe),pe.details==="manifestParsingError"&&!tn.value)return tn.value=!0,nn(v);if(C(),pe.fatal)switch(pe.type){case Hls.ErrorTypes.NETWORK_ERROR:console.error("fatal network error encountered, try to recover"),l.value.startLoad();break;case Hls.ErrorTypes.MEDIA_ERROR:console.error("fatal media error encountered, try to recover"),l.value.recoverMediaError();break;default:if(console.error("cannot recover error"),ro.value)return ro.value=!1,nn(v);Tt();break}else pe.details===Hls.ErrorDetails.BUFFER_STALLED_ERROR&&(f.value=!0)}),l.value.on(Hls.Events.FRAG_BUFFERED,()=>{E(),f.value=!1}),l.value.on(Hls.Events.MANIFEST_LOADING,()=>{f.value=!0}),l.value.on(Hls.Events.LEVEL_LOADED,()=>{E(),f.value=!1}),l.value.attachMedia(a.value),l.value.loadSource(v),kt()):a.value&&((z=a.value)==null||z.setAttribute("src",v),kt())}function Xn(){l.value&&l.value.destroy()}function cu(){a.value&&(a.value.muted?ei():Zn())}function Zn(){a.value?(a.value.muted=!0,u.value=!0):P(0)}function ei(){a.value?(a.value.muted=!1,u.value=!1):P(c.value||1)}const ti=y(!1);async function sn(){if(!ti.value&&a.value){ti.value=!0;try{a.value.paused?(T.value=!1,await kt()):(T.value=!0,await a.value.pause()),ti.value=!1}catch{ti.value=!1}}}function Tt(){h.value=!1,f.value=!0,tn.value=!1,E();try{nn(r.value.url)}catch(v){console.error(v),Xn()}}const rn=y();U(rn,"pointerenter",()=>{I.value=!0}),U(rn,"pointerleave",()=>{I.value=!1}),U(rn,"focusin",()=>{m||(_.value=!0)}),U(a,"click",()=>{m||(_.value=!0)}),U(rn,"focusout",()=>{_.value=!1});const{isSupported:oo,orientation:uu,lockOrientation:ao,unlockOrientation:du}=Qd(),fs=y(0),ps=y(0),on=G(()=>ps.value<=fs.value),lo=y(!1),{isFullscreen:hu,toggle:co}=Gd(o),an=G(()=>lo.value||hu.value);async function fu(){if(an.value)du(),await co();else{const v=uu.value;await co();try{on.value?["portrait-primary","portrait-secondary","portrait"].includes(v??"")&&oo.value&&await ao("landscape"):["landscape-primary","landscape-secondary","landscape"].includes(v??"")&&oo.value&&await ao("portrait")}catch(z){console.error(z)}}}function pu(){var v;document.pictureInPictureElement?document.exitPictureInPicture():document.pictureInPictureEnabled&&((v=a.value)==null||v.requestPictureInPicture())}function uo(v){tn.value=!1,s.value=v.id,r.value=v,Tt()}const ni=y(0);he(h,v=>{!v&&!T.value?C():(E(),ni.value=0)},{immediate:!0});async function kt(){if(T.value=!1,a.value)try{d.value?Zn():ei(),await a.value.play()}catch(v){if(console.error(v),ni.value>5)return;ni.value+=1,await vi(async()=>(ni.value>4&&(a.value&&(a.value.muted=!0,a.value.volume=0),p.value=0,u.value=!0),kt()))}}const _u=y(!1),ho=y(!1);he(an,()=>{ho.value=window.innerHeight<=window.innerWidth,si()});const ln=y(0),ii=y(0);Fa(()=>{Xn(),document!=null&&document.pictureInPictureElement&&document.exitPictureInPicture()});function mu(){m?S.value?de(!1):de(!0):sn()}function gu(){Xn(),document!=null&&document.pictureInPictureElement&&document.exitPictureInPicture()}const _s=y(),vu=G(()=>ln.value===0?0:ii.value/ln.value*100);t.useShortcut&&(wo("ArrowLeft",()=>{const v=ii.value-2;a.value&&(a.value.currentTime=v<0?0:v)},{eventName:"keyup"}),wo("ArrowRight",()=>{const v=ii.value+2,z=ln.value-3;a.value&&(a.value.currentTime=v>z?z:v)},{eventName:"keyup"})),he(vu,v=>{_s.value&&(_s.value.value=String(v*(Number(_s.value.max)||0)/100))},{immediate:!0});function yu(){var v;return(v=a.value)==null?void 0:v.getAttribute("prop")}U(a,"volumechange",v=>{var z,W;u.value=(z=v.target)==null?void 0:z.muted,p.value=((W=v.target)==null?void 0:W.volume)||0});const wu=G(()=>!u.value&&p.value>=.5?"material-symbols:volume-up":!u.value&&p.value>0?"material-symbols:volume-down":"material-symbols:volume-off"),Eu=G(()=>h.value?"material-symbols:pause":"material-symbols:play-arrow");function Iu(){var v;(v=a.value)==null||v.pause(),T.value=!0}function bu(){a.value&&(a.value.currentTime=ln.value-3)}const cn=li("rotate_feature_v1",()=>!1),un=y(0);function Cu(){cn.value&&(un.value+=90)}const at=y(null),fo=G(()=>un.value/90%2!==0);function si(){var z;if(!at.value){const W=(z=a.value)==null?void 0:z.getBoundingClientRect();at.value={width:(W==null?void 0:W.width)||0,height:(W==null?void 0:W.height)||0}}const v=un.value;if(!(!a.value||!o.value)&&(a.value.style.removeProperty("scale"),v/90%2!==0)){if(!at.value)return;const W=at.value.height/at.value.width,pe=at.value.width/at.value.height;let lt;t.rotateFill==="width"?lt=pe:lt=W,an.value&&(lt=ho.value?on.value?W:pe:on.value?pe:W),a.value.style.scale=`${lt}`}}he(un,()=>{requestAnimationFrame(()=>si())}),U(a,"loadedmetadata",function(){fs.value=this.videoWidth,ps.value=this.videoHeight}),U(a,"loadeddata",function(){fs.value=this.videoWidth,ps.value=this.videoHeight}),U(a,"play",()=>{f.value=!1,h.value=!0}),U(a,"pause",()=>{f.value=!1,h.value=!1}),U(a,"playing",()=>{f.value=!1,h.value=!0}),U(a,"stalled",()=>{f.value=!0}),U(a,"durationchange",()=>{var v;ln.value=((v=a.value)==null?void 0:v.duration)||0}),U(a,"timeupdate",()=>{var v;_u.value||(ii.value=((v=a.value)==null?void 0:v.currentTime)||0)}),U(a,"loadstart",()=>{f.value=!0});function ms(){lo.value=document.fullscreenElement!==null}U(a,"webkitfullscreenchange",()=>{ms()}),U(a,"mozfullscreenchange",()=>{ms()}),U(a,"fullscreenchange",()=>{ms()});const po=y(!1);xe(()=>{U(window,"resize",()=>{requestAnimationFrame(()=>si())}),po.value=document.pictureInPictureEnabled;try{navigator.mediaSession.setActionHandler("nexttrack",()=>{Tt()})}catch(v){console.error(v)}a.value&&(p.value=Number(c.value)||1,P(p.value),h.value=!a.value.paused),vi(()=>{d.value?Zn():ei()})});const Su=G(()=>{const v=fo.value?"aspect-[9/12]":"aspect-video",z=fo.value?"aspect-video":"aspect-[9/12]";return on.value?v:z}),_o=y(!1);return xe(()=>{_o.value=!0}),e({stop:gu,rotate:Cu,syncLive:bu,calculateVideoSize:si,isPlaying:h,isMuted:u,reload:Tt,togglePlay:sn,isLandscape:on,changeSource:uo,checkMute:yu,volume:p,pause:Iu,play:kt,mute:Zn,unmute:ei,setVolume:P}),(v,z)=>{const W=Ru,pe=nd,lt=Pd,Tu=Nd,ku=Ka;return V(),X("div",{ref_key:"videoPlayer",ref:o,class:dn(["overflow-hidden relative group flex items-center transform-all duration-300",[b(cn)?v.rotateFill==="width"?b(Su):"h-full w-full":"w-full h-full",{"!cursor-none":!b(S)&&b(h),invisible:!b(_o)}]])},[L("video",{ref_key:"video",ref:a,playsinline:"",controls:!(!v.useDefaultControl||b(cn)||v.hideControl),class:dn([{"object-cover":!b(an)},"inset-0 w-full h-full transition-all duration-500 origin-center"]),style:mo({transform:b(cn)?`rotate(${b(un)}deg)`:"none"}),poster:v.poster,onClick:mu},th,14,Zd),!v.useDefaultControl||b(cn)?(V(),X("div",nh,[!b(h)&&!b(f)?(V(),X("div",{key:0,class:"z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1",onClick:z[0]||(z[0]=()=>{b(m)&&sn()})},[_e(W,{name:"material-symbols:play-arrow",class:"text-white/60",size:"3rem"})])):te("",!0),b(m)&&b(h)&&b(S)&&!b(f)?(V(),X("div",{key:1,class:"z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1",onClick:sn},[_e(W,{name:"material-symbols:pause",class:"text-white/60",size:"3rem"})])):te("",!0),b(f)?(V(),X("div",ih,[_e(pe,{class:"text-white size-12"})])):te("",!0),v.title?(V(),X("div",{key:3,class:dn([{"opacity-100":b(S)||b(_)||b(I)},"absolute top-0 inset-x-0 z-10 opacity-0 text-white px-3 pt-2 pb-4 text-base md:text-lg font-bold bg-title transition-opacity duration-200"])},we(v.title),3)):te("",!0),L("div",{id:"control",ref_key:"videoControl",ref:rn,class:dn([{"opacity-100":b(S)||b(_)||b(I)},"absolute inset-x-0 bottom-0 z-10 text-slate-200 opacity-0 duration-200 ease-in-out transition-opacity"]),onClick:z[2]||(z[2]=ct=>de(!0))},[L("div",{class:dn({"pointer-events-none":b(m)&&!b(S)})},[L("div",sh,[L("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Play",type:"button",onClick:sn},[_e(W,{name:b(Eu),class:"h-full w-full"},null,8,["name"])]),v.compact?te("",!0):(V(),X("div",rh,[L("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Mute",type:"button",onClick:cu},[_e(W,{name:b(wu),class:"h-full w-full"},null,8,["name"])]),L("div",oh,[L("div",ah,[L("div",{class:"h-full bg-slate-200",style:mo({width:`${b(p)*100}%`})},null,4)]),Bu(L("input",{ref_key:"volumeSlider",ref:ue,"onUpdate:modelValue":z[1]||(z[1]=ct=>$u(p)?p.value=ct:null),"aria-label":"Volume",type:"range",min:"0",max:"1",step:"0.01",class:"volume-slider z-20 h-1 w-16 cursor-pointer md:w-20 pt-1"},null,512),[[Vu,b(p)]])])])),lh,L("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Reload",type:"button",onClick:Tt},[_e(W,{name:"material-symbols:refresh",class:"h-full w-full p-[1px]"})]),v.compact?te("",!0):(V(),ht(ku,{key:1},{default:hn(()=>[_e(lt,{"aria-label":"Setting",class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1"},{default:hn(()=>[_e(W,{name:"material-symbols:settings",class:"h-full w-full p-[2px] duration-300"})]),_:1}),_e(zu,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-2 translate-x-1 opacity-0","enter-to-class":"translate-y-0 translate-x-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 translate-x-x opacity-100","leave-to-class":"translate-y-2 translate-x-1 opacity-0"},{default:hn(()=>[_e(Tu,{class:"absolute bottom-11 right-4 rounded-md bg-black/70 dark:bg-black/80"},{default:hn(()=>[L("div",null,[ch,L("div",uh,[(V(!0),X(Bn,null,ju(b(i),ct=>(V(),ht(lt,{key:ct.id,class:"flex items-center truncate text-left text-sm hover:bg-black/50",onClick:()=>uo(ct)},{default:hn(()=>[L("div",dh,[b(r).id===ct.id?(V(),ht(W,{key:0,name:"ic:round-check",class:"h-full w-full p-2.5"})):te("",!0)]),L("div",null,we(ct.label),1)]),_:2},1032,["onClick"]))),128))])])]),_:1})]),_:1})]),_:1})),b(po)?(V(),X("button",{key:2,class:"group h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Fullscreen",type:"button",onClick:pu},[_e(W,{name:"material-symbols:picture-in-picture-sharp",class:"h-full w-full p-0.5 duration-300"})])):te("",!0),L("button",{class:"group h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Fullscreen",type:"button",onClick:fu},[b(an)?(V(),ht(W,{key:1,name:"material-symbols:fullscreen-exit",class:"h-full w-full duration-300 hover:scale-125"})):(V(),ht(W,{key:0,name:"material-symbols:fullscreen",class:"h-full w-full duration-300 hover:scale-125"}))])])],2)],2)])):te("",!0)],2)}}});function fh(){return Gu}class ph{static encrypt(e,t){let i="";for(let s=0;s<e.length;s++){const r=s%t.length,a=`00${(e[s].charCodeAt(0)^t[r].charCodeAt(0)).toString(16)}`.slice(-2);i+=a}return i}static decrypt(e,t){let i="";const s=[];let r;for(r=0;r<e.length;r=r+2)s.push(e[r]+e[r+1]);for(r=0;r<s.length;r++){const o=s[r],a=parseInt(o,16),l=r%t.length,c=a^t[l].charCodeAt(0);i+=String.fromCharCode(c)}return i}}const _h="KimiNo";function mh(n){return ph.decrypt(n,_h+gh+yh)}const gh="Kotoga";function vh(n){return typeof n=="string"&&(n=parseInt(n)),n.toString().length>10}const yh="SukiDakara",wh={key:0,class:"text-center flex flex-col gap-1"},Eh={class:"text-xl"},Ih={class:"flex gap-3 justify-center"},bh={key:0,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Ch={class:"leading-6"},Sh=L("span",{class:"text-sm"},"bulan",-1),Th={key:1,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},kh={class:"leading-6"},Rh=L("span",{class:"text-sm"},"hari",-1),Ph={key:2,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Nh={class:"leading-6"},Ah=L("span",{class:"text-sm"},"jam",-1),Oh={key:3,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Dh={class:"leading-6"},xh=L("span",{class:"text-sm"},"menit",-1),Mh={key:4,class:"flex flex-col justify-center items-center bg-white text-zinc-800 size-12 rounded-md"},Lh={class:"leading-6"},Fh=L("span",{class:"text-sm"},"detik",-1),Uh=st({__name:"CountDown",props:{time:{}},setup(n){const e=n,t=fh(),i=t(vh(e.time)?e.time:Number(e.time)*1e3),s=y(t.duration(i.diff(t()))),r=y(s.value.asSeconds()<=0),{start:o}=Ls(()=>{const a=s.value.subtract(1,"seconds");s.value.asSeconds()<=1?(r.value=!0,s.value=t.duration(0)):(s.value=a,o())},1e3,{immediate:!0});return(a,l)=>(V(),X("div",null,[b(r)?te("",!0):(V(),X("div",wh,[L("div",Eh,we(b(i).format("dddd, DD MMMM YYYY")),1),L("div",Ih,[b(s).months()>0?(V(),X("div",bh,[L("span",Ch,we(b(s).months()),1),Pt(),Sh])):te("",!0),b(s).days()>0?(V(),X("div",Th,[L("span",kh,we(b(s).days()),1),Pt(),Rh])):te("",!0),b(s).hours()>0?(V(),X("div",Ph,[L("span",Nh,we(b(s).hours()),1),Pt(),Ah])):te("",!0),b(s).minutes()>0?(V(),X("div",Oh,[L("span",Dh,we(b(s).minutes()),1),Pt(),xh])):te("",!0),b(s).seconds()>0||b(s).asSeconds()>0?(V(),X("div",Mh,[L("span",Lh,we(b(s).seconds()),1),Pt(),Fh])):te("",!0)])]))]))}});var bo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(n,e){if(!n)throw Gt(e)},Gt=function(n){return new Error("Firebase Database ("+tl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Wh=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},dr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(t[u],t[d],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Hh;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const il=function(n){const e=nl(n);return dr.encodeByteArray(e,!0)},Ii=function(n){return il(n).replace(/\./g,"")},bi=function(n){try{return dr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n){return sl(void 0,n)}function sl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Vh(t)||(n[t]=sl(n[t],e[t]));return n}function Vh(n){return n!=="__proto__"}/**
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
 */function $h(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jh=()=>$h().__FIREBASE_DEFAULTS__,zh=()=>{if(typeof process>"u"||typeof bo>"u")return;const n=bo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bi(n[1]);return e&&JSON.parse(e)},hr=()=>{try{return jh()||zh()||Gh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rl=n=>{var e,t;return(t=(e=hr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qh=n=>{const e=rl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ol=()=>{var n;return(n=hr())===null||n===void 0?void 0:n.config},al=n=>{var e;return(e=hr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Kh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ii(JSON.stringify(t)),Ii(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function Yh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ll(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qh(){const n=re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cl(){return tl.NODE_ADMIN===!0}function Jh(){try{return typeof indexedDB=="object"}catch{return!1}}function Xh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="FirebaseError";class rt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Zh,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$n.prototype.create)}}class $n{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?ef(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new rt(s,a,i)}}function ef(n,e){return n.replace(tf,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const tf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n){return JSON.parse(n)}function Z(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Rn(bi(r[0])||""),t=Rn(bi(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},nf=function(n){const e=ul(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},sf=function(n){const e=ul(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ft(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ci(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Si(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Ti(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Co(r)&&Co(o)){if(!Ti(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Co(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function gn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function vn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function of(n,e){const t=new af(n,e);return t.subscribe.bind(t)}class af{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");lf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=vs),s.error===void 0&&(s.error=vs),s.complete===void 0&&(s.complete=vs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function vs(){}function Ut(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,g(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Qi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function oe(n){return n&&n._delegate?n._delegate:n}class mt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ut="[DEFAULT]";/**
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
 */class uf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Te;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hf(e))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ut){return this.instances.has(e)}getOptions(e=ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:df(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ut){return this.component?this.component.multipleInstances?e:ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function df(n){return n===ut?void 0:n}function hf(n){return n.instantiationMode==="EAGER"}/**
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
 */class ff{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const pf={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},_f=B.INFO,mf={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},gf=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=mf[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pr{constructor(e){this.name=e,this._logLevel=_f,this._logHandler=gf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const vf=(n,e)=>e.some(t=>n instanceof t);let So,To;function yf(){return So||(So=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wf(){return To||(To=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dl=new WeakMap,Fs=new WeakMap,hl=new WeakMap,ys=new WeakMap,_r=new WeakMap;function Ef(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(qe(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&dl.set(t,n)}).catch(()=>{}),_r.set(e,n),e}function If(n){if(Fs.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Fs.set(n,e)}let Us={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bf(n){Us=n(Us)}function Cf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ws(this),e,...t);return hl.set(i,e.sort?e.sort():[e]),qe(i)}:wf().includes(n)?function(...e){return n.apply(ws(this),e),qe(dl.get(this))}:function(...e){return qe(n.apply(ws(this),e))}}function Sf(n){return typeof n=="function"?Cf(n):(n instanceof IDBTransaction&&If(n),vf(n,yf())?new Proxy(n,Us):n)}function qe(n){if(n instanceof IDBRequest)return Ef(n);if(ys.has(n))return ys.get(n);const e=Sf(n);return e!==n&&(ys.set(n,e),_r.set(e,n)),e}const ws=n=>_r.get(n);function Tf(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=qe(o);return i&&o.addEventListener("upgradeneeded",l=>{i(qe(o.result),l.oldVersion,l.newVersion,qe(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kf=["get","getKey","getAll","getAllKeys","count"],Rf=["put","add","delete","clear"],Es=new Map;function ko(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Es.get(e))return Es.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Rf.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||kf.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Es.set(e,r),r}bf(n=>({...n,get:(e,t,i)=>ko(e,t)||n.get(e,t,i),has:(e,t)=>!!ko(e,t)||n.has(e,t)}));/**
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
 */class Pf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Nf(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Nf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ws="@firebase/app",Ro="0.10.1";/**
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
 */const gt=new pr("@firebase/app"),Af="@firebase/app-compat",Of="@firebase/analytics-compat",Df="@firebase/analytics",xf="@firebase/app-check-compat",Mf="@firebase/app-check",Lf="@firebase/auth",Ff="@firebase/auth-compat",Uf="@firebase/database",Wf="@firebase/database-compat",Hf="@firebase/functions",Bf="@firebase/functions-compat",Vf="@firebase/installations",$f="@firebase/installations-compat",jf="@firebase/messaging",zf="@firebase/messaging-compat",Gf="@firebase/performance",qf="@firebase/performance-compat",Kf="@firebase/remote-config",Yf="@firebase/remote-config-compat",Qf="@firebase/storage",Jf="@firebase/storage-compat",Xf="@firebase/firestore",Zf="@firebase/firestore-compat",ep="firebase",tp="10.11.0";/**
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
 */const Hs="[DEFAULT]",np={[Ws]:"fire-core",[Af]:"fire-core-compat",[Df]:"fire-analytics",[Of]:"fire-analytics-compat",[Mf]:"fire-app-check",[xf]:"fire-app-check-compat",[Lf]:"fire-auth",[Ff]:"fire-auth-compat",[Uf]:"fire-rtdb",[Wf]:"fire-rtdb-compat",[Hf]:"fire-fn",[Bf]:"fire-fn-compat",[Vf]:"fire-iid",[$f]:"fire-iid-compat",[jf]:"fire-fcm",[zf]:"fire-fcm-compat",[Gf]:"fire-perf",[qf]:"fire-perf-compat",[Kf]:"fire-rc",[Yf]:"fire-rc-compat",[Qf]:"fire-gcs",[Jf]:"fire-gcs-compat",[Xf]:"fire-fst",[Zf]:"fire-fst-compat","fire-js":"fire-js",[ep]:"fire-js-all"};/**
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
 */const ki=new Map,ip=new Map,Bs=new Map;function Po(n,e){try{n.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wt(n){const e=n.name;if(Bs.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;Bs.set(e,n);for(const t of ki.values())Po(t,n);for(const t of ip.values())Po(t,n);return!0}function mr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Pe(n){return n.settings!==void 0}/**
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
 */const sp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new $n("app","Firebase",sp);/**
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
 */class rp{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
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
 */const Kt=tp;function fl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Hs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(t||(t=ol()),!t)throw Ke.create("no-options");const r=ki.get(s);if(r){if(Ti(t,r.options)&&Ti(i,r.config))return r;throw Ke.create("duplicate-app",{appName:s})}const o=new ff(s);for(const l of Bs.values())o.addComponent(l);const a=new rp(t,i,o);return ki.set(s,a),a}function pl(n=Hs){const e=ki.get(n);if(!e&&n===Hs&&ol())return fl();if(!e)throw Ke.create("no-app",{appName:n});return e}function Ye(n,e,t){var i;let s=(i=np[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(a.join(" "));return}Wt(new mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const op="firebase-heartbeat-database",ap=1,Pn="firebase-heartbeat-store";let Is=null;function _l(){return Is||(Is=Tf(op,ap,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ke.create("idb-open",{originalErrorMessage:n.message})})),Is}async function lp(n){try{const t=(await _l()).transaction(Pn),i=await t.objectStore(Pn).get(ml(n));return await t.done,i}catch(e){if(e instanceof rt)gt.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(t.message)}}}async function No(n,e){try{const i=(await _l()).transaction(Pn,"readwrite");await i.objectStore(Pn).put(e,ml(n)),await i.done}catch(t){if(t instanceof rt)gt.warn(t.message);else{const i=Ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gt.warn(i.message)}}}function ml(n){return`${n.name}!${n.options.appId}`}/**
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
 */const cp=1024,up=30*24*60*60*1e3;class dp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fp(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ao();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=up}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ao(),{heartbeatsToSend:i,unsentEntries:s}=hp(this._heartbeatsCache.heartbeats),r=Ii(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ao(){return new Date().toISOString().substring(0,10)}function hp(n,e=cp){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Oo(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Oo(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jh()?Xh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return No(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return No(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Oo(n){return Ii(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function pp(n){Wt(new mt("platform-logger",e=>new Pf(e),"PRIVATE")),Wt(new mt("heartbeat",e=>new dp(e),"PRIVATE")),Ye(Ws,Ro,n),Ye(Ws,Ro,"esm2017"),Ye("fire-js","")}pp("");var _p="firebase",mp="10.11.0";/**
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
 */Ye(_p,mp,"app");var Do={};const xo="@firebase/database",Mo="1.0.4";/**
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
 */let gl="";function gp(n){gl=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Rn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Se(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vp(e)}}catch{}return new yp},pt=vl("localStorage"),wp=vl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new pr("@firebase/database"),Ep=function(){let n=1;return function(){return n++}}(),yl=function(n){const e=cf(n),t=new rf;t.update(e);const i=t.digest();return dr.encodeByteArray(i)},jn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=jn.apply(null,i):typeof i=="object"?e+=Z(i):e+=i,e+=" "}return e};let wn=null,Lo=!0;const Ip=function(n,e){g(!e,"Can't turn on custom loggers persistently."),Ot.logLevel=B.VERBOSE,wn=Ot.log.bind(Ot)},ie=function(...n){if(Lo===!0&&(Lo=!1,wn===null&&wp.get("logging_enabled")===!0&&Ip()),wn){const e=jn.apply(null,n);wn(e)}},zn=function(n){return function(...e){ie(n,...e)}},Vs=function(...n){const e="FIREBASE INTERNAL ERROR: "+jn(...n);Ot.error(e)},Fe=function(...n){const e=`FIREBASE FATAL ERROR: ${jn(...n)}`;throw Ot.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+jn(...n);Ot.warn(e)},bp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ji=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Cp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ht="[MIN_NAME]",vt="[MAX_NAME]",bt=function(n,e){if(n===e)return 0;if(n===Ht||e===vt)return-1;if(e===Ht||n===vt)return 1;{const t=Fo(n),i=Fo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Sp=function(n,e){return n===e?0:n<e?-1:1},fn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Z(e))},gr=function(n){if(typeof n!="object"||n===null)return Z(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Z(e[i]),t+=":",t+=gr(n[e[i]]);return t+="}",t},wl=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function se(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const El=function(n){g(!Ji(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Tp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Rp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Pp=new RegExp("^-?(0*)\\d{1,10}$"),Np=-2147483648,Ap=2147483647,Fo=function(n){if(Pp.test(n)){const e=Number(n);if(e>=Np&&e<=Ap)return e}return null},Yt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},Op=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},En=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Dp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class fi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="5",Il="v",bl="s",Cl="r",Sl="f",Tl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kl="ls",Rl="p",$s="ac",Pl="websocket",Nl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Mp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ol(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let i;if(e===Pl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Nl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Mp(n)&&(t.ns=n.namespace);const s=[];return se(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.counters_={}}incrementCounter(e,t=1){Se(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Bh(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs={},Cs={};function yr(n){const e=n.toString();return bs[e]||(bs[e]=new Lp),bs[e]}function Fp(n,e){const t=n.toString();return Cs[t]||(Cs[t]=e()),Cs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Yt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="start",Wp="close",Hp="pLPCommand",Bp="pRTLPCB",Dl="id",xl="pw",Ml="ser",Vp="cb",$p="seg",jp="ts",zp="d",Gp="dframe",Ll=1870,Fl=30,qp=Ll-Fl,Kp=25e3,Yp=3e4;class Nt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zn(e),this.stats_=yr(t),this.urlFn=l=>(this.appCheckToken&&(l[$s]=this.appCheckToken),Ol(t,Nl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Up(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Yp)),Cp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wr((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Uo)this.id=a,this.password=l;else if(o===Wp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Uo]="t",i[Ml]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Vp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Il]=vr,this.transportSessionId&&(i[bl]=this.transportSessionId),this.lastSessionId&&(i[kl]=this.lastSessionId),this.applicationId&&(i[Rl]=this.applicationId),this.appCheckToken&&(i[$s]=this.appCheckToken),typeof location<"u"&&location.hostname&&Tl.test(location.hostname)&&(i[Cl]=Sl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Nt.forceAllow_=!0}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){return Nt.forceAllow_?!0:!Nt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Tp()&&!kp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=il(t),s=wl(i,qp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Gp]="t",i[Dl]=e,i[xl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class wr{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ep(),window[Hp+this.uniqueCallbackIdentifier]=e,window[Bp+this.uniqueCallbackIdentifier]=t,this.myIFrame=wr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ie("frame writing exception"),a.stack&&ie(a.stack),ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ie("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dl]=this.myID,e[xl]=this.myPW,e[Ml]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fl+i.length<=Ll;){const o=this.pendingSegs.shift();i=i+"&"+$p+s+"="+o.seg+"&"+jp+s+"="+o.ts+"&"+zp+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Kp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=16384,Jp=45e3;let Ri=null;typeof MozWebSocket<"u"?Ri=MozWebSocket:typeof WebSocket<"u"&&(Ri=WebSocket);class me{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zn(this.connId),this.stats_=yr(t),this.connURL=me.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Il]=vr,typeof location<"u"&&location.hostname&&Tl.test(location.hostname)&&(o[Cl]=Sl),t&&(o[bl]=t),i&&(o[kl]=i),s&&(o[$s]=s),r&&(o[Rl]=r),Ol(e,Pl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pt.set("previous_websocket_failure",!0);try{let i;cl(),this.mySock=new Ri(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){me.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ri!==null&&!me.forceDisallow_}static previouslyFailed(){return pt.isInMemoryStorage||pt.get("previous_websocket_failure")===!0}markConnectionHealthy(){pt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Rn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=wl(t,Qp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Jp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}me.responsesRequiredToBeHealthy=2;me.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Nt,me]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=me&&me.isAvailable();let i=t&&!me.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[me];else{const s=this.transports_=[];for(const r of Nn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Nn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Nn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=6e4,Zp=5e3,e_=10*1024,t_=100*1024,Ss="t",Wo="d",n_="s",Ho="r",i_="e",Bo="o",Vo="a",$o="n",jo="p",s_="h";class r_{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zn("c:"+this.id+":"),this.transportManager_=new Nn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=En(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>t_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>e_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ss in e){const t=e[Ss];t===Vo?this.upgradeIfSecondaryHealthy_():t===Ho?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Bo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=fn("t",e),i=fn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$o,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=fn("t",e),i=fn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=fn(Ss,e);if(Wo in e){const i=e[Wo];if(t===s_){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===$o){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===n_?this.onConnectionShutdown_(i):t===Ho?this.onReset_(i):t===i_?Vs("Server Error: "+i):t===Bo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),vr!==i&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),En(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Xp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):En(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Zp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Wl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pi}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=32,Go=768;class H{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function F(){return new H("")}function D(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function et(n){return n.pieces_.length-n.pieceNum_}function $(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new H(n.pieces_,e)}function Er(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function o_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function An(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Hl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new H(e,0)}function q(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof H)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new H(t,0)}function x(n){return n.pieceNum_>=n.pieces_.length}function ae(n,e){const t=D(n),i=D(e);if(t===null)return e;if(t===i)return ae($(n),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function a_(n,e){const t=An(n,0),i=An(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=bt(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Ir(n,e){if(et(n)!==et(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function fe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(et(n)>et(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class l_{constructor(e,t){this.errorPrefix_=t,this.parts_=An(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Qi(this.parts_[i]);Bl(this)}}function c_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Qi(e),Bl(n)}function u_(n){const e=n.parts_.pop();n.byteLength_-=Qi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Bl(n){if(n.byteLength_>Go)throw new Error(n.errorPrefix_+"has a key path longer than "+Go+" bytes ("+n.byteLength_+").");if(n.parts_.length>zo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zo+") or object contains a cycle "+dt(n))}function dt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Wl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new br}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=1e3,d_=60*5*1e3,qo=30*1e3,h_=1.3,f_=3e4,p_="server_kill",Ko=3;class Me extends Ul{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Me.nextPersistentConnectionId_++,this.log_=zn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pn,this.maxReconnectDelay_=d_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!cl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");br.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Z(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Te,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Me.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Se(e,"w")){const i=Ft(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=nf(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Vs("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>f_&&(this.reconnectDelay_=pn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*h_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Me.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ie("getToken() completed but was canceled"):(ie("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new r_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{ce(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(p_)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ce(d),l())}}}interrupt(e){ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ci(this.interruptReasons_)&&(this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>gr(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new H(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ie("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ko&&(this.reconnectDelay_=qo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ie("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ko&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+gl.replace(/\./g,"-")]=1,fr()?e["framework.cordova"]=1:ll()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pi.getInstance().currentlyOnline();return Ci(this.interruptReasons_)&&e}}Me.nextPersistentConnectionId_=0;Me.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new M(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new M(Ht,e),s=new M(Ht,t);return this.compare(i,s)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;class Vl extends Xi{static get __EMPTY_NODE(){return ci}static set __EMPTY_NODE(e){ci=e}compare(e,t){return bt(e.name,t.name)}isDefinedOn(e){throw Gt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return M.MIN}maxPost(){return new M(vt,ci)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,ci)}toString(){return".key"}}const Dt=new Vl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ne{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ne.RED,this.left=s??le.EMPTY_NODE,this.right=r??le.EMPTY_NODE}copy(e,t,i,s,r){return new ne(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return le.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ne.RED=!0;ne.BLACK=!1;class __{copy(e,t,i,s,r){return this}insert(e,t,i){return new ne(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class le{constructor(e,t=le.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new le(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ne.BLACK,null,null))}remove(e){return new le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ne.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ui(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ui(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ui(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ui(this.root_,null,this.comparator_,!0,e)}}le.EMPTY_NODE=new __;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n,e){return bt(n.name,e.name)}function Cr(n,e){return bt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js;function g_(n){js=n}const $l=function(n){return typeof n=="number"?"number:"+El(n):"string:"+n},jl=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Se(e,".sv"),"Priority must be a string or number.")}else g(n===js||n.isEmpty(),"priority of unexpected type.");g(n===js||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;class ee{constructor(e,t=ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jl(this.priorityNode_)}static set __childrenNodeConstructor(e){Yo=e}static get __childrenNodeConstructor(){return Yo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return x(e)?this:D(e)===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=D(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(g(i!==".priority"||et(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ee.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$l(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=El(this.value_):e+=this.value_,this.lazyHash_=yl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ee.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ee.VALUE_TYPE_ORDER.indexOf(t),r=ee.VALUE_TYPE_ORDER.indexOf(i);return g(s>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl,Gl;function v_(n){zl=n}function y_(n){Gl=n}class w_ extends Xi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?bt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return M.MIN}maxPost(){return new M(vt,new ee("[PRIORITY-POST]",Gl))}makePost(e,t){const i=zl(e);return new M(t,new ee("[PRIORITY-POST]",i))}toString(){return".priority"}}const K=new w_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=Math.log(2);class I_{constructor(e){const t=r=>parseInt(Math.log(r)/E_,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ni=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new ne(h,d.node,ne.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),m=s(f+1,c);return d=n[f],h=t?t(d):d,new ne(h,d.node,ne.BLACK,p,m)}},r=function(l){let c=null,u=null,d=n.length;const h=function(p,m){const C=d-p,E=d;d-=p;const T=s(C+1,E),P=n[C],S=t?t(P):P;f(new ne(S,P.node,m,null,T))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),C=Math.pow(2,l.count-(p+1));m?h(C,ne.BLACK):(h(C,ne.BLACK),h(C,ne.RED))}return u},o=new I_(n.length),a=r(o);return new le(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;const Rt={};class Ne{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return g(Rt&&K,"ChildrenNode.ts has not been loaded"),Ts=Ts||new Ne({".priority":Rt},{".priority":K}),Ts}get(e){const t=Ft(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof le?t:null}hasIndex(e){return Se(this.indexSet_,e.toString())}addIndex(e,t){g(e!==Dt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(M.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ni(i,e.getCompare()):a=Rt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ne(u,c)}addToIndexes(e,t){const i=Si(this.indexes_,(s,r)=>{const o=Ft(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),s===Rt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(M.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ni(a,o.getCompare())}else return Rt;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new M(e.name,a))),l.insert(e,e.node)}});return new Ne(i,this.indexSet_)}removeFromIndexes(e,t){const i=Si(this.indexes_,s=>{if(s===Rt)return s;{const r=t.get(e.name);return r?s.remove(new M(e.name,r)):s}});return new Ne(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n;class k{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&jl(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _n||(_n=new k(new le(Cr),null,Ne.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_n}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?_n:t}}getChild(e){const t=D(e);return t===null?this:this.getImmediateChild(t).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new M(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?_n:this.priorityNode_;return new k(s,o,r)}}updateChild(e,t){const i=D(e);if(i===null)return t;{g(D(e)!==".priority"||et(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild($(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(K,(o,a)=>{t[o]=a.val(e),i++,r&&k.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$l(this.getPriority().val())+":"),this.forEachChild(K,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":yl(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new M(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new M(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new M(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,M.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gn?-1:0}withIndex(e){if(e===Dt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Dt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(K),s=t.getIterator(K);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dt?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class b_ extends k{constructor(){super(new le(Cr),k.EMPTY_NODE,Ne.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const Gn=new b_;Object.defineProperties(M,{MIN:{value:new M(Ht,k.EMPTY_NODE)},MAX:{value:new M(vt,Gn)}});Vl.__EMPTY_NODE=k.EMPTY_NODE;ee.__childrenNodeConstructor=k;g_(Gn);y_(Gn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=!0;function J(n,e=null){if(n===null)return k.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ee(t,J(e))}if(!(n instanceof Array)&&C_){const t=[];let i=!1;if(se(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=J(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new M(o,l)))}}),t.length===0)return k.EMPTY_NODE;const r=Ni(t,m_,o=>o.name,Cr);if(i){const o=Ni(t,K.getCompare());return new k(r,J(e),new Ne({".priority":o},{".priority":K}))}else return new k(r,J(e),Ne.Default)}else{let t=k.EMPTY_NODE;return se(n,(i,s)=>{if(Se(n,i)&&i.substring(0,1)!=="."){const r=J(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(J(e))}}v_(J);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_ extends Xi{constructor(e){super(),this.indexPath_=e,g(!x(e)&&D(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?bt(e.name,t.name):r}makePost(e,t){const i=J(e),s=k.EMPTY_NODE.updateChild(this.indexPath_,i);return new M(t,s)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,Gn);return new M(vt,e)}toString(){return An(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_ extends Xi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?bt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,t){const i=J(e);return new M(t,i)}toString(){return".value"}}const k_=new T_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){return{type:"value",snapshotNode:n}}function Bt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function On(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Dn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function R_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(On(t,a)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bt(t,i)):o.trackChildChange(Dn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(K,(s,r)=>{t.hasChild(s)||i.trackChildChange(On(s,r))}),t.isLeafNode()||t.forEachChild(K,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Dn(s,r,o))}else i.trackChildChange(Bt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.indexedFilter_=new Sr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xn.getStartPost_(e),this.endPost_=xn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new M(t,i))||(i=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=k.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(k.EMPTY_NODE);const r=this;return t.forEachChild(K,(o,a)=>{r.matches(new M(o,a))||(s=s.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new M(t,i))||(i=k.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(k.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;g(a.numChildren()===this.limit_,"");const l=new M(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Dn(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(On(t,d));const m=a.updateImmediateChild(t,k.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Bt(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(On(c.name,c.node)),r.trackChildChange(Bt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,k.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=K}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ht}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===K}copy(){const e=new Tr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function N_(n){return n.loadsAllData()?new Sr(n.getIndex()):n.hasLimit()?new P_(n):new xn(n)}function Qo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===K?t="$priority":n.index_===k_?t="$value":n.index_===Dt?t="$key":(g(n.index_ instanceof S_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Z(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Z(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Z(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Z(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Z(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Jo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==K&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Ul{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=zn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ai.getListenId_(e,i),a={};this.listens_[o]=a;const l=Qo(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Ft(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=Ai.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Qo(e._queryParams),i=e._path.toString(),s=new Te;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Rn(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(){return{value:null,children:new Map}}function Qt(n,e,t){if(x(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=D(e);n.children.has(i)||n.children.set(i,Oi());const s=n.children.get(i);e=$(e),Qt(s,e,t)}}function zs(n,e){if(x(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(K,(i,s)=>{Qt(n,new H(i),s)}),zs(n,e)}}else if(n.children.size>0){const t=D(e);return e=$(e),n.children.has(t)&&zs(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Gs(n,e,t){n.value!==null?t(e,n.value):O_(n,(i,s)=>{const r=new H(e.toString()+"/"+i);Gs(s,r,t)})}function O_(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&se(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=10*1e3,x_=30*1e3,M_=5*60*1e3;class L_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new D_(e);const i=Xo+(x_-Xo)*Math.random();En(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;se(e,(s,r)=>{r>0&&Se(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),En(this.reportStats_.bind(this),Math.floor(Math.random()*2*M_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ge||(ge={}));function kr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ge.ACK_USER_WRITE,this.source=kr()}operationForChild(e){if(x(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new H(e));return new Di(F(),t,this.revert)}}else return g(D(this.path)===e,"operationForChild called for unrelated child."),new Di($(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t){this.source=e,this.path=t,this.type=ge.LISTEN_COMPLETE}operationForChild(e){return x(this.path)?new Mn(this.source,F()):new Mn(this.source,$(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ge.OVERWRITE}operationForChild(e){return x(this.path)?new yt(this.source,F(),this.snap.getImmediateChild(e)):new yt(this.source,$(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ge.MERGE}operationForChild(e){if(x(this.path)){const t=this.children.subtree(new H(e));return t.isEmpty()?null:t.value?new yt(this.source,F(),t.value):new Vt(this.source,F(),t)}else return g(D(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vt(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(x(e))return this.isFullyInitialized()&&!this.filtered_;const t=D(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function U_(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(R_(o.childName,o.snapshotNode))}),mn(n,s,"child_removed",e,i,t),mn(n,s,"child_added",e,i,t),mn(n,s,"child_moved",r,i,t),mn(n,s,"child_changed",e,i,t),mn(n,s,"value",e,i,t),s}function mn(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>H_(n,a,l)),o.forEach(a=>{const l=W_(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function W_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function H_(n,e,t){if(e.childName==null||t.childName==null)throw Gt("Should only compare child_ events.");const i=new M(e.childName,e.snapshotNode),s=new M(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n,e){return{eventCache:n,serverCache:e}}function In(n,e,t,i){return Zi(new tt(e,t,i),n.serverCache)}function Kl(n,e,t,i){return Zi(n.eventCache,new tt(e,t,i))}function xi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function wt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;const B_=()=>(ks||(ks=new le(Sp)),ks);class j{constructor(e,t=B_()){this.value=e,this.children=t}static fromObject(e){let t=new j(null);return se(e,(i,s)=>{t=t.set(new H(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:F(),value:this.value};if(x(e))return null;{const i=D(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue($(e),t);return r!=null?{path:q(new H(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(x(e))return this;{const t=D(e),i=this.children.get(t);return i!==null?i.subtree($(e)):new j(null)}}set(e,t){if(x(e))return new j(t,this.children);{const i=D(e),r=(this.children.get(i)||new j(null)).set($(e),t),o=this.children.insert(i,r);return new j(this.value,o)}}remove(e){if(x(e))return this.children.isEmpty()?new j(null):new j(null,this.children);{const t=D(e),i=this.children.get(t);if(i){const s=i.remove($(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new j(null):new j(this.value,r)}else return this}}get(e){if(x(e))return this.value;{const t=D(e),i=this.children.get(t);return i?i.get($(e)):null}}setTree(e,t){if(x(e))return t;{const i=D(e),r=(this.children.get(i)||new j(null)).setTree($(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new j(this.value,o)}}fold(e){return this.fold_(F(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(q(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,F(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(x(e))return null;{const r=D(e),o=this.children.get(r);return o?o.findOnPath_($(e),q(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,F(),t)}foreachOnPath_(e,t,i){if(x(e))return this;{this.value&&i(t,this.value);const s=D(e),r=this.children.get(s);return r?r.foreachOnPath_($(e),q(t,s),i):new j(null)}}foreach(e){this.foreach_(F(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(q(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.writeTree_=e}static empty(){return new ve(new j(null))}}function bn(n,e,t){if(x(e))return new ve(new j(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ae(s,e);return r=r.updateChild(o,t),new ve(n.writeTree_.set(s,r))}else{const s=new j(t),r=n.writeTree_.setTree(e,s);return new ve(r)}}}function qs(n,e,t){let i=n;return se(t,(s,r)=>{i=bn(i,q(e,s),r)}),i}function Zo(n,e){if(x(e))return ve.empty();{const t=n.writeTree_.setTree(e,new j(null));return new ve(t)}}function Ks(n,e){return Ct(n,e)!=null}function Ct(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ae(t.path,e)):null}function ea(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(K,(i,s)=>{e.push(new M(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new M(i,s.value))}),e}function Qe(n,e){if(x(e))return n;{const t=Ct(n,e);return t!=null?new ve(new j(t)):new ve(n.writeTree_.subtree(e))}}function Ys(n){return n.writeTree_.isEmpty()}function $t(n,e){return Yl(F(),n.writeTree_,e)}function Yl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Yl(q(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(q(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n,e){return Zl(e,n)}function V_(n,e,t,i,s){g(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=bn(n.visibleWrites,e,t)),n.lastWriteId=i}function $_(n,e,t,i){g(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=qs(n.visibleWrites,e,t),n.lastWriteId=i}function j_(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function z_(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&G_(a,i.path)?s=!1:fe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return q_(n),!0;if(i.snap)n.visibleWrites=Zo(n.visibleWrites,i.path);else{const a=i.children;se(a,l=>{n.visibleWrites=Zo(n.visibleWrites,q(i.path,l))})}return!0}else return!1}function G_(n,e){if(n.snap)return fe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&fe(q(n.path,t),e))return!0;return!1}function q_(n){n.visibleWrites=Ql(n.allWrites,K_,F()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function K_(n){return n.visible}function Ql(n,e,t){let i=ve.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)fe(t,o)?(a=ae(t,o),i=bn(i,a,r.snap)):fe(o,t)&&(a=ae(o,t),i=bn(i,F(),r.snap.getChild(a)));else if(r.children){if(fe(t,o))a=ae(t,o),i=qs(i,a,r.children);else if(fe(o,t))if(a=ae(o,t),x(a))i=qs(i,F(),r.children);else{const l=Ft(r.children,D(a));if(l){const c=l.getChild($(a));i=bn(i,F(),c)}}}else throw Gt("WriteRecord should have .snap or .children")}}return i}function Jl(n,e,t,i,s){if(!i&&!s){const r=Ct(n.visibleWrites,e);if(r!=null)return r;{const o=Qe(n.visibleWrites,e);if(Ys(o))return t;if(t==null&&!Ks(o,F()))return null;{const a=t||k.EMPTY_NODE;return $t(o,a)}}}else{const r=Qe(n.visibleWrites,e);if(!s&&Ys(r))return t;if(!s&&t==null&&!Ks(r,F()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(fe(c.path,e)||fe(e,c.path))},a=Ql(n.allWrites,o,e),l=t||k.EMPTY_NODE;return $t(a,l)}}}function Y_(n,e,t){let i=k.EMPTY_NODE;const s=Ct(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(K,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Qe(n.visibleWrites,e);return t.forEachChild(K,(o,a)=>{const l=$t(Qe(r,new H(o)),a);i=i.updateImmediateChild(o,l)}),ea(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Qe(n.visibleWrites,e);return ea(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Q_(n,e,t,i,s){g(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=q(e,t);if(Ks(n.visibleWrites,r))return null;{const o=Qe(n.visibleWrites,r);return Ys(o)?s.getChild(t):$t(o,s.getChild(t))}}function J_(n,e,t,i){const s=q(e,t),r=Ct(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Qe(n.visibleWrites,s);return $t(o,i.getNode().getImmediateChild(t))}else return null}function X_(n,e){return Ct(n.visibleWrites,e)}function Z_(n,e,t,i,s,r,o){let a;const l=Qe(n.visibleWrites,e),c=Ct(l,F());if(c!=null)a=c;else if(t!=null)a=$t(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function em(){return{visibleWrites:ve.empty(),allWrites:[],lastWriteId:-1}}function Mi(n,e,t,i){return Jl(n.writeTree,n.treePath,e,t,i)}function Nr(n,e){return Y_(n.writeTree,n.treePath,e)}function ta(n,e,t,i){return Q_(n.writeTree,n.treePath,e,t,i)}function Li(n,e){return X_(n.writeTree,q(n.treePath,e))}function tm(n,e,t,i,s,r){return Z_(n.writeTree,n.treePath,e,t,i,s,r)}function Ar(n,e,t){return J_(n.writeTree,n.treePath,e,t)}function Xl(n,e){return Zl(q(n.treePath,e),n.writeTree)}function Zl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Dn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,On(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Bt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Dn(i,e.snapshotNode,s.oldSnap));else throw Gt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const ec=new im;class Or{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new tt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ar(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:wt(this.viewCache_),r=tm(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n){return{filter:n}}function rm(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function om(n,e,t,i,s){const r=new nm;let o,a;if(t.type===ge.OVERWRITE){const c=t;c.source.fromUser?o=Qs(n,e,c.path,c.snap,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!x(c.path),o=Fi(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ge.MERGE){const c=t;c.source.fromUser?o=lm(n,e,c.path,c.children,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Js(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ge.ACK_USER_WRITE){const c=t;c.revert?o=dm(n,e,c.path,i,s,r):o=cm(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ge.LISTEN_COMPLETE)o=um(n,e,t.path,i,r);else throw Gt("Unknown operation type: "+t.type);const l=r.getChanges();return am(e,o,l),{viewCache:o,changes:l}}function am(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=xi(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(ql(xi(e)))}}function tc(n,e,t,i,s,r){const o=e.eventCache;if(Li(i,t)!=null)return e;{let a,l;if(x(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=wt(e),u=c instanceof k?c:k.EMPTY_NODE,d=Nr(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Mi(i,wt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=D(t);if(c===".priority"){g(et(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=ta(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=$(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=ta(i,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Ar(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return In(e,a,o.isFullyInitialized()||x(t),n.filter.filtersNodes())}}function Fi(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(x(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=D(t);if(!l.isCompleteForPath(t)&&et(t)>1)return e;const p=$(t),C=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),C):c=u.updateChild(l.getNode(),f,C,p,ec,null)}const d=Kl(e,c,l.isFullyInitialized()||x(t),u.filtersNodes()),h=new Or(s,d,r);return tc(n,d,t,s,h,a)}function Qs(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Or(s,e,r);if(x(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=In(e,c,!0,n.filter.filtersNodes());else{const d=D(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=In(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=$(t),f=a.getNode().getImmediateChild(d);let p;if(x(h))p=i;else{const m=u.getCompleteChild(d);m!=null?Er(h)===".priority"&&m.getChild(Hl(h)).isEmpty()?p=m:p=m.updateChild(h,i):p=k.EMPTY_NODE}if(f.equals(p))l=e;else{const m=n.filter.updateChild(a.getNode(),d,p,h,u,o);l=In(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function na(n,e){return n.eventCache.isCompleteForChild(e)}function lm(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=q(t,l);na(e,D(u))&&(a=Qs(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=q(t,l);na(e,D(u))||(a=Qs(n,a,u,c,s,r,o))}),a}function ia(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Js(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;x(t)?c=i:c=new j(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=ia(n,f,h);l=Fi(n,l,new H(d),p,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),m=ia(n,p,h);l=Fi(n,l,new H(d),m,s,r,o,a)}}),l}function cm(n,e,t,i,s,r,o){if(Li(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(x(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Fi(n,e,t,l.getNode().getChild(t),s,r,a,o);if(x(t)){let c=new j(null);return l.getNode().forEachChild(Dt,(u,d)=>{c=c.set(new H(u),d)}),Js(n,e,t,c,s,r,a,o)}else return e}else{let c=new j(null);return i.foreach((u,d)=>{const h=q(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Js(n,e,t,c,s,r,a,o)}}function um(n,e,t,i,s){const r=e.serverCache,o=Kl(e,r.getNode(),r.isFullyInitialized()||x(t),r.isFiltered());return tc(n,o,t,i,ec,s)}function dm(n,e,t,i,s,r){let o;if(Li(i,t)!=null)return e;{const a=new Or(i,e,s),l=e.eventCache.getNode();let c;if(x(t)||D(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Mi(i,wt(e));else{const d=e.serverCache.getNode();g(d instanceof k,"serverChildren would be complete if leaf node"),u=Nr(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=D(t);let d=Ar(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,$(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,k.EMPTY_NODE,$(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mi(i,wt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Li(i,F())!=null,In(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Sr(i.getIndex()),r=N_(i);this.processor_=sm(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(k.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(k.EMPTY_NODE,a.getNode(),null),u=new tt(l,o.isFullyInitialized(),s.filtersNodes()),d=new tt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zi(d,u),this.eventGenerator_=new F_(this.query_)}get query(){return this.query_}}function fm(n){return n.viewCache_.serverCache.getNode()}function pm(n){return xi(n.viewCache_)}function _m(n,e){const t=wt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!x(e)&&!t.getImmediateChild(D(e)).isEmpty())?t.getChild(e):null}function sa(n){return n.eventRegistrations_.length===0}function mm(n,e){n.eventRegistrations_.push(e)}function ra(n,e,t){const i=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function oa(n,e,t,i){e.type===ge.MERGE&&e.source.queryId!==null&&(g(wt(n.viewCache_),"We should always have a full cache before handling merges"),g(xi(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=om(n.processor_,s,e,t,i);return rm(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,nc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function gm(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(K,(r,o)=>{i.push(Bt(r,o))}),t.isFullyInitialized()&&i.push(ql(t.getNode())),nc(n,i,t.getNode(),e)}function nc(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return U_(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui;class ic{constructor(){this.views=new Map}}function vm(n){g(!Ui,"__referenceConstructor has already been defined"),Ui=n}function ym(){return g(Ui,"Reference.ts has not been loaded"),Ui}function wm(n){return n.views.size===0}function Dr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return g(r!=null,"SyncTree gave us an op for an invalid query."),oa(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(oa(o,e,t,i));return r}}function sc(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Mi(t,s?i:null),l=!1;a?l=!0:i instanceof k?(a=Nr(t,i),l=!1):(a=k.EMPTY_NODE,l=!1);const c=Zi(new tt(a,l,!1),new tt(i,s,!1));return new hm(e,c)}return o}function Em(n,e,t,i,s,r){const o=sc(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),mm(o,t),gm(o,t)}function Im(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=nt(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(ra(c,t,i)),sa(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(ra(l,t,i)),sa(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!nt(n)&&r.push(new(ym())(e._repo,e._path)),{removed:r,events:o}}function rc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Je(n,e){let t=null;for(const i of n.views.values())t=t||_m(i,e);return t}function oc(n,e){if(e._queryParams.loadsAllData())return ts(n);{const i=e._queryIdentifier;return n.views.get(i)}}function ac(n,e){return oc(n,e)!=null}function nt(n){return ts(n)!=null}function ts(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi;function bm(n){g(!Wi,"__referenceConstructor has already been defined"),Wi=n}function Cm(){return g(Wi,"Reference.ts has not been loaded"),Wi}let Sm=1;class aa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new j(null),this.pendingWriteTree_=em(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Tm(n,e,t,i,s){return V_(n.pendingWriteTree_,e,t,i,s),s?Jt(n,new yt(kr(),e,t)):[]}function km(n,e,t,i){$_(n.pendingWriteTree_,e,t,i);const s=j.fromObject(t);return Jt(n,new Vt(kr(),e,s))}function _t(n,e,t=!1){const i=j_(n.pendingWriteTree_,e);if(z_(n.pendingWriteTree_,e)){let r=new j(null);return i.snap!=null?r=r.set(F(),!0):se(i.children,o=>{r=r.set(new H(o),!0)}),Jt(n,new Di(i.path,r,t))}else return[]}function qn(n,e,t){return Jt(n,new yt(Rr(),e,t))}function Rm(n,e,t){const i=j.fromObject(t);return Jt(n,new Vt(Rr(),e,i))}function Pm(n,e){return Jt(n,new Mn(Rr(),e))}function Nm(n,e,t){const i=xr(n,t);if(i){const s=Mr(i),r=s.path,o=s.queryId,a=ae(r,e),l=new Mn(Pr(o),a);return Lr(n,r,l)}else return[]}function Hi(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ac(o,e))){const l=Im(o,e,t,i);wm(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>nt(f));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=Dm(h);for(let p=0;p<f.length;++p){const m=f[p],C=m.query,E=hc(n,m);n.listenProvider_.startListening(Cn(C),Ln(n,C),E.hashFn,E.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Cn(e),null):c.forEach(h=>{const f=n.queryToTagMap.get(ns(h));n.listenProvider_.stopListening(Cn(h),f)}))}xm(n,c)}return a}function lc(n,e,t,i){const s=xr(n,i);if(s!=null){const r=Mr(s),o=r.path,a=r.queryId,l=ae(o,e),c=new yt(Pr(a),l,t);return Lr(n,o,c)}else return[]}function Am(n,e,t,i){const s=xr(n,i);if(s){const r=Mr(s),o=r.path,a=r.queryId,l=ae(o,e),c=j.fromObject(t),u=new Vt(Pr(a),l,c);return Lr(n,o,u)}else return[]}function Xs(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,f)=>{const p=ae(h,s);r=r||Je(f,p),o=o||nt(f)});let a=n.syncPointTree_.get(s);a?(o=o||nt(a),r=r||Je(a,F())):(a=new ic,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=k.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const m=Je(p,F());m&&(r=r.updateImmediateChild(f,m))}));const c=ac(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ns(e);g(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Mm();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=es(n.pendingWriteTree_,s);let d=Em(a,e,t,u,r,l);if(!c&&!o&&!i){const h=oc(a,e);d=d.concat(Lm(n,e,h))}return d}function cc(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ae(o,e),c=Je(a,l);if(c)return c});return Jl(s,e,r,t,!0)}function Om(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=ae(c,t);i=i||Je(u,d)});let s=n.syncPointTree_.get(t);s?i=i||Je(s,F()):(s=new ic,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new tt(i,!0,!1):null,a=es(n.pendingWriteTree_,e._path),l=sc(s,e,a,r?o.getNode():k.EMPTY_NODE,r);return pm(l)}function Jt(n,e){return uc(e,n.syncPointTree_,null,es(n.pendingWriteTree_,F()))}function uc(n,e,t,i){if(x(n.path))return dc(n,e,t,i);{const s=e.get(F());s!=null&&(t=Je(s,F()));let r=[];const o=D(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=Xl(i,o);r=r.concat(uc(a,l,null,u))}return s&&(r=r.concat(Dr(s,n,i,t))),r}}function dc(n,e,t,i){const s=e.get(F());s!=null&&(t=Je(s,F()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=Xl(i,o),u=n.operationForChild(o);u&&(r=r.concat(dc(u,a,null,c)))}),s&&(r=r.concat(Dr(s,n,i,t))),r}function hc(n,e){const t=e.query,i=Ln(n,t);return{hashFn:()=>(fm(e)||k.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Nm(n,t._path,i):Pm(n,t._path);{const r=Rp(s,t);return Hi(n,t,null,r)}}}}function Ln(n,e){const t=ns(e);return n.queryToTagMap.get(t)}function ns(n){return n._path.toString()+"$"+n._queryIdentifier}function xr(n,e){return n.tagToQueryMap.get(e)}function Mr(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new H(n.substr(0,e))}}function Lr(n,e,t){const i=n.syncPointTree_.get(e);g(i,"Missing sync point for query tag that we're tracking");const s=es(n.pendingWriteTree_,e);return Dr(i,t,s,null)}function Dm(n){return n.fold((e,t,i)=>{if(t&&nt(t))return[ts(t)];{let s=[];return t&&(s=rc(t)),se(i,(r,o)=>{s=s.concat(o)}),s}})}function Cn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Cm())(n._repo,n._path):n}function xm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=ns(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Mm(){return Sm++}function Lm(n,e,t){const i=e._path,s=Ln(n,e),r=hc(n,t),o=n.listenProvider_.startListening(Cn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)g(!nt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!x(c)&&u&&nt(u))return[ts(u).query];{let h=[];return u&&(h=h.concat(rc(u).map(f=>f.query))),se(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Cn(u),Ln(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Fr(t)}node(){return this.node_}}class Ur{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=q(this.path_,e);return new Ur(this.syncTree_,t)}node(){return cc(this.syncTree_,this.path_)}}const Fm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},la=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Um(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Wm(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Um=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},Wm=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&g(!1,"Unexpected increment value: "+i);const s=e.node();if(g(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},fc=function(n,e,t,i){return Wr(e,new Ur(t,n),i)},Hm=function(n,e,t){return Wr(n,new Fr(e),t)};function Wr(n,e,t){const i=n.getPriority().val(),s=la(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=la(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ee(a,J(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ee(s))),o.forEachChild(K,(a,l)=>{const c=Wr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Br(n,e){let t=e instanceof H?e:new H(e),i=n,s=D(t);for(;s!==null;){const r=Ft(i.node.children,s)||{children:{},childCount:0};i=new Hr(s,i,r),t=$(t),s=D(t)}return i}function Xt(n){return n.node.value}function pc(n,e){n.node.value=e,Zs(n)}function _c(n){return n.node.childCount>0}function Bm(n){return Xt(n)===void 0&&!_c(n)}function is(n,e){se(n.node.children,(t,i)=>{e(new Hr(t,n,i))})}function mc(n,e,t,i){t&&!i&&e(n),is(n,s=>{mc(s,e,!0,i)}),t&&i&&e(n)}function Vm(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Kn(n){return new H(n.parent===null?n.name:Kn(n.parent)+"/"+n.name)}function Zs(n){n.parent!==null&&$m(n.parent,n.name,n)}function $m(n,e,t){const i=Bm(t),s=Se(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Zs(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Zs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=/[\[\].#$\/\u0000-\u001F\u007F]/,zm=/[\[\].#$\u0000-\u001F\u007F]/,Rs=10*1024*1024,Vr=function(n){return typeof n=="string"&&n.length!==0&&!jm.test(n)},gc=function(n){return typeof n=="string"&&n.length!==0&&!zm.test(n)},Gm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gc(n)},vc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Ji(n)||n&&typeof n=="object"&&Se(n,".sv")},ca=function(n,e,t,i){ss(Ut(n,"value"),e,t)},ss=function(n,e,t){const i=t instanceof H?new l_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+dt(i));if(typeof e=="function")throw new Error(n+"contains a function "+dt(i)+" with contents = "+e.toString());if(Ji(e))throw new Error(n+"contains "+e.toString()+" "+dt(i));if(typeof e=="string"&&e.length>Rs/3&&Qi(e)>Rs)throw new Error(n+"contains a string greater than "+Rs+" utf8 bytes "+dt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(se(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vr(o)))throw new Error(n+" contains an invalid key ("+o+") "+dt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);c_(i,o),ss(n,a,i),u_(i)}),s&&r)throw new Error(n+' contains ".value" child '+dt(i)+" in addition to actual children.")}},qm=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=An(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Vr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(a_);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&fe(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},yc=function(n,e,t,i){const s=Ut(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];se(e,(o,a)=>{const l=new H(o);if(ss(s,a,q(t,l)),Er(l)===".priority"&&!vc(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),qm(s,r)},Km=function(n,e,t){if(Ji(e))throw new Error(Ut(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!vc(e))throw new Error(Ut(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},wc=function(n,e,t,i){if(!gc(t))throw new Error(Ut(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ym=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wc(n,e,t)},di=function(n,e){if(D(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Qm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Gm(t))throw new Error(Ut(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $r(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Ir(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Ec(n,e,t){$r(n,t),Ic(n,i=>Ir(i,e))}function Ce(n,e,t){$r(n,t),Ic(n,i=>fe(i,e)||fe(e,i))}function Ic(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Xm(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Xm(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();wn&&ie("event: "+t.toString()),Yt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="repo_interrupt",eg=25;class tg{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oi(),this.transactionQueueTree_=new Hr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ng(n,e,t){if(n.stats_=yr(n.repoInfo_),n.forceRestClient_||Op())n.server_=new Ai(n.repoInfo_,(i,s,r,o)=>{ua(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>da(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Me(n.repoInfo_,e,(i,s,r,o)=>{ua(n,i,s,r,o)},i=>{da(n,i)},i=>{sg(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Fp(n.repoInfo_,()=>new L_(n.stats_,n.server_)),n.infoData_=new A_,n.infoSyncTree_=new aa({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=qn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),zr(n,"connected",!1),n.serverSyncTree_=new aa({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Ce(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function ig(n){const t=n.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jr(n){return Fm({timestamp:ig(n)})}function ua(n,e,t,i,s){n.dataUpdateCount++;const r=new H(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Si(t,c=>J(c));o=Am(n.serverSyncTree_,r,l,s)}else{const l=J(t);o=lc(n.serverSyncTree_,r,l,s)}else if(i){const l=Si(t,c=>J(c));o=Rm(n.serverSyncTree_,r,l)}else{const l=J(t);o=qn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Fn(n,r)),Ce(n.eventQueue_,a,o)}function da(n,e){zr(n,"connected",e),e===!1&&ag(n)}function sg(n,e){se(e,(t,i)=>{zr(n,t,i)})}function zr(n,e,t){const i=new H("/.info/"+e),s=J(t);n.infoData_.updateSnapshot(i,s);const r=qn(n.infoSyncTree_,i,s);Ce(n.eventQueue_,i,r)}function bc(n){return n.nextWriteId_++}function rg(n,e,t){const i=Om(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=J(s).withIndex(e._queryParams.getIndex());Xs(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=qn(n.serverSyncTree_,e._path,r);else{const a=Ln(n.serverSyncTree_,e);o=lc(n.serverSyncTree_,e._path,r,a)}return Ce(n.eventQueue_,e._path,o),Hi(n.serverSyncTree_,e,t,null,!0),r},s=>(rs(n,"get for query "+Z(e)+" failed: "+s),Promise.reject(new Error(s))))}function og(n,e,t,i){rs(n,"update",{path:e.toString(),value:t});let s=!0;const r=jr(n),o={};if(se(t,(a,l)=>{s=!1,o[a]=fc(q(e,a),J(l),n.serverSyncTree_,r)}),s)ie("update() called with empty data.  Don't do anything."),Et(n,i,"ok",void 0);else{const a=bc(n),l=km(n.serverSyncTree_,e,o,a);$r(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,u)=>{const d=c==="ok";d||ce("update at "+e+" failed: "+c);const h=_t(n.serverSyncTree_,a,!d),f=h.length>0?Fn(n,e):e;Ce(n.eventQueue_,f,h),Et(n,i,c,u)}),se(t,c=>{const u=Pc(n,q(e,c));Fn(n,u)}),Ce(n.eventQueue_,e,[])}}function ag(n){rs(n,"onDisconnectEvents");const e=jr(n),t=Oi();Gs(n.onDisconnect_,F(),(s,r)=>{const o=fc(s,r,n.serverSyncTree_,e);Qt(t,s,o)});let i=[];Gs(t,F(),(s,r)=>{i=i.concat(qn(n.serverSyncTree_,s,r));const o=Pc(n,s);Fn(n,o)}),n.onDisconnect_=Oi(),Ce(n.eventQueue_,F(),i)}function lg(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&zs(n.onDisconnect_,e),Et(n,t,i,s)})}function ha(n,e,t,i){const s=J(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Qt(n.onDisconnect_,e,s),Et(n,i,r,o)})}function cg(n,e,t,i,s){const r=J(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Qt(n.onDisconnect_,e,r),Et(n,s,o,a)})}function ug(n,e,t,i){if(Ci(t)){ie("onDisconnect().update() called with empty data.  Don't do anything."),Et(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&se(t,(o,a)=>{const l=J(a);Qt(n.onDisconnect_,q(e,o),l)}),Et(n,i,s,r)})}function dg(n,e,t){let i;D(e._path)===".info"?i=Xs(n.infoSyncTree_,e,t):i=Xs(n.serverSyncTree_,e,t),Ec(n.eventQueue_,e._path,i)}function hg(n,e,t){let i;D(e._path)===".info"?i=Hi(n.infoSyncTree_,e,t):i=Hi(n.serverSyncTree_,e,t),Ec(n.eventQueue_,e._path,i)}function Cc(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Zm)}function rs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ie(t,...e)}function Et(n,e,t,i){e&&Yt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Sc(n,e,t){return cc(n.serverSyncTree_,e,t)||k.EMPTY_NODE}function Gr(n,e=n.transactionQueueTree_){if(e||os(n,e),Xt(e)){const t=kc(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&fg(n,Kn(e),t)}else _c(e)&&is(e,t=>{Gr(n,t)})}function fg(n,e,t){const i=t.map(c=>c.currentWriteId),s=Sc(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ae(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{rs(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(_t(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();os(n,Br(n.transactionQueueTree_,e)),Gr(n,n.transactionQueueTree_),Ce(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)Yt(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{ce("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Fn(n,e)}},o)}function Fn(n,e){const t=Tc(n,e),i=Kn(t),s=kc(n,t);return pg(n,s,i),i}function pg(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ae(t,l.path);let u=!1,d;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(_t(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=eg)u=!0,d="maxretry",s=s.concat(_t(n.serverSyncTree_,l.currentWriteId,!0));else{const h=Sc(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){ss("transaction failed: Data returned ",f,l.path);let p=J(f);typeof f=="object"&&f!=null&&Se(f,".priority")||(p=p.updatePriority(h.getPriority()));const C=l.currentWriteId,E=jr(n),T=Hm(p,h,E);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=T,l.currentWriteId=bc(n),o.splice(o.indexOf(C),1),s=s.concat(Tm(n.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),s=s.concat(_t(n.serverSyncTree_,C,!0))}else u=!0,d="nodata",s=s.concat(_t(n.serverSyncTree_,l.currentWriteId,!0))}Ce(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}os(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Yt(i[a]);Gr(n,n.transactionQueueTree_)}function Tc(n,e){let t,i=n.transactionQueueTree_;for(t=D(e);t!==null&&Xt(i)===void 0;)i=Br(i,t),e=$(e),t=D(e);return i}function kc(n,e){const t=[];return Rc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Rc(n,e,t){const i=Xt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);is(e,s=>{Rc(n,s,t)})}function os(n,e){const t=Xt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,pc(e,t.length>0?t:void 0)}is(e,i=>{os(n,i)})}function Pc(n,e){const t=Kn(Tc(n,e)),i=Br(n.transactionQueueTree_,e);return Vm(i,s=>{Ps(n,s)}),Ps(n,i),mc(i,s=>{Ps(n,s)}),t}function Ps(n,e){const t=Xt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(_t(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?pc(e,void 0):t.length=r+1,Ce(n.eventQueue_,Kn(e),s);for(let o=0;o<i.length;o++)Yt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function mg(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const fa=function(n,e){const t=gg(n),i=t.namespace;t.domain==="firebase.com"&&Fe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Fe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||bp();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Al(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new H(t.pathString)}},gg=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=_g(n.substring(u,d)));const h=mg(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z(this.snapshot.exportVal())}}class yg{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class wg{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Te;return lg(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){di("OnDisconnect.remove",this._path);const e=new Te;return ha(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){di("OnDisconnect.set",this._path),ca("OnDisconnect.set",e,this._path);const t=new Te;return ha(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){di("OnDisconnect.setWithPriority",this._path),ca("OnDisconnect.setWithPriority",e,this._path),Km("OnDisconnect.setWithPriority",t);const i=new Te;return cg(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){di("OnDisconnect.update",this._path),yc("OnDisconnect.update",e,this._path);const t=new Te;return ug(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class qr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return x(this._path)?null:Er(this._path)}get ref(){return new We(this._repo,this._path)}get _queryIdentifier(){const e=Jo(this._queryParams),t=gr(e);return t==="{}"?"default":t}get _queryObject(){return Jo(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof qr))return!1;const t=this._repo===e._repo,i=Ir(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+o_(this._path)}}class We extends qr{constructor(e,t){super(e,t,new Tr,!1)}get parent(){const e=Hl(this._path);return e===null?null:new We(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Un{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new H(e),i=er(this.ref,e);return new Un(this._node.getChild(t),i,K)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Un(s,er(this.ref,i),K)))}hasChild(e){const t=new H(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ns(n,e){return n=oe(n),n._checkNotDeleted("ref"),e!==void 0?er(n._root,e):n._root}function er(n,e){return n=oe(n),D(n._path)===null?Ym("child","path",e):wc("child","path",e),new We(n._repo,q(n._path,e))}function Eg(n){return n=oe(n),new wg(n._repo,n._path)}function Ig(n,e){yc("update",e,n._path);const t=new Te;return og(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function pa(n){n=oe(n);const e=new Nc(()=>{}),t=new as(e);return rg(n._repo,n,t).then(i=>new Un(i,new We(n._repo,n._path),n._queryParams.getIndex()))}class as{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new vg("value",this,new Un(e.snapshotNode,new We(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new yg(this,e,t):null}matches(e){return e instanceof as?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function bg(n,e,t,i,s){const r=new Nc(t,void 0),o=new as(r);return dg(n._repo,n,o),()=>hg(n._repo,n,o)}function Cg(n,e,t,i){return bg(n,"value",e)}vm(We);bm(We);/**
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
 */const Sg="FIREBASE_DATABASE_EMULATOR_HOST",tr={};let Tg=!1;function kg(n,e,t,i){n.repoInfo_=new Al(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Rg(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Fe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ie("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=fa(r,s),a=o.repoInfo,l;typeof process<"u"&&Do&&(l=Do[Sg]),l?(r=`http://${l}?ns=${a.namespace}`,o=fa(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new xp(n.name,n.options,e);Qm("Invalid Firebase Database URL",o),x(o.path)||Fe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Ng(a,n,c,new Dp(n.name,t));return new Ag(u,n)}function Pg(n,e){const t=tr[e];(!t||t[n.key]!==n)&&Fe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Cc(n),delete t[n.key]}function Ng(n,e,t,i){let s=tr[e.name];s||(s={},tr[e.name]=s);let r=s[n.toURLString()];return r&&Fe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tg(n,Tg,t,i),s[n.toURLString()]=r,r}class Ag{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ng(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new We(this._repo,F())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Pg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fe("Cannot call "+e+" on a deleted database.")}}function Og(n=pl(),e){const t=mr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=qh("database");i&&Dg(t,...i)}return t}function Dg(n,e,t,i={}){n=oe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Fe("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Fe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new fi(fi.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Kh(i.mockUserToken,n.app.options.projectId);r=new fi(o)}kg(s,e,t,r)}function _a(n){n=oe(n),n._checkNotDeleted("goOffline"),Cc(n._repo)}/**
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
 */function xg(n){gp(Kt),Wt(new mt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Rg(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ye(xo,Mo,n),Ye(xo,Mo,"esm2017")}/**
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
 */const Mg={".sv":"timestamp"};function ma(){return Mg}function As(n){return{".sv":{increment:n}}}Me.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Me.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};xg();function Kr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Ac(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lg=Ac,Oc=new $n("auth","Firebase",Ac());/**
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
 */const Bi=new pr("@firebase/auth");function Fg(n,...e){Bi.logLevel<=B.WARN&&Bi.warn(`Auth (${Kt}): ${n}`,...e)}function pi(n,...e){Bi.logLevel<=B.ERROR&&Bi.error(`Auth (${Kt}): ${n}`,...e)}/**
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
 */function ye(n,...e){throw Yr(n,...e)}function Ie(n,...e){return Yr(n,...e)}function Dc(n,e,t){const i=Object.assign(Object.assign({},Lg()),{[e]:t});return new $n("auth","Firebase",i).create(e,{appName:n.name})}function Xe(n){return Dc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Oc.create(n,...e)}function R(n,e,...t){if(!n)throw Yr(e,...t)}function Ae(n){const e="INTERNAL ASSERTION FAILED: "+n;throw pi(e),new Error(e)}function Ue(n,e){n||Ae(e)}/**
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
 */function nr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ug(){return ga()==="http:"||ga()==="https:"}function ga(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Wg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ug()||Yh()||"connection"in navigator)?navigator.onLine:!0}function Hg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Yn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ue(t>e,"Short delay should be less than long delay!"),this.isMobile=fr()||ll()}get(){return Wg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qr(n,e){Ue(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class xc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Vg=new Yn(3e4,6e4);function St(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ot(n,e,t,i,s={}){return Mc(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=qt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),xc.fetch()(Lc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Mc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Bg),e);try{const s=new jg(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hi(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw hi(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Dc(n,u,c);ye(n,u)}}catch(s){if(s instanceof rt)throw s;ye(n,"network-request-failed",{message:String(s)})}}async function ls(n,e,t,i,s={}){const r=await ot(n,e,t,i,s);return"mfaPendingCredential"in r&&ye(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Lc(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Qr(n.config,s):`${n.config.apiScheme}://${s}`}function $g(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ie(this.auth,"network-request-failed")),Vg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hi(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ie(n,e,i);return s.customData._tokenResponse=t,s}function va(n){return n!==void 0&&n.enterprise!==void 0}class zg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $g(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gg(n,e){return ot(n,"GET","/v2/recaptchaConfig",St(n,e))}/**
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
 */async function qg(n,e){return ot(n,"POST","/v1/accounts:delete",e)}async function Fc(n,e){return ot(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kg(n,e=!1){const t=oe(n),i=await t.getIdToken(e),s=Jr(i);R(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Sn(Os(s.auth_time)),issuedAtTime:Sn(Os(s.iat)),expirationTime:Sn(Os(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Os(n){return Number(n)*1e3}function Jr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return pi("JWT malformed, contained fewer than 3 sections"),null;try{const s=bi(t);return s?JSON.parse(s):(pi("Failed to decode base64 JWT payload"),null)}catch(s){return pi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ya(n){const e=Jr(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof rt&&Yg(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Yg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Qg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ir{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sn(this.lastLoginAt),this.creationTime=Sn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vi(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Wn(n,Fc(t,{idToken:i}));R(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Uc(r.providerUserInfo):[],a=Xg(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ir(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Jg(n){const e=oe(n);await Vi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xg(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Uc(n){return n.map(e=>{var{providerId:t}=e,i=Kr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Zg(n,e){const t=await Mc(n,{},async()=>{const i=qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Lc(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ev(n,e){return ot(n,"POST","/v2/accounts:revokeToken",St(n,e))}/**
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
 */class xt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ya(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){R(e.length!==0,"internal-error");const t=ya(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Zg(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new xt;return i&&(R(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(R(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(R(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xt,this.toJSON())}_performRefresh(){return Ae("not implemented")}}/**
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
 */function He(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Oe{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Kr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ir(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Kg(this,e)}reload(){return Jg(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Vi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(Xe(this.auth));const e=await this.getIdToken();return await Wn(this,qg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=t.createdAt)!==null&&c!==void 0?c:void 0,T=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:S,isAnonymous:_,providerData:I,stsTokenManager:w}=t;R(P&&w,e,"internal-error");const A=xt.fromJSON(this.name,w);R(typeof P=="string",e,"internal-error"),He(d,e.name),He(h,e.name),R(typeof S=="boolean",e,"internal-error"),R(typeof _=="boolean",e,"internal-error"),He(f,e.name),He(p,e.name),He(m,e.name),He(C,e.name),He(E,e.name),He(T,e.name);const Y=new Oe({uid:P,auth:e,email:h,emailVerified:S,displayName:d,isAnonymous:_,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:A,createdAt:E,lastLoginAt:T});return I&&Array.isArray(I)&&(Y.providerData=I.map(O=>Object.assign({},O))),C&&(Y._redirectEventId=C),Y}static async _fromIdTokenResponse(e,t,i=!1){const s=new xt;s.updateFromServerResponse(t);const r=new Oe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Vi(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];R(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Uc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new xt;a.updateFromIdToken(i);const l=new Oe({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ir(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const wa=new Map;function De(n){Ue(n instanceof Function,"Expected a class definition");let e=wa.get(n);return e?(Ue(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wa.set(n,e),e)}/**
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
 */class Wc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wc.type="NONE";const Ea=Wc;/**
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
 */function _i(n,e,t){return`firebase:${n}:${e}:${t}`}class Mt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=_i(this.userKey,s.apiKey,r),this.fullPersistenceKey=_i("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Mt(De(Ea),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||De(Ea);const o=_i(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=Oe._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Mt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Mt(r,e,i))}}/**
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
 */function Ia(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jc(e))return"Blackberry";if(zc(e))return"Webos";if(Xr(e))return"Safari";if((e.includes("chrome/")||Bc(e))&&!e.includes("edge/"))return"Chrome";if($c(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Hc(n=re()){return/firefox\//i.test(n)}function Xr(n=re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bc(n=re()){return/crios\//i.test(n)}function Vc(n=re()){return/iemobile/i.test(n)}function $c(n=re()){return/android/i.test(n)}function jc(n=re()){return/blackberry/i.test(n)}function zc(n=re()){return/webos/i.test(n)}function cs(n=re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tv(n=re()){var e;return cs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nv(){return Qh()&&document.documentMode===10}function Gc(n=re()){return cs(n)||$c(n)||zc(n)||jc(n)||/windows phone/i.test(n)||Vc(n)}function iv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qc(n,e=[]){let t;switch(n){case"Browser":t=Ia(re());break;case"Worker":t=`${Ia(re())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kt}/${i}`}/**
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
 */class sv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function rv(n,e={}){return ot(n,"GET","/v2/passwordPolicy",St(n,e))}/**
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
 */const ov=6;class av{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ov,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class lv{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ba(this),this.idTokenSubscription=new ba(this),this.beforeStateQueue=new sv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=De(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Mt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fc(this,{idToken:e}),i=await Oe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Pe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pe(this.app))return Promise.reject(Xe(this));const t=e?oe(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(Xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pe(this.app)?Promise.reject(Xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(De(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rv(this),t=new av(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $n("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await ev(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&De(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await Mt.create(this,[De(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Fg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zt(n){return oe(n)}class ba{constructor(e){this.auth=e,this.observer=null,this.addObserver=of(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let us={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cv(n){us=n}function Kc(n){return us.loadJS(n)}function uv(){return us.recaptchaEnterpriseScript}function dv(){return us.gapiScript}function hv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const fv="recaptcha-enterprise",pv="NO_RECAPTCHA";class _v{constructor(e){this.type=fv,this.auth=Zt(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Gg(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new zg(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;va(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(pv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&va(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=uv();l.length!==0&&(l+=a),Kc(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ca(n,e,t,i=!1){const s=new _v(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Sa(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ca(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ca(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
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
 */function mv(n,e){const t=mr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Ti(r,e??{}))return s;ye(s,"already-initialized")}return t.initialize({options:e})}function gv(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(De);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function vv(n,e,t){const i=Zt(n);R(i._canInitEmulator,i,"emulator-config-failed"),R(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Yc(e),{host:o,port:a}=yv(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),wv()}function Yc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yv(n){const e=Yc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ta(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Ta(o)}}}function Ta(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Zr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ae("not implemented")}_getIdTokenResponse(e){return Ae("not implemented")}_linkToIdToken(e,t){return Ae("not implemented")}_getReauthenticationResolver(e){return Ae("not implemented")}}async function Ev(n,e){return ot(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Iv(n,e){return ls(n,"POST","/v1/accounts:signInWithPassword",St(n,e))}/**
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
 */async function bv(n,e){return ls(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}async function Cv(n,e){return ls(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}/**
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
 */class Hn extends Zr{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Hn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Hn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sa(e,t,"signInWithPassword",Iv);case"emailLink":return bv(e,{email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sa(e,i,"signUpPassword",Ev);case"emailLink":return Cv(e,{idToken:t,email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Lt(n,e){return ls(n,"POST","/v1/accounts:signInWithIdp",St(n,e))}/**
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
 */const Sv="http://localhost";class It extends Zr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new It(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Kr(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new It(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Lt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Lt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Lt(e,t)}buildRequest(){const e={requestUri:Sv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qt(t)}return e}}/**
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
 */function Tv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kv(n){const e=gn(vn(n)).link,t=e?gn(vn(e)).deep_link_id:null,i=gn(vn(n)).deep_link_id;return(i?gn(vn(i)).link:null)||i||t||e||n}class eo{constructor(e){var t,i,s,r,o,a;const l=gn(vn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=Tv((s=l.mode)!==null&&s!==void 0?s:null);R(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=kv(e);try{return new eo(t)}catch{return null}}}/**
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
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,t){return Hn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=eo.parseLink(t);return R(i,"argument-error"),Hn._fromEmailAndCode(e,i.code,i.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qn extends Qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ve extends Qn{constructor(){super("facebook.com")}static credential(e){return It._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ve.PROVIDER_ID="facebook.com";/**
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
 */class $e extends Qn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return It._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return $e.credential(t,i)}catch{return null}}}$e.GOOGLE_SIGN_IN_METHOD="google.com";$e.PROVIDER_ID="google.com";/**
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
 */class je extends Qn{constructor(){super("github.com")}static credential(e){return It._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.GITHUB_SIGN_IN_METHOD="github.com";je.PROVIDER_ID="github.com";/**
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
 */class ze extends Qn{constructor(){super("twitter.com")}static credential(e,t){return It._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ze.credential(t,i)}catch{return null}}}ze.TWITTER_SIGN_IN_METHOD="twitter.com";ze.PROVIDER_ID="twitter.com";/**
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
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Oe._fromIdTokenResponse(e,i,s),o=ka(i);return new jt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=ka(i);return new jt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function ka(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class $i extends rt{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,$i.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new $i(e,t,i,s)}}function Jc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?$i._fromErrorAndOperation(n,r,e,i):r})}async function Rv(n,e,t=!1){const i=await Wn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return jt._forOperation(n,"link",i)}/**
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
 */async function Pv(n,e,t=!1){const{auth:i}=n;if(Pe(i.app))return Promise.reject(Xe(i));const s="reauthenticate";try{const r=await Wn(n,Jc(i,s,e,n),t);R(r.idToken,i,"internal-error");const o=Jr(r.idToken);R(o,i,"internal-error");const{sub:a}=o;return R(n.uid===a,i,"user-mismatch"),jt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ye(i,"user-mismatch"),r}}/**
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
 */async function Xc(n,e,t=!1){if(Pe(n.app))return Promise.reject(Xe(n));const i="signIn",s=await Jc(n,i,e),r=await jt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Nv(n,e){return Xc(Zt(n),e)}/**
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
 */async function Av(n){const e=Zt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Ov(n,e,t){return Pe(n.app)?Promise.reject(Xe(n)):Nv(oe(n),en.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Av(n),i})}/**
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
 */function Dv(n,e){return oe(n).setPersistence(e)}function xv(n,e,t,i){return oe(n).onIdTokenChanged(e,t,i)}function Mv(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function Lv(n){return oe(n).signOut()}const ji="__sak";/**
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
 */class Zc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ji,"1"),this.storage.removeItem(ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Fv(){const n=re();return Xr(n)||cs(n)}const Uv=1e3,Wv=10;class eu extends Zc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fv()&&iv(),this.fallbackToPolling=Gc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);nv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wv):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}eu.type="LOCAL";const Hv=eu;/**
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
 */class tu extends Zc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tu.type="SESSION";const to=tu;/**
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
 */function Bv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ds(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Bv(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ds.receivers=[];/**
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
 */function no(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Vv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=no("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function be(){return window}function $v(n){be().location.href=n}/**
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
 */function nu(){return typeof be().WorkerGlobalScope<"u"&&typeof be().importScripts=="function"}async function jv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gv(){return nu()?self:null}/**
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
 */const iu="firebaseLocalStorageDb",qv=1,zi="firebaseLocalStorage",su="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function hs(n,e){return n.transaction([zi],e?"readwrite":"readonly").objectStore(zi)}function Kv(){const n=indexedDB.deleteDatabase(iu);return new Jn(n).toPromise()}function sr(){const n=indexedDB.open(iu,qv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(zi,{keyPath:su})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(zi)?e(i):(i.close(),await Kv(),e(await sr()))})})}async function Ra(n,e,t){const i=hs(n,!0).put({[su]:e,value:t});return new Jn(i).toPromise()}async function Yv(n,e){const t=hs(n,!1).get(e),i=await new Jn(t).toPromise();return i===void 0?null:i.value}function Pa(n,e){const t=hs(n,!0).delete(e);return new Jn(t).toPromise()}const Qv=800,Jv=3;class ru{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Jv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ds._getInstance(Gv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jv(),!this.activeServiceWorker)return;this.sender=new Vv(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sr();return await Ra(e,ji,"1"),await Pa(e,ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ra(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Yv(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=hs(s,!1).getAll();return new Jn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ru.type="LOCAL";const Xv=ru;new Yn(3e4,6e4);/**
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
 */function Zv(n,e){return e?De(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class io extends Zr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Lt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ey(n){return Xc(n.auth,new io(n),n.bypassAuthState)}function ty(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Pv(t,new io(n),n.bypassAuthState)}async function ny(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Rv(t,new io(n),n.bypassAuthState)}/**
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
 */class ou{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ey;case"linkViaPopup":case"linkViaRedirect":return ny;case"reauthViaPopup":case"reauthViaRedirect":return ty;default:ye(this.auth,"internal-error")}}resolve(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iy=new Yn(2e3,1e4);class At extends ou{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Ue(this.filter.length===1,"Popup operations only handle one event");const e=no();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ie(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iy.get())};e()}}At.currentPopupAction=null;/**
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
 */const sy="pendingRedirect",mi=new Map;class ry extends ou{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=mi.get(this.auth._key());if(!e){try{const i=await oy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}mi.set(this.auth._key(),e)}return this.bypassAuthState||mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oy(n,e){const t=cy(e),i=ly(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function ay(n,e){mi.set(n._key(),e)}function ly(n){return De(n._redirectPersistence)}function cy(n){return _i(sy,n.config.apiKey,n.name)}async function uy(n,e,t=!1){if(Pe(n.app))return Promise.reject(Xe(n));const i=Zt(n),s=Zv(i,e),o=await new ry(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const dy=10*60*1e3;class hy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!au(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ie(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Na(e))}saveEventToCache(e){this.cachedEventUids.add(Na(e)),this.lastProcessedEventTime=Date.now()}}function Na(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function au({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return au(n);default:return!1}}/**
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
 */async function py(n,e={}){return ot(n,"GET","/v1/projects",e)}/**
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
 */const _y=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,my=/^https?/;async function gy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await py(n);for(const t of e)try{if(vy(t))return}catch{}ye(n,"unauthorized-domain")}function vy(n){const e=nr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!my.test(t))return!1;if(_y.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const yy=new Yn(3e4,6e4);function Aa(){const n=be().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wy(n){return new Promise((e,t)=>{var i,s,r;function o(){Aa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Aa(),t(Ie(n,"network-request-failed"))},timeout:yy.get()})}if(!((s=(i=be().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=be().gapi)===null||r===void 0)&&r.load)o();else{const a=hv("iframefcb");return be()[a]=()=>{gapi.load?o():t(Ie(n,"network-request-failed"))},Kc(`${dv()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw gi=null,e})}let gi=null;function Ey(n){return gi=gi||wy(n),gi}/**
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
 */const Iy=new Yn(5e3,15e3),by="__/auth/iframe",Cy="emulator/auth/iframe",Sy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ty=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ky(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qr(e,Cy):`https://${n.config.authDomain}/${by}`,i={apiKey:e.apiKey,appName:n.name,v:Kt},s=Ty.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${qt(i).slice(1)}`}async function Ry(n){const e=await Ey(n),t=be().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:ky(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sy,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ie(n,"network-request-failed"),a=be().setTimeout(()=>{r(o)},Iy.get());function l(){be().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Py={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ny=500,Ay=600,Oy="_blank",Dy="http://localhost";class Oa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xy(n,e,t,i=Ny,s=Ay){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Py),{width:i.toString(),height:s.toString(),top:r,left:o}),c=re().toLowerCase();t&&(a=Bc(c)?Oy:t),Hc(c)&&(e=e||Dy,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(tv(c)&&a!=="_self")return My(e||"",a),new Oa(null);const d=window.open(e||"",a,u);R(d,n,"popup-blocked");try{d.focus()}catch{}return new Oa(d)}function My(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Ly="__/auth/handler",Fy="emulator/auth/handler",Uy=encodeURIComponent("fac");async function Da(n,e,t,i,s,r){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Kt,eventId:s};if(e instanceof Qc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ci(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Qn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${Uy}=${encodeURIComponent(l)}`:"";return`${Wy(n)}?${qt(a).slice(1)}${c}`}function Wy({config:n}){return n.emulator?Qr(n,Fy):`https://${n.authDomain}/${Ly}`}/**
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
 */const Ds="webStorageSupport";class Hy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=to,this._completeRedirectFn=uy,this._overrideRedirectResult=ay}async _openPopup(e,t,i,s){var r;Ue((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Da(e,t,i,nr(),s);return xy(e,o,no())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Da(e,t,i,nr(),s);return $v(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Ue(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Ry(e),i=new hy(e);return t.register("authEvent",s=>(R(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ds,{type:Ds},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ds];o!==void 0&&t(!!o),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gc()||Xr()||cs()}}const By=Hy;var xa="@firebase/auth",Ma="1.7.1";/**
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
 */class Vy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $y(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jy(n){Wt(new mt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qc(n)},c=new lv(i,s,r,l);return gv(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Wt(new mt("auth-internal",e=>{const t=Zt(e.getProvider("auth").getImmediate());return(i=>new Vy(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(xa,Ma,$y(n)),Ye(xa,Ma,"esm2017")}/**
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
 */const zy=5*60,Gy=al("authIdTokenMaxAge")||zy;let La=null;const qy=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Gy)return;const s=t==null?void 0:t.token;La!==s&&(La=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ky(n=pl()){const e=mr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mv(n,{popupRedirectResolver:By,persistence:[Xv,Hv,to]}),i=al("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=qy(r.toString());Mv(t,o,()=>o(t.currentUser)),xv(t,a=>o(a))}}const s=rl("auth");return s&&vv(t,`http://${s}`),t}function Yy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cv({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ie("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Yy().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jy("Browser");const Qy={class:"min-h-[100dvh] w-full bg-sr flex flex-col"},Jy={class:"md:h-[360px] w-full max-w-[100dvw] max-md:aspect-video md:left-[calc(50%-320px)] md:absolute top-0 md:top-[98px] md:w-[640px] bg-zinc-900 flex justify-center items-center"},Xy={key:1,class:"text-white text-lg md:text-xl text-center flex flex-col gap-3"},Zy=L("div",null,"Live belum dimulai",-1),ew={key:2,class:"text-white font-semibold px-3 text-center text-lg md:text-xl"},rw=st({__name:"index",setup(n){const e=y(!1),t={apiKey:"AIzaSyCmFoeQm28lLubMcuXjwfVrO2Grwn57E_s",authDomain:"showroom-shared.firebaseapp.com",projectId:"showroom-shared",storageBucket:"showroom-shared.appspot.com",messagingSenderId:"888402111940",appId:"1:888402111940:web:2d4ed3c66a21893c45c891",measurementId:"G-EEC924TW6T",databaseURL:"https://showroom-shared-default-rtdb.asia-southeast1.firebasedatabase.app/"},i=y(null),s=y(0),r=qu(),o=y(0);xe(()=>{const l=String(r.hash);if(l)try{const c=mh(l.replace("#","")),[u,d,h]=c.split(":"),f=fl(t),p=Og(f),m=Ky(f);Dv(m,to).then(()=>Ov(m,u,d)).then(async C=>{if(C.user.email!==u){await Lv(m).catch(A=>null),window.location.reload();return}const E={device_count:As(-1),last_changed:ma()},T={device_count:As(1),play_count:As(1),last_changed:ma()},P=Ns(p,`status/${C.user.uid}`),S=Ns(p,`/premium_live/${h}`),_=Ns(p,`/ticket/${C.user.uid}`),I=(await pa(_)).val();o.value=Number.isNaN(I.max_device)?1:Number(I.max_device);const w=(await pa(P)).val();(w==null?void 0:w.device_count)>=o.value?(e.value=!0,_a(p)):(Eg(P).update(E).then(function(){Ig(P,T)}),Cg(S,A=>{A.val()?(i.value=A.val(),s.value+=1):_a(p)}))}).catch(C=>{console.error(C)})}catch(c){console.error(c)}});const a=G(()=>{var l;return((l=i.value)==null?void 0:l.title)??"Showroom Live"});return Qu({title:a}),(l,c)=>{var h,f,p,m;const u=hh,d=Uh;return V(),X("div",Qy,[L("div",Jy,[b(i)&&!b(e)&&((f=(h=b(i))==null?void 0:h.streaming_url_list)!=null&&f.length)?(V(),ht(u,{key:b(s),class:"size-full",sources:((p=b(i))==null?void 0:p.streaming_url_list)??[],title:(m=b(i))==null?void 0:m.title,poster:"https://static.showroom-live.com/image/room/cover/73f495d564945090f4af7338a42ce09ffa12d35fbfa8ce35c856220bcf96c5f3_m.png?v=1711114163"},null,8,["sources","title"])):!b(e)&&b(i)?(V(),X("div",Xy,[L("div",null,we(b(i).title),1),Zy])):te("",!0),b(e)?(V(),X("div",ew,"Maaf pemutaran hanya untuk "+we(b(o))+" device",1)):te("",!0)]),b(i)&&!b(e)?(V(),ht(d,{key:0,time:b(i).start_at,class:"max-md:mt-5 md:absolute md:left-1/2 md:-translate-x-1/2 top-[calc(360px_+_98px_+_22px)] text-white font-bold text-2xl"},null,8,["time"])):te("",!0)])}}});export{rw as default};
