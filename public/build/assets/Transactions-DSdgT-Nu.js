import{d as _,r as b,o as a,c as e,a as t,t as u,n as k,b as i,u as o,f as r,i as l,w as y,l as v,F as x,y as w,g as f,p as $,Z as C,e as D}from"./app-BK2_GGeJ.js";import{E as T}from"./empty-cart-CKT4-nTG.js";import{L as B}from"./login_two-yA2lVMnP.js";import{C as F,R as N}from"./refresh-cw-DAU1ySMo.js";import{C as I}from"./Header.vue_vue_type_script_setup_true_lang-DxhpEKr4.js";import{X as L}from"./x-CiRH6G25.js";import{_ as S}from"./Frontend.vue_vue_type_script_setup_true_lang-COKe8uuY.js";/* empty css            */import"./createLucideIcon-2bTmzJkR.js";import"./Input.vue_vue_type_script_setup_true_lang-BP8tzSZz.js";import"./index-FP_i87Yg.js";import"./shadcn-BWvbMO9Q.js";import"./bundle-mjs-Dk7hgz7r.js";import"./circle-user-BwgIM_T0.js";import"./Footer.vue_vue_type_script_setup_true_lang-DmtLPlWo.js";const V={key:0,class:"rounded-lg border border-gray-200 bg-white p-3 shadow-sm"},A=w('<div class="space-y-1"><div class="w-[300px] animate-pulse"><div class="h-2 bg-gray-200 rounded-full mb-2.5"></div></div><div class="grid grid-cols-[60%_40%] items-center"><div><div class="animate-pulse"><div class="h-2 bg-gray-200 rounded-full w-1/2 mb-2.5"></div></div><h2 class="animate-pulse"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div></h2></div><div class="divide-x divide-gray-200 w-full flex items-center"><div class="grow py-3 px-4 text-center"><div class="animate-pulse"><div class="h-2 bg-gray-200 rounded-full mb-2.5"></div></div><div class="text-lg font-semibold"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div></div></div><div class="grow py-3 px-4 text-center"><div class="animate-pulse"><div class="h-2 bg-gray-200 rounded-full mb-2.5"></div></div><div class="text-lg font-semibold"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div></div></div></div></div><div class="w-full flex items-center justify-end py-4 gap-4"><div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div><div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div></div></div>',1),E=[A],P={key:1,class:"rounded-lg border border-gray-200 bg-white p-3 shadow-sm"},R={class:"space-y-1"},j={class:"flex items-center gap-3"},z={class:"font-normal text-[11px]"},M={class:"grid grid-cols-[60%_40%] items-center"},U={class:"text-xs font-semibold"},q={class:"font-semibold text-lg text-muted-foreground"},H={class:"divide-x divide-gray-200 w-full flex items-center"},J={class:"grow py-3 px-4 text-center"},K=t("p",{class:"text-xs font-medium text-muted-foreground"}," Jumlah produk ",-1),X={class:"text-lg font-semibold"},Z={class:"grow py-3 px-4 text-center"},G=t("p",{class:"text-xs font-medium text-muted-foreground"}," Total : ",-1),O={class:"text-lg font-semibold"},Q={class:"w-full py-2 flex items-center justify-between"},W={key:0,class:"flex items-center gap-2"},Y={key:1},tt={key:2,class:"flex items-center gap-2"},st={class:"flex items-center justify-end gap-2"},at=["disabled"],et={key:0},nt={key:1,class:"flex items-center gap-3"},ot=_({__name:"TransactionCard",props:{transaction:{},loading:{type:Boolean,default:!1}},emits:["cancel"],setup(p,{emit:c}){const m=p,n=c,h=s=>new Intl.NumberFormat("en-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(s),d=b(!1),g=()=>{x.put(route("frontend.transaction.cancel",m.transaction.id),{},{onStart:()=>d.value=!0,onSuccess:()=>{n("cancel",!0)},onError:s=>console.log("error"),onFinish:()=>d.value=!1})};return(s,vt)=>s.loading?(a(),e("div",V,E)):(a(),e("div",P,[t("div",R,[t("div",j,[t("p",z," Dipesan tanggal "+u(s.transaction.created_at),1)]),t("div",M,[t("div",null,[t("p",U," Unit layanan "+u(s.transaction.shop),1),t("h2",q," No "+u(s.transaction.transaction_code),1)]),t("div",H,[t("div",J,[K,t("h3",X,u(s.transaction.product_count)+" Item ",1)]),t("div",Z,[G,t("h3",O,u(h(s.transaction.total)),1)])])]),t("div",Q,[t("div",{class:k([{"bg-gray-100 text-gray-900":s.transaction.status==="batal","bg-yellow-300 text-yellow-900":s.transaction.status==="pesan","bg-green-300 text-green-900":s.transaction.status==="proses"},"capitalize focus:outline-none font-medium rounded text-xs px-4 py-2"])},[s.transaction.status==="pesan"?(a(),e("span",W,[i(o(F),{class:"w-4 h-4"}),r(" Menunggu di proses.. ")])):l("",!0),s.transaction.status==="batal"?(a(),e("span",Y,"Pesanan Dibatalkan")):l("",!0),s.transaction.status==="proses"?(a(),e("span",tt,[i(o(N),{class:"w-3 h-3 animate-spin"}),r(" Pesanan sedang di proses ")])):l("",!0)],2),t("div",st,[i(o(v),{href:s.route("frontend.transaction.detail",s.transaction.id),as:"button",class:"flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"},{default:y(()=>[i(o(I),{class:"w-5 h-5"}),r(" Detail Transaksi ")]),_:1},8,["href"]),s.transaction.status==="pesan"?(a(),e("button",{key:0,type:"button",class:"focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900",onClick:g,disabled:d.value},[d.value?(a(),e("span",et," Membatalkan Pemesanan... ")):(a(),e("span",nt,[i(o(L),{class:"w-5 h-5"}),r(" Batalkan Pemesanan ")]))],8,at)):l("",!0)])])])]))}}),it={class:"lg:container p-4 min-h-[600px]"},rt={class:"lg:w-3/4 mx-auto space-y-4"},lt=t("h2",{class:"text-lg font-semibold text-gray-900 dark:text-white"}," Daftar Transaksi ",-1),dt={key:0,class:"space-y-4"},ct=t("div",null,[t("blockquote",{class:"my-6 border-l-2 pl-6 italic text-sm"},[t("strong",null,"Keterangan :"),r(" Halaman ini adalah tampilan daftar transaksi yang anda lakukan di aplikasi kami. ")])],-1),ut={key:1,class:"w-full"},mt=["src"],gt=t("h2",{class:"scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"}," Tidak terdapat transaksi pada akun anda. ",-1),pt=t("p",{class:"text-center text-muted-foreground"}," Silahkan membuat transaksi pemesanan terlebih dahulu dengan memilih produk yang tersedia dan mengirim pesanan. ",-1),ht={key:2,class:"w-full"},ft=["src"],_t=t("h2",{class:"scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"}," Anda harus LogIn terlebih dahulu agar dapat melihat daftar transaksi anda. ",-1),bt={class:"text-center text-muted-foreground"},yt={layout:S},Et=_({...yt,__name:"Transactions",props:{transactions:{},params:{}},setup(p){const c=b(!1),m=()=>{x.reload({only:["transactions","params"],onStart:()=>c.value=!0,onFinish:()=>c.value=!1})};return(n,h)=>(a(),e(f,null,[i(o(C),{title:"Daftar Transaksi"}),t("div",it,[t("div",rt,[lt,n.transactions!==null&&n.transactions.data.length>0?(a(),e("div",dt,[ct,(a(!0),e(f,null,$(n.transactions.data,(d,g)=>(a(),D(ot,{key:g,transaction:d,loading:c.value,onCancel:m},null,8,["transaction","loading"]))),128))])):l("",!0),n.transactions!==null&&n.transactions.data.length===0?(a(),e("div",ut,[t("img",{src:o(T),alt:"empty_cart",class:"w-80 h-80 mx-auto"},null,8,mt),gt,pt])):l("",!0),n.transactions===null?(a(),e("div",ht,[t("img",{src:o(B),alt:"empty_cart",class:"w-80 h-80 mx-auto"},null,8,ft),_t,t("p",bt,[r(" Apabila belum punya akun silahkan mendaftar terlebih dahulu dengan mengklik tombol dibawah. "),i(o(v),{href:n.route("frontend.register"),as:"button",class:"mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"},{default:y(()=>[r(" Daftar Akun Baru ")]),_:1},8,["href"])])])):l("",!0)])])],64))}});export{Et as default};
