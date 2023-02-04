AOS.init();


// ----------------------header---------------------------
window.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector(".header").classList.add("fixed");
    } else {
      document.querySelector(".header").classList.remove("fixed");
    }
  };