(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},184:function(e,t,a){e.exports=a(289)},280:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);a(185),a(211),a(213),a(214),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253);var n=a(0),c=a.n(n),r=a(73),l=a.n(r),i=a(40),s=a.n(i),o=a(56),m=a.n(o),u=a(46),d=a(105),p=a.n(d),f=a(104),E=a.n(f),b=(a(262),a(41)),h=a.n(b),g=a(39),k=a.n(g),v=a(75),j=a.n(v),O=a(74),w=a.n(O),x=a(101),y=a.n(x),C=a(45),P=a.n(C),S=a(102),A=a.n(S),F=a(34),K=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(h.a,{id:t},c.a.createElement(k.a,null,Object(F.b)()),n&&c.a.createElement(w.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(y.a,{before:n.photo_200?c.a.createElement(A.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(w.a,{title:"Navigation Example"},c.a.createElement(P.a,null,c.a.createElement(j.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please")),c.a.createElement(P.a,null,c.a.createElement(j.a,{size:"xl",level:"2",onClick:a,"data-to":"frends"},"Show me the Frends, please"))))},U=a(55),V=a.n(U),_=a(53),I=a.n(_),W=a(54),z=a.n(W),N=a(103),G=a.n(N),J=(a(280),Object(F.b)()),T=function(e){return c.a.createElement(h.a,{id:e.id},c.a.createElement(k.a,{left:c.a.createElement(V.a,{onClick:e.go,"data-to":"home"},J===F.a?c.a.createElement(I.a,null):c.a.createElement(z.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:G.a,alt:"Persik The Cat"}))},B=Object(F.b)(),D=function(e){return c.a.createElement(h.a,{id:e.id},c.a.createElement(k.a,{left:c.a.createElement(V.a,{onClick:e.go,"data-to":"home"},B===F.a?c.a.createElement(I.a,null):c.a.createElement(z.a,null))},"\u0412\u044b\u0431\u0435\u0440\u0438 \u0434\u0440\u0443\u0433\u0430"),c.a.createElement(P.a,null,e.fetchFrends.data.users.id))},q=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),o=i[0],d=i[1],f=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),b=Object(u.a)(f,2),h=b[0],g=b[1],k=Object(n.useState)(null),v=Object(u.a)(k,2),j=v[0],O=v[1];Object(n.useEffect)((function(){s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),console.log("hello"),function(){var e,t;m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(s.a.sendPromise("VKWebAppGetUserInfo"));case 2:return e=a.sent,a.next=5,m.a.awrap(s.a.sendPromise("VKWebAppGetFriends"));case 5:t=a.sent,O(t),d(e),g(null);case 9:case"end":return a.stop()}}))}()}),[]);var w=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(p.a,{activePanel:a,popout:h},c.a.createElement(K,{id:"home",fetchedUser:o,go:w}),c.a.createElement(T,{id:"persik",go:w}),c.a.createElement(D,{id:"frends",go:w,fetchFrends:j}))};s.a.send("VKWebAppInit"),l.a.render(c.a.createElement(q,null),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.050ab9ba.chunk.js.map