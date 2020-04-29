import Swiper from 'swiper';
const jsBigBannerSliderTrack = document.querySelector('.js-big-banner__slider-track')
const bigBannerSlider = document.querySelector('#js-big-banner__slider');
const mainTitle = document.getElementsByClassName('main-title')
let swiper
let opt = {
  spaceBetween: 150,
  navigation: {
    nextEl: '.big-banner__slider-arrow--next',
    prevEl: '.big-banner__slider-arrow--prev',
  },
  pagination: {
    el: '.big-banner__slider-dots',
    clickable: true,
  },
  // on: {
  //   () {
  //
  //   }
  // }
}



function createBigBannerItem() {
  return fetch('https://creativedesignfirebase.firebaseio.com/big-banner.json', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(response => {
      response.reverse().forEach(item => {
        jsBigBannerSliderTrack.insertAdjacentHTML('afterbegin', `
		  <div class="big-banner__slider-item swiper-slide">
		  	<div class="main-title">
		  		<h1 class="main-title__title"><span> ${item.title} </span></h1>
		  		<div class="main-title__subtitle"> ${item.subtitle} </div>
		  	</div>
		  </div>
		`)
      })
    })
    .then(() => {
      swiper = new Swiper(bigBannerSlider, opt);
      // Animation item in slider
      swiper.on('slideChange', function () {
        const thisMainTitle = mainTitle[this.realIndex].children[0]
        const thisMainSubtitle = mainTitle[this.realIndex].children[1]
        thisMainTitle.style.display = 'none'
        thisMainSubtitle.style.display = 'none'

        raf(function () {
          thisMainTitle.style.display = 'block'
          thisMainSubtitle.style.display = 'block'
        })

      })
      swiper.init()
    })
}

function raf(fn) {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      fn()
    })
  })
}





export { createBigBannerItem }








