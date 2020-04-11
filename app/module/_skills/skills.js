function helperFuncNotOnehundred() {
	const skillOurProgressLine = document.querySelectorAll('.skill-our__progress-line')
	const skillOurProgressLineArray = [...skillOurProgressLine]
	console.log(skillOurProgressLineArray)
	// TODO max-width: 99%
	skillOurProgressLineArray.forEach((item, i) => {
		if(item.style.width > '100%') {
			skillOurProgressLineArray[i].style.width = '99%'
		}
	})
}    

export {helperFuncNotOnehundred}