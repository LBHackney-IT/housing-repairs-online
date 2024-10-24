"use strict";(self.webpackChunkhousing_repairs_online=self.webpackChunkhousing_repairs_online||[]).push([[576],{2620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(4848),i=t(8453);const s={sidebar_position:1},l="Available appointments",a={id:"scheduling-api/endpoints/appointments",title:"Available appointments",description:"GET: /Appointments/AvailableAppointments",source:"@site/docs/scheduling-api/endpoints/appointments.md",sourceDirName:"scheduling-api/endpoints",slug:"/scheduling-api/endpoints/appointments",permalink:"/housing-repairs-online/scheduling-api/endpoints/appointments",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/housing-repairs-online/tree/main/docs/scheduling-api/endpoints/appointments.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Endpoints",permalink:"/housing-repairs-online/category/endpoints-1"},next:{title:"Book a repair",permalink:"/housing-repairs-online/scheduling-api/endpoints/book-appointment"}},o={},d=[{value:"GET: <code>/Appointments/AvailableAppointments</code>",id:"get-appointmentsavailableappointments",level:2},{value:"Request:",id:"request",level:3},{value:"Authorization",id:"authorization",level:4},{value:"Query Params",id:"query-params",level:4},{value:"Response:",id:"response",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"available-appointments",children:"Available appointments"})}),"\n",(0,r.jsxs)(n.h2,{id:"get-appointmentsavailableappointments",children:["GET: ",(0,r.jsx)(n.code,{children:"/Appointments/AvailableAppointments"})]}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request:"}),"\n",(0,r.jsx)(n.h4,{id:"authorization",children:"Authorization"}),"\n",(0,r.jsxs)(n.p,{children:["Bearer Token ",(0,r.jsx)(n.code,{children:"<token>"})]}),"\n",(0,r.jsx)(n.h4,{id:"query-params",children:"Query Params"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Example value"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sorCode"}),(0,r.jsx)(n.td,{children:"123ABC"}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"locationId"}),(0,r.jsx)(n.td,{children:"333333"}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fromDate"}),(0,r.jsx)(n.td,{children:"2022-03-09T08:00:00Z"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response:"}),"\n",(0,r.jsx)(n.p,{children:"List of available appointment slots from DRS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "repairsProviderDegreeOfPreference": null,\n        "repairsProviderPreferenceDescription": null,\n        "meetsSLA": null,\n        "meetsCustomerPreference": null,\n        "customerDegreeOfPreference": null,\n        "date": "2022-03-15T00:00:00Z",\n        "timeOfDay": {\n            "name": null,\n            "earliestArrivalTime": "2022-03-15T12:00:00Z",\n            "latestArrivalTime": "2022-03-15T16:00:00Z",\n            "latestCompletionTime": "0001-01-01T00:00:00"\n        },\n        "workElementReference": null,\n        "reference": null\n    },\n    {\n        "repairsProviderDegreeOfPreference": null,\n        "repairsProviderPreferenceDescription": null,\n        "meetsSLA": null,\n        "meetsCustomerPreference": null,\n        "customerDegreeOfPreference": null,\n        "date": "2022-03-16T00:00:00Z",\n        "timeOfDay": {\n            "name": null,\n            "earliestArrivalTime": "2022-03-16T08:00:00Z",\n            "latestArrivalTime": "2022-03-16T12:00:00Z",\n            "latestCompletionTime": "0001-01-01T00:00:00"\n        },\n        "workElementReference": null,\n        "reference": null\n    },\n    {\n        "repairsProviderDegreeOfPreference": null,\n        "repairsProviderPreferenceDescription": null,\n        "meetsSLA": null,\n        "meetsCustomerPreference": null,\n        "customerDegreeOfPreference": null,\n        "date": "2022-03-16T00:00:00Z",\n        "timeOfDay": {\n            "name": null,\n            "earliestArrivalTime": "2022-03-16T12:00:00Z",\n            "latestArrivalTime": "2022-03-16T16:00:00Z",\n            "latestCompletionTime": "0001-01-01T00:00:00"\n        },\n        "workElementReference": null,\n        "reference": null\n    }\n]\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(6540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);