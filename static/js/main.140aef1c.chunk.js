(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=(a(17),a(4)),i=a(10);function u(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var m=function(e,t,a){return"#"+u(e)+u(t)+u(a)},s=function(e){var t=e.rgb,a=e.weight,c=e.index,l=Object(n.useState)(!1),u=Object(o.a)(l,2),s=u[0],p=u[1],b=t.join(","),f=m.apply(void 0,Object(i.a)(t));return Object(n.useEffect)((function(){var e=setTimeout((function(){p(!1)}),3e3);return function(){return clearTimeout(e)}}),[s]),r.a.createElement("article",{className:"color ".concat(c>10&&"color-light"),style:{backgroundColor:"rgb(".concat(b,")")},onClick:function(){p(!0),navigator.clipboard.writeText(f)}},r.a.createElement("p",{className:"percent-value"},a,"%"),r.a.createElement("p",{className:"color-value"}),s&&r.a.createElement("p",{className:"alert"}," copied to clipboard"),r.a.createElement("p",null," ",f))},p=a(36),b=a(7),f=a.n(b);var d=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),u=i[0],m=i[1],b="#000000".replace(/0/g,(function(){return(~~(16*Math.random())).toString(16)})),d=Object(n.useState)(new f.a(b).all(10)),E=Object(o.a)(d,2),v=E[0],g=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"container"},r.a.createElement("label",{htmlFor:"color"},r.a.createElement("h3",null,"Color Generator")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();try{var t=new f.a(a).all(10);g(t),m(!1)}catch(u){m(!0)}}},r.a.createElement("input",{type:"text",name:"color",id:"color",value:a,onChange:function(e){return c(e.target.value)},placeholder:"#2b2d42",className:"".concat(u?"error":null)}),r.a.createElement(p.a,{variant:"contained",color:"primary",type:"submit"},"Generate"))),r.a.createElement("section",{className:"colors"},v.map((function(e,t){return r.a.createElement(s,Object.assign({key:t},e,{index:t}))}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.140aef1c.chunk.js.map