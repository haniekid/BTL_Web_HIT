AOS.init();

// ----------------------header---------------------------
window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("fixed");
  } else {
    document.querySelector(".header").classList.remove("fixed");
  }
};


// ---------------------slider-------------------------

// $(document).ready(function() {
//   $(".cards-list").slick({
  
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     draggable: true,
  
  
//     // infinite: false,
  
//     // responsive: [
//     //   {
//     //     breakpoint: 991,
//     //     settings: {
//     //       slidesToShow: 2,
//     //       slidesToScroll: 1,
//     //     }
  
//     //   }, 
//     //   {
//     //     breakpoint: 300,
//     //     settings: "unslick" // destroys slick
  
//     //   }]
//   });
// })

		







// ---------------------slider-------------------------
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   centeredSlides: true,
//   spaceBetween: 170,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop: true,

// });


// ---------------------slider-----------------------
// $('.blog__card.card').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.blog__card'
// });

// $('.blog__card').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   asNavFor: '.blog__card.card',
//   centerMode: true,
//   focusOnSelect: true,

//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 2000,

//   infinite: true,
//   draggable: true,
//   dots: true,
//   appendDots: "dot",
//   dotsClass: "flex",
// });

// $(".dot").each((i, item) => {
//   $(item).html("");
// });

// draggable: cho phép kéo chuột
// slidesToScroll: di chuyen bao nhieu ptu
// slidesToShow: so luong ptu hien 1 lan



