"use strict";(self.webpackChunkhongzhenchen_gatsby=self.webpackChunkhongzhenchen_gatsby||[]).push([[588],{6581:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var l=n(5785),a=n(7294),c=n(682),r=n(2086),i=n(1945),m=n(4051),o=n(1555),u=n(3228);var s=function(e){const{title:t,image:n,description:l,price:c,handleClick:r}=e;return a.createElement(u.Z,{style:{width:"18rem"}},a.createElement(u.Z.Img,{variant:"top",src:n}),a.createElement(u.Z.Body,null,a.createElement(u.Z.Title,null,t," - ",c," Baht"),a.createElement(i.Z,{variant:"primary",onClick:r},"Add to Cart")))},h=n(30);var E=function(){const[e,t]=(0,h.Z)("coffee","Latte");let[n,u]=a.useState([]),[E,Z]=a.useState("iced"),[p,d]=(0,h.Z)("cart",[]);function f(e){p.push(e),console.table(p),d((0,l.Z)(p))}return a.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/coffee/"+E).then((e=>e.json())).then((t=>{for(let n=0;n<t.length;n++)e.push(a.createElement(s,{key:n,image:t[n].image,title:t[n].title,description:t[n].description,price:59,handleClick:()=>{f(t[n])}}));u(e)}))}),[E]),a.createElement(c.Z,null,a.createElement("h1",null,"POS"),a.createElement(r.Z,{"aria-label":"Basic example"},a.createElement(i.Z,{variant:"secondary",onClick:()=>{Z("hot")}},"Hot"),a.createElement(i.Z,{variant:"secondary",onClick:()=>{Z("iced")}},"Iced")),a.createElement(m.Z,null,a.createElement(o.Z,null,a.createElement(m.Z,null,n)),a.createElement(o.Z,{sm:3},a.createElement("h2",null,"Cart ",e),p.map(((e,t)=>a.createElement(m.Z,{key:t},a.createElement(o.Z,null,e.title),a.createElement(o.Z,null,59)))),a.createElement(m.Z,null,"Total: ",59*p.length," Baht"))))}}}]);
//# sourceMappingURL=component---src-pages-pos-index-js-db2232c7a271b8ecf25b.js.map