function toggleHandler() {
  this.parentElement.classList.toggle('header__nav--active')
  this.classList.toggle('burger__menu--active')
}

export { toggleHandler }