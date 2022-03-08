"use strict";(self.webpackChunkhousing_repairs_online=self.webpackChunkhousing_repairs_online||[]).push([[3294],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9209:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return h},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},c="Health Checks",s={unversionedId:"apis/health-checks",id:"apis/health-checks",title:"Health Checks",description:"Each API exposes a /health endpoint that provides a response based on the health of the API.",source:"@site/docs/apis/health-checks.md",sourceDirName:"apis",slug:"/apis/health-checks",permalink:"/housing-repairs-online/docs/apis/health-checks",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/apis/health-checks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API Authentication",permalink:"/housing-repairs-online/docs/apis/authentication"},next:{title:"Front end",permalink:"/housing-repairs-online/docs/front-end/frameworks-used"}},p={},h=[{value:"Endpoints",id:"endpoints",level:2},{value:"GET: <code>/health</code>",id:"get-health",level:4},{value:"Response",id:"response",level:4},{value:"Azure Configuration",id:"azure-configuration",level:2}],u={toc:h};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"health-checks"},"Health Checks"),(0,a.kt)("p",null,"Each API exposes a ",(0,a.kt)("inlineCode",{parentName:"p"},"/health")," endpoint that provides a response based on the health of the API."),(0,a.kt)("p",null,"The basis of health is specific to each API and further information is detailed within API specific documentation."),(0,a.kt)("h2",{id:"endpoints"},"Endpoints"),(0,a.kt)("h4",{id:"get-health"},"GET: ",(0,a.kt)("inlineCode",{parentName:"h4"},"/health")),(0,a.kt)("h4",{id:"response"},"Response"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Healthy")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"Unhealthy")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"Degraded")),(0,a.kt)("h2",{id:"azure-configuration"},"Azure Configuration"),(0,a.kt)("p",null,"App services in Azure allow configuring health checks. For more information see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check"},"here"),"."),(0,a.kt)("p",null,"To configure a health check:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the App Service."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Health check")," in the left navigation pane."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Enable"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter path of health check endpoint."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Save"))),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Configure a health check",src:n(4181).Z,width:"802",height:"411"})),(0,a.kt)("p",null,"After specifying the health check endpoint, if HTTPS redirect is enabled within the application (as is the default for .Net Web APIs), then ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPS Only")," setting need to be turned on."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the App Service."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"TLS/SSL settings")," in the left navigation pane."),(0,a.kt)("li",{parentName:"ol"},"Toggle ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTPS Only")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"On"))),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Toggle HTTPS Only to On",src:n(8707).Z,width:"679",height:"391"})))}d.isMDXComponent=!0},4181:function(e,t,n){t.Z=n.p+"assets/images/Configure-health-check-b8567ca7494608e974920e6f8a175cee.png"},8707:function(e,t,n){t.Z=n.p+"assets/images/Enable-HTTPS-Only-567f70f5e548b40f4cd8fb983fc023bb.png"}}]);