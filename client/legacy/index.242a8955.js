import{_ as e,a as t,b as n,c as r,i as a,s,d as c,S as o,e as i,f as u,g as d,h as f,j as l,k as v,l as p,m as h,n as m,u as x,t as g,o as b,p as y,q as w,r as k,v as M,w as D,x as T,y as E,z as I,A as $,B as R,C as S,D as B,E as V,F as q,G as C,H as A,I as N,J as P,K as H,L as O,M as G,N as U,O as j,P as F,Q as J}from"./client.e29ee608.js";import{_ as L}from"./asyncToGenerator.5229e80b.js";function W(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=t(e);if(r){var c=t(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return n(this,a)}}function _(e){var t,n,r,a,s,c=e[2].default,o=D(c,e,e[1],null);return{c:function(){t=i("div"),n=i("div"),o&&o.c(),this.h()},l:function(e){t=u(e,"DIV",{class:!0});var r=d(t);n=u(r,"DIV",{class:!0});var a=d(n);o&&o.l(a),a.forEach(f),r.forEach(f),this.h()},h:function(){l(n,"class","modal svelte-y6bmyh"),l(t,"class","backdrop svelte-y6bmyh")},m:function(c,i){v(c,t,i),p(t,n),o&&o.m(n,null),r=!0,a||(s=h(t,"click",m(e[3])),a=!0)},p:function(e,t){o&&o.p&&2&t&&x(o,c,e,e[1],t,null,null)},i:function(e){r||(g(o,e),r=!0)},o:function(e){b(o,e),r=!1},d:function(e){e&&f(t),o&&o.d(e),a=!1,s()}}}function z(e){var t,n,r=e[0]&&_(e);return{c:function(){r&&r.c(),t=y()},l:function(e){r&&r.l(e),t=y()},m:function(e,a){r&&r.m(e,a),v(e,t,a),n=!0},p:function(e,n){var a=w(n,1)[0];e[0]?r?(r.p(e,a),1&a&&g(r,1)):((r=_(e)).c(),g(r,1),r.m(t.parentNode,t)):r&&(k(),b(r,1,1,(function(){r=null})),M())},i:function(e){n||(g(r),n=!0)},o:function(e){b(r),n=!1},d:function(e){r&&r.d(e),e&&f(t)}}}function K(e,t,n){var r=t.$$slots,a=void 0===r?{}:r,s=t.$$scope,c=t.showModal,o=void 0!==c&&c;return e.$$set=function(e){"showModal"in e&&n(0,o=e.showModal),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,a,function(t){T(e,t)}]}var Q=function(t){e(i,o);var n=W(i);function i(e){var t;return r(this,i),t=n.call(this),a(c(t),e,K,z,s,{showModal:0}),t}return i}(),X=E({serial:"",baseAddr:"",channelIndex:"",totalChannels:"",randomFact:"Svelte can be easy"}),Y=X.subscribe,Z=X.set,ee=X.update,te={subscribe:Y,set:Z,update:ee,setSerial:function(e){return ee((function(t){return t.serial=e,t}))},setBaseAddr:function(e){return ee((function(t){return t.baseAddr=e,t}))},setChannelIndex:function(e){return ee((function(t){return t.channelIndex=e,t}))},setTotalChannels:function(e){return ee((function(t){return t.totalChannels=e,t}))}},ne=function(e){var t="Not Specified";if(!Number.isInteger(e))throw"type provided not valid integer";switch(e){case 1:t="T750 Hub";break;case 2:t="T750 Ann";break;case 3:t="T750 I/O";break;case 4:t="T750 Display";break;case 5:t="T750 Sampler";break;case 6:t="T650 Hub";break;case 7:t="T750B";break;case 8:t="T750B Display";break;case 9:t="T750BAV Display";break;case 10:t="T635 Display";break;case 11:t="T635+ Mini Hub (B1)";break;case 12:t="T635 Micro Mini Hub (B2)";break;case 13:t="T635 Mini Hub (B3)";break;case 14:t="T635 Mini Hub (B4)";break;case 15:t="ESP32 Dongle";break;case 16:t="T750+ Hub"}return t};function re(e,t){var n=0;return n|=t<<8,n|=e}function ae(e){var t=new Uint8Array(3);return t[0]=255&e,t[1]=e>>8&255,t[2]=e>>16&255,t}var se;function ce(e){console.log("Connection closed"),setTimeout(ie,2e3)}function oe(e){me.onMsgArrived(e)}function ie(){return console.log("Trying to open a WebSocket connection..."),(se=new WebSocket("wss://igd-dev.tk/chat")).onclose=ce,se.onmessage=oe,new Promise((function(e,t){se.onopen=function(t){e(t)}}))}var ue,de,fe,le,ve,pe,he,me={queuedMsgs:[],sentMsgs:[],busy:!1,onMsgArrived:function(e){var t=0,n=JSON.parse(e.data);this.sentMsgs.forEach((function(e,r){e.id===n.id&&(e.success(n),t=e.id)})),this.sentMsgs=this.sentMsgs.filter((function(e){return e.id!==t})),0!=this.queuedMsgs.length&&this.sendNextMessage()},init:function(){var e=this;setInterval((function(){var t=Date.now();e.sentMsgs.forEach((function(e,n){e.timestamp-t>5e3&&e.fail("No response received, expired: ",e)})),e.sentMsgs=e.sentMsgs.filter((function(e){return e.timestamp-t<5e3}))}),800)},queueMsg:function(e){var t=this;return new Promise((function(n,r){t.queuedMsgs.push({id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})),timestamp:-1,msg:e,success:function(e){n(e)},fail:function(e){r(e)}}),t.sendNextMsg()}))},sendNextMsg:function(){if(this.queuedMsgs.length&&!this.busy){this.busy=!0;var e=this.queuedMsgs.shift();se.send(JSON.stringify({id:e.id,maxTries:e.msg.maxTries,timeout:e.msg.timeout,addr:e.msg.addr,cmd:e.msg.cmd,d1:e.msg.d1,d2:e.msg.d2,d3:e.msg.d3,d4:e.msg.d4})),this.sentMsgs.push(e),this.busy=!1}}},xe={settings:{serial:(ve=L(I.mark((function e(t){var n;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:21,d1:7,d2:0,d3:0,d4:0});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return",(r=n.payload.d1,a=n.payload.d2,s=n.payload.d3,c=void 0,c=0,c|=s<<16,c|=a<<8&65280,c|=255&r));case 6:case"end":return e.stop()}var r,a,s,c}),e)}))),function(e){return ve.apply(this,arguments)}),baseSettings:(le=L(I.mark((function e(t){var n;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:21,d1:25,d2:0,d3:0,d4:0});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return",{baseAddr:n.payload.d1,channelIndex:n.payload.d2,totalChannels:n.payload.d3});case 6:case"end":return e.stop()}}),e)}))),function(e){return le.apply(this,arguments)}),pcbType:(fe=L(I.mark((function e(t){var n;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:21,d1:37,d2:0,d3:0,d4:0});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return",{pcbType:ne(n.payload.d1),addr:n.payload.d2,cable:n.payload.d3});case 6:case"end":return e.stop()}}),e)}))),function(e){return fe.apply(this,arguments)})},version:{program:(de=L(I.mark((function e(t){var n;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:20,d1:1,d2:0,d3:0,d4:0});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return",{version:re(n.payload.d1,n.payload.d2)/1e3,checksum:"0x".concat(re(n.payload.d3,n.payload.d4).toString(16).toUpperCase())});case 6:case"end":return e.stop()}}),e)}))),function(e){return de.apply(this,arguments)}),programDate:(ue=L(I.mark((function e(t){var n;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:20,d1:4,d2:0,d3:0,d4:0});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return",new Date(n.payload.d3+2e3,n.payload.d2-1,n.payload.d1).toLocaleDateString());case 6:case"end":return e.stop()}}),e)}))),function(e){return ue.apply(this,arguments)})}},ge={settings:{serial:(he=L(I.mark((function e(t){var n,r;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ae(t.serial),e.next=3,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:121,d1:7,d2:n[0],d3:n[1],d4:n[2]});case 3:if(0==(r=e.sent).twResCode){e.next=6;break}throw r;case 6:return e.abrupt("return");case 7:case"end":return e.stop()}}),e)}))),function(e){return he.apply(this,arguments)}),baseSettings:(pe=L(I.mark((function e(t){var n;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.queueMsg({maxTries:3,timeout:100,addr:t.addr,cmd:121,d1:25,d2:t.baseAddr,d3:t.channelIndex,d4:t.totalChannels});case 2:if(0==(n=e.sent).twResCode){e.next=5;break}throw n;case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)}))),function(e){return pe.apply(this,arguments)})}};function be(){return ye.apply(this,arguments)}function ye(){return(ye=L(I.mark((function e(){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:me.init();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=t(e);if(r){var c=t(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return n(this,a)}}function ke(e){var t,n,r,a,s,c,o,m,x,g,b,y,k,M,D,T,E,I,P,H,O,G,U,j,F,J,L;return{c:function(){t=i("h3"),n=$("General"),r=R(),a=i("br"),s=R(),c=i("br"),o=R(),m=i("form"),x=i("div"),g=i("div"),b=$("Serial"),y=R(),k=i("input"),M=R(),D=i("div"),T=$("Base Address"),E=R(),I=i("input"),P=R(),H=i("br"),O=R(),G=i("br"),U=R(),j=i("button"),F=$("Apply"),this.h()},l:function(e){t=u(e,"H3",{class:!0});var i=d(t);n=S(i,"General"),i.forEach(f),r=B(e),a=u(e,"BR",{}),s=B(e),c=u(e,"BR",{}),o=B(e),m=u(e,"FORM",{class:!0});var l=d(m);x=u(l,"DIV",{class:!0});var v=d(x);g=u(v,"DIV",{class:!0});var p=d(g);b=S(p,"Serial"),p.forEach(f),y=B(v),k=u(v,"INPUT",{type:!0,class:!0}),M=B(v),D=u(v,"DIV",{class:!0});var h=d(D);T=S(h,"Base Address"),h.forEach(f),E=B(v),I=u(v,"INPUT",{type:!0,class:!0}),v.forEach(f),P=B(l),H=u(l,"BR",{}),O=B(l),G=u(l,"BR",{}),U=B(l),j=u(l,"BUTTON",{type:!0,class:!0});var w=d(j);F=S(w,"Apply"),w.forEach(f),l.forEach(f),this.h()},h:function(){l(t,"class","svelte-111vfxd"),l(g,"class","svelte-111vfxd"),l(k,"type","number"),l(k,"class","svelte-111vfxd"),l(D,"class","svelte-111vfxd"),l(I,"type","number"),l(I,"class","svelte-111vfxd"),l(x,"class","inputs svelte-111vfxd"),l(j,"type","submit"),l(j,"class","svelte-111vfxd"),l(m,"class","svelte-111vfxd")},m:function(i,u){v(i,t,u),p(t,n),v(i,r,u),v(i,a,u),v(i,s,u),v(i,c,u),v(i,o,u),v(i,m,u),p(m,x),p(x,g),p(g,b),p(x,y),p(x,k),V(k,e[0]),p(x,M),p(x,D),p(D,T),p(x,E),p(x,I),V(I,e[1]),p(m,P),p(m,H),p(m,O),p(m,G),p(m,U),p(m,j),p(j,F),J||(L=[h(k,"input",e[4]),h(I,"input",e[5]),h(m,"submit",q(e[2]))],J=!0)},p:function(e,t){var n=w(t,1)[0];1&n&&C(k.value)!==e[0]&&V(k,e[0]),2&n&&C(I.value)!==e[1]&&V(I,e[1])},i:A,o:A,d:function(e){e&&f(t),e&&f(r),e&&f(a),e&&f(s),e&&f(c),e&&f(o),e&&f(m),J=!1,N(L)}}}function Me(e,t,n){var r;P(e,te,(function(e){return n(6,r=e)}));var a=r.serial,s=r.baseAddr,c=r.channelIndex,o=r.totalChannels,i=t.closeModal,u=function(){var e=L(I.mark((function e(){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge.settings.serial({addr:255,serial:a});case 3:return te.setSerial(a),e.next=6,ge.settings.baseSettings({addr:255,baseAddr:s,channelIndex:c,totalChannels:o});case 6:te.setBaseAddr(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:i();case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return e.$$set=function(e){"closeModal"in e&&n(3,i=e.closeModal)},[a,s,u,i,function(){a=C(this.value),n(0,a)},function(){s=C(this.value),n(1,s)}]}var De=function(t){e(i,o);var n=we(i);function i(e){var t;return r(this,i),t=n.call(this),a(c(t),e,Me,ke,s,{closeModal:3}),t}return i}();function Te(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=t(e);if(r){var c=t(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return n(this,a)}}function Ee(e){var t,n;return t=new De({props:{closeModal:e[4]}}),{c:function(){H(t.$$.fragment)},l:function(e){G(t.$$.fragment,e)},m:function(e,r){U(t,e,r),n=!0},p:A,i:function(e){n||(g(t.$$.fragment,e),n=!0)},o:function(e){b(t.$$.fragment,e),n=!1},d:function(e){F(t,e)}}}function Ie(e){var t,n,r="general"==e[1]&&Ee(e);return{c:function(){r&&r.c(),t=y()},l:function(e){r&&r.l(e),t=y()},m:function(e,a){r&&r.m(e,a),v(e,t,a),n=!0},p:function(e,n){"general"==e[1]?r?(r.p(e,n),2&n&&g(r,1)):((r=Ee(e)).c(),g(r,1),r.m(t.parentNode,t)):r&&(k(),b(r,1,1,(function(){r=null})),M())},i:function(e){n||(g(r),n=!0)},o:function(e){b(r),n=!1},d:function(e){r&&r.d(e),e&&f(t)}}}function $e(e){var t,n,r,a,s,c,o,m,x,y,k,M,D,T,E,I,V,q,C,A,N,P,J,L,W,_,z,K,X,Y,Z,ee,te,ne,re,ae,se,ce,oe,ie,ue,de,fe,le,ve,pe,he,me,xe,ge,be,ye,we,ke,Me,De,Te,Ee,$e,qe,Ce,Ae,Ne,Pe=e[3].baseAddr+"";return(n=new Q({props:{showModal:e[0],$$slots:{default:[Ie]},$$scope:{ctx:e}}})).$on("click",e[6]),{c:function(){t=R(),H(n.$$.fragment),r=R(),a=i("section"),s=i("h3"),c=$("General"),o=R(),m=i("br"),x=R(),y=i("div"),k=i("div"),M=$("Serial"),D=R(),T=i("div"),E=$(e[2]),I=R(),V=i("div"),q=i("div"),C=$("Base Address"),A=R(),N=i("div"),P=$(Pe),J=R(),L=i("br"),W=R(),_=i("br"),z=R(),K=i("section"),X=i("h3"),Y=$("Board Details"),Z=R(),ee=i("br"),te=R(),ne=i("div"),re=i("div"),ae=$("PCB Type"),se=R(),ce=i("div"),oe=$(Re),ie=R(),ue=i("div"),de=i("div"),fe=$("Software Version"),le=R(),ve=i("div"),pe=$(Se),he=R(),me=i("div"),xe=i("div"),ge=$("Software Checksum"),be=R(),ye=i("div"),we=$(Be),ke=R(),Me=i("div"),De=i("div"),Te=$("Software Date"),Ee=R(),$e=i("div"),qe=$(Ve),this.h()},l:function(i){O('[data-svelte="svelte-ghgayl"]',document.head).forEach(f),t=B(i),G(n.$$.fragment,i),r=B(i),a=u(i,"SECTION",{class:!0});var l=d(a);s=u(l,"H3",{class:!0});var v=d(s);c=S(v,"General"),v.forEach(f),o=B(l),m=u(l,"BR",{}),x=B(l),y=u(l,"DIV",{class:!0});var p=d(y);k=u(p,"DIV",{});var h=d(k);M=S(h,"Serial"),h.forEach(f),D=B(p),T=u(p,"DIV",{});var g=d(T);E=S(g,e[2]),g.forEach(f),p.forEach(f),I=B(l),V=u(l,"DIV",{class:!0});var b=d(V);q=u(b,"DIV",{});var w=d(q);C=S(w,"Base Address"),w.forEach(f),A=B(b),N=u(b,"DIV",{});var $=d(N);P=S($,Pe),$.forEach(f),b.forEach(f),l.forEach(f),J=B(i),L=u(i,"BR",{}),W=B(i),_=u(i,"BR",{}),z=B(i),K=u(i,"SECTION",{class:!0});var R=d(K);X=u(R,"H3",{class:!0});var H=d(X);Y=S(H,"Board Details"),H.forEach(f),Z=B(R),ee=u(R,"BR",{}),te=B(R),ne=u(R,"DIV",{class:!0});var U=d(ne);re=u(U,"DIV",{});var j=d(re);ae=S(j,"PCB Type"),j.forEach(f),se=B(U),ce=u(U,"DIV",{});var F=d(ce);oe=S(F,Re),F.forEach(f),U.forEach(f),ie=B(R),ue=u(R,"DIV",{class:!0});var Q=d(ue);de=u(Q,"DIV",{});var Ie=d(de);fe=S(Ie,"Software Version"),Ie.forEach(f),le=B(Q),ve=u(Q,"DIV",{});var Ce=d(ve);pe=S(Ce,Se),Ce.forEach(f),Q.forEach(f),he=B(R),me=u(R,"DIV",{class:!0});var Ae=d(me);xe=u(Ae,"DIV",{});var Ne=d(xe);ge=S(Ne,"Software Checksum"),Ne.forEach(f),be=B(Ae),ye=u(Ae,"DIV",{});var He=d(ye);we=S(He,Be),He.forEach(f),Ae.forEach(f),ke=B(R),Me=u(R,"DIV",{class:!0});var Oe=d(Me);De=u(Oe,"DIV",{});var Ge=d(De);Te=S(Ge,"Software Date"),Ge.forEach(f),Ee=B(Oe),$e=u(Oe,"DIV",{});var Ue=d($e);qe=S(Ue,Ve),Ue.forEach(f),Oe.forEach(f),R.forEach(f),this.h()},h:function(){document.title="Service Tool Prototype",l(s,"class","svelte-17w87q2"),l(y,"class","row svelte-17w87q2"),l(V,"class","row svelte-17w87q2"),l(a,"class","svelte-17w87q2"),l(X,"class","svelte-17w87q2"),l(ne,"class","row svelte-17w87q2"),l(ue,"class","row svelte-17w87q2"),l(me,"class","row svelte-17w87q2"),l(Me,"class","row svelte-17w87q2"),l(K,"class","svelte-17w87q2")},m:function(i,u){v(i,t,u),U(n,i,u),v(i,r,u),v(i,a,u),p(a,s),p(s,c),p(a,o),p(a,m),p(a,x),p(a,y),p(y,k),p(k,M),p(y,D),p(y,T),p(T,E),p(a,I),p(a,V),p(V,q),p(q,C),p(V,A),p(V,N),p(N,P),v(i,J,u),v(i,L,u),v(i,W,u),v(i,_,u),v(i,z,u),v(i,K,u),p(K,X),p(X,Y),p(K,Z),p(K,ee),p(K,te),p(K,ne),p(ne,re),p(re,ae),p(ne,se),p(ne,ce),p(ce,oe),p(K,ie),p(K,ue),p(ue,de),p(de,fe),p(ue,le),p(ue,ve),p(ve,pe),p(K,he),p(K,me),p(me,xe),p(xe,ge),p(me,be),p(me,ye),p(ye,we),p(K,ke),p(K,Me),p(Me,De),p(De,Te),p(Me,Ee),p(Me,$e),p($e,qe),Ce=!0,Ae||(Ne=h(a,"click",e[7]),Ae=!0)},p:function(e,t){var r=w(t,1)[0],a={};1&r&&(a.showModal=e[0]),258&r&&(a.$$scope={dirty:r,ctx:e}),n.$set(a),(!Ce||4&r)&&j(E,e[2]),(!Ce||8&r)&&Pe!==(Pe=e[3].baseAddr+"")&&j(P,Pe)},i:function(e){Ce||(g(n.$$.fragment,e),Ce=!0)},o:function(e){b(n.$$.fragment,e),Ce=!1},d:function(e){e&&f(t),F(n,e),e&&f(r),e&&f(a),e&&f(J),e&&f(L),e&&f(W),e&&f(_),e&&f(z),e&&f(K),Ae=!1,Ne()}}}var Re="",Se="",Be="",Ve="";function qe(e,t,n){var r;P(e,te,(function(e){return n(3,r=e)}));var a=!1,s="general",c=-1;J(L(I.mark((function e(){var t;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,be();case 3:return e.next=5,xe.settings.serial({addr:255});case 5:return t=e.sent,n(2,c=t),e.next=9,xe.settings.baseSettings({addr:255});case 9:return e.sent,e.next=12,xe.settings.pcbType({addr:255});case 12:return e.sent,e.next=15,xe.version.program({addr:255});case 15:return e.sent,e.next=18,xe.version.programDate({addr:255});case 18:e.sent,e.next=25;break;case 21:e.prev=21,e.t0=e.catch(0),console.log("ERROR"),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,21]])}))));var o=function(){n(0,a=!1)},i=function(e){n(0,a=!0),n(1,s=e)};return[a,s,c,r,o,i,function(){o()},function(){i("general")}]}var Ce=function(t){e(i,o);var n=Te(i);function i(e){var t;return r(this,i),t=n.call(this),a(c(t),e,qe,$e,s,{}),t}return i}();export default Ce;
