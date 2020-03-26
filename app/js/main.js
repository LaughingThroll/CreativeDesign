import {toggleHandler} from '../module/header/header'

const burgerBtn = document.querySelector('#js-burger__menu')
const headerList = document.querySelector('#js-header__list')
const headerLink = document.querySelectorAll('.header__link')

// add active class in header link
headerList.addEventListener('click', function(e) {
  if(e.target.classList.contains('header__link')) {
    headerLink.forEach(link => link.classList.remove('header__link--active'))
    e.target.classList.add('header__link--active')
  }
})
// show and hide headerMenu
burgerBtn.addEventListener('click', toggleHandler) 
