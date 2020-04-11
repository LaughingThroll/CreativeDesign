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
      let linkWidth = link.clientWidth
      const headerDecoreteLamp = document.createElement('span')
      headerDecoreteLamp.setAttribute('id', 'js-header__decorate-lamp')
      link.children[0].insertAdjacentElement('afterend', headerDecoreteLamp)
      headerDecoreteLamp.style.borderLeftWidth = headerDecoreteLamp.style.borderRightWidth = link.clientWidth/1.3 + 'px'
      const jsHeaderDecorateLamp = document.getElementById('js-header__decorate-lamp')
      let jsHeaderDecorateLampWidth = jsHeaderDecorateLamp.offsetWidth
      headerDecoreteLamp.style.transform = `translateX(-${(jsHeaderDecorateLampWidth - link.clientWidth)/2}px)`
    }
  })
})



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



