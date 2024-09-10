import{d as D,r as g,o,c as l,b as r,u as n,a as e,z as S,S as B,g as d,p as m,w as C,n as P,t as i,f,F,Z as L,l as q,e as T}from"./app-Dfzx8MWc.js";import{_ as k}from"./Skeleton.vue_vue_type_script_setup_true_lang-CwX4h7MU.js";import{_ as H}from"./Product.vue_vue_type_script_setup_true_lang-4QGFVnM1.js";import{_ as N}from"./Frontend.vue_vue_type_script_setup_true_lang-dCGj-vBP.js";import{A as z}from"./arrow-right-BLluuyGT.js";import{B as $}from"./badge-info-BDTBR86Q.js";/* empty css            */import"./utils--eAPk3wG.js";import"./bundle-mjs-Dk7hgz7r.js";import"./no-image-DVr5fu4Z.js";import"./Header.vue_vue_type_script_setup_true_lang-D1Shb9BT.js";import"./Input.vue_vue_type_script_setup_true_lang-NO41PE8l.js";import"./index-D9vEFx1F.js";import"./shadcn-BWvbMO9Q.js";import"./createLucideIcon-CUtAwbGf.js";import"./circle-user-Btxun51b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Footer.vue_vue_type_script_setup_true_lang-bl2tXqMQ.js";const A={class:"lg:container"},E={class:"px-2 space-y-4 mt-4"},M=e("option",{value:"all"},"Semua Kategori",-1),O=["value"],U={class:"lg:flex lg:items-start lg:divide-x-[1px] lg:divide-nasplesyellow gap-2"},I={class:"hidden lg:block lg:w-[200px] space-y-2"},R=e("h4",{class:"text-lg font-medium px-2"},"Kategori",-1),Z={class:"text-sm space-y-1 font-medium w-full"},G=e("span",null,"Semua Kategori",-1),J={class:"space-y-5 lg:px-3 lg:min-h-[600px] lg:w-11/12"},Q={class:"space-y-3"},W={class:"flex items-start justify-between"},X={class:"text-sm font-semibold text-tomato lg:text-lg"},Y=["value"],ee={key:0,class:"flex items-center gap-4 bg-blue-100 rounded overflow-hidden"},se={class:"bg-blue-200 p-3"},te={class:"text-sm p-1"},ae=e("strong",null,"Keterangan :",-1),oe={key:1,class:"space-y-4"},le={class:"flex items-center gap-4 bg-blue-100 rounded overflow-hidden"},re={class:"bg-blue-200 p-3"},ne={class:"text-sm p-1"},ie=e("strong",null,"Keterangan :",-1),de={class:"grid grid-cols-2 lg:grid-cols-5 gap-3"},ue={class:"space-y-3"},ce={class:"space-y-2"},pe={class:"flex items-center justify-between"},ge=["disabled"],me=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",class:"w-6 h-6"},[e("path",{fill:"currentColor",d:"m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"})],-1),he=[me],be={class:"text-sm font-medium lg:font-normal"},fe=["disabled"],ve=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",class:"w-6 h-6"},[e("path",{fill:"currentColor",d:"M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"})],-1),ye=[ve],_e={layout:N},Ne=D({..._e,__name:"Search",props:{categories:{},products:{},params:{},active:{}},setup(K){var x;const V=g([{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"75",value:75},{label:"100",value:100}]),h=K,v=g((x=h.params)==null?void 0:x.category),y=g(!1),_=g(h.products.meta.per_page),w=s=>{var u,c;const a=g({per_page:_.value,key:(u=h.params)==null?void 0:u.key});(c=h.params)!=null&&c.category&&Object.assign(a.value,{category:v.value}),console.log(s),s>1&&Object.assign(a.value,{page:s}),F.get(route("frontend.search"),a.value,{preserveState:!0,onStart:()=>y.value=!0,onError:b=>console.log(b),onFinish:()=>y.value=!1})};return(s,a)=>{var u,c,b;return o(),l(d,null,[r(n(L),{title:"Pencarian Produk"}),e("div",A,[e("div",E,[S(e("select",{id:"countries",class:"bg-nasplesyellow border border-white text-sm rounded-none focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 lg:hidden","onUpdate:modelValue":a[0]||(a[0]=t=>v.value=t)},[M,(o(!0),l(d,null,m(s.categories.data,(t,p)=>(o(),l("option",{value:t.id,key:p},i(t.name),9,O))),128))],512),[[B,v.value]]),e("div",U,[e("div",I,[R,e("ul",Z,[e("li",null,[r(n(q),{href:s.route("frontend.search",{category:"all",key:(u=s.params)==null?void 0:u.key}),class:P([{"bg-yellow-400/40":s.active==="all"},"w-full inline-flex items-center justify-between px-2 py-2 hover:bg-yellow-400/40 rounded-lg capitalize"]),replace:""},{default:C(()=>[G,r(n(z),{class:"h-4 w-4"})]),_:1},8,["href","class"])]),(o(!0),l(d,null,m(s.categories.data,(t,p)=>{var j;return o(),l("li",{key:p},[r(n(q),{href:s.route("frontend.search"),data:{category:t.slug,key:(j=s.params)==null?void 0:j.key},class:P([{"bg-yellow-400/40":s.active===t.slug},"w-full inline-flex items-center justify-between px-2 py-2 hover:bg-yellow-400/40 rounded-lg capitalize"]),replace:""},{default:C(()=>[e("span",null,i(t.name),1),r(n(z),{class:"h-4 w-4"})]),_:2},1032,["href","data","class"])])}),128))])]),e("div",J,[e("div",Q,[e("div",W,[e("h2",X,' Hasil Pencarian "'+i((c=s.params)==null?void 0:c.key)+'" pada Produk dan jasa ',1),S(e("select",{"onUpdate:modelValue":a[1]||(a[1]=t=>_.value=t),class:"bg-nasplesyellow border border-white text-[12px] font-semibold rounded focus:ring-yellow-500 focus:border-yellow-500 p-1 w-24",onChange:a[2]||(a[2]=t=>w(1))},[(o(!0),l(d,null,m(V.value,(t,p)=>(o(),l("option",{value:t.value,key:p},i(t.label),9,Y))),128))],544),[[B,_.value]])]),s.products.data.length===0?(o(),l("div",ee,[e("div",se,[r(n($),{class:"w-8 h-8"})]),e("p",te,[ae,f(" Data yang anda cari dengan kata kunci "),e("strong",null,'"'+i((b=s.params)==null?void 0:b.key)+'"',1),f(" tidak ditemukan dalam produk dan jasa. Silahkan gunakan kata kunci yang lain yang sesuai dengan produk yang dicari. ")])])):(o(),l("div",oe,[e("div",le,[e("div",re,[r(n($),{class:"w-8 h-8"})]),e("p",ne,[ie,f(" ditemukan "),e("strong",null,i(s.products.data.length)+" produk atau jasa ",1),f(" didalam sistem. ")])]),e("div",de,[y.value?(o(),l(d,{key:1},m(5,t=>e("div",ue,[r(n(k),{class:"h-[200px] w-full rounded-xl"}),e("div",ce,[r(n(k),{class:"h-4 w-full"}),r(n(k),{class:"h-4 w-full"})])])),64)):(o(!0),l(d,{key:0},m(s.products.data,t=>(o(),T(H,{product:t},null,8,["product"]))),256))]),e("div",pe,[e("button",{type:"button",class:"bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500",disabled:s.products.meta.current_page===1,onClick:a[3]||(a[3]=t=>w(s.products.meta.current_page-1))},he,8,ge),e("div",be," halaman "+i(s.products.meta.current_page)+" dari "+i(s.products.meta.total)+" Data ",1),e("button",{type:"button",class:"bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500",disabled:s.products.meta.current_page===s.products.meta.last_page,onClick:a[4]||(a[4]=t=>w(s.products.meta.current_page+1))},ye,8,fe)])]))])])])])])],64)}}});export{Ne as default};
