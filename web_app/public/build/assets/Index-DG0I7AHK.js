import{_ as N}from"./Checkbox.vue_vue_type_script_setup_true_lang-CTkJZ1i0.js";import{_ as $}from"./index-CK4-x1fb.js";import{_ as X}from"./Input.vue_vue_type_script_setup_true_lang-NO41PE8l.js";import{_ as Y,a as ee}from"./index-Fp4fi9lO.js";import{d as D,r as f,o as w,c as P,b as a,w as l,u as t,f as p,a as o,t as C,j as V,e as ae,g as te,h as _,F as T,Z as se}from"./app-Dfzx8MWc.js";import{_ as le}from"./DataTable.vue_vue_type_script_setup_true_lang-DdANXjqI.js";import{_ as oe,a as ne,b as ie,c as re,d as L,e as ce,B as de}from"./Backoffice-UNxnvJsN.js";import{E as pe,_ as ue,a as O}from"./DropdownMenuShortcut.vue_vue_type_script_setup_true_lang-OGqY8Py6.js";import{_ as me,a as fe,b as _e,c as ge,d as he,e as ve,f as ke,g as be,P as xe}from"./AlertDialogCancel.vue_vue_type_script_setup_true_lang-IP73fqKW.js";import{T as H}from"./trash-B4o3uv-3.js";import{P as $e,A as we,a as ye}from"./pen-line-ScdqQssm.js";import{_ as Se}from"./ComboBox.vue_vue_type_script_setup_true_lang-DoHRo6Sr.js";import{_ as Te}from"./ConfirmDialog.vue_vue_type_script_setup_true_lang-BBFTtCyy.js";import{_ as Pe}from"./ShopForm.vue_vue_type_script_setup_true_lang-CdFP9tNB.js";import{w as Ce}from"./index-D9vEFx1F.js";import"./index-C_U3cZmw.js";import"./utils--eAPk3wG.js";import"./bundle-mjs-Dk7hgz7r.js";import"./CheckIcon-DHujsy87.js";import"./shadcn-BWvbMO9Q.js";/* empty css            */import"./Skeleton.vue_vue_type_script_setup_true_lang-CwX4h7MU.js";import"./AlertTitle.vue_vue_type_script_setup_true_lang-CBQCM0vd.js";import"./TableRow.vue_vue_type_script_setup_true_lang-Do6-hwVN.js";import"./createLucideIcon-CUtAwbGf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./store-lQ5NO2CO.js";import"./circle-user-Btxun51b.js";import"./badge-info-BDTBR86Q.js";import"./triangle-alert-iGUQzX3d.js";import"./DialogFooter.vue_vue_type_script_setup_true_lang-DzR2cMOx.js";import"./DialogDescription.vue_vue_type_script_setup_true_lang-CZ13K7oN.js";import"./vee-validate-zod.esm-ClXBN71o.js";import"./Label.vue_vue_type_script_setup_true_lang-BpbYhRRb.js";import"./Textarea.vue_vue_type_script_setup_true_lang-BTWmCDLV.js";import"./InputImage.vue_vue_type_script_setup_true_lang-CiOVyXnQ.js";import"./x-iBvkjVyV.js";const De=o("span",null,"Hapus Data",-1),Ue=o("span",null,"Edit Data",-1),je=D({__name:"ButtonAction",props:{id:{type:String,required:!0}},emits:["deleted","updated"],setup(g,{emit:h}){const d=h,r=f(!1),k=u=>{d("deleted",u)},i=u=>{d("updated",u)};return(u,n)=>(w(),P("div",null,[a(t(ce),null,{default:l(()=>[a(t(oe),{"as-child":""},{default:l(()=>[a(t($),{variant:"outline",size:"icon"},{default:l(()=>[a(t(pe),{class:"w-4 h-4"})]),_:1})]),_:1}),a(t(ne),{class:"w-10"},{default:l(()=>[a(t(ie),null,{default:l(()=>[p("Aksi")]),_:1}),a(t(re)),a(t(ue),null,{default:l(()=>[a(t(L),{onClick:n[0]||(n[0]=b=>r.value=!0)},{default:l(()=>[De,a(t(O),null,{default:l(()=>[a(t(H),{class:"w-4 h-4"})]),_:1})]),_:1}),a(t(L),{onClick:n[1]||(n[1]=b=>i(g.id))},{default:l(()=>[Ue,a(t(O),null,{default:l(()=>[a(t($e),{class:"w-4 h-4"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(t(be),{open:r.value},{default:l(()=>[a(t(me),null,{default:l(()=>[a(t(fe),null,{default:l(()=>[a(t(_e),null,{default:l(()=>[p(" Apakah anda ingin menghapus data ini? ")]),_:1}),a(t(ge),null,{default:l(()=>[p(" Aksi ini akan menghapus data permanen dari sistem dan tidak bisa di kembalikan. ")]),_:1})]),_:1}),a(t(he),null,{default:l(()=>[a(t(ve),{onClick:n[2]||(n[2]=b=>r.value=!1),class:"border-none"},{default:l(()=>[p(" Batalkan ")]),_:1}),a(t(ke),{onClick:n[3]||(n[3]=b=>k(g.id)),class:"bg-tomato"},{default:l(()=>[p(" Hapus Data ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]))}}),Ae={class:"flex items-center gap-4"},Be={class:"w-1/8"},Fe={class:"h-10 w-10 rounded-lg overflow-hidden"},Ne=["src","alt"],Ve={class:"capitalize font-normal space-y-1"},Le={class:"font-semibold text-gray-900 text-sm"},Oe={class:"text-xs"},He=o("span",{class:"block"},"Alamat :",-1),Ee=D({__name:"ShopDetail",props:{shop:{}},setup(g){return(h,d)=>(w(),P("div",Ae,[o("div",Be,[o("div",Fe,[o("img",{src:h.shop.image,alt:h.shop.name,class:"object-cover object-top w-full h-full"},null,8,Ne)])]),o("div",Ve,[o("h4",Le,C(h.shop.name),1),o("p",Oe,[He,p(C(h.shop.address),1)])])]))}}),Ie={class:"space-y-2 mx-auto max-w-2xl"},Re={class:"space-y-2"},qe={class:"flex items-center justify-between"},ze=o("h1",{class:"text-lg font-semibold md:text-xl"}," Unit Pelayanan Jasa ",-1),Me={class:"flex gap-2"},Je={key:0,class:"flex gap-2"},Ke=o("strong",null,"+ tambah",-1),We={class:"w-full"},Ze={class:"flex items-center justify-between py-4"},Ge={class:"inline-flex items-center gap-3"},Qe=o("p",{class:"text-xs font-medium"},"Data Perpage :",-1),Xe={layout:de},Va=D({...Xe,__name:"Index",props:{shops:Object,params:Object,showForm:Boolean,shop:{required:!1,type:Object}},setup(g){var U,j,A,B;const h=f([{value:10,label:10},{value:25,label:25},{value:50,label:50},{value:100,label:100}]),d=f(!1),r=g,k=f((U=r.params)==null?void 0:U.search),i=f({sortName:(j=r.params)==null?void 0:j.sortName,sortType:(A=r.params)==null?void 0:A.sortType,perPage:(B=r.params)==null?void 0:B.perPage}),u=f({open:!1,title:"Tambah Unit Layanan"}),n=f({open:!1,cancelText:"Batalkan",okText:"Hapus Data"}),b=f(null),E=[{id:"select",header:({table:e})=>_(N,{checked:e.getIsAllPageRowsSelected()||e.getIsSomePageRowsSelected()&&"indeterminate","onUpdate:checked":s=>{console.log(s),s?e.getRowModel().rows.forEach(S=>{m.value.push(S.original.id)}):(m.value=[],e.resetRowSelection()),e.toggleAllPageRowsSelected(!!s)},ariaLabel:"Select all"}),cell:({row:e})=>_(N,{class:"mr-5",id:"check",checked:e.getIsSelected(),"onUpdate:checked":s=>{s?m.value.push(e.original.id):m.value=m.value.filter(c=>c!==e.original.id),e.toggleSelected(!!s)},ariaLabel:"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:({column:e})=>_($,{variant:"ghost",onClick:()=>{i.value.sortName="name",i.value.sortType=="asc"?i.value.sortType="desc":i.value.sortType="asc",y(v.value.current_page)},class:"w-full flex justify-between text-left px-0"},()=>{var s,c;return[_("div",{class:"gap-2 flex items-center "},[((s=r.params)==null?void 0:s.sortType)=="desc"&&((c=r.params)==null?void 0:c.sortName)=="name"?_(we,{class:"h-4 w-4"}):_(ye,{class:"h-4 w-4"}),"Unit Layanan"])]}),cell:({row:e})=>_(Ee,{class:"w-[450px]",shop:{id:e.original.id,name:e.original.name,image:e.original.image,address:e.original.address}})},{id:"actions",enableHiding:!1,cell:({row:e})=>{const s=e.original.id;return _("div",{class:"relative text-center"},_(je,{id:s,onDeleted:c=>q(c),onUpdated:c=>{z(c)}}))}}],m=f([]),I=V(()=>{var e;return(e=r.shops)==null?void 0:e.data}),v=V(()=>{var e;return(e=r.shops)==null?void 0:e.meta}),R=e=>{const s=f({page:e,perPage:i.value.perPage});return i.value.sortName!==null&&i.value.sortType!==null&&Object.assign(s.value,{sortName:i.value.sortName,sortType:i.value.sortType}),k!==null&&Object.assign(s.value,{search:k}),s},y=e=>{const s=R(e);T.get(route("backoffice.shop.index"),s.value,{only:["shops","params"],preserveState:!0,preserveScroll:!0,onStart:()=>d.value=!0,onFinish:()=>d.value=!1})},q=e=>{T.delete(route("backoffice.shop.delete",e),{onStart:()=>d.value=!0,onFinish:()=>d.value=!1})},z=e=>{T.get(route("backoffice.shop.edit",e),{},{onStart:()=>d.value=!0,onFinish:()=>d.value=!1})},M=e=>y(e),J=()=>y(1),K=()=>u.value.open=!0,W=e=>u.value.open=!e,Z=e=>{u.value.open=!e},G=()=>{T.post(route("backoffice.shop.delete-all"),{ids:m.value},{onFinish:()=>{var e;m.value=[],(e=b.value)==null||e.resetTable(),n.value.open=!1}})},Q=()=>{var e;m.value=[],(e=b.value)==null||e.resetTable()};return Ce(k,()=>{y(v.value.current_page)},{debounce:500,maxWait:1e3}),(e,s)=>{var c,S,F;return w(),P(te,null,[a(t(se),{title:"Unit Layanan"}),o("div",Ie,[o("div",Re,[o("div",qe,[ze,o("div",Me,[m.value.length>0?(w(),P("div",Je,[a(t($),{variant:"secondary",class:"flex items-center gap-2",onClick:Q},{default:l(()=>[p(" Batalkan ")]),_:1}),a(t($),{variant:"destructive",class:"flex items-center gap-2 font-semibold",size:"icon",onClick:s[0]||(s[0]=x=>n.value.open=!0)},{default:l(()=>[a(t(H),{class:"w-4 h-4","stroke-width":"3px"})]),_:1})])):(w(),ae(t($),{key:1,variant:"default",onClick:K,class:"flex items-center gap-2 font-semibold"},{default:l(()=>[a(t(xe),{class:"w-4 h-4","stroke-width":"3px"}),p(" Tambah ")]),_:1}))])]),a(t(ee),{class:"bg-secondary shadow-inner shadow-gray-100"},{default:l(()=>[a(t(Y),{class:"text-xs"},{default:l(()=>[p(" Halaman untuk memanajemen Unit Pelayanan Jasa yang terdapat pada SMKN 1 Purwosari. Untuk menambah data baru silahkan mengklik tombol "),Ke]),_:1})]),_:1})]),o("div",We,[o("div",Ze,[a(t(X),{placeholder:"Cari Unit layanan...",modelValue:k.value,"onUpdate:modelValue":s[1]||(s[1]=x=>k.value=x),class:"w-1/2 bg-white"},null,8,["modelValue"]),o("div",Ge,[Qe,a(Se,{lists:h.value,modelValue:i.value.perPage,"onUpdate:modelValue":s[2]||(s[2]=x=>i.value.perPage=x),onChange:J,class:"w-100"},null,8,["lists","modelValue"])])]),a(le,{ref_key:"shopTable",ref:b,columns:E,data:I.value,"current-page":v.value.current_page,"last-page":v.value.last_page,"prev-page":v.value.current_page,"next-page":v.value.to,total:v.value.total,loading:d.value,"per-page":v.value.per_page,onChangePage:M},null,8,["data","current-page","last-page","prev-page","next-page","total","loading","per-page"])]),a(Pe,{open:u.value.open||!!((c=g.shop)!=null&&c.data),title:u.value.title,onClosed:W,onSaved:Z,shop:(S=g.shop)==null?void 0:S.data,edit:!!((F=g.shop)!=null&&F.data)},null,8,["open","title","shop","edit"]),a(Te,{open:n.value.open,"cancel-text":n.value.cancelText,"ok-text":n.value.okText,onCancel:s[3]||(s[3]=x=>n.value.open=!1),onOk:G},{title:l(()=>[p(" Apakah anda ingin menghapus "+C(m.value.length)+" Data? ",1)]),description:l(()=>[p(" Data akan dihapus secara permanen dari sistem dan tidak bisa di kembalikan, mohon untuk mengecek kembali data yang akan dihapus. ")]),_:1},8,["open","cancel-text","ok-text"])])],64)}}});export{Va as default};
