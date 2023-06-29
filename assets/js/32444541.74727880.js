"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"errors",title:"Errors",description:"Learn how handle API errors"},i=void 0,s={unversionedId:"api/errors",id:"api/errors",title:"Errors",description:"Learn how handle API errors",source:"@site/guides/api/errors.md",sourceDirName:"api",slug:"/api/errors",permalink:"/guides/api/errors",draft:!1,editUrl:"https://github.com/StatusCakeDev/portal/edit/master/guides/api/errors.md",tags:[],version:"current",lastUpdatedAt:1688033525,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{id:"errors",title:"Errors",description:"Learn how handle API errors"},sidebar:"guides",previous:{title:"Ratelimiting",permalink:"/guides/api/ratelimiting"},next:{title:"Parameters",permalink:"/guides/api/parameters"}},l={},p=[{value:"Handling Errors",id:"handling-errors",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The StatusCake API uses conventional HTTP response codes to indicate the\nsuccess or failure of an API request. In general: Codes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"2xx")," range\nindicate success; codes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"4xx")," range indicate a request that failed given\nthe information provided (e.g. a required parameter was omitted or malformed);\nand codes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," range indicate an error with StatusCake servers."),(0,o.kt)("h2",{id:"handling-errors"},"Handling Errors"),(0,o.kt)("p",null,"Errors should be handled appropriately, depending upon the value of the HTTP\nstatus code returned from the API. For example if we wanted to email a member\nof the DevOps team when an uptime check is missing from our monitoring suite we\ncould write the following script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Alert on missing uptime check" showLineNumbers',title:'"Alert',on:!0,missing:!0,uptime:!0,'check"':!0,showLineNumbers:!0},'status_code=$(\n  curl -s https://api.statuscake.com/v1/uptime/123 \\\n    -H "Authorization: Bearer <token>" \\\n    --write-out %{http_code} \\\n    --output /dev/null\n)\n\nif [[ "$status_code" -eq 404 ]] ; then\n  echo "Uptime check (ID: 123) does not exist" | mail -s "Missing uptime check" devops@example.com\nelse\n  exit 0\nfi\n')),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Learn how to handle input parameters and avoid some common pitfalls when\ncreating monitoring resources."))}u.isMDXComponent=!0}}]);