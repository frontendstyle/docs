import{d as i,I as s,a1 as u,u as c,h as l,l as d,a2 as f,a3 as m,a4 as h,a5 as A,a6 as g,a7 as P,a8 as v,a9 as w,aa as y,ab as C,ac as R,ad as _,ae as b,af as E}from"./chunks/framework.a7bfe727.js";import{t as r}from"./chunks/theme.cd793e76.js";const D={...r,enhanceApp(e){r.enhanceApp(e)}};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=p(D),T=i({name:"VitePressApp",setup(){const{site:e}=c();return l(()=>{d(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),f(),m(),h(),n.setup&&n.setup(),()=>A(n.Layout)}});async function x(){const e=S(),a=O();a.provide(g,e);const t=P(e.route);return a.provide(v,t),a.component("Content",w),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:C}),{app:a,router:e,data:t}}function O(){return R(T)}function S(){let e=s,a;return _(t=>{let o=b(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),E(()=>import(o),[])},n.NotFound)}s&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{x as createApp};