import{d as u,o as s,c as n,a as e,u as a,b as o,w as r,f as i,l,i as c}from"./app-Dfzx8MWc.js";/* empty css            */const d="/build/assets/page_not_found-BGh4Aw-L.svg",m="/build/assets/serrver_error-CGSzh1vZ.svg",h={class:"lg:container p-4 min-h-[600px]"},g={key:0,class:"w-full text-center"},f=["src"],_=e("h2",{class:"scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"}," Halaman yang anda cari tidak ditemukan di sistem. ",-1),b=e("p",{class:"text-center text-muted-foreground"}," Silahkan kembali ke halaman depan silahkan mengklik tombol di bawah ini. ",-1),p={key:1,class:"w-full text-center"},k=["src"],x=e("h2",{class:"scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"}," Service atau fitur yang anda inginkan tidak tersedia. ",-1),y=e("p",{class:"text-center text-muted-foreground"}," Silahkan kembali ke halaman depan silahkan mengklik tombol di bawah ini. ",-1),v={key:2,class:"w-full text-center"},w=["src"],B=e("h2",{class:"scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"}," Anda harus LogIn terlebih dahulu untuk mengakses halaman ini. ",-1),N=e("p",{class:"text-center text-muted-foreground"}," Apabila belum punya akun silahkan mendaftar terlebih dahulu dengan mengklik tombol dibawah. ",-1),V=u({__name:"Errors",props:{status_code:{}},setup(S){return(t,A)=>(s(),n("div",h,[t.status_code===404?(s(),n("div",g,[e("img",{src:a(d),alt:"empty_cart",class:"w-80 h-80 mx-auto"},null,8,f),_,b,o(a(l),{href:t.route("frontend.index"),as:"button",class:"mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"},{default:r(()=>[i(" Halaman Depan ")]),_:1},8,["href"])])):c("",!0),t.status_code===503?(s(),n("div",p,[e("img",{src:a(d),alt:"empty_cart",class:"w-80 h-80 mx-auto"},null,8,k),x,y,o(a(l),{href:t.route("frontend.index"),as:"button",class:"mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"},{default:r(()=>[i(" Halaman Depan ")]),_:1},8,["href"])])):c("",!0),t.status_code===500?(s(),n("div",v,[e("img",{src:a(m),alt:"empty_cart",class:"w-80 h-80 mx-auto"},null,8,w),B,N,o(a(l),{href:t.route("frontend.register"),as:"button",class:"mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"},{default:r(()=>[i(" Daftar Akun Baru ")]),_:1},8,["href"])])):c("",!0)]))}});export{V as default};