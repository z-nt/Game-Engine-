




const showPosX = document.getElementById("showRX");
const showPosY = document.getElementById("showRY");

const divPos = document.getElementById("map-cont");


divPos.addEventListener("mousemove",(e)=>{

	const x = e.clientX;
	const y = e.clientY;

	showPosX.textContent = `X:${Math.round(x)}`;
	showPosY.textContent = `Y:${Math.round(y)}`;

   });

