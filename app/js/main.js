import { toggleHandler, headerMenu } from '../module/_header/header'


// DANGER HEADER
const burgerBtn = document.querySelector('#js-burger__menu')

// active Form
const formComment = document.querySelector('#js-form')
const defaultInput = document.querySelectorAll('.default__input')


// add active class in header link on all pages
// add lamp and shadow
window.addEventListener('DOMContentLoaded', function () {
  headerMenu()
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



