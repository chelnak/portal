"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"introduction",title:"Introduction",description:"Overview of the StatusCake API"},a=void 0,c={unversionedId:"api/introduction",id:"api/introduction",title:"Introduction",description:"Overview of the StatusCake API",source:"@site/guides/api/introduction.md",sourceDirName:"api",slug:"/api/introduction",permalink:"/guides/api/introduction",draft:!1,editUrl:"https://github.com/StatusCakeDev/portal/edit/master/guides/api/introduction.md",tags:[],version:"current",lastUpdatedAt:1664803743,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{id:"introduction",title:"Introduction",description:"Overview of the StatusCake API"},sidebar:"guides",previous:{title:"Examples and Resources",permalink:"/guides/examples"},next:{title:"Authentication",permalink:"/guides/api/authentication"}},s={},p=[{value:"Next Steps",id:"next-steps",level:2}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The StatusCake API is organised around the features that we offer, with each\nfeature providing a set of endpoints to perform operations on resources\nassociated with your account."),(0,o.kt)("p",null,"The documentation for the available endpoints along with their respective\nparameters, and responses may be found ",(0,o.kt)("a",{parentName:"p",href:"/api"},"here"),"."),(0,o.kt)("p",null,"The remainder of this section focusses on ancillary documentation supporting\nthe functionality of the API, concerned primarily with authentication,\nratelimiting and error handling."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"The following references describe how to get started using the API and avoid\nsome common mistakes."))}l.isMDXComponent=!0}}]);