import { calculateOffsetScroll } from '../../js/main'

const skillsImages = [...document.getElementsByClassName('skills__images')]
const skillsContent = [...document.getElementsByClassName('skills__content')]
const skillOurProgressLine = [...document.getElementsByClassName('skill-our__progress-line')]
const widthValue = ['90%', '100%', '39%', '85%'];
window.addEventListener('scroll', function() {
	calculateOffsetScroll(skillsImages, 100, () => {
		skillsImages[0].style.animation = 'fadeInLeft 1s ease-in forwards'
	})

	calculateOffsetScroll(skillsContent, 100, () => {
		skillsContent[0].style.animation = 'fadeInRight 1s ease-in forwards'
		skillOurProgressLine.forEach((elem,i) => {
			elem.style.width = '0'
			window.requestAnimationFrame(()=> {
				elem.style.width = widthValue[i]
			})
		})
	})
})


