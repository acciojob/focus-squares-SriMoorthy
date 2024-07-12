//your JS code here. If required.
let sq1 = document.getElementById('square1')
let sq2 = document.getElementById('square2')
let sq3 = document.getElementById('square3')
sq1.addEventListener('mouseenter',() => {
	document.getElementById('square2').style.background='#6F4E37'
	document.getElementById('square3').style.background='#6F4E37'
})

sq1.addEventListener('mouseleave',() => {
	document.getElementById('square2').style.background='#E6E6FA'
	document.getElementById('square3').style.background='#E6E6FA'
})

sq2.addEventListener('mouseenter',() => {
	document.getElementById('square1').style.background='#6F4E37'
	document.getElementById('square3').style.background='#6F4E37'
})

sq2.addEventListener('mouseleave',() => {
	document.getElementById('square1').style.background='#E6E6FA'
	document.getElementById('square3').style.background='#E6E6FA'
})

sq3.addEventListener('mouseenter',() => {
	document.getElementById('square1').style.background='#6F4E37'
	document.getElementById('square2').style.background='#6F4E37'
})

sq3.addEventListener('mouseleave',() => {
	document.getElementById('square1').style.background='#E6E6FA'
	document.getElementById('square2').style.background='#E6E6FA'
})

