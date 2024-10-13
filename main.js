import './assets/scss/all.scss';
import 'bootstrap';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// swiper1
var swiper = new Swiper(".mySwiper1", {
  loop: true,
  navigation: {
    nextEl: ".swiper1-button-next",
    prevEl: ".swiper1-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  }
});

//swiper2
var swiper = new Swiper(".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".swiper2-button-next",
    prevEl: ".swiper2-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: true,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


console.log("Hello world!");