"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[473],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6775),s=a(1980),u=a(7392),c=a(12);function f(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:f(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:a,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=null!=s?s:f;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var k=a(2389);const g="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:f}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(f(t),s(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{var n;const t=c.indexOf(e.currentTarget)+1;a=null!=(n=c[t])?n:c[0];break}case"ArrowLeft":{var r;const t=c.indexOf(e.currentTarget)-1;a=null!=(r=c[t])?r:c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},9682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>f});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={id:"backoff",title:"Backoff Strategies",description:"Learn about the available backoff strategies for request retries"},s=void 0,u={unversionedId:"sdks/backoff",id:"sdks/backoff",title:"Backoff Strategies",description:"Learn about the available backoff strategies for request retries",source:"@site/guides/sdks/backoff.md",sourceDirName:"sdks",slug:"/sdks/backoff",permalink:"/guides/sdks/backoff",draft:!1,editUrl:"https://github.com/StatusCakeDev/portal/edit/master/guides/sdks/backoff.md",tags:[],version:"current",lastUpdatedAt:1688033525,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{id:"backoff",title:"Backoff Strategies",description:"Learn about the available backoff strategies for request retries"},sidebar:"guides",previous:{title:"Configuration",permalink:"/guides/sdks/configuration"},next:{title:"Alpha Releases",permalink:"/guides/sdks/alpha"}},c={},f=[{value:"Constant Backoff",id:"constant-backoff",level:2},{value:"Exponential Backoff",id:"exponential-backoff",level:2},{value:"Linear Backoff",id:"linear-backoff",level:2}],p={toc:f};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a request fails it may be desirable to retry the request in the future.\nFor this the SDKs employ a couple of strategies to give the best chance of a\nsuccessful request."),(0,r.kt)("h2",{id:"constant-backoff"},"Constant Backoff"),(0,r.kt)("p",null,"A constant backoff applies a fixed period of time between each failed request."),(0,r.kt)(o.Z,{groupId:"languages",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Constant Backoff" showLineNumbers {4,7,15-17}',title:'"Constant','Backoff"':!0,showLineNumbers:!0,"{4,7,15-17}":!0},'package main\n\nimport (\n  "time"\n\n  "github.com/StatusCakeDev/statuscake-go"\n  "github.com/StatusCakeDev/statuscake-go/backoff"\n  "github.com/StatusCakeDev/statuscake-go/credentials"\n)\n\nfunc main() {\n  bearer := credentials.NewBearerWithStaticToken("my-api-token")\n  client := statuscake.NewClient(\n    statuscake.WithRequestCredentials(bearer),\n    statuscake.WithBackoff(backoff.Constant{\n      BaseDelay: time.Duration(5) * time.Second,\n    }),\n  )\n}\n')))),(0,r.kt)("h2",{id:"exponential-backoff"},"Exponential Backoff"),(0,r.kt)("p",null,"An exponential backoff applies an exponential function on the time between each\nfailed request."),(0,r.kt)(o.Z,{groupId:"languages",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Exponential Backoff" showLineNumbers {4,7,15-20}',title:'"Exponential','Backoff"':!0,showLineNumbers:!0,"{4,7,15-20}":!0},'package main\n\nimport (\n  "time"\n\n  "github.com/StatusCakeDev/statuscake-go"\n  "github.com/StatusCakeDev/statuscake-go/backoff"\n  "github.com/StatusCakeDev/statuscake-go/credentials"\n)\n\nfunc main() {\n  bearer := credentials.NewBearerWithStaticToken("my-api-token")\n  client := statuscake.NewClient(\n    statuscake.WithRequestCredentials(bearer),\n    statuscake.WithBackoff(backoff.Exponential{\n      BaseDelay:  time.Duration(1) * time.Second,\n      Multiplier: 2.0,\n      Jitter:     0.2,\n      MaxDelay:   time.Duration(30) * time.Second,\n    }),\n  )\n}\n')))),(0,r.kt)("h2",{id:"linear-backoff"},"Linear Backoff"),(0,r.kt)("p",null,"Linear backoff applies a linear functions on the time between each failed\nrequest."),(0,r.kt)(o.Z,{groupId:"languages",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Linear Backoff" showLineNumbers {4,7,15-20}',title:'"Linear','Backoff"':!0,showLineNumbers:!0,"{4,7,15-20}":!0},'package main\n\nimport (\n  "time"\n\n  "github.com/StatusCakeDev/statuscake-go"\n  "github.com/StatusCakeDev/statuscake-go/backoff"\n  "github.com/StatusCakeDev/statuscake-go/credentials"\n)\n\nfunc main() {\n  bearer := credentials.NewBearerWithStaticToken("my-api-token")\n  client := statuscake.NewClient(\n    statuscake.WithRequestCredentials(bearer),\n    statuscake.WithBackoff(backoff.Linear{\n      BaseDelay:  time.Duration(1) * time.Second,\n      Jitter:     0.2,\n      MaxDelay:   time.Duration(30) * time.Second,\n    }),\n  )\n}\n')))))}d.isMDXComponent=!0}}]);