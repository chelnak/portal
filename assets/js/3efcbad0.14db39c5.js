"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(c,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={id:"authentication",title:"Authentication",description:"Learn how to authentication with the StatusCake API"},o=void 0,s={unversionedId:"api/authentication",id:"api/authentication",title:"Authentication",description:"Learn how to authentication with the StatusCake API",source:"@site/guides/api/authentication.md",sourceDirName:"api",slug:"/api/authentication",permalink:"/guides/api/authentication",draft:!1,editUrl:"https://github.com/StatusCakeDev/portal/edit/master/guides/api/authentication.md",tags:[],version:"current",lastUpdatedAt:1688722920,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{id:"authentication",title:"Authentication",description:"Learn how to authentication with the StatusCake API"},sidebar:"guides",previous:{title:"Introduction",permalink:"/guides/api/introduction"},next:{title:"Ratelimiting",permalink:"/guides/api/ratelimiting"}},c={},u=[{value:"Cross-Origin Resource Sharing",id:"cross-origin-resource-sharing",level:2},{value:"Next Steps",id:"next-steps",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The StatusCake API uses a bearer authentication (also called token\nauthentication) ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication\nscheme")," that\ninvolves security tokens called bearer tokens. The client must send this token\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header when making requests to protected resources:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Authenticated HTTP request"',title:'"Authenticated',HTTP:!0,'request"':!0},"Authorization: Bearer <token>\n")),(0,a.kt)("p",null,"You can view and manage your API tokens from the ",(0,a.kt)("a",{parentName:"p",href:"https://app.statuscake.com/User.php"},"StatusCake account\npanel"),"."),(0,a.kt)("admonition",{title:"note",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"API tokens must be kept private. In the event that one is exposed a new one\nshould be generated.")),(0,a.kt)("p",null,"All API requests must be made over HTTPS. Calls made over plain HTTP will be\nredirected to the secure endpoint. API requests without authentication will\nfail, returning ",(0,a.kt)("inlineCode",{parentName:"p"},"401 Unauthorised")," unless otherwise stated in the documentation\nfor the specific endpoint."),(0,a.kt)("p",null,"For example, to make an authenticated request for a list of uptime monitoring\nchecks, the following ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command may be issues:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="List uptime checks" {2}',title:'"List',uptime:!0,'checks"':!0,"{2}":!0},'curl "https://api.statuscake.com/v1/uptime" \\\n  -H "Authorization: Bearer <token>"\n')),(0,a.kt)("h2",{id:"cross-origin-resource-sharing"},"Cross-Origin Resource Sharing"),(0,a.kt)("p",null,"The StatusCake API features Cross-Origin Resource Sharing (CORS) implemented in\ncompliance with the W3C specification. This allows cross-domain communication\nfrom the browser. All responses have a wildcard same-origin which makes them\ncompletely public and accessible to everyone."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"Learn how to handle request ratelimiting."))}p.isMDXComponent=!0}}]);