import{S as e,i as a,s,e as t,c as r,a as d,d as n,b as l,f as o,g as c,l as i,h as u,u as h,t as f,j as v,k as p,m,n as g,o as w,p as x,w as b,q as y,r as M,v as T,x as I,y as D,z as E,A as $,B as S,C as B,D as k,E as C,F as V,G as q,H as A,I as R,J as N,K as H}from"./client.1241f45d.js";function O(e){let a,s,p,m,g;const x=e[2].default,b=w(x,e,e[1],null);return{c(){a=t("div"),s=t("div"),b&&b.c(),this.h()},l(e){a=r(e,"DIV",{class:!0});var t=d(a);s=r(t,"DIV",{class:!0});var l=d(s);b&&b.l(l),l.forEach(n),t.forEach(n),this.h()},h(){l(s,"class","modal svelte-y6bmyh"),l(a,"class","backdrop svelte-y6bmyh")},m(t,r){o(t,a,r),c(a,s),b&&b.m(s,null),p=!0,m||(g=i(a,"click",u(e[3])),m=!0)},p(e,a){b&&b.p&&2&a&&h(b,x,e,e[1],a,null,null)},i(e){p||(f(b,e),p=!0)},o(e){v(b,e),p=!1},d(e){e&&n(a),b&&b.d(e),m=!1,g()}}}function P(e){let a,s,t=e[0]&&O(e);return{c(){t&&t.c(),a=p()},l(e){t&&t.l(e),a=p()},m(e,r){t&&t.m(e,r),o(e,a,r),s=!0},p(e,[s]){e[0]?t?(t.p(e,s),1&s&&f(t,1)):(t=O(e),t.c(),f(t,1),t.m(a.parentNode,a)):t&&(m(),v(t,1,1,(()=>{t=null})),g())},i(e){s||(f(t),s=!0)},o(e){v(t),s=!1},d(e){t&&t.d(e),e&&n(a)}}}function G(e,a,s){let{$$slots:t={},$$scope:r}=a,{showModal:d=!1}=a;return e.$$set=e=>{"showModal"in e&&s(0,d=e.showModal),"$$scope"in e&&s(1,r=e.$$scope)},[d,r,t,function(a){x(e,a)}]}class U extends e{constructor(e){super(),a(this,e,G,P,s,{showModal:0})}}const{subscribe:F,set:J,update:j}=b({serial:"",baseAddr:"",channelIndex:"",totalChannels:"",randomFact:"Svelte can be easy"}),W={subscribe:F,set:J,update:j,setSerial:e=>j((a=>(a.serial=e,a))),setBaseAddr:e=>j((a=>(a.baseAddr=e,a))),setChannelIndex:e=>j((a=>(a.channelIndex=e,a))),setTotalChannels:e=>j((a=>(a.totalChannels=e,a)))},z=e=>{let a="Not Specified";if(!Number.isInteger(e))throw"type provided not valid integer";switch(e){case 1:a="T750 Hub";break;case 2:a="T750 Ann";break;case 3:a="T750 I/O";break;case 4:a="T750 Display";break;case 5:a="T750 Sampler";break;case 6:a="T650 Hub";break;case 7:a="T750B";break;case 8:a="T750B Display";break;case 9:a="T750BAV Display";break;case 10:a="T635 Display";break;case 11:a="T635+ Mini Hub (B1)";break;case 12:a="T635 Micro Mini Hub (B2)";break;case 13:a="T635 Mini Hub (B3)";break;case 14:a="T635 Mini Hub (B4)";break;case 15:a="ESP32 Dongle";break;case 16:a="T750+ Hub"}return a};function K(e,a){let s=0;return s|=a<<8,s|=e,s}var L;function Q(e){console.log("Connection closed"),setTimeout(Y,2e3)}function X(e){Z.onMsgArrived(e)}function Y(){return console.log("Trying to open a WebSocket connection..."),(L=new WebSocket("wss://igd-dev.tk/chat")).onclose=Q,L.onmessage=X,new Promise(((e,a)=>{L.onopen=a=>{e(a)}}))}const Z={queuedMsgs:[],sentMsgs:[],busy:!1,onMsgArrived:function(e){let a=0,s=JSON.parse(e.data);this.sentMsgs.forEach((function(e,t){e.id===s.id&&(e.success(s),a=e.id)})),this.sentMsgs=this.sentMsgs.filter((e=>e.id!==a)),0!=this.queuedMsgs.length&&this.sendNextMessage()},init:function(){setInterval((()=>{let e=Date.now();this.sentMsgs.forEach((function(a,s){a.timestamp-e>5e3&&a.fail("No response received, expired: ",a)})),this.sentMsgs=this.sentMsgs.filter((a=>a.timestamp-e<5e3))}),800)},queueMsg:function(e){return new Promise(((a,s)=>{this.queuedMsgs.push({id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var a=16*Math.random()|0;return("x"==e?a:3&a|8).toString(16)})),timestamp:-1,msg:e,success:e=>{a(e)},fail:e=>{s(e)}}),this.sendNextMsg()}))},sendNextMsg:function(){if(this.queuedMsgs.length&&!this.busy){this.busy=!0;let e=this.queuedMsgs.shift();L.send(JSON.stringify({id:e.id,maxTries:e.msg.maxTries,timeout:e.msg.timeout,addr:e.msg.addr,cmd:e.msg.cmd,d1:e.msg.d1,d2:e.msg.d2,d3:e.msg.d3,d4:e.msg.d4})),this.sentMsgs.push(e),this.busy=!1}}},_={serial:async function(e){let a=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:21,d1:7,d2:0,d3:0,d4:0});if(0!=a.twResCode)throw a;return function(e,a,s){let t,r=0;return r|=s<<16,t=a,t=t<<8&65280,r|=t,r|=255&e,r}(a.payload.d1,a.payload.d2,a.payload.d3)},baseSettings:async function(e){let a=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:21,d1:25,d2:0,d3:0,d4:0});if(0!=a.twResCode)throw a;return{baseAddr:a.payload.d1,channelIndex:a.payload.d2,totalChannels:a.payload.d3}},pcbType:async function(e){let a=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:21,d1:37,d2:0,d3:0,d4:0});if(0!=a.twResCode)throw a;return{pcbType:z(a.payload.d1),addr:a.payload.d2,cable:a.payload.d3}}},ee={program:async function(e){let a=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:20,d1:1,d2:0,d3:0,d4:0});if(0!=a.twResCode)throw a;return{version:K(a.payload.d1,a.payload.d2)/1e3,checksum:`0x${K(a.payload.d3,a.payload.d4).toString(16).toUpperCase()}`}},programDate:async function(e){let a=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:20,d1:4,d2:0,d3:0,d4:0});if(0!=a.twResCode)throw a;return new Date(a.payload.d3+2e3,a.payload.d2-1,a.payload.d1).toLocaleDateString()}},ae={serial:async function(e){let a=function(e){let a=new Uint8Array(3);return a[0]=255&e,a[1]=e>>8&255,a[2]=e>>16&255,a}(e.serial),s=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:121,d1:7,d2:a[0],d3:a[1],d4:a[2]});if(0!=s.twResCode)throw s},baseSettings:async function(e){let a=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:121,d1:25,d2:e.baseAddr,d3:e.channelIndex,d4:e.totalChannels});if(0!=a.twResCode)throw a}};function se(e){let a,s,u,h,f,v,p,m,g,w,x,b,k,C,V,q,A,R,N,H,O,P,G,U,F,J,j;return{c(){a=t("h3"),s=y("General"),u=M(),h=t("br"),f=M(),v=t("br"),p=M(),m=t("form"),g=t("div"),w=t("div"),x=y("Serial"),b=M(),k=t("input"),C=M(),V=t("div"),q=y("Base Address"),A=M(),R=t("input"),N=M(),H=t("br"),O=M(),P=t("br"),G=M(),U=t("button"),F=y("Apply"),this.h()},l(e){a=r(e,"H3",{class:!0});var t=d(a);s=T(t,"General"),t.forEach(n),u=I(e),h=r(e,"BR",{}),f=I(e),v=r(e,"BR",{}),p=I(e),m=r(e,"FORM",{class:!0});var l=d(m);g=r(l,"DIV",{class:!0});var o=d(g);w=r(o,"DIV",{class:!0});var c=d(w);x=T(c,"Serial"),c.forEach(n),b=I(o),k=r(o,"INPUT",{type:!0,class:!0}),C=I(o),V=r(o,"DIV",{class:!0});var i=d(V);q=T(i,"Base Address"),i.forEach(n),A=I(o),R=r(o,"INPUT",{type:!0,class:!0}),o.forEach(n),N=I(l),H=r(l,"BR",{}),O=I(l),P=r(l,"BR",{}),G=I(l),U=r(l,"BUTTON",{type:!0,class:!0});var y=d(U);F=T(y,"Apply"),y.forEach(n),l.forEach(n),this.h()},h(){l(a,"class","svelte-111vfxd"),l(w,"class","svelte-111vfxd"),l(k,"type","number"),l(k,"class","svelte-111vfxd"),l(V,"class","svelte-111vfxd"),l(R,"type","number"),l(R,"class","svelte-111vfxd"),l(g,"class","inputs svelte-111vfxd"),l(U,"type","submit"),l(U,"class","svelte-111vfxd"),l(m,"class","svelte-111vfxd")},m(t,r){o(t,a,r),c(a,s),o(t,u,r),o(t,h,r),o(t,f,r),o(t,v,r),o(t,p,r),o(t,m,r),c(m,g),c(g,w),c(w,x),c(g,b),c(g,k),D(k,e[0]),c(g,C),c(g,V),c(V,q),c(g,A),c(g,R),D(R,e[1]),c(m,N),c(m,H),c(m,O),c(m,P),c(m,G),c(m,U),c(U,F),J||(j=[i(k,"input",e[4]),i(R,"input",e[5]),i(m,"submit",E(e[2]))],J=!0)},p(e,[a]){1&a&&$(k.value)!==e[0]&&D(k,e[0]),2&a&&$(R.value)!==e[1]&&D(R,e[1])},i:S,o:S,d(e){e&&n(a),e&&n(u),e&&n(h),e&&n(f),e&&n(v),e&&n(p),e&&n(m),J=!1,B(j)}}}function te(e,a,s){let t;k(e,W,(e=>s(6,t=e)));let r=t.serial,d=t.baseAddr,n=t.channelIndex,l=t.totalChannels,{closeModal:o}=a;return e.$$set=e=>{"closeModal"in e&&s(3,o=e.closeModal)},[r,d,async()=>{try{await ae.serial({addr:255,serial:r}),W.setSerial(r),await ae.baseSettings({addr:255,baseAddr:d,channelIndex:n,totalChannels:l}),W.setBaseAddr(d)}catch(e){console.log(e)}o()},o,function(){r=$(this.value),s(0,r)},function(){d=$(this.value),s(1,d)}]}class re extends e{constructor(e){super(),a(this,e,te,se,s,{closeModal:3})}}function de(e){let a,s;return a=new re({props:{closeModal:e[7]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,t){A(a,e,t),s=!0},p:S,i(e){s||(f(a.$$.fragment,e),s=!0)},o(e){v(a.$$.fragment,e),s=!1},d(e){N(a,e)}}}function ne(e){let a,s,t="general"==e[5]&&de(e);return{c(){t&&t.c(),a=p()},l(e){t&&t.l(e),a=p()},m(e,r){t&&t.m(e,r),o(e,a,r),s=!0},p(e,s){"general"==e[5]?t?(t.p(e,s),32&s&&f(t,1)):(t=de(e),t.c(),f(t,1),t.m(a.parentNode,a)):t&&(m(),v(t,1,1,(()=>{t=null})),g())},i(e){s||(f(t),s=!0)},o(e){v(t),s=!1},d(e){t&&t.d(e),e&&n(a)}}}function le(e){let a,s,u,h,p,m,g,w,x,b,D,E,$,S,B,k,H,O,P,G,F,J,j,W,z,K,L,Q,X,Y,Z,_,ee,ae,se,te,re,de,le,oe,ce,ie,ue,he,fe,ve,pe,me,ge,we,xe,be,ye,Me,Te,Ie,De,Ee,$e,Se,Be,ke,Ce,Ve=e[6].serial+"",qe=e[6].baseAddr+"";return s=new U({props:{showModal:e[4],$$slots:{default:[ne]},$$scope:{ctx:e}}}),s.$on("click",e[9]),{c(){a=M(),C(s.$$.fragment),u=M(),h=t("section"),p=t("h3"),m=y("General"),g=M(),w=t("br"),x=M(),b=t("div"),D=t("div"),E=y("Serial"),$=M(),S=t("div"),B=y(Ve),k=M(),H=t("div"),O=t("div"),P=y("Base Address"),G=M(),F=t("div"),J=y(qe),j=M(),W=t("br"),z=M(),K=t("br"),L=M(),Q=t("section"),X=t("h3"),Y=y("Board Details"),Z=M(),_=t("br"),ee=M(),ae=t("div"),se=t("div"),te=y("PCB Type"),re=M(),de=t("div"),le=y(e[0]),oe=M(),ce=t("div"),ie=t("div"),ue=y("Software Version"),he=M(),fe=t("div"),ve=y(e[1]),pe=M(),me=t("div"),ge=t("div"),we=y("Software Checksum"),xe=M(),be=t("div"),ye=y(e[2]),Me=M(),Te=t("div"),Ie=t("div"),De=y("Software Date"),Ee=M(),$e=t("div"),Se=y(e[3]),this.h()},l(t){V('[data-svelte="svelte-ghgayl"]',document.head).forEach(n),a=I(t),q(s.$$.fragment,t),u=I(t),h=r(t,"SECTION",{class:!0});var l=d(h);p=r(l,"H3",{class:!0});var o=d(p);m=T(o,"General"),o.forEach(n),g=I(l),w=r(l,"BR",{}),x=I(l),b=r(l,"DIV",{class:!0});var c=d(b);D=r(c,"DIV",{});var i=d(D);E=T(i,"Serial"),i.forEach(n),$=I(c),S=r(c,"DIV",{});var f=d(S);B=T(f,Ve),f.forEach(n),c.forEach(n),k=I(l),H=r(l,"DIV",{class:!0});var v=d(H);O=r(v,"DIV",{});var y=d(O);P=T(y,"Base Address"),y.forEach(n),G=I(v),F=r(v,"DIV",{});var M=d(F);J=T(M,qe),M.forEach(n),v.forEach(n),l.forEach(n),j=I(t),W=r(t,"BR",{}),z=I(t),K=r(t,"BR",{}),L=I(t),Q=r(t,"SECTION",{class:!0});var C=d(Q);X=r(C,"H3",{class:!0});var A=d(X);Y=T(A,"Board Details"),A.forEach(n),Z=I(C),_=r(C,"BR",{}),ee=I(C),ae=r(C,"DIV",{class:!0});var R=d(ae);se=r(R,"DIV",{});var N=d(se);te=T(N,"PCB Type"),N.forEach(n),re=I(R),de=r(R,"DIV",{});var U=d(de);le=T(U,e[0]),U.forEach(n),R.forEach(n),oe=I(C),ce=r(C,"DIV",{class:!0});var ne=d(ce);ie=r(ne,"DIV",{});var Be=d(ie);ue=T(Be,"Software Version"),Be.forEach(n),he=I(ne),fe=r(ne,"DIV",{});var ke=d(fe);ve=T(ke,e[1]),ke.forEach(n),ne.forEach(n),pe=I(C),me=r(C,"DIV",{class:!0});var Ce=d(me);ge=r(Ce,"DIV",{});var Ae=d(ge);we=T(Ae,"Software Checksum"),Ae.forEach(n),xe=I(Ce),be=r(Ce,"DIV",{});var Re=d(be);ye=T(Re,e[2]),Re.forEach(n),Ce.forEach(n),Me=I(C),Te=r(C,"DIV",{class:!0});var Ne=d(Te);Ie=r(Ne,"DIV",{});var He=d(Ie);De=T(He,"Software Date"),He.forEach(n),Ee=I(Ne),$e=r(Ne,"DIV",{});var Oe=d($e);Se=T(Oe,e[3]),Oe.forEach(n),Ne.forEach(n),C.forEach(n),this.h()},h(){document.title="Service Tool Prototype",l(p,"class","svelte-17w87q2"),l(b,"class","row svelte-17w87q2"),l(H,"class","row svelte-17w87q2"),l(h,"class","svelte-17w87q2"),l(X,"class","svelte-17w87q2"),l(ae,"class","row svelte-17w87q2"),l(ce,"class","row svelte-17w87q2"),l(me,"class","row svelte-17w87q2"),l(Te,"class","row svelte-17w87q2"),l(Q,"class","svelte-17w87q2")},m(t,r){o(t,a,r),A(s,t,r),o(t,u,r),o(t,h,r),c(h,p),c(p,m),c(h,g),c(h,w),c(h,x),c(h,b),c(b,D),c(D,E),c(b,$),c(b,S),c(S,B),c(h,k),c(h,H),c(H,O),c(O,P),c(H,G),c(H,F),c(F,J),o(t,j,r),o(t,W,r),o(t,z,r),o(t,K,r),o(t,L,r),o(t,Q,r),c(Q,X),c(X,Y),c(Q,Z),c(Q,_),c(Q,ee),c(Q,ae),c(ae,se),c(se,te),c(ae,re),c(ae,de),c(de,le),c(Q,oe),c(Q,ce),c(ce,ie),c(ie,ue),c(ce,he),c(ce,fe),c(fe,ve),c(Q,pe),c(Q,me),c(me,ge),c(ge,we),c(me,xe),c(me,be),c(be,ye),c(Q,Me),c(Q,Te),c(Te,Ie),c(Ie,De),c(Te,Ee),c(Te,$e),c($e,Se),Be=!0,ke||(Ce=i(h,"click",e[10]),ke=!0)},p(e,[a]){const t={};16&a&&(t.showModal=e[4]),2080&a&&(t.$$scope={dirty:a,ctx:e}),s.$set(t),(!Be||64&a)&&Ve!==(Ve=e[6].serial+"")&&R(B,Ve),(!Be||64&a)&&qe!==(qe=e[6].baseAddr+"")&&R(J,qe),(!Be||1&a)&&R(le,e[0]),(!Be||2&a)&&R(ve,e[1]),(!Be||4&a)&&R(ye,e[2]),(!Be||8&a)&&R(Se,e[3])},i(e){Be||(f(s.$$.fragment,e),Be=!0)},o(e){v(s.$$.fragment,e),Be=!1},d(e){e&&n(a),N(s,e),e&&n(u),e&&n(h),e&&n(j),e&&n(W),e&&n(z),e&&n(K),e&&n(L),e&&n(Q),ke=!1,Ce()}}}function oe(e,a,s){let t;k(e,W,(e=>s(6,t=e)));let r="",d="",n="",l="",o=!1,c="general";H((async()=>{try{await async function(){await Y(),Z.init()}();let e=await _.serial({addr:255});W.setSerial(e);let a=await _.baseSettings({addr:255});W.setBaseAddr(a.baseAddr),W.setChannelIndex(a.channelIndex),W.setTotalChannels(a.totalChannels);let t=await _.pcbType({addr:255});s(0,r=t.pcbType);let o=await ee.program({addr:255});s(1,d=o.version),s(2,n=o.checksum);let c=await ee.programDate({addr:255});s(3,l=c)}catch(e){console.log("ERROR"),console.log(e)}}));let i=()=>{s(4,o=!1)},u=e=>{s(4,o=!0),s(5,c=e)};return[r,d,n,l,o,c,t,i,u,()=>{i()},()=>{u("general")}]}export default class extends e{constructor(e){super(),a(this,e,oe,le,s,{})}}
