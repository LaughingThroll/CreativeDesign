import Swiper from 'swiper';


const navDetBtn = document.querySelector('#js-nav-details__btn')

// jsSliderDetailsElements
const $jsSliderDetails = document.querySelector('#js-slider__details')
const jsSliderDetailsTrack = $jsSliderDetails.querySelector('#js-slider__details-track')
// itemDet 
const itemDet = document.getElementsByClassName('item-det')
let itemDetArray = [...itemDet]

const itemDetContent = document.querySelectorAll('.item-det__content')
const itemDetContentText = document.querySelectorAll('.item-det__content-text')
const itemDetImages = document.querySelectorAll('.item-det__images')

// work in textDetails
let itemDetContentTextArray = [...itemDetContentText]
let newTextArray

// new Elements in Slider
const newScreenSlider = 'js-slider__item-details--full';
const newItemElements = document.getElementsByClassName('new-item-det')

// wrapper 
const newWrapperElements = document.getElementsByClassName('new-item-wrapper')
let newWrapperEle


// sliderDetails
  let opt = {
    keyboard: {
      enabled: true,
    },
    setWrapperSize: true,
    spaceBetween: 500,
    navigation: {
      nextEl: '.nav-details__arrow--next',
      prevEl: '.nav-details__arrow--prev'
    },
  }
  let jsSliderDetails = new Swiper($jsSliderDetails, opt);
// sldierDetails
const addClass = (parent, name) => {
  parent.classList.add(name)
}

const removeClass = (parent, name) => {
  parent.classList.remove(name)
}

// this func is not imy ideal
const insertElem = (parent, child) => {
  parent.forEach((item, index) => {
    item.insertAdjacentElement('afterbegin', child[index])
  });
}

// handler sliderDet
const handlerAdd = () => {
  // style in sliderDet
  addClass($jsSliderDetails, newScreenSlider)
  insertElem(itemDetImages, itemDetContent)
  jsSliderDetails.destroy();
  // work in itemDetContentText cropText...
  newTextArray = itemDetContentTextArray.map(item => {
    (item.textContent.length >= 150) ? item.textContent = item.textContent.substring(0, 150) + '...' : item.textContent 
  })
 
  // new Items in slider 4 each itemDet in itemDetWrapper
  let quantityItem = 6
  let itemDetLength = Math.ceil(itemDet.length / quantityItem)

  for (let g = 0; g < itemDetLength; g++) {
    // create new-item-det
    let newItemEle = document.createElement('div')
    newItemEle.setAttribute('class', 'new-item-det')
    newItemEle.classList.add('swiper-slide')
    jsSliderDetailsTrack.insertAdjacentElement('afterbegin', newItemEle)
    // create wrapper for new-item-det
    newWrapperEle = document.createElement('div')
    newWrapperEle.setAttribute('class', 'new-item-wrapper')
    newItemElements[0].insertAdjacentElement('afterbegin', newWrapperEle)
  }
  // HTMLCollection in array
  // I need this variable global but before i can't declare it HAVE A PROBLEM TODO str 53 83 
  let newItemElementsArray = [...newItemElements]
  let currentIndex
  // Big circle by wrapperElements
  newItemElementsArray.forEach((item, index) => {
    // Small circle by itemDetArray TODO create revrse this func
    for(let i = currentIndex || 0; i < itemDetArray.length; i++) {
      // remember current index 
      currentIndex = i 
      // for 6 items in new-item-wrapper
      if (newWrapperElements[index].children.length !== quantityItem) {
        newWrapperElements[index].insertAdjacentElement('afterbegin', itemDetArray[currentIndex])
        itemDetArray[currentIndex].classList.remove('swiper-slide')
      } 
    }
    // update current index for next items
    currentIndex = currentIndex - (itemDetArray.length - 5)
  })
  // init newSlider
  jsSliderDetails = new Swiper($jsSliderDetails, opt);
}


const handlerRemove = () => {
  // style in sliderDet
  removeClass($jsSliderDetails, newScreenSlider)
  insertElem(itemDetArray, itemDetContent)
  jsSliderDetails.destroy();
  // itemDet in normal status
  itemDetArray.reverse().forEach(item => {
    jsSliderDetailsTrack.insertAdjacentElement('afterbegin', item)
    item.classList.add('swiper-slide')
  })
  // removing itemDetWrapper
  let newItemElementsArray = [...newItemElements]

  newItemElementsArray.forEach((item, index) => {
    item.remove()
    // TODO replace newText on OldText take in server oldText
    // newTextArray[index] = itemDetContentOldTextArray[index]
  })

   // init newSlider
   jsSliderDetails = new Swiper($jsSliderDetails, opt);
}
// event on click 'js-slider__item-details--full' 
navDetBtn.addEventListener('click', function () {
  (!$jsSliderDetails.classList.contains(newScreenSlider)) ? handlerAdd() : handlerRemove()
})
// TODO optimization fragment code  
jsSliderDetailsTrack.addEventListener('click', function (e) {
  console.log(e.target)
  if ((e.target.classList.contains('item-det__content')) 
  && ($jsSliderDetails.classList.contains(newScreenSlider))
  || (e.target.classList.contains('item-det__content-text'))
  || (e.target.classList.contains('item-det__box-date'))
  || (e.target.classList.contains('item-det__content-title'))
  || (e.target.classList.contains('item-det__content-subtitle'))) {
      handlerRemove()
    }
  })

// Get dataset in localStroge and take current item
let storageValue = localStorage.getItem('id')

if (storageValue !== 'underfind') {
  itemDetArray.forEach(item => {
    if (storageValue === item.dataset.id) {
      jsSliderDetails.slideTo(item.dataset.id, 800)
      localStorage.clear()
    }
  })
  // Scroll to item
  setTimeout(() => {
    window.scrollTo({
      top: 450, 
      behavior: 'smooth'
    })
  }, 100)
  
  
}




export { jsSliderDetails };









