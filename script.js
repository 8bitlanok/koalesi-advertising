/* KOALESI ADVERTISING — INTERACTION
   Billboard locations are intentionally not listed here yet.
   Insert actual company data later when the 27+ points are confirmed.
*/
const toggle=document.querySelector(".menu-toggle"), menu=document.querySelector(".site-menu");
toggle?.addEventListener("click",()=>{
  const open=menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded",open);
});
menu?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
