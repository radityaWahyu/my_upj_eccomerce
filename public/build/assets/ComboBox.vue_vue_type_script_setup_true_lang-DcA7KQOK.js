import{d as m,N as a,O as c,z as p,S as g,o as t,c as s,g as b,p as v,t as f}from"./app-DWrmkJee.js";const h=["value"],V=m({__name:"ComboBox",props:a({lists:{},placeholder:{default:"Per Page"}},{modelValue:{required:!0},modelModifiers:{}}),emits:a(["change"],["update:modelValue"]),setup(r,{emit:l}){const n=c(r,"modelValue"),i=l;return(d,e)=>p((t(),s("select",{class:"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4","onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),onChange:e[1]||(e[1]=()=>i("change",!0))},[(t(!0),s(b,null,v(d.lists,(o,u)=>(t(),s("option",{key:u,value:o.value},f(o.label),9,h))),128))],544)),[[g,n.value]])}});export{V as _};