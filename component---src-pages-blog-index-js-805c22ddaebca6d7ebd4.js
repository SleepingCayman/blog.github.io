/*! For license information please see component---src-pages-blog-index-js-805c22ddaebca6d7ebd4.js.LICENSE.txt */
(self.webpackChunkhongzhenchen_gatsby=self.webpackChunkhongzhenchen_gatsby||[]).push([[524],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},1025:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(7294),a=r(1883),o=r(3228),s=r(1945),i=r(682),l=r(4051);function c(e){console.log(e.location);const t=new URLSearchParams(e.location.search);console.log(t.get("a"));const r="https://sample-blog-express-78qzajv5h-mchayapol.vercel.app/api/blogs",[c,u]=n.useState([]),[d,f]=n.useState([]),[m,p]=n.useState(!0),v=()=>{fetch(r).then((e=>e.json())).then((e=>{console.table(e),u(e),p(!1),f(e.map(((e,t)=>n.createElement(o.Z,{key:e._id,style:{width:"18rem"}},n.createElement(o.Z.Body,null,n.createElement(o.Z.Title,null,e.topic),n.createElement(o.Z.Subtitle,null,e.author),n.createElement(o.Z.Text,null,e.content),n.createElement(s.Z,{variant:"dark"},n.createElement(a.Link,{to:"/blog/edit?id="+e._id},"Edit")),n.createElement(s.Z,{variant:"danger",onClick:()=>{return t=e._id,void(window.confirm("Are you sure?")&&fetch(r+"/"+t,{method:"DELETE"}).then((e=>e.json())).then((e=>{console.log("Deleted",e),v()})));var t}},"Delete"))))))})).catch((e=>{console.error(e)}))};return n.useState((()=>{v()}),[]),n.createElement(i.Z,null,n.createElement("h1",null,"Edit"),n.createElement(a.Link,{to:"/blog/new"},"Create New Blog"),n.createElement(l.Z,null,d))}},1945:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(4184),a=r.n(n),o=r(7294),s=r(5893);const i=["as","disabled"];function l({tagName:e,disabled:t,href:r,target:n,rel:a,role:o,onClick:s,tabIndex:i=0,type:l}){e||(e=null!=r||null!=n||null!=a?"a":"button");const c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];const u=n=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==s||s(n)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const c=o.forwardRef(((e,t)=>{let{as:r,disabled:n}=e,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i);const[o,{tagName:c}]=l(Object.assign({tagName:r,disabled:n},a));return(0,s.jsx)(c,Object.assign({},a,o,{ref:t}))}));c.displayName="Button";var u=r(6792);const d=o.forwardRef((({as:e,bsPrefix:t,variant:r,size:n,active:o,className:i,...c},d)=>{const f=(0,u.vE)(t,"btn"),[m,{tagName:p}]=l({tagName:e,...c}),v=p;return(0,s.jsx)(v,{...m,...c,ref:d,className:a()(i,f,o&&"active",r&&`${f}-${r}`,n&&`${f}-${n}`,c.href&&c.disabled&&"disabled")})}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1};var f=d},3228:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(4184),a=r.n(n),o=r(7294),s=r(6792),i=r(4680),l=r(5893),c=e=>o.forwardRef(((t,r)=>(0,l.jsx)("div",{...t,ref:r,className:a()(t.className,e)})));const u=o.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...o},i)=>{const c=(0,s.vE)(e,"card-img");return(0,l.jsx)(n,{ref:i,className:a()(r?`${c}-${r}`:c,t),...o})}));u.displayName="CardImg";var d=u;const f=o.createContext(null);f.displayName="CardHeaderContext";var m=f;const p=o.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},i)=>{const c=(0,s.vE)(e,"card-header"),u=(0,o.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,l.jsx)(m.Provider,{value:u,children:(0,l.jsx)(r,{ref:i,...n,className:a()(t,c)})})}));p.displayName="CardHeader";var v=p;const b=c("h5"),g=c("h6"),h=(0,i.Z)("card-body"),x=(0,i.Z)("card-title",{Component:b}),y=(0,i.Z)("card-subtitle",{Component:g}),N=(0,i.Z)("card-link",{Component:"a"}),E=(0,i.Z)("card-text",{Component:"p"}),C=(0,i.Z)("card-footer"),j=(0,i.Z)("card-img-overlay"),w=o.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:o,body:i,children:c,as:u="div",...d},f)=>{const m=(0,s.vE)(e,"card");return(0,l.jsx)(u,{ref:f,...d,className:a()(t,m,r&&`bg-${r}`,n&&`text-${n}`,o&&`border-${o}`),children:i?(0,l.jsx)(h,{children:c}):c})}));w.displayName="Card",w.defaultProps={body:!1};var Z=Object.assign(w,{Img:d,Title:x,Subtitle:y,Body:h,Link:N,Text:E,Header:v,Footer:C,ImgOverlay:j})},682:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294),s=r(6792),i=r(5893);const l=o.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:n,...o},l)=>{const c=(0,s.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(r,{ref:l,...o,className:a()(n,t?`${c}${u}`:c)})}));l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},4051:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294),s=r(6792),i=r(5893);const l=o.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},o)=>{const l=(0,s.vE)(e,"row"),c=(0,s.pi)(),u=(0,s.zG)(),d=`${l}-cols`,f=[];return c.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const a=e!==u?`-${e}`:"";null!=r&&f.push(`${d}${a}-${r}`)})),(0,i.jsx)(r,{ref:o,...n,className:a()(t,l,...f)})}));l.displayName="Row",t.Z=l},6792:function(e,t,r){"use strict";r.d(t,{pi:function(){return c},vE:function(){return l},zG:function(){return u}});var n=r(7294);r(5893);const a=["xxl","xl","lg","md","sm","xs"],o=n.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:s,Provider:i}=o;function l(e,t){const{prefixes:r}=(0,n.useContext)(o);return e||r[t]||t}function c(){const{breakpoints:e}=(0,n.useContext)(o);return e}function u(){const{minBreakpoint:e}=(0,n.useContext)(o);return e}},4680:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(4184),a=r.n(n),o=/-(.)/g;var s=r(7294),i=r(6792),l=r(5893);const c=e=>{return e[0].toUpperCase()+(t=e,t.replace(o,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e,{displayName:t=c(e),Component:r,defaultProps:n}={}){const o=s.forwardRef((({className:t,bsPrefix:n,as:o=r||"div",...s},c)=>{const u=(0,i.vE)(n,e);return(0,l.jsx)(o,{ref:c,className:a()(t,u),...s})}));return o.defaultProps=n,o.displayName=t,o}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-805c22ddaebca6d7ebd4.js.map