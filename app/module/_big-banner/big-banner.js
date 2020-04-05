import Swiper from 'swiper';

let bigBannerSlider = document.querySelector('#js-big-banner__slider');
  let opt = {
    // cssMode: true,
    // effect: 'fade',
    spaceBetween: 150,
    navigation: {
      nextEl: '.big-banner__slider-arrow--next',
      prevEl: '.big-banner__slider-arrow--prev',
    },
    pagination: {
      el: '.big-banner__slider-dots',
      clickable: true,
    },
   
  }

  let indexSlider = () => {
    new Swiper(bigBannerSlider, opt);
  }
export{ indexSlider }








