
const showPosX = document.getElementById("showRX");
const showPosY = document.getElementById("showRY");

const divPos = document.getElementById("map-cont");
const cube = document.getElementById("cube");

const axisX = document.getElementById("axisX");
const axisY = document.getElementById("axisY");

divPos.addEventListener("mousemove",(e)=>{

	const x = e.clientX;
	const y = e.clientY;

	axisX.textContent = ` ${Math.round(x)}`;
	axisY.textContent = `  ${Math.round(y)}`;

 });

cube.addEventListener("mousedown",dragStart);
cube.addEventListener("mousemove",drag);
cube.addEventListener("mouseup",dragEnd);

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xoffset = 0;
let yoffset = 0;


function dragStart(e){


	initialX = e.clientX - xoffset;
	initialY = e.clientY - yoffset;



	if(e.target === cube){
		isDragging = true;
		cube.classList.add("dragging");
	}
}

function drag(e){

	if(isDragging){
	  e.preventDefault();
		currentX = e.clientX - initialX;
		currentY = e.clientY - initialY;
	

	xoffset = currentX;
	yoffset = currentY;

	const objectPosX = document.getElementById("objectPosX");
	const objectPosY = document.getElementById("objectPosY");

	objectPosX.textContent = xoffset;
	objectPosY.textContent = yoffset;



	setTranslate(currentX,currentY,cube);

	}
}

function dragEnd(e){
 initialX = currentX;
 initialY = currentY;
	isDragging = false;
	cube.classList.remove("dragging");





}

function setTranslate(xPos,yPos,el){
	el.style.transform = `translate(${xPos}px , ${yPos}px)`;
}









