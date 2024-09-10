import{d as U,Q as $,T as A,o as n,c as u,b as t,u as e,a,w as o,f as p,g as C,Z as D,n as f,z as g,A as _,m as h,t as b,e as x}from"./app-B5kgQ0yE.js";import{u as M,t as E,o as W,s as y,_ as k,a as w,b as v,c as V,F}from"./vee-validate-zod.esm-BcU2sNtd.js";import{v as P}from"./index-BDRfhKOx.js";import{_ as j}from"./Frontend.vue_vue_type_script_setup_true_lang-D_fISIkY.js";import"./index-B1k5Xevh.js";import"./utils--eAPk3wG.js";import"./bundle-mjs-Dk7hgz7r.js";import"./Label.vue_vue_type_script_setup_true_lang-BMCsbbQw.js";import"./Header.vue_vue_type_script_setup_true_lang-C_yve1l9.js";import"./Input.vue_vue_type_script_setup_true_lang-DlDJHqPY.js";import"./index-BItyHX7r.js";import"./shadcn-BWvbMO9Q.js";import"./createLucideIcon-DvLFynmH.js";import"./circle-user-C3Zi1lEB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Footer.vue_vue_type_script_setup_true_lang-DjCmEaAT.js";const z={class:"lg:container p-4 min-h-[600px]"},q={class:"w-3/4 px-4 mt-2 mx-auto"},H=a("blockquote",{class:"my-6 border-l-2 pl-6 italic text-sm"},[a("strong",null,"Keterangan :"),p(" Halaman ini dipergunakan untuk mengupdate profil pelanggan. Pastikan anda memberikan data yang valid sesuai dengan yang diminta oleh form isian. ")],-1),K=["disabled"],L={key:0,class:"text-xs text-red-500 font-medium"},Q={class:"flex items-center gap-2"},Z={class:"grow"},G=["disabled"],I={key:0,class:"text-xs text-red-500 font-medium"},J={class:"grow"},O=["disabled"],R={key:0,class:"text-xs text-red-500 font-medium"},X=["disabled"],Y={key:0,class:"text-xs text-red-500 font-medium"},ee=["disabled"],se={key:0,class:"flex items-center gap-2 justify-center"},ae=a("svg",{class:"h-4 w-4 animate-spin",viewBox:"0 0 100 100"},[a("circle",{fill:"none","stroke-width":"10",class:"stroke-current opacity-40",cx:"50",cy:"50",r:"40"}),a("circle",{fill:"none","stroke-width":"10",class:"stroke-current","stroke-dasharray":"250","stroke-dashoffset":"210",cx:"50",cy:"50",r:"40"})],-1),te={key:1},oe={layout:j},we=U({...oe,__name:"ProfilEditForm",props:{customer:{}},setup(T){const d=T,S=$(),N=E(W({name:y({message:"Pegawai harus diisi"}).min(1,{message:"Pegawai harus diisi."}),address:y({message:"Alamat harus diisi"}).min(1,{message:"Alamat harus diisi."}),whatsapp:y({message:"Whatsapp harus diisi angka"}).refine(P.isMobilePhone,{message:"Whatsapp harus diisi angka"}),phone:y({message:"Telepon harus diisi angka"}).refine(P.isMobilePhone,{message:"Telepone harus diisi angka"})})),m=M({validationSchema:N});m.setFieldValue("name",d.customer.name),m.setFieldValue("phone",d.customer.phone),m.setFieldValue("whatsapp",d.customer.whatsapp),m.setFieldValue("address",d.customer.address);const s=A({_token:S.props.csrf_token,name:d.customer.name,phone:d.customer.phone,whatsapp:d.customer.whatsapp,address:d.customer.address}),c=m.handleSubmit(B=>{s.put(route("frontend.profil.update"),{onError:r=>console.log(r)})});return(B,r)=>(n(),u(C,null,[t(e(D),{title:"Daftar Transaksi"}),a("div",z,[a("div",q,[H,a("div",null,[a("form",{onSubmit:r[5]||(r[5]=(...l)=>e(c)&&e(c)(...l)),class:"space-y-3 mb-6"},[a("div",null,[t(e(F),{name:"name"},{default:o(({componentField:l})=>[t(e(k),null,{default:o(()=>[t(e(w),{class:f({"text-red-500":e(s).errors.name})},{default:o(()=>[p("Nama Lengkap")]),_:1},8,["class"]),t(e(v),null,{default:o(()=>[g(a("input",h({type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2",placeholder:"ex:radit"},l,{"onUpdate:modelValue":r[0]||(r[0]=i=>e(s).name=i),disabled:e(s).processing}),null,16,K),[[_,e(s).name]])]),_:2},1024),e(s).errors.name?(n(),u("p",L,b(e(s).errors.name),1)):(n(),x(e(V),{key:1}))]),_:2},1024)]),_:1})]),a("div",Q,[a("div",Z,[t(e(F),{name:"phone"},{default:o(({componentField:l})=>[t(e(k),null,{default:o(()=>[t(e(w),{class:f({"text-red-500":e(s).errors.phone})},{default:o(()=>[p(" No Telepon ")]),_:1},8,["class"]),t(e(v),null,{default:o(()=>[g(a("input",h({type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2",placeholder:"ex: 08534225423"},l,{"onUpdate:modelValue":r[1]||(r[1]=i=>e(s).phone=i),disabled:e(s).processing}),null,16,G),[[_,e(s).phone]])]),_:2},1024),e(s).errors.phone?(n(),u("p",I,b(e(s).errors.phone),1)):(n(),x(e(V),{key:1}))]),_:2},1024)]),_:1})]),a("div",J,[t(e(F),{name:"whatsapp",class:"grow"},{default:o(({componentField:l})=>[t(e(k),null,{default:o(()=>[t(e(w),{class:f({"text-red-500":e(s).errors.whatsapp})},{default:o(()=>[p(" No. Whatsapp ")]),_:1},8,["class"]),t(e(v),null,{default:o(()=>[g(a("input",h({type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2",placeholder:"ex: 08534225423"},l,{"onUpdate:modelValue":r[2]||(r[2]=i=>e(s).whatsapp=i),disabled:e(s).processing}),null,16,O),[[_,e(s).whatsapp]])]),_:2},1024),e(s).errors.whatsapp?(n(),u("p",R,b(e(s).errors.whatsapp),1)):(n(),x(e(V),{key:1}))]),_:2},1024)]),_:1})])]),a("div",null,[t(e(F),{name:"address",class:"grow-0"},{default:o(({componentField:l})=>[t(e(k),null,{default:o(()=>[t(e(w),{class:f({"text-red-500":e(s).errors.address})},{default:o(()=>[p(" Alamat ")]),_:1},8,["class"]),t(e(v),null,{default:o(()=>[g(a("textarea",h({class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2",placeholder:"ex: alamat lengkap","onUpdate:modelValue":r[3]||(r[3]=i=>e(s).address=i)},l,{rows:"8",disabled:e(s).processing}),null,16,X),[[_,e(s).address]])]),_:2},1024),e(s).errors.address?(n(),u("p",Y,b(e(s).errors.address),1)):(n(),x(e(V),{key:1}))]),_:2},1024)]),_:1})]),a("div",null,[a("button",{type:"submit",onClick:r[4]||(r[4]=(...l)=>e(c)&&e(c)(...l)),class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-semibold rounded text-sm px-5 py-2.5 text-center",disabled:e(s).processing},[e(s).processing?(n(),u("span",se,[ae,p(" Mengupdate Profil.. ")])):(n(),u("span",te,"Update Profil Saya"))],8,ee)])],32)])])])],64))}});export{we as default};
