(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(19),l=a.n(i),r=(a(27),a(2)),s=a(3),o=a(5),m=a(4),u=a(6),b=a(12),h=a(10),p=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card paper"},c.a.createElement("div",{className:"big"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),c.a.createElement("div",{className:"small"},"24.03.2001"),c.a.createElement("div",{className:"madium"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati li laboriosam in tempora dolorum itaque sequi rerum! Fugiat voluptatibus at aliquid."))}}]),t}(n.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement(p,null),c.a.createElement(p,null),c.a.createElement(p,null),c.a.createElement(p,null),c.a.createElement(p,null),c.a.createElement(p,null),c.a.createElement(p,null),c.a.createElement(p,null))}}]),t}(n.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u0440\u0442\u0430")}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).click=function(e){e.target.parentNode.parentNode.parentNode.classList.remove("visible"),a.props.changeParentState()},a.state={visible:e.visible,className:"nav"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.visible!==this.state.visible&&(this.setState({visible:e.visible}),this.state.visible?this.setState({className:"nav visible"}):this.setState({className:"nav"}),!0)}},{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement("div",{className:this.state.className+" paper"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{onClick:this.click},c.a.createElement(b.b,{className:"nav__link",to:"/"},"main")),c.a.createElement("li",{onClick:this.click},c.a.createElement(b.b,{className:"nav__link",to:"/map/"},"map")))),c.a.createElement("div",{className:"content"},c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/",exact:!0,component:v}),c.a.createElement(h.a,{path:"/map",component:d}))))}}]),t}(n.Component),O=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("img",{src:"/hamburger.png",width:"80",height:"80",className:"hamburger",alt:"\u041c\u0435\u043d\u044e",onClick:this.props.onChange})}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header paper"},c.a.createElement("div",{className:"center"},c.a.createElement(O,{onChange:this.props.onChange}),c.a.createElement("div",{className:"logo"},"JG"),c.a.createElement("div",{className:"medium"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))}}]),t}(n.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer paper"},c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"small"},"\u041d\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430:",c.a.createElement("a",{href:"mailto:email@mail.mal",className:"mail"},"email@mail.mal"))))}}]),t}(n.Component),g=(a(36),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).stateToggle=function(){e.setState({isMenuVisible:!e.state.isMenuVisible})},e.state={isMenuVisible:!0},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"page"},c.a.createElement(j,{onChange:this.stateToggle}),c.a.createElement(E,{visible:this.state.isMenuVisible,changeParentState:this.stateToggle}),c.a.createElement(f,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.214956e6.chunk.js.map