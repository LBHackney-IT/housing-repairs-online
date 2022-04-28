"use strict";(self.webpackChunkhousing_repairs_online=self.webpackChunkhousing_repairs_online||[]).push([[8023],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1918:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},s="Civica Universal Housing Integration",p={unversionedId:"spikes/uh-integration",id:"spikes/uh-integration",title:"Civica Universal Housing Integration",description:"Introduction",source:"@site/docs/spikes/uh-integration.md",sourceDirName:"spikes",slug:"/spikes/uh-integration",permalink:"/housing-repairs-online/spikes/uh-integration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spikes/uh-integration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Spikes",permalink:"/housing-repairs-online/category/spikes"},next:{title:"DRS Interfaces and Workflow",permalink:"/housing-repairs-online/spikes/drs-interface"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Background",id:"background",level:2},{value:"Options",id:"options",level:2},{value:"1. Export valid properties",id:"1-export-valid-properties",level:3},{value:"2. Create a database view or stored procedure to provide required data",id:"2-create-a-database-view-or-stored-procedure-to-provide-required-data",level:3},{value:"3. Use Civica UH database directly",id:"3-use-civica-uh-database-directly",level:3},{value:"Summary",id:"summary",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Appendix A",id:"appendix-a",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"civica-universal-housing-integration"},"Civica Universal Housing Integration"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Civica Universal Housing is a Housing Management System (HMS) which is used at Lincoln to manage social housing residents, properties and tenancies."),(0,i.kt)("p",null,"The Housing Repairs Online service has a need to lookup properties that are valid for reporting repairs against using the service."),(0,i.kt)("p",null,"This need will be facilitated by using Civica Universal Housing to provide details of valid properties."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"Civica Universal Housing, UH, is a closed system which doesn\u2019t provide programmatic access (i.e. an API) for querying properties (or any other information)."),(0,i.kt)("p",null,"UH uses a database for storing its data.\nWe\u2019ve been provided with the database SQL that would be required to query UH for property details (see ",(0,i.kt)("a",{parentName:"p",href:"#appendix-a"},"Appendix A"),")."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"The following are possible approaches to using property information from UH:"),(0,i.kt)("h3",{id:"1-export-valid-properties"},"1. Export valid properties"),(0,i.kt)("p",null,"Valid property information could be exported by querying the UH database and provided in a suitable format that could be used by our service."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Pros:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Very simple to extract"),(0,i.kt)("li",{parentName:"ul"},"Quick to set up"),(0,i.kt)("li",{parentName:"ul"},"Would be agnostic of UH schema changes")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Cons:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"May become outdated as property changes are made to UH"),(0,i.kt)("li",{parentName:"ul"},"Would need a process to maintain exported property data"),(0,i.kt)("li",{parentName:"ul"},"Requires database level access, which may not be possible at all Local Authorities")),(0,i.kt)("h3",{id:"2-create-a-database-view-or-stored-procedure-to-provide-required-data"},"2. Create a database view or stored procedure to provide required data"),(0,i.kt)("p",null,"A database view or stored procedure could be created that would provide property details."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Pros:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy to create"),(0,i.kt)("li",{parentName:"ul"},"Data would always be current/up to date"),(0,i.kt)("li",{parentName:"ul"},"Would be agnostic of UH schema changes")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Cons:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requires database level access, which may not be possible at all Local Authorities"),(0,i.kt)("li",{parentName:"ul"},"Local Authorities may not allow creation of views"),(0,i.kt)("li",{parentName:"ul"},"Needing to prepare an external system creates an additional adoption dependency")),(0,i.kt)("h3",{id:"3-use-civica-uh-database-directly"},"3. Use Civica UH database directly"),(0,i.kt)("p",null,"Use database access to retrieve current property details from a UH database."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Pros:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Property details will always be current"),(0,i.kt)("li",{parentName:"ul"},"No external dependency maintenance required")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Cons:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Need to understand UH schema"),(0,i.kt)("li",{parentName:"ul"},"Time consuming (possibly)"),(0,i.kt)("li",{parentName:"ul"},"Requires database level access, which may not be possible at all Local Authorities")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Although options 1 and 2 are simple in nature and would be quick to deliver, they have major drawbacks of stale data and external dependencies respectively which make them undesirable."),(0,i.kt)("p",null,"Option 3 could be slower to implement but removes external dependencies and would also provide property details which would always be current."),(0,i.kt)("p",null,"Each of the options require database level access, which would need to be provided by the Local Authority requiring the service."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"I recommend using option 3 to create an API over the Universal Housing database such that current data is always available."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"appendix-a"},"Appendix A"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pr.prop_ref,\n       pr.u_nlpguprn,\n       Rtrim(pr.post_desig) + ' '\n       + Replace(pr.short_address, Rtrim(pr.post_desig), '')\n       + pr.post_code  AS address,\n       ptype.lu_desc   AS 'prop_type',\n       pr.sheltered,\n       pr.num_bedrooms AS 'beds',\n       pr.u_blk_floors AS 'floors',\n       ten.tenure\nFROM   property AS pr\n       --rent details\n       LEFT OUTER JOIN rent AS r\n                    ON pr.prop_ref = r.prop_ref\n       --tenancy\n       LEFT OUTER JOIN tenagree AS ten\n                    ON pr.prop_ref = ten.prop_ref\n       --property type description\n       LEFT OUTER JOIN (SELECT [lu_ref],\n                               [lu_desc]\n                        FROM   [UHLive].[dbo].[lookup]\n                        WHERE  lu_type = 'GPT') AS ptype\n                    ON r.prop_type = ptype.lu_ref\nWHERE  level_code IN ( '2' )\n       AND eot = '1900-01-01 00:00:00'\n\n")))}m.isMDXComponent=!0}}]);