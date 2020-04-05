import { toggleHandler } from '../module/header/header'


// DANGER HEADER
const burgerBtn = document.querySelector('#js-burger__menu')
const headerLink = document.querySelectorAll('.header__link')
// active Form
const formComment = document.querySelector('#js-form')
const defaultInput = document.querySelectorAll('.default__input')

// add active class in header link on all pages
window.addEventListener('DOMContentLoaded', function () {
  headerLink.forEach(link => {
    // debugger
    // location currentURLpath
    if (link.getAttribute('href') === `\.${location.pathname}`) {
      link.classList.remove('header__link--active')
      link.classList.add('header__link--active')
      console.log(location.pathname)
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



