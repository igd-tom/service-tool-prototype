import{S as t,i as s,s as e,r as a,e as o,q as n,F as r,d as i,x as c,c as l,a as u,v as h,b as f,f as m,g as p,I as d,B as v}from"./client.22fbef0c.js";function x(t){let s,e,x,g,j,E,H=t[0].title+"",$=t[0].html+"";return document.title=s=t[0].title,{c(){e=a(),x=o("h1"),g=n(H),j=a(),E=o("div"),this.h()},l(t){r('[data-svelte="svelte-1uty71u"]',document.head).forEach(i),e=c(t),x=l(t,"H1",{});var s=u(x);g=h(s,H),s.forEach(i),j=c(t),E=l(t,"DIV",{class:!0}),u(E).forEach(i),this.h()},h(){f(E,"class","content svelte-emm3f3")},m(t,s){m(t,e,s),m(t,x,s),p(x,g),m(t,j,s),m(t,E,s),E.innerHTML=$},p(t,[e]){1&e&&s!==(s=t[0].title)&&(document.title=s),1&e&&H!==(H=t[0].title+"")&&d(g,H),1&e&&$!==($=t[0].html+"")&&(E.innerHTML=$)},i:v,o:v,d(t){t&&i(e),t&&i(x),t&&i(j),t&&i(E)}}}async function g({params:t}){const s=await this.fetch(`reports/${t.slug}.json`),e=await s.json();if(200===s.status)return{post:e};this.error(s.status,e.message)}function j(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),s(this,t,j,x,e,{post:0})}}export{g as preload};
