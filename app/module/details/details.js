import Swiper from '../../../node_modules/swiper/js/swiper.js';


const navDetBtn = document.querySelector('#js-nav-details__btn')

// jsSliderDetailsElements
const $jsSliderDetails = document.querySelector('#js-slider__details')
const jsSliderDetailsTrack = $jsSliderDetails.querySelector('#js-slider__details-track')
const itemDet = document.getElementsByClassName('item-det')
const itemDetContent = document.querySelectorAll('.item-det__content')
const itemDetImages = document.querySelectorAll('.item-det__images')

// new Elements in Slider
const newScreenSlider = 'js-slider__item-details--full';
const newWrapperElements = document.getElementsByClassName('item-det-wrapper')

let itemDetArray = [...itemDet]

// sliderDetails
let jsSliderDetails = (opt) => {
  new Swiper($jsSliderDetails, opt);
}
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
  // new Items in slider 4 each itemDet in itemDetWrapper
  let itemDetLength = Math.ceil(itemDet.length / 4)

  for (let g = 0; g < itemDetLength; g++) {
    let itemWrapperEle = document.createElement('div')
    itemWrapperEle.setAttribute('class', 'item-det-wrapper')
    jsSliderDetailsTrack.insertAdjacentElement('afterbegin', itemWrapperEle)
  }
  // HTMLCollection in array
  // I need this variable global but before i can't declare it HAVE A PROBLEM TODO str 53 83 
  let newWrapperElementsArray = [...newWrapperElements]
  let currentIndex
  // Big circle by wrapperElements
  newWrapperElementsArray.forEach(item => {
    // Small circle by itemDetArray
    for(let i = currentIndex || 0; i < itemDetArray.length; i++) {
      // remember current index 
      currentIndex = i 

      if (item.children.length !== 4) {
        item.insertAdjacentElement('afterbegin', itemDetArray[currentIndex])
        itemDetArray[currentIndex].style.height = 'auto'
      } 
    }
    // update current index for next items
    currentIndex = currentIndex - (itemDetArray.length - 5)
  })


}


const handlerRemove = () => {
  // style in sliderDet
  removeClass($jsSliderDetails, newScreenSlider)
  insertElem(itemDetArray, itemDetContent)
  // itemDet in normal status
  itemDetArray.forEach(item => {
    jsSliderDetailsTrack.insertAdjacentElement('afterbegin', item)
    item.style.height = 100 + '%'
  })
  // TODO DRY I dont know how 53 83 PROBLEM
  console.log(newWrapperElements)
  // removing itemDetWrapper
  let newWrapperElementsArray = [...newWrapperElements]
  newWrapperElementsArray.forEach(item => {
    item.remove()
  })
}
// Have more problem on this page, sadly(((
navDetBtn.addEventListener('click', function () {
  (!$jsSliderDetails.classList.contains(newScreenSlider)) ? handlerAdd() : handlerRemove()
})

export { jsSliderDetails };









