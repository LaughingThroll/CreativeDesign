import { toggleHandler, headerMenu } from '../module/_header/header'


// DANGER HEADER
const burgerBtn = document.querySelector('#js-burger__menu')
const body = document.querySelector('body')
// const wrapper = document.querySelector('.wrapper')
// const headerLace = window.getComputedStyle(document.querySelector('.header__lace'),':before')
// console.log(headerLace)
// active Form
const formComment = document.querySelector('#js-form')
const defaultInput = document.querySelectorAll('.default__input')

// headerLace.addEventListener('click', function() {
//   wrapper.classList.toogle('dark-theme')
// })
// add active class in header link on all pages
// add lamp and shadow
window.addEventListener('DOMContentLoaded', function () {
  headerMenu()
})

// show and hide headerMenu
burgerBtn.addEventListener('click', function () {
  toggleHandler(this);
  (this.classList.contains('burger__menu--active')) ? body.style.overflow = 'hidden' : body.style.overflow = 'visible'
})
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



