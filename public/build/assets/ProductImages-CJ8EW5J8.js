import{d as j,r as T,Q as M,T as G,o as n,c as i,a as e,u as t,b as a,w as o,f as l,t as u,g as b,p as k,i as y,e as v,Z as D,l as I}from"./app-GfgATAJv.js";import{_ as K}from"./index-CsUObpoK.js";import{_ as N}from"./index-58tioFqY.js";import{_ as x,a as w}from"./index-BgxfsxE2.js";import{_ as C}from"./AlertTitle.vue_vue_type_script_setup_true_lang-9XEb7WQm.js";import{_ as $}from"./Skeleton.vue_vue_type_script_setup_true_lang-DZa9DSIe.js";import{_ as P}from"./ConfirmDialog.vue_vue_type_script_setup_true_lang-CmEfBGE0.js";import{T as V}from"./trash-Dvpdnq66.js";import{_ as Z}from"./ProductImageForm.vue_vue_type_script_setup_true_lang-BY1t2iJg.js";import{B as z}from"./Backoffice-TnFtNID-.js";import{M as L}from"./move-left-C_Uk4qbb.js";import{B}from"./badge-info-DESucrmm.js";import{P as O}from"./plus-V3oFpQ3H.js";/* empty css            */import"./index-BJsTvpPJ.js";import"./shadcn-BWvbMO9Q.js";import"./bundle-mjs-Dk7hgz7r.js";import"./utils--eAPk3wG.js";import"./AlertDialogCancel.vue_vue_type_script_setup_true_lang-MBAECjUx.js";import"./createLucideIcon-BfaSkUWl.js";import"./DialogFooter.vue_vue_type_script_setup_true_lang-DcgkSGgY.js";import"./vee-validate-zod.esm-DjxW5krG.js";import"./Label.vue_vue_type_script_setup_true_lang-IYZmARKI.js";import"./Input.vue_vue_type_script_setup_true_lang-QKm923N4.js";import"./index-BtnY4RUo.js";import"./InputImage.vue_vue_type_script_setup_true_lang-CK5qk_2V.js";import"./x-C7yJGYJR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./store-ioqJ9aVm.js";import"./circle-user-BLSb3mZm.js";import"./triangle-alert-Dz0pc5II.js";const S={class:"relative h-44 w-44 rounded-lg overflow-hidden border border-gray-100 shadow-sm shadow-gray-200"},F=["src","alt"],q={key:0,class:"w-full h-full transition-colors duration-300 ease-in-out group hover:bg-gray-900/30 absolute z-10 top-0 flex items-center justify-center"},A={key:1,class:"w-full h-full bg-gray-900/60 absolute z-10 top-0 flex items-center justify-center"},E=e("div",{class:"rounded-full p-2 bg-gray-600"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-200 animate-spin fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})])],-1),H=[E],J=j({__name:"ImageBox",props:{image:{}},emits:["deleted"],setup(_){const h=_,r=T({open:!1,cancelText:"Batalkan",okText:"Hapus Gambar"}),c=M(),p=G({_token:c.props.csrf_token}),f=()=>{p.delete(route("backoffice.product.images.delete",h.image.id))};return(g,s)=>(n(),i("div",S,[e("img",{src:g.image.image,alt:g.image.title,class:"object-cover object-top w-full h-full"},null,8,F),t(p).processing?(n(),i("div",A,H)):(n(),i("div",q,[e("button",{type:"button",class:"rounded-full p-2 invisible group-hover:visible bg-gray-600",onClick:s[0]||(s[0]=d=>r.value.open=!0)},[a(t(V),{class:"w-5 h-5 text-white"})])])),a(P,{open:r.value.open,"cancel-text":r.value.cancelText,"ok-text":r.value.okText,onCancel:s[1]||(s[1]=d=>r.value.open=!1),onOk:f},{title:o(()=>[l(" Apakah anda ingin menghapus Gambar ini? ")]),description:o(()=>[l(" Gambar akan dihapus secara permanen dari sistem dan tidak bisa di kembalikan, mohon untuk mengecek kembali gambar yang akan dihapus. ")]),_:1},8,["open","cancel-text","ok-text"])]))}}),Q={class:"space-y-5 mx-auto w-9/12"},U={class:"flex items-center justify-between"},R={class:"inline-flex items-center gap-2"},W={class:"text-lg font-semibold md:text-xl"},X={class:"flex items-center justify-between bg-white p-6 rounded-lg border border-gray-200"},Y=e("h4",{class:"font-semibold text-sm text-gray-500"},"Kategori :",-1),ee={class:"text-sm"},te=e("h4",{class:"font-semibold text-sm text-gray-500"}," Unit Layanan : ",-1),ae={class:"text-sm"},se=e("h4",{class:"font-semibold text-sm text-gray-500"}," Dibuat Oleh : ",-1),oe={class:"text-sm"},re={class:"space-y-2"},le=e("h3",{class:"text-lg font-medium text-gray-600"},"Manajemen Gambar",-1),ne={class:"min-h-[250px] w-full border border-gray-100 rounded-lg p-5 bg-white flex items-start flex-wrap gap-5"},ie={type:"button",class:"rounded-full p-2 bg-gray-400"},de={key:2,class:"flex items-center gap-3"},me={class:"space-y-2"},ce={layout:z},qe=j({...ce,__name:"ProductImages",props:{product:{},images:{}},setup(_){const h=_,r=T(!1),c=G({}),p=()=>{r.value=!1,f()},f=()=>{c.get(route("backoffice.product.images",h.product.data.id),{only:["images"]})},g=()=>f();return(s,d)=>(n(),i(b,null,[a(t(D),{title:"Produk dan Jasa"}),e("div",Q,[e("div",U,[e("div",R,[e("h1",W," Gambar "+u(s.product.data.name),1),a(t(N),{variant:"secondary",class:"text-primary capitalize"},{default:o(()=>[l(u(s.product.data.type),1)]),_:1})]),a(t(K),{variant:"default",class:"flex items-center gap-2 font-semibold","as-child":""},{default:o(()=>[a(t(I),{href:s.route("backoffice.product.index"),replace:""},{default:o(()=>[a(t(L),{class:"w-4 h-4","stroke-width":"3px"}),l(" Kembali ")]),_:1},8,["href"])]),_:1})]),e("div",X,[e("div",null,[Y,e("p",ee,u(s.product.data.category),1)]),e("div",null,[te,e("p",ae,u(s.product.data.shop),1)]),e("div",null,[se,e("p",oe,u(s.product.data.user),1)])]),e("div",re,[le,a(t(w),{class:"bg-blue-50"},{default:o(()=>[a(t(B),{class:"h-5 w-5"}),a(t(C),null,{default:o(()=>[l("Keterangan")]),_:1}),a(t(x),null,{default:o(()=>[l(" Silahkan tambahkan gambar produk atau jasa yang dijual dalam sistem. Gambar yang dimasukkan harus berukuran maksimal 1Mb dan berbentuk square. ")]),_:1})]),_:1}),e("div",ne,[e("button",{type:"button",class:"flex flex-col items-center justify-center h-44 w-44 rounded-lg border bg-gray-200 border-gray-100 shadow-sm shadow-gray-200 gap-2 text-xs",onClick:d[0]||(d[0]=m=>r.value=!0)},[e("div",ie,[a(t(O),{class:"w-5 h-5 text-white"})]),l(" Tambah Gambar ")]),s.images.data.length>0||!t(c).processing?(n(!0),i(b,{key:0},k(s.images.data,m=>(n(),v(J,{key:m.id,image:m,onDeleted:g},null,8,["image"]))),128)):y("",!0),s.images.data.length==0?(n(),v(t(w),{key:1,class:"bg-yellow-100 w-1/2"},{default:o(()=>[a(t(B),{class:"h-5 w-5"}),a(t(C),null,{default:o(()=>[l("Keterangan")]),_:1}),a(t(x),null,{default:o(()=>[l(" Gambar masih kosong, silahkan tambahkan gambar baru. ")]),_:1})]),_:1})):y("",!0),t(c).processing?(n(),i("div",de,[(n(),i(b,null,k(2,m=>e("div",{key:m,class:"h-40 w-44 space-y-2"},[a(t($),{class:"h-full w-full rounded-xl"}),e("div",me,[a(t($),{class:"h-4 w-full"})])])),64))])):y("",!0)])]),a(Z,{open:r.value,onClosed:d[1]||(d[1]=m=>r.value=!1),id:s.product.data.id,onSaved:p},null,8,["open","id"])])],64))}});export{qe as default};
