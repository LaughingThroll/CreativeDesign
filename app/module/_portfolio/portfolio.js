import { calculateOffsetScroll } from '../../js/main'

const wrapper = document.querySelector('.wrapper')
const portfolioNav = [...document.getElementsByClassName('portfolio-nav')]
const portfolioListPlank = [...document.getElementsByClassName('portfolio-list__plank')]
const portfolioList = document.querySelector('#js-portfolio-list')
const portfolioBtn = document.querySelectorAll('.portfolio-list__btn')
const portfolioGalleryItems = document.querySelector('.portfolio-gallery__items')
const portfolioGalleryItem = [...document.getElementsByClassName('portfolio-gallery__item')]
const loadBtn = document.querySelector('.load__btn')

// console.log(loadBtn)
// filter portfolio
portfolioList.addEventListener('click', function () {
  // filter navigation
  if (event.target.classList.contains('portfolio-list__btn')) {
    // navigation remove all active
    portfolioBtn.forEach(btn => {
      btn.classList.remove('portfolio-list__btn--active')
      if (wrapper.classList.contains('dark-theme')) {
        btn.parentElement.classList.remove('portfolio-list__plank--active')
      }

    })
    // portfolioItems 
    // portfolioItems remove all active
    portfolioGalleryItem.forEach(item => {
      item.style.display = 'none'
      item.classList.remove('portfolio-gallery__item--active')
    })
    // filterItem for dataset
    if (event.target.dataset.href !== 'all') {
      let filterItem = portfolioGalleryItem.filter(item => event.target.dataset.href === item.dataset.item)
      // portfolioItem add active
      filterItem.forEach(item => {
        item.classList.add('portfolio-gallery__item--active')
        window.requestAnimationFrame(() =>{
          item.style.display = 'inline-block'
        })
    
      })
    } else {
      portfolioGalleryItem.forEach(item => {
        item.style.display = 'inline-block'
      })
    }
    // navigation add active
    event.target.classList.add('portfolio-list__btn--active')
    if (wrapper.classList.contains('dark-theme')) {
      event.target.parentElement.classList.add('portfolio-list__plank--active')
    }

  }


})
// Animation loadBtn 
loadBtn.addEventListener('click', function(e) {
  if (this.getElementsByClassName('pulse__anim').length > 0) {
    this.getElementsByClassName('pulse__anim')[0].remove()
  }

  const circle = document.createElement('div')
  circle.classList.add('pulse__anim')
  const rect = this.getBoundingClientRect()
  // 25 it's width and height circle in CSS
  circle.style.left = e.clientX - rect.left - 25 + 'px'
  circle.style.top = e.clientY - rect.top - 25 + 'px'


  this.appendChild(circle)
})

// Set dataset in localStorage
portfolioGalleryItems.addEventListener('click', function () {
  if (event.target.classList.contains('portfolio-gallery__item')) {
    localStorage.clear()
    localStorage.setItem('id', event.target.parentElement.dataset.id)
  }
})





window.addEventListener('scroll', () => {
	calculateOffsetScroll(portfolioNav, 250, () => {
		portfolioNav[0].classList.add('portfolio-nav--active-anim')
	})

	calculateOffsetScroll(portfolioListPlank, 250, () => {
    let counter = 0
    portfolioListPlank.forEach(elem => {
      counter += .5
			elem.style.animation = `fade 1s ${counter}s ease-in forwards`
    })
	})
})


