// import '../js/main.js'
// import * as clipboard from 'clipboard-polyfill'
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


