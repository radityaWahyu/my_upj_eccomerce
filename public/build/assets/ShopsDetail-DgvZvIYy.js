import{d as L,r as p,o as a,c as l,b as d,u as n,a as e,t as r,f as y,g as c,p as u,z as S,S as $,i as f,F as v,Z as j,e as q}from"./app-D3r1GT50.js";import{_}from"./Skeleton.vue_vue_type_script_setup_true_lang-CxRkNHAK.js";import{_ as B}from"./Product.vue_vue_type_script_setup_true_lang-4HzPbHqN.js";import{_ as P}from"./Frontend.vue_vue_type_script_setup_true_lang-ECWUovbR.js";import{c as T}from"./createLucideIcon-D9G94eeu.js";import{O as D}from"./octagon-alert-CX2ycubN.js";/* empty css            */import"./utils--eAPk3wG.js";import"./bundle-mjs-Dk7hgz7r.js";import"./no-image-DVr5fu4Z.js";import"./Header.vue_vue_type_script_setup_true_lang-DLucFlDa.js";import"./Input.vue_vue_type_script_setup_true_lang-CmDk1Kh3.js";import"./index-5S_sLwX-.js";import"./shadcn-BWvbMO9Q.js";import"./circle-user-CeX6Z6zw.js";import"./Footer.vue_vue_type_script_setup_true_lang-DXquRZcT.js";/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=T("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),z={class:"container py-4 space-y-8 min-h-screen"},A={class:"flex flex-col gap-3 lg:gap-0 lg:flex-row items-center justify-between border-[1px] rounded-lg py-3 shadow-sm"},F={class:"flex flex-col lg:flex-row gap-4 items-center"},J={class:"flex items-center gap-2 lg:px-2"},N={class:"relative w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-200 p-1"},O=["src","alt"],H={class:"space-y-4"},M={class:"text-center lg:text-left"},U={class:"font-semibold text-xl"},E={class:"text-[12px]"},I=e("span",{class:"font-medium text-tomato"}," Alamat : ",-1),K={class:"space-y-2 pb-2 text-center lg:text-left"},W=e("h4",{class:"text-xs font-medium"},"Kontak Unit Layanan",-1),Z={class:"space-x-2"},G=["href"],Q={class:"grid grid-cols-2 divide-x-[1px] divide-gray-300 lg:w-[500px] w-full"},R={class:"text-center lg:px-2"},X={class:"font-semibold text-lg"},Y=e("p",{class:"font-normal text-xs"},"Produk dan Jasa",-1),ee=e("div",{class:"text-center lg:px-2"},[e("h4",{class:"font-semibold text-lg"},"08.00 - 15.00"),e("p",{class:"font-normal text-xs"},"Jam Operasional UPJ")],-1),te={class:"flex items-start justify-between"},se=e("h2",{class:"text-sm font-semibold text-tomato lg:text-lg"}," Daftar Produk dan Jasa ",-1),oe=["value"],ae={key:0,class:"grid grid-cols-[10%_90%] items-center bg-blue-100 py-2 rounded text-blue-800"},le=e("p",{class:"text-left"},[e("strong",{class:"block"},"Keterangan :"),y(" Tidak terdapat data produk dan jasa yang tersimpan pada aplikasi. ")],-1),re={key:1,class:"w-full grid grid-cols-2 lg:grid-cols-5 gap-3"},de={class:"space-y-3"},ne={class:"space-y-2"},ie={key:2,class:"flex items-center justify-between"},ce=["disabled"],pe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",class:"w-6 h-6"},[e("path",{fill:"currentColor",d:"m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"})],-1),ue=[pe],ge={class:"text-sm font-medium lg:font-normal"},he=["disabled"],me=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",class:"w-6 h-6"},[e("path",{fill:"currentColor",d:"M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"})],-1),fe=[me],_e={layout:P},Ve=L({..._e,__name:"ShopsDetail",props:{employees:{},products:{},shop:{}},setup(x){const w=p([{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"75",value:75},{label:"100",value:100}]),b=x,g=p(!1),h=p(b.products.meta.per_page),m=t=>{const o=p({per_page:h.value});t>1&&Object.assign(o.value,{page:t}),v.get(route("frontend.shops.detail",b.shop.slug),o.value,{preserveState:!0,onStart:()=>g.value=!0,onError:s=>console.log(s),onFinish:()=>g.value=!1})},k=()=>v.get(route("frontend.shops")),C=t=>`https://wa.me/${t}?text=Saya%20tertarik%20dengan%20produk%20anda`;return(t,o)=>(a(),l(c,null,[d(n(j),{title:t.shop.name},null,8,["title"]),e("div",z,[e("div",A,[e("div",F,[e("div",J,[e("button",{type:"button",class:"bg-gray-100 p-3 rounded-full border border-gray-200 hover:bg-gray-300",onClick:k},[d(n(V),{class:"h-5 w-5"})]),e("div",N,[e("img",{src:t.shop.image,alt:t.shop.slug,class:"object-cover h-full rounded-full"},null,8,O)])]),e("div",H,[e("div",M,[e("h2",U,r(t.shop.name),1),e("p",E,[I,y(" "+r(t.shop.address),1)])]),e("div",K,[W,e("div",Z,[(a(!0),l(c,null,u(t.employees.data,(s,i)=>(a(),l("a",{href:C(s.whatsapp),class:"text-white bg-yaleblue hover:bg-blue-950 focus:ring-2 focus:ring-yaleblue font-medium rounded-lg text-[12px] px-5 py-2",key:i},r(s.name),9,G))),128))])])])]),e("div",Q,[e("div",R,[e("h4",X,r(t.shop.product_count),1),Y]),ee])]),e("div",te,[se,S(e("select",{class:"bg-nasplesyellow border border-white text-[12px] font-semibold rounded focus:ring-yellow-500 focus:border-yellow-500 p-1 w-24","onUpdate:modelValue":o[0]||(o[0]=s=>h.value=s),onChange:o[1]||(o[1]=s=>m(1))},[(a(!0),l(c,null,u(w.value,(s,i)=>(a(),l("option",{value:s.value,key:i},r(s.label)+" data ",9,oe))),128))],544),[[$,h.value]])]),t.products.data.length===0?(a(),l("div",ae,[e("div",null,[d(n(D),{class:"h-8 w-8 m-auto"})]),le])):f("",!0),t.products.data.length>0?(a(),l("div",re,[g.value?(a(),l(c,{key:1},u(5,s=>e("div",de,[d(n(_),{class:"h-[200px] w-full rounded-xl"}),e("div",ne,[d(n(_),{class:"h-4 w-full"}),d(n(_),{class:"h-4 w-full"})])])),64)):(a(!0),l(c,{key:0},u(t.products.data,(s,i)=>(a(),q(B,{product:s,key:i},null,8,["product"]))),128))])):f("",!0),t.products.data.length>0?(a(),l("div",ie,[e("button",{type:"button",class:"bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500",disabled:t.products.meta.current_page===1,onClick:o[2]||(o[2]=s=>m(t.products.meta.current_page-1))},ue,8,ce),e("div",ge," halaman "+r(t.products.meta.current_page)+" dari "+r(t.products.meta.total)+" Data ",1),e("button",{type:"button",class:"bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500",disabled:t.products.meta.current_page===t.products.meta.last_page,onClick:o[3]||(o[3]=s=>m(t.products.meta.current_page+1))},fe,8,he)])):f("",!0)])],64))}});export{Ve as default};
