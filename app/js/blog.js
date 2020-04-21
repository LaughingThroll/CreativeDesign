import * as clipboard from 'clipboard-polyfill'
import { insert, asideToggle } from '../module/_blog-content/blog-content';

const formSearch = document.getElementsByClassName('blog-aside__search')
const jsBlogPost = document.querySelectorAll('.js-blog-post')
const blogAside = document.querySelector('.blog-aside')
const blogInner = document.querySelector('.blog__inner')
const search = document.getElementById('search')
const blogAsideBlockBtn = document.querySelector('.blog-aside__block-btn')
// const inputWrapper = document.getElementsByClassName('input-wrapper')
// let searchSelectionLength
// TODO neeeeeeed  Animation and close other blocks title
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

// Пока что не в состоянии реализовать данную идею,
// Идея заключалася в том что при вводе текста в инпут каждой букве дается тень которая исщезает после 2секунд
// проблема в том что я не могу реализовать нормальное удаления и видиления текста а также вместа полного инпута я получаю ограничений инпут где то около 30 симовлов
// Идея очень хорошая но знаний маловато к сожелению и еще у меня очень тяжелий код для понимания нужно как то избавлятся и не абстрактний 
// TODO search input text-shadow
// const textInput
// console.log(inputWrapper)

// Problem width repeat textInput need refactoring
// search.addEventListener('focus', function () {
//   const textInput = document.getElementById('js-input-wrapper__letters')
//   blogAsideBlockBtn.classList.add('blog-aside__block-btn--active')
//   if (textInput === null) {
//     this.insertAdjacentHTML('afterend', `<div id="js-input-wrapper__letters" class="input-wrapper__letters"></div>`)
//   }

// })

// search.addEventListener('blur', function () {
//   blogAsideBlockBtn.classList.remove('blog-aside__block-btn--active')
// })

// search.addEventListener('keydown', function () {
//   const textInput = document.getElementById('js-input-wrapper__letters')
//   const textInputLetterArray = [...textInput.children]


//   // Так как я не смог придумать что делать с текстом блока когда заходит за пределы блока то я решил огранчить сам инпут и теперь заголовки блога не должни превишать 30символов и все ради тени...Тени наше все!
//   const key = ['Enter','ArrowUp','ArrowDown', 'ArrowLeft', 'ArrowRight', 'Command', 'Meta', 'Backspace', 'End', 'Delete', 'Shift', 'CapsLock', 'Control', 'Alt', 'Insert', 'Home', 'NumLock', 'NumLockPause', 'ScrollLock']
//   if (event.altKey ||
//     event.ctrlKey ||
//     (event.key == 'Command') ||
//     (event.key == 'Meta') && event.key === '*') {
//     return false
//   } else if (((!key.includes(event.key)) ||
//     (event.shiftKey && event.key === '*')) && (this.value.length < 30)) {
//     const span = document.createElement('span');
//     if (event.keyCode == 32) {
//       span.classList.add('input-wrapper__space')
//     } else {
//       span.classList.add('input-wrapper__letter')
//     }

//     span.textContent = event.key
//     if (textInput !== null) {
//       textInput.append(span)
//       setTimeout(()=> {
//         console.log(textInputLetterArray[0])
//         textInputLetterArray[0].remove()
//       }, 2100)
//     } else {
//       return false
//     }
//   }

  // if (event.keyCode === 8 &&
  //   textInputLetterArray.length > 0) {
  //   console.log(searchSelectionLength)
  //   if ( searchSelectionLength === 1) {
  //     console.log(textInputLetterArray)
  //     textInputLetterArray[textInputLetterArray.length - searchSelectionLength].remove()
  //   } else {
  //     textInputLetterArray = textInputLetterArray.splice(textInputLetterArray.length - 1, searchSelectionLength)
  //     console.log(textInputLetterArray)
  //   }
    
  // } 
  // if (document.getSelection && event.keyCode == 8) {
  //   const selection = document.getSelection()
  //   console.log(selection.anchorNode.data)
  //   let childs = selection.selectAllChildren(textInput)
  //   console.log(childs)
  //   // selection.deleteFromDocument()
  // } 
  // else if (event.keyCode === 8 &&
  //   textInputLetter !== null &&
  //   textInputLetterArray.length > 0) {
  //   const selection = document.getSelection()
  //   selection.deleteFromDocument()
  //   console.log('delete select part')
  // }
// })
// // Its working bugs 
// // not working ctrl + z
// // selectAll + Backspace 
// search.addEventListener('cut', function () {
//   const textInput = document.getElementById('js-input-wrapper__letters')
//   textInput.remove()
// })

// search.addEventListener('paste', function (e) {
//   const textInput = document.getElementById('js-input-wrapper__letters')
//   clipboard.readText()
//     .then(text => {
//       const regLetter = /./g
//       const textArray = text.match(regLetter)
//       return textArray.join('')
//     })
//     .then(textArray => {
//       const span = document.createElement('span')
//       span.setAttribute('class', 'input-wrapper__letter')
//       span.textContent = textArray
//       if (textInput !== null) {
//         textInput.append(span)
//       } else {
//         return false
//       }
//     })
//     .catch(err => {
//       console.log('Something went wrong', err);
//     })
// })

// document.addEventListener('selectionchange', calculateSearchSelectionLength)
// function calculateSearchSelectionLength() {
//   if(search) {
//     const selection = document.getSelection().toString()
//     searchSelectionLength = selection.substring(0).length || 1
//     return searchSelectionLength
//   }
// }

