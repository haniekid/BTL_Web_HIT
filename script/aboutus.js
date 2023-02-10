AOS.init();


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