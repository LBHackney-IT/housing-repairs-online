"use strict";(self.webpackChunkhousing_repairs_online=self.webpackChunkhousing_repairs_online||[]).push([[4063],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1352:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="Repairs API",p={unversionedId:"repairs-api/intro",id:"repairs-api/intro",title:"Repairs API",description:"GitHub Repository",source:"@site/docs/repairs-api/intro.md",sourceDirName:"repairs-api",slug:"/repairs-api/intro",permalink:"/housing-repairs-online/docs/repairs-api/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/repairs-api/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Look and feel",permalink:"/housing-repairs-online/docs/front-end/look-and-feel"},next:{title:"Endpoints",permalink:"/housing-repairs-online/docs/category/endpoints"}},u={},d=[{value:"Frameworks used",id:"frameworks-used",level:2},{value:"Blog Storage",id:"blog-storage",level:3},{value:"Cosmos DB",id:"cosmos-db",level:3},{value:"Gov Notify",id:"gov-notify",level:3},{value:"User notifications",id:"user-notifications",level:4},{value:"Internal notification email",id:"internal-notification-email",level:4},{value:"Environment variables",id:"environment-variables",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"repairs-api"},"Repairs API"),(0,o.kt)("a",{class:"badge badge--secondary",href:"https://github.com/City-of-Lincoln-Council/housing-repairs-online-api"},"GitHub Repository"),(0,o.kt)("h2",{id:"frameworks-used"},"Frameworks used"),(0,o.kt)("p",null,"Written in .Net"),(0,o.kt)("h3",{id:"blog-storage"},"Blog Storage"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/azure/storage/blobs/storage-blobs-introduction"},"Azure Blob storage")," is Microsoft's object storage solution for the cloud.")),(0,o.kt)("p",null,"Photos uploaded as part of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/repairs-api/endpoints/repair#body"},(0,o.kt)("inlineCode",{parentName:"a"},"description.base64img")," in save repair request body")," are uploaded to a container that can be configured via ",(0,o.kt)("a",{parentName:"p",href:"#blob-env"},"environment variables"),"."),(0,o.kt)("h3",{id:"cosmos-db"},"Cosmos DB"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/introduction"},"Azure Cosmos DB")," is a fully managed NoSQL database service for modern app development.")),(0,o.kt)("p",null,"Submitted repair requests are saved in a container that is configured via ",(0,o.kt)("a",{parentName:"p",href:"#cosmos-env"},"environment variables")," and requests are saved in the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "20B2459F",\n    "Postcode": "M3 0W",\n    "SOR": "N373049",\n    "Address": {\n        "Display": "123 Cute Street, LN1 3AT",\n        "LocationId": "53660030    "\n    },\n    "Location": {\n        "Value": "kitchen",\n        "Display": "Kitchen"\n    },\n    "Problem": {\n        "Value": "cupboards",\n        "Display": "Cupboards, including damaged cupboard doors"\n    },\n    "Issue": {\n        "Value": "doorHangingOff",\n        "Display": "Hanging door"\n    },\n    "ContactPersonNumber": "01234567890",\n    "Description": {\n        "PhotoUrl": "https://housingrepairsonline.blob.core.windows.net/housing-repairs-online/eb5adfb6-ed53-4f3b-90c4-7a54cc36c56a.png",\n        "Text": "Excepturi quod aute "\n    },\n    "ContactDetails": {\n        "Type": "email",\n        "Value": "luna@email.com"\n    },\n    "Time": {\n        "Value": "27th January 2022 12:00pm to 4:00pm",\n        "Display": "27th January 2022 between 12:00pm to 4:00pm"\n    },\n    "_rid": "rKg5ANy0vjoVAAAAAAAAAA==",\n    "_self": "dbs/rKg5AA==/colls/rKg5ANy0vjo=/docs/rKg5ANy0vjoVAAAAAAAAAA==/",\n    "_etag": "\\"0f00dbde-0000-1100-0000-61e5367b0000\\"",\n    "_attachments": "attachments/",\n    "_ts": 1642411643\n}\n')),(0,o.kt)("h3",{id:"gov-notify"},"Gov Notify"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.notifications.service.gov.uk/net.html#net-client-documentation"},"GOV.UK Notify")," lets you send emails, text messages and letters to your users.")),(0,o.kt)("p",null,"Once a repair request is saved into Cosmos DB, two notifications are sent - one\nto the user and one to the email that's configured via ",(0,o.kt)("a",{parentName:"p",href:"#email-env"},"environment variables")),(0,o.kt)("h4",{id:"user-notifications"},"User notifications"),(0,o.kt)("p",null,"Email notification template ID is configured via ",(0,o.kt)("a",{parentName:"p",href:"#n-email-env"},"environment variables"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Suggested email template"),(0,o.kt)("div",null,(0,o.kt)("strong",null,"From:")," Lincoln Repairs Online ",(0,o.kt)("br",null),(0,o.kt)("strong",null,"To:")," ((",(0,o.kt)("code",null,"email")," from ",(0,o.kt)("a",{href:"/docs/repairs-api/endpoints/repair#body"},(0,o.kt)("code",null,"contactDetails.value")),")) ",(0,o.kt)("br",null),(0,o.kt)("strong",null,"Subject:")," Repair details ((",(0,o.kt)("code",null,"repair_ref")," generated when saving into Cosmos DB)) ",(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Your repair has been successfully booked."),(0,o.kt)("p",null,"Your booking details are: ",(0,o.kt)("br",null),"Booking reference: ((",(0,o.kt)("code",null,"repair_ref"),"))",(0,o.kt)("br",null),"Appointment: ((",(0,o.kt)("code",null,"appointment_time")," from ",(0,o.kt)("a",{href:"/docs/repairs-api/endpoints/repair#body"},(0,o.kt)("code",null,"time.display")),"))"),(0,o.kt)("p",null,"You will receive a reminder the day before your appointment"))),(0,o.kt)("p",null,"SMS notification template ID is configured via ",(0,o.kt)("a",{parentName:"p",href:"#n-sms-env"},"environment variables"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Suggested SMS template"),(0,o.kt)("div",null,(0,o.kt)("strong",null,"To:")," ((phone numer from ",(0,o.kt)("a",{href:"/docs/repairs-api/endpoints/repair#body"},(0,o.kt)("code",null,"contactDetails.value")),")) ",(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Lincoln Repairs Online: Your repair has been successfully booked. Your booking reference is ((",(0,o.kt)("code",null,"repair_ref"),")) and your selected appointment date is ((",(0,o.kt)("code",null,"appointment_time"),"  from",(0,o.kt)("a",{href:"/docs/repairs-api/endpoints/repair#body"},(0,o.kt)("code",null,"time.display")),"))."))),(0,o.kt)("h4",{id:"internal-notification-email"},"Internal notification email"),(0,o.kt)("p",null,"Email notification template ID is configured via ",(0,o.kt)("a",{parentName:"p",href:"#i-email-env"},"environment variables"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Suggested email template"),(0,o.kt)("div",null,(0,o.kt)("strong",null,"From:")," Lincoln Repairs Online ",(0,o.kt)("br",null),(0,o.kt)("strong",null,"To:")," ((",(0,o.kt)("code",null,"email")," from ",(0,o.kt)("a",{href:"#email-env"},(0,o.kt)("code",null,"INTERNAL_EMAIL")),")) ",(0,o.kt)("br",null),(0,o.kt)("strong",null,"Subject:")," Repair details ((",(0,o.kt)("code",null,"repair_ref")," generated when saving into Cosmos DB)) ",(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A new online repair has been logged. Please add the repair to universal.",(0,o.kt)("br",null),"The repair details are:",(0,o.kt)("br",null),"Repair reference: ((",(0,o.kt)("code",null,"repair_ref"),"))",(0,o.kt)("br",null),"Property Reference: ((",(0,o.kt)("code",null,"uprn")," from ",(0,o.kt)("a",{href:"/docs/repairs-api/endpoints/repair#body"},(0,o.kt)("code",null,"address.locationId")),"))",(0,o.kt)("br",null),"Address: ((",(0,o.kt)("code",null,"uprn")," from ",(0,o.kt)("a",{href:"/docs/repairs-api/endpoints/repair#body"},(0,o.kt)("code",null,"address.display")),"))",(0,o.kt)("br",null),"SoR: ((",(0,o.kt)("code",null,"sor")," generated when saving into Cosmos DB ))",(0,o.kt)("br",null),"Description: ((",(0,o.kt)("code",null,"repair_desc")," from ",(0,o.kt)("a",{href:"/docs/repairs-api/endpoints/repair#body"},(0,o.kt)("code",null,"description.text")),"))",(0,o.kt)("br",null),"Contact number: ((",(0,o.kt)("code",null,"contact_no")," from ",(0,o.kt)("a",{href:"/docs/repairs-api/endpoints/repair#body"},(0,o.kt)("code",null,"contactPersonNumber")),"))",(0,o.kt)("br",null),"Photos uploaded: ((",(0,o.kt)("code",null,"image_1"),"))",(0,o.kt)("br",null)))),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AUTHENTICATION_IDENTIFIER"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"JWT_SECRET"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ADDRESSES_API_URL"),(0,o.kt)("td",{parentName:"tr",align:null},"Address API URL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/scheduling-api/intro"},"SCHEDULING_API_URL")),(0,o.kt)("td",{parentName:"tr",align:null},"Scheduling API URL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{id:"cosmos-env"},"COSMOS_ENDPOINT_URL")),(0,o.kt)("td",{parentName:"tr",align:null},"Cosmos endpoint URL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"COSMOS_AUTHORIZATION_KEY"),(0,o.kt)("td",{parentName:"tr",align:null},"Cosmos authorization key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"COSMOS_DATABASE_ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Cosmos database name, e.g.: ",(0,o.kt)("inlineCode",{parentName:"td"},"housing-repairs-online"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"COSMOS_CONTAINER_ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Cosmos table name, e.g.: ",(0,o.kt)("inlineCode",{parentName:"td"},"repairs-requests"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{id:"blob-env"},"AZURE_STORAGE_CONNECTION_STRING")),(0,o.kt)("td",{parentName:"tr",align:null},"Blob storage connection string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"STORAGE_CONTAINER_NAME"),(0,o.kt)("td",{parentName:"tr",align:null},"Blob storage container name, e.g.: ",(0,o.kt)("inlineCode",{parentName:"td"},"housing-repairs-online"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GOV_NOTIFY_KEY"),(0,o.kt)("td",{parentName:"tr",align:null},"Gov notification key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{id:"n-sms-env"},"CONFIRMATION_SMS_NOTIFY_TEMPLATE_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"Id of the template that will be sent to customers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{id:"n-email-env"},"CONFIRMATION_EMAIL_NOTIFY_TEMPLATE_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"Id of the template that will be sent to customers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{id:"i-email-env"},"INTERNAL_EMAIL_NOTIFY_TEMPLATE_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"Id of the template that will be sent to staff")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{id:"email-env"},"INTERNAL_EMAIL")),(0,o.kt)("td",{parentName:"tr",align:null},"Email to which internal staff emails will be sent to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DAYS_UNTIL_IMAGE_EXPIRY"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of days attached images can be accessible for")))))}m.isMDXComponent=!0}}]);