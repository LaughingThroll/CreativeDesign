const insert = (parent, child) => {
  parent.insertAdjacentElement('afterbegin', child)
}
function asideToggle(event) {
  if (event.target.classList.contains('blog-aside__title')) {
    console.log(event.target.nextElementSibling.style.display != 'none')
    if(event.target.nextElementSibling.style.display === 'none') {
      // console.log(e.target.nextElementSibling)
      event.target.nextElementSibling.style.display = 'flex' 
    } else {
      event.target.nextElementSibling.style.display = 'none' 
    }
  }
}

export { insert, asideToggle }


