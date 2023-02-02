// ----------------------header---------------------------
window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("fixed");
  } else {
    document.querySelector(".header").classList.remove("fixed");
  }
};


// ---------------------slider-------------------------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 170,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,

});
