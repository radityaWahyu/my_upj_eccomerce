import{d as x,o as a,c as n,a as t,n as j,t as w,r as _,b as c,w as b,e as $,u,F as k,g as B,h as o,Z as z,f as V}from"./app-Dfzx8MWc.js";import{_ as P,a as N}from"./index-Fp4fi9lO.js";import{_ as E}from"./Input.vue_vue_type_script_setup_true_lang-NO41PE8l.js";import{_ as S}from"./DataTable.vue_vue_type_script_setup_true_lang-DdANXjqI.js";import{_ as D}from"./ComboBox.vue_vue_type_script_setup_true_lang-DoHRo6Sr.js";import{_ as F}from"./index-CK4-x1fb.js";import{E as K,a as T}from"./eye-CzeYOT0m.js";import{B as H}from"./Backoffice-UNxnvJsN.js";import{w as U}from"./index-D9vEFx1F.js";/* empty css            */import"./utils--eAPk3wG.js";import"./bundle-mjs-Dk7hgz7r.js";import"./shadcn-BWvbMO9Q.js";import"./Skeleton.vue_vue_type_script_setup_true_lang-CwX4h7MU.js";import"./AlertTitle.vue_vue_type_script_setup_true_lang-CBQCM0vd.js";import"./TableRow.vue_vue_type_script_setup_true_lang-Do6-hwVN.js";import"./createLucideIcon-CUtAwbGf.js";import"./index-C_U3cZmw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./store-lQ5NO2CO.js";import"./circle-user-Btxun51b.js";import"./badge-info-BDTBR86Q.js";import"./triangle-alert-iGUQzX3d.js";const L={key:0,class:"inline-flex items-center justify-start"},M=t("span",{class:"inline-flex text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-green-700 mr-2 size-2 p-0 border border-lime-500 bg-lime-500"},null,-1),O=t("span",{class:"text-xs font-medium text-green-700"},"Aktif",-1),W=[M,O],Z={key:1,class:"inline-flex items-center justify-start"},A=t("span",{class:"inline-flex border text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-amber-700 mr-2 size-2 p-0 border-yellow-400 bg-yellow-400"},null,-1),I=t("span",{class:"text-xs font-medium text-amber-600"},"Nonaktif",-1),q=[A,I],G=x({__name:"CustomerEnabledBox",props:{enabled:{type:Boolean}},setup(d){return(s,m)=>(a(),n("div",null,[s.enabled?(a(),n("div",L,W)):(a(),n("div",Z,q))]))}}),J={key:0,class:"inline-flex items-center justify-start"},Q=t("span",{class:"inline-flex text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-green-700 mr-2 size-2 p-0 border border-lime-500 bg-lime-500"},null,-1),R=t("span",{class:"text-xs font-medium text-green-700"},"Terverifikasi",-1),X=[Q,R],Y={key:1,class:"inline-flex items-center justify-start"},ee=t("span",{class:"inline-flex border text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-amber-700 mr-2 size-2 p-0 border-yellow-400 bg-yellow-400"},null,-1),te=t("span",{class:"text-xs font-medium text-amber-600"},"Belum Verifikasi",-1),se=[ee,te],ae=x({__name:"CustomerVerifiedBox",props:{verified:{type:Boolean}},setup(d){return(s,m)=>(a(),n("div",null,[s.verified?(a(),n("div",J,X)):(a(),n("div",Y,se))]))}}),oe={class:"flex items-center gap-3"},ne={class:"relative size-min"},le=t("div",{class:"flex items-center justify-center size-3.5"},[t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"stroke-inherit"},[t("path",{d:"M16.6668 17.5V15.8333C16.6668 14.9492 16.3157 14.1014 15.6905 13.4763C15.0654 12.8512 14.2176 12.5 13.3335 12.5H6.66683C5.78277 12.5 4.93493 12.8512 4.3098 13.4763C3.68469 14.1014 3.3335 14.9492 3.3335 15.8333V17.5"}),t("path",{d:"M9.99984 10.0002C11.8408 10.0002 13.3332 8.50775 13.3332 6.66683C13.3332 4.82588 11.8408 3.3335 9.99984 3.3335C8.15889 3.3335 6.6665 4.82588 6.6665 6.66683C6.6665 8.50775 8.15889 10.0002 9.99984 10.0002Z"})])],-1),re=[le],ie={class:"absolute bottom-0 right-0 translate-y-2 rounded-full"},ce={key:0,class:"inline-flex text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-green-700 size-2 p-0 bg-lime-500 box-content border-2 border-white"},ue={key:1,class:"inline-flex text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-yellow-700 size-2 p-0 bg-yellow-500 box-content border-2 border-white"},de={class:"font-semibold text-sm capitalize"},me={class:"text-xs text-muted-foreground capitalize"},pe=x({__name:"CustomerNameBox",props:{customer:{}},setup(d){return(s,m)=>(a(),n("div",oe,[t("div",ne,[t("div",{class:j([{"bg-blue-700 stroke-white":s.customer.enabled,"bg-gray-300 stroke-gray-700":!s.customer.enabled},"relative box-content flex items-center justify-center overflow-hidden rounded-full size-8"])},re,2),t("div",ie,[s.customer.enabled?(a(),n("span",ce)):(a(),n("span",ue))])]),t("div",null,[t("h3",de,w(s.customer.name),1),t("p",me,w(s.customer.address),1)])]))}}),fe={class:"text-center"},_e=x({__name:"CustomerButton",props:{customer:{}},emits:["updated"],setup(d,{emit:s}){const m=d,g=s,p=_(),r=f=>{k.put(route("backoffice.customer.update",m.customer.id),{status:f},{onStart:()=>p.value=!0,onSuccess:()=>g("updated",!0),onError:l=>console.log(l),onFinish:()=>p.value=!1})};return(f,l)=>(a(),n("div",fe,[c(u(F),{type:"button",variant:"secondary",size:"icon",onClick:l[0]||(l[0]=v=>r(!f.customer.enabled))},{default:b(()=>[f.customer.enabled?(a(),$(u(K),{key:0,class:"w-4 h-4 text-blue-600"})):(a(),$(u(T),{key:1,class:"w-4 h-4 text-blue-600"}))]),_:1})]))}}),xe={class:"space-y-2 mx-auto w-full"},ge={class:"space-y-2"},he=t("div",{class:"flex items-center justify-between"},[t("h1",{class:"text-lg font-semibold md:text-xl"},"Pelanggan"),t("div",{class:"flex gap-2"})],-1),be={class:"w-full"},ve={class:"flex items-center justify-between py-4"},ye={class:"inline-flex items-center gap-3"},we=t("p",{class:"text-xs font-medium"},"Data Perpage :",-1),$e={layout:H},qe=x({...$e,__name:"Index",props:{customers:{},params:{}},setup(d){var y;const s=d,m=[{accessorKey:"name",header:({column:e})=>o("h2",{class:"w-full flex justify-between text-left px-0"},"Nama Pelanggan"),cell:({row:e})=>o(pe,{customer:e.original})},{accessorKey:"phone",header:({column:e})=>o("p",{class:"w-full flex justify-between text-left px-0"},"No Telepon"),cell:({row:e})=>o("h2",{},e.original.phone)},{accessorKey:"whatsapp",header:({column:e})=>o("p",{class:"w-full flex justify-between text-left px-0"},"No Whatsapp"),cell:({row:e})=>o("h2",{},e.original.whatsapp)},{accessorKey:"verified",header:({column:e})=>o("p",{class:"w-full flex justify-between text-left px-0"},"verified"),cell:({row:e})=>o(ae,{verified:e.original.verified})},{accessorKey:"enabled",header:({column:e})=>o("p",{class:"w-full flex justify-between text-left px-0"},"status"),cell:({row:e})=>o(G,{enabled:e.original.enabled})},{id:"actions",enableHiding:!1,cell:({row:e})=>(e.original.id,o(_e,{customer:e.original,onUpdated:()=>l(s.customers.meta.current_page)}))}],g=_([{value:10,label:10},{value:25,label:25},{value:50,label:50},{value:100,label:100}]),p=_(!1),r=_((y=s.params)==null?void 0:y.search),f=_(null),l=e=>{const i=_({page:e,perPage:s.customers.meta.per_page});r!==null&&Object.assign(i.value,{search:r}),k.get(route("backoffice.customer.index"),i.value,{only:["customers","params"],preserveState:!0,preserveScroll:!0,onStart:()=>p.value=!0,onFinish:()=>p.value=!1})},v=e=>l(e),C=()=>l(1);return U(r,()=>{l(s.customers.meta.current_page)},{debounce:500,maxWait:1e3}),(e,i)=>(a(),n(B,null,[c(u(z),{title:"Data Pelanggan"}),t("div",xe,[t("div",ge,[he,c(u(N),{class:"bg-secondary shadow-inner shadow-gray-100 max-w-2xl"},{default:b(()=>[c(u(P),{class:"text-xs"},{default:b(()=>[V(" Halaman untuk memanajemen Pelanggan yang telah mendaftar pada sistem ini. ")]),_:1})]),_:1})]),t("div",be,[t("div",ve,[c(u(E),{placeholder:"Cari pelanggan...",modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=h=>r.value=h),class:"w-1/2 bg-white"},null,8,["modelValue"]),t("div",ye,[we,c(D,{lists:g.value,modelValue:e.customers.meta.per_page,"onUpdate:modelValue":i[1]||(i[1]=h=>e.customers.meta.per_page=h),onChange:C,class:"w-100"},null,8,["lists","modelValue"])])]),c(S,{ref_key:"customersTable",ref:f,columns:m,data:e.customers.data,"current-page":e.customers.meta.current_page,"last-page":e.customers.meta.last_page,"prev-page":e.customers.meta.current_page,"next-page":e.customers.meta.to,total:e.customers.meta.total,loading:p.value,"per-page":e.customers.meta.per_page,onChangePage:v},null,8,["data","current-page","last-page","prev-page","next-page","total","loading","per-page"])])])],64))}});export{qe as default};
