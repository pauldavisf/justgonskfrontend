(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){e.exports=a(288)},129:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),l=a.n(r),i=(a(129),a(11)),s=a(12),o=a(14),m=a(13),u=a(15),p=a(28),h=a(29),d=a(51),E=a.n(d),b=a(27),f=a.n(b),v=a(52),j=a.n(v),g=a(110),O=a.n(g),y=a(76),k=a.n(y),S=a(111),N=a.n(S),w=a(26),_=a.n(w),x=a(53),C=a.n(x),D=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(E.a,{className:"card"},c.a.createElement("div",null,c.a.createElement(j.a,{title:this.props.title||c.a.createElement(C.a,{disableShrink:!0}),subheader:this.props.date||null}),this.props.id&&c.a.createElement(O.a,{className:"card__image",image:this.props.src,title:"Paella dish"}),this.props.id&&c.a.createElement(k.a,null,c.a.createElement(_.a,{component:"p"},this.props.description))),this.props.id&&c.a.createElement(N.a,null,c.a.createElement(p.b,{to:"/event/"+this.props.id,className:"no-style"},c.a.createElement(f.a,{size:"medium",color:"primary",variant:"contained",fullWidth:!0},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e"))))}}]),t}(n.Component),z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;fetch("".concat("https://justgonskapitest.azurewebsites.net","/api/Test"),{mode:"cors"}).then(function(e){return e.json()}).then(function(a){e=a.results,console.log(e);var n=0,r=e.map(function(e){return c.a.createElement(D,{key:n++,id:e.id,src:e.images[0].image,title:e.title.toUpperCase(),date:e.dates[0].start_Date?e.dates[0].start_Date.replace(/-/g,".").replace(/T/g,"   "):"\u0418\u0434\u0451\u0442 \u043a\u0440\u0443\u0433\u043b\u044b\u0439 \u0433\u043e\u0434",description:e.description.replace("<p>","").replace("</p>","")})});t.setState({cards:r})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},this.state.cards||c.a.createElement(D,null))}}]),t}(n.Component),B=a(54),I=a.n(B),M=a(55),P=a.n(M),J=a(118),T=a.n(J),U=a(114),W=a.n(U),A=a(115),G=a.n(A),K=a(57),L=a.n(K),R=a(56),$=a.n(R),q=a(78),F=a.n(q),H=a(113),Q=a.n(H),V=a(116),X=a.n(V),Y=a(117),Z=a.n(Y),ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={left:!1},a.toggleDrawer=function(e){return function(){a.setState({left:e})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f.a,{color:"inherit",onClick:this.toggleDrawer(!0)},c.a.createElement(Q.a,{style:{fontSize:40}})),c.a.createElement(W.a,{open:this.state.left,onClose:this.toggleDrawer(!1),onOpen:this.toggleDrawer(!0)},c.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1)},c.a.createElement(G.a,{className:"menu"},c.a.createElement($.a,null,c.a.createElement("div",{className:"menu__header"},"\u041c\u0435\u043d\u044e")),c.a.createElement(L.a,null),c.a.createElement(p.b,{to:"/",className:"no-style"},c.a.createElement($.a,{button:!0},c.a.createElement(F.a,{primary:"\u0421\u043f\u0438\u0441\u043e\u043a"}),c.a.createElement(X.a,null))),c.a.createElement(L.a,null),c.a.createElement(p.b,{to:"/map",className:"no-style"},c.a.createElement($.a,{button:!0},c.a.createElement(F.a,{primary:"\u041a\u0430\u0440\u0442\u0430"}),c.a.createElement(Z.a,null))),c.a.createElement(L.a,null)))))}}]),t}(n.Component),te=a(119),ae=a.n(te),ne=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(I.a,{position:"fixed",color:"#fff"},c.a.createElement("div",{className:"center"},c.a.createElement(P.a,{className:"header"},c.a.createElement(ee,null),c.a.createElement(_.a,{variant:"h6",color:"inherit"},c.a.createElement("i",null,"JG")),c.a.createElement(T.a,{color:"inherit"},c.a.createElement(ae.a,{style:{fontSize:40}})))))}}]),t}(n.Component),ce=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(I.a,{position:"static",color:"#fff"},c.a.createElement(P.a,{className:"footer__center"},c.a.createElement(_.a,{variant:"overline",color:"inherit"},c.a.createElement("div",{className:"footer__text"},"\u041d\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430:"),c.a.createElement("a",{href:"mailto:email@mail.mal",className:"footer__mail"},"andrey.shilkin2010@yandex.ru")))))}}]),t}(n.Component),re=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u0440\u0442\u0430")}}]),t}(n.Component),le=a(122),ie=a.n(le),se=a(79),oe=a.n(se),me=a(123),ue=a.n(me),pe=a(120),he=a.n(pe),de=a(121),Ee=Object(de.autoPlay)(he.a),be=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getId=function(){var e=document.URL.split("/"),t=e.pop();return t||e.pop()},e.handleNext=function(){e.setState(function(e){return{activeStep:e.activeStep+1}})},e.handleBack=function(){e.setState(function(e){return{activeStep:e.activeStep-1}})},e.handleStepChange=function(t){e.setState({activeStep:t})},e.state={activeStep:0,steps:[],title:""},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://justgonskapitest.azurewebsites.net","/api/test/").concat(this.getId()),{mode:"cors"}).then(function(e){return e.json()}).then(function(t){console.log(t);var a=t.images.map(function(e,t){return{imgPath:{background:"url(".concat(e.image,") center no-repeat"),backgroundSize:"contain"},label:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 ".concat(t)}}),n=a.length;console.log(a),e.setState({title:t.title,steps:a,maxSteps:n,body:t.body_Text,place:t.place.address})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"back"},c.a.createElement(p.b,{to:"/",className:"no-style"},c.a.createElement(f.a,{size:"small",color:"primary"},c.a.createElement(oe.a,null),"\u043d\u0430\u0437\u0430\u0434")),c.a.createElement(E.a,{className:"event"},c.a.createElement(j.a,{title:this.state.title.toUpperCase()||c.a.createElement(C.a,{disableShrink:!0}),className:"event__header"}),c.a.createElement(Ee,{axis:"x",className:"event__images_width",index:this.state.activeStep,onChangeIndex:this.handleStepChange,enableMouseEvents:!0},this.state.steps.map(function(t,a){return c.a.createElement("div",{key:t.label},Math.abs(e.state.activeStep-a)<=2?c.a.createElement("div",{className:"event__images",style:t.imgPath}):null)})),this.state.maxSteps&&c.a.createElement(ie.a,{steps:this.state.maxSteps,position:"static",activeStep:this.state.activeStep,nextButton:c.a.createElement(f.a,{size:"small",onClick:this.handleNext,disabled:this.state.activeStep===this.state.maxSteps-1},c.a.createElement(ue.a,null)),backButton:c.a.createElement(f.a,{size:"small",onClick:this.handleBack,disabled:0===this.state.activeStep},c.a.createElement(oe.a,null))}),c.a.createElement("p",{className:"event__text"},this.state.body&&this.state.body.replace(/\<.*?\>/g," ")),c.a.createElement("div",{className:"event__address"},"\u0410\u0434\u0440\u0435\u0441: "+this.state.place)))}}]),t}(n.Component),fe=(a(287),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"page"},c.a.createElement(p.a,null,c.a.createElement(ne,null),c.a.createElement("div",{className:"content"},c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/",exact:!0,component:z}),c.a.createElement(h.a,{path:"/map",component:re}),c.a.createElement(h.a,{path:"/event/",component:be})))),c.a.createElement(ce,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[124,1,2]]]);
//# sourceMappingURL=main.5b7f2374.chunk.js.map