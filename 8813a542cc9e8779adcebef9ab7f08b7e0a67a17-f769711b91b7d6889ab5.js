/*! For license information please see 8813a542cc9e8779adcebef9ab7f08b7e0a67a17-f769711b91b7d6889ab5.js.LICENSE.txt */
(self.webpackChunkhongzhenchen_gatsby=self.webpackChunkhongzhenchen_gatsby||[]).push([[574],{4184:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var o=a.apply(null,t);o&&e.push(o)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)n.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(r,[]))||(e.exports=t)}()},1945:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(4184),a=t.n(n),s=t(7294),o=t(5893);const i=["as","disabled"];function c({tagName:e,disabled:r,href:t,target:n,rel:a,role:s,onClick:o,tabIndex:i=0,type:c}){e||(e=null!=t||null!=n||null!=a?"a":"button");const u={tagName:e};if("button"===e)return[{type:c||"button",disabled:r},u];const l=n=>{(r||"a"===e&&function(e){return!e||"#"===e.trim()}(t))&&n.preventDefault(),r?n.stopPropagation():null==o||o(n)};return"a"===e&&(t||(t="#"),r&&(t=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:r?void 0:i,href:t,target:"a"===e?n:void 0,"aria-disabled":r||void 0,rel:"a"===e?a:void 0,onClick:l,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),l(e))}},u]}const u=s.forwardRef(((e,r)=>{let{as:t,disabled:n}=e,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);const[s,{tagName:u}]=c(Object.assign({tagName:t,disabled:n},a));return(0,o.jsx)(u,Object.assign({},a,s,{ref:r}))}));u.displayName="Button";var l=t(6792);const f=s.forwardRef((({as:e,bsPrefix:r,variant:t,size:n,active:s,className:i,...u},f)=>{const d=(0,l.vE)(r,"btn"),[p,{tagName:v}]=c({tagName:e,...u}),m=v;return(0,o.jsx)(m,{...p,...u,ref:f,className:a()(i,d,s&&"active",t&&`${d}-${t}`,n&&`${d}-${n}`,u.href&&u.disabled&&"disabled")})}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};var d=f},2086:function(e,r,t){"use strict";var n=t(4184),a=t.n(n),s=t(7294),o=t(6792),i=t(5893);const c=s.forwardRef((({bsPrefix:e,size:r,vertical:t,className:n,as:s="div",...c},u)=>{const l=(0,o.vE)(e,"btn-group");let f=l;return t&&(f=`${l}-vertical`),(0,i.jsx)(s,{...c,ref:u,className:a()(n,f,r&&`${l}-${r}`)})}));c.displayName="ButtonGroup",c.defaultProps={vertical:!1,role:"group"},r.Z=c},3228:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var n=t(4184),a=t.n(n),s=t(7294),o=t(6792),i=t(4680),c=t(5893),u=e=>s.forwardRef(((r,t)=>(0,c.jsx)("div",{...r,ref:t,className:a()(r.className,e)})));const l=s.forwardRef((({bsPrefix:e,className:r,variant:t,as:n="img",...s},i)=>{const u=(0,o.vE)(e,"card-img");return(0,c.jsx)(n,{ref:i,className:a()(t?`${u}-${t}`:u,r),...s})}));l.displayName="CardImg";var f=l;const d=s.createContext(null);d.displayName="CardHeaderContext";var p=d;const v=s.forwardRef((({bsPrefix:e,className:r,as:t="div",...n},i)=>{const u=(0,o.vE)(e,"card-header"),l=(0,s.useMemo)((()=>({cardHeaderBsPrefix:u})),[u]);return(0,c.jsx)(p.Provider,{value:l,children:(0,c.jsx)(t,{ref:i,...n,className:a()(r,u)})})}));v.displayName="CardHeader";var m=v;const b=u("h5"),g=u("h6"),y=(0,i.Z)("card-body"),x=(0,i.Z)("card-title",{Component:b}),N=(0,i.Z)("card-subtitle",{Component:g}),h=(0,i.Z)("card-link",{Component:"a"}),$=(0,i.Z)("card-text",{Component:"p"}),C=(0,i.Z)("card-footer"),w=(0,i.Z)("card-img-overlay"),j=s.forwardRef((({bsPrefix:e,className:r,bg:t,text:n,border:s,body:i,children:u,as:l="div",...f},d)=>{const p=(0,o.vE)(e,"card");return(0,c.jsx)(l,{ref:d,...f,className:a()(r,p,t&&`bg-${t}`,n&&`text-${n}`,s&&`border-${s}`),children:i?(0,c.jsx)(y,{children:u}):u})}));j.displayName="Card",j.defaultProps={body:!1};var P=Object.assign(j,{Img:f,Title:x,Subtitle:N,Body:y,Link:h,Text:$,Header:m,Footer:C,ImgOverlay:w})},1555:function(e,r,t){"use strict";var n=t(4184),a=t.n(n),s=t(7294),o=t(6792),i=t(5893);const c=s.forwardRef(((e,r)=>{const[{className:t,...n},{as:s="div",bsPrefix:c,spans:u}]=function({as:e,bsPrefix:r,className:t,...n}){r=(0,o.vE)(r,"col");const s=(0,o.pi)(),i=(0,o.zG)(),c=[],u=[];return s.forEach((e=>{const t=n[e];let a,s,o;delete n[e],"object"==typeof t&&null!=t?({span:a,offset:s,order:o}=t):a=t;const l=e!==i?`-${e}`:"";a&&c.push(!0===a?`${r}${l}`:`${r}${l}-${a}`),null!=o&&u.push(`order${l}-${o}`),null!=s&&u.push(`offset${l}-${s}`)})),[{...n,className:a()(t,...c,...u)},{as:e,bsPrefix:r,spans:c}]}(e);return(0,i.jsx)(s,{...n,ref:r,className:a()(t,!u.length&&c)})}));c.displayName="Col",r.Z=c},682:function(e,r,t){"use strict";var n=t(4184),a=t.n(n),s=t(7294),o=t(6792),i=t(5893);const c=s.forwardRef((({bsPrefix:e,fluid:r,as:t="div",className:n,...s},c)=>{const u=(0,o.vE)(e,"container"),l="string"==typeof r?`-${r}`:"-fluid";return(0,i.jsx)(t,{ref:c,...s,className:a()(n,r?`${u}${l}`:u)})}));c.displayName="Container",c.defaultProps={fluid:!1},r.Z=c},4051:function(e,r,t){"use strict";var n=t(4184),a=t.n(n),s=t(7294),o=t(6792),i=t(5893);const c=s.forwardRef((({bsPrefix:e,className:r,as:t="div",...n},s)=>{const c=(0,o.vE)(e,"row"),u=(0,o.pi)(),l=(0,o.zG)(),f=`${c}-cols`,d=[];return u.forEach((e=>{const r=n[e];let t;delete n[e],null!=r&&"object"==typeof r?({cols:t}=r):t=r;const a=e!==l?`-${e}`:"";null!=t&&d.push(`${f}${a}-${t}`)})),(0,i.jsx)(t,{ref:s,...n,className:a()(r,c,...d)})}));c.displayName="Row",r.Z=c},6792:function(e,r,t){"use strict";t.d(r,{pi:function(){return u},vE:function(){return c},zG:function(){return l}});var n=t(7294);t(5893);const a=["xxl","xl","lg","md","sm","xs"],s=n.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:o,Provider:i}=s;function c(e,r){const{prefixes:t}=(0,n.useContext)(s);return e||t[r]||r}function u(){const{breakpoints:e}=(0,n.useContext)(s);return e}function l(){const{minBreakpoint:e}=(0,n.useContext)(s);return e}},4680:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(4184),a=t.n(n),s=/-(.)/g;var o=t(7294),i=t(6792),c=t(5893);const u=e=>{return e[0].toUpperCase()+(r=e,r.replace(s,(function(e,r){return r.toUpperCase()}))).slice(1);var r};function l(e,{displayName:r=u(e),Component:t,defaultProps:n}={}){const s=o.forwardRef((({className:r,bsPrefix:n,as:s=t||"div",...o},u)=>{const l=(0,i.vE)(n,e);return(0,c.jsx)(s,{ref:u,className:a()(r,l),...o})}));return s.defaultProps=n,s.displayName=r,s}},30:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(7294),a=function(){};var s="undefined"!=typeof window,o=function(e,r,t){if(!s)return[r,a,a];if(!e)throw new Error("useLocalStorage key may not be falsy");var o=t?t.raw?function(e){return e}:t.deserializer:JSON.parse,i=(0,n.useRef)((function(e){try{var n=t?t.raw?String:t.serializer:JSON.stringify,a=localStorage.getItem(e);return null!==a?o(a):(r&&localStorage.setItem(e,n(r)),r)}catch(c){return r}})),c=(0,n.useState)((function(){return i.current(e)})),u=c[0],l=c[1];(0,n.useLayoutEffect)((function(){return l(i.current(e))}),[e]);var f=(0,n.useCallback)((function(r){try{var n="function"==typeof r?r(u):r;if(void 0===n)return;var a=void 0;a=t?t.raw?"string"==typeof n?n:JSON.stringify(n):t.serializer?t.serializer(n):JSON.stringify(n):JSON.stringify(n),localStorage.setItem(e,a),l(o(a))}catch(c){}}),[e,l]),d=(0,n.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(c){}}),[e,l]);return[u,f,d]}}}]);
//# sourceMappingURL=8813a542cc9e8779adcebef9ab7f08b7e0a67a17-f769711b91b7d6889ab5.js.map