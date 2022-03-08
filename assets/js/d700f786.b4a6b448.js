"use strict";(self.webpackChunkhousing_repairs_online=self.webpackChunkhousing_repairs_online||[]).push([[3511],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2849:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={sidebar_position:1},s="Front end",u={unversionedId:"front-end/frameworks-used",id:"front-end/frameworks-used",title:"Front end",description:"GitHub Repository",source:"@site/docs/front-end/frameworks-used.md",sourceDirName:"front-end",slug:"/front-end/frameworks-used",permalink:"/housing-repairs-online/docs/front-end/frameworks-used",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/frameworks-used.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Health Checks",permalink:"/housing-repairs-online/docs/apis/health-checks"},next:{title:"Look and feel",permalink:"/housing-repairs-online/docs/front-end/look-and-feel"}},p={},c=[{value:"Frameworks used",id:"frameworks-used",level:2},{value:"Next.js",id:"nextjs",level:3},{value:"Environment variables",id:"environment-variables",level:2},{value:"Monitoring and alerting",id:"monitoring-and-alerting",level:2}],d={toc:c};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"front-end"},"Front end"),(0,i.kt)("a",{class:"badge badge--secondary",href:"https://github.com/City-of-Lincoln-Council/housing-repairs-online-frontend"},"GitHub Repository"),(0,i.kt)("h2",{id:"frameworks-used"},"Frameworks used"),(0,i.kt)("p",null,"The frontend of the Housing Repairs Online app is built using Next.js and\ndeployed as an Azure static web app and functions."),(0,i.kt)("h3",{id:"nextjs"},"Next.js"),(0,i.kt)("p",null,"Is a react framework that provides client-side and server-side rendering."),(0,i.kt)("p",null,"Source code for the app could be ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/City-of-Lincoln-Council/housing-repairs-online-frontend"},"found here"),"."),(0,i.kt)("p",null,"The frontend is currently deployed to Azure static web using github actions."),(0,i.kt)("p",null,"Each next.js API endpoint is deployed as an Azure function."),(0,i.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"The following environment variables need to be set in the Azure portal to enable\nthe frontend app to make calls to be Repairs API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/repairs-api/intro"},(0,i.kt)("inlineCode",{parentName:"a"},"REPAIRS_API_BASE_URL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REPAIRS_API_IDENTIFIER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SENTRY_DSN"))),(0,i.kt)("p",null,"Any environment variable that needs to be used on the client side should be set\nat deployment time in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/City-of-Lincoln-Council/housing-repairs-online-frontend/blob/main/.github/workflows/azure-static-web-apps-purple-desert-05060ea03.yml#L100"},(0,i.kt)("inlineCode",{parentName:"a"},"Build And Deploy")," job"),"."),(0,i.kt)("h2",{id:"monitoring-and-alerting"},"Monitoring and alerting"),(0,i.kt)("p",null,"Sentry is used for monitoring and alerting."))}f.isMDXComponent=!0}}]);