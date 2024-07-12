//your JS code here. If required.
let sq1 = document.getElementById('square1')
let sq2 = document.getElementById('square2')
let sq3 = document.getElementById('square3')
sq1.addEventListener('mouseenter',() => {
	document.getElementById('square2').style.background='rgb(111, 78, 55)'
	document.getElementById('square3').style.background='rgb(111, 78, 55)'
})

sq1.addEventListener('mouseleave',() => {
	document.getElementById('square2').style.background='rgb(230, 230, 250)'
	document.getElementById('square3').style.background='rgb(230, 230, 250)'
})

sq2.addEventListener('mouseenter',() => {
	document.getElementById('square1').style.background='rgb(111, 78, 55)'
	document.getElementById('square3').style.background='rgb(111, 78, 55)'
})

sq2.addEventListener('mouseleave',() => {
	document.getElementById('square1').style.background='rgb(230, 230, 250)' 
	document.getElementById('square3').style.background='rgb(230, 230, 250)' 
})

sq3.addEventListener('mouseenter',() => {
	document.getElementById('square1').style.background='rgb(111, 78, 55)'
	document.getElementById('square2').style.background='rgb(111, 78, 55)'
})

sq3.addEventListener('mouseleave',() => {
	document.getElementById('square1').style.background='rgb(230, 230, 250)'
	document.getElementById('square2').style.background='rgb(230, 230, 250)'
})

