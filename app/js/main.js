import { toggleHandler, headerMenu } from '../module/_header/header'

//# webpack:///./app/js/main.js?43c4=main.js

// DANGER HEADER
const burgerBtn = document.querySelector('#js-burger__menu')
const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper')
const headerLace = document.getElementsByClassName('header__lace')
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
    headerLace[0].style.height = `130px`
  }
})

// show and hide headerMenu
burgerBtn.addEventListener('click', function () {
  toggleHandler(this);
  (this.classList.contains('burger__menu--active')) ? body.style.overflow = 'hidden' : body.style.overflow = 'visible'
})

headerLaceCap.addEventListener('click', () => {
  console.log(headerLace)
  if (!headerLace[0].classList.contains('header__lace--active')) {
    debugger;
    headerLace[0].classList.add('header__lace--active')
    headerLace[0].style.height = `130px`
    wrapper.classList.add('dark-theme')
    localStorage.setItem('dark', 'true')
  } else {
    headerLace[0].classList.remove('header__lace--active')
    headerLace[0].style.height = `120px`
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

function calculateOffsetScroll(elems, offsetAnim, callback = null) {
	for (let elem of elems) {
		let differenceOffset = elem.offsetTop - pageYOffset
		if (differenceOffset < offsetAnim) {
			callback()
		}
	}
}

export { calculateOffsetScroll }


