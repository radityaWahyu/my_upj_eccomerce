import{d as a,o as l,e as n,w as c,a as e,n as p,t,u as s,l as d}from"./app-C0OAXs9y.js";import{N as i}from"./no-image-DVr5fu4Z.js";const u={class:"static w-full flex flex-col bg-lemonchiffon/85 rounded-md drop-shadow-sm overflow-hidden group h-full"},f={class:"relative overflow-hidden h-[200px]"},m=["src"],h={class:"flex flex-col text-left p-2"},g={class:"text-[12px] font-normal"},_={class:"text-sm font-semibold"},b={class:"text-[10px] font-light"},D=a({__name:"Product",props:{product:{}},setup(v){const r=o=>new Intl.NumberFormat("en-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(o);return(o,w)=>(l(),n(s(d),{href:o.route("frontend.product.details",o.product.slug)},{default:c(()=>[e("div",u,[e("div",f,[e("div",{class:p(["absolute top-0 z-10 text-[12px] px-2 py-1 capitalize",{"bg-orange-200":o.product.type==="produk","bg-yellow-200":o.product.type==="jasa"}])},t(o.product.type),3),e("img",{src:o.product.image?o.product.image:s(i),alt:"product-one",class:"rounded-t-md h-full w-full object-cover object-top group-hover:scale-125 transition-all duration-300 ease-in-out transform bg-center"},null,8,m)]),e("div",h,[e("p",g,t(o.product.name),1),e("p",_,t(r(o.product.price)),1),e("p",b,t(o.product.shop),1)])])]),_:1},8,["href"]))}});export{D as _};
