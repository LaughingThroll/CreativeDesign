import {insert, asideToggle} from '../module/_blog-content/blog-content';

let formSearch = document.getElementsByClassName('blog-aside__search')
let jsBlogPost = document.querySelectorAll('.js-blog-post')
let blogAside = document.querySelector('.blog-aside')
let blogInner = document.querySelector('.blog__inner')
const search = document.getElementById('search')
const blogAsideBlockBtn = document.querySelector('.blog-aside__block-btn')
// TODO neeeeeeed  Animation and close other blocks title
// console.log(formSearch)
function breakpointOnBlog() {
  if (window.innerWidth <= 700)  {
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
 if(window.innerWidth <= 700) {
   window.removeEventListener('resize', breakpointOnBlog) 
 }


// TODO search input text-shadow
search.addEventListener('focus', function() {
  blogAsideBlockBtn.classList.add('blog-aside__block-btn--active')
})

search.addEventListener('blur', function() {
  blogAsideBlockBtn.classList.remove('blog-aside__block-btn--active')
})

// search.addEventListener('keyup', function() {
//   // console.log(formSearch)
//   const valueReg = /./g
//   const value = this.value.match(valueReg)
//   value.forEach(letter => {
//     this.value = `<span>${letter}</span>`
//   })
// })


