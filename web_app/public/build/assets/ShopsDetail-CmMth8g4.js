import{d as k,r as p,o as a,c as l,b as d,u as i,a as e,t as r,f as L,g as c,p as u,z as S,S as C,F as f,Z as $,e as q}from"./app-B5kgQ0yE.js";import{_ as b}from"./Skeleton.vue_vue_type_script_setup_true_lang-Dr4Mbjo4.js";import{_ as B}from"./Product.vue_vue_type_script_setup_true_lang-k_r7nCH9.js";import{_ as P}from"./Frontend.vue_vue_type_script_setup_true_lang-D_fISIkY.js";import{c as j}from"./createLucideIcon-DvLFynmH.js";import"./utils--eAPk3wG.js";import"./bundle-mjs-Dk7hgz7r.js";import"./no-image-DVr5fu4Z.js";import"./Header.vue_vue_type_script_setup_true_lang-C_yve1l9.js";import"./Input.vue_vue_type_script_setup_true_lang-DlDJHqPY.js";import"./index-BItyHX7r.js";import"./shadcn-BWvbMO9Q.js";import"./circle-user-C3Zi1lEB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Footer.vue_vue_type_script_setup_true_lang-DjCmEaAT.js";/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=j("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),T={class:"container py-4 space-y-8 min-h-screen"},z={class:"flex items-center justify-between border-[1px] rounded-lg p-3 shadow-sm"},F={class:"flex gap-4 items-center"},J={class:"relative w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-200 p-1"},V=["src","alt"],A={class:"space-y-4"},H={class:"font-semibold text-xl"},M={class:"text-[12px]"},N=e("span",{class:"font-medium text-tomato"}," Alamat : ",-1),U={class:"space-y-2 pb-2"},E=e("h4",{class:"text-xs font-medium"},"Kontak Unit Layanan",-1),I={class:"space-x-2"},O=["href"],K={class:"grid grid-cols-3 divide-x-[1px] divide-gray-300 w-[500px]"},W={class:"text-center px-2"},Z={class:"font-semibold text-lg"},G=e("p",{class:"font-normal text-xs"},"Produk dan Jasa",-1),Q=e("div",{class:"text-center px-2"},[e("h4",{class:"font-semibold text-lg"},"08.00 - 15.00"),e("p",{class:"font-normal text-xs"},"Jam Operasional UPJ")],-1),R={class:"flex items-start justify-between"},X=e("h2",{class:"text-sm font-semibold text-tomato lg:text-lg"}," Daftar Produk dan Jasa ",-1),Y=["value"],ee={class:"w-full grid grid-cols-2 lg:grid-cols-5 gap-3"},te={class:"space-y-3"},se={class:"space-y-2"},oe={class:"flex items-center justify-between"},ae=["disabled"],le=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",class:"w-6 h-6"},[e("path",{fill:"currentColor",d:"m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"})],-1),re=[le],ne={class:"text-sm font-medium lg:font-normal"},de=["disabled"],ie=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",class:"w-6 h-6"},[e("path",{fill:"currentColor",d:"M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"})],-1),ce=[ie],pe={layout:P},$e=k({...pe,__name:"ShopsDetail",props:{employees:{},products:{},shop:{}},setup(v){const y=p([{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"75",value:75},{label:"100",value:100}]),_=v,h=p(!1),m=p(_.products.meta.per_page),g=t=>{const o=p({per_page:m.value});t>1&&Object.assign(o.value,{page:t}),f.get(route("frontend.shops.detail",_.shop.slug),o.value,{preserveState:!0,onStart:()=>h.value=!0,onError:s=>console.log(s),onFinish:()=>h.value=!1})},w=()=>f.get(route("frontend.shops")),x=t=>`https://wa.me/${t}?text=Saya%20tertarik%20dengan%20produk%20anda`;return(t,o)=>(a(),l(c,null,[d(i($),{title:t.shop.name},null,8,["title"]),e("div",T,[e("div",z,[e("div",F,[e("button",{type:"button",class:"bg-gray-100 p-3 rounded-full border border-gray-200 hover:bg-gray-300",onClick:w},[d(i(D),{class:"h-5 w-5"})]),e("div",J,[e("img",{src:t.shop.image,alt:t.shop.slug,class:"object-cover h-full rounded-full"},null,8,V)]),e("div",A,[e("div",null,[e("h2",H,r(t.shop.name),1),e("p",M,[N,L(" "+r(t.shop.address),1)])]),e("div",U,[E,e("div",I,[(a(!0),l(c,null,u(t.employees.data,(s,n)=>(a(),l("a",{href:x(s.whatsapp),class:"text-white bg-yaleblue hover:bg-blue-950 focus:ring-2 focus:ring-yaleblue font-medium rounded-lg text-[12px] px-5 py-2",key:n},r(s.name),9,O))),128))])])])]),e("div",K,[e("div",W,[e("h4",Z,r(t.shop.product_count),1),G]),Q])]),e("div",R,[X,S(e("select",{class:"bg-nasplesyellow border border-white text-[12px] font-semibold rounded focus:ring-yellow-500 focus:border-yellow-500 p-1 w-24","onUpdate:modelValue":o[0]||(o[0]=s=>m.value=s),onChange:o[1]||(o[1]=s=>g(1))},[(a(!0),l(c,null,u(y.value,(s,n)=>(a(),l("option",{value:s.value,key:n},r(s.label)+" data ",9,Y))),128))],544),[[C,m.value]])]),e("div",ee,[h.value?(a(),l(c,{key:1},u(5,s=>e("div",te,[d(i(b),{class:"h-[200px] w-full rounded-xl"}),e("div",se,[d(i(b),{class:"h-4 w-full"}),d(i(b),{class:"h-4 w-full"})])])),64)):(a(!0),l(c,{key:0},u(t.products.data,(s,n)=>(a(),q(B,{product:s,key:n},null,8,["product"]))),128))]),e("div",oe,[e("button",{type:"button",class:"bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500",disabled:t.products.meta.current_page===1,onClick:o[2]||(o[2]=s=>g(t.products.meta.current_page-1))},re,8,ae),e("div",ne," halaman "+r(t.products.meta.current_page)+" dari "+r(t.products.meta.total)+" Data ",1),e("button",{type:"button",class:"bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500",disabled:t.products.meta.current_page===t.products.meta.last_page,onClick:o[3]||(o[3]=s=>g(t.products.meta.current_page+1))},ce,8,de)])])],64))}});export{$e as default};
