const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu_hidden_banner = document.querySelector(".menu-hidden-banner");
const menu_hidden_particles = document.querySelector(".menu-hidden-particles");
const menu_hidden_main = document.querySelector(".menu-hidden-main");
const menu_hidden_footer = document.querySelector(".menu-hidden-footer");
const a1_menu = document.getElementById("a1-menu");
const a2_menu = document.getElementById("a2-menu");
const a3_menu = document.getElementById("a3-menu");
const a4_menu = document.getElementById("a4-menu");



AOS.init();
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
menu_hidden_banner.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
menu_hidden_particles.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
menu_hidden_main.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
menu_hidden_footer.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}

a1_menu.addEventListener('click', ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
})
a2_menu.addEventListener('click', ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
})
a3_menu.addEventListener('click', ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
})
a4_menu.addEventListener('click', ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
})


window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

window.addEventListener('scroll', ()=>{
  let header = document.querySelector('.header');
  let section_1 = document.querySelector('.section1');
  let section_2 = document.querySelector('.section2');
  let section_3 = document.querySelector('.section3');
  let scroll_top = document.documentElement.scrollTop;
  let w = header.scrollHeight;
  let x = section_1.scrollHeight;
  let y = section_2.scrollHeight;
  let z = section_3.scrollHeight;
  console.log(y);

  if(scroll_top > (1/2)*w){
    section_1.classList.add("transition_sections");
  }
  if(scroll_top > (1/2)*w + x){
    section_2.classList.add("transition_sections");
  }
  if(scroll_top > (1/2)*w + x + y) {
    section_3.classList.add("transition_sections");
  }
})