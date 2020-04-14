const portfolioList = document.querySelector('#js-portfolio-list')
const portfolioBtn = document.querySelectorAll('.portfolio-list__btn')
const portfolioGalleryItems = document.querySelector('.portfolio-gallery__items')
const portfolioGalleryItem = document.getElementsByClassName('portfolio-gallery__item')
const wrapper = document.querySelector('.wrapper')
let portfolioGalleryItemArray = [...portfolioGalleryItem]


// filter portfolio
portfolioList.addEventListener('click', function () {
  // filter navigation
  if (event.target.classList.contains('portfolio-list__btn')) {
    // navigation remove all active
    portfolioBtn.forEach(btn => {
      console.log(btn.parentElement)
      btn.classList.remove('portfolio-list__btn--active')
      if (wrapper.classList.contains('dark-theme')) {
        btn.parentElement.classList.remove('portfolio-list__plank--active')
      }

    })
    // portfolioItems 
    // portfolioItems remove all active
    portfolioGalleryItemArray.forEach(item => {
      item.style.display = 'none'
      item.classList.remove('portfolio-gallery__item--active')
    })
    // filterItem for dataset
    if (event.target.dataset.href !== 'all') {
      let filterItem = portfolioGalleryItemArray.filter(item => event.target.dataset.href === item.dataset.item)
      // portfolioItem add active
      filterItem.forEach(item => {
        item.classList.add('portfolio-gallery__item--active')
        item.style.display = 'inline-block'
      })
    } else {
      portfolioGalleryItemArray.forEach(item => {
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

// Set dataset in localStorage
portfolioGalleryItems.addEventListener('click', function () {
  if (event.target.classList.contains('portfolio-gallery__item')) {
    localStorage.clear()
    localStorage.setItem('id', event.target.parentElement.dataset.id)
  }
})


