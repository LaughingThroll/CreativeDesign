function toggleHandler(btn) {
  btn.parentElement.classList.toggle('header__nav--active')
  btn.classList.toggle('burger__menu--active')

}


function headerMenu() {
  const headerLink = document.querySelectorAll('.header__link')
  headerLink.forEach(link => {
    // location currentURLpath
    if (link.getAttribute('href') === `\.${location.pathname}`) {
      link.classList.remove('header__link--active')
      link.classList.add('header__link--active')
      headerDecorate(link)
    }
  })
}


function headerDecorate(link) {
   // DarkTHeme append LightActive in header 
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
  //  calculate width lamp
   headerDecorateLamp[0].style.borderLeftWidth = headerDecorateLamp[0].style.borderRightWidth = link.clientWidth/1.3 + 'px'
   let jsHeaderDecorateWidth = jsHeaderDecorate.offsetWidth
   headerDecorateLamp[0].style.transform = `translateX(-${(jsHeaderDecorateWidth - link.clientWidth)/2}px)`
   // SHADOW  
   const headerDecoreteShadowLeft = document.getElementsByClassName('header__decorate-shadow--left')
   const headerDecoreteShadowRight = document.getElementsByClassName('header__decorate-shadow--right')
   // Magical Mathemathical calculate
   const regNumber = /\d+/g
   // Value Catets
   const HEIGHT_TRIANGLE_LIGHT = 100
   let catetA = +headerDecorateLamp[0].style.borderLeftWidth.match(regNumber)[0]
   let catetB = HEIGHT_TRIANGLE_LIGHT
   let deg = 180 / Math.PI * Math.atan2(catetA, catetB);
   // rotate on tangens degrees
   headerDecoreteShadowLeft[0].style.transform = `rotate(${deg.toFixed(2)}deg)`
   headerDecoreteShadowRight[0].style.transform = `rotate(${-deg.toFixed(2)}deg)`
}

export { toggleHandler, headerMenu }