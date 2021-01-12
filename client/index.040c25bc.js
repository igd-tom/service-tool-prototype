import{S as e,i as s,s as a,e as t,c as r,a as n,d,b as o,f as l,g as i,l as c,h as u,u as h,t as f,j as v,k as m,m as g,n as p,o as w,p as x,w as b,q as y,r as M,v as T,x as I,y as D,z as E,A as $,B as S,C,D as k,E as B,F as V,G as q,H as A,I as R,J as N,K as H}from"./client.84f278a9.js";function O(e){let s,a,m,g,p;const x=e[2].default,b=w(x,e,e[1],null);return{c(){s=t("div"),a=t("div"),b&&b.c(),this.h()},l(e){s=r(e,"DIV",{class:!0});var t=n(s);a=r(t,"DIV",{class:!0});var o=n(a);b&&b.l(o),o.forEach(d),t.forEach(d),this.h()},h(){o(a,"class","modal svelte-y6bmyh"),o(s,"class","backdrop svelte-y6bmyh")},m(t,r){l(t,s,r),i(s,a),b&&b.m(a,null),m=!0,g||(p=c(s,"click",u(e[3])),g=!0)},p(e,s){b&&b.p&&2&s&&h(b,x,e,e[1],s,null,null)},i(e){m||(f(b,e),m=!0)},o(e){v(b,e),m=!1},d(e){e&&d(s),b&&b.d(e),g=!1,p()}}}function P(e){let s,a,t=e[0]&&O(e);return{c(){t&&t.c(),s=m()},l(e){t&&t.l(e),s=m()},m(e,r){t&&t.m(e,r),l(e,s,r),a=!0},p(e,[a]){e[0]?t?(t.p(e,a),1&a&&f(t,1)):(t=O(e),t.c(),f(t,1),t.m(s.parentNode,s)):t&&(g(),v(t,1,1,(()=>{t=null})),p())},i(e){a||(f(t),a=!0)},o(e){v(t),a=!1},d(e){t&&t.d(e),e&&d(s)}}}function G(e,s,a){let{$$slots:t={},$$scope:r}=s,{showModal:n=!1}=s;return e.$$set=e=>{"showModal"in e&&a(0,n=e.showModal),"$$scope"in e&&a(1,r=e.$$scope)},[n,r,t,function(s){x(e,s)}]}class U extends e{constructor(e){super(),s(this,e,G,P,a,{showModal:0})}}const{subscribe:J,set:j,update:F}=b({serial:"",baseAddr:"",channelIndex:"",totalChannels:"",randomFact:"Svelte can be easy"}),W={subscribe:J,set:j,update:F,setSerial:e=>F((s=>(s.serial=e,s))),setBaseAddr:e=>F((s=>(s.baseAddr=e,s))),setChannelIndex:e=>F((s=>(s.channelIndex=e,s))),setTotalChannels:e=>F((s=>(s.totalChannels=e,s)))},z=e=>{let s="Not Specified";if(!Number.isInteger(e))throw"type provided not valid integer";switch(e){case 1:s="T750 Hub";break;case 2:s="T750 Ann";break;case 3:s="T750 I/O";break;case 4:s="T750 Display";break;case 5:s="T750 Sampler";break;case 6:s="T650 Hub";break;case 7:s="T750B";break;case 8:s="T750B Display";break;case 9:s="T750BAV Display";break;case 10:s="T635 Display";break;case 11:s="T635+ Mini Hub (B1)";break;case 12:s="T635 Micro Mini Hub (B2)";break;case 13:s="T635 Mini Hub (B3)";break;case 14:s="T635 Mini Hub (B4)";break;case 15:s="ESP32 Dongle";break;case 16:s="T750+ Hub"}return s};function K(e,s){let a=0;return a|=s<<8,a|=e,a}var L;function Q(e){console.log("Connection closed"),setTimeout(Y,2e3)}function X(e){Z.onMsgArrived(e)}function Y(){return console.log("Trying to open a WebSocket connection..."),(L=new WebSocket("wss://igd-dev.tk/chat")).onclose=Q,L.onmessage=X,new Promise(((e,s)=>{L.onopen=s=>{!function(e){console.log(e),console.log("Websocket opened success!!"),L.send(JSON.stringify({id:345345345,maxTries:2,timeout:100,addr:255,cmd:21,d1:7,d2:0,d3:0,d4:0}))}(s),e(s)}}))}const Z={queuedMsgs:[],sentMsgs:[],busy:!1,onMsgArrived:function(e){let s=0,a=JSON.parse(e.data);console.log("rxMsgData: ",a),this.sentMsgs.forEach((function(e,t){e.id===a.id&&0==a.wsResCode?(e.success(a.payload),s=e.id):e.id===a.id&&1==a.wsResCode&&(e.fail("Invalid ws response, invalid request sent"),s=e.id)})),this.sentMsgs=this.sentMsgs.filter((e=>e.id!==s)),0!=this.queuedMsgs.length&&this.sendNextMessage()},init:function(){setInterval((()=>{let e=Date.now();this.sentMsgs.forEach((function(s,a){s.timestamp-e>5e3&&s.fail("No response received, expired: ",s)})),this.sentMsgs=this.sentMsgs.filter((s=>s.timestamp-e<5e3))}),800)},queueMsg:function(e){return new Promise(((s,a)=>{this.queuedMsgs.push({id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var s=16*Math.random()|0;return("x"==e?s:3&s|8).toString(16)})),timestamp:-1,msg:e,success:e=>{console.log("resolved: ",e),s(e)},fail:e=>{console.log("rejected: ",e),a(e)}}),this.sendNextMsg()}))},sendNextMsg:function(){if(this.queuedMsgs.length&&!this.busy){this.busy=!0;let e=this.queuedMsgs.shift();L.send(JSON.stringify({id:e.id,maxTries:e.msg.maxTries,timeout:e.msg.timeout,addr:e.msg.addr,cmd:e.msg.cmd,d1:e.msg.d1,d2:e.msg.d2,d3:e.msg.d3,d4:e.msg.d4})),this.sentMsgs.push(e),this.busy=!1}}},_={serial:async function(e){let s=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:21,d1:7,d2:0,d3:0,d4:0});if(console.log("serial res: ",s),0!=s.twResCode)throw s;return function(e,s,a){let t,r=0;return r|=a<<16,t=s,t=t<<8&65280,r|=t,r|=255&e,r}(s.d1,s.d2,s.d3)},baseSettings:async function(e){let s=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:21,d1:25,d2:0,d3:0,d4:0});if(0!=s.twResCode)throw s;return{baseAddr:s.d1,channelIndex:s.d2,totalChannels:s.d3}},pcbType:async function(e){let s=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:21,d1:37,d2:0,d3:0,d4:0});if(0!=s.twResCode)throw s;return{pcbType:z(s.d1),addr:s.d2,cable:s.d3}}},ee={program:async function(e){let s=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:20,d1:1,d2:0,d3:0,d4:0});if(0!=s.twResCode)throw s;return{version:K(s.d1,s.d2)/1e3,checksum:`0x${K(s.d3,s.d4).toString(16).toUpperCase()}`}},programDate:async function(e){let s=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:20,d1:4,d2:0,d3:0,d4:0});if(0!=s.twResCode)throw s;return new Date(s.d3+2e3,s.d2-1,s.d1).toLocaleDateString()}},se={serial:async function(e){let s=function(e){let s=new Uint8Array(3);return s[0]=255&e,s[1]=e>>8&255,s[2]=e>>16&255,s}(e.serial),a=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:121,d1:7,d2:s[0],d3:s[1],d4:s[2]});if(0!=a.twResCode)throw a},baseSettings:async function(e){let s=await Z.queueMsg({maxTries:3,timeout:100,addr:e.addr,cmd:121,d1:25,d2:e.baseAddr,d3:e.channelIndex,d4:e.totalChannels});if(0!=s.twResCode)throw s}};function ae(e){let s,a,u,h,f,v,m,g,p,w,x,b,k,B,V,q,A,R,N,H,O,P,G,U,J,j,F;return{c(){s=t("h3"),a=y("General"),u=M(),h=t("br"),f=M(),v=t("br"),m=M(),g=t("form"),p=t("div"),w=t("div"),x=y("Serial"),b=M(),k=t("input"),B=M(),V=t("div"),q=y("Base Address"),A=M(),R=t("input"),N=M(),H=t("br"),O=M(),P=t("br"),G=M(),U=t("button"),J=y("Apply"),this.h()},l(e){s=r(e,"H3",{class:!0});var t=n(s);a=T(t,"General"),t.forEach(d),u=I(e),h=r(e,"BR",{}),f=I(e),v=r(e,"BR",{}),m=I(e),g=r(e,"FORM",{class:!0});var o=n(g);p=r(o,"DIV",{class:!0});var l=n(p);w=r(l,"DIV",{class:!0});var i=n(w);x=T(i,"Serial"),i.forEach(d),b=I(l),k=r(l,"INPUT",{type:!0,class:!0}),B=I(l),V=r(l,"DIV",{class:!0});var c=n(V);q=T(c,"Base Address"),c.forEach(d),A=I(l),R=r(l,"INPUT",{type:!0,class:!0}),l.forEach(d),N=I(o),H=r(o,"BR",{}),O=I(o),P=r(o,"BR",{}),G=I(o),U=r(o,"BUTTON",{type:!0,class:!0});var y=n(U);J=T(y,"Apply"),y.forEach(d),o.forEach(d),this.h()},h(){o(s,"class","svelte-111vfxd"),o(w,"class","svelte-111vfxd"),o(k,"type","number"),o(k,"class","svelte-111vfxd"),o(V,"class","svelte-111vfxd"),o(R,"type","number"),o(R,"class","svelte-111vfxd"),o(p,"class","inputs svelte-111vfxd"),o(U,"type","submit"),o(U,"class","svelte-111vfxd"),o(g,"class","svelte-111vfxd")},m(t,r){l(t,s,r),i(s,a),l(t,u,r),l(t,h,r),l(t,f,r),l(t,v,r),l(t,m,r),l(t,g,r),i(g,p),i(p,w),i(w,x),i(p,b),i(p,k),D(k,e[0]),i(p,B),i(p,V),i(V,q),i(p,A),i(p,R),D(R,e[1]),i(g,N),i(g,H),i(g,O),i(g,P),i(g,G),i(g,U),i(U,J),j||(F=[c(k,"input",e[4]),c(R,"input",e[5]),c(g,"submit",E(e[2]))],j=!0)},p(e,[s]){1&s&&$(k.value)!==e[0]&&D(k,e[0]),2&s&&$(R.value)!==e[1]&&D(R,e[1])},i:S,o:S,d(e){e&&d(s),e&&d(u),e&&d(h),e&&d(f),e&&d(v),e&&d(m),e&&d(g),j=!1,C(F)}}}function te(e,s,a){let t;k(e,W,(e=>a(6,t=e)));let r=t.serial,n=t.baseAddr,d=t.channelIndex,o=t.totalChannels,{closeModal:l}=s;return e.$$set=e=>{"closeModal"in e&&a(3,l=e.closeModal)},[r,n,async()=>{try{await se.serial({addr:255,serial:r}),W.setSerial(r),await se.baseSettings({addr:255,baseAddr:n,channelIndex:d,totalChannels:o}),W.setBaseAddr(n)}catch(e){console.log(e)}l()},l,function(){r=$(this.value),a(0,r)},function(){n=$(this.value),a(1,n)}]}class re extends e{constructor(e){super(),s(this,e,te,ae,a,{closeModal:3})}}function ne(e){let s,a;return s=new re({props:{closeModal:e[7]}}),{c(){B(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,t){A(s,e,t),a=!0},p:S,i(e){a||(f(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){N(s,e)}}}function de(e){let s,a,t="general"==e[5]&&ne(e);return{c(){t&&t.c(),s=m()},l(e){t&&t.l(e),s=m()},m(e,r){t&&t.m(e,r),l(e,s,r),a=!0},p(e,a){"general"==e[5]?t?(t.p(e,a),32&a&&f(t,1)):(t=ne(e),t.c(),f(t,1),t.m(s.parentNode,s)):t&&(g(),v(t,1,1,(()=>{t=null})),p())},i(e){a||(f(t),a=!0)},o(e){v(t),a=!1},d(e){t&&t.d(e),e&&d(s)}}}function oe(e){let s,a,u,h,m,g,p,w,x,b,D,E,$,S,C,k,H,O,P,G,J,j,F,W,z,K,L,Q,X,Y,Z,_,ee,se,ae,te,re,ne,oe,le,ie,ce,ue,he,fe,ve,me,ge,pe,we,xe,be,ye,Me,Te,Ie,De,Ee,$e,Se,Ce,ke,Be,Ve=e[6].serial+"",qe=e[6].baseAddr+"";return a=new U({props:{showModal:e[4],$$slots:{default:[de]},$$scope:{ctx:e}}}),a.$on("click",e[9]),{c(){s=M(),B(a.$$.fragment),u=M(),h=t("section"),m=t("h3"),g=y("General"),p=M(),w=t("br"),x=M(),b=t("div"),D=t("div"),E=y("Serial"),$=M(),S=t("div"),C=y(Ve),k=M(),H=t("div"),O=t("div"),P=y("Base Address"),G=M(),J=t("div"),j=y(qe),F=M(),W=t("br"),z=M(),K=t("br"),L=M(),Q=t("section"),X=t("h3"),Y=y("Board Details"),Z=M(),_=t("br"),ee=M(),se=t("div"),ae=t("div"),te=y("PCB Type"),re=M(),ne=t("div"),oe=y(e[0]),le=M(),ie=t("div"),ce=t("div"),ue=y("Software Version"),he=M(),fe=t("div"),ve=y(e[1]),me=M(),ge=t("div"),pe=t("div"),we=y("Software Checksum"),xe=M(),be=t("div"),ye=y(e[2]),Me=M(),Te=t("div"),Ie=t("div"),De=y("Software Date"),Ee=M(),$e=t("div"),Se=y(e[3]),this.h()},l(t){V('[data-svelte="svelte-ghgayl"]',document.head).forEach(d),s=I(t),q(a.$$.fragment,t),u=I(t),h=r(t,"SECTION",{class:!0});var o=n(h);m=r(o,"H3",{class:!0});var l=n(m);g=T(l,"General"),l.forEach(d),p=I(o),w=r(o,"BR",{}),x=I(o),b=r(o,"DIV",{class:!0});var i=n(b);D=r(i,"DIV",{});var c=n(D);E=T(c,"Serial"),c.forEach(d),$=I(i),S=r(i,"DIV",{});var f=n(S);C=T(f,Ve),f.forEach(d),i.forEach(d),k=I(o),H=r(o,"DIV",{class:!0});var v=n(H);O=r(v,"DIV",{});var y=n(O);P=T(y,"Base Address"),y.forEach(d),G=I(v),J=r(v,"DIV",{});var M=n(J);j=T(M,qe),M.forEach(d),v.forEach(d),o.forEach(d),F=I(t),W=r(t,"BR",{}),z=I(t),K=r(t,"BR",{}),L=I(t),Q=r(t,"SECTION",{class:!0});var B=n(Q);X=r(B,"H3",{class:!0});var A=n(X);Y=T(A,"Board Details"),A.forEach(d),Z=I(B),_=r(B,"BR",{}),ee=I(B),se=r(B,"DIV",{class:!0});var R=n(se);ae=r(R,"DIV",{});var N=n(ae);te=T(N,"PCB Type"),N.forEach(d),re=I(R),ne=r(R,"DIV",{});var U=n(ne);oe=T(U,e[0]),U.forEach(d),R.forEach(d),le=I(B),ie=r(B,"DIV",{class:!0});var de=n(ie);ce=r(de,"DIV",{});var Ce=n(ce);ue=T(Ce,"Software Version"),Ce.forEach(d),he=I(de),fe=r(de,"DIV",{});var ke=n(fe);ve=T(ke,e[1]),ke.forEach(d),de.forEach(d),me=I(B),ge=r(B,"DIV",{class:!0});var Be=n(ge);pe=r(Be,"DIV",{});var Ae=n(pe);we=T(Ae,"Software Checksum"),Ae.forEach(d),xe=I(Be),be=r(Be,"DIV",{});var Re=n(be);ye=T(Re,e[2]),Re.forEach(d),Be.forEach(d),Me=I(B),Te=r(B,"DIV",{class:!0});var Ne=n(Te);Ie=r(Ne,"DIV",{});var He=n(Ie);De=T(He,"Software Date"),He.forEach(d),Ee=I(Ne),$e=r(Ne,"DIV",{});var Oe=n($e);Se=T(Oe,e[3]),Oe.forEach(d),Ne.forEach(d),B.forEach(d),this.h()},h(){document.title="Service Tool Prototype",o(m,"class","svelte-17w87q2"),o(b,"class","row svelte-17w87q2"),o(H,"class","row svelte-17w87q2"),o(h,"class","svelte-17w87q2"),o(X,"class","svelte-17w87q2"),o(se,"class","row svelte-17w87q2"),o(ie,"class","row svelte-17w87q2"),o(ge,"class","row svelte-17w87q2"),o(Te,"class","row svelte-17w87q2"),o(Q,"class","svelte-17w87q2")},m(t,r){l(t,s,r),A(a,t,r),l(t,u,r),l(t,h,r),i(h,m),i(m,g),i(h,p),i(h,w),i(h,x),i(h,b),i(b,D),i(D,E),i(b,$),i(b,S),i(S,C),i(h,k),i(h,H),i(H,O),i(O,P),i(H,G),i(H,J),i(J,j),l(t,F,r),l(t,W,r),l(t,z,r),l(t,K,r),l(t,L,r),l(t,Q,r),i(Q,X),i(X,Y),i(Q,Z),i(Q,_),i(Q,ee),i(Q,se),i(se,ae),i(ae,te),i(se,re),i(se,ne),i(ne,oe),i(Q,le),i(Q,ie),i(ie,ce),i(ce,ue),i(ie,he),i(ie,fe),i(fe,ve),i(Q,me),i(Q,ge),i(ge,pe),i(pe,we),i(ge,xe),i(ge,be),i(be,ye),i(Q,Me),i(Q,Te),i(Te,Ie),i(Ie,De),i(Te,Ee),i(Te,$e),i($e,Se),Ce=!0,ke||(Be=c(h,"click",e[10]),ke=!0)},p(e,[s]){const t={};16&s&&(t.showModal=e[4]),2080&s&&(t.$$scope={dirty:s,ctx:e}),a.$set(t),(!Ce||64&s)&&Ve!==(Ve=e[6].serial+"")&&R(C,Ve),(!Ce||64&s)&&qe!==(qe=e[6].baseAddr+"")&&R(j,qe),(!Ce||1&s)&&R(oe,e[0]),(!Ce||2&s)&&R(ve,e[1]),(!Ce||4&s)&&R(ye,e[2]),(!Ce||8&s)&&R(Se,e[3])},i(e){Ce||(f(a.$$.fragment,e),Ce=!0)},o(e){v(a.$$.fragment,e),Ce=!1},d(e){e&&d(s),N(a,e),e&&d(u),e&&d(h),e&&d(F),e&&d(W),e&&d(z),e&&d(K),e&&d(L),e&&d(Q),ke=!1,Be()}}}function le(e,s,a){let t;k(e,W,(e=>a(6,t=e)));let r="",n="",d="",o="",l=!1,i="general";H((async()=>{try{await async function(){await Y(),Z.init()}();let e=await _.serial({addr:255});W.setSerial(e);let s=await _.baseSettings({addr:255});W.setBaseAddr(s.baseAddr),W.setChannelIndex(s.channelIndex),W.setTotalChannels(s.totalChannels);let t=await _.pcbType({addr:255});a(0,r=t.pcbType);let l=await ee.program({addr:255});a(1,n=l.version),a(2,d=l.checksum);let i=await ee.programDate({addr:255});a(3,o=i)}catch(e){console.log("ERROR",e)}}));let c=()=>{a(4,l=!1)},u=e=>{a(4,l=!0),a(5,i=e)};return[r,n,d,o,l,i,t,c,u,()=>{c()},()=>{u("general")}]}export default class extends e{constructor(e){super(),s(this,e,le,oe,a,{})}}
