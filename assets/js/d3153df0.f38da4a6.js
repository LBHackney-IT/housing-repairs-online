"use strict";(self.webpackChunkhousing_repairs_online=self.webpackChunkhousing_repairs_online||[]).push([[4879],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4326:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Housing Management System API",u={unversionedId:"housing-management-system-api/intro",id:"housing-management-system-api/intro",title:"Housing Management System API",description:"GitHub Repository",source:"@site/docs/housing-management-system-api/intro.md",sourceDirName:"housing-management-system-api",slug:"/housing-management-system-api/intro",permalink:"/housing-repairs-online/housing-management-system-api/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/housing-management-system-api/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Book a repair",permalink:"/housing-repairs-online/scheduling-api/endpoints/book-appointment"},next:{title:"Endpoints",permalink:"/housing-repairs-online/category/endpoints-2"}},p={},c=[{value:"Frameworks used",id:"frameworks-used",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Health Checks",id:"health-checks",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"housing-management-system-api"},"Housing Management System API"),(0,i.kt)("a",{class:"badge badge--secondary",href:"https://github.com/LBHackney-IT/HousingManagementSystemApi"},"GitHub Repository"),(0,i.kt)("h2",{id:"frameworks-used"},"Frameworks used"),(0,i.kt)("p",null,"Written in .Net"),(0,i.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AUTHENTICATION_IDENTIFIER"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique identifier used to validate access.*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JWT_SECRET"),(0,i.kt)("td",{parentName:"tr",align:null},"A hash secret used for encryption.*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UNIVERSAL_HOUSING_CONNECTION_STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Connection string to Universal Housing database.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../alerting-and-monitoring/intro#azure-component-setup"},"SENTRY_DSN")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.sentry.io/product/sentry-basics/dsn-explainer/"},"Sentry Data Source Name"))))),(0,i.kt)("p",null,"*"," See ",(0,i.kt)("a",{parentName:"p",href:"../apis/authentication"},"Authentication")," for more details."),(0,i.kt)("h2",{id:"health-checks"},"Health Checks"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"../apis/health-checks"},"Health Checks")," for details."),(0,i.kt)("p",null,"The API is determined to be health if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it can connect to the Universal Housing SQL Server database")))}d.isMDXComponent=!0}}]);