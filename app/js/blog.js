import { insert, asideToggle } from '../module/_blog-content/blog-content';

let formSearch = document.getElementsByClassName('blog-aside__search')
let jsBlogPost = document.querySelectorAll('.js-blog-post')
let blogAside = document.querySelector('.blog-aside')
let blogInner = document.querySelector('.blog__inner')
const search = document.getElementById('search')
const blogAsideBlockBtn = document.querySelector('.blog-aside__block-btn')
// TODO neeeeeeed  Animation and close other blocks title
// console.log(formSearch)
function breakpointOnBlog() {
  if (window.innerWidth <= 700) {
    insert(blogInner, formSearch)
    blogAside.addEventListener('click', asideToggle)
    jsBlogPost.forEach(item => {
      item.style.display = 'none'
    })
  } else {
    insert(blogAside, formSearch)
    blogAside.removeEventListener('click', asideToggle)
    jsBlogPost.forEach(item => {
      item.style.display = 'flex'
    })
  }
}
window.addEventListener('resize', breakpointOnBlog)
if (window.innerWidth <= 700) {
  window.removeEventListener('resize', breakpointOnBlog)
}


// TODO search input text-shadow

search.addEventListener('focus', function () {
  const textInput = document.getElementById('js-input-wrapper__letters')

  blogAsideBlockBtn.classList.add('blog-aside__block-btn--active')
  if (textInput === null) {
    this.insertAdjacentHTML('afterend', `<div id="js-input-wrapper__letters" class="input-wrapper__letters"></div>`)
  }

})


search.addEventListener('blur', function () {
  blogAsideBlockBtn.classList.remove('blog-aside__block-btn--active')
})

search.addEventListener('keydown', function () {
  const textInput = document.getElementById('js-input-wrapper__letters')

  const textInputLetter = document.getElementsByClassName('input-wrapper__letter')
  const textInputLetterArray = [...textInputLetter]



  const key = ['Enter','ArrowLeft', 'ArrowRight', 'Command', 'Meta', 'Backspace', 'End', 'Delete', 'Shift', 'CapsLock', 'Control', 'Alt', 'Insert', 'Home', 'NumLock', 'NumLockPause', 'ScrollLock']

  if (event.altKey ||
    (event.key == 'Command') ||
    (event.key == 'Meta') && event.key === '*') {
    return false
  } else if ((!key.includes(event.key)) || 
            (event.shiftKey && event.key === '*')) {
    const span = document.createElement('span')
    span.setAttribute('class', 'input-wrapper__letter')
    span.textContent = event.key
    if (textInput !== null) {
      textInput.append(span)
    } else {
      return false
    }
  } 



  if (event.keyCode === 8 &&
    textInputLetter !== null &&
    textInputLetterArray.length > 0) {
    textInputLetterArray[textInputLetterArray.length - 1].remove()
  }
})



