!function(){"use strict";const e=1610449577067,t=`cache${e}`,s=["/client/client.d4f776aa.js","/client/inject_styles.5607aec6.js","/client/index.9d6ffc6d.js","/client/index.c815efe5.js","/client/[slug].06efdbdf.js","/client/service.4bb7b003.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]);self.addEventListener("install",(e=>{console.log("to_cache: ",s),e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})).then(console.log("install ASSETS",t)).catch((e=>{console.log(e)})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&cached.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open(`offline${e}`).then((async e=>{let s=await e.match(t.request);return s||(s=await fetch(t.request),e.put(t.request,s.clone()),s)})))))}))}();
