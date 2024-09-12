import{d as F,r as d,o as a,c as l,b as r,u as n,a as e,z as w,S as y,g as u,p as g,w as x,n as k,i as b,t as m,F as C,f as O,Z as P,l as j,e as V}from"./app-B8yuWg8u.js";import{_}from"./Skeleton.vue_vue_type_script_setup_true_lang-BYMFmZwW.js";import{_ as $}from"./Product.vue_vue_type_script_setup_true_lang-CNB5o9-t.js";import{_ as D}from"./Frontend.vue_vue_type_script_setup_true_lang-zr57zA_k.js";import{A as S}from"./arrow-right-XeCRByKy.js";import{O as K}from"./octagon-alert-CCPrPaHX.js";/* empty css            */import"./utils--eAPk3wG.js";import"./bundle-mjs-Dk7hgz7r.js";import"./no-image-DVr5fu4Z.js";import"./Header.vue_vue_type_script_setup_true_lang-D92aqF5P.js";import"./Input.vue_vue_type_script_setup_true_lang-uyXMa4cI.js";import"./index-DF0bueZs.js";import"./shadcn-BWvbMO9Q.js";import"./createLucideIcon-DgKqf7kQ.js";import"./circle-user-MLlvykky.js";import"./Footer.vue_vue_type_script_setup_true_lang-wmLSwY2D.js";const T={class:"lg:container"},L={class:"px-2 space-y-4 mt-4"},N={class:"lg:hidden w-full"},A=e("h4",{class:"text-tomato font-semibold text-sm"}," Filter Kategori ",-1),E=e("option",{value:"all"},"Semua Kategori",-1),H=["value"],J={class:"lg:flex lg:items-start lg:divide-x-[1px] lg:divide-nasplesyellow gap-2"},M={class:"hidden lg:block lg:w-[200px] space-y-2"},U=e("h4",{class:"text-lg font-medium px-2"},"Kategori",-1),R={class:"text-sm space-y-1 font-medium w-full"},Z=e("span",null,"Semua Kategori",-1),G={class:"space-y-5 lg:px-3 lg:min-h-[600px] lg:w-11/12"},I={class:"space-y-3"},Q={class:"flex items-start justify-between"},W=e("h2",{class:"text-sm font-semibold text-tomato lg:text-lg"}," Daftar Produk dan Jasa ",-1),X=["value"],Y={key:0},ee={class:"grid grid-cols-[10%_90%] items-center bg-blue-100 py-2 rounded text-blue-800"},te=e("p",{class:"text-left"},[e("strong",{class:"block"},"Keterangan :"),O(" Tidak terdapat data produk dan jasa yang tersimpan pada aplikasi. ")],-1),se={key:1,class:"grid grid-cols-2 lg:grid-cols-5 gap-3"},oe={class:"space-y-3"},ae={class:"space-y-2"},le={key:2,class:"flex items-center justify-between"},re=["disabled"],ne=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",class:"w-6 h-6"},[e("path",{fill:"currentColor",d:"m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"})],-1),ie=[ne],de={class:"text-sm font-medium lg:font-normal"},ue=["disabled"],ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",class:"w-6 h-6"},[e("path",{fill:"currentColor",d:"M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"})],-1),pe=[ce],ge={layout:D},Oe=F({...ge,__name:"Products",props:{categories:{},products:{},params:{},active:{}},setup(q){const z=d([{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"75",value:75},{label:"100",value:100}]),c=q,h=d(c.active),p=d(!1),v=d(c.products.meta.per_page),f=t=>{var s;const o=d({per_page:v.value});(s=c.params)!=null&&s.category&&Object.assign(o.value,{category:h.value}),t>1&&Object.assign(o.value,{page:t}),C.get(route("frontend.products"),o.value,{preserveState:!0,onStart:()=>p.value=!0,onError:i=>console.log(i),onFinish:()=>p.value=!1})},B=()=>{const t=d({per_page:v.value});Object.assign(t.value,{category:h.value}),c.products.meta.current_page>1&&Object.assign(t.value,{page:c.products.meta.current_page}),C.get(route("frontend.products"),t.value,{preserveState:!0,onStart:()=>p.value=!0,onError:o=>console.log(o),onFinish:()=>p.value=!1})};return(t,o)=>(a(),l(u,null,[r(n(P),{title:"Daftar Produk dan Jasa"}),e("div",T,[e("div",L,[e("div",N,[A,w(e("select",{id:"countries",class:"bg-nasplesyellow border border-white text-sm rounded-none focus:ring-yellow-500 focus:border-yellow-500 w-full p-2.5","onUpdate:modelValue":o[0]||(o[0]=s=>h.value=s),onChange:B},[E,(a(!0),l(u,null,g(t.categories.data,(s,i)=>(a(),l("option",{value:s.slug,key:i},m(s.name),9,H))),128))],544),[[y,h.value]])]),e("div",J,[e("div",M,[U,e("ul",R,[e("li",null,[r(n(j),{href:t.route("frontend.products",{category:"all"}),class:k([{"bg-yellow-400/40":t.active==="all"},"w-full inline-flex items-center justify-between px-2 py-2 hover:bg-yellow-400/40 rounded-lg capitalize"]),replace:""},{default:x(()=>[Z,r(n(S),{class:"h-4 w-4"})]),_:1},8,["href","class"])]),(a(!0),l(u,null,g(t.categories.data,(s,i)=>(a(),l("li",{key:i},[r(n(j),{href:t.route("frontend.products"),data:{category:s.slug},class:k([{"bg-yellow-400/40":t.active===s.slug},"w-full inline-flex items-center justify-between px-2 py-2 hover:bg-yellow-400/40 rounded-lg capitalize"]),replace:""},{default:x(()=>[e("span",null,m(s.name),1),r(n(S),{class:"h-4 w-4"})]),_:2},1032,["href","data","class"])]))),128))])]),e("div",G,[e("div",I,[e("div",Q,[W,w(e("select",{"onUpdate:modelValue":o[1]||(o[1]=s=>v.value=s),class:"bg-nasplesyellow border border-white text-[12px] font-semibold rounded focus:ring-yellow-500 focus:border-yellow-500 p-1 w-24",onChange:o[2]||(o[2]=s=>f(1))},[(a(!0),l(u,null,g(z.value,(s,i)=>(a(),l("option",{value:s.value,key:i},m(s.label),9,X))),128))],544),[[y,v.value]])]),t.products.data.length===0?(a(),l("div",Y,[e("div",ee,[e("div",null,[r(n(K),{class:"h-8 w-8 m-auto"})]),te])])):b("",!0),t.products.data.length>0?(a(),l("div",se,[p.value?(a(),l(u,{key:1},g(5,s=>e("div",oe,[r(n(_),{class:"h-[200px] w-full rounded-xl"}),e("div",ae,[r(n(_),{class:"h-4 w-full"}),r(n(_),{class:"h-4 w-full"})])])),64)):(a(!0),l(u,{key:0},g(t.products.data,s=>(a(),V($,{product:s},null,8,["product"]))),256))])):b("",!0),t.products.data.length>0?(a(),l("div",le,[e("button",{type:"button",class:"bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500",disabled:t.products.meta.current_page===1,onClick:o[3]||(o[3]=s=>f(t.products.meta.current_page-1))},ie,8,re),e("div",de," halaman "+m(t.products.meta.current_page)+" dari "+m(t.products.meta.total)+" Data ",1),e("button",{type:"button",class:"bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500",disabled:t.products.meta.current_page===t.products.meta.last_page,onClick:o[4]||(o[4]=s=>f(t.products.meta.current_page+1))},pe,8,ue)])):b("",!0)])])])])])],64))}});export{Oe as default};
