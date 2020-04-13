import { toggleHandler } from '../module/_header/header'


// DANGER HEADER
const headerList = document.getElementById('js-header__list')
const burgerBtn = document.querySelector('#js-burger__menu')
const headerLink = document.querySelectorAll('.header__link')
// active Form
const formComment = document.querySelector('#js-form')
const defaultInput = document.querySelectorAll('.default__input')


// add active class in header link on all pages
window.addEventListener('DOMContentLoaded', function () {
  headerLink.forEach(link => {
    // location currentURLpath
    if (link.getAttribute('href') === `\.${location.pathname}`) {
      link.classList.remove('header__link--active')
      link.classList.add('header__link--active')

      // DarkTHeme append LightActive in header 
      // let linkWidth = link.clientWidth
      const headerDecorate = `
      <div class="header__decorate" id="js-header__decorate">
        <span class="header__decorate-lamp"></span> 
        <span class="header__decorate-shadow header__decorate-shadow--left"></span> 
        <span class="header__decorate-shadow header__decorate-shadow--right"></span> 
        <span class="header__decorate-shadow header__decorate-shadow--down"></span> 
      </div>`
      link.insertAdjacentHTML('afterend', headerDecorate)

      const jsHeaderDecorate = document.getElementById('js-header__decorate')
      const headerDecorateLamp = document.getElementsByClassName('header__decorate-lamp')

      headerDecorateLamp[0].style.borderLeftWidth = headerDecorateLamp[0].style.borderRightWidth = link.clientWidth/1.3 + 'px'
      let jsHeaderDecorateWidth = jsHeaderDecorate.offsetWidth
      headerDecorateLamp[0].style.transform = `translateX(-${(jsHeaderDecorateWidth - link.clientWidth)/2}px)`
      // SHADOW 
      const headerDecoreteShadowLeft = document.getElementsByClassName('header__decorate-shadow--left')
      const headerDecoreteShadowRight = document.getElementsByClassName('header__decorate-shadow--right')
      const headerDecoreteShadowDown = document.getElementsByClassName('header__decorate-shadow--down')
      // Magical Mathemathical calculate
      const regNumber = /\d+/g
      // console.log(headerDecorateLamp)
      const HEIGHT_TRIANGLE_LIGHT = 100
      let catetA = +headerDecorateLamp[0].style.borderLeftWidth.match(regNumber)[0]
      let catetB = HEIGHT_TRIANGLE_LIGHT
      let hipotenuse = calculateHipotenuse(catetA, catetB)
      console.log(hipotenuse)
      console.log(sin0(catetB, hipotenuse))
      // const rotateLeft = /2
      // headerDecoreteShadowLeft[0].style.transform = `rotate(${rotateLeft.toFixed(1)}deg)`
      
      // const  = 
      // console.log(test)
      // console.log(headerDecorateLamp[0].style.borderLeftWidth)
      // jsHeaderDecorateWidth/4
    }
  })
})
function calculateHipotenuse(a, b) {
  const hipotenuseSquare = (a ** 2) + (b ** 2)
  return Math.sqrt(hipotenuseSquare)
}

function sin0(a, b) {
  return a/b
}


// show and hide headerMenu
burgerBtn.addEventListener('click', toggleHandler)
// DANGER HEADER

// FORM ACTIVE
if (formComment !== null) {
  formComment.addEventListener('click', function() {
    if (event.target.classList.contains('default__input')) {
      defaultInput.forEach(item => item.classList.remove('default__input--active'))
    }
    event.target.classList.add('default__input--active')
  })
}
// FORM ACTIVE



