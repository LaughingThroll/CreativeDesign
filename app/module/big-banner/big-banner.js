import Glider from '../../../node_modules/glider-js/glider.js';

let index = new Glider(document.querySelector('.js-slider-index'), {
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: {
    prev: '.glider-arrow--prev',
    next: '.glider-arrow--next'
  },
  dots: '.glider-dots',
 
});

export {index};




