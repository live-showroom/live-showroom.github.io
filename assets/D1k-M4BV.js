import{u as J,x as S,v as W,w as X,R as Z,y as D,z as T,A as N,T as ee,U as te,V as se,B as $,D as ae,G as U,H as V,I as L,J as oe,K as le,M as ne,N as re,O as ie,P as ce,Q as j}from"./CbzrcDLA.js";import{d as ue,r as n,u as de,o as me,a as F,c as K,b as h,e as O,f as e,g as m,h as Y,t as G,i as y,w as pe,j as r}from"./DqPUB4IS.js";const fe={class:"bg-black min-h-[100dvh] w-full flex flex-col overflow-x-hidden"},_e={class:"w-[max(min(81%,640px),33.3333%)] aspect-[640/1080] relative left-1/2 -translate-x-1/2"},ve={class:"flex justify-center absolute items-center w-full aspect-video top-[9.07407407407%]"},he={key:0,class:"size-full"},be=["src"],ge={key:1,class:"text-white relative text-lg md:text-xl text-center flex flex-col gap-3"},xe=m("div",null,"Live belum dimulai",-1),we={key:2,class:"text-white font-semibold px-4 text-center text-base md:text-lg lg:text-xl"},ke=m("div",{class:"absolute top-0 aspect-video w-[300%] left-1/2 -translate-x-1/2 -z-10"},[m("img",{class:"size-full object-cover",src:"https://static.showroom-live.com/image/room_background/default.png?v=3",alt:""})],-1),ye=m("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"},null,-1),Ae=ue({__name:"index",setup(Ce){const p=n(!1),B=n(null),M={apiKey:"AIzaSyCmFoeQm28lLubMcuXjwfVrO2Grwn57E_s",authDomain:"showroom-shared.firebaseapp.com",projectId:"showroom-shared",storageBucket:"showroom-shared.appspot.com",messagingSenderId:"888402111940",appId:"1:888402111940:web:2d4ed3c66a21893c45c891",measurementId:"G-EEC924TW6T",databaseURL:"https://showroom-shared-default-rtdb.asia-southeast1.firebasedatabase.app/"},s=n(null),C=n(0),P=de(),R=n(0),I=n(),E=J(M),i=n();me(async()=>{var a;const t=String(P.hash);if(t)try{F().public.debug_token&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=F().public.debug_token);const o=S(E),A=W(t.replace("#","")),[c,f]=A.split(":");X(E,{provider:new Z("6LefEccpAAAAANFbgY9zm6MQjhIiuYhvgamAG4dF"),isTokenAutoRefreshEnabled:!0});const x={device_count:D(-1),last_changed:T()},w={device_count:D(1),play_count:D(1),last_changed:T()},u=N(o,`/new_status/${c}/${f}`),b=ee(N(o,"/tickets"),te("pass"),se(f)),_=(a=(await $(b)).val())==null?void 0:a[c];_&&(i.value={username:c,password:f});const l=(await $(u)).val();if(!l){console.log("Status fail");return}let v;R.value=Number.isNaN(_.max_device)?1:Number(_.max_device),I.value=l==null?void 0:l.refresh_key,(l==null?void 0:l.device_count)>=R.value?p.value=!0:(v=ae(u.ref),v.update(x).then(function(){U(u.ref,w)}),V(b,async k=>{var z;console.log(k.val());const d=(z=k.val())==null?void 0:z[c];d?(i.value={username:c,password:f},s.value=d==null?void 0:d.premium_live,C.value+=1):(i.value=null,L(o))})),V(u,k=>{var d;((d=k.val())==null?void 0:d.refresh_key)!==I.value&&(B.value="Kamu menekan tombol reset, silahkan refresh halaman ini",p.value=!0,v&&v.cancel().then(()=>{L(o)}))})}catch(o){console.error(o)}});const g=n(!1);async function q(){g.value=!1;try{if(!i.value)return;const t=S(E),a=N(t,`/new_status/${i.value.username}/${i.value.password}`);await U(a,{device_count:0,refresh_key:le()})}catch(t){console.error(t)}}const H=K(()=>{var t;return((t=s.value)==null?void 0:t.title)??"Showroom Live"}),Q=K(()=>{var t,a;return(a=(t=s.value)==null?void 0:t.streaming_url_list)==null?void 0:a.some(o=>j(o.url))});return oe({title:H}),(t,a)=>{var x,w,u,b,_,l;const o=ne,A=re,c=ie,f=ce;return r(),h("div",fe,[O(o,{"is-open":e(g),onClose:a[0]||(a[0]=()=>g.value=!1),onReset:q},null,8,["is-open"]),m("div",_e,[m("div",ve,[e(s)&&!e(p)&&((w=(x=e(s))==null?void 0:x.streaming_url_list)!=null&&w.length)?(r(),h("div",he,[e(Q)?(r(),h("iframe",{id:"ytplayer",key:`yt-${e(C)}`,type:"text/html",class:"size-full",src:(l=e(s).streaming_url_list.find(v=>("isYoutubeEmbedUrl"in t?t.isYoutubeEmbedUrl:e(j))(v.url)))==null?void 0:l.url,frameborder:"0"},null,8,be)):(r(),Y(A,{key:e(C),class:"size-full",sources:((u=e(s))==null?void 0:u.streaming_url_list)??[],title:(b=e(s))==null?void 0:b.title,poster:(_=e(s))==null?void 0:_.image},null,8,["sources","title","poster"]))])):!e(p)&&e(s)?(r(),h("div",ge,[m("div",null,G(e(s).title),1),xe])):y("",!0),e(p)?(r(),h("div",we,G(e(B)??`Maaf pemutaran hanya
                    untuk ${e(R)} device`),1)):y("",!0)]),e(i)?(r(),h("button",{key:0,class:"absolute top-[44.44%] right-0 hover:bg-red-400/30 text-red-500 px-3 py-1 rounded-full",onClick:a[1]||(a[1]=()=>g.value=!0)},"Reset")):y("",!0),ke,O(c,{to:"https://t.me/showroomlivebot",external:!0,target:"_blank",title:"Showroom Live Bot Telegram",class:"telegram-button absolute left-1/2 -translate-x-1/2 bottom-[41%] w-[10.5%] aspect-square rounded-full hover:scale-110 transition-[box-shadow,transform] duration-300 origin-bottom"},{default:pe(()=>[ye]),_:1}),e(s)&&!e(p)?(r(),Y(f,{key:1,time:e(s).start_at,class:"absolute left-1/2 -translate-x-1/2 top-[80%] md:top-[44.3%] text-white font-bold"},null,8,["time"])):y("",!0)])])}}});export{Ae as default};
