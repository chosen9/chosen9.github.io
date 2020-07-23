import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Navigation, Pagination]);



//FOR PROJECTS
const projectSwiper = new Swiper('.swiper-project', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    567: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    1020: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});



//--------------FOR REVIEWS
const reviewSwiper = new Swiper('.swiper-review', {
  loop: true,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
    567: {
      slidesPerView: 1,
    },

    1052: {
      slidesPerView: 2,
    }
  }
});