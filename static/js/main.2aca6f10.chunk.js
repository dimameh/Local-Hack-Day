(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},189:function(e,t,a){e.exports=a(299)},290:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);a(190),a(216),a(218),a(219),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258);var n=a(0),c=a.n(n),r=a(69),i=a.n(r),s=a(38),l=a.n(s),o=a(50),u=a.n(o),m=a(43),d=a(108),p=a.n(d),f=a(107),h=a.n(f),b=(a(267),a(49)),E=a.n(b),g=a(42),k=a.n(g),v=a(102),j=a.n(v),O=a(51),w=a.n(O),x=a(99),y=a.n(x),C=a(101),P=a.n(C),K=a(100),U=a.n(K),V=function(e){var t=e.id,a=e.go,n=e.fetchedUser,r=e.fetchedFriends;return c.a.createElement(E.a,{id:t},c.a.createElement(k.a,null,"Lockal Chat"),n&&c.a.createElement(w.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(y.a,{before:n.photo_200?c.a.createElement(U.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r&&c.a.createElement(w.a,{title:"User Data Fetched with VK Connect"}),c.a.createElement(w.a,{title:"Navigation Example"},c.a.createElement(P.a,null,c.a.createElement(j.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},A=a(70),F=a(106),S=a.n(F),_=a(103),I=a.n(_),W=a(104),N=a.n(W),z=a(105),D=a.n(z),G=(a(290),Object(A.b)()),J=function(e){return c.a.createElement(E.a,{id:e.id},c.a.createElement(k.a,{left:c.a.createElement(S.a,{onClick:e.go,"data-to":"home"},G===A.a?c.a.createElement(I.a,null):c.a.createElement(N.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:D.a,alt:"Persik The Cat"}))},T=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),s=Object(m.a)(i,2),o=s[0],d=s[1],f=Object(n.useState)(null),b=Object(m.a)(f,2),E=b[0],g=b[1],k=Object(n.useState)(c.a.createElement(h.a,{size:"large"})),v=Object(m.a)(k,2),j=v[0],O=v[1];Object(n.useEffect)((function(){l.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){var e,t;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(l.a.sendPromise("VKWebAppGetUserInfo"));case 2:return e=a.sent,d(e),a.next=6,u.a.awrap(l.a.sendPromise("VKWebAppGetFriends",{}));case 6:t=a.sent,g(t),O(null);case 9:case"end":return a.stop()}}))}()}),[]);var w=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(p.a,{activePanel:a,popout:j},c.a.createElement(V,{id:"home",fetchedUser:o,go:w,fetchedFriends:E}),c.a.createElement(J,{id:"persik",go:w}))};l.a.send("VKWebAppInit"),i.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.2aca6f10.chunk.js.map