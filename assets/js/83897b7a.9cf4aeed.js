"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={slug:"/references/api"},i="API",c={unversionedId:"references/api/introduction",id:"references/api/introduction",title:"API",description:"The StatusCake API is organised around the features that we offer, with each",source:"@site/guides/references/api/introduction.md",sourceDirName:"references/api",slug:"/references/api",permalink:"/guides/references/api",draft:!1,editUrl:"https://github.com/StatusCakeDev/portal/tree/master/guides/references/api/introduction.md",tags:[],version:"current",frontMatter:{slug:"/references/api"},sidebar:"guides",previous:{title:"References",permalink:"/guides/category/references"},next:{title:"Authentication",permalink:"/guides/references/api/authentication"}},s={},p=[{value:"Next Steps",id:"next-steps",level:2}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api"},"API"),(0,o.kt)("p",null,"The StatusCake API is organised around the features that we offer, with each\nfeature providing a set of endpoints to perform operations on resources\nassociated with your account."),(0,o.kt)("p",null,"The documentation for the available endpoints along with their respective\nparameters, and responses may be found ",(0,o.kt)("a",{parentName:"p",href:"/api"},"here"),"."),(0,o.kt)("p",null,"The remainder of this section focusses on ancillary documentation supporting\nthe functionality of the API, concerned primarily with authentication,\nratelimiting and error handling."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"The following references describe how to get started using the API and avoid\nsome common mistakes."))}l.isMDXComponent=!0}}]);