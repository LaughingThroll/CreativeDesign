import Swiper from 'swiper';
const jsBigBannerSliderTrack = document.querySelector('.js-big-banner__slider-track')
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



function createBigBannerItem() {
  return fetch('https://creativedesignfirebase.firebaseio.com/big-banner.json', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(response => {
      console.log(response)

      response.reverse().forEach(item => {
        jsBigBannerSliderTrack.insertAdjacentHTML('afterbegin', `
		  <div class="big-banner__slider-item swiper-slide">
		  	<div class="main-title">
		  		<h1 class="main-title__title"> ${item.title} </h1>
		  		<div class="main-title__subtitle"> ${item.subtitle} </div>
		  	</div>
		  </div>
		`)

      })
    })
    .then(() => {
      // let indexSlider = () => {
        new Swiper(bigBannerSlider, opt);
      // }
    })
  }  
export {  createBigBannerItem }








