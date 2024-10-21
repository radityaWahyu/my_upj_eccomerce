import{d as B,Q as C,r as c,o as b,c as _,a,n as S,u as s,t as U,b as t,w as d,e as $,f as g,F as x,g as P,h as D,Z as T}from"./app-CB_Q1yd6.js";import{_ as j,a as F}from"./index-Dao5mdM1.js";import{_ as w}from"./index-D4Ie_lJy.js";import{_ as V}from"./DataTable.vue_vue_type_script_setup_true_lang-bC7ddmBa.js";import{N}from"./no-image-DVr5fu4Z.js";import{_ as z}from"./ConfirmDialog.vue_vue_type_script_setup_true_lang-D8waPHtR.js";import{E,a as G}from"./eye-BTKXfB2E.js";import{_ as H}from"./ComboBox.vue_vue_type_script_setup_true_lang-K26lVO0Q.js";import{_ as O}from"./BannerForm.vue_vue_type_script_setup_true_lang-Cr85JyVQ.js";import{B as I}from"./Backoffice-B6AXC8lO.js";import{P as L}from"./plus-BA36iQ6u.js";/* empty css            */import"./utils--eAPk3wG.js";import"./bundle-mjs-Dk7hgz7r.js";import"./index-CfPuhHd9.js";import"./shadcn-BWvbMO9Q.js";import"./Skeleton.vue_vue_type_script_setup_true_lang-D3f5crE8.js";import"./AlertTitle.vue_vue_type_script_setup_true_lang-CYwTo7kE.js";import"./TableRow.vue_vue_type_script_setup_true_lang-DO3giS2u.js";import"./octagon-alert-BvysA4bE.js";import"./createLucideIcon-BsoM3zrU.js";import"./AlertDialogCancel.vue_vue_type_script_setup_true_lang-BM7P7fmY.js";import"./DialogFooter.vue_vue_type_script_setup_true_lang-C2z3aiWO.js";import"./vee-validate-zod.esm-BuJycqYT.js";import"./Label.vue_vue_type_script_setup_true_lang-CHMMUy1W.js";import"./Input.vue_vue_type_script_setup_true_lang-D54lCQEL.js";import"./index-C2XJz47D.js";import"./InputImage.vue_vue_type_script_setup_true_lang-mCaQgNwp.js";import"./x-DWl-GEay.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./store-ct7EYkSP.js";import"./circle-user-Dao3zDS1.js";import"./badge-info-CC5SfLbS.js";import"./triangle-alert-DxY52lw5.js";const A={class:"flex items-center gap-4"},K={class:"relative h-32 w-full rounded overflow-hidden"},M=["src","alt"],Q={class:"absolute z-10 top-0 w-full h-full flex flex-col justify-end"},Z={class:"bg-gray-900/50 px-2 py-2 flex items-center justify-between"},q={class:"flex items-center gap-3"},J={class:"text-white py-1 capitalize font-medium"},R={class:"flex items-center gap-2"},W={key:0},X={key:1},Y=B({__name:"BannerDetail",props:{banner:{}},emits:["deleted","updated"],setup(v,{emit:h}){const i=v,p=h,u=C(),o=c({open:!1,cancelText:"Batalkan",okText:"Hapus Gambar"}),n=c({onDelete:!1,onUpdate:!1}),m=()=>{x.delete(route("backoffice.banner.delete",i.banner.id),{onStart:()=>{o.value.open=!1,n.value.onDelete=!0},onSuccess:()=>{p("deleted",!0)},onFinish:()=>n.value.onDelete=!1})},k=()=>{x.post(route("backoffice.banner.activated",i.banner.id),{_token:u.props.csrf_token,active:!i.banner.active},{onStart:()=>n.value.onUpdate=!0,onSuccess:()=>{p("updated",!0)},onFinish:()=>n.value.onUpdate=!1})};return(l,f)=>(b(),_("div",A,[a("div",K,[a("img",{class:S([{grayscale:!l.banner.active},"object-cover object-center w-full h-full"]),src:l.banner.image?l.banner.image:s(N),alt:l.banner.title},null,10,M),a("div",Q,[a("div",Z,[a("div",q,[a("h3",J,U(l.banner.title),1)]),a("div",R,[t(s(w),{type:"button",size:"icon",variant:"default",disabled:n.value.onUpdate,onClick:k},{default:d(()=>[l.banner.active?(b(),$(s(E),{key:0,class:"h-3 w-3"})):(b(),$(s(G),{key:1,class:"h-3 w-3"}))]),_:1},8,["disabled"]),t(s(w),{type:"button",variant:"destructive",onClick:f[0]||(f[0]=e=>o.value.open=!0),disabled:n.value.onDelete||n.value.onUpdate},{default:d(()=>[n.value.onDelete?(b(),_("span",X,"Menghapus banner...")):(b(),_("span",W,"Hapus"))]),_:1},8,["disabled"])])])])]),t(z,{open:o.value.open,"cancel-text":o.value.cancelText,"ok-text":o.value.okText,onCancel:f[1]||(f[1]=e=>o.value.open=!1),onOk:m},{title:d(()=>[g(" Apakah anda ingin menghapus Gambar ini? ")]),description:d(()=>[g(" Gambar akan dihapus secara permanen dari sistem dan tidak bisa di kembalikan, mohon untuk mengecek kembali gambar yang akan dihapus. ")]),_:1},8,["open","cancel-text","ok-text"])]))}}),ee={class:"space-y-2 mx-auto max-w-2xl"},ae={class:"space-y-2"},te={class:"flex items-center justify-between"},ne=a("h1",{class:"text-lg font-semibold md:text-xl"},"Data Banner",-1),se={class:"flex gap-2"},oe=a("strong",null,"+ tambah",-1),le={class:"w-full"},re={class:"flex items-center justify-between py-4"},ie={class:"inline-flex items-center gap-3"},pe=a("p",{class:"text-xs font-medium"},"Data Perpage :",-1),me={layout:I},Me=B({...me,__name:"Index",props:{banners:{}},setup(v){const h=c([{value:10,label:10},{value:25,label:25},{value:50,label:50},{value:100,label:100}]),i=c(!1),p=v,u=c(!1),o=c(null),n=[{accessorKey:"name",header:({column:e})=>D("div",{},"Banner"),cell:({row:e})=>D(Y,{class:"w-full",banner:e.original,onDeleted:()=>m(p.banners.meta.current_page),onUpdated:()=>m(p.banners.meta.current_page)})}],m=e=>{const r=c({page:e,perPage:p.banners.meta.per_page});x.get(route("backoffice.banner.index"),r.value,{only:["banners"],preserveState:!0,preserveScroll:!0,onStart:()=>i.value=!0,onFinish:()=>i.value=!1})},k=e=>m(e),l=()=>m(1),f=()=>{u.value=!1,m(p.banners.meta.current_page)};return(e,r)=>(b(),_(P,null,[t(s(T),{title:"Data Banner"}),a("div",ee,[a("div",ae,[a("div",te,[ne,a("div",se,[t(s(w),{variant:"default",onClick:r[0]||(r[0]=y=>u.value=!0),class:"flex items-center gap-2 font-semibold"},{default:d(()=>[t(s(L),{class:"w-4 h-4","stroke-width":"3px"}),g(" Tambah ")]),_:1})])]),t(s(F),{class:"bg-secondary shadow-inner shadow-gray-100"},{default:d(()=>[t(s(j),{class:"text-xs"},{default:d(()=>[g(" Halaman untuk memanjemen banner yang di pakai pada halaman awal website. Untuk menambah data baru silahkan mengklik tombol "),oe]),_:1})]),_:1})]),a("div",le,[a("div",re,[a("div",ie,[pe,t(H,{lists:h.value,modelValue:e.banners.meta.per_page,"onUpdate:modelValue":r[1]||(r[1]=y=>e.banners.meta.per_page=y),onChange:l,class:"w-100"},null,8,["lists","modelValue"])])]),t(V,{ref_key:"bannerTable",ref:o,columns:n,data:e.banners.data,"current-page":e.banners.meta.current_page,"last-page":e.banners.meta.last_page,"prev-page":e.banners.meta.current_page,"next-page":e.banners.meta.to,total:e.banners.meta.total,loading:i.value,"per-page":e.banners.meta.per_page,onChangePage:k},null,8,["data","current-page","last-page","prev-page","next-page","total","loading","per-page"])]),t(O,{open:u.value,onClosed:r[2]||(r[2]=y=>u.value=!1),onSaved:f},null,8,["open"])])],64))}});export{Me as default};