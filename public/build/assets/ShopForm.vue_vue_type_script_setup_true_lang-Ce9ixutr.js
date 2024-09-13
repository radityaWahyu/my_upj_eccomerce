import{_ as I,a as P,b as j,c as z,d as G}from"./DialogFooter.vue_vue_type_script_setup_true_lang-CBG_UuKF.js";import{_ as J}from"./DialogDescription.vue_vue_type_script_setup_true_lang-DldlMAPa.js";import{u as Q,F as y,_ as b,a as x,b as F,c as S,t as C,o as w,s as f,d as B}from"./vee-validate-zod.esm-OZdPuuMn.js";import{d as X,Q as Z,r as q,T as H,x as O,o,e as L,w as n,b as s,u as a,f as m,t as _,a as R,n as V,m as T,c,i as g}from"./app-DWrmkJee.js";import{_ as v}from"./index-BahBl3_3.js";import{_ as W}from"./Input.vue_vue_type_script_setup_true_lang-B1K18eb9.js";import{_ as Y}from"./Textarea.vue_vue_type_script_setup_true_lang-CEBEGR1S.js";import{_ as aa,a as ea}from"./InputImage.vue_vue_type_script_setup_true_lang-C3luzdrE.js";const sa={key:0,class:"text-xs text-red-500 font-medium"},ta={key:0,class:"text-xs text-red-500 font-medium"},na={key:0,class:"text-xs text-red-500 font-medium"},ra={key:0},oa={key:1},ia=1e6,ha=X({__name:"ShopForm",props:{open:{type:Boolean,default:!0},title:{default:"Tambah Unit Layanan"},shop:{},edit:{type:Boolean,default:!1}},emits:["closed","saved"],setup(A,{emit:K}){const d=A,h=K,N=Z();q(!1);const $=t=>{if((t==null?void 0:t.size)<=ia)return!0},M=d.edit?C(w({name:f({message:"Unit Layanan harus diisi"}).min(1,{message:"Unit Layanan harus diisi."}),address:f({message:"Alamat Kantor harus diisi"}).min(1,{message:"Alamat Kantor harus diisi."}),image:B().refine(t=>$(t),"Ukuran gambar maksimal 1MB.").optional()})):C(w({name:f({message:"Unit Layanan harus diisi"}).min(1,{message:"Unit Layanan harus diisi."}),address:f({message:"Alamat Kantor harus diisi"}).min(1,{message:"Alamat Kantor harus diisi."}),image:B().refine(t=>t,"Gambar harus diisi").refine(t=>$(t),"Ukuran gambar maksimal 1MB.")})),l=Q({validationSchema:M}),e=H({id:"",name:"",address:"",_token:N.props.csrf_token,image:""});O(()=>d.shop,t=>{t!==null&&(e.name=t.name,e.image=t.image,e.address=t.address,l.setFieldValue("name",t.name),l.setFieldValue("address",t.address))},{immediate:!0});const E=()=>{e.name="",e.address="",e.image="",l.setFieldValue("name","")},D=()=>{e.clearErrors(),l.resetForm,d.shop?window.history.back():h("closed",!0)},k=l.handleSubmit(t=>{d.shop!==null?e.transform(r=>({...r,_method:"put"})).post(route("backoffice.shop.update",d.shop.id),{preserveState:!0,onSuccess:()=>{E(),h("saved",!0)}}):e.transform(r=>({...r,_method:"post"})).post(route("backoffice.shop.store"),{forceFormData:!0,onSuccess:()=>{h("saved",!0)}})});return(t,r)=>(o(),L(a(G),{open:t.open},{default:n(()=>[s(a(z),{class:"sm:max-w-[425px]"},{default:n(()=>{var U;return[s(a(I),null,{default:n(()=>[s(a(P),null,{default:n(()=>[m(_(t.title),1)]),_:1}),s(a(J),{class:"text-sm"},{default:n(()=>[m(" Unit Layanan dipergunakan untuk memanajemen Unit Pelayanan dan Jasa yang terdapat pada SMKN 1 Purwosari. Silahkan menginputkan data dengan benar. ")]),_:1})]),_:1}),R("form",{onSubmit:r[3]||(r[3]=(...i)=>a(k)&&a(k)(...i)),class:"space-y-2"},[s(a(y),{name:"name"},{default:n(({componentField:i})=>[s(a(b),null,{default:n(()=>[s(a(x),{class:V({"text-red-500":a(e).errors.name})},{default:n(()=>[m("Nama Unit")]),_:1},8,["class"]),s(a(F),null,{default:n(()=>[s(a(W),T({type:"text",placeholder:"Input nama unit"},i,{modelValue:a(e).name,"onUpdate:modelValue":r[0]||(r[0]=u=>a(e).name=u),class:{"border border-red-500":a(e).errors.name},disabled:a(e).processing}),null,16,["modelValue","class","disabled"])]),_:2},1024),a(e).errors.name?(o(),c("div",sa,_(a(e).errors.name),1)):g("",!0),s(a(S))]),_:2},1024)]),_:1}),s(a(y),{name:"address"},{default:n(({componentField:i})=>[s(a(b),null,{default:n(()=>[s(a(x),{class:V({"text-red-500":a(e).errors.address})},{default:n(()=>[m("Alamat Kantor")]),_:1},8,["class"]),s(a(F),null,{default:n(()=>[s(a(Y),T({placeholder:"inputkan alamat kantor"},i,{modelValue:a(e).address,"onUpdate:modelValue":r[1]||(r[1]=u=>a(e).address=u),class:"w-full"}),null,16,["modelValue"])]),_:2},1024),a(e).errors.address?(o(),c("div",ta,_(a(e).errors.address),1)):g("",!0),s(a(S))]),_:2},1024)]),_:1}),s(a(y),{name:"image"},{default:n(({componentField:i,field:u})=>[s(a(b),null,{default:n(()=>[s(a(x),{class:V({"text-red-500":a(e).errors.image})},{default:n(()=>[m("Gambar atau Logo Unit")]),_:1},8,["class"]),s(a(F),null,{default:n(()=>[s(aa,{class:"h-52",modelValue:a(e).image,"onUpdate:modelValue":r[2]||(r[2]=p=>a(e).image=p),onChange:p=>{a(e).image=p,u.onChange(p)},loading:a(e).processing},null,8,["modelValue","onChange","loading"])]),_:2},1024),a(e).errors.image?(o(),c("div",na,_(a(e).errors.image),1)):g("",!0),s(a(S))]),_:2},1024)]),_:1}),a(e).progress?(o(),L(a(ea),{key:0,value:(U=a(e).progress)==null?void 0:U.percentage,max:100,class:"w-full"},null,8,["value"])):g("",!0)],32),s(a(j),null,{default:n(()=>[s(a(v),{type:"button",variant:"ghost",form:"dialogForm",onClick:D,disabled:a(e).processing},{default:n(()=>[m(" Batal ")]),_:1},8,["disabled"]),s(a(v),{type:"submit",onClick:a(k),disabled:a(e).processing},{default:n(()=>[a(e).processing?(o(),c("span",ra,"Menyimpan data...")):(o(),c("span",oa,"Simpan"))]),_:1},8,["onClick","disabled"])]),_:1})]}),_:1})]),_:1},8,["open"]))}});export{ha as _};