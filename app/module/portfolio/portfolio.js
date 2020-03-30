const portfolioList = document.querySelector('#js-portfolio-list')
const portfolioBtn = document.querySelectorAll('.portfolio-list__btn')
const portfolioGalleryItem = document.getElementsByClassName('portfolio-gallery__item')
let portfolioGalleryItemArray = [...portfolioGalleryItem]


// filter portfolio
portfolioList.addEventListener('click', function () {
  // filter navigation
  if (event.target.classList.contains('portfolio-list__btn')) {
    // navigation remove all active
    portfolioBtn.forEach(btn => {
      btn.classList.remove('portfolio-list__btn--active')
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

  }
  // navigation add active
  event.target.classList.add('portfolio-list__btn--active')
})

