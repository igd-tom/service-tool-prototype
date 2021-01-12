import{_ as e,a as t,b as n,c as r,i as s,s as a,d as c,S as o,e as i,f as u,g as d,h as f,j as l,k as v,l as p,m as h,n as m,u as x,t as g,o as b,p as w,q as y,r as k,v as M,w as D,x as T,y as I,z as E,A as R,B as S,C as $,D as C,E as B,F as V,G as q,H as A,I as N,J as P,K as H,L as O,M as G,N as U,O as j,P as J,Q as F}from"./client.d6bd1153.js";import{_ as W}from"./asyncToGenerator.5229e80b.js";function L(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=t(e);if(r){var c=t(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return n(this,s)}}function _(e){var t,n,r,s,a,c=e[2].default,o=D(c,e,e[1],null);return{c:function(){t=i("div"),n=i("div"),o&&o.c(),this.h()},l:function(e){t=u(e,"DIV",{class:!0});var r=d(t);n=u(r,"DIV",{class:!0});var s=d(n);o&&o.l(s),s.forEach(f),r.forEach(f),this.h()},h:function(){l(n,"class","modal svelte-y6bmyh"),l(t,"class","backdrop svelte-y6bmyh")},m:function(c,i){v(c,t,i),p(t,n),o&&o.m(n,null),r=!0,s||(a=h(t,"click",m(e[3])),s=!0)},p:function(e,t){o&&o.p&&2&t&&x(o,c,e,e[1],t,null,null)},i:function(e){r||(g(o,e),r=!0)},o:function(e){b(o,e),r=!1},d:function(e){e&&f(t),o&&o.d(e),s=!1,a()}}}function z(e){var t,n,r=e[0]&&_(e);return{c:function(){r&&r.c(),t=w()},l:function(e){r&&r.l(e),t=w()},m:function(e,s){r&&r.m(e,s),v(e,t,s),n=!0},p:function(e,n){var s=y(n,1)[0];e[0]?r?(r.p(e,s),1&s&&g(r,1)):((r=_(e)).c(),g(r,1),r.m(t.parentNode,t)):r&&(k(),b(r,1,1,(function(){r=null})),M())},i:function(e){n||(g(r),n=!0)},o:function(e){b(r),n=!1},d:function(e){r&&r.d(e),e&&f(t)}}}function K(e,t,n){var r=t.$$slots,s=void 0===r?{}:r,a=t.$$scope,c=t.showModal,o=void 0!==c&&c;return e.$$set=function(e){"showModal"in e&&n(0,o=e.showModal),"$$scope"in e&&n(1,a=e.$$scope)},[o,a,s,function(t){T(e,t)}]}var Q=function(t){e(i,o);var n=L(i);function i(e){var t;return r(this,i),t=n.call(this),s(c(t),e,K,z,a,{showModal:0}),t}return i}(),X=I({serial:"",baseAddr:"",channelIndex:"",totalChannels:"",randomFact:"Svelte can be easy"}),Y=X.subscribe,Z=X.set,ee=X.update,te={subscribe:Y,set:Z,update:ee,setSerial:function(e){return ee((function(t){return t.serial=e,t}))},setBaseAddr:function(e){return ee((function(t){return t.baseAddr=e,t}))},setChannelIndex:function(e){return ee((function(t){return t.channelIndex=e,t}))},setTotalChannels:function(e){return ee((function(t){return t.totalChannels=e,t}))}},ne=function(e){var t="Not Specified";if(!Number.isInteger(e))throw"type provided not valid integer";switch(e){case 1:t="T750 Hub";break;case 2:t="T750 Ann";break;case 3:t="T750 I/O";break;case 4:t="T750 Display";break;case 5:t="T750 Sampler";break;case 6:t="T650 Hub";break;case 7:t="T750B";break;case 8:t="T750B Display";break;case 9:t="T750BAV Display";break;case 10:t="T635 Display";break;case 11:t="T635+ Mini Hub (B1)";break;case 12:t="T635 Micro Mini Hub (B2)";break;case 13:t="T635 Mini Hub (B3)";break;case 14:t="T635 Mini Hub (B4)";break;case 15:t="ESP32 Dongle";break;case 16:t="T750+ Hub"}return t};function re(e,t){var n=0;return n|=t<<8,n|=e}function se(e){var t=new Uint8Array(3);return t[0]=255&e,t[1]=e>>8&255,t[2]=e>>16&255,t}var ae;function ce(e){console.log("Connection closed"),setTimeout(ie,2e3)}function oe(e){me.onMsgArrived(e)}function ie(){return console.log("Trying to open a WebSocket connection..."),(ae=new WebSocket("wss://igd-dev.tk/chat")).onclose=ce,ae.onmessage=oe,new Promise((function(e,t){ae.onopen=function(t){!function(e){console.log(e),console.log("Websocket opened success!!"),ae.send(JSON.stringify({id:345345345,maxTries:2,timeout:100,addr:255,cmd:21,d1:7,d2:0,d3:0,d4:0}))}(t),e(t)}}))}var ue,de,fe,le,ve,pe,he,me={queuedMsgs:[],sentMsgs:[],busy:!1,onMsgArrived:function(e){var t=0,n=JSON.parse(e.data);this.sentMsgs.forEach((function(e,r){e.id===n.id&&0==n.wsResCode?(e.success(n.payload),t=e.id):e.id===n.id&&1==n.wsResCode&&(e.fail("Invalid ws response, invalid request sent"),t=e.id)})),this.sentMsgs=this.sentMsgs.filter((function(e){return e.id!==t})),0!=this.queuedMsgs.length&&this.sendNextMessage()},init:function(){var e=this;setInterval((function(){var t=Date.now();e.sentMsgs.forEach((function(e,n){e.timestamp-t>5e3&&e.fail("No response received, expired: ",e)})),e.sentMsgs=e.sentMsgs.filter((function(e){return e.timestamp-t<5e3}))}),800)},queueMsg:function(e){var t=this;return new Promise((function(n,r){t.queuedMsgs.push({id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})),timestamp:-1,msg:e,success:function(e){console.log("resolved: ",e),n(e)},fail:function(e){console.log("rejected: ",e),r(e)}}),t.sendNextMsg()}))},sendNextMsg:function(){if(this.queuedMsgs.length&&!this.busy){this.busy=!0;var e=this.queuedMsgs.shift();ae.send(JSON.stringify({id:e.id,maxTries:e.msg.maxTries,timeout:e.msg.timeout,addr:e.msg.addr,cmd:e.msg.cmd,d1:e.msg.d1,d2:e.msg.d2,d3:e.msg.d3,d4:e.msg.d4})),this.sentMsgs.push(e),this.busy=!1}}},xe={settings:{serial:(ve=W(E.mark((function e(t){var n;return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:21,d1:7,d2:0,d3:0,d4:0});case 2:if(n=e.sent,console.log("serial res: ",n),0==n.twResCode){e.next=6;break}throw n;case 6:return e.abrupt("return",(r=n.d1,s=n.d2,a=n.d3,c=void 0,c=0,c|=a<<16,c|=s<<8&65280,c|=255&r));case 7:case"end":return e.stop()}var r,s,a,c}),e)}))),function(e){return ve.apply(this,arguments)}),baseSettings:(le=W(E.mark((function e(t){var n;return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:21,d1:25,d2:0,d3:0,d4:0});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return",{baseAddr:n.d1,channelIndex:n.d2,totalChannels:n.d3});case 6:case"end":return e.stop()}}),e)}))),function(e){return le.apply(this,arguments)}),pcbType:(fe=W(E.mark((function e(t){var n;return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:21,d1:37,d2:0,d3:0,d4:0});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return",{pcbType:ne(n.d1),addr:n.d2,cable:n.d3});case 6:case"end":return e.stop()}}),e)}))),function(e){return fe.apply(this,arguments)})},version:{program:(de=W(E.mark((function e(t){var n;return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:20,d1:1,d2:0,d3:0,d4:0});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return",{version:re(n.d1,n.d2)/1e3,checksum:"0x".concat(re(n.d3,n.d4).toString(16).toUpperCase())});case 6:case"end":return e.stop()}}),e)}))),function(e){return de.apply(this,arguments)}),programDate:(ue=W(E.mark((function e(t){var n;return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:20,d1:4,d2:0,d3:0,d4:0});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return",new Date(n.d3+2e3,n.d2-1,n.d1).toLocaleDateString());case 6:case"end":return e.stop()}}),e)}))),function(e){return ue.apply(this,arguments)})}},ge={settings:{serial:(he=W(E.mark((function e(t){var n,r;return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=se(t.serial),e.next=3,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:121,d1:7,d2:n[0],d3:n[1],d4:n[2]});case 3:if(0==(r=e.sent).twResCode){e.next=6;break}throw r;case 6:return e.abrupt("return");case 7:case"end":return e.stop()}}),e)}))),function(e){return he.apply(this,arguments)}),baseSettings:(pe=W(E.mark((function e(t){var n;return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:121,d1:25,d2:t.baseAddr,d3:t.channelIndex,d4:t.totalChannels});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)}))),function(e){return pe.apply(this,arguments)})}};function be(){return we.apply(this,arguments)}function we(){return(we=W(E.mark((function e(){return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:me.init();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=t(e);if(r){var c=t(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return n(this,s)}}function ke(e){var t,n,r,s,a,c,o,m,x,g,b,w,k,M,D,T,I,E,P,H,O,G,U,j,J,F,W;return{c:function(){t=i("h3"),n=R("General"),r=S(),s=i("br"),a=S(),c=i("br"),o=S(),m=i("form"),x=i("div"),g=i("div"),b=R("Serial"),w=S(),k=i("input"),M=S(),D=i("div"),T=R("Base Address"),I=S(),E=i("input"),P=S(),H=i("br"),O=S(),G=i("br"),U=S(),j=i("button"),J=R("Apply"),this.h()},l:function(e){t=u(e,"H3",{class:!0});var i=d(t);n=$(i,"General"),i.forEach(f),r=C(e),s=u(e,"BR",{}),a=C(e),c=u(e,"BR",{}),o=C(e),m=u(e,"FORM",{class:!0});var l=d(m);x=u(l,"DIV",{class:!0});var v=d(x);g=u(v,"DIV",{class:!0});var p=d(g);b=$(p,"Serial"),p.forEach(f),w=C(v),k=u(v,"INPUT",{type:!0,class:!0}),M=C(v),D=u(v,"DIV",{class:!0});var h=d(D);T=$(h,"Base Address"),h.forEach(f),I=C(v),E=u(v,"INPUT",{type:!0,class:!0}),v.forEach(f),P=C(l),H=u(l,"BR",{}),O=C(l),G=u(l,"BR",{}),U=C(l),j=u(l,"BUTTON",{type:!0,class:!0});var y=d(j);J=$(y,"Apply"),y.forEach(f),l.forEach(f),this.h()},h:function(){l(t,"class","svelte-111vfxd"),l(g,"class","svelte-111vfxd"),l(k,"type","number"),l(k,"class","svelte-111vfxd"),l(D,"class","svelte-111vfxd"),l(E,"type","number"),l(E,"class","svelte-111vfxd"),l(x,"class","inputs svelte-111vfxd"),l(j,"type","submit"),l(j,"class","svelte-111vfxd"),l(m,"class","svelte-111vfxd")},m:function(i,u){v(i,t,u),p(t,n),v(i,r,u),v(i,s,u),v(i,a,u),v(i,c,u),v(i,o,u),v(i,m,u),p(m,x),p(x,g),p(g,b),p(x,w),p(x,k),B(k,e[0]),p(x,M),p(x,D),p(D,T),p(x,I),p(x,E),B(E,e[1]),p(m,P),p(m,H),p(m,O),p(m,G),p(m,U),p(m,j),p(j,J),F||(W=[h(k,"input",e[4]),h(E,"input",e[5]),h(m,"submit",V(e[2]))],F=!0)},p:function(e,t){var n=y(t,1)[0];1&n&&q(k.value)!==e[0]&&B(k,e[0]),2&n&&q(E.value)!==e[1]&&B(E,e[1])},i:A,o:A,d:function(e){e&&f(t),e&&f(r),e&&f(s),e&&f(a),e&&f(c),e&&f(o),e&&f(m),F=!1,N(W)}}}function Me(e,t,n){var r;P(e,te,(function(e){return n(6,r=e)}));var s=r.serial,a=r.baseAddr,c=r.channelIndex,o=r.totalChannels,i=t.closeModal,u=function(){var e=W(E.mark((function e(){return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge.settings.serial({addr:255,serial:s});case 3:return te.setSerial(s),e.next=6,ge.settings.baseSettings({addr:255,baseAddr:a,channelIndex:c,totalChannels:o});case 6:te.setBaseAddr(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:i();case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return e.$$set=function(e){"closeModal"in e&&n(3,i=e.closeModal)},[s,a,u,i,function(){s=q(this.value),n(0,s)},function(){a=q(this.value),n(1,a)}]}var De=function(t){e(i,o);var n=ye(i);function i(e){var t;return r(this,i),t=n.call(this),s(c(t),e,Me,ke,a,{closeModal:3}),t}return i}();function Te(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=t(e);if(r){var c=t(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return n(this,s)}}function Ie(e){var t,n;return t=new De({props:{closeModal:e[7]}}),{c:function(){H(t.$$.fragment)},l:function(e){G(t.$$.fragment,e)},m:function(e,r){U(t,e,r),n=!0},p:A,i:function(e){n||(g(t.$$.fragment,e),n=!0)},o:function(e){b(t.$$.fragment,e),n=!1},d:function(e){J(t,e)}}}function Ee(e){var t,n,r="general"==e[5]&&Ie(e);return{c:function(){r&&r.c(),t=w()},l:function(e){r&&r.l(e),t=w()},m:function(e,s){r&&r.m(e,s),v(e,t,s),n=!0},p:function(e,n){"general"==e[5]?r?(r.p(e,n),32&n&&g(r,1)):((r=Ie(e)).c(),g(r,1),r.m(t.parentNode,t)):r&&(k(),b(r,1,1,(function(){r=null})),M())},i:function(e){n||(g(r),n=!0)},o:function(e){b(r),n=!1},d:function(e){r&&r.d(e),e&&f(t)}}}function Re(e){var t,n,r,s,a,c,o,m,x,w,k,M,D,T,I,E,B,V,q,A,N,P,F,W,L,_,z,K,X,Y,Z,ee,te,ne,re,se,ae,ce,oe,ie,ue,de,fe,le,ve,pe,he,me,xe,ge,be,we,ye,ke,Me,De,Te,Ie,Re,Se,$e,Ce,Be,Ve=e[6].serial+"",qe=e[6].baseAddr+"";return(n=new Q({props:{showModal:e[4],$$slots:{default:[Ee]},$$scope:{ctx:e}}})).$on("click",e[9]),{c:function(){t=S(),H(n.$$.fragment),r=S(),s=i("section"),a=i("h3"),c=R("General"),o=S(),m=i("br"),x=S(),w=i("div"),k=i("div"),M=R("Serial"),D=S(),T=i("div"),I=R(Ve),E=S(),B=i("div"),V=i("div"),q=R("Base Address"),A=S(),N=i("div"),P=R(qe),F=S(),W=i("br"),L=S(),_=i("br"),z=S(),K=i("section"),X=i("h3"),Y=R("Board Details"),Z=S(),ee=i("br"),te=S(),ne=i("div"),re=i("div"),se=R("PCB Type"),ae=S(),ce=i("div"),oe=R(e[0]),ie=S(),ue=i("div"),de=i("div"),fe=R("Software Version"),le=S(),ve=i("div"),pe=R(e[1]),he=S(),me=i("div"),xe=i("div"),ge=R("Software Checksum"),be=S(),we=i("div"),ye=R(e[2]),ke=S(),Me=i("div"),De=i("div"),Te=R("Software Date"),Ie=S(),Re=i("div"),Se=R(e[3]),this.h()},l:function(i){O('[data-svelte="svelte-ghgayl"]',document.head).forEach(f),t=C(i),G(n.$$.fragment,i),r=C(i),s=u(i,"SECTION",{class:!0});var l=d(s);a=u(l,"H3",{class:!0});var v=d(a);c=$(v,"General"),v.forEach(f),o=C(l),m=u(l,"BR",{}),x=C(l),w=u(l,"DIV",{class:!0});var p=d(w);k=u(p,"DIV",{});var h=d(k);M=$(h,"Serial"),h.forEach(f),D=C(p),T=u(p,"DIV",{});var g=d(T);I=$(g,Ve),g.forEach(f),p.forEach(f),E=C(l),B=u(l,"DIV",{class:!0});var b=d(B);V=u(b,"DIV",{});var y=d(V);q=$(y,"Base Address"),y.forEach(f),A=C(b),N=u(b,"DIV",{});var R=d(N);P=$(R,qe),R.forEach(f),b.forEach(f),l.forEach(f),F=C(i),W=u(i,"BR",{}),L=C(i),_=u(i,"BR",{}),z=C(i),K=u(i,"SECTION",{class:!0});var S=d(K);X=u(S,"H3",{class:!0});var H=d(X);Y=$(H,"Board Details"),H.forEach(f),Z=C(S),ee=u(S,"BR",{}),te=C(S),ne=u(S,"DIV",{class:!0});var U=d(ne);re=u(U,"DIV",{});var j=d(re);se=$(j,"PCB Type"),j.forEach(f),ae=C(U),ce=u(U,"DIV",{});var J=d(ce);oe=$(J,e[0]),J.forEach(f),U.forEach(f),ie=C(S),ue=u(S,"DIV",{class:!0});var Q=d(ue);de=u(Q,"DIV",{});var Ee=d(de);fe=$(Ee,"Software Version"),Ee.forEach(f),le=C(Q),ve=u(Q,"DIV",{});var $e=d(ve);pe=$($e,e[1]),$e.forEach(f),Q.forEach(f),he=C(S),me=u(S,"DIV",{class:!0});var Ce=d(me);xe=u(Ce,"DIV",{});var Be=d(xe);ge=$(Be,"Software Checksum"),Be.forEach(f),be=C(Ce),we=u(Ce,"DIV",{});var Ae=d(we);ye=$(Ae,e[2]),Ae.forEach(f),Ce.forEach(f),ke=C(S),Me=u(S,"DIV",{class:!0});var Ne=d(Me);De=u(Ne,"DIV",{});var Pe=d(De);Te=$(Pe,"Software Date"),Pe.forEach(f),Ie=C(Ne),Re=u(Ne,"DIV",{});var He=d(Re);Se=$(He,e[3]),He.forEach(f),Ne.forEach(f),S.forEach(f),this.h()},h:function(){document.title="Service Tool Prototype",l(a,"class","svelte-17w87q2"),l(w,"class","row svelte-17w87q2"),l(B,"class","row svelte-17w87q2"),l(s,"class","svelte-17w87q2"),l(X,"class","svelte-17w87q2"),l(ne,"class","row svelte-17w87q2"),l(ue,"class","row svelte-17w87q2"),l(me,"class","row svelte-17w87q2"),l(Me,"class","row svelte-17w87q2"),l(K,"class","svelte-17w87q2")},m:function(i,u){v(i,t,u),U(n,i,u),v(i,r,u),v(i,s,u),p(s,a),p(a,c),p(s,o),p(s,m),p(s,x),p(s,w),p(w,k),p(k,M),p(w,D),p(w,T),p(T,I),p(s,E),p(s,B),p(B,V),p(V,q),p(B,A),p(B,N),p(N,P),v(i,F,u),v(i,W,u),v(i,L,u),v(i,_,u),v(i,z,u),v(i,K,u),p(K,X),p(X,Y),p(K,Z),p(K,ee),p(K,te),p(K,ne),p(ne,re),p(re,se),p(ne,ae),p(ne,ce),p(ce,oe),p(K,ie),p(K,ue),p(ue,de),p(de,fe),p(ue,le),p(ue,ve),p(ve,pe),p(K,he),p(K,me),p(me,xe),p(xe,ge),p(me,be),p(me,we),p(we,ye),p(K,ke),p(K,Me),p(Me,De),p(De,Te),p(Me,Ie),p(Me,Re),p(Re,Se),$e=!0,Ce||(Be=h(s,"click",e[10]),Ce=!0)},p:function(e,t){var r=y(t,1)[0],s={};16&r&&(s.showModal=e[4]),2080&r&&(s.$$scope={dirty:r,ctx:e}),n.$set(s),(!$e||64&r)&&Ve!==(Ve=e[6].serial+"")&&j(I,Ve),(!$e||64&r)&&qe!==(qe=e[6].baseAddr+"")&&j(P,qe),(!$e||1&r)&&j(oe,e[0]),(!$e||2&r)&&j(pe,e[1]),(!$e||4&r)&&j(ye,e[2]),(!$e||8&r)&&j(Se,e[3])},i:function(e){$e||(g(n.$$.fragment,e),$e=!0)},o:function(e){b(n.$$.fragment,e),$e=!1},d:function(e){e&&f(t),J(n,e),e&&f(r),e&&f(s),e&&f(F),e&&f(W),e&&f(L),e&&f(_),e&&f(z),e&&f(K),Ce=!1,Be()}}}function Se(e,t,n){var r;P(e,te,(function(e){return n(6,r=e)}));var s="",a="",c="",o="",i=!1,u="general";F(W(E.mark((function e(){var t,r,i,u,d;return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,be();case 3:return e.next=5,xe.settings.serial({addr:255});case 5:return t=e.sent,te.setSerial(t),e.next=9,xe.settings.baseSettings({addr:255});case 9:return r=e.sent,te.setBaseAddr(r.baseAddr),te.setChannelIndex(r.channelIndex),te.setTotalChannels(r.totalChannels),e.next=15,xe.settings.pcbType({addr:255});case 15:return i=e.sent,n(0,s=i.pcbType),e.next=19,xe.version.program({addr:255});case 19:return u=e.sent,n(1,a=u.version),n(2,c=u.checksum),e.next=24,xe.version.programDate({addr:255});case 24:d=e.sent,n(3,o=d),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(0),console.log("ERROR",e.t0);case 31:case"end":return e.stop()}}),e,null,[[0,28]])}))));var d=function(){n(4,i=!1)},f=function(e){n(4,i=!0),n(5,u=e)};return[s,a,c,o,i,u,r,d,f,function(){d()},function(){f("general")}]}var $e=function(t){e(i,o);var n=Te(i);function i(e){var t;return r(this,i),t=n.call(this),s(c(t),e,Se,Re,a,{}),t}return i}();export default $e;