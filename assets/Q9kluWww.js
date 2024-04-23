import Tu from"./Bth9PBjZ.js";import{_ as ku,o as V,c as X,a as Ru,b as Pu,h as we,F as Wn,i as zt,r as y,d as it,p as zi,w as It,e as Q,f as De,g as sr,j as La,k as Nu,l as Au,n as gi,u as S,m as Fa,q as fe,s as Ou,t as Du,v as xu,x as z,y as cn,z as _o,A as he,B as ee,C as Be,D as Mu,E as Lu,G as Fu,H as dt,I as un,J as Uu,T as Wu,K as Hu,L as Bu,M as Vu}from"./B9yVtjaC.js";import"./CvPl5tTm.js";const $u={},ju={class:"inline-block",role:"status"},zu=Ru('<svg class="size-full stroke-white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline" values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"></animate></circle><animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12" repeatCount="indefinite"></animateTransform></g></svg><span class="sr-only">Loading...</span>',2),Gu=[zu];function qu(n,e){return V(),X("div",ju,Gu)}const Ku=ku($u,[["render",qu]]);function Me(n,e,...t){if(n in e){let s=e[n];return typeof s=="function"?s(...t):s}let i=new Error(`Tried to handle "${n}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Me),i}var Ds=(n=>(n[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n))(Ds||{}),Yu=(n=>(n[n.Unmount=0]="Unmount",n[n.Hidden=1]="Hidden",n))(Yu||{});function Gi({visible:n=!0,features:e=0,ourProps:t,theirProps:i,...s}){var r;let o=Wa(i,t),a=Object.assign(s,{props:o});if(n||e&2&&o.static)return ms(a);if(e&1){let l=(r=o.unmount)==null||r?0:1;return Me(l,{0(){return null},1(){return ms({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return ms(a)}function ms({props:n,attrs:e,slots:t,slot:i,name:s}){var r,o;let{as:a,...l}=Qu(n,["unmount","static"]),c=(r=t.default)==null?void 0:r.call(t,i),u={};if(i){let d=!1,h=[];for(let[f,p]of Object.entries(i))typeof p=="boolean"&&(d=!0),p===!0&&h.push(f);d&&(u["data-headlessui-state"]=h.join(" "))}if(a==="template"){if(c=Ua(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...h]=c??[];if(!Ju(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(m=>m.trim()).filter((m,b,E)=>E.indexOf(m)===b).sort((m,b)=>m.localeCompare(b)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let f=Wa((o=d.props)!=null?o:{},l,u),p=Pu(d,f,!0);for(let m in f)m.startsWith("on")&&(p.props||(p.props={}),p.props[m]=f[m]);return p}return Array.isArray(c)&&c.length===1?c[0]:c}return we(a,Object.assign({},l,u),{default:()=>c})}function Ua(n){return n.flatMap(e=>e.type===Wn?Ua(e.children):[e])}function Wa(...n){if(n.length===0)return{};if(n.length===1)return n[0];let e={},t={};for(let i of n)for(let s in i)s.startsWith("on")&&typeof i[s]=="function"?(t[s]!=null||(t[s]=[]),t[s].push(i[s])):e[s]=i[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(t).map(i=>[i,void 0])));for(let i in t)Object.assign(e,{[i](s,...r){let o=t[i];for(let a of o){if(s instanceof Event&&s.defaultPrevented)return;a(s,...r)}}});return e}function Qu(n,e=[]){let t=Object.assign({},n);for(let i of e)i in t&&delete t[i];return t}function Ju(n){return n==null?!1:typeof n.type=="string"||typeof n.type=="object"||typeof n.type=="function"}function P(n){var e;if(n==null||n.value==null)return null;let t=(e=n.value.$el)!=null?e:n.value;return t instanceof Node?t:null}var Xu=Object.defineProperty,Zu=(n,e,t)=>e in n?Xu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,mo=(n,e,t)=>(Zu(n,typeof e!="symbol"?e+"":e,t),t);let ed=class{constructor(){mo(this,"current",this.detect()),mo(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},qi=new ed;function Hn(n){if(qi.isServer)return null;if(n instanceof Node)return n.ownerDocument;if(n!=null&&n.hasOwnProperty("value")){let e=P(n);if(e)return e.ownerDocument}return document}let go=Symbol("PortalParentContext");function td(){let n=zt(go,null),e=y([]);function t(r){return e.value.push(r),n&&n.register(r),()=>i(r)}function i(r){let o=e.value.indexOf(r);o!==-1&&e.value.splice(o,1),n&&n.unregister(r)}let s={register:t,unregister:i,portals:e};return[e,it({name:"PortalWrapper",setup(r,{slots:o}){return zi(go,s),()=>{var a;return(a=o.default)==null?void 0:a.call(o)}}})]}function nd(n,e,t,i){qi.isServer||It(s=>{n=n??window,n.addEventListener(e,t,i),s(()=>n.removeEventListener(e,t,i))})}let id=Symbol("headlessui.useid"),sd=0;function gn(){return zt(id,()=>`${++sd}`)()}let xs=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(n=>`${n}:not([tabindex='-1'])`).join(",");var Te=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(Te||{}),vi=(n=>(n[n.Error=0]="Error",n[n.Overflow=1]="Overflow",n[n.Success=2]="Success",n[n.Underflow=3]="Underflow",n))(vi||{}),rd=(n=>(n[n.Previous=-1]="Previous",n[n.Next=1]="Next",n))(rd||{});function Ki(n=document.body){return n==null?[]:Array.from(n.querySelectorAll(xs)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var rr=(n=>(n[n.Strict=0]="Strict",n[n.Loose=1]="Loose",n))(rr||{});function Ha(n,e=0){var t;return n===((t=Hn(n))==null?void 0:t.body)?!1:Me(e,{0(){return n.matches(xs)},1(){let i=n;for(;i!==null;){if(i.matches(xs))return!0;i=i.parentElement}return!1}})}var od=(n=>(n[n.Keyboard=0]="Keyboard",n[n.Mouse=1]="Mouse",n))(od||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",n=>{n.metaKey||n.altKey||n.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",n=>{n.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:n.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let ad=["textarea","input"].join(",");function ld(n){var e,t;return(t=(e=n==null?void 0:n.matches)==null?void 0:e.call(n,ad))!=null?t:!1}function cd(n,e=t=>t){return n.slice().sort((t,i)=>{let s=e(t),r=e(i);if(s===null||r===null)return 0;let o=s.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ht(n,e,{sorted:t=!0,relativeTo:i=null,skipElements:s=[]}={}){var r;let o=(r=Array.isArray(n)?n.length>0?n[0].ownerDocument:document:n==null?void 0:n.ownerDocument)!=null?r:document,a=Array.isArray(n)?t?cd(n):n:Ki(n);s.length>0&&a.length>1&&(a=a.filter(p=>!s.includes(p))),i=i??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(i))-1;if(e&4)return Math.max(0,a.indexOf(i))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,h=a.length,f;do{if(d>=h||d+h<=0)return 0;let p=c+d;if(e&16)p=(p+h)%h;else{if(p<0)return 3;if(p>=h)return 1}f=a[p],f==null||f.focus(u),d+=l}while(f!==o.activeElement);return e&6&&ld(f)&&f.select(),2}function ud(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function dd(){return/Android/gi.test(window.navigator.userAgent)}function hd(){return ud()||dd()}function si(n,e,t){qi.isServer||It(i=>{document.addEventListener(n,e,t),i(()=>document.removeEventListener(n,e,t))})}function Ba(n,e,t){qi.isServer||It(i=>{window.addEventListener(n,e,t),i(()=>window.removeEventListener(n,e,t))})}function fd(n,e,t=Q(()=>!0)){function i(r,o){if(!t.value||r.defaultPrevented)return;let a=o(r);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(n);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:P(c);if(u!=null&&u.contains(a)||r.composed&&r.composedPath().includes(u))return}return!Ha(a,rr.Loose)&&a.tabIndex!==-1&&r.preventDefault(),e(r,a)}let s=y(null);si("pointerdown",r=>{var o,a;t.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),si("mousedown",r=>{var o,a;t.value&&(s.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),si("click",r=>{hd()||s.value&&(i(r,()=>s.value),s.value=null)},!0),si("touchend",r=>i(r,()=>r.target instanceof HTMLElement?r.target:null),!0),Ba("blur",r=>i(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function vo(n,e){if(n)return n;let t=e??"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function pd(n,e){let t=y(vo(n.value.type,n.value.as));return De(()=>{t.value=vo(n.value.type,n.value.as)}),It(()=>{var i;t.value||P(e)&&P(e)instanceof HTMLButtonElement&&!((i=P(e))!=null&&i.hasAttribute("type"))&&(t.value="button")}),t}var Cn=(n=>(n[n.None=1]="None",n[n.Focusable=2]="Focusable",n[n.Hidden=4]="Hidden",n))(Cn||{});let yi=it({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(n,{slots:e,attrs:t}){return()=>{var i;let{features:s,...r}=n,o={"aria-hidden":(s&2)===2?!0:(i=r["aria-hidden"])!=null?i:void 0,hidden:(s&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return Gi({ourProps:o,theirProps:r,slot:{},attrs:t,slots:e,name:"Hidden"})}}});function _d({defaultContainers:n=[],portals:e,mainTreeNodeRef:t}={}){let i=y(null),s=Hn(i);function r(){var o,a,l;let c=[];for(let u of n)u!==null&&(u instanceof HTMLElement?c.push(u):"value"in u&&u.value instanceof HTMLElement&&c.push(u.value));if(e!=null&&e.value)for(let u of e.value)c.push(u);for(let u of(o=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(P(i))||u.contains((l=(a=P(i))==null?void 0:a.getRootNode())==null?void 0:l.host)||c.some(d=>u.contains(d))||c.push(u));return c}return{resolveContainers:r,contains(o){return r().some(a=>a.contains(o))},mainTreeNodeRef:i,MainTreeNode(){return t!=null?null:we(yi,{features:Cn.Hidden,ref:i})}}}var ke=(n=>(n[n.Forwards=0]="Forwards",n[n.Backwards=1]="Backwards",n))(ke||{});function Va(){let n=y(0);return Ba("keydown",e=>{e.key==="Tab"&&(n.value=e.shiftKey?1:0)}),n}let $a=Symbol("Context");var Sn=(n=>(n[n.Open=1]="Open",n[n.Closed=2]="Closed",n[n.Closing=4]="Closing",n[n.Opening=8]="Opening",n))(Sn||{});function md(){return zt($a,null)}function gd(n){zi($a,n)}var He=(n=>(n.Space=" ",n.Enter="Enter",n.Escape="Escape",n.Backspace="Backspace",n.Delete="Delete",n.ArrowLeft="ArrowLeft",n.ArrowUp="ArrowUp",n.ArrowRight="ArrowRight",n.ArrowDown="ArrowDown",n.Home="Home",n.End="End",n.PageUp="PageUp",n.PageDown="PageDown",n.Tab="Tab",n))(He||{}),vd=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(vd||{});let ja=Symbol("PopoverContext");function or(n){let e=zt(ja,null);if(e===null){let t=new Error(`<${n} /> is missing a parent <${qa.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,or),t}return e}let yd=Symbol("PopoverGroupContext");function za(){return zt(yd,null)}let Ga=Symbol("PopoverPanelContext");function wd(){return zt(Ga,null)}let qa=it({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(n,{slots:e,attrs:t,expose:i}){var s;let r=y(null);i({el:r,$el:r});let o=y(1),a=y(null),l=y(null),c=y(null),u=y(null),d=Q(()=>Hn(r)),h=Q(()=>{var _,I;if(!P(a)||!P(u))return!1;for(let de of document.querySelectorAll("body > *"))if(Number(de==null?void 0:de.contains(P(a)))^Number(de==null?void 0:de.contains(P(u))))return!0;let w=Ki(),M=w.indexOf(P(a)),K=(M+w.length-1)%w.length,A=(M+1)%w.length,Y=w[K],ue=w[A];return!((_=P(u))!=null&&_.contains(Y))&&!((I=P(u))!=null&&I.contains(ue))}),f={popoverState:o,buttonId:y(null),panelId:y(null),panel:u,button:a,isPortalled:h,beforePanelSentinel:l,afterPanelSentinel:c,togglePopover(){o.value=Me(o.value,{0:1,1:0})},closePopover(){o.value!==1&&(o.value=1)},close(_){f.closePopover();let I=_?_ instanceof HTMLElement?_:_.value instanceof HTMLElement?P(_):P(f.button):P(f.button);I==null||I.focus()}};zi(ja,f),gd(Q(()=>Me(o.value,{0:Sn.Open,1:Sn.Closed})));let p={buttonId:f.buttonId,panelId:f.panelId,close(){f.closePopover()}},m=za(),b=m==null?void 0:m.registerPopover,[E,T]=td(),N=_d({mainTreeNodeRef:m==null?void 0:m.mainTreeNodeRef,portals:E,defaultContainers:[a,u]});function C(){var _,I,w,M;return(M=m==null?void 0:m.isFocusWithinPopoverGroup())!=null?M:((_=d.value)==null?void 0:_.activeElement)&&(((I=P(a))==null?void 0:I.contains(d.value.activeElement))||((w=P(u))==null?void 0:w.contains(d.value.activeElement)))}return It(()=>b==null?void 0:b(p)),nd((s=d.value)==null?void 0:s.defaultView,"focus",_=>{var I,w;_.target!==window&&_.target instanceof HTMLElement&&o.value===0&&(C()||a&&u&&(N.contains(_.target)||(I=P(f.beforePanelSentinel))!=null&&I.contains(_.target)||(w=P(f.afterPanelSentinel))!=null&&w.contains(_.target)||f.closePopover()))},!0),fd(N.resolveContainers,(_,I)=>{var w;f.closePopover(),Ha(I,rr.Loose)||(_.preventDefault(),(w=P(a))==null||w.focus())},Q(()=>o.value===0)),()=>{let _={open:o.value===0,close:f.close};return we(Wn,[we(T,{},()=>Gi({theirProps:{...n,...t},ourProps:{ref:r},slot:_,slots:e,attrs:t,name:"Popover"})),we(N.MainTreeNode)])}}}),Ed=it({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(n,{attrs:e,slots:t,expose:i}){var s;let r=(s=n.id)!=null?s:`headlessui-popover-button-${gn()}`,o=or("PopoverButton"),a=Q(()=>Hn(o.button));i({el:o.button,$el:o.button}),De(()=>{o.buttonId.value=r}),sr(()=>{o.buttonId.value=null});let l=za(),c=l==null?void 0:l.closeOthers,u=wd(),d=Q(()=>u===null?!1:u.value===o.panelId.value),h=y(null),f=`headlessui-focus-sentinel-${gn()}`;d.value||It(()=>{o.button.value=P(h)});let p=pd(Q(()=>({as:n.as,type:e.type})),h);function m(_){var I,w,M,K,A;if(d.value){if(o.popoverState.value===1)return;switch(_.key){case He.Space:case He.Enter:_.preventDefault(),(w=(I=_.target).click)==null||w.call(I),o.closePopover(),(M=P(o.button))==null||M.focus();break}}else switch(_.key){case He.Space:case He.Enter:_.preventDefault(),_.stopPropagation(),o.popoverState.value===1&&(c==null||c(o.buttonId.value)),o.togglePopover();break;case He.Escape:if(o.popoverState.value!==0)return c==null?void 0:c(o.buttonId.value);if(!P(o.button)||(K=a.value)!=null&&K.activeElement&&!((A=P(o.button))!=null&&A.contains(a.value.activeElement)))return;_.preventDefault(),_.stopPropagation(),o.closePopover();break}}function b(_){d.value||_.key===He.Space&&_.preventDefault()}function E(_){var I,w;n.disabled||(d.value?(o.closePopover(),(I=P(o.button))==null||I.focus()):(_.preventDefault(),_.stopPropagation(),o.popoverState.value===1&&(c==null||c(o.buttonId.value)),o.togglePopover(),(w=P(o.button))==null||w.focus()))}function T(_){_.preventDefault(),_.stopPropagation()}let N=Va();function C(){let _=P(o.panel);if(!_)return;function I(){Me(N.value,{[ke.Forwards]:()=>ht(_,Te.First),[ke.Backwards]:()=>ht(_,Te.Last)})===vi.Error&&ht(Ki().filter(w=>w.dataset.headlessuiFocusGuard!=="true"),Me(N.value,{[ke.Forwards]:Te.Next,[ke.Backwards]:Te.Previous}),{relativeTo:P(o.button)})}I()}return()=>{let _=o.popoverState.value===0,I={open:_},{...w}=n,M=d.value?{ref:h,type:p.value,onKeydown:m,onClick:E}:{ref:h,id:r,type:p.value,"aria-expanded":o.popoverState.value===0,"aria-controls":P(o.panel)?o.panelId.value:void 0,disabled:n.disabled?!0:void 0,onKeydown:m,onKeyup:b,onClick:E,onMousedown:T};return we(Wn,[Gi({ourProps:M,theirProps:{...e,...w},slot:I,attrs:e,slots:t,name:"PopoverButton"}),_&&!d.value&&o.isPortalled.value&&we(yi,{id:f,features:Cn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:C})])}}}),Id=it({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(n,{attrs:e,slots:t,expose:i}){var s;let r=(s=n.id)!=null?s:`headlessui-popover-panel-${gn()}`,{focus:o}=n,a=or("PopoverPanel"),l=Q(()=>Hn(a.panel)),c=`headlessui-focus-sentinel-before-${gn()}`,u=`headlessui-focus-sentinel-after-${gn()}`;i({el:a.panel,$el:a.panel}),De(()=>{a.panelId.value=r}),sr(()=>{a.panelId.value=null}),zi(Ga,a.panelId),It(()=>{var T,N;if(!o||a.popoverState.value!==0||!a.panel)return;let C=(T=l.value)==null?void 0:T.activeElement;(N=P(a.panel))!=null&&N.contains(C)||ht(P(a.panel),Te.First)});let d=md(),h=Q(()=>d!==null?(d.value&Sn.Open)===Sn.Open:a.popoverState.value===0);function f(T){var N,C;switch(T.key){case He.Escape:if(a.popoverState.value!==0||!P(a.panel)||l.value&&!((N=P(a.panel))!=null&&N.contains(l.value.activeElement)))return;T.preventDefault(),T.stopPropagation(),a.closePopover(),(C=P(a.button))==null||C.focus();break}}function p(T){var N,C,_,I,w;let M=T.relatedTarget;M&&P(a.panel)&&((N=P(a.panel))!=null&&N.contains(M)||(a.closePopover(),((_=(C=P(a.beforePanelSentinel))==null?void 0:C.contains)!=null&&_.call(C,M)||(w=(I=P(a.afterPanelSentinel))==null?void 0:I.contains)!=null&&w.call(I,M))&&M.focus({preventScroll:!0})))}let m=Va();function b(){let T=P(a.panel);if(!T)return;function N(){Me(m.value,{[ke.Forwards]:()=>{var C;ht(T,Te.First)===vi.Error&&((C=P(a.afterPanelSentinel))==null||C.focus())},[ke.Backwards]:()=>{var C;(C=P(a.button))==null||C.focus({preventScroll:!0})}})}N()}function E(){let T=P(a.panel);if(!T)return;function N(){Me(m.value,{[ke.Forwards]:()=>{let C=P(a.button),_=P(a.panel);if(!C)return;let I=Ki(),w=I.indexOf(C),M=I.slice(0,w+1),K=[...I.slice(w+1),...M];for(let A of K.slice())if(A.dataset.headlessuiFocusGuard==="true"||_!=null&&_.contains(A)){let Y=K.indexOf(A);Y!==-1&&K.splice(Y,1)}ht(K,Te.First,{sorted:!1})},[ke.Backwards]:()=>{var C;ht(T,Te.Previous)===vi.Error&&((C=P(a.button))==null||C.focus())}})}N()}return()=>{let T={open:a.popoverState.value===0,close:a.close},{focus:N,...C}=n,_={ref:a.panel,id:r,onKeydown:f,onFocusout:o&&a.popoverState.value===0?p:void 0,tabIndex:-1};return Gi({ourProps:_,theirProps:{...e,...C},attrs:e,slot:T,slots:{...t,default:(...I)=>{var w;return[we(Wn,[h.value&&a.isPortalled.value&&we(yi,{id:c,ref:a.beforePanelSentinel,features:Cn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:b}),(w=t.default)==null?void 0:w.call(t,...I),h.value&&a.isPortalled.value&&we(yi,{id:u,ref:a.afterPanelSentinel,features:Cn.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:E})])]}},features:Ds.RenderStrategy|Ds.Static,visible:h.value,name:"PopoverPanel"})}}});function ar(n){return Nu()?(Au(n),!0):!1}function Ge(n){return typeof n=="function"?n():S(n)}const lr=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const bd=Object.prototype.toString,Cd=n=>bd.call(n)==="[object Object]",Ka=()=>{};function Sd(n,e){function t(...i){return new Promise((s,r)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(s).catch(r)})}return t}const Ya=n=>n();function Td(n=Ya){const e=y(!0);function t(){e.value=!1}function i(){e.value=!0}const s=(...r)=>{e.value&&n(...r)};return{isActive:La(e),pause:t,resume:i,eventFilter:s}}function Qa(n){return Fa()}function kd(n,e,t={}){const{eventFilter:i=Ya,...s}=t;return fe(n,Sd(i,e),s)}function Rd(n,e,t={}){const{eventFilter:i,...s}=t,{eventFilter:r,pause:o,resume:a,isActive:l}=Td(i);return{stop:kd(n,e,{...s,eventFilter:r}),pause:o,resume:a,isActive:l}}function Ja(n,e=!0,t){Qa()?De(n,t):e?n():gi(n)}function Pd(n,e){Qa()&&sr(n,e)}function Ms(n,e,t={}){const{immediate:i=!0}=t,s=y(!1);let r=null;function o(){r&&(clearTimeout(r),r=null)}function a(){s.value=!1,o()}function l(...c){o(),s.value=!0,r=setTimeout(()=>{s.value=!1,r=null,n(...c)},Ge(e))}return i&&(s.value=!0,lr&&l()),ar(a),{isPending:La(s),start:l,stop:a}}function wi(n){var e;const t=Ge(n);return(e=t==null?void 0:t.$el)!=null?e:t}const Ze=lr?window:void 0,Xa=lr?window.document:void 0;function U(...n){let e,t,i,s;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,i,s]=n,e=Ze):[e,t,i,s]=n,!e)return Ka;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,d,h,f)=>(u.addEventListener(d,h,f),()=>u.removeEventListener(d,h,f)),l=fe(()=>[wi(e),Ge(s)],([u,d])=>{if(o(),!u)return;const h=Cd(d)?{...d}:d;r.push(...t.flatMap(f=>i.map(p=>a(u,f,p,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return ar(c),c}function Nd(n){return typeof n=="function"?n:typeof n=="string"?e=>e.key===n:Array.isArray(n)?e=>n.includes(e.key):()=>!0}function yo(...n){let e,t,i={};n.length===3?(e=n[0],t=n[1],i=n[2]):n.length===2?typeof n[1]=="object"?(e=!0,t=n[0],i=n[1]):(e=n[0],t=n[1]):(e=!0,t=n[0]);const{target:s=Ze,eventName:r="keydown",passive:o=!1,dedupe:a=!1}=i,l=Nd(e);return U(s,r,u=>{u.repeat&&Ge(a)||l(u)&&t(u)},o)}function Ad(){const n=y(!1),e=Fa();return e&&De(()=>{n.value=!0},e),n}function Za(n){const e=Ad();return Q(()=>(e.value,!!n()))}const ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oi="__vueuse_ssr_handlers__",Od=Dd();function Dd(){return oi in ri||(ri[oi]=ri[oi]||{}),ri[oi]}function xd(n,e){return Od[n]||e}function Md(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const Ld={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},wo="vueuse-storage";function Fd(n,e,t,i={}){var s;const{flush:r="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Ze,eventFilter:h,onError:f=A=>{console.error(A)},initOnMounted:p}=i,m=(u?Ou:y)(typeof e=="function"?e():e);if(!t)try{t=xd("getDefaultStorage",()=>{var A;return(A=Ze)==null?void 0:A.localStorage})()}catch(A){f(A)}if(!t)return m;const b=Ge(e),E=Md(b),T=(s=i.serializer)!=null?s:Ld[E],{pause:N,resume:C}=Rd(m,()=>I(m.value),{flush:r,deep:o,eventFilter:h});d&&a&&Ja(()=>{U(d,"storage",M),U(d,wo,K),p&&M()}),p||M();function _(A,Y){d&&d.dispatchEvent(new CustomEvent(wo,{detail:{key:n,oldValue:A,newValue:Y,storageArea:t}}))}function I(A){try{const Y=t.getItem(n);if(A==null)_(Y,null),t.removeItem(n);else{const ue=T.write(A);Y!==ue&&(t.setItem(n,ue),_(Y,ue))}}catch(Y){f(Y)}}function w(A){const Y=A?A.newValue:t.getItem(n);if(Y==null)return l&&b!=null&&t.setItem(n,T.write(b)),b;if(!A&&c){const ue=T.read(Y);return typeof c=="function"?c(ue,b):E==="object"&&!Array.isArray(ue)?{...b,...ue}:ue}else return typeof Y!="string"?Y:T.read(Y)}function M(A){if(!(A&&A.storageArea!==t)){if(A&&A.key==null){m.value=b;return}if(!(A&&A.key!==n)){N();try{(A==null?void 0:A.newValue)!==T.write(m.value)&&(m.value=w(A))}catch(Y){f(Y)}finally{A?gi(C):C()}}}}function K(A){M(A.detail)}return m}const Eo=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Ud(n,e={}){const{document:t=Xa,autoExit:i=!1}=e,s=Q(()=>{var E;return(E=wi(n))!=null?E:t==null?void 0:t.querySelector("html")}),r=y(!1),o=Q(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(E=>t&&E in t||s.value&&E in s.value)),a=Q(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(E=>t&&E in t||s.value&&E in s.value)),l=Q(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(E=>t&&E in t||s.value&&E in s.value)),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(E=>t&&E in t),u=Za(()=>s.value&&t&&o.value!==void 0&&a.value!==void 0&&l.value!==void 0),d=()=>c?(t==null?void 0:t[c])===s.value:!1,h=()=>{if(l.value){if(t&&t[l.value]!=null)return t[l.value];{const E=s.value;if((E==null?void 0:E[l.value])!=null)return!!E[l.value]}}return!1};async function f(){if(!(!u.value||!r.value)){if(a.value)if((t==null?void 0:t[a.value])!=null)await t[a.value]();else{const E=s.value;(E==null?void 0:E[a.value])!=null&&await E[a.value]()}r.value=!1}}async function p(){if(!u.value||r.value)return;h()&&await f();const E=s.value;o.value&&(E==null?void 0:E[o.value])!=null&&(await E[o.value](),r.value=!0)}async function m(){await(r.value?f():p())}const b=()=>{const E=h();(!E||E&&d())&&(r.value=E)};return U(t,Eo,b,!1),U(()=>wi(s),Eo,b,!1),i&&ar(f),{isSupported:u,isFullscreen:r,enter:p,exit:f,toggle:m}}function ai(n,e,t={}){const{window:i=Ze}=t;return Fd(n,e,i==null?void 0:i.localStorage,t)}const Wd={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof Touch?null:[n.movementX,n.movementY]};function Hd(n={}){const{type:e="page",touch:t=!0,resetOnTouchEnds:i=!1,initialValue:s={x:0,y:0},window:r=Ze,target:o=r,scroll:a=!0,eventFilter:l}=n;let c=null;const u=y(s.x),d=y(s.y),h=y(null),f=typeof e=="function"?e:Wd[e],p=_=>{const I=f(_);c=_,I&&([u.value,d.value]=I,h.value="mouse")},m=_=>{if(_.touches.length>0){const I=f(_.touches[0]);I&&([u.value,d.value]=I,h.value="touch")}},b=()=>{if(!c||!r)return;const _=f(c);c instanceof MouseEvent&&_&&(u.value=_[0]+r.scrollX,d.value=_[1]+r.scrollY)},E=()=>{u.value=s.x,d.value=s.y},T=l?_=>l(()=>p(_),{}):_=>p(_),N=l?_=>l(()=>m(_),{}):_=>m(_),C=l?()=>l(()=>b(),{}):()=>b();if(o){const _={passive:!0};U(o,["mousemove","dragover"],T,_),t&&e!=="movement"&&(U(o,["touchstart","touchmove"],N,_),i&&U(o,"touchend",E,_)),a&&e==="page"&&U(r,"scroll",C,{passive:!0})}return{x:u,y:d,sourceType:h}}function Bd(n,e={}){const{handleOutside:t=!0,window:i=Ze}=e,s=e.type||"page",{x:r,y:o,sourceType:a}=Hd(e),l=y(n??(i==null?void 0:i.document.body)),c=y(0),u=y(0),d=y(0),h=y(0),f=y(0),p=y(0),m=y(!0);let b=()=>{};return i&&(b=fe([l,r,o],()=>{const E=wi(l);if(!E)return;const{left:T,top:N,width:C,height:_}=E.getBoundingClientRect();d.value=T+(s==="page"?i.pageXOffset:0),h.value=N+(s==="page"?i.pageYOffset:0),f.value=_,p.value=C;const I=r.value-d.value,w=o.value-h.value;m.value=C===0||_===0||I<0||w<0||I>C||w>_,(t||!m.value)&&(c.value=I,u.value=w)},{immediate:!0}),U(document,"mouseleave",()=>{m.value=!0})),{x:r,y:o,sourceType:a,elementX:c,elementY:u,elementPositionX:d,elementPositionY:h,elementHeight:f,elementWidth:p,isOutside:m,stop:b}}function Vd(n={}){const{window:e=Ze}=n,t=Za(()=>e&&"screen"in e&&"orientation"in e.screen),i=t.value?e.screen.orientation:{},s=y(i.type),r=y(i.angle||0);return t.value&&U(e,"orientationchange",()=>{s.value=i.type,r.value=i.angle}),{isSupported:t,orientation:s,angle:r,lockOrientation:l=>t.value&&typeof i.lock=="function"?i.lock(l):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{t.value&&typeof i.unlock=="function"&&i.unlock()}}}function $d(n,e=Ka,t={}){const{immediate:i=!0,manual:s=!1,type:r="text/javascript",async:o=!0,crossOrigin:a,referrerPolicy:l,noModule:c,defer:u,document:d=Xa,attrs:h={}}=t,f=y(null);let p=null;const m=T=>new Promise((N,C)=>{const _=M=>(f.value=M,N(M),M);if(!d){N(!1);return}let I=!1,w=d.querySelector(`script[src="${Ge(n)}"]`);w?w.hasAttribute("data-loaded")&&_(w):(w=d.createElement("script"),w.type=r,w.async=o,w.src=Ge(n),u&&(w.defer=u),a&&(w.crossOrigin=a),c&&(w.noModule=c),l&&(w.referrerPolicy=l),Object.entries(h).forEach(([M,K])=>w==null?void 0:w.setAttribute(M,K)),I=!0),w.addEventListener("error",M=>C(M)),w.addEventListener("abort",M=>C(M)),w.addEventListener("load",()=>{w.setAttribute("data-loaded","true"),e(w),_(w)}),I&&(w=d.head.appendChild(w)),T||_(w)}),b=(T=!0)=>(p||(p=m(T)),p),E=()=>{if(!d)return;p=null,f.value&&(f.value=null);const T=d.querySelector(`script[src="${Ge(n)}"]`);T&&d.head.removeChild(T)};return i&&!s&&Ja(b),s||Pd(E),{scriptTag:f,load:b,unload:E}}const jd=()=>Du().$device,zd=["controls","poster"],Gd=z("p",{class:"vjs-no-js"},[Hu(" To view this video please enable JavaScript, and consider upgrading to a web browser that "),z("a",{href:"https://videojs.com/html5-video-support/",target:"_blank"},"supports HTML5 video")],-1),qd=[Gd],Kd={key:0},Yd={key:2,id:"loading-spinner",class:"absolute inset-0 z-0 flex items-center justify-center bg-black/30 text-black"},Qd={class:"flex w-full bg-zinc-800/80 px-1 duration-200 dark:bg-black/75 md:px-2 items-center"},Jd={key:0,class:"group/volume flex items-center gap-1"},Xd={class:"relative flex h-full w-16 items-center duration-200 group-hover/volume:w-20 md:w-20"},Zd={class:"absolute inset-0 top-1/2 h-1 z-0 w-16 overflow-hidden rounded-sm bg-gray-300/25 md:w-20"},eh=z("div",{class:"flex-1"},null,-1),th=z("div",{class:"border-b border-white/20 px-3 py-1.5 md:px-4 md:py-2.5"}," Kualitas ",-1),nh={class:"flex w-[220px] flex-col py-1 text-base md:w-[250px]"},ih={class:"h-10 w-10"},sh=it({__name:"VideoPlayer",props:{sources:{},poster:{},landscape:{type:Boolean,default:!0},useShortcut:{type:Boolean,default:!0},useDefaultControl:{type:Boolean,default:!1},hideControl:{type:Boolean,default:!1},saveState:{type:Boolean,default:!0},rotateFill:{default:"width"},videoFill:{default:"width"},compact:{type:Boolean,default:!1},title:{}},setup(n,{expose:e}){const t=n,i=y(t.sources.filter(v=>v.type==="hls")??[]);fe(()=>t.sources,()=>{i.value=t.sources.filter(v=>v.type==="hls")??[]});const s=ai("quality-id",2),r=y((i.value??[]).find(v=>s.value===v.id)??i.value[0]),o=y(),a=y(),l=y(),c=t.saveState?ai("data-volume",0):y(1),u=y(!1),d=t.saveState?ai("data-muted",!1):y(!1),h=y(!1),f=y(!0),p=y(0),{isMobile:m}=jd(),{start:b,stop:E}=Ms(()=>{Tt()},1e4),T=y(!1);function N(v,j=!1){const F=Number.parseFloat(v);a.value&&(F===0?(a.value.muted=!0,a.value.volume=0):(a.value.muted=!1,a.value.volume=F),F>0&&(c.value=F),j||(d.value=a.value.muted),u.value=a.value.muted)}const C=y(!1),_=y(!1),I=y(!1),{start:w,stop:M}=Ms(()=>{I.value=!1,_.value=!1,de(!1)},2500);fe(_,v=>{v&&w()});const{isOutside:K,x:A,y:Y}=Bd(o);fe(A,()=>{!m&&!K.value!==C.value&&de(!K.value),w()}),fe(Y,()=>{!m&&!K.value!==C.value&&de(!K.value),w()}),fe(_,v=>{m||de(v)});const ue=y(null);U(ue,"input",v=>{de(!0),N(v.target.value)});function de(v){v?w():M(),C.value=v}const au=y(0),no=y(!1);$d("https://cdn.jsdelivr.net/npm/hls.js@1.5.6",()=>{tn(r.value.url)},{defer:!0});const Qn=y(!1),io=y(!0);De(()=>{!no.value&&typeof Hls<"u"&&(no.value=!0,tn(r.value.url))});function tn(v){var j;Hls.isSupported()&&!Qn.value?(au.value=0,f.value=!0,Jn(),l.value=new Hls({enableWorker:!1,liveDurationInfinity:!0,maxBufferSize:254*1e3*1e3,maxBufferLength:60,lowLatencyMode:!0}),l.value.on(Hls.Events.ERROR,(F,_e)=>{if(console.log("ERROR",_e),_e.details==="manifestParsingError"&&!Qn.value)return Qn.value=!0,tn(v);if(b(),_e.fatal)switch(_e.type){case Hls.ErrorTypes.NETWORK_ERROR:console.error("fatal network error encountered, try to recover"),l.value.startLoad();break;case Hls.ErrorTypes.MEDIA_ERROR:console.error("fatal media error encountered, try to recover"),l.value.recoverMediaError();break;default:if(console.error("cannot recover error"),io.value)return io.value=!1,tn(v);Tt();break}else _e.details===Hls.ErrorDetails.BUFFER_STALLED_ERROR&&(f.value=!0)}),l.value.on(Hls.Events.FRAG_BUFFERED,()=>{E(),f.value=!1}),l.value.on(Hls.Events.MANIFEST_LOADING,()=>{f.value=!0}),l.value.on(Hls.Events.LEVEL_LOADED,()=>{E(),f.value=!1}),l.value.attachMedia(a.value),l.value.loadSource(v),kt()):a.value&&((j=a.value)==null||j.setAttribute("src",v),kt())}function Jn(){l.value&&l.value.destroy()}function lu(){a.value&&(a.value.muted?Zn():Xn())}function Xn(){a.value?(a.value.muted=!0,u.value=!0):N(0)}function Zn(){a.value?(a.value.muted=!1,u.value=!1):N(c.value||1)}const ei=y(!1);async function nn(){if(!ei.value&&a.value){ei.value=!0;try{a.value.paused?(T.value=!1,await kt()):(T.value=!0,await a.value.pause()),ei.value=!1}catch{ei.value=!1}}}function Tt(){h.value=!1,f.value=!0,E();try{tn(r.value.url)}catch(v){console.error(v),Jn()}}const sn=y();U(sn,"pointerenter",()=>{I.value=!0}),U(sn,"pointerleave",()=>{I.value=!1}),U(sn,"focusin",()=>{_.value=!0}),U(a,"click",()=>{_.value=!0}),U(sn,"focusout",()=>{_.value=!1});const{isSupported:so,orientation:cu,lockOrientation:ro,unlockOrientation:uu}=Vd(),hs=y(0),fs=y(0),rn=Q(()=>fs.value<=hs.value),oo=y(!1),{isFullscreen:du,toggle:ao}=Ud(o),on=Q(()=>oo.value||du.value);async function hu(){if(on.value)uu(),await ao();else{const v=cu.value;await ao();try{rn.value?["portrait-primary","portrait-secondary","portrait"].includes(v??"")&&so.value&&await ro("landscape"):["landscape-primary","landscape-secondary","landscape"].includes(v??"")&&so.value&&await ro("portrait")}catch(j){console.error(j)}}}function fu(){var v;document.pictureInPictureElement?document.exitPictureInPicture():document.pictureInPictureEnabled&&((v=a.value)==null||v.requestPictureInPicture())}function lo(v){Qn.value=!1,s.value=v.id,r.value=v,Tt()}const ti=y(0);fe(h,v=>{!v&&!T.value?b():(E(),ti.value=0)},{immediate:!0});async function kt(){if(T.value=!1,a.value)try{d.value?Xn():Zn(),await a.value.play()}catch{if(ti.value>5)return;ti.value+=1,await gi(async()=>(ti.value>4&&(a.value&&(a.value.muted=!0,a.value.volume=0),p.value=0,u.value=!0),kt()))}}const pu=y(!1),co=y(!1);fe(on,()=>{co.value=window.innerHeight<=window.innerWidth,ii()});const an=y(0),ni=y(0);xu(()=>{Jn(),document!=null&&document.pictureInPictureElement&&document.exitPictureInPicture()});function _u(){m?C.value||de(!0):nn()}function mu(){Jn(),document!=null&&document.pictureInPictureElement&&document.exitPictureInPicture()}const ps=y(),gu=Q(()=>an.value===0?0:ni.value/an.value*100);t.useShortcut&&(yo("ArrowLeft",()=>{const v=ni.value-2;a.value&&(a.value.currentTime=v<0?0:v)},{eventName:"keyup"}),yo("ArrowRight",()=>{const v=ni.value+2,j=an.value-3;a.value&&(a.value.currentTime=v>j?j:v)},{eventName:"keyup"})),fe(gu,v=>{ps.value&&(ps.value.value=String(v*(Number(ps.value.max)||0)/100))},{immediate:!0});function vu(){var v;return(v=a.value)==null?void 0:v.getAttribute("prop")}U(a,"volumechange",v=>{var j,F;u.value=(j=v.target)==null?void 0:j.muted,p.value=((F=v.target)==null?void 0:F.volume)||0});const yu=Q(()=>!u.value&&p.value>=.5?"ic:round-volume-up":!u.value&&p.value>0?"ic:round-volume-down":"ic:round-volume-off"),wu=Q(()=>h.value?"ic:round-pause":"ic:round-play-arrow");function Eu(){var v;(v=a.value)==null||v.pause(),T.value=!0}function Iu(){a.value&&(a.value.currentTime=an.value-3)}const Rt=ai("rotate_feature_v1",()=>!1),ln=y(0);function uo(){Rt.value&&(ln.value+=90)}const ot=y(null),ho=Q(()=>ln.value/90%2!==0);function ii(){var j;if(!ot.value){const F=(j=a.value)==null?void 0:j.getBoundingClientRect();ot.value={width:(F==null?void 0:F.width)||0,height:(F==null?void 0:F.height)||0}}const v=ln.value;if(!(!a.value||!o.value)&&(a.value.style.removeProperty("scale"),v/90%2!==0)){if(!ot.value)return;const F=ot.value.height/ot.value.width,_e=ot.value.width/ot.value.height;let at;t.rotateFill==="width"?at=_e:at=F,on.value&&(at=co.value?rn.value?F:_e:rn.value?_e:F),a.value.style.scale=`${at}`}}fe(ln,()=>{requestAnimationFrame(()=>ii())}),U(a,"loadedmetadata",function(){hs.value=this.videoWidth,fs.value=this.videoHeight}),U(a,"loadeddata",function(){hs.value=this.videoWidth,fs.value=this.videoHeight}),U(a,"play",()=>{f.value=!1,h.value=!0}),U(a,"pause",()=>{f.value=!1,h.value=!1}),U(a,"playing",()=>{f.value=!1,h.value=!0}),U(a,"stalled",()=>{f.value=!0}),U(a,"durationchange",()=>{var v;an.value=((v=a.value)==null?void 0:v.duration)||0}),U(a,"timeupdate",()=>{var v;pu.value||(ni.value=((v=a.value)==null?void 0:v.currentTime)||0)}),U(a,"loadstart",()=>{f.value=!0});function _s(){oo.value=document.fullscreenElement!==null}U(a,"webkitfullscreenchange",()=>{_s()}),U(a,"mozfullscreenchange",()=>{_s()}),U(a,"fullscreenchange",()=>{_s()});const fo=y(!1);De(()=>{U(window,"resize",()=>{requestAnimationFrame(()=>ii())}),fo.value=document.pictureInPictureEnabled;try{navigator.mediaSession.setActionHandler("nexttrack",()=>{Tt()})}catch(v){console.error(v)}a.value&&(p.value=Number(c.value)||1,console.log(p.value),N(p.value),h.value=!a.value.paused),gi(()=>{d.value?Xn():Zn()})});const bu=Q(()=>{const v=ho.value?"aspect-[9/12]":"aspect-video",j=ho.value?"aspect-video":"aspect-[9/12]";return rn.value?v:j}),po=y(!1);return De(()=>{po.value=!0}),e({stop:mu,rotate:uo,syncLive:Iu,calculateVideoSize:ii,isPlaying:h,isMuted:u,reload:Tt,togglePlay:nn,isLandscape:rn,changeSource:lo,checkMute:vu,volume:p,pause:Eu,play:kt,mute:Xn,unmute:Zn,setVolume:N}),(v,j)=>{const F=Tu,_e=Ku,at=Ed,Cu=Id,Su=qa;return V(),X("div",{ref_key:"videoPlayer",ref:o,class:cn(["overflow-hidden relative group flex items-center transform-all duration-300",[S(Rt)?v.rotateFill==="width"?S(bu):"h-full w-full":"w-full h-full",{"!cursor-none":!S(C)&&S(h),invisible:!S(po)}]])},[z("video",{ref_key:"video",ref:a,playsinline:"",controls:!(!v.useDefaultControl||S(Rt)||v.hideControl),class:cn([{"object-cover":!S(on)},"inset-0 w-full h-full transition-all duration-500 origin-center"]),style:_o({transform:S(Rt)?`rotate(${S(ln)}deg)`:"none"}),poster:v.poster,onClick:_u},qd,14,zd),!v.useDefaultControl||S(Rt)?(V(),X("div",Kd,[!S(h)&&!S(f)?(V(),X("div",{key:0,class:"z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1",onClick:j[0]||(j[0]=()=>{S(m)&&nn()})},[he(F,{name:"ic:round-play-arrow",class:"text-white/60",size:"3rem"})])):ee("",!0),S(m)&&S(h)&&S(C)&&!S(f)?(V(),X("div",{key:1,class:"z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1",onClick:nn},[he(F,{name:"ic:round-pause",class:"text-white/60",size:"3rem"})])):ee("",!0),S(f)?(V(),X("div",Yd,[he(_e,{class:"text-white size-12"})])):ee("",!0),v.title?(V(),X("div",{key:3,class:cn([{"opacity-100":S(C)||S(_)||S(I)},"absolute top-0 inset-x-0 z-10 opacity-0 text-white px-3 pt-2 pb-4 text-base md:text-lg font-bold bg-title"])},Be(v.title),3)):ee("",!0),z("div",{id:"control",ref_key:"videoControl",ref:sn,class:cn([{"opacity-100":S(C)||S(_)||S(I)},"absolute inset-x-0 bottom-0 z-10 text-slate-200 opacity-0 duration-200 ease-in-out"]),onClick:j[2]||(j[2]=lt=>de(!0))},[z("div",{class:cn({"pointer-events-none":S(m)&&!S(C)})},[z("div",Qd,[z("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Play",type:"button",onClick:nn},[he(F,{name:S(wu),class:"h-full w-full"},null,8,["name"])]),v.compact?ee("",!0):(V(),X("div",Jd,[z("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Mute",type:"button",onClick:lu},[he(F,{name:S(yu),class:"h-full w-full"},null,8,["name"])]),z("div",Xd,[z("div",Zd,[z("div",{class:"h-full bg-slate-200",style:_o({width:`${S(p)*100}%`})},null,4)]),Mu(z("input",{ref_key:"volumeSlider",ref:ue,"onUpdate:modelValue":j[1]||(j[1]=lt=>Fu(p)?p.value=lt:null),"aria-label":"Volume",type:"range",min:"0",max:"1",step:"0.01",class:"volume-slider z-20 h-1 w-16 cursor-pointer md:w-20 pt-1"},null,512),[[Lu,S(p)]])])])),eh,z("button",{class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Reload",type:"button",onClick:Tt},[he(F,{name:"ic:round-refresh",class:"h-full w-full p-[1px]"})]),S(Rt)?(V(),X("button",{key:1,class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Reload",type:"button",onClick:uo},[he(F,{name:"ic:outline-rotate-right",class:"h-full w-full p-[1px]"})])):ee("",!0),v.compact?ee("",!0):(V(),dt(Su,{key:2},{default:un(()=>[he(at,{"aria-label":"Setting",class:"h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1"},{default:un(()=>[he(F,{name:"ic:baseline-settings",class:"h-full w-full p-[2px] duration-300"})]),_:1}),he(Wu,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-2 translate-x-1 opacity-0","enter-to-class":"translate-y-0 translate-x-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 translate-x-x opacity-100","leave-to-class":"translate-y-2 translate-x-1 opacity-0"},{default:un(()=>[he(Cu,{class:"absolute bottom-11 right-4 rounded-md bg-black/70 dark:bg-black/80"},{default:un(()=>[z("div",null,[th,z("div",nh,[(V(!0),X(Wn,null,Uu(S(i),lt=>(V(),dt(at,{key:lt.id,class:"flex items-center truncate text-left text-sm hover:bg-black/50",onClick:()=>lo(lt)},{default:un(()=>[z("div",ih,[S(r).id===lt.id?(V(),dt(F,{key:0,name:"ic:round-check",class:"h-full w-full p-2.5"})):ee("",!0)]),z("div",null,Be(lt.label),1)]),_:2},1032,["onClick"]))),128))])])]),_:1})]),_:1})]),_:1})),S(fo)?(V(),X("button",{key:3,class:"group h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Fullscreen",type:"button",onClick:fu},[he(F,{name:"ic:round-picture-in-picture",class:"h-full w-full p-0.5 duration-300"})])):ee("",!0),z("button",{class:"group h-7 w-7 md:h-8 md:w-8 p-0.5 md:p-1","aria-label":"Fullscreen",type:"button",onClick:hu},[S(on)?(V(),dt(F,{key:1,name:"ic:round-fullscreen-exit",class:"h-full w-full duration-300 hover:scale-125"})):(V(),dt(F,{key:0,name:"ic:round-fullscreen",class:"h-full w-full duration-300 hover:scale-125"}))])])],2)],2)])):ee("",!0)],2)}}});function rh(){return Bu}class oh{static encrypt(e,t){let i="";for(let s=0;s<e.length;s++){const r=s%t.length,a=`00${(e[s].charCodeAt(0)^t[r].charCodeAt(0)).toString(16)}`.slice(-2);i+=a}return i}static decrypt(e,t){let i="";const s=[];let r;for(r=0;r<e.length;r=r+2)s.push(e[r]+e[r+1]);for(r=0;r<s.length;r++){const o=s[r],a=parseInt(o,16),l=r%t.length,c=a^t[l].charCodeAt(0);i+=String.fromCharCode(c)}return i}}const ah="KimiNo";function lh(n){return oh.decrypt(n,ah+ch+dh)}const ch="Kotoga";function uh(n){return typeof n=="string"&&(n=parseInt(n)),n.toString().length>10}const dh="SukiDakara",hh={key:0,class:"text-center"},fh={class:"flex gap-3 justify-center"},ph={key:0},_h={key:1},mh={key:2},gh={key:3},vh=it({__name:"CountDown",props:{time:{}},setup(n){const e=n,t=rh(),i=t(uh(e.time)?e.time:Number(e.time)*1e3),s=y(t.duration(i.diff(t()))),r=y(s.value.asSeconds()<=0),{start:o}=Ms(()=>{const a=s.value.subtract(1,"seconds");s.value.asSeconds()<=1?(r.value=!0,s.value=t.duration(0)):(s.value=a,o())},1e3,{immediate:!0});return(a,l)=>(V(),X("div",null,[S(r)?ee("",!0):(V(),X("div",hh,[z("div",null,Be(S(i).format("dddd, DD MMMM YYYY")),1),z("div",fh,[S(s).months()>0?(V(),X("div",ph,Be(S(s).months())+" bulan",1)):ee("",!0),S(s).days()>0?(V(),X("div",_h,Be(S(s).days())+" hari",1)):ee("",!0),S(s).minutes()>0?(V(),X("div",mh,Be(S(s).minutes())+" menit",1)):ee("",!0),S(s).seconds()>0||S(s).asSeconds()>0?(V(),X("div",gh,Be(S(s).seconds())+" detik",1)):ee("",!0)])]))]))}});var Io={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(n,e){if(!n)throw Gt(e)},Gt=function(n){return new Error("Firebase Database ("+el.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},yh=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},cr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(t[u],t[d],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(tl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):yh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new wh;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nl=function(n){const e=tl(n);return cr.encodeByteArray(e,!0)},Ei=function(n){return nl(n).replace(/\./g,"")},Ii=function(n){try{return cr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n){return il(void 0,n)}function il(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ih(t)||(n[t]=il(n[t],e[t]));return n}function Ih(n){return n!=="__proto__"}/**
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
 */function bh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ch=()=>bh().__FIREBASE_DEFAULTS__,Sh=()=>{if(typeof process>"u"||typeof Io>"u")return;const n=Io.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Th=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ii(n[1]);return e&&JSON.parse(e)},ur=()=>{try{return Ch()||Sh()||Th()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sl=n=>{var e,t;return(t=(e=ur())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kh=n=>{const e=sl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},rl=()=>{var n;return(n=ur())===null||n===void 0?void 0:n.config},ol=n=>{var e;return(e=ur())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Rh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ei(JSON.stringify(t)),Ei(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function Ph(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function al(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nh(){const n=re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ll(){return el.NODE_ADMIN===!0}function Ah(){try{return typeof indexedDB=="object"}catch{return!1}}function Oh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="FirebaseError";class st extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Dh,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?xh(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new st(s,a,i)}}function xh(n,e){return n.replace(Mh,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Mh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){return JSON.parse(n)}function Z(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Tn(Ii(r[0])||""),t=Tn(Ii(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Lh=function(n){const e=cl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Fh=function(n){const e=cl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ft(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function bi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ci(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Si(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(bo(r)&&bo(o)){if(!Si(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function bo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function _n(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function mn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Wh(n,e){const t=new Hh(n,e);return t.subscribe.bind(t)}class Hh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Bh(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=gs),s.error===void 0&&(s.error=gs),s.complete===void 0&&(s.complete=gs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function gs(){}function Ut(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,g(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Yi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ae(n){return n&&n._delegate?n._delegate:n}class _t{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ct="[DEFAULT]";/**
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
 */class $h{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Se;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zh(e))try{this.getOrInitializeService({instanceIdentifier:ct})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ct){return this.instances.has(e)}getOptions(e=ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:jh(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ct){return this.component?this.component.multipleInstances?e:ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jh(n){return n===ct?void 0:n}function zh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $h(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const qh={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Kh=H.INFO,Yh={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Qh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Yh[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hr{constructor(e){this.name=e,this._logLevel=Kh,this._logHandler=Qh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Jh=(n,e)=>e.some(t=>n instanceof t);let Co,So;function Xh(){return Co||(Co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zh(){return So||(So=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ul=new WeakMap,Ls=new WeakMap,dl=new WeakMap,vs=new WeakMap,fr=new WeakMap;function ef(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(qe(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ul.set(t,n)}).catch(()=>{}),fr.set(e,n),e}function tf(n){if(Ls.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ls.set(n,e)}let Fs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ls.get(n);if(e==="objectStoreNames")return n.objectStoreNames||dl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nf(n){Fs=n(Fs)}function sf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ys(this),e,...t);return dl.set(i,e.sort?e.sort():[e]),qe(i)}:Zh().includes(n)?function(...e){return n.apply(ys(this),e),qe(ul.get(this))}:function(...e){return qe(n.apply(ys(this),e))}}function rf(n){return typeof n=="function"?sf(n):(n instanceof IDBTransaction&&tf(n),Jh(n,Xh())?new Proxy(n,Fs):n)}function qe(n){if(n instanceof IDBRequest)return ef(n);if(vs.has(n))return vs.get(n);const e=rf(n);return e!==n&&(vs.set(n,e),fr.set(e,n)),e}const ys=n=>fr.get(n);function of(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=qe(o);return i&&o.addEventListener("upgradeneeded",l=>{i(qe(o.result),l.oldVersion,l.newVersion,qe(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const af=["get","getKey","getAll","getAllKeys","count"],lf=["put","add","delete","clear"],ws=new Map;function To(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ws.get(e))return ws.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=lf.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||af.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return ws.set(e,r),r}nf(n=>({...n,get:(e,t,i)=>To(e,t)||n.get(e,t,i),has:(e,t)=>!!To(e,t)||n.has(e,t)}));/**
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
 */class cf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uf(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function uf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Us="@firebase/app",ko="0.10.1";/**
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
 */const mt=new hr("@firebase/app"),df="@firebase/app-compat",hf="@firebase/analytics-compat",ff="@firebase/analytics",pf="@firebase/app-check-compat",_f="@firebase/app-check",mf="@firebase/auth",gf="@firebase/auth-compat",vf="@firebase/database",yf="@firebase/database-compat",wf="@firebase/functions",Ef="@firebase/functions-compat",If="@firebase/installations",bf="@firebase/installations-compat",Cf="@firebase/messaging",Sf="@firebase/messaging-compat",Tf="@firebase/performance",kf="@firebase/performance-compat",Rf="@firebase/remote-config",Pf="@firebase/remote-config-compat",Nf="@firebase/storage",Af="@firebase/storage-compat",Of="@firebase/firestore",Df="@firebase/firestore-compat",xf="firebase",Mf="10.11.0";/**
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
 */const Ws="[DEFAULT]",Lf={[Us]:"fire-core",[df]:"fire-core-compat",[ff]:"fire-analytics",[hf]:"fire-analytics-compat",[_f]:"fire-app-check",[pf]:"fire-app-check-compat",[mf]:"fire-auth",[gf]:"fire-auth-compat",[vf]:"fire-rtdb",[yf]:"fire-rtdb-compat",[wf]:"fire-fn",[Ef]:"fire-fn-compat",[If]:"fire-iid",[bf]:"fire-iid-compat",[Cf]:"fire-fcm",[Sf]:"fire-fcm-compat",[Tf]:"fire-perf",[kf]:"fire-perf-compat",[Rf]:"fire-rc",[Pf]:"fire-rc-compat",[Nf]:"fire-gcs",[Af]:"fire-gcs-compat",[Of]:"fire-fst",[Df]:"fire-fst-compat","fire-js":"fire-js",[xf]:"fire-js-all"};/**
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
 */const Ti=new Map,Ff=new Map,Hs=new Map;function Ro(n,e){try{n.container.addComponent(e)}catch(t){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wt(n){const e=n.name;if(Hs.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;Hs.set(e,n);for(const t of Ti.values())Ro(t,n);for(const t of Ff.values())Ro(t,n);return!0}function pr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Re(n){return n.settings!==void 0}/**
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
 */const Uf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new Bn("app","Firebase",Uf);/**
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
 */class Wf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
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
 */const Kt=Mf;function hl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ws,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(t||(t=rl()),!t)throw Ke.create("no-options");const r=Ti.get(s);if(r){if(Si(t,r.options)&&Si(i,r.config))return r;throw Ke.create("duplicate-app",{appName:s})}const o=new Gh(s);for(const l of Hs.values())o.addComponent(l);const a=new Wf(t,i,o);return Ti.set(s,a),a}function fl(n=Ws){const e=Ti.get(n);if(!e&&n===Ws&&rl())return hl();if(!e)throw Ke.create("no-app",{appName:n});return e}function Ye(n,e,t){var i;let s=(i=Lf[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(a.join(" "));return}Wt(new _t(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Hf="firebase-heartbeat-database",Bf=1,kn="firebase-heartbeat-store";let Es=null;function pl(){return Es||(Es=of(Hf,Bf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ke.create("idb-open",{originalErrorMessage:n.message})})),Es}async function Vf(n){try{const t=(await pl()).transaction(kn),i=await t.objectStore(kn).get(_l(n));return await t.done,i}catch(e){if(e instanceof st)mt.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(t.message)}}}async function Po(n,e){try{const i=(await pl()).transaction(kn,"readwrite");await i.objectStore(kn).put(e,_l(n)),await i.done}catch(t){if(t instanceof st)mt.warn(t.message);else{const i=Ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mt.warn(i.message)}}}function _l(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $f=1024,jf=30*24*60*60*1e3;class zf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=No();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=No(),{heartbeatsToSend:i,unsentEntries:s}=Gf(this._heartbeatsCache.heartbeats),r=Ei(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function No(){return new Date().toISOString().substring(0,10)}function Gf(n,e=$f){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ao(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ao(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class qf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ah()?Oh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Po(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Po(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ao(n){return Ei(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Kf(n){Wt(new _t("platform-logger",e=>new cf(e),"PRIVATE")),Wt(new _t("heartbeat",e=>new zf(e),"PRIVATE")),Ye(Us,ko,n),Ye(Us,ko,"esm2017"),Ye("fire-js","")}Kf("");var Yf="firebase",Qf="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(Yf,Qf,"app");var Oo={};const Do="@firebase/database",xo="1.0.4";/**
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
 */let ml="";function Jf(n){ml=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Tn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ce(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Xf(e)}}catch{}return new Zf},ft=gl("localStorage"),ep=gl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new hr("@firebase/database"),tp=function(){let n=1;return function(){return n++}}(),vl=function(n){const e=Vh(n),t=new Uh;t.update(e);const i=t.digest();return cr.encodeByteArray(i)},Vn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Vn.apply(null,i):typeof i=="object"?e+=Z(i):e+=i,e+=" "}return e};let vn=null,Mo=!0;const np=function(n,e){g(!e,"Can't turn on custom loggers persistently."),Ot.logLevel=H.VERBOSE,vn=Ot.log.bind(Ot)},ie=function(...n){if(Mo===!0&&(Mo=!1,vn===null&&ep.get("logging_enabled")===!0&&np()),vn){const e=Vn.apply(null,n);vn(e)}},$n=function(n){return function(...e){ie(n,...e)}},Bs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Vn(...n);Ot.error(e)},Le=function(...n){const e=`FIREBASE FATAL ERROR: ${Vn(...n)}`;throw Ot.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+Vn(...n);Ot.warn(e)},ip=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},sp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ht="[MIN_NAME]",gt="[MAX_NAME]",bt=function(n,e){if(n===e)return 0;if(n===Ht||e===gt)return-1;if(e===Ht||n===gt)return 1;{const t=Lo(n),i=Lo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},rp=function(n,e){return n===e?0:n<e?-1:1},dn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Z(e))},_r=function(n){if(typeof n!="object"||n===null)return Z(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Z(e[i]),t+=":",t+=_r(n[e[i]]);return t+="}",t},yl=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function se(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const wl=function(n){g(!Qi(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},op=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ap=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const cp=new RegExp("^-?(0*)\\d{1,10}$"),up=-2147483648,dp=2147483647,Lo=function(n){if(cp.test(n)){const e=Number(n);if(e>=up&&e<=dp)return e}return null},Yt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},hp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class fp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class hi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="5",El="v",Il="s",bl="r",Cl="f",Sl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tl="ls",kl="p",Vs="ac",Rl="websocket",Pl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ft.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ft.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function _p(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Al(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let i;if(e===Rl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Pl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_p(n)&&(t.ns=n.namespace);const s=[];return se(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.counters_={}}incrementCounter(e,t=1){Ce(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Eh(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is={},bs={};function gr(n){const e=n.toString();return Is[e]||(Is[e]=new mp),Is[e]}function gp(n,e){const t=n.toString();return bs[t]||(bs[t]=e()),bs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Yt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="start",yp="close",wp="pLPCommand",Ep="pRTLPCB",Ol="id",Dl="pw",xl="ser",Ip="cb",bp="seg",Cp="ts",Sp="d",Tp="dframe",Ml=1870,Ll=30,kp=Ml-Ll,Rp=25e3,Pp=3e4;class Nt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$n(e),this.stats_=gr(t),this.urlFn=l=>(this.appCheckToken&&(l[Vs]=this.appCheckToken),Al(t,Pl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new vp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Pp)),sp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vr((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fo)this.id=a,this.password=l;else if(o===yp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Fo]="t",i[xl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Ip]=this.scriptTagHolder.uniqueCallbackIdentifier),i[El]=mr,this.transportSessionId&&(i[Il]=this.transportSessionId),this.lastSessionId&&(i[Tl]=this.lastSessionId),this.applicationId&&(i[kl]=this.applicationId),this.appCheckToken&&(i[Vs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sl.test(location.hostname)&&(i[bl]=Cl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Nt.forceAllow_=!0}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){return Nt.forceAllow_?!0:!Nt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!op()&&!ap()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=nl(t),s=yl(i,kp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Tp]="t",i[Ol]=e,i[Dl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class vr{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tp(),window[wp+this.uniqueCallbackIdentifier]=e,window[Ep+this.uniqueCallbackIdentifier]=t,this.myIFrame=vr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ie("frame writing exception"),a.stack&&ie(a.stack),ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ie("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ol]=this.myID,e[Dl]=this.myPW,e[xl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ll+i.length<=Ml;){const o=this.pendingSegs.shift();i=i+"&"+bp+s+"="+o.seg+"&"+Cp+s+"="+o.ts+"&"+Sp+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Rp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=16384,Ap=45e3;let ki=null;typeof MozWebSocket<"u"?ki=MozWebSocket:typeof WebSocket<"u"&&(ki=WebSocket);class me{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$n(this.connId),this.stats_=gr(t),this.connURL=me.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[El]=mr,typeof location<"u"&&location.hostname&&Sl.test(location.hostname)&&(o[bl]=Cl),t&&(o[Il]=t),i&&(o[Tl]=i),s&&(o[Vs]=s),r&&(o[kl]=r),Al(e,Rl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ft.set("previous_websocket_failure",!0);try{let i;ll(),this.mySock=new ki(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){me.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ki!==null&&!me.forceDisallow_}static previouslyFailed(){return ft.isInMemoryStorage||ft.get("previous_websocket_failure")===!0}markConnectionHealthy(){ft.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Tn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=yl(t,Np);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ap))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}me.responsesRequiredToBeHealthy=2;me.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Nt,me]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=me&&me.isAvailable();let i=t&&!me.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[me];else{const s=this.transports_=[];for(const r of Rn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Rn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=6e4,Dp=5e3,xp=10*1024,Mp=100*1024,Cs="t",Uo="d",Lp="s",Wo="r",Fp="e",Ho="o",Bo="a",Vo="n",$o="p",Up="h";class Wp{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$n("c:"+this.id+":"),this.transportManager_=new Rn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=yn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Mp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cs in e){const t=e[Cs];t===Bo?this.upgradeIfSecondaryHealthy_():t===Wo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ho&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=dn("t",e),i=dn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$o,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=dn("t",e),i=dn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=dn(Cs,e);if(Uo in e){const i=e[Uo];if(t===Up){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Vo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Lp?this.onConnectionShutdown_(i):t===Wo?this.onReset_(i):t===Fp?Bs("Server Error: "+i):t===Ho?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),mr!==i&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),yn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Op))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Dp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$o,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ft.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Ul{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ri}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=32,zo=768;class W{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function L(){return new W("")}function O(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function et(n){return n.pieces_.length-n.pieceNum_}function B(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new W(n.pieces_,e)}function yr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Hp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Pn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Wl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new W(e,0)}function G(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof W)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new W(t,0)}function D(n){return n.pieceNum_>=n.pieces_.length}function oe(n,e){const t=O(n),i=O(e);if(t===null)return e;if(t===i)return oe(B(n),B(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Bp(n,e){const t=Pn(n,0),i=Pn(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=bt(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function wr(n,e){if(et(n)!==et(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function pe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(et(n)>et(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Vp{constructor(e,t){this.errorPrefix_=t,this.parts_=Pn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Yi(this.parts_[i]);Hl(this)}}function $p(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Yi(e),Hl(n)}function jp(n){const e=n.parts_.pop();n.byteLength_-=Yi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Hl(n){if(n.byteLength_>zo)throw new Error(n.errorPrefix_+"has a key path longer than "+zo+" bytes ("+n.byteLength_+").");if(n.parts_.length>jo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jo+") or object contains a cycle "+ut(n))}function ut(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ul{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Er}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=1e3,zp=60*5*1e3,Go=30*1e3,Gp=1.3,qp=3e4,Kp="server_kill",qo=3;class xe extends Fl{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=xe.nextPersistentConnectionId_++,this.log_=$n("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hn,this.maxReconnectDelay_=zp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ll())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Er.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ri.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Z(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Se,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;xe.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ce(e,"w")){const i=Ft(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Go)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Lh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Bs("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qp&&(this.reconnectDelay_=hn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Gp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+xe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ie("getToken() completed but was canceled"):(ie("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Wp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{ce(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kp)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ce(d),l())}}}interrupt(e){ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bi(this.interruptReasons_)&&(this.reconnectDelay_=hn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>_r(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new W(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ie("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qo&&(this.reconnectDelay_=Go,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ie("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ml.replace(/\./g,"-")]=1,dr()?e["framework.cordova"]=1:al()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ri.getInstance().currentlyOnline();return bi(this.interruptReasons_)&&e}}xe.nextPersistentConnectionId_=0;xe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new x(Ht,e),s=new x(Ht,t);return this.compare(i,s)!==0}minPost(){return x.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class Bl extends Ji{static get __EMPTY_NODE(){return li}static set __EMPTY_NODE(e){li=e}compare(e,t){return bt(e.name,t.name)}isDefinedOn(e){throw Gt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(gt,li)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,li)}toString(){return".key"}}const Dt=new Bl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ne{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ne.RED,this.left=s??le.EMPTY_NODE,this.right=r??le.EMPTY_NODE}copy(e,t,i,s,r){return new ne(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return le.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ne.RED=!0;ne.BLACK=!1;class Yp{copy(e,t,i,s,r){return this}insert(e,t,i){return new ne(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class le{constructor(e,t=le.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new le(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ne.BLACK,null,null))}remove(e){return new le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ne.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ci(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ci(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ci(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ci(this.root_,null,this.comparator_,!0,e)}}le.EMPTY_NODE=new Yp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n,e){return bt(n.name,e.name)}function Ir(n,e){return bt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s;function Jp(n){$s=n}const Vl=function(n){return typeof n=="number"?"number:"+wl(n):"string:"+n},$l=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ce(e,".sv"),"Priority must be a string or number.")}else g(n===$s||n.isEmpty(),"priority of unexpected type.");g(n===$s||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class te{constructor(e,t=te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$l(this.priorityNode_)}static set __childrenNodeConstructor(e){Ko=e}static get __childrenNodeConstructor(){return Ko}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:O(e)===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=O(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(g(i!==".priority"||et(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,te.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=wl(this.value_):e+=this.value_,this.lazyHash_=vl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof te.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=te.VALUE_TYPE_ORDER.indexOf(t),r=te.VALUE_TYPE_ORDER.indexOf(i);return g(s>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl,zl;function Xp(n){jl=n}function Zp(n){zl=n}class e_ extends Ji{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?bt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(gt,new te("[PRIORITY-POST]",zl))}makePost(e,t){const i=jl(e);return new x(t,new te("[PRIORITY-POST]",i))}toString(){return".priority"}}const q=new e_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=Math.log(2);class n_{constructor(e){const t=r=>parseInt(Math.log(r)/t_,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pi=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new ne(h,d.node,ne.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),m=s(f+1,c);return d=n[f],h=t?t(d):d,new ne(h,d.node,ne.BLACK,p,m)}},r=function(l){let c=null,u=null,d=n.length;const h=function(p,m){const b=d-p,E=d;d-=p;const T=s(b+1,E),N=n[b],C=t?t(N):N;f(new ne(C,N.node,m,null,T))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),b=Math.pow(2,l.count-(p+1));m?h(b,ne.BLACK):(h(b,ne.BLACK),h(b,ne.RED))}return u},o=new n_(n.length),a=r(o);return new le(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;const Pt={};class Pe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return g(Pt&&q,"ChildrenNode.ts has not been loaded"),Ss=Ss||new Pe({".priority":Pt},{".priority":q}),Ss}get(e){const t=Ft(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof le?t:null}hasIndex(e){return Ce(this.indexSet_,e.toString())}addIndex(e,t){g(e!==Dt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(x.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Pi(i,e.getCompare()):a=Pt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Pe(u,c)}addToIndexes(e,t){const i=Ci(this.indexes_,(s,r)=>{const o=Ft(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),s===Pt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(x.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Pi(a,o.getCompare())}else return Pt;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new x(e.name,a))),l.insert(e,e.node)}});return new Pe(i,this.indexSet_)}removeFromIndexes(e,t){const i=Ci(this.indexes_,s=>{if(s===Pt)return s;{const r=t.get(e.name);return r?s.remove(new x(e.name,r)):s}});return new Pe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class k{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&$l(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new k(new le(Ir),null,Pe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?fn:t}}getChild(e){const t=O(e);return t===null?this:this.getImmediateChild(t).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new x(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?fn:this.priorityNode_;return new k(s,o,r)}}updateChild(e,t){const i=O(e);if(i===null)return t;{g(O(e)!==".priority"||et(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(B(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(q,(o,a)=>{t[o]=a.val(e),i++,r&&k.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vl(this.getPriority().val())+":"),this.forEachChild(q,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":vl(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new x(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,x.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jn?-1:0}withIndex(e){if(e===Dt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Dt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(q),s=t.getIterator(q);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dt?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class i_ extends k{constructor(){super(new le(Ir),k.EMPTY_NODE,Pe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const jn=new i_;Object.defineProperties(x,{MIN:{value:new x(Ht,k.EMPTY_NODE)},MAX:{value:new x(gt,jn)}});Bl.__EMPTY_NODE=k.EMPTY_NODE;te.__childrenNodeConstructor=k;Jp(jn);Zp(jn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=!0;function J(n,e=null){if(n===null)return k.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new te(t,J(e))}if(!(n instanceof Array)&&s_){const t=[];let i=!1;if(se(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=J(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new x(o,l)))}}),t.length===0)return k.EMPTY_NODE;const r=Pi(t,Qp,o=>o.name,Ir);if(i){const o=Pi(t,q.getCompare());return new k(r,J(e),new Pe({".priority":o},{".priority":q}))}else return new k(r,J(e),Pe.Default)}else{let t=k.EMPTY_NODE;return se(n,(i,s)=>{if(Ce(n,i)&&i.substring(0,1)!=="."){const r=J(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(J(e))}}Xp(J);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_ extends Ji{constructor(e){super(),this.indexPath_=e,g(!D(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?bt(e.name,t.name):r}makePost(e,t){const i=J(e),s=k.EMPTY_NODE.updateChild(this.indexPath_,i);return new x(t,s)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,jn);return new x(gt,e)}toString(){return Pn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends Ji{compare(e,t){const i=e.node.compareTo(t.node);return i===0?bt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const i=J(e);return new x(t,i)}toString(){return".value"}}const a_=new o_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n){return{type:"value",snapshotNode:n}}function Bt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Nn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function An(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function l_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Nn(t,a)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bt(t,i)):o.trackChildChange(An(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(q,(s,r)=>{t.hasChild(s)||i.trackChildChange(Nn(s,r))}),t.isLeafNode()||t.forEachChild(q,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(An(s,r,o))}else i.trackChildChange(Bt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.indexedFilter_=new br(e.getIndex()),this.index_=e.getIndex(),this.startPost_=On.getStartPost_(e),this.endPost_=On.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new x(t,i))||(i=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=k.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(k.EMPTY_NODE);const r=this;return t.forEachChild(q,(o,a)=>{r.matches(new x(o,a))||(s=s.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new On(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new x(t,i))||(i=k.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(k.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;g(a.numChildren()===this.limit_,"");const l=new x(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(An(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Nn(t,d));const m=a.updateImmediateChild(t,k.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Bt(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Nn(c.name,c.node)),r.trackChildChange(Bt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,k.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ht}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new Cr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function u_(n){return n.loadsAllData()?new br(n.getIndex()):n.hasLimit()?new c_(n):new On(n)}function Yo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===q?t="$priority":n.index_===a_?t="$value":n.index_===Dt?t="$key":(g(n.index_ instanceof r_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Z(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Z(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Z(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Z(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Z(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Qo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Fl{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=$n("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ni.getListenId_(e,i),a={};this.listens_[o]=a;const l=Yo(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Ft(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=Ni.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Yo(e._queryParams),i=e._path.toString(),s=new Se;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Tn(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(){return{value:null,children:new Map}}function Qt(n,e,t){if(D(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=O(e);n.children.has(i)||n.children.set(i,Ai());const s=n.children.get(i);e=B(e),Qt(s,e,t)}}function js(n,e){if(D(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(q,(i,s)=>{Qt(n,new W(i),s)}),js(n,e)}}else if(n.children.size>0){const t=O(e);return e=B(e),n.children.has(t)&&js(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function zs(n,e,t){n.value!==null?t(e,n.value):h_(n,(i,s)=>{const r=new W(e.toString()+"/"+i);zs(s,r,t)})}function h_(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&se(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=10*1e3,p_=30*1e3,__=5*60*1e3;class m_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new f_(e);const i=Jo+(p_-Jo)*Math.random();yn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;se(e,(s,r)=>{r>0&&Ce(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),yn(this.reportStats_.bind(this),Math.floor(Math.random()*2*__))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ge||(ge={}));function Sr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ge.ACK_USER_WRITE,this.source=Sr()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new W(e));return new Oi(L(),t,this.revert)}}else return g(O(this.path)===e,"operationForChild called for unrelated child."),new Oi(B(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.source=e,this.path=t,this.type=ge.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new Dn(this.source,L()):new Dn(this.source,B(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ge.OVERWRITE}operationForChild(e){return D(this.path)?new vt(this.source,L(),this.snap.getImmediateChild(e)):new vt(this.source,B(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ge.MERGE}operationForChild(e){if(D(this.path)){const t=this.children.subtree(new W(e));return t.isEmpty()?null:t.value?new vt(this.source,L(),t.value):new Vt(this.source,L(),t)}else return g(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vt(this.source,B(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const t=O(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function v_(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(l_(o.childName,o.snapshotNode))}),pn(n,s,"child_removed",e,i,t),pn(n,s,"child_added",e,i,t),pn(n,s,"child_moved",r,i,t),pn(n,s,"child_changed",e,i,t),pn(n,s,"value",e,i,t),s}function pn(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>w_(n,a,l)),o.forEach(a=>{const l=y_(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function y_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function w_(n,e,t){if(e.childName==null||t.childName==null)throw Gt("Should only compare child_ events.");const i=new x(e.childName,e.snapshotNode),s=new x(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n,e){return{eventCache:n,serverCache:e}}function wn(n,e,t,i){return Xi(new tt(e,t,i),n.serverCache)}function ql(n,e,t,i){return Xi(n.eventCache,new tt(e,t,i))}function Di(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function yt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;const E_=()=>(Ts||(Ts=new le(rp)),Ts);class ${constructor(e,t=E_()){this.value=e,this.children=t}static fromObject(e){let t=new $(null);return se(e,(i,s)=>{t=t.set(new W(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:L(),value:this.value};if(D(e))return null;{const i=O(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(B(e),t);return r!=null?{path:G(new W(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const t=O(e),i=this.children.get(t);return i!==null?i.subtree(B(e)):new $(null)}}set(e,t){if(D(e))return new $(t,this.children);{const i=O(e),r=(this.children.get(i)||new $(null)).set(B(e),t),o=this.children.insert(i,r);return new $(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const t=O(e),i=this.children.get(t);if(i){const s=i.remove(B(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new $(null):new $(this.value,r)}else return this}}get(e){if(D(e))return this.value;{const t=O(e),i=this.children.get(t);return i?i.get(B(e)):null}}setTree(e,t){if(D(e))return t;{const i=O(e),r=(this.children.get(i)||new $(null)).setTree(B(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new $(this.value,o)}}fold(e){return this.fold_(L(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(G(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,L(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(D(e))return null;{const r=O(e),o=this.children.get(r);return o?o.findOnPath_(B(e),G(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,L(),t)}foreachOnPath_(e,t,i){if(D(e))return this;{this.value&&i(t,this.value);const s=O(e),r=this.children.get(s);return r?r.foreachOnPath_(B(e),G(t,s),i):new $(null)}}foreach(e){this.foreach_(L(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(G(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.writeTree_=e}static empty(){return new ve(new $(null))}}function En(n,e,t){if(D(e))return new ve(new $(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=oe(s,e);return r=r.updateChild(o,t),new ve(n.writeTree_.set(s,r))}else{const s=new $(t),r=n.writeTree_.setTree(e,s);return new ve(r)}}}function Gs(n,e,t){let i=n;return se(t,(s,r)=>{i=En(i,G(e,s),r)}),i}function Xo(n,e){if(D(e))return ve.empty();{const t=n.writeTree_.setTree(e,new $(null));return new ve(t)}}function qs(n,e){return Ct(n,e)!=null}function Ct(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(oe(t.path,e)):null}function Zo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(i,s)=>{e.push(new x(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new x(i,s.value))}),e}function Qe(n,e){if(D(e))return n;{const t=Ct(n,e);return t!=null?new ve(new $(t)):new ve(n.writeTree_.subtree(e))}}function Ks(n){return n.writeTree_.isEmpty()}function $t(n,e){return Kl(L(),n.writeTree_,e)}function Kl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Kl(G(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(G(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n,e){return Xl(e,n)}function I_(n,e,t,i,s){g(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=En(n.visibleWrites,e,t)),n.lastWriteId=i}function b_(n,e,t,i){g(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Gs(n.visibleWrites,e,t),n.lastWriteId=i}function C_(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function S_(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&T_(a,i.path)?s=!1:pe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return k_(n),!0;if(i.snap)n.visibleWrites=Xo(n.visibleWrites,i.path);else{const a=i.children;se(a,l=>{n.visibleWrites=Xo(n.visibleWrites,G(i.path,l))})}return!0}else return!1}function T_(n,e){if(n.snap)return pe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&pe(G(n.path,t),e))return!0;return!1}function k_(n){n.visibleWrites=Yl(n.allWrites,R_,L()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function R_(n){return n.visible}function Yl(n,e,t){let i=ve.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)pe(t,o)?(a=oe(t,o),i=En(i,a,r.snap)):pe(o,t)&&(a=oe(o,t),i=En(i,L(),r.snap.getChild(a)));else if(r.children){if(pe(t,o))a=oe(t,o),i=Gs(i,a,r.children);else if(pe(o,t))if(a=oe(o,t),D(a))i=Gs(i,L(),r.children);else{const l=Ft(r.children,O(a));if(l){const c=l.getChild(B(a));i=En(i,L(),c)}}}else throw Gt("WriteRecord should have .snap or .children")}}return i}function Ql(n,e,t,i,s){if(!i&&!s){const r=Ct(n.visibleWrites,e);if(r!=null)return r;{const o=Qe(n.visibleWrites,e);if(Ks(o))return t;if(t==null&&!qs(o,L()))return null;{const a=t||k.EMPTY_NODE;return $t(o,a)}}}else{const r=Qe(n.visibleWrites,e);if(!s&&Ks(r))return t;if(!s&&t==null&&!qs(r,L()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(pe(c.path,e)||pe(e,c.path))},a=Yl(n.allWrites,o,e),l=t||k.EMPTY_NODE;return $t(a,l)}}}function P_(n,e,t){let i=k.EMPTY_NODE;const s=Ct(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(q,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Qe(n.visibleWrites,e);return t.forEachChild(q,(o,a)=>{const l=$t(Qe(r,new W(o)),a);i=i.updateImmediateChild(o,l)}),Zo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Qe(n.visibleWrites,e);return Zo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function N_(n,e,t,i,s){g(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=G(e,t);if(qs(n.visibleWrites,r))return null;{const o=Qe(n.visibleWrites,r);return Ks(o)?s.getChild(t):$t(o,s.getChild(t))}}function A_(n,e,t,i){const s=G(e,t),r=Ct(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Qe(n.visibleWrites,s);return $t(o,i.getNode().getImmediateChild(t))}else return null}function O_(n,e){return Ct(n.visibleWrites,e)}function D_(n,e,t,i,s,r,o){let a;const l=Qe(n.visibleWrites,e),c=Ct(l,L());if(c!=null)a=c;else if(t!=null)a=$t(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function x_(){return{visibleWrites:ve.empty(),allWrites:[],lastWriteId:-1}}function xi(n,e,t,i){return Ql(n.writeTree,n.treePath,e,t,i)}function Rr(n,e){return P_(n.writeTree,n.treePath,e)}function ea(n,e,t,i){return N_(n.writeTree,n.treePath,e,t,i)}function Mi(n,e){return O_(n.writeTree,G(n.treePath,e))}function M_(n,e,t,i,s,r){return D_(n.writeTree,n.treePath,e,t,i,s,r)}function Pr(n,e,t){return A_(n.writeTree,n.treePath,e,t)}function Jl(n,e){return Xl(G(n.treePath,e),n.writeTree)}function Xl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,An(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Nn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Bt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,An(i,e.snapshotNode,s.oldSnap));else throw Gt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Zl=new F_;class Nr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new tt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yt(this.viewCache_),r=M_(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n){return{filter:n}}function W_(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function H_(n,e,t,i,s){const r=new L_;let o,a;if(t.type===ge.OVERWRITE){const c=t;c.source.fromUser?o=Ys(n,e,c.path,c.snap,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!D(c.path),o=Li(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ge.MERGE){const c=t;c.source.fromUser?o=V_(n,e,c.path,c.children,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Qs(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ge.ACK_USER_WRITE){const c=t;c.revert?o=z_(n,e,c.path,i,s,r):o=$_(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ge.LISTEN_COMPLETE)o=j_(n,e,t.path,i,r);else throw Gt("Unknown operation type: "+t.type);const l=r.getChanges();return B_(e,o,l),{viewCache:o,changes:l}}function B_(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Di(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Gl(Di(e)))}}function ec(n,e,t,i,s,r){const o=e.eventCache;if(Mi(i,t)!=null)return e;{let a,l;if(D(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=yt(e),u=c instanceof k?c:k.EMPTY_NODE,d=Rr(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=xi(i,yt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=O(t);if(c===".priority"){g(et(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=ea(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=B(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=ea(i,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Pr(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return wn(e,a,o.isFullyInitialized()||D(t),n.filter.filtersNodes())}}function Li(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(D(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=O(t);if(!l.isCompleteForPath(t)&&et(t)>1)return e;const p=B(t),b=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),f,b,p,Zl,null)}const d=ql(e,c,l.isFullyInitialized()||D(t),u.filtersNodes()),h=new Nr(s,d,r);return ec(n,d,t,s,h,a)}function Ys(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Nr(s,e,r);if(D(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=wn(e,c,!0,n.filter.filtersNodes());else{const d=O(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=wn(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=B(t),f=a.getNode().getImmediateChild(d);let p;if(D(h))p=i;else{const m=u.getCompleteChild(d);m!=null?yr(h)===".priority"&&m.getChild(Wl(h)).isEmpty()?p=m:p=m.updateChild(h,i):p=k.EMPTY_NODE}if(f.equals(p))l=e;else{const m=n.filter.updateChild(a.getNode(),d,p,h,u,o);l=wn(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ta(n,e){return n.eventCache.isCompleteForChild(e)}function V_(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=G(t,l);ta(e,O(u))&&(a=Ys(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=G(t,l);ta(e,O(u))||(a=Ys(n,a,u,c,s,r,o))}),a}function na(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Qs(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;D(t)?c=i:c=new $(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=na(n,f,h);l=Li(n,l,new W(d),p,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),m=na(n,p,h);l=Li(n,l,new W(d),m,s,r,o,a)}}),l}function $_(n,e,t,i,s,r,o){if(Mi(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(D(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Li(n,e,t,l.getNode().getChild(t),s,r,a,o);if(D(t)){let c=new $(null);return l.getNode().forEachChild(Dt,(u,d)=>{c=c.set(new W(u),d)}),Qs(n,e,t,c,s,r,a,o)}else return e}else{let c=new $(null);return i.foreach((u,d)=>{const h=G(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Qs(n,e,t,c,s,r,a,o)}}function j_(n,e,t,i,s){const r=e.serverCache,o=ql(e,r.getNode(),r.isFullyInitialized()||D(t),r.isFiltered());return ec(n,o,t,i,Zl,s)}function z_(n,e,t,i,s,r){let o;if(Mi(i,t)!=null)return e;{const a=new Nr(i,e,s),l=e.eventCache.getNode();let c;if(D(t)||O(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=xi(i,yt(e));else{const d=e.serverCache.getNode();g(d instanceof k,"serverChildren would be complete if leaf node"),u=Rr(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=O(t);let d=Pr(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,B(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,k.EMPTY_NODE,B(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xi(i,yt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Mi(i,L())!=null,wn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new br(i.getIndex()),r=u_(i);this.processor_=U_(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(k.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(k.EMPTY_NODE,a.getNode(),null),u=new tt(l,o.isFullyInitialized(),s.filtersNodes()),d=new tt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Xi(d,u),this.eventGenerator_=new g_(this.query_)}get query(){return this.query_}}function q_(n){return n.viewCache_.serverCache.getNode()}function K_(n){return Di(n.viewCache_)}function Y_(n,e){const t=yt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!D(e)&&!t.getImmediateChild(O(e)).isEmpty())?t.getChild(e):null}function ia(n){return n.eventRegistrations_.length===0}function Q_(n,e){n.eventRegistrations_.push(e)}function sa(n,e,t){const i=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function ra(n,e,t,i){e.type===ge.MERGE&&e.source.queryId!==null&&(g(yt(n.viewCache_),"We should always have a full cache before handling merges"),g(Di(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=H_(n.processor_,s,e,t,i);return W_(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,tc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function J_(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(q,(r,o)=>{i.push(Bt(r,o))}),t.isFullyInitialized()&&i.push(Gl(t.getNode())),tc(n,i,t.getNode(),e)}function tc(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return v_(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi;class nc{constructor(){this.views=new Map}}function X_(n){g(!Fi,"__referenceConstructor has already been defined"),Fi=n}function Z_(){return g(Fi,"Reference.ts has not been loaded"),Fi}function em(n){return n.views.size===0}function Ar(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return g(r!=null,"SyncTree gave us an op for an invalid query."),ra(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(ra(o,e,t,i));return r}}function ic(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=xi(t,s?i:null),l=!1;a?l=!0:i instanceof k?(a=Rr(t,i),l=!1):(a=k.EMPTY_NODE,l=!1);const c=Xi(new tt(a,l,!1),new tt(i,s,!1));return new G_(e,c)}return o}function tm(n,e,t,i,s,r){const o=ic(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Q_(o,t),J_(o,t)}function nm(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=nt(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(sa(c,t,i)),ia(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(sa(l,t,i)),ia(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!nt(n)&&r.push(new(Z_())(e._repo,e._path)),{removed:r,events:o}}function sc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Je(n,e){let t=null;for(const i of n.views.values())t=t||Y_(i,e);return t}function rc(n,e){if(e._queryParams.loadsAllData())return es(n);{const i=e._queryIdentifier;return n.views.get(i)}}function oc(n,e){return rc(n,e)!=null}function nt(n){return es(n)!=null}function es(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui;function im(n){g(!Ui,"__referenceConstructor has already been defined"),Ui=n}function sm(){return g(Ui,"Reference.ts has not been loaded"),Ui}let rm=1;class oa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=x_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function om(n,e,t,i,s){return I_(n.pendingWriteTree_,e,t,i,s),s?Jt(n,new vt(Sr(),e,t)):[]}function am(n,e,t,i){b_(n.pendingWriteTree_,e,t,i);const s=$.fromObject(t);return Jt(n,new Vt(Sr(),e,s))}function pt(n,e,t=!1){const i=C_(n.pendingWriteTree_,e);if(S_(n.pendingWriteTree_,e)){let r=new $(null);return i.snap!=null?r=r.set(L(),!0):se(i.children,o=>{r=r.set(new W(o),!0)}),Jt(n,new Oi(i.path,r,t))}else return[]}function zn(n,e,t){return Jt(n,new vt(Tr(),e,t))}function lm(n,e,t){const i=$.fromObject(t);return Jt(n,new Vt(Tr(),e,i))}function cm(n,e){return Jt(n,new Dn(Tr(),e))}function um(n,e,t){const i=Or(n,t);if(i){const s=Dr(i),r=s.path,o=s.queryId,a=oe(r,e),l=new Dn(kr(o),a);return xr(n,r,l)}else return[]}function Wi(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||oc(o,e))){const l=nm(o,e,t,i);em(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>nt(f));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=fm(h);for(let p=0;p<f.length;++p){const m=f[p],b=m.query,E=dc(n,m);n.listenProvider_.startListening(In(b),xn(n,b),E.hashFn,E.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(In(e),null):c.forEach(h=>{const f=n.queryToTagMap.get(ts(h));n.listenProvider_.stopListening(In(h),f)}))}pm(n,c)}return a}function ac(n,e,t,i){const s=Or(n,i);if(s!=null){const r=Dr(s),o=r.path,a=r.queryId,l=oe(o,e),c=new vt(kr(a),l,t);return xr(n,o,c)}else return[]}function dm(n,e,t,i){const s=Or(n,i);if(s){const r=Dr(s),o=r.path,a=r.queryId,l=oe(o,e),c=$.fromObject(t),u=new Vt(kr(a),l,c);return xr(n,o,u)}else return[]}function Js(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,f)=>{const p=oe(h,s);r=r||Je(f,p),o=o||nt(f)});let a=n.syncPointTree_.get(s);a?(o=o||nt(a),r=r||Je(a,L())):(a=new nc,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=k.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const m=Je(p,L());m&&(r=r.updateImmediateChild(f,m))}));const c=oc(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ts(e);g(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=_m();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=Zi(n.pendingWriteTree_,s);let d=tm(a,e,t,u,r,l);if(!c&&!o&&!i){const h=rc(a,e);d=d.concat(mm(n,e,h))}return d}function lc(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=oe(o,e),c=Je(a,l);if(c)return c});return Ql(s,e,r,t,!0)}function hm(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=oe(c,t);i=i||Je(u,d)});let s=n.syncPointTree_.get(t);s?i=i||Je(s,L()):(s=new nc,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new tt(i,!0,!1):null,a=Zi(n.pendingWriteTree_,e._path),l=ic(s,e,a,r?o.getNode():k.EMPTY_NODE,r);return K_(l)}function Jt(n,e){return cc(e,n.syncPointTree_,null,Zi(n.pendingWriteTree_,L()))}function cc(n,e,t,i){if(D(n.path))return uc(n,e,t,i);{const s=e.get(L());s!=null&&(t=Je(s,L()));let r=[];const o=O(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=Jl(i,o);r=r.concat(cc(a,l,null,u))}return s&&(r=r.concat(Ar(s,n,i,t))),r}}function uc(n,e,t,i){const s=e.get(L());s!=null&&(t=Je(s,L()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=Jl(i,o),u=n.operationForChild(o);u&&(r=r.concat(uc(u,a,null,c)))}),s&&(r=r.concat(Ar(s,n,i,t))),r}function dc(n,e){const t=e.query,i=xn(n,t);return{hashFn:()=>(q_(e)||k.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?um(n,t._path,i):cm(n,t._path);{const r=lp(s,t);return Wi(n,t,null,r)}}}}function xn(n,e){const t=ts(e);return n.queryToTagMap.get(t)}function ts(n){return n._path.toString()+"$"+n._queryIdentifier}function Or(n,e){return n.tagToQueryMap.get(e)}function Dr(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new W(n.substr(0,e))}}function xr(n,e,t){const i=n.syncPointTree_.get(e);g(i,"Missing sync point for query tag that we're tracking");const s=Zi(n.pendingWriteTree_,e);return Ar(i,t,s,null)}function fm(n){return n.fold((e,t,i)=>{if(t&&nt(t))return[es(t)];{let s=[];return t&&(s=sc(t)),se(i,(r,o)=>{s=s.concat(o)}),s}})}function In(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(sm())(n._repo,n._path):n}function pm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=ts(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function _m(){return rm++}function mm(n,e,t){const i=e._path,s=xn(n,e),r=dc(n,t),o=n.listenProvider_.startListening(In(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)g(!nt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!D(c)&&u&&nt(u))return[es(u).query];{let h=[];return u&&(h=h.concat(sc(u).map(f=>f.query))),se(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(In(u),xn(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Mr(t)}node(){return this.node_}}class Lr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=G(this.path_,e);return new Lr(this.syncTree_,t)}node(){return lc(this.syncTree_,this.path_)}}const gm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},aa=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return vm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return ym(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},vm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},ym=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&g(!1,"Unexpected increment value: "+i);const s=e.node();if(g(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},hc=function(n,e,t,i){return Fr(e,new Lr(t,n),i)},wm=function(n,e,t){return Fr(n,new Mr(e),t)};function Fr(n,e,t){const i=n.getPriority().val(),s=aa(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=aa(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new te(a,J(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new te(s))),o.forEachChild(q,(a,l)=>{const c=Fr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Wr(n,e){let t=e instanceof W?e:new W(e),i=n,s=O(t);for(;s!==null;){const r=Ft(i.node.children,s)||{children:{},childCount:0};i=new Ur(s,i,r),t=B(t),s=O(t)}return i}function Xt(n){return n.node.value}function fc(n,e){n.node.value=e,Xs(n)}function pc(n){return n.node.childCount>0}function Em(n){return Xt(n)===void 0&&!pc(n)}function ns(n,e){se(n.node.children,(t,i)=>{e(new Ur(t,n,i))})}function _c(n,e,t,i){t&&!i&&e(n),ns(n,s=>{_c(s,e,!0,i)}),t&&i&&e(n)}function Im(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Gn(n){return new W(n.parent===null?n.name:Gn(n.parent)+"/"+n.name)}function Xs(n){n.parent!==null&&bm(n.parent,n.name,n)}function bm(n,e,t){const i=Em(t),s=Ce(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Xs(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Xs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=/[\[\].#$\/\u0000-\u001F\u007F]/,Sm=/[\[\].#$\u0000-\u001F\u007F]/,ks=10*1024*1024,Hr=function(n){return typeof n=="string"&&n.length!==0&&!Cm.test(n)},mc=function(n){return typeof n=="string"&&n.length!==0&&!Sm.test(n)},Tm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mc(n)},gc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Qi(n)||n&&typeof n=="object"&&Ce(n,".sv")},la=function(n,e,t,i){is(Ut(n,"value"),e,t)},is=function(n,e,t){const i=t instanceof W?new Vp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ut(i));if(typeof e=="function")throw new Error(n+"contains a function "+ut(i)+" with contents = "+e.toString());if(Qi(e))throw new Error(n+"contains "+e.toString()+" "+ut(i));if(typeof e=="string"&&e.length>ks/3&&Yi(e)>ks)throw new Error(n+"contains a string greater than "+ks+" utf8 bytes "+ut(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(se(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Hr(o)))throw new Error(n+" contains an invalid key ("+o+") "+ut(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$p(i,o),is(n,a,i),jp(i)}),s&&r)throw new Error(n+' contains ".value" child '+ut(i)+" in addition to actual children.")}},km=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Pn(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Hr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Bp);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&pe(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},vc=function(n,e,t,i){const s=Ut(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];se(e,(o,a)=>{const l=new W(o);if(is(s,a,G(t,l)),yr(l)===".priority"&&!gc(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),km(s,r)},Rm=function(n,e,t){if(Qi(e))throw new Error(Ut(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!gc(e))throw new Error(Ut(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},yc=function(n,e,t,i){if(!mc(t))throw new Error(Ut(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Pm=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yc(n,e,t)},ui=function(n,e){if(O(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Nm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Tm(t))throw new Error(Ut(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Br(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!wr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function wc(n,e,t){Br(n,t),Ec(n,i=>wr(i,e))}function be(n,e,t){Br(n,t),Ec(n,i=>pe(i,e)||pe(e,i))}function Ec(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Om(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Om(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();vn&&ie("event: "+t.toString()),Yt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="repo_interrupt",xm=25;class Mm{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Am,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ai(),this.transactionQueueTree_=new Ur,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lm(n,e,t){if(n.stats_=gr(n.repoInfo_),n.forceRestClient_||hp())n.server_=new Ni(n.repoInfo_,(i,s,r,o)=>{ca(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ua(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new xe(n.repoInfo_,e,(i,s,r,o)=>{ca(n,i,s,r,o)},i=>{ua(n,i)},i=>{Um(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=gp(n.repoInfo_,()=>new m_(n.stats_,n.server_)),n.infoData_=new d_,n.infoSyncTree_=new oa({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=zn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$r(n,"connected",!1),n.serverSyncTree_=new oa({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);be(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Fm(n){const t=n.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Vr(n){return gm({timestamp:Fm(n)})}function ca(n,e,t,i,s){n.dataUpdateCount++;const r=new W(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Ci(t,c=>J(c));o=dm(n.serverSyncTree_,r,l,s)}else{const l=J(t);o=ac(n.serverSyncTree_,r,l,s)}else if(i){const l=Ci(t,c=>J(c));o=lm(n.serverSyncTree_,r,l)}else{const l=J(t);o=zn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Mn(n,r)),be(n.eventQueue_,a,o)}function ua(n,e){$r(n,"connected",e),e===!1&&Bm(n)}function Um(n,e){se(e,(t,i)=>{$r(n,t,i)})}function $r(n,e,t){const i=new W("/.info/"+e),s=J(t);n.infoData_.updateSnapshot(i,s);const r=zn(n.infoSyncTree_,i,s);be(n.eventQueue_,i,r)}function Ic(n){return n.nextWriteId_++}function Wm(n,e,t){const i=hm(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=J(s).withIndex(e._queryParams.getIndex());Js(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=zn(n.serverSyncTree_,e._path,r);else{const a=xn(n.serverSyncTree_,e);o=ac(n.serverSyncTree_,e._path,r,a)}return be(n.eventQueue_,e._path,o),Wi(n.serverSyncTree_,e,t,null,!0),r},s=>(ss(n,"get for query "+Z(e)+" failed: "+s),Promise.reject(new Error(s))))}function Hm(n,e,t,i){ss(n,"update",{path:e.toString(),value:t});let s=!0;const r=Vr(n),o={};if(se(t,(a,l)=>{s=!1,o[a]=hc(G(e,a),J(l),n.serverSyncTree_,r)}),s)ie("update() called with empty data.  Don't do anything."),wt(n,i,"ok",void 0);else{const a=Ic(n),l=am(n.serverSyncTree_,e,o,a);Br(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,u)=>{const d=c==="ok";d||ce("update at "+e+" failed: "+c);const h=pt(n.serverSyncTree_,a,!d),f=h.length>0?Mn(n,e):e;be(n.eventQueue_,f,h),wt(n,i,c,u)}),se(t,c=>{const u=Rc(n,G(e,c));Mn(n,u)}),be(n.eventQueue_,e,[])}}function Bm(n){ss(n,"onDisconnectEvents");const e=Vr(n),t=Ai();zs(n.onDisconnect_,L(),(s,r)=>{const o=hc(s,r,n.serverSyncTree_,e);Qt(t,s,o)});let i=[];zs(t,L(),(s,r)=>{i=i.concat(zn(n.serverSyncTree_,s,r));const o=Rc(n,s);Mn(n,o)}),n.onDisconnect_=Ai(),be(n.eventQueue_,L(),i)}function Vm(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&js(n.onDisconnect_,e),wt(n,t,i,s)})}function da(n,e,t,i){const s=J(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Qt(n.onDisconnect_,e,s),wt(n,i,r,o)})}function $m(n,e,t,i,s){const r=J(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Qt(n.onDisconnect_,e,r),wt(n,s,o,a)})}function jm(n,e,t,i){if(bi(t)){ie("onDisconnect().update() called with empty data.  Don't do anything."),wt(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&se(t,(o,a)=>{const l=J(a);Qt(n.onDisconnect_,G(e,o),l)}),wt(n,i,s,r)})}function zm(n,e,t){let i;O(e._path)===".info"?i=Js(n.infoSyncTree_,e,t):i=Js(n.serverSyncTree_,e,t),wc(n.eventQueue_,e._path,i)}function Gm(n,e,t){let i;O(e._path)===".info"?i=Wi(n.infoSyncTree_,e,t):i=Wi(n.serverSyncTree_,e,t),wc(n.eventQueue_,e._path,i)}function bc(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Dm)}function ss(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ie(t,...e)}function wt(n,e,t,i){e&&Yt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Cc(n,e,t){return lc(n.serverSyncTree_,e,t)||k.EMPTY_NODE}function jr(n,e=n.transactionQueueTree_){if(e||rs(n,e),Xt(e)){const t=Tc(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&qm(n,Gn(e),t)}else pc(e)&&ns(e,t=>{jr(n,t)})}function qm(n,e,t){const i=t.map(c=>c.currentWriteId),s=Cc(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=oe(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ss(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(pt(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();rs(n,Wr(n.transactionQueueTree_,e)),jr(n,n.transactionQueueTree_),be(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)Yt(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{ce("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Mn(n,e)}},o)}function Mn(n,e){const t=Sc(n,e),i=Gn(t),s=Tc(n,t);return Km(n,s,i),i}function Km(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=oe(t,l.path);let u=!1,d;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(pt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=xm)u=!0,d="maxretry",s=s.concat(pt(n.serverSyncTree_,l.currentWriteId,!0));else{const h=Cc(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){is("transaction failed: Data returned ",f,l.path);let p=J(f);typeof f=="object"&&f!=null&&Ce(f,".priority")||(p=p.updatePriority(h.getPriority()));const b=l.currentWriteId,E=Vr(n),T=wm(p,h,E);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=T,l.currentWriteId=Ic(n),o.splice(o.indexOf(b),1),s=s.concat(om(n.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),s=s.concat(pt(n.serverSyncTree_,b,!0))}else u=!0,d="nodata",s=s.concat(pt(n.serverSyncTree_,l.currentWriteId,!0))}be(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}rs(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Yt(i[a]);jr(n,n.transactionQueueTree_)}function Sc(n,e){let t,i=n.transactionQueueTree_;for(t=O(e);t!==null&&Xt(i)===void 0;)i=Wr(i,t),e=B(e),t=O(e);return i}function Tc(n,e){const t=[];return kc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function kc(n,e,t){const i=Xt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);ns(e,s=>{kc(n,s,t)})}function rs(n,e){const t=Xt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,fc(e,t.length>0?t:void 0)}ns(e,i=>{rs(n,i)})}function Rc(n,e){const t=Gn(Sc(n,e)),i=Wr(n.transactionQueueTree_,e);return Im(i,s=>{Rs(n,s)}),Rs(n,i),_c(i,s=>{Rs(n,s)}),t}function Rs(n,e){const t=Xt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(pt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fc(e,void 0):t.length=r+1,be(n.eventQueue_,Gn(e),s);for(let o=0;o<i.length;o++)Yt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Qm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const ha=function(n,e){const t=Jm(n),i=t.namespace;t.domain==="firebase.com"&&Le(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Le("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ip();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Nl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new W(t.pathString)}},Jm=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=Ym(n.substring(u,d)));const h=Qm(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z(this.snapshot.exportVal())}}class Zm{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class eg{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Se;return Vm(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ui("OnDisconnect.remove",this._path);const e=new Se;return da(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ui("OnDisconnect.set",this._path),la("OnDisconnect.set",e,this._path);const t=new Se;return da(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){ui("OnDisconnect.setWithPriority",this._path),la("OnDisconnect.setWithPriority",e,this._path),Rm("OnDisconnect.setWithPriority",t);const i=new Se;return $m(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){ui("OnDisconnect.update",this._path),vc("OnDisconnect.update",e,this._path);const t=new Se;return jm(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return D(this._path)?null:yr(this._path)}get ref(){return new Ue(this._repo,this._path)}get _queryIdentifier(){const e=Qo(this._queryParams),t=_r(e);return t==="{}"?"default":t}get _queryObject(){return Qo(this._queryParams)}isEqual(e){if(e=ae(e),!(e instanceof zr))return!1;const t=this._repo===e._repo,i=wr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Hp(this._path)}}class Ue extends zr{constructor(e,t){super(e,t,new Cr,!1)}get parent(){const e=Wl(this._path);return e===null?null:new Ue(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ln{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new W(e),i=Zs(this.ref,e);return new Ln(this._node.getChild(t),i,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ln(s,Zs(this.ref,i),q)))}hasChild(e){const t=new W(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ps(n,e){return n=ae(n),n._checkNotDeleted("ref"),e!==void 0?Zs(n._root,e):n._root}function Zs(n,e){return n=ae(n),O(n._path)===null?Pm("child","path",e):yc("child","path",e),new Ue(n._repo,G(n._path,e))}function tg(n){return n=ae(n),new eg(n._repo,n._path)}function ng(n,e){vc("update",e,n._path);const t=new Se;return Hm(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function fa(n){n=ae(n);const e=new Pc(()=>{}),t=new os(e);return Wm(n._repo,n,t).then(i=>new Ln(i,new Ue(n._repo,n._path),n._queryParams.getIndex()))}class os{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Xm("value",this,new Ln(e.snapshotNode,new Ue(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Zm(this,e,t):null}matches(e){return e instanceof os?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ig(n,e,t,i,s){const r=new Pc(t,void 0),o=new os(r);return zm(n._repo,n,o),()=>Gm(n._repo,n,o)}function sg(n,e,t,i){return ig(n,"value",e)}X_(Ue);im(Ue);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="FIREBASE_DATABASE_EMULATOR_HOST",er={};let og=!1;function ag(n,e,t,i){n.repoInfo_=new Nl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function lg(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Le("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ie("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ha(r,s),a=o.repoInfo,l;typeof process<"u"&&Oo&&(l=Oo[rg]),l?(r=`http://${l}?ns=${a.namespace}`,o=ha(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new pp(n.name,n.options,e);Nm("Invalid Firebase Database URL",o),D(o.path)||Le("Database URL must point to the root of a Firebase Database (not including a child path).");const u=ug(a,n,c,new fp(n.name,t));return new dg(u,n)}function cg(n,e){const t=er[e];(!t||t[n.key]!==n)&&Le(`Database ${e}(${n.repoInfo_}) has already been deleted.`),bc(n),delete t[n.key]}function ug(n,e,t,i){let s=er[e.name];s||(s={},er[e.name]=s);let r=s[n.toURLString()];return r&&Le("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Mm(n,og,t,i),s[n.toURLString()]=r,r}class dg{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ue(this._repo,L())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Le("Cannot call "+e+" on a deleted database.")}}function hg(n=fl(),e){const t=pr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=kh("database");i&&fg(t,...i)}return t}function fg(n,e,t,i={}){n=ae(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Le("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Le('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new hi(hi.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Rh(i.mockUserToken,n.app.options.projectId);r=new hi(o)}ag(s,e,t,r)}function pa(n){n=ae(n),n._checkNotDeleted("goOffline"),bc(n._repo)}/**
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
 */function pg(n){Jf(Kt),Wt(new _t("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return lg(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ye(Do,xo,n),Ye(Do,xo,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g={".sv":"timestamp"};function _a(){return _g}function Ns(n){return{".sv":{increment:n}}}xe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};pg();function Gr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Nc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mg=Nc,Ac=new Bn("auth","Firebase",Nc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new hr("@firebase/auth");function gg(n,...e){Hi.logLevel<=H.WARN&&Hi.warn(`Auth (${Kt}): ${n}`,...e)}function fi(n,...e){Hi.logLevel<=H.ERROR&&Hi.error(`Auth (${Kt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,...e){throw qr(n,...e)}function Ee(n,...e){return qr(n,...e)}function Oc(n,e,t){const i=Object.assign(Object.assign({},mg()),{[e]:t});return new Bn("auth","Firebase",i).create(e,{appName:n.name})}function Xe(n){return Oc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Ac.create(n,...e)}function R(n,e,...t){if(!n)throw qr(e,...t)}function Ne(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fi(e),new Error(e)}function Fe(n,e){n||Ne(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function vg(){return ma()==="http:"||ma()==="https:"}function ma(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vg()||Ph()||"connection"in navigator)?navigator.onLine:!0}function wg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fe(t>e,"Short delay should be less than long delay!"),this.isMobile=dr()||al()}get(){return yg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(n,e){Fe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new qn(3e4,6e4);function St(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function rt(n,e,t,i,s={}){return xc(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=qt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Dc.fetch()(Mc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function xc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Eg),e);try{const s=new Cg(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw di(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw di(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw di(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw di(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Oc(n,u,c);ye(n,u)}}catch(s){if(s instanceof st)throw s;ye(n,"network-request-failed",{message:String(s)})}}async function as(n,e,t,i,s={}){const r=await rt(n,e,t,i,s);return"mfaPendingCredential"in r&&ye(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Mc(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Kr(n.config,s):`${n.config.apiScheme}://${s}`}function bg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ee(this.auth,"network-request-failed")),Ig.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function di(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ee(n,e,i);return s.customData._tokenResponse=t,s}function ga(n){return n!==void 0&&n.enterprise!==void 0}class Sg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Tg(n,e){return rt(n,"GET","/v2/recaptchaConfig",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(n,e){return rt(n,"POST","/v1/accounts:delete",e)}async function Lc(n,e){return rt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rg(n,e=!1){const t=ae(n),i=await t.getIdToken(e),s=Yr(i);R(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:bn(As(s.auth_time)),issuedAtTime:bn(As(s.iat)),expirationTime:bn(As(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function As(n){return Number(n)*1e3}function Yr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return fi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ii(t);return s?JSON.parse(s):(fi("Failed to decode base64 JWT payload"),null)}catch(s){return fi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function va(n){const e=Yr(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof st&&Pg(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Pg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bn(this.lastLoginAt),this.creationTime=bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bi(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Fn(n,Lc(t,{idToken:i}));R(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Fc(r.providerUserInfo):[],a=Og(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nr(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Ag(n){const e=ae(n);await Bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Og(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Fc(n){return n.map(e=>{var{providerId:t}=e,i=Gr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(n,e){const t=await xc(n,{},async()=>{const i=qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Mc(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xg(n,e){return rt(n,"POST","/v2/accounts:revokeToken",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):va(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){R(e.length!==0,"internal-error");const t=va(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Dg(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new xt;return i&&(R(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(R(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(R(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xt,this.toJSON())}_performRefresh(){return Ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ae{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Gr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ng(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rg(this,e)}reload(){return Ag(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Bi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Re(this.auth.app))return Promise.reject(Xe(this.auth));const e=await this.getIdToken();return await Fn(this,kg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=t.createdAt)!==null&&c!==void 0?c:void 0,T=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:C,isAnonymous:_,providerData:I,stsTokenManager:w}=t;R(N&&w,e,"internal-error");const M=xt.fromJSON(this.name,w);R(typeof N=="string",e,"internal-error"),We(d,e.name),We(h,e.name),R(typeof C=="boolean",e,"internal-error"),R(typeof _=="boolean",e,"internal-error"),We(f,e.name),We(p,e.name),We(m,e.name),We(b,e.name),We(E,e.name),We(T,e.name);const K=new Ae({uid:N,auth:e,email:h,emailVerified:C,displayName:d,isAnonymous:_,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:M,createdAt:E,lastLoginAt:T});return I&&Array.isArray(I)&&(K.providerData=I.map(A=>Object.assign({},A))),b&&(K._redirectEventId=b),K}static async _fromIdTokenResponse(e,t,i=!1){const s=new xt;s.updateFromServerResponse(t);const r=new Ae({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Bi(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];R(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Fc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new xt;a.updateFromIdToken(i);const l=new Ae({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new nr(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Map;function Oe(n){Fe(n instanceof Function,"Expected a class definition");let e=ya.get(n);return e?(Fe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ya.set(n,e),e)}/**
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
 */class Uc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uc.type="NONE";const wa=Uc;/**
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
 */function pi(n,e,t){return`firebase:${n}:${e}:${t}`}class Mt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=pi(this.userKey,s.apiKey,r),this.fullPersistenceKey=pi("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Mt(Oe(wa),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Oe(wa);const o=pi(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=Ae._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Mt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Mt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($c(e))return"Blackberry";if(jc(e))return"Webos";if(Qr(e))return"Safari";if((e.includes("chrome/")||Hc(e))&&!e.includes("edge/"))return"Chrome";if(Vc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Wc(n=re()){return/firefox\//i.test(n)}function Qr(n=re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hc(n=re()){return/crios\//i.test(n)}function Bc(n=re()){return/iemobile/i.test(n)}function Vc(n=re()){return/android/i.test(n)}function $c(n=re()){return/blackberry/i.test(n)}function jc(n=re()){return/webos/i.test(n)}function ls(n=re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mg(n=re()){var e;return ls(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lg(){return Nh()&&document.documentMode===10}function zc(n=re()){return ls(n)||Vc(n)||jc(n)||$c(n)||/windows phone/i.test(n)||Bc(n)}function Fg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n,e=[]){let t;switch(n){case"Browser":t=Ea(re());break;case"Worker":t=`${Ea(re())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kt}/${i}`}/**
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
 */class Ug{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Wg(n,e={}){return rt(n,"GET","/v2/passwordPolicy",St(n,e))}/**
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
 */const Hg=6;class Bg{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Hg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ia(this),this.idTokenSubscription=new Ia(this),this.beforeStateQueue=new Ug(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ac,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Oe(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Mt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lc(this,{idToken:e}),i=await Ae._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Re(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Re(this.app))return Promise.reject(Xe(this));const t=e?ae(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Re(this.app)?Promise.reject(Xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Re(this.app)?Promise.reject(Xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wg(this),t=new Bg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await xg(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Oe(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await Mt.create(this,[Oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zt(n){return ae(n)}class Ia{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wh(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $g(n){cs=n}function qc(n){return cs.loadJS(n)}function jg(){return cs.recaptchaEnterpriseScript}function zg(){return cs.gapiScript}function Gg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const qg="recaptcha-enterprise",Kg="NO_RECAPTCHA";class Yg{constructor(e){this.type=qg,this.auth=Zt(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Tg(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Sg(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;ga(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Kg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&ga(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=jg();l.length!==0&&(l+=a),qc(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ba(n,e,t,i=!1){const s=new Yg(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ca(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await ba(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ba(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(n,e){const t=pr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Si(r,e??{}))return s;ye(s,"already-initialized")}return t.initialize({options:e})}function Jg(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Oe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Xg(n,e,t){const i=Zt(n);R(i._canInitEmulator,i,"emulator-config-failed"),R(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Kc(e),{host:o,port:a}=Zg(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),ev()}function Kc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zg(n){const e=Kc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Sa(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Sa(o)}}}function Sa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ev(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ne("not implemented")}_getIdTokenResponse(e){return Ne("not implemented")}_linkToIdToken(e,t){return Ne("not implemented")}_getReauthenticationResolver(e){return Ne("not implemented")}}async function tv(n,e){return rt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(n,e){return as(n,"POST","/v1/accounts:signInWithPassword",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(n,e){return as(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}async function sv(n,e){return as(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Jr{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Un(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Un(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ca(e,t,"signInWithPassword",nv);case"emailLink":return iv(e,{email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ca(e,i,"signUpPassword",tv);case"emailLink":return sv(e,{idToken:t,email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(n,e){return as(n,"POST","/v1/accounts:signInWithIdp",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="http://localhost";class Et extends Jr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Gr(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Et(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Lt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Lt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Lt(e,t)}buildRequest(){const e={requestUri:rv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function av(n){const e=_n(mn(n)).link,t=e?_n(mn(e)).deep_link_id:null,i=_n(mn(n)).deep_link_id;return(i?_n(mn(i)).link:null)||i||t||e||n}class Xr{constructor(e){var t,i,s,r,o,a;const l=_n(mn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=ov((s=l.mode)!==null&&s!==void 0?s:null);R(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=av(e);try{return new Xr(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,t){return Un._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Xr.parseLink(t);return R(i,"argument-error"),Un._fromEmailAndCode(e,i.code,i.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kn extends Yc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Kn{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ve.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Et._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return $e.credential(t,i)}catch{return null}}}$e.GOOGLE_SIGN_IN_METHOD="google.com";$e.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Kn{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.GITHUB_SIGN_IN_METHOD="github.com";je.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Kn{constructor(){super("twitter.com")}static credential(e,t){return Et._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ze.credential(t,i)}catch{return null}}}ze.TWITTER_SIGN_IN_METHOD="twitter.com";ze.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ae._fromIdTokenResponse(e,i,s),o=Ta(i);return new jt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ta(i);return new jt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ta(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends st{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Vi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Vi(e,t,i,s)}}function Qc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Vi._fromErrorAndOperation(n,r,e,i):r})}async function lv(n,e,t=!1){const i=await Fn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return jt._forOperation(n,"link",i)}/**
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
 */async function cv(n,e,t=!1){const{auth:i}=n;if(Re(i.app))return Promise.reject(Xe(i));const s="reauthenticate";try{const r=await Fn(n,Qc(i,s,e,n),t);R(r.idToken,i,"internal-error");const o=Yr(r.idToken);R(o,i,"internal-error");const{sub:a}=o;return R(n.uid===a,i,"user-mismatch"),jt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ye(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(n,e,t=!1){if(Re(n.app))return Promise.reject(Xe(n));const i="signIn",s=await Qc(n,i,e),r=await jt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function uv(n,e){return Jc(Zt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(n){const e=Zt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function hv(n,e,t){return Re(n.app)?Promise.reject(Xe(n)):uv(ae(n),en.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&dv(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(n,e){return ae(n).setPersistence(e)}function pv(n,e,t,i){return ae(n).onIdTokenChanged(e,t,i)}function _v(n,e,t){return ae(n).beforeAuthStateChanged(e,t)}const $i="__sak";/**
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
 */class Xc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($i,"1"),this.storage.removeItem($i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(){const n=re();return Qr(n)||ls(n)}const gv=1e3,vv=10;class Zc extends Xc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mv()&&Fg(),this.fallbackToPolling=zc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Lg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vv):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zc.type="LOCAL";const yv=Zc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Xc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eu.type="SESSION";const Zr=eu;/**
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
 */function wv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class us{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new us(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await wv(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}us.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ev{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=eo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return window}function Iv(n){Ie().location.href=n}/**
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
 */function tu(){return typeof Ie().WorkerGlobalScope<"u"&&typeof Ie().importScripts=="function"}async function bv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Sv(){return tu()?self:null}/**
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
 */const nu="firebaseLocalStorageDb",Tv=1,ji="firebaseLocalStorage",iu="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ds(n,e){return n.transaction([ji],e?"readwrite":"readonly").objectStore(ji)}function kv(){const n=indexedDB.deleteDatabase(nu);return new Yn(n).toPromise()}function ir(){const n=indexedDB.open(nu,Tv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ji,{keyPath:iu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ji)?e(i):(i.close(),await kv(),e(await ir()))})})}async function ka(n,e,t){const i=ds(n,!0).put({[iu]:e,value:t});return new Yn(i).toPromise()}async function Rv(n,e){const t=ds(n,!1).get(e),i=await new Yn(t).toPromise();return i===void 0?null:i.value}function Ra(n,e){const t=ds(n,!0).delete(e);return new Yn(t).toPromise()}const Pv=800,Nv=3;class su{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ir(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Nv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=us._getInstance(Sv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bv(),!this.activeServiceWorker)return;this.sender=new Ev(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ir();return await ka(e,$i,"1"),await Ra(e,$i),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ka(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Rv(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ra(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ds(s,!1).getAll();return new Yn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}su.type="LOCAL";const Av=su;new qn(3e4,6e4);/**
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
 */function Ov(n,e){return e?Oe(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class to extends Jr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Lt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dv(n){return Jc(n.auth,new to(n),n.bypassAuthState)}function xv(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),cv(t,new to(n),n.bypassAuthState)}async function Mv(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),lv(t,new to(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dv;case"linkViaPopup":case"linkViaRedirect":return Mv;case"reauthViaPopup":case"reauthViaRedirect":return xv;default:ye(this.auth,"internal-error")}}resolve(e){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=new qn(2e3,1e4);class At extends ru{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Fe(this.filter.length===1,"Popup operations only handle one event");const e=eo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lv.get())};e()}}At.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="pendingRedirect",_i=new Map;class Uv extends ru{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=_i.get(this.auth._key());if(!e){try{const i=await Wv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}_i.set(this.auth._key(),e)}return this.bypassAuthState||_i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wv(n,e){const t=Vv(e),i=Bv(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Hv(n,e){_i.set(n._key(),e)}function Bv(n){return Oe(n._redirectPersistence)}function Vv(n){return pi(Fv,n.config.apiKey,n.name)}async function $v(n,e,t=!1){if(Re(n.app))return Promise.reject(Xe(n));const i=Zt(n),s=Ov(i,e),o=await new Uv(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=10*60*1e3;class zv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ou(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ee(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pa(e))}saveEventToCache(e){this.cachedEventUids.add(Pa(e)),this.lastProcessedEventTime=Date.now()}}function Pa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ou({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ou(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(n,e={}){return rt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yv=/^https?/;async function Qv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qv(n);for(const t of e)try{if(Jv(t))return}catch{}ye(n,"unauthorized-domain")}function Jv(n){const e=tr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Yv.test(t))return!1;if(Kv.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Xv=new qn(3e4,6e4);function Na(){const n=Ie().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Zv(n){return new Promise((e,t)=>{var i,s,r;function o(){Na(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Na(),t(Ee(n,"network-request-failed"))},timeout:Xv.get()})}if(!((s=(i=Ie().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ie().gapi)===null||r===void 0)&&r.load)o();else{const a=Gg("iframefcb");return Ie()[a]=()=>{gapi.load?o():t(Ee(n,"network-request-failed"))},qc(`${zg()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw mi=null,e})}let mi=null;function ey(n){return mi=mi||Zv(n),mi}/**
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
 */const ty=new qn(5e3,15e3),ny="__/auth/iframe",iy="emulator/auth/iframe",sy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ry=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oy(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Kr(e,iy):`https://${n.config.authDomain}/${ny}`,i={apiKey:e.apiKey,appName:n.name,v:Kt},s=ry.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${qt(i).slice(1)}`}async function ay(n){const e=await ey(n),t=Ie().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:oy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sy,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ee(n,"network-request-failed"),a=Ie().setTimeout(()=>{r(o)},ty.get());function l(){Ie().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ly={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cy=500,uy=600,dy="_blank",hy="http://localhost";class Aa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fy(n,e,t,i=cy,s=uy){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ly),{width:i.toString(),height:s.toString(),top:r,left:o}),c=re().toLowerCase();t&&(a=Hc(c)?dy:t),Wc(c)&&(e=e||hy,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(Mg(c)&&a!=="_self")return py(e||"",a),new Aa(null);const d=window.open(e||"",a,u);R(d,n,"popup-blocked");try{d.focus()}catch{}return new Aa(d)}function py(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const _y="__/auth/handler",my="emulator/auth/handler",gy=encodeURIComponent("fac");async function Oa(n,e,t,i,s,r){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Kt,eventId:s};if(e instanceof Yc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",bi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Kn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${gy}=${encodeURIComponent(l)}`:"";return`${vy(n)}?${qt(a).slice(1)}${c}`}function vy({config:n}){return n.emulator?Kr(n,my):`https://${n.authDomain}/${_y}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="webStorageSupport";class yy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zr,this._completeRedirectFn=$v,this._overrideRedirectResult=Hv}async _openPopup(e,t,i,s){var r;Fe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Oa(e,t,i,tr(),s);return fy(e,o,eo())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Oa(e,t,i,tr(),s);return Iv(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Fe(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ay(e),i=new zv(e);return t.register("authEvent",s=>(R(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Os,{type:Os},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Os];o!==void 0&&t(!!o),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zc()||Qr()||ls()}}const wy=yy;var Da="@firebase/auth",xa="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function by(n){Wt(new _t("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gc(n)},c=new Vg(i,s,r,l);return Jg(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Wt(new _t("auth-internal",e=>{const t=Zt(e.getProvider("auth").getImmediate());return(i=>new Ey(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(Da,xa,Iy(n)),Ye(Da,xa,"esm2017")}/**
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
 */const Cy=5*60,Sy=ol("authIdTokenMaxAge")||Cy;let Ma=null;const Ty=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Sy)return;const s=t==null?void 0:t.token;Ma!==s&&(Ma=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ky(n=fl()){const e=pr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qg(n,{popupRedirectResolver:wy,persistence:[Av,yv,Zr]}),i=ol("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Ty(r.toString());_v(t,o,()=>o(t.currentUser)),pv(t,a=>o(a))}}const s=sl("auth");return s&&Xg(t,`http://${s}`),t}function Ry(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}$g({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ee("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Ry().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});by("Browser");const Py={class:"min-h-[100dvh] w-full bg-sr flex flex-col"},Ny={class:"md:h-[360px] w-full max-w-[100dvw] max-md:aspect-video md:left-[calc(50%-320px)] md:absolute top-0 md:top-[98px] md:w-[640px] bg-zinc-900 flex justify-center items-center"},Ay={key:1,class:"text-white font-semibold px-3 text-center text-lg md:text-xl"},Ly=it({__name:"index",setup(n){const e=y(!1),t={apiKey:"AIzaSyCmFoeQm28lLubMcuXjwfVrO2Grwn57E_s",authDomain:"showroom-shared.firebaseapp.com",projectId:"showroom-shared",storageBucket:"showroom-shared.appspot.com",messagingSenderId:"888402111940",appId:"1:888402111940:web:2d4ed3c66a21893c45c891",measurementId:"G-EEC924TW6T",databaseURL:"https://showroom-shared-default-rtdb.asia-southeast1.firebasedatabase.app/"},i=y(null),s=Vu(),r=y(0);return De(()=>{const o=String(s.hash);if(o)try{const a=lh(o.replace("#","")),[l,c,u]=a.split(":"),d=hl(t),h=hg(d),f=ky(d);fv(f,Zr).then(()=>hv(f,l,c)).then(async p=>{const m={device_count:Ns(-1),last_changed:_a()},b={device_count:Ns(1),play_count:Ns(1),last_changed:_a()},E=Ps(h,`status/${p.user.uid}`),T=Ps(h,`/premium_live/${u}`),N=Ps(h,`/ticket/${p.user.uid}`),C=(await fa(N)).val();r.value=Number.isNaN(C.max_device)?1:Number(C.max_device);const _=(await fa(E)).val();(_==null?void 0:_.device_count)>=r.value?(e.value=!0,pa(h)):(tg(E).update(m).then(function(){ng(E,b)}),sg(T,I=>{I.val()?i.value=I.val():pa(h)}))}).catch(p=>{console.error(p)})}catch(a){console.error(a)}}),(o,a)=>{var u,d;const l=sh,c=vh;return V(),X("div",Py,[z("div",Ny,[S(i)&&!S(e)?(V(),dt(l,{key:0,class:"size-full",sources:((u=S(i))==null?void 0:u.streaming_url_list)??[],title:(d=S(i))==null?void 0:d.title,poster:"https://static.showroom-live.com/image/room/cover/73f495d564945090f4af7338a42ce09ffa12d35fbfa8ce35c856220bcf96c5f3_m.png?v=1711114163"},null,8,["sources","title"])):ee("",!0),S(e)?(V(),X("div",Ay,"Maaf pemutaran hanya untuk "+Be(S(r))+" device",1)):ee("",!0)]),S(i)&&!S(e)?(V(),dt(c,{key:0,time:S(i).start_at,class:"max-md:mt-5 md:absolute md:left-1/2 md:-translate-x-1/2 top-[calc(360px_+_98px_+_28px)] text-white font-bold text-2xl"},null,8,["time"])):ee("",!0)])}}});export{Ly as default};
