import{_ as B}from"./Checkbox.vue_vue_type_script_setup_true_lang-CTkJZ1i0.js";import{_ as y}from"./index-CK4-x1fb.js";import{_ as J}from"./Input.vue_vue_type_script_setup_true_lang-NO41PE8l.js";import{_ as Q,a as X}from"./index-Fp4fi9lO.js";import{d as V,r as p,o as C,c as S,b as a,w as l,u as t,f,a as c,j as F,e as Y,g as ee,h as g,F as $,Z as ae,t as te}from"./app-Dfzx8MWc.js";import{_ as se}from"./DataTable.vue_vue_type_script_setup_true_lang-DdANXjqI.js";import{_ as le,a as oe,b as ne,c as ie,d as N,e as re,B as ce}from"./Backoffice-UNxnvJsN.js";import{E as ue,_ as de,a as U}from"./DropdownMenuShortcut.vue_vue_type_script_setup_true_lang-OGqY8Py6.js";import{_ as me,a as pe,b as fe,c as ge,d as _e,e as ve,f as ke,g as he,P as be}from"./AlertDialogCancel.vue_vue_type_script_setup_true_lang-IP73fqKW.js";import{T as O}from"./trash-B4o3uv-3.js";import{P as ye,A as xe,a as we}from"./pen-line-ScdqQssm.js";import{_ as $e}from"./ComboBox.vue_vue_type_script_setup_true_lang-DoHRo6Sr.js";import{_ as Ce}from"./CategoryForm.vue_vue_type_script_setup_true_lang-CvqKchrV.js";import{_ as Te}from"./ConfirmDialog.vue_vue_type_script_setup_true_lang-BBFTtCyy.js";import{w as Se}from"./index-D9vEFx1F.js";import"./index-C_U3cZmw.js";import"./utils--eAPk3wG.js";import"./bundle-mjs-Dk7hgz7r.js";import"./CheckIcon-DHujsy87.js";import"./shadcn-BWvbMO9Q.js";/* empty css            */import"./Skeleton.vue_vue_type_script_setup_true_lang-CwX4h7MU.js";import"./AlertTitle.vue_vue_type_script_setup_true_lang-CBQCM0vd.js";import"./TableRow.vue_vue_type_script_setup_true_lang-Do6-hwVN.js";import"./createLucideIcon-CUtAwbGf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./store-lQ5NO2CO.js";import"./circle-user-Btxun51b.js";import"./badge-info-BDTBR86Q.js";import"./triangle-alert-iGUQzX3d.js";import"./DialogFooter.vue_vue_type_script_setup_true_lang-DzR2cMOx.js";import"./DialogDescription.vue_vue_type_script_setup_true_lang-CZ13K7oN.js";import"./vee-validate-zod.esm-ClXBN71o.js";import"./Label.vue_vue_type_script_setup_true_lang-BpbYhRRb.js";const De=c("span",null,"Hapus Data",-1),Pe=c("span",null,"Edit Data",-1),je=V({__name:"ButtonAction",props:{id:{type:String,required:!0}},emits:["deleted","updated"],setup(h,{emit:T}){const u=T,i=p(!1),v=d=>{u("deleted",d)},n=d=>{u("updated",d)};return(d,o)=>(C(),S("div",null,[a(t(re),null,{default:l(()=>[a(t(le),{"as-child":""},{default:l(()=>[a(t(y),{variant:"outline",size:"icon"},{default:l(()=>[a(t(ue),{class:"w-4 h-4"})]),_:1})]),_:1}),a(t(oe),{class:"w-10"},{default:l(()=>[a(t(ne),null,{default:l(()=>[f("Aksi")]),_:1}),a(t(ie)),a(t(de),null,{default:l(()=>[a(t(N),{onClick:o[0]||(o[0]=k=>i.value=!0)},{default:l(()=>[De,a(t(U),null,{default:l(()=>[a(t(O),{class:"w-4 h-4"})]),_:1})]),_:1}),a(t(N),{onClick:o[1]||(o[1]=k=>n(h.id))},{default:l(()=>[Pe,a(t(U),null,{default:l(()=>[a(t(ye),{class:"w-4 h-4"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(t(he),{open:i.value},{default:l(()=>[a(t(me),null,{default:l(()=>[a(t(pe),null,{default:l(()=>[a(t(fe),null,{default:l(()=>[f(" Apakah anda ingin menghapus data ini? ")]),_:1}),a(t(ge),null,{default:l(()=>[f(" Aksi ini akan menghapus data permanen dari sistem dan tidak bisa di kembalikan. ")]),_:1})]),_:1}),a(t(_e),null,{default:l(()=>[a(t(ve),{onClick:o[2]||(o[2]=k=>i.value=!1),class:"border-none"},{default:l(()=>[f(" Batalkan ")]),_:1}),a(t(ke),{onClick:o[3]||(o[3]=k=>v(h.id)),class:"bg-tomato"},{default:l(()=>[f(" Hapus Data ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]))}}),Ae={class:"space-y-2 mx-auto max-w-2xl"},Be={class:"space-y-2"},Fe={class:"flex items-center justify-between"},Ne=c("h1",{class:"text-lg font-semibold md:text-xl"},"Data Kategori",-1),Ue={class:"flex gap-2"},Ve={key:0,class:"flex gap-2"},Oe=c("strong",null,"+ tambah",-1),He={class:"w-full"},Ee={class:"flex items-center justify-between py-4"},Ie={class:"inline-flex items-center gap-3"},Ke=c("p",{class:"text-xs font-medium"},"Data Perpage :",-1),Re={layout:ce},wa=V({...Re,__name:"Index",props:{categories:Object,params:Object,showForm:Boolean,category:{required:!1,type:Object}},setup(h){var D,P,j,A;const T=p([{value:10,label:10},{value:25,label:25},{value:50,label:50},{value:100,label:100}]),u=p(!1),i=h,v=p((D=i.params)==null?void 0:D.search),n=p({sortName:(P=i.params)==null?void 0:P.sortName,sortType:(j=i.params)==null?void 0:j.sortType,perPage:(A=i.params)==null?void 0:A.perPage}),d=p({open:!1,title:"Tambah Kategori"}),o=p({open:!1,cancelText:"Batalkan",okText:"Hapus Data"}),k=p(null),H=[{id:"select",header:({table:e})=>g(B,{checked:e.getIsAllPageRowsSelected()||e.getIsSomePageRowsSelected()&&"indeterminate","onUpdate:checked":s=>{console.log(s),s?e.getRowModel().rows.forEach(w=>{m.value.push(w.original.id)}):(m.value=[],e.resetRowSelection()),e.toggleAllPageRowsSelected(!!s)},ariaLabel:"Select all"}),cell:({row:e})=>g(B,{id:"check",checked:e.getIsSelected(),"onUpdate:checked":s=>{s?m.value.push(e.original.id):m.value=m.value.filter(r=>r!==e.original.id),e.toggleSelected(!!s)},ariaLabel:"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:({column:e})=>g(y,{variant:"ghost",onClick:()=>{n.value.sortName="name",n.value.sortType=="asc"?n.value.sortType="desc":n.value.sortType="asc",x(_.value.current_page)},class:"w-full flex justify-between text-left px-0"},()=>{var s,r;return[g("div",{class:"gap-2 flex items-center"},[((s=i.params)==null?void 0:s.sortType)=="desc"&&((r=i.params)==null?void 0:r.sortName)=="name"?g(xe,{class:"h-4 w-4"}):g(we,{class:"h-4 w-4"}),"Kategori"])]}),cell:({row:e})=>g("div",{class:"capitalize"},e.getValue("name"))},{id:"actions",enableHiding:!1,cell:({row:e})=>{const s=e.original.id;return g("div",{class:"relative text-center"},g(je,{id:s,onDeleted:r=>K(r),onUpdated:r=>{R(r)}}))}}],m=p([]),E=F(()=>{var e;return(e=i.categories)==null?void 0:e.data}),_=F(()=>{var e;return(e=i.categories)==null?void 0:e.meta}),I=e=>{const s=p({page:e,perPage:n.value.perPage});return n.value.sortName!==null&&n.value.sortType!==null&&Object.assign(s.value,{sortName:n.value.sortName,sortType:n.value.sortType}),v!==null&&Object.assign(s.value,{search:v}),s},x=e=>{const s=I(e);$.get(route("backoffice.category.index"),s.value,{only:["categories","params"],preserveState:!0,preserveScroll:!0,onStart:()=>u.value=!0,onFinish:()=>u.value=!1})},K=e=>{$.delete(route("backoffice.category.delete",e),{onStart:()=>u.value=!0,onFinish:()=>u.value=!1})},R=e=>{$.get(route("backoffice.category.edit",e),{},{onStart:()=>u.value=!0,onFinish:()=>u.value=!1})},L=e=>x(e),q=()=>x(1),z=()=>d.value.open=!0,M=e=>d.value.open=!e,W=e=>{d.value.open=!e},Z=()=>{$.post(route("backoffice.category.delete-all"),{ids:m.value},{onFinish:()=>{var e;m.value=[],(e=k.value)==null||e.resetTable(),o.value.open=!1}})},G=()=>{var e;m.value=[],(e=k.value)==null||e.resetTable()};return Se(v,()=>{x(_.value.current_page)},{debounce:500,maxWait:1e3}),(e,s)=>{var r,w;return C(),S(ee,null,[a(t(ae),{title:"Data Kategori"}),c("div",Ae,[c("div",Be,[c("div",Fe,[Ne,c("div",Ue,[m.value.length>0?(C(),S("div",Ve,[a(t(y),{variant:"secondary",class:"flex items-center gap-2",onClick:G},{default:l(()=>[f(" Batalkan ")]),_:1}),a(t(y),{variant:"destructive",class:"flex items-center gap-2 font-semibold",size:"icon",onClick:s[0]||(s[0]=b=>o.value.open=!0)},{default:l(()=>[a(t(O),{class:"w-4 h-4","stroke-width":"3px"})]),_:1})])):(C(),Y(t(y),{key:1,variant:"default",onClick:z,class:"flex items-center gap-2 font-semibold"},{default:l(()=>[a(t(be),{class:"w-4 h-4","stroke-width":"3px"}),f(" Tambah ")]),_:1}))])]),a(t(X),{class:"bg-secondary shadow-inner shadow-gray-100"},{default:l(()=>[a(t(Q),{class:"text-xs"},{default:l(()=>[f(" Halaman untuk memanjemen data kategori yang di pakai pada produk atau jasa di sistem. Untuk menambah data baru silahkan mengklik tombol "),Oe]),_:1})]),_:1})]),c("div",He,[c("div",Ee,[a(t(J),{placeholder:"Cari kategori...",modelValue:v.value,"onUpdate:modelValue":s[1]||(s[1]=b=>v.value=b),class:"w-1/2 bg-white"},null,8,["modelValue"]),c("div",Ie,[Ke,a($e,{lists:T.value,modelValue:n.value.perPage,"onUpdate:modelValue":s[2]||(s[2]=b=>n.value.perPage=b),onChange:q,class:"w-100"},null,8,["lists","modelValue"])])]),a(se,{ref_key:"categoryTable",ref:k,columns:H,data:E.value,"current-page":_.value.current_page,"last-page":_.value.last_page,"prev-page":_.value.current_page,"next-page":_.value.to,total:_.value.total,loading:u.value,"per-page":_.value.per_page,onChangePage:L},null,8,["data","current-page","last-page","prev-page","next-page","total","loading","per-page"])]),a(Ce,{open:d.value.open||!!((r=h.category)!=null&&r.data),title:d.value.title,onClosed:M,onSaved:W,category:(w=h.category)==null?void 0:w.data},null,8,["open","title","category"]),a(Te,{open:o.value.open,"cancel-text":o.value.cancelText,"ok-text":o.value.okText,onCancel:s[3]||(s[3]=b=>o.value.open=!1),onOk:Z},{title:l(()=>[f(" Apakah anda ingin menghapus "+te(m.value.length)+" Data? ",1)]),description:l(()=>[f(" Data akan dihapus secara permanen dari sistem dan tidak bisa di kembalikan, mohon untuk mengecek kembali data yang akan dihapus. ")]),_:1},8,["open","cancel-text","ok-text"])])],64)}}});export{wa as default};
