import{j as m,a9 as f,a3 as I,k as r,M as d,X as x,a5 as v,a8 as S}from"./Bj-Z4Edk.js";import{r as _}from"./CvPl5tTm.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({"01b7ef3c":p.value}));const t=I(),s=u,l=r(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[s.name]?t.nuxtIcon.aliases[s.name]:s.name}),c=r(()=>_(l.value)),p=r(()=>{var o,a;const e=(a=(o=t.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=r(()=>{var n,o,a;if(!s.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=t.nuxtIcon)!=null&&o.size))return;const e=s.size||((a=t.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(d(),x("span",{style:v({width:i.value,height:i.value})},null,4))}}),h=S(y,[["__scopeId","data-v-dd603a40"]]);export{h as default};
