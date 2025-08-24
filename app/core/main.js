


const circle = document.getElementById("circle");



const input = document.getElementById("input");

console.log(circle.offsetHeight);

console.log(circle.offsetWidth);


const change = document.getElementById("change");

change.addEventListener("click",( )=>{
	circle.style.width=input.value + "px";	

	circle.style.height=input.value + "px"  ;	


} );




