import Glider from '../../../node_modules/glider-js/glider.js';


const navDetBtn = document.querySelector('.js-nav-details__btn')
const jsSliderItemDet = document.querySelector('.js-slider__item-details')
const gliderTrack = jsSliderItemDet.getElementsByClassName('glider-track')
const descrContent = document.querySelectorAll('.descr-item__content')
const descrImages = document.querySelectorAll('.descr-item__images')
const descrItem = document.getElementsByClassName('descr-item')
const newWrapperNode = document.getElementsByClassName('wrapper-item')
const newScreenSlider = 'js-slider__item-details--full';



let gliderDetails = new Glider(jsSliderItemDet, {
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: {
    prev: '.nav-details__arrow--prev',
    next: '.nav-details__arrow--next'
  }
});

const addClass = (name) => {
  jsSliderItemDet.classList.add(name)
}
const removeClass = (name) => {
  jsSliderItemDet.classList.remove(name)
}

const insertElem = (parent, child) => {
  for(let i = 0; i < parent.length; i++) {
   parent[i].insertAdjacentElement('afterbegin', child[i])
  }
}  
// console.log(gliderTrack[0].childNodes)
const handlerAdd = () => {
  
  addClass(newScreenSlider)

  insertElem(descrImages, descrContent)

  let descrItemLength = Math.ceil(descrItem.length / 4)
  
  for (let g = 0; g < descrItemLength; g++) {
    let itemWrapperEle = document.createElement('div')
    itemWrapperEle.setAttribute('class', 'wrapper-item')
    gliderTrack[0].insertAdjacentElement('afterbegin', itemWrapperEle)
  }
  let arr = [...descrItem]
  console.log(arr)

    arr.forEach(child => {
      if ((!child.parentElement.classList.contains('wrapper-item')) && (newWrapperNode[0].length !== 4)) {
        newWrapperNode[1].insertAdjacentElement('afterbegin', child.slice)
       } else {
        child.parentElement.nextElementSibling
        newWrapperNode[0].insertAdjacentElement('afterbegin', child)
       }
    
    });
  }


const handlerRemove = () => {
  removeClass(newScreenSlider)
  insertElem(descrItem, descrContent)
}

navDetBtn.addEventListener('click', function () {
  (!jsSliderItemDet.classList.contains(newScreenSlider)) ? handlerAdd() : handlerRemove()
})

export { gliderDetails };









