import { toggleHandler, headerMenu } from '../module/_header/header'


// DANGER HEADER
const burgerBtn = document.querySelector('#js-burger__menu')
const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper')
const headerLace = document.querySelector('.header__lace')
const headerLaceCap = document.querySelector('.header__lace-cap')
// active Form
const formComment = document.querySelector('#js-form')
const defaultInput = document.querySelectorAll('.default__input')


// add active class in header link on all pages
// add lamp and shadow
window.addEventListener('DOMContentLoaded', function () {
  headerMenu()

  if (localStorage.getItem('dark') !== null) {
    wrapper.classList.add('dark-theme')
  }
})

// show and hide headerMenu
burgerBtn.addEventListener('click', function () {
  toggleHandler(this);
  (this.classList.contains('burger__menu--active')) ? body.style.overflow = 'hidden' : body.style.overflow = 'visible'
})

headerLaceCap.addEventListener('click', () => {
  if (!headerLace.classList.contains('header__lace-cap--active')) {
    headerLace.classList.add('header__lace-cap--active')
    wrapper.classList.add('dark-theme')
    localStorage.setItem('dark', 'true')
  } else {
    headerLace.classList.remove('header__lace-cap--active')
    wrapper.classList.remove('dark-theme')
    localStorage.clear()
  }


})
// DANGER HEADER

// FORM ACTIVE
if (formComment !== null) {
  formComment.addEventListener('click', function () {
    if (event.target.classList.contains('default__input')) {
      defaultInput.forEach(item => item.classList.remove('default__input--active'))
    }
    event.target.classList.add('default__input--active')
  })
}
// FORM ACTIVE



