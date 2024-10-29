import{_ as w}from"./index-CsUObpoK.js";import{_ as D}from"./Input.vue_vue_type_script_setup_true_lang-QKm923N4.js";import{_ as A,a as H}from"./index-BgxfsxE2.js";import{_ as F}from"./index-58tioFqY.js";import{d as k,r as _,o as p,c as f,b as a,w as r,u as s,f as b,a as n,t as K,y as O,j,g as L,h as o,F as y,Z as M}from"./app-GfgATAJv.js";import{_ as E}from"./DataTable.vue_vue_type_script_setup_true_lang-kZv4cHGz.js";import{_ as Z,a as q,b as I,c as W,d as G,e as J,f as Q,g as R}from"./AlertDialogCancel.vue_vue_type_script_setup_true_lang-MBAECjUx.js";import{P as X,A as Y,a as ee}from"./pen-line-CWJtM27M.js";import{T as te}from"./trash-Dvpdnq66.js";import{_ as ae}from"./ComboBox.vue_vue_type_script_setup_true_lang-6FCiSuDV.js";import{B as se}from"./Backoffice-TnFtNID-.js";import{P as ne}from"./plus-V3oFpQ3H.js";import{w as le}from"./index-BtnY4RUo.js";import"./index-BJsTvpPJ.js";import"./shadcn-BWvbMO9Q.js";import"./bundle-mjs-Dk7hgz7r.js";import"./utils--eAPk3wG.js";/* empty css            */import"./Skeleton.vue_vue_type_script_setup_true_lang-DZa9DSIe.js";import"./AlertTitle.vue_vue_type_script_setup_true_lang-9XEb7WQm.js";import"./TableRow.vue_vue_type_script_setup_true_lang-CEOvLiQZ.js";import"./octagon-alert-Ded3eyJR.js";import"./createLucideIcon-BfaSkUWl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./store-ioqJ9aVm.js";import"./circle-user-BLSb3mZm.js";import"./badge-info-DESucrmm.js";import"./triangle-alert-Dz0pc5II.js";const oe={class:"space-x-2 w-15"},re=k({__name:"ButtonAction",props:{id:{type:String,required:!0}},emits:["deleted","updated"],setup(g,{emit:c}){const u=c,i=_(!1);return(v,t)=>(p(),f("div",oe,[a(s(w),{type:"button",variant:"secondary",size:"icon",onClick:t[0]||(t[0]=x=>u("updated",g.id))},{default:r(()=>[a(s(X),{class:"w-4 h-4 text-blue-600"})]),_:1}),a(s(w),{type:"button",variant:"secondary",size:"icon",onClick:t[1]||(t[1]=x=>i.value=!0)},{default:r(()=>[a(s(te),{class:"w-4 h-4 text-tomato"})]),_:1}),a(s(R),{open:i.value},{default:r(()=>[a(s(Z),null,{default:r(()=>[a(s(q),null,{default:r(()=>[a(s(I),null,{default:r(()=>[b(" Apakah anda ingin menghapus data ini? ")]),_:1}),a(s(W),null,{default:r(()=>[b(" Aksi ini akan menghapus data permanen dari sistem dan tidak bisa di kembalikan. ")]),_:1})]),_:1}),a(s(G),null,{default:r(()=>[a(s(J),{onClick:t[2]||(t[2]=x=>i.value=!1),class:"border-none"},{default:r(()=>[b(" Batalkan ")]),_:1}),a(s(Q),{onClick:t[3]||(t[3]=x=>u("deleted",g.id)),class:"bg-tomato"},{default:r(()=>[b(" Hapus Data ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]))}}),ie={class:"flex items-center gap-3"},de={class:"relative size-min"},ue=O('<div class="relative box-content flex items-center justify-center overflow-hidden rounded-full size-8 bg-blue-700 stroke-white"><div class="flex items-center justify-center size-3.5"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-inherit"><path d="M16.6668 17.5V15.8333C16.6668 14.9492 16.3157 14.1014 15.6905 13.4763C15.0654 12.8512 14.2176 12.5 13.3335 12.5H6.66683C5.78277 12.5 4.93493 12.8512 4.3098 13.4763C3.68469 14.1014 3.3335 14.9492 3.3335 15.8333V17.5"></path><path d="M9.99984 10.0002C11.8408 10.0002 13.3332 8.50775 13.3332 6.66683C13.3332 4.82588 11.8408 3.3335 9.99984 3.3335C8.15889 3.3335 6.6665 4.82588 6.6665 6.66683C6.6665 8.50775 8.15889 10.0002 9.99984 10.0002Z"></path></svg></div></div>',1),ce={class:"absolute bottom-0 right-0 translate-y-2 rounded-full"},me={key:0,class:"inline-flex text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-green-700 size-2 p-0 bg-lime-500 box-content border-2 border-white"},pe={key:1,class:"inline-flex text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-yellow-700 size-2 p-0 bg-yellow-500 box-content border-2 border-white"},fe={class:"font-semibold text-sm capitalize"},_e=k({__name:"UserNameBox",props:{employee:{}},setup(g){return(c,u)=>(p(),f("div",ie,[n("div",de,[ue,n("div",ce,[c.employee.enabled?(p(),f("span",me)):(p(),f("span",pe))])]),n("div",null,[n("h3",fe,K(c.employee.name),1)])]))}}),ge={key:0,class:"inline-flex items-center justify-start"},ve=n("span",{class:"inline-flex text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-green-700 mr-2 size-2 p-0 border border-lime-500 bg-lime-500"},null,-1),be=n("span",{class:"text-xs font-medium text-green-700"},"Aktif",-1),xe=[ve,be],he={key:1,class:"inline-flex items-center justify-start"},ye=n("span",{class:"inline-flex border text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-amber-700 mr-2 size-2 p-0 border-yellow-400 bg-yellow-400"},null,-1),we=n("span",{class:"text-xs font-medium text-amber-600"},"Nonaktif",-1),ke=[ye,we],$e=k({__name:"UserEnabledBox",props:{enabled:{type:Boolean}},setup(g){return(c,u)=>(p(),f("div",null,[c.enabled?(p(),f("div",ge,xe)):(p(),f("div",he,ke))]))}}),Ce={class:"space-y-2 mx-auto w-full"},Ue={class:"space-y-2"},Pe={class:"flex items-center justify-between"},je=n("h1",{class:"text-lg font-semibold md:text-xl"},"Data User",-1),Ne={class:"flex gap-2"},Te=n("strong",null,"+ tambah",-1),Ve={class:"w-full"},Be={class:"flex items-center justify-between py-4"},Se={class:"inline-flex items-center gap-3"},ze=n("p",{class:"text-xs font-medium"},"Data Perpage :",-1),De={layout:se},ut=k({...De,__name:"Index",props:{users:Object,params:Object},setup(g){var $,C,U,P;const c=_([{value:10,label:10},{value:25,label:25},{value:50,label:50},{value:100,label:100}]),u=_(!1),i=g,v=_(($=i.params)==null?void 0:$.search),t=_({sortName:(C=i.params)==null?void 0:C.sortName,sortType:(U=i.params)==null?void 0:U.sortType,perPage:(P=i.params)==null?void 0:P.perPage}),x=_(null),N=[{accessorKey:"name",header:({column:e})=>o(w,{variant:"ghost",onClick:()=>{t.value.sortName="name",t.value.sortType=="asc"?t.value.sortType="desc":t.value.sortType="asc",h(m.value.current_page)},class:"w-full flex justify-between text-left px-0"},()=>{var l,d;return[o("div",{class:"gap-2 flex items-center "},[((l=i.params)==null?void 0:l.sortType)=="desc"&&((d=i.params)==null?void 0:d.sortName)=="name"?o(Y,{class:"h-4 w-4"}):o(ee,{class:"h-4 w-4"}),"Nama Pegawai"])]}),cell:({row:e})=>o(_e,{employee:{name:e.original.name,enabled:e.original.enabled}})},{accessorKey:"username",header:({column:e})=>o("div",{},"Username"),cell:({row:e})=>o("div",{},e.original.username),enableSorting:!1,enableHiding:!1},{accessorKey:"shop",header:({column:e})=>o("div",{},"Unit Layanan"),cell:({row:e})=>o(F,{variant:"secondary"},e.original.shop),enableSorting:!1,enableHiding:!1},{accessorKey:"enabled",header:({column:e})=>o("p",{class:"w-full flex justify-between text-left px-0"},"Status"),cell:({row:e})=>o($e,{enabled:e.original.enabled})},{id:"actions",enableHiding:!1,cell:({row:e})=>{const l=e.original.id;return o("div",{class:"relative text-center"},o(re,{id:l,onDeleted:d=>B(d),onUpdated:d=>y.get(route("backoffice.user.edit",d))}))}}],T=j(()=>{var e;return(e=i.users)==null?void 0:e.data}),m=j(()=>{var e;return(e=i.users)==null?void 0:e.meta}),V=e=>{const l=_({page:e,perPage:t.value.perPage});return t.value.sortName!==null&&t.value.sortType!==null&&Object.assign(l.value,{sortName:t.value.sortName,sortType:t.value.sortType}),v!==null&&Object.assign(l.value,{search:v}),l},h=e=>{const l=V(e);y.get(route("backoffice.user.index"),l.value,{only:["users","params"],preserveState:!0,preserveScroll:!0,onStart:()=>u.value=!0,onFinish:()=>u.value=!1})},B=e=>{y.delete(route("backoffice.user.delete",e),{onStart:()=>u.value=!0,onFinish:()=>u.value=!1})},S=e=>h(e),z=()=>h(1);return le(v,()=>{h(m.value.current_page)},{debounce:500,maxWait:1e3}),(e,l)=>(p(),f(L,null,[a(s(M),{title:"Data User"}),n("div",Ce,[n("div",Ue,[n("div",Pe,[je,n("div",Ne,[a(s(w),{variant:"default",onClick:l[0]||(l[0]=d=>s(y).get(e.route("backoffice.user.create"))),class:"flex items-center gap-2 font-semibold"},{default:r(()=>[a(s(ne),{class:"w-4 h-4","stroke-width":"3px"}),b(" Tambah User ")]),_:1})])]),a(s(H),{class:"bg-secondary shadow-inner shadow-gray-100 max-w-2xl"},{default:r(()=>[a(s(A),{class:"text-xs"},{default:r(()=>[b(" Halaman untuk memanajemen User yang terdapat pada setiap Unit Layanan di SMKN 1 Purwosari. Untuk menambah data baru silahkan mengklik tombol "),Te]),_:1})]),_:1})]),n("div",Ve,[n("div",Be,[a(s(D),{placeholder:"Cari user...",modelValue:v.value,"onUpdate:modelValue":l[1]||(l[1]=d=>v.value=d),class:"w-1/2 bg-white"},null,8,["modelValue"]),n("div",Se,[ze,a(ae,{lists:c.value,modelValue:t.value.perPage,"onUpdate:modelValue":l[2]||(l[2]=d=>t.value.perPage=d),onChange:z,class:"w-100"},null,8,["lists","modelValue"])])]),a(E,{ref_key:"usersTable",ref:x,columns:N,data:T.value,"current-page":m.value.current_page,"last-page":m.value.last_page,"prev-page":m.value.current_page,"next-page":m.value.to,total:m.value.total,loading:u.value,"per-page":m.value.per_page,onChangePage:S},null,8,["data","current-page","last-page","prev-page","next-page","total","loading","per-page"])])])],64))}});export{ut as default};