import{S as t,i as s,s as a,r as e,e as o,q as n,F as r,d as i,x as c,c as l,a as u,v as h,b as f,f as m,g as p,I as d,B as v}from"./client.edab0b18.js";function x(t){let s,a,x,b,g,j,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),x=o("h1"),b=n(E),g=e(),j=o("div"),this.h()},l(t){r('[data-svelte="svelte-1uty71u"]',document.head).forEach(i),a=c(t),x=l(t,"H1",{});var s=u(x);b=h(s,E),s.forEach(i),g=c(t),j=l(t,"DIV",{class:!0}),u(j).forEach(i),this.h()},h(){f(j,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,x,s),p(x,b),m(t,g,s),m(t,j,s),j.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&d(b,E),1&a&&H!==(H=t[0].html+"")&&(j.innerHTML=H)},i:v,o:v,d(t){t&&i(a),t&&i(x),t&&i(g),t&&i(j)}}}async function b({params:t}){const s=await this.fetch(`reports/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function g(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,g,x,a,{post:0})}}export{b as preload};
