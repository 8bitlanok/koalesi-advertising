/* KOALESI ADVERTISING — INTERACTION + DEMO DATA
   27 lokasi di bawah INI SEPENUHNYA PLACEHOLDER.
   Ganti seluruh array billboardData saat data perusahaan tersedia. */

const billboardData=[
["01","Medan","Alamat placeholder 01","6 x 12 m"],["02","Medan","Alamat placeholder 02","6 x 12 m"],["03","Medan","Alamat placeholder 03","5 x 10 m"],
["04","Deli Serdang","Alamat placeholder 04","6 x 12 m"],["05","Deli Serdang","Alamat placeholder 05","5 x 10 m"],["06","Binjai","Alamat placeholder 06","6 x 12 m"],
["07","Tebing Tinggi","Alamat placeholder 07","5 x 10 m"],["08","Pematangsiantar","Alamat placeholder 08","6 x 12 m"],["09","Kisaran","Alamat placeholder 09","5 x 10 m"],
["10","Rantauprapat","Alamat placeholder 10","6 x 12 m"],["11","Sibolga","Alamat placeholder 11","5 x 10 m"],["12","Padangsidimpuan","Alamat placeholder 12","6 x 12 m"],
["13","Padangsidimpuan","Alamat placeholder 13","5 x 10 m"],["14","Tapanuli Selatan","Alamat placeholder 14","6 x 12 m"],["15","Tapanuli Tengah","Alamat placeholder 15","5 x 10 m"],
["16","Tarutung","Alamat placeholder 16","6 x 12 m"],["17","Balige","Alamat placeholder 17","5 x 10 m"],["18","Kabanjahe","Alamat placeholder 18","6 x 12 m"],
["19","Berastagi","Alamat placeholder 19","5 x 10 m"],["20","Pematangsiantar","Alamat placeholder 20","6 x 12 m"],["21","Medan","Alamat placeholder 21","5 x 10 m"],
["22","Binjai","Alamat placeholder 22","6 x 12 m"],["23","Langkat","Alamat placeholder 23","5 x 10 m"],["24","Serdang Bedagai","Alamat placeholder 24","6 x 12 m"],
["25","Tebing Tinggi","Alamat placeholder 25","5 x 10 m"],["26","Padangsidimpuan","Alamat placeholder 26","6 x 12 m"],["27","Mandailing Natal","Alamat placeholder 27","5 x 10 m"]
].map(([id,city,address,size])=>({id,city,address,size}));

/* MENU MOBILE: hamburger membuka/menutup navigasi. */
const toggle=document.querySelector(".menu-toggle"),menu=document.querySelector(".site-menu");
toggle?.addEventListener("click",()=>{const open=menu.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});

/* BILLBOARD FILTER: kota dibuat otomatis dari data. */
const filter=document.querySelector("#cityFilter"),list=document.querySelector("#locationList"),count=document.querySelector("#count");
[...new Set(billboardData.map(x=>x.city))].sort().forEach(city=>{const o=document.createElement("option");o.value=city;o.textContent=city;filter.appendChild(o)});

function renderLocations(selected="all"){
 const rows=selected==="all"?billboardData:billboardData.filter(x=>x.city===selected);
 list.innerHTML=rows.map(x=>`<article class="location-item" title="Placeholder: ganti dengan data asli"><i class="location-dot"></i><div><strong>${x.city}</strong><span>${x.address}</span></div><em>${x.size}</em></article>`).join("");
 count.textContent=billboardData.length;
}
renderLocations();filter?.addEventListener("change",e=>renderLocations(e.target.value));