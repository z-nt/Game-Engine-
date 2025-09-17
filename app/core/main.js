import  {circle1} from  "./logic.js";

import  {move} from "./movment.js";




const btnT = document.getElementById("btn-shape-trangle");


const btnS = document.getElementById("btn-shape-squre");



const btnCircle = document.getElementById("btn-shape-circle");


const scene = document.getElementById("scene");

let arrOfObjects=[];

function createObjectFunc(newScene,obj){
	let newObject = document.createElement("div"); 
	if(obj){
		newObject.classList=obj.name;
		newObject.style.width=obj.width + "px";
		newObject.style.height = obj.height + "px";
		newObject.style.borderRadius = obj.border_radius + "px";
	      if(newObject){
		arrOfObjects.push(newObject);
		let indexOfObject = arrOfObjects.indexOf(newObject);
		newObject.id = obj.name + indexOfObject;      
	      }	
		newScene.appendChild(newObject);
		changePos(newObject);
	}else{
	  console.log("there is no object");
	}
    console.log(newObject);		
}


btnCircle.addEventListener("click",()=>{
	createObjectFunc(scene,circle1);
});


const input = document.getElementById("input");

//console.log(circle.offsetHeight);

//console.log(circle.offsetWidth);


const change = document.getElementById("change");

change.addEventListener("click",( )=>{
	circle.style.width=input.value + "px";	
	circle.style.height=input.value + "px"  ;	
});

function changePos (obj) {
	let pluspos= 50;
 const buttons = document.querySelectorAll(".movement-button");
	if (obj) {
	buttons.forEach(btn=>{
		btn.addEventListener("click",()=>{
			if(btn.id=="up"){
			    pluspos -= 10;	
			   obj.style.top = pluspos + "px";
			}
			else if (btn.id =="bottom"){

			    pluspos += 10;	
			   obj.style.top= pluspos + "px";
			}
			else if (btn.id == "left" ) {

			    pluspos -= 10;	
			   obj.style.left= pluspos + "px";
			}

			else if (btn.id == "right" ) {

			    pluspos += 10;	
			   obj.style.left= pluspos + "px";
			}else {
			   console.log("there is no shape");
	
			}
		})
	})
}	
}






















