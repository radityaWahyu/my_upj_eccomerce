import{d as u,o as a,c as n,a as e,u as s,b as r,w as i,f as c,l,i as o}from"./app-C_iBrn95.js";/* empty css            */const d="/build/assets/page_not_found-BGh4Aw-L.svg",m="/build/assets/serrver_error-CGSzh1vZ.svg",h={class:"lg:container p-4 min-h-[600px]"},_={key:0,class:"w-full text-center"},g=["src"],p=e("h2",{class:"scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"}," Halaman yang anda cari tidak ditemukan di sistem. ",-1),f=e("p",{class:"text-center text-muted-foreground"}," Silahkan kembali ke halaman depan silahkan mengklik tombol di bawah ini. ",-1),b={key:1,class:"w-full text-center"},x=["src"],k=e("h2",{class:"scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"}," Service atau fitur yang anda inginkan tidak tersedia. ",-1),y=e("p",{class:"text-center text-muted-foreground"}," Silahkan kembali ke halaman depan silahkan mengklik tombol di bawah ini. ",-1),v={key:2,class:"w-full text-center"},w=["src"],N=e("h2",{class:"scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"}," Terjadi kesalahan data di server. ",-1),S=e("p",{class:"text-center text-muted-foreground"}," Apabila pesan ini muncul silahkan menghubungi penyedia aplikasi. ",-1),H=u({__name:"Errors",props:{status_code:{}},setup(B){return(t,C)=>(a(),n("div",h,[t.status_code===404?(a(),n("div",_,[e("img",{src:s(d),alt:"empty_cart",class:"w-80 h-80 mx-auto"},null,8,g),p,f,r(s(l),{href:t.route("frontend.index"),as:"button",class:"mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"},{default:i(()=>[c(" Halaman Depan ")]),_:1},8,["href"])])):o("",!0),t.status_code===503?(a(),n("div",b,[e("img",{src:s(d),alt:"empty_cart",class:"w-80 h-80 mx-auto"},null,8,x),k,y,r(s(l),{href:t.route("frontend.index"),as:"button",class:"mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"},{default:i(()=>[c(" Halaman Depan ")]),_:1},8,["href"])])):o("",!0),t.status_code===500?(a(),n("div",v,[e("img",{src:s(m),alt:"empty_cart",class:"w-80 h-80 mx-auto"},null,8,w),N,S])):o("",!0)]))}});export{H as default};
