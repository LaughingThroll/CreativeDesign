import {insert, asideToggle} from '../module/_blog-content/blog-content';

let formSearch = document.querySelector('#js-blog-aside__search')
let jsBlogPost = document.querySelectorAll('.js-blog-post')
let blogAside = document.querySelector('.blog-aside')
let blogInner = document.querySelector('.blog__inner')
// TODO neeeeeeed  Animation and close other blocks title
window.addEventListener('resize', function() {
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
})




