import{_ as N}from"./Checkbox.vue_vue_type_script_setup_true_lang-DhaBZYXE.js";import{_ as x}from"./index-IVfVlWKZ.js";import{_ as G}from"./Input.vue_vue_type_script_setup_true_lang-B3RhvT1G.js";import{_ as Q,a as X}from"./index-cooXNWDH.js";import{d as P,r as f,o as $,c as S,b as a,w as l,u as t,f as d,a as o,t as T,j,e as Y,g as ee,h as _,F as y,Z as ae}from"./app-VVBlLu3H.js";import{_ as te}from"./DataTable.vue_vue_type_script_setup_true_lang-CQrxspvz.js";import{_ as se,a as le,b as oe,c as ne,d as B,e as ie,B as re}from"./Backoffice-C9BN6MVl.js";import{E as ce,_ as pe,a as F}from"./DropdownMenuShortcut.vue_vue_type_script_setup_true_lang-Dtsxv5yW.js";import{_ as de,a as ue,b as me,c as fe,d as _e,e as ge,f as he,g as ve,P as ke}from"./AlertDialogCancel.vue_vue_type_script_setup_true_lang-BFUAQLeM.js";import{T as V}from"./trash-n2ggFgX_.js";import{P as be,A as xe,a as $e}from"./pen-line-BG1Hw8jb.js";import{_ as we}from"./ComboBox.vue_vue_type_script_setup_true_lang-D1h3IVtm.js";import{_ as ye}from"./ConfirmDialog.vue_vue_type_script_setup_true_lang-BK2ER5-3.js";import{_ as Se}from"./ShopForm.vue_vue_type_script_setup_true_lang-CX7rRUkW.js";import{w as Te}from"./index-BTdzhXb_.js";import"./index-C2vJFdsm.js";import"./utils--eAPk3wG.js";import"./bundle-mjs-Dk7hgz7r.js";import"./CheckIcon-Bhv5fT4T.js";import"./shadcn-BWvbMO9Q.js";/* empty css            */import"./Skeleton.vue_vue_type_script_setup_true_lang-zlGamlJV.js";import"./AlertTitle.vue_vue_type_script_setup_true_lang-CK6ADFfV.js";import"./TableRow.vue_vue_type_script_setup_true_lang-3fbnUf25.js";import"./octagon-alert-BkhDWzNB.js";import"./createLucideIcon-Dy4Ve4_2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./store-QflOsA8z.js";import"./circle-user-BBs2dHq1.js";import"./badge-info-CxtQ4P4Z.js";import"./triangle-alert-DOKzRET9.js";import"./DialogFooter.vue_vue_type_script_setup_true_lang-DhLbcmfa.js";import"./DialogDescription.vue_vue_type_script_setup_true_lang-CK_s4W_R.js";import"./vee-validate-zod.esm-Cr2r-YEc.js";import"./Label.vue_vue_type_script_setup_true_lang-DbSsO4rL.js";import"./Textarea.vue_vue_type_script_setup_true_lang-DXVvRn7_.js";import"./InputImage.vue_vue_type_script_setup_true_lang-DhvjBUY3.js";import"./x-BKFXOOGz.js";const Pe=o("span",null,"Hapus Data",-1),Ce=o("span",null,"Edit Data",-1),De=P({__name:"ButtonAction",props:{id:{type:String,required:!0}},emits:["deleted","updated"],setup(b,{emit:g}){const p=g,c=f(!1),v=u=>{p("deleted",u)},r=u=>{p("updated",u)};return(u,n)=>($(),S("div",null,[a(t(ie),null,{default:l(()=>[a(t(se),{"as-child":""},{default:l(()=>[a(t(x),{variant:"outline",size:"icon"},{default:l(()=>[a(t(ce),{class:"w-4 h-4"})]),_:1})]),_:1}),a(t(le),{class:"w-10"},{default:l(()=>[a(t(oe),null,{default:l(()=>[d("Aksi")]),_:1}),a(t(ne)),a(t(pe),null,{default:l(()=>[a(t(B),{onClick:n[0]||(n[0]=k=>c.value=!0)},{default:l(()=>[Pe,a(t(F),null,{default:l(()=>[a(t(V),{class:"w-4 h-4"})]),_:1})]),_:1}),a(t(B),{onClick:n[1]||(n[1]=k=>r(b.id))},{default:l(()=>[Ce,a(t(F),null,{default:l(()=>[a(t(be),{class:"w-4 h-4"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(t(ve),{open:c.value},{default:l(()=>[a(t(de),null,{default:l(()=>[a(t(ue),null,{default:l(()=>[a(t(me),null,{default:l(()=>[d(" Apakah anda ingin menghapus data ini? ")]),_:1}),a(t(fe),null,{default:l(()=>[d(" Aksi ini akan menghapus data permanen dari sistem dan tidak bisa di kembalikan. ")]),_:1})]),_:1}),a(t(_e),null,{default:l(()=>[a(t(ge),{onClick:n[2]||(n[2]=k=>c.value=!1),class:"border-none"},{default:l(()=>[d(" Batalkan ")]),_:1}),a(t(he),{onClick:n[3]||(n[3]=k=>v(b.id)),class:"bg-tomato"},{default:l(()=>[d(" Hapus Data ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]))}}),Ue={class:"flex items-center gap-4"},Ae={class:"w-1/8"},Ne={class:"h-10 w-10 rounded-lg overflow-hidden"},je=["src","alt"],Be={class:"capitalize font-normal space-y-1"},Fe={class:"font-semibold text-gray-900 text-sm"},Ve={class:"text-xs"},Le=o("span",{class:"block"},"Alamat :",-1),He=P({__name:"ShopDetail",props:{shop:{}},setup(b){return(g,p)=>($(),S("div",Ue,[o("div",Ae,[o("div",Ne,[o("img",{src:g.shop.image,alt:g.shop.name,class:"object-cover object-top w-full h-full"},null,8,je)])]),o("div",Be,[o("h4",Fe,T(g.shop.name),1),o("p",Ve,[Le,d(T(g.shop.address),1)])])]))}}),Ee={class:"space-y-2 mx-auto max-w-2xl"},Ie={class:"space-y-2"},Re={class:"flex items-center justify-between"},Oe=o("h1",{class:"text-lg font-semibold md:text-xl"}," Unit Pelayanan Jasa ",-1),ze={class:"flex gap-2"},Me={key:0,class:"flex gap-2"},qe=o("strong",null,"+ tambah",-1),Je={class:"w-full"},Ke={class:"flex items-center justify-between py-4"},We={class:"inline-flex items-center gap-3"},Ze=o("p",{class:"text-xs font-medium"},"Data Perpage :",-1),Ge={layout:re},Fa=P({...Ge,__name:"Index",props:{shops:{},params:{},shop:{}},setup(b){var C,D,U,A;const g=f([{value:10,label:10},{value:25,label:25},{value:50,label:50},{value:100,label:100}]),p=f(!1),c=b,v=f((C=c.params)==null?void 0:C.search),r=f({sortName:(D=c.params)==null?void 0:D.sortName,sortType:(U=c.params)==null?void 0:U.sortType,perPage:(A=c.params)==null?void 0:A.perPage}),u=f({open:!1,title:"Tambah Unit Layanan"}),n=f({open:!1,cancelText:"Batalkan",okText:"Hapus Data"}),k=f(null),L=[{id:"select",header:({table:e})=>_(N,{checked:e.getIsAllPageRowsSelected()||e.getIsSomePageRowsSelected()&&"indeterminate","onUpdate:checked":s=>{console.log(s),s?e.getRowModel().rows.forEach(Z=>{m.value.push(Z.original.id)}):(m.value=[],e.resetRowSelection()),e.toggleAllPageRowsSelected(!!s)},ariaLabel:"Select all"}),cell:({row:e})=>_(N,{class:"mr-5",id:"check",checked:e.getIsSelected(),"onUpdate:checked":s=>{s?m.value.push(e.original.id):m.value=m.value.filter(i=>i!==e.original.id),e.toggleSelected(!!s)},ariaLabel:"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:({column:e})=>_(x,{variant:"ghost",onClick:()=>{r.value.sortName="name",r.value.sortType=="asc"?r.value.sortType="desc":r.value.sortType="asc",w(h.value.current_page)},class:"w-full flex justify-between text-left px-0"},()=>{var s,i;return[_("div",{class:"gap-2 flex items-center "},[((s=c.params)==null?void 0:s.sortType)=="desc"&&((i=c.params)==null?void 0:i.sortName)=="name"?_(xe,{class:"h-4 w-4"}):_($e,{class:"h-4 w-4"}),"Unit Layanan"])]}),cell:({row:e})=>_(He,{class:"w-[450px]",shop:{id:e.original.id,name:e.original.name,image:e.original.image,address:e.original.address}})},{id:"actions",enableHiding:!1,cell:({row:e})=>{const s=e.original.id;return _("div",{class:"relative text-center"},_(De,{id:s,onDeleted:i=>I(i),onUpdated:i=>{R(i)}}))}}],m=f([]),H=j(()=>{var e;return(e=c.shops)==null?void 0:e.data}),h=j(()=>{var e;return(e=c.shops)==null?void 0:e.meta}),E=e=>{const s=f({page:e,perPage:r.value.perPage});return r.value.sortName!==null&&r.value.sortType!==null&&Object.assign(s.value,{sortName:r.value.sortName,sortType:r.value.sortType}),v!==null&&Object.assign(s.value,{search:v}),s},w=e=>{const s=E(e);y.get(route("backoffice.shop.index"),s.value,{only:["shops","params"],preserveState:!0,preserveScroll:!0,onStart:()=>p.value=!0,onFinish:()=>p.value=!1})},I=e=>{y.delete(route("backoffice.shop.delete",e),{onStart:()=>p.value=!0,onFinish:()=>p.value=!1})},R=e=>{y.get(route("backoffice.shop.edit",e),{},{onStart:()=>p.value=!0,onFinish:()=>p.value=!1})},O=e=>w(e),z=()=>w(1),M=()=>u.value.open=!0,q=e=>u.value.open=!e,J=e=>{u.value.open=!e},K=()=>{y.post(route("backoffice.shop.delete-all"),{ids:m.value},{onFinish:()=>{var e;m.value=[],(e=k.value)==null||e.resetTable(),n.value.open=!1}})},W=()=>{var e;m.value=[],(e=k.value)==null||e.resetTable()};return Te(v,()=>{w(h.value.current_page)},{debounce:500,maxWait:1e3}),(e,s)=>($(),S(ee,null,[a(t(ae),{title:"Unit Layanan"}),o("div",Ee,[o("div",Ie,[o("div",Re,[Oe,o("div",ze,[m.value.length>0?($(),S("div",Me,[a(t(x),{variant:"secondary",class:"flex items-center gap-2",onClick:W},{default:l(()=>[d(" Batalkan ")]),_:1}),a(t(x),{variant:"destructive",class:"flex items-center gap-2 font-semibold",size:"icon",onClick:s[0]||(s[0]=i=>n.value.open=!0)},{default:l(()=>[a(t(V),{class:"w-4 h-4","stroke-width":"3px"})]),_:1})])):($(),Y(t(x),{key:1,variant:"default",onClick:M,class:"flex items-center gap-2 font-semibold"},{default:l(()=>[a(t(ke),{class:"w-4 h-4","stroke-width":"3px"}),d(" Tambah ")]),_:1}))])]),a(t(X),{class:"bg-secondary shadow-inner shadow-gray-100"},{default:l(()=>[a(t(Q),{class:"text-xs"},{default:l(()=>[d(" Halaman untuk memanajemen Unit Pelayanan Jasa yang terdapat pada SMKN 1 Purwosari. Untuk menambah data baru silahkan mengklik tombol "),qe]),_:1})]),_:1})]),o("div",Je,[o("div",Ke,[a(t(G),{placeholder:"Cari Unit layanan...",modelValue:v.value,"onUpdate:modelValue":s[1]||(s[1]=i=>v.value=i),class:"w-1/2 bg-white"},null,8,["modelValue"]),o("div",We,[Ze,a(we,{lists:g.value,modelValue:r.value.perPage,"onUpdate:modelValue":s[2]||(s[2]=i=>r.value.perPage=i),onChange:z,class:"w-100"},null,8,["lists","modelValue"])])]),a(te,{ref_key:"shopTable",ref:k,columns:L,data:H.value,"current-page":h.value.current_page,"last-page":h.value.last_page,"prev-page":h.value.current_page,"next-page":h.value.to,total:h.value.total,loading:p.value,"per-page":h.value.per_page,onChangePage:O},null,8,["data","current-page","last-page","prev-page","next-page","total","loading","per-page"])]),a(Se,{open:u.value.open||!!e.shop,title:u.value.title,onClosed:q,onSaved:J,shop:e.shop,edit:!!e.shop},null,8,["open","title","shop","edit"]),a(ye,{open:n.value.open,"cancel-text":n.value.cancelText,"ok-text":n.value.okText,onCancel:s[3]||(s[3]=i=>n.value.open=!1),onOk:K},{title:l(()=>[d(" Apakah anda ingin menghapus "+T(m.value.length)+" Data? ",1)]),description:l(()=>[d(" Data akan dihapus secara permanen dari sistem dan tidak bisa di kembalikan, mohon untuk mengecek kembali data yang akan dihapus. ")]),_:1},8,["open","cancel-text","ok-text"])])],64))}});export{Fa as default};
