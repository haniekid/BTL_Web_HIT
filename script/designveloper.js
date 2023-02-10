AOS.init();

// -----------------------counter--------------------------
// const scrollTop = window.scrollY || document.documentElement.scrollTop;???????????
let count1 = document.querySelector(".count1 .number");
let count2 = document.querySelector(".count2 .number");
let count3 = document.querySelector(".count3 .number");

function count(elem, to, content, counter) {
  let count = 0;
  let time = 2000/to; // thời gian giữa 2 bước nhảy 

  let counting = setInterval(() => {
    count += 1;
    if (counter == 1) {
      if (count > to) {
        clearInterval(counting);
        elem.innerText = `0${to}+`;
      } else {
        elem.innerText = `0${count}+`;
      }
    } else {
      if (count > to) {
        clearInterval(counting);
        elem.innerText = `${to}${content}`;
      } else if (count < 10) {
        elem.innerText = `0${count}${content}`;
      } else {
        elem.innerText = `${count}${content}`;
      }
    }
  }, time);
}

count(count1, 7, "", 1);
count(count2, 250, "k", 2);
count(count3, 50, "+", 3);


var checkView = 0;
function handelCount() {
  if(window.scrollY >= 650 && checkView == 0) {
    count(count1, 7, "", 1);
    count(count2, 250, "k", 2);
    count(count3, 50, "+", 3);
    checkView++;
  }
}

document.onscroll = handelCount


// ----------------------header---------------------------
window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("fixed");
  } else {
    document.querySelector(".header").classList.remove("fixed");
  }
};

$(document).ready(function() {

  $('.fa-bars-staggered').click(function() {
    $(this).toggleClass('fa-x');
    $('.navbar').toggleClass('navbar-toggle')
    $('.header').toggleClass('header-toggle')
  })


})

// let btnMenu = document.querySelector('.menu');

// btnMenu.addEventListener('click', function(){
//   btnMenu.classList.add('fa-xmark-large');
//   btnMenu.classList.remove('fa-bars-staggered');
// })


// project section
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
var linkAbout = () => {
  location.href = "./aboutus.html";
  console.log("....")
}
// document.querySelector('.irle-direct-ourservices').addEventListener('onclick', () => {
//   location.href = "./html/our.html";
// })


//