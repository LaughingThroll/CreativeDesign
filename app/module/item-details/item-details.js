import Glider from '../../../node_modules/glider-js/glider.js';

let itemDetails = new Glider(document.querySelector('.js-slider__item-details'), {
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: {
    prev: '.nav-details__arrow--prev',
    next: '.nav-details__arrow--next'
  }

});

export {itemDetails};