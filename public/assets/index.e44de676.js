import{c as u,a as c,w as _,p as h,b as $,r as m,o as d,d as e,e as p,n as g,f as k,g as j,T as b,h as w,i as x,j as C,R as I}from"./vendor.3a0c2dcb.js";const N=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};N();var f=(t,s)=>{const a=t.__vccOpts||t;for(const[i,o]of s)a[i]=o;return a};const O={},B=t=>(h("data-v-a122f75c"),t=t(),$(),t),S={class:"component-1"},L=B(()=>e("div",null,[e("h1",null,"Bok."),e("h2",null,"Ja sam mato."),e("p",null,"Ja sam frontend developer."),e("p",null,"Vrlo sam kreativan."),e("p",null,"Volim i pase i ma\u010Dke."),e("p",null,"Najdra\u017Ea boja mi je plava.")],-1)),P=p("version #2 --->");function V(t,s,a,i,o,n){const r=m("router-link");return d(),u("div",S,[L,c(r,{class:"link",to:"/2"},{default:_(()=>[P]),_:1})])}var y=f(O,[["render",V],["__scopeId","data-v-a122f75c"]]);const A={},J=t=>(h("data-v-948a0274"),t=t(),$(),t),R={class:"component-2"},T=J(()=>e("div",{class:"card"},[e("h1",null,"mato"),e("h2",null,"Najbolji frontend developer u Hrvatskoj."),e("a",null,"#matojenajbolji")],-1)),z={class:"links"},E=p("\u2190\xA0version #1"),F=p("version #3\xA0\u2192");function H(t,s,a,i,o,n){const r=m("router-link");return d(),u("div",R,[T,e("div",z,[c(r,{class:"link",to:"/1"},{default:_(()=>[E]),_:1}),c(r,{class:"link",to:"/3"},{default:_(()=>[F]),_:1})])])}var q=f(A,[["render",H],["__scopeId","data-v-948a0274"]]),D="/assets/3.2d3e87fe.jpg";const K={data(){return{showOthers:!1}}},l=t=>(h("data-v-0e3e23e0"),t=t(),$(),t),M={class:"component-3"},W={class:"pink"},G=l(()=>e("h1",null,"Bok.",-1)),Q=l(()=>e("h2",null,"Ja sam mato.",-1)),U=l(()=>e("p",null,"Frontend developer.",-1)),X=l(()=>e("p",null,"Neki misle da ja nemam osje\u0107aje,",-1)),Y=l(()=>e("p",null,"ali ja imam mnogo raznih osje\u0107aja.",-1)),Z=p("\u2190\xA0version #2"),ee=l(()=>e("img",{src:D,alt:""},null,-1)),oe=l(()=>e("p",{style:{"text-align":"right"}},[p(` "If you haven't noticed, mato is the best!" `),e("br"),e("b",null,"Ivan (28)")],-1));function te(t,s,a,i,o,n){const r=m("router-link");return d(),u("div",M,[e("div",W,[G,Q,U,X,Y,e("a",{href:"#",onClick:s[0]||(s[0]=v=>o.showOthers=!0)},"Pogledaj \u0161to drugi developeri ka\u017Eu o mati"),c(r,{class:"link",to:"/2"},{default:_(()=>[Z]),_:1})]),e("div",{class:"other",style:g(o.showOthers?"transform: scale(1)":"transform: scale(0);")},[e("div",{class:"close fa fa-times",onClick:s[1]||(s[1]=v=>o.showOthers=!1)}),ee,oe],4)])}var ne=f(K,[["render",te],["__scopeId","data-v-0e3e23e0"]]);const se=k({history:j(),routes:[{path:"/",component:y},{path:"/1",component:y},{path:"/2",component:q},{path:"/3",component:ne}]});const re={},ae={class:"router-view-container"};function ie(t,s,a,i,o,n){const r=m("router-view");return d(),u("div",ae,[c(r,null,{default:_(({Component:v})=>[c(b,{name:"fade",mode:"out-in"},{default:_(()=>[(d(),w(x(v),{key:t.$route.path}))]),_:2},1024)]),_:1})])}var le=f(re,[["render",ie]]),ce={install:(t,s)=>{t.config.globalProperties.$mato=a=>"mato "+(a||"default")}};C(le).use(se).use(ce,{greetings:{hello:"Bonjour!"}}).component("vue-easy-lightbox",I).mount("#app");
