import{S as e,i as a,s,e as t,c as r,a as d,d as n,b as l,f as o,g as i,l as c,h as u,u as h,t as f,j as p,k as v,m,n as g,o as w,p as y,w as b,q as x,r as M,v as T,x as I,y as D,z as E,A as $,B as S,C as B,D as k,E as C,F as V,G as q,H as A,I as R,J as N,K as H}from"./client.4d8cce88.js";function P(e){let a,s,v,m,g;const y=e[2].default,b=w(y,e,e[1],null);return{c(){a=t("div"),s=t("div"),b&&b.c(),this.h()},l(e){a=r(e,"DIV",{class:!0});var t=d(a);s=r(t,"DIV",{class:!0});var l=d(s);b&&b.l(l),l.forEach(n),t.forEach(n),this.h()},h(){l(s,"class","modal svelte-y6bmyh"),l(a,"class","backdrop svelte-y6bmyh")},m(t,r){o(t,a,r),i(a,s),b&&b.m(s,null),v=!0,m||(g=c(a,"click",u(e[3])),m=!0)},p(e,a){b&&b.p&&2&a&&h(b,y,e,e[1],a,null,null)},i(e){v||(f(b,e),v=!0)},o(e){p(b,e),v=!1},d(e){e&&n(a),b&&b.d(e),m=!1,g()}}}function O(e){let a,s,t=e[0]&&P(e);return{c(){t&&t.c(),a=v()},l(e){t&&t.l(e),a=v()},m(e,r){t&&t.m(e,r),o(e,a,r),s=!0},p(e,[s]){e[0]?t?(t.p(e,s),1&s&&f(t,1)):(t=P(e),t.c(),f(t,1),t.m(a.parentNode,a)):t&&(m(),p(t,1,1,(()=>{t=null})),g())},i(e){s||(f(t),s=!0)},o(e){p(t),s=!1},d(e){t&&t.d(e),e&&n(a)}}}function G(e,a,s){let{$$slots:t={},$$scope:r}=a,{showModal:d=!1}=a;return e.$$set=e=>{"showModal"in e&&s(0,d=e.showModal),"$$scope"in e&&s(1,r=e.$$scope)},[d,r,t,function(a){y(e,a)}]}class U extends e{constructor(e){super(),a(this,e,G,O,s,{showModal:0})}}const{subscribe:F,set:J,update:W}=b({serial:"",baseAddr:"",channelIndex:"",totalChannels:"",randomFact:"Svelte can be easy"}),j={subscribe:F,set:J,update:W,setSerial:e=>W((a=>(a.serial=e,a))),setBaseAddr:e=>W((a=>(a.baseAddr=e,a))),setChannelIndex:e=>W((a=>(a.channelIndex=e,a))),setTotalChannels:e=>W((a=>(a.totalChannels=e,a)))},z=e=>{let a="Not Specified";if(!Number.isInteger(e))throw"type provided not valid integer";switch(e){case 1:a="T750 Hub";break;case 2:a="T750 Ann";break;case 3:a="T750 I/O";break;case 4:a="T750 Display";break;case 5:a="T750 Sampler";break;case 6:a="T650 Hub";break;case 7:a="T750B";break;case 8:a="T750B Display";break;case 9:a="T750BAV Display";break;case 10:a="T635 Display";break;case 11:a="T635+ Mini Hub (B1)";break;case 12:a="T635 Micro Mini Hub (B2)";break;case 13:a="T635 Mini Hub (B3)";break;case 14:a="T635 Mini Hub (B4)";break;case 15:a="ESP32 Dongle";break;case 16:a="T750+ Hub"}return a};function K(e,a){let s=0;return s|=a<<8,s|=e,s}var L;function Q(e){console.log("Connection closed"),setTimeout(initWebSocket,2e3)}function X(e){Y.onMsgArrived(e)}const Y={queuedMsgs:[],sentMsgs:[],busy:!1,onMsgArrived:function(e){let a="",s=JSON.parse(e.data);this.sentMsgs.forEach((function(e,t){e.id===s.id&&(e.success(s),a=e.id)})),this.sentMsgs=this.sentMsgs.filter((e=>e.id!==a)),0!=this.queuedMsgs.length&&this.sendNextMessage()},init:function(){setInterval((()=>{let e=Date.now();this.sentMsgs.forEach((function(a,s){a.timestamp-e>5e3&&a.fail("No response received, expired: ",a)})),this.sentMsgs=this.sentMsgs.filter((a=>a.timestamp-e<5e3))}),800)},queueMsg:function(e){return new Promise(((a,s)=>{setTimeout((()=>{this.queuedMsgs.push({id:String("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var a=16*Math.random()|0;return("x"==e?a:3&a|8).toString(16)}))),timestamp:-1,msg:e,success:e=>a(e),fail:e=>s(e)}),this.sendNextMsg()}),20)}))},sendNextMsg:function(){if(this.queuedMsgs.length&&!this.busy){this.busy=!0;let e=this.queuedMsgs.shift();L.send(JSON.stringify({id:e.id,maxTries:e.msg.maxTries,timeout:e.msg.timeout,addr:e.msg.addr,cmd:e.msg.cmd,d1:e.msg.d1,d2:e.msg.d2,d3:e.msg.d3,d4:e.msg.d4})),this.sentMsgs.push(e),this.busy=!1}}},Z={serial:async function(e){let a=await Y.queueMsg({maxTries:3,timeout:200,addr:e.addr,cmd:21,d1:7,d2:0,d3:0,d4:0});if(0!=a.payload.twResCode)throw a;return function(e,a,s){let t,r=0;return r|=s<<16,t=a,t=t<<8&65280,r|=t,r|=255&e,r}(a.payload.d1,a.payload.d2,a.payload.d3)},baseSettings:async function(e){let a=await Y.queueMsg({maxTries:3,timeout:200,addr:e.addr,cmd:21,d1:25,d2:0,d3:0,d4:0});if(0!=a.payload.twResCode)throw a;return{baseAddr:a.payload.d1,channelIndex:a.payload.d2,totalChannels:a.payload.d3}},pcbType:async function(e){let a=await Y.queueMsg({maxTries:3,timeout:200,addr:e.addr,cmd:21,d1:37,d2:0,d3:0,d4:0});if(0!=a.payload.twResCode)throw a;return{pcbType:z(a.payload.d1),addr:a.payload.d2,cable:a.payload.d3}}},_={program:async function(e){let a=await Y.queueMsg({maxTries:3,timeout:200,addr:e.addr,cmd:20,d1:1,d2:0,d3:0,d4:0});if(0!=a.payload.twResCode)throw a;return{version:K(a.payload.d1,a.payload.d2)/1e3,checksum:`0x${K(a.payload.d3,a.payload.d4).toString(16).toUpperCase()}`}},programDate:async function(e){let a=await Y.queueMsg({maxTries:3,timeout:200,addr:e.addr,cmd:20,d1:4,d2:0,d3:0,d4:0});if(0!=a.payload.twResCode)throw a;return new Date(a.payload.d3+2e3,a.payload.d2-1,a.payload.d1).toLocaleDateString()}},ee={serial:async function(e){let a=function(e){let a=new Uint8Array(3);return a[0]=255&e,a[1]=e>>8&255,a[2]=e>>16&255,a}(e.serial),s=await Y.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:121,d1:7,d2:a[0],d3:a[1],d4:a[2]});if(0!=s.payload.twResCode)throw s},baseSettings:async function(e){let a=await Y.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:121,d1:25,d2:e.baseAddr,d3:e.channelIndex,d4:e.totalChannels});if(0!=a.payload.twResCode)throw a}};async function ae(){await(console.log("Trying to open a WebSocket connection..."),(L=new WebSocket("wss://igd-dev.com/chat")).onclose=Q,L.onmessage=X,new Promise(((e,a)=>{L.onopen=a=>{console.log("ws opened"),e(a)}}))),Y.init()}function se(e){let a,s,u,h,f,p,v,m,g,w,y,b,k,C,V,q,A,R,N,H,P,O,G,U,F,J,W;return{c(){a=t("h3"),s=x("General"),u=M(),h=t("br"),f=M(),p=t("br"),v=M(),m=t("form"),g=t("div"),w=t("div"),y=x("Serial"),b=M(),k=t("input"),C=M(),V=t("div"),q=x("Base Address"),A=M(),R=t("input"),N=M(),H=t("br"),P=M(),O=t("br"),G=M(),U=t("button"),F=x("Apply"),this.h()},l(e){a=r(e,"H3",{class:!0});var t=d(a);s=T(t,"General"),t.forEach(n),u=I(e),h=r(e,"BR",{}),f=I(e),p=r(e,"BR",{}),v=I(e),m=r(e,"FORM",{class:!0});var l=d(m);g=r(l,"DIV",{class:!0});var o=d(g);w=r(o,"DIV",{class:!0});var i=d(w);y=T(i,"Serial"),i.forEach(n),b=I(o),k=r(o,"INPUT",{type:!0,class:!0}),C=I(o),V=r(o,"DIV",{class:!0});var c=d(V);q=T(c,"Base Address"),c.forEach(n),A=I(o),R=r(o,"INPUT",{type:!0,class:!0}),o.forEach(n),N=I(l),H=r(l,"BR",{}),P=I(l),O=r(l,"BR",{}),G=I(l),U=r(l,"BUTTON",{type:!0,class:!0});var x=d(U);F=T(x,"Apply"),x.forEach(n),l.forEach(n),this.h()},h(){l(a,"class","svelte-111vfxd"),l(w,"class","svelte-111vfxd"),l(k,"type","number"),l(k,"class","svelte-111vfxd"),l(V,"class","svelte-111vfxd"),l(R,"type","number"),l(R,"class","svelte-111vfxd"),l(g,"class","inputs svelte-111vfxd"),l(U,"type","submit"),l(U,"class","svelte-111vfxd"),l(m,"class","svelte-111vfxd")},m(t,r){o(t,a,r),i(a,s),o(t,u,r),o(t,h,r),o(t,f,r),o(t,p,r),o(t,v,r),o(t,m,r),i(m,g),i(g,w),i(w,y),i(g,b),i(g,k),D(k,e[0]),i(g,C),i(g,V),i(V,q),i(g,A),i(g,R),D(R,e[1]),i(m,N),i(m,H),i(m,P),i(m,O),i(m,G),i(m,U),i(U,F),J||(W=[c(k,"input",e[4]),c(R,"input",e[5]),c(m,"submit",E(e[2]))],J=!0)},p(e,[a]){1&a&&$(k.value)!==e[0]&&D(k,e[0]),2&a&&$(R.value)!==e[1]&&D(R,e[1])},i:S,o:S,d(e){e&&n(a),e&&n(u),e&&n(h),e&&n(f),e&&n(p),e&&n(v),e&&n(m),J=!1,B(W)}}}function te(e,a,s){let t;k(e,j,(e=>s(6,t=e)));let r=t.serial,d=t.baseAddr,n=t.channelIndex,l=t.totalChannels,{closeModal:o}=a;return e.$$set=e=>{"closeModal"in e&&s(3,o=e.closeModal)},[r,d,async()=>{try{await ee.serial({addr:255,serial:r}),j.setSerial(r),await ee.baseSettings({addr:255,baseAddr:d,channelIndex:n,totalChannels:l}),j.setBaseAddr(d)}catch(e){console.log(e)}o()},o,function(){r=$(this.value),s(0,r)},function(){d=$(this.value),s(1,d)}]}class re extends e{constructor(e){super(),a(this,e,te,se,s,{closeModal:3})}}function de(e){let a,s;return a=new re({props:{closeModal:e[7]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,t){A(a,e,t),s=!0},p:S,i(e){s||(f(a.$$.fragment,e),s=!0)},o(e){p(a.$$.fragment,e),s=!1},d(e){N(a,e)}}}function ne(e){let a,s,t="general"==e[5]&&de(e);return{c(){t&&t.c(),a=v()},l(e){t&&t.l(e),a=v()},m(e,r){t&&t.m(e,r),o(e,a,r),s=!0},p(e,s){"general"==e[5]?t?(t.p(e,s),32&s&&f(t,1)):(t=de(e),t.c(),f(t,1),t.m(a.parentNode,a)):t&&(m(),p(t,1,1,(()=>{t=null})),g())},i(e){s||(f(t),s=!0)},o(e){p(t),s=!1},d(e){t&&t.d(e),e&&n(a)}}}function le(e){let a,s,u,h,v,m,g,w,y,b,D,E,$,S,B,k,H,P,O,G,F,J,W,j,z,K,L,Q,X,Y,Z,_,ee,ae,se,te,re,de,le,oe,ie,ce,ue,he,fe,pe,ve,me,ge,we,ye,be,xe,Me,Te,Ie,De,Ee,$e,Se,Be,ke,Ce,Ve=e[6].serial+"",qe=e[6].baseAddr+"";return s=new U({props:{showModal:e[4],$$slots:{default:[ne]},$$scope:{ctx:e}}}),s.$on("click",e[9]),{c(){a=M(),C(s.$$.fragment),u=M(),h=t("section"),v=t("h3"),m=x("General"),g=M(),w=t("br"),y=M(),b=t("div"),D=t("div"),E=x("Serial"),$=M(),S=t("div"),B=x(Ve),k=M(),H=t("div"),P=t("div"),O=x("Base Address"),G=M(),F=t("div"),J=x(qe),W=M(),j=t("br"),z=M(),K=t("br"),L=M(),Q=t("section"),X=t("h3"),Y=x("Board Details"),Z=M(),_=t("br"),ee=M(),ae=t("div"),se=t("div"),te=x("PCB Type"),re=M(),de=t("div"),le=x(e[0]),oe=M(),ie=t("div"),ce=t("div"),ue=x("Software Version"),he=M(),fe=t("div"),pe=x(e[1]),ve=M(),me=t("div"),ge=t("div"),we=x("Software Checksum"),ye=M(),be=t("div"),xe=x(e[2]),Me=M(),Te=t("div"),Ie=t("div"),De=x("Software Date"),Ee=M(),$e=t("div"),Se=x(e[3]),this.h()},l(t){V('[data-svelte="svelte-ghgayl"]',document.head).forEach(n),a=I(t),q(s.$$.fragment,t),u=I(t),h=r(t,"SECTION",{class:!0});var l=d(h);v=r(l,"H3",{class:!0});var o=d(v);m=T(o,"General"),o.forEach(n),g=I(l),w=r(l,"BR",{}),y=I(l),b=r(l,"DIV",{class:!0});var i=d(b);D=r(i,"DIV",{});var c=d(D);E=T(c,"Serial"),c.forEach(n),$=I(i),S=r(i,"DIV",{});var f=d(S);B=T(f,Ve),f.forEach(n),i.forEach(n),k=I(l),H=r(l,"DIV",{class:!0});var p=d(H);P=r(p,"DIV",{});var x=d(P);O=T(x,"Base Address"),x.forEach(n),G=I(p),F=r(p,"DIV",{});var M=d(F);J=T(M,qe),M.forEach(n),p.forEach(n),l.forEach(n),W=I(t),j=r(t,"BR",{}),z=I(t),K=r(t,"BR",{}),L=I(t),Q=r(t,"SECTION",{class:!0});var C=d(Q);X=r(C,"H3",{class:!0});var A=d(X);Y=T(A,"Board Details"),A.forEach(n),Z=I(C),_=r(C,"BR",{}),ee=I(C),ae=r(C,"DIV",{class:!0});var R=d(ae);se=r(R,"DIV",{});var N=d(se);te=T(N,"PCB Type"),N.forEach(n),re=I(R),de=r(R,"DIV",{});var U=d(de);le=T(U,e[0]),U.forEach(n),R.forEach(n),oe=I(C),ie=r(C,"DIV",{class:!0});var ne=d(ie);ce=r(ne,"DIV",{});var Be=d(ce);ue=T(Be,"Software Version"),Be.forEach(n),he=I(ne),fe=r(ne,"DIV",{});var ke=d(fe);pe=T(ke,e[1]),ke.forEach(n),ne.forEach(n),ve=I(C),me=r(C,"DIV",{class:!0});var Ce=d(me);ge=r(Ce,"DIV",{});var Ae=d(ge);we=T(Ae,"Software Checksum"),Ae.forEach(n),ye=I(Ce),be=r(Ce,"DIV",{});var Re=d(be);xe=T(Re,e[2]),Re.forEach(n),Ce.forEach(n),Me=I(C),Te=r(C,"DIV",{class:!0});var Ne=d(Te);Ie=r(Ne,"DIV",{});var He=d(Ie);De=T(He,"Software Date"),He.forEach(n),Ee=I(Ne),$e=r(Ne,"DIV",{});var Pe=d($e);Se=T(Pe,e[3]),Pe.forEach(n),Ne.forEach(n),C.forEach(n),this.h()},h(){document.title="Service Tool Prototype",l(v,"class","svelte-17w87q2"),l(b,"class","row svelte-17w87q2"),l(H,"class","row svelte-17w87q2"),l(h,"class","svelte-17w87q2"),l(X,"class","svelte-17w87q2"),l(ae,"class","row svelte-17w87q2"),l(ie,"class","row svelte-17w87q2"),l(me,"class","row svelte-17w87q2"),l(Te,"class","row svelte-17w87q2"),l(Q,"class","svelte-17w87q2")},m(t,r){o(t,a,r),A(s,t,r),o(t,u,r),o(t,h,r),i(h,v),i(v,m),i(h,g),i(h,w),i(h,y),i(h,b),i(b,D),i(D,E),i(b,$),i(b,S),i(S,B),i(h,k),i(h,H),i(H,P),i(P,O),i(H,G),i(H,F),i(F,J),o(t,W,r),o(t,j,r),o(t,z,r),o(t,K,r),o(t,L,r),o(t,Q,r),i(Q,X),i(X,Y),i(Q,Z),i(Q,_),i(Q,ee),i(Q,ae),i(ae,se),i(se,te),i(ae,re),i(ae,de),i(de,le),i(Q,oe),i(Q,ie),i(ie,ce),i(ce,ue),i(ie,he),i(ie,fe),i(fe,pe),i(Q,ve),i(Q,me),i(me,ge),i(ge,we),i(me,ye),i(me,be),i(be,xe),i(Q,Me),i(Q,Te),i(Te,Ie),i(Ie,De),i(Te,Ee),i(Te,$e),i($e,Se),Be=!0,ke||(Ce=c(h,"click",e[10]),ke=!0)},p(e,[a]){const t={};16&a&&(t.showModal=e[4]),2080&a&&(t.$$scope={dirty:a,ctx:e}),s.$set(t),(!Be||64&a)&&Ve!==(Ve=e[6].serial+"")&&R(B,Ve),(!Be||64&a)&&qe!==(qe=e[6].baseAddr+"")&&R(J,qe),(!Be||1&a)&&R(le,e[0]),(!Be||2&a)&&R(pe,e[1]),(!Be||4&a)&&R(xe,e[2]),(!Be||8&a)&&R(Se,e[3])},i(e){Be||(f(s.$$.fragment,e),Be=!0)},o(e){p(s.$$.fragment,e),Be=!1},d(e){e&&n(a),N(s,e),e&&n(u),e&&n(h),e&&n(W),e&&n(j),e&&n(z),e&&n(K),e&&n(L),e&&n(Q),ke=!1,Ce()}}}function oe(e,a,s){let t;k(e,j,(e=>s(6,t=e)));let r="",d="",n="",l="",o=!1,i="general";H((async()=>{await ae();let e=await Z.serial({addr:255});j.setSerial(e);let a=await Z.baseSettings({addr:255});j.setBaseAddr(a.baseAddr),j.setChannelIndex(a.channelIndex),j.setTotalChannels(a.totalChannels);let t=await Z.pcbType({addr:255});s(0,r=t.pcbType);let o=await _.program({addr:255});s(1,d=o.version),s(2,n=o.checksum);let i=await _.programDate({addr:255});s(3,l=i)}));let c=()=>{s(4,o=!1)},u=e=>{s(4,o=!0),s(5,i=e)};return[r,d,n,l,o,i,t,c,u,()=>{c()},()=>{u("general")}]}export default class extends e{constructor(e){super(),a(this,e,oe,le,s,{})}}
